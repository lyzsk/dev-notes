// cs.mjs — Claude Code 配置切换(claude switch, 2026-10-11 用户令: PC1/PC2/PC3 共用的 switch-claude-settings)
// 位置(10/11 用户令: 不放 investment-tool, 放 dev\ 下): <dev>\switch-claude-settings\, key 就放在 <dev>\ 本身(本目录的上一级)
//   各机 dev 在哪都行(PC1 C:\Users\admin\dev / PC3 D:\dev …), 整个 switch-claude-settings 文件夹拷过去即用
// 不改 ~/.claude/settings.json(10/9 用户立法"settings 用户亲管"): 运行时读 key → 生成 ~/.claude-profiles/<名>.json
//   → claude --settings 叠加(flag 级, 优先于用户 settings; 默认配置不受影响, 多窗口可各用各的)
// 用法(最简单: 双击本目录「switch-claude-settings.cmd」→ 输序号 → 改本机 ~/.claude/settings.json):
//   cs list                 列出配置 + 本机 key 文件是否就绪(不显示 key)
//   cs <配置> [claude 参数]   用该配置起交互 claude(如 cs kimi-xhj / cs gravitex -c)
//   cs file <配置>           只生成叠加文件并打印路径(供脚本 --settings 用)
//   cs set <配置>            永久切默认: 改 ~/.claude/settings.json 的 env 段——**仅用户手动执行**
// key 目录: 缺省=本目录上一级(<dev>\); 特殊机器可用环境变量 CLAUDE_KEY_DIR 覆盖
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CFG = JSON.parse(fs.readFileSync(path.join(HERE, "profiles.json"), "utf8"));
// key 目录: 环境变量 > 从本工具目录逐级往上找第一个含 *-api-key.txt 的目录(10/12: 工具挪进 dev-notes/others 后, key 仍在 <dev>\)
function findKeyDir() {
    let d = path.dirname(HERE);
    for (let i = 0; i < 5; i++) {
        try { if (fs.readdirSync(d).some((f) => /-api-key\.txt$/i.test(f))) return d; } catch { /* 无权限跳过 */ }
        const up = path.dirname(d);
        if (up === d) break;
        d = up;
    }
    return path.dirname(HERE);
}
const KEY_DIR = process.env.CLAUDE_KEY_DIR || findKeyDir();
const OUT_DIR = path.join(os.homedir(), ".claude-profiles");
const MODEL_KEYS = ["ANTHROPIC_MODEL", "ANTHROPIC_DEFAULT_OPUS_MODEL", "ANTHROPIC_DEFAULT_SONNET_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL", "ANTHROPIC_DEFAULT_FABLE_MODEL", "CLAUDE_CODE_SUBAGENT_MODEL"];

export function profileEnv(name) {
    const p = CFG.profiles[name];
    if (!p) throw new Error(`未知配置 ${name}(可用: ${Object.keys(CFG.profiles).join("/")})`);
    const keyPath = path.join(KEY_DIR, p.keyFile);
    if (!fs.existsSync(keyPath)) throw new Error(`本机缺 key 文件: ${keyPath}`);
    const env = { ...p.env, ANTHROPIC_AUTH_TOKEN: fs.readFileSync(keyPath, "utf8").trim() };
    // 叠加语义=没写的项沿用用户默认 settings: 模型项缺则用本配置自身 opus 档补齐
    // (否则 glm 会继承默认的 claude-opus-5-5 模型名打到智谱→模型不存在)
    const main = env.ANTHROPIC_MODEL || env.ANTHROPIC_DEFAULT_OPUS_MODEL;
    for (const k of MODEL_KEYS) if (!env[k]) env[k] = k.includes("HAIKU") && env.ANTHROPIC_DEFAULT_HAIKU_MODEL ? env.ANTHROPIC_DEFAULT_HAIKU_MODEL : main;
    return env;
}

export function profileFile(name) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    const f = path.join(OUT_DIR, `${name}.json`);
    fs.writeFileSync(f, JSON.stringify({ env: profileEnv(name) }, null, 2), { mode: 0o600 });
    return f;
}

