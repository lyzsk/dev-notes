# Kafka

Kafka 是一个分布式的基于发布/订阅模式 (distributed publish-subscribe messaging system) 的消息队列（Message Queue），主要应用于大数据实时处理领域

# Pros for using Message Queue

1. 解耦

    允许你独立的扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束

2. 可恢复性

    系统的一部分组件失效时，不会影响到整个系统。消息队列降低了进程间的耦合度，所以即使一个处理消息的进程挂掉，加入队列中的消息仍然可以在系统恢复后被处理

3. 缓冲

    有助于控制和优化数据流经过系统的速度，解决生产消息和消费消息的处理速度不一致的情况

4. 灵活性 & 峰值处理能力

    在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常见。如果为以能处理这类峰值访问为标准来投入资源随时待命无疑是巨大的浪费。使用消息队列能够使关键组件顶住突发的访问压力，而不会因为突发的超负荷的请求而完全崩溃

5. 异步通信

    很多时候，用户不想也不需要立即处理消息。消息队列提供了异步处理机制，允许用户把一个消息放入队列，但并不立即处理它。想向队列中放入多少消息就放多少，然后在需要的时候再去处理它们

# MQ 2 modes

1. 点对点模式（一对一，消费者主动拉取数据，消息收到后消息清除）

2. 发布/订阅模式（一对多，消费者消费数据之后不会清除消息）

    producer -> (publish) -> Topics -> (subscribe) -> consumers

> NOTE: Kafka 用的是 拉取 的方式把 Topics 里的内容传输给 Consumers (如果用推送, 就只能根据 consumer 最低承载力推送, 对资源会有浪费)

# Kafka 基础架构

1）Producer ：消息生产者，就是向 kafka broker 发消息的客户端；

2）Consumer ：消息消费者，向 kafka broker 取消息的客户端；

3）Consumer Group （CG）：消费者组，由多个 consumer 组成。消费者组内每个消费者负责消费不同分区的数据，一个分区只能由一个组内消费者消费；消费者组之间互不影响。所有的消费者都属于某个消费者组，即消费者组是逻辑上的一个订阅者。

4）Broker ：一台 kafka 服务器就是一个 broker。一个集群由多个 broker 组成。一个 broker 可以容纳多个 topic。

5）Topic ：可以理解为一个队列，生产者和消费者面向的都是一个 topic；

6）Partition：为了实现扩展性，一个非常大的 topic 可以分布到多个 broker（即服务器）上，一个 topic 可以分为多个 partition，每个 partition 是一个有序的队列；

7）Replica：副本，为保证集群中的某个节点发生故障时，该节点上的 partition 数据不丢失，且 kafka 仍然能够继续工作，kafka 提供了副本机制，一个 topic 的每个分区都有若干个副本，一个 leader 和若干个 follower。

8）leader：每个分区多个副本的“主”，生产者发送数据的对象，以及消费者消费数据的对象都是 leader。

9）follower：每个分区多个副本中的“从”，实时从 leader 中同步数据，保持和 leader 数据的同步。leader 发生故障时，某个 follower 会成为新的 leader。

> NOTE: 高版本 Kafka 趋势是脱离对 Zookeeper 的依赖

# Kafka installation

`kafka_2.11-2.4.1.tgz`, 2.11 是 Scala 语言版本(Kafka Server 是 Scala 写的, Client 是 Java 写的), 2.4.1 是 Kafka 版本

`cd /opt/software` 上传 `kafka_2.11-2.4.1.tgz`

`tar -zxvf kafka_2.11-2.4.1.tgz -C ../module/`

`cd /opt/module/`

`mv kafka_2.11-2.4.1/ kafka`

`cd kafka`, `mkdir datas`

## environment

`sudo vim /etc/profile.d/my_env.sh`

```sh
#KAFKA_HOME
export KAFKA_HOME=/opt/module/kafka
export PATH=$PATH:$KAFKA_HOME/bin
```

`source /etc/profile`

## configuration

`cd config/`

`vi server.properties`

`broker.id=0`, 102 为 0, 103 为 1, 104 为 2

`log.dirs=/tmp/kafka-logs` 改成: `log.dirs=/opt/module/kafka/datas`

> NOTE: 这个`log.dirs`是 Kafka 存储消息的位置, Kafka 把消息称为 log

`cd /opt/module/kafka/bin`

