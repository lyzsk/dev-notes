# Flume

Flume 是 Cloudera 提供的一个高可用的，高可靠的，分布式的海量日志采集、聚合和传输的系统。Flume 基于流式架构，灵活简单。

Flume 主要作用: 实时读取服务器本地磁盘的数据, 将数据写入 HDFS

SOURCE -> CHANNEL -> SINK

# Flume installation

hadoop102, `cd /opt/software`, 上传 `apache-flume-1.9.0-bin.tar.gz`

`tar -zxvf apache-flume-1.9.0-bin.tar.gz -C ../module/`

`cd /opt/module`

`mv apache-flume-1.9.0-bin/ flume-1.9.0`

`cd flume-1.9.0/`

`pwd`

`sudo vim /etc/profile.d/my_env.sh`

添加 flume 环境变量(因为要用到 `flume-1.9.0/bin` 里的脚本):

```sh
# flume
export FLUME_HOME=/opt/module/flume-1.9.0
export PATH=$PATH:$FLUME_HOME/bin
```

`:wq`

`source /etc/profile`

## 解决 flume 和 hadoop 的冲突

`cd /opt/module/flume-1.9.0/lib`

`ll | grep guava`

`rm -rf guava-11.0.2.jar`

虽然 flume 运行时会依赖 guava 包, 但是可以从 hadoop 里的 guava 包里找

证明: `cd /opt/module/hadoop-3.1.3/share/hadoop`, `find ./ -name guava*`, 发现 hadoop 里的 guava 包版本更高

> NOTE: Flume 暂时不需要分发给 hadoop103, 104, 因为将来计划是从 102 采集数据, 只要在 102 里安装就行

# 案例 1. 监听端口数据

目的: Client -> NetCat TCP Source -> memory Channel -> Logger Sink -> Server console

`cd /opt/module/flume-1.9.0/`

`mkdir jobs`, `cd jobs`

`vim netcat-flume-logger.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = netcat
a1.sources.r1.bind = localhost
a1.sources.r1.port = 6666

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = logger

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

> NOTE: `nc`, 如果返回值: `Ncat: You must specify a host to connect to. QUITTING.` 说明 `nc` 命令可以用
>
> 如果没有 `nc` 命令, 就`sudo yum install -y nc`

`nc` 可以实现服务端和客户端交互

一个 hadoop102 窗口: `nc -l localhost 6666` 作为监听客户端

另一个 hadoop102 窗口: `nc localhost 6666` 作为服务端

然后两个窗口就能通信了

## 启动 agent

`cd /opt/module/flume-1.9.0/jobs/`

`flume-ng agent --conf $FLUME_HOME/conf --conf-file $FLUME_HOME/jobs/netcat-flume-logger.conf --name a1 -Dflume.root.logger=INFO,console`

在另一个窗口: `nc localhost 6666`

Logger Sink 本质上是 log4j 的实现, 默认是打印到文件里, 如果想打印到控制台, 需要 `cd /opt/module/flume-1.9.0/conf`, `vim log4j.properties`

修改:

```sh
#flume.root.logger=DEBUG,console
flume.root.logger=INFO,LOGFILE
flume.log.dir=./logs
flume.log.file=flume.log
```

修改为:

```sh
#flume.root.logger=DEBUG,console
flume.root.logger=INFO,LOGFILE
flume.log.dir=/opt/module/flume-1.9.0/logs
flume.log.file=flume.log
```

然后 ctrl+c 停止之前的服务端和客户端, 再重启一遍

# 案例 2.1. 实时监控单个追加文件

Exec Source -> memory channel -> logger sink

`cd /opt/module/flume-1.9.0/jobs/`

创建一个文件用于监控: `touch tail.txt`

`vim exec-flume-logger.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = exec
a1.sources.r1.command = tail -f /opt/module/flume-1.9.0/jobs/tail.txt

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = logger

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

启动方法 1: `flume-ng agent --conf $FLUME_HOME/conf --conf-file $FLUME_HOME/jobs/exec-flume-logger.conf --name a1 -Dflume.root.logger=INFO,console`

