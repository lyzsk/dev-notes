@echo off
chcp 65001 >nul
setlocal EnableExtensions

set "ROOT=D:\dev\workspace"
set "KEYDIR=C:\Users\Sichu Huang\workspace-license-keys"
set "LICDIR=D:\dev\workspace\license-data"
set "CLI=%ROOT%\tools\license-cli\license-cli.mjs"
set "REDIS=D:\dev\redis\redis-cli.exe"

echo ============================================
echo  PC3 Workspace License 一键准备
echo ============================================
echo.

if not exist "%CLI%" (
    echo [ERROR] 找不到签发脚本：%CLI%
    exit /b 1
)
if not exist "%LICDIR%" mkdir "%LICDIR%"

set /p PASSPHRASE=请输入私钥口令（不要使用登录密码）:
if "%PASSPHRASE%"=="" (
    echo [ERROR] 口令不能为空
    exit /b 1
)
set "LICENSE_KEY_PASSPHRASE=%PASSPHRASE%"

if not exist "%KEYDIR%\license-private.key" (
    echo.
    echo [1/4] 生成密钥对...
    node "%CLI%" keygen --out "%KEYDIR%"
    if errorlevel 1 exit /b 1
) else (
    echo.
    echo [1/4] 已存在密钥对，跳过生成
)

echo.
echo [2/4] 把下面这行公钥配置到 IDEA 的 WorkspaceSystemApplication 环境变量：
echo.
echo   LICENSE_PUBLIC_KEY=
type "%KEYDIR%\license-public.key"
echo.
echo 同时配置：
echo   LICENSE_FILE=%LICDIR%\license.json
echo   LICENSE_STATE_FILE=%LICDIR%\license.state.json
echo.
echo 公钥或文件路径变更后，必须重启 workspace-system。
echo.
pause

set "MACHINE=sha256:c6c746409924968bd12edcc847d0616ee13cc017b1eaa4c9e9c8aaed06ab7b4a"
set /p INPUT_MACHINE=机器码（直接回车使用当前值）:
if not "%INPUT_MACHINE%"=="" set "MACHINE=%INPUT_MACHINE%"

set "LICENSE_ID=lic-20261120"
set /p INPUT_ID=License ID（回车使用 %LICENSE_ID%）:
if not "%INPUT_ID%"=="" set "LICENSE_ID=%INPUT_ID%"

set "SUGGEST_SERIAL=1"
if defined REDIS if exist "%REDIS%" (
    set "REDIS_CLI=%REDIS%"
    powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$c=$env:REDIS_CLI; try { $raw=& $c GET license:state; if ($raw) { $state=$raw | ConvertFrom-Json; $serial=[int]$state.serial; if ($serial -ge 1) { Write-Output ($serial+1) } else { Write-Output 1 } } else { Write-Output 1 } } catch { Write-Output 1 }" > "%TEMP%\workspace-license-next-serial.txt"
    set /p SUGGEST_SERIAL=<"%TEMP%\workspace-license-next-serial.txt"
    del /q "%TEMP%\workspace-license-next-serial.txt" >nul 2>&1
)
if "%SUGGEST_SERIAL%"=="" set "SUGGEST_SERIAL=1"
set "SERIAL=%SUGGEST_SERIAL%"
set /p INPUT_SERIAL=序列号（当前建议 %SERIAL%；首次部署用 1；回车使用建议值）:
if not "%INPUT_SERIAL%"=="" set "SERIAL=%INPUT_SERIAL%"

echo.
echo [3/4] 签发 7 天 License...
node "%CLI%" issue --key "%KEYDIR%\license-private.key" --machine "%MACHINE%" --license-id "%LICENSE_ID%" --serial %SERIAL% --hours 168 --features workflow,todo,org-sync --out "%LICDIR%\license.json"
if errorlevel 1 exit /b 1

echo.
echo [4/4] 重启 workspace-system 后等待 60 秒，检查：
echo   "%REDIS%" GET "license:state"
echo 看到 "status":"VALID" 即恢复；当天再签发时序列号要大于 %SERIAL%。
echo.
set /p CHECK=现在检查 Redis 状态吗？(Y/N):
if /i "%CHECK%"=="Y" (
    "%REDIS%" GET "license:state"
)
echo.
pause
endlocal
