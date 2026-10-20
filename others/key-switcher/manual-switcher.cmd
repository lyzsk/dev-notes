@echo off
chcp 65001 >nul
title manual-switcher
node "%~dp0scripts\manual-switcher.mjs"
echo.
pause
