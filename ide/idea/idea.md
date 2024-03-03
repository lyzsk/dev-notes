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

## Plugins

### VSCode Theme

Settings -> Appearance:

-   Theme: VSCode Dark

### Save Actions

Settings -> Other Settings -> Save Actions:

-   General:

    -   勾选 activate save actions on save
    -   勾选 Activate save actions on batch

-   Formatting Actions:

    -   勾选 Optimize imports
    -   勾选 Reformat file
    -   勾选 Rearrange fields and methods

-   Java Inspection and Quick Fix:

    -   勾选 Add missing @Override annotations
    -   勾选 Add blocks to if/while/for statements

### Maven Helper

无配置

### Nyan Progress Bar

无配置

### MyBatisX

无配置

### Lombok (Optional)

Settings -> Build, Excecution, Deployment -> Compiler -> Annotation processors:

-   勾选 enable annotation processing

### Scala

无配置

### ZooKeeper

无配置

### JPA Buddy

无配置

### 手动安装插件

手动从 https://plugins.jetbrains.com/ 下载, 在 Plugins 里手动安装插件

## Maven

### maven settings

Settings -> Build, Execution, Deployment -> Build Tools -> Maven -> Importing:

-   勾选 Create module groups for multi-module Maven projects

### mirror

maven 镜像: `maven安装目录/conf/settings.xml`:

```xml
	<mirror>
	  <id>aliyunmaven</id>
	  <mirrorOf>*</mirrorOf>
	  <name>aliyun maven</name>
	  <url>https://maven.aliyun.com/repository/public</url>
	</mirror>
```

### 手动更改 Maven 配置

Settings -> Build, Execution, Deployment -> Build Tools -> Maven:

-   手动修改 Maven home path, 勾选 User settings file 的 Override, 设置为 "`目标Maven路径`/apache-maven-3.8.2/conf/settings.xml"

## Code Style

### 更改 scheme

Settings -> Editor -> Code Style:

-   Scheme -> Import Scheme -> IntelliJ IDEA code style XML: P3C-CodeStyle

Settings -> Editor -> Code Style -> Java:

-   Code Generation -> 取消勾选 Line comment at first column, 勾选 Add a space at line comment start
-   Wrapping and Braces -> Method annotations, class annotations, field annotations -> 改成 Wrap always

### 更改自动换行长度 (每个项目都要重新配置一次)

Settings -> Editor -> Code style:

-   Hard wrap at: 80, 并勾选 Wrap on typing

### 关闭自动换行

经常没加分号换地方复制粘贴的时候会自动换行很烦, 所以把自动换行关了!

Settings -> Editor -> Code Style -> Java:

-   Wrapping and Braces -> Wrap on Typing 改成 NO

### 类上加注释模板

Settings -> Editor -> File and Code Templates:

-   Files -> class, interface, enum, record, annotation, 在 public xxx ${NAME} 上面一行, 添加注释模板:

```java
/**
*
* @author sichu huang
* @date ${YEAR}/${MONTH}/${DAY}
**/
```

### 方法上加注释模板

Settings -> Editor -> Live Templates:

1. 右上角 `+` Create New Template Group: `JavaMethod`
2. 在 `JavaMethod` 右上角 `+` 新建一个 Template, Abbreviation: `*`
3. 左下角 define 里勾选 `Java`
4. 填写 Template text:

    ```
    *
     *
     * @author $user$
     * @param $param$
     * @date $date$
     * @return $return$
     **/
    ```

5. 右侧 Expand with: 选择 Enter, 勾选 Reformat according to style, 取消勾选 Shorten FQ names
6. 右侧 `Edit Variables...`:
    - user - Default value: `"sichu huang"`
    - param - Default value: `groovyScript("if(\"${_1}\".length() == 2) {return '';} else {def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();for(i = 0; i < params.size(); i++) {result+='\\n' + ' * @param ' + params[i] + ' '}; return result;}", methodParameters());`
    - date - Default value: `date("yyyy/MM/dd")`
    - return - Default value: `methodReturnType()`

@see： https://blog.csdn.net/weixin_44519874/article/details/112259616

### 允许小写也能自动补全 pakage, class

Settings -> Editor -> General -> Code Completion:

-   取消勾选 Match case

### Tabs

Settings -> Editor -> General -> Editor Tabs:

-   Appearance -> 取消勾选 Show tabs in one row
-   Closing Policy -> Tab limit: 30

### 关闭单词拼写检查 (每个项目都要重新配置一次)

Settings -> Editor -> Inspections:

-   取消勾选 Proofreading - typo

### 序列化版本号

Settings -> Editor -> Inspections -> JVM languages

-   勾选 Serializable class without 'serialVersionUID'

### 设置自动编译

Settings -> Build, Execution, Deployment -> Compiler:

-   勾选 Build project automatically

### Debugger 配置

Settings -> Build, Execution, Deployment -> Debugger:

-   Java -> Transport: 从 Socket 改选成 Shared memory

### 不显示 class/method unused warning (Optional)

Settings -> Editor -> Inspections -> Java -> Declaration redundancy:

-   取消勾选 Unused declaration

### 重复变量 warning (Optional)

Settings -> Editor -> Inspections -> Java -> Data flow:

-   取消勾选 Redundant local variable

### 设置项目最高支持的 java 版本 (Optional)

File -> Project Structure -> Project Settings -> Project -> Project language level -> 8!

## IDEA config import/export

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

`shift + f9`: debug

`ctrl + h`: 查看 hierachy

`alt + 7`: 查看 structure

`ctrl + d`: 复制行

`ctrl + p`: 提示填充内容

`alt + f7`: 查看类的使用

`ctrl + f12`: 等同于 eclipse 的 `ctl + o`, 查看 class 里的 methods

`ctrl + end`, `ctrl + ↓`: 光标位置开始全选到下一行行头

`alt + j`: 等同于 vscode 的 `ctrl + d`, 向下搜索+选择相同值

# IDEA quick-code

`sout`: `system.out.println()`

`var`: 自动填充 new 的对象的类型, etc.

`serr`: `system.err.println()`
