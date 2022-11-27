<p align="center">
    <img src="https://img.shields.io/badge/-Java-3C415C?style=plastic&logo=openjdk&logoColor=FFFFFF" />
    <img src="https://img.shields.io/badge/-Eclipse-3C415C?style=plastic&logo=eclipse&logoColor=FFFFFF" />
    <img src="https://img.shields.io/badge/-IntellijIDEA-3C415C?style=plastic&logo=intellijidea&logoColor=FFFFFF" />
    <img src="https://img.shields.io/badge/-Spring-3C415C?style=plastic&logo=spring&logoColor=6DB33F" />
    <img src="https://img.shields.io/badge/-SpringBoot-3C415C?style=plastic&logo=springboot&logoColor=6DB33F" />
    <img src="https://img.shields.io/badge/-SpringSecurity-3C415C?style=plastic&logo=springsecurity&logoColor=6DB33F" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/-Python-3C415C?style=plastic&logo=python&logoColor=3776AB">
    <img src="https://img.shields.io/badge/-Pycharm-3C415C?style=plastic&logo=pycharm&logoColor=FFFFFF">
    <img src="https://img.shields.io/badge/-Jupyter-3C415C?style=plastic&logo=jupyter&logoColor=F37626">
    <img src="https://img.shields.io/badge/-PyTorch-3C415C?style=plastic&logo=pytorch&logoColor=EE4C2C">
    <img src="https://img.shields.io/badge/-TensorFlow-3C415C?style=plastic&logo=tensorflow&logoColor=FF6F00">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/-HTML-3C415C?style=plastic&logo=html5&logoColor=E34F26">
    <img src="https://img.shields.io/badge/-CSS-3C415C?style=plastic&logo=css3&logoColor=1572B6">
    <img src="https://img.shields.io/badge/-JavaScript-3C415C?style=plastic&logo=javascript&logoColor=F7DF1E">
    <img src="https://img.shields.io/badge/-VSCode-3C415C?style=plastic&logo=visualstudiocode&logoColor=007ACC">
    <img src="https://img.shields.io/badge/-React-3C415C?style=plastic&logo=react&logoColor=61DAFB">
</p>

<p align="center">
    <a href="#git">
        <img src="https://img.shields.io/badge/-Git-3C415C?style=plastic&logo=git&logoColor=F05032" />
    </a>
    <a href="#windows">
        <img src="https://img.shields.io/badge/-Windows-3C415C?style=plastic&logo=windows&logoColor=0078D6" />
    </a>
</p>

# 2022 dev notes

-   [Java](./Java/2022-java-notes.md) :hammer:

-   [Python](./Python/2022-python-notes.md) :hammer:

-   [HTML](./HTML-CSS-JavaScript/2022-html-css-js-notes.md) :hammer:

-   [CSS](./HTML-CSS-JavaScript/2022-html-css-js-notes.md) :hammer:

-   [JavaScript](./HTML-CSS-JavaScript/2022-html-css-js-notes.md) :hammer:

