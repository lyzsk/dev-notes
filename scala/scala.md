# Intro

scala 是完整的编程语言, sql 不是

scala 来自 java

scala: Scalable Language

jdk 1.5 的增强 for 循环是从 pizza 引入的新特性

jdk 1.8 的 lambda 就是从 scala 引入的新特性

scala 编译后的字节码文件是可以运行在 JVM 中的

Scala 不仅有面向对象, 还有面向过程, 面向函数

Scala 也是有 Scalac, 翻译成 `*.class`, 也就是意味着 scalac 编译器可以把 面向函数/面向过程/面向对象 都自动翻译成 class 面向对象, 理论上 scala 编译会更慢但是有优化

大数据主要的批处理计算引擎框架 Spark 是基于 Scala 语言开发的

大数据主要的流式计算引擎框架 Flink 也提供了 Scala 相应的 API

大数据领域中函数式编程的开发效率更高，更直观，更容易理解

## Installation

官网下载 `scala-2.12.18.zip` 为例:

先要求有 JDK1.8

下载, 解压, System variables 里添加 SCALA_HOME, PATH

Idea 装 Scala 插件

记得要下载 `scala-sources-2.12.18.tar.gz`, 解压后把 `scala-2.12.18\doc\scala-2.12.18\src\library` 放到 Scala 路径里, 在 IDEA 里看源码的时候 Choose Sources.. 选 `C:\Program Files\Scala\scala-2.12.18\library`

# Hello World

建一个 maven project, 一个 module, 右键 module, add frameworks support, 勾选 scala, 增加 library, 然后右键就能创建 scala 相关文件

建一个 Scala Object

```scala
object Scala01_HelloWorld {
  def main(args: Array[String]): Unit = {
    System.out.println("Hello Scala World")
    println("Hello Scala World")
  }
}
```

# static

因为 scala 是用 java 开发的, 所以可以用 `javap -c -l classname` 反编译 scala 语言

```
PS C:\Users\sichu\dev\full-stack-demos\scala-demos\2023-big-data-demos\202309-scala-learning-demo\target\classes\cn\sichu\scala\chapt
er01> javap -v User
Warning: Binary file User contains cn.sichu.scala.chapter01.User
Classfile /C:/Users/sichu/dev/full-stack-demos/scala-demos/2023-big-data-demos/202309-scala-learning-demo/target/classes/cn/sichu/sca
la/chapter01/User.class
  Last modified 01-Oct-2023; size 542 bytes
  MD5 checksum f3f4ea616ae9ae8484ad974453ee660e
  Compiled from "User.java"
public class cn.sichu.scala.chapter01.User
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #7.#20         // java/lang/Object."<init>":()V
   #2 = Fieldref           #6.#21         // cn/sichu/scala/chapter01/User.age:I
   #3 = Fieldref           #22.#23        // java/lang/System.out:Ljava/io/PrintStream;
   #4 = String             #24            // user static init...
   #5 = Methodref          #25.#26        // java/io/PrintStream.println:(Ljava/lang/String;)V
   #6 = Class              #27            // cn/sichu/scala/chapter01/User
   #7 = Class              #28            // java/lang/Object
   #8 = Utf8               age
   #9 = Utf8               I
  #10 = Utf8               <init>
  #11 = Utf8             ()V
  #12 = Utf8               Code
  #13 = Utf8               LineNumberTable
  #14 = Utf8               LocalVariableTable
  #15 = Utf8               this
  #16 = Utf8               Lcn/sichu/scala/chapter01/User;
  #17 = Utf8               <clinit>
  #18 = Utf8               SourceFile
  #19 = Utf8               User.java
  #20 = NameAndType        #10:#11        // "<init>":()V
  #21 = NameAndType        #8:#9          // age:I
  #22 = Class              #29            // java/lang/System
  #23 = NameAndType        #30:#31        // out:Ljava/io/PrintStream;
  #24 = Utf8               user static init...
  #25 = Class              #32            // java/io/PrintStream
  #26 = NameAndType        #33:#34        // println:(Ljava/lang/String;)V
  #27 = Utf8               cn/sichu/scala/chapter01/User
  #28 = Utf8               java/lang/Object
  #29 = Utf8               java/lang/System
  #30 = Utf8               out
  #31 = Utf8               Ljava/io/PrintStream;
  #32 = Utf8               java/io/PrintStream
  #33 = Utf8               println
  #34 = Utf8             (Ljava/lang/String;)V
{
  public static int age;
    descriptor: I
    flags: ACC_PUBLIC, ACC_STATIC

  public cn.sichu.scala.chapter01.User();
    descriptor:()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object."<init>":()V
         4: return
      LineNumberTable:
        line 7: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lcn/sichu/scala/chapter01/User;

  static {};
    descriptor:()V
    flags: ACC_STATIC
    Code:
      stack=2, locals=0, args_size=0
         0: bipush        30
         2: putstatic     #2                  // Field age:I
         5: getstatic     #3                  // Field java/lang/System.out:Ljava/io/PrintStream;
         8: ldc           #4                  // String user static init...
        10: invokevirtual #5                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
        13: return
      LineNumberTable:
        line 8: 0
        line 11: 5
        line 12: 13
}
SourceFile: "User.java"
```

