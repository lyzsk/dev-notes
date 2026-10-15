// ss.mjs — 配置切换总入口(2026-10-13 用户令: switch-claude-settings + switch-hermes-settings 合并为 mini-cc-switch)
// 第一步选切哪个(1=Claude Code / 2=Hermes) → 第二步选配置(provider/key/model, 同原菜单) → Hermes 切完自动重启微信网关
// 双击「mini-cc-switch.cmd」即可; 命令行仍可单独用 cs.cmd / hs.cmd(用法见各自文件头)
import { createInterface } from "node:readline/promises";

const rl = createInterface({ input: process.stdin, output: process.stdout });
console.log("\n  要切换哪个?\n\n  1. Claude Code(本机 ~/.claude/settings.json)\n  2. Hermes(本机 hermes config.yaml, 切完自动重启微信网关)\n");
const a = (await rl.question("  输入序号(直接回车=退出): ")).trim();
rl.close();
if (a === "1") await (await import("./cs.mjs")).menu();
else if (a === "2") await (await import("./hs.mjs")).menu();
else console.log("  没改。");
