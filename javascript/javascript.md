# JavaScript

# Spread syntax(...)

展开语法

# floor divid

Java 中向下取整的 `/`, js 中要写成:

```js
num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2);
```

# array.sort

js 中的排序, 要手写

i.e. 1:

```js
diff.sort((o1, o2) => {
    return o1 - o2;
});
```

# .js vs .mjs

| 文件类型                                     | 模块系统           | 语法示例                                             | Node.js 默认行为 |
| -------------------------------------------- | ------------------ | ---------------------------------------------------- | ---------------- |
| `.js`                                        | CommonJS（默认）   | `const fs = require('fs')`<br>`module.exports = ...` | 直接运行         |
| `.mjs`                                       | ES Modules（强制） | `import fs from 'fs'`<br>`export default ...`        | 支持 `import`    |
| `.js` + `"type": "module"` in `package.json` | ES Modules         | 同上                                                 | 也可用 ESM       |

对于只提供 ESM(ES Modules) 语法导出的包(通常是插件 API), 脚本只能用 mjs 写
