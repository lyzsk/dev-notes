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

# Maven stucks in resolving maven dependencies

解决:

手动修改 `apache-maven-3.8.2/conf/settings.xml`, 添加镜像:

```xml
	<mirror>
     <id>nexus-aliyun</id>
     <mirrorOf>*,!jeecg,!jeecg-snapshots</mirrorOf>
     <name>Nexus aliyun</name>
     <url>http://maven.aliyun.com/nexus/content/groups/public</url>
	</mirror>
```

然后再在 idea 里 Settings - Build, Execution, Deployment - Build Tools - Maven, 勾选 Use settings from .mvn/maven.config

或者针对某个 project 在 pom.xml 里添加:

```xml
<repositories>
    <repository>
        <id>ali-maven</id>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </repository>
</repositories>
```

上面的方法不够好, 应该改成:

```xml
	<mirror>
	  <id>aliyunmaven</id>
	  <mirrorOf>*</mirrorOf>
	  <name>阿里云公共仓库</name>
	  <url>https://maven.aliyun.com/repository/public</url>
	</mirror>
```

# Windows Environment Path

`C:/Program Files` 在 powershell 里会被识别成`Program/Files`

解决: `C:'Program Files'`

更好的解决: 把工具都装在 `C:/dev` 里, 无空格路径就行!

# set sql encoding from cp1252 to utf-8

窗口 -> 常规 -> 工作空间 -> 文本编码 -> 其他 -> UTF-8

# connecting to mysql, Public Key Retrieval is not allowed

dbeaver 连接时报错: `Public Key Retrieval is not allowed`

解决: Edit Connection -> Driver Properties -> allowPublicKeyRetrieval = True

# Public Key Retrieval is not allowed

Edit Connection - Driver settings - Driver properties - 添加`allowPublicKeyRetrieval = true`

# git add -A 后丢失进度, 无法 push 最新版本

情况: `git status` 显示 `nothing to commit, working tree clean`, 但是之前已经 `git add -A` 过了, 因为宕机丢失了

`git reflog` 找到 HEAD, 然后用 `git reset --hard xxx`, 然后就可以正常 `git push`

# gopls: failed to install gopls(golang.org/x/tools/gopls@v0.12.2): Error: Command failed

VS Code 报错:

```sh
Tools environment: GOPATH=C:\Users\sichu\go
Installing 1 tool at C:\Users\sichu\go\bin in module mode.
  gopls@0.12.2

Installing golang.org/x/tools/gopls@v0.12.2 FAILED
{
 "code": 1,
 "killed": false,
 "signal": null,
 "cmd": "C:\\Program Files\\Go\\bin\\go.exe install -v golang.org/x/tools/gopls@v0.12.2",
 "stdout": "",
 "stderr": "go: golang.org/x/tools/gopls@v0.12.2: golang.org/x/tools/gopls@v0.12.2: Get \"https://proxy.golang.org/golang.org/x/tools/gopls/@v/v0.12.2.info\": dial tcp 142.251.43.17:443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.\n"
}

1 tools failed to install.

gopls: failed to install gopls(golang.org/x/tools/gopls@v0.12.2): Error: Command failed: C:\Program Files\Go\bin\go.exe install -v golang.org/x/tools/gopls@v0.12.2
go: golang.org/x/tools/gopls@v0.12.2: golang.org/x/tools/gopls@v0.12.2: Get "https://proxy.golang.org/golang.org/x/tools/gopls/@v/v0.12.2.info": dial tcp 142.251.43.17:443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
```

解决:

https://mirrors.aliyun.com/golang/?spm=a2c6h.13651104.d-5243.1.5f1b1e57VM6SCA

找对应版本的 msi 下载

# regionserver running as process 3138. Stop it first.

报错:

```bash
[atguigu@hadoop102 lib]$ start-hbase.sh
running master, logging to /opt/module/hbase-2.0.5/logs/hbase-atguigu-master-hadoop102.out
hadoop104: regionserver running as process 3138. Stop it first.
hadoop103: regionserver running as process 3495. Stop it first.
hadoop102: regionserver running as process 3412. Stop it first.
```

进程冲突, 可以用 ps 查看, 确实有进程

