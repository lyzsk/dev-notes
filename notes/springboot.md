# Springboot

| [@ServletComponentScan](#servletcomponentscan) | [domain vs entity vs model](#domain-vs-entity-vs-model) | [repository vs dao vs mapper](#repository-vs-dao-vs-mapper)

# ServletComponentScan

启动类添加 `@ServletComponentScan` 注解后, 就回去扫描带有 `@WebServlet`, `@WebListener`, `@WebFilter` 注解的类, 有的话就会把这三种类型, 有的话就会把这三种类型的类转换成 `@ServletRegistrationBean`, `@ServletListenerRegistrationBean`, `@FilterRegistrationBean`, 然后交给 Spring 容器取解析

## Example

比如做登录过滤器的时候, 就可以实现 `Filter` 并加上 `@WebFilter` 注解:

```java
@WebFilter(filterName = "loginCheckFilter", urlPatterns = "/*")
public class LoginCheckFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest,
        ServletResponse servletResponse, FilterChain filterChain)
        throws IOException, ServletException {
            // ...
        }
}
```

## see

https://juejin.cn/post/6844904019391938574

# domain vs entity vs model

entity = model = 实体类

多个 model/entity 组合起来对同一业务的实体类包名叫 domain

# repository vs dao vs mapper

repository = dao = mapper = 映射类

repository 在 hibernate, jpa 里用

mapper 在 mybatis, mybatis plus 里用

还是叫 dao 比较简单...

# Bugs

## Required request body is missing

一个弱智想当然导致的错误, 报错:

```
Resolved [org.springframework.http.converter.HttpMessageNotReadableException: Required request body is missing: public cn.sichu.fda.common.Result<java.util.List<cn.sichu.fda.entity.AddressBook>> cn.sichu.fda.controller.AddressBookController.list(cn.sichu.fda.entity.AddressBook)]
```

但是明明在 list 方法里添加了 `@RequestBody` 给 JSON 数据:

```java
@GetMapping("/list")
public Result<List<AddressBook>> list(@RequestBody AddressBook addressBook) {

}
```

排查后发现前端方法不需要传 data, 也就是说不需要传 JSON 进去!!!

```js
// address.html
new Vue({
    el: "#address",
    data() {
        return {
            addressList: [],
        };
    },
    methods: {
        async initData() {
            const res = await addressListApi();
            if (res.code === 1) {
                this.addressList = res.data;
            } else {
                this.$message.error(res.msg);
            }
        },
    },
});

// address.js
//获取所有地址
function addressListApi() {
    return $axios({
        url: "/addressBook/list",
        method: "get",
    });
}
```

所以只要把 list 方法的 `@RequestBody` 去掉就行了:

```java
@GetMapping("/list")
public Result<List<AddressBook>> list(AddressBook addressBook) {

}
```

总结: 不要想当然!!! 写 Controller 方法的时候一个一个对着接口写!!!