启动方法 2(简化): `flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/exec-flume-logger.conf -n a1 -Dflume.root.logger=INFO,console`

然后在另一个窗口: `cd /opt/module/flume-1.9.0/jobs/`,

`echo a > tail.txt`

`echo b >> tail.txt`

`echo 1 >> tail.txt`

然后就能在服务端监听到

> NOTE: 只能用 `>>` 追加指令才能监听到, `>` 覆盖指令会误以为没变化不会在服务端打印 log

# 案例 2.2. 实时监控单个追加文件, 将监控到的内容上传到 HDFS 中

Exec Source -> memory Channel -> HDFS Sink

`cd /opt/module/flume-1.9.0/jobs`

`vim exec-flume-hdfs.conf`

```sh
# Name the components on this agent
a1.sources = r1
a1.sinks = k1
a1.channels = c1

# Describe/configure the source
a1.sources.r1.type = exec
a1.sources.r1.command = tail -f /opt/module/flume-1.9.0/jobs/tail.txt

# Describe the sink
a1.sinks.k1.type = hdfs
a1.sinks.k1.hdfs.path = hdfs://hadoop102:9820/flume/%Y%m%d/%H
#上传文件的前缀
a1.sinks.k1.hdfs.filePrefix = logs-
#是否按照时间滚动文件夹
a1.sinks.k1.hdfs.round = true
#多少时间单位创建一个新的文件夹
a1.sinks.k1.hdfs.roundValue = 1
#重新定义时间单位
a1.sinks.k1.hdfs.roundUnit = hour
#是否使用本地时间戳
a1.sinks.k1.hdfs.useLocalTimeStamp = true
#积攒多少个Event才flush到HDFS一次
a1.sinks.k1.hdfs.batchSize = 100
#设置文件类型，可支持压缩
a1.sinks.k1.hdfs.fileType = DataStream
#多久生成一个新的文件
a1.sinks.k1.hdfs.rollInterval = 60
#设置每个文件的滚动大小
a1.sinks.k1.hdfs.rollSize = 134217700
#文件的滚动与Event数量无关
a1.sinks.k1.hdfs.rollCount = 0

# Use a channel which buffers events in memory
a1.channels.c1.type = memory
a1.channels.c1.capacity = 1000
a1.channels.c1.transactionCapacity = 100

# Bind the source and sink to the channel
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

启动 hdfs: `my_cluster.sh start`

启动服务: `flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/exec-flume-hdfs.conf -n a1 -Dflume.root.logger=INFO,console`

`echo abc >> tail.txt`

> > Note: conf 配置里的 hdfs, 要和 linux hadoop `core-site.xml` 里的 `fs.defaultFS` 端口一致!!!

# 3. 实时监控目录下的多个新文件, 并将监控的数据上传到 HDFS 中

Spooling Directory Source -> memory Channel -> HDFS Sink

`cd /opt/module/flume-1.9.0/jobs/`

`mkdir spooling`

`vim spooling-flume-hdfs.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = spooldir
a1.sources.r1.spoolDir = /opt/module/flume-1.9.0/jobs/spooling
a1.sources.r1.fileSuffix = .COMPLETED
a1.sources.r1.ignorePattern = .*\.tmp


#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = hdfs
a1.sinks.k1.hdfs.path = hdfs://hadoop102:9820/flume/%Y%m%d/%H
#上传文件的前缀
a1.sinks.k1.hdfs.filePrefix = logs-
#是否按照时间滚动文件夹
a1.sinks.k1.hdfs.round = true
#多少时间单位创建一个新的文件夹
a1.sinks.k1.hdfs.roundValue = 1
#重新定义时间单位
a1.sinks.k1.hdfs.roundUnit = hour
#是否使用本地时间戳
a1.sinks.k1.hdfs.useLocalTimeStamp = true
#积攒多少个Event才flush到HDFS一次
a1.sinks.k1.hdfs.batchSize = 100
#设置文件类型，可支持压缩
a1.sinks.k1.hdfs.fileType = DataStream
#多久生成一个新的文件
a1.sinks.k1.hdfs.rollInterval = 60
#设置每个文件的滚动大小
a1.sinks.k1.hdfs.rollSize = 134217700
#文件的滚动与Event数量无关
a1.sinks.k1.hdfs.rollCount = 0

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