说明:

```java
    public static int age = 30;

    static {
        System.out.println("user static init...");
    }
```

实际上在编译过程中自动变成了:

```java
    // public static int age = 30;
    public static int age;

    static {
        age = 30;
        System.out.println("user static init...");
    }
```

而 final 的:

```
PS C:\Users\sichu\dev\full-stack-demos\scala-demos\2023-big-data-demos\202309-sc
ala-learning-demo\target\classes\cn\sichu\scala\chapter01> javap -v Emp
Warning: Binary file Emp contains cn.sichu.scala.chapter01.Emp
Classfile /C:/Users/sichu/dev/full-stack-demos/scala-demos/2023-big-data-demos/2
02309-scala-learning-demo/target/classes/cn/sichu/scala/chapter01/Emp.class
  Last modified 01-Oct-2023; size 548 bytes
  MD5 checksum cf5c8c68230f75a5185db62ea66211b4
  Compiled from "Emp.java"
public class cn.sichu.scala.chapter01.Emp
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #6.#21         // java/lang/Object."<init>":()V
   #2 = Fieldref           #22.#23        // java/lang/System.out:Ljava/io/Print
Stream;
   #3 = String             #24            // emp static init...
   #4 = Methodref          #25.#26        // java/io/PrintStream.println:(Ljava/
lang/String;)V
   #5 = Class              #27            // cn/sichu/scala/chapter01/Emp
   #6 = Class              #28            // java/lang/Object
   #7 = Utf8               AGE
   #8 = Utf8               I
   #9 = Utf8               ConstantValue
  #10 = Integer            30
  #11 = Utf8               <init>
  #12 = Utf8             ()V
  #13 = Utf8               Code
  #14 = Utf8               LineNumberTable
  #15 = Utf8               LocalVariableTable
  #16 = Utf8               this
  #17 = Utf8               Lcn/sichu/scala/chapter01/Emp;
  #18 = Utf8               <clinit>
  #19 = Utf8               SourceFile
  #20 = Utf8               Emp.java
  #21 = NameAndType        #11:#12        // "<init>":()V
  #22 = Class              #29            // java/lang/System
  #23 = NameAndType        #30:#31        // out:Ljava/io/PrintStream;
  #24 = Utf8               emp static init...
  #25 = Class              #32            // java/io/PrintStream
  #26 = NameAndType        #33:#34        // println:(Ljava/lang/String;)V
  #27 = Utf8               cn/sichu/scala/chapter01/Emp
  #28 = Utf8               java/lang/Object
  #29 = Utf8               java/lang/System
  #30 = Utf8               out
  #31 = Utf8               Ljava/io/PrintStream;
  #32 = Utf8               java/io/PrintStream
  #33 = Utf8               println
  #34 = Utf8             (Ljava/lang/String;)V
{
  public static final int AGE;
    descriptor: I
    flags: ACC_PUBLIC, ACC_STATIC, ACC_FINAL
    ConstantValue: int 30

  public cn.sichu.scala.chapter01.Emp();
    descriptor:()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object."<init>
":()V
         4: return
      LineNumberTable:
        line 7: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lcn/sichu/scala/chapter01/Emp;

  static {};
    descriptor:()V
    flags: ACC_STATIC
    Code:
      stack=2, locals=0, args_size=0
         0: getstatic     #2                  // Field java/lang/System.out:Ljav
a/io/PrintStream;
         3: ldc           #3                  // String emp static init...
         5: invokevirtual #4                  // Method java/io/PrintStream.prin
tln:(Ljava/lang/String;)V
         8: return
      LineNumberTable:
        line 11: 0
        line 12: 8
}
SourceFile: "Emp.java"
```

