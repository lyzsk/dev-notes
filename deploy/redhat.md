# redhat

配置 ssh 打通 (cmd):

`ssh -p 22 -N -L 58101:127.0.0.1:58101 huangsichu@10.64.98.11`

获取服务器 token:

`cat ~/eda-runtime/secrets/hfss.token`

配置:

```yml
EMS_HFSS_MCP_URL=http://127.0.0.1:58101
EMS_HFSS_MCP_TOKEN= 从服务器复制出来的 64 位 token
```

可选:

```yml
EMS_MECHANICAL_ENABLED=false
EMS_FLUENT_ENABLED=false
```