`cat kafka-run-class.sh`

```sh
# Log directory to use
if [ "x$LOG_DIR" = "x" ]; then
  LOG_DIR="$base_dir/logs"
fi
```

这里放的才是 logs 日志目录, 在 kafka 安装目录下的 logs 里

把 `zookeeper.connect=localhost:2181` 改成 `zookeeper.connect=hadoop102:2181,hadoop103:2181,hadoop104:2181`

`cd /opt/module`, `my_rsync.sh kafka`, 然后改 103, 104 里的 broker id

然后把 env 也分发 103, 104:

`scp -r /etc/profile.d/my_env.sh root@hadoop103:/etc/profile.d/`, `root`

`scp -r /etc/profile.d/my_env.sh root@hadoop104:/etc/profile.d/`, `root`

然后分别 `source /etc/profile`

## start kafka

先把 zk 之前的数据删了: `cd /opt/module/zookeeper-3.5.7/zkData`, `rm -rf version-2/`

> NOTE: 只有`version-2`里有 kafka 数据才要删

先启动 hadoop, zookeeper, `my_cluster.sh start`, `zk_cluster.sh start`

然后 hadoop102, 103, 104 分别启动

`/opt/module/kafka/bin`, `kafka-server-start.sh -daemon /opt/module/kafka/config/server.properties`

再开一个 hadoop102 窗口, `zkCli.sh`

`ls /` 里面大部分是 kafka 的东西

`get /brokers/ids/0` 可以看到 hadoop102 相关的信息

`get /controller` 可以看到大哥 (大概率是 102, 因为先启动的 102, 根据争抢机制)

停止使用: `cd /opt/module/kafka/bin`, `kafka-server-stop.sh`

# Kafka 群起群停脚本

`kafka.sh start | stop`

hadoop102 `cd /home/atguigu/bin`

`vim kafka.sh`

```sh
#!/bin/bash
if [ $# -lt 1 ]
then
    echo "USAGE: kafka.sh {start|stop}"
    exit
fi

case $1 in
start)
    for i in hadoop102 hadoop103 hadoop104
    do
        echo "====== Start $i Kafka ======"
        ssh $i /opt/module/kafka/bin/kafka-server-start.sh -daemon /opt/module/kafka/config/server.properties
    done
;;
stop)
    for i in hadoop102 hadoop103 hadoop104
    do
        echo "====== Stop $i Kafka ======"
        ssh $i /opt/module/kafka/bin/kafka-server-stop.sh
    done
;;
*)
    echo "USAGE: kafka.sh {start|stop}"
    exit
;;
esac
```

`chmod u+x kafka.sh`

> Note: 一定要先停 Kafka 再停 Zookeeper, 因为停 Kafka 的时候会到 ZK 里做注销操作, 也有可能会导致没删掉数据导致下次启动无法成功

# Kafka Command Line

`/opt/module/kafka/bin`

查看 topic: `kafka-topics.sh --list --bootstrap-server hadoop102:9092`

创建 topic:

`kafka-topics.sh --create --bootstrap-server hadoop102:9092 --topic first`

`kafka-topics.sh --create --bootstrap-server hadoop102:9092 --topic second --partitions 2 --replication-factor 3`

查看 topic:

`kafka-topics.sh --describe --bootstrap-server hadoop102:9092 --topic first`

`kafka-topics.sh --describe --bootstrap-server hadoop102:9092 --topic second`

> Note: 不能把多分区的 topic 改少分区数, 但是可以把少分区的 topic 增加分区

修改 topic:

`kafka-topics.sh --alter --bootstrap-server hadoop102:9092 --topic first --partitions 2`

删除 topic:

```sh
kafka-topics.sh --delete --bootstrap-server hadoop102:9092 --topic first
kafka-topics.sh --list --bootstrap-server hadoop102:9092
kafka-topics.sh --delete --bootstrap-server hadoop102:9092 --topic second
kafka-topics.sh --list --bootstrap-server hadoop102:9092
```

## Kafka command line - consumer

`kafka-topics.sh --create --bootstrap-server hadoop102:9092 --topic first --partitions 2 --replication-factor 3`

`cd /opt/module/kafka/datas`, `ll`, 可以看到 `first-0`, `first-1` 两个分区, 证明 topic 是逻辑上的概念, 物理上是通过分区存储的