启动: `flume-ng agent -c  $FLUME_HOME/conf  -f  $FLUME_HOME/jobs/spooling-flume-hdfs.conf -n a1 -Dflume.root.logger=INFO,console`

`touch file1.txt`

`touch file2.txt`

`echo file1 > file1.txt`

`echo file2 > file2.txt`

`mv file1.txt spooling`

`mv file2.txt spooling`

`touch file3.tmp`

`echo file3 > file3.tmp`

`mv file3.tmp spooling`

# 案例 4. 实时监控目录下的多个追加文件, 并将监控的数据上传到 HDFS 中

Exec source 适用于监控一个实时追加的文件，不能实现断点续传；Spooldir Source 适合用于同步新文件，但不适合对实时追加日志的文件进行监听并同步；而 Taildir Source 适合用于监听多个实时追加的文件，并且能够实现断点续传

Taildir Source -> memory channel -> HDFS Sink

`cd /opt/module/flume-1.9.0/jobs/`

`mkdir taildir`

`cd taildir`

`touch file1.txt`

`touch file2.txt`

`touch log1.log`

`touch log2.log`

`cd ..`

`mkdir position`

`vim taildir-flume-hdfs.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = TAILDIR
a1.sources.r1.filegroups = f1 f2
a1.sources.r1.filegroups.f1 = /opt/module/flume-1.9.0/jobs/taildir/.*\.txt
a1.sources.r1.filegroups.f2 = /opt/module/flume-1.9.0/jobs/taildir/.*\.log
a1.sources.r1.positionFile = /opt/module/flume-1.9.0/jobs/position/position.json

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = hdfs
a1.sinks.k1.hdfs.path = hdfs://hadoop102:9820/flume/%Y%m%d/%H
#上传文件的前缀
a1.sinks.k1.hdfs.filePrefix = logs-
#是否按照时间滚动文件夹
a1.sinks.k1.hdfs.round = true
#多少时间单位创建一个新的文件夹
a1.sinks.k1.hdfs.roundValue = 1
#重新定义时间单位
a1.sinks.k1.hdfs.roundUnit = hour
#是否使用本地时间戳
a1.sinks.k1.hdfs.useLocalTimeStamp = true
#积攒多少个Event才flush到HDFS一次
a1.sinks.k1.hdfs.batchSize = 100
#设置文件类型，可支持压缩
a1.sinks.k1.hdfs.fileType = DataStream
#多久生成一个新的文件
a1.sinks.k1.hdfs.rollInterval = 60
#设置每个文件的滚动大小
a1.sinks.k1.hdfs.rollSize = 134217700
#文件的滚动与Event数量无关
a1.sinks.k1.hdfs.rollCount = 0

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

启动: `flume-ng agent -c  $FLUME_HOME/conf  -f  $FLUME_HOME/jobs/taildir-flume-hdfs.conf -n a1 -Dflume.root.logger=INFO,console`

`cd taildir`

`echo file1 > file1.txt`

`echo file2 > file2.txt`

`echo log1 > log1.log`

`echo log2 > log2.log`

手动关闭一次, 再启动

`echo file11 >> file1.txt`

`echo file22 >> file2.txt`

发现新的数据还是能采集

# Flume Transaction

Flume 事务: put 事务, take 事务

-   put 事务流程:

    -   doPut: 将批数据先写入临时缓冲区 putList

    -   doCommit: 检查 channel 内存队列是否足够合并

    -   doRollback: channel 内存队列空间不足, 回滚数据

-   take 事务流程:

    -   doTake: 将数据取到临时缓冲区 takeList, 并将数据发送到 HDFS

    -   doCommit:如果数据全部发送成功, 则清除临时缓冲区 takeList

    -   doRollback: 数据发送过程中如果出现异常, rollback 将临时缓冲区 takeList 中的数据归还给 channel 内存队列

> NOTE: Batch Size 指攒够多少一批放入 list 里
>
> Batch size <= Transaction size <= channel size

# 案例 1. 复制

-   案例需求

    使用 Flume-1 监控文件变动，Flume-1 将变动内容传递给 Flume-2，Flume-2 负责存储到 HDFS。同时 Flume-1 将变动内容传递给 Flume-3，Flume-3 负责输出到 Local FileSystem

Flume1: taildir source -> replicating channel selector -> 2x memory channel -> 2x avro sink

Flume2: avro source -> memory channel -> HDFS sink

Flume3: avro source -> memory channel -> File Roll sink

`cd /opt/module/flume-1.9.0/jobs`, `mkdir fileroll`

`mkdir replicating`, `cd replicating`

## flume1.conf

`vim flume1.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1 c2
a1.sinks = k1 k2

