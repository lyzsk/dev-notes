`npm install element-plus --save`

@see: https://element-plus.org/en-US/guide/installation.html

main.ts:

```ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
```

icon 安装:

`npm install @element-plus/icons-vue`

```ts
// main.ts

// if you're using CDN, please remove this line.
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
```
