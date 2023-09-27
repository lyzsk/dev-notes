# HBase Intro

## Definition

HBase 是一种分布式、可扩展、支持海量数据存储的 NoSQL 数据库 (Not Only SQL)

> NOTE: 读的时候快, 因为基于内存

## Data model

逻辑上，HBase 的数据模型同关系型数据库很类似，数据存储在一张表中，有行有列。但从 HBase 的底层物理存储结构（K-V）来看，HBase 更像是一个 multi-dimensional map

> NOTE: HDFS 仅支持追加写, 不支持随机写

1. Name Space

命名空间，类似于关系型数据库的 database 概念，每个命名空间下有多个表。HBase 有两个自带的命名空间，分别是 hbase 和 default，hbase 中存放的是 HBase 内置的表，default 表是用户默认使用的命名空间

2. Table

类似于关系型数据库的表概念。不同的是，HBase 定义表时只需要声明列族即可，不需要声明具体的列。这意味着，往 HBase 写入数据时，字段可以动态、按需指定。因此，和关系型数据库相比，HBase 能够轻松应对字段变更的场景

3. Row

HBase 表中的每行数据都由一个 RowKey 和多个 Column（列）组成，数据是按照 RowKey 的字典顺序存储的，并且查询数据时只能根据 RowKey 进行检索，所以 RowKey 的设计十分重要

4. Column

HBase 中的每个列都由 Column Family(列族)和 Column Qualifier（列限定符）进行限定，例如 info：name，info：age。建表时，只需指明列族，而列限定符无需预先定义

5. Time Stamp

用于标识数据的不同版本（version），每条数据写入时，系统会自动为其加上该字段，其值为写入 HBase 的时间

6. Cell

由 {rowkey, column Family：column Qualifier, time Stamp} 唯一确定的单元。cell 中的数据全部是字节码形式存贮

## basic architecture

1. Region Server

Region Server 为 Region 的管理者，其实现类为 HRegionServer，主要作用如下:

对于数据的操作：get, put, delete

对于 Region 的操作：splitRegion、compactRegion

2. Master

Master 是所有 Region Server 的管理者，其实现类为 HMaster，主要作用如下：

对于表的操作：create, delete, alter

对于 RegionServer 的操作：分配 regions 到每个 RegionServer，监控每个 RegionServer 的状态，负载均衡和故障转移

3. Zookeeper

HBase 通过 Zookeeper 来做 master 的高可用、RegionServer 的监控、元数据的入口以及集群配置的维护等工作

4. HDFS

HDFS 为 Hbase 提供最终的底层数据存储服务，同时为 HBase 提供高可用的支持

# Installation

hadoop102, `cd /opt/software/`, 上传 `hbase-2.0.5-bin.tar.gz`

`tar -zxvf hbase-2.0.5-bin.tar.gz -C /opt/module/`

`cd /opt/module/hbase-2.0.5/`

`pwd`, 复制全路径

`sudo vim /etc/profile.d/my_env.sh`

```sh
#hbase
export HBASE_HOME=/opt/module/hbase-2.0.5
export PATH=$PATH:$HBASE_HOME/bin
```

`source /etc/profile`

改配置文件:

`cd /opt/module/hbase-2.0.5/conf/`

`vim hbase-env.sh`

打开注释并修改:

```sh
# Tell HBase whether it should manage it's own instance of ZooKeeper or not.
export HBASE_MANAGES_ZK=false
```

`vim hbase-site.xml`

```xml
<configuration>
    <property>
        <name>hbase.rootdir</name>
        <value>hdfs://hadoop102:9820/hbase</value>
    </property>

    <property>
        <name>hbase.cluster.distributed</name>
        <value>true</value>
    </property>

    <property>
        <name>hbase.zookeeper.quorum</name>
        <value>hadoop102,hadoop103,hadoop104</value>
    </property>
</configuration>
```

> NOTE: hbase rootdir 端口应该和 HDFS 端口一致!!!

`vim regionservers`

```sh
hadoop102
hadoop103
hadoop104
```

然后分发 HBase 给其他集群:

`cd /opt/module/`

`my_rsync.sh hbase-2.0.5/`

然后把环境变量也发了:

`scp /etc/profile.d/my_env.sh root@hadoop103:/etc/profile.d/`

`scp /etc/profile.d/my_env.sh root@hadoop104:/etc/profile.d/`

然后在 103, 104 `source /etc/profile`

# start

启动 HBase 前需要启动 HDFS, ZK

`cd /opt/module/hbase-2.0.5/bin/`

`start-hbase.sh`

发现 sl4j 和 hadoop 的冲突

`stop-hbase.sh`

`cd /opt/module/hbase-2.0.5/lib/`

`rm -rf /opt/module/hbase-2.0.5/lib/slf4j-log4j12-1.7.25.jar`

`ssh hadoop103 rm -rf /opt/module/hbase-2.0.5/lib/slf4j-log4j12-1.7.25.jar`

