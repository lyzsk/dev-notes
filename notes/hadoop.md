# Hadoop

是 apache 的开源框架, 四个模块:

1. Hadoop Common
2. Hadoop YARN
3. HDFS
4. MapReduce

优势:

1. 高可靠性: Hadoop 底层维护多个数据副本, 如果某个计算元素或存储出现故障, 也不会导致数据的丢失

2. 高扩展性: 在集群间分配任务数据, 可方便的扩展数以千计的节点

3. 高效性: 在 MapReduce 的思想下, Hadoop 是并行工作的, 以加快任务处理速度

4. 高容错性: 能够自动将失败的任务重新分配 (默认重试 4 次)

# 装 hadoop101, 102

## STEP1 固定 ip 地址, 修改 host name

VMware -> 装 CentOS 7
root
root

vi etc/hostname

修改主机名: hadoop

开始编辑: i
esc -> : -> wq 保存

vi /etc/sysconfig/network-scripts/ifcfg-ens33

```
BOOTROTO=static
ONBOOT=yes
IPADDR=192.168.114.120
NETMAST=255.255.255.0
GATEWAY=192.168.114.2
DNS1=192.168.114.2
```

ipaddr 查询: `ip addr`
route: `ip route`
dns: `cat /etc/resolv.conf`

systemctl restart network

改完记得 reboot

用 SwitchHost 改 host: `192.168.114.128 hadoop`

记得用 admin 跑 switchHost

`sudo firewall-cmd --state`

`sudo systemctl stop firewalld`

## STEP2 用 XShell 连接虚拟机, yum 安装软件, 关防火墙

yum install -y epel-release
yum install -y psmisc nc net-tools rsync vimlrzsz ntp libzstd openssl-static tree iotop git

如果不能下载,
ping www.baidu.com
检查网络

关闭防火墙
sytemctl stop firewalld

关闭防火墙开机自启
systemctl disable firewalld

## STEP3 修改 hosts, 创建新用户, 提升新用户权限

修改 host
配成和 windows 一样的
C:/Windows/System32/drivers/etc

```
192.168.114.128 hadoop101

192.168.114.130 hadoop102
192.168.114.131 hadoop103
192.168.114.132 hadoop104
```

也可以直接 SwitchHosts 修改

然后 XShell 里也要进 vim 把 hosts 改了, 原来的直接删了就行(不删也行)

```bash
vim /etc/hosts
```

添加用户

```bash
useradd atguigu
passwd atguigu
123456
```

修改配置文件提升新的普通用户到 root 权限

```bash
vim /etc/sudoers

## Next comes the main part: which users can run what software on
## which machines (the sudoers file can be shared between multiple
## systems).
## Syntax:
##
##      user    MACHINE=COMMANDS
##
## The COMMANDS section may have other options added to it.
##
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
## 在这后边加
atguigu ALL=(ALL) NOPASSWD:ALL
```

记得用 `:wq!` 退出, 不加!会`E45:'readonly' option is set (add to override)`

## STEP4

在 Linux 的 /opt 目录下创建 software 和 module

将 software 和 module 目录的所有者和所属组改为 刚才创建的用户名, software 放安装包, module 放软件安装目录

```bash
cd /opt
ll
mkdir software
mkdir module
```

修改文件夹 所属用户, 组织

```bash
chown atguigu:atguigu module/ software/
```

# hadoop102

后面 vmware 克隆这个虚拟机就好了, 101, 102 这些

## STEP1

然后 vmware 打开 clone 的虚拟机, 改 host name 和 ipaddress

因为是 clone 的, 可以直接用 vim 了:

```bash
vim /etc/sysconfig/network-scripts/ifcfg-ens33

vim /etc/hostname

reboot
```

然后就在第一个 clone (hadoop102) 上安装软件

记住 clone 最原始的 101, 以后用内容分发, 把软件安装分发出去

注意, 102 用 XShell 连的时候, 使用 atguigu, 123456 登录
(NETMAST, GATEWAY, DNS1 不需要改)

## STEP2 安装 jdk

安装 jdk 安装包 到 /opt/sofware
安装 jdk 到 /opt/module
配置 jdk 环境

/etc/profile.d 创建 my_env.sh
在 my_env.sh
声明 JAVA_HOME

JAVA_HOME=/opt/module/jdk1.8.0_212

将 java home 追加到 Path 变量上
PATH=$PATH:$JAVA_HOME/bin

