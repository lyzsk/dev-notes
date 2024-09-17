`npm i pinia`

@see: https://pinia.vuejs.org/

main.ts:

```ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
```
