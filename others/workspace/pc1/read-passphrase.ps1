# read-passphrase.ps1 - masked passphrase input for setup-license.cmd
# Preferred: set WS_PWFILE first, then run this file with no arguments.
#   set "WS_PWFILE=%TEMP%\xxx.tmp"
#   powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0read-passphrase.ps1"
#   -> plaintext (UTF-8 no BOM, no trailing newline) is written to WS_PWFILE; cmd reads then deletes it.
# Compat: no WS_PWFILE and no argument -> plaintext goes to stdout.
# ASCII-only on purpose: Windows PowerShell 5.1 mis-parses UTF-8-without-BOM scripts that contain non-ASCII.
param([string]$Out)
if (-not $Out) { $Out = $env:WS_PWFILE }
$secure = Read-Host -AsSecureString
if ($null -eq $secure) { exit 1 }
$bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
try {
    $plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    if ($Out) {
        [IO.File]::WriteAllText($Out, $plain, (New-Object System.Text.UTF8Encoding($false)))
    } else {
        # SAFETY: never print the passphrase to the screen; fail instead.
        [Console]::Error.WriteLine("read-passphrase: missing output path (WS_PWFILE)")
        exit 2
    }
} finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
}
