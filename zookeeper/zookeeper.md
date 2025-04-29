# zookeeper

Zookeeper 是一个开源的分布式的，为分布式应用提供协调服务的 Apache 项目

Zookeeper 从设计模式角度来理解，是一个基于观察者模式设计的分布式服务管理框架

TODO: 23 种设计模式

Zookeeper = 文件系统 + 通知机制

-   特点:

    1. 一个 leader, 多个 follower 组成的集群

    2. 集群只要有半数以上节点存活, 就能正常服务

    3. 全局一致性: 每个 Server 保存一份相同的数据副本, Client 无论连接哪个 Server, 数据都一致

    4. 更新请求顺序进行, 来自同一个 Client 的更新请求按其发送顺序依次执行

    5. 数据更新原子性, 一次数据更新要么全成功, 要么全失败

    6. 实时性, 在一定时间范围内, Client 能读到最新的数据(ZK 里沟通的数据量并不大, 不如 HDFS, 仅仅是服务器之间的数据, 所以能达到 ms 级别的实时性)

-   数据结构:

    与 unix 文件系统类似(不一样在于 ZK 没有文件的概念, 直接往 znode 里写内容), 整体上可以看成 tree, 每个节点是一个 ZNode, 每个 ZNode 默认能存储 1MB 的数据, 每个 ZNode 都可以通过其路径唯一标识

-   应用场景:

    提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下线、软负载均衡等

    1. 统一命名服务, i.e. IP 不容易记住, 但是域名容易, 一个 www 地址作为 ZNode 对应多个 ip 内容负载均衡和轮询

    2. 统一配置管理, i.e. Kafka 集群, 一个集群中所有节点的配置信息是一致的, 对配置文件修改后, 因为 ZK 的通知机制, 快速同步到各个节点上

    3. 统一集群管理, i.e. clients 注册同一个 ZK service, 如上

    4. 服务器动态上下线, i.e. client 能实时洞察到服务器上下线变化

    5. 软负载均衡, i.e. 在 ZK 中记录每台服务器的访问数, 让访问数最少的服务器去处理最新的客户端请求

# Map Join

-   使用场景:

    Map Join 适用于一张表小, 一张表大的场景

# install ZK in linux

1. upload into `/opt/software`, `tar -zxvf apache-zookeeper-3.5.7-bin.tar.gz -C /opt/module`

2.(选做) `cd /opt/module`, `mv ./apache-zookeeper-3.5.7-bin zookeeper-3.5.7`

3. `cd /opt/module/zookeeper-3.5.7/conf`, `mv zoo_sample.cfg zoo.cfg`

`cd /opt/module/zookeeper-3.5.7`, `mkdir zkData`, `vim /opt/module/zookeeper-3.5.7/conf/zoo.cfg` 把 `dataDir=/tmp/zookeeper` 改成 `dataDir=/opt/module/zookeeper-3.5.7/zkData`

4. 配置 ZK 的环境变量(选做), 其实不用做, 将来其实是用脚本统一启动多台服务器的 ZK, 因为脚本里面肯定是写 ZK 的绝对路径, 所以没必要配环境变量

# 单点模式启动

启动 zk 服务端和客户端: `cd /opt/module/zookeeper-3.5.7`, `bin/zkServer.sh start`,

`bin/zkCli.sh -server host:port`, 不写 `host:port` 默认是 `localhost:2181`

QuorumPeerMain 是服务端进程

ZooKeeperMain 是客户端进程

然后 `ls /` 看到根节点, 不想用客户端了直接 `quit`, 然后 `jps` 发现只有一个服务端进程

同理, 可以用 `bin/zkCli.sh -server hadoop102:2181` 启动服务

此时可以复制一个 hadoop102 窗口, `jps`, 发现多了一个客户端服务

# 群起群停 zk

`cd /opt/module/zookeeper-3.5.7/conf`, `vim zoo.cfg`

默认的 session 超时时间是 `2 * tickTime`

> Note: 如果不是第一次搭建集群，那么就把 zk 安装目录下的 zkData 目录删除，并且把 logs 目录也删除, 然后重新创建 zkData 文件夹

在`zoo.cfg`的 clientPort 后添加:

```sh
server.2=hadoop102:2888:3888
server.3=hadoop103:2888:3888
server.4=hadoop104:2888:3888
```

然后`:wq`后, `cd ../zkData`, `touch myid`, `vim myid`, 输入 `2`, 然后 `:wq`

同理, 把 zk 发给 hadoop103,104, `cd /opt/module`, `my_rsync.sh zookeeper-3.5.7`, 更改 `myid` 里的内容

然后在 hadoop102,103,104 分别单点启动 zk: `cd /opt/module/zookeeper-3.5.7`, `bin/zkServer.sh start`

然后在三台服务器分别查看 `bin/zkServer.sh status`, 发现 hadoop103 是 leader, 102, 104 是 follower

## 创建群起脚本

在 hadoop102, `cd /home/atguigu/bin`

`touch zk_cluster.sh`, `chmod 744 zk_cluster.sh`, `vim zk_cluster.sh`

```sh
#!/bin/bash

if [ $# -lt 1 ]
then
  echo "parameter can't be null!"
  exit
fi

for host in hadoop102 hadoop103 hadoop104
do
  case $1 in
  "start")
    echo "$1******$host******ZK******"
    ssh $host /opt/module/zookeeper-3.5.7/bin/zkServer.sh $1
  ;;
  "stop")
    echo "$1******$host******ZK******"
    ssh $host /opt/module/zookeeper-3.5.7/bin/zkServer.sh $1
  ;;
  "status")
    echo "$1******$host******ZK******"
    ssh $host /opt/module/zookeeper-3.5.7/bin/zkServer.sh $1
  ;;
  *)
    echo "wrong parameter"
    exit
  ;;
  esac
done
```

`zk_cluster.sh stop`, `zk_cluster.sh status`, `zk_cluster.sh start`, `zk_cluster.sh status`, 发现依然是 103 是 leader, 因为循环里 103 就是第二个

# zk 命令行

复制一份 102 的窗口, 作为客户端窗口

`cd /opt/module/zookeeper-3.5.7`

`bin/zkCli.sh -server hadoop102:2181`

`ls /`

`ls /zookeeper`

`ls /zookeeper/config`

`ls /zookeeper/quota`

`ls` 就相当于 linux 里列出所有目录结构, 在 zk 里列出所有 znode 节点

`create` 相当于 linux 的 `mkdir`, 因为 zk 里只有节点的概念

不允许 `create -p /sanguo/shuhan`, 只能一次一次创建, `create /sanguo`, `create /sanguo/shuhan`

zk 分为两种节点: 1. 持久化节点(默认); 2. 临时节点(-e)

`create -e /xiyou`, `ls /`

`quit`, `bin/zkCli.sh -server hadoop102:2181`, 重联后 `ls /` 发现 `-e` 的节点不存在了

创建节点可以: 1. 带序号(-s); 2. 不带序号(默认)

`create -s /honglou`, `ls /`

同理可以创建带序号的临时节点 `create -s -e /shuihu`, `quit`, `bin/zkCli.sh -server hadoop102:2181`, `ls /`

`get /sanguo`

`set /sanguo "zhugeliang"`, `get /sanguo`, `set /sanguo "zhugeliangxifu"`, `get /sanguo` 发现 "zhugeliang" 被覆盖了, 因为 zk 里所有内容都是覆盖的

`-w` 体现了 zk 的监听机制

再用 hadoop103 的窗口作为第二个客户端, `bin/zkCli.sh -server hadoop103:2181`

`ls /`, `get /sanguo`, 发现数据和 102 的客户端是同步的

在 103: `get -w /sanguo`

在 102: `set /sanguo "zhuzhu"`, 在 103 得到提示: `WatchedEvent state:SyncConnected type:NodeDataChanged path:/sanguo`

内容可以监听, 同理节点也可以监听: 在 103 `ls -w /sanguo`, 然后在 102 `create /sanguo/beiwei`, 在 103 监听到: `WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/sanguo`

`stat [-w] [path]` 用于查看元数据

`delete` 只能删除空的节点, i.e. `delete /honglou0000000002`

`deleteall` 可以删除非空节点, i.e. `deleteall /sanguo`

# ZK 原理

## Stat

Stat 结构体:

1. czxid - 创建节点的事务 zxid

    在集群运行下, 如果当前 leader 挂了, 会选 zxid 最大的服务器作为新 leader

