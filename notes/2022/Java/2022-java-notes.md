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

| [Java](#java) | [Spring](#spring) | [SpringMVC](#springmvc) | [SpringBoot](#springboot) | [IDE](#ide) | [Bugs](#bugs) |

# Java

| [Java14](#java14) | [Comparable vs Comparator](#comparable-vs-comparator) | [PriorityQueue](#priorityqueue) | [使用 Arras.fill() 替换两次遍历](#使用-arrasfill-替换两次遍历) | [add() vs offer()](#add-vs-offer) | [双指针](#双指针) | [回溯-vs-dfs](#回溯-vs-dfs) | [Integer compile](#integer-compile)

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

## 使用 Arras.fill() 替换两次遍历

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

## 双指针

指针问题, 需要先排序`(Ologn)`!, 然后再双指针 `O(n)`

---

## 回溯 vs dfs

-   dfs 本质无序, 访问次序不重要

    回溯 本质有序, 必须有一步符合次序

-   dfs 不再访问已访问过的节点, 每个节点访问一次

    回溯 可以访问已访问过的节点, 也可能存在未访问过的节点

-   回溯 算法复杂度, 由递归节点个数决定

---

## `Integer` compile

`Integer x = 123`在编译的时候会变成: `Integer x = Integer.valueOf(123);`

如果该属性所对应的数据库的字段是主键或者是外键时，用 Integer

---

# Spring

[IOC 分析](#ioc-思想分析) | [DI 分析](#di-分析)

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

## IOC 思想分析:

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

## DI 分析

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

bean 的别名, 就是定义多个 `name` 属性, 中间用 `空格`, `逗号`, `分号` 分隔

# SpringMVC

# SpringBoot

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

[配置](#idea-配置) | [快捷键](#idea-快捷键)

查看 IDEA 版本: Help -> About

---

## IDEA 配置:

1.  Plugins 安装 VSCode Theme

    Settings -> Appearance -> Theme -> VSCode Dark

2.  Settings -> Editor -> Code Style -> Scheme -> Import Scheme -> Eclipse XML Profile

    Settings -> Editor -> Code Style -> Code Generation -> 取消勾选 Line comment at first column, 勾选 Add a space at line comment start

    Settings -> Editor -> Code Style -> Wrapping and Braces -> Method annotations -> 改成 Wrap always

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

---

IDEA 快速配置(但是要检查很多东西, 不太好用):

1. 导出: File -> Manage IDE Settings -> Export Settings
2. 导入: File -> Manage IDE Settings -> Import Settings

需要检查并重新配置:

1. Settings -> Editor -> Inspections 里的所有配置
2. SaveActions 插件

---

## IDEA 快捷键

`ctrl + f4`: 关闭窗口

`ctrl + shift + f`: 全局搜索

`alt + shift + 鼠标选中`: 多选

`shift + f6 + 鼠标选中`: 多选

`alt + Enter`: 引入类

`ctrl + alt + B`: 快速实现接口

`ctrl + o`: 查看继承的类 或者 接口中的方法, 以及要实现的方法

`alt + shift + insert`: getter setter

# Bugs

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

```xml
    <description>the back-end project for SubleChat application</description>
    <packaging>pom</packaging>
```
