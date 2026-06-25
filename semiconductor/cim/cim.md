# CIM

子系统:

| 序号 | 系统 | 全称                                   | 中文全称         | 功能                                                                                                                                                             |
| :--- | :--- | :------------------------------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | EAP  | Equipment Automation Program           | 设备自动化程序   | 日常涉及机台自动化控制、SECS/GEM 通讯、机台指令下发与状态上报、数据采集与解析、机台联机 / 脱机管理等场景, 实现机台与 CIM 系统的实时交互                          |
| 2    | MES  | Manufacturing Execution System         | 制造执行系统     | 日常涉及工单管理、批次追踪、过站管控、物料绑定、机台分配、生产历史记录等核心制造流程数字化, 是 FAB 生产执行的中枢系统                                            |
| 3    | RMS  | Recipe Management System               | 配方管理系统     | 日常涉及配方创建、版本管理、上传下载、校验比对、权限管控、变更审批等流程数字化, 确保机台工艺参数的一致性与可追溯性                                               |
| 4    | RCM  | Remote Control Management              | 远程控制管理     | 日常涉及设备远程监控、远程指令操作、异常远程诊断、远程软件升级、操作日志审计等场景, 减少人员进 FAB 频次并提升工作响应效率                                        |
| 5    | SPC  | Statistical Process Control            | 统计过程控制     | 日常涉及 Inline/Offline 数据采集、控制图绘制、异常判定规则触发、OOC/OOS 处置、CPK 能力分析、SPC 报表生成等流程数字化, 保障工艺过程的统计稳定性                   |
| 6    | FDC  | Fault Detection and Classification     | 故障检测与分类   | 日常涉及机台传感器数据实时采集、故障模型训练与部署、异常实时检测、根因分类标记、误报过滤、模型迭代优化等场景, 实现工艺异常的秒级预警                             |
| 7    | APC  | Advanced Process Control               | 先进过程控制     | 日常涉及前馈 / 反馈控制模型运行、工艺参数自动调优、Run-to-Run 控制、虚拟量测预测、控制效果验证等场景, 实现工艺质量的自适应闭环调控                               |
| 8    | DMS  | Defect Management System               | 缺陷管理系统     | 日常涉及晶圆缺陷数据与图像采集、缺陷自动分类、缺陷图生成、缺陷分析、重复缺陷识别等数字化流程, 为良率分析提供结构化缺陷数据基础                                   |
| 9    | YMS  | Yield Management System                | 良率管理系统     | 日常涉及良率数据整合、多维度良率分析、低良率批次追溯、良率与工艺关联挖掘、良率趋势监控、改善措施追踪等数字化流程, 支撑良率持续提升的大数据决策                   |
| 10   | PMS  | Preventive Maintenance System          | 设备维修保养系统 | 日常涉及机台保养计划制定、Check List 派发与执行派发与执行、备件更换记录、保养结果确认、机台维保数据等全流程数字化管理                                            |
| 11   | AMS  | Alarm Management System                | 告警管理系统     | 日常涉及告警规则配置、多源告警聚合、分级通知推送、告警确认与处理、历史告警查询、告警趋势分析与处理、历史告警查询、告警趋势分析等场景, 实现异常事件的统一闭环管理 |
| 12   | RPT  | Reporting System                       | 报表系统         | 日常涉及自定义报表设计、定时报表生成、多维度数据提取、报表订阅与分发、历史数据导出等流程数字化, 满足各子系统和各层级用户的数据查询与分析需求                     |
| 13   | FMS  | Factory Monitoring Sytem               | 工厂监控系统     | 日常涉及产线实时状态可视化、关键 KPI 看板展示、设备监控、异常滚动播报等场景, 为各层级用户提供即时洞察和高效运营的能力                                            |
| 14   | RTD  | Real-Time Dispatching                  | 实时派工系统     | 日常涉及实时派工规则配置、实时派工响应、派工优先级动态调整、机台产能匹配、工序调度等场景, 优化产线流转效率与机台利用率                                           |
| 15   | AMA  | Activity Management of Full-Automation | 全自动化控制平台 | 日常涉及天车任务调度、路径规划、FOUP 搬运执行、搬运异常处理等场景, 实现场内物料的自动化流转                                                                      |

# Systems

<div align="center">

| Abbreviation | Full form                         | Desc             |
| :----------- | :-------------------------------- | :--------------- |
| CIM          | Computer Integrated Manufacturing | 计算机整合制造   |
| [EAP]        | Equipment Automation Programming  | 设备自动化       |
| [MES]        | Manufacturing Execution System    | 制造执行系统     |
| [SPC]        | Statistical Process Control       | 统计过程控制系统 |
| [RTD]        | Real Time Dispatching             | 实时派工系统     |
| [YMS]        | Yield Management                  | 良率管理系统     |
| [RPT]        | Report                            | 生产报表系统     |
| [WPH]        | Wafer Per Hour                    | 每小时晶圆数     |

</div>

## EAP

| Abbreviation | Full form                        | Desc                   |
| :----------- | :------------------------------- | :--------------------- |
| EAP          | Equipment Automation Programming | 设备自动化             |
| APC          | Advanced Process Control         | 先进过程控制           |
| EDA          | Equipment Data Acquisition       | 非量测制造设备数据采集 |
| FDC          | Fault Detection Classification   | 错误侦测与分类         |

> Note:
>
> EDA, EDC 都是对机台设备数据采集, 但 EDA 是 EAP 对制造机台的采集, EDC 是 MES 里对量测设备的采集
>
> APC 可以是独立的系统, 更多与制造业务部门相关联

## MES

| Abbreviation | Full form                         | Desc                 |
| :----------- | :-------------------------------- | :------------------- |
| MES          | Manufacturing Execution System    | 制造执行系统         |
| AMHS         | Automatic Material Handing System | 自动物料搬送系统     |
| ECS          | Equipment Constraint System       | 机台限制 (卡控) 系统 |
| EDC          | Equipment Data Collection         | 量测设备数据采集     |
| MCS          | Material Control System           | 物料搬运系统         |
| PMS          | Preventive Maintenance System     | 预防性保养维修系统   |
| RMS          | Recipe Management System          | 配方管理系统         |
| RTMS         | Reticle Management System         | 掩膜管理系统         |
| PRMS         | PhotoResist Management System     | 光刻管理系统         |
| WIPM         | Wafer in Process Management       | 晶圆过程控制系统     |

## SPC

| Abbreviation | Full form                   | Desc             |
| :----------- | :-------------------------- | :--------------- |
| SPC          | Statistical Process Control | 统计过程控制系统 |

> Note:
>
> 若 MES 里勾选 SPC Flag, 则根据 SPC 设置的 OOS/OOC Rule 来触发
>
> SPC 内不仅有 MES 传来的 SPC Chart 参数, 还有温度, 压力等参数
>
> SPC 会返回 OCAP Flow Number 给 MES, 但 OCAP 规则由 MES 定义 (包括 wafer 完整性校验规则) , 所以即使是 small lot 也会触发 OCAP

## RTD

| Abbreviation | Full form             | Desc                          |
| :----------- | :-------------------- | :---------------------------- |
| RTD          | Real Time Dispatching | 实时派工系统                  |
| SDR          | Sensor Decide Respond | 感知决策响应 (工厂自动化系统) |

> Note:
>
> RTD 主要业务是设置派工规则, SDR 根据规则响应派工
>
> RTD 与 SDR 可以合并为一个系统

## YMS

| Abbreviation | Full form                  | Desc             |
| :----------- | :------------------------- | :--------------- |
| YMS          | Yield Management           | 良率管理系统     |
| DMS          | Defect Management System   | 缺陷管理系统     |
| ADC          | Auto Defect Classification | 自动缺陷分类系统 |

## RPT

| Abbreviation | Full form | Desc         |
| :----------- | :-------- | :----------- |
| RPT          | Report    | 生产报表系统 |

## WPH

| Abbreviation | Full form                           | Desc                 |
| :----------- | :---------------------------------- | :------------------- |
| WPH          | Wafer Per Hour                      | 每小时晶圆数         |
| EOQC         | Electronic Outgoing Quality Control | 电子出货质量控制系统 |

## Others

| Abbreviation | Full form                    | Desc             |
| :----------- | :--------------------------- | :--------------- |
| ERP          | Enterprise Resource Planning | 企业资源经营计划 |

# Terminology

| Abbreviation | Full form                        | Desc                                                                      |
| :----------- | :------------------------------- | :------------------------------------------------------------------------ |
| BR           | Business Rule                    | 业务规则建模                                                              |
| BSI          | backside illumination            | CMOS 背照式工艺                                                           |
| CMP          | Chemical Mechanical Polishing    | 化学机械抛光 <br/> 目的是磨掉金属介质                                     |
| DIFF         | Diffusion                        | 扩散, 可以长膜 <br/> 将掺杂源, 掺杂物和晶圆一起进行高温处理               |
| CVD          | Chemical Vapor Deposition        | 化学气相沉积 <br/> 用于进行半导体材料设备的专用设备, 包括反应室, 供气系统 |
| PVD          | Physical Vapor Deposition        | 物理气相沉积                                                              |
| EPI          | Epitaxial                        | 外延层生长衬层, EPI-Wafer                                                 |
| IMP          | Implant                          | 离子注入金属膜                                                            |
| METAL        | metal-semiconductor(MS) contact  | 金属介质沉积                                                              |
| PR           | PhotoResist                      | 光阻                                                                      |
| PW           | Product wafer                    | 产品晶圆                                                                  |
| SUP          | Support                          |                                                                           |
| WAT          | Wafer Acceptance Test            | 晶圆可接受测试                                                            |
| CP           | Chip probing                     | 针对 Wafer 的探针测试 <br/> 目的是剔除加工有故障的 Die                    |
| IQC          | Incoming Quality Control         | 来料校验                                                                  |
| IPQC         | In-Process Quality Control       | 制程校验                                                                  |
| FQC          | Final Quality Control            | 成品校验                                                                  |
| OQC          | Outgoing Quality Control         | 出货检测                                                                  |
| RSP          | Reticle Pod                      | Carrier 的一种, 用于防止 Reticle                                          |
| AMC          | Airborne Molecular Contamination | 气态分子污染物                                                            |
| RTP          | Rapid Thermal Processing         | 退火, 快速热处理                                                          |
| RC           | RCP_CHANGE                       | 配方变化后, 需要 Season 进行测试                                          |
| RI           | RCP_IDLE                         | 配方无变化, 闲置时间也需要放 Season 进行测试                              |
| OOC          | Out of Cotrol                    | 管控线 [-99.5, 100.5]                                                     |
| OOS          | Out of Specification             | 规格线 [-99, 101]                                                         |
| OHB          | Over Head Buffer                 | 空中存储装置                                                              |
| OHT          | Overhead Hoist Transfer          | 天车搬运系统                                                              |
| OOA          | On-Orbit Assembly                | 在轨组装, 打包                                                            |
| STK          | Stocker                          | 晶圆盒储存库                                                              |

# SPC

SPC: Statistical Process Control

# Cp, Cpk, Pp, Ppk

Cp: Process Capability Ratio, 过程能力指数

Cpk: Process Capability K Ration, 过程能力 K 指数

Pp: Process Performance Ratio, 过程绩效指数

Ppk: Process Performance K Ration, 过程绩效 K 指数

1. Cp, Cpk, Pp 和 Ppk 概念

    Cp, Cpk, Pp 和 Ppk 都是用来体现过程能力的指标, 它们是用来测量过程能力的指数(process capability index), 不是过程能力本身.

2. 过程能力的定义

    过程能力是指过程本身在没有外因干预、没有漂移(drift)(即统计学意义上可控 under statistical control)的情况下其产出品的均一程度(uniformity of product). 不难理解, 我们不可能直接测量过程本身, 而只能通过测量其产出品的某个特性来体现其能力. 通常用被测量的特性的离散程度, 即标准方差, (西格玛), 来表示过程能力. 而且过程能力被量化为 , 即其总宽度为 6 个西格玛.

    e.g. A 过程的西格玛=2, 其过程能力=`6*2=12`. B 过程的西格玛=2.5, 其过程能力=`6*2.5=15`. A 过程和 B 过程那个好呢？答案是: 视情况而定(it depends). 为什么？因为没有判断标准.

3. 衡量过程能力的指标的定义与计算公式

    过程能力的定义与产品的可接受标准(specifications)无关. 可是抛开产品的可接受标准, 单纯地讲过程能力, 又毫无意义. 这就是为什么人们要引入“过程能力的指标(Cp, Cpk, Pp 和 Ppk )”这些概念.

    Cp, Cpk, Pp 和 Ppk 这些指数是过程能力和可接受标准比较的结果, 也被称为过程能力比率(process capability ratio). 笔者更倾向于使用过程能力比率, 因为它直观. 另外这些概念的计算都引入了标准方差或西格玛, 因此它们都是统计学意义上的概念, 也正是如此它们都没有单位.

