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

# bugs
