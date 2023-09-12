# nohup

前台启动的方式导致需要打开多个 shell 窗口，可以使用如下方式后台方式启动

-   nohup: 放在命令开头，表示不挂起,也就是关闭终端进程也继续保持运行状态

-   0:标准输入

-   1:标准输出

-   2:错误输出

2>&1 : 表示将错误重定向到标准输出上

&: 放在命令结尾,表示后台运行

一般会组合使用: `nohup [xxx 命令操作]> file 2>&1 &` ， 表示将 xxx 命令运行的结果输出到 file 中，并保持命令启动的进程在后台运行。

i.e.1. `nohup hive --service metastore 2>&1 &`

i.e.2. `nohup hive --service hiveserver2 2>&1 &`
