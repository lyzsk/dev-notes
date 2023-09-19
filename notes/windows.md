# office method1

## step1

https://www.microsoft.com/en-us/download/details.aspx?id=49117

new folder `office`

run `officedeploymenttool_16626-20148.exe` extract all

## step2

https://config.office.com/deploymentsettings

配置完 export to xml, `File Name = config`

## step3

cmd, run as administrator, cd 到 office 目录, 把 xml 移进去

`setup /download config.xml`

`setup /configure config.xml`

## step4

如果未能激活

64 位从 C:/Program Files 找 Microsoft Office/Office16

然后复制路径, cmd admin cd 到这个路径

# office method2

https://otp.landian.vip/en-us/

下载第一个 Yuntu office tool plus

解压, 打开 Office Tool Plus.exe

## step1

tool box, remove office

## step2

deploy

download first, then deploy 选择 on

add product office 2021 volum

选完所有内容, start deploy

## step3

active

install licenses 选 ltsc 2021

在 kms 主机填 `kms.loli.best`

# shorcuts

win + s: windows10 搜索框

# ram

cmd:

```bash
wmic memorychip get banklabel, capacity, caption, devicelocator, partnumber
```
