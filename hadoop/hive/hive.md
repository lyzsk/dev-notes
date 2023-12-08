# Hive

Hive：由 Facebook 开源用于解决海量结构化日志的数据统计工具

Hive 是基于 Hadoop 的一个数据仓库工具，可以将结构化的数据文件映射为一张表，并提供类 SQL 查询功能

-   Hive 本质: 将 HQL (Hive Query Language) 转化成 MapReduce 程序

    1. Hive 处理的数据存储在 HDFS

    2. Hive 分析数据底层的实现是 MapReduce

    3. 执行程序运行在 Yarn 上

-   Hive 优点:

    1. 操作接口采用类 SQL 语法，提供快速开发的能力 (简单、容易上手)

    2. 避免了去写 MapReduce，减少开发人员的学习成本

    3. Hive 的执行延迟比较高，因此 Hive 常用于数据分析，对实时性要求不高的场合

    4. Hive 优势在于处理大数据，对于处理小数据没有优势，因为 Hive 的执行延迟比较高

    5. Hive 支持用户自定义函数，用户可以根据自己的需求来实现自己的函数

-   Hive 缺点:

    1. Hive 的 HQL (Hive Query Language) 表达能力有限

        1. 迭代式算法无法表达
        2. 数据挖掘方面不擅长，由于 MapReduce 数据处理流程的限制，效率更高的算法却无法实现

    2. Hive 的效率比较低

        1. Hive 自动生成的 MapReduce 作业，通常情况下不够智能化
        2. Hive 调优比较困难，粒度较粗

-   Hive vs Database:

    1. 数据更新角度: Hive 不是数据库, 数据仓库的内容是读多写少的, Hive 中不建议对数据的改写，所有的数据都是在加载的时候确定好的

    2. 执行延迟角度: Hive 在查询数据的时候，由于没有索引，需要扫描整个表，因此延迟较高。另外一个导致 Hive 执行延迟高的因素是 MapReduce 框架。由于 MapReduce 本身具有较高的延迟，因此在利用 MapReduce 执行 Hive 查询时，也会有较高的延迟。相对的，数据库的执行延迟较低。当然，这个低是有条件的，即数据规模较小，当数据规模大到超过数据库的处理能力的时候，Hive 的并行计算显然能体现出优势。

    3. 数据规模角度: 由于 Hive 建立在集群上并可以利用 MapReduce 进行并行计算，因此可以支持很大规模的数据；对应的，数据库可以支持的数据规模较小

# install mysql

## Step1. 卸载 linux 自带的 mysql

1. 查是否自带 `rpm -qa | grep mysql` (CentOS6), `rpm -qa | grep mariadb` (CentOS7), 也可以组合一下: `rpm -qa | grep -i -E mysql\|mariadb` (正则中间不能有空格)

2. 卸载 `rpm -qa | grep -i -E mysql\|mariadb | xargs -n1 sudo rpm -e --nodeps` (只要 hadoop102 删就行, 因为就 102 要重装 mysql)

## Step2. 上传 tar 文件解压

`cd /opt/software`, 上传 `mysql-5.7.28-1.el7.x86_64.rpm-bundle.tar`, `mkdir mysql-rpm`, `tar -xvf mysql-5.7.28-1.el7.x86_64.rpm-bundle.tar -C ./mysql-rpm`, 然后 `cd mysql-rpm`, 注意安装 rpm 要按照顺序, 因为有依赖关系:

```sh
sudo rpm -ivh mysql-community-common-5.7.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-libs-5.7.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-libs-compat-5.7.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-client-5.7.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-server-5.7.28-1.el7.x86_64.rpm
```

如果报错:

```
警告：mysql-community-server-5.7.28-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1f5: NOKEY
错误：依赖检测失败：
        libaio.so.1()(64bit) 被 mysql-community-server-5.7.28-1.el7.x86_64 需要
        libaio.so.1(LIBAIO_0.1)(64bit) 被 mysql-community-server-5.7.28-1.el7.x86_64 需要
        libaio.so.1(LIBAIO_0.4)(64bit) 被 mysql-community-server-5.7.28-1.el7.x86_64 需要

```