复制两个 Hadoop102 分别 rename: producer, consumer1

在 producer, `kafka-console-producer.sh --broker-list hadoop102:9092 --topic first`, 进入 producer 客户端

在 consumer1, `kafka-console-consumer.sh --bootstrap-server hadoop102:9092 --topic first`, 进入 consumer1 界面等待消费数据

再启动一个 consumer2, `kafka-console-consumer.sh --bootstrap-server hadoop102:9092 --topic first`, 启动后不能消费到数据 (涉及到 consumer offset 重置问题),

但是如果用 `kafka-console-consumer.sh --bootstrap-server hadoop102:9092 --topic first --from-beginning` 就可以消费到 (但是顺序不是按照 producer 生产消息的顺序一样, 因为数据放的分区不同, 只能保证分区内有序, 在消费的时候不知道先消费哪个分区)

## consumer group

先把 consumer1, consumer2 `ctrl + c` 停了,

`cd /opt/module/kafka/config/`

`vim consumer.properties`, 就用默认的 consumer group id:

```sh
# consumer group id
group.id=test-consumer-group
```

但是在启动 consumer 的时候要用上这个 id: `kafka-console-consumer.sh --bootstrap-server hadoop102:9092 --topic first --consumer.config /opt/module/kafka/config/consumer.properties`, 把 consumer1, consumer2 都通过这样启动

可以看到两个 consumer 消费的数据不同(属于同一个组但是不同分区里的数据)

然后把 consumer2 停了, 再在 producer 里产生数据, 发现全部数据由 consumer1 消费,

再启动 consumer2, 发现 consumer1, consumer2 继续一起消费数据

再启动一个 consumer3, 发现有一个没有在消费数据, 因为只有两个分区, 而且无法知道是哪一个会不消费数据, 重新分配了

还有更简单的启动 consumer group 方式: `kafka-console-consumer.sh --bootstrap-server hadoop102:9092 --topic first --group xxx`, 只要启动的时候指定 group name 是一样的就能是同一个 group

# Kafka 工作流程和文件存储机制

topic 是逻辑上的概念，而 partition 是物理上的概念，每个 partition 对应于一个 log 文件，该 log 文件中存储的就是 producer 生产的数据。Producer 生产的数据会被不断追加到该 log 文件末端，且每条数据都有自己的 offset。消费者组中的每个消费者，都会实时记录自己消费到了哪个 offset，以便出错恢复时，从上次的位置继续消费。

由于生产者生产的消息会不断追加到 log 文件末尾，为防止 log 文件过大导致数据定位效率低下，Kafka 采取了分片和索引机制，将每个 partition 分为多个 segment。每个 segment 对应两个文件——“.index”文件和“.log”文件。这些文件位于一个文件夹下，该文件夹的命名规则为：topic 名称+分区序号。

# Kafka producer

## 分区策略

1. 方便在集群中扩展, 每个 Partition 可以通过调整以适应它所在的机器，而一个 topic 又可以有多个 Partition 组成，因此整个集群就可以适应任意大小的数据了

2. 提高并发, 因为可以以 Partition 为单位读写了

# Kafka 数据可靠性

## 生产者发送数据到 topic partition 的可靠性保证

为保证 producer 发送的数据，能可靠的发送到指定的 topic，topic 的每个 partition 收到 producer 发送的数据后，都需要向 producer 发送 ack（acknowledgement 确认收到），如果 producer 收到 ack，就会进行下一轮的发送，否则重新发送数据

## Topic partition 存储数据的可靠性保证

Kafka 副本数据同步策略:

全部完成同步，才发送 ack

优点: 选举新的 leader 时，容忍 n 台节点的故障，需要 n+1 个副本

缺点: 延迟高

但是, 网络延迟对 Kafka 的影响小:

1. ISR

leader 收到数据，所有 follower 都开始同步数据，但有一个 follower，因为某种故障，迟迟不能与 leader 进行同步，那 leader 就要一直等下去，直到它完成同步，才能发送 ack。这个问题怎么解决呢？

Leader 维护了一个动态的 in-sync replica set (ISR)，意为和 leader 保持同步的 follower 集合。当 ISR 中的 follower 完成数据的同步之后，leader 就会给 producer 发送 ack。如果 follower 长时间未向 leader 同步数据，则该 follower 将被踢出 ISR，该时间阈值由 replica.lag.time.max.ms 参数设定。Leader 发生故障之后，就会从 ISR 中选举新的 leader