#Source
a1.sources.r1.type = TAILDIR
a1.sources.r1.filegroups = f1
a1.sources.r1.filegroups.f1 = /opt/module/flume-1.9.0/jobs/taildir/.*\.txt
a1.sources.r1.positionFile = /opt/module/flume-1.9.0/jobs/position/position.json

#channel selector
a1.sources.r1.selector.type = replicating

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

a1.channels.c2.type = memory
a1.channels.c2.capacity = 10000
a1.channels.c2.transactionCapacity = 100

#Sink
a1.sinks.k1.type = avro
a1.sinks.k1.hostname = localhost
a1.sinks.k1.port = 7777

a1.sinks.k2.type = avro
a1.sinks.k2.hostname = localhost
a1.sinks.k2.port = 8888


#Bind
a1.sources.r1.channels = c1 c2
a1.sinks.k1.channel = c1
a1.sinks.k2.channel = c2
```

## flume2.conf

`vim flume2.conf`

```sh
#Named
a2.sources = r1
a2.channels = c1
a2.sinks = k1

#Source
a2.sources.r1.type = avro
a2.sources.r1.bind = localhost
a2.sources.r1.port = 7777

#Channel
a2.channels.c1.type = memory
a2.channels.c1.capacity = 10000
a2.channels.c1.transactionCapacity = 100

#Sink
a2.sinks.k1.type = hdfs
a2.sinks.k1.hdfs.path = hdfs://hadoop102:9820/flume/%Y%m%d/%H
a2.sinks.k1.hdfs.filePrefix = logs-
a2.sinks.k1.hdfs.round = true
a2.sinks.k1.hdfs.roundValue = 1
a2.sinks.k1.hdfs.roundUnit = hour
a2.sinks.k1.hdfs.useLocalTimeStamp = true
a2.sinks.k1.hdfs.batchSize = 100
a2.sinks.k1.hdfs.fileType = DataStream
a2.sinks.k1.hdfs.rollInterval = 60
a2.sinks.k1.hdfs.rollSize = 134217700
a2.sinks.k1.hdfs.rollCount = 0

#Bind
a2.sources.r1.channels = c1
a2.sinks.k1.channel = c1
```

## flume3.conf

`vim flume3.conf`

```sh
#Named
a3.sources = r1
a3.channels = c1
a3.sinks = k1

#Source
a3.sources.r1.type = avro
a3.sources.r1.bind = localhost
a3.sources.r1.port = 8888

#Channel
a3.channels.c1.type = memory
a3.channels.c1.capacity = 10000
a3.channels.c1.transactionCapacity = 100

#Sink
a3.sinks.k1.type = file_roll
a3.sinks.k1.sink.directory = /opt/module/flume-1.9.0/jobs/fileroll

