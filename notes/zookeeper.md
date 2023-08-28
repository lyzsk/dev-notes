# BUG

## zkServer.cmd crash

zkEnv.cmd   启动环境设置

zkServer.cmd windows启动方式

出现闪退, 编辑cmd文件, 在末尾 `endlocal` 前一行加 `pause`

## Invalid config, exiting abnormally

报错 `java.lang.IllegalArgumentException ... zoo.cfg file is missing`, `Invalid config, exiting abnormally` 原因是没法找到配置文件

修改 zkEnv.cmd

```
# 修改前
set ZOOCFG=%ZOOCFGDIR%\zoo.cfg

# 修改后
set ZOOCFG=%ZOOCFGDIR%\zoo_sample.cfg
```

控制台显示 bind to port 0.0.0.0/0.0.0.0:2181，表示服务端启动成功!