`ssh hadoop104 rm -rf /opt/module/hbase-2.0.5/lib/slf4j-log4j12-1.7.25.jar`

然后重新启动 hbase `start-hbase.sh`

然后可以通过默认 web 端口访问: `http://hadoop102:16010/`

# High availability

在 hadoop102 是 HMaster 的情况下, 在 hadoop103 单点启动: `hbase-daemon.sh start master`

然后 103 就自动成为了 backup master

然后在 102 `kill -9 HMaster_process_number`, 然后在 103web 端刷新, 就从 backup 变成正常的 master 了

此时再单点启动 102: `hbase-daemon.sh start master`, 102 就变成 backup master 了

但是这样手动高可用太麻烦了, 有简便方法:

在 102 `cd /opt/module/hbase-2.0.5/conf`, `vim backup-masters`

```sh
hadoop103
```

:wq

然后分发到 103, 104, `my_rsync.sh backup-masters`

然后重新启动 hbase, 就是把 103 当默认的 backup master 了 (在 master 的集群输入 `stop-hbase.sh`, 然后再在 102 重启: `start-hbase.sh`)

# HBase Shell

## DDL

`hbase shell` 进入命令行

```sh
help

list_namespace

help 'create_namespace'

create_namespace 'mydb'

list_namespace

create_namespace 'mydb1', {'createtime'=>'2023-09-26'}

describe_namespace 'mydb1'

help 'alter_namespace'

alter_namespace 'mydb1', {METHOD => 'set', 'createtime' => '2022-09-14', 'author' => 'sichu'}

describe_namespace 'mydb1'

alter_namespace 'mydb1', {METHOD => 'unset', NAME => 'createtime'}

describe_namespace 'mydb1'

drop_namespace 'mydb1'

list_namespace
```

> Note: 如果当前 namespace 里有 table, 无法 drop

```sh
create 'mydb:mytbl', 'info'

list_namespace_tables 'mydb'

drop_namespace 'mydb'

ERROR: org.apache.hadoop.hbase.constraint.ConstraintException: Only empty namespaces can be removed. Namespace mydb has 1 tables
	at org.apache.hadoop.hbase.master.procedure.DeleteNamespaceProcedure.prepareDelete(DeleteNamespaceProcedure.java:217)
	at org.apache.hadoop.hbase.master.procedure.DeleteNamespaceProcedure.executeFromState(DeleteNamespaceProcedure.java:78)
	at org.apache.hadoop.hbase.master.procedure.DeleteNamespaceProcedure.executeFromState(DeleteNamespaceProcedure.java:45)
	at org.apache.hadoop.hbase.procedure2.StateMachineProcedure.execute(StateMachineProcedure.java:184)
	at org.apache.hadoop.hbase.procedure2.Procedure.doExecute(Procedure.java:966)
	at org.apache.hadoop.hbase.procedure2.ProcedureExecutor.execProcedure(ProcedureExecutor.java:1723)
	at org.apache.hadoop.hbase.procedure2.ProcedureExecutor.executeProcedure(ProcedureExecutor.java:1462)
	at org.apache.hadoop.hbase.procedure2.ProcedureExecutor.access$1200(ProcedureExecutor.java:78)
	at org.apache.hadoop.hbase.procedure2.ProcedureExecutor$WorkerThread.run(ProcedureExecutor.java:2039)

Drop the named namespace. The namespace must be empty.

Took 0.6770 seconds
```

创建表相关:

```sh
create 'mydb:test1', {NAME => 'f1'}

list_namespace_tables 'mydb'

list

create 'test2', {NAME => 'f1'}

list

create 'mydb:test3', 'f1'

list

create 'mydb:test4', {NAME => 'f1', NAME => 'f2'}

create 'mydb:test5', 'f1', 'f2'

describe 'mydb:test1'
```

alter 相关:

```sh
desc 'mydb:test1'

alter 'mydb:test1', NAME=>'f1', VERSIONS=>'3'

desc 'mydb:test1'

desc 'mydb:test4'

alter 'mydb:test4', {NAME=>'f1', VERSIONS=>'5'}, {NAME=>'f2', VERSIONS=>'6'}

desc 'mydb:test4'

alter 'mydb:test4', NAME=>'f3', VERSIONS=>'2'

desc 'mydb:test4'

alter 'mydb:test4', 'delete'=>'f1'

desc 'mydb:test4'
```

## DML

在 HBase 中, 列族越少越好

在 put 的时候, 先指定 rowkey, 再指定 column, 指定 `列族:col`, 最后指定 value

一定要指定 rowkey, 因为 HBase 只支持 K-V 查询

