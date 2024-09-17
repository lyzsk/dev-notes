# Windows10 pro n 20H2 连接 iphone

can charge, but cannot connect to iphone, crontrol panel - devices and printers 里 usb 可以连接 iphone 但是 unspecified, 右键 properties - Hardware, PTP 报黄

settings -> 搜索 optional features -> 点击 add a feature -> 下载 Media Feature Pack

@see: https://steemit.com/computers/@basejumper/fix-for-iphone-11-not-being-detected-by-windows-10-ptp-driver

这样只能访问相机和文件, 不能访问 iphone 里的地址, 还是要下 iTunes:

https://support.apple.com/en-us/106372

# office method1

https://otp.landian.vip/en-us/

https://otp.landian.vip/zh-cn/

下载第一个 Yuntu office tool plus

解压, 打开 Office Tool Plus.exe

## step1

tool box, remove office

## step2

deploy 部署

download first, then deploy 选择 on 下载后再部署

<!-- add product office 2021 volum -->

microsoft 365 应用企业版

选完所有内容(word, excel, powerpoint, teams?), start deploy(右上角开始部署)

## step3

active

<!-- install licenses 选 ltsc 2021 -->

microsoft 365 应用企业版对应许可证: Office Mondo 2016 - 批量许可证

在 kms 主机填 `kms.loli.best`

输入完记得点栏位右上角: 设置主机

然后在许可证管理栏位右上角: 激活

# office method2

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

# kill port

```bash
netstat -ano | findstr :portNumber

taskkill /PID portNumber /F
```

# 查硬件

win + r: `msinfo32`

component 下有 usb 信息
