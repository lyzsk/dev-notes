# eclipse

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
    /*(non-Javadoc)
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
