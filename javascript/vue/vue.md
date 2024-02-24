# Vue 2.X

用 vue-cli 创建项目:

```
# 安装cli
npm install -g @vue/cli
vue --version

# 创建项目
cd [path]
vue create [project_name]
```

向 devDependencies 里添加依赖:

```
npm install [dependency_name] --save-dev
```

# src/views/index.vue

标准结构:

```js
// 页面结构
<template>...</template>

// js把数据加入页面
<script>...</script>

// css页面样式
<style>...</style>
```

# `<script>...</script>`

标准结构:

```js
<script>
    // 导包, 导入下面逻辑操作需要用到的函数
    import {(listPost, getPost, delPost, addPost, updatePost)} from
    "@api/system/post"; export default {};

    // 构建 vue 实例
    export default {
        name: "Post",
        dicts: ['sys_normal_disable'],
        // 用来给 template 传数据
        data() {
            ...
        },
        // 初始化方法, 页面加载完毕马上执行(html) --- vue: 模板渲染前加载, 初始化模板数据
        created() {
            // 所有也页面加载的起点
            ...
        },
        // 函数, 方法
        methods: {
            ...
        }
    }
</script>
```

views/index.vue import 的 对应 `api/xxx.js` 的 `export function xxxYYY(param) {}` 操作, 就是 ES6 模板化/组件化语法

`export default {...}` 实际上就是最 low 的 `Vue vue = new Vue({...})` 的方式, 使用非匿名的方式, 对外暴露

所有 web 获取数据都是异步请求, F12 - Network - Type 里:

document -> 页面

font -> 字体

jpeg/png -> 图片

script -> js

xhr -> 异步请求

比如在 Ruoyi-Vue

```js
created() {
    this.getList();
},
```

所有页面加载起点, ctrl 点进 `getList()`, 然后在

```js
methods: {
    /** 查询岗位列表 */
    getList() {
    // 没得到数据前, 转圈圈加载
      this.loading = true;
    // api里导入的函数 listPost()
    // request 请求, 发起异步请求,
      listPost(this.queryParams).then(response => {
        this.postList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
}
```

相当于 `export function listPost(param)` 会传进 utils/request 的 `service.interceptors.request.use(config => {...})` 的 config 里

最终由 `Promis.reject(new Error(message))` 或者 `cache.session.setJSON('sessionObj', requestObj)` 去发送请求

在 `listPost(this.queryParams)` 的 `queryParams` 就是在 `data() {...}` 的

```js
data() {
    return {
        queryParams: {
        pageNum: 1,
        pageSize: 10,
        // 岗位管理-页面搜索界面-三个查询条件参数
        postCode: undefined,
        postName: undefined,
        status: undefined
      },
    }
}
```

然后这些 data 参数, 传入

```js
// 查询岗位列表
export function listPost(query) {
    return request({
        url: "/system/post/list",
        method: "get",
        params: query,
    });
}
```

的 `params`

然后 `.then()` 进入 response 取回数据的 then 循环:

```js
methods: {
    /** 查询岗位列表 */
    getList() {
    // 没得到数据前, 转圈圈加载
      this.loading = true;
    // api里导入的函数 listPost()
    // request 请求, 发起异步请求,
      listPost(this.queryParams).then(response => {
        this.postList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
}
```

然后

```js
created() {
    this.getList();
},
```

得到 methods 里返回的带参数的返回数据, 然后返回 api 里的逻辑, 然后返回 F12 里 Headers-request url: `http://localhost/dev-api/system/post/list?pageNum=1&pageSize=10`

ruoyi 在 `/localhost/dev-api/...` 做了一个代理服务器, 前端 80 端口传后端 8080 端口, 在 `src/vue.config.js`:

```js
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    disableHostCheck: true
  },
```

也就是项目中所有前端带有 `[process.env.VUE_APP_BASE_API]` 的请求都被拦截进入 devServer 代理服务器, 然后转到 `target: http://localhost:8080`

