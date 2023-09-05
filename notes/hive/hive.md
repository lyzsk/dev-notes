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

# install

## install mysql

### Step1. 卸载 linux 自带的 mysql

1. 查是否自带 `rpm -qa | grep mysql` (CentOS6), `rpm -qa | grep mariadb` (CentOS7), 也可以组合一下: `rpm -qa | grep -i -E mysql\|mariadb` (正则中间不能有空格)

2. 卸载 `rpm -qa | grep -i -E mysql\|mariadb | xargs -n1 sudo rpm -e --nodeps` (只要 hadoop102 删就行, 因为就 102 要重装 mysql)

### Step2. 上传 tar 文件解压

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

### Step3

如果之前装过 mysql, 需要删除 `/etc/my.cnf` 文件中 datadir 指向的目录下的所有内容

`sudo rm -rf /var/lib/mysql`

### Step4. 初始化数据库

`sudo mysqld --initialize --user=mysql`

### Step5. 启动 mysql 服务

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

### Step6. 允许远程访问

`mysql -uroot -proot`

`show databases;`

`use mysql;`

`show tables;`

`desc user;`

`select host, user, authentication_string from user;`

`update user set host = '%' where user = 'root';`

`flush privileges;`

之后就可以用 dbeaver 这种的可视化界面远程访问 hadoop102 的 db 了

### Step7. 设置编码

`show variables like 'character%'`

TODO: 把 db 和 server 的编码从 latin1 改成 utf8

# Bug

##

报错: `[Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).`

解决:

在 `/opt/my.cnf` 的 `[mysqld]` section 中添加一行:

`explicit_defaults_for_timestamp = 1`

> NOTE: 记得用 `sudo vim /etc/my.cnf`

##

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
