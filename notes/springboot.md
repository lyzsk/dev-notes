# Springboot

# ServletComponentScan

启动类添加 `@ServletComponentScan` 注解后, 就回去扫描带有 `@WebServlet`, `@WebListener`, `@WebFilter` 注解的类, 有的话就会把这三种类型, 有的话就会把这三种类型的类转换成 `@ServletRegistrationBean`, `@ServletListenerRegistrationBean`, `@FilterRegistrationBean`, 然后交给 Spring 容器取解析

## Example

比如做登录过滤器的时候, 就可以实现 `Filter` 并加上 `@WebFilter` 注解:

```java
@WebFilter(filterName = "loginCheckFilter", urlPatterns = "/*")
public class LoginCheckFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest,
        ServletResponse servletResponse, FilterChain filterChain)
        throws IOException, ServletException {
            // ...
        }
}
```

## see

https://juejin.cn/post/6844904019391938574