提升 JAVA_HOME 变量为系统变量
export JAVA_HOME PATH

用 fire transfler (ctl + alt + f)上传 .tar.gz (需要下一个 Xftp)

```sh
tar -zxvf jdk-8u212-linux-x64.tar.gz -C ../module/
```

配置环境变量

```sh
vim /etc/profile
```

会发现一段话:

```sh
# It's NOT a good idea to change this file unless you know what you
# are doing. It's much better to create a custom.sh shell script in
# /etc/profile.d/ to make custom changes to your environment, as this
# will prevent the need for merging in future updates.
```

所以不要在这里配, 再加上这个文件里的 for 循环循环读取文件, 要去告知的`profile.d`配:

```sh
cd /etc/profile.d
```

因为是普通用户不是 admin, 命令要加上`sudo` (否则会变成 read-only):

```sh
sudo touch my_env.sh

sudo vim my_env.sh
```

为了防止不能更改, 新打开一个 hadoop102 的 tab 窗, `cd /opt/module/jdk1.8.0_212`, 然后 `pwd` 获得 jdk 的目录, 然后在第一个 hadoop102 vm 窗输入:

```sh
# config jdk environment
# declare jdk home
JAVA_HOME=/opt/module/jdk1.8.0_212
# declare PATH
PATH=$PATH:$JAVA_HOME/bin

# upgrade PATH and JAVA_HOME to global
export JAVA_HOME PATH
```

记得要保存! 用 esc + `:wq`

配置完可以在任意位置: `java -version` 检查是否配置成功

> 如果 `not found`, 需要重新加载一下 profile:
>
> Method 1: 重连
>
> Method 2: source /etc/profile

## step3 安装 hadoop

```sh
cd /opt/software/
tar -zxvf hadoop-3.1.3.tar.gz -C ../module/

cd ../module/
ll
cd hadoop-3.1.3

sudo vim /etc/profile.d/my_env.sh

i
# config jdk environment
# declare jdk home
JAVA_HOME=/opt/module/jdk1.8.0_212
# declare hadoop HOME
HADOOP_HOME=/opt/module/hadoop-3.1.3
# declare hadoop PATH
# declare PATH
PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HADOOP_HOME/sbin

# upgrade PATH and JAVA_HOME to global
export JAVA_HOME HADOOP_HOME PATH


hadoop version
```

# run mode

三种运行模式:

-   Local (Standalone) Mode
-   Pseudo-Distributed Mode
-   Fully-Distributed Mode

## Local Mode

在 hadoop102 虚拟机, `cd /top/module/`

进 hadoop 文件夹, `mkdir wcinput`

将来 `wcinput` 作为计算文件的输入目录

上传 `hello.txt` 到 `wcinput`

`cd wc input`, `cat hello.txt`, 发现里面都是许多重复的单词, MR 目的就是统计文件里重复的单词和次数

`cd ..` 回到上层目录

```sh
hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount ./wcinput ./wcoutpu
```

运行完后 `cd wcoutput`, `_SUCCESS` 是运行成功文件, `cat part-r-00000` 查看结果文件

`C:\Users\sichu\Documents\Virtual Machines` 里复制两份作为 `hadoop103`, `hadoop104`

复制完, 1. `vim /etc/hostname` 改主机名; 2. `vim /etc/sysconfig/network-scripts/ifcfg-ens33` 改 ipaddr

hadoop103: `IPADDR=192.168.114.131`
hadoop104: `IPADDR=192.168.114.132`

改完记得 `reboot` 重启生效

然后在 XShell 里创建 hadoop103, hadoop104, 记得要在 `C:\Windows\System32\drivers\etc` 改 host, 把 103, 104 的 ip 加进 host 里:

```sh
192.168.114.128 hadoop101
192.168.114.130 hadoop102
192.168.114.131 hadoop103
192.168.114.132 hadoop104
```

理论上三台 102, 103, 104 之间可以 ping 通就说明 ok 了

# file transfer

## Method1: xsync

hadoop103, 104 都没有 jdk, hadoop, 所以要编写 集群分发脚本

Method1: scp (secure copy) 安全拷贝

    语法:

    scp -r $pdir/$fname $user@hadoop$host:$pdir/$fname
    命令 递归 要拷贝的文件路径/名称 目的用户@主机:目的路径/名称

