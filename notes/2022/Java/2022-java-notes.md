[![java](https://img.shields.io/badge/-Java-3C415C?style=plastic&logo=intellijidea)](#java)

# 2022-Java-notes

| [Java](#java) | [IDE](#ide) | [Bugs](#bugs) |

# Java

# IDE

Eclipse vs IDEA

Eclipse 中的 workspace 相当于 IDEA 中的 Project

Eclipse 中的 Project 相当于 IDEA 中的 Module

而实际开发中，因为主流是 分布式部署，结构就是 一个主项目下分多模块，然后模块间相互依赖，所以 IDEA 比较主流

IDEA 中跑一次项目后，`out` 目录放的是编译后的 `.class` 文件

IDEA 中在 IDE 里，先 remove module,再 delete module,因为模块防误删，第一次 remove 的时候不会删本地的

IDEA 全局搜索: `ctrl + shift + r`

Eclipse 全局搜索: `ctrl + h`

---

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

---

IDEA 配置:

1.  Plugins 安装 VSCode Theme

    Settings -> Appearance -> Theme -> VSCode Dark

2.  Settings -> Editor -> Code Style -> Scheme -> Import Scheme -> Eclipse XML Profile

    至于 code template, IDEA 没有直接导入 xml 的功能

    可以通过创建文件夹时自动填充来实现:

    Settings -> Editor -> File and Code Templates -> files-class, 在 class 上面一行, 添加注释模板:

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

---

IDEA 快速配置(但是要检查很多东西, 不太好用):

1. 导出: File -> Manage IDE Settings -> Export Settings
2. 导入: File -> Manage IDE Settings -> Import Settings

需要检查并重新配置:

1. Settings -> Editor -> Inspections 里的所有配置
2. SaveActions 插件

# Bugs
