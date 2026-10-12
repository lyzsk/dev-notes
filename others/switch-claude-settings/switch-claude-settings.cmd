@echo off
chcp 65001 >nul
title Claude settings switch
node "%~dp0cs.mjs" menu
echo.
pause
