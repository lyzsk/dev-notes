# Java

| [install](#installation) | [JDK8](#jdk-8) | [JDK14](#jdk-14) | [位运算](#bit-operation) | [object equals](#object-equals) | [set infinity = 0x3f3f3f3f vs 32-bit max 0x7fffffff](#set-infinity--0x3f3f3f3f-vs-32-bit-max-0x7fffffff) | [toString() vs lang3 ToStringBuilder()](#origin-tostring-vs-lang3-tostringbuilder) | [String `+` String vs String.concat() vs StringBuffer.append() vs StringBuilder.append()](#string--string-vs-stringconcat-vs-stringbufferappend-vs-stringbuilderappend) | [BigDecimal](#bigdecimal) | [stream vs for](#stream-vs-for) | [loglevel](#loglevel) | [regex](#regex) |

# installation

## windows 切换不同版本 java

### 方法 1

1. `JAVA8_HOME = jdk8路径`
2. `JAVA17_HOME = jdk17路径`
3. 在 system variables PATH 里新增 `%JAVA8_HOME%\bin` 和 `%JAVA17_HOME%\bin`

切换 jdk: 调整两个上下顺序即可

### 方法 2

environment variables - system variables 新增环境变量:

1. `JAVA8_HOME = jdk8路径`
2. `JAVA17_HOME = jdk17路径`
3. `JAVA_HOME = %JAVA17_HOME%`
4. 编辑 Path, 新增 `%JAVA_HOME%\bin`

切换 jdk 版本时只需要修改系统变量的 `JAVA_HOME` 即可

# JDK 8

## Date

新增 `java.time.LocalDate`, `java.time.LocalTime`, `java.time.LocalDateTime`

获取日期, 时间:

```java
// 1.8之前
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
String dateTime = sdf.format(new Date());

// 1.8之后
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dateTime = LOcalDateTime.now();
Instant timestamp = Instant.now();
```

或者是

```java
// 1.8之前
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
Date now = new Date();
String formattedDate = dateFormat.format(now);
Date parsedDate = dateFormat.parse(formattedDate);

// 1.8之后
LocalDate now = LocalDate.now();
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String formattedDate = now.format(formatter);
LocalDate parsedDate = LocalDate.parse(formattedDate, formatter);
```

获取月份天数:

```java
// 1.8之前
Calendar calendar = new GregorianCalendar(1990, Calendar.FEBRUARY, 20);
int daysInMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);

// 1.8之后
int daysInMonth = YearMonth.of(1990, 2).lengthOfMonth();
```

如果考虑到线程安全, JDK1.8 后用 Instant 代替 Date, LocalDateTime 代替 Calendar, DateTimeFormatter 代替 SimpleDateFormat

## Comparator

升序排序新增 `Comparator.comparingInt()`

```java
// 1.8前
Arrays.sort(index, (idx1, idx2) -> (nums2[idx1] - nums2[idx2]));

// 1.8后
Arrays.sort(index, Comparator.comparingInt(idx -> nums2[idx]));
```

但是非升序排序的时候, 还是得自己写, 因为 `Comparator.comparingInt()` 源码是:

```java
    public static <T> Comparator<T> comparingInt(ToIntFunction<? super T> keyExtractor) {
        Objects.requireNonNull(keyExtractor);
        return (Comparator<T> & Serializable)
            (c1, c2) -> Integer.compare(keyExtractor.applyAsInt(c1), keyExtractor.applyAsInt(c2));
    }
```

同理:

```java
// 1.8前
Arrays.sort(intervals, (o1, o2) -> Integer.compare(o1[0], o2[0]));

// 1.8后
Arrays.sort(intervals, Comparator.comparingInt(o -> o[0]));
```

# JDK 14

## record

`Java14` 添加了 `record` 类, 是一个 不变类, 可以定义静态方法

比如本来要写个匿名内部类

```java
    private static class Status implements Comparable<Status> {
        private final int val;
        private final ListNode node;

        public Status(int val, ListNode node) {
            this.val = val;
            this.node = node;
        }

        @Override
        public int compareTo(Status status) {
            return this.val - status.val;
        }
    }
```

现在可以直接在同一类里写成:

```java
    private record Status(int val, ListNode node) implements Comparable<Status> {

        @Override
        public int compareTo(Status status) {
            return this.val - status.val;
        }
    }
```

# bit operation

位逻辑运算符

1. `&` 与

    按位 与运算 (AND), 即把二进制位中最低位的 1 翻转为 0

    ```java
    // 6 (110), 5(101), 4 (100)
    6 & 5 = 4
    ```

    ```java
    // 1 = 0b1
    // 2 = 0b10
    // 4 = 0b100
    // 6 = 0b1000
    // e.g. 4 = 0b100, 3 = 0b11, 4 & 3 = 0b100 & 0b11 = 0
    pow(2, n) & (pow(2, n) - 1) == 0
    ```

2. `|` 或

    按位 或运算 (OR)

    `4 | 5 = 5`

3. `~` 非

    按位 取反运算 (NOT)

    `~4 = -5`

4. `^` 异或

    按位 异或运算 (XOR)

    `4 ^ 5 = 1`

    `x ^ x = 0`

    `x ^ 0 = x`

    ```java
    true ^ true = false
    true ^ false = true
    false ^ true = true
    false ^ false = false
    ```

位移运算符

<!-- 8(1000), 4(100) -->

1. `8 >> 1 = 4`

2. `9 << 2 = 36`

# object equals

【强制】Object 的 equals 方法容易抛空指针异常, 应使用常量或确定有值的对象来调用 equals

正例："test".equals(object);

反例：object.equals("test");

因为在反例里, 如果对象是 `null`, 汇报空指针, `null. `是没有东西的

# set infinity = 0x3f3f3f3f vs 32-bit max 0x7fffffff

## 0x7fffffff 的问题

`int INF = 0x3f3f3f3f;` = binary `00111111001111110011111100111111`

32-bit int 的最大值. 如果这个无穷大只用于一般的比较（比如求最小值时 min 变量的初值）, 那么 `0x7fffffff` 确实是一个完美的选择, 但是在更多的情况下, `0x7fffffff` 并不是一个好的选择:

1. 很多时候我们并不只是单纯拿无穷大来作比较, 而是会运算后再做比较, 例如在大部分最短路径算法中都会使用的松弛操作:

    `if (d[u]+w[u][v]<d[v]) d[v]=d[u]+w[u][v];`

    我们知道如果 u,v 之间没有边, 那么 w[u][v]=INF, 如果我们的 INF 取 0x7fffffff, 那么 d[u]+w[u][v]会溢出而变成负数, 我们的松弛操作便出错了, 更一般的说, 0x7fffffff 不能满足“无穷大加一个有穷的数依然是无穷大”, 它变成了一个很小的负数.

2. 除了要满足加上一个常数依然是无穷大之外, 我们的常量还应该满足“无穷大加无穷大依然是无穷大”, 至少两个无穷大相加不应该出现灾难性的错误, 这一点上 `0x7fffffff` 依然不能满足我们.

## 0x3f3f3f3f 的优点

1. 0x3f3f3f3f 的十进制是 1061109567, 也就是 10^9 级别的（和 0x7fffffff 一个数量级）, 而一般场合下的数据都是小于 10^9 的, 所以它可以作为无穷大使用而不致出现数据大于无穷大的情形.

2. 另一方面, 由于一般的数据都不会大于 10^9, 所以当我们把无穷大加上一个数据时, 它并不会溢出（这就满足了“无穷大加一个有穷的数依然是无穷大”）, 事实上 0x3f3f3f3f+0x3f3f3f3f=2122219134, 这非常大但却没有超过 32-bit int 的表示范围, 所以 0x3f3f3f3f 还满足了我们“无穷大加无穷大还是无穷大”的需求.

3. 0x3f3f3f3f 还能给我们带来一个意想不到的额外好处：如果我们想要将某个数组清零, 我们通常会使用 memset(a,0,sizeof(a))这样的代码来实现（方便而高效）, 但是当我们想将某个数组全部赋值为无穷大时（例如解决图论问题时邻接矩阵的初始化）, 就不能使用 memset 函数而得自己写循环了（写这些不重要的代码真的很痛苦）, 我们知道这是因为 memset 是按字节操作的, 它能够对数组清零是因为 0 的每个字节都是 0, 现在好了, 如果我们将无穷大设为 0x3f3f3f3f, 那么奇迹就发生了, 0x3f3f3f3f 的每个字节都是 0x3f！所以要把一段内存全部置为无穷大, 我们只需要 memset(a,0x3f,sizeof(a)).

# origin toString() vs lang3 ToStringBuilder()

`org.apache.commons.lang3.ToStringBuilder()` 用法示例:

```java
@Override
public String toString() {
    return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE).appen("param1", getParam1()).append("paramn", getParamN()).toString();
}
```

有 `DEFAULT_STYLE`, `JSON_STYLE`, `MULTI_LINE_STYLE`, `NO_CLASS_NAME_STYLE`, `NO_FIELD_NAMES_STYLE`, `SHORT_PREFIX_STYLE`, `SIMPLE_STYLE`

优点:

1. 默认的 `toString()` 方法都是用简单的 `+` 拼接, 相当于每次拼接都 new 了一个 String 对象, 容易爆内存, 相当于 ToStringBuilder 用 `append()` 的方式节省了内存消耗

2. ToStringBuilder 比较适合在打印日志时, 输出参数的信息, 特别是再参数为对象时, 能方便自动打印对象中的属性值

# String `+` String vs String.concat() vs StringBuffer.append() vs StringBuilder.append()

1. String 的 `+` 方法, 编译器就是用 StringBuilder.append() 进行追加, 相当于每次: `str = new StringBuilder(str).append("x").toString`

但是如果在循环体内, 每次循环都会 new 一个新的 StringBuilder 对象, 然后再调用 toString() 方法转字符串, 开销很大

2. `String.concat()`方法, 其实就是一次数组的拷贝, 在内存中处理时原子操作很快, 但是返回时要 new String 对象

但是如果在循环体内, 限制了效率, 虽然比 `+` 快, 但增加了空间压力

    ```java
        public String concat(String str) {
            if (str.isEmpty()) {
                return this;
            }
            int len = value.length;
            int otherLen = str.length();
            char buf[] = Arrays.copyOf(value, len + otherLen);
            str.getChars(buf, len);
            return new String(buf, true);
        }
    ```

3. `StringBuffer`, `StringBuilder` 的 `append()` 方法均使用父类 `AbstractStringBuilder` 的 `append()` 方法

    ```java
        public AbstractStringBuilder append(String str) {
            if (str == null)
                return appendNull();
            int len = str.length();
            ensureCapacityInternal(count + len);
            str.getChars(0, len, value, count);
            count += len;
            return this;
        }
    ```

    即当数组空间够用的时候, 知识在数组后添加字符/字符串, 并不创建新对象, 最后才通过 `toString()` 方法转字符串, 效率快, 且节省控件

# BigDecimal

等值比较时强制使用 `compareTo()`, `equals()` 方法会比较值和精度 (1.0 与 1.00 返回结果为 false), 而 `compareTo()`则会忽略精度.

# stream vs for

10w 级数据, for 比 stream 快, 100w 级数据 stream 比 for 快

stream().forEach() 不保证元素的遍历顺序

# loglevel

log4j 日志等级:

log4j 定义了 8 个级别的 log（除去 OFF 和 ALL, 可以说分为 6 个级别）, 优先级从高到低依次为：OFF, FATAL, ERROR, WARN, INFO, DEBUG, TRACE, ALL.

「ALL」: 最低等级的, 用于打开所有日志记录.

「TRACE」 : designates finer-grained informational events than the DEBUG.Since:1.2.12, 很低的日志级别, 一般不会使用.

「DEBUG」: 指出细粒度信息事件对调试应用程序是非常有帮助的, 主要用于开发过程中打印一些运行信息.

「INFO」: 消息在粗粒度级别上突出强调应用程序的运行过程. 打印一些你感兴趣的或者重要的信息, 这个可以用于生产环境中输出程序运行的一些重要信息, 但是不能滥用, 避免打印过多的日志.

「WARN」: 表明会出现潜在错误的情形, 有些信息不是错误信息, 但是也要给程序员的一些提示.

「ERROR」: 指出虽然发生错误事件, 但仍然不影响系统的继续运行. 打印错误和异常信息, 如果不想输出太多的日志, 可以使用这个级别.

「FATAL」: 指出每个严重的错误事件将会导致应用程序的退出. 这个级别比较高了. 重大错误, 这种级别你可以直接停止程序了.

「OFF」: 最高等级的, 用于关闭所有日志记录.

如果将 log level 设置在某一个级别上, 那么比此级别优先级高的 log 都能打印出来. 例如, 如果设置优先级为 WARN, 那么 OFF, FATAL, ERROR, WARN4 个级别的 log 能正常输出, 而 INFO, DEBUG, TRACE, ALL 级别的 log 则会被忽略. Log4j 建议只使用四个级别, 优先级从高到低分别是 ERROR, WARN, INFO, DEBUG.

## 致命错误「FATAL」

表示需要立即被处理的系统级错误. 当该错误发生时, 表示服务已经出现了某种程度的不可用, 系统管理员需要立即介入.

这属于最严重的日志级别, 因此该日志级别必须慎用, 如果这种级别的日志经常出现, 则该日志也失去了意义.

通常情况下, 一个进程的生命周期中应该只记录一次 FATAL 级别的日志, 即该进程遇到无法恢复的错误而退出时.

当然, 如果某个系统的子系统遇到了不可恢复的错误, 那该子系统的调用方也可以记入 FATAL 级别日志, 以便通过日志报警提醒系统管理员修复.

## 错误 「ERROR」

错误日志是用来传递系统或应用程序中出现的各种级别的错误. 例如, 操作系统在无法同步缓存区到磁盘的时候会生成错误信息. 不确定的是, 许多错误信息只能给出为什么出错的起点, 要寻找出导致错误发生的根本原因还需要进一步分析.

该级别的错误也需要马上被处理, 但是紧急程度要低于 FATAL 级别. 当 ERROR 错误发生时, 已经影响了用户的正常访问. 从该意义上来说, 实际上 ERROR 错误和 FATAL 错误对用户的影响是相当的.

FATAL 相当于服务已经挂了, 而 ERROR 相当于好死不如赖活着, 然而活着却无法提供正常的服务, 只能不断地打印 ERROR 日志.

特别需要注意的是, ERROR 和 FATAL 都属于服务器自己的异常, 是需要马上得到人工介入并处理的情况. 而对于用户自己操作不当, 如请求参数错误等等, 是绝对不应该记为 ERROR 日志的.

## 警告 「WARN」

警告信息是在系统即将丢失东西, 而又不影响系统运行下而产生的, 例如一个应用程序在没有获得正确数量的参数传递的时候, 但是它又能够在没有这些参数的情况下正常运行, 这种情况下可能就是记录警告信息提示使用者或者管理员.

该日志表示系统可能出现问题, 也可能没有问题, 这种情况在例如网络的波动等情况. 对于那些目前还不是错误, 然而不及时处理也会变为错误的情况, 也可以记为 WARN 日志, 例如一个存储系统的磁盘使用量超过阀值, 或者系统中某个用户的存储配额快用完等等.

对于 WARN 级别的日志, 虽然不需要系统管理员马上处理, 也是需要即时查看并处理的. 因此此种级别的日志也不应太多, 能不打 WARN 级别的日志, 就尽量不要打.

## 信息 「INFO」

这种类型的信息被设计成告诉用户或者开发者一些没有风险的事情发生了. 该种日志记录系统正常运行状态, 例如某个子系统的初始化, 某个请求的成功执行等等.

通过查看 INFO 级别的日志, 可以很快地对系统中出现的 WARN,ERROR,FATAL 错误进行定位. INFO 日志不宜过多, 通常情况下, INFO 级别的日志应该不大于 TRACE 日志的 10%.

## 调试 DEBUG or TRACE

软件系统在应用程序代码运行时生成的调式信息, 是为了给软件开发人员提供故障检测和定位问题的帮助.

这两种日志具体的规范应该由项目组自己定义, 该级别日志的主要作用是对系统每一步的运行状态进行精确的记录.

通过该种日志, 可以查看某一个操作每一步的执行过程, 可以准确定位是何种操作, 何种参数, 何种顺序导致了某种错误的发生. 可以保证在不重现错误的情况下, 也可以通过 DEBUG（或 TRACE）级别的日志对问题进行诊断.

需要注意的是, DEBUG 日志也需要规范日志格式, 应该保证除了记录日志的开发人员自己外, 其他的如运维, 测试人员等也可以通过 DEBUG（或 TRACE）日志来定位问题.

# regex

@see: https://www.cnblogs.com/yinzhengjie/p/8860824.html

`w` 表示字母数字字符

`*` 出现零次或多次

`+` 出现一次或多次

`?` 出现一次或一次的也没有

e.g.

匹配 `K:[V]`

```java
Pattern pattern  = Pattern.compile("(\\w+)=(\\[(\\w*[-|.|/|:|\\s|_|\\(|\\)]?)*\\])");
Mathcer matcher = pattern.machter(str);
while(matcher.find()) {
    String key = matcher.group(1);
    String value = matcher.group(2);
    ...
}
```