2. dataversion - znode 数据版本号

    改数据的时候用, 删数据的时候用, 或者用(`-1`)

3. dataLength - znode 的数据长度

    每个节点上内容大小不能超过 1M, zk 仅仅是用于框架之间的协调功能, 而不是像 HDFS 一样用于存储

4. numChildren - znode 子节点数量

## 监听器原理

1. 首先要有一个 `main()` 线程

2. 在 main 线程中创建 zookeeper 客户端, 这时就会创建两个线程, 一个负责网络连接通信(connect), 一个负责监听(listener)

3. 通过 connect 线程将注册的监听事件发送给 zookeeper

4. 在 zookeeper 的注册监听器列表中将注册的监听事件添加到列表中

5. zookeeper 监听到有数据或路径变化, 就会将这个消息发送给 listener 线程

6. listener 线程内部调用了 `process()` 方法

## 选举机制

选举机制总原则：集群中的每台机器都参与投票，通过交换选票得到每台机器的最终得票，一旦出现得票数超过机器总数一半以上数量，当前机器即为 leader

-   i.e.1.

    场景：以 5 台机器为例，集群的机器顺时启动，当前集群中没有任何数据

    1. server1 启动，首先 server1 给自己投一票，然后看当前票数是否超过半数，结果没有超过，这时候 leader 就没选出来，当前选举状态是 Locking 状态

    2. server2 启动，首先 server2 先给自己投一票，因为当前集群已经有两台机器已启动，所以 server1, server2 会交换选票，交换后发现各自有一票，接下来比较 myid 发现 server2 的 myid 值 > server2 的 myid 值, 此时 server2 胜出，最后 server2 有两票。最后再看当前票数是否半，发现未过半，集群的选举状态, 集群保持 locking 状态

    3. server3 启动， 首先自己投自己一票，server1 和 server2 也会投自己一票，然后交换选票发现都一样，接着比较 myid 最后 server3 胜出，此时 server3 就有 3 票，同时 server3 的票数超过半数。所以 server3 成为 leader

    4. server4 启动，发现当前集群已经有 leader 它自己自动成为 follower

    5. server5 启动，发现当前集群已经有 leader 它自己自动成为 follower

-   i.e.2.

    场景：以 5 台机器为例，当前集群正在使用(有数据/没数据)，leader 突然宕机的情况

    当集群中的 leader 挂掉，集群会重新选出一个 leader，此时首先会比较每一台机器的 czxid, czxid 最大的被选为 leader。极端情况，czxid 都相等的情况，那么就会直接比较 myid

Q: 一般情况下 ZK 集群更推荐使用奇数台机器原因？

A: 在 ZK 集群中 奇数台 和 偶数台(接近的台数) 机器的容错能力是一样的，所以在考虑资源节省的情况, 我们推荐使用奇数台方案

# ZK 写数据流程

1. 客户端会向 ZK 集群中的一台机器 server1 发送写数据的请求

2. server1 接收到请求后，马上会通知 leader 有写数据的请求来了

3. leader 拿到请求后，进行广播，让集群每一台机器都准备要写数据

4. 集群中的所有机机器接收到 leader 广播后都回应一下 leader

5. leader 再次进行广播 开始写数据，其他机器接收到广播后也开始写数据

6. 数据成功写入后，回应 leader，最后由 leader 来做整个事务提交

7. 当数据成功写入后，有最初和客户端发生连接的 server1 回应客户端数据写入成功

# BUG

## zkServer.cmd crash

zkEnv.cmd 启动环境设置

zkServer.cmd windows 启动方式

出现闪退, 编辑 cmd 文件, 在末尾 `endlocal` 前一行加 `pause`

## Invalid config, exiting abnormally

报错 `java.lang.IllegalArgumentException ... zoo.cfg file is missing`, `Invalid config, exiting abnormally` 原因是没法找到配置文件

修改 zkEnv.cmd

```
# 修改前
set ZOOCFG=%ZOOCFGDIR%\zoo.cfg

# 修改后
set ZOOCFG=%ZOOCFGDIR%\zoo_sample.cfg
```

控制台显示 bind to port 0.0.0.0/0.0.0.0:2181，表示服务端启动成功!
