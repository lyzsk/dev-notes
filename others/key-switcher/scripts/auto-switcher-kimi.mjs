// auto-switcher-kimi.mjs — kimi 订阅撞额度自动切烧 token、到点切回订阅（2026-10-25 用户定；只依赖 Node）
// 目录: key-switcher/ 根 = auto-switcher-kimi.cmd + profiles-claude.json；scripts/ = 代码；data/ = 运行数据(.gitignore)
//
// 做什么: 默认优先用 kimi 订阅 kimi-code（kimi-code-api-key.txt，有 5 小时窗口和 7 天两种用量上限）；撞上限后
//   自动切到烧 token 的 kimi-api（kimi-api-key.txt），到预计恢复时刻再自动切回订阅。两次切换都改 ~/.claude/settings.json。
//   10/25 用户定: 只管 kimi-code ↔ kimi-api 两套，kimi-code-xhj 不参与（当前默认是 xhj 时也不动）。
//   预计恢复 = 撞上限时刻 + 5 小时 / + 7 天（kimi 返回里带了重置时间就用返回的）；到点探测仍受限就按 30分/1时/2时/4时 往后推。
// 怎么判定撞上限（两步，探测请求只在怀疑时发）:
//   1) 常驻无窗口进程（watch）用 fs.watch 监听 %USERPROFILE%\.claude\projects\**\*.jsonl 的新写入，去抖 2.5 秒后只读增量，
//      找真实的 API 报错（isApiErrorMessage=true，如 "403 You've reached your 5-hour usage limit"）；
//      fs.watch 可能漏事件 → 另外每 30 分钟全量增量扫一次兜底（只读本地文件，零网络）。
//      日志里看不出是哪套配置报的（也可能是别的网关、别的 kimi key），所以只当"怀疑"；
//   2) 怀疑时对订阅 key 发一个 1 token 的探测请求（订阅端点 /v1/messages），返回额度错误才算撞上限；
//      到预计恢复时刻也用同样的探测确认真恢复了才切回。同一把 key 30 分钟内最多探测一次（probe_cooldown_minutes）。
// 只管这两套: 当前默认配置是 kimi-code / kimi-api 时才动；是 gravitex / glm / kimi-code-xhj 时只记录日志里的报错，不探测不切换。
//   在 kimi-api 上（不管是本工具切的还是手动选的）订阅一恢复就切回订阅。切换只走 cs.mjs 的 setDefault（改 ~/.claude/settings.json）。
// 切回订阅: 切到 kimi-api 后，按预计恢复时刻注册一个一次性计划任务 auto-switcher-kimi-return（到点跑 run → 探测 → 通了切回 kimi-code，
//   不通按 30/60/120/240 分钟再注册下一次）；常驻进程里同一时刻也有 setTimeout，计划任务兜底（进程挂了 / 重启后不丢，时刻存在 state 里）。
// 怎么用: 双击 auto-switcher-kimi.cmd → 1 开始 / 2 查看状态 / 3 停止。双击本身不会切 key。
//   1 开始 = 注册计划任务 auto-switcher-kimi（登录时 + 每天 daily_check_time 各拉起一次常驻进程；已在跑就什么都不做）并立即拉起；
//   3 停止 = 删掉 auto-switcher-kimi 和 auto-switcher-kimi-return 两个计划任务并结束常驻进程。
//   计划任务都用 wscript //B + scripts/auto-switcher-kimi-run.vbs 无窗口启动，不弹黑框。
// 命令: node scripts/auto-switcher-kimi.mjs menu | watch [--dry-run] | run [--dry-run] | status | start | stop | probe [配置名]
//   测试用: --now "2026-10-25 23:00"（假装现在是这个时刻）、--as <配置名>（仅 --dry-run，假装当前默认是它）、--exit-after <秒>（watch 跑这么久自动退出）、
//   --dry-run 不写 state / 日志、不切换、不注册计划任务（只打印"会注册 / 会删除"）；
//   环境变量 KIMI_FAKE_PROBE='{"kimi-code":"5h"}'（ok / 5h / 7d / error / unknown），不发请求，探测结果用这个、
//   KIMI_SWITCHER_DATA（换数据目录）、KIMI_PROJECTS_DIR（换会话日志目录）、CS_SETTINGS（cs.mjs 的替身 settings 路径）
// 文件: 根/auto-switcher-kimi-config.json（可选，没有就用下面的默认值）;
//   data/auto-switcher-kimi-state.json（撞上限时间 / 预计恢复 / 扫描位置 / 下次切回任务时刻）、-log.csv（每次撞上限、探测、切换一行）、
//   -watch.log（常驻进程输出，超 1MB 清空重写）、-watch.pid（常驻进程单实例）、.lock（每次判定互斥）
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { currentDefault, setDefault } from "./cs.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SELF = fileURLToPath(import.meta.url);
const ROOT = path.dirname(HERE); // key-switcher 根（配置在这里）
const DATA = process.env.KIMI_SWITCHER_DATA || path.join(ROOT, "data"); // 运行数据
fs.mkdirSync(DATA, { recursive: true });
const CONFIG = path.join(ROOT, "auto-switcher-kimi-config.json");
const STATE = path.join(DATA, "auto-switcher-kimi-state.json");
const LOG = path.join(DATA, "auto-switcher-kimi-log.csv");
const LOCK = path.join(DATA, "auto-switcher-kimi.lock");
const PIDF = path.join(DATA, "auto-switcher-kimi-watch.pid");
const WLOG = path.join(DATA, "auto-switcher-kimi-watch.log");
const VBS = path.join(HERE, "auto-switcher-kimi-run.vbs");
const PROJECTS =
    process.env.KIMI_PROJECTS_DIR ||
    path.join(os.homedir(), ".claude", "projects");
const TASK = process.env.KK_TASK || "auto-switcher-kimi"; // 常驻进程拉起任务（测试时可换名）
const RETURN_TASK = TASK + "-return"; // 一次性: 到预计恢复时刻探测并切回订阅
const GRAVITEX_TASK = "auto-switcher"; // 只读它的状态，用来提示两个同时开会打架
const H = 3600_000;

