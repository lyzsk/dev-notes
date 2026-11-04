@echo off
rem auto-swicher.cmd - kimi 订阅优先，撞额度依次切 DeepSeek / kimi-api（开始 / 查看状态 / 停止）; 双击即用，只依赖 Node（和 manual-switcher.cmd 同目录；代码在 scripts\）
chcp 65001 >nul
title auto-swicher
node "%~dp0scripts\auto-swicher.mjs" menu
echo.
pause
