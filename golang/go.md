# Golang

`go mod init path/name` 初始化 go 模块

`go run path/file_name.go` 运行 go 文件

`go build path/file_name.go` 编译 go 文件产生可执行 exe 文件

`go mod tidy` 自动删除没用到 pkg

# Bug

VS Code 报错:

```sh
Tools environment: GOPATH=C:\Users\sichu\go
Installing 1 tool at C:\Users\sichu\go\bin in module mode.
  gopls@0.12.2

Installing golang.org/x/tools/gopls@v0.12.2 FAILED
{
 "code": 1,
 "killed": false,
 "signal": null,
 "cmd": "C:\\Program Files\\Go\\bin\\go.exe install -v golang.org/x/tools/gopls@v0.12.2",
 "stdout": "",
 "stderr": "go: golang.org/x/tools/gopls@v0.12.2: golang.org/x/tools/gopls@v0.12.2: Get \"https://proxy.golang.org/golang.org/x/tools/gopls/@v/v0.12.2.info\": dial tcp 142.251.43.17:443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.\n"
}

1 tools failed to install.

gopls: failed to install gopls(golang.org/x/tools/gopls@v0.12.2): Error: Command failed: C:\Program Files\Go\bin\go.exe install -v golang.org/x/tools/gopls@v0.12.2
go: golang.org/x/tools/gopls@v0.12.2: golang.org/x/tools/gopls@v0.12.2: Get "https://proxy.golang.org/golang.org/x/tools/gopls/@v/v0.12.2.info": dial tcp 142.251.43.17:443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
```

解决:

https://mirrors.aliyun.com/golang/?spm=a2c6h.13651104.d-5243.1.5f1b1e57VM6SCA

找对应版本的 msi 下载
