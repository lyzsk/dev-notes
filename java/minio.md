# MinIO

## Windows

@see: https://cloud.tencent.com/developer/article/2604208

下载: https://www.minio.org.cn/download.shtml#/windows

server: minio.exe 用于接收文件信息

client: mc.exe 用于上传文件，如果用程序代码操作文件存储，只启动服务端就 ok

1. 创建 `dev/minio` 文件夹
2. 创建 `minio/bin` 存放 `minio.exe` 和 `mc.exe`
3. 创建 `minio/data`. 存放相关数据文件
4. 创建 `minio/log`, 存储相关日志

启动:

进入 `/bin` cmd:

```
setx MINIO_ROOT_USER minioadmin
setx MINIO_ROOT_PASSWORD minioadmin
```

`minio.exe server D:\dev\minio\data --address "127.0.0.1:9000" --console-address "127.0.0.1:9001"`

访问客户端地址: http://127.0.0.1:9000/

账号: minioadmin, 密码: minioadmin

springboot 集成:

方法 1: Run -> Edit Configurations -> Environment variables:

```yml
FILE_STORAGE_TYPE=minio
MINIO_ENABLED=true
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_ENDPOINT=http://127.0.0.1:9000
MINIO_BUCKET=workspace
```

方法 2: cd 到项目目录 cmd

```cmd
set "FILE_STORAGE_TYPE=minio"
set "MINIO_ENABLED=true"
set "MINIO_ACCESS_KEY=minioadmin"
set "MINIO_SECRET_KEY=minioadmin"
set "MINIO_ENDPOINT=http://127.0.0.1:9000"
set "MINIO_BUCKET=workspace"
```
