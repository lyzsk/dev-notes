# Spring Data JPA

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
