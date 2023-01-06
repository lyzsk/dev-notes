# MySQL

# master-slave replication

mysql 主从复制是一个异步 (asynchronous) 的复制过程, 分成三步:

Step1. master 将改变记录到二进制日志 (binary log)

Step2. slave 将 master 的 binary log 拷贝到它的中继日志 (relay log)

Step3. slave 重做中继日志中的事件, 将改变应用到自己的数据库中

流程: master <-> data changes <-> binlog <-> I/O thread <-> Relay log <-> SQL thread <-> slave

# double vs demical(length, precision)

`double` types are used when we are not certain of the behavior of our data, the `double` type takes 8 bytes storage size

比如 `decimal(10, 2)` 需要确定数据的小数点位数

# bugs