```sh
create 'stu', 'info'

put 'stu', '1001', 'info:name', 'zhangsan'

get 'stu', '1001'

put 'stu', '1001', 'info:sex', 'man'
put 'stu', '1001', 'info:address', 'beijing'

get 'stu', '1001'

put 'stu', '1002', 'info:name', 'lisi'
put 'stu', '1002', 'info:sex', 'female'
put 'stu', '1002', 'info:address', 'shanghai'
put 'stu', '1003', 'info:name', 'wangwu'
put 'stu', '1003', 'info:sex', 'man'
put 'stu', '1003', 'info:address', 'shenzhen'

put 'stu', '1004', 'info:name', 'zhaoliu'
put 'stu', '1004', 'info:sex', 'female'
put 'stu', '1004', 'info:address', 'guangzhou'
put 'stu', '1004', 'info:age', '30'
```

> Note: 列数可以不一样, 底层是 K-V 结构

```sh
get 'stu', '1004', 'info:name', 'info:age'

scan 'stu'

scan 'stu', {STARTROW=>'1001', STOPROW=>'1004'}

put 'stu', '10031', 'info:name', 'zhaoliuu'
put 'stu', '10031', 'info:sex', 'female'
put 'stu', '10031', 'info:address', 'tianjing'

scan 'stu'

scan 'stu', {STARTROW=>'1001', STOPROW=>'10031'}

put 'stu', '10030', 'info:name', 'tianqi'
put 'stu', '10030', 'info:sex', 'female'
put 'stu', '10030', 'info:address', 'hebei'

scan 'stu', {STARTROW=>'1001', STOPROW=>'10030'}

put 'stu', '1003$', 'info:name', 'xiaoba'
put 'stu', '1003$', 'info:sex', 'female'
put 'stu', '1003$', 'info:address', 'chengdu'
```

> Note: 字典序是按 ASCII 码数字的, `$` 比 `0` 小, 空格 32, `!` 33, 最大临界 126 `~`

```sh
scan 'stu', {STARTROW=>'1001', STOPROW=>'1003!'}
```

修改操作:

```sh
put 'stu', '1001', 'info:name', 'zhangxiaosan'

scan 'stu'
```

这样操作, 实际上并不是修改数据, 而是加了一条新数据

```sh
scan 'stu', {RAW=>true, VERSIONS=>5}
```

`desc namespace:table` 时的 VERSIONS, 就是默认保留几个版本的数据

```sh
delete 'stu', '1001', 'info:name'

scan 'stu'

delete 'stu', '1001', 'info:name', 1695733382346

scan 'stu', {RAW=>true, VERSIONS=>5}

put 'stu', '1002', 'info:name', 'lixiaosi'

scan 'stu', {RAW=>true, VERSIONS=>5}

deleteall 'stu', '1002', 'info:name'

scan 'stu'

scan 'stu', {RAW=>true, VERSIONS=>5}

deleteall 'stu', '1003', 'info'

scan 'stu'

scan 'stu', {RAW=>true, VERSIONS=>5}

deleteall 'stu', '1004'

scan 'stu'

scan 'stu', {RAW=>true, VERSIONS=>5}
```

# Region Server 架构

每个 Region 可以有多个 Store

每个 Store 对应一个列族, 包含 MemStore 和 StoreFile

## StoreFile

StoreFile 保存实际数据的物理文件，StoreFile 以 Hfile 的形式存储在 HDFS 上。每个 Store 会有一个或多个 StoreFile（HFile），数据在每个 StoreFile 中都是有序的

## MemStore

MemStore 是写缓存, 由于 HFile 中的数据要求是有序的，所以数据是先存储在 MemStore 中，排好序后，等到达刷写时机才会刷写到 HFile，每次刷写都会形成一个新的 HFile, 至于什么时候数据真正的写盘, 涉及到 HDFS 刷写机制

## WAL

因为数据先写入内存, 再在未来合适的时间写入磁盘, 这样涉及安全性可靠性问题 (断电, 机器损坏导致的数据丢失), 所以有 WAL(Write-Ahead logfile), 加强数据安全性, 类似 NameNode 元数据镜像文件记录操作, WAL 会记录所有写操作, 如果内存里数据丢了就会重复一遍写操作, 所以所有 Region 共享 WAL 文件

WAL 存储在 HDFS 里 (HDFS 自带副本机制)

## BlockCache

BlockCache, 读缓存，每次查询出的数据会缓存在 BlockCache 中，方便下次查询

Block 是 HFile 里的 Block, 每个 Block 64K

用的是 LRU 缓存

# Bug

## regionserver running as process 3138. Stop it first.

报错:

```bash
[atguigu@hadoop102 lib]$ start-hbase.sh
running master, logging to /opt/module/hbase-2.0.5/logs/hbase-atguigu-master-hadoop102.out
hadoop104: regionserver running as process 3138. Stop it first.
hadoop103: regionserver running as process 3495. Stop it first.
hadoop102: regionserver running as process 3412. Stop it first.
```

进程冲突, 可以用 ps 查看, 确实有进程

```bash
kill -9 3412
ssh hadoop103 kill -9 3495
ssh hadoop104 kill -9 3138
```