`sudo yum install -y libaio`

装完后 `rpm -qa | grep mysql` 确认有 5 个

## Step3

如果之前装过 mysql, 需要删除 `/etc/my.cnf` 文件中 datadir 指向的目录下的所有内容

`sudo rm -rf /var/lib/mysql`

## Step4. 初始化数据库

`sudo mysqld --initialize --user=mysql`

## Step5. 启动 mysql 服务

`sudo cat /var/log/mysqld.log`, 最后一行有临时密码, 复制起来: xaareSAwP6:0

`sudo systemctl start mysqld`

`systemctl status mysqld`

```sh
mysql -uroot -p

输入临时密码
```

然后第一件事改密码: `set password = password("root");`

然后 `exit`

再次登录: `mysql -uroot -proot`, 证明可以正常连接, 但是 `exit` 后, 如果输入 `mysql -uroot -proot -hadoop102`, 发现连不上

## Step6. 允许远程访问

`mysql -uroot -proot`

`show databases;`

`use mysql;`

`show tables;`

`desc user;`

`select host, user, authentication_string from user;`

`update user set host = '%' where user = 'root';`

`flush privileges;`

之后就可以用 dbeaver 这种的可视化界面远程访问 hadoop102 的 db 了

## Step7. 设置编码

`show variables like 'character%'`

TODO: 把 db 和 server 的编码从 latin1 改成 utf8

# install hive

## step1.

`cd /opt/software` 上传 `apache-hive-3.1.2-bin.tar.gz`

`tar -zxvf apache-hive-3.1.2-bin.tar.gz -C /opt/module/`

`cd /opt/module`

`mv apache-hive-3.1.2-bin/ hive-3.1.2`

## step2. 配置环境变量

`cd hive-3.1.2/`, `pwd` 复制路径

`sudo vim /etc/profile.d/my_env.sh`

```sh
# java
export JAVA_HOME=/opt/module/jdk1.8.0_212
export PATH=$PATH:$JAVA_HOME/bin
# hadoop
export HADOOP_HOME=/opt/module/hadoop-3.1.3
export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
# zookeeper
export ZOOKEEPER_HOME=/opt/module/zookeeper-3.5.7
export PATH=$PATH:$ZOOKEEPER_HOME/bin
# hive
export HIVE_HOME=/opt/module/hive-3.1.2
export PATH=$PATH:$HIVE_HOME/bin
```

`source /etc/profile`

## step3. 删 log4j

hive 底层靠的 hadoop, 防止冲突, 要把 log4j jar 包删了

`cd /opt/module/hive-3.1.2/lib`

`ll | grep log4j-slf4j-impl-2.10.0.jar`

`rm -rf log4j-slf4j-impl-2.10.0.jar`

## step4. 更改配置文件

Hive 默认数据库是 derby, 要改成 mysql

`cd /opt/module/hive-3.1.2/conf`

`touch hive-site.xml`

`vim hive-site.xml`

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <!-- jdbc连接的URL -->
    <property>
        <name>javax.jdo.option.ConnectionURL</name>
        <value>jdbc:mysql://hadoop102:3306/metastore?useSSL=false</value>
    </property>

    <!-- jdbc连接的Driver-->
    <property>
        <name>javax.jdo.option.ConnectionDriverName</name>
        <value>com.mysql.jdbc.Driver</value>
    </property>

	<!-- jdbc连接的username-->
    <property>
        <name>javax.jdo.option.ConnectionUserName</name>
        <value>root</value>
    </property>

    <!-- jdbc连接的password -->
    <property>
        <name>javax.jdo.option.ConnectionPassword</name>
        <value>root</value>
    </property>

    <!-- Hive默认在HDFS的工作目录 -->
    <property>
        <name>hive.metastore.warehouse.dir</name>
        <value>/user/hive/warehouse</value>
    </property>

   <!-- Hive元数据存储的验证 -->
    <property>
        <name>hive.metastore.schema.verification</name>
        <value>false</value>
    </property>

    <!-- 元数据存储授权  -->
    <property>
        <name>hive.metastore.event.db.notification.api.auth</name>
        <value>false</value>
    </property>
