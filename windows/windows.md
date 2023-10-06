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
wmic memphysical get maxcapacity
```

```bash
wmic memorychip get banklabel, capacity, caption, devicelocator, partnumber
```

# Windows 环境下生成项目结构树 tree:

```console
<!-- 查看项目tree -->
tree /F

<!-- 保存tree到txt -->
tree /f > tree.txt
```

然后用 MS Word 打开 tree.txt, 选择 Text encoding -> MS-DOS

# System variables && User variables

JAVA, Maven System variable Home, 一般放 `C:\Program Files\` 里

Home 放压缩路径

Path 放压缩路径下的 bin 路径

# environments

建议以后代码环境都在 `C:/dev` 装

因为: `cd 'C:\Program Files\'` 才能访问带空格的, 有的更新自动填充会识别不了空格, 也不能手动加引号