```bash
kill -9 3412
ssh hadoop103 kill -9 3495
ssh hadoop104 kill -9 3138
```

# TIMESTAMP with implicit DEFAULT value is deprecated. Please use--explicit_defaults_for_timestamp server

报错: `[Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).`

解决:

在 `/opt/my.cnf` 的 `[mysqld]` section 中添加一行:

`explicit_defaults_for_timestamp = 1`

> NOTE: 记得用 `sudo vim /etc/my.cnf`

# ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock'

```sh
mysql -uroot -p
Enter password:
```

输入完临时密码后, 报错: `ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)`

解决:

```sh
sudo systemctl stop mysqld

su - root
root

cd /var/lib
ll
cd mysql
ll
rm -rf ./*
ll

su - atguigu

cd /opt/software/mysql-rpm/
```

之后就正常分步安装 rpm 包

# Debug mode don't auto clean compile

项目更名后, 用 Debug 模式启动 SpringBoot 项目, 并不会重新 compile 一次, 原因未知... 反正情况就是改了一部分 Redis 代码后, 不更新数据了...一直停留在原来缓存的数据...

Fix:

工具栏 Maven -> clean -> compile

或者手动:

```
mvn clean
mvn compile
```

# pom.xml is ignored as grey

解决: File -> Settings -> Maven -> Ignored Files -> 取消勾选对应模块名

# SpringConfig console output 乱码

Bug: 在 SpringConfig 已经设置排除扫描: `@ComponentScan(value = "cn.sichu", excludeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Controller.class))`, 但是 Console 还是输出 `cn.sichu.controller.UserController@ca263c2`

解决:

方法 1: 把两个 Config 放到 `cn.sichu` 下

方法 2: 注释掉 `SpringMvcConfig` 上的 `@Configuration` 注解 (太逗了, 掩人耳目)

方法 3: 使用精准扫描 `@ComponentScan({"cn.sichu.service", "cn.sichu.dao"})`

原理: 因为即使排除扫描生效了, 在加载 SpringMvcController 时, 因为他也有注解`@Configuration`所以他又再次被加载了

# org.springframework.context.annotation.AnnotationConfigApplicationContext@31cefde0 has not been refreshed yet

Bug:

报错: `org.springframework.context.annotation.AnnotationConfigApplicationContext@31cefde0 has not been refreshed yet`

解决: 在 `ctx.getBean()`上一行添加 `ctx.refresh();`

---

##

Bug: IDEA 右键没有 XML configuration file, 更没有 Spring config 选项

解决:

手动新建 `applicationContext.xml`, 手动从 https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/xsd-configuration.html 复制粘贴:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- bean definitions here -->

</beans>
```

##

Bug: 父模块的 `pom.xml` 报错: `Unresolved plugin: 'org.springframework.boot:spring-boot-maven-plugin:2.3.4.RELEASE'`

解决:

在 `pom.xml` 中添加 `<packaging>pom</packaging>`

```xml
    <description>the back-end project for SubleChat application</description>
    <packaging>pom</packaging>
```

# IDEA alt + insert 失效

解决:

确认 `NUM LOCK` 是开启的

# @ComponentScan ANNOTATION type filter requires an annotation type: interface org.springframework.web.servlet.mvc.Controller

Bug:

报错: `@ComponentScan ANNOTATION type filter requires an annotation type: interface org.springframework.web.servlet.mvc.Controller`

解决:

Controller 导包倒错了, 注释掉的是导错的

```java
import org.springframework.stereotype.Controller;
// import org.springframework.web.servlet.mvc.Controller;
```

# No primary or default constructor found for interface java.util.List] with root cause java.lang.NoSuchMethodException: java.util.List.<init>()

Bug:

```
SEVERE: Servlet.service() for servlet [dispatcher] in context with path [/springmvc-0003-request-mapping] threw exception [Request processing failed; nested exception is java.lang.IllegalStateException: No primary or default constructor found for interface java.util.List] with root cause
java.lang.NoSuchMethodException: java.util.List.<init>()
```

解决: 把 List 当成对象而不是接口, 添加 `@RequestParam`

```java
public String listParam(@RequestParam List<String> likes) {}
```

# 子模块通过 Spring initializer 创建后, 无法被识别为 maven 工程

解决:

1. 右键 `pom.xml` -> add as maven
2. 更改 `<parent>`标签内的内容关联父模块, 父模块 `pom.xml` 的 `<modules>` 里添加 `<module>`

---

##

Bug:

```
<log4j:configuration debug="true"
    xmlns:log4j='http://jakarta.apache.org/log4j/'>