</configuration>
```

`:wq`

## step5. 上传 jdbc 驱动到 Hive

`cd /opt/software`, 上传 `mysql-connector-java-5.1.37.jar`

`cp mysql-connector-java-5.1.37.jar /opt/module/hive-3.1.2/lib/`

在 linux mysql 中 (`mysql -uroot -proot`):

```sql
create database metastore;
quit
```

> Note: `metasone` 是 xml 中`jdbc:mysql://hadoop102:3306/xxx?useSSL=false`定义的

因为已经配置了环境变量, 所以可以在任意位置初始化元数据库: `schematool -initSchema -dbType mysql -verbose`

配置完后再进 mysql, `use metastore;`, `show tables`, 共 74 个表

## step6. 启动 Hive

启动 Hive 前要先启动 hadoop 集群!!!

`my_cluster.sh start`

`http://hadoop102:9870/explorer.html#/` 把之前额数据都先删了

### method1. hive start hive

方法一直接在 hadoop102 `hive` 就启动 Hive 了 (不推荐用 hive, 推荐用 hive2, 或者用 spark)

```hive
show databases;
use default;
show tables;
quit;
```

### method2. jdbc start hive

基于 jdbc 协议启动 hive

`cd /opt/module/hive-3.1.2/bin`

`hive --service hiveserver2`

> NOTE: 启动后窗口不能再操作，需打开一个新的 shell 窗口做别的操作

在另一个窗口 `beeline -u jdbc:hive2://hadoop102:10000 -n atguigu`

然后就进了

```hive
show databases;
use default;
show tables;
```

> NOTE: jdbc hive2 里退出方法: `!quit`

# Hive 元数据服务 (可选)

启用元数据服务后, Hive 通过元数据服务间接操作 mysql, 而不是直接操作

`cd /opt/module/hive-3.1.2/conf/`

`vim hive-site.xml`

添加配置:

```xml
    <!-- 指定存储元数据要连接的地址 -->
    <property>
        <name>hive.metastore.uris</name>
        <value>thrift://hadoop102:9083</value>
    </property>
```

如果添加了这个配置, 将来启动 hive 的时候一定要启用 metastore 服务

`hive --service metastore`

> Note: 启动后窗口不能再操作，需打开一个新的 shell 窗口做别的操作

# Hive 启动服务脚本

因为不能关闭 shell 窗口,metastore 服务和 hiveserver2 服务 阻塞进程里很麻烦, jps 查看而已看到以 runjar 的形式作为进程运行

```sh
nohup hive --service metastore &

nohup hive --service hiveserver2 &
```

`cd /opt/module/hive-3.1.2/`

`mkdir logs`

`cd logs`

`touch metastore.log`

`touch hiveServer2.log`

```sh
nohup hive --service hiveservice2 1>/opt/module/hive-3.1.2/logs/hiveServer2.log 2>/opt/module/hive-3.1.2/logs/hiveServer2.log &
```

可以简化成:

```sh
nohup hive --service hiveservice2 >/opt/module/hive-3.1.2/logs/hiveServer2.log 2>&1 &
nohup hive --service metastore >/opt/module/hive-3.1.2/logs/metastore.log 2>&1 &
```

...省略...

最终:

`cd /home/atguigu/bin/`

`touch hiveservice.sh`

`vim hiveservice.sh`
``

