# MyBatis Plus

# public field auto-fill

公共字段每次 insert 和 update 的时候都要在 controller 里调用 set 方法,非常麻烦, 比如: `update_time`, `update_user`, `create_time`, `create_user` 这种字段

MP 提供了公共字段自动填充:

1. 在实体类的属性上加上 `@TableFiled` 并且指定自动填充的策略

2. 创建一个元数据对象处理器的类, 实现 MetaObjectHandler 接口, 然后在这个类里统一为公共字段赋值

Example:

-   step1. 在 `Employee` 实体类添加注解:

    ```java
        /**
        * 创建时间
        */
        @TableField(fill = FieldFill.INSERT)
        private LocalDateTime createTime;

        /**
        * 更新时间
        */
        @TableField(fill = FieldFill.INSERT_UPDATE)
        private LocalDateTime updateTime;

        /**
        * 创建人
        */
        @TableField(fill = FieldFill.INSERT)
        private Long createUser;

        /**
        * 修改人
        */
        @TableField(fill = FieldFill.INSERT_UPDATE)
        private Long updateUser;
    ```

-   step2: 创建 `MyMetaObjectHandler`

    ```java
    @Slf4j
    @Component
    public class MyMetaObjectHandler implements MetaObjectHandler {
        @Override
        public void insertFill(MetaObject metaObject) {
            metaObject.setValue("createTime", LocalDateTime.now());
            metaObject.setValue("updateTime", LocalDateTime.now());
            metaObject.setValue("createUser", BaseContext.getCurrentId());
            metaObject.setValue("updateUser", BaseContext.getCurrentId());
        }

        @Override
        public void updateFill(MetaObject metaObject) {
            log.info("公共字段自动填充[update]...");
            log.info(metaObject.toString());
            Long id = Thread.currentThread().getId();
            log.info("线程id为:{}", id);
            metaObject.setValue("updateTime", LocalDateTime.now());
            metaObject.setValue("updateUser", BaseContext.getCurrentId());
        }
    }



    public class BaseContext {
        private static ThreadLocal<Long> threadLocal = new ThreadLocal<>();

        public static Long getCurrentId() {
            return threadLocal.get();
        }

        public static void setCurrentId(Long id) {
            threadLocal.set(id);
        }
    }
    ```

    因为没个页面都会有判断登录状态的 `LoginCheckFilter.doFilter()`, 根据 `long id = Thread.currentThread().getId()` 返回的值判断, 当点击 button 的时候, 经历 LoginCheckFilter -> EmployeeController -> MyMetaObjectHandler 三步, 而且三步的线程 id 是同一个线程, 也就是每次服务端向前端发送 http 请求的时候, 线程 id 是同一个, 所以可以用 ThreadLocal 来获取当前 session 里的 userId:

    ```
    2022-12-21 10:06:26.449  INFO 15340 --- [nio-8080-exec-3] cn.sichu.fda.filter.LoginCheckFilter     : 拦截到请求 /employee
    2022-12-21 10:06:26.450  INFO 15340 --- [nio-8080-exec-3] cn.sichu.fda.filter.LoginCheckFilter     : 用户已登录,用户id为: 1
    2022-12-21 10:06:26.450  INFO 15340 --- [nio-8080-exec-3] cn.sichu.fda.filter.LoginCheckFilter     : 登录时候的login filter, 线程id为:39
    2022-12-21 10:06:26.455  INFO 15340 --- [nio-8080-exec-3] c.s.fda.controller.EmployeeController    : Employee{id=1605490984589774850, name=周八, username=zhouba, password=e10adc3949ba59abbe56e057f20f883e, phone=18333388891, sex=1, idNumber=987123456123498765, status=1, createTime=2022-12-21T09:10:54, updateTime=2022-12-21T10:02:31, createUser=null, updateUser=null}
    2022-12-21 10:06:26.456  INFO 15340 --- [nio-8080-exec-3] c.s.fda.controller.EmployeeController    : 线程id为:39
    Creating a new SqlSession
    SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@4361cbda] was not registered for synchronization because synchronization is not active
    2022-12-21 10:06:26.459  INFO 15340 --- [nio-8080-exec-3] cn.sichu.fda.common.MyMetaObjectHandler  : 公共字段自动填充[update]...
    2022-12-21 10:06:26.459  INFO 15340 --- [nio-8080-exec-3] cn.sichu.fda.common.MyMetaObjectHandler  : org.apache.ibatis.reflection.MetaObject@4bc982d9
    2022-12-21 10:06:26.459  INFO 15340 --- [nio-8080-exec-3] cn.sichu.fda.common.MyMetaObjectHandler  : 线程id为:39, 当前用户id为: 1
    JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@2e16e9a6] will not be managed by Spring
    ==>  Preparing: UPDATE employee SET name=?, username=?, password=?, phone=?, sex=?, id_number=?, status=?, create_time=?, update_time=?, update_user=? WHERE id=?
    ==> Parameters: 周八(String), zhouba(String), e10adc3949ba59abbe56e057f20f883e(String), 18333388891(String), 1(String), 987123456123498765(String), 1(Integer), 2022-12-21T09:10:54(LocalDateTime), 2022-12-21T10:06:26.465182100(LocalDateTime), 1(Long), 1605490984589774850(Long)
    <==    Updates: 1
    ```

    根据上面的分析, 也就是在 LoginCheckFilter -> EmployeeController -> MyMetaObjectHandler 三步中分别加入对当前 ThreadLocal 的 get 和 set 方法, 来获取用户 id:

    ```java
    public class BaseContext {
        private static ThreadLocal<Long> threadLocal = new ThreadLocal<>();

        public static Long getCurrentId() {
            return threadLocal.get();
        }

        public static void setCurrentId(Long id) {
            threadLocal.set(id);
        }
    }
    ```

    在 LoginCheckFilter 的 doFilter() 方法中添加对当前 session 的 userId 获取:

    ```java
        // 判断登陆状态,如果已登录,直接放行
        if(request.getSession().getAttribute("employee") != null) {
            log.info("用户已登录,用户id为: {}",
                request.getSession().getAttribute("employee"));
            long id = Thread.currentThread().getId();
            log.info("login filter 的线程id为:{}", id);
            // 从session获取userId, set 到 LocalThread 中
            Long userId =(Long)request.getSession().getAttribute("employee");
            BaseContext.setCurrentId(userId);
            filterChain.doFilter(request, response);
            return;
        }
    ```

    然后在最后一步 MyMetaObjectHandler 里对每一次 insert/update 操作通过 LocalThread 来 get 当前线程中存储的 userId

    **注意, 这里为什么不直接在 MyMetaObjectHandler 里用 http request 来 getSession, 然后获得 id 呢? 当然是因为 MyMetaObjectHandler 不能操作 http request 了。 从前面 `log.info("线程id为:{}", id);` 的结果就可以看出, 这个 metaObjectHandler 是在请求之后发生的**

    ```java
    metaObject.setValue("updateUser", BaseContext.getCurrentId());
    ```

