# VS Code

# VSCode Config

VSCode 配置:

1. Prettier
2. Live Server
3. Live Preview
4. Markdown Auto Space
5. Vue Official
6. Vite
7. Markdown Preview Mermaid Support

---

VSCode 快速配置:

复制粘贴 `C:\Users\sichu\AppData\Roaming\Code\User` 里的 `settings.json`

也可以 `Ctrl+Shift+P` -> `Export settings profile` 然后再 `import`

---

Vue3 的 ref 要 .value 很麻烦, 在 **Vue - Official** 设置 (可能跟着 settings.json 一起不用手动配置)

extension settings - 勾选 Auto-complete Ref value with `.value`

---

# VSCode Shortcuts

`alt + z`: 自动换行

`ctrl + d`：多选, 按 `esc` 退出多选

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