const DEFAULT_CONFIG = {
    subs: ["kimi-code"], // 订阅（10/25 用户定只用 kimi-code；写多个 = 按顺序轮，都撞上限才用 api）
    api: "kimi-api", // 订阅撞上限时切到它（烧 token）
    debounce_seconds: 2.5, // 日志有新写入后等这么久再读（会话写日志很频繁，攒一批再处理）
    fallback_scan_minutes: 30, // fs.watch 漏事件的兜底：每隔这么久全量增量扫一次（只读本地）
    daily_check_time: "08:30", // 每天这个时刻检查常驻进程，不在就拉起（另外登录时也拉起）
    probe_cooldown_minutes: 30, // 同一把 key 两次探测至少隔这么久
    retry_minutes: [30, 60, 120, 240], // 到了预计恢复时刻探测仍受限 → 依次往后推这么多分钟再探（最后一个一直重复）
    first_scan_hours: 24, // 第一次运行往回看多少小时的日志
};

// ---------------- 配置 / 状态 ----------------
const readJson = (f, dflt) => {
    try {
        return JSON.parse(fs.readFileSync(f, "utf8").replace(/^﻿/, ""));
    } catch {
        return dflt;
    }
};
const loadConfig = () => ({ ...DEFAULT_CONFIG, ...readJson(CONFIG, {}) });
const argv = process.argv.slice(2);
const DRY = argv.includes("--dry-run");
// --dry-run: 状态只留在内存里（常驻 watch --dry-run 也能连续判定），不写文件
let memState = null;
const loadState = () => (DRY && memState ? memState : readJson(STATE, {}));
const saveState = (s) =>
    DRY ? (memState = s) : fs.writeFileSync(STATE, JSON.stringify(s, null, 2));
const flag = (name) => {
    const i = argv.indexOf(name);
    return i >= 0 ? argv[i + 1] : undefined;
};
const FAKE_NOW = flag("--now") ? Date.parse(flag("--now").replace(" ", "T")) : null;
const nowMs = () => FAKE_NOW ?? Date.now();
const fmt = (ms) => (ms ? new Date(ms).toLocaleString("sv-SE").slice(0, 19) : "");
const ms = (s) => (s ? Date.parse(String(s).replace(" ", "T")) : 0); // 本地时间字符串 → 毫秒
const short = (s) => (s ? String(s).slice(5, 16) : "?"); // "10-25 17:30"
const errln = (...a) => console.error(...a);
const scrub = (s) =>
    String(s ?? "")
        .replace(/sk-[A-Za-z0-9_-]{6,}/g, "sk-***")
        .replace(/\s+/g, " ")
        .slice(0, 160);
function log(row) {
    const head = !fs.existsSync(LOG)
        ? "﻿time,current,action,key,kind,hit_at,reset_at,target,note\n"
        : "";
    const q = (x) => `"${String(x ?? "").replace(/"/g, '""')}"`;
    fs.appendFileSync(LOG, head + row.map(q).join(",") + "\n");
}
async function withLock(fn) {
    // 手动"现在先跑一次"和计划任务撞上时，后来的等前一个跑完（最多 30 秒）；锁超过 5 分钟视为残留
    for (let i = 0; i < 60; i++) {
        try {
            fs.writeFileSync(LOCK, String(process.pid), { flag: "wx" });
            break;
        } catch {
            try {
                if (Date.now() - fs.statSync(LOCK).mtimeMs > 300_000)
                    fs.rmSync(LOCK, { force: true });
            } catch {}
            if (i === 59) {
                errln("另一个 auto-switcher-kimi 正在运行，本次跳过");
                return;
            }
            await new Promise((r) => setTimeout(r, 500));
        }
    }
    try {
        return await fn();
    } finally {
        fs.rmSync(LOCK, { force: true });
    }
}

// ---------------- 配置名 / key ----------------
function keyDir() {
    if (process.env.CLAUDE_KEY_DIR) return process.env.CLAUDE_KEY_DIR;
    let d = path.dirname(ROOT);
    for (let i = 0; i < 5; i++) {
        try {
            if (
                fs
                    .readdirSync(d)
                    .some((f) => /-api-key(-[a-z0-9]+)?\.txt$/i.test(f))
            )
                return d;
        } catch {}
        const up = path.dirname(d);
        if (up === d) break;
        d = up;
    }
    return path.dirname(ROOT);
}
const profiles = () =>
    readJson(path.join(ROOT, "profiles-claude.json"), { profiles: {} })
        .profiles;
const isKimi = (cfg, n) => n === cfg.api || cfg.subs.includes(n);
const current = () => {
    if (argv.includes("--dry-run") && flag("--as")) return flag("--as");
    try {
        return currentDefault() || "";
    } catch {
        return "";
    }
}; // settings.json 坏了也不崩

// ---------------- 额度报错识别 ----------------
// kimi 实测原文(10/08~10/18 会话日志): "403 You've reached your 5-hour usage limit. Your quota will reset when the current 5-hour window ends. ... kimi.com/membership/..."
// 7 天上限的原文还没见过，按 week / 7-day / 7 天 等关键词认；认不出窗口的额度报错按 5 小时处理
// [1308] 开头的"已达到 5 小时的使用上限"是 glm(智谱) 的，排除
const LIMIT_RE =
    /usage limit|reached your .{0,30}limit|quota will reset|kimi\.com\/membership|使用上限|额度已用/i;
const isLimitText = (t) => LIMIT_RE.test(t) && !/\[1308\]/.test(t);
const kindOf = (t) =>
    /week|7[- ]?day|7 ?天|每周|本周|周额度/i.test(t) ? "7d" : "5h";
