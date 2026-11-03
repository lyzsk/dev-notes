# gitlab

`ssh-keygen -t ed25519 -f "$HOME\.ssh\id_ed25519_gitlab" -C "GitLab邮箱"`

1. 提示输入 passphrase 时，可以设置密码，安全性更好；也可以直接回车留空
2. 再按一次回车确认
3. 生成两个文件:

    C:\Users\Sichu Huang\.ssh\id_ed25519_gitlab ← 私钥

    C:\Users\Sichu Huang\.ssh\id_ed25519_gitlab.pub ← 公钥，上传给 GitLab

然后 GitLab - Edit Profile - Access - SSH keys 复制公钥 (`Get-Content "$HOME\.ssh\id_ed25519_gitlab.pub" | clip`)

让 SSH 区分 GitHub 和 GitLab 的 Key:

`notepad "$HOME\.ssh\config"`:

```
# 个人 GitHub：走 SSH 443 端口和 id_rsa 私钥
Host github.com
  HostName ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes

# GitLab：走 id_ed25519_gitlab 私钥
Host gitlab.<company>.cn
  HostName gitlab.<company>.cn
  Port 2222
  User git
  IdentityFile ~/.ssh/id_ed25519_gitlab
  IdentitiesOnly yes
```

分别执行:

```
ssh -G git@github.com | Select-String "hostname|port|identityfile|identitiesonly"
ssh -G git@gitlab.<company>.cn | Select-String "hostname|port|identityfile|identitiesonly"
```

分别测试 GitHub & GitLab

```cmd
ssh -T git@github.com
ssh -T git@gitlab.company.com
```