#Bind
a3.sources.r1.channels = c1
a3.sinks.k1.channel = c1
```

启动:(创建三个窗口, flume1, flume2, flume3 分别启动, 方便看)

```sh
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/replicating/flume3.conf -n a3 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/replicating/flume2.conf -n a2 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/replicating/flume1.conf -n a1 -Dflume.root.logger=INFO,console
```

测试:

`cd /opt/module/flume-1.9.0/jobs/taildir`

`echo abcdefg >> file1.txt`

`echo 123456 >> file2.txt`

可以看到已经在给 HDFS 传数据了

`cd /opt/module/flume-1.9.0/jobs/fileroll`

`ll` 发现, 每隔 30s 都生成一个新文件, 不管有没有新数据

但是 `cat` 最大的那个文件, 可以看到也记录了改变的数据

然后就完成了, 可以 ctrl + c 停下来 flume123 了

# 案例 2.1 负载均衡

-   案例需求

    Flume1 监控端口数据, 将监控到的内容通过轮询或者随机的方式发送到 Flume2 和 Flume3, Flume2 和 Flume3 将内容打印到控制台

Flume1: netcat source -> replicating channel selector -> memory channel -> LoadBalancing sinkProcessor -> 2x avro sink

Flume2: avro source -> memory channel -> logger sink

Flume3: avro source -> memory channel -> logger sink

`cd /opt/module/flume-1.9.0/jobs`

`mkdir loadbalancing`, `cd loadbalancing`

## flume1.conf

`vim flume1.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1 k2

#Source
a1.sources.r1.type = netcat
a1.sources.r1.bind = localhost
a1.sources.r1.port = 6666

#channel selector
a1.sources.r1.selector.type = replicating

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = avro
a1.sinks.k1.hostname = localhost
a1.sinks.k1.port = 7777

a1.sinks.k2.type = avro
a1.sinks.k2.hostname = localhost
a1.sinks.k2.port = 8888

#Sink processor
a1.sinkgroups = g1
a1.sinkgroups.g1.sinks = k1 k2
a1.sinkgroups.g1.processor.type = load_balance
a1.sinkgroups.g1.processor.selector = random


#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
a1.sinks.k2.channel = c1
```

## flume2.conf

`vim flume2.conf`

```sh
a2.sources = r1
a2.channels = c1
a2.sinks = k1

#Source
a2.sources.r1.type = avro
a2.sources.r1.bind = localhost
a2.sources.r1.port = 7777

#Channel
a2.channels.c1.type = memory
a2.channels.c1.capacity = 10000
a2.channels.c1.transactionCapacity = 100

#Sink
a2.sinks.k1.type = logger

#Bind
a2.sources.r1.channels = c1
a2.sinks.k1.channel = c1
```

## flume3.conf

`vim flume3.conf`

```sh
#Named
a3.sources = r1
a3.channels = c1
a3.sinks = k1

#Source
a3.sources.r1.type = avro
a3.sources.r1.bind = localhost
a3.sources.r1.port = 8888

#Channel
a3.channels.c1.type = memory
a3.channels.c1.capacity = 10000
a3.channels.c1.transactionCapacity = 100

#Sink
a3.sinks.k1.type = logger

#Bind
a3.sources.r1.channels = c1
a3.sinks.k1.channel = c1
```

创三个窗口分别启动:

```sh
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/loadbalancing/flume3.conf -n a3 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/loadbalancing/flume2.conf -n a2 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/loadbalancing/flume1.conf -n a1 -Dflume.root.logger=INFO,console
```

测试:

在 hadoop102 窗口 `nc localhost 6666`

```sh
随便输东西...
```

> NOTE: 自己测试是测不出来轮询的效果的, 因为从 Flume 底层来说不可能一个一个 event 发送数据

# 案例 2.2 故障转移

-   案例需求

    Flume1 监控端口数据, 将监控到的内容发送给 Active 的 Sink, Flume2 和 Flume3 将内容打印到控制台

Flume1: netcat source -> replicating channel selector -> memory channel -> Failover sinkProcessor -> 2x avro sink

Flume2: avro source -> memory channel -> logger sink

Flume3: avro source -> memory channel -> logger sink

`cd /opt/module/flume-1.9.0/jobs`

hadoop 争抢机制, zookeeper 选举机制, 这里不是争抢就是选举, Flume failover 就是通过 priority 来选举

`mkdir failover`, `cd failover`

## flume1.conf

`vim flume1.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1 k2

#Source
a1.sources.r1.type = netcat
a1.sources.r1.bind = localhost
a1.sources.r1.port = 6666

