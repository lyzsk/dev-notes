@echo off
chcp 65001 >nul
setlocal EnableExtensions
rem PC1 - workspace 项目路径（本机实测）：C:\Users\admin\dev\workspace

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
echo  PC1 Workspace License 状态检查
echo ============================================
echo.

if not defined REDIS (
    echo [ERROR] 未找到 redis-cli，请手动检查 license:state。
    pause
    exit /b 1
)

echo license:state:
"%REDIS%" GET "license:state"
echo.
echo login sessions:
"%REDIS%" KEYS "login:user:*"
echo.
pause
endlocal