4. Cp, Cpk, Pp 和 Ppk 的异同点
    1. 有 k 指数(Cpk 和 Ppk)和没 k 指数(Cp 和 Pp)的区别:

        没 k 指数(Cp 和 Pp)只显示过程的产出品的离散程度和可接受标准的关系

        有 k 指数(Cpk 和 Ppk)除了显示过程的产出品的离散程度和可接受标准的关系外, 还关注过程的产出品的均值是否偏离可接受标准的中间值

        其数学关系是: 有 k 指数永远不大于没 k 指数

    2. 过程能力指数(Cp 和 Cpk)和过程绩效指数(Pp 和 Ppk)的区别:
        - 过程能力指数(Cp 和 Cpk)表示的是过程在稳定状态下能使其产出品达到可接受标准的程度的指标, 也可以理解为过程的"潜在"能力. 因为 Cp 和 Cpk 体现的是稳定状态下过程的潜在能力, 因此 Cp 和 Cpk 可以用来预测该过程将来在现有过程条件下的最好的情况.

        - 过程绩效指数(Pp 和 Ppk)则是过程在过去某个观察时段内的实际绩效, 即是该过程的已经产生的产出品实际达到可接受标准的情况. 由于 Pp 和 Ppk 是体现过程在过去的某个时段的绩效, 所以 Pp 和 Ppk 被称为"过程绩效指数". 也正因如此, Pp 和 Ppk 仅代表过程过去的情况, 并不能用来预测过程将来的状态.

# YMS

mean 均值, 反应了数列的集中趋势

variance 方差, 反应一组数据时离散程度 (sigma^2)

standard deviation 标准差: 就是方差开根号, 在大样本中一般使用样本的标准差近似代替总体的标准差, 标准差可以计算钟型曲线 (正态分布)

# Tool Commonality

设备共同性

# ANova

Analysis of variance

方差分析

ANOVA 就是把方差拆成两个部分进行对比, 因为:

e.g.

1. 给病人不同的药物剂量;
2. 病人本身不同, 比如年轻的病人代谢速度快, 有些病人对这个药物比较敏感

## one-way ANOVA

单因素方差分析

目的: 检验每个组的平均数是否相同

ANOVA null hypothesis 零假设: miuA = miuB = miuC

MSB(mean squared between) 组间均方, 就是总体数据的方差

MSE(mean squared error) 组内均方

MSE =(varianceA + varianceB + varianceC) / count

F-statistics

F = MSB / MSE

1. MSB 大, MSE 小, 则 F 大, 说明至少有一个分布相对其他分布较远, 且每样本组内数据都非常集中, 于是拒绝 Hypothesis0

2. MSB 小, MSE 大, 则 F 小, 无法拒绝零假设, 因为有两种情况:
    - 每组的平均值都相对集中, 即正态分布集中

    - 每组的方差很大, 导致我们无法把每组分开, 即正态分布分散

3. MSB 约等于 MSE, 则 F 小, 无法拒绝零假设

F 分布有两个重要的参数: d1, d2(分子 MSB 的自由度, 分母 MSE 的自由度)

`d1 = N - 1`, e.g. 3 组数据, 分子自由度为 2

`d2 = N *(k - 1)`, e.g. 3 组数据, 每组 34 个数据, 分母自由度为 `3 *(34 - 1) = 99`

P 值通过查表? 没懂

# Regression analysis

回归分析

确定两种或两种以上变量间相互依赖的定量关系

R^2 范围: `[0, 1]`, 越接近 1, 说明线性回归线与原始数据越吻合

# WAT Chart

# Top Down Analysis

一种自顶向下, 逐步分解的性能分析

就比如二叉树 dfs 的时候每层 bfs 分析各个节点

# Pareto analysis

帕累托图, 排列图

将出现的质量问题和质量改进项目按照重要程度依次排列而采用的一种图表

# hard bin vs soft bin

- hard bin
  know the overall reason about the failure

- soft bin
  also know the compartment in which it has failed or compartment in which it has been placed

# Remote Management System 远程管理控制系统 (RMS)

## RMS 软件架构

MES User authentication -> UserData -> RMS Client -> DB Server & RMS Server

Equipments -> EAP -> EAP Adapter(RMS API) -> RMS Server

RMS Server & DB Server -> Alarm Adaptor -> Alarm & Notification interface

DB Server -> Database(RMS DB Schema)

## RMS 硬件架构

Ethernet(Message Bus)

RMS DB Server & RAC -> Ethernet

RMS APP Server -> Ethernet

RMS Client -> Ethernet

Equipment -> HSMS -> EAP Server -> Ethernet

Equiipment -》 COM -> MOXA -> SECS I -> TCP/IP -> Ethernet

# 特点及优势

- 支持或可定制常用消息通讯方式与 RMS 进行交互, 如 Tibco RV, Rabbit Mq, GRPC, Http
- 支持或可定制基于常用数据库 Oracle, Mysql,Sqlserver,PostgreSql, Gauss DB
- 基于.Net core, Windows/Linux 平台都可以运行
- RMS server 端解析 EAP 传输的 recipe body, 极大降低与 EAP 程序更新发布压力
- 插件式 recipe body parse 脚本更新部署（如果 recipe body 有修改, 只需更新 parse dll 文件然后热部署, 无需重启 RMS）
- 支持 RMS server 实例多活, 通过 Ngnix 实现负载均衡

# Basic Function

- User/Role Management
- Equipment Mode Management
- Recipe use type control
- Recipe parameter spec control
- Recipe Body Version Management
- Recipe compare/download
- Golden Recipe
- Approve Management
- Offline/Online Compare
- Recipe version history
- EC/SVID Check control
- Copy Recipe
- Recipe 有效期管理

# RMS 信息流 - 两种 Check 作业模式

- 模式 1: Recipe download
    - MES -> Lot data with recipe ID -> EAP
    - EAP -> Query Lot Information -> MES
    - EAP -> Query Recipe Body to download -> RMS Server
    - RMS Server -> Return the recipe body -> EAP
    - EAP -> EAP download the recipe body to equipment -> EAP
- 模式 2: Recipe compare
    - MES -> Lot data with recipe ID -> EAP
    - EAP -> Query Lot Information -> MES
    - EAP -> EAP get recipe body from equipment -> EAP
    - EAP -> Send Recipe Body to check -> RMS Server
    - RMS Server -> RMS check recipe parameters SPEC -> RMS Server
    - RMS Server -> return the check result -> EAP
    - EAP -> if check NG, reject lot track in -> EAP

# RMS 主要功能 (上扬)

- EC/SV control
- Recipe List/body 解析并上传
- Recipe compare/donload
- 基于 Context 的 Recipe Control
- ROB(Recipe Object) 版本控制
- ROB 签核控制
- Recipe parameter Spec Control

1. PPID List/body parse 并上传
    - RMS以树型结构展示主recipe及子recipe关系.
    - 主recipe和子recipe在系
      统中以 link 方式关联, 实
      际的版本控制可以相互独立
    - 支持自动复制激活版本的Spec,避免用户上传新版本重新设定parameter Spec
    - 以文件形式by设备type形式保存recipe body的解析方式
    - 实际recipe body format 有变化时插件式热部署新版本解析文件之后就直接生效
2. Recipe parameter Spec Control
    - RMS支持以树型结构显示recipe body中parameter的结构
    - 多种方式比对类型设置
    - 多种类型的参数类型设置（int,double,string,timespan）
3. Recipe/PPID 签核控制
    - RMS自带签核权限控制功能
    - 支持客制化与FWP等系统进行签核流程整合
4. Recipe/PPID 版本控制（Hold, Active）
    - RMS中不同状态的 recipe version可以执行不同的操作
    - Version可以通过recipe upload或recipe 复制方式进行创建
5. Recipe Body 比对 & Recipe Download
    - 支持recipe version之间的比较
    - 支持跨设备, 跨recipe Id 之间的比较
    - 支持直接连接EAP与设备上当前的recipe body直接比较
    - 支持RMS客户端主动Download(需设备软件和EAP支持才能使用)
    - 支持EAP端主动请求Download(需设备软件和EAP支持才能使用)
6. EC/SV control & Recipe version 复制 & 常用 Recipe Parameter 可见性过滤
    - 支持EC SV的导入和导出
    - 支持通过EAP实时获取ECSV的实时值
    - 支持设置ECSV ID的比对方式
    - 支持Condition check(某些参数在某种条件之下以指定的方式check,典型场景是:带chamber的设备, 某些EC必须在当前执行的JOB必须使用某个chamber时才检查某些指定的ECID)
    - Condition 是指Context
    - 在现有version之上直接复制成新版
    - 可以将version复制到同type其他设备之下
    - Recipe parameter过多的情况下, 可动态控制用户关注的部分常用parameter
    - 基于Context bypass check: 只要EAP 传给过来的Context 组合与RMS 设定的bypass check的Context 组合匹配, 则RMS 将跳过该recipe 的比对(基于Context的recipe bypass check和Forbidden 设置)
    - 基于Context Forbidden: 只要EAP 传给过来的Context 组合与RMS 设定的Forbidden check的Context 组合匹配, 则RMS 将禁用本次比对, 直接返回EAP比对失败及原因(基于Context的recipe bypass check和Forbidden 设置)
    - 可设置已激活的recipe 超过一定时间未被使用则自动Hold(已激活Recipe version设置自动失效)
    - 可设置已使用的recipe在使用一定次数之后自动Hold(已激活Recipe version设置自动失效)

# RMS 主要功能 (珂阳)

- 系统建模
    - 工厂、区域、产线配置; 设备模型和版本配置; 设备配置; Recipe解析模块导入; Recipe Directory管理; EC校验配置; SV校验配置;
- 用户权限
    - 系统用户管理; 系统角色管理; Recipe权限管理; 用户组织管理
- Recipe 管理
    - Recipe管理; 临时Recipe管理; Golden Recipe管理; Recipe Spec管理; Frozen配置; Recipe对比; Recipe查看;
- 系统设置
    - Recipe空闲时间设置; Email邮箱设置;
- 签核
    - 签核流程节点配置; 签核流程执行; 签核历史记录
- 报表
    - EC校验历史; SV校验历史; 临时Recipe履历; Golden Recipe履历; Recipe Body校验历史; EC Change历史; 权限变更历史; 用户操作历史;

- 系统建模
    - 工厂区域产线建模
    - Recipe解析模块: 上传解析模块dll文件
    - Recipe 目录
    - EC/SV管理
- Recipe 管理
    - Recipe解析: 接收设备上传的Recipe, 调用解析模块自动解析Recipe, 生成Parameter
    - 校验: 根据校验规则针对Recipe的Parameter进行校验
    - 界面管理: 可在前端界面查看操作设备Recipe、临时Recipe、Golden Recipe相关数据信息
    - 报表: 前端界面可查看EC、SV、临时Recipe、Golden Recipe和Recipe Body校验相关履历
- Recipe 签核
    - 签核流程设置: 制定签核流程, 分为spec和Idle Time
    - 签核: 基于签核流程对提交的Recipe进行签核
    - 签核历史: 查看签核流程的历史记录

1. 超过 100 个 Type 的机台 Recipe 解析
    - 运用C#语言的强大功能与高效特性, 可快速实现解析模块的开发
    - 拥有丰富解析机台类型的案例和经验
2. 符合 SEMI 标准, 支持解析模块管理:
    - 基于SEMI E42, E139体系标准的配方管理系统, 满足不同Recipe结构的统一管理需求
    - RMS系统采用反射技术, 实现了服务端解析模块的动态匹配, 大大提升了系统的灵活性和适应性
3. Recipe 对比和版本管理功能
    - 对任意两个Recipe, 提供Parameter List / Value 和 Spec 等多种基准的比较功能
    - 使用 Revision 管理功能, 仅激活使用所需的 Recipe
    - 使用 SoftDelete 和 Deactivated 功能, 而不是直接删除
4. 签核流程
    - 系统可对Recipe的更改事项通过变更请求和批准流程生效
    - 各项功能的权限管理及批准
        - 将用户权限按角色进行管控
        - 角色分控定义每个模块的权限
        - 用还分配的角色权限指定访问每个UIPage和操作
5. 权限管理
    - Recipe权限管理
        - 用户绑定 角色、组织、Recipe权限组
        - 可以独立配置菜单和按钮权限, 也可以单独配置到Recipe的权限
6. Recipe 报表和看板
    - Recipe变更历史与报表
        - 提供多样性Report
        - 提供实时看板功能

# function list

