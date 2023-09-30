# Linux

| [install in vm](#install-linux-in-vm) | [commands](#commands) | [install software](#install-softwares-in-linux) |

# install Linux in VM

## VMware Workstation player

https://www.vmware.com/products/workstation-player.html

ctrl + alt: 显示鼠标光标

## CentOS

CentOS-7-x86_64-DVD-1810.iso

http://ftp.iij.ad.jp/pub/linux/centos-vault/7.6.1810/isos/x86_64/

安装:

VMware -> 稍后安装操作系统 -> Linux, CentOS7 Location: C:\Users\sichu\Documents\Virtual Machines\CentOS 7 64-bit -> Customize Hardware: C:/dev/vm/CentOS7 -> 最大磁盘大小 20G -> 自定义硬件 内存 2G， 处理器 2, CD/DVD 使用 ISO 镜像 -> Software Selection: 最小安装 -> 设置 root 密码: root

## ip addr

```
ip addr
```

ens33 没有显示 ip, 由于启动服务器时未加载网卡, 导致 ip 地址初始化失败

解决:

```
cd /
cd etc
cd sysconfig
cd network-scripts
vi ifcfg-ens33

i
ONBOOT=yes
:wq
```

然后 restart

## finalshell

SSH (Secure Shell), 建立在应用层基础上的安全协议, 通过 SSH 连接工具可以实现本地连接远程 Linux 服务器

Http://www.hostbuf.com/downloads/finalshell_install.exe

根据 `ip addr` 查到的 ip 设置 ip, 端口默认 22:

# commands

|       命令        |       对应英文       |           作用           |
| :---------------: | :------------------: | :----------------------: |
|       `ls`        |         list         |    查看当前目录下内容    |
|       `pwd`       | print work directory |     查看当前所在目录     |
|   `cd [目录名]`   |   change directory   |         切换目录         |
| `touch [文件名] ` |        touch         | 如果文件不存在, 新建文件 |
| `mkdir [目录名]`  |    make directory    |         创建目录         |
|   `rm [文件名]`   |        remove        |       删除指定文件       |

如果出现乱码 || 不喜欢提示中文, 修改 Linux 编码 (1. 追加编码文件到 profile; 2. 重新加载 profile):

```
echo 'LANG="en_US.UTF-8"' >> /etc/profile
source /etc/profile
```

Linux 命令格式: `command [-options] [paramter]`

## ls

语法: `ls [-al] [dir]`

-   `-a`: 显示所有文件及目录, .开头的隐藏文件也会列出
-   `-l`: 除文件名称外, 同时将文件形态(`d`: 目录, `-`:文件), 权限, 拥有者, 文件大小等信息列出

因为经常要用 `ls -l`, 所以 Linux 提供了简写: `ll`

## cd

-   `cd ~` home 目录

-   `cd .` 当前目录

-   `cd ..` 上级目录

## cat

语法: `cat [-n] fileName`

-   `-n`: 由 1 开始对所有输出的行数编号

## more

语法: `more fileName`

-   回车键: 向下滚动一行
-   空格键: 向下滚动一屏
-   b: 返回上一屏
-   q 或者 ctrl+c: 退出 more

## tail

语法: `tail [-f] fileName`

`-f`: 动态读取文件末尾内容并显示, 通常用于日志文件的内容输出

## mkdir

语法: `mkdir [-p] dirName`

`-p`: 确保目录名称存在, 不存在就创建一个

## rmdir

> 注意: 只能删除空目录

语法: `rmdir [-p] dirName`

`-p`: 当子目录被删除后使父目录为空目录的话一并删除

## rm

删除文件或目录

语法: `rm [-rf] name`

-   `-r`: 将目录及目录中所有文件,目录逐一删除, 即递归删除
-   `-f`: 无需确认直接删除

## cp

复制文件或目录

语法: `cp [-r] source dest`

`-r`: 如果复制的是目录需要用这个选项, 将复制该目录下所有文件和子目录

## mv

为文件或目录改名, 或将文件或目录移动到其他位置

语法: `mv source dest`

## tar

对文件进行打包, 解包, 压缩, 解压

语法: `tar [-zcxvf] fileName [files]`

后缀为 `.tar` 表示只是打包, 没有压缩
后缀为 `.tar.gz` 表示打包和压缩

-   `-z`: z 代表 gzip, 通过 gzip 命令对文件压缩或解压
-   `-c`: c 代表 create, 即创建新的包文件
-   `-x`: x 代表 extract, 实现从包文件中还原文件
-   `-v`: v 代表 verbose, 显示命令的执行过程
-   `-f`: f 代表 file, 用于指定包文件的名称

常见组合: `tar -cvf fileName.tar [files]`, `tar -zcvf fileName.tar.gz [files]`, `tar -xvf fileName.tar [files]`, `tar -zxvf fileName.tar.gz [files]`

## vi/vim

vi 命令是 Linux 系统提供的一个文本编辑工具, 类似 Windows 中的记事本

语法: `vi fileName`, `vim fileName`

`vim` 是从 `vi` 发展出来的更强大的文本编辑工具, 可以在编辑文件时进行着色, 方便处理, 实际 vim 用的更多

要使用 `vim` 需要自己安装:

```
yum install vim
```

1. `vim fileName` 如果文件存在直接打开, 否则创建文件
2. vim 有三种模式, Command mode, insert mode, Last line mode, 可以随时互相切换

    - Command mode

        1. 通过上下左右箭头移动光标, `gg` 快速到开头, `G` 快速到末尾
        2. 打开 vim 命令默认进入 Command mode
        3. 进入其他两种模式要先进入 Command mode

    - Insert mode

        1. 在 Command mode 下按 `i`, `a`, `o` 任意一个, 进入插入模式, 下方会出现 `[insert]` 字样
        2. 在 Insert mode 按 `ESC`， 回到 Command mode

    - Last line mode

        1. 底行模式可以通过命令对文件进行查找, 显示行号, 退出等操作
        2. 在 Command mode 下按 `:`, `/` 任意一个进入
        3. 通过 `/` 方式进入 Last line mode, 可以对文件进行查找
        4. 通过 `:`进入 Last line mode, 可以通过 `wq` (保存并退出), `q!` (不保存退出), `set nu` (显示行号)

## find

查找指定目录下的文件

语法: `find dirName -option fileName`

Example:

-   `find . -name "*.java"`
-   `find /root -name "*.java"`
-   `find ~ -name "*.java"`

## grep

从指定文件中查找指定文本内容

语法: `grep word fileName`

Example:

-   `grep Hello HelloWorld.java`
-   `grep hello *.java`

# install softwares in Linux

一般有四种安装方式:

1. 二进制发布包安装

    软件已经针对具体平台编译打包发布, 只要解压, 修改配置即可

2. rpm 安装

    软件已经按照 redhat 的包管理规范进行打包, 使用 rpm 命令进行安装, 不能自行解决库依赖问题

3. yum 安装

    在线安装, 本质是 rpm 安装,自动下载安装包并安装, 安装过程中会帮忙自动解决库依赖问题

4. 源码编译安装

    软件以源码工程的形式发布, 需要自己编译打包

## jdk

下载 jdk, finalshell 上传 jdk.tar.gz

```
tar -zxvf jdk-8u202-linux-x64.tar.gz -C /usr/local

vim /etc/profile

G

i

JAVA_HOME=/usr/local/jdk1.8.0_202
PATH=$JAVA_HOME/bin:$PATH

source /etc/profile

java -version
```

### bugs

如果出现报错:

```
-bash: /usr/local/jdk1.8.0_202/bin/java: /lib/ld-linux.so.2: bad ELF interpreter: No such file or directory
```

原因是之前上传的是: `jdk-8u202-linux-i586.tar.gz`, 改成 `jdk-8u202-linux-x64.tar.gz` 即可

## Tomcat

下载 tomcat 并 finalshell 上传

```
tar -zxvf apache-tomcat-8.5.84.tar.gz -C /usr/local

cd /usr/local
cd apache-tomcat-8.5.84
cd bin

sh startup.sh
```

确认是否成功 (三种都行):

```
more /usr/local/apache-tomcat-8.5.84/logs/catalina.out
tail -50 /usr/local/apache-tomcat-8.5.84/logs/catalina.out
ps -ef | grep tomcat
```

停止 Tomcat 服务 (两种都行, 但推荐优先用 kill):

1. 运行 shutdown 的 shell 脚本

```
cd /usr/local
cd apache-tomcat-8.5.84
cd bin

sh shutdown.sh
```

2. 结束 Tomcat 进程

```
ps -ef | grep tomcat
kill -9 [进程号]
```

### fire wall

1. `systemctl` 是管理 Linux 服务的命令, 可以对服务进行启动, 停止, 重启, 查看状态等操作
2. `firewall-cmd` 是专门用于控制防火墙的命令
3. 为了保证系统安全, 服务器的防火墙不建议关闭

常见命令:

-   查看防火墙状态: `systemctl status firewalld`, `firewall-cmd --state`
-   暂时关闭防火墙: `systemctl stop firewalld`
-   永久关闭防火墙: `systemctl disable firewalld`
-   开启防火墙: `systemctl start firewalld`
-   开放指定端口: `firewall-cmd --zone=public --add-port=8080/tcp --permanent`
-   关闭指定端口: `firewall-cmd --zone=public --remove-port=8080/tcp --permanent`
-   立即生效: `firewall-cmd --reload`
-   查看开放的端口: `firewall-cmd --zone=public --list-ports`

但是由于 Linux 防火墙默认开启, 所以从 Windows 浏览器访问 `http://192.168.114.128:8080/` 会无法访问

## MySQL

检测当前系统中是否安装 MySQL, CentOS7 自带 mariadb, 与 MySQL 冲突:

```
rpm -qa | grep mysql
rpm -qa | grep mariadb
```

卸载冲突软件 (`rpm -e --nodeps softwareName`):

```
rpm -e --nodeps mariadb-libs-5.5.60-1.el7_5.x86_64
```

然后下载 mysql rpm 安装包上传 finalshell

```
mkdir /usr/local/mysql
mv mysql-8.0.31-1.el7.x86_64.rpm-bundle.tar /usr/local/mysql
```

然后按照顺序安装 rpm 包, 如果过程中提示缺少 net-tools 依赖可以用 yum 安装, 可以通过指令升级现有软件和系统内核:

```
rpm -ivh mysql-community-common-8.0.31-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-plugins-8.0.31-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.31-1.el7.x86_64.rpm
rpm -ivh mysql-community-devel-8.0.31-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-compat-8.0.31-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.0.31-1.el7.x86_64.rpm
yum install net-tools
rpm -ivh  mysql-community-icu-data-files-8.0.31-1.el7.x86_64.rpm
rpm -ivh  mysql-community-server-8.0.31-1.el7.x86_64.rpm
```

启动 mysql:

```
systemctl status mysqld
systemctl start mysqld

systemctl enable mysqld

netstat -tunlp | grep mysql
ps -ef | grep mysql
```

### 5.7

登录 MySQL 数据库, 查阅临时密码 (`-uroot -p` 输入密码时不会显示)

```
cat /var/log/mysqld.log | grep password

mysql -uroot -p
eBMnrOd9GJ!L

set global validate_password_length=4;
set global validate_password_policy=LOW;
set password = password('root');

grant all on *.* to 'root'@'%' identified by 'root';
flush privileges;
```

### 8.0

用 5.7 的操作方法会报错:

```
ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.
```

解决:

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'eBMnrOd9GJ!L';
set global validate_password.length=4;
set global validate_password.policy=LOW;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root_root';

create user 'root'@'%' identified by 'root_root';
grant all privileges on *.* to 'root'@'%' with grant option;
flush privileges;
```

dbeaver 连接时报错: `Public Key Retrieval is not allowed`

解决: Edit Connection -> Driver Properties -> allowPublicKeyRetrieval = True

## lrzsz

yum 全程 yellow dog updater, modified

lrzsz 是用来在 linux 系统中文件上传,下载的软件

```
yum list lrzsz
yum install lrzsz.x86_64
```

常用命令:

-   `rz` 上传

# Debian

## Firewall

```bash
ufw status

ufw enable

ufw disable

ufw allow [port]/tcp

ufw allow [port]

ufw delete allow [port]
```

# port && PID

```bash
netstat -ntulp | grep [port]

kill -9 [PID]
```
