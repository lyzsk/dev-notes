@echo off
chcp 65001 >nul
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0remote-license.ps1"
set "RC=%errorlevel%"
endlocal & exit /b %RC%