用 final 修饰的不在静态代码块中编译, 编译的位置发生了改变

```
Classfile /C:/Users/sichu/dev/full-stack-demos/scala-demos/2023-big-data-demos/202309-scala-learning-demo/target/classes/cn/sichu/sca
la/chapter01/TestStatic.class
  Last modified 01-Oct-2023; size 651 bytes
  MD5 checksum b4e20a9904dfb6938e970838eb6e033c
  Compiled from "TestStatic.java"
public class cn.sichu.scala.chapter01.TestStatic
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #7.#21         // java/lang/Object."<init>":()V
   #2 = Fieldref           #22.#23        // java/lang/System.out:Ljava/io/PrintStream;
   #3 = Class              #24            // cn/sichu/scala/chapter01/Emp
   #4 = Methodref          #25.#26        // java/io/PrintStream.println:(I)V
   #5 = Fieldref           #27.#28        // cn/sichu/scala/chapter01/User.age:I
   #6 = Class              #29            // cn/sichu/scala/chapter01/TestStatic
   #7 = Class              #30            // java/lang/Object
   #8 = Utf8               <init>
   #9 = Utf8             ()V
  #10 = Utf8               Code
  #11 = Utf8               LineNumberTable
  #12 = Utf8               LocalVariableTable
  #13 = Utf8               this
  #14 = Utf8               Lcn/sichu/scala/chapter01/TestStatic;
  #15 = Utf8               main
  #16 = Utf8             ([Ljava/lang/String;)V
  #17 = Utf8               args
  #18 = Utf8               [Ljava/lang/String;
  #19 = Utf8               SourceFile
  #20 = Utf8               TestStatic.java
  #21 = NameAndType        #8:#9          // "<init>":()V
  #22 = Class              #31            // java/lang/System
  #23 = NameAndType        #32:#33        // out:Ljava/io/PrintStream;
  #24 = Utf8               cn/sichu/scala/chapter01/Emp
  #25 = Class              #34            // java/io/PrintStream
  #26 = NameAndType        #35:#36        // println:(I)V
  #27 = Class              #37            // cn/sichu/scala/chapter01/User
  #28 = NameAndType        #38:#39        // age:I
  #29 = Utf8               cn/sichu/scala/chapter01/TestStatic
  #30 = Utf8               java/lang/Object
  #31 = Utf8               java/lang/System
  #32 = Utf8               out
  #33 = Utf8               Ljava/io/PrintStream;
  #34 = Utf8               java/io/PrintStream
  #35 = Utf8               println
  #36 = Utf8             (I)V
  #37 = Utf8               cn/sichu/scala/chapter01/User
  #38 = Utf8               age
  #39 = Utf8               I
{
  public cn.sichu.scala.chapter01.TestStatic();
    descriptor:()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object."<init>":()V
         4: return
      LineNumberTable:
        line 7: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lcn/sichu/scala/chapter01/TestStatic;

  public static void main(java.lang.String[]);
    descriptor:([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=1, args_size=1
         0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
         3: bipush        30
         5: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
         8: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
        11: getstatic     #5                  // Field cn/sichu/scala/chapter01/User.age:I
        14: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
        17: return
      LineNumberTable:
        line 9: 0
        line 10: 8
        line 11: 17
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0      18     0  args   [Ljava/lang/String;
}
SourceFile: "TestStatic.java"
```

