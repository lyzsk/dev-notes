# web server failed to start, port xxxx already in use

Bug: Web server failed to start. Port 8080 was already in use.

Solve:

step1:

```
netstat -ano | findstr <port_used>
```

step2:

```
taskkill /F /PID <pid>
```

i.e.

```
C:\Users\sichu>netstat -ano | findstr 8080
  TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       6236
  TCP    [::]:8080              [::]:0                 LISTENING       6236

C:\Users\sichu>taskkill /F /PID 6236
SUCCESS: The process with PID 6236 has been terminated.
```

# The dependencies of some of the beans in the application context form a cycle

Bug:

```
Description:

The dependencies of some of the beans in the application context form a cycle:

   securityConfig (field cn.sichu.security.UserDetailsServiceImpl cn.sichu.config.SecurityConfig.userDetailsService)
      ↓
   userDetailsServiceImpl (field cn.sichu.service.IUserService cn.sichu.security.UserDetailsServiceImpl.userService)
┌─────┐
|  userServiceImpl (field cn.sichu.service.IMenuService cn.sichu.service.impl.UserServiceImpl.menuService)
↑     ↓
|  menuServiceImpl (field cn.sichu.service.IUserService cn.sichu.service.impl.MenuServiceImpl.userService)
└─────┘


Action:

Relying upon circular references is discouraged and they are prohibited by default. Update your application to remove the dependency cycle between beans. As a last resort, it may be possible to break the cycle automatically by setting spring.main.allow-circular-references to true.
```

解决:

方法一: 配置文件里添加一行

```yml
spring:
    main:
        allow-circular-references: true
```

方法二: 给循环依赖的任意一个类里, 注入的时候加上 `@Lazy`

```java
@Service
public class MenuServiceImpl extends ServiceImpl<MenuMapper, Menu> implements IMenuService {

    @Lazy
    @Autowired
    IUserService userService;
}
```

# update snowflake id incorrect (different output between backend and frontend and mysql)

后端 console 里输出的 sql 是:

```
Creating a new SqlSession
SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@24a0ba3c] was not registered for synchronization because synchronization is not active
JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@6e15ef51] will not be managed by Spring
==>  Preparing: UPDATE employee SET status=?, update_time=?, update_user=? WHERE id=?
==> Parameters: 0(Integer), 2022-12-20T21:29:17.878(LocalDateTime), 1(Long), 1605314025255661600(Long)
<==    Updates: 0
```

而 db 里存的 id 是: `1605314025255661569`

然而查前端的 network:

1. `employee` (update 方法 putmapping 是 "/employee") 的 payload 是: `{id: 1605314025255661600, status: 0}`

2. `page?page=1&pageSize=2` (click 更新后 getmapping 是 "/page") 的 response 里是 `{"code":1,"msg":null,"data":{"records":[{"id":1605314025255661569,`

简而言之, 就是 sql 语句执行的 id 和 db 里存的 id 不一致

错误原因:

js 的问题, 损失了精度, 雪花算法生成的 id 是 19 位的, response 里是正确的, 而 js 处理 response 的时候损失了精度, 因为 js 只能保证前 16 位是精确的, 后面的进行了四舍五入 569 -> 600

解决方法:

在给服务端响应 json 数据时把 Long 类型型统一转化为 String 类型

1. 提供对象转换器 `JacksonObjectMapper`, 基于 Jackson 进行 Java 对象到 json 数据的转换

```java
public class JacksonObjectMapper extends ObjectMapper {
    public static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";
    public static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static final String DEFAULT_TIME_FORMAT = "HH:mm:ss";

    public JacksonObjectMapper() {
        super();
        //收到未知属性时不报异常
        this.configure(FAIL_ON_UNKNOWN_PROPERTIES, false);

        //反序列化时，属性不存在的兼容处理
        this.getDeserializationConfig()
            .withoutFeatures(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

        SimpleModule simpleModule =
            new SimpleModule().addDeserializer(LocalDateTime.class,
                    new LocalDateTimeDeserializer(
                        DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))
                .addDeserializer(LocalDate.class, new LocalDateDeserializer(
                    DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))
                .addDeserializer(LocalTime.class, new LocalTimeDeserializer(
                    DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)))

                .addSerializer(BigInteger.class, ToStringSerializer.instance)
                .addSerializer(Long.class, ToStringSerializer.instance)
                .addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(
                    DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))
                .addSerializer(LocalDate.class, new LocalDateSerializer(
                    DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))
                .addSerializer(LocalTime.class, new LocalTimeSerializer(
                    DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)));

        //注册功能模块 例如，可以添加自定义序列化器和反序列化器
        this.registerModule(simpleModule);
    }
}
```

重点在 `.addSerializer(Long.class, ToStringSerializer.instance)`, 也就是遇到 Long 类型 使用 `ToStringSerializer`, 同理对于 LocalDateTime, LocalDate, LocalTime 的转换, 因为前端 json 里日期是: `[date_time]` 的形式, 使用起来不如 String 方便

2. 在 `WebMvcConfig` 中扩展 SpringMVC 的消息转换器, 在消息转换器中使用 `JacksonObjectMapper`

```java
    /**
     * 扩展MVC框架的消息转换器
     *
     * @param converters
     */
    @Override
    protected void extendMessageConverters(
        List<HttpMessageConverter<?>> converters) {
        log.info("扩展消息转换器...");
        // 创建消息转换器对象
        MappingJackson2HttpMessageConverter messageConverter =
            new MappingJackson2HttpMessageConverter();
        // 引入JacksonObjectMapper
        messageConverter.setObjectMapper(new JacksonObjectMapper());
        // 把配置好的消息转换器引入MVC框架中, 记得加index头插
        converters.add(0, messageConverter);
    }
```

