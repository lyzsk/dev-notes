# Intellij idea

Eclipse vs IDEA

Eclipse 中的 workspace 相当于 IDEA 中的 Project

Eclipse 中的 Project 相当于 IDEA 中的 Module

而实际开发中，因为主流是 分布式部署，结构就是 一个主项目下分多模块，然后模块间相互依赖，所以 IDEA 比较主流

IDEA 中跑一次项目后，`out` 目录放的是编译后的 `.class` 文件

IDEA 中在 IDE 里，先 remove module,再 delete module,因为模块防误删，第一次 remove 的时候不会删本地的

IDEA 全局搜索: `ctrl + shift + r`

Eclipse 全局搜索: `ctrl + h`

# content

| [配置](#idea-config) | [快捷键](#idea-shortcuts) | [简写](#idea-quick-code) |

查看 IDEA 版本: Help -> About

# IDEA config

1. Plugins 安装 VSCode Theme

    Settings -> Appearance -> Theme -> VSCode Dark

2. Settings -> Editor -> Code Style -> Scheme -> Import Scheme -> IntelliJ IDEA code style XML

    // Settings -> Editor -> Code Style -> Code Generation -> 取消勾选 Line comment at first column, 勾选 Add a space at line comment start

    // Settings -> Editor -> Code Style -> Wrapping and Braces -> Method annotations 和 class annotations 和 field annotations -> 改成 Wrap always

    至于 code template, IDEA 没有直接导入 xml 的功能

    可以通过创建文件夹时自动填充来实现:

    Settings -> Editor -> File and Code Templates -> Files 里的 class, interface, enum, record, annotation, 在 public xxx ${NAME} 上面一行, 添加注释模板:

    ```java
    /**
    *
    *@author sichu
    *@date ${YEAR}/${MONTH}/${DAY}
    **/
    ```

    至于在方法上添加注释的 template，暂时 IDEA 自带的 live template 好像够用了？

    万一哪天要改可以参考： https://blog.csdn.net/weixin_44519874/article/details/112259616

3. Plugins 安装 Alibaba Java Coding Guidelines

4. Plugins 安装 Save Actions

    Settings -> Save Actions ->

    勾选 activate save actions on save

    勾选 Optimize imports

    勾选 Reformat file

    勾选 Rearrange fields and methods

    勾选 Add missing @Override annotations

    勾选 Add blocks to if/while/for statements

5. 像 Eclipse 一样允许小写也能自动补全 pakage, class:

    Settings -> Editor -> General -> Code Completion -> 取消勾选 Match case

6. 关闭单词拼写检查:

    Settings -> Editor -> Inspections -> 取消勾选 Proofreading-typo

7. Settings -> Editor -> General -> Editor Tabs -> Appearance -> 取消勾选 Show tabs in one row

    Settings -> Editor -> General -> Editor Tabs -> Closing Policy -> Tab limit: 30

8. 设置自动编译:

    Settings -> Build, Execution, Deployment -> Compiler -> 勾选 Build project automatically

9. 序列化版本号:

    Settings -> Editor -> Inspections -> JVM languages -> 勾选 Serializable class without 'serialVersionUID'

10. 不显示 class/method unused 黄色 warning:

    Settings -> Editor -> Inspections -> Java -> Declaration redundancy -> 取消勾选 Unused declaration

11. Settings -> Editor -> Inspections -> Java -> Data flow -> 取消勾选 Redundant local variable

12. Settings -> Build, Execution, Deployment -> Debugger -> Java -> Transport: 从默认的 Socket 改成 Shared memory

13. // Settings -> Build, Execution, Deployment -> Build Tools -> Maven -> 手动修改 Maven home path, 勾选 User settings file 的 Override, 设置为 "Maven/apache-maven-3.8.2/conf/settings.xml"

14. 安装插件 Spring Boot Assistant

15. 手动从 https://plugins.jetbrains.com/plugin/18622-spring-boot-helper/versions 下载 Spring Boot Helper, 在 Plugins 里手动安装插件

16. 安装插件 Maven Helper

17. File -> Project Structure -> Project Settings -> Project -> Project language level -> 8!

18. 安装插件 MyBatisX

19. 安装插件 Lombok

    setting -> build,excecution,deployment -> compiler -> annotation processors -> 勾选 enable annotation processing

20. 安装插件 JPA Buddy

21. 更改自动换行长度: Setting -> Editor -> Code style -> Hard wrap at: 80, 并勾选 Wrap on typing

22. 关闭 ali-check 实时监测, 感觉有点卡, Settings -> Editor -> Inspections -> ali-check -> Serverity 改成 BLOCKER, 以后想要检查的时候右键手动扫描

23. 经常没加分号换地方复制粘贴的时候会自动换行很烦, 所以把自动换行关了! Settings -> Editor -> Code Style -> Java -> Wrapping and Braces -> Wrap on Typing 改成 NO

24. 安装插件 Scala

<!-- 25. Editor -> General -> Appearance, 勾选 Render documentation comments -->

25. 安装插件 Nyan Progress Bar

---

IDEA 快速配置(但是要检查很多东西, 不太好用):

1. 导出: File -> Manage IDE Settings -> Export Settings
2. 导入: File -> Manage IDE Settings -> Import Settings

需要检查并重新配置:

1. Settings -> Editor -> Inspections 里的所有配置
2. SaveActions 插件

# IDEA shortcuts

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

`alt + 7`: 查看 structure

`ctrl + d`: 复制行

`ctrl + p`: 提示填充内容

`alt + f7`: 查看类的使用

`ctrl + f12`: 等同于 eclipse 的 `ctl + o`, 查看 class 里的 methods

# IDEA quick-code

`sout`: system.out.println()

`var`: 自动填充 new 的对象的类型, etc.

`serr`: system.err.println()

# Bugs

## Debug mode don't auto clean compile

项目更名后, 用 Debug 模式启动 SpringBoot 项目, 并不会重新 compile 一次, 原因未知... 反正情况就是改了一部分 Redis 代码后, 不更新数据了...一直停留在原来缓存的数据...

Fix:

工具栏 Maven -> clean -> compile

或者手动:

```
mvn clean
mvn compile
```

## pom.xml is ignored as grey

解决: File -> Settings -> Maven -> Ignored Files -> 取消勾选对应模块名
