# Flyway

默认格式:

```txt
  V1__baseline.sql
  │ │  │
  │ │  └── 描述（随便写，下划线/驼峰都行）
  │ └───── 双下划线：版本号和描述的分隔符
  └─────── 大写 V：Versioned（版本化迁移）
```

修改配置:

```yml
spring:
    flyway:
        sql-migration-prefix: V
        sql-migration-separator: __
```

## 数据库版本管理

### step 1：加依赖和配置

```xml
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-database-postgresql</artifactId>
</dependency>
```

```yaml
spring:
    flyway:
        enabled: true
        locations: classpath:db/migration
        schemas: [schema_name]
        baseline-on-migrate: true
        baseline-version: 1
```

### step 2：现有建库脚本变成 V1

放到 `src/main/resources/db/migration/V1__baseline.sql`，去掉首尾的 `BEGIN;` 和 `COMMIT;`
启动应用：空库执行 V1 建表，已有库标记 baseline=1 跳过 V1

### step 3：已有库接入

```sql
GRANT CREATE, USAGE ON SCHEMA [schema_name] TO [db_name];

ALTER SCHEMA [schema_name] OWNER TO [db_name];

DO $$
DECLARE r record;
BEGIN
    FOR r IN SELECT tablename FROM pg_tables WHERE schemaname = '[schema_name]' LOOP
        EXECUTE format('ALTER TABLE [schema_name].%I OWNER TO [db_name]', r.tablename);
    END LOOP;
    FOR r IN SELECT sequencename FROM pg_sequences WHERE schemaname = '[schema_name]' LOOP
        EXECUTE format('ALTER SEQUENCE [schema_name].%I OWNER TO [db_name]', r.sequencename);
    END LOOP;
    FOR r IN SELECT viewname FROM pg_views WHERE schemaname = '[schema_name]' LOOP
        EXECUTE format('ALTER VIEW [schema_name].%I OWNER TO [db_name]', r.viewname);
    END LOOP;
END $$;
```

验证：

```sql
SELECT count(*) FROM pg_tables
WHERE schemaname = '[schema_name]' AND tableowner <> '[db_name]';
-- 期望 0
```

### step 4：日常规矩

1. 改表前先 `git pull`，再加 `V2__xxx.sql`
2. 执行过的迁移文件不能改内容，要改就加 `V`
3. Flyway 只同步表结构，不同步数据；配置数据用 `pg_dump --data-only` 或手工

### 新机器同步

1. `git clone <repository>`
2. `psql -U postgres -d postgres -c "CREATE DATABASE [db_name] OWNER [db_name];"`
3. `psql -U [db_name] -d [db_name] -c "CREATE SCHEMA IF NOT EXISTS [schema_name] AUTHORIZATION [db_name];"`
4. `SELECT version, description, type, success FROM [schema_name].flyway_schema_history;`