更改后测试:

前端分页查询 `page?page=1&pageSize=2` 的 Response:

```js
{"code":1,"msg":null,"data":{"records":[{"id":"1605314025255661569","name":"赵六","username":"zhaoliu","password":"e10adc3949ba59abbe56e057f20f883e","phone":"18343219876","sex":"0","idNumber":"987612345123456789","status":1,"createTime":"2022-12-20 21:27:44","updateTime":"2022-12-20 21:27:44","createUser":"1","updateUser":"1"},{"id":"1605313868686487553","name":"王五","username":"wangwu","password":"e10adc3949ba59abbe56e057f20f883e","phone":"18398765432","sex":"1","idNumber":"123456789123456789","status":1,"createTime":"2022-12-20 21:27:06","updateTime":"2022-12-20 21:27:06","createUser":"1","updateUser":"1"}],"total":5,"size":2,"current":1,"orders":[],"optimizeCountSql":true,"searchCount":true,"countId":null,"maxLimit":null,"pages":3},"map":{}}
```

可以看到 id 是 String 了, 日期相关的也是自定义的 String 格式了

然后再更新操作:

```
JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@2228f4e6] will not be managed by Spring
==>  Preparing: UPDATE employee SET status=?, update_time=?, update_user=? WHERE id=?
==> Parameters: 0(Integer), 2022-12-20T22:16:35.783(LocalDateTime), 1(Long), 1605314025255661569(Long)
<==    Updates: 1
```

后端更新成功, 前端 Payload 也返回正确数值: `{id: "1605314025255661569", status: 0}`

# rename project cause Deserizable, ClassNotFound

项目改名后重启, 出现 deserizable, classnotfound 等报错

解决:

因为虽然改了项目名, 但是用到的 model 还是同样的, 这些 model 在 redis 里面缓存了, 简单粗暴的就是 运行 `redis-cli.exe`, 执行:

```
redis-cli flushall
```

# Required request body is missing

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

# Error: error:0308010C:digital envelope routines::unsupported

-   Fix: change `"start": "react-scripts start"` to `"start": "react-scripts --openssl-legacy-provider start"`

    ```js
    "scripts": {
        "start": "react-scripts --openssl-legacy-provider start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    },
    ```

但是!!! 如果时 vue2.x 环境, 不支持 `--openssl-legacy-provider`

-   Fix: 卸载 node.js 18+, 重新安装 node.js 16.1.0, 应该 16+ 都行

# Error: Node Sass version 8.0.0 is incompatible with ^4.0.0.

Fix: change `"node-sass": "8.0"` to `"sass": ""`

```js
    "devDependencies": {
        "gh-pages": "^2.2.0",
        "sass": ""
    }
```

# Port 8080 was already in use.

Windows:

```
netstat -ano | findstr 8080
taskkill /F /pid 1088
```

# Use Lambda comparator don't use subtraction, use Integer.compare instead!

比如 `Arrays.sort(nums, (o1, o2) -> ...)`, Lambda 表达式里面不能写成 `o1 - o2`, 应该写成 `Integer.compare(o1, o2)`

Example: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/

这题如果写成 减法形式, 无法通过测试样例 `[[-2147483646,-2147483645],[2147483646,2147483647]]`

其实也就是没有考虑 `o1[1] - o2[1] = 0` 的情况, 也没考虑 int 类型越界情况

IMPORTANT:

    **也不能写成:**

    ```java
            Arrays.sort(points, new Comparator<int[]>(){
                public int compare(int[] o1, int[] o2) {
                    if (o1[1] - o2[1] > 0) {
                        return 1;
                    } else if (o1[1] - o2[1] < 0) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });
    ```

    因为这种写法本质上还是让 两个 int 类型作减法, 也就是 Lambda表达式: `(o1, o2) -> o1[1] - o2[1]`

    **正确写法1:**

    ```java
            Arrays.sort(points, new Comparator<int[]>(){
                public int compare(int[] o1, int[] o2) {
                    if (o1[1] > o2[1]) {
                        return 1;
                    } else if (o1[1] < o2[1]) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });
    ```

    也就是让两个 int 类型单纯进行比较!

    **正确写法2 Lambda 表达式:**

    ```java
    Arrays.sort(points, (o1, o2) -> Integer.compare(o1[1], o2[1]));
    ```

# idea pom.xml is ignored as grey

解决: File -> Settings -> Maven -> Ignored Files -> 取消勾选对应模块名

# Spring MVC found on classpath, which is incompatible with Spring Cloud Gateway

SpringBoot 2.7.x 添加 `@EnableEurekaClient` 启动 Spring Cloud GateWay 的 application 报错: `Spring MVC found on classpath, which is incompatible with Spring Cloud Gateway`

原因:

Spring Cloud Gateway is not compatible with Spring MVC (spring-boot-starter-web)

@see: https://stackoverflow.com/questions/68587832/spring-cloud-gateway-spring-mvc-found-on-classpath-which-is-incompatible-with

Fix:

添加 `spring.main.web-application-type` 配置

```yml
spring:
    main:
        web-application-type: REACTIVE
```

# Can't resolve 'path' BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.

报错内容:

```
Module not found: Error: Can't resolve 'path' in 'C:\Users\sichu\dev\IDEA-Workspace\prosto-hrm\prosto-hrm-vue\src\layout\components\Sidebar'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.
```

Fix:

Step1. `npm install path-browserify`

Step2. `import path from "path-browserify"` 替换 `import path from 'path'`
