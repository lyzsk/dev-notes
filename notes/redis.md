# Redis

# start

## RedisInsight

GUI 工具, 就是以前的 RedisDesktopManager

https://resp.app/en/

https://github.com/RedisInsight/RedisDesktopManager

## Windows

启动 redis: cd 到 redis 目录, cmd:

```
redis-server.exe redis.windows.conf
```

## SpringBoot

配置文件:

```yml
spring:
    redis:
        host: localhost
        database: 0
        prot: 6379
        password:
```

添加配置类, 用于自定义 redis key 序列化器 (非必须), 自定义成 `StringRedisSerializer` 方便在 GUI 工具里查看 key

```java
@Configuration
public class RedisConfig extends CachingConfigurerSupport {
    @Bean
    public RedisTemplate<Object,Object> redisTemplate(RedisConnectionFactory connectionFactory){
        RedisTemplate<Object,Object> redisTemplate = new RedisTemplate<>();
        // 默认的Key序列化器为: JdkSerializationRedisSerializer
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setConnectionFactory( connectionFactory) ;
        return redisTemplate;
    }
}
```
