## gaussdb 分区

单表分区, 如按月分区, 方便快速索引

```sql
create table "T_talbe_name"
{
    "ID" BINARY_BIGINT NOT NULL AUTO_INCREAMENT,
    "filed" VARCHAR(100 BYTE),
    "START_TIME" TIMESTAMP(6)
}
PARTITION BY RANGE ("START_TIME")
(
    PARTITION PART_202406 VALUES LESS THAN ('2024-07-01 00:00:00.000') TABLESPACE "TABLENAME_PART",
    PARTITION PART_202407 VALUES LESS THAN ('2024-08-01 00:00:00.000') TABLESPACE "TABLENAME_PART"
)
TABLESPACE "TABLENAME"
```

在之后维护的时候就可以直接用 add partition 语句, e.g.

```sql
alter table "table_name" add partition PART_202408 VALUES LESS THAN ('2024-09-01 00:00:00.000') TABLESPACE "TABLENAME_PART";
```

## gaussdb 自增

如 id 忘记加自增了, 可以在无生产环境管理员权限下执行:

```sql
alter table "table_name" modify "id" auto_increment;
```

## gaussdb 主键

如 id 忘记加主键了, 可以在无生产环境管理员权限下执行:

```sql
alter table "table_name" add primary key ("id");
```

## gaussdb 去重

gaussdb 没有内置的 dual 函数, 但可以用笨办法:

```sql
delete from "TABLE_NAME"
where id in
(
    select id from
    (
        select FILED_NAME_ONE, FIELD_NAME_TWO, id, min(id)
        over (partition by FIELD_NAME_ONE, FIELD_NAME_TWO)
        as mid
        from "TABLE_NAME"
    )
    where id != mid
)
```