说明 java 编译做了优化, 不是因为 static 代码块一定会被执行, 而是 final 修饰了 AGE, 不需要访问 Emp 这个类里的静态代码块就能访问 `final static int AGE` 了, 就不需要多此一举访问了, 但是 User 类里是 `static int age`, 有可能在 static 代码块里发生改变, 所以要访问 static 代码块

对于 Scala Object, 可以在 Idea 里右键 Decompile Scala to Java 得到反编译文件

比如:

```scala
object Scala02_HelloWorld {
  def main(args: Array[String]): Unit = {
    // scala 基于 java 开发, 说明大部分java代码可以直接在scala方法体中使用, 且没有分号, 但可以用分号划分一行内多个逻辑
    System.out.println("Hello Scala World");
    System.out.println("Hello Scala World")
    println("Hello Scala")
  }
}
```

反编译结果:

```java
//decompiled from Scala02_HelloWorld$.class
package cn.sichu.scala.chapter01;

import scala.Predef.;

public final class Scala02_HelloWorld$ {
   public static Scala02_HelloWorld$ MODULE$;

   static {
      new Scala02_HelloWorld$();
   }

   public void main(final String[] args) {
      System.out.println("Hello Scala World");
      System.out.println("Hello Scala World");
      .MODULE$.println("Hello Scala");
   }

   private Scala02_HelloWorld$() {
      MODULE$ = this;
   }
}

        //decompiled from Scala02_HelloWorld.class
package cn.sichu.scala.chapter01;

import scala.reflect.ScalaSignature;

@ScalaSignature(
   bytes = "\u0006\u00019:Q\u0001B\u0003\t\u000291Q\u0001E\u0003\t\u0002EAQaF\u0001\u0005\u0002aAQ!G\u0001\u0005\u0002i\t!cU2bY\u0006\u0004$g\u0018%fY2|wk\u001c:mI*\u0011aaB\u0001\nG\"\f\u0007\u000f^3saER!\u0001C\u0005\u0002\u000bM\u001c\u0017\r\\1\u000b\u0005)Y\u0011!B:jG\",(\"\u0001\u0007\u0002\u0005\rt7\u0001\u0001\t\u0003\u001f\u0005i\u0011!\u0002\u0002\u0013'\u000e\fG.\u0019\u00193?\"+G\u000e\\8X_JdGm\u0005\u0002\u0002%A\u00111#F\u0007\u0002))\t\u0001\"\u0003\u0002\u0017)\t1\u0011I\\=SK\u001a\fa\u0001P5oSRtD#\u0001\b\u0002\t5\f\u0017N\u001c\u000b\u00037y\u0001\"a\u0005\u000f\n\u0005u!\"\u0001B+oSRDQaH\u0002A\u0002\u0001\nA!\u0019:hgB\u00191#I\u0012\n\u0005\t\"\"!B!se\u0006L\bC\u0001\u0013,\u001d\t)\u0013\u0006\u0005\u0002')5\tqE\u0003\u0002)\u001b\u00051AH]8pizJ!A\u000b\u000b\u0002\rA\u0013X\rZ3g\u0013\taSF\u0001\u0004TiJLgn\u001a\u0006\u0003UQ\u0001"
)
public final class Scala02_HelloWorld {
   public static void main(final String[] args) {
      Scala02_HelloWorld$.MODULE$.main(var0);
   }
}
```

也就是 scala 默认在编译的时候, 给 `println()` 在前面加上了 `System.out.`

# Variable

scala 中变量声明:

`var 变量名 : 变量的类型 = 变量的值`

`val 变量名 : 变量的类型 = 变量的值`, val 相当于 final, 不能重新赋值

Scala 里变量的类型可以省略, 编译器会自动推断变量类型, 但是 `Object` 类型这种要手写, 也就是使用多态要手写变量类型

Scala 中声明变量一定要初始化

Java 里字符串是不可变的, 因为是 `private final char value[];`

