@echo off
chcp 65001 >nul
setlocal

set "REDIS=D:\dev\redis\redis-cli.exe"

echo ============================================
echo  PC3 Workspace License 状态检查
echo ============================================
echo.
echo license:state:
"%REDIS%" GET "license:state"
echo.
echo login sessions:
"%REDIS%" KEYS "login:user:*"
echo.
pause
endlocal
