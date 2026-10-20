// hs.mjs — Hermes Agent 配置切换(hermes switch, 2026-10-12 用户令: 仿 switch-claude-settings, PC1/PC2/PC3 共用)
// 位置: <dev>\switch-hermes-settings\ ; key 放 <dev>\ 本身(本目录上一级, 与 switch-claude-settings 共用)
// 只改 config.yaml 的 model 段, 且只经官方 `hermes config set`(不手改 yaml, 防缩进损坏把网关搞挂); 改前备份
// 用法(最简单: 双击「switch-hermes-settings.cmd」→ 输序号):
//   hs list            列出配置 + key 文件是否就绪 + 当前用哪套(不显示 key)
//   hs set <配置>      切换本机 hermes 默认模型
//   hs test            用当前配置发一句话验证能通
//   hs menu            交互菜单
// 环境变量: HERMES_KEY_DIR 覆盖 key 目录; HERMES_HOME 指定 hermes 目录(测试可指向假目录)
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(HERE); // 10/20 重组: 代码在 key-switcher/scripts/，配置(profiles-*.json)在 key-switcher/ 根
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, "profiles-hermes.json"), "utf8"));
// key 目录: 环境变量 > 从本工具目录逐级往上找第一个含 *-api-key.txt 的目录(10/12: 工具挪进 dev-notes/others 后, key 仍在 <dev>\)
function findKeyDir() {
    let d = path.dirname(ROOT);
    for (let i = 0; i < 5; i++) {
        try { if (fs.readdirSync(d).some((f) => /-api-key(-[a-z0-9]+)?\.txt$/i.test(f))) return d; } catch { /* 无权限跳过 */ }   // 10/17: 别人的 key 改名 <provider>-api-key-<人名缩写>.txt
        const up = path.dirname(d);
        if (up === d) break;
        d = up;
    }
    return path.dirname(ROOT);
}
const KEY_DIR = process.env.HERMES_KEY_DIR || findKeyDir();
const LOCAL = process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local");
const HOME = process.env.HERMES_HOME || path.join(LOCAL, "hermes");
const CONFIG = path.join(HOME, "config.yaml");

function hermesBin() {
    const cands = [path.join(HOME, "hermes-agent", "bin", "hermes.exe"), path.join(HOME, "bin", "hermes.cmd"), path.join(HOME, "bin", "hermes.exe")];
    return cands.find((p) => fs.existsSync(p)) || "hermes";
}
function hermes(args, opts = {}) {
    const bin = hermesBin();
    // .cmd/裸命令需经 cmd.exe; 显式包一层而非 shell:true(避免 Node DEP0190 警告), 参数逐个加引号
    const q = (s) => `"${String(s).replace(/"/g, '\\"')}"`;
    const r = bin.endsWith(".exe") && fs.existsSync(bin)
        ? spawnSync(bin, args, { encoding: "utf8", env: process.env, ...opts })
        : spawnSync("cmd.exe", ["/d", "/s", "/c", `"${[q(bin), ...args.map(q)].join(" ")}"`], { encoding: "utf8", env: process.env, windowsVerbatimArguments: true, ...opts });
    return { code: r.status ?? 1, out: (r.stdout || "") + (r.stderr || "") };
}
const readKey = (p) => fs.readFileSync(path.join(KEY_DIR, p.keyFile), "utf8").trim();
const hasKey = (p) => fs.existsSync(path.join(KEY_DIR, p.keyFile));

// 读 config.yaml 顶层 model 段(只认简单 key: value 行)
function modelSection() {
    if (!fs.existsSync(CONFIG)) return {};
    const lines = fs.readFileSync(CONFIG, "utf8").replace(/^\uFEFF/, "").split(/\r?\n/);
    const out = {}; let inModel = false;
    for (const l of lines) {
        if (/^model:\s*$/.test(l)) { inModel = true; continue; }
        if (inModel) {
            if (/^\S/.test(l)) break;
            const m = l.match(/^\s+(\w+):\s*(.*?)\s*$/);
            if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
        }
    }
    return out;
}

export function current() {
    const s = modelSection();
    for (const [n, p] of Object.entries(CFG.profiles))
        if (s.api_key && hasKey(p) && readKey(p) === s.api_key && s.base_url === p.base_url) return n;
    return Object.entries(CFG.profiles).find(([, p]) => p.base_url === s.base_url && (s.model || s.default) === p.model)?.[0] || null;
}