#channel selector
a1.sources.r1.selector.type = replicating

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = avro
a1.sinks.k1.hostname = localhost
a1.sinks.k1.port = 7777

a1.sinks.k2.type = avro
a1.sinks.k2.hostname = localhost
a1.sinks.k2.port = 8888

#Sink processor
a1.sinkgroups = g1
a1.sinkgroups.g1.sinks = k1 k2
a1.sinkgroups.g1.processor.type = failover
a1.sinkgroups.g1.processor.priority.k1 = 5
a1.sinkgroups.g1.processor.priority.k2 = 10


#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
a1.sinks.k2.channel = c1
```

## flume2.conf

`vim flume2.conf`

```sh
a2.sources = r1
a2.channels = c1
a2.sinks = k1

#Source
a2.sources.r1.type = avro
a2.sources.r1.bind = localhost
a2.sources.r1.port = 7777

#Channel
a2.channels.c1.type = memory
a2.channels.c1.capacity = 10000
a2.channels.c1.transactionCapacity = 100

#Sink
a2.sinks.k1.type = logger

#Bind
a2.sources.r1.channels = c1
a2.sinks.k1.channel = c1
```

## flume3.conf

`vim flume3.conf`

```sh
#Named
a3.sources = r1
a3.channels = c1
a3.sinks = k1

#Source
a3.sources.r1.type = avro
a3.sources.r1.bind = localhost
a3.sources.r1.port = 8888

#Channel
a3.channels.c1.type = memory
a3.channels.c1.capacity = 10000
a3.channels.c1.transactionCapacity = 100

#Sink
a3.sinks.k1.type = logger

#Bind
a3.sources.r1.channels = c1
a3.sinks.k1.channel = c1
```

启动:

```sh
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/failover/flume3.conf -n a3 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/failover/flume2.conf -n a2 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/failover/flume1.conf -n a1 -Dflume.root.logger=INFO,console
```

测试:

`nc localhost 6666`

```sh
随便输入内容...
```

发现一直在给 priority 最高的 flume3, 然后在 flume3 ctrl+c, 发现给 flume2 了, 然后再连回 flume3, 发现重新发给 flume3 了

# 案例 3. 聚合

-   案例需求：

    Flume1(hadoop102) 监控文件内容, Flume2(hadoop103) 监控端口数据, Flume1 和 Flume2 将监控到的数据发往 Flume3, Flume3(hadoop104) 将内容打印到控制台

可以每个 Flume 都往 HDFS 里写, 但是这样对 HDFS 写压力太大, 可以聚合在一个 Flume 里写操作, 减少并发写操作

Flume1: taildir source -> memory channel -> avro sink

Flume2: netcat source -> memory channel -> avro sink

Flume3: avro source -> memory channel -> logger sink

`cd /opt/module/flume-1.9.0/jobs`

`mkdir aggre`, `cd aggre`

## flume1.conf

`vim flume1.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = TAILDIR
a1.sources.r1.filegroups = f1
a1.sources.r1.filegroups.f1 = /opt/module/flume-1.9.0/jobs/taildir/.*\.txt
a1.sources.r1.positionFile = /opt/module/flume-1.9.0/jobs/position/position.json

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = avro
a1.sinks.k1.hostname = hadoop104
a1.sinks.k1.port = 8888

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

## flume2.conf

`vim flume2.conf`

```sh
#Named
a2.sources = r1
a2.channels = c1
a2.sinks = k1

#Source
a2.sources.r1.type = netcat
a2.sources.r1.bind = localhost
a2.sources.r1.port = 6666

#Channel
a2.channels.c1.type = memory
a2.channels.c1.capacity = 10000
a2.channels.c1.transactionCapacity = 100

#Sink
a2.sinks.k1.type = avro
a2.sinks.k1.hostname = hadoop104
a2.sinks.k1.port = 8888

#Bind
a2.sources.r1.channels = c1
a2.sinks.k1.channel = c1
```

## flume3.conf

`vim flume3.conf`

