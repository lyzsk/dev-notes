# -*- coding: utf-8 -*-
"""cli-model.py — key-switcher 自包含：在当前交互 Claude Code CLI 里输入 /model <模型> 并回车确认。

为什么: auto-switcher-kimi 改 settings.json 只影响新开的 CLI；正在跑的 CLI 必须 /model 切模型。
订阅=k3.1-pro[1m]，按量=kimi-k3.1-pro[1m]，切换后模型名不同，缺这步 = 网关切了模型没切。
原理同 investment-tool cli_inject.py(AttachConsole + WriteConsoleInputW)，但本工具自包含、跨机可用。
用法: python cli-model.py "/model k3.1-pro[1m]"   (找不到交互 CLI 时退出码 0，只打印 NO_CLAUDE)
"""
import ctypes
import ctypes.wintypes as W
import json
import subprocess
import sys
import time

NOWIN = 0x08000000  # CREATE_NO_WINDOW
SHELLS = ("cmd.exe", "windowsterminal.exe", "powershell.exe", "pwsh.exe", "openconsole.exe")


def find_claude():
    ps = ("Get-CimInstance Win32_Process -Filter \"Name='claude.exe'\" | ForEach-Object { "
          "$pp=Get-CimInstance Win32_Process -Filter ('ProcessId='+$_.ParentProcessId); "
          "[pscustomobject]@{pid=$_.ProcessId; parent=$pp.Name; cmd=$_.CommandLine} } | ConvertTo-Json -Compress")
    out = subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                         capture_output=True, creationflags=NOWIN).stdout.decode("utf-8", "replace").strip()
    rows = json.loads(out) if out else []
    rows = rows if isinstance(rows, list) else [rows]
    rows = [r for r in rows if " -p " not in f" {r.get('cmd') or ''} " and (r.get("parent") or "").lower() in SHELLS]
    return rows[-1]["pid"] if rows else None


class KEY_EVENT_RECORD(ctypes.Structure):
    _fields_ = [("bKeyDown", W.BOOL), ("wRepeatCount", W.WORD), ("wVirtualKeyCode", W.WORD),
                ("wVirtualScanCode", W.WORD), ("UnicodeChar", W.WCHAR), ("dwControlKeyState", W.DWORD)]


class _EV(ctypes.Union):
    _fields_ = [("KeyEvent", KEY_EVENT_RECORD), ("_pad", ctypes.c_byte * 16)]


class INPUT_RECORD(ctypes.Structure):
    _fields_ = [("EventType", W.WORD), ("Event", _EV)]


def write_chars(k, h, text, enter=False):
    recs = []
    for ch in text:
        for down in (True, False):
            r = INPUT_RECORD()
            r.EventType = 1
            ke = r.Event.KeyEvent
            ke.bKeyDown, ke.wRepeatCount, ke.UnicodeChar = down, 1, ch
            if enter:
                ke.wVirtualKeyCode, ke.wVirtualScanCode = 0x0D, 0x1C
            recs.append(r)
    arr = (INPUT_RECORD * len(recs))(*recs)
    n = W.DWORD(0)
    return bool(k.WriteConsoleInputW(h, arr, len(recs), ctypes.byref(n)))


def main():
    text = " ".join((sys.argv[1] if len(sys.argv) > 1 else "").split())
    if not text:
        print("用法: cli-model.py \"/model <模型>\"")
        return 2
    pid = find_claude()
    if not pid:
        print("NO_CLAUDE 没有交互式 CLI（新开的 CLI 会直接读新 settings，无需注入）")
        return 0
    k = ctypes.WinDLL("kernel32", use_last_error=True)
    k.FreeConsole()
    if not k.AttachConsole(pid):
        print(f"ATTACH_FAIL pid={pid} err={ctypes.get_last_error()}")
        return 1
    k.CreateFileW.restype = W.HANDLE
    h = k.CreateFileW("CONIN$", 0xC0000000, 3, None, 3, 0, None)
    ok = write_chars(k, h, text)
    time.sleep(2)
    ok = write_chars(k, h, "\r", enter=True) and ok   # 提交 /model（单独一次写入才=回车提交）
    time.sleep(3)
    ok = write_chars(k, h, "\r", enter=True) and ok   # 确认 Switch model?
    print(f"{'SENT' if ok else 'WRITE_FAIL'} pid={pid} text={text}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
