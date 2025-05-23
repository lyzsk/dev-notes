# Git

安装并连接 Github

> 注意在 user 目录下用 git 创建 .ssh 文件夹

```bash
git conifg --global user.name "your name"
git config --global user.email "your email"

ssh-keygen -t rsa -C “your_email@example.com”
```

然后在 Github 配置 pub SSH(id_rsa.pub)

```bash
ssh -T git@github.com
```

测试通过即成功

# local structure

本地结构:

工作区 -> `git add` -> 暂存区 -> `git commit` -> 本地仓库

# git status

`git status` 查看状态, 防止忘记是否有文件 `add` 了但是没有 `commit`

# git log

`git log` 自动分页的时候快捷键:

`space` 下一页

`b` 上一页

`end q` 退出

`git log --oneline` 单行查看

`git reflog` 更高级, 可以看 head, 也方便 `git reset --hard [commit索引的hash]` 的操作, 需要 CV 的部分少一些

# git reset

`git reset --hard [索引]` \[工作区, 暂存区, 本地库\] 同时移动

`git reset --mixed [索引]` \[工作区\] 不移动; \[暂存区, 本地库\] 同时移动

`git reset --soft [索引]` \[工作区, 暂存区\] 不移动; \[本地库\] 单独移动

实际上用的最多的还是 `git reset --hard [index]`

# rm

`rm` 删除 \[工作区\] 内文件后, `commit` 到 \[本地库\], 本质上就是将历史版本回退到添加文件前的一个版本

# git diff

`git diff [file_name]` 查看版本区别

可以发现, git 实际上是按 \[行\] 进行管理的, `-`原内容, 再`+`原内容和新内容

# git branch

`git branch -v` 分支版本查询

`git branch [branch_name]` 创建分支

`git checkout [branch_name]` 切换分支

`git branch -d local_branch_name` 删除分支

`git branch -a` 分支查询

更改本地和远程分支名(如果是要删除远程 default 分支要先把 default 分支更改):

```
git checkout [old_name]
git branch -m [new_name]
git push origin -u [new_name]
git push origin --delete [old_name]
```

# git merge

merge 分支内容

1. `git checkout [branch_name]`
2. `git pull`
3. `git checkout master`
4. `git merge [branch_name]`
5. `git add -A`
6. `git commit -a -m "xxx"`
7. `git push origin master`

# git remote && push with alias

`git remote -V` 查看远程库的 \[别名\]

`git remote add [别名] [远程库的HTTPS链接]` 添加远程库别名

`git push [别名] [分支]` 推送本地的 commit 内容, 一般别名取 \[origin\] 比较好记, 如果忘了别名, 就 `git remote -V` 查一下

关于 为什么第二次 push 可以直接 push 不需要验证，因为是在同一台电脑上, 查看 Credential Manager 可以查看到 github 的凭据

# git fetch && merge && pull

`pull` 相当于 `fetch` + `merge`

`fetch` 仅仅只是 \[只读\] 操作, 所以不会对本地仓库有任何修改

`git fetch [别名] [分支]`

`git checkout -b [本地分支] [别名]/[远程分支名]` 检查远程分支

`fetch` 后再 `merge`

`merge` 前要记得用 `git checkout [本地分支名]` 把分支切换回想要 merge 的分支, 然后再使用 `git merge [别名]/[分支名]` 进行 `merge` 操作

# git add

平常我自己用的最多的都是`git add -A` 然后 `git commit -a -m "comments"`, 但还有其他的 `add` `commit` 方法:

`git add -u` \[只加入 modify 文件, deleted 文件\]; \[不包括 new 出来的新文件\]

`git add .` \[加入 new 文件, modified 文件\]; \[不包括 deleted 文件\]

个人仓库, 暴力删远程库的 commits 的办法:

## 方法一: 用转移分支法

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

## 方法二: 删 `.git` 法, 同样也使用这个处理 `.git` 太大问题:

```
rm -rf .git
git init
git add -A
git commit -a -m "init commit"
git remote add origin [github_repo_url]
git push -f -u origin master
```

# git commit -a -m 更改

`git commit --ammend -m "new message"`

# git lfs

https://git-lfs.com/
