# dev-rules

## DB

**禁止**在数据库存 mysql longblob 类型, BLOB 占用大量空间使数据库膨胀, 影响备份/迁移, 导致 I/O 瓶颈, 扩展性差

## backend

### DTO

**必须**使用 record 类型, 禁止使用 class 类型

### VO

**必须**使用 record 类型, 禁止使用 class 类型

### <version>

项目 maven 版本管理统一使用:

`mvn versions:set -DnewVersion="1.2.3"`
