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

# truncate, delete, drop

truncate : `truncate table table_name` 或者 `truncate table_name`

drop: `drop table table_name` 或者 `drop table IF EXISTS table_name`

delete: `delete from table_name where condition`

> > 注意: delete 操作后可以使用 `optimize talbe table_name` 立刻释放磁盘空间, 不管是 innodb 还是 myisam

truncate 的作用是清空表或者说是截断表，只能作用于表. truncate 的语法很简单，后面直接跟表名即可，

执行 truncate 语句需要拥有表的 drop 权限，从逻辑上讲，truncate table 类似于 delete 删除所有行的语句或 drop table 然后再 create table 语句的组合.

为了实现高性能，它绕过了删除数据的 DML 方法，因此，它不能回滚. 尽管 truncate table 与 delete 相似，但它被分类为 DDL 语句而不是 DML 语句.

## truncate vs delete vs drop

truncate 与 drop 是 DDL 语句，执行后无法回滚; delete 是 DML 语句，可回滚.

truncate 只能作用于表; delete，drop 可作用于表、视图等.

**truncate 会清空表中的所有行，但表结构及其约束、索引等保持不变; drop 会删除表的结构及其所依赖的约束、索引等.**

**truncate 会重置表的自增值; delete 不会.**

truncate 不会激活与表有关的删除触发器; delete 可以.

truncate 后会使表和索引所占用的空间会恢复到初始大小; delete 操作不会减少表或索引所占用的空间，drop 语句将表所占用的空间全释放掉.

从逻辑上说，TRUNCATE 语句与 DELETE 语句作用相同，但是在某些情况下，两者在使用上有所区别.

DELETE 是 DML 类型的语句; TRUNCATE 是 DDL 类型的语句. 它们都用来清空表中的数据.

DELETE 是逐行一条一条删除记录的; TRUNCATE 则是直接删除原来的表，再重新创建一个一模一样的新表，而不是逐行删除表中的数据，执行数据比 DELETE 快.

因此需要删除表中全部的数据行时，尽量使用 TRUNCATE 语句， 可以缩短执行时间.

DELETE 删除数据后，配合事件回滚可以找回数据; TRUNCATE 不支持事务的回滚，数据删除后无法找回.

DELETE 删除数据后，系统不会重新设置自增字段的计数器; TRUNCATE 清空表记录后，系统会重新设置自增字段的计数器.

DELETE 的使用范围更广，因为它可以通过 WHERE 子句指定条件来删除部分数据; 而 TRUNCATE 不支持 WHERE 子句，只能删除整体.

DELETE 会返回删除数据的行数，但是 TRUNCATE 只会返回 0，没有任何意义.

## 使用场景

-   如果想删除部分数据用 delete，注意带上 where 子句; 如果想删除表，当然用 drop; 如果想保留表而将所有数据删除且和事务无关，用 truncate 即可;

-   如果和事务有关，或者想触发 trigger，还是用 delete; 如果是整理表内部的碎片，可以用 truncate 然后再重新插入数据.

# listagg

`select listagg(col_name, ',') within group (order by col_name) from table_name where condition`

列转行, 把每一个字段用 `,` 拼接
