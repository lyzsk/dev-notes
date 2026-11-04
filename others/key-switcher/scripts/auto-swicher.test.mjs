// auto-switcher-kimi 的额度分类离线回归测试；不发网络请求。
import test from "node:test";
import assert from "node:assert/strict";
import { quotaKindFromBody } from "./auto-swicher.mjs";

test("普通 429 / overloaded / unrecognized_model 不算额度窗口", () => {
    assert.equal(quotaKindFromBody("Request rejected (429) · The engine is currently overloaded"), null);
    assert.equal(quotaKindFromBody("unrecognized_model; HTTP 429"), null);
    assert.equal(quotaKindFromBody("Too many requests, retry later"), null);
});

test("只有明确额度文本才返回窗口类型", () => {
    assert.equal(quotaKindFromBody("You've reached your 5-hour usage limit. Your quota will reset soon"), "5h");
    assert.equal(quotaKindFromBody("You've reached your 7-day usage limit"), "7d");
    assert.equal(quotaKindFromBody("已达到 5 小时的使用上限"), "5h");
});