```

"http://jakarta.apache.org/log4j/" 报红, URI 报错

解决:

删除 xmlns 后字段:

```
<log4j:configuration>
```

# org.apache.ibatis.exceptions.PersistenceException Error updating database.

Bug :

```
org.apache.ibatis.exceptions.PersistenceException:
### Error updating database.  Cause: com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Could not create connection to database server.
```

解决:

更改`mysql-connector-java`, 和 mysql 版本一致

```xml
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.28</version>
```

依然 Bug:

```
Loading class `com.mysql.jdbc.Driver'. This is deprecated. The new driver class is `com.mysql.cj.jdbc.Driver'. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.
```

解决:

更改`mybatis-config.xml`:

```xml
<property name="driver" value="com.mysql.cj.jdbc.Driver"/>
```

# no package RunWith

本来写 Test 的时候要加 `@RunWith(SpringJUnit4ClassRunner.class)`

但是这是 junit4 的写法, 同时要在 dependency 里面导入 Junit

但是 spring-web 包已经集成了 junit5

Fix:

使用注解: `@ExtendWith(SpringExtension.class)`

# java.lang.IllegalStateException: Ambiguous handler methods mapped for '/sys/2491238552969216':

报错内容: `java.lang.IllegalStateException: Ambiguous handler methods mapped for '/sys/2491238552969216': ...`

原因:

因为有两个 `@GeMapping(value = {id})` 和 `@GetMapping(value = "/{username}")`

不能用同一 REQUESTMETHOD 方法指向同一 url

Fix:

改成 `@GetMapping(value = "/{id}")`, `@PostMapping(value = "/{username}")`

# 不同的 `font-awesome icon` 的 `size` 不同

解决: 在 `url` 末尾加上 ` fa-fw`

要求: 4.0 以上的版本

@see https://fontawesome.com/docs/web/style/fixed-width

# `font-awesome` 的 `<i>` 标签加了 ` fa-fw` 后, 在 `collapse toggle` 折叠切换后 依然无法实现同一个 `size`

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

# `<button>`标签的坑

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

# 当 html 标签有多个`class`时, `background-clip: text;` 和 `-webkit-background-clip: text;` 不能用多重名字实现, 比如:

```html
<div class="content f-content"></div>
<div class="content s-content"></div>
```

解决:

1. 把同名 `class` 去掉:

```html
<div class="f-content"></div>
<div class="s-content"></div>
```

2. 分别给两个 `class` 添加 `background-clip` 和 `-webkit-background-clip`:

```css
background-clip: text;
-webkit-background-clip: text;
```

# `typewriter-animation-effect` 里如果把 `h2` 换成 `span` 就无法实现动画特效

解决: 使用 `h1`, `li`, `div` 等 `块级` 元素

原理:

逐字打印特效的对象 必须是 `块级` 元素, 否则无法通过:

```css
width: 1.375rem;
white-space: nowrap;
overflow: hidden;
```

设置 `不换行` 和 `隐藏溢出` 来使动画逐字打印

# `main-cotainer` 里的元素, 在`.clientHeight` 得到 `100vh` 时, 从 `header` 开始动画;

也就是说, `header` 的 `z-index` 失效了

解决:

-   先根据 `html` 里的标签关系确定要改哪:

    ```html
    <body>
        <header>
            <nav class="nav">
                <div class="nav-title">rainanimation effect</div>
            </nav>
        </header>
        <div class="main-container">
            <div class="rain-box"></div>
        </div>
        <script src="./0014.js"></script>
    </body>
    ```

    这个代码里 最外层 就两个标签: `header` 和 `main-container`;

    就给这两个加上 `position` 属性, 然后给 `header` 加上 `z-index` 属性就好了

-   修改后的 css:

```css
header nav {
    width: 100vw;
    height: 3.125rem;
    background-color: var(--c-nav-bg);
    /* 非常重要, 一定要设置position, 否则z-index会失效 */
    position: relative;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-container {
    width: 100vw;
    height: 100vh;
    /* 非常重要! 所有父级元素的position一定要设置, 用来比较z-index */
    position: relative;
    background-image: url(./images/72055179_p0.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
```

原理:

`position` 属性的 default value 是 `static` :clown_face:

`z-index` 的 default value 是 `auto` 也就是继承父元素的值

# `@import url("https://fonts.googleapis.com/css?family=notosanssc");` 导致 Noto Sans SC, TC 的导入问题

解决:

方法 1: 改成加号

```css
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+SC");
```

方法 2: 导入 `earlyaccess` 里的 `.css`

```css
@import url("https://fonts.googleapis.com/earlyaccess/notosanssc.css");
```

# `canvas` 已经设置 `100%` 但是还是会 overflow, 导致出现滚动条

解决:

方法 1: 在 `canvas` 对象内添加

```css
/* inline -> block */
display: block;
```

方法 2: 在 `canvas` 对象内添加

```css
/* baseline -> top */
vertical-align: top;
```

方法 3: 在 `canvas` 的父级元素内添加

```css
font-size: 0;
```

原理:

`canvas` 的 default `vertical-align` 是 `baseline`, `display` 是 `inline`,

然后之所以会在下方多处一行是为了给 `英文` 字母比如 `g`, `y` 之类的, 对齐 `basline` 后, 会需要在下方预留空间, 所以在父元素更改 `font-size: 0;` 也可以达到一样的效果

但是我觉得还是 方法 1, 更改 `display: block;` 比较实用

# 双显卡情况下, 即使正确安装 CUDA, 并且 `torch.cuda.is_available() = True` 也会导致报错: `RuntimeError: cuDNN error: CUDNN_STATUS_EXECUTION_FAILED`

解决: 在启动代码的开头添加一行

```python
torch.backends.cudnn.benchmark = True
```

原理: 即使 `torch.cuda.is_available() = True`, `torch.backends.cudnn.version()` 能够查到 cudnn 版本号, `torch.backends.cudnn.enabled = True`, 因为代码没法启动 NVIDIA CUDA GPU, 所以在既有 A 卡又有 N 卡的时候应该 4 重检验, 检查 benchmark 是否开启:

```python
>>> import torch
>>> torch.cuda.is_available()
True
>>> torch.backends.cudnn.version()
7005
>>> torch.backends.cudnn.enabled
True
>>> torch.backends.cudnn.benchmark
False
```

# tf.test.is_built_with_cuda() True, tf.test.is_gpu_available(cuda_only=False,min_cuda_compute_capability=None) False

```python
>>> tf.test.is_built_with_cuda()
True
>>> tf.test.is_gpu_available(cuda_only=False,min_cuda_compute_capability=None)
False
```

解决: 本地给 CUDA 安装对应版本的 CUDNN 后, `conda install CUDNN`

原理: Pytorch 是自带 CUDNN 的, 但是 Tensorflow 没有

# 更换 CUDA 版本后 `nvidia-smi` 和 `nvcc --version` 显示的版本不同

解决: 更改 Enviornment Variables 环境变量:

1. 在 User variables 的 Path 里添加对应版本: `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7`, 每次更改版本的时候把这里的版本号也改了

2. 在 System variables 的 Path 里把对应版本的 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\bin` 和 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.7\libnvvp` Move up 移到所有 CUDA 版本的最上面

```console
nvidia-smi
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 516.59       Driver Version: 516.59       CUDA Version: 11.7     |
|-------------------------------+----------------------+----------------------+

nvcc --version
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2022 NVIDIA Corporation
Built on Tue_May__3_19:00:59_Pacific_Daylight_Time_2022
Cuda compilation tools, release 11.7, V11.7.64
Build cuda_11.7.r11.7/compiler.31294372_0
```

原理:

1. `nvidia-smi` 是 GPU 的版本, `nvcc --version` 是 GPU 的运行版本, 两个不是同一个东西
2. 安装 CUDA 的时候只会在 System variables 里添加 Path, 不会再 User variables 里添加

# zkServer.cmd crash

zkEnv.cmd 启动环境设置

zkServer.cmd windows 启动方式

出现闪退, 编辑 cmd 文件, 在末尾 `endlocal` 前一行加 `pause`

# Invalid config, exiting abnormally

报错 `java.lang.IllegalArgumentException ... zoo.cfg file is missing`, `Invalid config, exiting abnormally` 原因是没法找到配置文件

修改 zkEnv.cmd

```
# 修改前
set ZOOCFG=%ZOOCFGDIR%\zoo.cfg

# 修改后
set ZOOCFG=%ZOOCFGDIR%\zoo_sample.cfg
```

控制台显示 bind to port 0.0.0.0/0.0.0.0:2181，表示服务端启动成功!

# Failed to connect to github.com port 443 after 21075 ms: Timed out

挂着 VPN 的时候 push 的时候一直 Time out

尝试关 VPN 后依然 Timeout

再开启就好了...

但是, 后来又有一次报错 Time out, push 的时候 timeout, 测试 clone 一个新的 repo 也是 timeout, 尝试关闭 ssr 也不行

尝试更改 proxy:

```bash
git config --global http.proxy http://username:pass@proxy.com:port
git config --global https.proxy https://username:pass@proxy.com:port
```

失败, 还原:

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

尝试 cmd

```bash
ipconfig /flushdns
```

失败

尝试:

```bash
git config --global http.sslverify false
```

失败, 还原:

```bash
git config --global --unset http.sslverify
```

尝试通过 https://tool.lu/ip

查 github.com 的 ip, 然后更改本地 host 文件, 失败

解决:

查看 proxy:

```bash
git config --global --get http.proxy
git config --global --get https.proxy
```

打开 SSR, 打开 windows system proxy, 打开 Use setup script, 然后复制 Script address 里的 http://ipaddr:port, 然后

```bash
git config --global http.proxy http://ipaddr:port
```

成功解决... 之前因为设置代理的地址设成了远程服务器的地址了...

# pip install pymobiledevice3 error

```bash
Downloading pydantic-2.5.3-py3-none-any.whl (381 kB)
   -------------------------------------- - 368.6/381.9 kB 9.9 kB/s eta 0:00:02
ERROR: Exception:
Traceback (most recent call last):
```

卡在这个位置,

解决:

手动安装 pydantic 后再装 pymobiledevice3

```bash
pip install pydantic
conda list pydantic
pip install pymobiledevice3
```

推测 pydantic 和 pydantic-core 之间有先后依赖关系?

#

```log
ConnectionRefusedError: [WinError 10061] No connection could be made because the target machine actively refused it
ERROR:root:Error running command: Command '['pymobiledevice3', 'developer', 'dvt', 'simulate-location', 'set', '--rsd', xxxxxx]
```

把 host 和 port 按照 proxy 的(和 git http.proxy 一样)写死:

```py
    try:
        global host, port
        # host = get_host_ip()
        host = '127.0.0.1'
        logging.info(f"Detected host IP: {host}")

        # port = find_free_port()
        port = 1234 # change to real proxy port
        logging.info(f"Using free port: {port}")
```

设置 logitude 和 latitude 完运行 ok, 但是 log 报错:

```bash
2024-01-20 17:19:49 LAPTOP-XXX pymobiledevice3.__main__[5_digits] ERROR Device was disconnected
```

查看 pymobile 源码

```py
    except ConnectionAbortedError:
        logger.error('Device was disconnected')
```

尝试 cmd

```
ipconfig
netstat -a
```

发现获取的是 `Wireless LAN adapter WiFi` 里的 ipv4 ip,

尝试

```
telnet ip_address port_num
```

Connect failed

尝试

```
netstat -ano | findstr port_num
taskkill PID_num /F
```

发现端口并没有被占用

TODO:

#

报错:

```bash
error: RPC failed; HTTP 413 curl 22 The requested URL returned error: 413 send-pack: unexpected disconnect while reading sideband packet fatal: the remote end hung up unexpectedly
```

尝试:

```bash
git remote set-url origin git@github.com:GitUserName/GitRepoName.git
```

报错:

```bash
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

重来, 太大了, repo 超过 10G 了, 分步 push 就行了

# git commit --amend -m "new message" 没写对进到 --amend 里用修改的方式后无法 push

正确写法是 `git commit --amend -m "new message"`

但是写成了 `git commit --ammend`, 然后进入后修改 message 后 `:q!` 了, 然后导致 master 分支和 remotes/origin/master 分支冲突无法 push

解决:

```bash
git reflog
git reset --hard xxx

git fetch origin master
git checkout master
git merge origin/master

git add -A
git commit -a -m "xxx"
git push origin master
```

但是这样就会产生 3 个 commit...

一切都是因为没输对正确语法, 暂时没想到更好的解决

# mybatis cannot resolve symbol "xxx"

用了 MyBatisX 插件生成的 mapper.xml, 所以不是命名规范的问题

前端是 200 OK, 说明不是接口的问题

用 swagger, 调用接口实现类却发现, get 方法没从数据库获取值到后端

排查: mapper 路径, sql syntax

解决:

在 module 的 main/resources 目录下, 发现是 mapper.defectcode 没问题, 但是 open in explore 却发现文件夹名就叫 mapper.defectcode, 理论上应该是 mapper/defectcode/xxxMapper.xml

结论: idea 在 java/ 下用 `.` 连接是会自动生成 package 级联的文件夹, 但是在 resources/ 下不能直接用 `.` 连接

# org.apache.ibatis.binding.BindingException: Invalid bound statement (not found)

用 mysql 数据库的时候

最开始用 if 子查询, 后端会报 `sql syntax error`

```xml
select
xxx_id as id,
(
    select
    if(t1.if_xxx = 1, 'XXX', ''),
    if(t1.if_yyy = 1, 'YYY', '')
    from t_xxx t1
) as type
from t_xxx
<where>
    <if test="xxx != null and xxx != ''"> and xxx_id = #{xxx}</if>
</where>
```

这种写法, 因为 if_xxx 是 int 类型的, type 是 String 类型的, 而且子查询完的整体查询应该再包一层 alias, 否则在 where 里没法去映射实体类的变量 type, 去做判断

然后用 case when end 的写法却报 `org.apache.ibatis.binding.BindingException: Invalid bound statement (not found)`

解决: 外面套一层 alias 别名, 这样在 xml 的 where 里可以对实体类的参数进行 alias.param = #{param} 的判断

e.g.

```xml
select param1, type, param2
from
(
    select
    db_param1 as param1,
    case
    when if_xxx = 1 and if_yyy = 0 then 'XXX'
    when if_xxx = 0 and if_yyy = 1 then 'YYY'
    when if_xxx = 1 and if_yyy = 1 then 'XXX, YYY'
    when if_xxx = 0 and if_yyy = 0 then ''
    end
    as type,
    db_param2 as param2
    from t_xxx
) as temp
<where>
    <if test="param1 != null and param1 != ''"> and temp.db_param1 = #{param1}</if>
    <if test="type != null and type != ''"> and temp.type = #{type}</if>
    <if test="param2 != null and param2 != ''"> and temp.db_param2 like concat('%', #{param2}, '%') </if>
</where>
```

就不会有问题了

# mysql 使用 group_concat() 函数报错

目的: 把行专列, 让每个同一 param1 下的 每个 param2 以一个用 `, ` 字符串拼接的形式展示:

比如查成:

| param1 |          param2List          |
| :----: | :--------------------------: |
| value0 |        100, 200, 300         |
| value1 | 101, 202, 303, 404, 505, 606 |

解决:

用 group_concat(param) 要把表里除了 param 的参数都 group by 一次

e.g.

```sql
select
param1,
param2,
param3,
group_concat(param4) as param4List
from db
group by param1, param2, param3
```

# ruoyi mybatis cannot resolve symbol "xxx"

巨坑, 要把 ruoyi 的 ruoyi-admin 主入口 module 的 `XXXapplication.java` 文件的注解 `@MapperScan(com.xxx.mapper)` 注释掉, 否则有可能:

1. 找不到 Mapper
2. 找到多个 Mapper, Interface, Service, ServiceImpl
3. 无法判断 jdbc url
