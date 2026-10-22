# -*- coding: utf-8 -*-
"""ccusage.py — 把 PC1 + PC3 的 ccusage daily 用量按日、按模型相加，输出成和 `ccusage daily` 一样的表格

数字全部来自两台机器 ccusage 的真实输出，只做相加，不改任何数。

用法：
  python ccusage.py --since 20261010 --until 20261019            # 现场取数(PC1 / PC3 上都能跑, 结果都是 PC1 + PC3 合并): 在 PC1 = 本机 + SSH pc3; 在 PC3 = 本机 + SSH PC1
  python ccusage.py --pc1 a.json --pc3 b.json                     # 用已存的 JSON（ccusage daily --json 的输出）
  python ccusage.py ... --md                                      # 改为输出 markdown 按日合计表
  python ccusage.py ... --breakdown                               # 表格里按模型展开（同 ccusage daily --breakdown）

依赖：两台都用 npx ccusage@latest（10/20 核定口径 20.0.37；旧版 20.0.26 会把压缩续接的重复记录多算约一倍）。
"""
import argparse, collections, json, subprocess, sys

PC1_SSH = "admin@100.126.73.77"
PC3_SSH = "pc3"                      # PC1 的 ~/.ssh/config 别名(100.79.46.1, 用户名带空格)
PC1_HOST = "DESKTOP-3JCO3I1"          # PC1 的计算机名: 在 PC1 上跑 = 本机取 PC1、SSH 取 PC3; 在别处跑 = 本机取 PC3、SSH 取 PC1
FIELDS = ("inputTokens", "outputTokens", "cacheCreationTokens", "cacheReadTokens")


def on_pc1():
    import socket
    return socket.gethostname().upper() == PC1_HOST


def fetch_local(since, until):
    cmd = f"npx -y ccusage@latest daily --since {since} --until {until} --json"
    p = subprocess.run(cmd, shell=True, capture_output=True, text=True, encoding="utf-8")
    return _json(p.stdout, p.stderr, "本机")


def fetch_ssh(host, since, until):
    remote = f"npx -y ccusage@latest daily --since {since} --until {until} --json"
    p = subprocess.run(["ssh", "-o", "BatchMode=yes", "-o", "ConnectTimeout=10", host, remote],
                       capture_output=True, text=True, encoding="utf-8")
    return _json(p.stdout, p.stderr, f"SSH {host}")


def _json(out, err, src):
    """取第一个 { 起的 JSON(npx 可能在前面打提示行); 没有 JSON 就把 stderr 报出来, 不再只报 substring not found"""
    i = (out or "").find("{")
    if i < 0:
        sys.exit(f"{src} 没拿到 ccusage JSON。stderr 末尾:\n{(err or '').strip()[-800:] or '(空)'}")
    return json.loads(out[i:])


def fetch_pc1(since, until):
    return fetch_local(since, until) if on_pc1() else fetch_ssh(PC1_SSH, since, until)


def fetch_pc3(since, until):
    return fetch_ssh(PC3_SSH, since, until) if on_pc1() else fetch_local(since, until)


def merge(*reports):
    """→ {date: {model: Counter(fields+cost)}}"""
    days = collections.defaultdict(lambda: collections.defaultdict(collections.Counter))
    for rep in reports:
        for r in rep["daily"]:
            d = r.get("date") or r.get("period")
            for m in r["modelBreakdowns"]:
                c = days[d][m["modelName"]]
                for k in FIELDS:
                    c[k] += m.get(k, 0)
                c["cost"] += m.get("cost", 0)
    return days


def total(models):
    t = collections.Counter()
    for c in models.values():
        t.update(c)
    return t


def short(model):
    return model.replace("claude-", "")


def agent(model):
    return "Claude" if model.startswith("claude") else "Other"


# ---------------- ccusage 风格表格 ----------------
COLS = [("Date", 10, "l"), ("Agent", 12, "l"), ("Models", 14, "l"), ("Input", 11, "r"), ("Output", 11, "r"),
        ("Cache\nCreate", 13, "r"), ("Cache Read", 13, "r"), ("Total Tokens", 14, "r"), ("Cost (USD)", 12, "r")]


def _line(l, m, r):
    return l + m.join("─" * w for _, w, _ in COLS) + r


