// auto-switcher.mjs — gravitex 多把 key 按比例自动轮换（原 key-balance；2026-10-20 用户定；只依赖 Node）
// 目录: key-switcher/ 根 = auto-switcher.cmd + auto-switcher-config.json + profiles-*.json；scripts/ = 代码；data/ = 运行数据(.gitignore)
//
// 做什么: 按 auto-switcher-config.json 里的比例，让各 key 从基线起的「新增花费」最终贴近这个比例（如 1:0.5:0.5 → 花 $1000 时约 $500:$250:$250）。
//   新增花费 = 当前累计花费 − 基线（第一次运行时记下的累计花费）；历史上谁用得多不追平。
//   花费来源: gravitex(new-api) GET /api/usage/token/ 的 total_used ÷ 500,000 = 美元（gravitex 的计费口径）
// 怎么用: 双击 auto-switcher.cmd → 1 开始自动切换 / 2 设置比例 / 3 停止。双击本身不会开始切 key。
//   自动切换 = Windows 计划任务 auto-switcher，每 interval_minutes 分钟用 scripts/auto-switcher-run.vbs 无窗口跑一次 `node auto-switcher.mjs run --jitter`:
//   （60 的倍数 → 整点触发，如 60=每小时整点；其他按分钟，如 15 = 每小时 :00/:15/:30/:45；最小 5 分钟）
//   每次检查: 算每把 key「应花多少」（总新增 × 比例占比）和「实际花了多少」→ 正在用的 key 多花超过它的阈值，
//   就切到少花最多的那把（阈值按比例缩放: threshold_usd 是比例最大那把的阈值，比例 0.5 的 key 用一半）
//   就切到少花最多的那把（改 ~/.claude/settings.json，新开的 Claude 会话、claude -p 用新 key）
// 命令: node scripts/auto-switcher.mjs menu | run [--dry-run] | start | stop | task | pick [--exclude a,b] [--dry-run]
// 文件: 根/auto-switcher-config.json（比例，可提交）; data/auto-switcher-state.json、-log.csv、.lock（运行数据，整个 data/ 已 .gitignore）
import fs from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { currentDefault, setDefault } from "./cs.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SELF = fileURLToPath(import.meta.url);
const ROOT = path.dirname(HERE); // key-switcher 根（配置在这里）
const DATA = path.join(ROOT, "data"); // 运行数据
fs.mkdirSync(DATA, { recursive: true });
const CONFIG = path.join(ROOT, "auto-switcher-config.json");
const STATE = path.join(DATA, "auto-switcher-state.json");
const LOG = path.join(DATA, "auto-switcher-log.csv");
const LOCK = path.join(DATA, "auto-switcher.lock");
const VBS = path.join(HERE, "auto-switcher-run.vbs");
const API = "https://api.gravitex.ai/api/usage/token/";
const QUOTA_PER_USD = 500_000;
const TASK = process.env.KB_TASK || "auto-switcher"; // 测试时可换名
const ORDER = ["gravitex", "gravitex-xhj", "gravitex-cyx", "gravitex-zgm"];
const LABELS = {
    gravitex: "gravitex",
    "gravitex-xhj": "xhj",
    "gravitex-cyx": "cyx",
    "gravitex-zgm": "zgm",
};

const DEFAULT_CONFIG = {
    // 10/20 用户定: gravitex : xhj : cyx = 1 : 0.5 : 0.45，zgm 暂不用；权重 0 = 不参与
    weights: {
        gravitex: 1,
        "gravitex-xhj": 0.5,
        "gravitex-cyx": 0.45,
        "gravitex-zgm": 0,
    },
    threshold_usd: 15, // 比例最大那把 key 多花这么多美元才切；其他 key 按比例缩放（如 50 → 比例 1 的 $50、比例 0.5 的 $25），避免来回跳
    interval_minutes: 15, // 自动切换多久检查一次，单位分钟（10/20 用户定 15；最小 5）
    jitter_minutes: 5, // 随机抖动: 计划任务触发后先随机等 0~jitter 分钟再查（15 + 0~5 → 实际间隔约 10~20 分钟浮动）
    reserve_usd: 2, // pick: 每次选 key 先登记一笔预估花费，防止多条任务同时挑中同一把
    reserve_minutes: 10,
    cache_minutes: 10, // pick: 用量查询结果缓存多久
};

