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

# controller service dao

-   Controller: 业务控制层

-   Service: 业务层/服务层

-   DAO: 数据库持久化层

**Controller**

业务控制, 控制业务层(Service), 作用主要是架起了外界与业务层沟通的桥梁, 移动端和前端在调用接口访问相关业务时, 都是通过 Controller 调用相关业务层代码, 并把数据返回移动端和前端

> Controller 层时不允许直接操作数据库的

> Controller 层就只是一个中间者或者转发者, 不应该在 Controller 里暴露 Service 的业务逻辑, 应该直接转发 Service 的业务处理结果

> Controller 层不允许互调

**Service**

所有内部的业务逻辑都放在这里处理, 比如用户的增删查改; 发送验证码/邮件

> Service 层不允许互调

**DAO**

用来和数据打交道, 一般来说:

1. 项目复杂程度一般, 追求稳定, 迭代速率低可以用 JPA

2. 项目较复杂, 需求变更频繁, 迭代速度快可以用 MyBatis

# vo po dto bo pojo entity

**PO**

持久层对象(persistant object)

时 ORM(Object Relational Mapping) 框架中的 Entity, PO 属性和数据库中的字段形成一一对应的关系

VO 和 PO, 都是属性加上属性的 get 和 set 方法, 表面上看没什么不同, 但代表的含义不同

**VO**

值对象(value object)

用于业务层之间数据的传递, 由 new 创建,由 GC 回收

和 PO 一样仅仅包含数据, 但是抽象出的业务对象, 可以和表对应, 也可以不和表对应

**DTO**

数据传输对象(data transfer object)

是一种设计模式之间传输数据的软件应用系统, 传输数据目标往往是数据访问对象从数据库中检索数据

数据传输对象与数据交互对象或数据访问对象之间的差异是一个不具任何行为除了存储和检索的数据(访问和存取器)

简而言之, 就是接口之间传递的封装数据

比如: 一张表里有十几个字段, 页面需要展示三个字段: name, gender, age,

DTO 由此产生, 一是提高数据传输的速度(减少了传输字段), 二是能隐藏后端表结构

**BO**

业务对象(business object)

BO 把业务逻辑封装为一个对象, 通过调用 DAO 方法, 结合 PO 或 VO 进行业务操作

PO 组合, 如投保人是一个 PO, 险种信息是一个 PO 等等, 组合起来就是一张保单的 BO

**POJO**

简单无规则 java 对象(plain ordinary java object)

传统意义的 java 对象, 最基本的 java bean 只有属性加上 get 和 set 方法

可以转化为 PO, DTO, VO, 比如:

> POJO 在传输过程中就是 DTO

**DAO**

数据访问对象(data access object)

是标准的 j2ee 设计模式的接口, 负责持久层的操作, 用来封装对数据的访问

**Entity**

实体类, 和 PO 的功能相似, 和数据库表一一对应, 一个实体类一张表

@see: https://www.cnblogs.com/dw3306/p/15820165.html

# NotNull vs NotEmpty vs NotBlank

`@NotNull`, 不能为 null, 但可以为 empty

`@NotEmpty`, 不能为 null, 而且长度必须大于 0

`@NotBlank`, 职能作用在 String 上, 不能为 null, 而且 `trim()` 后长度必须大于 0

# @ConfigurationProperties vs @Value

`@ConfigurationProperties` 用法:

```java
@Configuration
@ConfigurationProperties(prefix = "xxx.xxx")
public cass ClassName {
    private String propertyOne;

    // ...getter, setter, toString
}
```

`@ConfigurationProperties` 在类上注解, 一定要有属性和 getter, setter, 才能在 yml 文件里映射得到值

`@Value` 在变量上注解, 不需要 getter, setter

总结:

`@ConfigurationProperties` 用于 PROJO bean 映射属性

`@Value` 通过键注入特定的属性值

@see: https://www.cnblogs.com/CreateMyself/p/12150278.html

# Asserts vs Exception

Assert 在开发的时候用, 给开发人员自己看,

Exception 捕获用户或者环境的错误

# Autowired

@see: https://www.yisu.com/zixun/196240.html

# generate jwt.jks

cd C:\Program Files\Java\jdk1.8.0_321\bin

cmd:

```
keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks
```

报错: `keytool error: java.io.FileNotFoundException: jwt.jks (Access is denied)`

解决: run as administrator cmd, 手动 cd 到 jdk 的 bin 目录然后再来一遍 `keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks`

密码: 123456

然后把生成的 jwt.jks 复制到 resource 目录下

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

## no package RunWith

本来写 Test 的时候要加 `@RunWith(SpringJUnit4ClassRunner.class)`

但是这是 junit4 的写法, 同时要在 dependency 里面导入 Junit

但是 spring-web 包已经集成了 junit5

Fix:

使用注解: `@ExtendWith(SpringExtension.class)`

## java.lang.IllegalStateException: Ambiguous handler methods mapped for '/sys/2491238552969216':

报错内容: `java.lang.IllegalStateException: Ambiguous handler methods mapped for '/sys/2491238552969216': ...`

原因:

因为有两个 `@GeMapping(value = {id})` 和 `@GetMapping(value = "/{username}")`

不能用同一 REQUESTMETHOD 方法指向同一 url

Fix:

改成 `@GetMapping(value = "/{id}")`, `@PostMapping(value = "/{username}")`

## update snowflake id incorrect (different output between backend and frontend and mysql)

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
