# nacos

https://github.com/alibaba/nacos

下载 Releases

cd `nacos/bin`

开启:

```cmd
startup.cmd -m standalone
```

关闭:

```cmd
shutdown.cmd
```

配置示例:

nacos\conf\application.properties

```yml
nacos.core.auth.server.identity.key=workspace-server
nacos.core.auth.server.identity.value=U8dKb4v09foc7Zjq3sMaEFyQJGHDTXCthVmwlYRO
nacos.core.auth.plugin.nacos.token.secret.key=GcaD2uKDVLbhqHseKVDnReMF0YIgMchhaNZ3SipPB0c=
nacos.plugin.auth.nacos.token.secret.key=GcaD2uKDVLbhqHseKVDnReMF0YIgMchhaNZ3SipPB0c=
```

http://localhost:8848/nacos 账号 nacos/nacos

Derby 单机版本没有 admin, 需要 `application.properties` 加:

```yml
nacos.core.auth.enabled=false
nacos.core.auth.admin.enabled=false
```

防止注册请求抢跑:

`spring.cloud.nacos.discovery.fail-fast: false`
