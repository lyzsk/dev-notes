# MySQL

-   [B tree](#b-tree)
-   [Limit && Offset](#limit--offset)
-   [RANK vs DENSE_RANK vs ROW_NUMBER](#rank-vs-dense_rank-vs-row_number)
-   [IF vs IFNULL vs CASE WHEN](#if-vs-ifnull-vs-case-when)
-   [GROUP BY vs PARTITION BY](#group-by-vs-partition-by)
-   [temporary table](#temporary-table)
-   [copy table](#copy-table)
-   [transaction](#transaction)
-   [index](#index)

# B tree

B-tree of order m

1. all leaf nodes are at the same level
2. each internal node has at least m / 2 and at most m children
3. each leaf node has at least m / 2 and at most m - 1 keys
4. each node with j children has got j - 1 keys
5. the root is either a leaf or at least 2 children

h: 代表树的高度, k 是个自然数, 一个 B 树要么是空的, 要么满足以下条件:

1. 所有叶子节点到根节点的路径长度相同, 即具有相同的高度；(树是平衡的)
2. 每个非叶子和根节点(即内部节点)至少有 k+1 个孩子节点, 根至少有 2 个孩子；(这是关键的部分, 因为节点都是分裂而来的, 而每次分裂得到的节点至少有 k 个元素, 也就有 k+1 个孩子；但根节点在分裂后可能只有一个元素, 因为不需要向上融合, 中间元素作为新的根节点, 因此最少有两个孩子. 而叶子节点没有孩子. )
3. 每个节点最多有 2k+1 个孩子节点.(规定了节点的最大容量)
4. 每个节点内的键都是递增的

B 树是一种多路查找树, 相比于二叉树来说, B 树更适合于建立存储设备中的文件索引.

因为对于存储设备的操作, 除算法的时间复杂度外, 查找一个数据所需要进行 I/O 操作的次数也是性能的重要影响因素.

对于传统的二叉树来说, 其存储比较松散, 树的深度较深, 我们每次查找一个新节点, 可能都需要进行一次 I/O 操作将其读入内存.

而 B 树因为数据存储比较集中, 一个节点内存储的数据更多, 树的深度较浅, 遍历整个 B 树所需 I/O 操作的次数远小于二叉树, 同时因为我们的存储设备普遍适配了局部性原理, 对于一个连续存储的节点来说, 完全读取它所需 I/O 操作的次数也是非常少的.

<div style="text-align: right;">
<a href="#MySQL">back to top</a>
</div>

# master-slave replication

mysql 主从复制是一个异步(asynchronous) 的复制过程, 分成三步:

Step1. master 将改变记录到二进制日志(binary log)

Step2. slave 将 master 的 binary log 拷贝到它的中继日志(relay log)

Step3. slave 重做中继日志中的事件, 将改变应用到自己的数据库中

流程: master <-> data changes <-> binlog <-> I/O thread <-> Relay log <-> SQL thread <-> slave

<div style="text-align: right;">
<a href="#MySQL">back to top</a>
</div>

# double vs demical(length, precision)

`double` types are used when we are not certain of the behavior of our data, the `double` type takes 8 bytes storage size

比如 `decimal(10, 2)` 需要确定数据的小数点位数

# char vs varchar

`char`: 对英文字符(ASCII) 占用 1 byte, 对汉字字符(unicode)占用 2 bytes

`varchar`: 每个英文字符占 2 bytes, 每个汉字字符也是占 2 bytes

## Example:

定义一个 `char(10)`, 一个 `varchar(10)`, 分别存入 `abc`:

-   `char(10)`: abc + 7 个空格, 长度为 10
-   `varchar(10)`: abc, 长度为 3

取数据的时候, char 类型要用 `trim()` 把多余的空格去掉

## Conclusion

char 空间换时间, only use `char` datatype when expecting the data values in a column are of the same length.

# modify, change column

```sql
alter table table_name modify column_name column_type after column_name_2
```

`column_type` 必需填

暂时不知道怎么批量移动...

# limit && offset

-   limit 用法:

    `select * from article limit 10` 取前 10 个数据

    `select * from article limit 1, 3` 从第 2 个数据开始取, 取 3 个数据

-   offset 用法:

    `select * from article limit 3 offset 1` 跳过第 1 个数据, 取 3 个数据

# limit vs max vs min

`order by limit` 没有 `max()` 和 `min()` 函数快

其实就是 O(n) vs O(nlogn) 的区别, sorting 肯定更慢, 而且即使是 worst case, min/max 函数也不会慢多少, 理论上除非整张表太大了, 才可能要先 order by 排序再找 limit

# rank() vs dense_rank() vs row_number()

## rank()

syntax:

```sql
RANK() OVER(
    PARTITION BY <expression>[{,<expression>...}]
    ORDER BY <expression> [ASC|DESC], [{,<expression>...}]
)
```

`rank()` 是跳跃的, 间断的排名

## dense_rank()

syntax 和 rank 类似

`dense_rank()` 排序的数字是连续的, 不间断的, 当有相同的排名分数时, 排名是并列的

## row_number()

syntax 和 rank 类似

不同的是, mysql 8.0 以上才能用

# if vs ifnull vs case when

## IF

syntax: `IF(expr1, expr2, expr3)`

expr1 条件为 true 则值为 expr2, 为 false 则值为 expr3

## IFNULL

syntax: `IFNULL(expr1, expr2)`

在 expr1 的值不为 null 的情况下返回 expr1, 否则返回 expr2

## CASE WHEN

syntax:

```sql
CASE column_name
WHEN condition
THEN result
ELSE another_result
END ALIAS
```

# group by vs partition by

`GROUP BY` 会改变原表行数

`PARTITION BY` 不会改变原表, 分组后的结果成为窗口, 表示范围

# union vs union all

https://leetcode.cn/problems/movie-rating/description/

union 会自动压缩多个结果集合中的重复结果, 而 union all 则将所有的结果全部显示出来, 不管是不是重复

假如出现

```
Movies =
| movie_id | title   |
| -------- | ------- |
| 1        | Rebecca |

Users =
| user_id | name    |
| ------- | ------- |
| 1       | Rebecca |

MovieRating =
| movie_id | user_id | rating | created_at |
| -------- | ------- | ------ | ---------- |
| 1        | 1       | 5      | 2020-02-12 |
```

会把输出压缩成

```
| results |
| ------- |
| Rebecca |
```

预期结果是:

```
| results |
| ------- |
| Rebecca |
| Rebecca |
```

# Temporary table

```sql
create temporary table table_name(
    col_name varchar(50) not null,
    col_name_2 decimal(12, 2) not null default 0.00
);
```

用 `show tables` 看不到 temporary table

可以使用 select 查询临时表数据

退出当前 mysql, 默认删除临时表, 也可以手动用 `drop table temp_table_name` 来删除临时表

# copy table

只复制表结构:

```sql
-- method1
create table new_table
select * from old_table where 1=2

-- method2
create table new_table like old_table
```

复制表结构及数据:

```sql
create table new_table
select * from old_table
```

# transaction

mysql 默认事务都是自动提交的

`begin` 或 `start transaction` 显示的开启一个事务

`savepoint sp_name` 声明一个 savepoint

`rollback` 回滚到上次 commit

`rollback to sp_name` 回滚到 savepoint

`release savepoint sp_name` 删除指定 savepoint

# index

```sql
-- 添加一个主键
-- 索引值必须是唯一, 且不能为NULL
alter table tbl_name
add primary key(col_list);

-- 创建索引的值必须是唯一的(除NULL外, NULL可以出现多次)
alter table tbl_name
add unique index_name(col_list);

-- 添加普通索引
-- 索引值可出现多次
alter table tbl_name
add index index_name(col_list);

-- 指定了索引为 FULLTEXT, 用于全文索引
alter table tbl_name
add fulltext index_name(col_list);
```

可以用 `alter table tbl_name drop index index_name` 删除索引

> Note: 删除主键时只需要 `DROP PRIMARY KEY`, 但是删除索引时必须知道 INDEX_NAME

# 3NF

数据库三范式:

1. 1NF 原子性: 表中每列不可再拆分

2. 2NF 不产生局部依赖, 一张表只描述一件事情

3. 3NF 不产生传递依赖, 表中每一列都直接依赖于主键, 而不是通过其他列间接依赖于主键

三范式和数据库性能是相悖的

-   范式设计:

    -   PROS: 减少数据的冗余, 表更新操作比反范式更快, 体积比反范式更小

    -   CONS: 对多表关联查询, 性能降低, 更难进行索引优化

-   反范式设计:

    -   PROS: 减少表的关联, 更好进行索引优化

    -   CONS: 存在数据冗余及维护异常, 对数据的修改需要更多的成本

# id auto_increment reset to 0

```sql
alter table table_name auto_increment = 0
```

常和 delete 一起用:

```sql
delete from table_name;
alter table table_name auto_increment = 0;
```

# 重命名字段

```sql
alter table table_name change oldcolname newcolname datatype(length);
```

# 新增字段

```sql
alter table table_name
add column column_name column_type comment 'column_comment' before column_name_before
```

或者

```sql
alter table table_name
add column column_name column_type comment 'column_comment' after column_name_after
```

# 删除字段

```
alter table table_name drop column_name
```

# datetime vs date

DATE 类型存储的是年, 月, 日, 没有时分秒信息, 格式为 YYYY-MM-DD

DATETIME 类型存储的是年, 月, 日, 时, 分, 秒, 格式为 YYYY-MM-DD HH:MM:SS

date 类型不能指定长度, datetime(3) 可以精确到毫秒 yyyy-MM-dd HH:mm:ss.SSS

# datetime vs timestamp

两个数据类型存储时间的格式一致, 均为 YYYY-MM-DD HH:MM:SS

| 类型      | 表示范围                                                     |
| :-------- | :----------------------------------------------------------- |
| datetime  | '1000-01-01 00:00:00.000000' to '9999-12-31 23:59:59.999999' |
| timestamp | '1970-01-01 00:00:01.000000' to '2038-01-19 03:14:07.999999' |

timestamp 只占 4 个字节, 而且是以 utc 的格式储存, 它会自动检索当前时区并进行转换.

datetime 以 8 个字节储存, 不会进行时区的检索.

也就是说, 对于 timestamp 来说, 如果储存时的时区和检索时的时区不一样, 那么拿出来的数据也不一样. 对于 datetime 来说, 存什么拿到的就是什么

## 使用 now() 存储当前时间时, 保存的实际值, 是否与当前计算机时间一致?

TIMESTAMP: 可能不一致. 存储值会被转换成 UTC 时间值再存入数据库.
DATETIME: 与当前时间是一致的.

## 如果存入的是 NULL 时, 两个类型如何存储？

TIMESTAMP: 会自动存储当前时间( now() ).
DATETIME: 不会自动存储当前时间, 会直接存入 NULL 值

## 使用场景

TIMESTAMP: 计算飞机飞行时间

一架飞机, 从中国北京起飞, 降落在美国纽约, 计算它从北京飞往纽约的飞行时间. 飞机在北京时间 2021-10-10 11:05:00 从北京起飞, 在纽约时间 2021-10-10 09:50:00 降落(JL8006).
这个场景中, 如果使用 TIMESTAMP 来存时间, 起飞和降落时间的值, 都会被转换成 UTC 时间, 所以它们直接相减即可获得结果. 但如果使用 DATATIME 格式存时间, 还需要进行转换, 才可以完成, 容易出错

DATETIME: 记录信息修改时间

如果只是记录文件修改时间, 最后更新时间这种不涉及加减转换的情况, 用 DATATIME 来存更直接, 更方便, 可读性高, 不绕弯子, 不容易出错

# int vs integer

| 类型    | 大小   | 范围(有符号)                    | 范围(无符号)       | 用途     |
| :------ | :----- | :------------------------------ | :----------------- | :------- |
| int     | 4 字节 | (-2 147 483 648, 2 147 483 647) | (0, 4 294 967 295) | 大整数值 |
| integer | 4 字节 | (-2 147 483 648, 2 147 483 647) | (0, 4 294 967 295) | 大整数值 |

结论: 无区别, 不同名字只是简化和方便