```sh
#!/bin/bash
HIVE_LOG_DIR=$HIVE_HOME/logs
if [ ! -d $HIVE_LOG_DIR ]
then
	mkdir -p $HIVE_LOG_DIR
fi
#检查进程是否运行正常，参数1为进程名，参数2为进程端口
function check_process()
{
    pid=$(ps -ef 2>/dev/null | grep -v grep | grep -i $1 | awk '{print $2}')
    ppid=$(netstat -nltp 2>/dev/null | grep $2 | awk '{print $7}' | cut -d '/' -f 1)
    echo $pid
    [[ "$pid" =~ "$ppid" ]] && [ "$ppid" ] && return 0 || return 1
}

function hive_start()
{
    metapid=$(check_process HiveMetastore 9083)
    cmd="nohup hive --service metastore >$HIVE_LOG_DIR/metastore.log 2>&1 &"
    cmd=$cmd" sleep 4; hdfs dfsadmin -safemode wait >/dev/null 2>&1"
    [ -z "$metapid" ] && eval $cmd || echo "Metastroe服务已启动"
    server2pid=$(check_process HiveServer2 10000)
    cmd="nohup hive --service hiveserver2 >$HIVE_LOG_DIR/hiveServer2.log 2>&1 &"
    [ -z "$server2pid" ] && eval $cmd || echo "HiveServer2服务已启动"
}

function hive_stop()
{
    metapid=$(check_process HiveMetastore 9083)
    [ "$metapid" ] && kill $metapid || echo "Metastore服务未启动"
    server2pid=$(check_process HiveServer2 10000)
    [ "$server2pid" ] && kill $server2pid || echo "HiveServer2服务未启动"
}

case $1 in
"start")
    hive_start
    ;;
"stop")
    hive_stop
    ;;
"restart")
    hive_stop
    sleep 2
    hive_start
    ;;
"status")
    check_process HiveMetastore 9083 >/dev/null && echo "Metastore服务运行正常" || echo "Metastore服务运行异常"
    check_process HiveServer2 10000 >/dev/null && echo "HiveServer2服务运行正常" || echo "HiveServer2服务运行异常"
    ;;
*)
    echo Invalid Args!
    echo 'Usage: '$(basename $0)' start|stop|restart|status'
    ;;
esac
```

`chmod u+x hiveservice.sh`

`hiveservice.sh start`

# Hive command

`/opt/module/hive-3.1.2/bin`

`hive -help`

创建一个 hadoop102 窗口 `hive`, rename 为 hive

## hive -e

```hive
create table mytbl (id int, name string);

insert into mytbl values (1001, 'zhangsan');

select * from mytbl;
```

等同于: `hive -e "select * from mytbl;"`

但是 `hive -e` 也其实登了 hive... 也就写 sh 脚本的时候用得到

## hive -f

`cd /opt/module/hive-3.1.2/`

`mkdir datas`

`cd datas/`

`touch test.sql`

`vim test.sql`, 里面就写: `select * from mytbl;`

`hive -f test.sql`, 能解析文件里的 Sql 语句

## dfs

在 hive cli 里输入 `dfs -ls /;` 等同于在 linux 里输入 `hadoop fs -ls /`

# Hive 常见属性配置

`cd /opt/module/hive-3.1.2/conf`

`vim hive-site.xml`

添加:

```xml
    <property>
      <name>hive.cli.print.header</name>
      <value>true</value>
    </property>
    <property>
      <name>hive.cli.print.current.db</name>
      <value>true</value>
    </property>
```

其实没啥用, 因为 hive 用的少, beeline 用的多

## 更改 hive.log 存放路径

`cd /opt/module/hive-3.1.2/conf`

`mv hive-log4j2.properties.template hive-log4j2.properties`

`vim hive-log4j2.properties`

`property.hive.log.dir = ${sys:java.io.tmpdir}/${sys:user.name}` 改成 `property.hive.log.dir=/opt/module/hive-3.1.2/logs`

# hive 基本数据类型

TODO:

# Bug

## TIMESTAMP with implicit DEFAULT value is deprecated. Please use--explicit_defaults_for_timestamp server

报错: `[Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).`

解决:

在 `/opt/my.cnf` 的 `[mysqld]` section 中添加一行:

`explicit_defaults_for_timestamp = 1`

> NOTE: 记得用 `sudo vim /etc/my.cnf`

## ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock'

```sh
mysql -uroot -p
Enter password:
```

输入完临时密码后, 报错: `ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)`

解决:

```sh
sudo systemctl stop mysqld

su - root
root

cd /var/lib
ll
cd mysql
ll
rm -rf ./*
ll

su - atguigu

cd /opt/software/mysql-rpm/
```

之后就正常分步安装 rpm 包