> NOTE: $user 不填的话, 默认用的是发送方用户
>
> 前提: 在 hadoop102, 103, 104 都已经创建好 `/opt/module/` 和 `/opt/software/`, 并且已经把两个目录修改为 `atguigu:atguigu sudo chown atguigu:atguigu -R /opt/module`

因为 `/hadoop-3.1.3/share/doc` 目录下文件太多了, 会影响发送时间, 所以:

```sh
cd hadoop-3.1.3
ll
cd share
ll
rm -rf doc

cd ..
cd ..
scp -r ./* atguigu@hadoop103:/opt/module/
yes
123456
```

如果 `ping hadoop104` 失败报错: `ping: hadoop104: Name or service not known`, 说明忘记改 XShell 里的 host 了, 解决:

```sh
vim /etc/hosts/
```

因为 102 和 103 第一次通信, 所以要确认 yes, 和输入 103 的密码

在 104 用拉取的方法获得 jdk 和 hadoop:

```sh
cd /opt/module
scp -r atguigu@hadoop102:/opt/module/* ./
yes
123456
```

或者可以在 103 让 102 发送给 104:

```sh
scp -r atguigu@hadoop102:/opt/module/* atguigu@hadoop104:/opt/module/
yes
123456
yes
123456
```

## Method2: rsync

rsync 主要用于备份和镜像, 速度快

rsync vs scp: 用 rsync 做文件复制比 scp 快, rsync 只对差异文件做更新

最小化安装的话, 要用 `yarn` 安装 rsync

仅测试 rsync: 在 hadoop102, `cd /opt/software`, 然后把 jdk 安装包发给 hadoop103, `rsync -av ./jdk-8u212-linux-x64.tar.gz atguigu@hadoop103:/opt/software/`, 然后测试发所有内容: `rsync -av ./* atguigu@hadoop103:/opt/software/`, 结果只发了 hadoop, 证明差异化传输

同理 rsync 也可以用作拉取, i.e. 在 hadoop104 `/opt/software/` 拉取 102 的安装包: `rsync -av atguigu@hadoop102:/opt/software/jdk-8u212-linux-x64.tar.gz ./`

> NOTE: rsync 传送所有差异化内容, 包括文件内容的差异
>
> NOTE: rsync 不像 scp 一样可以登录两台机器

i.e. 在 hadoop103 用 rsync 登录 102 传文件给 104 是不可行的: `rsync -av atguigu@hadoop102:/opt/software/hadoop-3.1.3.tar.gz atguigu@hadoop104:/opt/software/
` 得到报错:

```sh
The source and destination cannot both be remote.
rsync error: syntax or usage error (code 1) at main.c(1275) [Receiver=3.1.2]
```

## Method3: using scripts

用 spc/rsync 手写传输太麻烦了, 还容易输错, 不如用脚本遍历自动化传输

思路: 通过脚本还需要配置环境变量才能执行, 可以想一种取巧的方法, `cd /home/atguigu` 然后查询 PATH: `echo $PATH`, 可以看到`/home/atguigu/bin`, 但是在 home 的时候用 `ll` 却显示没有文件, 甚至 `ll -a` 都没有

在`/home/atguigu`

```sh
mkdir bin

cd bin

touch my_rsync.sh

chmod 744 my_rsync.sh

vim my_rsync.sh
```

开始编写标本内容:

```sh
#!/bin/bash

# parameter preprocessing
if [ $# -lt 1 ]
then
    echo "parameter can't be null"
    exit
fi

# traversal
for host in hadoop103 hadoop104
do
    for file in $@
    do
        if [ -e $file ]
        then
            # 1. get dir path
            pdir=$(cd -P $(dirname $file); pwd)
            # 2. get file name
            fname=$(basename $file)
            # 3. login target vm, create dir
            ssh $host "mkdir -p $pdir"
            # 4. transfer dirs and files
            rsync -av $pdir/$fname $host:$pdir
        else
            echo "$file not exist"
        fi
    done
done
```

然后在 102 任意目录: `my_rsync.sh /opt/software/hadoop-3.1.3.tar.gz`

接下来分发环境配置:

```sh
cd /etc/profile.d/
ll
```

但是 `my_env.sh` 不能用脚本分发, 因为 `atguigu` 用户没有写操作的权限 (看后三位: `-rw-r--r--. 1 root root 310 Aug 22 15:54 my_env.sh`, 只有 read 权限), 所以只能用 scp/rsync 手动发:

```sh
scp -r ./my_env.sh root@hadoop103:/etc/profile.d/
root
```

然后在 hadoop103 里刷新一下: `source /etc/profile`, 就可以通过 `hadoop version` 和 `java -version` 看到版本了

同理给 hadoop104 也发一份环境变量配置

# 规划 hadoop 集群

hadoop102 namenode datanode nodemanager (hdfs)

hadoop103 resourcemanager datanode nodemanager (yarn)

hadoop104 secondarynamenode datanode nodemanager (hdfs)

搭建集群, 就是修改 hadoop 的配置文件

-   hadoop 的默认配置文件:

    -   core-default.xml
    -   hdfs-default.xml
    -   mapread-default.xml
    -   yarn-default.xml

> NOTE: 这几个不能在 hadoop 里找到, 已经被打包封装到源码里了
>
> 写自己的配置文件里可以对应着看一下

-   hadoop 提供可自定义的配置文件:

    -   core-site.xml
    -   hdfs-site.xml
    -   mapread-site.xml
    -   yarn-site.xml

-   hadoop 中加载配置文件的顺序:

    -   当 hadoop 集群启动后, 先加载默认配置, 然后再加载自定义配置文件, 自定义的配置会覆盖默认的配置

-   配置集群相关的信息 (修改 hadoop 自定义的配置文件)

    -   hadoop-env.sh (主要映射 jdk 的环境变量) (在 hadoop3.x 的版本可以不配)

    -   core-site.xml (配置 hadoop 的全局信息)

    -   hdfs-site.xml

    -   mapread-site.xml

    -   yarn-site.xml

## STEP1 全局配置

配置 `core-site.xml`

```sh
cd /opt/module/hadoop-3.1.3/etc/hadoop/

vim hadoop-env.sh
```

可以看到

```sh
# The java implementation to use. By default, this environment
# variable is REQUIRED on ALL platforms except OS X!
# export JAVA_HOME=
```

如果是 3.x 前的老版本需要解开注释自己配置, 这里不需要了

```sh
esc
:q

vim core-site.xml
```

往 configuration 里复制粘贴:

```xml
<configuration>
	<!-- 指定NameNode的地址 -->
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://hadoop102:9820</value>
    </property>
    <!-- 指定hadoop数据的存储目录 -->
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/opt/module/hadoop-3.1.3/data</value>
    </property>

    <!-- 配置HDFS网页登录使用的静态用户为atguigu -->
    <property>
        <name>hadoop.http.staticuser.user</name>
        <value>atguigu</value>
    </property>

    <!-- 配置该atguigu(superUser)允许通过代理访问的主机节点 -->
    <property>
        <name>hadoop.proxyuser.atguigu.hosts</name>
        <value>*</value>
    </property>
    <!-- 配置该atguigu(superUser)允许通过代理用户所属组 -->
    <property>
        <name>hadoop.proxyuser.atguigu.groups</name>
        <value>*</value>
    </property>
    <!-- 配置该atguigu(superUser)允许通过代理的用户-->
    <property>
        <name>hadoop.proxyuser.atguigu.groups</name>
        <value>*</value>
    </property>
</configuration>
```

`core-site.xml` 对应 `core-default.xml` 解读:

`core-site.xml` 的

```xml
    <!-- 指定NameNode的地址 -->
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://hadoop102:9820</value>
    </property>
```

对应 `core-default.xml` 的

```xml
<property>
  <name>fs.defaultFS</name>
  <value>file:///</value>
  <description>The name of the default file system.  A URI whose
  scheme and authority determine the FileSystem implementation.  The
  uri's scheme determines the config property (fs.SCHEME.impl) naming
  the FileSystem implementation class.  The uri's authority is used to
  determine the host, port, etc. for a filesystem.</description>
</property>
```

`file:///` 代表 local, 改了配置文件后, 如果执行 mr 程序就会找 hadoop 内部的 hdfs 协议(类似 tcp/ip)

`hadoop102`代表 nn 的 ip

`9820` 是 hadoop 默认的内部通信端口号, (也可以写成 8200)

---

`core-site.xml` 的

```xml
    <!-- 指定hadoop数据的存储目录 -->
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/opt/module/hadoop-3.1.3/data</value>
    </property>

```

对应 `core-default.xml` 的

```xml
<property>
  <name>hadoop.tmp.dir</name>
  <value>/tmp/hadoop-${user.name}</value>
  <description>A base for other temporary directories.</description>
</property>
```

