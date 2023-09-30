# Spring Data JPA

# soft delete (logical delete)

## method 1

在 entity 实体类上添加注解 `@SQLDelete` 和 `@Where`:

```java
@Entity
@Table(name = "sys_user")
@SQLDelete(sql = "update sys_user set is_deleted=1 where id=?")
@Where(clause = "is_deleted=0")
public class SysUser implements Serializable {}
```

但是这个方法, 在联表查询删除的时候, query 里不能写 delete, 而要写成 update 因为 sqldelete 里设置的是根据 id 删除:

```java
    /**
     * 根据 user id 删除 SysUserRoleRelations
     *
     * @param userId user id
     */
    @Transactional
    @Modifying
    // @Query(
    //     value = "delete surr from sys_user_role_relation surr left join sys_user su on surr.user_id = su.id where surr.is_deleted = 0",
    //     nativeQuery = true)
    @Query(
        value = "update sys_user_role_relation surr left join sys_user su on surr.user_id = su.id set surr.is_deleted = 1 where surr.is_deleted = 0",
        nativeQuery = true)
    void deleteByUserId(Long userId);
```

@see: https://www.baeldung.com/spring-jpa-soft-delete

# WARNINGs

## 'Optional.get()' without 'isPresent()' check

Example:

    ```java
        @Override
        public Company findById(String id) {
            return companyDao.findById(id).get();
        }
    ```

    会导致WARNING: 'Optional.get()' without 'isPresent()' check

原因:

`public T get()` If a value is present in this Optional, returns the value, otherwise throws NoSuchElementException.

Fix:

把 `.get()` 改成 `.orElse(null)`, 这样不会抛出异常, 而是直接返回 null

```java
    @Override
    public Company findById(String id) {
        return companyDao.findById(id).orElse(null);
    }
```

因为 `public T orElse(T other)` Return the value if present, otherwise return other.

Params: other – the value to be returned if there is no value present, may be null

@See: https://stackoverflow.com/questions/38725445/optional-get-without-ispresent-check

# bugs