```sh
#Named
a3.sources = r1
a3.channels = c1
a3.sinks = k1

#Source
a3.sources.r1.type = avro
a3.sources.r1.bind = hadoop104
a3.sources.r1.port = 8888

#Channel
a3.channels.c1.type = memory
a3.channels.c1.capacity = 10000
a3.channels.c1.transactionCapacity = 100

#Sink
a3.sinks.k1.type = logger

#Bind
a3.sources.r1.channels = c1
a3.sinks.k1.channel = c1
```

启动:

先把 flume 发给 hadoop103, 104, `cd /opt/module`, `my_rsync.sh flume-1.9.0/`

因为会用到环境变量, 把环境变量也发给 103, 104 `cd /etc/profile.d`,

`scp -r /etc/profile.d/my_env.sh root@hadoop103:/etc/profile.d/`, `root`

`scp -r /etc/profile.d/my_env.sh root@hadoop104:/etc/profile.d/`, `root`

然后 103, 104 `source /etc/profile`

```sh
# hadoop104
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/aggre/flume3.conf -n a3 -Dflume.root.logger=INFO,console

# hadoop103
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/aggre/flume2.conf -n a2 -Dflume.root.logger=INFO,console

# hadoop102
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/aggre/flume1.conf -n a1 -Dflume.root.logger=INFO,console
```

测试:

再打开一个 102 窗口测试, `cd /opt/module/flume-1.9.0/jobs/taildir`

`echo atguigu >> file1.txt`

`echo shangguigu >> file2.txt`

在 104 能正确收到数据变化

再打开一个 103 窗口测试: `nc localhost 6666`

```sh
随便输点内容....
```

在 104 能正确收到数据变化

# 案例 4. 多路, 自定义 Interceptor

@see java-demos/0001-flume

编码完, maven - package, 然后在 target 里把 `0001-flume-1.0-SNAPSHOT.jar` 放到 hadoop102 里, `cd /opt/module/flume-1.9.0/lib/`

Flume1 监控端口的数据, 将监控到的数据发给 Flume2, Flume3, Flume4, 包含 "atguigu" 的数据发给 Flume2, 包含 "shangguigu" 的发给 Flume3, 其他数据发给 Flume4

Flume1: netcat source -> Interceptor -> multiplexing channel selector -> 3x memory channel -> 3x avro sink

Flume2: avro source -> memory channel -> logger sink

Flume3: avro source -> memory channel -> logger sink

Flume4: avro source -> memory channel -> logger sink

`cd /opt/module/flume-1.9.0/jobs`

`mkdir multi`, `cd multi`

## flume1.conf

`vim flume1.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1 c2 c3
a1.sinks = k1 k2 k3

#Source
a1.sources.r1.type = netcat
a1.sources.r1.bind = localhost
a1.sources.r1.port = 5555

#channel selector
a1.sources.r1.selector.type = multiplexing
a1.sources.r1.selector.header = title
a1.sources.r1.selector.mapping.at = c1
a1.sources.r1.selector.mapping.st = c2
a1.sources.r1.selector.default = c3

# Interceptor

a1.sources.r1.interceptors = i1
a1.sources.r1.interceptors.i1.type = cn.sichu.flume.interceptor.EventHeaderInterceptor$MyBuilder

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

a1.channels.c2.type = memory
a1.channels.c2.capacity = 10000
a1.channels.c2.transactionCapacity = 100

a1.channels.c3.type = memory
a1.channels.c3.capacity = 10000
a1.channels.c3.transactionCapacity = 100

#Sink
a1.sinks.k1.type = avro
a1.sinks.k1.hostname = localhost
a1.sinks.k1.port = 6666

a1.sinks.k2.type = avro
a1.sinks.k2.hostname = localhost
a1.sinks.k2.port = 7777

a1.sinks.k3.type = avro
a1.sinks.k3.hostname = localhost
a1.sinks.k3.port = 8888

#Bind
a1.sources.r1.channels = c1 c2 c3
a1.sinks.k1.channel = c1
a1.sinks.k2.channel = c2
a1.sinks.k3.channel = c3
```

## flume2.conf