-   [Git](#git) :hammer:

-   [Windows](#windows) :hammer:

# Git

本地结构:

工作区 -> `git add` -> 暂存区 -> `git commit` -> 本地仓库

---

`git status` 查看状态, 防止忘记是否有文件 `add` 了但是没有 `commit`

---

`git log` 自动分页的时候快捷键:

`space` 下一页

`b` 上一页

`end q` 退出

`git log --oneline` 单行查看

`git reflog` 更高级, 可以看 head, 也方便 `git reset --hard [commit索引的hash]` 的操作, 需要 CV 的部分少一些

---

`git reset --hard [索引]` \[工作区, 暂存区, 本地库\] 同时移动

`git reset --mixed [索引]` \[工作区\] 不移动; \[暂存区, 本地库\] 同时移动

`git reset --soft [索引]` \[工作区, 暂存区\] 不移动; \[本地库\] 单独移动

实际上用的最多的还是 `git reset --hard [index]`

---

`rm` 删除 \[工作区\] 内文件后, `commit` 到 \[本地库\], 本质上就是将历史版本回退到添加文件前的一个版本

---

`git diff [file_name]` 查看版本区别

可以发现, git 实际上是按 \[行\] 进行管理的, `-`原内容, 再`+`原内容和新内容

---

`git branch -v` 分支版本查询

`git branch [branch_name]` 创建分支

`git checkout [branch_name]` 切换分支

> 分支合并冲突的例子:
>
> BUG:
>
> &nbsp;&nbsp;&nbsp;&nbsp;\[master\] 分支 `commit` 内容: "添加内容 by master"
>
> &nbsp;&nbsp;&nbsp;&nbsp;\[branch01\] 分支 `commit` 内容: "添加内容 by branch01"
>
> &nbsp;&nbsp;&nbsp;&nbsp;如果此时 `git checkout master` 切换到 \[master\] 分支后, `git merge branch01` 会报错: `merge conflict`
>
> 解决: 手动 modify 更改源文件后，用`commit`解决，最终得到整合的 `master` 分支
>
> 注意点: 此时 commit 的时候 不可以使用 `git commit -m "comments" [文件名]` 的方法,
> 应该使用 `git commit -m "comments"` 不加文件名的方法

---

`git remote -V` 查看远程库的 \[别名\]

`git remote add [别名] [远程库的HTTPS链接]` 添加远程库别名

`git push [别名] [分支]` 推送本地的 commit 内容, 一般别名取 \[origin\] 比较好记, 如果忘了别名, 就 `git remote -V` 查一下

关于 为什么第二次 push 可以直接 push 不需要验证，因为是在同一台电脑上, 查看 Credential Manager 可以查看到 github 的凭据

---

`pull` 相当于 `fetch` + `merge`

`fetch` 仅仅只是 \[只读\] 操作, 所以不会对本地仓库有任何修改

`git fetch [别名] [分支]`

`git checkout -b [本地分支] [别名]/[远程分支名]` 检查远程分支

`fetch` 后再 `merge`

`merge` 前要记得用 `git checkout [本地分支名]` 把分支切换回想要 merge 的分支, 然后再使用 `git merge [别名]/[分支名]` 进行 `merge` 操作

---

平常我自己用的最多的都是`git add -A` 然后 `git commit -a -m "comments"`, 但还有其他的 `add` `commit` 方法:

`git add -u` \[只加入 modify 文件, deleted 文件\]; \[不包括 new 出来的新文件\]

`git add .` \[加入 new 文件, modified 文件\]; \[不包括 deleted 文件\]

---

个人仓库, 暴力删远程库的 commits 的办法:

方法一: 用转移分支法

Step 1:

利用 `--orphan` 基于当前分支创建一个独立的分支

```
git checkout --orphan new_branch
```

Step 2:

添加所有文件进本地暂存区, 并 commit

```
git add -A
git commit -a -m "init commit"
```

或者 先把需要的文件转移, 然后

```
git rm -rf .
```

然后把需要的文件放回来, 然后

```
git add -A
git commit -a -m "init commit"
```

Step 3:

`--delete` \/ `-D` 删除 master 分支, 重命名当前分支为 master

```
git branch -D master
git branch -m master
```

Step 4:

`--force` \/ `-f` 强制推送远程仓库

```
git push -f origin master
```

方法二: 删 `.git` 法, 同样也使用这个处理 `.git` 太大问题:

```
rm -rf .git
git init
git add -A
git commit -a -m "init commit"
git remote add origin [github_repo_url]
git push -f -u origin master
```

---

`.gitignore` 不生效的问题:

删 cache !!!

```
git rm -rf --cached .
git add .
git commit -a -m ".gitignore is now working"
git push origin master
```

---

`.gitignore` 需要删除之前提交的文件, 比如 `.idea`, `.iml`

```
git rm --cached **/*.iml
git rm --cached -r .idea
git rm --cached -r **/.idea
```

# Windows

Windows 环境下生成项目结构树 tree:

```console
<!-- 查看项目tree -->
tree /F

<!-- 保存tree到txt -->
tree /f > tree.txt
```

然后用 MS Word 打开 tree.txt, 选择 Text encoding -> MS-DOS