```java
        String s = " a b ";
        System.out.println(":" + s.trim() + "!");
        s.trim();
        System.out.println(":" + s + "!");
        s = s.trim();
        System.out.println(":" + s + "!");
```

# String

1. 字符串拼接
2. 传值字符串
3. 插值字符串
4. 多行字符串

```scala
  def main(args: Array[String]): Unit = {
    val name = "zhangsan"
    val password = "123456"
    println("Hello " + name)
    val json = "{\"username\": \"" + name + "\", \"password\":\"" + password + "\"}"
    println(json)

    // 传值字符串(太麻烦, 不推荐)
    printf("username: %s", name + "\t")
    printf("username: %s", password + "\n")

    // 插值字符串
    println(s"username: $name")
    // scala 官方无法使用插值字符串封装JSON
    //    val json1 = s"{\"username\":\"${name}\", \"password\":\"${password}\"}"
    //    println(json1)

    // 多行字符串
    // 竖线表示顶格符
    val s =
    s"""
       |Hello
       | Scala
      WTF1
       |test
      WTF2
       |""".stripMargin
    println(s)

    val json1 =
      """
        |{"username": "${name}", "password":"${password}"}
        |""".stripMargin
    println(json1)

    val sql =
      """
        |select id
        |from
        |(
        |   select * from t_user
        |   where id = 1
        |   order by id desc
        |) a
        |group by id
        |""".stripMargin
    println(sql)
  }
```

# IO

maven module 的根目录是 project!

Scala IO 用的就是 Java IO

```scala
  def main(args: Array[String]): Unit = {
    // read line
    //    val line = StdIn.readLine()
    //    println(line)

    // 从文件输入
    val source = Source.fromFile("202309-scala-learning-demo/data/word.txt")
    val strs = source.getLines()
    while(strs.hasNext) {
      println(strs.next())
    }
    source.close()
  }

  def main(args: Array[String]): Unit = {
    val writer = new PrintWriter(new File("202309-scala-learning-demo/data/output.txt"))
    writer.write("hello world")
    writer.close()
  }
```

# Distributed computing

## 原理

分布式计算基本架构: 主从

分布式计算一定要切分数据

分布式计算中计算不能固定

Scala 进行网络数据交互时，采用的也依然是 java 中的 I/O 类

在网络中想要传递对象，这个对象需要序列化

# Data Type

类型用于约束外部的数据

泛型用于约束内部的数据

-   Java 数据类型

    Java 的数据类型包含基本类型和引用类型

    基本类型：byte,short,char,int,long,float,double,boolean

    引用类型：Object，数组，字符串，包装类，集合，POJO 对象等

-   Scala 数据类型

    Scala 是完全面向对象的语言，所以不存在基本数据类型的概念，有的只是任意值对象类型(AnyVal)和任意引用对象类型(AnyRef)

Scala 中 Any 类型是最通用的

Nothing 相当于 Exception, 目的是一个方法只有一个出口(java 里相当于两个出口, 一个正常返回, 一个异常返回), Nothing 是所有类型的子类型, 可以用任意类型代替

implicit conversion:

```scala
  def main(args: Array[String]): Unit = {
    // scala编译器将类型进行了隐式转换, 所以可以编译通过
    val b: Byte = 20
    val i: Int = b
    println(i)
  }
```

java 不会报错, scala 会报错(但是能运行):

```java
        char ch = 'A' + 1;
        System.out.println(ch);
```

```scala
    // idea 会报错, 但是能够通过编译
    val ch: Char = 'A' + 1
    println(ch)
```

因为编译原理是, 常量计算在编译结果前完成, 但是变量计算在编译后完成

# Operator

Scala 运算符跟 Java 基本一样

scala 中 `==` 就是比较两个对象的内容, 相当于 java 中的非空的 equals

scala 中 `equals` 来自 java

scala 中 `eq` 为比较内存地址

因为 Decompile 后:

```scala
    // scala 中双等号相当于非空的equals, eq为比较内存地址
    val s1 = new String("abc")
    val s2 = new String("abc")
    println(s1 == s2)
    println(s1.equals(s2))
    println(s1.eq(s2))
```

