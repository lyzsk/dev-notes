# node 局域网内部署 (限制同一网段)

`npm run dev:lan` / `npm run serve:lan`

关闭:

1. 找的到开启的中断, ctrl+c
2. 找不到原终端时，按端口关闭: `netstat -ano | findstr :5199` 找到类似: `0.0.0.0:5199    0.0.0.0:0    LISTENING    61560` 然后 `taskkill /PID 61560 /T /F`
