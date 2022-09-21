<p align="center">
    <a href="#html5">
        <img src="https://img.shields.io/badge/-HTML-3C415C?style=plastic&logo=html5&logoColor=E34F26" />
    </a>
    <a href="#css3">
        <img src="https://img.shields.io/badge/-CSS-3C415C?style=plastic&logo=css3&logoColor=1572B6" />
    </a>
    <a href="#javascript">
        <img src="https://img.shields.io/badge/-JavaScript-3C415C?style=plastic&logo=javascript&logoColor=F7DF1E" />
    </a>
    <a href="#ide">
        <img src="https://img.shields.io/badge/-VSCode-3C415C?style=plastic&logo=visualstudiocode&logoColor=007ACC" />
    </a>
</p>
<p align="center">
    <a href="#react">
        <img src="https://img.shields.io/badge/-React-3C415C?style=plastic&logo=react&logoColor=61DAFB" />
    </a>
</p>

# 2022-HTML-CSS-JavaScript

| [HTML](#html5) | [CSS](#css3) | [JavaScript](#javascript)| [React](#react) | [IDE](#ide) | [Bugs](#bugs) |

# HTML5

`HTML` 是\"结构\", 包含 \[页面元素\] 和 \[内容\]

`CSS` 是\"表现\", 包含 页面元素和内容的 \[外观,位置等样式\], e.g. 颜色, 大小...

`JS` 是\"行为\", 包含 页面模型的 \[定义\] 和 \[页面交互\]

`Web` 的标准就是: `结构 + 表现 + 行为` 三层分离

---

空格: `&nbsp;`

# CSS3

`font-weight` 属性:

1. 关键字复制:
   normal: 正常
   bold: 加粗
2. 纯数字复制, 用\[100,900\]整百数, e.g:
   400: normal
   700: bold

---

`font-style` 属性:

1. `sans-serif` \[无衬线字体\] 如: 黑体, Arial
2. `serif` \[衬线字体\] 如: 宋体, Times New Roman
3. `monospace` \[等宽字体\] 如: Consolas, fira code

---

`margin` 外边距 属性:

```css
margin: [上边距] [右边距] [下边距] [左边距];
margin: [上边距] [左右边距] [下边距];
margin: [上下边距] [左右边距];
margin: [所有边距];
```

---

`padding` 填充 属性:

```css
padding: [上填充] [右填充] [下填充] [左填充];
padding: [上填充] [左右填充] [下填充];
padding: [上下填充] [左右填充];
padding: [所有填充];
```

---

`flex-wrap` 属性:

```css
/* 默认值, 不拆行 不拆列 */
flex-wrap: nowrap;

/* 必要的时候 拆行 拆列 */
flex-wrap: wrap;

/* 反序 */
flex-wrap: wrap-reverse;
```

---

`position` 属性:

```css
/* 相对定位, 相对于其正常位置进行定位 */
position: relative;

/* 绝对定位, 相对于 static 定位以外的 第一个 父元素 进行定位 */
/* 通过 left, top, right, bottom 属性进行调整 */
position: absolute;

/* 绝对定位, 相对于浏览器窗口的定位 */
/* 通过 left, top, right, bottom 属性进行调整 */
position: fixed;

/* 默认值, 没有定位, 忽略 left, top, right, bottom 属性的声明 */
position: static;
```

---

`text-decoration` 属性:

```css
/* 默认值, 标准文本 */
text-decoration: none;

/* 定义文本下的一条线 */
text-decoration: underline;

/* 定义文本上的一条线 */
text-decoration: overline;

/* 定义穿过文本下的一条线 */
text-decoration: line-through;

/* 定义闪烁的文本 */
text-decoration: blink;
```

---

`white-space` 属性:

用于设置如何处理元素内的 \[空白\]

```css
/* 默认值, 空白符会被浏览器忽略 */
white-space: normal;

/* 空白符会被浏览器保留, 和 HTML 里的 <pre> 标签一样 */
white-space: pre;

/* 文本不换行, 直到遇到 <br> 为止 */
white-space: nowrap;

/* 保留空白符序列, 正常的换行 */
white-space: pre-wrap;

/* 合并空白符序列, 但是保留换行符 */
white-space: pre-line;

/* 继承父元素的值 */
white-space: inherit;
```

---

\[块级\], \[行内\], \[行内块\] 元素

@see https://juejin.cn/post/6998925491797229599

@see https://blog.csdn.net/u011523953/article/details/105461641

---

`px`, `em`, `rem` 区别

`px` 是固定的像素, 一旦设置了, 无法因为适应页面大小而更改;

`em` 和 `rem` 相对于 `px` 更灵活, 是相对单位

@see https://www.runoob.com/w3cnote/px-em-rem-different.html

---

`flex` 布局里嵌套 `absolute` 元素:

父元素已经是 `display: flex;` 时, 通过用 \[更高优先级\] 的 `position: absolute;` 来强制子元素的定位

此外, 父元素 `flex` 会导致子元素的 `float`, `clear`, `vertical-align` 属性失效

---

`min()` 函数

`min()` 函数让你可以从一个逗号分隔的表达式列表中选择最小的值作为属性的值

`min()` 函数方法接受一个或多个用逗号分隔的表达式作为他的参数，数值最小的表达式的值将会作为指定的属性的值

---

选择器

1. \~

    波浪号选择器

    `A ~ B` 表示选择 A 元素 后的所有 B 元素, 但是 A 元素 和 B 元素 必须有相同的父元素

2. \+

    加号选择器 \/ 兄弟选择器

    `A + B` 表示选择紧邻再 A 元素 后面的 B 元素, 但是 A 元素 和 B 元素 必须有相同的父元素, 且所选到的仅为一个 B 元素

3. \>

    大于号选择器, 表示某个元素的下一代元素

    `A > B`表示选择 A 元素 里的 B 元素, 其中 B 元素 是 A 元素 的第一代

@see https://www.jianshu.com/p/d875f680fc6b

---

`object-fit` 和 `object-position` 属性

1. `object-fit` 属性指定 \[元素\] 和 \[内容\] 该如何去适应指定容器的高和宽

    `object-fit` 一般用于 `img`, `video` 标签, 对这些元素进行保留原始比例的裁剪,缩放,拉伸

    ```css
    object-fit: fill|contain|cover|scale-down|none|initial|inherit;
    ```

2. `object-position` 属性用来设置元素的位置, **一般与 `object-fit` 一起用**

    `object-position` 也是一般用于 `img`, `video` 标签

    ```css
    object-position: position|initial|inherit;
    ```

---

`vw, vh`, `%` 的区别:

1. `%` 是基于 \[父元素\] 的 宽度/高度百分比

    `vw, vh` 是基于 \[视窗\] 的 宽度/高度百分比

2. `vw, vh` 可以直接获取 宽度/高度

    `%` 再没有设置 `body` 里的 宽度/高度 情况下, 无法正确获取可视区域的 宽度/高度

3. `vmin` 获取 `vw, vh` 中较小值

4. `vmax` 获取 `vw, vh` 中较大值

一般来说还是用 `vw, vh` 定义父元素比较多

# JavaScript

js 没有 `char` 类型

---

`new int[]` 在 js 中要记得`fill`:

```js
// 声明长度为2的int数组
let range = new Array(2).fill(0);
```

---

`map.containsKey()` 在 js 中写作

```js
map.has(key);
```

# React

React 本质上就是一个 JS MVC 框架 种的 V(View)

React 构建页面 UI 的库, 把界面分成一个个独立的组件

特性:

1. 声明式
2. 通过虚拟 DOM 减少与 DOM 的交互 (把真实 DOM 树转成 JS 对象树
3. 可以与已知的库和框架配合
4. JSX JS 语法扩展
5. react 组件 提高代码复用 每一个组件都是 H5, CSS, JS 合集
6. 单向响应数据流 比传统数据绑定更简单

# IDE

VSCode 配置:

1. 插件 Prettier

    Settings -> User -> Deafult Formatter -> Prettier

    Settings -> User -> 勾选 Format On Save

    Settings -> User -> Prettier:Tab Width-更改为 4

2. 插件 LiveServer
3. 插件 Preview on web server
4. 插件 Live Preview
5. 插件 Markdown Preview Enhanced
6. 插件 IntelliCode API Usage Examples

---

VSCode 快速配置:

复制粘贴 `C:\Users\sichu\AppData\Roaming\Code\User` 里的 `settings.json`

也可以 `Ctrl+Shift+P` -> `Export settings profile` 然后再 `import`

# Bugs

BUG: 不同的 `font-awesome icon` 的 `size` 不同

解决: 在 `url` 末尾加上 ` fa-fw`

要求: 4.0 以上的版本

@see https://fontawesome.com/docs/web/style/fixed-width

---

BUG: `font-awesome` 的 `<i>` 标签加了 ` fa-fw` 后, 在 `collapse toggle` 折叠切换后 依然无法实现同一个 `size`

解决: 在 `<i>` 标签外 再嵌套一层 `<span>` 标签

i.e.:

```html
<li class="navibar-item">
    <span>
        <i class="fa-solid fa-house fa-fw" id="home"></i>
    </span>
    <span class="navibar-item-text">Home</span>
</li>
```

---

需求: `<input>` 标签里搜索框会有默认提示, 想要改成自定义提示

解决: 更改 `oninvalid` 的值

```html
<input
    type="search"
    class="search-text"
    required
    placeholder="Search"
    oninvalid="this.setCustomValidity('Can\' be empty')"
    oninput="setCustomValidity('')"
/>
```

注意: `oninput=""` 后面是不带 `this.` 的, 为了在提示后, 成功输入 \[valid\] 值后自动隐藏提示框

---

`<button>`标签的坑

问题: `<button>`标签 默认自带 灰色边框

解决: CSS 里加一行

```css
border: none;
```

---

`<input>` 标签里 `input type="search"`的坑

问题: `input type="search"`搜索框 在获得焦点时会自带 边框 + 轮廓

解决: CSS 里加两行

```css
border: none;
outline: none;
```
