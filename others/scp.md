# scp

`scp user@ip:/path/a.txt  /D:/path`

`ipconfig` 看 IPv4 地址, 只要前面三个 xxx.xx.xx.yy, 是一致的就是同一个网段,

在自己电脑上

powershell:

`scp -r '<username>@<ipaddress>:"<path>/."' 'D:/dev/'`

- `-r`：整个目录递归
- `/.`：把 xxx 里面的内容放到 D:/dev；

git bash:

`scp -r '<username>@<ipaddress>:"<path>/."' /D:/dev/`

# 局域网部署

`npm run serve:lan`

`npm run serve:lan -- --port 8080`
