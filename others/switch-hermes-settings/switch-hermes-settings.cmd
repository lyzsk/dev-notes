@echo off
chcp 65001 >nul
title Hermes settings switch
node "%~dp0hs.mjs" menu
echo.
pause
