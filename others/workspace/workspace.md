# workspace

1. 本机生成 公钥:

`cd /d D:\dev\workspace`

```cmd
set LICENSE_KEY_PASSPHRASE=<强口令>
node tools\license-cli\license-cli.mjs keygen --out "C:\Users\Sichu Huang\workspace-license-keys"
```

或者

```ps
$env:LICENSE_KEY_PASSPHRASE = "<强口令>"
node tools\license-cli\license-cli.mjs keygen --out "C:\Users\Sichu Huang\workspace-license-keys"
```

2. system 配置并重启

- IDEA 右上角运行配置下拉 → Edit Configurations
- 选中 WorkspaceSystemApplication
- 找到 Environment variables:

```yml
LICENSE_PUBLIC_KEY=<C:\Users\...\workspace-license-keys\license-public.key>;LICENSE_FILE=D:\dev\workspace\license-data\license.json;LICENSE_STATE_FILE = D:\dev\workspace\license-data\license.state.json
```

重启 system

3. 签发并放到 LICENSE_FILE

```cmd
node "D:\dev\workspace\tools\license-cli\license-cli.mjs" issue --key "C:\Users\Sichu Huang\workspace-license-keys\license-private.key" --machine "sha256:c6c746409924968bd12edcc847d0616ee13cc017b1eaa4c9e9c8aaed06ab7b4a" --license-id "lic-20261120" --serial 1 --hours 168 --out "D:\dev\workspace\license-data\license.json"
```

4.  等 60 秒 (或重启 system):

`"D:\dev\redis\redis-cli.exe" GET "license:state"` / `& D:\dev\redis\redis-cli.exe GET "license:state"`

`"status":"VALID"`, 则证明恢复

5. 部署后远程撤销 / 恢复（不改服务器 yml、不 ssh、不换服务器文件）

- PC1：`pc1\remote-license.cmd`
- PC3：`pc3\remote-license.cmd`

运行后输入部署端地址（如 `https://workspace.example.com` 或 `http://172.18.20.190:61115`）、应急管理员账号和口令，然后选择：

```text
1. 撤销 license，停止对调用方提供服务
2. 恢复 license，签发新的 7 天授权
3. 只查看当前状态
```

脚本会用本机私钥签发信封，并直接调用部署端 `/api/system/license` 导入；撤销后调用方业务接口返回 503，恢复后重新可用。脚本使用各自目录下 PC1/PC3 的私钥，必须与部署端 `LICENSE_PUBLIC_KEY` 对应。