2. ack 应答级别

对于某些不太重要的数据，对数据的可靠性要求不是很高，能够容忍数据的少量丢失，所以没必要等 ISR 中的 follower 全部接收成功。

所以 Kafka 为用户提供了三种可靠性级别，用户根据对可靠性和延迟的要求进行权衡，选择以下的配置。

    - 0: 这一操作提供了一个最低的延迟，partition的leader接收到消息还没有写入磁盘就已经返回ack，当leader故障时有可能丢失数据

    - 1: partition的leader落盘成功后返回ack，如果在follower同步成功之前leader故障，那么将会丢失数据

    - 1(all): partition的leader和follower全部落盘成功后才返回ack。但是如果在follower同步完成后，broker发送ack之前，leader发生故障，那么会造成数据重复

# Exactly Once 语义

将服务器的 ACK 级别设置为-1，可以保证 Producer 到 Server 之间不会丢失数据，即 At Least Once 语义。相对的，将服务器 ACK 级别设置为 0，可以保证生产者每条消息只会被发送一次，即 At Most Once 语义。

At Least Once 可以保证数据不丢失，但是不能保证数据不重复；相对的，At Least Once 可以保证数据不重复，但是不能保证数据不丢失。但是，对于一些非常重要的信息，比如说交易数据，下游数据消费者要求数据既不重复也不丢失，即 Exactly Once 语义。在 0.11 版本以前的 Kafka，对此是无能为力的，只能保证数据不丢失，再在下游消费者对数据做全局去重。对于多个下游应用的情况，每个都需要单独做全局去重，这就对性能造成了很大影响。

0.11 版本的 Kafka，引入了一项重大特性：幂等性。所谓的幂等性就是指 Producer 不论向 Server 发送多少次重复数据，Server 端都只会持久化一条。幂等性结合 At Least Once 语义，就构成了 Kafka 的 Exactly Once 语义。即：At Least Once + 幂等性 = Exactly Once

要启用幂等性，只需要将 Producer 的参数中 enable.idempotence 设置为 true 即可。Kafka 的幂等性实现其实就是将原来下游需要做的去重放在了数据上游。开启幂等性的 Producer 在初始化的时候会被分配一个 PID，发往同一 Partition 的消息会附带 Sequence Number。而 Broker 端会对 `<PID, Partition, SeqNumber>` 做缓存，当具有相同主键的消息提交时，Broker 只会持久化一条。
但是 PID 重启就会变化，同时不同的 Partition 也具有不同主键，所以幂等性无法保证跨分区跨会话的 Exactly Once。

# Kafka Consumer

## 消费方式

consumer 采用 pull（拉）模式从 broker 中读取数据

pull 模式不足之处是，如果 kafka 没有数据，消费者可能会陷入循环中，一直返回空数据。针对这一点，Kafka 的消费者在消费数据时会传入一个时长参数 timeout，如果当前没有数据可供消费，consumer 会等待一段时间之后再返回，这段时长即为 timeout

## 分区分配策略

一个 consumer group 中有多个 consumer，一个 topic 有多个 partition，所以必然会涉及到 partition 的分配问题，即确定那个 partition 由哪个 consumer 来消费

Kafka 有三种分配策略，RoundRobin，Range, Sticky

> Note: consumer 暂时没用 sticky 模式, 不像 producer 默认就用 sticky 模式
>
> Note: consumer 默认使用 range 模式

## offset 的维护

由于 consumer 在消费过程中可能会出现断电宕机等故障，consumer 恢复后，需要从故障前的位置的继续消费，所以 consumer 需要实时记录自己消费到了哪个 offset，以便故障恢复后继续消费

Kafka 0.9 版本之前，consumer 默认将 offset 保存在 Zookeeper 中，从 0.9 版本开始，consumer 默认将 offset 保存在 Kafka 一个内置的 topic 中，该 topic 为 `__consumer_offsets`

> Note: consumer offsets 50 个分区, 1 个副本, 存在 `/datas` 里, 由 kafka 自动创建

i.e.

修改配置文件 `consumer.properties`, `cd /opt/module/kafka/config`, `vim consumer.properties`,

修改: `group.id=test-consumer-group` 为: `group.id=atguigu`

添加:

```sh
# 不排除内部的topic
exclude.internal.topics=false
```

