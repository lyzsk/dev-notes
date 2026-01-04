# VS Code

# VSCode Config

VSCode 配置:

<!-- 1. 插件 Prettier

    Settings -> User -> Deafult Formatter -> Prettier

    Settings -> User -> 勾选 Format On Save

    Settings -> User -> Prettier:Tab Width-更改为 4

2. 插件 LiveServer
3. 插件 Preview on web server
4. 插件 Live Preview
5. 插件 Markdown Preview Enhanced
6. 插件 IntelliCode API Usage Examples
7. 插件 ES7+ React/Redux/React-Native snippets
8. 插件 Scala Syntax(official)
9. 插件 Markdown Perview Mermaid Support -->
 <!-- 10. Vue Language Features(Volar)
10. Vetur -->
<!-- 11. Vue Official
12. Vite -->

1. Prettier
2. Live Server
3. Live Preview
4. Vue Official
5. Vite
6. Markdown Preview Mermaid Support
7. Fitten Code

---

VSCode 快速配置:

复制粘贴 `C:\Users\sichu\AppData\Roaming\Code\User` 里的 `settings.json`

也可以 `Ctrl+Shift+P` -> `Export settings profile` 然后再 `import`

---

Vue3 的 ref 要 .value 很麻烦, 在 **Vue - Official** 设置(可能跟着 settings.json 一起不用手动配置)

extension settings - 勾选 Auto-complete Ref value with `.value`

---

# VSCode Shortcuts

`alt + z`: 自动换行

`ctrl + d`： 多选, 按 `esc` 退出多选

`shift + alt + down`: 复制粘贴一整行

`ctrl + shift + p + 输入 fold all`: 折叠所有代码块

`ctrl + g + 输入数字`: 跳转到 \[数字\] 行

`ctrl + k + o`: 打开文件夹

`ctrl + l` 全选一行

# VSCode Terminal

快捷键: "ctrl + `"

`clear` = `cls` 清楚内容

# snippets

左下角齿轮 - snippets

输入 vue -> 自动跳转 vue.json

```json
{
    "vue3": {
        "prefix": "vue3",
        "body": [
            "<template>",
            "",
            "</template>",
            "",
            "<script setup lang=\"ts\">",
            "",
            "</script>",
            "",
            "<style scoped>",
            "",
            "</style>",
            ""
        ],
        "description": "vue3 template"
    }
}
```

以后直接输入 `vue3` 就会自动创建模板

# stock.md

settings - new snippet file

```json
{
    "stock": {
        "prefix": "stock",
        "body": [
            "## 盘前",
            "",
            "### 当前持仓",
            "",
            "### 预期仓位",
            "",
            "0 仓:",
            "",
            "| 资产类别 |     标的组合      | 仓位 | 仓数 |",
            "| :------: | :---------------: | :--: | :--: |",
            "|          |                   |  0%  |  0   |",
            "|          |                   |  0%  |  0   |",
            "|   现金   | 国债逆回购(GC001) |  0%  |  0   |",
            "",
            "## 涨停梯队",
            "",
            "## 财联社大涨股解读",
            "",
            "## 复盘",
            "",
            "| 涨停 | 大于+8% | +8% | +6% | +4% | +2% | 0%  | -2% | -4% | -6% | -8% | 小于-8% | 跌停 |",
            "| :--: | :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-----: | :--: |",
            "|      |         |     |     |     |     |     |     |     |     |     |         |      |",
            "",
            "### 复盘持仓",
            ""
        ],
        "description": "stock template"
    }
}
```
