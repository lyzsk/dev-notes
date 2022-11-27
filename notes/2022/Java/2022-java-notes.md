<p align="center">
    <a href="#java">
        <img src="https://img.shields.io/badge/-Java-3C415C?style=plastic&logo=openjdk&logoColor=FFFFFF" />
    </a>
    <a href="#eclipse-ide">
        <img src="https://img.shields.io/badge/-Eclipse-3C415C?style=plastic&logo=eclipse&logoColor=FFFFFF" />
    </a>
    <a href="#intellij-idea">
        <img src="https://img.shields.io/badge/-IntellijIDEA-3C415C?style=plastic&logo=intellijidea&logoColor=FFFFFF" />
    </a>
</p>
<p align="center">
    <a href="">
        <img src="https://img.shields.io/badge/-Spring-3C415C?style=plastic&logo=spring&logoColor=6DB33F" />
    </a>
    <a href="">
        <img src="https://img.shields.io/badge/-SpringBoot-3C415C?style=plastic&logo=springboot&logoColor=6DB33F" />
    </a>
    <a href="">
        <img src="https://img.shields.io/badge/-SpringSecurity-3C415C?style=plastic&logo=springsecurity&logoColor=6DB33F" />
    </a>
</p>

# 2022-Java-notes

| [Java](#java) | [Spring](#spring) | [SpringMVC](#springmvc) | [SpringBoot](#springboot) | [MyBatis](#mybatis) | [Redis](#redis) | [RaabitMQ](#rabbitmq) | [IDE](#ide) | [Bugs](#bugs) |

# Java

| [Java8](#java8) | [Java14](#java14) | [牛顿迭代法 abs](#mathabs) | [Comparable vs Comparator](#comparable-vs-comparator) | [PriorityQueue](#priorityqueue) | [Arrays.fill()](#arraysfill) | [add() vs offer()](#add-vs-offer) | [双指针](#double-pointer) | [backtrack-vs-dfs](#backtrack-vs-dfs) | [Integer compile](#integer-compile) | [getSimpleName()](#getsimplename) | [get object instance 的方式](#get-object-instance) | [int 类型转 char 类型](#int-to-char) | [位运算](#bit-operation) | [TreeSet-vs-HashSet](#treeset-vs-hashset) | [ArrayList vs LinkedList](#arraylist-vs-linkedlist) | [锁](#lock) | [int vs Integer](#int-vs-integer) | [多线程](#multithread) | [树状数组](#binary-indexed-tree)

---

## Java8

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

---

## Comparator.comparingInt

```java
Arrays.sort(index, (idx1, idx2) -> (nums2[idx1] - nums2[idx2]));
```

在 1.8 之后可以写成

```java
Arrays.sort(index, Comparator.comparingInt(idx -> nums2[idx]));
```

但是非升序排序的时候, 还是得自己写, 因为 `Comparator.comparingInt` 源码是:

```java
    public static <T> Comparator<T> comparingInt(ToIntFunction<? super T> keyExtractor) {
        Objects.requireNonNull(keyExtractor);
        return (Comparator<T> & Serializable)
            (c1, c2) -> Integer.compare(keyExtractor.applyAsInt(c1), keyExtractor.applyAsInt(c2));
    }
```

同理:

```java
        // Arrays.sort(intervals, (o1, o2) -> Integer.compare(o1[0], o2[0]));
        Arrays.sort(intervals, Comparator.comparingInt(o -> o[0]));
```

---

## Java14

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

---

## Comparable vs Comparator

`Comparable`:

-   是 `java.lang` 下的 interface
-   提供 `compareTo()` 方法
-   A comparable object is capable of comparing itself with another object.
-   ```java
    Comparator comp = new MyComparator();
    int result = comp.compare(object1, object2);
    ```

`Comparator`:

-   是 `java.util` 下的接口
-   提供 `compare()` 方法
-   A comparator object is capable of comparing two different objects. The class is not comparing its instances, but some other class’s instances.
-   ```java
    String s = "hi";
    int result = s.compareTo("bye");
    ```

只能用`Compartor`的情况, 即要把两个逻辑对象放进去同时比较:

```java
public class Car  {

    int modelNo;

    int modelYear;

    public int getModelNo() {
        return modelNo;
    }

    public void setModelNo(int modelNo) {
        this.modelNo = modelNo;
    }

    public int getModelYear() {
        return modelYear;
    }

    public void setModelYear(int modelYear) {
        this.modelYear = modelYear;
    }

}

public class CarModelNoCompartor implements Comparator<Car>{

    public int compare(Car o1, Car o2) {

        return o1.getModelNo() - o2.getModelNo();
    }

}

public class CarModelYearComparator implements Comparator<Car> {

    public int compare(Car o1, Car o2) {

        return o1.getModelYear() - o2.getModelYear();
    }

}
```

---

## Math.abs

```java
    // 内置函数 0ms
    public int mySqrt(int x) {
        return (int)Math.pow(x, 0.5);
    }


    // 牛顿迭代法 1ms
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        double c = x;
        double x0 = x;
        while (true) {
            double xi = 0.5 * (x0 + c / x0);
            if (Math.abs(x0 - xi) < 1e-15) {
                break;
            }
            x0 = xi;
        }
        return (int)x0;
    }
```

## PriorityQueue

`new PriorityQueue<>()` 默认就是 minheap,

如果要转成 maxheap, 可以

1. `new PriorityQueue<>(Collections.reverseOrder())`
2. `new PriorityQueue<>((x,y) -> (y - x));`
3. `new PriorityQueue<>((x,y) -> y.compareTo(x));`

> **_IMPORTANT!_**
>
> `new PriorityQueue<>((x,y) -> (y-x))` 和 `new PriorityQueue<>((x,y) -> Integer.compare(y,x))` 区别:
>
> `(x,y) -> (y-x)` 的写法 逻辑上没有错, 但是会有 int 溢出的问题, 所以有可能某些案例无法通过
>
> `Integer.compare()` 的实现是: `(x < y) ? -1 : ((x == y) ? 0 : 1)` 也就是说只涉及了 [单纯的比较], 不涉及 [运算], 所以就不存在溢出的风险
>
> 而直接使用 `(x,y) -> (y-x)`，当 `y = Integer.MAX_VALUE, x = Integer.MIN_VALUE` 时，到导致溢出，返回的是 负数 ，而不是逻辑期望的 正数

---

## Arrays.fill()

对于二维数组, 想要改变它所有索引的值, 不需要用两次遍历, 只要用 `Arras.fill()` 方法:

```java
Arrays.fill(byte[] a, byte val)
```

---

## add() vs offer()

`add()` vs `offer()`:

1. `add()`: 添加元素, 如果添加成功则`返回true`, 如果队列是满的, 则`抛出异常`
2. `offer()`: 添加元素, 如果添加成功则`返回true`, 如果队列是满的, 则`返回false`

`remove()` vs `poll()`:

1. `remove()`: 移除队列头的元素并且返回，如果队列为空则`抛出异常`
2. `poll()`: 移除队列头的元素并且返回，如果队列为空则`返回null`

`element()` vs `peek()`:

1. `element()`: 返回队列头元素但不移除，如果队列为空，则`抛出异常`
2. `peek()`: 返回队列头元素但不移除，如果队列为空，则`返回null`

---

数组, 是把具有 相同 类型的若干元素按照 有序 的形式组织起来

为了降低查找数组的时间复杂度到 `O(log(m+n))`, 需要用 `二分查找`:

-   如果 `m + n` 是奇数, 那么中位数是 第`(m + n) / 2`个元素
-   如果 `m + n` 是偶数, 那么中位数是 第`(m + n) / 2`个元素与第`(m + n) / 2 + 1`个元素的平均值

---

## double pointer

指针问题, 需要先排序`(Ologn)`!, 然后再双指针 `O(n)`

---

## backtrack vs dfs

-   dfs 本质无序, 访问次序不重要

    回溯 本质有序, 必须有一步符合次序

-   dfs 不再访问已访问过的节点, 每个节点访问一次

    回溯 可以访问已访问过的节点, 也可能存在未访问过的节点

-   回溯 算法复杂度, 由递归节点个数决定

---

## Integer compile

`Integer x = 123`在编译的时候会变成: `Integer x = Integer.valueOf(123);`

如果该属性所对应的数据库的字段是主键或者是外键时，用 Integer

Integer 值 -2147483648 to 2147483647, 即 \[-2^31, 2^31 - 1\]

---

## getSimpleName()

```
Q28. What statement returns true if "nifty" is of type String?

- [ ] `"nifty".getType().equals("String")`
- [ ] `"nifty".getType() == String`
- [ ] `"nifty".getClass().getSimpleName() == "String"`
- [x] `"nifty" instanceof String`
```

为什么不选 `"nifty".getClass().getSimpleName() == "String"` ?

因为 `.getClass().getSimpleName()` 返回的是 `String` 类型的 `String`， 要用`.equals("Stirng")` 替换题目中的 `== "String"`

---

## get object instance

实例化对象的方式:

1. `new`关键词, 调用`constructor`
2. 通过反射机制(reflection), 反射 `Class` 对象, 从 `Class对象中` 提取 `Constructor` 对象, 然后从 `Constructor` 对象中 `newInstance()`
3. 实现 `Cloneable` 接口，重写 Object 类的 `clone` 方法

    无论何时我们调用一个对象的 `clone` 方法，JVM 就会创建一个新的对象，将前面对象的内容全部拷贝进去

    用 `clone` 方法创建对象并不会调用任何构造函数。

例子如下:

```java
    public Test() {
        System.out.println("初始化");
    }

    public Test(String name) {
        System.out.println("name" + name);
    }

    public static void main(String[] args) throws Exception {
        // 1. new 方法调用
        Test test1 = new Test("张三");
        System.out.println(test1);
        // 2.1. 直接调用 初始化构造器
        Test test2 = Test.class.newInstance();
        System.out.println(test2);
        // 2.2 反射 特定的构造器并用 newInstance 重载
        Class p1 = Class.forName("cn.sichu.Test");
        Constructor p2 = p1.getConstructor(String.class);
        Test test3 = (Test)p2.newInstance("李四");
        System.out.println(test3);
    }
```

---

## int to char

如果通过 `toString` 再 `toCharArray` 的话, 没有依次判断可能性并强转 `(char)` 来的快, 但是感觉平常并不知道有可能有多少位? 可能还是用包比较常用吧

```java
// 慢
for (char digit : Integer.toString(cnt).toCharArray()) {
    chars[res++] = digit;
}

// 快
if (cnt / 1000 > 0) {
    chars[res++] = (char)(cnt / 1000 + '0');
}
if (cnt / 100 > 0) {
    chars[res++] = (char)(cnt % 1000 / 100 + '0');
}
if (cnt / 10 > 0) {
    chars[res++] = (char)(cnt % 100 / 10 + '0');
}
chars[res++] = (char)(cnt % 10 + '0');
```

---

## bit operation

位逻辑运算符

1. `&` 与

    按位 与运算 (AND)

    `4 & 5 = 4`

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

位移运算符

1. `8 >> 1 = 4`

2. `9 << 2 = 36`

---

## treeset vs hashset

1. HashSet

    不保证元素排列顺序

    不是同步的

    HashSet 是哈希表实现的, 元素可以是 null, 但只能放一个 null

2. TreeSet

    TreeSet 是 `SortedSet` 接口唯一实现类, 可以 `自然排序` 和 `定制排序`

    TreeSet 判断两个对象不相等的方式是通过 `equals` 方法 返回 false, 或者 `CompareTo` 方法返回 0

    TreeSet 是二叉树实现的, 自动排好序了, 不允许放 null 值

---

## arraylist vs linkedlist

1. `ArrayList` 是基于动态数组的实现

2. `LinkedList` 是基于链表的实现, 占用内存空间比较大, 但在批量插入或删除元素时 速度优于 `ArrayList`

---

## int vs integer

1.  `int` 是 primitive data type 原属数据类型

    `Integer` 是 Wrapper class 包装类

2.  `Integer` 必须 instantiate 实例化后才能使用

3.  `int` 直接存储数据值

    `Integer` 实际是 reference of an object 对象的引用, 当 new 一个 Integer 时, 实际上是生成一个指针指向此对象内存地址

    所以 Integer 和 Integer 用 `==` 比较是不会相等的, 因为比较的是地址:

    ```java
    Integer i = new Integer(100);
    Integer j = new Integer(100);
    System.out.print(i == j);   // false
    System.out.println(i.equals(j));    // true
    ```

    `Integer` 变量 和 `int` 变量比较时, 只要两个变量值是相等的, 结果位 true, 原理是包装类 Integer 和基本数据类型 int 比较时, java 会自动拆包成 int 然后进行比较, 所以这时候用 `==` 比较会相等:

    ```java
    Integer i = new Integer(100);
    int j = 100;
    System.out.println(i == j); // true
    ```

    非 new 生成的`Integer`变量和`new Integer()`生成的变量比较时，结果为 false。（因为非 new 生成的 Integer 变量指向的是 java 常量池中的对象，而 new Integer()生成的变量指向堆中新建的对象，两者在内存中的地址不同）

    ```java
    Integer i = new Integer(100);
    Integer j = 100;
    System.out.print(i == j); //false
    System.out.println(i.equals(j));    // true
    ```

    对于两个非 new 生成的`Integer`对象，进行比较时，如果两个变量的值在区间 -128 到 127 之间，则比较结果为 true，如果两个变量的值不在此区间，则比较结果为 false, 因为编译非 new 的 `Integer` 对象时, 是翻译成 `Integer.valueOf()`, 而 `Integer.valueOf(int i)` 定义如下:

    ```java
    Integer i = 100;
    Integer j = 100;
    System.out.print(i == j); //true
    Integer i = 128;
    Integer j = 128;
    System.out.print(i == j); //false

    public static Integer valueOf(int i){
    assert IntegerCache.high >= 127;
    if (i >= IntegerCache.low && i <= IntegerCache.high){
        return IntegerCache.cache[i + (-IntegerCache.low)];
    }
    return new Integer(i);
    }
    ```

4.  `int` 默认值是 0

    `Integer` 默认值是 null

---

## multithread

[volatile 关键字](#volatile) | [volatile vs synchronized](#volatile-vs-synchronized) | [FileUtils](#apachecommoniofileutils) | [Reentrant lock vs synchronized](#reentrant-lock-vs-synchronized) | [ReentrantLock 使用场景](#reentrantlock-usage-scenarios)

多线程主要三个知识点:

1. visibility 可见性
2. orderliness 有序性
3. atomicity 原子性

`JUC` 是在 Java 5.0 添加的 `java.util.concurrent` 包的简称，目的就是为了更好的支持高并发任务，让开发者利用这个包进行的多线程编程时可以有效的减少竞争条件和死锁线程

## lock

## synchronized

从性能上来说, 能不上锁就不上锁

例子:

```java
public static void main(String[] args) {
    Object o = new Object();
    synchronized(o) {
        //...
    }
}
```

这种情况 `syncrhonized` 加了一个锁, 然后包含的内容就是 atomic 原子

当一个 thread 执行时, 其他 thread 是进不来的, 也就是 parallel 并行 变 serial 串行

如果不加 `synchronized` 互斥锁 mutex lock 的话, 多线程情况下无法保证 data consistency 数据一致性

例子:

```java
    private static long n = 0L;

    public static void main(String[] args) throws InterruptedException {
        Thread[] threads = new Thread[100];
        CountDownLatch latch = new CountDownLatch(threads.length);
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                // synchronized (Plus.class) {
                    for (int j = 0; j < 10000; j++) {
                        ++n;
                    }
                    latch.countDown();
                // }
            });
        }
        for (Thread thread : threads) {
            thread.start();
        }
        latch.await();
        System.out.println(n);
    }
```

这种情况需要用 synrhonize 把并行变串行才能保证数据一致性

---

## volatile

volatile, 易挥发的

用于再多线程 Mutil thread 环境下保证 **内存可见性 Memory visibility** 的关键字

---

## volatile vs synchronized

`volatile` 禁止重排序 和 保证线程可见性

`synchronized` 不能禁止重排序 和 保证线程可见性

-   `volatile` read 读操作:

    将本地内存变量置为无效, 然后读取主内存

-   'volatile' write 写操作:

    将本地内存变量刷新到主内存, 保证内存可见性

    所以在计算文件夹存储空间的时候, 不加 `private volatile long totalSize` 的话会导致一直计算不出总大小, 因为存储空间不可见

    而且 `volatile` 禁止重排序, 这样不同线程计算不同文件夹大小, 也方便写代码

---

## apache.common.io.FileUtils

计算文件夹大小可以用 `FileUtils.sizeOfDirectory(@NotNull java.io.File directory)`, 用的是 apache 的包, 要手动依赖注入一下:

```xml
        <!-- 用来调FileUtils.sizeOfDirectory -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.11.0</version>
        </dependency>
```

---

## reentrant lock vs synchronized

1. `synchronized` 是一个 Java 内置的关键字

    `ReentrantLock` 是 Java 的一个类

2. `synchronized` 只能是 非公平锁 unfair lock

    `ReentrantLock` 可以实现 `公平锁 fair lock` 和 `非公平锁 unfair lock`

    `ReentrantLock` 默认情况下是 `非公平锁 unfair lock`, 也就是 无序状态, 允许插队, JVM 自动计算调度插队, 速度更快

3. `synchronized` 不能 中断一个等待锁的线程

    `ReentrantLock` 可以中断一个 试图获取锁 的线程

4. `synchronized` 不能设置 超时

    `ReentrantLock` 可以设置 超时

5. `synchronized` 会自动释放锁

    `ReentrantLock` 必须要手动释放锁, 否则锁死

---

## ReentrantLock usage scenarios

1. 如果发现该操作 已经在执行中, 则不再执行

    场景 a. 定时任务:

    如果任务执行时间 可能超过 下次计划执行时间

    为了确保该 有状态任务 只有一个正在执行, 忽略重复触发

    场景 b. 界面交互点击执行较长时间请求操作:

    防止多次点击导致 后台重复执行 (忽略重复触发)

    ```java
    private ReentrantLock lock = new ReentrantLock();
    if (lock.tryLock()) {   // 如果已经被lock, 立即返回false, 达到忽略操作的效果
        try {
            // 操作
        } finally {
            lock.unlock();
        }
    }
    ```

2. 如果发现该操作 已经在执行, 等待一个一个执行 (类似 synchronized 同步执行)

    这种情况主要是 防止资源使用冲突, 保证同一时间内 只有一个操作可以使用资源

    但是这里就涉及 公平锁和非公平锁的区别了

    对于 文件操作, 同步消息发送, 有状态的操作等场景, 判断是否要保持顺序来选择具体使用 公平锁还是非公平锁

    ```java
    private ReentrantLock lock = new ReentrantLock();   // 默认false, 非公平锁
    private ReentrantLock lock = new ReentrantLock(true);   // 公平锁
    try {
        lock.lock();    // 如果被其他资源锁定, 在这里等待锁释放, 达到暂停的效果
        // 操作
    } finally {
        lock.unlock();
    }
    ```

3. 如果发现该操作 已经在执行, 则等待一段时间, 等待超时则不执行 (尝试等待执行)

    这种情况也是 2 的改进

    等待获得锁操作有一个时间限制, 超时则放弃执行

    这样可以防止时间过长导致死锁 (大家都在等待资源, 导致线程队列溢出)

    ```java
    try {
        if (lock.tryLock(5, TimeUnit.SECONDS)) {    // 如果已经被锁定, 尝试等待5s
            try {
                // 操作
            } finally {
                lock.unlock();
            }
        }
    } catch (InterruptedException e) {
        e.printStackTrace();    // 当前线程被 interrupt 会抛个异常
    }
    ```

4. 如果发现操作 已经在执行, 等待执行, 可中断正在进行的操作立刻释放锁进行下一操作

    这种情况也是 2 的改进

    synchronized 与 ReentrantLock 在默认情况下是不会响应中断(interrupt)操作，会继续执行完。lockInterruptibly()提供了 可中断锁 来解决此问题

    通过取消同步操作, 防止不正常的操作长时间占用造成阻塞

    ```java
    try {
        lock.lockInterruptibly();
        // 操作
    } catch (InterruptedException e) {
        e.printStackTrace();
    } finally {
        lock.unlock();
    }
    ```

---

# binary indexed tree

树状数组, 又叫 二叉索引树 或 Fenwick 树

能高效的:

1. 数组前缀和 的查询

2. 单点更新

模板:

```java
    private int lowbit(int x) {
        return x & -x;
    }

    private void add(int index, int val) {
        while (index < tree.length) {
            tree[index] += val;
            index += lowbit(index);
        }
    }

    private int prefixSum(int index) {
        int sum = 0;
        while (index > 0) {
            sum += tree[index];
            index -= lowbit(index);
        }
        return sum;
    }
```

hint:

1. index 代表的是 第 index 个, 也就是从 1 开始 而不是 0

2. `x & -x` 代表的是 最低位的 1 和其他的 0 组成的二进制

    比如: lowbit(5) = 5 & -5 = 1

    1111111111111011

    0000000000000101

    -> 0000000000000001

    -> 1

---

# Spring

[IOC 分析](#ioc) | [DI 分析](#di) | [bean](#bean) |

---

##

**`IOC (Inversion of Control)` `控制反转`**

-   使用对象时, 在程序中不主动 new 对象, 转换为由外部提供对象,

    即 对象的创建控制权 由程序内部转移到外部

    `IOC` 的目的就是 `解耦` `decoupling`

`Spring` 就是对 IOC 思想进行了实现

-   Spring 提供了一个容器, 即 `IOC容器`, 用来充当 IOC 思想中的外部
-   IOC 容器 负责对象的 创建, 初始化等一系列工作, 被创建 或 被管理的对象, 在 IOC 容器中称为 `Bean`

**`DI (Dependency Injection)` `依赖注入`**

-   在容器中建立 bean 与 bean 之间的依赖关系的整个过程, 即依赖注入

没用 `Spring` 前:

```java
/**
* 业务层实现
**/
public class BookServiceImpl implements BookService {
    // 修改数据层实现时, 需要把 new 之后的实现类也修改了
    // private BookDao bookDao = new BookDaoImpl();
    private BookDao bookDao = new BookDaoImpl2();

    public void save() {
        bookDao.save();
    }
}

/**
* 数据层实现
**/
public class BookDaoImpl implements BookDao {
    public void save() {
        System.out.println("book dao save ...");
    }
}

/**
* 修改数据层实现时
**/
public class BookDaoImpl2 implements BookDao {
    public void save() {
        System.out.println("book dao save ...2");
    }
}
```

这样的代码导致: 耦合度高 high coupling

解决方案:

使用 `IOC` 解耦 decoupling

使用 Spring 后:

```java
/**
* 业务层实现
**/
public class BookServiceImpl implements BookService {
    private BookDao bookDao;

    public void save() {
        bookDao.save();
    }
}

/**
* 数据层实现
**/
public class BookDaoImpl implements BookDao {
    public void save() {
        System.out.println("book dao save ...");
    }
}
```

然后 IOC 容器里面放 `service`, `dao`, 并且 Spring 提供的 IOC 容器会负责对象的创建, 初始化等一系列工作

上面有了 IOC 容器, 但有个问题: `bookDao` 对象, 需要 `BookService` 才能运行

`DI` 就是 在 IOC 容器中, 把 同时处在容器内的 `service` 和 `dao` 关联起来: service -- 依赖 --> dao

这个绑定依赖的过程就是所谓 `依赖注入`

---

## IOC

1. 管理什么?

    Service 与 Dao

2. 如何将被管理的对象告知 IOC 容器?

    配置

3. 被管理的对象交给 IOC 容器, 如何获取 IOC 容器?

    接口

4. IOC 容器得到后, 如何从容器中获取 Bean?

    接口方法

5. 使用 Spring 导入哪些坐标?

    pom.xml

---

## DI

1. 基于 IOC 管理 Bean
2. Service 中使用 new 形式创建 Dao 对象是否保留?

    否

3. Service 中需要的 Dao 对象如何进入到 Service 中?

    提供方法

4. Service 与 Dao 间的关系如何描述?

    配置

就是把 xml 里的 `<bean />` 标签变成围堵标签:

```xml
    <bean id="bookService" class="cn.sichu.service.impl.BookServiceImpl">
        <property name="bookDao" ref="bookDao"/>
    </bean>
```

---

## bean

| [bean 实例化](#bean-instantiate) | [bean 生命周期](#bean-life-cycle)

##

bean 的别名, 就是定义多个 `name` 属性, 中间用 `空格`, `逗号`, `分号` 分隔

Spring 默认创建的 bean 就是 `单例模型(singleton model)`:

-   代码 example :

```java
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookDao bookDao1 = (BookDao)ctx.getBean("bookDao");
        BookDao bookDao2 = (BookDao)ctx.getBean("bookDao");
        System.out.println(bookDao1);
        System.out.println(bookDao2);
```

-   输出结果:

```
cn.sichu.dao.impl.BookDaoImpl@4566e5bd
cn.sichu.dao.impl.BookDaoImpl@4566e5bd
```

-   这时修改 `applicationContext.xml`:

```xml
<bean id="bookDao" name="dao" class="cn.sichu.dao.impl.BookDaoImpl" scope="prototype"/>
```

-   输出结果:

```
cn.sichu.dao.impl.BookDaoImpl@4566e5bd
cn.sichu.dao.impl.BookDaoImpl@1ed4004b
```

> 为什么 `bean` 默认单例？
>
> 如果一个 bean 被声明为单例的时候，在处理多次请求的时候在 Spring 容器里只实例化出一个 bean，后续的请求都公用这个对象，这个对象会保存在一个 map 里面
>
> 当有请求来的时候会先从缓存(map)里查看有没有，有的话直接使用这个对象，没有的话才实例化一个新的对象，所以这是个单例的
>
> 但是对于原型(prototype)bean 来说当每次请求来的时候直接实例化新的 bean，没有缓存以及从缓存查的过程

-   适合交给 容器 进行管理的 bean:
    -   表现层对象 servlet
    -   业务层对象 service
    -   数据层对象 dao
    -   工具对象 utils
-   不适合:
    -   封装实体的域对象
        这种对象的特点就是 有状态的, 比如会记录成员变量变化的属性值

---

## bean instantiate

`bean` 本质上就是 对象

1.  方法一: 使用 构造方法 实例化 bean
    -   而且就算构造方法被 `private` 了, 也能调用到, 也就是说 Spring 是用 反射(reflection) 生成实例的
    -   而且必须调用 **无参** 的构造方法
2.  方法二: 使用 静态工厂 实例化 bean
    -   这种方法可以在 `public static OrderDao getOrderDao() {return new OrderDaoImpl();}` 的 `return` 前干些初始化一些其他配置, 主要是针对早期遗留系统
3.  方法三: 使用 实例工厂 实例化 bean

4.  改进方法三: 创建 `XXXFactoryBean` 类并实现 `FactoryBean<T>`

    ```java
    public class UserDaoFactoryBean implements FactoryBean<UserDao> {
        // 代替原始 实例工厂 中创建对象的方法
        @Override
        public UserDao getObject() throws Exception {
            return new UserDaoImpl();
        }

        @Override
        public Class<?> getObjectType() {
            return UserDao.class;
        }
    }
    ```

    而 实例工厂 还能通过 实现 `isSingleton()` 方法来创建 非单例的 bean:

    ```java
        @Override
        public boolean isSingleton() {
            // return FactoryBean.super.isSingleton();
            return false;
        }
    ```

---

## bean life cycle

bean 生命周期控制 1:

在 xml 中添加 `init-method`, `destroy-method`

```
<bean id="bookDao" class="cn.sichu.dao.impl.BookDaoImpl" init-method="init" destroy-method="destroy"/>
```

但是我们是观察不到 destroy 的, 因为 JVM 退出了

解决办法就是在 JVM 关闭前先关闭 Spring 容器

方法 1: 更改创造的 ctx 对象的类别, 然后添加`.close()`方法:

```java
ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
BookDao bookDao = (BookDao)ctx.getBean("bookDao");
bookDao.save();
ctx.close();
```

方法 2: 添加关闭钩子 `registerShutdownHook()`

```java
ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
ctx.registerShutdownHook();
```

`.close()` 比较暴力, 且只能放在最后一行

`.registerShutdownHook()` 可以随便放

bean 生命周期控制 2:

按照 Spring 方法来 implement `InitializingBean, DisposableBean`

```java
public class BookServiceImpl implements BookService, InitializingBean, DisposableBean {

    ...

    @Override
    public void destroy() throws Exception {
        System.out.println("service destroy");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("service init");
    }
}
```

bean 生命周期

-   初始化容器

1. 创建对象(内存分配)
2. 执行构造方法
3. 执行属性注入(set)
4. 执行 bean 初始化方法

-   使用 bean

1. 执行业务操作

-   关闭/销毁容器

1. 执行 bean 销毁方法

# SpringMVC

| | [Controller 和 业务 bean 加载控制](#springmvc-bean-and-spring-bean-load) | [简化 Config](#simplify-config) | [中文乱码 POST](#post-encoding-filter-config) | [不同参数名称的映射](#mapping-param-with-different-name) | [传 JSON 参数](#request-json) | [@RequestBody vs @RequestParam](#requestbody-vs-requestparam) | [REST](#rest)

##

SpringMVC 与 Servlet 等同, 都是 web 层开发, 即表现层开发

`@Controller` 设置 controller

`@Configuration` `@ComponentScan("cn.sichu.controller")` 配置 controller 路径

`@RequestMapping("/save")` 设置返回路径

`@ResponseBody` 把方法的返回值当作 response 返回的整体

---

## SpringMVC bean and Spring bean load

(demo 是用 maven-archetype:webapp 建的)
(启动用 maven, 设置 run `tomcat7:run`)

-   SpringMVC bean (表现层 bean)
-   Spring bean
    -   业务 bean(Service)
    -   功能 bean(DataSource)

由于功能不同, 需要 **避免** Spring 加载到 SpringMVC 的 bean

方法 1: Spring 加载 bean 扫面范围, 设置精准范围扫描 (主要用这一种)

方法 2: Spring 加载 bean 扫面范围, 设置大范围扫描, 同时排除掉 controller 包

方法 3: 不区分 Spring, SpringMVC 的环境, 加载到同一个环境中

---

## simplify config

把 `public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {}` 改成 `public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer{}` 一样也是实现三个方法

---

## POST Encoding Filter config

处理 `POST` 请求的中文支持, 在 `ServletContainerInitConfig`中添加

```java
    @Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        return new Filter[] {filter};
    }
```

---

## mapping param with different name

在参数前添加 `@RequetParam()`, 如下:

```java
public String commonParamDifferentName(@RequestParam("name") String userName, int age)
```

---

## request JSON

1. `pom.xml` 添加:

```xml
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.9.0</version>
        </dependency>
```

2. 在 SpringMvcConfig 添加注解 `@EnableWebMvc` 使其能够接受 JSON 数据

3. 因为 JSON 数据是从 POSTMAN Body -> raw -> JSON 传进来的, 他在 ResponseBody 里, 所以更改参数注解:

```java
// 注意, 是 @RequestBody 而不是 @RequestParam
public String listParamForJson(@RequestBody List<String> likes)
```

---

## RequestBody vs RequestParam

-   区别:
    -   `@RequestParam` 用于接收 url 地址传参, 表单传参 【application/x-www-form-urlencoded】
    -   `@RequestBody` 用于接收 JSON 数据 【application/json】
-   应用:
    -   平常发的主要是 json 数据, `@RequestBody` 用的更多
    -   但是如果非 json 数据, 还是要选用 `@RequestParam`

---

## date param

如果一个输入 `2022/01/01` 另一个输入 `2023-01-01` 会报错:

```
[WARNING] Resolved [org.springframework.web.method.annotation.MethodArgumentTypeMismatchException: Failed to convert value of type 'java.lang.String' to required type 'java.util.Date'; nested exception is org.springframework.core.convert.ConversionFailedException: Failed to convert from type [java.lang.String] to type [java.util.Date] for value '2023-01-01'; nested exception is java.lang.IllegalArgumentException]
```

这时候要更改 `@DateTimeFormat` 的 `pattern`:

```java
public String dateParam(Date date1, @DateTimeFormat(pattern = "yyyy-mm-dd") Date date2,
        @DateTimeFormat(pattern = "yyyy/mm/dd hh:mm:ss") Date date3)
```

## REST

REST (Representational State Transfer) 表现形式状态转换

-   传统风格:
    -   `http://localhost/user/getById?id=1`
    -   `http://localhost/user/saveUser`
-   REST 风格

    -   `http://localhost/user/1`
    -   `http://localhost/user`

-   优点:

    1. 隐藏资源访问行为, 无法通过地址得知对资源是如何操作的
    2. 书写简化

-   常见 REST 风格, 按照访问资源时的 \[行为动作\] 区分对资源进行了何种操作:
    -   `http://localhost/users` 查询全部用户信息 （GET）查询
    -   `http://localhost/users/1` 查询指定用户信息 (GET)查询
    -   `http://localhost/users` 添加用户信息 (POST)修改/保存
    -   `http://localhost/users` 修改用户信息 (PUT)修改/更新
    -   `http://localhost/users/1` 删除用户信息 (DELETE)删除

---

# SpringBoot

| [配置文件](#configuration-file) | [更换服务器](#change-server) ||

SpringBoot 核心:

```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
```

所以多模块开发, 这个`<parent>`应该在最外层的 xml 中添加

前后端分离:

1. Maven -> Lifecycles -> package
2. cmd 到项目的 target 目录

```java
java -jar xxx.jar
```

这个可以直接 `java -jar` 是通过下面这个 xml 配置实现的

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

## configuration file

当 `application.properties`, `application.yml`, `application.yaml` 同时存在时, 前者优先级高

一般来说还是写 `yml`多

## change server

使用 exclusions 把默认服务器关了, 更换成 jetty, 版本号不用写, 在他引用的 xml 里面已经配好了

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-tomcat</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jetty</artifactId>
        </dependency>
```

---

# Redis

启动 redis: cd 到 redis 目录, cmd:

```
redis-server.exe redis.windows.conf
```

---

# MyBatis

MyBatis 前身 iBatis, 是数据持久层框架, 是对 JDBC 的封装

-   特性:

1. 持久层框架 Persistence framework, 支持定制化 SQL, 存储过程 stored procedures, 以及高级映射 (一对多/多对一)

2. 对 JDBCF 封装, 避免几乎所有代码

3. 用 XML 或者 注解, 将 POJO (Plain Old Java Object) 普通 Java 对象 映射成数据库中的记录 (解耦 decoupling)

4. 半自动的 ORM (Object Relation Mapping) 框架

-   缺点:

1. SQL 编写工作量大, 尤其是字段多, 关联表多的时候

2. SQL 语句依赖数据库, 导致数据库移植性差, 不能随便更换数据库

-   核心接口和类:

`SqlSessionFactoryBuilder` --`build()`--> `SqlSessionFactory` -- `openSession()`--> `SqlSession`

## mapper

mapper 接口就相当于 DAO

mapper 的获取: `sqlSession.getMapper();`

## select query

查询标签 select 必须设置 resultType 或者 resultMap:

`resultType`: 自动映射, 用于属性名和表中字段名一致的的情况

    resultType 本质上是传入类型别名Alias, 所以不区分大小写

`resultMap`: 自定义映射, 用于属性名和表中字段名不一致 或者 一对多/多对一

> resultType 如果在配置文件里设置了 `alias` 不区分大小写

MyBatis 的各种查询功能:

1. 若只有一条返回,

    a. 可以通过实体类 Entity class 接收返回数据

    b. 可以通过 集合 接收返回数据

    c. 可以通过 map 接收返回数据, 而且这种方法用的很多, 比如查 json 数据

2. 若有多条返回,

    a. 可以通过实体类类型的 list 集合接收 (一定不能用实体类, 只能用集合, 否则抛异常`TooManyResultsException`)

    b. 可以通过 map 类型的 list 集合接收

    c. 可以在 mapper 接口的方法上用 `@MapKey("")` 使用数据库中唯一标识的字段作为 key, 返回 map 集合

## mybatis-config.xml

配置文件里的标签必须按照顺序:

```
The content of element type "configuration" must match "(properties?,settings?,typeAliases?,typeHandlers?,objectFactory?,objectWrapperFactory?,reflectorFactory?,plugins?,environments?,databaseIdProvider?,mappers?)".
```

## parameters

获取参数两种方式:

1. `${}`

    本质就是字符串拼接, 需要注意`''`单引号的使用

    而且用字符串拼接存在 sql 注入 的风险

2. `#{}`

    本质是占位符赋值

-   MyBatis 获取参数的各种情况:

1. mapper 接口方法的参数为单个字面量类型, 可以通过 `${}` `#{}`以任意的名称获取参数值

在接口对应的映射 xml 文件里使用 `#{}`, `{}`里传的参数名不重要, 值才重要, 所以 `#{username}` 和 `#{aaa}`能够返回同样的结果

`select * from t_user where username = '${username}'` 手动加单引号后返回结果和 `select * from t_user where username = #{username}` 一样

总而言之尽量用 `#{}`

2. mapper 接口方法的参数为多个时

此时 MyBatis 会将这些参数放在一个 map 集合中, 以两种方式存储:

a. `arg0, arg1...` 为 key, 以 参数 为 value

b. `param1, param2...` 为 key, 以 参数 为 value

所以 `#{}` `${}` 里传的是 key 的值

3. 若 mapper 接口方法的参数有多个时, 根据 2, 可以手动设置一个 map

这种情况下依旧是 `#{}` `${}` 里传 key 的值

4. mapper 接口方法的参数是一个实体类类型的参数

通过 `#{}`, `${}` 以属性的方式访问属性值

这种方式也是最普遍的使用方式

5. 使用 `@Param` 命名参数

这种情况可以使用 `param1, param2...` 和 自己设置的 `@Param()`的 value

> 总结: 总的来说分两种情况比较方便 1. 加 `@Param` 的情况; 2. 加实体类型的情况

## special parameters situation

-   模糊查询 Fuzzy search query

方法 1. 这种情况用 `#{}` 会返回错误的值: `select * from t_user where username like '%?%'`

    换成 `${}`: `select * from t_user where username like '%${username}%'` 则可以正确返回

方法 2. 也可以使用 mysql 的字符串拼接函数: `select * from t_user where username like concat('%', #{username}, '%')`, 这种情况就可以继续使用 `#{}`

方法 3. 也可以使用双引号拼接两个百分号: `select * from t_user where username like "%"#{username}"%"`, 这种方法也是最常用的

-   批量删除 batch deletion

只能使用 `delete from t_user where id in (${ids})`, 返回值是 1, 成功

如果使用 `delete from t_user where id in (#{ids})`, 返回值是 0, 而且在 sql 中执行脚本会报错

-   动态设置表名

只能用 `select * from ${tablename}` 不能用 `#{}`

-   添加功能获取自增的主键

使用场景

`t_clazz(clazz_id,clazz_name)`

`t_student(student_id,student_name,clazz_id)`

添加班级信息

获取新添加的班级的 id

为班级分配学生，即将某学的班级 id 修改为新添加的班级的 id

在`mapper.xml`中设置两个属性

`useGeneratedKeys`：设置使用自增的主键

`keyProperty`：因为增删改有统一的返回值是受影响的行数，因此只能将获取的自增的主键放在传输的参数 user 对象的某个属性中

---

# RabbitMQ

启动 mq: cd 到 rabbitmq/sbin 目录, cmd :

```
rabbitmq-plugins enable rabbitmq_management
```

---

# MongoDB

Mongodb 是为快速开发互联网 Web 应用而构建的数据库系统，其数据模型和持久化策略就是为了构建高读/写吞吐量和高自动灾备伸缩性的系统

-   mongo.exe 客户端运行程序
-   mongod.exe 服务端运行程序

1. 安装路径下创建 data\db 和 data\log 两个文件夹
2. 在安装路径下创建 mongod.cfg 配置文件

    ```
    systemLog:
    destination: file
    path: C:\dev\MongoDB\data\log\mongod.log
    storage:
    dbPath: C:\dev\MongoDB\data\db
    ```

3. 安装为服务（运行命令需要用管理员权限）
    ```
    C:/dev/MongoDB/bin/mongod.exe --config "C:\dev\MongoDB\mongod.cfg" --install
    ```
4. 服务相关命令
   启动服务：net start MongoDB
   关闭服务：net stop MongoDB
   移除服务：C:/dev/MongoDB/bin/mongod.exe --remove

# Robo 3T

下载 zip，解压，打开 robo3t.exe,

连接到 localhost:27017

## Global Exception

用 `@RestControllerAdvice`

# IDE

[Eclipse](#eclipse-ide) | [Idea](#intellij-idea)

---

##

Eclipse vs IDEA

Eclipse 中的 workspace 相当于 IDEA 中的 Project

Eclipse 中的 Project 相当于 IDEA 中的 Module

而实际开发中，因为主流是 分布式部署，结构就是 一个主项目下分多模块，然后模块间相互依赖，所以 IDEA 比较主流

IDEA 中跑一次项目后，`out` 目录放的是编译后的 `.class` 文件

IDEA 中在 IDE 里，先 remove module,再 delete module,因为模块防误删，第一次 remove 的时候不会删本地的

IDEA 全局搜索: `ctrl + shift + r`

Eclipse 全局搜索: `ctrl + h`

---

## Eclipse IDE

Eclipse 配置:

1. Preferences -> General -> Theme: DevStyle Theme
2. Preferences -> DevStyle -> Color Themes -> Workbench theme: Darkest Dark -> Icon colors: Pastels -> Editor theme: Eclipse Standard
3. Preferences -> Java-Installed -> JREs -> Add 添加 jdk1.8
4. Preferences -> Java -> Compiler 改成 jdk1.8
5. 从 github 上拉 p3c/p3c-formatter/ 下来

    Preferences -> Java -> Code Style -> Formatter -> 本地导入 eclipse-codestyle.xml

    Preferences -> Java -> Code Style -> Code Templates 本地导入 eclipse-codetemplate.xml

    (忘记了是自己手改还是用的 p3c)

    Preferences -> Java -> Code Style -> Code Templates

    5.1 修改 Types:

    ```java
    /**
    * @author ${user}
    * @date ${currentDate:date('YYYY/MM/dd')}
    */
    ```

    5.2 修改 Overriding methods:

    ```java
    /* (non-Javadoc)
    * ${see_to_overridden}
    */
    ```

6. 右键扫描功能(不记得需不需要了) 需要从 eclipse marketplace 下载 darkest dark theme with devstyle

    需要 Help-Install New Software then enter this update site URL https://p3c.alibaba.com/plugin/eclipse/update

7. Preferences -> Java -> Editor -> Save Actions -> 勾选 format code 和 organize imports
8. Window -> Appearance -> Hide Toolbar
9. Window -> Appearance -> Show view -> Console, Search, Git staging, SonarLint Rule Description, Package Explorer, Project Exploer
10. 安装 sonarlint, 不想看的时候在项目右键取消, 然后重启项目

---

Eclipse 快捷配置:

将 workspace\.metadata\.plugins\org.eclipse.core.runtime 中的 .settings 文件拷贝

换 workspace 的时候直接 复制粘贴覆盖 即可

## Intellij IDEA

[配置](#idea-config) | [快捷键](#idea-shortcuts)

查看 IDEA 版本: Help -> About

---

## IDEA config

1.  Plugins 安装 VSCode Theme

    Settings -> Appearance -> Theme -> VSCode Dark

2.  Settings -> Editor -> Code Style -> Scheme -> Import Scheme -> Eclipse XML Profile

    Settings -> Editor -> Code Style -> Code Generation -> 取消勾选 Line comment at first column, 勾选 Add a space at line comment start

    Settings -> Editor -> Code Style -> Wrapping and Braces -> Method annotations 和 class annotations 和 field annotations -> 改成 Wrap always

    至于 code template, IDEA 没有直接导入 xml 的功能

    可以通过创建文件夹时自动填充来实现:

    Settings -> Editor -> File and Code Templates -> Files 里的 class, interface, enum, annotation, 在 public xxx ${NAME} 上面一行, 添加注释模板:

    ```java
    /**
    *
    *@author sichu
    *@date ${YEAR}/${MONTH}/${DAY}
    **/
    ```

    至于在方法上添加注释的 template，暂时 IDEA 自带的 live template 好像够用了？

    万一哪天要改可以参考： https://blog.csdn.net/weixin_44519874/article/details/112259616

3.  Plugins 安装 Alibaba Java Coding Guidelines

4.  Plugins 安装 Save Actions

    Settings -> Save Actions ->

    勾选 activate save actions on save

    勾选 Optimize imports

    勾选 Reformat file

    勾选 Rearrange fields and methods

    勾选 Add missing @Override annotations

    勾选 Add blocks to if/while/for statements

5.  像 Eclipse 一样允许小写也能自动补全 pakage, class:

    Settings -> Editor -> General -> Code Completion -> 取消勾选 Match case

6.  关闭单词拼写检查:

    Settings -> Editor -> Inspections -> 取消勾选 Proofreading-typo

7.  Settings -> Editor -> General -> Editor Tabs -> Appearance -> 取消勾选 Show tabs in one row

    Settings -> Editor -> General -> Editor Tabs -> Closing Policy -> Tab limit: 30

8.  设置自动编译:

    Settings -> Build, Execution, Deployment -> Compiler -> 勾选 Build project automatically

9.  序列化版本号:

    Settings -> Editor -> Inspections -> JVM languages -> 勾选 Serializable class without 'serialVersionUID'

10. 不显示 class/method unused 黄色 warning:

    Settings -> Editor -> Inspections -> Java -> Declaration redundancy -> 取消勾选 Unused declaration

11. Settings -> Editor -> Inspections -> Java -> Data flow -> 取消勾选 Redundant local variable

12. Settings -> Build, Execution, Deployment -> Debugger -> Java -> Transport: 从默认的 Socket 改成 Shared memory

13. Settings -> Build, Execution, Deployment -> Build Tools -> Maven -> 手动修改 Maven home path, 勾选 User settings file 的 Override, 设置为 "Maven/apache-maven-3.8.2/conf/settings.xml"

14. 安装插件 Spring Boot Assistant

15. 手动从 https://plugins.jetbrains.com/plugin/18622-spring-boot-helper/versions 下载 Spring Boot Helper, 在 Plugins 里手动安装插件

16. 安装插件 Maven Helper

17. File -> Project Structure -> Project Settings -> Project -> Project language level -> 8!

18. 安装插件 MyBatisX

---

IDEA 快速配置(但是要检查很多东西, 不太好用):

1. 导出: File -> Manage IDE Settings -> Export Settings
2. 导入: File -> Manage IDE Settings -> Import Settings

需要检查并重新配置:

1. Settings -> Editor -> Inspections 里的所有配置
2. SaveActions 插件

---

## IDEA shortcuts

`ctrl + f4`: 关闭窗口

`ctrl + shift + f`: 全局搜索

`alt + shift + 鼠标选中`: 多选

`shift + f6 + 鼠标选中`: 多选

`alt + Enter`: 引入类

`alt + Enter` 或者 `ctrl + alt + B`: 快速实现接口

`ctrl + o`: 查看继承的类 或者 接口中的方法, 以及要实现的方法

`alt + shift + insert` 或者 `alt + insert`: constructor getter setter

`ctrl + shift + f10`: run

`ctrl + h`: 查看 hierachy

`ctrl + d`: 复制行

`ctrl + p`: 提示填充内容

## IDEA quick-code

`sout`: system.out.println()

# Bugs

##

Bug: 启动改名后项目, 出现 deserizable, classnotfound 等报错

解决:

因为虽然改了项目名, 但是用到的 model 还是同样的, 这些 model 在 redis 里面缓存了, 简单粗暴的就是 运行 `redis-cli.exe`, 执行:

```
redis-cli flushall
```

---

##

Bug: 在 SpringConfig 已经设置排除扫描: `@ComponentScan(value = "cn.sichu", excludeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Controller.class))`, 但是 Console 还是输出 `cn.sichu.controller.UserController@ca263c2`

解决:

方法 1: 把两个 Config 放到 `cn.sichu` 下

方法 2: 注释掉 `SpringMvcConfig` 上的 `@Configuration` 注解 (太逗了, 掩人耳目)

方法 3: 使用精准扫描 `@ComponentScan({"cn.sichu.service", "cn.sichu.dao"})`

原理: 因为即使排除扫描生效了, 在加载 SpringMvcController 时, 因为他也有注解`@Configuration`所以他又再次被加载了

---

##

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

---

##

Bug: 父模块的 `pom.xml` 报错: `Unresolved plugin: 'org.springframework.boot:spring-boot-maven-plugin:2.3.4.RELEASE'`

解决:

在 `pom.xml` 中添加 `<packaging>pom</packaging>`

---

```xml
    <description>the back-end project for SubleChat application</description>
    <packaging>pom</packaging>
```

##

Bug: IDEA `alt + insert` 失效

解决:

确认 `NUM LOCK` 是开启的

---

##

Bug:

报错: `@ComponentScan ANNOTATION type filter requires an annotation type: interface org.springframework.web.servlet.mvc.Controller`

解决:

Controller 导包倒错了, 注释掉的是导错的

```java
import org.springframework.stereotype.Controller;
// import org.springframework.web.servlet.mvc.Controller;
```

---

##

Bug:

```
SEVERE: Servlet.service() for servlet [dispatcher] in context with path [/springmvc-0003-request-mapping] threw exception [Request processing failed; nested exception is java.lang.IllegalStateException: No primary or default constructor found for interface java.util.List] with root cause
java.lang.NoSuchMethodException: java.util.List.<init>()
```

解决: 把 List 当成对象而不是接口, 添加 `@RequestParam`

```java
public String listParam(@RequestParam List<String> likes) {}
```

---

##

Bug: 子模块通过 Spring initializer 创建后, 无法被识别为 maven 工程

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

---

##

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

---
