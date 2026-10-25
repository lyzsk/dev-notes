@echo off
rem auto-switcher-kimi.cmd - kimi 订阅撞额度自动切烧 token、到点切回订阅（开始 / 查看状态 / 停止）; 双击即用，只依赖 Node（和 auto-switcher.cmd 同目录；代码在 scripts\）
chcp 65001 >nul
title auto-switcher-kimi
node "%~dp0scripts\auto-switcher-kimi.mjs" menu
echo.
pause
