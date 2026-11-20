$ErrorActionPreference = "Stop"

$Root = "C:\admin\dev\workspace"
$KeyDir = "C:\Users\admin\workspace-license-keys"
$LicenseDir = "C:\admin\dev\workspace\license-data"
$Cli = Join-Path $Root "tools\license-cli\license-cli.mjs"
$DefaultUrl = "http://localhost:61115"

function Read-PlainSecret([string]$Prompt) {
    $secure = Read-Host $Prompt -AsSecureString
    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    try {
        return [Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    } finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
    }
}

function Show-State($state) {
    if ($null -eq $state) {
        Write-Host "状态：无"
        return
    }
    Write-Host ("状态：status={0}  licenseId={1}  serial={2}  expiresAt={3}" -f `
        $state.status, $state.licenseId, $state.serial, $state.expiresAt)
}

Write-Host "============================================"
Write-Host " PC1 Workspace License 远程管理"
Write-Host "============================================"
Write-Host ""

if (-not (Test-Path -LiteralPath $Cli)) {
    Write-Host "[ERROR] 找不到签发脚本：$Cli"
    Write-Host "请确认 PC1 已同步 workspace 项目。"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
if (-not (Test-Path -LiteralPath (Join-Path $KeyDir "license-private.key"))) {
    Write-Host "[ERROR] 找不到私钥：$(Join-Path $KeyDir 'license-private.key')"
    Write-Host "请先运行 setup-license.cmd。"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
if (-not (Test-Path -LiteralPath $LicenseDir)) {
    New-Item -ItemType Directory -Path $LicenseDir -Force | Out-Null
}

Write-Host "注意：本机私钥对应的公钥必须已配置到部署端的 LICENSE_PUBLIC_KEY。"
Write-Host ""

$base = if ([string]::IsNullOrWhiteSpace($env:WORKSPACE_URL)) { $DefaultUrl } else { $env:WORKSPACE_URL }
$inputUrl = Read-Host "部署端地址 [$base]"
if (-not [string]::IsNullOrWhiteSpace($inputUrl)) {
    $base = $inputUrl.Trim()
}
$base = $base.TrimEnd("/")

$user = Read-Host "部署端应急管理员账号"
if ([string]::IsNullOrWhiteSpace($user)) {
    Write-Host "[ERROR] 账号不能为空。"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
$password = Read-PlainSecret "部署端口令"
if ([string]::IsNullOrWhiteSpace($password)) {
    Write-Host "[ERROR] 口令不能为空。"
    Read-Host "按回车退出" | Out-Null
    exit 1
}

Write-Host ""
Write-Host "[1/3] 登录部署端..."
try {
    $loginBody = @{ username = $user; password = $password } | ConvertTo-Json -Compress
    $login = Invoke-RestMethod -Uri "$base/api/auth/login" -Method Post `
        -ContentType "application/json" -Body $loginBody
} catch {
    Write-Host "[ERROR] 登录失败：$($_.Exception.Message)"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
if ($null -eq $login -or $login.code -ne 200 -or [string]::IsNullOrWhiteSpace($login.data.token)) {
    Write-Host "[ERROR] 登录失败：$($login.msg)"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
$headers = @{ Authorization = "Bearer $($login.data.token)" }

Write-Host "[2/3] 读取部署端机器码和当前 license..."
try {
    $machine = (Invoke-RestMethod -Uri "$base/api/system/license/machine-code" -Headers $headers).data
    $state = (Invoke-RestMethod -Uri "$base/api/system/license" -Headers $headers).data
} catch {
    Write-Host "[ERROR] 读取 license 失败：$($_.Exception.Message)"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
if ([string]::IsNullOrWhiteSpace($machine)) {
    Write-Host "[ERROR] 部署端没有返回机器码。"
    Read-Host "按回车退出" | Out-Null
    exit 1
}

$serial = 0L
if ($null -ne $state.serial) {
    [void][long]::TryParse([string]$state.serial, [ref]$serial)
}
$nextSerial = $serial + 1
if ($nextSerial -lt 1) { $nextSerial = 1 }
$licenseId = $state.licenseId
if ([string]::IsNullOrWhiteSpace($licenseId)) { $licenseId = "lic-20261120" }

Write-Host ""
Write-Host "部署端：$base"
Write-Host "机器码：$machine"
Write-Host "License：$licenseId  serial=$serial  status=$($state.status)"
Write-Host "到期：$($state.expiresAt)"
Write-Host "下一次签发 serial：$nextSerial"
Write-Host ""
Write-Host "[3/3] 选择操作："
Write-Host "  1. 撤销 license，停止对调用方提供服务"
Write-Host "  2. 恢复 license，签发新的 7 天授权"
Write-Host "  3. 只查看当前状态"
$op = Read-Host "请输入 1/2/3 [3]"
if ([string]::IsNullOrWhiteSpace($op)) { $op = "3" }

if ($op -eq "1") {
    if ($state.status -eq "REVOKED") {
        Write-Host ""
        Write-Host "当前已经是 REVOKED，无需重复撤销。"
        Show-State $state
        Read-Host "按回车退出" | Out-Null
        exit 0
    }
    $passphrase = Read-PlainSecret "私钥口令"
    if ([string]::IsNullOrWhiteSpace($passphrase)) {
        Write-Host "[ERROR] 口令不能为空。"
        Read-Host "按回车退出" | Out-Null
        exit 1
    }
    $env:LICENSE_KEY_PASSPHRASE = $passphrase
    $outFile = Join-Path $LicenseDir "revoked.json"
    Write-Host ""
    Write-Host "生成 REVOKED 授权：serial=$nextSerial"
    & node $Cli revoke --key (Join-Path $KeyDir "license-private.key") `
        --machine $machine --license-id $licenseId --serial $nextSerial --out $outFile
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] license-cli 执行失败。"
        Read-Host "按回车退出" | Out-Null
        exit 1
    }
} elseif ($op -eq "2") {
    $passphrase = Read-PlainSecret "私钥口令"
    if ([string]::IsNullOrWhiteSpace($passphrase)) {
        Write-Host "[ERROR] 口令不能为空。"
        Read-Host "按回车退出" | Out-Null
        exit 1
    }
    $env:LICENSE_KEY_PASSPHRASE = $passphrase
    $outFile = Join-Path $LicenseDir "restored.json"
    Write-Host ""
    Write-Host "生成 VALID 授权：serial=$nextSerial"
    & node $Cli issue --key (Join-Path $KeyDir "license-private.key") `
        --machine $machine --license-id $licenseId --serial $nextSerial --hours 168 `
        --features "workflow,todo,org-sync" --out $outFile
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] license-cli 执行失败。"
        Read-Host "按回车退出" | Out-Null
        exit 1
    }
} else {
    Show-State $state
    Read-Host "按回车退出" | Out-Null
    exit 0
}

Write-Host ""
Write-Host "提交到部署端 /api/system/license ..."
try {
    $body = Get-Content -Raw -LiteralPath $outFile
    $result = Invoke-RestMethod -Uri "$base/api/system/license" -Method Post `
        -Headers $headers -ContentType "text/plain; charset=utf-8" -Body $body
} catch {
    Write-Host "[ERROR] 导入失败：$($_.Exception.Message)"
    Read-Host "按回车退出" | Out-Null
    exit 1
}
if ($null -eq $result -or $result.code -ne 200) {
    Write-Host "[ERROR] 导入失败：$($result.msg)"
    Read-Host "按回车退出" | Out-Null
    exit 1
}

Show-State $result.data
Write-Host ""
Write-Host "已完成。撤销后调用方业务接口应返回 503；恢复后应重新可用。"
Read-Host "按回车退出" | Out-Null
