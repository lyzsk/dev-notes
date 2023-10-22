-   低延迟, Spark 延迟是秒级的, Flink 延迟是毫秒级的

-   高吞吐 (阿里双十一 Flink 4.6PB/s)

-   高容错, 结果的准确性和良好的容错性

OLTP(Online Transaction Processing) 事务处理的数据处理架构, 太复杂, 涉及多表查询

ETL (Extract, transform, and load) 处理后将 DB 中数据放入数仓, 减少了 DB SQL 的需求, SQL 只进行基本的 CRUD, 分析和查询交给数仓, 且数据处理不会影响到前端 DB, 因为先将业务数据从 DB 复制到了数仓

flink 1.17, java 和 scala 是分开的依赖

Flink 核心目标: Stateful Computations over Data Streams, 数据流上的有状态计算

Flink 是一个框架和分布式处理引擎, 流批都可以处理.

资源方面可以用 k8s, yarn, etc.

存储方面可以用 HDFS, S3, NFS, etc.

# WordCount

```xml
    <properties>
        <flink.version>1.17.0</flink.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.apache.flink</groupId>
            <artifactId>flink-streaming-java</artifactId>
            <version>${flink.version}</version>
        </dependency>

        <dependency>
            <groupId>org.apache.flink</groupId>
            <artifactId>flink-clients</artifactId>
            <version>${flink.version}</version>
        </dependency>
    </dependencies>
```

数据准备:

1. 在 module 根目录创建 input 文件夹, 创建 words.txt

```txt
hello flink
hello world
hello java
```

批处理, 基于 DataSet API:

```java
public class WordCountBatchDemo {
    public static void main(String[] args) throws Exception {
        ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();
        DataSource<String> lineDS = env.readTextFile("202310-flink-demo/input/words.txt");
        // 切分, 转换 (word, 1)
        FlatMapOperator<String, Tuple2<String, Integer>> wordAndOne =
            lineDS.flatMap(new FlatMapFunction<String, Tuple2<String, Integer>>() {
                public void flatMap(String s, Collector<Tuple2<String, Integer>> collector) throws Exception {
                    // 按空格切分单词
                    String[] words = s.split(" ");
                    for (String word : words) {
                        // 将单词转换为(word, 1)
                        Tuple2<String, Integer> wordTuple2 = Tuple2.of(word, 1);
                        // 用collector向下游发送数据
                        collector.collect(wordTuple2);
                    }
                }
            });
        // 按照word分组
        UnsortedGrouping<Tuple2<String, Integer>> wordAndOneGoupby = wordAndOne.groupBy(0);
        // 各分组内聚合
        AggregateOperator<Tuple2<String, Integer>> sum = wordAndOneGoupby.sum(1);
        sum.print();
    }
}
```

但是 Flink 1.12 以后, 官方推荐直接使用 DataStream API, 在提交任务时通过将执行模式设置成 BATCH 来进行批处理, 这里 DataSet API 写法只是方便理解

流处理(有界流), 基于 DataStream API:

```java
public class WordCountStreamDemo {
    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        DataStreamSource<String> lineDS = env.readTextFile("202310-flink-demo/input/words.txt");
        SingleOutputStreamOperator<Tuple2<String, Integer>> wordAndOne =
            lineDS.flatMap(new FlatMapFunction<String, Tuple2<String, Integer>>() {
                public void flatMap(String s, Collector<Tuple2<String, Integer>> collector) throws Exception {
                    String[] words = s.split(" ");
                    for (String word : words) {
                        Tuple2<String, Integer> wordTuple2 = Tuple2.of(word, 1);
                        collector.collect(wordTuple2);
                    }
                }
            });
        KeyedStream<Tuple2<String, Integer>, String> wordAndOneKS =
            wordAndOne.keyBy(new KeySelector<Tuple2<String, Integer>, String>() {
                public String getKey(Tuple2<String, Integer> stringIntegerTuple2) throws Exception {
                    return stringIntegerTuple2.f0;
                }
            });
        SingleOutputStreamOperator<Tuple2<String, Integer>> sumDS = wordAndOneKS.sum(1);
        sumDS.print();
        env.execute();
    }
}

```

从输出可以明显体现, 流处理是有状态的, 一边运行一边输出, 并且有线程的概念

用 datastream api 一定要有 `env.execute()` 来开始执行

无界流处理:

```java
public class WordCountStreamUnboundedDemo {
    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        DataStreamSource<String> socketDS = env.socketTextStream("hadoop102", 7777);
        SingleOutputStreamOperator<Tuple2<String, Integer>> sum =
            socketDS.flatMap((String s, Collector<Tuple2<String, Integer>> collector) -> {
                String[] words = s.split(" ");
                for (String word : words) {
                    collector.collect(Tuple2.of(word, 1));
                }
            }).returns(Types.TUPLE(Types.STRING, Types.INT)).keyBy((Tuple2<String, Integer> value) -> value.f0).sum(1);
        sum.print();
        env.execute();
    }
}

```

需要用到 netcat 监听端口, 没装的话 `yum install -y netcat`, 然后 `nc -lk 7777`

然后在 VM 里面输入想输入的, idea 控制台就会打印相应的 wordcount 流结果

这就证明 flink 的 stream 是事件驱动型

# deployment

hadoop102 JobManager, Task Manager

hadoop103 TaskManager

hadoop104 TaskManager

`flink-1.17.0-bin-scala_2.12.tgz` 传到 `/opt/software`

`tar -zxvf flink-1.17.0-bin-scala_2.12.tgz -C /opt/module/`

修改 `flink-conf.yaml`, 指定 hadoop102 为 JobManager

```sh
cd /opt/module/flink-1.17.0/conf
vim flink-conf.yaml
```

```yml
jobmanager.rpc.address: hadoop102
jobmanager.bind-host: 0.0.0.0

taskmanager.bind-host: 0.0.0.0
taskmanager.host: hadoop102

rest.address: hadoop102
rest.bind-address: 0.0.0.0
```

`vim workers`

```sh
hadoop102
hadoop103
hadoop104
```

`vim masters`

```sh
hadoop102:8081
```

> Note: master 就是 JobManager
