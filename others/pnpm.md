windows

```powershell
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

cmd:

```cmd
pnpm -version
```

如果 vscode 不能用 pnpm

```cmd
get-ExecutionPolicy
Restricted

set-ExecutionPolicy RemoteSigned

get-ExecutionPolicy
RemoteSigned
```