## HttpServletRequest vs ThreadLocal to get session component

**为什么不用 httpServletRequest/htttpServletResponse 来获取 session 里的内容呢???**

如果通过在 MyMetaObjectHandler 里注入 HttpServletRequest:

```java
@Slf4j
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {
    @Autowired
    HttpServletRequest request;

    @Override
    public void insertFill(MetaObject metaObject) {
        metaObject.setValue("createTime", LocalDateTime.now());
        metaObject.setValue("updateTime", LocalDateTime.now());
        metaObject.setValue("createUser", BaseContext.getCurrentId());
        metaObject.setValue("updateUser", BaseContext.getCurrentId());
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        log.info("公共字段自动填充[update]...");
        log.info(metaObject.toString());
        long id = Thread.currentThread().getId();
        log.info("线程id为:{}, 当前用户id为: {}", id, BaseContext.getCurrentId());
        Long userId =(Long)request.getSession().getAttribute("employee");
        log.info("通过httpServletRequest得到的用户id为: {}", userId);
        metaObject.setValue("updateTime", LocalDateTime.now());
        // metaObject.setValue("updateUser", BaseContext.getCurrentId());
        metaObject.setValue("updateUser", userId);
    }
}
```

得到的结果和使用 ThreadLocal 得到的结果是一样的:

```
2022-12-21 10:42:41.893  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.filter.LoginCheckFilter     : 拦截到请求 /employee
2022-12-21 10:42:41.893  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.filter.LoginCheckFilter     : 用户已登录,用户id为: 1
2022-12-21 10:42:41.893  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.filter.LoginCheckFilter     : login filter 的线程id为:45
2022-12-21 10:42:41.898  INFO 19080 --- [nio-8080-exec-9] c.s.fda.controller.EmployeeController    : Employee{id=1605314025255661569, name=赵溜, username=zhaoliu, password=e10adc3949ba59abbe56e057f20f883e, phone=18343219876, sex=0, idNumber=987612345123456789, status=0, createTime=2022-12-20T21:27:44, updateTime=2022-12-21T10:41:31, createUser=1, updateUser=null}
2022-12-21 10:42:41.899  INFO 19080 --- [nio-8080-exec-9] c.s.fda.controller.EmployeeController    : 线程id为:45
Creating a new SqlSession
SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@5416bb39] was not registered for synchronization because synchronization is not active
2022-12-21 10:42:41.901  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.common.MyMetaObjectHandler  : 公共字段自动填充[update]...
2022-12-21 10:42:41.901  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.common.MyMetaObjectHandler  : org.apache.ibatis.reflection.MetaObject@6511353b
2022-12-21 10:42:53.855  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.common.MyMetaObjectHandler  : 线程id为:45, 当前用户id为: 1
2022-12-21 10:43:04.967  INFO 19080 --- [nio-8080-exec-9] cn.sichu.fda.common.MyMetaObjectHandler  : 通过httpServletRequest得到的用户id为: 1
JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@31640daf] will not be managed by Spring
==>  Preparing: UPDATE employee SET name=?, username=?, password=?, phone=?, sex=?, id_number=?, status=?, create_time=?, update_time=?, create_user=?, update_user=? WHERE id=?
==> Parameters: 赵溜(String), zhaoliu(String), e10adc3949ba59abbe56e057f20f883e(String), 18343219876(String), 0(String), 987612345123456789(String), 0(Integer), 2022-12-20T21:27:44(LocalDateTime), 2022-12-21T10:43:12.721206300(LocalDateTime), 1(Long), 1(Long), 1605314025255661569(Long)
<==    Updates: 1
```

但是就有个问题, 如果 后台管理服务端 和 用户客户端 写在同一个项目里...

```java
        // 判断登陆状态,如果已登录,直接放行
        if(request.getSession().getAttribute("employee") != null) {
            log.info("用户已登录,用户id为: {}",
                request.getSession().getAttribute("employee"));
            long id = Thread.currentThread().getId();
            log.info("login filter 的线程id为:{}", id);
            // 从session获取userId, set 到 LocalThread 中
            Long empId =(Long)request.getSession().getAttribute("employee");
            BaseContext.setCurrentId(empId);
            filterChain.doFilter(request, response);
            return;
        }
        if(request.getSession().getAttribute("user") != null) {
            Long userId =(Long)request.getSession().getAttribute("user");
            BaseContext.setCurrentId(userId);
            filterChain.doFilter(request, response);
            return;
        }
```

这种情况下, 通过 httpServletRequest 方法来获取 user/employee 的 id, 就显得非常难受, 不如 ThreadLocal

# MybatisPlus generator bugs

## @Mapper missing

生成完代码后, 记得要给 `java/**/mapper` 下的接口都手动加上 `@Mapper` 注解 !IMPORTANT

否则就算在 yml 里配置了 `mapper-locations: classpath*:/mapper/**Mapper.xml` 也无法找到 entity

## @RestController and url path

生成完代码后, 记得要把 `@Controller` 改成 `@RestController`, 并且逐一检查 `@RequestMapping(url)` 里的路径, 如果设置了 `.moduleName("parent_package_name")`, 代码生成的时候会自动在前面加父包名路径, 暂时想到的办法就是不填 moduleName, 然后生成的时候手动复制粘贴进项目里

而且很多时候代码生成器会生成 `-` 而不是 `/`, 暂时还不知道怎么配置...

## @TableId type is AUTO

自动生成代码的时候, 会自动给主键加上 `@TableId(value = "id", type = IdType.AUTO)`

即使在 yml 里配置了雪花 id 生成也会因为就近原则导致 id 变成自增的...

```yml
mybatis-plus:
    global-config:
        db-config:
            id-type: ASSIGN_ID
```

记得要把 `IdType` 改成: `@TableId(value = "id", type = IdType.ASSIGN_ID)`

## isXXX is Boolean not Integer

如果表里设置 `isXXX` 是 `tinyint(1)`, 那么理论上实体类里应该是 Integer 类型, 但是 MP generator 会把 `isXXX` 变成 Boolean 类型, 需要手动修改
