# mybatis

MyBatis 映射出的是 java.util.Date 类型, java.sql.Date/Timestamp/time 都是 java.sql 包下, 都是 java.util.Date 的子类

# #{} vs ${}

`#{}` 是预编译处理，像传进来的数据会加个 `" "`（`#`将传入的数据都当成一个字符串，会对自动传入的数据加一个双引号）

`${}` 就是字符串替换。直接替换掉占位符。`$`方式一般用于传入数据库对象，例如传入表名.

使用 `${}` 的话会导致 sql 注入。什么是 SQL 注入呢？比如 `select * from user where id = ${value}`

`value` 应该是一个数值吧。然后如果对方传过来的是 001 and name = tom。这样不就相当于多加了一个条件嘛？把 SQL 语句直接写进来了。如果是攻击性的语句呢？`001；drop table user`，直接把表给删了

所以为了防止 SQL 注入，能用 `#{}` 的不要去用 `${}`

如果非要用 `${}` 的话，那要注意防止 SQL 注入问题，可以手动判定传入的变量，进行过滤，一般 SQL 注入会输入很长的一条 SQL 语句

# fuzzy query

```xml
<!-- ******************** 模糊查询的常用的3种方式:********************* -->
    <select id="getUsersByFuzzyQuery" parameterType="User" resultType="User">
        select <include refid="columns"/> from users
        <where>
            <!--
                方法一: 直接使用 % 拼接字符串
                注意:此处不能写成  "%#{name}%" ,#{name}就成了字符串的一部分,
                会发生这样一个异常: The error occurred while setting parameters,
                应该写成: "%"#{name}"%",即#{name}是一个整体,前后加上%
            -->
            <if test="name != null">
                name like "%"#{name}"%"
            </if>
            <!--方法二: 使用concat(str1,str2)函数将两个参数连接 -->
            <if test="phone != null">
                and phone like concat(concat("%",#{phone}),"%")
            </if>
            <!--方法三: 使用 bind 标签,对字符串进行绑定,然后对绑定后的字符串使用 like 关键字进行模糊查询 -->
            <if test="email != null">
                <bind name="pattern" value="'%'+email+'%'"/>
                and email like #{pattern}
            </if>
        </where>
    </select>
```

方法 0, `like "$${name}$"` 简单, 但是无法防止 SQL 注入, 不推荐

方法 1, `like "%"#{name}"%`

方法 2, 字符串拼接 `and name like concat(concat('%', #{name}, '%'))`

方法 4: bind 标签

方法 5: 在 java 代码里写, 比如:

```xml
<if test="username != null and username != ''"> and username like #{username} </if>
```

然后在 java 实体类 setter 里直接把传参写上:

```java
param.setUsername("%CD%");
```

# 业务场景: 表中只有一个 time 字段, 但是前端要返回 startTime, endTime 两个值做范围查询

ruoyi 框架用的是后端 Map params 映射, 前端传固定 params 值:

```js
export function addDateRange(params, dateRange, propName) {
    let search = params;
    search.params =
        typeof search.params === "object" &&
        search.params !== null &&
        !Array.isArray(search.params)
            ? search.params
            : {};
    dateRange = Array.isArray(dateRange) ? dateRange : [];
    if (typeof propName === "undefined") {
        search.params["beginTime"] = dateRange[0];
        search.params["endTime"] = dateRange[1];
    } else {
        search.params["begin" + propName] = dateRange[0];
        search.params["end" + propName] = dateRange[1];
    }
    return search;
}
```

但是这样做法不好,偷懒方法适配二次开发, 科学的做法其实应该是在后端创建 entity 对应的 query 对象:

```java
public class AlarmEmailQuery {
    String applicationName;
    String startTime;
    String endTime;
    String alarmType;

    ...
}
```

这里因为 el-date-picker 组件返回的是字符串传给后端(如果前端没有转化的话)