1 Recipe 基本功能:
1.1 > 创建 Recipe List（Recipe name）, 通过 EAP 整合, 从设备上传 Recipe List.
1.2 > 创建 Recipe, 通过 EAP 整合, 从设备上传 Recipe Body, 支持批量上传
1.3 > 变更 Recipe 状态, 支持批量修改, 支持批量签核, 批量生效
1.4 > 查询 Recipe, 支持用通配符查询
1.5 > 删除 Recipe, 在系统中删除 Recipe
1.6 > 复制 Recipe, 提供“另存为”的功能
1.7 > Recipe 权限管控, 可按照角色来管控 recipe 是否显示在 RMS 系统界面上, 从而避免误操作
1.8 > 编辑修改 Recipe
1.9 > 支持程序列表 Under Control 设定, Not Control 的程序支持 LotType 卡控
1.10 > Recipe Run 完从机台删除, 可配置是否自动删除
2 Recipe 生命周期管理:
2.1 > Recipe 版本包括: 新创建（Draft）版本, 中间版本（可以修改, 等待签核）, 生效版本
2.2 > Recipe 在系统里可以存在多个版本, 最多有一个生效版本
2.3 "> Recipe 类型可分为主 Recipe 和子 Recipe, 支持多层次的 Recipe, 不限 Recipe 层级数
（主 Recipe、子 Recipe 均可以校验）"
2.4 > Recipe 暂停 / 发布: 根据 Recipe ID 暂停 / 发布 Recipe
2.5 > 支持 Golden Recipe 功能. 不同设备或不同腔体, 同一 recipe 可共享同一 Golden Recipe, 使用 Golden Recipe 进行 Body 的验证比对
2.6 > Recipe 对象（机台与 Lot）历史查询 (可设定条件如时间范围) > 可以查询 Recipe 历史变化（可设定条件如时间范围）
2.7 Recipe 对比:
2.8 "> Online 跑货在线对比:

> > Online Run 货时, 根据 EAP 或 MES 请求比对 Recipe Body. 如果比对失败, 发 Alarm 给 Alarm 系统
> > 可以 By pass 一台设备所有 Recipe 的比对
> > 可以 By pass 单个 Recipe 的比对
> > 记录比对失败的具体参数的信息 "
> > 2.9 "> Offline 比对:
> > 不同设备间相同 Recipe 的比对（和不同）
> > 设备 Recipe 与 RMS 上的 Recipe 比对, 模拟 Online 比对
> > 同一 Recipe 的不同版本间的比对
> > 可以清楚显示比对结果, 列出差异项目
> > 两台设备多个程序间一键比对（客制化开发）
> > 同一程序同型号所有设备一键比对（客制化开发）
> > 支持 FAB 中两个真实设备中程序差异比较
> > Sequence 比较结果分多层呈现（客制化开发）
> > 将 Recipe body 解析成系统可识别的参数类型后进行比对（不论 Format / Unformat 或其他形式的 recipe）"
> > 2.10 ">Recipe 参数比对 Spec 设定:
> > 支持多种 Recipe 参数比对方式: target, range, in（枚举类参数, [1,2...]限定参数为枚举范围内）
> > 可以按参数设定是否进行某个参数的比对
> > 可以定义 Spec Template, 应用到相应的 Recipe, 简化参数 Spec 的设定
> > Recipe 参数修改的 tolerance 要可以定义百分比和固定数值
> > 支持 Full Body, Parameter 比对方式
> > 可以支持对 Recipe 结构的比对"
> > 2.11 > 对比失败, 提供报警, 与 MES 整合, 对设备和 Recipe Hold（通过 EAP）
> > 2.12 > 记录比对失败的参数, 快速定位失败原因
> > 2.13 > Recipe 上传时, 对参数自动检查
> > 2.14 > Recipe 下载
> > 2.15 > Run 货时收到 EAP 请求, 自动下载指定 Recipe, 从 RMS 到机台
> > 2.16 > 设备 Idle 状态下, 下载 Recipe 到指定机台
> > 2.17 > 支持手动在 RMS UI 上 Download Recipe, 支持批量 Download
> > 2.18 > 完善的版本控制, 更新 Recipe spec 生成新版本, 可回退到历史版本.
> > 2.19 > 设备常量（EC）、状态（SV）的比对
> > 2.20 > 支持设备常量（EC）, 设备状态（SV）上传和比对. 支持设备常量（EC）下载
> > 2.21 > 能够支持按 Tool, Recipe, LoadPort, Chamber, Product, Tech 和 Recipe Group 进行 EC/SV Spec 的设定
> > 2.22 > 提供数据, 以支持客制化报表开发
> > 2.23 > 完善权限管理机制和历史记录, 支持设备级别的权限管控
> > 2.24 > 支持 User Group, Function Role 设定
> > 2.25 > 可以对任何操作功能设置权限
> > 2.26 > 可以对设备设置权限, 用户只能看到自己对应的设备, 操作对应的设备
> > 2.29 > 针对 Recipe 升级可以 by tool 类型和 by recipe 设定 , 自动跳过签核生成激活版本（客制化）
> > 2.30 > 支持 Validate log 进行各类型校验结果汇总统计, 生成基于历史的 report
> > 2.31 > 支持设备开关时, 是否严格校验 recipe 参数数量, 如果设备上 recipe 参数数量多则可以检测出来
> > 2.32 >支持 Recipe 变化时自动将 Recipe 备份至 RMS 系统的备份系统中
> > 2.34 > Recipe Body 解析存储支持多种数据类型: SECS, Binary, ASCII, XML
> > 3 支持签核:
> > 3.1 > 支持与签核系统整合, 以进行 Recipe parameter 设定, 并支持选择是否送签, 如果选择是, 签核后才能生效
> > 3.2 > 针对 Recipe 变动 (可以 by recipe 或 by tool 设定) , 可选择是否送签, 如果选择是, 需要与签核系统整合后生效
> > 3.3 > 支持连接内部 OA 系统, 实现签核
> > 3.4 > 要求系统高可用性, 负载平衡:
> > 3.8 > 多台服务器间可以实现负载平衡, 自动故障切换
> > 3.5 > 软件升级和新功能发布不影响系统使用 (不停机)
> > 3.6 > 新的设备类型或新的设备上线, 不影响系统使用（不停机)
> > 3.7 > 工厂产能、设备增加, 可以动态增加服务器, 不影响系统使用（不停机)
> > 3.9 > 提供系统 Pilot Run 机制, RMS 重要逻辑修改, 需要支持在个别设备个别 Recipe 上先 Pilot 验证, 即只有个别设备个别 Recipe 先生效更改内容, 而不影响到为 Pirun 的设备和 Recipe（需要额外准备 PiRun 服务器）
> > 3.10 > Recipe 签核: 支持与签核系统整合, 签核完成的 Recipe 才能生效; 或设定 Bypass 签核, 可以直接变为生效版本

## RMS 基本功能

- Recipe List/Body 解析上传: 支持多格式解析与插件式热部署, 自动识别主 / 子 Recipe 树形关联结构
- 参数 Spec 管理: 以树形结构定义参数规格, 支持 Spec Template 复用及新版本自动继承旧 Spec
- EC/SV 管控: 支持设备常量与状态变量的导入导出、实时获取、Spec 设定及基于 Context 的条件校验
- 多维度 Recipe 比对: 支持跨设备、跨版本、Online/Offline 及 Full Body/Parameter 级别的差异比对
- Recipe 下载与同步: 支持手动批量下载、EAP 主动请求下载、Run 货时自动下发及设备 Idle 状态下同步
- 在线跑货卡控: 生产时实时校验 Recipe Body, 比对失败自动触发 Alarm 并通过 EAP Hold 设备或 Recipe

## Recipe 生命周期管理

- ROB 版本控制: 管理 Draft/Active/Hold 等生命周期状态, 支持版本复制、回退、SoftDelete 及 Golden Recipe 共享基准
- 基于 Context 的智能管控: 根据 EAP 传入的 Context 动态执行 Bypass Check, Forbidden Check 或条件性校验
- 自动化失效策略: 支持设置 Active Recipe 超时未用或超次使用后自动 Hold, 以及 Under Control/Not Control 程序列表卡控
- 变更审批管控: 对 Recipe 修改与 Spec 调整实施审批流, 确保关键操作合规可追溯

## 签核及报表

- 签核流程整合: 支持内置签核或对接外部 OA/FWP 系统, 可配置按 Recipe/Tool 级别送签, 支持批量签核与 Bypass 签核
- 全链路履历报表: 提供 EC/SV 校验、Recipe Body 比对、签核历史、权限变更及用户操作等多维度报表与实时看板
- 变更历史记录: 完整记录 Recipe 升级、Spec 修改及签核流转的全过程数据, 支持客制化报表开发

## 系统与运维

- 工厂与设备建模: 配置工厂 / 区域 / 产线层级, 管理设备模型、Recipe Directory 及解析模块 DLL 的动态加载
- 精细化权限管控: 基于角色和组织控制菜单、按钮及具体 Recipe/ 设备的可见性与操作权限
- 高可用与动态扩展: 支持多服务器负载均衡、故障自动切换、不停机升级及新设备类型热接入
- Pilot Run 验证机制: 支持在独立服务器上对特定设备 /Recipe 进行逻辑变更的灰度验证, 不影响量产环境

# RCM Remote Control System 远程控制系统

# 上扬 功能 & 性能

-1. 用户管理
-1.1 用户维护
-1.2 角色维护
-1.3 用户角色
-1.4 修改密码
-2. 设备管理
-2.1 模块维护
-2.2 机台维护
-2.3 机台权限
-2.4 录像设置
-3. 报警管理
-3.1 报警维护
-4. 日志报表
-4.1 操作日志
-5. 宫格管理
-5.1 用户可以定义自己不同宫格彰显央视
-5.2 宫格实现
-5.3 远程操控
-5.4 安全锁
-5.5 AI 学习训练平台
-5.6 剧本脚本编辑平台
-5.7 剧本脚本执行平台

- 采用硬件接口转接的方式获得机台端的画面信号, 键盘输入信号, 鼠标输入信号.
- 不更改原厂机台设置,不对机台进行功能性改变
- 不得于机台端的计算机上加装任何软件.
- 远程监控时, 画面清晰, 操作流畅无停顿, 鼠标移动定位精准. 画面传输和操作响应的平均时均不得超过 1 秒, 最大时间均不得超过 1 秒.
- 整套系统的用户数量不受 licence 的限制, 可无限扩充
- 可多人同时 监看 同一个远程机台, 但同一时间只能有一人 进行操控.
- 登入同一台远程机台的人员可以互相看到对方的用户名. "
- 协同作业, 可支持 4 人以上同时登入同一远程机台.
- 传讯功能, 为登入同一个远程机台的用户提供信息交流的平台
- 在同一个远程界面上, 可同时显示的远程机台画面小宫格的数量不得少于 36 台.
- 支持一个机台多台服务器特殊控制面板设计, 包括多个主机一个切换屏幕的机台类型, 多个主机多个屏幕的类型.
- 支持 PS/2 及 USB 键盘和鼠标.
- 支持各种样式的鼠标, 如触摸板式, 轨迹球式, 点容笔等.
- 支持各种样式的荧幕, 如触屏式.
- 支持各种样式的键盘, 如屏幕软键盘.
- 支持多平台的客户端系统（Windows,Mac OS X, Linux, Sun 等).
- 支持高分辨率, 可支持 1920X1200@60HZ 及以上.
- 若分辨率有最低要求, 请注明. "
- 支持全屏幕及可调整远程桌面的窗口尺寸.
- 远程应用界面若是网页版, 支持多种浏览器（如 IE, Safari, Opera, Chrome 等）.
- 提供平台允许在战勤室外的特别权限的人员, 也可以访问和操作 RCM 里的机台.

# function list

    功能	功能描述
    1.1 账号管理	1.1.1 用户账号管理, 可导入、新增、修改、删除用户等.
    1.2 角色管理	1.2.1 支持配置用户不同身份角色, 可增删改查角色种类, 可根据角色配置相应的菜单按钮界面.
    1.3 权限管理	1.3.1 支持角色权限配置界面.
        1.3.2 多层角色管理支持（超级管理员、管理员、审计员、普通用户）
        "1.3.3 本地支持 Interlock, 本地权限优先, 本地切换 Local 模式或者 Remote 模式.