创建一个 topic: `kafka-topics.sh --create --bootstrap-server hadoop102:9092 --topic hello --partitions 2 --replication-factor 3`

复制一个 hadoop102 窗口 rename 为 producer: `kafka-console-producer.sh --broker-list hadoop102:9092 --topic hello`

复制两个 hadoop102 窗口 rename 为 consumer1, consumer2: `kafka-console-consumer.sh --topic hello --bootstrap-server hadoop102:9092 --consumer.config /opt/module/kafka/config/consumer.properties`

再复制一个 hadoop102 窗口 rename 为 consumer3 用于维护 offset 的消费者: `kafka-console-consumer.sh --topic __consumer_offsets --bootstrap-server hadoop102:9092 --formatter "kafka.coordinator.group.GroupMetadataManager\$OffsetsMessageFormatter" --consumer.config /opt/module/kafka/config/consumer.properties --from-beginning`

# Kafka 高效读写数据

1. 顺序写磁盘

Kafka 的 producer 生产数据，要写入到 log 文件中，写的过程是一直追加到文件末端，为顺序写。官网有数据表明，同样的磁盘，顺序写能到 600M/s，而随机写只有 100K/s。这与磁盘的机械机构有关，顺序写之所以快，是因为其省去了大量磁头寻址的时间

2. 应用

Kafka 数据持久化是直接持久化到 Pagecache 中，这样会产生以下几个好处：

    - I/O Scheduler 会将连续的小块写组装成大块的物理写从而提高性能

    - I/O Scheduler 会尝试将一些写操作重新按顺序排好，从而减少磁盘头的移动时间

    - 充分利用所有空闲内存（非 JVM 内存）。如果使用应用层 Cache（即 JVM 堆内存），会增加 GC 负担

    - 读操作可直接在 Page Cache 内进行。如果消费和生产速度相当，甚至不需要通过物理磁盘（直接通过 Page Cache）交换数据

    - 如果进程重启，JVM 内的 Cache 会失效，但 Page Cache 仍然可用

尽管持久化到 Pagecache 上可能会造成宕机丢失数据的情况，但这可以被 Kafka 的 Replication 机制解决。如果为了保证这种情况下数据不丢失而强制将 Page Cache 中的数据 Flush 到磁盘，反而会降低性能

3. 零拷贝技术

# Zookeeper 在 Kafka 中的作用

Kafka 集群中有一个 broker 会被选举为 Controller，负责管理集群 broker 的上下线，所有 topic 的分区副本分配和 leader 选举等工作

# Kafka API

## Producer API

Kafka 的 Producer 发送消息采用的是同步或者异步发送的方式。在消息发送的过程中，涉及到了两个线程——main 线程和 Sender 线程，以及一个线程共享变量——RecordAccumulator。main 线程将消息发送给 RecordAccumulator，Sender 线程不断从 RecordAccumulator 中拉取消息发送到 Kafka broker

相关参数：

batch.size：只有数据积累到 batch.size 之后，sender 才会发送数据。

linger.ms：如果数据迟迟未达到 batch.size，sender 等待 linger.time 之后就会发送数据。

测试, 添加依赖:

```xml
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-slf4j-impl</artifactId>
            <version>2.12.0</version>
        </dependency>
```

在 `src/resources/` 添加 `log4j2.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="error" strict="true" name="XMLConfig">
    <Appenders>
        <!-- 类型名为Console，名称为必须属性 -->
        <Appender type="Console" name="STDOUT">
            <!-- 布局为PatternLayout的方式，
            输出样式为[INFO] [2018-01-22 17:34:01][org.test.Console]I'm here -->
            <Layout type="PatternLayout"
                    pattern="[%p] [%d{yyyy-MM-dd HH:mm:ss}][%c{10}]%m%n" />
        </Appender>

    </Appenders>

    <Loggers>
        <!-- 可加性为false -->
        <Logger name="test" level="info" additivity="false">
            <AppenderRef ref="STDOUT" />
        </Logger>

        <!-- root loggerConfig设置 -->
        <Root level="info">
            <AppenderRef ref="STDOUT" />
        </Root>
    </Loggers>

</Configuration>
```

### 异步发送 API

