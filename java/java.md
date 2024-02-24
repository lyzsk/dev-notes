# Java

| [JDK8](#jdk-8) | [JDK14](#jdk-14) | [位运算](#bit-operation) |

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

【强制】Object 的 equals 方法容易抛空指针异常，应使用常量或确定有值的对象来调用 equals

正例："test".equals(object);

反例：object.equals("test");

因为在反例里, 如果对象是 `null`, 汇报空指针, `null. `是没有东西的

# set infinity = 0x3f3f3f3f vs 32-bit max 0x7fffffff

## 0x7fffffff 的问题

`int INF = 0x3f3f3f3f;` = binary `00111111001111110011111100111111`

32-bit int 的最大值。如果这个无穷大只用于一般的比较（比如求最小值时 min 变量的初值），那么 `0x7fffffff` 确实是一个完美的选择，但是在更多的情况下，`0x7fffffff` 并不是一个好的选择:

1. 很多时候我们并不只是单纯拿无穷大来作比较，而是会运算后再做比较，例如在大部分最短路径算法中都会使用的松弛操作:

    `if (d[u]+w[u][v]<d[v]) d[v]=d[u]+w[u][v];`

    我们知道如果 u,v 之间没有边，那么 w[u][v]=INF，如果我们的 INF 取 0x7fffffff，那么 d[u]+w[u][v]会溢出而变成负数，我们的松弛操作便出错了，更一般的说，0x7fffffff 不能满足“无穷大加一个有穷的数依然是无穷大”，它变成了一个很小的负数。

2. 除了要满足加上一个常数依然是无穷大之外，我们的常量还应该满足“无穷大加无穷大依然是无穷大”，至少两个无穷大相加不应该出现灾难性的错误，这一点上 `0x7fffffff` 依然不能满足我们。

## 0x3f3f3f3f 的优点

1. 0x3f3f3f3f 的十进制是 1061109567，也就是 10^9 级别的（和 0x7fffffff 一个数量级），而一般场合下的数据都是小于 10^9 的，所以它可以作为无穷大使用而不致出现数据大于无穷大的情形。

2. 另一方面，由于一般的数据都不会大于 10^9，所以当我们把无穷大加上一个数据时，它并不会溢出（这就满足了“无穷大加一个有穷的数依然是无穷大”），事实上 0x3f3f3f3f+0x3f3f3f3f=2122219134，这非常大但却没有超过 32-bit int 的表示范围，所以 0x3f3f3f3f 还满足了我们“无穷大加无穷大还是无穷大”的需求。

3. 0x3f3f3f3f 还能给我们带来一个意想不到的额外好处：如果我们想要将某个数组清零，我们通常会使用 memset(a,0,sizeof(a))这样的代码来实现（方便而高效），但是当我们想将某个数组全部赋值为无穷大时（例如解决图论问题时邻接矩阵的初始化），就不能使用 memset 函数而得自己写循环了（写这些不重要的代码真的很痛苦），我们知道这是因为 memset 是按字节操作的，它能够对数组清零是因为 0 的每个字节都是 0，现在好了，如果我们将无穷大设为 0x3f3f3f3f，那么奇迹就发生了，0x3f3f3f3f 的每个字节都是 0x3f！所以要把一段内存全部置为无穷大，我们只需要 memset(a,0x3f,sizeof(a))。