`vim flume2.conf`

```sh
#Named
a2.sources = r1
a2.channels = c1
a2.sinks = k1

#Source
a2.sources.r1.type = avro
a2.sources.r1.bind = localhost
a2.sources.r1.port = 6666

#Channel
a2.channels.c1.type = memory
a2.channels.c1.capacity = 10000
a2.channels.c1.transactionCapacity = 100

#Sink
a2.sinks.k1.type = logger

#Bind
a2.sources.r1.channels = c1
a2.sinks.k1.channel = c1
```

## flume3.conf

`vim flume3.conf`

```sh
#Named
a3.sources = r1
a3.channels = c1
a3.sinks = k1

#Source
a3.sources.r1.type = avro
a3.sources.r1.bind = localhost
a3.sources.r1.port = 7777

#Channel
a3.channels.c1.type = memory
a3.channels.c1.capacity = 10000
a3.channels.c1.transactionCapacity = 100

#Sink
a3.sinks.k1.type = logger

#Bind
a3.sources.r1.channels = c1
a3.sinks.k1.channel = c1
```

## flume4.conf

`vim flume4.conf`

```sh
#Named
a4.sources = r1
a4.channels = c1
a4.sinks = k1

#Source
a4.sources.r1.type = avro
a4.sources.r1.bind = localhost
a4.sources.r1.port = 8888

#Channel
a4.channels.c1.type = memory
a4.channels.c1.capacity = 10000
a4.channels.c1.transactionCapacity = 100

#Sink
a4.sinks.k1.type = logger

#Bind
a4.sources.r1.channels = c1
a4.sinks.k1.channel = c1
```

启动: 都在 hadoop102 启动, 新建 4 个窗口方便

```sh
flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/multi/flume4.conf -n a4 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/multi/flume3.conf -n a3 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/multi/flume2.conf -n a2 -Dflume.root.logger=INFO,console

flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/multi/flume1.conf -n a1 -Dflume.root.logger=INFO,console
```

`nc localhost 5555`

`atguigu111` 应该给 flume2

`shanguigu111` 应该给 flume3

`hello` 应该给 flume4

`atguigu111shangguigu111` 应该给 flume2, 因为先判断的 `at`

# 自定义 Source

@see java-demos/0001-flume

点进 interface Source, ctrl + h 可以看到有两种 Source: 1. PollableSource, 2. EventDrivenSource

写完之后 maven - package, `cd /opt/module/flume-1.9.0/lib`, `rm -rf 0001-flume-1.0-SNAPSHOT.jar`, 然后再把新的 `0001-flume-1.0-SNAPSHOT.jar` 传回来

## mysource-flume-logger.conf

`cd /opt/module/flume-1.9.0/jobs`

`vim mysource-flume-logger.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = cn.sichu.flume.source.MySource
a1.sources.r1.prefix = log--

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = logger

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

启动: `flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/mysource-flume-logger.conf -n a1 -Dflume.root.logger=INFO,console`

就可以看到一直循环调用生成带 header 的 uuid(uuid 没显示全, 需要自定义 sink)

# 自定义 Sink

@see java-demos/0001-flume

maven - package, `cd /opt/module/flume-1.9.0/lib`, `rm -rf 0001-flume-1.0-SNAPSHOT.jar`, 然后再把新的 `0001-flume-1.0-SNAPSHOT.jar` 传回来

`cd /opt/module/flume-1.9.0/jobs`

## mysource-flume-mysink.conf

`vim mysource-flume-mysink.conf`

```sh
#Named
a1.sources = r1
a1.channels = c1
a1.sinks = k1

#Source
a1.sources.r1.type = cn.sichu.flume.source.MySource
a1.sources.r1.prefix = log--

#Channel
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000
a1.channels.c1.transactionCapacity = 100

#Sink
a1.sinks.k1.type = cn.sichu.flume.sink.MySink

#Bind
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
```

启动: `flume-ng agent -c $FLUME_HOME/conf -f $FLUME_HOME/jobs/mysource-flume-mysink.conf -n a1 -Dflume.root.logger=INFO,console`