```java
        Properties props = new Properties();
        // kafka集群，broker-list
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "hadoop102:9092");
        // acks
        props.put(ProducerConfig.ACKS_CONFIG, "all");
        // 重试次数 retries
        props.put(CommonClientConfigs.RETRIES_CONFIG, 1);
        // 批次大小 batch size
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);
        // 等待时间 linger ms
        props.put(ProducerConfig.LINGER_MS_CONFIG, 1);
        // RecordAccumulator缓冲区大小 buffer memory
        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);
        // KV序列化器
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        KafkaProducer<String, String> kafkaProducer = new KafkaProducer<String, String>(props);
        for (int i = 0; i < 10; i++) {
            kafkaProducer.send(new ProducerRecord<String, String>("first", "abc" + i));
        }
        kafkaProducer.close();
```

手动用 command line 起一个 consumer1 `kafka-console-consumer.sh --topic first --bootstrap-server hadoop102:9092`, 然后 run java main 方法, 可以看到 consumer1 正常消费到 abc0-9 的十条数据

i.e. 测试指定 partition:

关了重开 consumer1, 并再启动一个窗口 consumer2 `kafka-console-consumer.sh --topic first --bootstrap-server hadoop102:9092 --group bb`, for 循环改成:

```java
        for (int i = 0; i < 10; i++) {
            // kafkaProducer.send(new ProducerRecord<String, String>("first", "abc" + i));
            kafkaProducer.send(new ProducerRecord<String, String>("first", 0, null,"abc--" + i));
        }
```

i.e. 测试指定 key:

```java
        for (int i = 0; i < 10; i++) {
            // kafkaProducer.send(new ProducerRecord<String, String>("first", "abc" + i));
            // kafkaProducer.send(new ProducerRecord<String, String>("first", 1, null,"abc--" + i));
            kafkaProducer.send(new ProducerRecord<String, String>("first", 1, UUID.randomUUID().toString(),"abc -- " + i));
        }
```

i.e. 测试指定黏性:

```java
        for (int i = 0; i < 1000; i++) {
            // kafkaProducer.send(new ProducerRecord<String, String>("first", "abc" + i));
            // kafkaProducer.send(new ProducerRecord<String, String>("first", 1, null,"abc--" + i));
            // kafkaProducer.send(new ProducerRecord<String, String>("first", UUID.randomUUID().toString(),"abc --> " + i));
            kafkaProducer.send(new ProducerRecord<String, String>("first", "abc@@@" + i));
        }
```

i.e. 测试带回调:

```java
        for (int i = 0; i < 10; i++) {
            // kafkaProducer.send(new ProducerRecord<String, String>("first", "abc" + i));
            // kafkaProducer.send(new ProducerRecord<String, String>("first", 1, null,"abc--" + i));
            // kafkaProducer.send(new ProducerRecord<String, String>("first", UUID.randomUUID().toString(),"abc --> " + i));
            // kafkaProducer.send(new ProducerRecord<String, String>("first", "abc@@@" + i));
            kafkaProducer.send(new ProducerRecord<String, String>("first", "abc$$$" + i), new Callback() {
                /**
                 * 当消息完成后, 调用callback
                 * @param recordMetadata metadata 消息元数据
                 * @param e 消息发送过程中如果抛出异常会传入该方法
                 */
                @Override
                public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                    if (e != null) {
                        System.out.println("error message: " + e.getMessage());
                    } else {
                        System.out.println("Success: " + recordMetadata.topic() + " : " + recordMetadata.partition() + " : " + recordMetadata.offset() + " : " + recordMetadata.timestamp());
                    }
                }
            });
        }
```

### 同步发送 API

```java
public class KafkaProducerDemo2 {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        Properties props = new Properties();
        // kafka集群，broker-list
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "hadoop102:9092");
        // acks
        props.put(ProducerConfig.ACKS_CONFIG, "all");
        // 重试次数 retries
        props.put(CommonClientConfigs.RETRIES_CONFIG, 1);
        // 批次大小 batch size
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);
        // 等待时间 linger ms
        props.put(ProducerConfig.LINGER_MS_CONFIG, 1);
        // RecordAccumulator缓冲区大小 buffer memory
        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);
        // KV序列化器
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        KafkaProducer<String, String> kafkaProducer = new KafkaProducer<String, String>(props);
        for (int i = 0; i < 10; i++) {

            Future<RecordMetadata> future =
                kafkaProducer.send(new ProducerRecord<String, String>("first", "abc$$$" + i), new Callback() {
                    /**
                     * 当消息完成后, 调用callback
                     * @param recordMetadata metadata 消息元数据
                     * @param e 消息发送过程中如果抛出异常会传入该方法
                     */
                    @Override
                    public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                        if (e != null) {
                            System.out.println("error message: " + e.getMessage());
                        } else {
                            System.out.println(
                                "Success: " + recordMetadata.topic() + " : " + recordMetadata.partition() + " : "
                                    + recordMetadata.offset() + " : " + recordMetadata.timestamp());
                        }
                    }
                });
            System.out.println("==========HAVE SENT MESSAGE==========");
            // 阻塞当前线程, 一直等到该方法返回结果为止
            future.get();
            System.out.println("==========FINISH SENDING MESSAGE==========");
        }
        kafkaProducer.close();
    }
}
```