// ---- 永久切换本机默认(改 ~/.claude/settings.json; 用户亲手执行: 双击「switch-claude-settings.cmd」或 cs set) ----
// CS_SETTINGS=测试用替身路径(AI 自测只许指向假文件, 不碰真 settings)
const SETTINGS = process.env.CS_SETTINGS || path.join(os.homedir(), ".claude", "settings.json");
const readSettings = () => fs.existsSync(SETTINGS) ? JSON.parse(fs.readFileSync(SETTINGS, "utf8").replace(/^﻿/, "")) : {};

export function currentDefault() {   // settings.json 现用哪套: 先按 key 精确认, 再按网关+模型认
    const env = readSettings().env || {};
    for (const [n, p] of Object.entries(CFG.profiles)) {
        const kp = path.join(KEY_DIR, p.keyFile);
        if (env.ANTHROPIC_AUTH_TOKEN && fs.existsSync(kp) && fs.readFileSync(kp, "utf8").trim() === env.ANTHROPIC_AUTH_TOKEN) return n;
    }
    return Object.entries(CFG.profiles).find(([, p]) => p.env.ANTHROPIC_BASE_URL === env.ANTHROPIC_BASE_URL && p.env.ANTHROPIC_MODEL === env.ANTHROPIC_MODEL)?.[0] || null;
}

export function setDefault(name) {
    // 只替换 env 里 模型/网关/key 相关项(含上一套残留的专属项), 其余设置(权限/hooks/插件等)原样保留
    const s = readSettings();
    const all = new Set(Object.values(CFG.profiles).flatMap((p) => Object.keys(p.env)).concat(MODEL_KEYS, ["ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_API_KEY"]));
    const env = Object.fromEntries(Object.entries(s.env || {}).filter(([k]) => !all.has(k)));
    s.env = { ...env, ...profileEnv(name) };
    fs.mkdirSync(path.dirname(SETTINGS), { recursive: true });
    fs.writeFileSync(SETTINGS, JSON.stringify(s, null, 2));
}

async function menu() {
    const names = Object.keys(CFG.profiles), cur = currentDefault();
    console.log(`\n  当前本机默认: ${cur ? `${cur}(${CFG.profiles[cur].desc})` : "未识别(不是这 4 套之一)"}\n`);
    names.forEach((n, i) => {
        const ok = fs.existsSync(path.join(KEY_DIR, CFG.profiles[n].keyFile));
        console.log(`  ${i + 1}. ${n.padEnd(10)} ${CFG.profiles[n].desc}${n === cur ? "  ← 当前" : ""}${ok ? "" : `  (缺 key 文件 ${CFG.profiles[n].keyFile})`}`);
    });
    const { createInterface } = await import("node:readline/promises");
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const a = (await rl.question(`\n  输入序号切换(直接回车=不改): `)).trim();
    rl.close();
    const n = names[+a - 1];
    if (!a) return console.log("  没改。");
    if (!n) return console.log(`  没有序号 ${a}, 没改。`);
    setDefault(n);
    console.log(`\n  ✅ 已切到 ${n}(${CFG.profiles[n].desc})\n  写入: ${SETTINGS}\n  新开的 claude 窗口生效; 已开着的窗口要退出重开。`);
}

const [cmd, ...rest] = process.argv.slice(2);
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
    if (!cmd || cmd === "list") {
        console.log(`key 目录: ${KEY_DIR}`);
        for (const [n, p] of Object.entries(CFG.profiles)) {
            const ok = fs.existsSync(path.join(KEY_DIR, p.keyFile));
            console.log(`  ${ok ? "✅" : "❌"} ${n.padEnd(10)} ${p.desc}${ok ? "" : `  (缺 ${p.keyFile})`}`);
        }
        console.log("用法: cs <配置> [claude 参数] | cs file <配置> | cs set <配置> | cs menu(永久切换, 仅手动)");
    } else if (cmd === "file") {
        console.log(profileFile(rest[0]));
    } else if (cmd === "menu") {
        await menu();
    } else if (cmd === "set") {
        setDefault(rest[0]);
        console.log(`已把默认配置切到 ${rest[0]}(${CFG.profiles[rest[0]].desc}); 新开的 claude 生效`);
    } else {
        const f = profileFile(cmd);
        const claude = path.join(process.env.APPDATA || "", "npm", "node_modules", "@anthropic-ai", "claude-code", "bin", "claude.exe");
        const r = spawnSync(fs.existsSync(claude) ? claude : "claude", ["--settings", f, ...rest], { stdio: "inherit" });
        process.exit(r.status ?? 0);
    }
}
