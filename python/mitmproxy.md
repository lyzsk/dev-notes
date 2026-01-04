# settings

windows 端

settings -> network -> proxy -> manual proxy setup -> use a proxy server 打开 on, Address: 127.0.0.1, Port: 8080

anaconda3:

`pip install mitmproxy`

`mitmweb -s proxy.py -p 8080 --web-port 8081`

访问: http://mitm.it/

若出现: If you can see this, traffic is not going through mitmproxy.

cmd:

`netsh winhttp show proxy`

若得到:

```
Current WinHTTP proxy settings:

    Direct access (no proxy server).
```

则测试 cmd: `curl -x http://127.0.0.1:8080 http://example.com`

说明 能抓到流量 → mitmproxy 服务完全正常

但 Chrome 访问 http://mitm.it 却不走代理 → Chrome 没使用系统代理

解决: 关闭 chrome

cmd:

`start chrome --proxy-server="http://127.0.0.1:8080" --ignore-certificate-errors --disable-web-security`

```
--proxy-server="http://127.0.0.1:8080"：强制走 mitmproxy
--ignore-certificate-errors：临时忽略证书错误（方便调试）
--disable-web-security：绕过 CORS（可选，仅开发用）
```

http://mitm.it/ 下载证书: mitmproxy-ca-cert.p12

Local Machine -> Password 留空 -> Place all certificates in the following sotre -> brose -> 选择 Trusted Root Certification Authorities -> finish

测试: win+r: certmgr.msc -> Trusted Root Certification Authorities -> Certificates -> 查找名为 mitmproxy/mitmproxy CA

若存在则重启 chrome

`start chrome --proxy-server="http://127.0.0.1:8080" --ignore-certificate-errors`

访问: https://httpbin.org/get

若 1. 页面应正常加载, 2. http://127.0.0.1:8081 显示该请求，且 能查看明文内容 则成功