def _row(cells):
    """cells: 每列一个字符串，可含 \\n 折行"""
    parts = [str(c).split("\n") for c in cells]
    h = max(len(p) for p in parts)
    out = []
    for i in range(h):
        seg = []
        for (name, w, al), p in zip(COLS, parts):
            s = p[i] if i < len(p) else ""
            s = s.ljust(w - 2) if al == "l" else s.rjust(w - 2)
            seg.append(" " + s + " ")
        out.append("│" + "│".join(seg) + "│")
    return out


def _nums(c):
    tt = sum(c[k] for k in FIELDS)
    return [f"{c['inputTokens']:,}", f"{c['outputTokens']:,}", f"{c['cacheCreationTokens']:,}",
            f"{c['cacheReadTokens']:,}", f"{tt:,}", f"${c['cost']:,.2f}"]


def render_table(days, breakdown=False):
    agents = sorted({agent(m) for ms in days.values() for m in ms})
    rows = []                                          # 先收集所有行，再按内容定列宽
    grand = collections.Counter()
    for d in sorted(days):
        ms = days[d]
        t = total(ms)
        grand.update(t)
        order = sorted(ms, key=lambda m: -ms[m]["cost"])
        models = "\n".join("- " + short(m) for m in order)
        rows.append([f"{d[:4]}\n{d[5:]}", "All", "" if breakdown else models] + _nums(t))
        if breakdown:
            for m in order:
                rows.append(["", "- " + agent(m), "- " + short(m)] + _nums(ms[m]))
    rows.append(["Total", "", ""] + _nums(grand))
    for i, (name, w, al) in enumerate(COLS):           # 列宽 = max(默认, 最长内容 + 2)
        need = max(len(x) for r in rows + [[n for n, _, _ in COLS]] for x in str(r[i]).split("\n")) + 2
        COLS[i] = (name, max(w, need), al)
    title = "Coding (Agent) CLI Usage Report - Daily"
    det = "Detected: " + ", ".join(agents)
    w = max(len(title), len(det)) + 6
    out = ["╭" + "─" * w + "╮", "│" + " " * w + "│", "│" + title.center(w) + "│", "│" + det.center(w) + "│",
           "│" + " " * w + "│", "╰" + "─" * w + "╯", "", _line("┌", "┬", "┐")]
    out += _row([n for n, _, _ in COLS])
    for r in rows:
        out.append(_line("├", "┼", "┤"))
        out += _row(r)
    out.append(_line("└", "┴", "┘"))
    return "\n".join(out)


# ---------------- markdown 按日合计 ----------------
def f(n):
    return f"{n/1e8:.2f}亿" if n >= 1e8 else (f"{n/1e4:.0f}万" if n >= 1e4 else f"{int(n)}")


def render_md(days):
    L = ["| 日期 | input | output | 写缓存 | 读缓存 | 合计 token | 费用 $ |", "|---|---|---|---|---|---|---|"]
    g = collections.Counter()
    for d in sorted(days):
        t = total(days[d]); g.update(t)
        tt = sum(t[k] for k in FIELDS)
        L.append(f"| {d[5:].replace('-', '/')} | {f(t['inputTokens'])} | {f(t['outputTokens'])} | {f(t['cacheCreationTokens'])} | "
                 f"{f(t['cacheReadTokens'])} | {f(tt)} | {t['cost']:,.0f} |")
    tt = sum(g[k] for k in FIELDS)
    L.append(f"| **合计** | **{f(g['inputTokens'])}** | **{f(g['outputTokens'])}** | **{f(g['cacheCreationTokens'])}** | "
             f"**{f(g['cacheReadTokens'])}** | **{f(tt)}** | **{g['cost']:,.0f}** |")
    return "\n".join(L)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--since"); ap.add_argument("--until")
    ap.add_argument("--pc1", help="PC1 的 ccusage daily --json 文件；不给就现场取(在 PC1 上 = 本机, 否则 SSH)")
    ap.add_argument("--pc3", help="PC3 的 ccusage daily --json 文件；不给就现场取(在 PC1 上 = SSH pc3, 否则本机)")
    ap.add_argument("--md", action="store_true"); ap.add_argument("--breakdown", action="store_true")
    a = ap.parse_args()
    if (not a.pc1 or not a.pc3) and not (a.since and a.until):
        ap.error("现场取数需要 --since 和 --until")
    pc1 = json.load(open(a.pc1, encoding="utf-8")) if a.pc1 else fetch_pc1(a.since, a.until)
    pc3 = json.load(open(a.pc3, encoding="utf-8")) if a.pc3 else fetch_pc3(a.since, a.until)
    days = merge(pc1, pc3)
    print(render_md(days) if a.md else render_table(days, a.breakdown))


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    main()