`VUE_APP_BASE_API` ctrl 进去是:

```ts
interface Dict<T> {
    [key: string]: T | undefined;
}
```

实际上指向 `src/` 目录下的 `.env.development`, `.env.production`, `.env.staging` 三个环境里配置的:

```conf
# 若依管理系统/开发环境
VUE_APP_BASE_API = '/dev-api'

# 若依管理系统/生产环境
VUE_APP_BASE_API = '/prod-api'

# 若依管理系统/测试环境
VUE_APP_BASE_API = '/stage-api'
```

就比如 `npm run dev/prod/stage` 都会得到这些配置传回 ts, 再配置到 `src/vue.config.js`

然后最终, 传入后端

```java
@RestController
@RequestMapping("/system/post")
public class SysPostController extends BaseController
{
    @Autowired
    private ISysPostService postService;

    /**
     * 获取岗位列表
     */
    @PreAuthorize("@ss.hasPermi('system:post:list')")
    @GetMapping("/list")
    public TableDataInfo list(SysPost post)
    {
        startPage();
        List<SysPost> list = postService.selectPostList(post);
        return getDataTable(list);
    }
}
```

但是后端没有前端传回的 `pageNum`, `pageSize` 参数, 但其实就在 `BaseEntity.java` 中的

```java
    /** 请求参数 */
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private Map<String, Object> params;
```

接受所有参数, 所有前端传后端, 但后端没有的参数,
都被封装进 params

但是, `pageNum`, `pageSize` 不是在实体类里配置的参数, 是在 BaseController 里面用 PageHelper 配置的:

```java
public class BaseController
{
        /**
     * 设置请求分页数据
     */
    protected void startPage()
    {
        PageUtils.startPage();
    }
}
```

然后在 startPage() 方法里

```java
public class PageUtils extends PageHelper
{
    /**
     * 设置请求分页数据
     */
    public static void startPage()
    {
        PageDomain pageDomain = TableSupport.buildPageRequest();
        Integer pageNum = pageDomain.getPageNum();
        Integer pageSize = pageDomain.getPageSize();
        String orderBy = SqlUtil.escapeOrderBySql(pageDomain.getOrderBy());
        Boolean reasonable = pageDomain.getReasonable();
        PageHelper.startPage(pageNum, pageSize, orderBy).setReasonable(reasonable);
    }

    /**
     * 清理分页的线程变量
     */
    public static void clearPage()
    {
        PageHelper.clearPage();
    }
}
```

里面就有 `PageHelper.startPage(pageNum, pageSize, orderBy).setReasonable(reasonable);`

`Integer pageNum`, `Integer pageSize` 从 `PageDomain pageDomain = TableSupport.buildPageRequest();` 得到 `PAGE_NUM`, `PAGE_SIZE`:

```java
    /**
     * 封装分页对象
     */
    public static PageDomain getPageDomain()
    {
        PageDomain pageDomain = new PageDomain();
        pageDomain.setPageNum(Convert.toInt(ServletUtils.getParameter(PAGE_NUM), 1));
        pageDomain.setPageSize(Convert.toInt(ServletUtils.getParameter(PAGE_SIZE), 10));
        pageDomain.setOrderByColumn(ServletUtils.getParameter(ORDER_BY_COLUMN));
        pageDomain.setIsAsc(ServletUtils.getParameter(IS_ASC));
        pageDomain.setReasonable(ServletUtils.getParameterToBool(REASONABLE));
        return pageDomain;
    }
```

ruoyi 的 `startPage()` 本质上就是 `PageHelper.startPage(qo.getPage(), qo.getCurrentPage(), qo.getPageSize())`, ruoyi 是直接写死封装

@see: https://www.bilibili.com/video/BV1684y1X7tK/?p=18&spm_id_from=pageDriver&vd_source=b8cb8db44d97eb71e6c4a2b35f279324