### 分区器

1. 默认的分区器: DefaultPartitioner

2. 自定义分区器

```java
public class MyPartitioner implements Partitioner {
    /**
     * 计算分区号
     * 以first主题为例, 分两个分区
     *
     * @param topic 当前消息的topic
     * @param key 当前消息的key
     * @param keyBytes 当前消息key序列化后的字节数组
     * @param value 当前消息的值
     * @param valueBytes 当前消息的值序列化后的字节数组
     * @param cluster 当前的kafka集群
     * @return partition
     */
    @Override
    public int partition(String topic, Object key, byte[] keyBytes, Object value, byte[] valueBytes, Cluster cluster) {
        if (value.toString().contains("atguigu")) {
            return 0;
        }
        return 1;
    }

    @Override
    public void close() {

    }

    @Override
    public void configure(Map<String, ?> map) {

    }
}
```

```java
public class KafkaProducerPartitioner {
    public static void main(String[] args) {
        Properties props = new Properties();
        // kafka集群，broker-list
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "hadoop102:9092");
        // acks
        props.put(ProducerConfig.ACKS_CONFIG, "all");
        // 重试次数 retries
        props.put(CommonClientConfigs.RETRIES_CONFIG, 1);
        // 批次大小 batch size
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);
        // 等待时间 linger ms
        props.put(ProducerConfig.LINGER_MS_CONFIG, 1);
        // RecordAccumulator缓冲区大小 buffer memory
        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);
        // KV序列化器
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        // 设置分区类
        props.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, "cn.sichu.kafka.partitioner.MyPartitioner");
        KafkaProducer<String, String> kafkaProducer = new KafkaProducer<String, String>(props);
        for (int i = 0; i < 10; i++) {
            String value = "";
            if (i % 2 == 0) {
                value = "atguigu ==>" + i;
            } else {
                value = UUID.randomUUID().toString() + "==>" + i;
            }
            kafkaProducer.send(new ProducerRecord<String, String>("first", value), new Callback() {
                /**
                 * 当消息完成后, 调用callback
                 * @param recordMetadata metadata 消息元数据
                 * @param e 消息发送过程中如果抛出异常会传入该方法
                 */
                @Override
                public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                    if (e != null) {
                        System.out.println("error message: " + e.getMessage());
                    } else {
                        System.out.println("Success: " + recordMetadata.topic() + " : " + recordMetadata.partition() + " : " + recordMetadata.offset() + " : " + recordMetadata.timestamp());
                    }
                }
            });
        }
        kafkaProducer.close();
    }
}
```

# Bugs

## `kafka-topics.sh --list --bootstrap-server hadoop102:9092` 没反应

`cd /opt/module/zookeeper-3.5.7/zkData`

`rm -rf version-2`

`rm -rf zookeeper_server.pid`

```sh
ssh hadoop103 rm -rf /opt/module/zookeeper-3.5.7/zkData/version-2
ssh hadoop103 rm -rf /opt/module/zookeeper-3.5.7/zkData/zookeeper_server.pid

ssh hadoop104 rm -rf /opt/module/zookeeper-3.5.7/zkData/version-2
ssh hadoop104 rm -rf /opt/module/zookeeper-3.5.7/zkData/zookeeper_server.pid
```

然后重启 zk 集群

```sh
rm -rf /opt/module/kafka/datas/meta.properties
ssh hadoop103 rm -rf /opt/module/kafka/datas/meta.properties
ssh hadoop104 rm -rf /opt/module/kafka/datas/meta.properties
```
