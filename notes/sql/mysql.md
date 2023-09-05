# MySQL

-   [B tree](#b-tree)
-   [Limit && Offset](#limit--offset)

# B tree

B-tree of order m

1. all leaf nodes are at the same level
2. each internal node has at least m / 2 and at most m children
3. each leaf node has at least m / 2 and at most m - 1 keys
4. each node with j children has got j - 1 keys
5. the root is either a leaf or at least 2 children

h：代表树的高度，k 是个自然数，一个 B 树要么是空的，要么满足以下条件：

1. 所有叶子节点到根节点的路径长度相同，即具有相同的高度；（树是平衡的）
2. 每个非叶子和根节点（即内部节点）至少有 k+1 个孩子节点，根至少有 2 个孩子；（这是关键的部分，因为节点都是分裂而来的，而每次分裂得到的节点至少有 k 个元素，也就有 k+1 个孩子；但根节点在分裂后可能只有一个元素，因为不需要向上融合，中间元素作为新的根节点，因此最少有两个孩子。而叶子节点没有孩子。）
3. 每个节点最多有 2k+1 个孩子节点。（规定了节点的最大容量）
4. 每个节点内的键都是递增的

B 树是一种多路查找树，相比于二叉树来说，B 树更适合于建立存储设备中的文件索引。

因为对于存储设备的操作，除算法的时间复杂度外，查找一个数据所需要进行 I/O 操作的次数也是性能的重要影响因素。

对于传统的二叉树来说，其存储比较松散，树的深度较深，我们每次查找一个新节点，可能都需要进行一次 I/O 操作将其读入内存。

而 B 树因为数据存储比较集中，一个节点内存储的数据更多，树的深度较浅，遍历整个 B 树所需 I/O 操作的次数远小于二叉树，同时因为我们的存储设备普遍适配了局部性原理，对于一个连续存储的节点来说，完全读取它所需 I/O 操作的次数也是非常少的。

<div style="text-align: right;">
<a href="#MySQL">back to top</a>
</div>

# master-slave replication

mysql 主从复制是一个异步 (asynchronous) 的复制过程, 分成三步:

Step1. master 将改变记录到二进制日志 (binary log)

Step2. slave 将 master 的 binary log 拷贝到它的中继日志 (relay log)

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