```java
       var10000;
      boolean var10001;
      String s1;
      String s2;
      label22: {
         label21: {
            s1 = new String("abc");
            s2 = new String("abc");
            var10000 = .MODULE$;
            if(s1 == null) {
               if(s2 == null) {
                  break label21;
               }
            } else if(s1.equals(s2)) {
               break label21;
            }

            var10001 = false;
            break label22;
         }

         var10001 = true;
      }
```

scala 中运算符是可以自己修改的

scala 中没有 `++`, `--`, 用 `+=`, `-=` 代替

# Flow

## if else

scala 中没有 lambda 三元运算符, 用 ifelse 判断

## for loop

JDK1.5

```java
for(list : Object obj) {
  ...
}
```

Scala:

```java
    for(i: Int <- 1 to 5) {
      println(i)
    }
```

Scala 中调用 Java 线程 yield 方法:

```scala
Thread.`yield`()
```

原因是, scala for loop 里本来就有个 yield 方法了:

```scala
    val result1 = for(i <- 1 to 5) {
      i
    }
    val result2 = for(i <- 1 to 5) yield {
      i * 2
    }
    println(result1)
    println(result2)
```

## while

```java
    public static void main(String[] args) {
        // java.lang.NullPointerException
        List<Object> list = null;
        for(Object obj : list) {
            System.out.println(obj);
        }
    }
```

会空指针是因为 `public interface List<E> extends Collection<E>`, 而 Collection `public interface Collection<E> extends Iterable<E>`, 而 Iterable 接口里有个 iterator 实现是 `@NotNull` 的:

```java
    /**
     * Returns an iterator over elements of type {@code T}.
     *
     * @return an Iterator.
     */
    Iterator<T> iterator();
```

iterator 接口里有个 `boolean hasNext();`

```java
    /**
     * Performs the given action for each remaining element until all elements
     * have been processed or the action throws an exception.  Actions are
     * performed in the order of iteration, if that order is specified.
     * Exceptions thrown by the action are relayed to the caller.
     *
     * @implSpec
     * <p>The default implementation behaves as if:
     * <pre>{@code
     *     while(hasNext())
     *         action.accept(next());
     * }</pre>
     *
     * @param action The action to be performed for each element
     * @throws NullPointerException if the specified action is null
     * @since 1.8
     */
    default void forEachRemaining(Consumer<? super E> action) {
        Objects.requireNonNull(action);
        while(hasNext())
            action.accept(next());
    }
```

## break

scala 没有 `continue` 关键词, 因为可以用 if 代替

scala 没有 `break` 关键词, 因为不想用关键词而想用面向对象的方式来改变逻辑, 但是 scala 是通过抛出异常的方式实现跳出循环的, 得嵌套在 Breaks.breakable 里才能实现普通的 break:

```scala
    Breaks.breakable {
      for(i <- 100 to 105) {
        if(i == 103) {
          Breaks.break()
        }
        println(i)
      }
    }
    println("other")
```

或者通过静态导入:

```scala
    breakable {
      for(i <- 100 to 105) {
        if(i == 103) {
          Breaks.break()
        }
        println(i)
      }
    }
    println("other")
```

break 底层: `def break(): Nothing = { throw breakException }`

目的是通过抛异常实现逻辑, SpringBoot 底层也是大量通过抛异常捕获堆栈信息来实现逻辑

# Functional programming

Scala 把函数式编程和面向对象编程整合在一起了

-   面向对象编程

    分解对象，行为，属性，然后通过对象的关系以及行为的调用来解决问题

-   函数式编程

    将问题分解成一个一个的步骤，将每个步骤进行封装(函数)，通过调用这些封装好的功能按照指定的步骤，解决问题

## 可变参数

```java
    public static String func1(String s1, String... s2) {
        StringBuilder sb = new StringBuilder();
        for(String s : s2) {
            sb.append(s);
        }
        return s1 + sb;
    }
```

```scala

```

> Note: 可变参数一定要放在参数列表的最后, 否则报错
