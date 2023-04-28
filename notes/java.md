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
    // 6 (110), 4 (100)
    6 & 5 = 4
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

1. `8 >> 1 = 4`

2. `9 << 2 = 36`
