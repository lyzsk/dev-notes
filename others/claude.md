# claude code

`npm install -g @anthropic-ai/claude-code`

`claude --version`

`notepad %USERPROFILE%\.claude\settings.json`

https://www.kimi.com/code 的 key:

```json
{
    "env": {
        "ANTHROPIC_BASE_URL": "https://api.kimi.com/coding/",
        "ANTHROPIC_API_KEY": "sk-你的Key",
        "ANTHROPIC_MODEL": "kimi-for-coding",
        "ANTHROPIC_DEFAULT_OPUS_MODEL": "kimi-for-coding",
        "ANTHROPIC_DEFAULT_SONNET_MODEL": "kimi-for-coding",
        "ANTHROPIC_DEFAULT_HAIKU_MODEL": "kimi-for-coding",
        "ANTHROPIC_DEFAULT_FABLE_MODEL": "kimi-for-coding",
        "CLAUDE_CODE_SUBAGENT_MODEL": "kimi-for-coding",
        "CLAUDE_CODE_AUTO_COMPACT_WINDOW": "262144",
        "CLAUDE_CODE_MAX_CONTEXT_TOKENS": "262144"
    }
}
```

https://platform.kimi.com/ 的 key:

```json
{
    "env": {
        "ANTHROPIC_BASE_URL": "https://api.moonshot.cn/anthropic",
        "ANTHROPIC_AUTH_TOKEN": "sk-你的key",
        "ANTHROPIC_MODEL": "kimi-k3[1m]",
        "ANTHROPIC_DEFAULT_OPUS_MODEL": "kimi-k3[1m]",
        "ANTHROPIC_DEFAULT_SONNET_MODEL": "kimi-k3[1m]",
        "ANTHROPIC_DEFAULT_HAIKU_MODEL": "kimi-k3[1m]",
        "ANTHROPIC_DEFAULT_FABLE_MODEL": "kimi-k3[1m]",
        "CLAUDE_CODE_SUBAGENT_MODEL": "kimi-k3[1m]",
        "ENABLE_TOOL_SEARCH": "false",
        "CLAUDE_CODE_AUTO_COMPACT_WINDOW": "1048576",
        "CLAUDE_CODE_EFFORT_LEVEL": "max"
    }
}
```

`set ANTHROPIC`

`claude`

# `/` 命令速查表

| 命令 / 别名                         | 功能说明                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| `/clear` / `/reset` / `/new`        | 清空当前对话，开始全新会话                                                       |
| `/compact`                          | 压缩对话，保留核心上下文，释放 context window 空间                               |
| `/resume` / `/continue`             | 恢复之前的会话                                                                   |
| `/rename`                           | 重命名当前会话，便于后续查找                                                     |
| `/export [filename]`                | 导出对话为文本文件（JSON/Markdown）                                              |
| `/copy [N]`                         | 复制最近 N 条消息到剪贴板                                                        |
| `/rewind` / `/checkpoint` / `/undo` | 回退到对话中某个历史状态                                                         |
| `/branch` / `/fork`                 | 从当前对话分叉出一个新分支                                                       |
| `/recap`                            | 生成当前会话的一句话摘要                                                         |
| `/exit` / `/quit`                   | 退出 Claude Code（会话自动保存，可用 `/resume` 恢复）                            |
| `/model`                            | 切换当前使用的模型（Sonnet, Opus, Haiku 等）                                     |
| `/effort [level]`                   | 设置推理深度：`low` / `medium` / `high` / `xhigh` / `max` / `ultracode` / `auto` |
| `/fast [on\|off]`                   | 开启 / 关闭快速模式，自动切换最快模型                                            |
| `/plan [description]`               | 进入计划模式，先制定方案再执行代码                                               |
| `/init`                             | 扫描项目结构，自动生成 `CLAUDE.md`                                               |
| `/memory`                           | 打开并编辑项目记忆文件（CLAUDE.md）                                              |
| `/tasks` / `/bashes`                | 查看和管理当前会话中的后台任务                                                   |
| `/review`                           | 对当前代码进行代码审查                                                           |
| `/security-review`                  | 分析 git diff，检测安全漏洞（注入、认证、数据泄露等）                            |
| `/debug`                            | 自动分析并修复 bug                                                               |
| `/simplify`                         | 简化复杂代码，降低圈复杂度                                                       |
| `/diff`                             | 查看当前会话中文件的修改 diff                                                    |
| `/batch "task" pattern`             | 在多个文件上执行相同任务                                                         |
| `/loop "condition"`                 | 循环执行直到满足条件                                                             |
| `/run`                              | 启动并驱动项目应用，验证改动                                                     |
| `/config` / `/settings`             | 打开 Claude Code 配置界面                                                        |
| `/permissions` / `/allowed-tools`   | 管理工具权限：文件访问、bash 执行、MCP 工具等                                    |
| `/hooks`                            | 管理事件钩子（pre/post command）                                                 |
| `/sandbox`                          | 开启沙箱模式，限制权限                                                           |
| `/add-dir`                          | 将其他目录添加到工作范围                                                         |
| `/doctor`                           | 诊断安装和配置问题                                                               |
| `/terminal-setup`                   | 配置终端快捷键                                                                   |
| `/mcp`                              | 查看已连接的 MCP 服务器及其工具列表                                              |
| `/mcp list`                         | 列出所有 MCP 服务器                                                              |
| `/mcp install`                      | 安装新的 MCP 服务器                                                              |
| `/cost`                             | 查看当前会话的 token 使用量和费用                                                |
| `/usage`                            | 查看账户总用量                                                                   |
| `/stats`                            | 查看详细统计信息                                                                 |
| `/insights`                         | 打开分析面板，查看 productivity metrics                                          |
| `/help`                             | 列出所有可用命令（内置 + 自定义）                                                |
| `/bug`                              | 提交产品反馈                                                                     |
| `/feedback`                         | 发送产品反馈                                                                     |
| `/theme`                            | 切换颜色主题                                                                     |
| `/focus`                            | 切换专注视图，只显示最后提示和工具调用摘要                                       |
| `/tui [default\|fullscreen]`        | 切换终端 UI 渲染模式                                                             |
| `/schedule` / `/routines`           | 创建 / 管理定时任务，在云端执行                                                  |
| `/teleport` / `/tp`                 | 将网页版 Claude Code 会话拉取到终端                                              |
| `/team-onboarding`                  | 根据过去 30 天使用记录生成团队 onboarding 指南                                   |
| `/powerup`                          | 通过交互式教程发现 Claude Code 功能                                              |
| `/radio`                            | 打开 Claude FM 音乐电台                                                          |