默认放在 linux 本地的 /tmp 目录, 并不靠谱, 修改后就会放在 `/opt/module/hadoop-3.1.3/data`, 虽然现在还没有 `data` 文件夹, 但是启动集群的时候通过对配置的读取会自动生成这个文件夹

这个 `data` 文件夹放两类数据: 1. 源数据, 2. 真实数据

---

剩下的属于兼容性配置,

i.e. 使用 HDFS 分布式系统时也需要权限认证的

`core-site.xml` 的

```xml
    <!-- 配置HDFS网页登录使用的静态用户为atguigu -->
    <property>
        <name>hadoop.http.staticuser.user</name>
        <value>atguigu</value>
    </property>

```

对应 `core-default.xml` 的

```xml
<!-- Static Web User Filter properties. -->
<property>
  <name>hadoop.http.staticuser.user</name>
  <value>dr.who</value>
  <description>
    The user name to filter as, on static web filters
    while rendering content. An example use is the HDFS
    web UI (user to be used for browsing files).
  </description>
</property>
```

现在配置完用户后, 可以通过在浏览器打入地址进入界面, 对 HDFS 进行相关操作

---

剩下的 代理组,代理用户 等配置暂时可以不配, 等用到 HIVE 的时候才用得到

## STEP2 HDFS 配置

配置 `hdfs-site.xml`

```sh
cd /opt/module/hadoop-3.1.3/etc/hadoop/

vim hdfs-site.xml
```

```xml
<configuration>
	<!-- nn web端访问地址-->
	<property>
        <name>dfs.namenode.http-address</name>
        <value>hadoop102:9870</value>
    </property>
	<!-- 2nn web端访问地址-->
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>hadoop104:9868</value>
    </property>
</configuration>
```

`9870` 端口是 nn 外部访问端口

`9868` 端口是 2nn 外部访问端口

## STEP3 YARN 配置

配置 `yarn-site.xml`

```sh
cd /opt/module/hadoop-3.1.3/etc/hadoop/

vim yarn-site.xml
```

```xml
<configuration>
	<!-- 指定MR走shuffle -->
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
    <!-- 指定ResourceManager的地址-->
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>hadoop103</value>
    </property>
    <!-- 环境变量的继承 -->
    <property>
        <name>yarn.nodemanager.env-whitelist</name>
        <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>
    </property>
    <!-- yarn容器允许分配的最大最小内存 -->
    <property>
        <name>yarn.scheduler.minimum-allocation-mb</name>
        <value>512</value>
    </property>
    <property>
        <name>yarn.scheduler.maximum-allocation-mb</name>
        <value>4096</value>
    </property>
    <!-- yarn容器允许管理的物理内存大小 -->
    <property>
        <name>yarn.nodemanager.resource.memory-mb</name>
        <value>4096</value>
    </property>
    <!-- 关闭yarn对物理内存和虚拟内存的限制检查 -->
    <property>
        <name>yarn.nodemanager.pmem-check-enabled</name>
        <value>false</value>
    </property>
    <property>
        <name>yarn.nodemanager.vmem-check-enabled</name>
        <value>false</value>
    </property>
</configuration>
```

`shuffle` 是 MR 程序必须要走的 `shuffle`

YARN 是资源调度器, 负责给 MR 程序调度资源

在 `yarn-default.xml` 里默认的最小内存是:

```xml
  <property>
    <description>The minimum allocation for every container request at the RM
    in MBs. Memory requests lower than this will be set to the value of this
    property. Additionally, a node manager that is configured to have less memory
    than this value will be shut down by the resource manager.</description>
    <name>yarn.scheduler.minimum-allocation-mb</name>
    <value>1024</value>
  </property>
```

如果不配成 512, 会内存不够用, 一般公司服务器用默认的 1024 就行

```xml
    <!-- 关闭yarn对物理内存和虚拟内存的限制检查 -->
    <property>
        <name>yarn.nodemanager.pmem-check-enabled</name>
        <value>false</value>
    </property>
```

如果不关闭 `pmem-check-enabled` 在运行 YARN 的时候会检查物理和虚拟内存的使用情况, 会导致 MR 程序运行失败, 但是即使不配也没关系, 因为 MR 程序有默认的重试机制

## STEP4 MapReduce 配置

配置 `mapred-site.xml`