const KIND_TEXT = { "5h": "5 小时", "7d": "7 天" };
const KIND_MS = { "5h": 5 * H, "7d": 7 * 24 * H };
function resetFromText(t, from) {
    // 报错里带了重置时间（如 "将在 2026-10-07 21:39:47 重置" / ISO 时间）就用它；不在合理范围内的不认
    const m =
        /(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}(?::\d{2})?)(?:\.\d+)?(Z|[+-]\d{2}:?\d{2})?/.exec(
            t || "",
        );
    if (!m) return 0;
    const x = Date.parse(`${m[1]}T${m[2]}${m[3] || ""}`);
    return x > from - 60_000 && x < from + 8 * 24 * H ? x : 0;
}
function resetFromHeaders(h, from) {
    // retry-after（秒或 HTTP 日期）/ x-ratelimit-reset 类（秒、epoch 秒、epoch 毫秒、ISO）
    for (const [k, v] of h) {
        if (!/retry-after|ratelimit.*reset|reset.*at/i.test(k)) continue;
        const n = Number(v);
        let x = 0;
        if (Number.isFinite(n))
            x = n > 1e12 ? n : n > 1e9 ? n * 1000 : from + n * 1000;
        else x = Date.parse(v) || 0;
        if (x > from && x < from + 8 * 24 * H) return x;
    }
    return 0;
}

// ---------------- 扫会话日志（只读新增部分） ----------------
function jsonlFiles() {
    // projects/<项目>/<会话>.jsonl 和 projects/<项目>/<会话>/subagents/*.jsonl
    const out = [];
    const walk = (d, depth) => {
        let ents;
        try {
            ents = fs.readdirSync(d, { withFileTypes: true });
        } catch {
            return;
        }
        for (const e of ents) {
            const p = path.join(d, e.name);
            if (e.isFile() && e.name.endsWith(".jsonl")) out.push(p);
            else if (e.isDirectory() && depth < 3 && e.name !== "memory")
                walk(p, depth + 1);
        }
    };
    walk(PROJECTS, 0);
    return out;
}
function readNewLines(f, from, size, onLine) {
    // 从 from 字节读到 size，只处理完整的行；返回读到的最后一个换行之后的位置
    const fd = fs.openSync(f, "r");
    try {
        let pos = from,
            carry = Buffer.alloc(0);
        const buf = Buffer.alloc(8 << 20);
        while (pos < size) {
            const n = fs.readSync(fd, buf, 0, Math.min(buf.length, size - pos), pos);
            if (n <= 0) break;
            pos += n;
            const chunk = Buffer.concat([carry, buf.subarray(0, n)]);
            const cut = chunk.lastIndexOf(10);
            if (cut < 0) {
                carry = chunk;
                continue;
            }
            for (const l of chunk.subarray(0, cut).toString("utf8").split("\n"))
                onLine(l);
            carry = chunk.subarray(cut + 1);
        }
        return pos - carry.length;
    } finally {
        fs.closeSync(fd);
    }
}
export function scanLogs(cfg, st, only = null) {
    // 返回上次扫描之后新出现的额度类报错 [{t, kind, reset, text, file}]，并更新 st.scan（扫描位置）
    // only = fs.watch 报来有新写入的文件（只读这几个的增量）；不给 = 全量增量扫（遍历全部 jsonl，按 mtime 跳过没动过的）
    const sc = st.scan || {};
    const fullAt = sc.full_at || sc.at; // 上次全量扫的时刻（watch 的局部扫不推进它，免得全量扫跳过 watch 漏掉的文件）
    const since = fullAt
        ? ms(fullAt) - 15 * 60_000
        : nowMs() - cfg.first_scan_hours * H;
    const offsets = only ? { ...sc.offsets } : {},
        seen = new Set(sc.seen || []),
        events = [];
    for (const f of only || jsonlFiles()) {
        let stt;
        try {
            stt = fs.statSync(f);
        } catch {
            continue;
        }
        if (stt.mtimeMs < since) {
            if (sc.offsets?.[f] != null && stt.mtimeMs > nowMs() - 8 * 24 * H)
                offsets[f] = sc.offsets[f];
            continue;
        }
        let off = sc.offsets?.[f] ?? 0;
        if (off > stt.size) off = 0; // 文件被截断/重写
        try {
            offsets[f] = readNewLines(f, off, stt.size, (l) => {
                if (!l.includes('"isApiErrorMessage":true')) return;
                let o;
                try {
                    o = JSON.parse(l);
                } catch {
                    return;
                }
                const t = Date.parse(o.timestamp);
                if (!(t >= since) || seen.has(o.uuid)) return;
                const c = o.message?.content;
                const text = Array.isArray(c)
                    ? c.map((x) => x?.text || "").join(" ")
                    : String(c ?? "");
                if (!isLimitText(text)) return;
                seen.add(o.uuid);
                events.push({
                    t,
                    kind: kindOf(text),
                    reset: resetFromText(text, t),
                    text: scrub(text),
                    file: path.basename(f),
                });
            });
        } catch (e) {
            errln(`读日志失败 ${path.basename(f)}: ${e.message}`);
            offsets[f] = off;
        }
    }
    st.scan = {
        full_at: only ? fullAt || fmt(nowMs()) : fmt(nowMs()),
        at: fmt(nowMs()),
        offsets,
        seen: [...seen].slice(-300),
    };
    return events.sort((a, b) => a.t - b.t);
}

