-   低延迟, Spark 延迟是秒级的, Flink 延迟是毫秒级的

-   高吞吐(阿里双十一 Flink 4.6PB/s)

-   高容错, 结果的准确性和良好的容错性

OLTP(Online Transaction Processing) 事务处理的数据处理架构, 太复杂, 涉及多表查询

ETL(Extract, transform, and load) 处理后将 DB 中数据放入数仓, 减少了 DB SQL 的需求, SQL 只进行基本的 CRUD, 分析和查询交给数仓, 且数据处理不会影响到前端 DB, 因为先将业务数据从 DB 复制到了数仓

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
        // 切分, 转换(word, 1)
        FlatMapOperator<String, Tuple2<String, Integer>> wordAndOne =
            lineDS.flatMap(new FlatMapFunction<String, Tuple2<String, Integer>>() {
                public void flatMap(String s, Collector<Tuple2<String, Integer>> collector) throws Exception {
                    // 按空格切分单词
                    String[] words = s.split(" ");
                    for(String word : words) {
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
                    for(String word : words) {
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
                for(String word : words) {
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

然后分发整个 flink 目录

```sh
cd /opt/module

my_rsync.sh flink-1.17.0/
```

然后在 hadoop103 进一步修改配置

```sh
cd /opt/module/flink-1.17.0/conf

vim flink-conf.yaml

taskmanager.host: hadoop103
```

同理, 修改 hadoop104 里的 conf

```sh
cd /opt/module/flink-1.17.0/conf

vim flink-conf.yaml

taskmanager.host: hadoop104
```

然后回到 hadoop102, 启动 flink 集群

```sh
jps

cd /opt/module/flink-1.17.0/

bin/start-cluster.sh

jps
```

然后打开 web 端 `http://hadoop102:8081/#/overview` 观察

然后拷贝一个 hadoop102, `nc -lk 7777`, 然后修改 `pom.xml`, 添加打包插件, 准备打包 unbound 的 wordcount

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>8</source>
                    <target>8</target>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>3.2.4</version>
            </plugin>
        </plugins>
    </build>
```

并且打包前更新下 dependency 的 scope(idea community 别改)

```xml
    <dependencies>
        <dependency>
            <groupId>org.apache.flink</groupId>
            <artifactId>flink-streaming-java</artifactId>
            <version>${flink.version}</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>org.apache.flink</groupId>
            <artifactId>flink-clients</artifactId>
            <version>${flink.version}</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
```

`<scope>provided</scope>` 意思是打包的时候不打包这些, 因为 build plugin 已经是 apache maven-shade-plugin 了, 里面已经有了, 生产环境可以这样配, 但是这样做的问题是本地运行的时候会报错, 解决办法: idea - run - application - configuration - 勾选 Inlude dependencies with "Provided" scope

> Note: 必须改 scope 之前运行过才行这样解决, 或者修改 Defaults - Application - 勾选 Inlude dependencies with "Provided" scope, 但是之前运行过的还是要一个个手动勾选?
>
> Note: 但是 community 版本好像没有?

配好配置后 maven - lifecycle - clean 再 package

> Note: 用 maven-shade-plugin 打包插件一定要先 clean 再 package

然后把 `202310-flink-demo-1.0-SNAPSHOT.jar` 通过 web 端 submit new job

然后在 web 端点一下 jar 包, 然后进行配置

把 `WordCountStreamUnboundedDemo.java` 右键 copy reference: `cn.sichu.wc.WordCountStreamUnboundedDemo` 填入 Entry Class, 其他的暂时不填(Parallelism default = 1)

然后点击 Show Plan 可以看到现在没生成, 然后确认 hadoop102 已经启动了 `nc -lk 7777`, 然后 Submit

Submit 后就默认跳转到了 Jobs - Running Jobs 了

点击 Overview 最后一个图(Keyed Aggregation 就是 聚合 sum) - 选择 TaskManagers - 选择程序运行的服务器(随机的) 的 More 的 View Taskmanager Log - 自动跳转 Task Managers 页面后选择 Stdout

然后可以点击右上角的 Cancel Job 就停掉了