```sh
cd /opt/module/hadoop-3.1.3/etc/hadoop/

vim mapred-site.xml
```

```xml
<configuration>
	<!-- 指定MapReduce程序运行在Yarn上 -->
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

在 `mapred-default.xml` 里默认的是:

```xml
<property>
  <name>mapreduce.framework.name</name>
  <value>local</value>
  <description>The runtime framework for executing MapReduce jobs.
  Can be one of local, classic or yarn.
  </description>
</property>
```

如果不配成 yarn, 默认就是 local 本地模式运行

## STEP5 通过分发脚本把配好的配置发送给其他子机器

```sh
cd /opt/module/hadoop-3.1.3/etc/
my_rsync.sh ./*
```

# 单点 启动/停止 集群

-   启动 HDFS 集群

    -   注意:

        首次启动 HDFS 需要对 NameNode 进行格式化操作

        在 Hadoop102 执行: `hdfs namenode -format`

    -   hadoop102 启动 namenode

        `hdfs --daemon start namenode`

    -   hadoop102 hadoop103 hadoop104 分别启动 datanode

        `hdfs --daemon start datanode`

    -   hadoop104 启动 secondarynamenode

        `hdfs --daemon start secondarynamenode`

`hdfs namenode -format` 格式化完后会在 `hadoop-3.1.3` 目录下多两个个文件夹: `data` 和 `logs`

`logs` 用来记录日志, `data` 用来保存 HDFS 数据 (`/opt/module/hadoop-3.1.3/data/dfs/name` 里放元数据)

`hdfs --daemon start namenode` 单点启动后没有提示, 可以用 `jps` 查看所有 java 进程, 如果有 namenode 进程就说明启动成功, 就可以在浏览器里输入: `http://hadoop102:9870/` 访问 nn 的外部界面

102,103,104 启动后 `/opt/module/hadoop-3.1.3/data/dfs/data` 后 102 就会多一个 `data` 目录, 但是 103, 104 不会有

-   启动 YARN

    -   hadoop103: `yarn --daemon start resourcemanager`

    -   hadoop102, hadoop103, hadoop104: `yarn --daemon start nodemanager`

启动完 yarn 可以在 `http://hadoop103:8088/` 访问 yarn 的外部界面

-   关闭 HDFS, YARN

    -   hadoop102: `hdfs --daemon stop namenode`

    -   hadoop102, 103, 104: `hdfs --daemon stop datanode`

    -   hadoop104: `hdfs --daemon stop secondarynamenode`

    -   hadoop103: `yarn --daemon stop resourcemanager`

    -   hadoop102, hadoop103, hadoop104: `yarn --daemon stop nodemanager`

> NOTE: 格式化 HDFS 集群的 namenode 注意事项:
>
> 1. 只有首次搭建后需要对 namenode 进行格式化操作
>
> 2. 如果集群在后期使用过程中需要重新格式化, 一定要先删除所有机器 hadoop 安装目录下的 data 和 logs 目录! (如果不删会导致历史数据存在出现冲突, 导致集群不可用)

# ssh 免密登陆配置

ssh 免密后就可以通过 hadoop 群起脚本启动集群了

首先验证 ssh 登录可行性 (尝试从 hadoop102 登录 103):

```sh
cd /opt/module/hadoop-3.1.3

ssh hadoop103

123456

exit
```

然后在 hadoop102 上进行 ssh 非对称加密的公钥-密钥对:

```sh
ssh-keygen -t rsa

四次enter

cd /home/atguigu/

ll -a

cd .ssh
```

`id_rsa` 私钥

`id_rsa.pub` 公钥

`known_hosts` 已经访问过并且输入过 yes 的 host

现在不仅要给 103, 104 授权, 还要给自己授权:

```sh
ssh hadoop102
yes
123456
exit
```

开始授权:

```sh
ssh-copy-id hadoop102
123456
```

检查 hadoop102 的 `/home/atguigu/.ssh`:

```sh
ll
cat authorized_keys
```

同理:

```sh
ssh-copy-id hadoop103
123456

ssh-copy-id hadoop104
123456
```

完成后在 102 测试: `ssh hadoop103` 发现不再需要密码, 然后就可以 `exit`

同理, 在 hadoop103, hadoop104 都要进行同样的操作:

```sh
ssh-keygen -t rsa
4次enter
ssh-copy-id hadoop102
ssh-copy-id hadoop103
ssh-copy-id hadoop104
```