// ---------------- 配置 / 状态 ----------------
const readJson = (f, dflt) => {
    try {
        return JSON.parse(fs.readFileSync(f, "utf8").replace(/^﻿/, ""));
    } catch {
        return dflt;
    }
};
export function loadConfig() {
    const c = structuredClone(DEFAULT_CONFIG);
    const u = readJson(CONFIG, {});
    for (const [k, v] of Object.entries(u))
        c[k] =
            v &&
            typeof v === "object" &&
            !Array.isArray(v) &&
            typeof c[k] === "object"
                ? { ...c[k], ...v }
                : v;
    if (u.interval_hours != null && u.interval_minutes == null)
        c.interval_minutes = Math.round(Number(u.interval_hours) * 60); // 兼容旧键
    delete c.interval_hours;
    return c;
}
const saveConfig = (c) =>
    fs.writeFileSync(CONFIG, JSON.stringify(c, null, 2) + "\n");
const loadState = () => readJson(STATE, {});
const saveState = (s) => fs.writeFileSync(STATE, JSON.stringify(s, null, 2));
const now = () => new Date().toLocaleString("sv-SE").slice(0, 19);
const errln = (...a) => console.error(...a);
function log(row) {
    const head = !fs.existsSync(LOG)
        ? "﻿time,mode,current,target,action,over_usd(多花+/少花-),totals_usd\n"
        : "";
    const q = (x) => `"${String(x ?? "").replace(/"/g, '""')}"`;
    fs.appendFileSync(LOG, head + row.map(q).join(",") + "\n");
}
async function withLock(fn) {
    // 手动"现在先跑一次"和整点自动检查撞上时，后来的等前一个跑完（最多 30 秒）；锁超过 5 分钟视为残留
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
                errln("另一个 auto-switcher 正在运行，本次跳过");
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

// ---------------- key 与用量 ----------------
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
function allProfiles() {
    // key-switcher 里全部 gravitex 配置（按 ORDER 排）→ {名: key 文件路径}
    const prof = readJson(path.join(ROOT, "profiles-claude.json"), {
        profiles: {},
    }).profiles;
    const rank = (n) => (ORDER.includes(n) ? ORDER.indexOf(n) : 99);
    return Object.fromEntries(
        Object.keys(prof)
            .filter((n) => n.startsWith("gravitex"))
            .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
            .map((n) => [n, path.join(keyDir(), prof[n].keyFile)]),
    );
}
const w = (cfg, n) => Number(cfg.weights[n] || 0);
const pool = (cfg) =>
    Object.fromEntries(
        Object.entries(allProfiles()).filter(
            ([n, kf]) => w(cfg, n) > 0 && fs.existsSync(kf),
        ),
    );
const byWeight = (cfg) =>
    Object.keys(pool(cfg)).sort((a, b) => w(cfg, b) - w(cfg, a));
const current = () => {
    try {
        return currentDefault() || "";
    } catch {
        return "";
    }
}; // settings.json 坏了也不崩

async function usedUsd(kf) {
    const key = fs.readFileSync(kf, "utf8").trim();
    const r = await fetch(API, {
        headers: {
            Authorization: `Bearer ${key}`,
            "User-Agent": "auto-switcher/4.2",
        },
        signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return (await r.json()).data.total_used / QUOTA_PER_USD;
}
async function fetchTotals(cfg, fallback, st) {
    // 有一把没查到（如 429 限流）就整轮作废：不拿残缺数据比较，免得选偏。
    // 遇到 429 → 接下来 10 分钟不再查（沿用上次数据或本轮不判断），免得越查越被限
    if (st && (st.rate_limited_until || 0) > Date.now()) {
        errln(
            `近期被 gravitex 限流，${new Date(st.rate_limited_until).toLocaleTimeString("sv-SE").slice(0, 5)} 前不查用量，本轮${fallback ? "沿用上次数据" : "不按用量判断"}`,
        );
        return fallback ? { ...fallback } : {};
    }
    const totals = {},
        failed = [];
    for (const [n, kf] of Object.entries(pool(cfg))) {
        try {
            totals[n] = Math.round((await usedUsd(kf)) * 100) / 100;
        } catch (e) {
            failed.push(n);
            errln(`${n}: 查用量失败 ${e.message}`);
            if (st && /HTTP 429/.test(e.message)) {
                st.rate_limited_until = Date.now() + 10 * 60_000;
                saveState(st);
                break;
            }
        }
        await new Promise((r) => setTimeout(r, 600));
    }
    if (failed.length) {
        errln(
            `有 ${failed.length} 把 key 没查到用量，本轮${fallback ? "沿用上次数据" : "不按用量判断"}`,
        );
        return fallback ? { ...fallback } : {};
    }
    return totals;
}
export function shares(totals, base, cfg, reserved = []) {
    // 每把 key: add = 基线后的实际新增花费；target = 应花（总新增 × 比例占比）；over = add − target（正 = 多花，负 = 少花）
    const keys = Object.keys(totals);
    const add = Object.fromEntries(keys.map((n) => [n, totals[n] - base[n]]));
    for (const [n, usd] of reserved) if (n in add) add[n] += usd;
    const total = keys.reduce((s, n) => s + add[n], 0);
    const wsum = keys.reduce((s, n) => s + w(cfg, n), 0) || 1;
    const r2 = (x) => Math.round(x * 100) / 100;
    return Object.fromEntries(
        keys.map((n) => {
            const target = (total * w(cfg, n)) / wsum;
            return [
                n,
                {
                    add: r2(add[n]),
                    target: r2(target),
                    over: r2(add[n] - target),
                },
            ];
        }),
    );
}
// 每把 key 的切换阈值 = threshold_usd × (这把的比例 ÷ 最大比例)：如 50 → 比例 1 的 $50、比例 0.5 的 $25
export const limitFor = (cfg, n) => {
    const maxW =
        Math.max(...Object.keys(cfg.weights).map((k) => w(cfg, k)), 0) || 1;
    return (Number(cfg.threshold_usd) * w(cfg, n)) / maxW;
};
export const choose = (sh, cfg) =>
    Object.keys(sh).sort(
        (a, b) => sh[a].over - sh[b].over || w(cfg, b) - w(cfg, a),
    )[0]; // 少花最多的那把；打平时比例大的优先
const overText = (sh) =>
    JSON.stringify(
        Object.fromEntries(
            Object.entries(sh).map(([n, v]) => [LABELS[n] || n, v.over]),
        ),
    );
function ensureBaseline(st, totals) {
    if (!st.baseline) {
        st.baseline_at = now();
        st.baseline = { ...totals };
    }
    for (const n of Object.keys(totals))
        if (!(n in st.baseline)) st.baseline[n] = totals[n]; // 新加入的 key 以首次看到的用量为基线
    return st.baseline;
}
function switchTo(target) {
    try {
        setDefault(target);
        return [true, `settings.json 已切到 ${target}`];
    } catch (e) {
        return [false, `切换失败: ${e.message}`];
    }
}

// ---------------- 自动切换：计划任务每次跑的逻辑 ----------------
async function cmdRun(dry) {
    const cfg = loadConfig(),
        st = loadState(),
        cur = current(),
        t = now();
    const totals = await fetchTotals(cfg, null, st);
    if (!Object.keys(totals).length) {
        // 查不到用量: 当前 key 不参与（如比例 0 的 zgm）就直接切到比例最大的那把；否则本轮不动
        const act = byWeight(cfg);
        if (act.length && !act.includes(cur)) {
            console.log(
                `${t} 用量没查到，当前 ${cur || "?"} 不参与轮换 → 切到比例最大的 ${act[0]}${dry ? " (dry-run)" : ""}`,
            );
            if (!dry) {
                const [ok] = switchTo(act[0]);
                log([
                    t,
                    "run",
                    cur,
                    act[0],
                    ok ? "switched_no_usage" : "switch_failed",
                    "",
                    "",
                ]);
            }
            return;
        }
        errln(`${t} 用量没查到，当前 ${cur || "?"} 在轮换名单里，本轮不切换`);
        if (!dry) {
            // 跳过的检查也要留痕：日志一行 + 状态行显示"上次 xx:xx（查不到用量，跳过）"
            const limited = (st.rate_limited_until || 0) > Date.now();
            st.last_attempt = {
                time: t,
                action: limited ? "skipped_rate_limited" : "skipped_no_usage",
            };
            saveState(st);
            log([t, "run", cur, "", st.last_attempt.action, "", ""]);
        }
        process.exitCode = 1;
        return;
    }
    const sh = shares(totals, ensureBaseline(st, totals), cfg);
    const target = choose(sh, cfg);
    let action =
        !(cur in sh) || (cur !== target && sh[cur].over > limitFor(cfg, cur))
            ? "switch"
            : "keep";
    if (action === "switch" && !dry)
        action = switchTo(target)[0] ? "switched" : "switch_failed";
    console.log(
        `${t} 当前=${cur || "?"} 少花最多=${target} 多花(+)/少花(-)美元=${overText(sh)} → ${action}${dry ? " (dry-run)" : ""}`,
    );
    if (!dry) {
        st.last = { time: t, current: cur, target, action, totals, shares: sh };
        delete st.rate_limited_until;
        saveState(st);
        log([
            t,
            "run",
            cur,
            target,
            action,
            overText(sh),
            JSON.stringify(totals),
        ]);
    }
}

// ---------------- 任务启动时选 key（给 claude -p 等用；只往 stdout 打印一个配置名） ----------------
async function cmdPick(dry, exclude = "") {
    const cfg = loadConfig(),
        st = loadState(),
        t = now(),
        ts = Date.now();
    const excl = new Set(
        exclude
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean),
    );
    const cache = st.cache || {};
    let totals =
        cache.totals && ts - (cache.t || 0) < cfg.cache_minutes * 60_000
            ? cache.totals
            : await fetchTotals(cfg, cache.totals, st);
    if (totals !== cache.totals && Object.keys(totals).length)
        st.cache = { t: ts, totals };
    if (!Object.keys(totals).length) {
        const cur = current(),
            act = byWeight(cfg).filter((n) => !excl.has(n));
        const best = act.includes(cur)
            ? cur
            : act[0] || byWeight(cfg)[0] || "gravitex";
        errln(`${t} 用量没查到 → ${best}`);
        console.log(best);
        return;
    }
    const kept = Object.fromEntries(
        Object.entries(totals).filter(([n]) => !excl.has(n)),
    );
    if (Object.keys(kept).length) totals = kept;
    const res = (st.reserved || []).filter(
        (r) => ts - r.t < cfg.reserve_minutes * 60_000,
    );
    const sh = shares(
        totals,
        ensureBaseline(st, totals),
        cfg,
        res.map((r) => [r.p, r.usd]),
    );
    const best = choose(sh, cfg);
    errln(
        `${t} pick=${best} 多花(+)/少花(-)美元=${overText(sh)}${dry ? " (dry-run)" : ""}`,
    );
    if (!dry) {
        res.push({ t: ts, p: best, usd: cfg.reserve_usd });
        st.reserved = res;
        saveState(st);
        log([
            t,
            "pick",
            "",
            best,
            "picked",
            overText(sh),
            JSON.stringify(totals),
        ]);
    }
    console.log(best);
}

// ---------------- 开始 / 停止（Windows 计划任务） ----------------
const run = (exe, args) =>
    spawnSync(exe, args, { encoding: "utf8", windowsHide: true });
export function taskInfo() {
    // 用 schtasks 导出的 XML 读状态（XML 字段是英文，中英文系统都能用；不再调 PowerShell——它在某些启动方式下会起不来，误判成"未开始"）
    const r = run("schtasks", ["/Query", "/TN", TASK, "/XML"]);
    if (r.status !== 0 || !r.stdout) return { state: "未开始" };
    const x = r.stdout;
    const tag = (name, src = x) =>
        (new RegExp(`<${name}>([^<]*)</${name}>`).exec(src) || [])[1] || "";
    const settings = (/<Settings>[\s\S]*?<\/Settings>/.exec(x) || [""])[0];
    const m = /PT(?:(\d+)H)?(?:(\d+)M)?/.exec(tag("Interval"));
    const everyMin =
        m && (m[1] || m[2]) ? Number(m[1] || 0) * 60 + Number(m[2] || 0) : null;
    // 下次检查 = 从 StartBoundary 起按间隔往后推，第一个晚于现在的时刻（不含随机抖动）
    let next = "";
    const start = new Date(tag("StartBoundary"));
    if (everyMin && !isNaN(start)) {
        const step = everyMin * 60_000,
            k = Math.max(0, Math.floor((Date.now() - start) / step) + 1);
        next = new Date(start.getTime() + k * step)
            .toLocaleString("sv-SE")
            .slice(0, 16);
    }
    // 上次检查 = 脚本自己记的最后一次结果（比计划任务的退出码更有用：能看到上次切没切）
    const st0 = loadState();
    // 上次检查 = 最近一次（成功的 last 和跳过的 last_attempt 取较新的）
    const last =
        st0.last_attempt && (!st0.last || st0.last_attempt.time > st0.last.time)
            ? st0.last_attempt
            : st0.last;
    const actText = {
        keep: "没切",
        switched: "已切换",
        switch_failed: "切换失败",
        switched_no_usage: "已切换",
        skipped_rate_limited: "被限流，跳过",
        skipped_no_usage: "查不到用量，跳过",
    };
    return {
        state: tag("Enabled", settings) === "false" ? "已停止" : "运行中",
        next,
        last: last?.time ? last.time.slice(0, 16) : "",
        result: last
            ? `${actText[last.action] || last.action}${last.action?.startsWith("switch") ? " → " + (LABELS[last.target] || last.target) : ""}`
            : "",
        pathOk: `${tag("Command")} ${tag("Arguments")}`
            .replace(/&quot;/g, '"')
            .toLowerCase()
            .includes(VBS.toLowerCase()),
        everyMin,
    };
}
const everyText = (min) =>
    min % 60 === 0 ? `每 ${min / 60} 小时（整点）` : `每 ${min} 分钟`;
const intervalMin = (cfg) =>
    Math.max(5, Math.round(Number(cfg.interval_minutes) || 60)); // 最小 5 分钟，免得查用量太频繁被限流
function readJsonStr(s) {
    try {
        return JSON.parse((s || "").trim() || "{}");
    } catch {
        return {};
    }
}
export function taskStatusLine(cfg = loadConfig()) {
    const i = taskInfo();
    if (i.state === "未开始") return "自动切换: 【未开始】";
    const jit = Number(cfg.jitter_minutes) || 0;
    let s = `自动切换: 【${i.state}】 ${i.everyMin ? everyText(i.everyMin) : "每 ? 分钟"}检查一次${jit ? `（每次随机延后 0~${jit} 分钟）` : ""}`;
    if (i.state === "运行中" && i.next)
        s += `，下次约 ${i.next.slice(11)}${jit ? `~+${jit}分` : ""}`;
    s += i.last ? `，上次 ${i.last.slice(11)}（${i.result}）` : "，还没检查过";
    if (!i.pathOk)
        s += "\n  ⚠ 计划任务指向的不是本目录（旧版），选 1 开始会改成这里";
    else if (i.everyMin && i.everyMin !== intervalMin(cfg))
        s += `\n  ⚠ 设置里是${everyText(intervalMin(cfg))}，选 1 重新开始后生效`;
    return s;
}
function taskStart() {
    // 开始 = 结束原有任务 → 按当前设置新建（/F 覆盖，同名只会有一个）→ 立即检查一次。
    // 不影响算账：用量比较的基线存在 data/auto-switcher-state.json，和计划任务无关，重建任务不会重置基线。
    const cfg = loadConfig();
    if (taskInfo().state !== "未开始") run("schtasks", ["/End", "/TN", TASK]); // 正好有一次检查在跑也一并结束（有锁，状态不会写坏）
    const tr = `wscript.exe "${VBS}" "${process.execPath}"`;
    const mins = intervalMin(cfg);
    const sched =
        mins % 60 === 0
            ? ["/SC", "HOURLY", "/MO", String(mins / 60)]
            : ["/SC", "MINUTE", "/MO", String(mins)];
    const r = run("schtasks", [
        "/Create",
        "/TN",
        TASK,
        "/TR",
        tr,
        ...sched,
        "/ST",
        "00:00",
        "/IT",
        "/F",
    ]);
    if (r.status !== 0) return `开始失败（schtasks 退出码 ${r.status}）`;
    // 立即检查一次: 直接后台跑 run（不带 --jitter，不等随机延迟），不经过计划任务
    spawn(process.execPath, [SELF, "run"], {
        detached: true,
        stdio: "ignore",
        windowsHide: true,
    }).unref();
    return `已开始自动切换（${everyText(mins)}检查一次，每次再随机延后 0~${Number(cfg.jitter_minutes) || 0} 分钟），并已立即检查了一次。`;
}
function taskStop() {
    if (taskInfo().state === "未开始") return "本来就没开始";
    const r = run("schtasks", ["/Change", "/TN", TASK, "/DISABLE"]);
    return r.status === 0
        ? "已停止自动切换（计划任务保留但禁用，选 1 即可恢复）"
        : `停止失败（schtasks 退出码 ${r.status}）`;
}

// ---------------- 菜单 ----------------
const ratioText = (cfg) =>
    Object.keys(allProfiles())
        .filter((n) => w(cfg, n) > 0)
        .map((n) => `${LABELS[n] || n} ${w(cfg, n)}`)
        .join(" : ") || "（没有任何 key 参与）";
async function setRatio(rl, cfg) {
    console.log("\n  按顺序输入每把 key 的比例（回车 = 不改，0 = 不用这把）：");
    for (const [n, kf] of Object.entries(allProfiles())) {
        for (;;) {
            const v = (
                await rl.question(
                    `    ${(LABELS[n] || n).padEnd(6)}（${path.basename(kf)}） 当前 ${w(cfg, n)} → `,
                )
            ).trim();
            if (!v) break;
            const x = Number(v);
            if (Number.isFinite(x) && x >= 0) {
                cfg.weights[n] = x;
                break;
            }
            console.log("      请输入不小于 0 的数字");
        }
    }
    if (!Object.values(cfg.weights).some((x) => Number(x) > 0)) {
        console.log("  至少要有一把 key 的比例大于 0，本次不保存");
        return;
    }
    saveConfig(cfg);
    console.log(`  已保存：${ratioText(cfg)}（下次检查时按新比例判断）`);
}
function shareTable(cfg) {
    // 账用"上次检查"的花费（不在打开菜单时去查接口，免得被限流）；应花 / 阈值 / 状态按当前配置实时重算，改了比例或阈值马上看得到
    const st = loadState(),
        last = st.last;
    if (!last?.totals || !st.baseline)
        return "  （还没检查过，下次检查后这里会显示每把 key 应花多少、实际花了多少）";
    const totals = Object.fromEntries(
        Object.entries(last.totals).filter(([n]) => w(cfg, n) > 0),
    );
    if (!Object.keys(totals).length) return "  （当前比例下没有参与的 key）";
    const sh = shares(
        totals,
        Object.fromEntries(
            Object.keys(totals).map((n) => [n, st.baseline[n] ?? totals[n]]),
        ),
        cfg,
    );
    const cur = current(),
        next = choose(sh, cfg);
    // 中文按 2 格宽对齐
    const width = (s) =>
        [...String(s)].reduce((a, c) => a + (/[⺀-￿]/.test(c) ? 2 : 1), 0);
    const pad = (s, n) => String(s) + " ".repeat(Math.max(1, n - width(s)));
    const money = (x) => (x < 0 ? "-$" : "$") + Math.abs(x).toFixed(2);
    const lines = [
        `  从 ${st.baseline_at || "?"} 起的花费（截至上次检查 ${last.time.slice(5, 16)}），按当前比例 ${ratioText(cfg)}、阈值 $${cfg.threshold_usd} 计算：`,
        `    ${pad("key", 10)}${pad("比例", 6)}${pad("实际花了", 11)}${pad("应花", 11)}${pad("多花/少花", 11)}${pad("切换阈值", 10)}状态`,
    ];
    for (const [n, v] of Object.entries(sh)) {
        const lim = limitFor(cfg, n);
        let state = "";
        if (n === cur) {
            state =
                n === next
                    ? "在用（正是最该用的）"
                    : v.over > lim
                      ? `在用，已超阈值 → 下次检查切到 ${LABELS[next] || next}`
                      : `在用，再多花 ${money(lim - v.over)} 就切`;
        } else if (n === next) state = "下一个切到它（少花最多）";
        lines.push(
            `    ${pad(LABELS[n] || n, 10)}${pad(w(cfg, n), 6)}${pad(money(v.add), 11)}${pad(money(v.target), 11)}${pad((v.over >= 0 ? "+" : "") + v.over.toFixed(2), 11)}${pad("$" + lim.toFixed(2), 10)}${state}`,
        );
    }
    if (!(cur in sh))
        lines.push(
            `    当前 settings.json 用的是 ${cur || "?"}（不在轮换名单里），下次检查会切到 ${LABELS[next] || next}`,
        );
    return lines.join("\n");
}
export async function menu() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    try {
        for (;;) {
            const cfg = loadConfig(),
                running = taskInfo().state === "运行中";
            console.log(
                "\n========== auto-switcher（按比例自动切 key） ==========",
            );
            console.log("  " + taskStatusLine(cfg));
            console.log(
                "  比例: " +
                    ratioText(cfg) +
                    `　|　当前 settings.json: ${current() || "?"}`,
            );
            console.log(shareTable(cfg));
            console.log("  ---------------------------------");
            console.log(
                `  1. ${running ? "重新开始" : "开始"}自动切换（按比例，${everyText(intervalMin(cfg))}检查一次）`,
            );
            console.log("  2. 设置各 key 的比例");
            console.log("  3. 停止自动切换");
            const v = (await rl.question("输入序号(回车=退出): ")).trim();
            if (!v) return;
            if (v === "1") {
                const ok = (
                    await rl.question("  确认开始? (y/回车=确认，n=取消): ")
                )
                    .trim()
                    .toLowerCase();
                console.log(
                    "  " +
                        (ok === "" || ok === "y"
                            ? taskStart()
                            : "已取消，没有改动"),
                );
            } else if (v === "2") await setRatio(rl, cfg);
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
    const [cmd = "menu", ...rest] = process.argv.slice(2);
    const dry = rest.includes("--dry-run");
    const ex =
        rest.find((x) => x.startsWith("--exclude="))?.slice(10) ??
        (rest.includes("--exclude") ? rest[rest.indexOf("--exclude") + 1] : "");
    if (cmd === "menu") await menu();
    else if (cmd === "run") {
        // 计划任务调用时带 --jitter: 先随机等 0~jitter_minutes 分钟再查（等待放在拿锁之前，不挡菜单和手动检查）
        const jit = rest.includes("--jitter")
            ? Math.max(0, Number(loadConfig().jitter_minutes) || 0)
            : 0;
        if (jit)
            await new Promise((r) =>
                setTimeout(r, Math.random() * jit * 60_000),
            );
        await withLock(() => cmdRun(dry));
    } else if (cmd === "pick") await withLock(() => cmdPick(dry, ex || ""));
    else if (cmd === "start") console.log(taskStart());
    else if (cmd === "stop") console.log(taskStop());
    else if (cmd === "task") console.log(taskStatusLine());
    else {
        console.log(
            "用法: node scripts/auto-switcher.mjs menu | run [--dry-run] | start | stop | task | pick [--exclude a,b] [--dry-run]",
        );
        process.exitCode = 1;
    }
}
