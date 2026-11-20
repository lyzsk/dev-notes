@echo off
chcp 65001 >nul
setlocal EnableExtensions EnableDelayedExpansion
rem ============================================================
rem  PC1 - workspace 项目路径：C:\admin\dev\workspace
rem ============================================================

set "ROOT=C:\admin\dev\workspace"
set "KEYDIR=C:\Users\admin\workspace-license-keys"
set "LICDIR=C:\admin\dev\workspace\license-data"
set "CLI=%ROOT%\tools\license-cli\license-cli.mjs"

set "REDIS="
for %%p in ("D:\dev\redis\redis-cli.exe" "C:\Program Files\Redis\redis-cli.exe" "C:\Redis\redis-cli.exe" "C:\Users\admin\redis\redis-cli.exe") do (
    if not defined REDIS if exist %%p set "REDIS=%%~p"
)
if not defined REDIS (
    for /f "delims=" %%i in ('where redis-cli 2^>nul') do (
        if not defined REDIS set "REDIS=%%i"
    )
)

echo ============================================
echo  PC1 Workspace License 一键准备
echo ============================================
echo.

if not exist "%CLI%" (
    echo [ERROR] 找不到签发脚本：%CLI%
    echo 请确认 PC1 已同步 workspace 项目。
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
    echo [1/4] 生成 PC1 密钥对...
    node "%CLI%" keygen --out "%KEYDIR%"
    if errorlevel 1 exit /b 1
) else (
    echo.
    echo [1/4] 已存在 PC1 密钥对，跳过生成
)

echo.
echo [2/4] 把下面这行公钥配置到 PC1 IDEA 的 WorkspaceSystemApplication 环境变量：
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

set "MACHINE="
set /p MACHINE=请输入 PC1 机器码（从 license:state 或 /api/system/license/machine-code 获取）:
if "%MACHINE%"=="" (
    echo [ERROR] 机器码不能为空
    exit /b 1
)

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
echo [4/4] 重启 PC1 的 workspace-system 后等待 60 秒，检查 license:state。
echo 看到 "status":"VALID" 即恢复；续期时序列号要大于 %SERIAL%。
echo.
if defined REDIS (
    set /p CHECK=现在检查 Redis 状态吗？(Y/N):
    if /i "!CHECK!"=="Y" "%REDIS%" GET "license:state"
) else (
    echo 未找到 redis-cli，请手动检查 license:state。
)
echo.
pause
endlocal
