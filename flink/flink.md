-   Spark 延迟是秒级的, Flink 延迟是毫秒级的

-   高吞吐 (阿里双十一 Flink 4.6PB/s)

-   结果的准确性和良好的容错性

OLTP(Online Transaction Processing) 事务处理的数据处理架构, 太复杂, 涉及多表查询

ETL (Extract, transform, and load) 处理后将 DB 中数据放入数仓, 减少了 DB SQL 的需求, SQL 只进行基本的 CRUD, 分析和查询交给数仓, 且数据处理不会影响到前端 DB, 因为先将业务数据从 DB 复制到了数仓
