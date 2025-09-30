# Debian 10 && 11

不能用 12, 否则 python xyz 安装报错

Debian7+, 11-:

```sh
ufw disable

apt-get -y install wget

wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh

chmod +x shadowsocks-all.sh

./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log

```

@see: https://teddysun.com/486.html

CentOS7:

```sh
systemctl stop firewalld
systemctl disable firewalld

yum -y install wget

wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh

chmod +x shadowsocks-all.sh

./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
```

```sh
default password: root
default password:
default port:
default cipher: aes-256-cfb
default protocol: auth_shal_v4
default obfs: plain
```

windows 测试 ip 端口:

开启 windows features - Telnet Client

```bash
telnet [ip] [port]
```

显示空白说明可连通

debian 查看端口 pid: `netstat -ntulp | grep [port]`

删除端口进程: `kill -9 [PID]`

Debian11 新脚本:

```sh
wget -O ssr-plus.sh https://raw.githubusercontent.com/Alvin9999/SSR-Plus/main/ssr-plus.sh && chmod +x ssr-plus.sh && bash ssr-plus.sh
```

1. 安装 SSR
2. 加密方式 aes-256-cfb, 协议 auth_shal_v4 混淆 plain