export function setProfile(name) {
    const p = CFG.profiles[name];
    if (!p) throw new Error(`未知配置 ${name}(可用: ${Object.keys(CFG.profiles).join("/")})`);
    if (!hasKey(p)) throw new Error(`本机缺 key 文件: ${path.join(KEY_DIR, p.keyFile)}`);
    if (fs.existsSync(CONFIG)) {
        const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15);
        fs.copyFileSync(CONFIG, `${CONFIG}.bak-hs-${stamp}`);
    }
    const sets = [["model.provider", p.provider], ["model.base_url", p.base_url], ["model.model", p.model],
                  ["model.default", p.model], ["model.api_key", readKey(p)]];
    for (const [k, v] of sets) {
        const r = hermes(["config", "set", k, v]);
        if (r.code !== 0) throw new Error(`hermes config set ${k} 失败: ${r.out.replaceAll(v, "<masked>").slice(0, 300)}`);
    }
    return p;
}

function list() {
    const cur = current(), s = modelSection();
    console.log(`hermes 目录: ${HOME}\nkey 目录:    ${KEY_DIR}`);
    console.log(`当前 model 段: provider=${s.provider || "-"} model=${s.model || "-"} default=${s.default || "-"} base_url=${s.base_url || "-"} → ${cur || "未识别"}\n`);
    Object.entries(CFG.profiles).forEach(([n, p], i) =>
        console.log(`  ${i + 1}. ${n.padEnd(14)} ${p.desc}${n === cur ? "  ← 当前" : ""}${hasKey(p) ? "" : `  (缺 key 文件 ${p.keyFile})`}`));   // 10/17: 和 cs 菜单一致, 不加 ✅
}

function after(name) {
    console.log(`\n  ✅ 已切到 ${name}(${CFG.profiles[name].desc})\n  旧配置已备份到 ${CONFIG}.bak-hs-*`);
    console.log("  新开的 hermes 会话生效; 已开的会话发 /new 或退出重开。");
}

// 10/13 用户令: 切换后自动重启微信网关(原为手动 `hermes gateway restart`)。网关没在跑=跳过;
// 交易日盘中(09:10~15:05)重启会让微信 hermes 断几十秒, 交互菜单里先问一句, 非交互(hs set)盘中不重启只提示
export function gatewayRunning() {
    return /Gateway process running/i.test(hermes(["gateway", "status"]).out);
}
const inTradingHours = () => {
    const d = new Date(), hm = d.getHours() * 100 + d.getMinutes();
    return d.getDay() >= 1 && d.getDay() <= 5 && hm >= 910 && hm <= 1505;
};
export async function restartGateway({ interactive = false } = {}) {
    if (!gatewayRunning()) return console.log("  微信网关没在跑(本机不跑网关), 不用重启。");
    if (inTradingHours()) {
        if (!interactive) return console.log("  ⚠ 现在是交易时段, 未自动重启网关(会断微信几十秒); 收盘后跑 `hermes gateway restart`。");
        const { createInterface } = await import("node:readline/promises");
        const rl = createInterface({ input: process.stdin, output: process.stdout });
        const a = (await rl.question("  现在是交易时段, 重启网关会让微信 hermes 断几十秒, 确定重启? (y/N): ")).trim().toLowerCase();
        rl.close();
        if (a !== "y") return console.log("  没重启。收盘后跑 `hermes gateway restart`。");
    }
    console.log("  正在重启微信网关(hermes gateway restart)...");
    const r = hermes(["gateway", "restart"], { timeout: 120000 });
    const ok = r.code === 0 && gatewayRunning();
    console.log(ok ? "  ✅ 网关已重启, 新模型已生效。" : `  ❌ 网关重启可能没成功(exit ${r.code}), 手动跑 \`hermes gateway status\` 看一下:\n${r.out.slice(-400)}`);
}

export async function menu() {
    list();
    const names = Object.keys(CFG.profiles);
    const { createInterface } = await import("node:readline/promises");
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const a = (await rl.question("\n  输入序号切换(直接回车=不改): ")).trim();
    rl.close();
    if (!a) return console.log("  没改。");
    const n = names[+a - 1];
    if (!n) return console.log(`  没有序号 ${a}, 没改。`);
    setProfile(n); after(n);
    await restartGateway({ interactive: true });
}

const [cmd, ...rest] = process.argv.slice(2);
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
    try {
        if (!cmd || cmd === "list") list();
        else if (cmd === "menu") await menu();
        else if (cmd === "set") { setProfile(rest[0]); after(rest[0]); await restartGateway(); }
        else if (cmd === "restart") await restartGateway({ interactive: true });
        else if (cmd === "test") {
            const r = hermes(["chat", "-q", "只回复两个字: 收到"], { timeout: 120000 });
            console.log(r.out.slice(-600)); process.exit(r.code);
        }
        else console.log("用法: hs list | hs set <配置>(切完自动重启网关) | hs test | hs restart | hs menu");
    } catch (e) { console.error("❌ " + e.message); process.exit(1); }
}
