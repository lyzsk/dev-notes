// auto-switcher-kimi 切换决策端到端 dry-run 测试：临时目录 + 假日志，零网络、零真实切换、零计划任务。
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SELF = path.join(HERE, "auto-swicher.mjs");

function fixture() {
    // 11/2 实测：12:58:39 报 5h → 12:58:41 单 token 探测 200 → 13:10/13:17 又报 5h
    const data = fs.mkdtempSync(path.join(os.tmpdir(), "kk-data-"));
    const projects = fs.mkdtempSync(path.join(os.tmpdir(), "kk-proj-"));
    const errText =
        "API Error: Request rejected (429) · You've reached your 5-hour usage limit. Your quota will reset when the current 5-hour window ends.";
    const lines = ["2026-11-02T05:10:05.000Z", "2026-11-02T05:17:31.000Z"].map((ts, i) =>
        JSON.stringify({
            type: "assistant",
            uuid: "e" + i,
            timestamp: ts,
            isApiErrorMessage: true,
            message: { role: "assistant", content: [{ type: "text", text: errText }] },
        }),
    );
    fs.writeFileSync(path.join(projects, "s.jsonl"), lines.join("\n") + "\n");
    fs.writeFileSync(
        path.join(data, "auto-switcher-kimi-state.json"),
        JSON.stringify({
            keys: {
                "kimi-code": {
                    last_probe: { time: "2026-11-02 12:58:41", result: "ok", status: 200, msg: "" },
                    last_ok_at: "2026-11-02 12:58:41",
                },
            },
        }),
    );
    return { data, projects };
}

function dryRun(f, asName = "kimi-code") {
    const r = spawnSync(
        process.execPath,
        [SELF, "run", "--dry-run", "--as", asName, "--now", "2026-11-02 13:18:00"],
        { encoding: "utf8", env: { ...process.env, KIMI_SWITCHER_DATA: f.data, KIMI_PROJECTS_DIR: f.projects }, timeout: 60_000 },
    );
    assert.equal(r.status, 0, r.stderr);
    return r.stdout;
}

test("探测ok后仍连续报5h → 冷却内也先切 DeepSeek，并挂回切订阅的一次性任务", () => {
    const out = dryRun(fixture());
    assert.match(out, /探测 ok 后 10 分钟内 2 条真实额度报错/);
    assert.match(out, /当前=kimi-code → switch deepseek/);
    assert.match(out, /会注册一次性计划任务 auto-swicher-return 于 2026-11-02 13:48/); // 11/3 连击真实报错后，受限记录按 13:18+30 分钟回探
});

test("普通429/overloaded 不触发额度切换", () => {
    const f = fixture();
    fs.writeFileSync(
        path.join(f.projects, "s.jsonl"),
        JSON.stringify({
            type: "assistant",
            uuid: "x",
            timestamp: "2026-11-02T05:17:31.000Z",
            isApiErrorMessage: true,
            message: { role: "assistant", content: [{ type: "text", text: "Request rejected (429) · The engine is currently overloaded" }] },
        }) + "\n",
    );
    const out = dryRun(f);
    assert.match(out, /当前=kimi-code → keep/);
    assert.doesNotMatch(out, /switch kimi-api/);
});

test("当前在 kimi-api 且订阅受限 → 先切 DeepSeek", () => {
    const out = dryRun(fixture(), "kimi-api");
    assert.match(out, /当前=kimi-api → switch deepseek/);
});

test("DeepSeek 也受限时 → 顺序后移到 kimi-api", () => {
    const f = fixture();
    const statePath = path.join(f.data, "auto-switcher-kimi-state.json");
    const st = JSON.parse(fs.readFileSync(statePath, "utf8"));
    st.keys.deepseek = { limit_5h: { hit_at: "2026-11-02 12:00:00", reset_at: "2026-11-02 23:00:00" } };
    fs.writeFileSync(statePath, JSON.stringify(st));
    const out = dryRun(f, "deepseek");
    assert.match(out, /switch kimi-api/);
});