> 切换 Local 模式后, 仅本地操作.
> 切换 Remote 模式后, 可根据配置, 只能远端操作或者远端本地都能操作. "

        1.3.4 支持对接AD域账密, 自动同步更新RCM系统账密.
    2.1 配置管理	2.1.1 支持配置RCM硬件KVM的配置信息, 包含IP端口, 网关, 子网掩码等.
    2.2 区域管理	2.2.1 支持对区域进行增删改查, 并可以在区域下面绑定机台.
        2.2.2 区域树状图显示, 并可维护多级区域.
    2.3 机台维护	2.3.1 支持配置RCM硬件KVM对应的机台信息, 包含机台ID、区域、机型等.
    2.4 机台权限	2.4.1 赋予角色—机台权限配置界面.
        2.4.2 权限可以控制到功能级别的只读、操作.
        2.4.3 多用户同时远程操作同一机台时, 根据用户权限级别来决定操作人员（默认高权限人员操作）.
        2.4.4 近端机台操作优先, 机台近端若有人在操作键盘或鼠标时, 该机台远端的操作通道限被自动关闭, 远端只可查看该机台
        2.4.5 支持对机台进行增删改查, 机台信息包括机台编码、机台名称、所属区域、机台类型、机台负责人/Group 等
        2.4.6 在保证画面清晰, 操作流畅的前提下, 单台设备至少可支持x人同时登入同一个远程机台, 一人为主（可操作, 不低于30FPS）, 其余为辅（可监控, FPS不低于1）
        2.4.7 一人可同时登入多个远程机台.
        2.4.8 支持用户将常用机台添加到个人收藏夹, UI登入后默认显示收藏的机台信息, 收藏的机台不受群组限制.
    3.1 系统设置	3.1.1 用户个性化设置界面.
    3.2 标签设置	3.2.1 系统常量参数设置界面.
        4.1 RCM UI上显示目前登入者的USER NAME、IP、登入时间, 且接口按照user要求客制. 登入后分割显示该USER所拥有操作权限的机台.
        4.2 联机的KVM NAME直接抓取KVM上定义的名称来显示在开发的RCM上. 且每个分割画面的子窗格 可以显示该子窗格的KVM NAME.
    5.1 鼠标控制	5.1.1 远程监控时,  画面清晰, 操作流畅无停顿, 鼠标移动定位精准, 无拖尾.
        5.1.2 可自动同步近端与远端的鼠标移动位置.
        5.1.3 支持绝对鼠标.
        5.1.4 支持手动设置鼠标参数, 以满足特殊机型的鼠标对齐精度.
        5.1.5 支持鼠标设定, 双鼠标或者单鼠标模式.
        5.1.6 支持各种样式的鼠标, 如触摸板式, 轨迹球式, 电容笔等.
        5.1.7 支持连接PS/2及USB等接口的键盘和鼠标.
        5.1.8 自动将远端与近端的鼠标合二为一, 以免出现两个鼠标在同一个画面的困扰.
    5.2 画面控制	5.2.1 可以灵活设置窗格数量, 例如 3*3、3*4、4*4、5*5 等, 由用户自定义设置.
        5.2.2 画面可以设置全屏、非全屏, 显示比例: 缩放、自适应、填充、原始比例等方式.
        5.2.3 显示包括机台名称、实时状态、报警信息、Run 货 Lot 名称等信息.
        5.2.4 若机台离线, 显示离线原因: KVM 连接失败、机台无法访问等.
        5.2.5 机台或者KVM 恢复后, 监控画面自动恢复, 无需人工刷新或者重启程序.
        5.2.6 后台新增机台、KVM 或者开放权限后, 前端无需重启程序, 可以加载新增的机台/KVM 等.
        5.2.7 若机台前端有操作按钮或者机台不支持屏幕接入, 可以通过类似组态的方式将操作按钮或者画面接入 RCM 系统.
        5.2.8 支持查看当前KVM 同时在线人数, 操作等待人数.
        5.2.9 支持远端双开功能,某些机型近端显示器为两个,比如一边是view则另一边是control,此时远端操作跟现场端模式一样.
        5.2.10 若USER点击某个机台窗格, 出现联机数已满或已被有Control权限的远程用户占用的情况, 系统提示相对应的讯息让USER知道.
        5.2.11 用户同时远程操作依据用户权限级别来决定谁操作
        5.2.12 当远程联机用户有Control权限时, Control 权限不可被强制退出, 除非超过一定时间未操作或是使用端主动释出 control 权限. 近端有 InterLock 按钮, 当启用时, 不允许远程控制, 且 user 可决定是否使用 InterLock 功能. 若USER正在Control/View某一窗格的画面时, 若被近端用户按下InterLock按钮, 系统也有提示给远程已经在View/Control的使用者知道.
        5.2.15 支持多国语言键盘及屏幕软键盘
        5.2.16 协同作业时, 若同一机台的远程连接数量达到上限, 弹出提醒窗口.
        5.2.17 操作权限的交替需要有序进行, 当前RCM设备如果正在被操作, 后续用户的操作必须得到当前操作者的同意, 当前操作者未在既定的时间内回馈, 可视为默认放弃操作权.
        5.2.18 传讯功能, 为登入同一个远程机台的用户提供信息交流的平台.
        "5.2.19 应对一个机台连接多台主机的情况, 提供特殊控制面板设计:

> 多个主机一个屏幕的类型（可切换）
> 多个主机多个屏幕的类型"

        5.2.20 整合机台ID, 方便可视化管理. 机台列表可按照区域、机台组、机台ID以树状层级显示. 也可通过输入机台ID（支持模糊查询）直接获取对应的机台画面, 并定位到该机台.
        5.2.21 支持各种样式的荧幕, 如VGA, DVI, HDMI, DP, 触控屏等
        6.1 通过RCM来Control/View某一个KVM的操作, 有使用者连接哪个KVM的相关纪录. 例如: 哪个使用者连到哪一台KVM、远程操作时间、联机IP、联机人员账号、是否有联机异常情况发等.
        6.2 日志须保留至少半年以上的时间;
        6.3 支持RCM操作界面的视频录制, 支持视频画质配置, 支持视频回放
        6.4 设备需要有详细的日志记录, 日志方便查看分析, 日志包含事件id, 事件time stamp, 事件分类, 事件描述. 日志至少保存一个月, 保存周期可设定.
        6.5 设备日志支持导出为易读格式文件, 例如txt, CSV, excel等.
        6.6 RCM客户端的访问日志、RCM的操作日志, 人员、开始时间、结束时间、访问时长. 并且可以在前端查看.
        6.7 支持按机台查看访问时长, 按人员查看访问时长, 查看 KVM 历史在线时长报表等.
        6.8 保留远程控制端的鼠标/键盘操作记录（客户端操作日志备份）、保留截屏的录像到服务器、保留录屏回放（保留时间30自然日）, 可用于BigData的分析. 数据保留的时间是可设定的, 默认一个月.
        7.1 所有需求以甲方最终解释为准.
        7.2 甲方保留根据甲方需求增减或修改需求的权力.
        7.3 支持RCM应用程序开发接口（.dll文件等）, 利于整合软件应用
        7.4 系统客制化部分以合同内容为主.
        8.1 RPA, 支持运行脚本自定义
        8.2 OCR, 支持文字图象识别
        9.1 用户相关设置保存在DB, 方便用户在任意PC端登入时都可以使用既定配置.
        9.2 可自行制定分割画面的数量和机台List, 机台的选择不受区域的限制.
        9.3 支持多平台的客户端系统（Windows, Linux, Sun等), 即RCM的安装使用不受机台操作系统的限制. （除极特殊系统）
        9.4 支持高分辨率, 可支持1920X1200@60HZ及以上. 画面色彩要求达到真彩色, 若分辨率有最低要求, 请注明.
        8.7 设备能自适应机台的荧幕分辨率.
        9.5 支持自定义分辨率设置, 确保设备遇到特殊机台显示分辨率时, 能最大程度上保证设备的兼容性和扩展性.
        9.7 若RCM硬件安装位置到电源插座较远, 厂商需定制电源线
        9.8 RCM与机台信号采集线材必须有磁环等用于滤波
        9.9 RCM用电需求为市电, 电压为AC 220V（国标）; RCM电源插头匹配我司厂务国标5孔插座(不得使用转接头）
        9.10 RCM设备硬件电源适配器输入接头必须使用防脱落设计, 防止在安装后施工意外造成的脱落, 导致设备变成不可用状态.
        9.11 设备安装位置离电源插座较远时候, DC电源延长线需按需定制, 延长后保证各项电气参数正常, 设备正常运作, 电源适配器AC端禁止延长, 确保安全
        9.12 所有涉及转接的接口, 其衔接处需使用防脱落的设计, 链接处需紧固, 防止转接线脱落
        9.13 RCM产品硬件要求支持多种访问协议的支持, 支持HTML, Microsoft .NET等多种主流的协议, 以最大减少对应未来软件技术升级的成本和难度.
        9.14 设备所有接口线材均不可线芯外露, 线材必须有完整的包覆及保护材料, 布线转角处需予以保护防止割伤损坏.
        9.15 要求RCM设备散热良好, 在环境最高55 °C时, 设备依然能正常功能, 不会遇到温度高导致的卡顿或热down等问题.
        9.16 设备的型号, FW版本, IP地址, 序列号或MAC 地址等信息, 需支持被HOST端获取.
        9.17 设备需要支持NTP时钟同步.
        9.18 RCM设备具备100/1000M自适应网络接口,支持IPv6/IPv4, 并且支持Telnet, SSH网络协议.
        9.20 单个RCM只需要一个RJ45网口并仅需要一个IP
        9.21 RCM类型为1V1（一个RCM仅控制一个机台PC）,
        9.22 单个RCM损坏/异常等, 只能影响所对应的单个机台PC不能操作, 不能影响所对应的机台正常RUN货及数据传送;
        9.23 不得于机台端的计算机上加装任何软件, 不得影响机台近端正常运作（例如, 安装RCM 设备后导致机台荧幕显示不正常等）
        9.24 提供系统使用记录查询. 使用记录存入数据库, 并可开放给特定账号直接访问, 通过SQL的方式快速获取相关信息.
        9.25 供货商选择RCM硬件必须考虑电压压降至100V, 对RCM及RCM系统无任何影响
        9.26 断电后复电及断网后恢复网络后, RCM能自动恢复工作且复电后调教参数不需要重新设置（自动恢复工作所需时间要小于1分钟）
        9.27 RCM客户端推荐使用实体机, 也支持虚拟桌面, PC配置应符合推荐配置
        9.28 当远端的控制端在设定的时间没有做操作, 控制通道的资源自动释放.
        9.29 设备调试方便, 可直接接笔记本或其它移动设备进行参数设置或调教.
        9.30 RCM设备的安装不需要机台端关机或重启, 若部分特殊机型不满足该要求, 则需要供应商作出相应的说明.
        9.31 RCM设备包括其附属部件,不得从机台端取电.
        9.32 采用硬件连线的方式获得机台端的荧幕信号, 键盘信号, 鼠标信号. 不得在机台端安装任何软件.
        9.33 RCM设备的画面传输和操作响应平均时间均不得超过500ms秒, 最大时间均不得超过1秒. 【设备端网络环境: FAB设备接入是1G, 交换机端是10G】

# summary

## 1. 远程操控与协同作业

- 纯硬件 KVM 接入: 采用硬件接口转接视频 / 键鼠信号, 机台端零软件安装, 不影响原厂设置与 Run 货
- 高清低延操控: 支持 1920×1200@60 Hz 及以上真彩色显示, 平均响应<500 ms, 最大<1s, 鼠标定位精准无拖尾
- 多人协同作业: 支持 4 人以上同时登入同一机台（1 人主控+ 多人监看）, 提供实时传讯交流平台与操作权有序交接机制
- 灵活画面管理: 支持自定义宫格布局（≥36 路）、全屏 / 缩放 / 自适应显示, 支持多主机单 / 多屏切换及双开模式
- 外设全面兼容: 支持 PS/2/USB 键鼠、触控板、轨迹球、电容笔、多国语言键盘及屏幕软键盘, 自动同步近远端鼠标

## 2. 设备建模与可视化管理

- 多层级设备建模: 支持区域- 机台树状结构管理, 支持模糊搜索定位, 支持个人收藏夹与自定义机台列表
- 实时状态可视化: 窗格内直接叠加显示机台名称、Run 货 Lot 信息、报警状态及离线原因, KVM 名称自动抓取同步
- 动态配置加载: 后台新增机台 /KVM 或权限变更后前端无需重启即可实时加载, 支持组态化接入非标机台按钮 / 画面
- 用户个性化设置: 用户配置云端存储, 支持任意终端登入后自动恢复既定宫格布局与偏好设置

## 3. 安全管控与权限体系

- 多级角色权限: 支持超级管理员 / 审计员 / 普通用户等多层角色, 权限精确到功能级只读 / 操作, 支持 AD 域账号自动同步
- Local/Remote 互锁: 物理 Interlock 按钮确保近端操作绝对优先, Remote 模式下支持“仅远端”或“双端”可配策略
- 控制权安全释放: 主控权限不可被强制踢出（超时或主动释放除外）, 近端按下 Interlock 时远端即时收到提示并降级为只读
- 连接准入控制: 联机数满或权限不足时智能提示, 空闲超时自动释放控制通道资源防止资源占用

## 4. 审计追溯与智能增强

- 全链路操作审计: 记录连接 IP/ 账号 / 时长 / 异常事件, 日志保留≥6 个月, 支持导出 CSV/Excel 及 SQL 直查
- 视频录屏回溯: 支持远程操作界面全程录制与回放（默认保留 30 天）, 画质可配, 满足 BigData 分析与合规审查
- AI 与自动化平台: 内置 AI 学习训练平台、OCR 文字识别、RPA 剧本脚本编辑与执行引擎, 支持自定义自动化任务
- 多维度统计报表: 提供按机台 / 人员 /KVM 维度的访问时长、在线历史、操作频次等分析报表

## 5. 系统架构与硬件可靠性

- 工业级硬件设计: 支持 55°C 高温运行, 防脱落电源 / 接口设计, 线材磁环滤波, 独立供电不取电于机台
- 高可用与自愈: 断电 / 断网恢复后<1 分钟自动重连且参数不丢失, 单点故障仅影响对应单机台不影响产线整体运作
- 跨平台与协议兼容: 客户端支持 Windows/Linux/Mac/Sun, 支持 HTML/.NET/Telnet/SSH/IPv6, 适配虚拟桌面环境
- 便捷运维部署: 支持 NTP 时钟同步、笔记本直连调试、热插拔安装（无需机台关机）, 提供标准 DLL 开发接口便于系统集成

# EAP-Terminology

| Abbreviation   | Full form                                                               | Desc                                                                                                  |
| :------------- | :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| MC             | Management Control                                                      | EAP 管理工具                                                                                          |
| CEID           | Collect Event ID                                                        | onlinesubstate(4=onlinelocal, 5=onlineremote) <br/> carrierholdtrigger(0 = hostrelease, 1=eqprelease) |
| SVID           | Status Variable ID                                                      | 可以在任意时刻都可以查询状态 <br> Temperature, Chamber, Clock, CJSpace, PortAccessNode, Control State |
| DN             | Defect Notes                                                            | 缺陷记录                                                                                              |
| DVID           | Data Variable ID                                                        | 在固定的时机, 伴随着机台事件才能查询出值                                                              |
| FMB            | Fab Monitoring Board                                                    | 监控面板                                                                                              |
| FT             | Final Test                                                              | 针对封装后的芯片的测试 <br/> 目的是剔除封装有问题的芯片, FT 之后就可以包装出货了                      |
| GEM            | Generic Model for Communications and Control of Manufacturing Equipment | 通用设备模型 <br/> 定义了通过通信链路所能看到的半导体设备                                             |
| HSMS           | High-Speed SECS Message Services                                        | 用 TCP/IP 协议, 用网口作为通讯口                                                                      |
| LDRQ/UDRQ/UDCM | load request / unload request / unload complete                         |                                                                                                       |
| PPID           | Process Program ID                                                      |                                                                                                       |
| RPTID          | Report ID                                                               | 可以自定义, 一对一, 一对多                                                                            |

# ADC

http://mirlab.org/dataset/public/?spm=5176.28103460.0.0.96a07551Xxqtvw

MIR-WM811K, 包含 811,000 个晶圆图谱

---

- EAP负责控制与采集（SECS/GEM通信, Recipe下发）;
- FDC负责分析与判定（Trace数据实时比对, Multivariate Analysis, Fault Classification）

# 硬件配置

AP 服务器 (Application Server)

- **承载业务逻辑的中间层服务器**: 与 DB（数据库服务器）相对, AP 服务器不直接存储核心数据, 而是运行 MES, EAP, SPC 等子系统的应用程序、中间件、Web 服务和 API 接口.
- **开发/测试环境的专用节点**: 这 3 台服务器专门用于搭建与生产环境隔离的 Dev/UAT 环境, 供开发人员进行代码调试、版本验证和用户验收测试, 避免测试操作污染生产数据库或影响产线运行.
- **区别于生产虚拟集群**: 生产环境的 AP 以虚拟机形式部署在 29 台宿主机上; 而开发 / 测试环境独立使用 3 台物理机, 既保证了测试资源的独占性, 也便于快速重装系统、克隆环境和模拟故障场景.

> **注意**: 此处的“AP”**不是** 指无线接入点, 也不是指先进过程控制, 在 CIM 硬件清单中“AP 服务器”是行业通用术语, 专指应用层服务器.

---

|   维度   |                     CIM DB 服务器                     |          开发 / 测试 AP 服务器           |                 生产虚拟集群宿主机                  |
| :------: | :---------------------------------------------------: | :--------------------------------------: | :-------------------------------------------------: |
| 核心角色 |          数据持久层: 承载所有子系统的数据库           | 非生产应用层: Dev/UAT 环境的应用逻辑验证 | 生产应用层: 承载 232 台 VM, 运行全部生产 AP/ 中间件 |
| 部署方式 |            物理机裸金属部署（严禁虚拟化）             |    物理机部署（可装虚拟化或直接 OS）     |        虚拟化宿主机（ESXi/KVM）, 1:8 超分比         |
| 硬件侧重 | 高 IOPS NVMe SSD、大内存 (≥512 GB)、RDMA 网卡、HBA 卡 |        均衡配置, 无需极致存储性能        |  高核心数 CPU、大内存 (≥1 TB)、万兆网络、冗余电源   |

---

| 指标              | SATA SSD (AHCI) | NVMe SSD (PCIe 4.0) | 提升幅度   |
| :---------------- | :-------------- | :------------------ | :--------- |
| 理论带宽上限      | ~600 MB/s       | ~7,000 MB/s         | >10 倍     |
| 最大命令队列数    | 1 × 32          | 64,000 × 64,000     | 指数级提升 |
| 典型随机读取 IOPS | ~10 万          | ~100 万+            | >10 倍     |
| 延迟              | ~100 μs         | ~10 μs              | 降低 90%   |

---

| 维度          | 全闪存 SAN 存储阵列                               | 机架式存储服务器                                                |
| :------------ | :------------------------------------------------ | :-------------------------------------------------------------- |
| 本质定义      | 专用存储硬件+ 嵌入式实时操作系统                  | 通用 x86 服务器+ 标准 OS/Linux+ 软件定义存储                    |
| 数据访问协议  | FC / iSCSI / NVMe-oF (块存储为主)                 | NFS / SMB / S3 / Ceph RBD (文件 / 对象 / 分布式块)              |
| Oracle 适配性 | 原生最佳: RAC 共享存储、ASM, SCSI-3 PR 锁原生支持 | 受限: 需额外软件层模拟共享块设备, RAC 部署复杂且风险高          |
| MySQL 适配性  | 可用但成本高                                      | 天然契合: MGR/InnoDB Cluster 基于本地盘+ 网络复制, 无需共享存储 |
| 可靠性模型    | 双控 / 四控冗余 + RAID + 热备盘, 99.999% 可用性   | 依赖软件副本 (3 副本 /EC), 节点故障时重建期间有降级风险         |
| 延迟特性      | 微秒级稳定低延迟 (<0.3 ms), 无 GC 抖动            | 毫秒级, 受 OS 调度 /GC/ 网络栈影响, 长尾延迟明显                |
| 扩展方式      | 纵向扩展 (Scale-Up): 加扩展柜, 控制器瓶颈固定     | 横向扩展 (Scale-Out): 加节点同时扩容+ 扩性能                    |
| 运维复杂度    | 厂商黑盒运维, 故障定位依赖原厂                    | 白盒运维, 需自建监控 / 告警 / 自动化运维体系                    |
| 单位 TB 成本  | 高（含专有硬件溢价+License）                      | 低（通用硬件+ 开源 / 商业软件授权）                             |
| 典型 CIM 用途 | Oracle 生产 DB、核心 MES/EAP 事务存储             | MySQL FDC/YMS、日志归档、备份目标、开发测试环境                 |

---

| 维度       | FC 集中式架构 (Oracle 侧)             | 分布式架构 (MySQL 侧)                      |
| :--------- | :------------------------------------ | :----------------------------------------- |
| 底层介质   | 专用全闪存阵列 + NVMe/SAS SSD         | 通用 x86 服务器 + 本地 NVMe/HDD            |
| 网络协议   | 光纤通道 (FCP), 无损、低延迟          | TCP/IP (RoCE/ 万兆以太网), 有损转无损      |
| 数据组织   | 中心化 LUN/ 卷, 控制器统一调度        | 数据切片打散至多节点, 哈希 / 一致性环定位  |
| 高可用机制 | 双控 / 四控冗余 + RAID + ADG 异地容灾 | 三副本 / 纠删码 + MGR 应用层高可用         |
| 性能特征   | 极低延迟 (<0.3 ms), IOPS 稳定可预测   | 高吞吐, 延迟受网络 / 副本同步影响 (1-5 ms) |
| 扩展模式   | Scale-Up (加扩展柜), 容量 / 性能绑定  | Scale-Out (加节点), 容量 / 性能线性增长    |
| 运维复杂度 | 存储厂商黑盒托管, DBA 只管用          | 需自建运维体系, 故障排查链路长             |
| 成本模型   | 硬件贵 + 原厂维保贵, 单位 TB 成本高   | 通用硬件 + 开源软件, 单位 TB 成本低        |

---

1. 生产 DB 集群 物理隔离原则:

    > - 量产线数据库必须物理部署, 严禁虚拟化
    > - MES/SPC 的 IO 极高, 必须做独占 RAC(Oracle Real Application Clusters)
    > - FDC 接受传感器数据, 写入压力大, 必须独占
    > - YMS/DMS 涉及大量良率分析查询, 与事务型 DB 混部会互相锁死, 必须独占
    >   核心是把单库 IO 峰值错开,
    > - 中试线因研发特殊性, 调整工艺和抓取 FDC 数据更频繁
    > - FDC 应该和 AMA 配对
    > - YMS/DMS 与 Report 分离

2. 开发测试集群

    > - 需要考虑 UAT 和 dev 环境, 按照 1:8 跑 VM, 保证版本更新 / 回退版本的空余 VM, 避免事故
    > - 中试线根据 GDPR/ 数据安全法的合规要求:
    > - 包含 1 台独立 DB 用于生产数据脱敏导入测试

3. 生产虚拟集群, 不能纯靠 1:8 分, 因为含有隐形开销

    > - CIM 系统需要 40% 的 vCPU 预留用于: 快照创建 / 恢复、HA 故障迁移时的瞬时算力激增、vMotion 在线迁移、以及 ESXi 宿主机自身管理开销, 扣除后 1:8 在 run 货高峰会因为 MES 响应超时变成 1:6

4. 全闪存 SAN 存储阵列 (双控 FC 架构)

    > - Oracle RAC 依赖共享块设备实现多节点并发读写, 对象存储是 REST API 访问, Oracle 根本不支持
    > - 按照 3 年数据增长, 加上 40% 快照空间

5. MES/EAP 终端（工控电脑）

    > - 设备 /5 = MES 终端
    > - 中试线研发线设备型号杂, 自动化程度低, EAP 终端密度反而更高
    > - 需预留质检站、包装区、仓库等非直接生产工位终端
    > - 工控机故障率高于办公 PC, 需 10% 现场备件 (基础需求×1.3 缓冲系数)

6. 数据采集与交互接口服务器
    > - 与DB服务器1:1, 每台DB服务器对应的子系统都有独立的SECS/GEM或Interface A数据流, 1:1是CIM行业标准架构

## Oracle 方案

| 序号 | 硬件系统名称                                     | 10K-13K WPM 期望数量    | 5K-8K WPM 期望数量      | 应用场景 / 数量拆解                                                                                                                                                                                                                                                                                                                                              | 应用板块                      |
| :--- | :----------------------------------------------- | :---------------------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| 1    | 2U 机架式 CPU 服务器 <br>（Oracle 生产 DB 集群） | 15 台 <br>+ 扩展单元    | 9 台 <br>+ 扩展单元     | **10K-13K 基准 (15 台)**: MES/SPC(2)、EAP/RMS/AMS/PMS/APC/RCM(3)、RTD(1)、ADG(1)、Report(1)、YMS/DMS(2)、FDC(2)、AMA(2)、FMB(1); 承载全部 15 子系统核心事务, RAC/ADG 物理部署; 先进制程>30% 时 FDC/APC+2 台. <br>**5K-8K 基准 (9 台)**: MES/SPC(2)、EAP/RMS/PMS(2)、RTD(1)、FDC/APC/RCM(2)、YMS/DMS/Report/AMS/AMA/FMB(2); 每新增 1 种工艺平台 YMS/FDC 独立+1 台 | Oracle 方案                   |
| 2    | 2U 机架式 CPU 服务器 <br>（Oracle 开发测试集群） | 3 台 <br>+ 扩展单元     | 2 台 <br>+ 扩展单元     | **10K-13K 基准 (3 台)**: UAT/DEV 环境按生产 1:1 镜像, 支撑 MES/EAP/RMS/SPC/Report/PMS/AMS/YMS/DMS/FDC/APC/RTD/AMA/RCM/FMB 全模块版本验证与回退测试; 每新增 1 个产品族+1 台. <br>**5K-8K 基准 (2 台)**: 含 1 台独立脱敏 DB 用于 15 子系统生产数据合规导入测试; 多版本并行验证时+1 台                                                                              |                               |
| 3    | 2U 机架式 CPU 服务器 <br>（Oracle 生产虚拟集群） | 28 台 <br>+ 扩展单元    | 12 台 <br>+ 扩展单元    | **10K-13K 基准 (28 台)**: 承载 15 子系统全部 AP/ 中间件 VM, 按 1:8 超分; MES/EAP/RMS/RTD/PMS/RCM 高并发事务集群占 50%, FDC/APC/YMS/DMS/Report/AMS/AMA/FMB 分析查询集群占 50%; 每+1K WPM 加 2 台. <br>**5K-8K 基准 (12 台)**: 按 1:8~1:10 加权超分; 每+1K WPM 加 1 台, 新工艺导入期临时+1 台                                                                      |                               |
| 4    | 全闪存 SAN 存储阵列 <br>（Oracle 专用 FC 架构）  | 2 台×260 TB<br>+ 扩展柜 | 2 台×100 TB<br>+ 扩展柜 | **10K-13K 基准**: 有效容量 260 TB, IOPS≥300K, 延迟<0.3 ms; NVMe 热层 150 TB(MES/SPC/EAP/RMS/RTD/PMS/RCM), SAS SSD 温层 110 TB(FDC/APC/YMS/DMS/Report/AMS/AMA/FMB); Oracle 分区启用存储级缓存加速, 禁用压缩; 每+1K WPM 加 1 个扩展柜. <br>**5K-8K 基准**: 有效容量 100 TB, NVMe 热层 60 TB, SAS SSD 温层 40 TB; 每+1K WPM 加 1 个扩展柜                           |                               |
| 5    | MES/EAP 终端 <br>（Oracle 关联工控电脑）         | 249 台 <br>+ 扩展单元   | 70 台 <br>+ 扩展单元    | **10K-13K 基准 (249 台)**: 覆盖 15 子系统全部工位; 自动化产线终端密度= 设备数÷5(占 60%), 半自动 / 手动工位密度= 设备数÷3(占 40%); 备件率 8%; 每+50 台设备加 8 台. <br>**5K-8K 基准 (70 台)**: 同比例缩放, 另加 5% 研发专用调试终端及半自动工位补配                                                                                                               | 终端数量待定                  |
| 6    | 数据采集与交互接口服务器 <br>（Oracle 侧）       | 13 台 <br>+ 扩展单元    | 7 台 <br>+ 扩展单元     | **10K-13K 基准 (13 台)**: 与 15 个子系统 DB 实例对应, 覆盖全部设备接入; 侧重事务完整性校验, 单线程处理为主; 标准协议设备 1 台带 30-50 台. <br>**5K-8K 基准 (7 台)**: 与 Oracle DB 物理机 1:1 对应; 新工艺验证期临时+1 台                                                                                                                                         | 与 CIM 系统 DB 服务器一一对应 |

## MySQL 方案

| 序号 | 硬件系统名称                                     | 10K-13K WPM 期望数量  | 5K-8K WPM 期望数量   | 应用场景 / 数量拆解                                                                                                                                                                                                                                                                                                                                                                                   | 应用板块                      |
| :--- | :----------------------------------------------- | :-------------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| 1    | 2U 机架式 CPU 服务器 <br>（MySQL 生产 DB 集群）  | 15 台 <br>+ 扩展单元  | 9 台 <br>+ 扩展单元  | **10K-13K 基准 (15 台)**: MES/SPC(2)、EAP/RMS/AMS/PMS/APC/RCM(3)、RTD(1)、YMS/DMS(2)、FDC(2)、AMA(1)、FMB(1)、备份节点 (1); 每台配≥3.84 TB NVMe SSD×4 作为本地数据盘, 采用 MGR/InnoDB Cluster 高可用; 先进制程>30% 时 FDC/APC+2 台. <br>**5K-8K 基准 (9 台)**: MES/SPC(2)、EAP/RMS/PMS(2)、RTD(1)、FDC/APC/RCM(1)、YMS/DMS/Report/AMS/AMA/FMB(2)、备份节点 (1); 每新增 1 种工艺平台 YMS/FDC 独立+1 台 | MySQL 方案                    |
| 2    | 2U 机架式 CPU 服务器 <br>（MySQL 开发测试集群）  | 3 台 <br>+ 扩展单元   | 2 台 <br>+ 扩展单元  | **10K-13K 基准 (3 台)**: UAT/DEV 环境按生产 1:1 镜像, 支撑 15 子系统快速 Schema 变更与多版本并行测试; 每新增 1 个产品族+1 台. <br>**5K-8K 基准 (2 台)**: MySQL 测试实例可与 AP 混部以节省资源; 合规审计需求增加时+1 台                                                                                                                                                                                |                               |
| 3    | 2U 机架式 CPU 服务器 <br>（MySQL 生产虚拟集群）  | 28 台 <br>+ 扩展单元  | 12 台 <br>+ 扩展单元 | **10K-13K 基准 (28 台)**: 承载 15 子系统全部 AP/ETL/ 采集 VM, MES/EAP/RMS/RTD/PMS/RCM CPU 密集型集群按 1:6 超分 (占 40%), FDC/APC/YMS/DMS/Report/AMS/AMA/FMB 轻量采集 / 日志集群按 1:10 超分 (占 60%); 每+1K WPM 加 1 台. <br>**5K-8K 基准 (12 台)**: 按 1:8~1:10 加权超分; 每+1K WPM 加 1 台, 新工艺导入期临时+1 台                                                                                  |                               |
| 4    | 2U 机架式存储服务器 <br>（MySQL 配套分布式存储） | 4 台 <br>+ + 扩展柜   | 2 台 <br>+ + 扩展柜  | **10K-13K 基准 (4 台)**: 承载 15 子系统 ETL 暂存区、历史数据归档、MGR 异步备份目标; 采用三副本分布式架构, 有效容量 130 TB; NVMe 缓存层 50 TB(MES/EAP/FDC/RCM 热数据缓冲), HDD/SAS SSD 容量层 80 TB(RPT/YMS/DMS/AMS/FMB 冷数据); 启用纠删码节省 30% 空间; 每+1K WPM 加 1 台. <br>**5K-8K 基准 (2 台)**: 有效容量 50 TB, NVMe 缓存层 20 TB, 容量层 30 TB; 每+1K WPM 加 1 台                             |                               |
| 5    | MES/EAP 终端 <br>（MySQL 关联工控电脑）          | 249 台 <br>+ 扩展单元 | 70 台 <br>+ 扩展单元 | **10K-13K 基准 (249 台)**: 覆盖 15 子系统全部工位; 自动化产线终端密度= 设备数÷5(占 60%), 半自动 / 手动工位密度= 设备数÷3(占 40%); 备件率 8%; 每+50 台设备加 8 台. <br>**5K-8K 基准 (70 台)**: 同比例缩放, 另加 5% 研发专用调试终端及半自动工位补配                                                                                                                                                    | 终端数量待定                  |
| 6    | 数据采集与交互接口服务器 <br>（MySQL 侧）        | 13 台 <br>+ 扩展单元  | 7 台 <br>+ 扩展单元  | **10K-13K 基准 (13 台)**: 与 15 个子系统 MySQL DB 实例对应, 覆盖全部设备接入; 侧重批量 ETL 与流式写入, 多线程并发处理; 非标协议设备 1 台带 10-15 台. <br>**5K-8K 基准 (7 台)**: 与 MySQL DB 物理机 1:1 对应; 新工艺验证期临时+1 台                                                                                                                                                                    | 与 CIM 系统 DB 服务器一一对应 |

# (一) CIM 业务划分

半导体领域中计算机集成制造（CIM/Computer Integrated Manufacturing）, 是行业标准系统, 作为半导体制造工厂（FAB）的“中枢神经系统”, 其核心业务为实现全流程自动化、数字化与智能化管控. CIM 系统包含四大核心业务板块: 设备自动化与控制、生产执行与追踪、智能调度与物流、工程与质量管理

## 1. CIM 子系统介绍

创新中心现存业务共包含 15 个 CIM 子系统

- EAP(Equipment Automation Program): 设备自动化程序
- RCM(Remote Control Management): 远程控制管理
- FDC(Fault Detection and Classification): 故障检测与分类
- APC(Advanced Process Control): 先进过程控制

- MES(Manufacturing Execution System): 制造执行系统
- RMS(Recipe Management System): 配方管理系统
- SPC(Statistical Process Control): 统计过程控制
- AMS(Alarm Management System): 告警管理系统
- PMS(Preventive Maintenance System): 设备维修保养系统

- RTD(Real-Time Dispatching): 实时派工系统
- AMA(Activity Management of Full-Automation): 全自动化控制平台

- YMS(Yield Management System): 良率管理系统
- DMS(Defect Management System): 缺陷管理系统
- RPT(Reporting System): 报表系统
- FMS(Factory Monitoring System): 工厂监控系统

## 2. 现阶段痛点

现阶段因缺乏信息技术（IT/Information Technology）相关支撑, 无法对上述系统进行工作内容的推进, 包括: 厂商选型、生产系统软件适配、厂商软件的本地开发与部署、客制化功能需求开发与部署等.

## 3. 现阶段解决方案

现提议申请成立制造信息技术组（MIT/Manufacturer Information Technology）, 负责上述 15 个子系统的规划、实施、落地等工作

因办公人员不足的原因暂定根据最小规模划分原则, 在 MIT 组下按 CIM 系统业务模块进行划分业务模块

| 业务板块         | 包含子系统              | 对应小组 |
| :--------------- | :---------------------- | :------- |
| 设备自动化与控制 | EAP, RCM, FDC, APC      | EAP 组   |
| 生产执行与追踪   | MES, RMS, SPC, AMS, PMS | MES 组   |
| 智能调度与物流   | RTD, AMA                | RTD 组   |
| 工程与质量管理   | YMS, DMS, RPT, FMS      | YMS 组   |

其中, 因时间紧、任务重, 为确保通线时间节点, 应以 **EAP、MES、FDC** 三大系统的配套方案建设为重点, 再后续完成其余子系统的解决方案

应在 1-3 个月内组建 20 人自有团队, 并联合厂商驻场开发及协助人员以完成开发任务、资源整合、实施保障. 待系统稳定运行后, 逐步扩大 MIT 组的人数规模并降低外部依赖, 有序实现能力内化、知识沉淀、自主运维, 为 CIM 系统长期稳定运行与生产质量提供坚实支撑

---

# (二) MIT 组开发规划

## 1. 编程语言

因厂商招标结果暂不确定, 初步需求开发语言

| 小组   | 编程语言                             |
| :----- | :----------------------------------- |
| EAP 组 | C, C++                               |
| MES 组 | C#, Java                             |
| RTD 组 | Python, Java, JavaScript, TypeScript |
| YMS 组 | Python, Java, JS, TS                 |

## 2. 框架、中间件、开发工具

招聘时需掌握计算机知识包括:

- **数据库**: MySQL, PostgreSQL 等
- **消息队列**: RabbitMQ, Kafka 等
- **缓存**: Redis
- **前端框架**: Vue2/Vue3 等
- **后端框架**: Springboot2/Springboot3 等
- **ORM框架**: MyBatis/MyBatis-Plus 等
- **包管理**: Maven, Anaconda
- **版本管理**: Git
- **AI框架**: Pytorch
- **检索增强数据库**: Neo4j/Langchain
- **容器化**: Docker, Kubernetes
- **日志解析工具**: ElasticSearch

## 3. 岗位划分

为保障系统上线时间, 并且考虑到全栈工程师的稀缺性, 可以分为以下岗位:

| 岗位             | 必备技能                                                                                   | 框架 / 协议 / 工具                 |
| :--------------- | :----------------------------------------------------------------------------------------- | :--------------------------------- |
| 自动化开发工程师 | C/C++                                                                                      | SECS/GEM 协议                      |
| 前端工程师       | C#/JavaScript/TypeScript                                                                   | Vue2/Vue3                          |
| 后端工程师       | Java, MyBatis/MyBatis-Plus, MySQL/PostgreSQL, MQ, Redis, Docker, Kubernetes, ElasticSearch | Springboot2/Springboot3            |
| 前后端工程师     | C#/JavaScript/TypeScript/Java                                                              | Vue2/Vue3, Springboot2/Springboot3 |
| AI 工程师        | Python, Neo4j/Langchain                                                                    | Pytorch                            |
| 全栈工程师       | 上述所有                                                                                   | 上述所有                           |

#

```text
┌───────────────────────────────────────────────────────────────────────┐
│                             门户管理（统一入口）                         │
│   • SSO单点登录（CAS/OAuth2）   • 应用导航   • 待办中心   • 消息中心       │
│                   ↑ SSO/Token | 菜单/权限/消息                             │
└───────────────┬───────────────┴───────────────┬───────────────────────────┘
                │                               │
      ┌─────────▼─────────┐         ┌─────────▼─────────┐
      │ 设备自动化与控制   │         │ 生产执行与追踪     │
      │ (EAP组)           │         │ (MES组)           │
      │ • EAP              │        │ • MES             │
      │ • RCM              │        │ • RMS             │
      │ • FDC              │        │ • SPC             │
      │ • APC              │        │ • AMS             │
      │                    │        │ • PMS             │
      └─────────┬─────────┘         └─────────┬─────────┘
                │                               │
      ┌─────────▼─────────┐         ┌─────────▼─────────┐
      │ 智能调度与物流     │         │ 工程与质量管理     │
      │ (RTD组)           │         │ (YMS组)           │
      │ • RTD              │         │ • YMS              │
      │ • AMA              │         │ • DMS              │
      │                    │         │ • RPT              │
      │                    │         │ • FMS              │
      └───────────────────┘         └───────────────────┘
                ▲                               ▲
                │                               │
        ┌───────┴───────────────┐   ┌───────────┴───────────────┐
        │    集成技术底座       │   │       数据与消息总线       │
        │ • SSO认证             │   │ • Kafka/RabbitMQ (事件)    │
        │ • WebService/REST     │   │ • SECS/GEM (设备协议)      │
        │ • JDBC/DBLink         │   │ • MQTT/OPC UA (实时流)     │
        │ • FTP/ESB (文件交换)  │   │ • DBLink/API (数据同步)    │
        │ • 电子签章 (CA/SDK)   │   │ • 定时任务/ETL              │
        └───────────────────────┘   └─────────────────────────────┘
```

- SSO（Single Sign-On, 单点登录） 是一种身份认证机制, 它允许用户只需登录一次, 就可以访问所有相互信任的应用系统, 而无需在每个系统中重复输入用户名和密码.
- FTP（文件传输协议）, 最传统、最底层的文件搬运工, 局限于非实时、无事务保证、需自行解析文件、错误处理困难
- ESB（企业服务总线）, 当 FTP 把文件搬过来后, ESB 负责将其转化为标准服务调用; 或者在不同异构系统（如 SAP ERP ↔ MES ↔ YMS）之间做协议适配.
- CA (Certificate Authority, 证书授权中心), 负责签发、管理和吊销数字证书, 通常对接企业内部 PKI 体系或国家认可的第三方 CA 机构
- SDK (Software Development Kit, 签章开发套件), 嵌入到各业务系统中的“签章,引擎”, 通常为 DLL/JAR/REST API 形式, 支持国密 SM2/SM3 或国际 RSA/AES 算法

1. 设备自动化与控制（EAP 组）
   EAP ↔ RCM: 实线双向（远程控制指令下发与状态回传）
   EAP → FDC: 实线（原始传感器 / 量测数据流, 秒级）
   EAP → APC: 实线（过程参数反馈, 用于 R2R 控制）
   EAP ↔ MES: 实线（工单执行、设备状态上报; SECS GEM）
   RCM → PMS: 虚线（维修触发请求, 流程交互）
   FDC → APC: 实线（异常信号触发闭环调整）
   APC → RMS: 实线（自动更新 Recipe 参数）
2. 生产执行与追踪（MES 组）
   MES ↔ RMS: 实线双向（配方请求 / 下载）
   MES → SPC: 实线（实时 Lot/Wafer 量测数据）
   MES → AMS: 实线（设备告警关联工单）
   MES → PMS: 实线（设备 OEE/MTBF 数据驱动预防性维护）
   SPC → FDC: 实线（统计异常作为 FDC 输入）
   AMS → FMS: 虚线（全局告警聚合至监控大屏）
3. 智能调度与物流（RTD 组）
   RTD ↔ AMA: 实线双向（搬运指令与完成确认; 基于 VDA 2860 或 SECS）
   RTD → MES: 实线（接收工单并反馈执行进度）
   AMA → EAP: 实线（FOUP transfer 触发设备门禁 / 腔体准备）
   FMS → RTD: 虚线（设备阻塞 / 空闲状态用于动态重调度）
4. 工程与质量管理（YMS 组）
   YMS ↔ DMS: 实线双向（良率下降 → 缺陷根因分析）
   YMS ← SPC/FDC/APC: 实线（多源数据融合计算 Yield Impact）
   DMS → MES: 实线（缺陷严重度触发 Lot Hold）
   RPT ← 所有系统: 虚线（报表数据抽取; 支持 BI 直连）
   FMS ↔ RPT: 实线（工厂 KPI 看板数据源）
   FMS ← EAP/AMA/RTD: 实线（设备+ 物流实时状态汇聚）

| 系统 | 核心功能                                                        | 数据流向          |
| :--- | :-------------------------------------------------------------- | :---------------- |
| EAP  | SECS/GEM 协议转换、设备指令下发、实时数据采集、设备状态管理     | ↔ 机台 (SECS/GEM) |
| RCM  | 远程指令控制、设备状态监控、安全准入与操作溯源                  | → EAP → 机台      |
| FDC  | 传感器数据采集、实时异常检测、故障分类诊断、自动停机拦截        | ← EAP ← 机台      |
| APC  | 工艺模型计算、配方参数动态调整、Run-to-Run 控制、反馈与前馈优化 | ↔ EAP ↔ FDC       |

## 🔗 EAP 是绝对中心节点

### RCM 不直连机台

所有远程控制指令（如 Start/Stop/Recipe Select）必须经由 EAP 转换为 SECS/GEM 消息, RCM 仅作为人机交互前端

1. **同步指令下发** (RESTful API / gRPC)
2. **异步状态推送** (WebSocket / SSE / Kafka)

| 方向      | 触发方        | 数据内容                    | 通信模式       | 技术实现                | 为什么不能反过来                                |
| :-------- | :------------ | :-------------------------- | :------------- | :---------------------- | :---------------------------------------------- |
| RCM → EAP | 操作员 / 系统 | 控制指令、查询请求          | 同步请求- 响应 | gRPC / REST API         | 指令必须等待执行结果确认, 天然适合同步调用      |
| EAP → RCM | 机台事件驱动  | 状态变更、Alarm, Trace Data | 异步主动推送   | SSE / WebSocket / Kafka | 机台事件不可预测, 轮询会导致秒级延迟 + 资源浪费 |

> - **gRPC (Google Remote Procedure Call)**: 由 Google 开源的高性能 RPC 框架. 它使用 Protobuf 进行二进制序列化, 基于 HTTP/2 协议传输, 让跨语言的服务调用像调用本地函数一样简单、快速.
> - **SSE (Server-Sent Events)**: 基于标准 HTTP 的服务器向客户端单向推送协议. 服务器保持一个长连接, 持续以 `text/event-stream` 格式发送事件数据, 浏览器原生支持（EventSource API）.

---

### FDC 不直连机台

FDC 所需的 Trace Data, SVID 等实时传感器数据, 由 EAP 从机台采集后通过消息队列（Kafka/RabbitMQ）推送给 FDC.

**FDC ↔ EAP 双向数据流: **

- **上行（EAP → FDC）**: 通过消息队列推送 Trace Data, SVID, Equipment Status 等实时采集数据;
- **下行（FDC → EAP）**: 通过 API/MQ 下发告警拦截指令、监控配置变更、分析结果回写请求, 由 EAP 翻译后作用于机台或上报上层系统.

---

### APC 不直连机台

APC 的所有参数调整与数据获取均通过 EAP 中转, EAP 是 APC 与机台交互的唯一协议网关.

**APC ↔ EAP 双向数据流: **

- **上行（EAP → APC）**: 通过消息队列 /API 推送量测数据、设备状态、工艺过程数据及配方信息, 为 APC 模型计算提供输入;
- **下行（APC → EAP）**: 通过 API/MQ 下发反馈控制参数（Offset/Setpoint）、前馈补偿值、模型更新指令, 由 EAP 翻译为 SECS/GEM 消息写入机台或同步至 MES.

> **Run-to-Run (R2R) 控制**
>
> APC 最核心的闭环机制. 利用上一批次 / 晶圆的事后量测结果, 通过 EWMA 等算法计算出下一批次需补偿的 Offset, 使工艺输出持续逼近目标值. 该“读取量测 → 计算 Offset → 下发新参数”的完整循环, 完全依赖 EAP 作为执行通道; 没有 EAP, R2R 仅为离线报表, 无法实现真正的批次级动态控制. 典型应用包括 CMP 研磨时间、Etch CD 关键尺寸、薄膜沉积厚度控制.

> **反馈与前馈优化**
>
> R2R 控制的两种互补策略, 解释了 APC 为何必须同时对接 EAP 与 FDC:
>
> - **反馈控制 (Feedback, FB)**: “治已病”. 基于当前批次事后量测数据修正历史漂移, 响应滞后至少一个 Run. 数据来源为 EAP 推送的 Metrology 数据, 计算出的 FB Offset 经 EAP 写回机台.
> - **前馈控制 (Feedforward, FF)**: “治未病”. 基于上游量测或 FDC 实时数据, 在本批次加工前 / 中直接抵消上游传入的变异. 数据来源为 FDC/EAP 提供的实时上下文, 计算出的 FF 补偿经 EAP 注入机台.
>
> 现代 Fab 的 APC 模型通常采用 `Final Offset = FB_Offset + FF_Offset` 叠加策略, 这正是 APC 需要 `↔ EAP ↔ FDC` 三方协同的根本原因.

• FDC → APC: [OOC Event, Virtual Metrology, FF Context]
• APC → FDC: [Compensation Log, Model Confidence, Predicted CD Shift]
• FDC → APC: 提供实时异常事件、虚拟量测（如 SVID 趋势）、上游变异信号（用于 FF）
• APC → FDC: 回传补偿动作日志、模型置信度、预期效果预测（用于验证 / 拦截）

#

- MES 制造执行系统, 日常涉及工单管理、批次追踪、过站管控、物料绑定、机台分配、生产历史记录等核心制造流程数字化
    1. 生产排程与工单管理
    2. 晶圆 / 批次级全流程追踪
    3. 设备状态监控与派工
    4. 物料管理与 WIP 控制
    5. 良率追溯与谱系记录
    6. 与其他子系统（RMS/SPC/PMS 等）的流程互锁
- RMS 配方管理系统, 日常涉及配方创建、版本管理、上传下载、校验比对、权限管控、变更审批等流程数字化
    1. Recipe版本控制与审批流
    2. 参数合规性校验与比对
    3. Recipe自动下发与上传
    4. Golden Recipe管理与差异分析
    5. 跨机台/跨厂区Recipe同步
    6. Recipe使用历史与关联追溯
- SPC 统计过程控制, 日常涉及 Inline/Offline 数据采集、控制图绘制、异常判定规则触发、OOC/OOS 处置、CPK 能力分析、SPC 报表生成等流程数字化
    1. 实时控制图绘制与判异
    2. 制程能力指数计算
    3. OOC/OOS自动拦截与Hold Lot
    4. 多变量分析与趋势预警
    5. 量测数据自动采集与清洗
    6. SPC规则库管理与自定义
- AMS 告警管理系统, 日常涉及告警规则配置、多源告警聚合、分级通知推送、告警确认与处理、历史告警查询、告警趋势分析与处理、历史告警查询、告警趋势分析等场景
    1. Alarm标准化与严重等级分类
    2. 智能过滤与降噪
    3. 告警升级与通知路由
    4. Alarm关联分析与根因推荐
    5. 处理SOP知识库联动
    6. MTBF/MTTR统计分析
- PMS 设备维修保养系统, 日常涉及机台保养计划制定、Check List 派发与执行派发与执行、备件更换记录、保养结果确认、机台维保数据等全流程数字化管理
    1. PM计划自动生成与调度
    2. 备件库存与消耗管理
    3. PM执行记录与电子签核
    4. 设备健康度评估与预测
    5. 维修工时与成本核算
    6. PM后Qualification验证联动

| 维度       | Interface A (SEMI E132/E133) | RESTful API                    |
| :--------- | :--------------------------- | :----------------------------- |
| 底层传输   | TCP/IP + XML/SOAP + WSDL     | HTTP/HTTPS + JSON/XML          |
| 通信模式   | 双向、支持订阅 / 推送        | 请求- 响应（单向拉取为主）     |
| 数据模型   | 严格遵循 SEMI 对象模型       | 自定义资源模型                 |
| 实时性     | 毫秒级, 原生支持事件订阅     | 秒级, 依赖轮询或 SSE/WebSocket |
| 语义定义   | 标准化（所有机台含义一致）   | 非标准化（各厂商接口各异）     |
| 安全机制   | TLS + 证书 + SEMI E187/E188  | OAuth2 / JWT / API Key         |
| 生态定位   | OT 层（设备 ↔ EAP/RMS/FDC）  | IT/OT 融合层（MES ↔ 上层应用） |
| 开发复杂度 | 高（需专用 SDK/ 栈）         | 低（通用 HTTP 库即可）         |

```txt
            [ MES ] ←──→ [ RMS ]
           ↗   ↑   ↖      ↕
          ↗    |     ↖     ↕
      [ PMS ] ←─┼─→ [ AMS ]
           ↖    |     ↗     ↕
            ↖   ↓   ↗      ↕
            [ SPC ] ←──────↗
```

| 发起方 ↔ 接收方 | ➡️ 正向流 (A → B) 核心内容                                           | ⬅️ 反向流 (B → A) 核心内容                                             | 业务闭环价值                                                  |
| :-------------- | :------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------ |
| MES ↔ RMS       | 过站前 Recipe 校验请求; 批次-Recipe 绑定指令; Recipe 下载触发信号    | Recipe 校验结果 (OK/NG); 实际执行 Recipe 版本回传; 下载完成 / 失败确认 | 确保“正确的批次在正确的机台执行正确的配方”, 防止错料 / 错程式 |
| MES ↔ SPC       | 量测采样计划下发; 批次上下文信息 (Lot/Step/Tool); SPC Chart 配置同步 | OOC/OOS 违规信号; Hold Lot / Release Lot 指令; CPK 趋势预警            | 实现质量与生产的联动, 异常时自动拦截, 避免批量报废            |
| MES ↔ AMS       | 设备状态变更 (Busy/Idle/Down); 工单优先级变更; 告警屏蔽规则下发      | 标准化告警事件; 设备 Down 机原因码; 告警升级通知; MTTR 统计            | 将底层海量 Alarm 转化为生产可感知的业务事件, 支撑 OEE 分析    |
| MES ↔ PMS       | PM 计划触发信号; 设备锁定 / 解锁指令; 备件消耗扣减请求               | PM 开始 / 结束事件; Qual 验证结果; 维修工时报告; 设备释放确认          | 确保保养不影响排程, 保养后设备经 Qual 合格才恢复生产          |
| RMS ↔ SPC       | Golden Recipe 参数基准值; Recipe 变更通知; 工艺窗口规格              | 参数漂移趋势报告; Recipe 优化建议; SPC 违规关联的 Recipe 版本          | 建立“配方- 质量”因果链, 用质量数据驱动 Recipe 持续优化        |
| RMS ↔ AMS       | Recipe 执行阶段的告警过滤规则; 特定 Recipe 的告警阈值配置            | Recipe 执行期间的专属告警记录; 因告警导致的 Recipe 中断事件            | 区分“设备通用告警”与“工艺相关告警”, 提升 RMS 根因分析精度     |
| RMS ↔ PMS       | 高磨损 Recipe 的 PM 计数加权因子; 特殊 Recipe 后的强制 Qual 请求     | PM 后机台参数重置确认; Qual 失败导致的 Recipe 禁用通知                 | 实现基于实际工艺负载的动态保养, 而非僵化的固定周期 PM         |
| SPC ↔ AMS       | SPC 违规触发的告警生成请求; 控制限变更通知                           | 设备异常告警作为 SPC 异常分类标签; 告警恢复后的 SPC 复位信号           | 将设备健康状态纳入 SPC 判异逻辑, 区分“真异常”与“设备干扰”     |
| SPC ↔ PMS       | 制程能力下降趋势 (CPK↓); 连续 OOC 但设备无告警的隐性异常             | PM 完成后的首件量测数据; 部件更换后的基线偏移报告                      | 用质量趋势触发预测性维护, 用 PM 后数据验证保养效果            |
| AMS ↔ PMS       | 关键部件告警触发的 CBM 维修工单; 告警频次超阈值预警                  | 维修完成后的告警计数器复位; 同类告警的维修 SOP 推荐                    | 从“定期保养”升级为“按需保养”, 减少过度维护与非计划停机        |

---

| 发起方 → 接收方 | 传输内容示例                                                                          | 协议 / 机制                             |
| :-------------- | :------------------------------------------------------------------------------------ | :-------------------------------------- |
| EAP → MES       | 设备状态变更（Busy/Idle/Alarm）、Track In/Out, SVID 采集完成通知、Recipe 下载确认     | SECS/GEM (S2F37/S2F41), Interface A, MQ |
| MES → EAP       | 工单派发指令、Lot 绑定信息、设备锁定 / 解锁、SPC Hold/Release 指令                    | SECS/GEM (S2F37/S2F41), Interface A, MQ |
| EAP → RMS       | 实际执行 Recipe 上传、参数漂移日志、机台配置快照                                      | Interface A (E133/E130)                 |
| RMS → EAP       | Recipe 下载指令、版本校验结果（OK/NG）、Golden Recipe 同步、参数合规性反馈            | Interface A (E133/E130)                 |
| EAP → SPC       | 原始量测数据（Inline Metrology）、批次上下文（Lot/Step/Tool）、Run ID                 | MQ / Kafka / SECS/GEM S2F41             |
| SPC → EAP       | OOC/OOS 违规信号、Hold Lot/Release Lot 指令、CPK 异常预警、控制限变更通知             | MQ / SECS/GEM S2F41                     |
| EAP → AMS       | 原始设备 Alarm Code, Event Log、设备健康快照                                          | SECS/GEM S5/S6, MQ                      |
| AMS → EAP       | 标准化告警事件（含等级 / 原因码）、告警抑制指令、升级路径触发信号                     | SECS/GEM S5/S6, MQ                      |
| EAP → PMS       | Run Count / Wafer Count / Cycle Count、部件磨损计数、设备负载指标                     | REST API / MQ                           |
| PMS → EAP       | PM 开始 / 结束指令、设备锁定请求、Qual 验证触发、备件更换确认                         | REST API / MQ                           |
| APC → MES       | Run-to-Run 补偿结果（ΔCD/ΔOverlay）、模型置信度、预测偏移量、补偿生效确认             | REST API / MQ                           |
| MES → APC       | 新批次启动信号、配方变更通知、工艺窗口更新、SPC 异常关联标记                          | REST API / MQ                           |
| APC → RMS       | 补偿后参数建议值、模型推荐 Recipe 变体、工艺窗口优化建议                              | REST API                                |
| RMS → APC       | Golden Recipe 基准值、工艺约束边界（Min/Max）、历史 Recipe 性能评分                   | REST API                                |
| APC → SPC       | 补偿动作日志（时间 / 参数 / 效果）、预期效果预测、模型更新触发信号                    | MQ / Kafka                              |
| SPC → APC       | 异常事件（OOC/OOS）、虚拟量测值（VM）、上游变异信号（如 FDC 趋势）、控制限偏离报告    | MQ / Kafka                              |
| FDC → MES       | 异常分类报告（Top 3 模式）、Trace Data 摘要、实时告警聚合、Root Cause 初判            | MQ / REST API                           |
| MES → FDC       | 批次上下文（LotID/Step/Tool）、采样计划（Sampling Plan）、设备状态快照、SPC Hold 状态 | MQ / REST API                           |
| FDC → SPC       | Virtual Metrology (VM) 数据、SVID 趋势分析、设备行为特征向量                          | MQ                                      |
| SPC → FDC       | SPC 违规关联的 FDC 事件 ID、控制限变更通知、需复现的异常时段标记                      | MQ                                      |
| RCM → MES       | 操作员指令（Start/Stop/Hold/Resume）、手动干预记录、质量放行确认                      | REST API / WebSocket                    |
| MES → RCM       | 实时 WIP 看板、设备状态（含 OEE）、告警摘要（AMS 聚合）、SPC/FDC 分析结论、维修进度   | REST API / WebSocket                    |
| RCM → APC       | 手动补偿值输入、模型禁用 / 启用指令、目标偏移设定                                     | REST API / WebSocket                    |
| APC → RCM       | 补偿建议可视化（图表+ 数值）、模型健康度（Accuracy/Stability）、预测结果及置信区间    | REST API / WebSocket                    |

---

> SVID 是 Status Variable ID（状态变量标识符）

| 术语  | 全称                  | 作用                                                     |
| :---- | :-------------------- | :------------------------------------------------------- |
| SVID  | Status Variable ID    | 标识实时状态 / 传感器读数（只读或周期性采集）            |
| ECID  | Equipment Constant ID | 标识设备配置常量（如校准系数、硬件版本, 通常不频繁变化） |
| DVVAL | Data Value Definition | 标识可设定的工艺参数（Setpoint, 可由 EAP 写入修改）      |

本质是“数据标签”

SVID 是一个整数编号（如 12001）, 它对应机台内部的一个具体变量. 例如:

SVID=12001 → 腔体温度 (Chamber Temperature)

SVID=12002 → 射频功率 (RF Power)

SVID=12003 → 气体流量 (Gas Flow Rate)

SVID=12004 → 当前加工晶圆数 (Wafer Count)

---

| 发起方 → 接收方 | 传输内容示例                                                                                      | 协议 / 机制                    |
| :-------------- | :------------------------------------------------------------------------------------------------ | :----------------------------- |
| RTD → AMA       | 搬运指令（From/To Port）、优先级（Priority）、路径偏好、取消 / 变更搬运请求                       | REST API / MQ / SECS/GEM S2F41 |
| AMA → RTD       | 搬运完成确认、车辆 / 天车状态（Idle/Busy/Fail）、Port 占用状态、预计到达时间（ETA）               | REST API / MQ / SECS/GEM S6F11 |
| RTD → MES       | 批次选择结果（Next Lot）、设备预留请求、WIP 拉动信号、调度异常反馈（No Lot Available）            | REST API / MQ / Database View  |
| MES → RTD       | 工单队列（Queue List）、批次属性（Product/Priority/DueDate）、工艺路线约束、Hold/Release 状态变更 | REST API / MQ / Database Sync  |
| RTD → EAP       | 加工指令（Process Start）、Recipe 参数覆盖、Lot-to-Equipment 绑定确认、跳过 / 重跑指令            | SECS/GEM S2F41 / Interface A   |
| EAP → RTD       | 设备就绪信号（Ready for Next Lot）、Track In/Out 完成通知、当前腔体 / 载具状态、加工中断告警      | SECS/GEM S6F11 / Interface A   |

---

| 发起方 → 接收方 | 传输内容示例                                                               | 协议 / 机制               |
| :-------------- | :------------------------------------------------------------------------- | :------------------------ |
| YMS → DMS       | 缺陷复查请求（Review Request）、缺陷分类规则更新、WAT/CP 测试数据关联键值  | REST API / MQ / DB Link   |
| DMS → YMS       | 缺陷图谱（Defect Map）、ADC 自动分类结果、缺陷密度趋势、Killer Defect 标记 | REST API / MQ / DB Link   |
| YMS → RPT       | 良率分析模型输出、异常批次清单、关键指标（KPI）计算结果、根因分析结论      | REST API / MQ / ETL       |
| RPT → YMS       | 用户自定义查询参数、报表订阅配置、手动标注反馈（False Alarm 修正）         | REST API / WebSocket      |
| YMS → FMS       | 量测采样策略调整建议、特定站点加测指令、量测数据质量反馈                   | REST API / MQ             |
| FMS → YMS       | 离线 / 在线量测原始数据、量测设备状态、采样执行确认、Metrology Recipe 版本 | REST API / MQ / SECS/GEM  |
| DMS → FMS       | 缺陷坐标引导量测请求、Review SEM 图像采集指令                              | REST API / SECS/GEM S2F41 |
| FMS → DMS       | Review SEM 图像文件路径、缺陷尺寸 / 形貌量测结果                           | REST API / MQ             |
| RPT → MES       | 生产绩效看板数据、OEE 统计报表、批次历史追溯摘要                           | REST API / WebSocket      |
| MES → RPT       | WIP 快照、工单完成记录、设备利用率原始日志                                 | REST API / MQ / DB View   |
| RPT → EAP       | 设备性能趋势图表、PM 合规性报告、SVID 历史回放请求                         | REST API / WebSocket      |
| EAP → RPT       | 实时设备状态流、Trace Data 归档索引、Alarm 历史记录                        | MQ / Kafka / DB Sync      |

# CIM 负责人

工作职责:

1. 系统架构与集成治理
    - 统一技术路线管控: 确保 CIM 各子系统由不同供应商/团队实施
    - 跨系统集成设计评审: 主导关键集成场景的方案评审
2. 项目统筹与交付管理
    - 全生命周期进度协同: 统筹 CIM 各子系统的建设节奏, 识别关键路径依赖
    - 供应商与团队绩效管理: 对 CIM 各子系统负责人及其背后的供应商/开发团队进行交付质量、响应时效、文档完备性等维度的考核, 推动问题闭环
3. 业务对齐与价值验证
    - 需求溯源与变更控制: 确保CIM 各子系统的功能建设均能追溯至明确的业务痛点
    - 端到端业务流程验证: 组织跨系统的DEV开发、UAT反馈、压力测试、PROD上线