// ---------------- 探测（1 token 请求订阅端点） ----------------
export async function probe(name) {
    // 返回 {result: ok | 5h | 7d | error | unknown, status, reset(毫秒，0=没给), msg}
    if (process.env.KIMI_FAKE_PROBE) {
        const r = JSON.parse(process.env.KIMI_FAKE_PROBE)[name] ?? "ok";
        return { result: r, status: "fake", reset: 0, msg: "（模拟探测，没发请求）" };
    }
    const p = profiles()[name];
    if (!p) return { result: "error", status: "", reset: 0, msg: `没有配置 ${name}` };
    const kf = path.join(keyDir(), p.keyFile);
    if (!fs.existsSync(kf))
        return { result: "error", status: "", reset: 0, msg: `缺 key 文件 ${p.keyFile}` };
    const url =
        p.env.ANTHROPIC_BASE_URL.replace(/\/+$/, "") + "/v1/messages";
    const model = String(p.env.ANTHROPIC_MODEL || "").replace(/\[[^\]]*\]$/, "");
    const t0 = nowMs();
    try {
        const r = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${fs.readFileSync(kf, "utf8").trim()}`,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
                "User-Agent": "auto-switcher-kimi/1.0",
            },
            body: JSON.stringify({
                model,
                max_tokens: 1,
                messages: [{ role: "user", content: "hi" }],
            }),
            signal: AbortSignal.timeout(30000),
        });
        const body = await r.text();
        const reset = resetFromText(body, t0) || resetFromHeaders(r.headers, t0);
        if (r.ok) return { result: "ok", status: r.status, reset: 0, msg: "" };
        if (isLimitText(body) || r.status === 429)
            return { result: kindOf(body), status: r.status, reset, msg: scrub(body) };
        return {
            result: r.status === 401 || r.status === 403 ? "error" : "unknown",
            status: r.status,
            reset: 0,
            msg: scrub(body),
        };
    } catch (e) {
        return { result: "unknown", status: "", reset: 0, msg: scrub(e.message) };
    }
}

// ---------------- 每把订阅的额度记录 ----------------
// st.keys[名] = { limit_5h/limit_7d: {hit_at, reset_at, source, recovered_at?}, last_probe: {time, result, status, msg}, last_ok_at, next_probe_at, retries }
const keyState = (st, n) => ((st.keys ||= {})[n] ||= {});
const activeLimits = (k) =>
    ["5h", "7d"].map((x) => k["limit_" + x]).filter((l) => l && !l.recovered_at);
const resetAt = (k) => Math.max(0, ...activeLimits(k).map((l) => ms(l.reset_at)));
const limitedNow = (k, t) => activeLimits(k).length > 0 && resetAt(k) > t;
const probedOkRecently = (cfg, k, t) =>
    k.last_probe?.result === "ok" &&
    t - ms(k.last_probe.time) < cfg.probe_cooldown_minutes * 60_000;
// onSchedule=false: 只看冷却不看排好的下次探测时刻（当前就在用这把订阅时用：可能是用户知道它已恢复、手动切回来的）
const canProbe = (cfg, k, t, onSchedule = true) =>
    (!k.last_probe ||
        t - ms(k.last_probe.time) >= cfg.probe_cooldown_minutes * 60_000) &&
    (!onSchedule || !k.next_probe_at || ms(k.next_probe_at) <= t);
const retryDelay = (cfg, i) =>
    cfg.retry_minutes[Math.min(i, cfg.retry_minutes.length - 1)] * 60_000;

async function probeAndRecord(cfg, st, n, events, ctx) {
    // 探测一把订阅并把结果记进 state / 日志；返回 true = 现在能用
    const k = keyState(st, n),
        t = nowMs(),
        pr = await probe(n);
    k.last_probe = { time: fmt(t), result: pr.result, status: pr.status, msg: pr.msg };
    console.log(
        `  探测 ${n}: ${pr.result}${pr.status ? ` (HTTP ${pr.status})` : ""}${pr.msg ? ` ${pr.msg}` : ""}`,
    );
    if (pr.result === "ok") {
        for (const l of activeLimits(k)) l.recovered_at = fmt(t);
        k.last_ok_at = fmt(t);
        delete k.next_probe_at;
        delete k.retries;
        ctx.log([fmt(t), ctx.cur, "probe_ok", n, "", "", "", "", ""]);
        return true;
    }
    if (pr.result !== "5h" && pr.result !== "7d") {
        // 网络错误 / key 无效等：不算撞上限，按重试间隔晚点再探（间隔逐次拉长，免得一直探）
        k.next_probe_at = fmt(t + retryDelay(cfg, k.retries || 0));
        k.retries = (k.retries || 0) + 1;
        ctx.log([fmt(t), ctx.cur, "probe_" + pr.result, n, "", "", "", "", pr.msg]);
        return false;
    }
    const kind = pr.result,
        old = k["limit_" + kind];
    if (old && !old.recovered_at) {
        // 早就记过这次上限：到了预计恢复还受限 → 往后推（返回里带了重置时间就用它）
        const next = pr.reset || t + retryDelay(cfg, k.retries || 0);
        if (ms(old.reset_at) <= t) {
            k.retries = (k.retries || 0) + 1;
            old.reset_at = fmt(next);
            old.source = pr.reset ? "kimi 返回" : "到点仍受限，往后推";
        } else if (pr.reset) old.reset_at = fmt(pr.reset);
        k.next_probe_at = old.reset_at;
        ctx.log([fmt(t), ctx.cur, "still_" + kind, n, kind, old.hit_at, old.reset_at, "", pr.msg]);
        return false;
    }
    // 新撞上限：撞的时刻 = 日志里这次之后第一条同类报错的时间（晚于这把 key 上次探测正常），没有就用现在
    const ev = events.find((e) => e.kind === kind && e.t > ms(k.last_ok_at));
    const hit = ev ? ev.t : t;
    const reset = pr.reset || ev?.reset || hit + KIND_MS[kind];
    k["limit_" + kind] = {
        hit_at: fmt(hit),
        // 探测刚确认受限，推算出的恢复时刻却已过（日志里的报错太早）→ 至少等一个重试间隔；kimi 当场返回的重置时间照用
        reset_at: fmt(pr.reset > t ? pr.reset : Math.max(reset, t + retryDelay(cfg, 0))),
        source: pr.reset || ev?.reset ? "kimi 返回" : `撞上限 + ${KIND_TEXT[kind]}`,
    };
    k.next_probe_at = k["limit_" + kind].reset_at;
    delete k.retries;
    console.log(
        `  记录: ${n} 撞 ${KIND_TEXT[kind]}上限 ${short(fmt(hit))}，预计 ${short(k["limit_" + kind].reset_at)} 恢复`,
    );
    ctx.log([fmt(t), ctx.cur, "hit_" + kind, n, kind, fmt(hit), k["limit_" + kind].reset_at, "", pr.msg]);
    return false;
}

// ---------------- 自动切换：计划任务每次跑的逻辑 ----------------
function switchTo(target) {
    try {
        setDefault(target);
        return [true, `settings.json 已切到 ${target}`];
    } catch (e) {
        return [false, `切换失败: ${e.message}`];
    }
}
async function pickSub(cfg, st, events, ctx, exclude) {
    // 按顺序找一把现在能用的订阅：记录里还在受限期的跳过；30 分钟内探测过正常的直接用；其余先探测确认
    const t = nowMs();
    for (const n of cfg.subs) {
        if (n === exclude) continue;
        const k = keyState(st, n);
        if (limitedNow(k, t)) continue;
        if (!activeLimits(k).length && probedOkRecently(cfg, k, t)) return n;
        if (!canProbe(cfg, k, t)) continue;
        if (await probeAndRecord(cfg, st, n, events, ctx)) return n;
    }
    return null;
}
async function cmdRun(dry, only = null) {
    const cfg = loadConfig(),
        st = loadState(),
        cur = current(),
        t = nowMs(),
        T = fmt(t);
    const ctx = { cur, log: dry ? () => {} : log };
    const events = scanLogs(cfg, st, only);
    const tag = dry ? " (dry-run)" : "";
    if (events.length) {
        st.events = [...(st.events || []), ...events.map((e) => ({ time: fmt(e.t), kind: e.kind, text: e.text }))].slice(-30);
        const e = events[events.length - 1];
        console.log(`${T} 日志里新出现 ${events.length} 条额度报错（最近 ${short(fmt(e.t))}，${KIND_TEXT[e.kind]}）: ${e.text}`);
    }
    let action = "keep",
        target = "",
        note = "";
    if (!isKimi(cfg, cur)) {
        // 当前不是 kimi-code / kimi-api（gravitex / glm / kimi-code-xhj / 认不出）：只记录，不探测不切换
        if (events.length) {
            action = "seen_not_kimi";
            ctx.log([T, cur, action, "", events[events.length - 1].kind, fmt(events[0].t), "", "", events[events.length - 1].text]);
        }
        note = `当前 ${cur || "?"} 不归本工具管（只管 kimi-code ↔ kimi-api），不动`;
        delete st.parked;
    } else if (cfg.subs.includes(cur)) {
        delete st.parked; // 在订阅上（本工具切的或手动切回的）
        const k = keyState(st, cur);
        // 要不要探测当前这把：日志里有晚于它上次探测的新额度报错，或记录里它还在受限期（可能是手动切回来的）
        const fresh = events.some((e) => e.t > ms(k.last_probe?.time));
        let limited = limitedNow(k, t);
        if ((fresh || limited) && canProbe(cfg, k, t, false))
            limited = !(await probeAndRecord(cfg, st, cur, events, ctx)) && limitedNow(k, t);
        else if (fresh) note = `${cur} ${cfg.probe_cooldown_minutes} 分钟内探测过（${k.last_probe?.result}），这次不再探测`;
        if (limited) {
            target = (await pickSub(cfg, st, events, ctx, cur)) || cfg.api;
            action = "switch";
        }
    } else if (cur === cfg.api) {
        // 默认优先用订阅：记录里订阅还在受限期就不探测；到了预计恢复时刻（或没有记录）才探测，确认能用就切回
        target = await pickSub(cfg, st, events, ctx, null);
        if (target) action = "return";
        else {
            const due = cfg.subs
                .map((n) => keyState(st, n).next_probe_at || fmt(resetAt(keyState(st, n))))
                .filter(Boolean)
                .sort()[0];
            note = `订阅暂不可用${due ? `，最早 ${short(due)} 再探测` : ""}`;
        }
    }
    if (action === "switch" || action === "return") {
        if (!dry) {
            const [ok, msg] = switchTo(target);
            if (!ok) action = "switch_failed";
            note = msg;
            if (ok && target === cfg.api) st.parked = { from: cur, at: T };
            if (ok && target !== cfg.api) delete st.parked;
        }
        ctx.log([T, cur, action, "", "", "", "", target, note]);
    }
    // watch 的局部扫且什么都没发生：不刷屏（会话写日志很频繁）
    if (!(only && action === "keep" && !events.length))
        console.log(`${T} 当前=${cur || "?"} → ${action}${target ? ` ${target}` : ""}${note ? `（${note}）` : ""}${tag}`);
    // 判定后实际在用哪套（dry-run 假装切成功了），据此注册 / 取消"到点切回"的一次性计划任务
    const eff = action === "switch" || action === "return" ? target : cur;
    scheduleReturn(cfg, st, eff, dry, !only);
    st.last = { time: T, current: cur, action, target, note };
    saveState(st); // dry-run 只存内存
    return st;
}

// ---------------- 到点切回：一次性计划任务 ----------------
function nextReturnAt(cfg, st) {
    // 在 kimi-api 上时，下一次该探测订阅的时刻 = 各订阅「排好的下次探测 / 预计恢复」里最早的，且不早于探测冷却结束、不早于 1 分钟后
    const t = nowMs();
    const ats = cfg.subs.map((n) => {
        const k = keyState(st, n);
        const due = ms(k.next_probe_at) || (limitedNow(k, t) ? resetAt(k) : t);
        const cool = k.last_probe ? ms(k.last_probe.time) + cfg.probe_cooldown_minutes * 60_000 : 0;
        return Math.max(due, cool, t + 60_000);
    });
    return Math.min(...ats);
}
function scheduleReturn(cfg, st, eff, dry, verify) {
    const t = nowMs(),
        old = st.return_task;
    if (eff !== cfg.api) {
        // 已经在订阅（或不在 kimi 系）：取消还没到点的切回任务；已经过点的不删（可能正是它在跑这一次）
        if (old) {
            if (ms(old.at) > t) {
                if (dry) console.log(`  (dry-run) 会删除一次性计划任务 ${RETURN_TASK}（原定 ${short(old.at)}）`);
                else run("schtasks", ["/Delete", "/TN", RETURN_TASK, "/F"]);
            }
            delete st.return_task;
        }
        return;
    }
    const at = fmt(Math.ceil(nextReturnAt(cfg, st) / 60_000) * 60_000); // 取整到分钟
    // 已经挂好同一时刻就不重复调 schtasks；全量扫时（启动 / 兜底 / 一次性任务）核对一下计划任务真的在，被删了就重挂
    if (old?.at === at && !old.error) {
        if (!verify || dry) return;
        const i = taskInfo(RETURN_TASK);
        if (i.exists && i.boundary.slice(0, 16) === at.slice(0, 16)) return;
    }
    if (dry) console.log(`  (dry-run) 会注册一次性计划任务 ${RETURN_TASK} 于 ${at}（到点探测 ${cfg.subs.join("/")}，通了切回）`);
    else {
        const err = registerTask(RETURN_TASK, returnTaskXml(at));
        if (err) errln(`注册 ${RETURN_TASK} 失败: ${err}`);
        else console.log(`  已注册一次性计划任务 ${RETURN_TASK} 于 ${at}`);
        st.return_task = err ? { at, error: err } : { at };
        return;
    }
    st.return_task = { at };
}

// ---------------- 计划任务（用 XML 注册：时刻写法不受系统区域设置影响；全部 wscript //B + vbs 无窗口） ----------------
const run = (exe, args) => spawnSync(exe, args, { encoding: "utf8", windowsHide: true });
const xmlEsc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const USER = `${process.env.USERDOMAIN || os.hostname()}\\${process.env.USERNAME || os.userInfo().username}`;
function taskXml(triggers, args, limit) {
    // vbs 等 node 跑完才退出 → 常驻进程在跑时任务一直是"正在运行"，IgnoreNew 让每天的检查不会再起一个
    return `<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo><Description>key-switcher auto-switcher-kimi (${xmlEsc(args)})</Description></RegistrationInfo>
  <Triggers>${triggers}</Triggers>
  <Principals><Principal id="Author"><UserId>${xmlEsc(USER)}</UserId><LogonType>InteractiveToken</LogonType><RunLevel>LeastPrivilege</RunLevel></Principal></Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <StartWhenAvailable>true</StartWhenAvailable>
    <ExecutionTimeLimit>${limit}</ExecutionTimeLimit>
    <Enabled>true</Enabled>
  </Settings>
  <Actions Context="Author"><Exec><Command>wscript.exe</Command><Arguments>${xmlEsc(`//B "${VBS}" "${process.execPath}" ${args}`)}</Arguments></Exec></Actions>
</Task>`;
}
export function mainTaskXml(cfg) {
    // 登录时（延迟 1 分钟）+ 每天 daily_check_time 各拉起一次常驻进程；已经在跑就什么都不做（任务 IgnoreNew + 进程自己的单实例锁）
    const hm = /^\d{1,2}:\d{2}$/.test(cfg.daily_check_time) ? cfg.daily_check_time.padStart(5, "0") : "08:30";
    return taskXml(
        `<LogonTrigger><Enabled>true</Enabled><UserId>${xmlEsc(USER)}</UserId><Delay>PT1M</Delay></LogonTrigger>` +
            `<CalendarTrigger><StartBoundary>${fmt(Date.now()).slice(0, 10)}T${hm}:00</StartBoundary><Enabled>true</Enabled><ScheduleByDay><DaysInterval>1</DaysInterval></ScheduleByDay></CalendarTrigger>`,
        "watch",
        "PT0S", // 不限时（常驻）
    );
}
export const returnTaskXml = (at) =>
    taskXml(`<TimeTrigger><StartBoundary>${at.replace(" ", "T")}</StartBoundary><Enabled>true</Enabled></TimeTrigger>`, "run", "PT10M");
function registerTask(name, xml) {
    // 返回 "" = 成功，否则是错误信息；XML 文件按 schtasks 要求写成 UTF-16 LE + BOM，用完删掉
    const f = path.join(DATA, `${name}.xml`);
    fs.writeFileSync(f, Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from(xml, "utf16le")]));
    try {
        const r = run("schtasks", ["/Create", "/TN", name, "/XML", f, "/F"]);
        return r.status === 0 ? "" : scrub(r.stderr || r.stdout || `退出码 ${r.status}`);
    } finally {
        fs.rmSync(f, { force: true });
    }
}
function taskInfo(name) {
    // 用 schtasks 导出的 XML 读状态（XML 字段是英文，中英文系统都能用）
    const r = run("schtasks", ["/Query", "/TN", name, "/XML"]);
    if (r.status !== 0 || !r.stdout) return { exists: false };
    const x = r.stdout;
    const settings = (/<Settings>[\s\S]*?<\/Settings>/.exec(x) || [""])[0];
    return {
        exists: true,
        enabled: !/<Enabled>false<\/Enabled>/.test(settings),
        boundary: ((/<StartBoundary>([^<]*)<\/StartBoundary>/.exec(x) || [])[1] || "").replace("T", " "),
        pathOk: x.replace(/&quot;/g, '"').toLowerCase().includes(VBS.toLowerCase()),
    };
}

// ---------------- 常驻进程（watch） ----------------
function pidAlive(pid) {
    if (!pid) return false;
    try {
        process.kill(pid, 0);
    } catch {
        return false;
    }
    const r = run("tasklist", ["/FI", `PID eq ${pid}`, "/NH", "/FO", "CSV"]); // 防 pid 被别的程序复用
    return /node/i.test(r.stdout || "");
}
const watcherPid = () => {
    const p = Number(readJson(PIDF, {}).pid || 0);
    return pidAlive(p) ? p : 0;
};
function killWatcher() {
    const p = watcherPid();
    if (p)
        try {
            process.kill(p);
        } catch {}
    fs.rmSync(PIDF, { force: true });
    return !!p;
}
async function cmdWatch(dry) {
    const cfg = loadConfig(),
        other = watcherPid();
    if (other && other !== process.pid) return console.log(`常驻进程已在运行（pid ${other}），本次退出`);
    if (!dry) {
        // 无窗口进程没有控制台：输出写进 data/auto-switcher-kimi-watch.log（超 1MB 清空重写）
        try {
            if (fs.statSync(WLOG).size > 1 << 20) fs.rmSync(WLOG);
        } catch {}
        const w = (...a) => {
            try {
                fs.appendFileSync(WLOG, a.join(" ") + "\n");
            } catch {}
        };
        console.log = w;
        console.error = w;
    }
    fs.writeFileSync(PIDF, JSON.stringify({ pid: process.pid, started: fmt(Date.now()) }));
    process.on("exit", () => {
        if (readJson(PIDF, {}).pid === process.pid) fs.rmSync(PIDF, { force: true });
    });
    for (const s of ["SIGINT", "SIGTERM", "SIGBREAK"]) process.on(s, () => process.exit(0));

    // 所有判定串行跑（进程内排队 + 跨进程 .lock）；判定完按 state 里的 return_task 重设进程内的切回定时
    let chain = Promise.resolve(),
        retTimer = null,
        armedAt = "";
    const arm = (st) => {
        const at = (st || loadState()).return_task?.at || "";
        if (at === armedAt) return;
        armedAt = at;
        clearTimeout(retTimer);
        if (!at) return;
        const d = Math.max(1000, ms(at) - nowMs());
        if (d < 2 ** 31 - 1) retTimer = setTimeout(() => once(null), d);
        console.log(`  下次切回探测 ${at}（进程内定时；计划任务 ${RETURN_TASK} 兜底）`);
    };
    const once = (only) =>
        (chain = chain
            .then(() => withLock(() => cmdRun(dry, only)))
            .then(arm)
            .catch((e) => errln(`判定出错: ${e.stack || e.message}`)));

    // fs.watch: 有 jsonl 新写入就记下文件，攒 debounce_seconds 秒一批再读增量（定时不重置，持续写入也不会一直拖着不读）
    let pending = new Set(),
        deb = null;
    const startWatch = () => {
        try {
            const w = fs.watch(PROJECTS, { recursive: true }, (_, name) => {
                if (!name || !String(name).endsWith(".jsonl")) return;
                pending.add(path.join(PROJECTS, String(name)));
                deb ||= setTimeout(() => {
                    deb = null;
                    const files = [...pending];
                    pending = new Set();
                    once(files);
                }, cfg.debounce_seconds * 1000);
            });
            w.on("error", (e) => {
                errln(`fs.watch 出错 ${e.message}，60 秒后重连`);
                try {
                    w.close();
                } catch {}
                setTimeout(startWatch, 60_000);
            });
        } catch (e) {
            errln(`fs.watch 启动失败 ${e.message}，60 秒后重试`);
            setTimeout(startWatch, 60_000);
        }
    };
    console.log(`${fmt(Date.now())} 常驻进程启动 pid ${process.pid}，监听 ${PROJECTS}${dry ? " (dry-run)" : ""}`);
    once(null); // 启动先全量增量扫一次，并按 state 恢复下次切回的定时 / 计划任务
    startWatch();
    setInterval(() => once(null), cfg.fallback_scan_minutes * 60_000); // 兜底：fs.watch 漏事件
    if (flag("--exit-after")) setTimeout(() => process.exit(0), Number(flag("--exit-after")) * 1000); // 测试用
}

// ---------------- 开始 / 停止 ----------------
function taskStart() {
    // 开始 = 注册常驻进程拉起任务（登录时 + 每天一次）→ 结束旧的常驻进程（让改过的代码 / 设置生效）→ 立即通过计划任务拉起（无窗口）
    const cfg = loadConfig();
    const err = registerTask(TASK, mainTaskXml(cfg));
    if (err) return `开始失败（注册计划任务 ${TASK}: ${err}）`;
    killWatcher();
    run("schtasks", ["/End", "/TN", TASK]);
    const r = run("schtasks", ["/Run", "/TN", TASK]);
    if (r.status !== 0)
        spawn("wscript.exe", ["//B", VBS, process.execPath, "watch"], { detached: true, stdio: "ignore", windowsHide: true }).unref();
    return `已开始：常驻进程已拉起，监听会话日志（登录时、每天 ${cfg.daily_check_time} 检查，不在就拉起）。`;
}
function taskStop() {
    const msgs = [];
    if (killWatcher()) msgs.push("已结束常驻进程");
    for (const n of [TASK, RETURN_TASK]) {
        if (!taskInfo(n).exists) continue;
        run("schtasks", ["/End", "/TN", n]);
        const r = run("schtasks", ["/Delete", "/TN", n, "/F"]);
        msgs.push(r.status === 0 ? `已删除计划任务 ${n}` : `删除计划任务 ${n} 失败（退出码 ${r.status}）`);
    }
    const st = loadState();
    if (st.return_task) {
        delete st.return_task;
        saveState(st);
    }
    return msgs.length ? msgs.join("；") : "本来就没开始";
}

// ---------------- 状态 ----------------
const ACT_TEXT = {
    keep: "没切",
    switch: "已切换",
    return: "已切回订阅",
    switch_failed: "切换失败",
    seen_not_kimi: "当前不归本工具管，只记录",
};
function taskStatusLine() {
    const i = taskInfo(TASK),
        pid = watcherPid(),
        st = loadState();
    let s = `自动切换: ${pid ? `【运行中】 常驻进程 pid ${pid} 在监听会话日志` : i.exists ? "【常驻进程不在】（下次登录 / 每天检查时会拉起，选 1 立即拉起）" : "【未开始】"}`;
    if (i.exists && !i.enabled) s += "（计划任务被禁用了）";
    if (st.return_task) s += `，下次切回探测 ${short(st.return_task.at)}`;
    if (st.last) s += `，上次判定 ${short(st.last.time)}（${ACT_TEXT[st.last.action] || st.last.action}${st.last.target ? " → " + st.last.target : ""}）`;
    if (i.exists && !i.pathOk) s += "\n  注意: 计划任务指向的不是本目录，选 1 开始会改成这里";
    const g = taskInfo(GRAVITEX_TASK);
    if (g.exists && g.enabled)
        s +=
            "\n  注意: gravitex 的 auto-switcher 也在运行——它发现默认配置不是 gravitex 就会切回 gravitex，" +
            "\n        要让 kimi 留住，先在 auto-switcher.cmd 里选 3 停掉它";
    return s;
}
function statusText(cfg = loadConfig()) {
    const st = loadState(),
        t = nowMs(),
        cur = current();
    const L = [`  当前 settings.json: ${cur || "?"}${isKimi(cfg, cur) ? "" : "（不归本工具管，只管 kimi-code ↔ kimi-api）"}`];
    if (cur === cfg.api)
        L.push(`  在烧 token${st.parked ? `：本工具 ${short(st.parked.at)} 从 ${st.parked.from} 切过来` : "（手动选的）"}，订阅恢复后自动切回`);
    const pid = watcherPid(),
        pinfo = readJson(PIDF, {});
    L.push(`  常驻进程: ${pid ? `在（pid ${pid}，${short(pinfo.started)} 启动）` : "不在"}`);
    const rt = taskInfo(RETURN_TASK);
    if (st.return_task)
        L.push(
            `  下次切回: ${st.return_task.at} 探测订阅，通了切回` +
                (st.return_task.error ? `（计划任务注册失败: ${st.return_task.error}；只靠常驻进程定时）` : rt.exists ? `（计划任务 ${RETURN_TASK} 已挂 ${rt.boundary.slice(0, 16)}）` : "（计划任务里没找到，只靠常驻进程定时）"),
        );
    else L.push("  下次切回: 没挂（不在 kimi-api 上）");
    for (const n of cfg.subs) {
        const k = st.keys?.[n] || {};
        const lines = [];
        for (const kind of ["5h", "7d"]) {
            const l = k["limit_" + kind];
            if (!l) continue;
            lines.push(
                l.recovered_at
                    ? `上次撞 ${KIND_TEXT[kind]}上限 ${short(l.hit_at)}，${short(l.recovered_at)} 确认已恢复`
                    : `撞 ${KIND_TEXT[kind]}上限 ${short(l.hit_at)} → 预计 ${short(l.reset_at)} 恢复（${l.source}）${ms(l.reset_at) <= t ? "，已过点，待探测" : ""}`,
            );
        }
        const state = limitedNow(k, t) ? "受限" : activeLimits(k).length ? "应已恢复（待探测确认）" : "可用";
        L.push(`  ${n.padEnd(14)} ${state}${n === cur ? "  ← 当前" : ""}`);
        for (const x of lines) L.push(`      ${x}`);
        if (k.last_probe) L.push(`      上次探测 ${short(k.last_probe.time)}: ${k.last_probe.result}${k.last_probe.status ? ` (HTTP ${k.last_probe.status})` : ""}`);
    }
    const ev = (st.events || []).slice(-3);
    if (ev.length) {
        L.push("  最近日志里的额度报错:");
        for (const e of ev) L.push(`      ${short(e.time)} ${KIND_TEXT[e.kind]}  ${e.text.slice(0, 90)}`);
    }
    if (st.last) L.push(`  上次判定 ${st.last.time}: ${ACT_TEXT[st.last.action] || st.last.action}${st.last.target ? " → " + st.last.target : ""}${st.last.note ? `（${st.last.note}）` : ""}`);
    return L.join("\n");
}

// ---------------- 菜单 ----------------
export async function menu() {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    try {
        for (;;) {
            const cfg = loadConfig(),
                running = !!watcherPid();
            console.log("\n========== auto-switcher-kimi（kimi 订阅撞额度自动切烧 token） ==========");
            console.log("  " + taskStatusLine());
            console.log(`  当前 settings.json: ${current() || "?"}　|　优先用订阅 ${cfg.subs.join(" → ")}，撞上限切 ${cfg.api}，恢复后切回`);
            console.log("  ---------------------------------");
            console.log(`  1. ${running ? "重新开始" : "开始"}自动切换（常驻无窗口进程监听会话日志，撞上限即切；到点自动切回）`);
            console.log("  2. 查看状态（常驻进程、各订阅撞上限时间、预计恢复 / 下次切回时间）");
            console.log("  3. 停止自动切换（删计划任务 + 结束常驻进程）");
            const v = (await rl.question("输入序号(回车=退出): ")).trim();
            if (!v) return;
            if (v === "1") {
                const ok = (await rl.question("  确认开始? (y/回车=确认，n=取消): ")).trim().toLowerCase();
                console.log("  " + (ok === "" || ok === "y" ? taskStart() : "已取消，没有改动"));
            } else if (v === "2") console.log(statusText(cfg));
            else if (v === "3") console.log("  " + taskStop());
            else console.log("  没有这个选项");
        }
    } finally {
        rl.close();
    }
}

// ---------------- 命令行 ----------------
const isMain = process.argv[1] && path.resolve(process.argv[1]) === SELF;
if (isMain) {
    const [cmd = "menu", ...rest] = argv;
    if (cmd === "menu") await menu();
    else if (cmd === "watch") await cmdWatch(DRY);
    else if (cmd === "run") await withLock(() => cmdRun(DRY)); // 一次性切回任务 / 手动跑一次
    else if (cmd === "status") console.log(taskStatusLine() + "\n" + statusText());
    else if (cmd === "start") console.log(taskStart());
    else if (cmd === "stop") console.log(taskStop());
    else if (cmd === "probe") {
        // 只探测、打印结果，不写状态不切换（每把订阅发一个 1 token 请求）
        const cfg = loadConfig();
        const names = rest[0] && !rest[0].startsWith("--") ? [rest[0]] : cfg.subs;
        for (const n of names) {
            const r = await probe(n);
            console.log(`${n}: ${r.result}${r.status ? ` (HTTP ${r.status})` : ""}${r.reset ? ` 重置 ${fmt(r.reset)}` : ""}${r.msg ? ` ${r.msg}` : ""}`);
        }
    } else {
        console.log("用法: node scripts/auto-switcher-kimi.mjs menu | watch [--dry-run] | run [--dry-run] | status | start | stop | probe [配置名]");
        process.exitCode = 1;
    }
}
