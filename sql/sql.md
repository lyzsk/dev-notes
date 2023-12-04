# SQL

| [execution order](#execution-order) | [LIMIT](#limit) | [wildcard](#wildcard) | [COLLATE](#collate) | [IN BETWEEN](#in-between) | [SQL JOIN](#sql-join) | [CONSTRAINTS](#constraints) | [SQL FUNCTIONS](#functions) |

# execution order

FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT

# LIMIT

```sql
-- 按原始表升序选2行
select * from websites limit 2;

-- 按id降序选2行
select * from websites w
order by id desc
limit 2;

-- 按id降序选2行, 不打乱原始排序
select *
from (
	select *
	from websites w
	order by id desc
	limit 2
) subquery
order by id asc;
```

`LIMIT` 不支持运算, 所以像 leetcode0177 这种找第 n 高数据时, 需要先声明一个变量用于替代, i.e.

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
declare m INT;
set m = N-1;
  RETURN (
      select (
        ifnull(
            (select distinct e.salary
            from employee e
            order by e.salary desc
            limit 1 offset m)
            , null)
      )
  );
END
```

> NOTE: 记得加 `;` 在声明的时候

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>

# wildcard

| 通配符(wildcard) |                     | 关键词                                      |
| ---------------- | ------------------- | ------------------------------------------- |
| `%`              | 替代 0 个或多个字符 | `LIKE`, `NOT LIKE`                          |
| `_`              | 替代一个字符        | `LIKE`, `NOT LIKE`                          |
| `[charlist]`     |                     | `REGEXP`, `NOTLIKE` or `RLIKE`, `NOT RLIKE` |

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>

# COLLATE

用 regexp 的时候是否区分大小写不仅与正则表达式中输入字符大小写有关, 还与默认排序规则(default collation)有关

经常用的是 `utf8mb4_0900_ai_ci`, 即不区分大小写

改用 `utf8mb4_bin`, 就可以区分大小写了

如果不想改数据库排序, 可以在 sql 语句中用 `COLLATE` 关键词

```sql
-- 不区分
select * from websites w
where name regexp "^[Gf]";

-- 区分
SELECT * FROM websites WHERE name REGEXP '^[Gf]' COLLATE utf8mb4_bin;
```

查看数据库默认排序规则:

```sql
SELECT @@GLOBAL.collation_server, @@SESSION.collation_connection;
```

查看某表的所有列的排序规则:

```sql
show full columns from [table_name]
```

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>

# IN BETWEEN

`in ('xxx')` 可以简化成 `col_name = 'xxx'`

i.e.

```sql
-- 简化前
select * from websites w
where (alexa between 1 and 20)
and country in ('usa');

-- 简化后
SELECT *
FROM websites w
WHERE alexa BETWEEN 1 AND 20
AND country = 'usa';
```

`not in ('xxx')` 可以简化成 `<> 'xxx'` 或者 `!= 'xxx'`

i.e.

```sql
-- 简化前
select * from websites w
where (alexa between 1 and 20)
and country not in ('usa');

-- 简化1
select * from websites w
where alexa between 1 and 20
and country <> 'usa'

-- 简化2
SELECT *
FROM websites w
WHERE alexa BETWEEN 1 AND 20
AND country != 'usa';
```

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>

# SQL JOIN

`INNER JOIN`：如果表中有至少一个匹配，则返回行

`LEFT JOIN`：即使右表中没有匹配，也从左表返回所有的行

`RIGHT JOIN`：即使左表中没有匹配，也从右表返回所有的行

`FULL JOIN`：只要其中一个表中存在匹配，则返回行

> mysql 不支持 `full outer join`, 只能在 sql server 中测试

# SQL UNION

`UNION` 不能用于列出所有重复值
`UNION ALL` 可以

# SQL SELECT INTO

MySQL 不支持 `select ... into`, 但是可以:

```sql
create table new_table_name
as
select * from origin_table_name
```

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>

# CONSTRAINTs

## SQL UNIQUE

一张表可以有多个 UNIQUE 约束
但是只能有一个 PRIMARY KEY

-   只添加一个 UNIQUE 约束:

```sql
create table xxx
(
    P_ID int not null unique,
);
```

-   添加多个 UNIQUE 约束:

```sql
create table xxx
(
    P_ID int not null,
    LastName varchar(255) not null
    CONSTRAINT uc_PersonID UNIQUE (P_ID, LastName)
);
```

-   撤销一个 UNIQUE 约束:

```sql
-- mysql
alter table xxx
drop index uc_PersonID

-- sql server, oracle, ms access
alter table xxx
drop constraint uc_PersonID
```

-   添加 UNIQUE 约束:

```sql
alter table xxx
add unique (P_ID)
```

-   命名并添加 UNIQUE 约束:

```sql
alter table xxx
add constraint uc_PersonID unique (P_ID, LastName)
```

## FOREIGN KEY

一个表中的 FOREIGN KEY 指向另一个表中的 UNIQUE KEY,

fk 约束用于:

1.  预防破坏表之间连接的行为
2.  防止非法数据插入外键列

```sql
CREATE TABLE Orders
(
O_Id int NOT NULL,
OrderNo int NOT NULL,
P_Id int,
PRIMARY KEY (O_Id),
FOREIGN KEY (P_Id) REFERENCES Persons(P_Id)
)
```

## DEFAULT

DEFAULT 约束: 如果没有其他值, 默认值添加到新记录

DEFAULT 后面可以跟函数, i.e.

```sql
-- mysql
OrderDate datetime DEFAULT CURRENT_TIMESTAMP
```

添加 DEFAULT 约束, i.e.

```sql
-- mysql
alter table table_name
add col_name set default 'xxx'
```

撤销 DEFAULT 约束, i.e.

```sql
-- mysql
alter table table_name
alter col_name drop default
```

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>

# FUNCTIONs

SQL Aggregate 函数计算从列中取得的值，返回一个单一的值

-   AVG() - 返回平均值
-   COUNT() - 返回行数
-   FIRST() - 返回第一个记录的值, 仅 ms access
-   LAST() - 返回最后一个记录的值, 仅 ms access
-   MAX() - 返回最大值
-   MIN() - 返回最小值
-   SUM() - 返回总和

SQL Scalar 函数基于输入值，返回一个单一的值

-   UCASE() - 将某个字段转换为大写
-   LCASE() - 将某个字段转换为小写
-   MID() - 将某个文本字段提取字符, msql 中使用
-   SubString(字段, 1, end) - 从某个文本字段提取字符
-   LEN() - 返回某个文本字段的长度
-   ROUND() - 对某个数值字段进行指定小数位数的四舍五入
-   NOW() - 返回当前的系统时间和时间
-   FORMAT() - 格式化某个字段的显示方式

## Aggregate function

### FIRST()

`FIRST()` 返回指定列中第一个记录的值, 只有 MS Access 支持

```sql
-- mysql
select col_name from table_name
order by col_name asc
limit 1;
```

### LAST()

LAST() 函数返回指定的列中最后一个记录的值, 只有 MS Access 支持

```sql
-- mysql
select col_name from table_name
order by col_name desc
limit 1;
```

## Scalar function

### IFNULL()

比如 leetcode0176, 取第二高的薪水, 如果写成:

```sql
select distinct e.salary as SecondHighestSalary
from employee e
order by e.salary desc
limit 1 offset 1;
```

则无法通过测试用例: `{"headers":{"Employee":["id","salary"]},"rows":{"Employee":[[1,100]]}}`

即, 在没有第二高的时候无法返回 null:

    output:

    ```
    | SecondHighestSalary |
    | ------------------- |
    ```

    expected:

    ```
    | SecondHighestSalary |
    | ------------------- |
    | null                |
    ```

这时候可以用 `ifnull()` 设置判空:

```sql
select
ifnull(
    (
        select distinct e.salary
        from employee e
        order by e.salary desc
        limit 1 offset 1
    ),
    null
) as SecondHighestSalary;
```

<div style="text-align: right;">
<a href="#sql">back to top</a>
</div>
