# License CLI

用于在本机签发、续期、撤销 workspace 平台授权。私钥只保存在本机，不进入仓库、镜像或服务器。

## 1. 生成密钥

```bash
set LICENSE_KEY_PASSPHRASE=<强口令>   # PowerShell: $env:LICENSE_KEY_PASSPHRASE="<强口令>"
node license-cli.mjs keygen --out keys
```

产物：

- `keys/license-private.key`：私钥（有口令时为 AES-256-GCM 加密）
- `keys/license-public.key`：公钥，配置到 workspace-system 的 `LICENSE_PUBLIC_KEY`

## 2. 签发 7 天授权

默认 168 小时。需要更短或更长时用 `--hours` 覆盖。

```bash
node license-cli.mjs issue \
  --key keys/license-private.key \
  --machine sha256:<机器码> \
  --license-id lic-20261120 \
  --serial 1 \
  --hours 168 \
  --features workflow,todo,org-sync \
  --out license.json
```

把 `license.json` 放到服务器：

```bash
scp license.json user@server:/opt/workspace/license/license.json
```

产品每 60 秒读取一次，自动生效，无需重启。

## 3. 撤销

```bash
node license-cli.mjs revoke \
  --key keys/license-private.key \
  --machine sha256:<机器码> \
  --license-id lic-20261120 \
  --serial 2 \
  --out revoked.json

scp revoked.json user@server:/opt/workspace/license/license.json
```

序列号必须大于上一次签发值；产品会拒绝回退的授权。撤销后 60 秒内网关返回 503。

部署后如需在本机远程撤销/恢复，使用：

- PC1：`pc1\remote-license.cmd`
- PC3：`pc3\remote-license.cmd`

脚本会登录部署端、读取机器码和当前 serial，再调用 `/api/system/license` 导入撤销或恢复信封，不需要 SSH 或修改服务器文件。

## 4. 机器码

在 workspace 管理端读取，或调用：

```http
GET /api/system/license/machine-code
```

机器码来源优先级：

1. 环境变量 `WORKSPACE_HOST_ID`
2. `LICENSE_HOST_ID_FILE` 指定的宿主标识文件
3. 数据库中的安装实例 ID

## 5. 部署形态

| 形态 | 文件位置 |
|---|---|
| 裸进程 | `/opt/workspace/license/license.json` |
| Docker | 宿主机目录挂载到容器 `LICENSE_FILE` |
| K8s | ConfigMap/Secret 挂载到 `LICENSE_FILE` |

## 6. 安全边界

- 私钥绝不放到服务器、镜像、仓库。
- 拥有服务器 root 的人可以修改代码或数据库，本机制只能提高成本、留下审计痕迹。
- 审计写入 `sys_license_audit`（哈希链），建议每日通过 SSH 拉回本机。
