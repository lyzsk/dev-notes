| [@ServletComponentScan](#servletcomponentscan) | [domain vs entity vs model](#domain-vs-entity-vs-model) | [repository vs dao vs mapper](#repository-vs-dao-vs-mapper)

# ServletComponentScan

启动类添加 `@ServletComponentScan` 注解后, 就回去扫描带有 `@WebServlet`, `@WebListener`, `@WebFilter` 注解的类, 有的话就会把这三种类型, 有的话就会把这三种类型的类转换成 `@ServletRegistrationBean`, `@ServletListenerRegistrationBean`, `@FilterRegistrationBean`, 然后交给 Spring 容器取解析

e.g. 比如做登录过滤器的时候, 就可以实现 `Filter` 并加上 `@WebFilter` 注解:

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

@see: https://juejin.cn/post/6844904019391938574

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

# springboot 2.x 日志框架

默认情况下，Spring Boot 会用 `SLF4J + Logback` 来记录日志，并用 `INFO` 级别输出到控制台

也就是说不需要导入 sl4j 的包, 直接就可以通过 `LoggerFactory` 获取 logger 对象

日志级别从低到高分为 TRACE < DEBUG < INFO < WARN < ERROR < FATAL

## `<configuration>`

```xml
<configuration scan="true" scanPeriod="30 seconds">
</configuration>
```

scan: 当此属性设置为 true 时, 配置文档如果发生改变, 将会被重新加载, 默认值为 true

scanPeriod: 设置监测配置文档是否有修改的时间间隔, 如果没有给出时间单位, 默认单位是毫秒;
当 scan 为 true 时此属性生效, 默认的时间间隔为 1 分钟

debug: 当此属性设置为 true 时, 将打印出 logback 内部日志信息, 实时查看 logback 运行状态, 默认值为 false

## `<logger>`

```xml
    <logger name="org.springframework.web" level="info"/>
    <logger name="org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor"
            level="INFO"/>
```

`<logger>` 用来设置某一个包或者具体的某一个类的日志打印级别、
以及指定 `<appender>`
`<logger>` 属性: `name`, `level`, `addtivity`

`name`: 用来指定受此 logger 约束的某一个包或者具体的某一个类

`level`: 用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，还有一个特俗值 INHERITED 或者同义词 NULL，代表强制执行上级的级别. 如果未设置此属性，那么当前 logger 将会继承上级的级别

`addtivity`: 是否向上级 logger 传递打印信息, 默认是 true

## `<root>`

使用 mybatis 的时候，sql 语句是 debug 下才会打印，而这里我们只配置了 info，所以想要查看 sql 语句的话，有以下两种操作:

1. 第一种把 `<root level="info">` 改成 `<root level="DEBUG">` 这样就会打印 sql，不过这样日志那边会出现很多其他消息
2. 第二种就是单独给 dao 下目录配置 debug 模式，代码如下，这样配置 sql 语句会打印，其他还是正常 info 级别：`logging.level.org.mybatis=debug logging.level.dao=debug`

## 配置 example

`resources/application.yml` 配置:

```yml
logging:
    level:
        cn.sichu: debug
        org.springframework.boot.autoconfigure: warn
    config:
        classpath: logback-application.xml
```

`resources/logback-application.xml` 配置:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration scan="true" scanPeriod="30 seconds">
    <!-- 日志存放路径 -->
    <property name="logPath" value="/java/logs"/>
    <!--  日志输出格式  -->
    <property name="logPattern"
              value="$d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - %[%method, %line] - %msg%n"/>

    <!-- 文件切割大小 -->
    <property name="maxFileSize" value="500MB"/>
    <!-- 文档保留天数 -->
    <property name="maxHistory" value="20"/>
    <!-- 文档保留总大小 -->
    <property name="totalSizeCap" value="50GB"/>

    <!--0. 日志格式和颜色渲染 -->
    <!-- 彩色日志依赖的渲染类 -->
    <conversionRule conversionWord="clr"
                    converterClass="org.springframework.boot.logging.logback.ColorConverter"/>
    <conversionRule conversionWord="wex"
                    converterClass="org.springframework.boot.logging.logback.WhitespaceThrowableProxyConverter"/>
    <conversionRule conversionWord="wEx"
                    converterClass="org.springframework.boot.logging.logback.ExtendedWhitespaceThrowableProxyConverter"/>
    <!-- 彩色日志输出格式 -->
    <property name="CONSOLE_LOG_PATTERN"
              value="${CONSOLE_LOG_PATTERN:-%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(${LOG_LEVEL_PATTERN:-%5p}) %clr(${PID:- }){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}}"/>

    <!--1. 输出到控制台-->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!--此日志 appender 是为开发使用, 只配置最底级别, 控制台输出的日志级别是大于或等于此级别的日志信息-->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>debug</level>
        </filter>
        <encoder>
            <Pattern>${CONSOLE_LOG_PATTERN}</Pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!--2. 输出到文档-->
    <!-- 2.1 level为 DEBUG 日志, 时间滚动输出  -->
    <appender name="DEBUG_FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logPath}/web_debug.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}
                - %msg%n
            </pattern>
            <charset>UTF-8</charset>
        </encoder>
        <!-- 日志记录器的滚动策略, 按日期, 按大小记录 -->
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志归档 -->
            <fileNamePattern>${logPath}/web-debug-%d{yyyy-MM-dd}.%i.log
            </fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!-- 日志文档保留天数 -->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录debug级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>debug</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 2.2 level为 INFO 日志, 时间滚动输出  -->
    <appender name="INFO_FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logPath}/web_info.log</file>
        <!-- 日志文档输出格式 -->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}
                - %msg%n
            </pattern>
            <charset>UTF-8</charset>
        </encoder>
        <!-- 日志记录器的滚动策略, 按日期, 按大小记录 -->
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 每天日志归档路径以及格式 -->
            <fileNamePattern>${logPath}/web-info-%d{yyyy-MM-dd}.%i.log
            </fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录info级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>info</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 2.3 level为 WARN 日志, 时间滚动输出  -->
    <appender name="WARN_FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logPath}/web_warn.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}
                - %msg%n
            </pattern>
            <charset>UTF-8</charset> <!-- 此处设置字符集 -->
        </encoder>
        <!-- 日志记录器的滚动策略, 按日期, 按大小记录 -->
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${logPath}/web-warn-%d{yyyy-MM-dd}.%i.log
            </fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录warn级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>warn</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 2.4 level为 ERROR 日志, 时间滚动输出  -->
    <appender name="ERROR_FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文档的路径及文档名 -->
        <file>${logPath}/web_error.log</file>
        <!--日志文档输出格式-->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}
                - %msg%n
            </pattern>
            <charset>UTF-8</charset> <!-- 此处设置字符集 -->
        </encoder>
        <!-- 日志记录器的滚动策略, 按日期, 按大小记录 -->
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${logPath}/web-error-%d{yyyy-MM-dd}.%i.log
            </fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <!--日志文档保留天数-->
            <maxHistory>15</maxHistory>
        </rollingPolicy>
        <!-- 此日志文档只记录ERROR级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <logger name="org.springframework.web" level="info"/>
    <logger name="org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor"
            level="INFO"/>

    <!-- 3. 最终的策略 -->
    <!-- 3.1 开发环境: 打印控制台-->
    <!--    <springProfile name="dev">-->
    <logger name="cn.sichu" level="debug"/><!-- 修改此处扫描包名 -->
    <!--    </springProfile>-->

    <root level="info">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="DEBUG_FILE"/>
        <appender-ref ref="INFO_FILE"/>
        <appender-ref ref="WARN_FILE"/>
        <appender-ref ref="ERROR_FILE"/>
    </root>

    <!-- 3.2 生产环境: 输出到文档-->
    <springProfile name="product">
        <root level="info">
            <appender-ref ref="CONSOLE"/>
            <appender-ref ref="DEBUG_FILE"/>
            <appender-ref ref="INFO_FILE"/>
            <appender-ref ref="ERROR_FILE"/>
            <appender-ref ref="WARN_FILE"/>
        </root>
    </springProfile>
</configuration>
```

> NOTE: 如果只写`logback.xml`那么该 xml 就会优先于`application.yml`进行扫描，因此无效

@see: https://segmentfault.com/a/1190000022556245

@see: https://www.cnblogs.com/lgg20/p/14031108.html
