@echo off
rem auto-switcher-gravitex.cmd - 自动按比例切 gravitex key（开始 / 设置比例 / 停止）; 双击即用，只依赖 Node（和 manual-switcher.cmd 同目录；代码在 scripts\）
chcp 65001 >nul
title auto-switcher-gravitex
node "%~dp0scripts\auto-switcher-gravitex.mjs" menu
echo.
pause
