// manual-switcher.mjs — 手动切换总入口(2026-10-13 用户令: switch-claude-settings + switch-hermes-settings 合并; 10/20 目录 mini-cc-switch → key-switcher, ss.mjs → scripts/manual-switcher.mjs)
// 第一步选切哪个(1=Claude Code / 2=Hermes) → 第二步选配置(provider/key/model, 同原菜单) → Hermes 切完自动重启微信网关
// 双击 key-switcher 根目录的「manual-switcher.cmd」即可; 命令行也可直接 node cs.mjs … / node hs.mjs …(用法见各自文件头; cs.cmd/hs.cmd 10/20 已删)
import { createInterface } from "node:readline/promises";

const rl = createInterface({ input: process.stdin, output: process.stdout });
console.log("\n  要切换哪个?\n\n  1. Claude Code(本机 ~/.claude/settings.json)\n  2. Hermes(本机 hermes config.yaml, 切完自动重启微信网关)\n");
const a = (await rl.question("  输入序号(直接回车=退出): ")).trim();
rl.close();
if (a === "1") await (await import("./cs.mjs")).menu();
else if (a === "2") await (await import("./hs.mjs")).menu();
else console.log("  没改。");
