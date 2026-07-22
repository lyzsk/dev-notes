# CIM

- CIM
    - [CIM](#cim)
    - [CIM-Terminology](#cim-terminology)
- EES
    - [EAP](#eap)
    - [FDC](#fdc)
    - [RMS](#rms)
    - [RCM](#rcm)
    - [APC](#apc)
- MES
    - [MES](#mes)
    - [SPC](#spc)
    - [AMS](#ams)
    - [PMS](#pms)
- AUTO
    - [RTD](#rtd)
    - [AMA](#ama)
- YMS
    - [YMS](#yms)
    - [DMS](#dms)
    - [RPT](#rpt)
    - [FMS](#fms)
- [FAQ](#FAQ)

# CIM

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

---

## by 业务划分

- EAP(Equipment Automation Program): 设备自动化程序
- FDC(Fault Detection and Classification): 故障检测与分类
- RMS(Recipe Management System): 配方管理系统
- RCM(Remote Control Management): 远程控制管理
- APC(Advanced Process Control): 先进过程控制

- MES(Manufacturing Execution System): 制造执行系统
- SPC(Statistical Process Control): 统计过程控制
- AMS(Alarm Management System): 告警管理系统
- PMS(Preventive Maintenance System): 设备维修保养系统

- RTD(Real-Time Dispatching): 实时派工系统
- AMA(Activity Management of Full-Automation): 全自动化控制平台

- YMS(Yield Management System): 良率管理系统
- DMS(Defect Management System): 缺陷管理系统
- RPT(Reporting System): 报表系统
- FMS(Factory Monitoring System): 工厂监控系统

| 业务板块         | 包含子系统              | 对应小组 |
| :--------------- | :---------------------- | :------- |
| 设备自动化与控制 | EAP, FDC, RMS, RCM, APC | EAP 组   |
| 生产执行与追踪   | MES, SPC, AMS, PMS      | MES 组   |
| 智能调度与物流   | RTD, AMA                | RTD 组   |
| 工程与质量管理   | YMS, DMS, RPT, FMS      | YMS 组   |

## 一个平台、四大能力、五层架构

建设统一CIM智能制造平台, 作为工厂生产管理和设备自动化运行的数字底座.

- 四大能力
    - 制造执行能力(MES)
    - 设备自动化能力(EAP/FDC/APC/RMS)
    - 智能调度能力(RTD/AMA)
    - 质量分析能力(SPC/YMS/DMS)

- 五层架构
    - 设备层(Equipment)
    - 自动化控制层(Automation)
    - 制造执行层(MES)
    - 数据分析层(YMS/SPC/RPT)
    - 决策展示层(Dashboard/FMS)

"一个平台":即打造统一的CIM智能制造平台, 作为中心生产管理、设备自动化运行及制造数据管理的数字化底座, 实现生产制造全过程的统一管理、统一数据和统一协同.

"四大能力":即全面构建"制造执行能力"、"设备自动化能力"、"智能调度能力"、"质量分析能力"四大核心能力, 以制造执行系统(MES)为核心, 结合设备自动化(EAP、RMS、RCM、FDC、APC)、智能调度(RTD、AMA)及质量管理(SPC、YMS、DMS)等系统, 促进科研研发、生产制造、质量控制和运营管理的深度融合与协同发展.

"五层架构":即重点打通"设备层"、"自动化控制层"、"制造执行层"、"数据分析层"、"决策展示层"五个层级, 实现设备互联互通、生产过程实时管控、制造数据集中治理、质量全过程追溯以及生产经营可视化分析, 形成从设备数据采集、生产执行控制、质量分析优化到经营决策支撑的完整数字化闭环, 全面消除信息孤岛, 提升工厂智能化运营水平和制造协同效率.

## CIM Terminology

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
| WPH          | Wafer Per Hour                   | 每小时晶圆数                                                              |

- SSO(Single Sign-On, 单点登录) 是一种身份认证机制, 它允许用户只需登录一次, 就可以访问所有相互信任的应用系统, 而无需在每个系统中重复输入用户名和密码.
- FTP(文件传输协议), 最传统、最底层的文件搬运工, 局限于非实时、无事务保证、需自行解析文件、错误处理困难
- ESB(企业服务总线), 当 FTP 把文件搬过来后, ESB 负责将其转化为标准服务调用; 或者在不同异构系统 (如 SAP ERP ↔ MES ↔ YMS) 之间做协议适配.
- CA (Certificate Authority, 证书授权中心), 负责签发、管理和吊销数字证书, 通常对接企业内部 PKI 体系或国家认可的第三方 CA 机构
- SDK (Software Development Kit, 签章开发套件), 嵌入到各业务系统中的"签章,引擎", 通常为 DLL/JAR/REST API 形式, 支持国密 SM2/SM3 或国际 RSA/AES 算法
- SOP(Standard Operating Procedure), 标准作业程序/标准操作程序, 用于指导和规范日常工作，确保各项任务的执行标准统一、高效且不易出错

### POC

POC: Proof of Concept(概念验证)

简单来说, POC 搭建就是回答一个核心问题:"**这个东西理论上说得通, 但在现实中真的能做出来且有效吗?**"

以下是关于 POC 搭建的详细解析:

1. POC 的核心目的

- **验证可行性:** 确认技术方案在现有架构、硬件或业务逻辑下能否跑通.
- **降低风险:** 在投入大量资金和人力进行全面开发之前, 先以最小成本试错, 避免"造出轮子却发现是方的".
- **争取信任/预算:** 向管理层、客户或投资人展示实际效果, 作为立项或采购的依据.
- **技术选型:** 当面临多个供应商或技术路线时, 通过 POC 实测对比性能、兼容性和易用性.

2. POC 搭建的典型场景

- **企业软件采购:** 例如公司想引入一套新的 CRM 系统, 先搭建一个包含少量数据和核心流程的 POC 环境, 测试是否满足业务需求.
- **新技术探索:** 例如团队想在现有 App 中集成 AI 大模型, 先搭建一个 Demo 验证响应速度和准确率.
- **网络安全攻防:** 安全研究员发现一个漏洞后, 编写一段 POC 代码(Exploit PoC)来证明该漏洞确实可被利用, 而非仅仅是理论推测.
- **初创项目融资:** 制作一个具备核心功能的最小可用产品(MVP 的前身), 向投资人演示商业模式的技术落地能力.

3. POC vs MVP vs Prototype(区别)

很多人容易混淆这三个概念, 它们的侧重点不同:

| 概念          | 全称                   | 核心问题               | 特点                                                    |
| :------------ | :--------------------- | :--------------------- | :------------------------------------------------------ |
| **POC**       | Proof of Concept       | **能不能做?**          | 关注技术可行性, 通常很粗糙, 用完即弃, 不面向最终用户.   |
| **Prototype** | 原型                   | **长什么样/怎么交互?** | 关注用户体验和设计流程, 可能是高保真 UI 但无后端逻辑.   |
| **MVP**       | Minimum Viable Product | **有没有人用/买单?**   | 最小可行产品, 具备核心价值, 面向真实市场发布并收集反馈. |

4. POC 搭建的关键原则

- **范围最小化:** 只验证最核心的假设或风险点, 不要试图构建完整系统.
- **时间盒限制:** 通常设定严格的时间期限(如 1-2 周), 超时即止, 避免陷入过度开发.
- **明确成功标准:** 在开始前必须定义好"什么算验证成功"(例如:并发支持 1000+、识别准确率>95%、部署时间<5 分钟等).
- **结果导向:** 无论成功还是失败, POC 都是有价值的. 失败意味着及时止损, 避免了更大的浪费.

### SKU

Stock Keeping Unit

服务 SKU 是对服务内容、规格、价格、交付标准的唯一标识代码.它解决了服务"非标"的难题, 将模糊的服务承诺转化为可交易的产品.

一个完整的服务 SKU 通常包含以下维度的组合:

- 基础服务项目: 例如"设备维修"、"系统部署"、"咨询服务".
- 规格/等级: 例如"标准版 vs 专业版"、"5×8支持 vs 7×24支持"、"初级工程师 vs 专家级".
- 计量单位: 例如"按人天"、"按设备台数"、"按年订阅"、"按调用次数".
- 地域/语言: 例如"中国大陆区服务"、"全球英文支持".
- SLA 标准: 例如"2小时响应"、"99.9%可用性保障".

# EAP

EAP Server 1:1 tool, 1 Server 跑 30 进程, 原因是FAB-EQP影响最小化, 而不是最大化

前道后道一般部分系统, 但是前道更关心wafer数量, 后道更关心辅材

关机开机, 厚道可能EQP可以随便关, 前道有风险, 重点在能耗管控

8寸以下, 要外加SMIF, 拉线要考虑, 转TCP/IP, InterfaceA很少用了, 基本都是转SECS采集, 转化器是IT自己采购, SMIF有串口有网口的, 但是需要确认, 这个与布点&弱电强相关

适配移动终端扫码, 需要布无线点位

RFID, SMIF的挂载的位置应该要在同一个位置才可以读否则要重新定制

## EAP Terminology

| Abbreviation   | Full form                                                               | Desc                                                                                                  |
| :------------- | :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| EAP            | Equipment Automation Programming                                        | 设备自动化                                                                                            |
| APC            | Advanced Process Control                                                | 先进过程控制                                                                                          |
| EDA            | Equipment Data Acquisition                                              | 非量测制造设备数据采集                                                                                |
| FDC            | Fault Detection Classification                                          | 错误侦测与分类                                                                                        |
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

> Note:
>
> EDA, EDC 都是对机台设备数据采集, 但 EDA 是 EAP 对制造机台的采集, EDC 是 MES 里对量测设备的采集
>
> APC 可以是独立的系统, 更多与制造业务部门相关联

- EAP 负责控制与采集(SECS/GEM 通信, Recipe 下发);
- FDC 负责分析与判定(Trace 数据实时比对, Multivariate Analysis, Fault Classification)

> Full Auto Scenario(全自动场景/全流程自动模式) 覆盖了设备作业的全生命周期, 而不仅仅是单个动作:
>
> - Carrier In/Out: 载具到达 Port → ID 读取 → MES 验证 → Slot Map → Load Port 锁定/解锁
> - Process Start/End: 获取 Recipe → 下载配方 → 启动设备 → 监控加工过程 → 采集 EDC 数据 → 结束加工
> - Wafer Handling: 机械手取放片 → Chamber 进出 → Wafer Mapping → 异常重试/跳过
> - Track In/Out: 向 MES 发送过账请求 → 接收确认 → 更新本地物料状态
> - 异常恢复: 遇到 Alarm 时的自动 Pause/Abort/Resume 逻辑, 以及 Hold Lot 策略

> SVID 是 Status Variable ID(状态变量标识符)

| 术语  | 全称                  | 作用                                                    |
| :---- | :-------------------- | :------------------------------------------------------ |
| SVID  | Status Variable ID    | 标识实时状态 / 传感器读数 (只读或周期性采集)            |
| ECID  | Equipment Constant ID | 标识设备配置常量 (如校准系数、硬件版本, 通常不频繁变化) |
| DVVAL | Data Value Definition | 标识可设定的工艺参数 (Setpoint, 可由 EAP 写入修改)      |

本质是"数据标签"

SVID 是一个整数编号 (如 12001), 它对应机台内部的一个具体变量. 例如:

SVID=12001 → 腔体温度 (Chamber Temperature)

SVID=12002 → 射频功率 (RF Power)

SVID=12003 → 气体流量 (Gas Flow Rate)

SVID=12004 → 当前加工晶圆数 (Wafer Count)

| 术语                   | 含义                | 说明                                                                                 |
| :--------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| 设备信息               |                     |                                                                                      |
| Vendor                 | 厂商                | TEL, AMAT, LAM, KLA 等                                                               |
| Agent                  | 代理商              | 若通过代理采购                                                                       |
| Model                  | 型号                | 设备销售型号                                                                         |
| Sub Model              | 子型号              | Model Variant, 影响 EAP 模板选择                                                     |
| Platform               | 平台                | 设备所属平台系列                                                                     |
| Sub Platform           | 子平台              | 细分平台版本                                                                         |
| Tool Type              | 设备类型            | 如 Etcher, Scanner, CMP                                                              |
| Inch                   | Wafer 尺寸          | 300mm / 200mm                                                                        |
| Technode               | 工艺节点            | 28nm, 7nm 等, 影响 Spec 要求                                                         |
| Country                | 产地国家            | 影响出口管制与报关                                                                   |
| LP Qty                 | Load Port数量       | 硬件配置确认                                                                         |
| RF Reader              | RFID 读写器         | 是否有 RF Reader 及规格                                                              |
| 新旧机台               | New/Old             | 新机或搬迁旧机                                                                       |
| OLD EQP ID             | 原设备编号          | Copy 项目或二手设备时必填                                                            |
| Refer EQP ID           | 参考设备            | 指定 Copy 哪台现有设备的配置; 非标设备必填, 用于追溯历史适配方案、复用 Custom Driver |
| 通讯与协议             |                     |                                                                                      |
| COM Type               | 通讯物理层          | TCP/IP (HSMS) 或 RS232 (SECS-I)                                                      |
| Conn-Mode              | 连接模式            | HSMS-SS / SECS-I / Interface A                                                       |
| IO mode                | I/O 方式            | Active / Passive(SECS 连接主被动; 注意与晶圆流向"同进同出/左进右出"二义区分)         |
| Device ID              | SECS Device ID      | S1F13 中的 Device ID                                                                 |
| Port                   | TCP 端口号          | HSMS 端口, 通常 5000 或其他                                                          |
| GEM Version            | GEM 标准版本        | E30/E37/E40/E94 等版本号                                                             |
| Software Version       | 主机软件版本        | 影响 Bug List 与兼容性                                                               |
| Firmware Version       | 固件版本            | 控制器固件版本                                                                       |
| SECS Manual & Log Path | 文档路径            | SECS/GEM 手册存放位置                                                                |
| GEM Manual             | GEM 通讯说明        | 必须提供 PDF/Word 版                                                                 |
| Interface Spec         | 接口规范书          | 厂商自定义接口说明                                                                   |
| PICS                   | 协议一致性声明      | Protocol Implementation Conformance Statement                                        |
| SEDD                   | 数据字典            | SECS Equipment Data Dictionary                                                       |
| VID List               | 变量 ID 列表        | Variable ID 映射表                                                                   |
| CEID List              | 采集事件列表        | Collection Event 定义                                                                |
| Alarm List             | 告警列表            | Alarm Code 与严重等级                                                                |
| Remote Command List    | 远程命令列表        | RCMD 定义                                                                            |
| Recipe Spec            | Recipe 规范         | PP 结构说明                                                                          |
| PP Format              | Process Program格式 | Binary / XML / Text                                                                  |
| Recipe File Sample     | Recipe 样例文件     | 至少提供一个完整 Sample                                                              |

**RF Reader(RFID读写器)**

安装在EQP Load Port / 机台内部的 自动化组件, 核心作用是识别载具(FOUP/Cassette) 身份, 实现 "货" 与 "信息" 绑定, 防止人为输入错误导致的混料或报废事故

- 载具ID读取: 当FOUP放置到Load Port上时, RF Reader通过射频信号非接触式读取贴在FOUP上的RFID Tag(通常遵循SEMI E4/E87标准), 获取唯一的Carrier ID
- 数据写入/更新: 部分系统支持向Tag内写入数据, 如记录该FOUP的使用次数、清洗周期、当前装载的Wafer Map信息等
- 防错校验(Interlock): EAP/MES系统会将读取到的RFID与MES中的派工单进行比对, 如果放错了FOUP, EQP会直接Lock并Alarm
- 位置追踪: 结合Stocker/OHT的RF Reader, 实现全厂级的载具实时定位

有 RF Reader: EAP需开发 S2F49(Enhanced Remote Command) 或专用的 Carrier ID Report逻辑, 需处理Read Fail、Tag Missing、ID Mismatch等异常流程, 需与MES进行Carrier Validation交互

无 RF Reader: EAP需支持手动输入Carrier ID的UI/Remote Command, 需增加更严格的二次确认防错机制, 通常需要额外的Barcode Scanner作为备选方案

**COM Type(Communication Type)**

特指 物理层与传输层的通信接口类型, 定义了上位机(Host/EAP)与设备(EQP)之间 "数据是通过什么介质、以什么协议格式进行传输的"

| 维度       | TCP/IP (HSMS)             | RS232 (SECS-I)             |
| :--------- | :------------------------ | :------------------------- |
| SEMI标准   | E37 (HSMS) + E5 (SECS-II) | E4 (SECS-I) + E5 (SECS-II) |
| 传输速率   | Mbps ~ Gbps级             | kbps级                     |
| 最大距离   | 100m(铜缆)/ km级(光纤)    | ≤15m                       |
| 拓扑结构   | 星型/网状(通过Switch)     | 点对点直连                 |
| 多Host支持 | ✅ 原生支持               | ❌ 不支持(需额外Gateway)   |
| 布线复杂度 | 低(复用工厂LAN)           | 高(每台设备独立拉线)       |
| 运维难度   | 中(需网络知识)            | 低(万用表即可排查)         |
| 当前趋势   | 🟢 绝对主流               | 🔴 逐步淘汰                |

> 确认COM Type是采购前置条件:若新购设备仍只提供RS232, 必须要求Vendor升级为HSMS, 否则将严重影响EAP性能和FDC数据采集能力
>
> HSMS版本确认:HSMS有SS(Single Session)和MS(Multi Session)之分.FAB通常使用 HSMS-SS;若设备支持Interface A (E164), 则可能同时运行HSMS-SS(用于SECS/GEM)+ HSMS-MS(用于EDA), 需在Conn-Mode字段中明确区分
>
> IP地址规划:HSMS设备需分配固定IP, 纳入工厂OT网络VLAN管理, 严禁接入办公网
>
> 串口转以太网适配器:对于仅有RS232的旧设备, 可使用MOXA等品牌的Serial Device Server将其转换为HSMS, 使EAP端统一按HSMS处理, 但需注意转换延迟和丢包风险
>
> SECS-II消息体相同:无论底层是HSMS还是SECS-I, 上层的SECS-II消息格式(SxFy)是完全一致的.COM Type只影响"怎么送", 不影响"送什么"

**Conn-Mode(连接模式/协议模式)**

是 COM Type 的上层, 再往上是应用层(SECS-II / EDA XML), COM Type 填物理介质，Conn-Mode 填协议标准, **两者必须匹配**

| Conn-Mode         | 全称 / 标准                                            | 核心定义                                                                        | 典型应用场景                                                                         |
| :---------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| HSMS-SS           | High Speed Message Service - Single Session (SEMI E37) | 基于TCP/IP的单会话高速通讯.一个IP+Port只建立一个Session，承载所有SECS-II消息.   | FAB绝对主流.99%的300mm/200mm设备SECS/GEM通讯都使用此模式.                            |
| SECS-I            | SECS-I (SEMI E4)                                       | 基于RS-232串口的点对点低速通讯.最原始的SECS传输层协议.                          | 老旧设备、200mm以下产线、部分Metrology/Inspection设备.                               |
| Interface A (EDA) | Equipment Data Acquisition (SEMI E164/E132/E133)       | 基于XML/SOAP/Web Services的数据驱动接口.独立于SECS/GEM运行，专为大数据采集设计. | FDC/APC/RMS等需要高频Trace Data、Wafer Map、Recipe Body的场景.通常与HSMS-SS并行存在. |

映射关系表:

| Conn-Mode   | 对应的 COM Type | 备注                                 |
| :---------- | :-------------- | :----------------------------------- |
| HSMS-SS     | TCP/IP          | 唯一对应，不可用串口                 |
| SECS-I      | RS-232          | 唯一对应，不可用以太网(除非加转换器) |
| Interface A | TCP/IP          | 本质是HTTP/SOAP over TCP             |
| HSMS-MS     | TCP/IP          | E37.1扩展                            |

**GEM version**

| SEMI 标准 | 名称                          | 定位            | 核心内容                                                                               | 是否必须         |
| :-------- | :---------------------------- | :-------------- | :------------------------------------------------------------------------------------- | :--------------- |
| E30       | GEM (Generic Equipment Model) | 🏗️ 核心骨架     | 定义了设备状态模型、事件报告、远程控制、终端显示等所有GEM基础行为.是所有GEM实现的根基. | ✅ 绝对必须      |
| E5        | SECS-II Message Content       | 📝 消息字典     | 定义了 SxFy 消息格式(如S1F1, S2F41).E30定义"做什么"，E5定义"怎么编码".两者绑定使用.    | ✅ 绝对必须      |
| E37       | HSMS-SS                       | 🚀 传输层       | 基于TCP/IP的高速单会话传输协议.不是GEM功能本身，而是GEM消息的搬运通道.                 | ⚠️ 现代设备必选  |
| E40       | Process Job Management        | ⚙️ 制程作业扩展 | 定义了Process Job/Control Job的创建、执行、追踪.用于RMS/配方管理与批次控制.            | ⚠️ 按需选配      |
| E94       | Control Job Management        | 🎯 作业控制扩展 | E40的姊妹篇，专注于Control Job层面的调度、暂停、恢复、取消等操作语义.                  | ⚠️ 通常与E40配对 |
| E87       | Carrier Management            | 📦 载具管理扩展 | 定义了FOUP/Cassette的Access、Validation、Transfer等标准化流程.AMHS集成的基础.          | ⚠️ 300mm必选     |
| E116      | Substrate Tracking            | 🔍 晶圆追踪扩展 | 定义了Wafer级别的Slot Map验证、Cross-slot检测、Wafer ID读取等.                         | ⚠️ 300mm推荐     |
| E164      | Interface A (EDA)             | 📊 独立数据接口 | 不属于GEM体系.基于XML/SOAP的并行数据采集接口，专为FDC/APC设计.                         | ⚠️ 高级应用选配  |

**PICS (Protocol Implementation Conformance Statement)**: 协议实现一致性声明, Vendor 对 SEMI 标准(E30/E5/E37 等)的逐条合规性自测报告. 以表格列出标准每一个条款(Clause), 标注 Mandatory/Optional/Not Supported, 并对所有 Partial Support 或 Deviation 给出详细说明. EAP 据此判断 EQP 能力边界, e.g. 是否支持 S2F49 增强型 RCMD、是否支持 Block Transfer.

**SEDD (SECS Equipment Data Dictionary)**: SECS 设备数据字典, 描述设备内部数据模型的元数据结构文件, 通常为 XML 或 Excel 格式. 定义所有 Status Variable (SV)、Equipment Constant (EC)、Trace Variable (TV) 的层级关系、数据类型、单位、取值范围及关联 CEID. EAP 用来自动化生成内部变量映射配置, 避免人工录入数千个 VID 出错; FDC/EDA 系统直接导入 SEDD 构建数据采集模型.

**VID List (Variable ID Mapping Table)**: 变量 ID 映射表, 设备内部变量名与 SECS-II 消息中数字 ID 的对照清单. 包含 VID 编号、变量名称、数据类型、读写属性(R/W/RO)、关联 EC/SV/TV 分类、默认值、工程单位. EAP 通过 S2F13/F14 读取 EC、S2F17/F18 设置 EC 时直接使用 VID 作为索引; 状态监控、Alarm 处理、Report 生成均依赖 VID 解析.

**CEID List (Collection Event Definition)**: 采集事件定义表, 触发 Host 数据采集的事件触发器清单. 包含 CEID 编号、事件名称、触发条件描述、关联的 RPTID(Report ID)、每个 RPT 中包含的 VID/DVID 列表. EAP 通过 S2F33/F34 定义 Data Link 将 CEID 与需上报数据绑定; 设备发生 CEID 对应事件时自动发送 S6F11/F12 携带预定义数据.

**Remote Command List (RCMD Definition)**: 远程命令定义表, Host 对设备反向控制的指令集. 包含 CMD ID、命令名称、参数字段(Name/Type/Required/Range)、执行前置条件、预期响应、超时时间. EAP 通过 S2F41/F44 下发控制指令(如 Start、Stop、SelectRecipe、ClearAlarm、OpenDoor), 是实现 MES Dispatch、Auto Scheduling 的核心接口.

**Recipe Spec (PP Structure Description)**: Process Program 结构规范, 描述设备配方文件的逻辑组织架构. 包含 Recipe 层级结构(Main/Sub/Step/Parameter)、参数命名规则、继承/覆盖机制、版本管理策略、Body 大小限制. RMS 据此解析和管理 Recipe 内容; EAP 执行 Recipe Select/Download 时依据 Spec 构造正确的 S7/S8 消息序列.

**PP Format (Process Program 传输格式)**: Recipe Body 在 SECS-II 消息中的编码方式.

| 格式     | 优点                     | 缺点                                   | EAP 处理复杂度     |
| :------- | :----------------------- | :------------------------------------- | :----------------- |
| Binary   | 传输效率高, 体积小       | 不可读, 调试困难, 强依赖 Vendor SDK    | 高(需专用 Parser)  |
| XML      | 可读性好, 自描述, 跨平台 | 体积大(约 Binary 的 3-5 倍), 传输慢    | 低(标准 XML 解析)  |
| Text/CSV | 简单直观                 | 无 Schema 约束, 易出错, 不支持复杂结构 | 中(需自定义解析器) |

## EAP interview

### 1.【概念】什么是 EAP?在 Fab 自动化层级中的位置?EAP、SECS/GEM、HSMS、SEMI 的关系?

EAP(Equipment Automation Program)设备自动化程序，是 **设备与 MES 之间的中间层**.

层级:**MES(上层业务)→ EAP(控制中转)→ 设备(底层)**.

四者关系:

- **SEMI**:国际半导体设备标准组织，定义规范
- **SECS-II(E5)**:消息报文协议(定义命令与数据格式)
- **GEM(E30)**:SECS 的行为规范(状态机、远程控制、事件告警)
- **HSMS(E37)**:SECS 的 TCP/IP 网络传输方式(替代老旧 RS232/SECS-I)

EAP 就是基于这套标准实现设备自动化交互的软件系统.**追问**:HSMS-SS 与 HSMS-MS 区别?(SS 单会话，FAB 主流；MS 多会话，E37.1 扩展，常用于 EDA 并行通道)

### 2.【概念】SECS-II 常用消息流?中试线最常用哪些?

- **S1F1/S1F2**:设备状态查询、在线确认(心跳基础)
- **S2Fxx**:参数读写(S2F13/14 EC 读写、S2F41/42 远程命令、S2F49 增强型 RCMD)
- **S6Fxx**:事件 / 工序上报(S6F11/F12 事件报告，实验追溯核心)
- **S7Fxx**:Recipe 上传、下载、校验、删除(改配方刚需)
- **S5Fxx**:Alarm 上报 / 清除(S5F1/F2)
- **S10Fxx**:终端显示 / 消息提示

**中试线核心高频**:S2F 参数读写、S7F 配方管理、S6F 步骤上报、S5F 告警.

### 3.【概念】GEM(E30)核心功能?为什么它是 EAP 的基础?

五大核心:**设备状态机管理、远程命令控制、事件主动上报、告警管理、设备参数采集**.

它约束所有品牌设备的自动化行为逻辑统一，EAP 才能用同一套 Scenario 控制 TEL / AMAT / LAM / 国产设备.**追问**:控制状态机里 Online-Local 与 Online-Remote 区别?(Remote 才允许 Host 下发 RCMD；CEID 4=OnlineLocal、5=OnlineRemote)

### 4.【概念】SVID / ECID / DVID / DVVAL 的区别?举例说明.

- **SVID**:状态变量，任意时刻可查(腔体温度、RF 功率、气压)
- **ECID**:设备常量，配置类参数(校准系数、硬件版本)，S2F13/14 读写
- **DVID**:数据变量，只在特定事件伴随上报(如 Process End 时的 LotID、RecipeID)
- **DVVAL**:可写工艺参数(Setpoint)，EAP/RMS 可下发修改

本质是"数据标签"，EAP 靠 VID List 解析设备数据模型.**追问**:SEDD 是什么?(SECS Equipment Data Dictionary，设备数据字典，EAP/FDC 据此自动生成变量映射，避免人工录入数千个 VID 出错)

### 5.【概念】E87 / E116 / E40 / E94 分别解决什么问题?哪些尺寸产线必须上?

- **E87 Carrier Management**:FOUP 载具接入、验证、转移标准流程 —— **12 寸必选**
- **E116 Substrate Tracking**:Wafer 级 Slot Map 验证、Cross-Slot 检测、Wafer ID 读取 —— 12 寸推荐，高阶制程需要
- **E40 Process Job**:Process Job 创建执行追踪 —— 配方 / 批次精细化管理时选配
- **E94 Control Job**:Control Job 调度、暂停、恢复、取消 —— 通常与 E40 配对

8 寸及以下多为 Cassette/SMIF，通常不走 E87，用简化载具流程即可.

### 6.【概念】Interface A(EDA)与 SECS/GEM 的关系?中试线什么时候需要它?

Interface A(E164/E132/E133)是基于 XML/SOAP 的 **独立数据采集接口**，与 SECS/GEM 并行运行，专为高频 Trace Data、Wafer Map、Recipe Body 设计.

需要它的场景:**FDC 要 10Hz 级 Trace 数据、APC 要 Chamber 级高频参数**时，SECS/GEM 通道扛不住.注意点:目前 8 寸以下老设备基本没有 Interface A，中试线大多还是 **SECS 转采集**，接口 A 很少用，规划时别按标配假设.

### 7.【2-12寸】2/4/6/8 寸老设备只有 RS232(SECS-I)，怎么接入 EAP?

标准做法:**MOXA 等串口转以太网转换器(Serial Device Server)把 SECS-I 转成 TCP 接入网络**，EAP 端统一按类 HSMS 方式处理，转换器由 IT 自己采购.

要点与风险:

- 拉线要提前规划(每台设备一根网线 + OT VLAN 固定 IP，严禁办公网)
- 转换有 **延迟与丢包风险**，心跳与 T3/T7 超时要放宽
- SECS-II 消息体不变，COM Type 只影响"怎么送"不影响"送什么"
- 新购设备必须要求 Vendor 升级 HSMS，否则严重影响 EAP 性能与 FDC 采集能力

### 8.【2-12寸】8 寸线的 SMIF 接入有哪几种模式?EAP 分别怎么处理?

三种:

- **整合式**:SMIF 与设备连接，EAP 通过设备控制 SMIF IO 动作 —— 最省事
- **非整合式**:SMIF 与设备分离，EAP **单独控制** SMIF IO 动作 —— EAP 需多开发一路 SMIF Driver(串口 SMIF 走 MOXA 转 TCP，HSMS SMIF 直接网线+IP)
- **OpenFOUP**:开放载具，无 SMIF 控制逻辑

8 寸以下拉线规划时就要确定 SMIF type，它直接决定 EAP Scenario 模板选型.

### 9.【2-12寸】12 寸 FOUP 的 RFID 识别与 8 寸 Barcode 识别，EAP 逻辑差异在哪?

- **12 寸 RFID(RF Reader)**:EAP 需开发 S2F49 增强型 RCMD 或专用 Carrier ID Report 逻辑，处理 **Read Fail / Tag Missing / ID Mismatch** 异常，与 MES 做 Carrier Validation 交互；FOUP 贴 RFID Tag(E4/E87)
- **8 寸 Barcode / 无 Reader**:EAP 需支持 **手动输入 Carrier ID 的 UI / Remote Command + 二次确认防错**，配 Barcode Scanner 或手持终端兜底

共同点:识别后都要与 MES 派工信息比对，不匹配则 Lock Port + Alarm，防止混料报废.

### 10.【2-12寸】一条中试线同时有 2 寸手动设备、6 寸 SiC 设备、8 寸线和 12 寸线，EAP 部署架构怎么设计?

考察架构观:

- **EAP Server 1:1 Tool，单 Server 约 30 进程** —— 原则是 FAB-EQP 影响最小化而不是资源最大化，据此估算 Server 数量
- 按 **区域 / 尺寸 / 协议类型分组部署**，老设备(RS232+MOXA)与 12 寸(HSMS+EDA)不混在同一 Server，避免性能互相拖累
- 统一 **通讯驱动层**:SECS-I/SECS-II/GEM/HSMS + PLC/OPC/GPIB/文件/数据库多协议驱动，非标设备走 Custom Adapter，不嵌第三方驱动
- **模板复用**:NewType / Rollout 机制 —— 同型号同跑货模式第一台做 NewType 完整开发，其余 Rollout 拷贝部署 + 配置差异比对

### 11.【2-12寸】完全无 SECS 能力的后道老设备(只有 PLC 或物理按钮屏)，EAP 怎么实现卡控?

分层方案:

1. **PLC 直连**:支持三菱、欧姆龙等 PLC 协议 / OPC / I/O Controller，采集关键信号(Start/End、Door、Alarm)
2. **非标扩展接入**:通过设备 Screen 抓取、Panel 信号、GPIB 等方式获取状态
3. **文件 / 数据库接入**:设备输出 CSV/Log/DB 表，EAP 定时解析做 Track In/Out 与数据采集
4. **人工兜底**:扫码枪扫随工单条码过站，EAP 提供手动 UI + 强制二次确认

原则:**先保账料卡控(防错)，再逐步提升自动化**，不追求一步到位 Full Auto.

### 12.【前道】描述 Full Auto Scenario 的完整生命周期.

覆盖设备作业全生命周期，不只是单个动作:

- **Carrier In/Out**:载具到 Port → ID 读取 → MES 验证 → Slot Map → Load Port 锁定/解锁
- **Process Start/End**:获取 Recipe → 下载配方 → 启动设备 → 监控加工 → 采集 EDC → 结束加工
- **Wafer Handling**:机械手取放片 → Chamber 进出 → Wafer Mapping → 异常重试/跳过
- **Track In/Out**:向 MES 发过账请求 → 接收确认 → 更新本地物料状态
- **异常恢复**:Alarm 时自动 Pause/Abort/Resume 逻辑与 Hold Lot 策略

内置模板:Fixed Buffer、Internal Buffer、Inline、Furnace、Sorter、LIRO(左进右出)、Bonding、CMP、FOUP Clean/Inspection、Reticle Stocker 等.

### 13.【前道】账料匹配校验在哪些时间点做?不匹配怎么处置?

关键时间点:**载具到达 Port、获取 MES 作业信息、过账(Track In/Out)**.

校验内容:

- FOUP ID / Lot ID / Job ID / Recipe 与 MES 一致性(载具涵盖 FOUP、FOSB、Open Cassette、Reticle POD)
- **作业前** Slot Map 校验:Wafer 数量、位置与 MES 定义一致
- **作业后**二次校验:加工后 Wafer 数量、状态、Slot Map，防漏片/错加工

不匹配处置(可配置):**自动退 Port / Hold Lot / 发送预警通知**.

### 14.【前道】Reticle(光罩)管理 EAP 要做什么?

- 控制光罩处理，支持手动搬送接收及使用信息更新
- **Run 货前验证光罩在机台的状态**
- 管理 Reticle Lib:Load/Unload、使用情况显示、**使用次数收集**(寿命管控数据源)
- 支持 Reticle Inspection，收集 IRIS 数据上报上位系统
- 光罩 Load Port(RSP/Reticle POD)作为独立类别配置管理

**追问**:Reticle 寿命超限怎么办?(EAP 上报 MES/RTD，不派对应 Lot，Hold Reticle)

### 15.【前道】Litho Inline 机台(Track + Scanner)EAP 控制难点是什么?

- **双主机协同**:Track 与 Scanner 各自独立 SECS 通道，EAP 要建统一 Scenario 模型，Wafer 在两段间的交接状态要对齐
- **Sub Recipe 多类型**:CPE、DOMA、Files、BMMO OVL/Focus 等，配合 RMS 管理
- **Reticle + Chuck + APC 联动**:Run 前验证 Reticle、接受 APC R2R 的 Dose/Focus 前馈值、遵守 Layer 同 Chuck 限定
- 片速快，事件密集，EAP 事件队列要防积压

### 16.【前道】Wafer 级追踪(E116)在中试线价值是什么?怎么实现?

中试线做工艺研发，**单片级追溯是刚需**(对比实验、Split Lot、挑片量测):

- 支持 **指定 Wafer 作业**(加工 / 量测)与 Skip
- 收集指定 Wafer 的作业开始/结束、进出 Chamber/Unit 明细，实时上报 MES/FDC
- **Sorter 内容映像**:Sorter 作业开始自动做 Wafer ID ↔ Slot ID 映射，EAP 收集上报，保证分拣后物料信息准确
- Wafer History 全链路收集，按配置规则分发 MES / FDC

### 17.【后道】前道 EAP 与后道 EAP 最大的差异是什么?

核心差异:**前道更关心 Wafer(数量、Slot Map、Recipe)，后道更关心辅材(料号、批次、有效期)与 Die/Strip 级追溯**.

具体:

| 维度     | 前道                      | 后道                                                  |
| :------- | :------------------------ | :---------------------------------------------------- |
| 载具     | FOUP/FOSB/Cassette        | Magazine / Tray / Gel-Pak / Strip 料盒                |
| 卡控重点 | Recipe、Slot Map、Reticle | **辅材条码比对**(框架、银胶、焊线、塑封料)、片数、Bin |
| 追溯粒度 | Lot/Wafer                 | Wafer → Die → Strip/Unit 的重构追溯                   |
| 设备协议 | SECS/GEM 为主             | 非标多:PLC、GPIB、文件、数据库                        |
| 自动化   | Full Auto 成熟            | 半自动 + 扫码人工介入多                               |

### 18.【后道】后道辅材卡控 EAP 怎么实现?

前置条件(PE 负责):**需卡控的辅材必须有单独条码并打印在随工单上**.

EAP 流程:作业开始 → 扫随工单条码 + 扫辅材条码 → EAP 向 MES 请求当前作业应使用的辅材规格/批次 → **比对卡控**:错料、错批次、过期 → 禁止作业 + Alarm.配合 MES/PRMS 做光阻液、靶材、焊线、银胶等耗材的绑定与消耗管控(Runtime Consume).

### 19.【后道】Die Attach / Wire Bond 这类设备，怎么做 Die 级追溯?

- EAP 采集设备的 **Substrate/Die Matching 信息**(哪个 Die 上到哪个基板/引线框位置)，上报 MES 建立 **Wafer Map → Strip Map 的重构关系**
- 作业开始/结束、材料批次(Die 来源 Wafer、框架批次)上报追溯
- 设备多无标准 SECS，用文件/数据库/PLC 方案取数
- 与 MES Die Attach 模块配合:DoW(Die on Wafer)、二次拾取、重构 Wafer 场景都要保持映射链不断

### 20.【后道】测试机(CP Tester / FT Handler+Tester)接入 EAP 的要点?

- 测试机很多输出 **STDF 文件**而非 SECS 实时事件:EAP/CIM 侧要做文件监听解析(STDF v4)，或走 Tester 厂商的 SECS/网络接口
- 卡控点:**Test Program 版本校验**(类似 Recipe 管理)、Probe Card 绑定、Touch Down 次数
- 结果回传:Bin 汇总 / Wafer Map 回传 MES/YMS，触发 CP Wafer Judgement
- FT 后道:Handler 与 Tester 是两套系统，EAP 建模要分开再关联

### 21.【中试线】同一机台同时跑量产 + 实验批次，EAP 如何隔离防干扰?

- **配方隔离**:实验配方、量产配方分版本存储，互不覆盖
- **批次状态隔离**:实验 Lot 与量产 Lot 状态队列分开
- **数据隔离**:采集数据、日志、告警分类标记(Lot 类型标签)
- **权限隔离**:实验操作仅工艺测试权限，量产批次禁止随意调试

### 22.【中试线】工艺频繁改实验配方、跳工序，EAP 如何兼顾灵活与稳定?

**量产模式 & 实验模式双逻辑**:

- 量产模式:强校验、禁止随意改配方、禁止跳工序
- 实验模式:放开配方修改、支持临时步骤、允许人工跳过工序
- 所有修改 **留版本、留日志、留操作记录**，灵活但可追溯

通过配置开关区分，两套业务逻辑隔离、共用底层通信框架.

### 23.【中试线】实验样机 SECS 协议不标准、厂商有 BUG，如何对接?

中试线常态.处理方式:

1. 先抓全量 SEC 日志，梳理设备真实报文逻辑，对照 SEMI 标准找差异
2. EAP 做 **兼容适配层**:非标报文单独解析、容错处理
3. 临时 BUG 做兜底逻辑、重试机制、异常屏蔽
4. 同步反馈厂商整改(整理日志 + 复现步骤 + 标准差异点，精准定位)，留存兼容方案保障实验不中断

### 24.【中试线】实验线 EAP 与量产 EAP 最大三点不同?

1. **灵活性**:实验频繁改工艺配方 vs 量产固定稳定
2. **设备环境**:实验多非标样机、协议不标准 vs 量产设备统一规范
3. **核心目标**:实验重溯源、试错、迭代 vs 量产重稳定、产能、零事故

### 25.【全产品】化合物半导体(SiC/GaN/InP，4/6 寸)产线 EAP 有什么特殊性?

- 尺寸小、设备多为 **科研机型改造**:无 SECS 比例高，PLC/GPIB/文件接入为主
- 外延设备(MOCVD/EPI):对 FDC 级温度/流量 Trace 需求强，但设备接口弱 → 常需 **外接传感器 + 独立采集盒**
- 载具特殊(Gel-Pak 弹性凝胶托盘等):无 RFID，条码 + 人工扫码，读取成功率要做兜底(备固定式 Scanner + 手动输入 UI)
- 高温设备多，开关机不能像后道那样随便关，重点在 **能耗管控与安全联锁**

### 26.【全产品】Micro OLED / 先进封装(Bonding)类设备 EAP 要点?

- Micro OLED:Continuous Run 模式、EVA Mask 管理、Frame/Tray 载具、Die PnP(Pick and Place)信息上报
- Bonding(WoW/WoG):Pre-Bonding / De-Bonding 流程、**两片 Wafer 的 Mapping Traceability**(哪片 Pixel 对哪片 Logic)、Bond 后 Mapping 重构上报
- Die Attach / DPS:Die Count、二次拾取、Blade 寿命信息采集

### 27.【场景】设备不上报事件、指令无响应，完整排查流程?

**分层排查(必答框架)**:

1. **网络层**:ping 通、端口通、HSMS 连接状态、心跳
2. **协议层**:报文是否下发、设备是否 ACK、消息码、T3/T5/T7 超时
3. **设备状态层**:是否 Remote 模式、是否 Busy/Alarm 锁定、是否禁止远程控制
4. **业务层**:EAP 配置、配方权限、批次状态、MES 指令是否异常
5. **日志定位**:EAP 日志与设备 SEC 日志交叉比对定位根因

### 28.【场景】MES 显示加工中、设备已完成，状态漂移原因 + 解决?

常见原因:完成事件丢失、报文超时未上报、设备状态机切换异常、网络瞬断、EAP 事件积压.

解决:手动校准状态、补发缺失事件；预防:**事件重传、状态心跳校验、断线补传机制**.人工介入(暂停/重试)场景要增加状态同步机制，人工操作后 EAP 主动拉取设备最新状态强制同步 MES.

### 29.【场景】EAP 突然断连，机上有关键实验 Lot 不能停机，怎么处理?

优先 **保实验生产不中断**:

1. 立即切设备为本地模式运行，禁止自动停机
2. 快速排查网络 / HSMS 连接，尝试重连
3. 人工记录实验关键数据，避免数据丢失
4. 恢复后补全事件、同步批次状态、复盘日志

风险点:断连期间 MES 状态滞后、数据断层，需人工兜底补录校准.

### 30.【场景】大量重复 Event/Alarm，如何防止 EAP 雪崩?

**事件去重、告警限流、时间窗口过滤、黑名单屏蔽无效告警、堆积队列削峰**；区分实验临时告警与设备故障告警，避免高频刷屏导致服务卡顿、数据积压.底层 Driver 指标:5 秒内处理单笔 10M 大 Message、零丢包、稳定承受 10Hz 采集.

### 31.【场景】PIE 当天要新增参数采集上线，如何处理风险与验证?

绝不直接上正式环境:

1. 测试环境 / 备用样机完成参数适配、报文联调
2. 校验采集频率、数据准确性、无报错雪崩
3. **小范围灰度上线**，仅开放实验机台(Pilot 机制:EAP 任何模块更改必须支持个别设备先 Pilot，且不影响未参与设备)
4. 全程监控日志与上报状态，无异常再全量铺开

### 32.【场景】GEM 状态机最常见的坑?

设备 Local/Remote、Online/Offline 频繁人工切换，最容易出现:**EAP 以为远程可控，实际设备本地锁定，指令下发全部失效、状态卡死**.

解决:每次指令前校验设备控制模式(CEID 4/5 状态)，不满足直接拦截并告警.

### 33.【场景】S7 配方管理常见坑?

设备对配方名 **大小写、长度、特殊字符限制不同**；部分设备校验不规范，上传成功但无法调用.需在 EAP 层做 **配方名校验、格式统一、兼容性适配、预校验机制**；Run 货前验证设备是否存在对应 Recipe ID，并做 MES Recipe ID → 设备 Recipe ID 的解析转换(前后缀、路径可配).

### 34.【软技能】设备厂商配合度低，如何推进联调?

整理完整日志、问题复现步骤、标准差异点，**精准定位厂商问题**而非模糊反馈；同步内部进度压力，定点对接、限时整改，必要时拉群升级推进，保证设备导入进度(参考 EAP Phase:T-90 收 PICS/SEDD/CEID List，T-30 FAT，T2 Release，GAP(EAP/T2) ≤ 0~3 天为目标).

### 35.【软技能】EAP 工程师最重要的三个能力?

**协议排查能力、风险把控能力、跨部门沟通落地能力**.

加分项:能说出"先保生产再排障""一切变更留痕可追溯""非标设备先卡控后自动化"这类中试线工程原则.

## EAP Function List

### 1. 设备建模与模板管理

#### 1.1 设备分类与模板定义

支持设备根据 Buffer 类型、用途、工艺等进行分类, 基于共同性创建模板, 以提升后期开发效率.

- **分类示例**:工艺设备 (固定 Buffer、内部 Buffer, Inline 等)、测量设备、测试设备、分拣设备 (Sorter)、存储设备 (Bare Reticle/Wafer) 等.

#### 1.2 内置标准场景模板

支持设备根据特定模板, 支持 Full Auto Scenario:

- Fixed Buffer
- Inline
- Furnace
- Internal Buffer
- Sorter
- Left In Right Out (LIRO)
- Bonding
- Etch Dummy
- CMP
- Foup Clean / Inspection
- Bare Wafer Stocker
- Reticle Stocker (POD Stocker & Bare Reticle Stocker)
- Reticle Inspection
- N2 Purge

### 2. 生产流程控制

#### 2.1 异常处理与图形化配置

支持完善的异常处理流程, 及时响应程序、设备、流程等异常情况, 并提供图形化配置能力.

- **异常响应**:及时处理程序崩溃、设备故障、流程中断等异常.
- **图形化 Scenario**:支持 EAP Scenario 的图形化配置、实时显示和在线修改.

#### 2.2 帐料信息匹配校验

支持在载具到达 Port、获取 MES 作业信息、过账等关键时间点, 通过验证实际作业信息与 MES 数据的一致性, 确保生产准确性.

- **载具与信息一致性验证**:
    - 载具到达上下料口时, 通过批次或载具 ID 从 MES 获取作业信息.
    - 校验 FOUP ID、Lot ID、Job ID、Recipe 等信息与 MES 保持一致(载具类型涵盖 FOUP、FOSB、Open Cassette、Reticle POD).
    - 在过账等关键时间节点持续进行账料复核, 保证作业全流程的准确性.
- **Slot Map 与 Wafer 校验**:
    - **作业前**:验证 Carrier 内 Wafer 的数量、位置(Slot Map)是否与 MES 定义一致, 保证来料数量的准确性与可靠性.
    - **作业后**:对已加工 Wafer 的数量、加工状态及 Slot Map 进行二次校验, 避免出现漏片或错误加工.
    - **配置化检查**:支持工艺前/后的 Mapping 检查, 区分数量校验与位置校验, 可通过配置文件灵活定义; 支持工艺后正常工艺晶圆数量校验.
- **异常处置机制**:
    - 当设备作业帐料信息不匹配时, 根据用户配置要求自动执行退 Port、扣留批次(Hold Lot)或向相关人员发送预警通知.
- **MES 账户与权限同步**:
    - 支持同步 MES 账户进行用户验证及用户信息获取.
    - 支持基于用户权限的信息展示与操作管控, 防止越权操作.
- **MES 数据交互与业务动作**:
    - 请求获取 Carrier、Lot、设备、并行批量(Batch)等信息并进行处理展示.
    - 请求验证 Lot 与待加工设备是否匹配, 不匹配则触发异常处理.
    - 获取 EDC 量测信息, 并支持将设备量测数据上报至 MES 或 SPC 系统.
    - 校验通过后, 根据流程自动执行 JobIn、JobOut、CancelJobIn、HoldLot 等动作.
    - 针对 Batch 作业设备, 校验通过后自动执行 BatchJobIn、BatchJobOut 等动作.
- **优先级调度控制**:
    - 支持根据 MES 给定的优先级顺序, 控制 Cassette/FOUP 进入设备的顺序, 确保高优先级批次优先加工.

#### 2.3 Load Port 智能管控

支持控制遵守 SEMI 标准的 200mm/300mm Load Port, 并具备严格的安全与优先级管理机制.

- **状态同步**:实时更新 Load Port 状态至 MES, Load Port ID、数量、分类可通过配置管理.
- **安全拒绝机制**:无论何种模式, 拒绝没有 FOUP/FOSB ID 的载具; 自动传送模式下, 拒绝手动加载的 FOUP/FOSB/OpenCassette.
- **Purge 功能支持**:依据设备特性控制带 Purge 功能 Load Port 的气体喷充和停止.
- **FOUP 类型管控**:管理并限制接受的 FOUP 类型 (如 FOSB, FE FOUP, BE FOUP, Co FOUP, Cu FOUP), 非指定类型识别为错误并拒绝传输.
- **优先级调度**:高优先级 FOUP 无视作业顺序, 优先被处理.

#### 2.4 专项设备与物料管理

支持针对特定设备和物料类型提供专门的管理模块, 确保精细化控制.

- **Purge 设备整合**:支持气体 Purge 设备的自动化整合与控制.
- **光罩 (Reticle) 管理**:
    - EAP 控制光罩处理, 支持手动搬送接收及使用信息更新.
    - Run 货前验证光罩在机台的状态.
    - 管理 Reticle Lib:支持 Load/Unload、显示使用情况、收集使用次数.
    - 支持 Reticle Inspection, 收集 IRIS 数据并上报上位系统.
    - 光罩 Load Port 作为独立类别通过配置管理.
- **Recipe 管理**:
    - Run 货前验证设备是否存在对应 Recipe ID.
    - 支持 MES Recipe ID 到设备 Recipe ID 的解析/转换(前后缀、路径可配, 支持按 Lot 类型配置路径).
    - 配合 RMS 上传/下载 Recipe Body, 支持 RMS 抓取请求.
    - 支持 Download Recipe 到机台(视设备能力而定).
    - GUI 界面显示当前 Run 的 Recipe 信息.
- **Buffer 管理**:
    - 与上位系统集成, 按要求自动管理并更新 Buffer 信息.
    - 支持 NTB Buffer 或 FOUP Exchange Buffer 设备.
    - 上报各类载具进出 Buffer 的信息至 MES.

#### 2.5 Wafer 级流程控制

支持精确到单片 Wafer 级别的追踪与控制, 满足高阶制程需求.

- **指定 Wafer 作业**:支持选择指定 Wafer 进行加工或量测, 实现灵活的单片级工艺控制.
- **Wafer 作业信息采集**:收集指定 Wafer 的作业开始、作业结束信息, 以及进出子设备 (Chamber/Unit) 的详细信息, 并实时上传至上位系统.
- **多系统数据交互与上报**:
    - 支持将 Wafer 信息按要求传递至 MES、FDC 或其他第三方系统.
    - 支持接收 MES 返回的 Wafer 处理结果/指令, 并将交互过程完整记录至 EAP 日志, 确保数据可追溯.
- **Wafer History 全链路追踪**:收集指定 Wafer 的全生命周期 History 信息, 按配置规则分发上报至 MES, FDC 等系统, 支撑质量分析与制程优化.
- **Sorter 内容映像**:Sorter 作业开始时自动进行内容映像 (Wafer ID 与 Slot ID 映射), 由 EAP 收集并上报, 确保分拣后物料信息的准确性.

#### 2.6 数据收集 (EDC) 与物料追踪

支持全面的数据采集、格式转换及物料流转追踪能力, 保障生产透明化与数据可追溯性.

- **多协议数据收集(EDC)**:
    - 支持与上位系统集成, 兼容 SECS/GEM、TCP/IP、File、Database 等多种通信方式获取机台原始数据.
    - 提供 EDC SPEC 定义, 支持设备参数、设备常量 (EC) 及设备状态 (SV) 数据的自动化收集.
    - 主动采集 SECS 信息(Alarm S5F1/S6F11, Event)及设备 Alarm 数据, 并实时上报至 AMS 系统.
- **数据格式转换与配置**:
    - 支持将设备原始数据格式灵活转换为上位系统(MES/FDC/SPC 等)所需的标准格式.
    - 支持数据格式转换规则的配置化修改及收集开关设置, 方便用户根据业务需求自定义, 无需代码开发.
    - 支持将采集的设备常量、状态数据按策略保存至本地数据库或直接上传至外部系统.
- **物料追踪(Material Tracking)**:
    - 主动实时上报过账信息(Track-in, Track-out, Hold)及精确位置信息(FOUP, Slot, 设备, Unit).
    - 上报 Lot 及 Wafer 级别的开始、结束作业信息给 MES, 确保账实同步.
    - 异常发生时(如 Process 异常、Slot Map Fail)自动触发 Hold Lot 机制, 防止不良品流出.
    - 配合 MES/PRMS 进行光阻液、靶材等耗材的绑定与消耗管控.

#### 2.7 设备状态同步与控制

支持建立设备数字模型, 确保上位系统与物理设备状态实时一致, 并支持基于状态的设备管控.

- **组件级建模与配置**:
    - 支持建模定义设备内组件(Unit/Chamber/Robot 等)的具体信息.
    - 设备内组件的系统映射关系支持灵活配置, 适配不同机台结构.
- **主动状态同步**:
    - EAP 按设备内组件状态变化主动同步上位系统, 保证状态转换和追踪的准确性.
    - 支持将组件及整机状态信息实时上传至 MES/ECS 等相关系统.
- **通讯状态监测与展示**:
    - 实时监测设备通讯状态, 涵盖 Disconnect、Offline、Online-Local、Online-Remote 等模式.
    - 支持将设备通讯状态上报至外部系统或在 EAP UI 上可视化展示.
- **设备运行控制**:
    - 基于设备能力及特性, 支持对设备进行暂停、停止运行等远程控制操作.
    - 支持切换设备 Offline/Online 状态, 并将当前状态在机台 UI 或 EAP 界面上同步展示.
    - 所有控制操作及相关信息均记录至系统日志, 确保操作可追溯.
- **Port Access Mode 管理**:
    - 针对支持 E84/E87 协议的设备, 支持通过 MES 切换 Port Access Mode(Auto/Manual).
    - 实时同步设备 Port 状态给 MES, 确保物料交接过程中的端口控制权一致.

### 3. 系统集成与通讯

#### 3.1 接口与协议支持

支持多种标准及非标准接口, 实现广泛的设备与系统互联.

- **设备接入**:支持 SECS/GEM, PLC 通讯, 以及 Database、文件 /FTP 等非标准数据接入.
- **系统对接**:支持 WebService, TCP/IP 等接口与 MES 等上位系统集成.
- **集成范围**:支持与 MES/RMS/APC/FDC/Alarm/PMS/YMS/DMS 等系统集成.
- **多连接能力**:支持一个 EAP 同时连接多个设备、多个连接点.

### 4. 日志与运维工具

#### 4.1 日志管理

支持提供完善的日志记录与分析机制, 便于问题追踪与系统调试.

- **日志类型**:保留 SECS I, SECS II, Trace, Host Log, 可按种类配置是否记录.
- **分级与配置**:Log 记录分级定义, 调试追踪可通过配置文件 / 工具开关.
- **生命周期管理**:具备定时备份、删除、压缩机制, 标配 Log 管理任务.
- **分析工具**:提供专用的 Log 分析工具.

#### 4.2 运行环境流程管理工具

支持图形化工具, 简化 EAP 的日常运维与异常处理.

- **Scenario 管理**:图形化查看、启动、结束 EAP Scenario, 支持直观配置与修改.
- **状态监控**:直观查看 EAP 当前状态、设备信息、物料信息、错误消息.
- **异常干预**:支持手动发指令给设备和上位系统处理异常.
- **热重载**:在不关闭 EAP 的情况下重新 Load 配置文件.

### 5. 系统管理平台 (EAP Manager)

#### 5.1 监控与告警

支持全方位监控 EAP 运行健康度, 确保系统高可用.

- **程序监控**:实时监控 EAP 程序, 崩溃 / 挂起 / 进程消失时立即重启并通过 Alarm 系统 (邮件 / 短信) 通知.
- **连接监控**:监控 EAP 与机台连接, 断开或报错时发送告警.
- **Batch 监控**:EAP 升级后首个 Batch 运行时发送通知.
- **版本监控**:发现启动 / 运行版本与部署版本不一致时发送告警.
- **维护豁免**:支持特定权限人员临时避开监控进行机台测试.

#### 5.2 远程控制与恢复

支持远程运维操作及故障后的状态自愈.

- **远程操作**:支持远程启动 / 停止 (含批量)、LOG 目录访问、远程桌面、配置重载.
- **状态恢复**:EAP 崩溃并在设定时间内重启成功后, 自动恢复至重启前最新保存的对象状态.

#### 5.3 部署与升级

支持灵活的部署与平滑升级机制, 最小化对生产的影响.

- **拷贝部署**:支持同类型机台 EAP 拷贝部署, 并提供配置差异比较功能.
- **远程/在线升级**:支持远程部署; 非通讯模块支持在线升级; 版本变更后提醒.
- **空闲自动升级**:机台空闲 (无 Carrier/Wafer/Job) 时自动执行升级并通知.
- **预约升级**:支持自定义时间段内检测并执行升级.
- **首件通知**:自动升级完成后, 首个 FOUP 开始时发送提示通知.

#### 5.4 信息与版本管控

支持集中管理 EAP 资产, 确保版本一致性与可追溯性.

- **基本信息**:显示 / 比较当前版本与配置, 支持按服务器 /FAB/ 机台类型查询状态及连接信息.
- **版本历史**:显示发布负责人、日期、版本号、说明等历史信息.
- **版本切换**:支持保存不同版本并自由切换, 显示空闲机台自动升级列表.
- **差异比对**:支持比较同类型机台在线版本的文件差异.
- **分层管控**:从不同层次管控 EAP 所有核心文件.

#### 5.5 迁移与执行模型

支持大规模集群管理及可扩展的软件架构.

- **批量迁移**:支持批量 / 预约迁移空闲 EAP 至另一台 Server.
- **执行模型**:采用面向任务的统一推送和执行模型, 方便功能扩展.

### 6. 设备及上位系统模拟器 (Simulator)

#### 6.1 仿真与测试能力

支持基于实测数据与业务需求的提供完整的模拟环境, 实现全链路仿真, 加速开发测试、测机验证与运维排查.

- **SECS 规范设计与测机验证**:
    - 根据测机结果、设备指令集顺序及用户业务需求, 设计每型号设备的 SECS Communication Spec. & Scenario.
    - 支持对生产线设备进行 SECS 标准通讯测机, 验证设备通讯合规性与功能完整性.
    - 支持模拟 EAP 向机台发送 SECS 消息进行自动化测机, 自动格式化消息内容, 并保存、查看测试 SECS 日志.
- **Log 驱动全链路复现**:
    - 支持加载实际产线 SECS Log 与上层系统通讯 Log, 自动生成 Simulator Message Library.
    - 完全复现日志中的机台 Run 货记录及 MES 消息收发流程, 支持按配置灵活调整发送策略.
    - 支持模拟 MES 系统发送/接收消息, 实现 EAP 程序与模拟器对生产场景的精准还原.
- **多系统与脚本化测试**:
    - 支持同时模拟 MES、RMS、FDC 等多个上位系统, 覆盖跨系统集成测试场景.
    - Equipment Simulator 支持编辑测试脚本, 实现消息自动连续发送及批量自动化测试.
- **完整测试开发环境**:
    - 提供包含设备模拟器、上位系统模拟器、日志分析工具在内的完整测试与开发环境, 支撑从开发调试到上线验证的全生命周期需求.

### 7. 底层通讯引擎

#### 7.1 稳定性与性能指标

支持 SECS Driver 须满足高性能、高可靠性的工业级通讯要求.

- **大消息处理**:5 秒内完成单笔 10M 大 Message 的处理.
- **零丢包架构**:通讯时不允许因 Driver 本身问题发生丢包断线.
- **高频数据采集**:稳定处理采样频率达 10 Hz 级别的设备数据流.

#### 7.2 多协议与设备兼容

支持统一通讯驱动层, 覆盖标准与非标设备, 无需嵌入第三方驱动, 便于后期维护与扩展.

- **SEMI 标准协议**:原生支持 SECS-I / SECS-II / GEM / HSMS 等半导体标准通讯协议.
- **工业控制协议**:支持 PLC(三菱、欧姆龙等)、OPC, I/O Controller 等协议, 适配 4/6 寸线非标设备.
- **通用应用层协议**:支持 TCP/IP, Socket, HTTP, FTP, Database, Text 等多种通讯方式.
- **外设与辅机通讯**:支持与 SMIF, Tag/RFID/Barcode Reader、扫码枪等设备直接交互.
- **非标设备扩展接入**:除 EAP Driver 外, 支持通过设备 Screen, Panel, GPIB 等方式连接非标设备, 提升整线自动化覆盖率.
- **协议客制化**:支持通信协议的自定义开发与适配, 满足特殊设备或老旧机台的接入需求.

#### 7.3 测机与日志支持

- **自动化测机**:支持模拟 EAP 向机台发送 SECS 消息并自动格式化, 用于通讯合规性验证与功能测试.
- **日志管理**:完整保存测试及生产环境的 SECS 日志, 提供可视化查看与分析工具, 支撑问题定位与回溯.

### 8. EAP GUI (用户界面)

#### 8.1 界面功能与交互

支持独立、直观的操作界面, 支持多语言与权限管控.

- **信息展示**:直观显示 Run 货情况、设备 / 连接 /Port 状态、提示 / 错误 / 物料信息.
- **多机台聚合**:单个 GUI 可配置显示多台 EAP 信息.
- **独立运行**:GUI 与 EAP 后端独立, GUI 关闭不影响 EAP 任何功能.
- **权限管控**:支持 GUI 账号登录, 支持同步 MES 权限.
- **消息记录**:按设备 / 时间生成日志, 支持查询最近 300 条数据.
- **多语言与样式**:支持中英文消息配置管理, 支持消息分类、格式与颜色设定.

### 9. 发布与变更管理

#### 9.1 Pilot 验证机制

- **Pilot 支持**:当 EAP 任何模块更改时, 必须支持在个别设备上先进行 Pilot 验证, 且不影响未参与 Pilot 的设备正常运行.

## EAP/FDC Phase

> 按 T-n 阶段组织的 EAP/FDC 实施填写表, 聚焦 EAP 与 FDC 的机台接入实施, 供项目执行中分工填写.
> 阶段轴: 项目启动 → EQP 采购 / 验收 → EAP 前置准备 → 接口开发 → 接口验证 → 装机验机 (T0/T1/T2) → 现场联调 → 上线收尾

| Phase | T-n 时间窗     | 目标                                                                             | 主要填写方      | 输出物               |
| :---- | :------------- | :------------------------------------------------------------------------------- | :-------------- | :------------------- |
| 0     | 项目启动       | 锁定 EAP/FDC 项目级基础信息                                                      | MFG/IT          | 基础信息表           |
| 1     | T-90 ~ T-60    | EQP 采购与验收, 收集接口资料, 风险评估, EAP 前置准备 (网络 / 硬件 / 标签 / 环境) | Vendor/EE/IT    | EAP_Phase1 Checklist |
| 2     | T-60 ~ T-30    | EAP/FDC 接口开发与配置                                                           | IT              | Interface Design     |
| 3     | T-30 ~ T-14    | Simulator/Offline 验证与 FAT                                                     | IT              | FAT Report           |
| 4     | T0 → T2        | Hookup → 装机调试 → Offline 验机                                                 | IT/EE/Vendor/PE | T2 Release           |
| 5     | T-14 ~ Move In | 现场联调与 SAT                                                                   | IT              | SAT Report           |
| 6     | Move In ~ +7   | 上线支持、稳定性观察与收尾                                                       | PM              | Release/Close Report |

### Phase 0 项目启动

一次性填写, 仅收集 EAP/FDC 实施所需的项目级输入.

| No  | 子项           | 填写内容                                                                                                     | 负责方 | 完成时限 |
| :-- | :------------- | :----------------------------------------------------------------------------------------------------------- | :----- | :------- |
| 1   | 自动化程度     | 工厂自动化程度 (Auto1/2/3), 哪些设备需要 Auto3                                                               | MFG    | T-90 前  |
| 2   | 追溯粒度       | 各产线 (Raw wafer/EPI/ 前道 / 封装 /FT) 在制品追溯粒度 (Lot/Wafer/Die), 决定 EAP Wafer 级追踪与 FDC 采集粒度 | MFG    | T-90 前  |
| 3   | 产线与产能规划 | 各产线产能规划; 启动 / 通线 / 出货 / 量产里程碑, 决定 EAP/FDC 实施批次与节奏                                 | MFG    | T-90 前  |
| 4   | 系统规模估算   | 设备总台数与分布 (EAP Server 1:1 Tool, 单 Server 约 30 进程, 据此估算 Server 数量); 最高在线人数 (GUI 并发)  | IT     | T-90 前  |
| 5   | FDC 覆盖目标   | FDC 覆盖的站点 / 机台范围与关键参数清单 (关键站覆盖率目标)                                                   | MFG    | T-90 前  |

### Phase 1 EQP 采购与验收 & EAP 前置准备 (T-90 ~ T-60)

> 目标 1: 锁定设备清单与 EAP/FDC 需求; 从 Vendor 处收齐 EQP 验收所需的全部接口材料; 完成标准 / 非标判定与风险评估.
>
> 目标 2: 完成 EAP 接入所需的网络、硬件、标签与数据环境准备; 确保现场联调 (Phase 6) 前全部就绪.

#### 设备清单与需求 (每台设备一行, EE 填写)

| Seq | Area | Module | EQP ID | OLD EQP ID | 设备中文名 | 新旧机台 (Y/N) | Vendor | Model | Sub Model | Type | Inch | LP Qty | RF Reader(Y/N) | SMIF type | EAP(Y/N) | EDC(Y/N) | FDC(Y/N) | RMS(Y/N) | APC(Y/N) | RCM(Y/N) | Run mode | IO mode | NewType-Rollout | Refer EQP ID | SECS Manual(Y/N) | Owner |
| :-- | :--- | :----- | :----- | :--------- | :--------- | :------------- | :----- | :---- | :-------- | :--- | :--- | :----- | :------------- | :-------- | :------- | :------- | :------- | :------- | :------- | :------- | :------- | :------ | :-------------- | :----------- | :--------------- | :---- |
|     |      |        |        |            |            |                |        |       |           |      |      |        |                |           |          |          |          |          |          |          |          |         |                 |              |                  |       |

| 列名            | 说明                                                                                                                                                                                                                                                                                                                                          |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Area            | 设备所在 Fab 区域                                                                                                                                                                                                                                                                                                                             |
| Module          | 工艺模块                                                                                                                                                                                                                                                                                                                                      |
| EQP ID          | 设备编号                                                                                                                                                                                                                                                                                                                                      |
| Vendor          | 设备厂商名称                                                                                                                                                                                                                                                                                                                                  |
| Model           | 设备型号                                                                                                                                                                                                                                                                                                                                      |
| Sub Model       | 设备子型号 / 结构类型，包括:Fixed buffer(跑货过程中 FOUP 一直停在 Port 口，wafer 从 load port 搬进搬出)、Internal buffer(跑货过程中 FOUP 被搬到设备内部 Buffer 区域，不占用设备 load port，实现比较高的 throughput)、Inline(track + scanner)、Sorter, Foupexchange, Foupinspection, Foupclean, Reticleinspection, Reticlesorter, Bond, Debond |
| Type            | 设备类型分类:Process(生产设备)、Metrology(量测设备)、Support(辅助型设备，如 Sorter)                                                                                                                                                                                                                                                           |
| SMIF type       | SMIF 接入方式:整合(SMIF 与设备连接，EAP 通过设备控制 SMIF IO 动作)、非整合(SMIF 与设备分离，EAP 单独控制 SMIF IO 动作)、OpenFOUP                                                                                                                                                                                                              |
| Run mode        | 跑货模式:Single(以 Lot 为单元跑货，一个 FOUP 包含一个或者多个 Lot)、Batch(以 Carrier 为单元跑货，一个 Batch 包含多个 FOUP 的 Lot，如 WetBench, Furnace 以 Batch 的方式跑货)                                                                                                                                                                   |
| IO mode         | Wafer 进出模式(从 Wafer Process 前后对应 FOUP 的位置是否一致区分):同进同出(Wafer 从 FOUP 出去，Process 完毕后回到原先的 FOUP)、左进右出(Wafer 从左边 FOUP 进去，右边 FOUP 出来)                                                                                                                                                               |
| NewType-Rollout | 机型认定标识:相同机型的认定标准为型号相同且 Run 货模式也相同；相同机型的第一台标识为 NewType，其余标识为 Rollout                                                                                                                                                                                                                              |
| Refer EQP ID    | Rollout 机台所参考的 NewType EQP ID                                                                                                                                                                                                                                                                                                           |
| SECS Manual     | 是否已经有 SECS Manual                                                                                                                                                                                                                                                                                                                        |

#### EQP 验收材料清单 (Vendor/EE 提供, 逐项打勾 / 填路径)

| 字段                  | 内容要求                                                        | 是否收到 (Y/N) | 存放路径 / 备注 |
| :-------------------- | :-------------------------------------------------------------- | :------------- | :-------------- |
| GEM Manual            | SECS/GEM 接口说明书 (PDF/Word), 含 SECS Message/ 状态模型 /RCMD |                |                 |
| Interface Spec        | 设备与 Host/MES 接口流程、业务逻辑及通信时序                    |                |                 |
| PICS                  | SEMI 标准逐条合规性声明                                         |                |                 |
| SEDD                  | SECS 设备数据字典 (XML/Excel)                                   |                |                 |
| VID List              | 变量 ID 列表 (含 SVID)                                          |                |                 |
| CEID List             | 采集事件列表                                                    |                |                 |
| Alarm List            | 告警清单 (ID/ 名称 / 说明 / 严重等级)                           |                |                 |
| Remote Command List   | 远程命令清单 (START/STOP/PAUSE/ABORT 等)                        |                |                 |
| Recipe Spec           | Recipe 上传 / 下载 / 切换 / 校验接口说明                        |                |                 |
| PP Format             | Recipe 文件格式 (Binary/XML/Text)                               |                |                 |
| Recipe File Sample    | 至少一个完整 Recipe 样例                                        |                |                 |
| 非标通信手册          | 2-12 寸非 SECS 设备: 通信协议说明 + 通信手册                    |                |                 |
| COM Type              | TCP/IP(HSMS) / RS232(SECS-I); 新购设备必须要求 HSMS             |                |                 |
| Conn-Mode             | HSMS-SS / SECS-I / Interface A                                  |                |                 |
| Device ID / Port      | SECS Device ID / HSMS 端口号                                    |                |                 |
| GEM Version           | E30/E37/E40/E94 等                                              |                |                 |
| Software/Firmware Ver | 机台软件版本 / 固件版本                                         |                |                 |

#### Interface Checklist 判定 (MFG/IT 填写)

| EQP ID | Need EAP | Need FDC | Support SECS/GEM | Support EDA | Support E87 | Support E90 | Need Custom Adapter | Need Gateway | Reuse Existing Driver |
| :----- | :------- | :------- | :--------------- | :---------- | :---------- | :---------- | :------------------ | :----------- | :-------------------- |
|        |          |          |                  |             |             |             |                     |              |                       |

#### Risk Assessment (MFG/IT 汇总)

| EQP ID | 风险项 (无 PICS/ 无 SEDD/RS232/ 无 RF Reader/ 新 Model/ 其他) | Impact (High/Medium) | 应对措施 | Owner |
| :----- | :------------------------------------------------------------ | :------------------- | :------- | :---- |
|        |                                                               |                      |          |       |

#### EAP 前置准备

| No  | 准备项           | 适用对象              | 内容要求                                                                                | 负责方 | 状态 |
| :-- | :--------------- | :-------------------- | :-------------------------------------------------------------------------------------- | :----- | :--- |
| 1   | MOXA 盒          | 2/4/6/8 寸串口设备    | IT 采购 MOXA, 将串口转 TCP 接入网络                                                     | IT     |      |
| 2   | SMIF 接入        | 加装 SMIF 的设备      | 串口 SMIF: MOXA+ 网线转 TCP; HSMS SMIF: 网线+IP                                         | IT/EE  |      |
| 3   | 网线 /IP 规划    | 所有入网设备          | 每台设备一根网线 + 工厂网络固定 IP (OT VLAN, 严禁办公网)                                | IT     |      |
| 4   | 手持端 /FAB 热点 | 全 FAB                | EAP GUI 支持移动终端; FAB 布设无线热点; 手持扫随工单条码                                | IT     |      |
| 5   | 扫码枪 /FAB PC   | 热点未覆盖区域        | 布设台式电脑 + 扫描枪, 扫随工单条码                                                     | IT     |      |
| 6   | RFID 标签        | 12 寸支持 RFID 的设备 | FOUP 加贴 RFID 标签; 不支持 RFID 的设备采用手持终端扫码                                 | EE     |      |
| 7   | 后道辅材条码     | 后道设备              | 需 EAP 卡控的辅材: 辅材信息须有单独条码并打印在随工单上, EAP 才能在当前作业进行比对卡控 | PE     |      |
| 8   | 通信协议确认     | 所有设备              | 尽量具备 SECS 通信能力, 尽量支持 HSMS 通信方式                                          | EE/MFG |      |
| 9   | EQP 杀毒         | Windows 系统的设备    | IT 安全合规检查 (杀毒) 完成                                                             | IT Sec |      |

### Phase 2 EAP/FDC 接口开发 (T-60 ~ T-30)

> 目标: 完成 EAP Driver/Host/Recipe/Alarm/Event/RCMD/ 设备状态开发; FDC Metadata/Data Collection/Trace/Sampling 配置.

| EQP ID | EAP Dev Start | EAP Dev Cost(Day) | EAP Dev Finish | EDA Model | Metadata | Data Collection Plan | Trace Variable List | Sampling Rate | Trace Event | Auto Owner | FDC Owner |
| :----- | :------------ | :---------------- | :------------- | :-------- | :------- | :------------------- | :------------------ | :------------ | :---------- | :--------- | :-------- |
|        |               |                   |                |           |          |                      |                     |               |             |            |           |

输出物: Interface Design (T-60) → Offline Test (T-45)

### Phase 3 接口验证与 FAT (T-30 ~ T-14)

> 内容: Simulator 测试、Offline 测试、FAT, Recipe/Alarm/Event/Trace 验证.

| EQP ID | SECS Test Start | SECS Test Cost(Day) | Simulator 测试 | Recipe 验证 | Alarm 验证 | Event 验证 | Trace 验证 | FAT 日期 | FAT 结果 |
| :----- | :-------------- | :------------------ | :------------- | :---------- | :--------- | :--------- | :--------- | :------- | :------- |
|        |                 |                     |                |             |            |            |            |          |          |

输出物: FAT Report (T-30); Recipe Mapping (T-21); Sampling Plan 确认

FAT(Factory Acceptance Test)

### Phase 4 装机验机 T0 → T2 (Move In 后)

> 目标: 完成 Hookup(T0)、装机调试 (T1)、Offline 验机 (T2), PE Sign-off.

| EQP ID | T0 Start | T0 Hookup Time | T1 Start | T1 Time | T2 Start | T2 Time | T2 Release | EQP Dry Run | Test Recipe Setup | Request Pi Lot | EQP 杀毒 | EE Owner | PE Owner | Vendor Owner |
| :----- | :------- | :------------- | :------- | :------ | :------- | :------ | :--------- | :---------- | :---------------- | :------------- | :------- | :------- | :------- | :----------- |
|        |          |                |          |         |          |         |            |             |                   |                |          |          |          |              |

### Phase 5 现场联调与 SAT (T-14 ~ Move In)

> 前置确认: Hookup 完成 / IP 配置 / Device ID / 通讯确认 → SAT → EAP 与上位系统集成联调 → FDC 联调.

| EQP ID | IP/Device ID 确认 | 通讯确认 | MES Integration Cost(Day) | EAP Tuning Cost(Day) | EAP Test Cost(Day) | SAT 日期 | SAT 结果 | FDC 联调 |
| :----- | :---------------- | :------- | :------------------------ | :------------------- | :----------------- | :------- | :------- | :------- |
|        |                   |          |                           |                      |                    |          |          |          |

输出物: SAT Report (T-7)

SAT(Site Acceptance Test)

### Phase 6 上线与收尾 (Move In ~ Move In+7)

> 内容: EAP Release、稳定性观察、Alarm 优化、Recipe 修正、Sampling 优化、Performance Monitoring, Closing.

| EQP ID | EAP Release Date | T2 Release Date | GAP(EAP/T2) 天 | 稳定性观察结论 | Alarm/Recipe/Sampling 优化项 | Close Report 日期 | PM 签字 |
| :----- | :--------------- | :-------------- | :------------- | :------------- | :--------------------------- | :---------------- | :------ |
|        |                  |                 |                |                |                              |                   |         |

> GAP(EAP Release/T2 Release) 为衡量自动化就绪延迟的关键指标, 目标 ≤ 0~3 天; 非标设备常 >14 天, 需 PM 提前预警.

# FDC

尽可以能工艺设备上FDC, 量测设备上SPC

## FDC Architecture

- 表现层
    - 主要是UI层, 以及想外部系统提供数据的接口层, 这一部分主要是用来提供系统数据
- 业务逻辑层
    - 业务逻辑层, 主要是用于系统内部业务的逻辑处理, 主要包含数据控制, 错误侦测与分类, 模型建立, 以及工作引擎, 事件处理, 日志, 数据管理等功能, 业务逻辑层是整个系统的核心
- 数据访问层
    - 数据访问层, 主要是为上层提供了数据基础, 包括数据的访问, 以及设备数据的采集, 数据访问层是整个 FDC 的基础

## FDC interview

### 1.【概念】FDC、EAP、SPC、APC 四者的分工边界?

- **EAP**:控制与采集(SECS/GEM 通信、Recipe 下发、Trace 原始数据搬运)
- **FDC**:分析与判定(Trace 数据实时比对、UVA/MVA 多变量分析、Fault Classification)—— 看的是 **设备传感器数据**，回答"设备/工艺过程有没有异常"
- **SPC**:统计过程控制 —— 看的是 **量测结果数据**(CD、厚度、Rs)，回答"产品质量特性稳不稳"
- **APC**:闭环调参 —— 在 FDC/SPC 发现漂移后主动改 Recipe 参数补偿

一句话:EAP 采集、FDC 侦测拦截、SPC 统计监控、APC 主动调控.

### 2.【概念】UVA 与 MVA 的区别?常用 MVA 算法有哪些?

- **UVA(单变量)**:对单个 Sensor 的统计值(Mean/Max/Min/Range 等)做规格判定，简单直观、可解释性强
- **MVA(多变量)**:对多个相关 Sensor 联合建模，捕捉单变量看不出的组合漂移.常用:**PCA、Hotelling T²(HT2)、Q 统计量(SPE)、Diagonal HT2**

工程经验:UVA 覆盖 80% 场景且好维护，MVA 灵敏但误报率高、可解释性差，关键腔室/关键 Step 才上 MVA.

### 3.【概念】FDC 数据链路:数据从设备到报警的完整路径?

**设备 Sensor → EAP(SECS Trace / Interface A / 外接传感器)→ FDC 采集层(DCP 计划:采样率、窗口、Context)→ Context 注入(MES 的 Lot/Product/Recipe/Step)→ 窗口切片 → 统计计算(含虚拟 Sensor)→ UVA/MVA 模型判定 → Warning/Critical 分级 → OCAP 联动(AMS 通知 / MES Hold Lot / EAP Stop Tool)**.

**追问**:为什么要注入 MES Context?(同一机台跑不同 Product/Recipe，Trace 基线不同，无 Context 无法分组建模)

### 4.【概念】Trace 采集的 Polling 与 Trace(Event-based)两种模式区别?

- **Polling**:Host 定时主动读 SVID，节奏由 FDC 控制，适合慢变参数(温度、压力设定值)，但高频下占用 SECS 通道
- **Trace(S6F1 连续上报)**:设备按设定采样率主动推送，适合 10Hz 级高频数据(RF 功率、ESC 电压、气体流量瞬态)

中试线注意:老设备 Trace 能力弱(部分只支持 1Hz Polling)，规划 FDC 覆盖时先确认设备实测能力，别按 Spec 书假设.

### 5.【概念】GuardBand(动态频带)是什么?解决什么问题?

GuardBand 是基于历史 Trace Data 生成的 **随时间变动的动态上下限包络带**(不是一条固定 Spec 线)，逐采样点判定实际曲线是否出带.

解决:长制程中参数本身随 Step 时间动态变化(如 Etch 各 Step RF 功率台阶式变化)，固定 Spec 必然误报；动态频带贴合工艺特征，结合 SPC Trend Rule 可显著降低误报.

### 6.【建模】Auto-Limits 怎么生成?为什么要过滤异常数据后再算?

Auto-Limits 基于历史数据自动计算 Spec(内置 8 种 Sigma 算法:PSEUDO、Bounded Boxplot、SIMR2 等).**必须先自动过滤异常数据**(或自定义过滤算法)，否则历史中的异常 Run 会把 Sigma 拉大，Spec 失去灵敏度.

中试线用法:新工艺没有历史数据 → 先用工程经验给 **宽 Fixed Spec 起步** → 攒够 20-30 Run 后 Auto-Limits 收紧 → 定期评审收紧/放松(配合规格质量报表 Cp/Cpk 汇总指导).

### 7.【建模】Golden Tool / Chamber Matching 机制是什么?中试线怎么用?

- **Golden Tool**:指定一台基准机，同型机台 / Chamber 自动继承其模型与规格
- **Chamber Matching**:PM 后、新设备验机时与基准设备做 Baseline 比对，计算偏离值，超 Spec 报警

中试线价值:多 Chamber 设备(Etch/CVD)腔体差异是研发大敌，用 Chamber Group Matching 报告做 Base Line Shift 检查，是 PMQA(PM 后质量保证)的核心手段.

### 8.【建模】什么是 Context Offset?多 Recipe 共用模型怎么实现?

不同 Context Group(如不同 Recipe / Product)的同一 Sensor 基线不同，为每个 Context 单独建模型会爆炸.做法:**共用同一模型与规格框架，对不同 Context 设置 Offset 偏移量**.

中试线多品种场景的救命功能:50 个产品共用 1 套模型 + 50 个 Offset，而不是维护 50 套模型.

### 9.【建模】智能窗口(Window)为什么要按 Step / Recipe Time / Sensor 规则切片?动态窗口是什么?

工艺 Recipe 各 Step 物理意义不同(Etch 的 Main Etch vs Over Etch)，整段 Trace 一把算统计值会抹平特征.窗口按 **Step、Recipe Time、Sensor 规则(如压力峰值触发)、Offset** 切片，信噪比最高.

**动态参数化窗口**:窗口起点不是固定时间，而是由 Sensor 统计值动态触发(如"压力达到峰值的 Step 起点")，且窗口参数随 Context(Recipe Main Step)自动调整 —— 适配同 Recipe 不同版本 Step 时间微调的中试线常态.

### 10.【建模】虚拟 Sensor(Virtual Trace Parameter)有什么用?举例.

用 Raw Data 经线性表达式、Max/Min/Sum/Moving Range 等算法生成新监控量.典型例子:

- Etch:两个 RF 功率 Sensor 的 **差值** 监控匹配网络漂移
- 炉管:多 Zone 温度的 **Max-Min(均匀性)** 直接建模
- 跨片统计:连续多片 Wafer 的 Moving Range(Lot 切换自动重置)

还支持空值填充、异常点去除、片段截取 —— 提升数据质量.

### 11.【建模】动态规格触发:PM 后、Idle 后、Run N 片后的检测策略怎么设计?

设备状态变了，检测策略要跟着变:

- **PM 后**:前 N 片用宽 Spec 或切独立模型(PM 效应未稳定)，稳定后自动切回
- **Idle 超 N 小时**:首片效应(First Wafer Effect)，开启专项检测或放宽
- **Run N 片后**:累积漂移(如 Chamber 污染累积)，Auto Retarget 重校准目标值

中试线设备启停频繁，这类"状态感知检测"比固定策略实用得多.

### 12.【前道】Etch 设备 FDC 重点监控什么?Endpoint 异常怎么侦测?

重点 Sensor:RF Forward/Reflect Power、ESC 电压/温度、Gas Flow(MFC)、腔体压力、He 背冷压力.

- **Endpoint 异常**:Endpoint 信号(OES 光谱)到达时间异常偏移 → 刻蚀速率漂移 / 膜厚异常 / 腔体状态变化；监控 Endpoint Time 的 UVA + 光谱曲线的 GuardBand
- 工艺时间异常侦测:End Event 缺失 / Step 时间超限直接报警(防"卡死在制程中")

### 13.【前道】炉管(Furnace/Diffusion)FDC 的特点?

- Batch 工艺，一次几十上百片，**一次异常损失大** → 温度曲线 GuardBand 价值最高
- 多 Zone(5-10 区)温度:**单 Zone UVA + Zone 间均匀性虚拟 Sensor** 双管
- 升温/恒温/降温分段建窗口；关注 Temperature Ramp Rate、恒温段波动、Zone 间交叉影响
- 搭配 APC(Zone 温度 R2R 反馈)使用:FDC 发现异常拦截，APC 负责正常漂移补偿

### 14.【后道】后道设备(Wire Bond / Die Attach / Molding / Dicing)能做 FDC 吗?怎么做?

能做，但形态不同 —— 后道很多设备无 SECS Trace，靠三条路:

1. **设备自身过程数据**:Wire Bond 的 Bond Force / Ultrasonic Power / 焊接时间曲线、Die Attach 的贴装压力/温度、Molding 的合模压力/固化温度 —— 多为文件或数据库输出，FDC 走 File/DB 接入
2. **外接传感器**:dicing 主轴电流/振动、molding 机台压力 —— 独立采集盒
3. **结果数据反推**:Wire Pull / Ball Shear / Die Shear 测试数据进 SPC，间接监控

后道 FDC 重点:**单点失效快且不可逆**(断线、飞片、劈刀磨损)，监控目标偏"设备健康"而非"工艺窗口".

### 15.【2-12寸】2-8 寸老设备完全没有数据接口，FDC 覆盖策略?

分层覆盖，不追求 100%:

- **关键站必须覆盖**:通过 MOXA+SECS、外接传感器(RGA、Scrubber、Hot N2、Chiller、PPS、Pump 等附属设备整合采集)、Multi-Source 融合(主机台+附属设备合并到同一 Tool 视图，免编码配置)
- **次关键站**:采集结果型数据(量测/点检)进 SPC 替代
- **普通站**:人工点检 + Offline 数据录入

中试线 FDC 覆盖目标按"关键站覆盖率"考核(如光刻/刻蚀/外延 100%)，不是按设备总数.

### 16.【中试线】新工艺没有历史数据，FDC 模型怎么建?

四步走:

1. **无模型期**:只采集不判定(数据积累 + 观察)，同时上工程经验粗 Spec 防大事故
2. **小样本期**:用 Tag 标记系统手动标 Good/Bad Run，用历史回滚仿真验证规则
3. **初步模型**:20-30 Run 后 Auto-Limits + 宽 GuardBand，Wizard 向导基于历史数据推荐统计方法
4. **迭代收敛**:随数据积累收紧 Spec，定期用模型质量报表评审

### 17.【中试线】实验频繁改 Recipe(Step 时间、温度都在变)，模型天天失效怎么办?

- 模型绑定 **Context(Recipe 版本 / Main Step 参数)**，Recipe 变更自动隔离新旧数据
- 窗口用 **动态触发**(Sensor 特征点)而非固定时间，Recipe 微调窗口自动跟随
- 关键参数用 **相对量建模**(如相对设定值的偏差)而非绝对值
- 实验阶段允许模型 **挂起只采集**，工艺冻结后再启用判定

### 18.【中试线】FDC 误报率太高，工程师开始无视报警，怎么治理?

误报治理五板斧:

1. **分级抑制**:高级别报警后自动抑制低级别，避免刷屏
2. **逻辑组合报警**:双模型同时报警才触发(Summary Data 逻辑表达式)
3. **Data Quality 联锁**:Sensor 数据质量不合格时跳过部分模型
4. **动态规格**:PM 后 / Idle 后自动放宽
5. **数据说话**:用 Top10 报警模型统计 + OOC/OOS 报表找出误报大户，逐个评审收紧策略或修模型

核心认知:**报警闭环率比报警数量重要**，宁可少而准.

### 19.【中试线】FDC 与 EAP/APC 的实时联动怎么设计?Hold 错了谁负责?

联动链路:FDC 判定 Critical → **AMS**(Email/SMS/企业微信通知)→ **MES**(Hold Lot / Hold Tool / Hold Chamber / Hold Recipe)→ **EAP**(Stop Tool / Stop Chamber).

防误杀设计:

- Warning 级只通知不 Hold；Critical 级才联动动作
- Hold 决策保留 **人工确认模式**开关(中试线建议关键站先人工确认跑顺了再切自动)
- 所有联动动作留痕(判定数据、模型版本、动作记录)，支持事后复盘与误杀申诉

责任界定的工程答案:**模型 Owner(工艺/设备工程师)对 Spec 负责，CIM 对执行正确性负责**.

### 20.【中试线】FDC 系统自身高可用怎么保证?采集中断意味着什么?

- 采集服务器崩溃自动检测，**备份服务器自动接管采集进程**(自动故障转移)
- 软件升级期间数据采集 **无缝切换至备用服务器**，完成后切回(不停机发布)
- 机台数据缺失超时报警 —— 采集中断本身要可被监控

采集中断 = 质量盲区:期间跑的 Lot 没有过程数据背书，中试线给客户(尤其车规功率/CIS)交付时无法提供完整追溯包，是质量事故.

### 21.【场景】某 Etch 腔体 FDC 频繁报 RF Power 异常，但产品量测结果正常，怎么排查?

分层排查:

1. **数据质量**:Sensor 本身漂移 / 采集丢点(先看原始 Trace 是不是真异常)
2. **模型问题**:PM 后未重置 / Recipe 换了 Context 未隔离 / Spec 太紧(看 Top10 报表该模型是否误报大户)
3. **真异常早期**:RF 匹配网络、Generator 老化早期确实可能产品暂未超 Spec —— 用 Chamber Matching 对比兄弟腔体，看是否系统性偏离
4. **结论处置**:误报→修模型/调 Spec；真异常→PMS 预防性检查，APC 补偿期间加严量测

考点:**不把"产品正常"当作"设备没问题"的证据**，FDC 的价值就在提前量.

### 22.【场景】新设备验收，Vendor 说设备没问题，但 Chamber Matching 报告偏离基准机 8%，怎么处理?

- 先确认比对口径:同 Recipe、同 Product、同数据采集窗口、Sensor 校准状态一致
- 用 **PMQA 报告**(PM 后自动与基准设备比对 + 新设备验收比对汇总超 Spec 数据)做客观依据
- 偏离分析:区分 **Baseline 平移**(可 Offset 校准)与 **曲线形态差异**(硬件问题:MFC 精度、热电偶位置、真空漏率)
- 处置:Baseline 平移 → Golden Tool Offset 吸收；形态差异 → 要求 Vendor 整改，验收不签 T2 Release

### 23.【场景】PM 后第一批 FDC 全线报警，生产催 Release，怎么办?

标准动作:

1. 确认是否 **PM 后模型未重置 / 宽 Spec 策略未生效**(配置问题立即修)
2. 若是真实 PM 效应(腔体状态变化):跑 Monitor/Season 片让腔体稳定，**用 PMQA 比对确认回归基线**
3. 加严量测放行:与工艺确认后，前几批在加严 EDC/SPC 监控下放行，同时模型累积新基线
4. 复盘:把"PM 后 N 片特殊管控"固化为动态规格规则，下次自动生效

### 24.【场景】要求把某关键参数采样率从 1Hz 提到 10Hz，评估什么?

- **设备能力**:是否支持 10Hz Trace?SECS 通道带宽够不够(走 Interface A 更稳)
- **系统负载**:EAP Driver 需稳定处理 10Hz 数据流、5 秒内处理 10M 大 Message 零丢包；FDC 存储压力(需保留一年以上)
- **价值确认**:高频对故障侦测是否真有增量(瞬态异常如 RF Arc 才需要 10Hz，慢变温度 1Hz 足够)
- 上线路径:测试环境验证 → 单机台灰度 → 监控负载 → 推广

### 25.【场景】FDC Hold 了一批价值很高的客户验证 Lot，工艺认为误杀，流程怎么走?

1. **先保证据**:锁定该 Run 全部 Trace 数据、模型版本、判定记录(不可删改)
2. **技术复盘**:工艺 + 设备 + CIM 三方看 GuardBand 出带点，判定是真异常还是模型问题
3. **处置**:确属误杀 → 签核 Release + 模型修正 + 记录防再发；存疑 → 加量测/送可靠性验证后判定
4. **机制**:该场景倒逼出"Critical Hold 双人复核"或"高价值 Lot 白名单人工确认"规则

原则:**Release 权力在质量/工艺，FDC 只负责拦截和举证**.

### 26.【软技能】工艺工程师说"FDC 没用，还老误报，我要全关掉"，怎么应对?

- 先听:找出他烦的具体模型(Top10 误报报表拉出来对)
- 用数据证明价值:拿出历史拦截案例(某次 FDC 提前 3 批发现 MFC 漂移，避免整批报废)
- 给方案:误报大户模型一起评审 —— 该关的关、该放宽的放宽、该修数据的修数据，**收敛到"少而准"**
- 底线:关键站 FDC 覆盖率是质量体系要求，不能全关，但判定级别可以从 Critical 降 Warning 过渡

### 27.【软技能】FDC 工程师最重要的三个能力?

**工艺理解力(看得懂 Trace 背后的物理意义)、数据建模力(UVA/MVA/窗口/Spec 的工程权衡)、跨部门推动力(误报治理需要工艺、设备、制造多方配合)**.

加分:懂中试线"先采集后判定、模型随工艺成熟度演进"的节奏感.

---

## FDC Function List

### 1. 数据采集与集成 (Data Collection & Integration)

#### 1.1 多协议与多源数据接入

支持广泛的工业协议与数据源接入, 实现全厂设备数据的统一采集.

- **标准协议支持**:原生支持 SECS/GEM, Interface A (EDA)、OPC UA 协议;提供 nPortSECS 组件在机台与 EAP/FDC 间转发消息.
- **非标数据接入**:支持从 File, Database, TCP/IP 等非标接口收集数据;支持 Facility Data 采集.
- **附属设备整合**:支持与 External Sensor(如 RGA, Scrubber, Hot N2, Chiller, PPS, Pump 等) 连接并采集数据.
- **Multi-Source 融合**:支持将主机台数据与附属设备数据通过配置合并至同一 Tool 视图, 无需编码.
- **复杂结构解析**:支持无代码提取 List, Array 等复杂结构数据;提供 EDA Meta Data 提取工具, 直接获取 Event Path 等元数据.

#### 1.2 采集策略与计划管理

支持灵活、精细化的数据采集配置, 平衡数据完整性与系统负载.

- **动态采样控制**:支持根据抽样变量和 Step 设定不同采样比例与频率, 并设置上下限防错;支持 Polling 与 Trace 两种采集模式.
- **DCP 计划定义**:支持基于事件、时间或数据点触发采集起止;支持按工艺类型 / 腔室级别配置 SVID 及独立采集频率.
- **轮检与追溯模式**:支持 By Tool 轮流采集 (轮检模式) 及精准回溯定位 (追溯模式).
- **Idle 状态管控**:支持配置设备 Idle 时是否请求上报数据;支持 Non-Wafer / Non-Process 数据收集.
- **模板化部署**:支持同型机台共享 DCP/Sensor List/SVID List 模板, 亦支持单机台独立设定;支持导入导出配置.
- **热更新机制**:修改数据收集定义无需停机或重启 EAP.

#### 1.3 数据质量与上下文整合

支持数据有效性校验及业务上下文关联, 确保分析数据的可用性.

- **Context 整合**:支持将 MES Context(Lot ID, Prod ID, Stage, Recipe, Reticle 等) 及自定义标签注入 FDC 工艺数据.
- **质量监控**:支持数据采集质量实时监控与汇总报告;支持机台数据缺失超时报警.
- **虚拟参数**:支持设定 Virtual Trace Parameters 与 Virtual Events.
- **存储能力**:提供硬件配置支持保存一年或以上历史数据.

### 2. 故障侦测与模型引擎 (Fault Detection & Modeling)

#### 2.1 UVA/MVA 建模与分析

支持单变量与多变量统计模型, 覆盖设备健康与工艺质量监控.

- **双模引擎**:支持同时运行多个 UVA(单变量) 与 MVA(多变量, 含 Q, PCA, HT2, Diagonal HT2) 监控模型.
- **虚拟 Sensor 生成**:支持通过线性表达式、Max/Min/Sum/Moving Range 等算法从 Raw Data 生成虚拟 Sensor;支持空值填充、异常点去除及片段截取.
- **跨片统计**:支持连续多片 Wafer 间的统计值计算 (如 MovingRange), 并在 Lot 切换时自动重置.
- **历史回滚仿真**:支持利用历史数据对 UVA/MVA 模型进行离线仿真验证.
- **二次开发**:支持 Model 算法二次开发并提供 Sample Code.

#### 2.2 智能窗口与过滤

支持基于工艺特征的动态数据切片, 提升模型信噪比.

- **多维窗口定义**:支持 Step, Recipe Time, Sensor 规则、Offset 等多种窗口划分方式;支持 Cycle Step 内 Main/Sub-step 批量监控.
- **动态参数化窗口**:窗口起始点可基于 Sensor 统计值 (如压力峰值) 动态触发;窗口参数随 Context(如 Recipe Main Step) 自动调整.
- **多级窗口叠加**:允许单次统计计算应用多个数据窗口.
- **噪音过滤**:支持窗口内 Sensor 数据灵活过滤, 剔除干扰信号.
- **向导式建模**:提供向导工具, 基于历史数据推荐统计方法.

#### 2.3 规格管理与自适应

支持多层次、动态化的规格体系, 降低误报率.

- **多级规格体系**:支持 Warning / Critical / Outlier 三级报警等级;每级可设独立 Spec, OCAP 及 Alarm Rule.
- **多种 Spec 类型**:支持 Fixed / Delta / EWMA / N-Sigma / Target% / Moving Average 等多种规格形式.
- **Auto-Limits 自动生成**:支持基于历史数据自动计算 Spec, 内置 8 种 Sigma 算法 (PSEUDO, Bounded Boxplot, SIMR2 等);支持自动过滤异常数据及自定义过滤算法.
- **Golden Tool 机制**:支持设定 Golden Tool, 同型机台 /Chamber 自动继承规格;支持 PM/ 新设备验机比对及偏离值计算.
- **Context Offset**:支持针对不同 Context Group(如不同 Recipe) 设置 Offset, 使多 Recipe 共用同一模型与规格.
- **Baseline 比对**:支持 Sensor Baseline 设定及 Process Data 比对报警.
- **动态规格触发**:支持根据条件 (PM 后、Idle N 小时、Run N 片后) 动态开启 / 关闭检测或重置规格.
- **Auto Retarget**:支持 Offset Change, Event 或外部系统触发的自动目标值重校准.

#### 2.4 实时侦测与报警联动

支持制程中的实时异常拦截与闭环处置.

- **实时检查**:支持长制程中实时规格检查, 避免制程结束才发现异常;支持工艺时间异常 (如 End Event 缺失) 侦测.
- **GuardBand 动态频带**:支持基于 Trace Data 生成随时间变动的动态频带, 结合 SPC Trend Rule 降低误报.
- **逻辑组合报警**:支持 Summary Data 逻辑表达式生成新监控模型 (如双模型同时报警才触发).
- **Data Quality 联锁**:Sensor 数据质量不合格时, 可配置跳过部分模型监测.
- **分级抑制**:支持模型级别设定, 高级别报警后自动抑制低级别报警.
- **系统集成处置**:
    - AMS:支持 Email/SMS/Phone/Wechat 多渠道报警.
    - MES:支持 Hold Lot/Tool/Chamber/Recipe.
    - EAP:支持 Stop Tool/Chamber.
- **Alarm Rule 管理**:支持自定义 SPC Alarm Rules;支持 Rule 仿真测试;支持全局共享 Rule 定义.

### 3. 数据可视化与分析 (Visualization & Analysis)

#### 3.1 交互式图表分析

支持多维度、深层次的数据探索与根因定位.

- **多源叠图**:支持 Trace Data / Summary Data 按 Lot/Wafer/Tool 等维度叠图;支持多 Run 数据按 Step Number 对齐.
- **Context 着色与筛选**:支持按 Product/Flow/Recipe/Mask 等 Context 筛选数据;支持按 Context 为数据点着色并生成图例.
- **双轴与多图**:支持双 Y 轴显示及多图同屏;支持辅助线 (Alarm/Event/Spec) 叠加.
- **Drilldown 追溯**:支持从汇总数据下钻至原始 Trace Data;支持 SPC Chart 点击跳转 Trace Data.
- **Tag 标记系统**:支持手动 / 自动 (Range/Peak/Time Based) 标记 Good/Bad Run;支持基于 Tag 的叠图、分色及 Key Sensor 偏差打分排序.
- **Idle 时间压缩**:支持按时间顺序显示多 Run 数据时去除中间 Idle 时段.
- **CSV 导入分析**:支持导入 CSV 文件至 FDC 图表工具进行分析.
- **图表定制**:支持图例、单位、点大小、线型、颜色、Y 轴刻度等自定义设置;支持 Highlight 特定 Run.
- **一键导出**:支持导出 Excel 及按条件一键导出 FDC Chart.

#### 3.2 时间跨度与数据源切换

支持高效的历史数据访问与对比.

- **时间跨度方案**:提供简单高效的线上 / 线下数据源切换方案 (1 年内 /3 年内 / 超 3 年).
- **Filter 功能**:支持图中数据实时过滤.

### 4. 报表与统计 (Reporting & Analytics)

#### 4.1 标准与定制报表

支持全方位的 FDC 绩效与质量统计.

- **Alarm 统计**:支持 Alarm Log 报表 (Drilldown to UVA)、OOC/OOS 报表、Top10 报警模型统计.
- **覆盖率分析**:支持 Recipe 覆盖率与 Run 覆盖率统计.
- **模型质量评估**:支持规格质量报表 (Cp/Cpk 汇总), 指导 Spec 收紧 / 放松.
- **趋势与分布**:支持 UVA Trend 报表 (含 Spec)、Box Plot 报表 (多机台 / 多时间段对比).
- **实施状况总览**:支持按 Fab/Area/ToolType 查看 DCP/Spec/OCAP 实施状况.
- **PMQA 与匹配报告**:支持 PM 后自动与基准设备比对;支持 Chamber Group Matching 报告 (Base Line Shift 检查).
- **新设备验收**:支持新设备上线后与基准设备比对, 汇总超 Spec 数据.

#### 4.2 报表自动化与分发

支持报表任务的调度与多渠道交付.

- **任务调度**:支持计划报表生成任务, 支持客制化内容.
- **邮件推送**:支持报表通过电子邮件自动发送.
- **格式转换**:支持查询结果转换为 PDF/PPT Report.
- **收藏夹**:支持用户定义常用报表收藏夹.
- **开放 Schema**:开放 DB Schema 支持第三方报表开发.

### 5. 系统架构与运维 (System Architecture & Operations)

#### 5.1 高可用与无缝升级

支持企业级连续性保障, 确保 7x24 小时监控不中断.

- **数据采集无缝切换**:软件升级 / 打补丁期间, 支持数据采集无缝切换至备用服务器, 完成后切回.
- **自动故障转移**:支持采集服务器崩溃自动检测, 并在备份服务器启动采集进程.
- **不停机发布**:软件升级和新功能发布不影响系统使用.
- **多产线支持**:支持多产线同时使用.

#### 5.2 低代码扩展与集成

支持业务人员自主开发与外部系统对接.

- **可视化 Workflow**:提供拖拽式 Block 开发工具, 事件触发执行, 无需编码完成二次开发.
- **Python 脚本引擎**:提供 Python/IronPython 模块, 支持进阶分析与 AI/ML 复杂计算.
- **账号集成**:支持集成客户账号管理系统, 无需额外创建账号.
- **签核集成**:支持签核系统集成;支持紧急生效功能 (特殊情况直接修改 Spec/OCAP).
- **消息分流**:支持对设备 Message 进行分流过滤.

#### 5.3 安全与监控

支持细粒度权限管控与系统健康自监控.

- **RBAC 权限**:支持基于角色的访问控制, 不同用户显示不同设备及操作功能.
- **性能监控**:支持 Performance Counter 对接 Zabbix 等主流监控系统;提供系统管理工具及性能报警.
- **数据生命周期**:提供数据保留期限、备份及清理机制.
- **历史记录**:提供完整的操作与变更历史记录.

# RMS

## RMS Architecture

- 服务层
    - 服务层主要是为整个RMS系统提供服务. 再服务层主要有Log Module, Recipe File Module, Database handler Module, 以及 DB Proxy Module
        - Log Module: 主要是用来提供整个系统的日志记录, 可以灵活的进行日志的保存, 可以根据日志的大小, 时间, 类型, 灵活的保存日志, 以方便用户查看日志
        - Recipe File Module: 主要是用来与下层系统进行对接, 可以从RMS里生成机台使用的Recipe
        - Database handler Module: 主要用来处理系统数据的增加, 删除, 修改, 查询等服务, 能够灵活的支持数据的增删改查
        - Data Base Proxy: 主要为多数据库服务, RMS 采用了 ORM 进行数据库访问, 并且通过代理的设置, 可以支持多种数据库
- 通信层
    - 通信层主要是要是用来与设备, EAP 以及 RMS Client 进行通信的. RMS Client, EAP 与 RMS 的通信主要是 MQ. RMS Server 与设备的通信, 则是通过 EAP 进行中转, 这样方便 RMS Client 能够实时的从机台上获取机台的 Recipe
        - 系统高可用性, 负载均衡
        - 软件升级和新功能发布不影响系统使用(不停机)
        - 新的设备类型或新的设备上线, 不影响系统使用(不停机)
        - 工厂产能、设备增加, 可以动态增加服务器, 不影响系统使用(不停机)
        - 多台服务器间可以实现负载平衡, 自动故障切换

## RMS interview

### 1.【概念】RMS 在 CIM 中的位置?与 EAP, MES 的分工?

- **RMS**:配方的 "中央档案馆 + 守门员"—— 统一存储、版本管理、签核生效、下发校验、比对防错
- **EAP**:配方的 "搬运工"—— 负责 RMS 与机台间的 Recipe 上传 / 下载物理传输 (S7 消息)，Run 货前验证机台存在对应 Recipe ID
- **MES**:配方的 "业务索引"—— Flow/Step 里引用哪个 Recipe(MES Recipe ID)，EAP 负责 MES Recipe ID → 设备 Recipe ID 的解析转换 (前后缀、路径可配)

数据流:Run 货时 EAP 请求 → RMS 自动下载指定 Recipe 至机台 → 校验比对 → 允许作业.

### 2.【概念】Golden Recipe 机制是什么?为什么需要它?

Golden Recipe 是 **跨设备、跨腔体共享的基准配方**，作为 Body 验证比对的基准源.

没有它:100 台同型设备各存一份 "各自正确" 的 Recipe，无法回答 "哪份是对的".有了它:任何设备的 Recipe 都可与 Golden 比对找漂移，新机台导入直接以 Golden 为源下发，PM 后 / 异常后快速恢复.

### 3.【概念】Recipe 版本状态机?为什么 "最多仅有一个生效版本"?

三种状态:**Draft(新创建)→ Intermediate(中间修改/待签核)→ Active(生效)**.系统内可存多个历史版本，但同一 Recipe **最多一个 Active**.

原因:机台 Run 货时只能有一个确定答案.多版本共存的意义是追溯与回退 (可回退至任意历史版本)，而不是并行生效.更新 Spec 自动生成新版本，签核完成才能 Active，未签核禁止用于生产.

### 4.【概念】Recipe Body 格式 (Binary / XML / Text) 对 RMS 管理的影响?

| 格式     | 优点         | 缺点                      | RMS 处理                                               |
| :------- | :----------- | :------------------------ | :----------------------------------------------------- |
| Binary   | 体积小传输快 | 不可读、强依赖 Vendor SDK | 需专用 Parser 才能做参数级比对，否则只能整包 Hash 比对 |
| XML      | 可读、自描述 | 体积大 3-5 倍             | 标准解析，参数级比对容易                               |
| Text/CSV | 简单直观     | 无 Schema 易出错          | 自定义解析器                                           |

**关键考点**:能不能做 "参数级比对" 取决于能否解析 Body —— 中试线非标设备 Binary 配方多，常只能做版本级 /Hash 级比对，这是现实约束.

### 5.【概念】RMS 与设备本地 Recipe 的关系?设备本地改了怎么办?

原则:**RMS 是唯一权威源，机台本地 Recipe 是受控副本**.

- Run 货时 RMS 下载覆盖 / 或 Run 前 Online 比对
- 设备本地被改:下次 Online Run 货自动比对发现差异 → Alarm + Hold
- 主动巡检:定期从设备 Upload Recipe Body 与 RMS 存档 **Offline 比对**
- 开机校验:设备开关机时严格校验 Recipe 参数数量，检测设备端参数冗余或缺失

### 6.【概念】EC/SV 管理与 Recipe 管理的关系?

Recipe 是 "工艺指令文件"，EC(Equipment Constant)/SV 是 "设备常量与状态".RMS 同时管两者:

- EC 上传、比对、下载 (如校准系数换件后更新)
- 按 **Tool/Recipe/LoadPort/Chamber/Product/Tech/Recipe Group** 维度设定 EC/SV Spec
- 价值:很多 "配方没问题但工艺漂移" 的根因是 EC 被改 (如工程师手动校准后未同步)，EC 比对能抓住

### 7.【版本】多层级 Recipe(主 Recipe + 子 Recipe) 怎么管?举例.

支持主子结构、不限层级、**主子均支持校验**.典型例子:

- 炉管:主 Recipe(温度曲线框架)+ 子 Recipe(气体程序、升降温程序)
- Litho:主 Recipe + Sub Recipe(CPE, DOMA, Files, BMMO OVL/Focus 等)

管控要点:子 Recipe 被多个主 Recipe 引用，修改子 Recipe 必须做 **Where Used 影响分析** + 继承 / 覆盖机制明确，签核要联动.

### 8.【比对】Online 比对与 Offline 比对的触发时机和用途?

- **Online 在线比对**:Run 货时根据 EAP/MES 请求自动比对 Recipe Body，失败 → Alarm + 联动 MES/EAP 执行设备 Hold 或 Recipe Hold —— 实时拦截错误配方上机
- **Offline 离线比对**:工程分析用 —— 不同设备间同 Recipe 比对、设备 Recipe 与 RMS 存档比对、同 Recipe 不同版本比对、两台真实设备程序差异直接比较、同型号所有设备同程序一键比对

### 9.【比对】比对策略:Target / Range / In 的区别?Tolerance 怎么定?

- **Target**:必须等于目标值 (关键参数，如温度设定)
- **Range**:允许范围 (如气体流量 ±2%)
- **In**:枚举集合内 (如 Chamber 号 ∈ {1,2})

支持 Full Body 与 Parameter 级比对；容差按百分比或固定数值定义；**Spec Template** 模板化应用到同类 Recipe 简化配置.定 Tolerance 的原则:参考工艺窗口 (工艺工程师给)+ 设备精度 (设备工程师给)，不是 IT 拍脑袋.

### 10.【比对】Bypass 机制为什么存在?怎么防滥用?

存在理由:特殊调试场景 (设备维修后试机、工艺临时验证) 需要跳过比对.

防滥用:

- 支持 By pass 单台设备所有 Recipe 或单个 Recipe —— **颗粒度越细越好**
- Bypass 操作强制记录:谁、何时、哪个 Recipe、理由、有效期
- 定期审计 Bypass 清单，超期未回收报警
- 中试线建议:Bypass 权限只到资深工程师 + 每日自动汇总通知主管

### 11.【版本】签核流程怎么设计?紧急情况下怎么办?

- 对接内部 OA / 签核系统，Recipe 参数设定及变更在线签核；**签核完成才能 Active**
- 按 Recipe 或按 Tool 维度设定是否送签
- **紧急通道**:支持 Bypass 签核直接生效 (紧急生效功能)，但必须事后补签 + 留痕；也可按 Tool Type / Recipe 设定自动跳过签核规则 (客制化，如实验线专用设备)
- 中试线实践:量产 Recipe 三级签核 (PE→PIE→QA)，实验 Recipe 一级签核 (PE 自签 + 自动过期)

### 12.【前道】Litho Recipe 管理的特殊性?

- Sub Recipe 类型多 (CPE/DOMA/Files/BMMO)，且与 Scanner 机型强绑定 (ASML/CANON/NIKON 结构不同)
- 与 APC 联动:APC R2R 改的 Dose/Focus 参数属于 **受控前馈**，不算 Recipe 变更 —— 边界要划清:RMS 管基线配方，APC 管动态偏移，两者都留痕
- Reticle 绑定:Recipe 与 Reticle 版本关联验证
- 换版风险高:光刻 Recipe 错一个参数整批返工，Online 比对必须是 Critical 级

### 13.【前道】炉管 / Etch / CVD 配方管理各有什么要点?

- **炉管**:多 Zone 温度 + 气体程序，层级结构深；Batch 作业一次影响几十片，Recipe 变更必须 Pilot 验证
- **Etch**:Chamber 级差异大，同 Recipe 不同 Chamber 可能要 Chamber Offset；Golden Recipe + Chamber 比对是常态
- **CVD/PVD**:Gas Ratio, RF、压力参数耦合强，参数级比对 (Range 策略) 比整包比对有意义

### 14.【后道】后道的 "Recipe" 和前道是一回事吗?管理重点差异?

不完全是.后道配方形态更多样:

- **Wire Bond**:焊接程序 (坐标表 + 参数)，本质是文件 + 大量坐标数据
- **Die Bond**:贴装程序、吸嘴 / 劈刀参数
- **Test Program**(CP/FT):测试程序有独立版本体系，与机台 Recipe 类似管理但归测试部门主责，RMS 管版本与下发校验
- **Printer/Molding**:参数表为主

管理重点差异:**后道配方与产品/封装形式强绑定，换型(Changeover)频繁** → RMS 要支撑 "换型清单" 式批量校验 (换型后首件前批量比对相关程序版本)，而不只是单 Recipe 比对.

### 15.【2-12 寸】老设备 Recipe 散落在机台本地 (软盘 / 本地硬盘)，怎么收编进 RMS?

收编四步:

1. **摸底**:清点各机台本地 Recipe 清单，确认可读路径 (SECS S7 支持度、FTP、共享目录、甚至手动导出)
2. **上传归档**:通过 EAP 批量 Upload Recipe Body 入 RMS，标记初始版本
3. **确权**:与工艺工程师逐台确认 "哪个是当前正确版本" 定为 Active/Golden
4. **收口**:收编后禁止本地修改 (或本地修改定期巡检比对)，新变更一律走 RMS 下发

中试线常见坑:同一 Recipe 名在不同机台内容不同 (历史各自调试)，收编时必须 **先 Offline 比对再合并命名**.

---

### 16.【中试线】实验配方每天新建十几个，RMS 怎么管才不乱?

中试线配方治理方案:

- **分区管理**:量产区 (强管控:签核+ 比对+ 永不过期) 与实验区 (弱管控:自签+ 自动过期) 隔离
- **实验配方命名规范**:实验编号 + 日期 + 版本，系统自动校验命名
- **生命周期自动化**:实验配方默认 30 天有效期，到期自动转 Inactive，需要的走转正流程 (补签核→量产区)
- **自动清理**:配置 Recipe Run 完成后是否自动从机台删除，优化机台存储
- **Under Control / Not Control 设定**:Not Control 程序支持按 LotType 卡控，防止实验配方被量产 Lot 误用

### 17.【中试线】研发 Recipe 和量产 Recipe 在同一台设备上共存，怎么防误用?

- **Recipe Group 隔离**:研发组 / 量产组分开，权限与比对策略不同
- **Lot Type 绑定**:实验 Lot 只允许选实验区配方，量产 Lot 只能选 Active 量产配方 (EAP Run 货前校验)
- **界面可见性管控**:按角色管控 Recipe 在 RMS 界面显示 (操作员看不到研发配方)
- **误下发拦截**:配方名称匹配、版本校验、机台权限匹配、下发二次确认、错误配方拦截告警多层校验

### 18.【中试线】RMS 重要逻辑要修改，怎么安全上线?

**Pilot Run 验证机制**:

- 在个别设备、个别 Recipe 上先 Pilot 验证
- 通过额外准备的 **PiRun 服务器** 承载验证流量，未参与 Pilot 的设备和 Recipe 完全不受影响
- 验证通过后灰度推广 → 全量
- 版本留档可回滚

### 19.【中试线】不同产品家族 (逻辑 vs 功率 vs CIS vs 化合物) 配方结构完全不同，RMS 怎么统一管?

- **统一的是框架，不是模板**:版本状态机、签核流、比对引擎、权限模型全家族共用
- **差异化的是解析器与 Spec Template**:按产品家族 / 设备类型配置不同 Body Parser(Binary/XML/Text) 与比对模板
- 跨家族不追求同构:功率器件的注入 Recipe 和 CIS 的光刻 Recipe 没有可比性，各自建 Golden 体系
- 数据模型按 **Tech/Recipe Group** 维度组织，EC/SV Spec 也能按此维度隔离

### 20.【全产品】化合物半导体 (SiC/GaN) 外延与高温设备配方管理的特殊点?

- 外延 (MOCVD)Recipe 参数极多且含大量时序表 (流量 / 温度随时间序列)，Body 大、结构复杂 —— 确认 RMS 大 Body 支持能力与解析器
- 设备非标比例高:无 S7 能力的走文件导入收编，比对退化为版本级
- 配方 = 核心 IP(外延配方就是工艺 Know-how):权限管控 + 水印 + 导出审计要更严

---

### 21.【场景】怀疑有人直接在机台本地改了量产 Recipe，怎么查证与处理?

查证:

1. 从该机台 Upload Recipe Body 与 RMS Active 版本 **Offline 比对**，差异参数列出
2. 查 RMS 变更历史与机台端操作记录 (谁、何时)
3. 追溯影响:按时间范围查询该 Recipe 对象 (机台 /Lot) 使用历史，圈定受影响 Lot

处理:恢复正确版本 → 受影响 Lot 质量评估 → 根因整改 (收回本地修改权限 / 开启上传预检 / 加强巡检频次).

### 22.【场景】新机台导入 (Rollout)，Recipe 怎么快速部署?

- 同型号 NewType 机台的 Recipe **拷贝部署**(EAP 支持同型机台拷贝 + 配置差异比较)
- 以 Golden Recipe 为源批量下载到新机台
- 下载后 **Online 比对验证** + 首件 Pilot Run 确认
- Chamber 级差异通过 Chamber Offset 吸收，不另建 Recipe

### 23.【场景】Online 比对失败 Hold 了正在跑的客户紧急 Lot，工艺说配方是他刚按流程改的，怎么查?

排查路径:

1. 比对失败记录:RMS 详细记录了 **具体差异参数**，先看差在哪
2. 签核状态:新改的版本是否走完签核已 Active?(常见坑:改了没签核，下发的还是旧版，机台端却是新版)
3. 下发链路:EAP 下载的是否最新 Active 版本?缓存问题?
4. 设备端:机台本地是否残留旧 Recipe 未覆盖?

处置原则:先恢复正确版本放行 (签核确认后)，再复盘流程漏洞.

### 24.【场景】Recipe Body 从 Binary 换成 XML(设备软件升级)，RMS 要做什么?

- 新 Parser 开发与验证 (测试环境用 Sample 文件先行)
- 历史版本处理:老 Binary 版本保留只读，不做跨格式参数比对 (或做一次性转换映射)
- 比对 Spec 重建:XML 参数路径变了，Spec Template 需适配
- 升级窗口期:设备软件升级与 RMS Parser 上线要同步排期，避免 "设备已升级 RMS 不会读" 的空窗

### 25.【场景】发现两台同型设备同一 Recipe 跑出来的产品有系统性差异，怎么用 RMS 手段排查?

1. 两机 Recipe **Offline 直接比对**(真实设备对比功能):确认配方本身是否一致
2. **EC/SV 比对**:配方一致但 EC(校准系数) 不同是常见根因
3. 结构比对:Sequence 分层呈现，看 Step 顺序 / 隐藏子 Recipe 差异
4. 配方无差异 → 转 FDC Chamber Matching 查设备硬件状态

考点:知道 "产品差异 ≠ Recipe 差异，也可能是 EC/设备状态"，RMS 提供前两个排查手段.

### 26.【软技能】PE 说 "签核太慢，我要直接生效"，怎么平衡效率与管控?

- 理解诉求:中试线迭代快，三级签核确实可能成为瓶颈
- 分层方案:实验配方 → 自签 / 自动跳签核 (按 Tool Type/Recipe 设定)；量产配方 → 保留签核但优化时效 (移动签核、限时自动升级)
- 数据说话:统计签核平均耗时，向管理层推动签核 SLA
- 底线不动摇:**生效版本必须可追溯谁批的**，紧急通道也要事后补签

### 27.【软技能】RMS 工程师最重要的三个能力?

**配方数据建模能力(多格式/多层级/多家族的抽象)、风险意识(错误配方=批量报废，比对与签核是生命线)、流程设计能力(中试线灵活与量产管控的平衡)**.

---

## RMS Function List

### 1. Recipe 基础功能管理

#### 1.1 Recipe 创建与维护

支持通过 EAP 集成或手动方式对设备配方进行全生命周期维护, 确保配方数据的准确性与完整性.

- **Recipe List 同步**:支持通过 EAP 整合, 自动从设备上传并创建 Recipe List(Recipe Name).
- **Recipe Body 管理**:支持通过 EAP 从设备上传 Recipe Body, 支持批量上传;支持编辑修改 Recipe 内容及 "另存为" 复制功能.
- **状态变更与签核**:支持批量修改 Recipe 状态、批量签核及批量生效;支持按角色管控 Recipe 在 RMS 界面的显示权限, 防止误操作.
- **查询与删除**:支持通配符模糊查询 Recipe;支持在系统中安全删除 Recipe.
- **程序列表管控**:支持 Under Control / Not Control 设定, 针对 Not Control 程序支持按 LotType 进行卡控.
- **自动清理机制**:支持配置 Recipe Run 完成后是否自动从机台删除, 优化设备存储空间.

#### 1.2 Recipe 下载与部署

支持灵活高效的配方下发机制, 满足生产准备与自动化运行需求.

- **自动下载**:Run 货时响应 EAP 请求, 自动将指定 Recipe 从 RMS 下载至机台;支持设备 Idle 状态下预下载 Recipe.
- **手动批量下载**:支持在 RMS UI 上手动触发单个或多个 Recipe 的批量下载.
- **格式兼容**:支持 SECS, Binary, ASCII, XML 等多种数据类型的 Recipe Body 解析与存储.

### 2. Recipe 生命周期与版本控制

#### 2.1 版本状态流转

支持严谨的版本管理机制, 确保生产环境始终使用受控且正确的配方.

- **多版本共存**:支持 Draft(新创建)、Intermediate(中间修改 / 待签核)、Active(生效) 三种版本状态;系统内可存在多个历史版本, 但最多仅有一个生效版本.
- **Golden Recipe 机制**:支持跨设备、跨腔体共享同一 Golden Recipe, 作为 Body 验证比对的基准源.
- **暂停与发布**:支持根据 Recipe ID 独立执行暂停或发布操作, 快速响应生产异常.
- **版本回退**:支持完善的版本控制, 更新 Spec 自动生成新版本, 并可回退至任意历史版本.
- **自动备份**:支持 Recipe 变更时自动备份至 RMS 备份系统, 保障数据安全.

#### 2.2 层级化与对象管理

支持复杂工艺场景下的配方结构化管理.

- **多层次 Recipe 架构**:支持主 Recipe 与子 Recipe 定义, 不限层级数, 且主子 Recipe 均支持校验.
- **EC/SV 管理**:支持设备常量 (EC) 与状态变量 (SV) 的上传、比对及 EC 下载;支持按 Tool/Recipe/LoadPort/Chamber/Product/Tech/Recipe Group 维度设定 EC/SV Spec.
- **历史追溯**:支持按时间范围等条件查询 Recipe 对象 (机台 /Lot) 使用历史及 Recipe 内容变更历史.

### 3. Recipe 比对与校验 (Validation)

#### 3.1 Online 在线比对

支持生产过程中的实时配方一致性检查, 拦截错误配方上机.

- **实时触发**:Online Run 货时, 根据 EAP 或 MES 请求自动比对 Recipe Body.
- **异常联动**:比对失败时自动发送 Alarm 至报警系统, 并与 MES/EAP 整合执行设备 Hold 或 Recipe Hold.
- **Bypass 机制**:支持 By pass 单台设备所有 Recipe 或单个 Recipe 的比对, 适应特殊调试场景.
- **失败记录**:详细记录比对失败的具体参数信息, 辅助快速定位问题.

#### 3.2 Offline 离线比对

支持多维度的配方差异分析, 支撑工程分析与设备匹配.

- **多场景比对**:支持不同设备间相同 Recipe 比对、设备 Recipe 与 RMS 存档比对、同 Recipe 不同版本比对.
- **批量一键比对**:支持两台设备多程序一键比对、同型号所有设备同程序一键比对 (客制化).
- **真实设备对比**:支持 FAB 中两台真实设备的程序差异直接比较.
- **结构化呈现**:支持 Sequence 比较结果分层呈现;支持将 Recipe Body 解析为系统可识别参数类型后进行比对 (兼容 Format/Unformat).
- **上传预检**:Recipe 上传时自动进行参数合规性检查.

#### 3.3 比对 Spec 与策略配置

支持精细化的比对规则定义, 平衡管控严格度与灵活性.

- **多种比对方式**:支持 Target(目标值)、Range(范围)、In(枚举集合) 等多种参数比对逻辑;支持 Full Body 与 Parameter 级比对.
- **容差定义**:支持按百分比或固定数值定义参数修改 Tolerance.
- **Spec Template**:支持定义 Spec 模板并应用至相应 Recipe, 简化配置工作量.
- **结构比对**:支持对 Recipe 结构本身进行比对, 而不仅限于参数值.
- **开关校验**:支持设备开关机时严格校验 Recipe 参数数量, 检测设备端参数冗余或缺失.

### 4. 签核与审批流程 (Approval Workflow)

#### 4.1 外部系统集成签核

支持与企业内部流程系统对接, 实现配方变更的合规审批.

- **OA/RMS 整合**:支持连接内部 OA 系统或专用签核系统, 实现 Recipe Parameter 设定及变更的在线签核.
- **灵活送签策略**:支持按 Recipe 或按 Tool 维度设定是否送签;支持选择 Bypass 签核直接生效, 适应紧急生产需求.
- **生效控制**:签核完成的 Recipe 方可变为 Active 版本, 未签核版本禁止用于生产.

#### 4.2 自动化免签核策略

支持针对特定场景的签核流程优化, 提升工程效率.

- **自动跳过签核**:支持按 Tool Type 或 Recipe 设定自动跳过签核规则, 直接生成激活版本 (客制化).
- **Validate Log 统计**:支持对各类型校验结果进行汇总统计, 生成基于历史的 Validation Report.

### 5. 权限与安全管控

#### 5.1 多维度权限模型

支持细粒度的功能与数据访问控制, 保障系统安全.

- **角色与用户组**:支持 User Group 与 Function Role 设定, 可对任何操作功能设置权限.
- **设备级数据隔离**:支持按设备设置权限, 用户仅能查看和操作其授权范围内的设备.
- **界面可见性管控**:支持按角色管控 Recipe 在 RMS 界面上的显示, 避免非授权人员误操作.

### 6. 系统高可用与运维

#### 6.1 高可用架构

支持企业级稳定性要求, 确保 7x24 小时不间断服务.

- **负载均衡与故障切换**:支持多台服务器间负载平衡及自动故障切换.
- **零停机维护**:支持软件升级、新功能发布、新设备上线、产能扩充 (动态增加服务器) 等操作不影响系统正常使用.

#### 6.2 Pilot Run 验证机制

支持变更的安全灰度发布, 降低全局风险.

- **Pilot 隔离验证**:RMS 重要逻辑修改时, 支持在个别设备、个别 Recipe 上先进行 Pilot 验证.
- **独立 PiRun 环境**:通过额外准备的 PiRun 服务器承载验证流量, 确保未参与 Pilot 的设备和 Recipe 完全不受影响.

#### 6.3 报表与扩展

支持数据开放与定制化开发, 满足工厂个性化需求.

- **客制化报表支持**:提供完整数据接口与底层数据, 支持客制化报表开发.
- **Validate Report**:内置校验结果汇总统计功能, 支持基于历史数据的分析报告生成.

# RCM

## RCM interview

### 1.【概念】RCM 在 CIM 中的位置?与 EAP 的分工?

- **RCM**:人的远程通道 —— 把机台的屏幕和键鼠延伸到 FAB 之外,人看屏操作机台
- **EAP**:系统的自动化通道 —— SECS/GEM 消息,Run 货控制与数据采集,不需要人盯屏

分工原则:**正常生产走 EAP 全自动;异常处理、调试、无 SECS 老设备的人工作业走 RCM**.典型联动:FDC/AMS 推告警 → 工程师远程登入 RCM 看屏处置,大量 alarm 不用跑 FAB.

### 2.【概念】RCM 的核心价值?为什么 "减少人员进 FAB" 值得专门建一套系统?

- **进 FAB 成本高**:更衣 + 风淋一次 20-30 分钟,且人流本身是污染源
- **异常响应快**:夜间 / 跨厂区场景,远程秒级接入 vs 到场几十分钟,直接缩短 MTTR
- **Vendor 远程诊断**:不等厂商出差,装机调试期收益尤其大
- 量化:一次远程处置省 30-60 分钟,高频 alarm 机台回报明显

但 **远程 = 高风险**,所以 RCM 一半的功能其实在做安全:互锁、权限、审计.

### 3.【概念】KVM over IP 的原理?为什么 "零侵入安装" 是关键卖点?

硬件连线获取机台屏幕视频信号 + 键鼠信号注入,编码后经网络传输,远端解码显示并回传键鼠操作.

零侵入的含义与价值:

- **严禁在机台端安装任何软件** → 不碰机台控制系统,无兼容性与病毒风险
- **安装过程无需机台关机或重启** → 产线不停机部署
- **故障隔离**:单个 RCM 损坏仅影响对应机台的远程操作,不影响机台正常 Run 货及数据传送

### 4.【概念】Local / Remote 模式与 "近端优先" 原则?

- **Local 模式**:仅本地操作;**Remote 模式**:远端操作或双端操作,本地 Interlock 权限优先
- **近端优先保护**:机台近端有键盘 / 鼠标操作时,自动关闭远端操作通道,远端降级为仅查看模式
- **Interlock 物理按钮**:启用时禁止远程控制;远程用户 View/Control 中被触发时会有明确提示

为什么近端优先:现场的人能看到设备真实物理状态 (运动部件、异味、异响),远程看不到;出事故时现场担责,所以控制权天然归现场.

### 5.【概念】多人同时连一台机台,并发怎么管?

- **连接数管控**:单台设备支持 x 人同时登入 —— 一人主控 ≥30FPS,其余监控 ≥1FPS;连接数达上限弹出提醒
- **并发仲裁**:多人同时请求操作时依据权限级别决定,默认高权限优先
- **Control 权限保护**:不可被强制退出 (除非超时未操作或主动释放);操作权交替需经当前操作者同意,超时未回应视为默认放弃
- **状态可见**:可查看当前 KVM 在线人数及操作等待人数,占用情况对所有人透明

### 6.【概念】为什么远程操作的审计要求比现场操作更严?

现场操作天然有摄像头、门禁、旁人见证;远程操作可以在任何地点任何时间发生,**不做记录就是无痕操作**.

审计三件套:

- **访问日志**:连接的 KVM、时间、IP、账号及异常情况;客户端访问日志记录人员、起止时间、时长
- **操作日志**:远程控制端鼠标 / 键盘操作记录,含事件 ID, Timestamp、分类、描述,至少保存一个月 (周期可配)
- **视频录屏**:画质可配、支持回放,保留 30 自然日 (可配),支持 BigData 分析

配套:审计员独立角色 (操作与审计分离)、日志导出 TXT/CSV/Excel、开放特定账号 SQL 直连查询供稽核.

### 7.【概念】RPA / OCR 在 RCM 里是干什么的?

定位:**EAP 自动化的兜底补充 —— 屏幕就是接口**.

- 老设备无 SECS 接口,EAP 管不到,但人还能看屏操作 → RCM 能到
- **RPA 脚本**:运行自定义脚本实现自动化操作;**OCR 识别**:屏幕文字识别,辅助信息提取与校验
- 风险边界:OCR 有识别率问题,只读场景 (抄表、状态采集) 优先;写操作必须人工确认或限定输入域

**追问**:OCR 识别错一个字符导致误输入怎么办?(关键写操作禁用 RPA、二次确认、输入域白名单.)

### 8.【互锁】本地 / 远程互锁怎么防 "双向操作事故"?举一个危险场景.

危险场景:现场工程师开腔维护,远程工程师不知情按了 Start —— 这不是效率问题,是 **人身安全事故**.

防线三层:

- 近端键鼠活动 → 自动断远端控制通道,远端降级仅查看
- Interlock 物理按钮硬锁,远程侧触发时有明确提示
- Control 权限不可强退,控制权交替必须当前操作者同意

原则一句话:**任何时刻控制权唯一归属,且归属对双端可见**.

### 9.【互锁】Control 权限 "不可强制退出" 会不会被滥用?有人挂着不释放怎么办?

- **自动释放**:远端控制端在设定时间内无操作,自动释放控制通道资源
- **协商交替**:他人请求操作权需当前操作者同意,超时未回应视为默认放弃
- **透明可管**:占用提示 (联机已满 / Control 被占用时系统提示)、在线人数与等待人数可见
- **事后可查**:访问日志记录每人占用起止与时长,时长报表按人员统计,异常占用无处遁形

### 10.【审计】RCM 审计要回答哪几个问题?对应哪些功能?

| 问题     | 对应功能                                                    |
| :------- | :---------------------------------------------------------- |
| 谁       | AD 域账号集成、多级角色 (超管 / 管理员 / 审计员 / 普通用户) |
| 何时     | NTP 时钟同步、日志 Timestamp                                |
| 从哪     | 客户端 IP、访问日志                                         |
| 对哪台   | KVM 与机台绑定关系、KVM NAME 同步                           |
| 做了什么 | 鼠标 / 键盘操作日志 + 视频录屏回放                          |
| 多久     | 起止时间、时长,按机台 / 按人员时长报表                      |

保留期要覆盖争议追溯期:操作日志 ≥1 个月、录屏 30 自然日,均可配 —— 高争议场景建议拉长.

### 11.【审计】Vendor 要求远程进系统诊断设备,这个口子怎么开才安全?

- **临时账号**:单独角色,角色- 机台授权只给目标机台,权限粒度控制到功能级只读或操作
- **全程留痕**:会话录屏 + 操作日志,事后可回放
- **到期回收**:授权设有效期,结束即删号 / 回收权限
- **现场陪同**:远程 Control 期间本地有人值守,Interlock 按钮握在现场手里
- **网络隔离**:走跳板机 / DMZ 接入,不开办公网直连

### 12.【传输】远程操作的体验指标是什么量级?为什么要 "合并远近端鼠标"?

- **延迟**:画面传输 + 操作响应平均 ≤500 ms,最大 ≤1 s;**画质**:1920x1200@60 Hz 及以上真彩色;主控 ≥30FPS
- **双光标问题**:远端鼠标与机台本地光标各画一个会错乱误点 → 自动合并远近端鼠标;绝对鼠标模式 + 手动设置参数对齐精度
- 外设兼容:双 / 单鼠标、触摸板 / 轨迹球 / 电容笔;多国语言键盘与屏幕软键盘;VGA/DVI/HDMI/DP/ 触控屏多种接口

体验指标的意义:**手感不行,工程师宁可跑 FAB,系统就白建了**.

### 13.【监控】智能窗格怎么支撑 "一人盯多机"?

- **布局**:3x3 / 3x4 / 4x4 / 5x5 灵活窗格
- **OSD 信息叠加**:画面直接显示机台名称、实时状态、报警信息、Run 货 Lot 名称 —— 不用点进去就看到关键信息
- **离线诊断**:机台离线显示具体原因 (KVM 连接失败、机台无法访问等),恢复后画面自动恢复无需刷新
- **快速定位**:区域 / 机台组 / ID 树状层级 + 模糊查询直接定位画面;个人收藏夹默认显示
- **一机多主机**:单屏切换或多屏显示的特殊控制面板

### 14.【安全】RCM 接入生产网,网络与物理安全设计要点?

- **边界清晰**:单个 RCM 仅需一个 RJ45 网口和一个 IP,100/1000M 自适应,支持 IPv4/IPv6, Telnet/SSH;防火墙策略好做
- **OT/IT 隔离**:跳板机接入,办公网不直连生产网;NTP 统一时钟保证审计时间戳可信
- **物理安全**:独立供电不得从机台端取电;AC 220 V 国标 5 孔插座禁转接头,压降至 100 V 不影响运行;防脱落紧固设计、信号线带磁环滤波;环境 55°C 正常运行
- **故障隔离**:单个 RCM 损坏只丢远程能力,不影响 Run 货与数据传送

### 15.【前道】前道哪些场景最适合 RCM?

- **Alarm 远程处置**:光刻 / 蚀刻等设备大量 alarm 只需看屏确认、清消或软复机,不必进 FAB
- **装机调试期 Vendor 远程支持**:缩短新机台 Rollout 周期
- **PM 后复机确认**:远程看自检画面与参数,现场只做硬件操作
- 边界要划清:**涉及开腔、传片等物理操作必须现场**,RCM 只替代 "看屏 + 软操作"

### 16.【后道】后道用 RCM 和前道有什么不同?

- 后道洁净等级低、进出场成本小 → RCM 的价值更多在 **跨厂区集中专家**(一个 Bond 专家支持多个厂)
- 设备数量多、品种杂 (DB/WB/Test/Printer),一人管多机 → 智能窗格同屏监控价值更大
- 换型频繁 → 换型后首件确认可以 "工艺远程看参数画面 + 现场确认硬件" 双签
- 老测试机多无 SECS → **RPA/OCR 远程自动化空间更大**

### 17.【2-12 寸】老设备没有任何远程能力,改造路径怎么分层?

| 设备类型              | 改造方案                                                  | 远程能力        |
| :-------------------- | :-------------------------------------------------------- | :-------------- |
| 有屏有键鼠 (PC-Based) | KVM over IP 硬件接入,零侵入                               | View + Control  |
| 无屏无网 (按键面板)   | 组态方式接入操作按钮 + 摄像头看指示灯 / 表头              | 只读 + 人工兜底 |
| 纯串口设备            | 与 EAP 的 MOXA 串口转网共用思路,状态归 EAP,人工操作归 RCM | 监控为主        |

分层原则:**先"看得见"(监控),再"摸得着"(控制)**;高风险老设备只给 View,不给 Control.

### 18.【2-12 寸】一机多主机、多屏幕的老机台怎么接入?

- **多主机面板**:一机多主机场景提供单屏切换或多屏显示
- 多台 KVM 绑定同一机台建模,联机时直接抓取 KVM 上定义的名称显示,分割画面子窗格同步 KVM NAME
- **远端双开 View+Control 分离**:一屏监控一屏操作,互不干扰
- 无屏幕主机:组态方式接入其操作按钮,纳入同一机台视图

### 19.【中试线】研发与量产混线,RCM 权限怎么分层?

- **角色-机台授权矩阵**:操作员 (本区量产机 View/Control)、工程师 (跨区 View + 责任区 Control)、Vendor(临时单机授权)
- **实验区放宽权限但不放宽审计**:研发设备 Control 放开,录屏与操作日志照常 —— 灵活归灵活,留痕不能少
- 权限粒度到功能级只读 / 操作,菜单 / 按钮级界面配置
- AD 域集成自动同步账号,人员转岗权限跟着走;个人收藏夹不受群组限制,保效率

### 20.【中试线】2/4/6/8/12 寸新旧机台并存,RCM 部署怎么排优先级?

- **排序维度**:alarm 频次高的、离办公区远的、Vendor 支持需求大的、夜班无人值守的区域优先
- 第一批:有屏 PC-Based 机台 KVM 接入,覆盖约八成场景
- 第二批:无屏老设备组态接入 + 摄像头
- **动态加载**:后台新增机台 / KVM 或开放权限后,前端无需重启实时加载 —— 天然适合分批滚动部署
- 每批走 Pilot:个别设备先验证互锁与延迟,不影响未参与部分

### 21.【中试线】中试线人多手杂 (实习生 / 外包 / 新工程师),怎么防远程误操作?

- **最小权限**:新账号默认只读,Control 单独申请审批
- **分级管控**:关键机台只给 View;高风险时段 (Run 货中) 可禁用 Control
- **留痕即威慑**:一切远程操作有录屏与操作日志,出问题能回放定责 —— 大家知道 "做了就跑不掉",手就稳了
- 协同降噪:同一机台用户可用即时传讯沟通,避免多人各自盲目操作

### 22.【场景】工程师深夜远程误改了机台参数,怎么处置与追溯?

处置:

1. **先保生产**:确认机台与在跑 Lot 状态,评估是否 Hold;按 RMS/EC 基线恢复正确参数
2. **追溯**:操作日志定位账号 / 时间戳 / IP → 录屏回放还原操作序列 (NTP 保证时间戳可信)
3. **圈范围**:访问日志与时长报表核查该会话还碰过什么

整改:复核该账号是否该有 Control 权限、高危参数修改是否加二次确认、夜间权限是否单独收紧.

### 23.【场景】远程会话断连,但机台正在跑关键 Lot,怎么办?

- **首先不慌**:故障隔离设计 —— RCM 断连不影响机台正常 Run 货及数据传送,设备按 Recipe 继续跑
- **断点续传**:断电 / 断网恢复后 <1 分钟自动恢复工作,参数无需重设
- 处置流程:看离线诊断显示的具体原因 (KVM 连接失败 / 机台无法访问)→ 通知现场代为关注该 Lot → 恢复后结合 EAP/FDC 数据确认跑批无异常
- 设计哲学:**RCM 是"眼睛和手",不是"命脉"** —— 它挂了,生产照跑.

### 24.【场景】质量事故复盘,现场说 "是远程改的参数",远程工程师说 "我没动",怎么还原?

- **三线对照**:NTP 统一时钟下,访问日志 (谁何时连哪台 KVM)+ 操作日志 (键鼠序列)+ 录屏回放相互印证
- 本地操作怎么查:RCM 只录远程,但 **近端优先机制会留下"远端被降级为仅查看"的事件**,可佐证当时控制权在本地;再结合机台自身 log 与门禁记录闭环
- 注意保留期:录屏 30 自然日、操作日志 ≥1 个月 (均可配),争议高发机台建议拉长
- 输出:日志导出 TXT/CSV/Excel 作为复盘证据

**追问**:如果录屏刚好过了保留期呢?(日志与录屏保留期按风险分级配置,关键机台加长;争议未结案的会话主动归档.)

### 25.【场景】夜间无人值守,AMS 推送某机台 alarm,值班工程师远程处置的标准流程?

1. 接告警 → RCM 登入 (收藏夹 / 模糊查询快速定位画面)
2. **先 View 评估**:OSD 看实时状态与报警信息,判断是远程可处理 (确认 / 清消 / 软复机) 还是必须现场 (硬件、安全相关)
3. 远程处理:取 Control(确认无他人占用)→ 操作 → 确认恢复 → 同步 MES/ 班组长
4. 必须现场:电话摇人,期间保持远程监控
5. 全程自动留痕 (录屏 + 操作日志),次日班后会复盘

原则:**先判断"能不能远程处理",再动手** —— 远程处置不了的不硬来.

### 26.【软技能】现场工程师抵触 RCM:"你们远程乱动我的机台,出事算谁的?" 怎么推进?

- 先理解:设备责任在现场,抵触是合理的,不能用 "技术先进" 压人
- **用机制回应而不是用嘴**:Interlock 按钮在现场手里、近端优先、远程操作全录屏可定责 —— 责任边界反而比以前更清晰
- 试点建立信任:先只开 View,再开 Control;先个别机台 Pilot
- 数据说话:统计远程处置 alarm 数量、节省的进 FAB 时长,让现场看到收益

### 27.【软技能】RCM 工程师最重要的三个能力?

**安全意识(远程 = 高风险,互锁 / 权限 / 审计是生命线,一次双向操作事故可能出人命)、体验工程能力(延迟 / 画质 / 鼠标对齐这些"手感"细节决定系统有没有人愿意用)、分层落地能力(2-12 寸新旧并存,知道哪类设备给 View、哪类给 Control,先卡控后自动化)**.

## RCM Function List

### 1. 用户与权限管理

#### 1.1 账号与角色体系

支持多层级用户管理及灵活的权限配置, 确保系统访问安全可控.

- **用户全生命周期管理**: 支持用户的导入、新增、修改、删除及个性化设置保存至 DB, 实现多终端配置漫游.
- **多级角色管理**: 支持超级管理员、管理员、审计员、普通用户等多层角色架构;支持角色的增删改查及菜单 / 按钮级界面配置.
- **精细化权限控制**: 提供角色权限配置界面, 权限粒度可控制到功能级别的只读或操作.
- **AD域集成**: 支持对接 AD 域账密, 自动同步更新 RCM 系统账号信息.

#### 1.2 本地与远程互锁机制

支持 Local/Remote 模式切换及近端优先原则, 保障机台现场操作安全.

- **模式切换**: 支持 Local 模式 (仅本地操作) 与 Remote 模式 (远端操作或双端操作) 切换, 本地 Interlock 权限优先.
- **近端优先保护**: 当机台近端有键盘 / 鼠标操作时, 自动关闭远端操作通道, 远端降级为仅查看模式.
- **Interlock物理按钮**: 支持近端 Interlock 按钮, 启用时禁止远程控制;远程用户 View/Control 时被触发 Interlock 会有明确提示.
- **Control权限保护**: 远程 Control 权限不可被强制退出 (除非超时未操作或主动释放);操作权交替需经当前操作者同意, 超时未回应视为默认放弃.

### 2. 设备与区域管理

#### 2.1 区域与机台建模

支持树状层级化管理及灵活的机台绑定.

- **多级区域管理**: 支持区域的增删改查及多级树状图显示维护.
- **机台信息管理**: 支持机台编码、名称、所属区域、机型、负责人 /Group 等信息的增删改查.
- **KVM硬件配置**: 支持配置 RCM 硬件 KVM 的 IP、端口、网关、子网掩码及对应的机台绑定关系.
- **KVM名称同步**: 联机时直接抓取 KVM 上定义的名称显示, 分割画面子窗格同步显示对应 KVM NAME.

#### 2.2 机台权限与并发控制

支持基于角色的机台访问控制及多用户协同策略.

- **角色-机台授权**: 提供赋予角色- 机台权限的配置界面.
- **并发操作仲裁**: 多用户同时远程操作同一机台时, 依据权限级别决定操作人员 (默认高权限优先).
- **连接数管控**: 单台设备支持 x 人同时登入 (一人主控≥30FPS, 其余监控≥1FPS);连接数达上限时弹出提醒窗口.
- **个人收藏夹**: 支持用户添加常用机台至收藏夹, UI 登入后默认显示且不受群组限制.
- **动态加载**: 后台新增机台 /KVM 或开放权限后, 前端无需重启即可实时加载.

### 3. 远程监控与操作体验

#### 3.1 高清低延视听传输

支持高分辨率、低延迟及多种外设适配, 还原现场操作体验.

- **性能指标**: 画面传输和操作响应平均时间≤500 ms, 最大≤1s;支持 1920x1200@60 Hz 及以上真彩色显示.
- **自适应显示**: 设备自适应机台屏幕分辨率, 支持自定义分辨率设置;支持全屏 / 非全屏及缩放 / 自适应 / 填充 / 原始比例等多种显示模式.
- **鼠标精准控制**: 支持绝对鼠标、双 / 单鼠标模式、触摸板 / 轨迹球 / 电容笔等样式;支持手动设置参数对齐精度;自动合并远近端鼠标避免双光标困扰.
- **多屏与特殊显示**: 支持远端双开 (View+Control 分离);支持 VGA/DVI/HDMI/DP/ 触控屏等多种接口;支持组态方式接入无屏幕机台的操作按钮.
- **多国语言支持**: 支持多国语言键盘及屏幕软键盘.

#### 3.2 智能窗格与状态展示

支持灵活的布局配置及实时的设备状态反馈.

- **自定义布局**: 支持 3x3, 3x4, 4x4, 5x5 等灵活窗格数量设置.
- **OSD信息叠加**: 画面显示机台名称、实时状态、报警信息、Run 货 Lot 名称等.
- **离线状态诊断**: 机台离线时显示具体原因 (KVM 连接失败、机台无法访问等);恢复后画面自动恢复无需刷新.
- **在线状态监控**: 支持查看当前 KVM 同时在线人数及操作等待人数.
- **多主机面板**: 针对一机多主机场景, 提供单屏切换或多屏显示的特殊控制面板设计.
- **快速检索定位**: 支持按区域 / 机台组 /ID 树状层级显示, 支持模糊查询机台 ID 并直接定位画面.

#### 3.3 协同作业与通讯

支持多用户协作交流及资源有序释放.

- **即时传讯**: 为登入同一远程机台的用户提供信息交流平台.
- **资源自动释放**: 远端控制端在设定时间内无操作, 自动释放控制通道资源.
- **占用提示**: 点击窗格时若联机已满或被 Control 权限占用, 系统提示相应讯息.

### 4. 日志审计与报表

#### 4.1 全链路操作审计

支持完整的操作记录、视频录制及数据分析.

- **访问日志**: 记录用户连接的 KVM、时间、IP、账号及异常情况;保留客户端访问日志 (人员、起止时间、时长).
- **操作日志**: 保留远程控制端的鼠标 / 键盘操作记录;日志包含事件 ID, Timestamp、分类、描述, 至少保存一个月 (周期可配).
- **视频录屏**: 支持 RCM 操作界面视频录制、画质配置及回放;截屏录像及录屏保留 30 自然日 (可配), 支持 BigData 分析.
- **日志导出**: 支持导出为 TXT, CSV, Excel 等易读格式.

#### 4.2 统计报表与查询

支持多维度的使用时长统计及数据库直连查询.

- **时长报表**: 支持按机台、按人员查看访问时长, 查看 KVM 历史在线时长报表.
- **SQL直连查询**: 使用记录存入数据库, 开放特定账号通过 SQL 快速获取信息.
- **前端可视化**: 支持在前端直接查看访问日志及统计信息.

### 5. 智能化扩展功能

#### 5.1 RPA 与 OCR 能力

支持自动化脚本执行及图像识别, 提升运维效率.

- **RPA脚本**: 支持运行自定义脚本, 实现自动化操作.
- **OCR识别**: 支持文字图像识别, 辅助信息提取与校验.

#### 5.2 系统集成接口

支持标准化 API 开发, 便于第三方系统整合.

- **开发接口**: 提供 RCM 应用程序开发接口 (.dll 文件等), 利于软件应用整合.
- **协议支持**: 硬件支持 HTML, Microsoft .NET 等主流协议, 降低未来技术升级成本.

### 6. 硬件规格与部署要求

#### 6.1 电气与物理安全

支持工业级电气标准及防脱落设计, 确保厂务环境适应性.

- **电源规范**: 用电需求 AC 220 V(国标), 匹配厂务 5 孔插座 (禁转接头);支持电压压降至 100 V 不影响运行.
- **防脱落设计**: 电源适配器输入接头及所有转接接口均需防脱落紧固设计;DC 延长线按需定制且保证电气参数正常.
- **线材安全**: 信号采集线材必须带磁环滤波;所有接口线材不可线芯外露, 转角处予以保护.
- **独立供电**: RCM 设备及附属部件不得从机台端取电.
- **散热性能**: 环境温度最高 55°C 时设备正常运行, 无卡顿或热宕机.

#### 6.2 网络与兼容性

支持标准网络协议及零侵入式安装, 保障生产环境稳定.

- **网络接口**: 100/1000M 自适应网口, 支持 IPv6/IPv4, Telnet, SSH;单个 RCM 仅需一个 RJ45 网口和一个 IP.
- **时钟同步**: 支持 NTP 时钟同步.
- **零侵入安装**: 采用硬件连线获取屏幕 / 键鼠信号, 严禁在机台端安装任何软件;安装过程无需机台关机或重启 (特殊机型除外).
- **故障隔离**: 单个 RCM 损坏仅影响对应机台的远程操作, 不影响机台正常 Run 货及数据传送.
- **断点续传**: 断电 / 断网恢复后<1 分钟自动恢复工作, 参数无需重设.
- **跨平台客户端**: 支持 Windows, Linux, Sun 等多平台客户端;推荐使用实体机, 也支持虚拟桌面.
- **设备信息获取**: 支持 Host 端获取设备型号、FW 版本、IP、序列号 /MAC 地址等信息.
- **调试便捷性**: 支持直接连接笔记本或移动设备进行参数设置与调教.

# APC

## APC interview

### 1.【概念】APC 在 CIM 中的位置?与 EAP, FDC, SPC, MES 的分工?

- **APC**:工艺的 "自动驾驶" —— R2R(Run to Run) 闭环调参,根据量测结果在正常漂移范围内主动补偿,调整机台可下货参数 (如 Litho Dose/Focus, Etch Time, CMP 研磨时间)
- **EAP**:APC 的 "手" —— APC 算出的推荐下货值经 EAP 写入机台;量测与过程数据也经 EAP 采集
- **FDC**:看设备传感器异常,负责 **拦截**;**SPC**:看量测结果统计趋势,负责 **监控**;**APC**:负责 **调控**
- **MES**:提供 Run 货上下文 (Lot/Product/Flow/Step),APC 按 Context 计算,Pilot 结果回馈 MES
- **RMS**:管基线 Recipe;APC 管动态偏移,两者都留痕

数据流:前站量测 → APC 按控制绪计算 offset → 下货前给 EAP/ 机台推荐值 → 跑货 → 后量测回来 → 更新模型.

### 2.【概念】R2R 控制的基本原理?Feedback 与 Feedforward 的区别与配合?

R2R(Run to Run):利用 **已跑批次的量测结果** 调整 **下一批次** 的下货参数 —— 同一设备同一产品的漂移是缓变的,批与批之间可预测.

- **Feedback(反馈)**:用本站输出偏差修正本站下一批,如 Etch 后 CD 偏了 +2nm → 调下批 Etch Time.EWMA 是经典算法
- **Feedforward(前馈)**:用 **上一站** 量测补偿 **下一站**,如按 Litho 后 CD 前馈调 Etch;CMP 按前量厚度定研磨时间;WET 按前量厚度选 Recipe 或更新 ETCH_TIME
- 配合:前馈消除 "已知的来料差异",反馈消除 "设备自身的漂移",FFFB 组合是主流;支持 lot-level / batch-level / wafer-level 不同粒度

### 3.【概念】EWMA 的原理?权重 λ 怎么取?

EWMA(指数加权移动平均):对历史偏差加权平均,越新的数据权重越大:

**a*t = λ·e_t + (1−λ)·a*{t−1}**,下货补偿 = 模型增益 × a_t

- **λ 大(如 0.7)**:响应快,能跟踪真实突变,但容易把量测噪声当信号 → 过调震荡
- **λ 小(如 0.2)**:平滑稳健,但对真实漂移跟踪慢 → 补偿滞后
- 中试线经验:批次少、噪声大,λ **宁小勿大**,配合 **变化量上下限 + 最小调整阈值** 防抖
- 除 EWMA 外还支持 LSSM, MPC 控制模型,SISO/MIMO 可切换,可客制 WMA 等算法

### 4.【概念】FDC 拦截、SPC 监控、APC 补偿 —— 三者边界怎么划?(必考)

| 系统 | 看什么                | 动作                            | 时间尺度        |
| :--- | :-------------------- | :------------------------------ | :-------------- |
| FDC  | 设备传感器 / 过程参数 | 异常 **拦截**(Hold/Alarm)       | Run 中实时      |
| SPC  | 量测结果              | 统计趋势 **监控**(OOS/OOC 报警) | Run 后          |
| APC  | 量测偏差 (正常漂移内) | 主动 **补偿** 调下货参数        | Run 与 Run 之间 |

边界:**漂移在统计受控范围内 → APC 补;超限或异常 → SPC/FDC 报警停线,不是靠 APC 硬拉**.APC 自己也设上下限管控与 OOS 自定义处理流程,补到限还拉不回来就升级报警,不无限补.

### 5.【概念】RMS 管 Recipe, APC 也改参数,边界在哪?

- **RMS 管基线**:Recipe 本体的版本、签核、下发校验,变更走签核流
- **APC 管动态偏移**:基线之上的受控前馈 / 反馈值 (如 Litho Dose/Focus 补偿、Sub Recipe 里的 BMMO OVL/Focus 类参数),不算 Recipe 变更,不走 RMS 签核,但 **全程留痕**(控制绪 run 货历史可查)
- 边界判据:工艺意图的长期变更 → 改 RMS 基线;批与批之间的漂移补偿 → APC
- 联动:APC 补偿长期顶在边界,说明基线该更新了,应触发 RMS 变更而不是继续硬补

**追问**:APC 长期顶着上限补说明什么?(基线 Recipe 过期或设备状态突变,该走 RMS 变更或查 FDC)

### 6.【概念】控制绪 (Thread/Context) 是什么?为什么要分群?

控制绪 = R2R 模型的 **最小独立控制单元**,通常按 **Product group + Flow + Step + Tool/Chamber(或 PPID)** 划分,同一绪内的批次共享一个模型状态 (EWMA 的 a_t).

- 不分群:不同产品 / 机台的偏差互相污染,模型什么都学不到
- 分太细:每个绪样本太少 (中试线痛点),模型频繁初始化
- 折中手段:**反馈群组控制**(按产品与配方作为群组)、**Context relaxation**、**New control thread initialization**、不同 recipe 间 **主/从控制绪关联**(小量产品挂到主力产品的绪上)

### 7.【概念】VM(Virtual Metrology) 是什么?中试线为什么价值大?

VM 虚拟量测:没有实时量测数据时,用 **过程数据(FDC 传感器/机台参数)预测量测结果**,预测值替代实测值参与 R2R 反馈.

- 中试线痛点:量测覆盖率低 (不可能每片每站都量)、量测机台排队久 → 没有 VM 时很多批 "无数据可反馈",控制绪长期不更新
- 价值:提高反馈覆盖率、缩短反馈延迟
- 风险:VM 是模型预测,**GOF 低时不能信** —— 支持滤除低 GOF 量测资料不参与 R2R 反馈计算;实测回来后必须用实测值修正模型
- 同类思路:CMP 前量丢失时 EWMA 补值预测、手工前量补录、反馈有效期超时自动切 pilot/hold

### 8.【控制】R2R 模式与 Control Flag 有哪些?什么时候用?

- **反馈开启(ON)**:正常闭环
- **固定基线 / FIX(固定值模式)**:不更新模型,按固定值下货 —— 模型不可信但又不能让 APC 乱动的过渡期
- **禁止(OFF)**:完全不干预,回到 RMS 基线 —— 控制器异常时的保底

切换原则:先 FIX 观察再决定 ON/OFF;量测链路断了先切 FIX,别直接 OFF 让漂移裸奔.有效期联动:反馈超时未更新,CMP 自动切 pilot 状态、WET 自动 hold.

### 9.【控制】控制器输出怎么防止 "乱补"?

多层防护:

1. **绝对上下限**:tuning 参数不许超出工艺窗口
2. **变化量上下限**:单批调整幅度限制,防一步跨太大
3. **最小调整阈值**:补偿量小于阈值不动,防抖
4. **调整参数值截取**:超限按上下限截取;**连续达到上下限次数控制** —— 连续顶限要报警,说明模型或设备有问题
5. **MTT 等管控方式 + OOS 自定义处理流程**:OOS 后 Hold/ 通知 / 切模式可客制
6. **下货参数值与实际下货值差异检查**(CMP):算出来的和真正写进机台的要一致

原则:**APC 是微调系统,不是纠错系统** —— 输出管控的意义就是把它限制在 "微调" 角色里.

### 10.【控制】量测数据进入反馈前要过哪些关?

数据质量决定模型质量,过滤链:

- **量测有效性**:site 有效性检查、量测 site 数是否足够、Wafer/Lot 级有效性验证
- **GOF 过滤**:低 GOF(拟合差) 的量测滤除,不参与 R2R 反馈计算
- **异常检查**:量测异常数据不参与反馈及计算,走客制 OOS 处理流程
- **离群批次清单 + special lot 过滤**:实验批、工程批默认不进反馈
- **Lot type 过滤**:按产品配置特定 lottype 不参与反馈;返工批 **有条件** 参与
- **反馈有效期控制**:太旧的数据不算数,超时切 pilot/hold
- 辅助信息 (如 wafer residual) 仅用于反馈滤除,不参与计算

### 11.【建模】EWMA, LSSM, MPC,SISO / MSISO / MIMO 怎么选?

| 模型            | 适用场景                       | 实例                                                                           |
| :-------------- | :----------------------------- | :----------------------------------------------------------------------------- |
| SISO EWMA       | 单输入单输出、缓变漂移、样本少 | Litho CD(Dose→CD)、WET(ETCH_TIME→THK)                                          |
| MSISO EWMA      | 多输入单输出                   | Litho OVL(多个对位参数→OVL)、TRIM by THK                                       |
| MIMO MPC / LSSM | 多参数耦合、有约束             | CMP(时间+ 区间压力→zonal THK)、Etch, Diffusion(5-10 区温度→各区厚度)、ThinFilm |

- 样本少、参数耦合弱 → EWMA 就够,**模型越简单越稳**
- 参数强耦合 (炉管各 Zone 互相影响)、有线性约束 (Etch Input 间线性关系)→ MPC/LSSM
- 中试线倾向:先 EWMA 跑起来,数据积累够了再升级 MIMO

### 12.【控制】pilot / rework / runcard / special lot 为什么要走不同控制流程?

不同情境的 Lot 对模型的意义不同,一视同仁会污染模型:

- **pilot lot**:探路批,量测必全,结果决定是否放行后续;控制器内置 pilot 场景,PM 后 / 新产品可自动触发 piLot
- **rework lot**:按 **最近 run 货值计算返工下货值**,且 **有条件参与反馈** —— 返工片厚度 / 形貌已变,直接反馈会带偏模型
- **runcard lot**:工程实验批,默认走 Special APC flow,不进量产绪
- **special lot**:UI 可设定特定 LOT 或 Product 只跑对应的 Special APC flow
- 实现:针对不同控制情境开发不同流程,子流程嵌套重用;离群批次清单 + special lot 过滤兜底

### 13.【前道】Litho CD 控制器怎么工作?

- 模型:**SISO EWMA + Lot-level feedback**;Process 机型 ASML/CANON/NIKON,量测来自 CD-SEM/OCD
- 调控项:**Dose**(主),Focus 用户配置可选;输出 CD
- 关键机制:
    - **Dose Vs CD slope 根据历史数据自动更新** —— 光阻批次/机况变了斜率会变,固定斜率会补错方向
    - **光阻原料时效性 Feed Forward、Lens heating Feed Forward**(配置开启)
    - Target/Dose sensitivity 变动侦测;分光罩反馈;Single Reticle Double Exposure
    - 与 Litho inside 集成,支持 CPE/DOMA/Files/BMMO OVL/BMMO Focus/LIS 等 Sub Recipe 类型
- 三档 R2R 模式:反馈开启 / 固定基线 / 禁止;Control Flag ON/FIX/OFF;返工批有条件参与反馈

### 14.【前道】Litho OVL 控制器要点?

- 模型:**MSISO EWMA**,Lot-level **前馈 + 反馈**;量测来自 KT/YS
- 控制参数:机台 OVL **线性/高阶/iHOPC** 参数,按机型适配 (ASML Linear/HOPC/iHOPC, CANON/NIKON Linear 8P/10P)
- 要点:
    - OVL 是典型**多参数耦合**(平移/旋转/放大/畸变),所以必须 MSISO 而非单参数
    - **Chuck dedication、User offset FF**;分光罩反馈或双光罩 offset 模式
    - wafer residual 等后量信息仅用于反馈滤除,不参与计算
    - **New control thread initialization + Context relaxation** —— 换产品/换层时绪初始化更平滑
    - LIS、5DA 数据整合及 FF/FB 反馈方式

### 15.【前道】CMP 控制器要点?

- 模型:**MPC 多输入多输出**;输入研磨时间 (+ 区间压力),输出研磨后厚度 (by zonal)/ 研磨量;机型 EBARA, AMAT Reflexion LK/LKP, HHQK
- 层级:Lot 级 FF/FB + **Wafer 级前馈** + **Chamber/Header/Platen 级 FF/FB** —— 耗材 (Pad/Head) 与腔体差异是 CMP 主要漂移源
- 特色机制:
    - **前量丢失时 EWMA 补值预测**、多道前量组合、手工前量补录 —— 量测覆盖率低也能跑
    - **Measurement disorder handling**(process 与 measurement 顺序不一致)
    - 维修后预设参数值 + 按 Pad/Head 使用时间调整下货;**自动侦测维修事件、Reset time tracking**
    - 后量连续不合格或反馈超时 → 自动切回 **pilot 状态**,不硬补
    - 下货参数值与实际下货值差异检查

### 16.【前道】Etch 控制器要点?

- 模型:MIMO;输入 Etch Time/Trim Time/ESC Chuck Temperature/Gas Flows;输出最多 2 个 (CDSEM/OCD + Thickness 或 Trench depth);机型 AMAT/LAM/TEL
- 层级:Chamber-level FF/FB,或 Wafer-level FF + Chamber-level FB
- 特色机制:
    - **first wafer 效应处理**(腔体静置后第一片状态不同)
    - **by RF lifetime 预补偿**(RF 老化是有规律的漂移,直接前馈)
    - 按上游来源结构化前馈:DF zone、CVD Chamber、Scanner Type(KrF/ArF/iLine/DUV)、Litho as Pre-process
    - Input 间线性约束、主/从 tuning 参数、多 zone 计算、Hydra uniformity(raw metro data + X/Y 坐标)
    - wafer level 前馈缺量测数据时自动补偿计算

### 17.【前道】Diffusion / ThinFilm 控制器要点?

**Diffusion(炉管)**:

- MIMO MPC **线性状态空间模型(LSSM)**,**Batch 级反馈**;输入各区温度 (5-10 区)+ Dep 时间 /ALD Loop,输出各区厚度;机型 NAURA/TEL/KE furnace
- Control Type:**Monitor / Product / Hybrid** —— 炉管跑货贵,常用 monitor 片反馈或混合;**Monitor Bias Control** 单独 Tune Monitor Target 偏移量
- Zone 反馈资料识别与缺省处理、Boat zone 定义、不同 recipe 间主 / 从控制绪关联、Loading Size 分群、Pre-mature FB, Thickness Vs Zone 温度系数自动更新、APCVD 按常压变动预补偿 Diffusion Time

**ThinFilm**:MIMO MPC LSSM,Lot/Chamber/**Chuck** 级反馈;输入 Deposition Time/Chuck RF/Heater;Parallel/Serial 两种跑货模式;控制绪单向 / 双向联动 (Linear/Quadratic/Cubic)、Slave Parameter 控制.

### 18.【前道】WET 与 TRIM 控制器各有什么特点?

**WET**:SISO EWMA,Batch/Lot 级前馈 + Batch 级反馈;两种模式 —— **按前量厚度选 Recipe**(几档固定时间) 或 **更新 ETCH_TIME**(连续调);反馈有效期超时未更新 **自动 hold**(湿法槽液状态变化快,不敢用旧模型).

**TRIM**:

- **by THK**:MSISO,去除量→thickness;Lot/Wafer/**Point level** FF/FB(可指定去除坐标);新产品或条件过期自动 piLot,**piLot 量测结果上传前相同条件其他 Lot 禁止进站**;工程师 UI 手动 Offset + 数据模拟计算
- **by WAT**:用 **WAT 电性结果** 做 Wafer Level 前馈 (电性比几何量测更贴近器件目标),不同 device 引用不同系数、Tool Dedication;最小有效点数 / 最大 OOS 点数卡关、CupLifetime 卡关、OOS Hold Lot

共同点:量测 / 生产数据 Excel 导入导出、手工前量补录、工程师操作 Log 追溯 —— 中试线手工数据多,这些不是点缀是刚需.

### 19.【全产品】后道封装和化合物半导体适合上 R2R 吗?

- **后道**:传统封装 (WB/DB/Molding) 漂移慢、换型频繁、单批样本少,R2R 价值低,一般不上;但 **CP/FT 后的补偿类工艺**(如 TRIM by WAT 用电性结果前馈修调) 本身就是后道逻辑,是例外
- **化合物半导体(SiC/GaN)**:外延 / 高温工艺漂移明显且成本高,值得做;难点是量测稀缺 (很多参数不能无损量)→ 更依赖 VM/ 前馈;设备非标多,接入层靠 EAP 的文件 /PLC 通道把量测数据喂给 APC
- 判断标准一句话:**有可调的工艺旋钮 + 有(或能预测)量测 + 漂移成本 > 建设成本**,三者齐备才上

### 20.【2-12 寸】老旧机台 / 老量测设备怎么接入 APC?

分层务实方案:

1. **先卡控后自动化**:老机台改不了参数自动下货,就先做 "推荐值推送 UI/报表,操作员手动输入",跑通闭环再谈自动
2. **数据接入**:量测数据自动收集支持开发扩充;无接口的老量测机走文件 /Excel 导入导出 (TRIM 已内建)、手工前量补录兜底;机台侧 RS232 走 MOXA 转网、无 SECS 走 PLC/ 文件
3. **控制层级降级**:没有 wafer 级数据就做 Lot/Batch 级;没有前馈就先纯反馈
4. **优先级**:2/4/6 寸老线量测覆盖率低,先上 "固定基线 + 反馈有效期卡控 + SPC 监控" 的半自动模式,数据积累后再开闭环

### 21.【中试线】批次少、Thread 稀疏,R2R 怎么跑得动?

中试线核心矛盾:绪分细了没样本,分粗了互相污染.对策:

- **合并 Context**:反馈群组控制 (按产品+ 配方群组)、Context relaxation,小量产品通过 **主/从控制绪关联** 挂到主力产品绪上
- **放宽反馈源**:允许 monitor 片反馈 (Diffusion Hybrid)、前 / 后值量测来自多个站点 (Etch)、手工前量补录
- **模型降级**:MIMO 换 SISO EWMA,λ 调小,配合变化量上下限防抖
- **有效期管理**:绪太久没更新自动切 pilot/ 固定基线,不用陈旧模型硬补
- **接受半自动**:稀疏绪用 "推荐值 + 工程师确认"(跑 n 批货后人工干预判断 R2R reply),数据够了再全自动

### 22.【中试线】实验批数据会不会污染量产模型?怎么隔离?

会,这是中试线 APC 第一大坑.隔离手段:

- **流程隔离**:runcard/special lot 走 Special APC flow(UI 可指定特定 LOT/Product 只跑对应流程),不进量产绪
- **数据隔离**:special lot 过滤、离群批次清单、按产品配置特定 lottype 不参与反馈
- **返工批有条件参与反馈**,条件不满足就只取不馈
- **实验批想用模型**:可以 "只取不馈" —— 用量产绪算下货值保证实验片质量,但实验结果不回写模型
- 留痕:所有修正数据导入、special Lot 中途 overwrite 反馈值都走独立 UI 并记录操作 Log,可追溯谁动了模型

### 23.【中试线】新产品 / 新机台没有历史数据,控制器怎么冷启动?

- **借模型**:同族产品 / 同型机台的绪做 **New control thread initialization**,用主 / 从关联或系数折算起步,不从零开始
- **借参数**:slope/ 系数用历史同类产品初值 (Dose Vs CD slope, Thickness Vs Zone 温度系数都能后续按历史自动更新收敛)
- **先 pilot**:新产品自动触发 piLot(TRIM 已内建),piLot 量测上传前同条件其他 Lot 禁止进站
- **先 FIX 后 ON**:冷启动期固定基线 + 放宽变化量跑几批,确认模型收敛再开反馈
- **模拟先行**:Controller 上线前支持 **模拟 Output**,用历史数据回放验证 model 正确性再上真批

### 24.【中试线】新控制器 / 新模型上线的验证流程?

五步走,全程不影响在产:

1. **离线模拟**:历史 run 货数据回放,模拟 Output 验证模型有效性与稳定性
2. **Monitor 模式上线**:控制器只算不动 (推荐值记录不实施),对比 "如果补了会怎样"
3. **Pilot 验证**:个别机台 / 产品 Send Ahead,设定 Pilot Triggering Conditions(Wafer count/ 时间 /recipe idle),Pilot 结果回馈 MES,通过才放行
4. **灰度**:按机台逐步推广,独立 UI 按 Wafer/Lot/ 站点设 test 条件,test pass 自动判定继续 R2R
5. **全量 + 观察期**:跑 n 批人工干预判断 R2R reply 结果,稳定后转全自动;Strategy/Parameter Table 有 Owner/OwnerGroup 与修改历史记录,可回退

### 25.【场景】补偿震荡 / 过调,工艺反馈 "越补越偏",怎么排查与处置?

排查 (按概率排序):

1. **增益/λ 太大**:把噪声当信号 → 看控制绪 run 货历史的补偿曲线是否围绕目标振荡
2. **量测问题**:量测机台自身漂移 /GR&R 差,反馈的是假信号 → 查量测 correlation, site 有效性过滤是否太松
3. **模型过期**:slope 变了 (Dose Vs CD slope 是否开了自动更新)、PM 后没 reset
4. **绪污染**:实验批 / 返工批混进了反馈
5. **延迟反馈**:量测滞后,补的是两批前的状态

处置:**先保生产** —— 控制器切 FIX(固定基线) 止血,不是直接 OFF;再逐项排查;恢复时调小 λ/ 增益、收紧变化量上下限,观察几批再全开.一切参数修改留痕 (Owner/ 修改历史),可回退.

### 26.【场景】量测延迟或乱序到达 (Measurement disorder),反馈会算错吗?怎么处理?

会 —— R2R 假设反馈按跑货顺序到达,乱序会把 "旧状态" 当 "新状态" 更新.

- 系统机制:CMP 支持 **Measurement disorder handling**;可按 **Wafer process run** 而非 Lot process run 反馈;支持 **最新量测反馈控制**(只用最新有效量测)
- 工程处置:
    - 开**反馈有效期控制**:迟到的数据宁可不用
    - 乱序到达按 process 时间戳重排再计算,或丢弃过期值
    - 长期乱序是流程问题(量测排队太久)→ 推 RTD 量测派工优先级或加量测产能,不是 APC 能根治的
- 兜底:乱序期间切固定基线,恢复顺序后再开反馈

### 27.【场景】设备 PM / 维修后,控制器状态怎么管?

PM 后设备状态跳变,旧模型可能完全不适用:

- **Reset**:重置控制器 (设备 PM 后手动重置或外部事件驱动);CMP 支持 **自动侦测维修事件 + Reset time tracking**
- **维修后预设值**:CMP 维修后预设参数值配置,并配合 Pad/Head 使用时间调整下货参数
- **自动 pilot**:PM 后触发 **PM Pi-Run**(Pilot Triggering Conditions 按 module/ 条件配置),Send Ahead 验证,结果回馈 MES,OK 才放量产
- **逐步收敛**:reset 后 λ 可临时调大快速学习,稳定后调回
- 没有 reset 机制的老绪:至少手动 offset 修正 + 缩短反馈有效期

### 28.【场景】VM 预测与实测偏差越来越大,怎么排查?

1. **先看 GOF**:低 GOF 的 VM 值本就不该进反馈 —— 检查滤除阈值是否太松
2. **过程数据漂移**:VM 输入是 FDC/ 机台传感器数据,传感器漂移或 PM 后机况变化会让 VM 模型失效 → VM 模型也要随 PM reset/ 重训
3. **样本代表性**:VM 训练数据是否覆盖当前产品 / 机况?中试线换型频繁,旧产品的 VM 模型预测新产品必然失真
4. **实测校正**:实测到达必须用实测值修正模型状态,不能一直用 VM 续命
5. 处置:VM 失真期间反馈源切回 "仅实测 + 固定基线",重训验证后再启用

### 29.【软技能】工艺工程师习惯手动调参、不信任 APC 自动下货,怎么推进?

- 理解合理性:手动调参在中试线早期是有效的,APC 替代的是 "重复性、有规律的" 补偿,不是所有调整
- 用数据建立信任:先开 **Monitor 模式**(只算不动) 跑两周,对比 "APC 推荐值 vs 工程师手动值 vs 实际结果",让数据说话
- 保留人的位置:工程师 UI 支持手动 offset + 数据模拟计算、跑 n 批人工干预判断 reply —— 自动化是 "工程师授权下的自动",不是夺权
- 划清分工:手动调的是 **基线变更**(走 RMS/ 签核),APC 管的是 **批间漂移**;冲突时靠 **手动调整侦测 + 手动调整 delta 限制** 发现并记录
- 从痛点切入:挑工程师最烦的 "每批都要手工算一遍" 的站别先上,见效再推广

### 30.【软技能】APC 工程师最重要的三个能力?

**控制建模能力(EWMA/MPC 选型调参,懂工艺才能定 Context 与增益)、数据质量意识(量测过滤/乱序/污染隔离,垃圾进垃圾出)、工程落地的分寸感(先卡控后自动化、Monitor 先行、Pilot 验证,中试线半自动比全自动更务实)**.

## APC Function List

### 1. 数据收集与计算 (Data Collection & Calculation)

#### 1.1 工艺测量数据集成

- 提供工艺测量数据收集与集成的开发扩充功能
- 支持工艺测量数据的自动收集
- 提供工艺控制项目的配置功能

#### 1.2 计算公式与异常处理

- 提供最小值、最大值、平均值、标准差等计算公式以供开发控制所需
- 支持自定义异常量测数据及客制化检查流程 (如滤除低 GOF 量测资料不参与 R2R 反馈计算)
- 支持控制工艺对量测项目的检查、过滤及 OOS 处理流程客制

### 2. 集成及工具 (Integration & Tools)

#### 2.1 系统集成接口

- 为不同的制程提供统一的操作界面
- 提供接口定义功能与周边系统集成的开发工具
- 提供图形化的接口定义功能与其他系统 (MES, EAP, Dispatching) 集成
- 支持访问外部数据库
- 按照 WebService 协议提供对外通讯
- 易于扩展其他通讯方式与第三方系统通讯 (如 Tibco RV)
- 与 MES/SPC/FDC/RMS/DISPATCHING/Alarm/Workflow 等周边系统集成
- 与 Litho inside 系统集成, 支持多种 Sub Recipe 类型 (CPE, DOMA, Files, BMMO OVL, BMMO Focus, LIS 等)
- 与 MES 的配方管理功能集成

#### 2.2 开发与权限工具

- 提供功能组件允许用户开发和集成自己的 APC 控制模块
- 提供便捷高效的开发工具
- 提供完善的权限管理机制, 支持用户群组及权限配置
- 提供对象 (Strategy, Parameter Table) 的 Owner/OwnerGroup 管理
- 提供对象 (流程及参数表) 的权限管理及修改历史记录
- 提供全面的报表功能
- 提供友好的设计界面

#### 2.3 历史数据与性能维护

- 提供检视及输出 APC/R2R 历史资料功能, 支持基于不同控制器的 run 货历史查询
- 提供高效的数据清理及恢复机制, 保障系统性能不随时间推移而下降
- 软件升级和新功能发布不影响系统使用 (不停机)
- 支持多产线同时使用
- 提供必要的系统管理工具和性能监控及报警机制

### 3. Pilot Run 管理

#### 3.1 Pilot 触发与设定

- 提供 Pilot(Send Ahead) 设定, 支持依客户指定的 module 和条件配置
- 支持设定 Pilot Triggering Conditions(Wafer count、时间、recipe idle 等, 按 Product group+flow+Step+Tool/Chamber 或 PPID)
- 支持自动放行 Flag 设定
- 适用于 PM Pi-Run, YE Defect Pi-Run, Adhoc Pi-Run 及其他 pilot 需求

#### 3.2 Pilot 执行与反馈

- 支持 Pilot 结果回馈给 MES
- 支持全自动执行 Pilot 流程

### 4. 控制器开发通用功能 (Controller Development)

#### 4.1 基础控制开发

- 提供客户开发支持工艺模块控制的基础功能 (炉管、薄膜、离子注入、光刻、刻蚀、研磨、湿法)
- 针对工艺流程参数实施反馈或调整, 调整参数基于机台可调整参数及相关集成
- 提供不同程度的前馈 / 反馈控制器开发 (lot-level, batch-level, wafer-level)
- 支持根据前馈选择下一步不同的 process recipe
- 支持 MPC(Model Predictive Control) 和 EWMA 控制特性

#### 4.2 控制模型与算法

- 提供 Exponential Weighted Moving Average (EWMA) 控制模型
- 提供 Linear States Space Model (LSSM) 控制模型
- 提供 SISO/MIMO 等不同控制模型并支持切换
- R2R Control Block 除基本 EWMA 和 MPC 外, 支持免费客制化开发培训以新增 WMA 或其他算法
- 提供 R2R 用户 block 及自定义功能开发, 允许用户集成自有模块

#### 4.3 控制流程与情境

- 提供反馈群组控制开发 (如根据产品与配方作为群组控制)
- 支持针对不同控制情境开发不同流程 (pilot lot, rework lot, runcard lot, special lot)
- 支持子流程开发, 流程间可嵌套以提高重用性
- 支持配置流程等方式对现有 solution 进行适配
- 用户可在 UI 上设定特定 LOT 或 Product 只跑对应的 Special APC flow

#### 4.4 数据处理与过滤

- 支持离群批次 (Lot) 过滤功能, 通过设置离群批次清单实现
- 支持 special lot 过滤功能
- 提供量测数据异常检查功能, 异常数据不参与反馈及计算
- 控制器可处理多个调整工艺参数建议请求 (parallel R2R recommend setting request)

#### 4.5 管控与验证

- 针对控制器输出值提供多种管控方式 (上下限、MTT 等) 及 OOS 自定义处理流程
- 提供调整 (offset) 功能
- 提供应用开发需要的 reset 功能
- 提供重置控制器功能 (设备 PM 后手动重置或外部事件驱动)
- Controller 上线前支持模拟 Output, 确保有效性及 model 正确性
- 控制器支持多线程运作, 同时处理不同请求

### 5. Litho CD 控制

#### 5.1 CD 控制模型与参数

- 支持 SISO EWMA Model 及 Lot-level feedback
- 支持 Process 机型:ASML, CANON, NIKON
- 支持量测机型:CD-SEM 及 OCD 量测机台
- 输入参数支持 Dose(调控项) 及 Focus(用户配置)
- 输出参数为 CD

#### 5.2 CD 控制情境与功能

- 内置 pilot run, rework run, normal run, special run, runcard run 场景
- 支持参数值最小调整阈值、tuning 参数变化量上下限及绝对上下限
- 支持调整参数值截取 (根据上下限或变化量上下限)
- 支持 R2R 模式:反馈开启模式、固定基线模式、禁止模式
- 支持量测数据 site 有效性检查及量测有效性验证
- 支持 Target/Dose sensitivity 变动侦测
- 支持过滤 Lot type 进行反馈及反馈有效期控制
- 支持根据最近 run 货值计算返工下货值
- 支持 Feedback exclusion feature
- 支持光阻原料时效性 Feed Forward 及 Lens heating Feed Forward(通过配置)
- 支持返工批有条件参与反馈
- 支持量测根据 wafer process run 或 Lot process run 进行反馈
- 支持 Dose Vs CD slope 根据历史数据自动更新
- 支持 Control Flag: ON, FIX(固定值模式)、OFF
- 支持分光罩反馈 (不包含次光罩 offset)
- 支持 Single Reticle Double Exposure 功能

#### 5.3 CD 第三方集成

- 支持 RTD Integration
- 内建 MES/Alarm Integration
- 内建 AutoPilot Integration

### 6. Litho OVL 控制

#### 6.1 OVL 控制模型与参数

- 支持 MSISO EWMA 及 Lot-level feedforward/feedback
- 支持 Process 机型:ASML Linear/HOPC/iHOPC, CANON Linear 8P/10P, NIKON Linear 8P/10P
- 支持量测机型:KT / YS
- 支持 litho 机台 OVL 线性 / 高阶 /iHOPC 控制参数

#### 6.2 OVL 控制情境与功能

- 支持 pilot run, rework run, normal run, special run, runcard run 场景
- 支持参数值最小调整阈值、tuning 参数变化量上下限及绝对上下限
- 支持调整参数值截取
- 支持 R2R 模式:反馈开启、固定基线、禁止
- 支持量测数据 site 有效性检查及量测有效性验证
- 支持其他后量信息 (如 wafer residual) 仅用于反馈滤除, 不参与计算
- 支持 Chuck dedication 及 User offset FF(通过配置)
- 支持按产品配置特定 lottype 不参与反馈及反馈有效期控制
- 支持 LIS, 5DA 数据整合及 FF/FB 反馈方式
- 支持 New control thread initialization feature 及 Context relaxation
- 支持返工 Lot 特性 (根据最近 run 货值计算返工下货值)
- 支持分光罩反馈或双光罩 offset 模式
- 支持 Special Run 时指定全部参数
- 支持量测根据 Wafer process run 或 Lot metrology 与 process run 进行反馈

#### 6.3 OVL 第三方集成

- 支持 LIS Integration 及 5DA Integration
- 内建 RTD Integration
- 内建 MES/Alarm Integration
- 支持 AutoPilot Integration

### 7. CMP 控制

#### 7.1 CMP 控制模型与参数

- 支持多输入多输出模型 (Model Predictive Control)
- 支持 Lot 级别前馈 / 后馈、Wafer 级别前馈、基于 Chamber/Header/Platen 的前馈 / 后馈
- 支持 Process 机型:EBARA, AMAT Reflexion LK/LKP, HHQK
- 输入参数:研磨时间、研磨时间+ 区间压力
- 输出参数:研磨后厚度 (by zonal)、研磨量

#### 7.2 CMP 控制情境与功能

- 支持 pilot run, rework run, normal run, special run, runcard 场景
- 支持参数值最小调整阈值、tuning 参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持维修后预设参数值配置及配合 Pad/Head 使用时间调整下货参数
- 支持下货参数值与实际下货值差异检查
- 支持量测数据 site 有效性检查
- 支持后量连续不合格时控制绪切换至 pilot 状态
- 支持多道前量值组合及 Lot 前量丢失时的 EWMA 补值预测
- 支持手工前量补录
- 支持有效反馈有效期控制, 超时未更新自动切换至 pilot 状态
- 支持 Measurement disorder handling(process 与 measurement 顺序不一致)
- 支持 Reset time tracking、自动侦测维修及自动设置维修事件
- 支持控制绪关联管理
- 支持自动计算重工次数与决定是否为重工 Lot/Wafer

#### 7.3 CMP 第三方集成与 UI

- 支持 RTD Integration、内建 MES/Alarm Integration, AutoPilot Integration
- 内建 Applied PMS 集成
- 独立 UI 支持反馈条件设定、控制绪操作、PiRun 操作及 run 货历史查询

### 8. Etch 控制

#### 8.1 Etch 控制模型与参数

- 支持多输入多输出模型
- 支持 Chamber-level 前馈 / 后馈及 Wafer-Level 前馈 /Chamber-Level 后馈
- 支持 Process 机型:AMAT Producer, LAM, TEL
- 输入参数:Etch Time, Trim Time, ESC Chuck Temperatures, Gas Flows
- 输出参数 (支持 2 个 output):CDSEM/OCD, Thickness, CDSEM/OCD+Trench depth

#### 8.2 Etch 控制情境与功能

- 支持 pilot run, normal run, special run, runcard run 场景
- 支持参数值最小调整阈值、tuning 参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持 tuning 参数连续达到上下限的次数控制
- 提供不同 Input 之间线性关系的约束
- 支持量测数据 site 有效性检查及基于单 output 的多 zone 计算
- 支持有效反馈有效期控制及最新量测反馈控制
- 支持主 / 从 tuning 参数
- 支持 wafer level 前馈缺少量测数据时自动补偿计算
- 支持根据 DF zone, CVD Chamber 或 Scanner Type(KrF, ArF, iLine, DUV) 反馈
- 支持根据 Litho as Pre-process 机型反馈
- 支持 Hydra uniformity system(raw metro data and X/Y coordinates)
- 支持手动调整 Modeling 侦测及 tuning parameter 下货值侦测
- 支持前值 / 后值量测来自于多个站点
- 支持 first wafer 效应处理
- 支持 by RF life time 预补偿参数值 (RF life-time control)

#### 8.3 Etch 第三方集成与 UI

- 内建 AutoPilot Integration
- 独立 UI 支持反馈条件设定、控制绪操作、PiRun 操作及 run 货历史查询

### 9. Diffusion 控制

#### 9.1 Diffusion 控制模型与参数

- 支持多输入多输出 MPC 线性状态空间模型
- 支持 Batch 级别反馈 (生产批、monitoring wafer、混合反馈)
- 支持 Process 机型:NAURA furnace batch, TEL furnace batch, KE batch
- 支持 Control Type: Monitor, Product, Hybrid Control
- 支持 Deptime/Loop/ZoneTemp 开关
- 支持工艺类别:LPCVD, APCVD, ALD
- 输入参数:各区温度 (5-10 区)、deposition 时间或 ALD loop
- 输出参数:各区厚度 (5-10 区)

#### 9.2 Diffusion 控制情境与功能

- 支持 pilot run, normal run, special run, runcard run 场景
- 支持 Zone 反馈资料识别及根据必要 Zone 量测资料反馈
- 支持有效反馈有效期控制、输出预测检查及量测数据 site/ 有效性检查
- 支持最新量测反馈控制
- 支持不同 recipe 之间的主 / 从控制绪关联管理
- 支持 Zone 量测缺省处理及量测超期处理
- 支持关键设定侦测及控制绪重置跟踪
- 支持后量 lot 类型处理及 Batch 加工 wafer 数量限制
- 支持参数值最小调整阈值、tuning 参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持下货 tuning 参数连续超限处理及手动调整侦测
- 支持连续无效量测控制及控制绪 Enable/Disable
- 支持手动调整 tuning parameter delta 限制
- 支持 Boat zone 定义
- 支持 Monitor Bias Control(Hybrid 场景下单独 Tune Monitor Target 偏移量)
- 支持 APCVD 根据常压变动预补偿 Diffusion Time
- 支持 Loading Size Control 分群及 Pre-mature FB
- 支持 Thickness Vs Zone 温度系数根据历史数据自动更新
- 支持 Linked Control 及 Ratio Control
- 支持 Furnace Tube-THK pre-tune

#### 9.3 Diffusion 第三方集成与 UI

- 内建 Applied MES/Alarm Integration 及 PMS 集成
- 自动同步 Applied MES Product Target 并计算反馈
- 独立 UI 支持反馈条件设定、控制绪操作、Test Run 操作及 run 货历史查询

### 10. ThinFilm 控制

#### 10.1 ThinFilm 控制模型与参数

- 支持多输入多输出 MPC 线性状态空间模型
- 支持 Lot 级别、Chamber 级别、Chuck 级别反馈
- 支持 Process 机型:AMAT Producer, AMAT GT
- 支持两种 Wafer 跑货模式:Parallel Mode, Serial Mode
- 输入参数:Deposition Time, Chuck RF Time/Power/Heater 等
- 输出参数:Thickness 等

#### 10.2 ThinFilm 控制情境与功能

- 支持 pilot run, rework run, normal run, special run, runcard run 场景
- 支持参数值最小调整阈值、tuning 参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持 tuning 参数连续达到上下限次数控制
- 支持量测数据 site 有效性检查及滤除失控 / 不合规晶圆量测
- 支持有效反馈有效期控制及使用最新量测 data 参与 R2R 运算
- 支持线性约束
- 支持控制绪单向 / 双向联动 (Linear/Non-linear Quadratic/Cubic)
- 支持 Slave Parameter 控制

#### 10.3 ThinFilm 第三方集成与 UI

- 内建 MES/Alarm Integration
- 独立 UI 支持反馈条件设定、控制绪操作、PiRun 操作及 run 货历史查询

### 11. WET Controller

#### 11.1 WET 控制模型与参数

- 控制模型:SISO EWMA
- FFFB 模型:Batch/Lot 级别前馈, Batch 级别反馈
- 支持根据前量厚度选择 Recipe 或更新 ETCH_TIME 两种模式
- 控制参数:ETCH_TIME
- 输出参数:Thickness

#### 11.2 WET 控制功能

- 支持 piLot run, normal run, special run, runcard run
- 支持 tuning 参数变化量绝对值上限及上下限
- 支持调整参数值截取及连续达到上下限次数控制
- 支持主 / 从 Tuning 参数及手动调整下货值侦测
- 支持 Control Flag: ON, FIX, OFF
- 支持量测数据 site/Wafer/Lot 有效性检查并触发 action
- 支持有效反馈有效期控制, 超时未更新自动 hold
- 支持量测根据 Wafer process run 进行反馈

### 12. TRIM Controller

#### 12.1 TRIM by THK

- 控制模型:MSISO;控制参数:去除量;输出:thickness
- 支持 Lot/Wafer/Point level Feedforward 及 Feedback
- 支持 Tune Flag 开关及 EWMA 模型算法
- 支持工程师 UI 手动调整去除量 Offset 及数据模拟计算
- 支持新产品或条件过期自动 piLot run
- 支持 PiLot Lot 量测结果上传前相同条件其他 Lot 禁止进站
- 支持多种去除方式及下货值 / 量测值 SPEC 卡控
- 支持去除量 Offset 变动卡控及多种 OOS 点处理方式
- 支持用户指定去除坐标
- 支持工程师操作记录 Log 追溯
- 支持量测 / 生产数据 Excel 导出及设置 Excel 导入导出
- 支持参数值最小调整阈值
- 支持 Process 顺序和量测顺序不一致处理及手工前量补录

#### 12.2 TRIM by WAT

- 支持 Wafer Level 前馈及 WAT 量测结果自动处理
- 支持不同 device 系数计算及引用
- 支持 By 机台设置系数 Offset 及 Tool Dedication
- 支持多种系数选项及目标值选项
- 支持最小有效点数卡关及最大 OOS 点数卡关
- 支持 CupLifetime 卡关及量测值 SPEC 卡控
- 支持 OOS Points 卡关及 OOS Hold Lot 处理
- 支持工程师操作记录 Log 追溯
- 支持量测 / 生产数据 Excel 导出及设置 Excel 导入导出
- 支持手工前量补录及文件类型处理

### 13. 独立 UI 通用功能 (Standalone UI)

#### 13.1 操作与配置

- 支持反馈条件设定及控制绪操作
- 支持 PiRun/Test Run 操作
- 方便用户或 IT 导入修正数据、赋值或针对 special Lot 中途 overwrite 反馈值
- 支持设定跑 n 批货后人工干预判断 R2R reply 结果
- 支持设定 test 条件 (by Wafer/Lot/ 站点), test pass 自动判定继续使用 R2R

#### 13.2 查询与权限

- 支持查询 workflow 数据结果以验证准确性
- 支持灵活的权限设置和管控
- 支持必要的数据报表查询
- 支持控制绪 run 货历史查询

# MES

## MES Terminology

| Abbreviation | Full form         | Desc     |
| :----------- | :---------------- | :------- |
| BOM          | Bill of Materials | 物料清单 |

BOM 核心内容: 父项 (成品 / 组件)、子项 (原料 / 零件)、用量、单位、损耗率、生效日期等
BOM 结构形式: 通常是树状层级结构 (多级 BOM), 反映了产品的装配关系

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

## MES interview

### 1.【概念】MES 在 CIM 中的位置?与 EAP, RMS, RTD 的分工?

MES 是 CIM 的 **生产执行中枢**:管账 (Inventory)、管料 (物料 / 载具 / 耗材)、管流程 (Flow/WIP 全生命周期).一句话分工:**EAP 采集与控制、RMS 管配方、MES 管账料与流程、RTD 管派工**.

- **EAP**:MES 的 "手脚" —— MES 下 Track In/Out 指令与作业信息,EAP 负责与机台的 SECS/GEM 通讯执行
- **RMS**:MES Flow/Step 里引用 **MES Recipe ID**,EAP 负责 MES Recipe ID → 设备 Recipe ID 的解析转换
- **RTD**:派工委托 —— MES 提供 WIP/ 设备状态 /Constraint 数据,RTD 算优先级决定 "下一批做谁"
- **AMS/PMS/FDC/SPC**:告警、维保、故障拦截、统计控制的边界分别在各自系统,MES 消费其结果 (如 OOC 联动 Hold)

### 2.【概念】工厂建模 (Modeling) 建什么?为什么说建模是 MES 的地基?

建模分两条线,对应 Function List 第 1 组:

- **Physical & Resource Modeling**:Factory/Area/Bay, Location(OHB/NTB/Stocker)、WorkArea(LITHO/ETCH/CMP/CVD/ODF/OLED…)、Equipment 架构 (Main Tool → Chamber → Loadport → Header)、机台状态与 Capability(E10 标准)、耗材物料建模
- **Product & Process Modeling**:Product, Process Flow(PW/NPW、多版本)、Recipe & Parameter, EDC Spec & SPC Chart, ReasonCode & Bank、污染等级

地基的含义:**WIP 的每一次 Track In/Out 都是对建模对象的校验** —— Lot 能不能进这台设备、用哪个 Recipe、走哪条 Flow,全部由建模数据回答.建模错一处,产线就卡一片.支持 Excel 批量导入导出、批量生效 / 冻结,就是为了中试线大批量建模的现实需求.

### 3.【概念】WIP 全生命周期包含哪些核心操作?Track In/Out 的本质是什么?

一个 Lot 从 **Lot Create/Wafer Start**(手动 / 自动、ERP/WMS 集成) 开始,经历:

- **Track In/Out**(By Batch/Lot/Wafer 三个粒度):进站登记 "我开始做",出站登记 "我做完了 + 结果如何"
- **特殊操作**:Split/Merge, Hold/Release、**Skip**(跳工序)、Back Operation(回退)
- **异常操作**:Rework, Scrap/Unscrap, Terminate/Unterminate
- **终结**:出货 / 入库 (Bank)

Track In/Out 的本质是 **账实同步的原子事务**:Track In 时校验设备状态、Recipe, Constraint、载具;Track Out 时落 EDC 数据、扣 QTime 起点、触发下一步可用.账 (MES 记录) 与实 (产线实物) 靠这两个动作锁死一致.

### 4.【概念】Hold/Release 与 Future Hold 的区别?Future Hold 的典型用途?

- **Hold**:立即冻结,Lot 不能再 Track In,需 Release 解锁 —— 事后处置 (发现异常、SPC OOS 联动)
- **Future Hold**:**预登记的未来动作**,Lot 走到指定 Step 时自动 Hold —— 事前预防

Future Hold 典型用途:某设备发现异常,怀疑之前跑过的 N 批有风险 → 对这 N 批设 Future Hold,它们流转到下一站 (或量测站) 自动卡住等确认,**不用现在满产线找货**.Function List 里 Future Action 还支持 Future Skip/Split/Merge,且 Dynamic Branch 时 **Future Hold 可继承** 到分支后,避免绕路逃脱卡控.

### 5.【建模】Flow 架构与版本管理?在制 Lot 遇到升版怎么办?

层级化架构:**Flow → Layer → Stage → Step**.版本管理要点:

- 多版本共存 + **Golden Flow** 工艺复用,可视化拖拽建模、Flow Comparison 版本比较
- **自动升版继承**:新版本生效时,在制 Lot 按规则继承 —— SRC/RRC/OCAP Lot 保护 (处于特殊状态的 Lot 不自动升版,防止流程错位)、**Q-Time/Sampling 继承**(换版不清空已积累的 QTime 计时与采样标记)
- Tech-based 批量载入 / 修改 + **Where Used 查询**(这个 Step/Recipe 被哪些 Flow 引用,改之前先看影响面)

中试线高频考点:Flow 天天改版,**升版对在制 Lot 的影响评估** 比建版本身更重要 —— 默认在制走旧版跑完,新版只对新投 Lot 生效,除非工程评估明确切换点.

### 6.【概念】Rework 怎么管?和正常 Flow 是什么关系?

Rework 不是 "随便重做",而是 **受控的分支流程**:

- 触发场景:**Inline**(在线判定返工)/ **BankIn / StockIn**(入库后翻出返工)/ **Customer 退回**
- 系统动作:触发 Rework 后走专用 **RRC(Rework Route)**,自动重指 Flow 分支,次数受控 (如同一 Step 最多 Rework 2 次,超限强制工程确认)
- 与正常 Flow 的关系:Rework Step 引用同一套建模对象 (设备 /Recipe/Constraint),但独立计数与追溯;**自动触发 RRC** 防止操作员手动跳步绕过记录
- QTime 考量:返工后某些 QTime 重置、某些继续累计,按规则配置

### 7.【概念】Split/Merge 与 Scrap 的管控要点?

- **Split**:一个 Lot 拆成多个 (部分片数先行、实验分流);**Merge**:多个 Lot 合并 (Furnace Batch 凑批、后续共站加工).要点:**母子 Lot 谱系必须全程可追溯**,Merge 要校验产品 /Step/ 污染等级兼容
- **Scrap**:报废判定时强制 ReasonCode + 签核;支持 **Unscrap**(误判报废的挽回,但同样留痕)
- 中试线特点:实验分流 Split 极频繁 (一批实验拆 5 个子批跑 5 个条件),谱系树深,追溯查询性能与展示是实际痛点

### 8.【账料】MES 与 EAP 的账料匹配校验在哪些时机做?不一致怎么处置?

三个校验时机:

1. **载具到 Port**:Carrier ID 与 MES 登记的载具-Lot 绑定关系比对
2. **获取作业信息**:EAP 向 MES 请求该 Lot 的 Recipe/ 作业参数,验证 Lot 状态是否允许作业
3. **Track In/Out**:进出站时校验机台实际上传的 Lot/ 片数 /Slot Map 与 MES 账面一致

不一致处置分层:

| 程度 | 例子                                  | 处置                                             |
| :--- | :------------------------------------ | :----------------------------------------------- |
| 轻   | 载具放错 Port                         | 退 Port,提示重放                                 |
| 中   | Lot 状态不允许作业 (未 Track In 到站) | 禁止启动 + 报警                                  |
| 重   | 片数 /Slot Map 不符,疑似混批          | **Hold Lot** + 预警通知工程师,人工核对实物后处理 |

原则:**账料一致是 MES 的生命线**,宁可误拦不可放过 —— 混批一片就是质量事故.

### 9.【账料】账料不一致的常见根因有哪些?怎么系统性预防?

常见根因:

- 手动操作环节 (2 寸 / 手动设备)Track Out 忘做或做错片数
- 设备异常中断 (EAP 断线、机台宕机),实际做完了但账还挂着
- Split/Merge 人为失误,谱系登错
- 载具复用,旧绑定未清干净

系统性预防:

- 能自动就自动:有 SECS 的设备走 EAP 自动 Track In/Out,**先卡控后自动化** —— 手动设备加二次确认与扫码校验
- 每日账料稽核报表 (WIP 账 vs Stocker/ 机台实物抽查)
- 断线恢复流程:EAP 重连后主动同步机台侧在制状态,与 MES 账面对账
- 一切变更留痕:任何手动改账动作强制 ReasonCode + 权限控制 + 审计追踪

### 10.【建模】MES 的设备状态模型?与 PMS, FDC, EAP 的状态怎么联动?

以 **E10 标准** 为基础扩展:Run/Idle/PM/Down/Eng 等,MES 建模时机台状态关键参数的 **设置/查看权限分离**.

联动逻辑:

- **EAP → MES**:机台实际上下班、Alarm、作业开始结束实时同步,MES 状态跟着切 (Auto Transition);手动设备允许 Manual Transition 但留痕
- **PMS → MES**:PM 到点,PMS 发起 → MES 把设备切 PM 状态、禁止 Track In(Season 管控里 PM 也是 Season 的一种);PM 完成需 Run-card 或首件验证后放行
- **FDC → MES**:FDC 侦测到故障拦截 → MES 执行设备 Hold(Monitor 失败自动禁止作业)
- **MES → RTD**:只有 Run/Idle 且 Capability 匹配的设备才进入派工池

考点:MES 状态是 "账面状态",EAP 上报是 "实际状态",两者漂移就是第 26 题的场景.

### 11.【WIP】QTime 管控怎么设计?超时怎么处置?

QTime(Queue Time) 是相邻两站间的等待时限 (如 Etch 后 4h 内必须进炉管,防氧化).MES 支持:

- **Max/Min** 双向管控 (Min:如去胶后必须等够冷却时间)
- **Nested / Cross-Flow**:嵌套 QTime(大时限套小时限)、跨 Flow 的 QTime(Rework 跨流程仍累计)
- **Auto Action Trigger**:超时自动动作 —— 预警 → Hold Lot → 强制工程确认放行,逐级升级
- 特殊联动:**N2 Purge 集成可更新 QTime**(充氮保存延长有效等待时间)、炉管等 Batch 站的等待策略

中试线务实做法:先对关键 QTime(光刻- 显影、刻蚀- 炉管类) 上强卡控,其余先预警观察,数据积累后再收紧 —— 不要一上来全配 Max Action,否则产线天天被 Hold 瘫掉.

### 12.【建模】Carrier 与 Reticle 管理的要点?

**Carrier(载具)**:

- 类型建模:FOUP/FOSB/Pod/Cassette,Cleaning/Inspection 状态管理,**污染等级管控**(FOUP/Sorter Level 转换 + Future Action,脏载具装净片前强制清洗)
- 与 **MCS 位置同步**:载具在 Stocker/OHB/NTB 间的位置账实一致
- Port 管理:In/Out/InOut Mode, FOSB↔FOUP Transfer

**Reticle(光罩)**:

- **LifeTime / Energy Accumulation**(曝光能量累计寿命)、Inspection/Clean 周期到点禁用
- Kit/UnKit(光罩盒绑定)、Stocker 集成、Field 设定
- Litho 作业时 MES 校验:该 Step 绑定的 Reticle 版本对不对、寿命够不够 —— Multiple Reticle 场景逐一对

### 13.【WIP】EDC 与 SPC 是怎么和 WIP 流程联动的?

- **EDC 数据采集**:Manual/Auto/File 三种模式,自定义公式;量测站的 Track Out 可绑定 EDC Plan,**数据没传完不许出站**(In-Step 管控)
- **Sampling 规则**:Production/YE/Wafer Sampling, Key Tool, Long Time No WIP, Step Sampling;**Wafer Selection**(NearestUp/Down, Same As Before) 决定抽哪几片
- **SPC 联动**:EDC 数据进 SPC 判 OOC/OOS → 结果回传 MES → 自动 **Hold Lot / Hold 设备**,触发 **OCAP**(图形化异常处置流程,Inline/Off-Line/Wafer Test 分类,签核集成)
- 边界划清:**MES 管采集与流程卡控,SPC 管统计判定**,OOC/OOS 的判在 SPC,动作的执行在 MES

### 14.【概念】MES 与周边系统的边界怎么划?举四个例子.

| 事项         | MES 做什么                       | 委托给谁                                                     |
| :----------- | :------------------------------- | :----------------------------------------------------------- |
| Recipe       | Flow/Step 引用 **MES Recipe ID** | RMS 管版本与下发,EAP 做 ID 解析转换与下载                    |
| 派工         | 提供 WIP/Constraint/ 设备状态    | **RTD** 计算派工优先级                                       |
| 告警         | 产生业务事件 (Hold、超时)        | **AMS** 统一通知与升级                                       |
| 配方内容检查 | 作业前校验 Recipe 匹配           | RMS 集成检查 (MES-EAP 信息同步里含 Recipe Body Content 检查) |

原则:**MES 是流程与账的主人,不做专业计算** —— 统计判定给 SPC、故障侦测给 FDC、调参给 APC、配方存取给 RMS.边界划不清的系统,出问题没人能找到责任界面.

### 15.【建模】化学品与耗材怎么管控?Runtime Consume 是什么?

- **Photo Resist(光阻)**:退冰管理、时效 / 过期卡控、PR 更换记录、安全库存预警、批次认证 —— 过期光阻禁止上机
- **Consumable & Durable**:Timer(计时寿命)/ **Meter Counting(计米,如 DPS Blade 刀片)**、Kit/UnKit, BOM 绑定
- **Runtime Consume**:运行时实际耗用 —— Auto/Manual Consumption,作业前 **可用物料检查**(库存够不够、有效期过没过、批次认证过没过),BOM 运行时绑定把 "这批实际用了哪批料" 记入谱系
- 后道意义更大:辅材批次是客诉追溯的关键字段,MES 提供应使用辅材规格 / 批次,EAP 上料时扫码比对

### 16.【前道】前道 WIP 管控的重点是什么?Litho 区有什么特殊性?

前道以 **Wafer 为核心**:片数、Slot Map, Recipe 三一致是账料基准.

Litho 区特殊性 (前道最复杂的管控场景):

- **Multiple Reticle** 绑定校验、Reticle 寿命与能量累计
- **Inline Track+Scanner** 联动:涂胶显影与曝光是连体流程,Track 段异常要联动卡 Scanner
- **PR 光阻时效**:退冰后使用时限,QTime 里最敏感的一段
- **Chuck/Tool FeedForward**:与 APC 的前馈参数联动,MES 负责把上一站量测结果带到本站的作业信息里
- 光刻是 Rework 大户 (去胶重曝),RRC 流程与次数上限必须配好

### 17.【后道】后道和前道的 WIP 管理有什么本质差异?

| 维度     | 前道                | 后道                                                              |
| :------- | :------------------ | :---------------------------------------------------------------- |
| 追溯粒度 | Lot / Wafer         | **Strip / Die 级**(Die Lot 管理、No-Wafer-Lot 操作、Die Bank)     |
| 物料重点 | 载具、Reticle、光阻 | **辅材**(料号 / 批次 / 有效期:DAF 膜、银胶、焊线、塑封料)         |
| 形态变化 | Wafer 始终是 Wafer  | Wafer → Die → Strip → Unit,**谱系重构**(DPS 重构 Wafer、二次拾取) |
| 设备对接 | SECS/GEM 为主       | 非标多,文件 / 扫码 / 人工兜底多                                   |

后道 MES 的关键能力:**Wafer Map**(解析、合并 / 比较、旋转 / 镜像、Manual Ink)+ **Die Attach(DoW,Substrate/Die Matching,EAP 上报追溯)** + **DPS Pick and Place**(Die Count、重构 Wafer, Blade 寿命).一片 Wafer 切开成几千颗 Die 分到不同 Strip,追溯链不能断.

### 18.【2-12 寸】2/4/6/8/12 寸混线,建模和管控怎么分层?

按自动化程度分层,不搞一刀切:

| 尺寸 / 类型   | 载具                | 管控策略                                                                  |
| :------------ | :------------------ | :------------------------------------------------------------------------ |
| 12 寸         | FOUP + Stocker/AMHS | 全自动化 (Auto 1/2/3),EAP 自动 Track In/Out,MCS 位置同步                  |
| 8 寸          | SMIF/Cassette       | 半自动:Port 校验 + 自动作业信息,部分手动 Track                            |
| 6 寸 (SiC 等) | Cassette/Open       | 半自动偏手动,扫码 + 二次确认,重点卡 Recipe 与片数                         |
| 2/4 寸        | 花篮 / 镊子级手动   | **手动模式**:操作员扫码 Track In/Out,关键站拍照 / 称重回传,账料靠稽核兜底 |

建模上统一 Equipment/Chamber/Loadport 架构 (非标设备用 Custom Attribute Extension 扩展属性),差异在 Port Mode 与 Automation Mode 配置.原则:**能接 SECS 的接 EAP,不能接的走 PLC/OPC/文件,再不济扫码人工兜底 —— 但账必须进 MES**.

### 19.【全产品】逻辑、存储、功率、CIS, MEMS、化合物、Micro OLED 全家族混线,Flow 和 WIP 怎么统一管?

- **统一骨架**:Flow/Layer/Stage/Step 层级、版本继承、WIP 操作集 (Track/Hold/Rework/Split) 全家族共用
- **差异在配置不在代码**:每个家族自己的 Flow 模板 (Golden Flow 复用)、QTime 规则、污染等级、Sampling 策略;按 **Tech 维度批量载入/修改**
- 特殊工艺模块即插即用:MEMS 的 Bond/Debond(WoW/WoG,Mapping Traceability)、**Micro OLED 专用**(Continuous Run, EVA Mask, Frame/Tray, Die PnP)、化合物的非标设备文件对接
- 跨家族共站设备 (如共用炉管):靠 **Tool Constraint**(Binding, Daily/Total Count)+ 污染等级管控防串扰

考点:全产品不是要求一套 Flow 打天下,而是 **一套建模框架 + N 套工艺配置**.

### 20.【中试线】研发 Lot 与量产 Lot 混线,MES 怎么隔离?

核心是 **Lot Type 区分 + 全链路卡控**:

- 建模层:研发 Flow 与量产 Flow 分开管理,Recipe 引用不同组 (配合 RMS 的 Recipe Group 隔离)
- 卡控层:实验 Lot 只能跑实验 Flow、选实验区 Recipe;关键量产设备可设 Constraint 禁止实验 Lot 占用黄金时段
- 标识层:**Lab Product Tracking**(Experiment Start/End, QE 结果),实验数据全程标记,不进量产良率统计口径
- 权限层:实验 Lot 的操作权限放给工程师,量产 Lot 走标准作业;界面按角色过滤可见性

原则:隔离不是物理分线 (中试线没那个条件),而是 **账、流程、权限、统计四个维度软隔离**.

### 21.【中试线】实验 Flow 建版快、跳工序多,怎么支撑又不失控?

- **快速建版**:Golden Flow 复制改参数 + Excel 批量导入 + 可视化拖拽;实验 Flow 走简化签核 (类比实验 Recipe 自签 + 自动过期)
- **跳工序三件套**:**Skip**(跳过指定 Step)、**Dynamic Branch**(条件分支,量测结果决定走向)、**Back Operation**(回退重做)—— 全部是系统原生操作,留痕可追溯,而不是手改数据库
- **Future Action 继承**:分支 / 跳站后 Future Hold 等预设动作跟着走,防止 "绕路逃脱卡控"
- 失控防线:跳站操作权限控制 + ReasonCode 强制 + 每日实验 Lot 操作审计;实验 Flow 默认有效期,到期冻结

**追问**:如果工程师要求 "这步先跳过后面再补数据" 怎么答?(Skip 可以,但 EDC 必录站要设允许补录窗口,超窗强制工程确认,否则数据链断档.)

### 22.【中试线】MES 的重要逻辑要改 (如 Track In 校验规则),怎么安全上线?

走 **Pilot 机制**:

1. 测试环境验证基本功能
2. **小范围 Pilot**:选个别设备类型 / 个别 Flow/ 个别 Lot Type 启用新逻辑,其余完全不受影响
3. Pilot 期间并行观察:新旧逻辑结果比对,账料一致性重点盯
4. 灰度推广 → 全量,**版本留档可回滚**
5. 上线窗口选低峰,产线提前通告

中试线特别注意:研发 Lot 可以当 Pilot 的 "试验田"(本身就在迭代),量产 Lot 绝不进第一批.一切变更留痕:谁改的、何时生效、影响范围,出问题能精确回退.

### 23.【中试线】多品种小批量下,Tool Constraint 和 Recipe Inhibit 怎么帮产线防错?

- **Tool Constraint**:设备- 产品 / 工艺 **Binding**(这台设备只允许跑这些产品)、Run-card 强制 (关键设备作业前要挂 RunCard 签核)、**Daily/Total Count**(每日 / 累计片数上限,防设备过用)
- **Recipe Inhibit & Auto Monitor**:被禁用的 Recipe 即使机台上有也不许作业;**Idle Time 监控**(设备闲置超阈值先做 Monitor 片验证再跑产品)、**Season 管控**(Idle/PM/Recipe Change 后的季节片制度,支持 Mixed NPW/PW Mode)、Pre/Post Measurement(作业前后强制量测)、Cycle Control
- 小批量场景价值:换型频繁 → 每次换型后的首件卡控 (Monitor + 首件量测) 是防批量事故的闸门,比事后检验便宜得多

### 24.【场景】产线报 "MES 显示 Lot 加工中,设备早就做完了"(状态漂移),怎么排查?

分层排查 (先保生产再排障):

1. **先恢复**:人工核对实物与机台日志确认确实做完 → 手动补 Track Out(留痕 + ReasonCode),让 Lot 流转起来
2. **查链路**:Track Out 依赖 EAP 上报作业结束事件 —— 查 EAP 该机台进程日志 (Server 1:1 Tool,约 30 进程里找对应机台),事件是丢了、晚了还是根本没收到
3. **查断线**:该时段 EAP 与机台 SECS 连接是否有断链?断链期间的事件恢复后有没有补同步?
4. **查 MES 侧**:消息队列积压?Track Out 事务失败回滚 (如 EDC 校验卡住)?
5. **根因整改**:断线补同步机制缺陷 → 修;机台不主动上报 → 改 EAP 轮询兜底;EDC 卡出站 → 调整校验顺序或超时策略

口径:与 EAP 面试题一致 —— MES 状态是账,EAP 事件是源,**漂移先对账再修源**.

### 25.【场景】MES 宕机,产线还在跑,怎么降级?

分级降级 (预案要事先演练):

- **0-15 分钟**:EAP 缓存作业信息继续跑已在机台上的 Lot(前提:EAP 已拿到 Recipe 与参数);暂停新 Track In
- **15-60 分钟**:启用 **纸单/离线条码降级模式** —— 人工记录进出站 (时间、Lot、设备、操作员),载具流转照常但双人核对;关键卡控 (QTime, Recipe 版本) 转人工确认
- **恢复后**:补录降级期间所有交易,**账料全面稽核**(WIP 账 vs 实物逐站核对),差异逐笔处理
- 原则:降级期间 **宁慢勿错**,一切人工操作留痕;恢复后第一时间对账,不把不一致带到第二天

考点:知道 MES 宕机 ≠ 全线停产,但代价是自动化卡控全部转人工,恢复成本极高 —— 所以 MES 的可用性架构 (冗余、快速切换) 本身就是面试加分项.

### 26.【场景】Future Hold 误伤了一批客户紧急 Lot,怎么处理?

1. **确认误伤**:查 Future Hold 设定记录 (谁、何时、圈选条件)—— 常见根因是圈选条件太宽 (按产品圈结果波及同产品其他 Lot) 或 Future Hold 继承到了不该到的分支
2. **紧急放行**:确认该 Lot 不在真实风险范围 → Release(走紧急签核通道,留痕);客户交期优先
3. **复盘修正**:圈选逻辑改为按 **Lot 清单精确圈选** 而非条件模糊匹配;Future Hold 设定加二次确认与影响预览 ("将卡控以下 N 批")
4. 防线:高优先 / 客户紧急 Lot 打标,Future Hold 批量设定时对打标 Lot 强制人工确认

原则:**先保生产再排障**,但放行必须签核留痕,不能 "先放了再说".

### 27.【场景】交接班时发现账料不符 (MES 账 25 片,实物流水 24 片),排查流程?

1. **现场冻结**:该 Lot 立即 Hold,停止继续流转,防止差异扩散
2. **实物清点**:载具内 Slot Map 逐位核对,确认到底 24 还是 25、缺的是哪一片 (破片?遗留在机台?被借去实验?)
3. **流水追溯**:调该 Lot 全历史 —— Track In/Out 记录、Split/Merge 谱系、Scrap 记录、ETC 借还 (Lending/Borrowing)
4. **设备侧核对**:最后几站机台的实际作业日志 (EAP 侧),看是否有作业了但账没动的片
5. **处置**:找到片 → 归位改账 (留痕);确认破片 / 丢失 → 走 Scrap 流程 (ReasonCode + 签核);**根因归类**(手动漏 Track?Split 登错?) 进整改清单

账料差异不过夜,这是 MES 工程师的职业底线.

### 28.【场景】新版本 Flow 上线后,一批在制 Lot 跑到一半 Step 对不上了,怎么查与处置?

排查:

1. **升版继承规则**:该 Lot 升版时处于什么状态?是否命中 SRC/RRC/OCAP Lot 保护却还是被升了?Q-Time/Sampling 继承是否丢失?
2. **版本锚定**:查该 Lot 当前锚定的 Flow 版本 —— 正常应在制走旧版跑完,是不是配置成了 "在制自动切新版"
3. **Step 映射**:新旧版 Step 差异 (Flow Comparison 功能),Lot 当前位置映射到新版哪一步,映射表对不对

处置:

- 能回退:把 Lot 锚回旧版本跑完 (版本共存就是为了这个)
- 不能回退:人工指定当前 Step 对应关系 (Auto/Manual Reassign),工程签核确认
- 整改:升版 SOP 增加 "在制 Lot 影响清单" 前置检查,Where Used 查询确认波及面后再生效

### 29.【软技能】产线抱怨 "MES 卡控太多、操作太烦,影响效率",怎么应对?

- **先听数据**:统计各卡控的拦截记录 —— 拦住的 90% 是误拦还是真错?误拦多的卡控是配置问题 (该调阈值调阈值),真错多的说明卡控在救命
- **分层优化**:能自动的卡控不要靠人记 (自动 Track、扫码替代手输);非关键站的二次确认能合并就合并
- **算大账**:用历史事故数据说明 "一次混批/用错 Recipe 的损失 = 多少次点击的时间" —— 卡控不是效率的对立面,是批量事故保险
- **底线**:卡控规则可以优化,但 **不能为了方便跳过留痕**;任何放宽走变更评审,产线、工程、QA 三方会签

### 30.【软技能】MES 工程师最重要的三个能力?

**账料一致的执念(账实不符不过夜的工程洁癖)、全流程建模思维(把工艺/设备/物料抽象成数据模型且预见到在制影响的能力)、产线同理心(中试线灵活与量产管控的平衡,卡控方案先保生产再追求完美)**.

## MES Function List

### 1. FAB Modeling (工厂建模)

支持工厂、产品、工艺流程及资源的全面建模与定义, 包含数据校验、批量维护及权限扩展:

#### 1.1 Physical & Resource Modeling (物理与资源建模)

- Factory/Area/Bay Modeling (Production/Storage Type, 数据一致性检查)
- Location 定义 & 库存查询 (OHB, NTB, Stocker, 运行时冲突检查)
- WorkArea 定义 (OLED, ODF, CMP, CVD, ETCH, LITHO, etc.)
- Equipment/Tool 架构 (Main Tool, Chamber, Loadport, Header, Custom Attribute Extension)
- 天车与端口定义 (Auto-1/2/3 Mode, Internal Buffer Logic)
- 机台状态 & Capability 定义 (E10 标准, 关键参数设置 / 查看权限分离)
- 耗材与耐用品物料建模 (自定义命名、计时 / 计米管理定义)
- 用户权限与建模对象加载器 (Excel 导入导出、批量生效 / 冻结)

#### 1.2 Product & Process Definition (产品与工艺定义)

- Product & Process Flow Modeling (PW/NPW、多版本、可视化拖拽、版本比较)
- Recipe & Parameter 定义 (批量导入、RMS 集成检查)
- 数据采集与制程规范建模 (EDC Spec & SPC Chart 联动)
- ReasonCode & Bank 定义 (Start/End/Reticle/Receive Bank, 批量导入)
- 污染管控 (FOUP/Sorter Level 转换, Future Action 定义)

### 2. Tool Management (设备管理)

支持设备全生命周期管理、状态监控、自动化集成及特定设备高级控制:

#### 2.1 Equipment Status & Control (设备状态与控制)

- 机台建模 (Fix Buffer, Inline, Sorter, Multi-chamber, NTB as Internal Buffer)
- 机台状态与控制 (E10 扩展, Auto/Manual Transition, On Top Load Port)
- 机台 Capability & Capacity 管理 (Constraint Configuration GUI)
- Port 管理 (In/Out/InOut Mode, Automation Mode, FOSB<->FOUP Transfer)
- 机台 Hold 控制与异常检测 (Monitor 失败自动禁止)
- Reserve Equipment (Auto/Semi-auto Mode)
- MES-EAP 信息同步与报警集成 (Recipe Body Content 检查)

#### 2.2 Advanced Equipment Operations (高级设备作业)

- WET Batch Run & Dummy 填充机制 (Side/Fill Dummy 区分)
- Furnace Batch 控制 (AB Batch, Boat 厚度验证, Zone Mapping, Monitor 量测反馈)
- Sorter 管理 (Inline/Ad-hoc, Full Auto, Split/Merge/Exchange, Constraint GUI)
- Litho/Photo 设备控制 (Multiple Reticle, Inline Track+Scanner, Chuck/Tool FeedForward, Reticle Inspection Integration)
- N2 Purge 集成 & QTime 更新
- Stocker/OHB/NTB 与 MCS 同步 (位置同步、污染管控)
- 污染管控与配方内容检查 (RMS 集成)

### 3. Process Plan (工艺流程)

支持多层级工艺架构、严格版本控制、动态流程调整及批量维护:

#### 3.1 Flow Architecture & Versioning (流程架构与版本)

- 层级化工艺架构 (Flow, Layer, Stage, Step)
- 工艺复用与 Golden Flow 支持
- 版本管理与自动升版继承 (SRC/RRC/Ocap Lot 保护, Q-Time/Sampling 继承)
- Excel 导入与可视化流程建模 (Flow Comparison, Tech-based 批量载入 / 修改, Where Used 查询)

#### 3.2 Dynamic Execution Logic (动态执行逻辑)

- 动态选择 (Equipment, Recipe, Reticle, EDC Plan)
- Virtual Site & 原材料 Turnkey 管理 (虚拟工序)
- NPW Flow Modeling (Prepare, InUse, Recycle, DownGrade)
- Branch/Rework Plan & Q-Time Cross-Flow 管理 (Dynamic Branch, Future Hold 继承)

### 4. WIP Management (在制品管控)

支持批次 / 晶圆级追踪、RunCard 体系、特殊操作及全流程生产管控:

#### 4.1 Lot Tracking & Basic Operations (批次追踪与基础作业)

- Lot Create/Wafer Start (手动 / 自动、ERP/WMS 集成、FOSB->FOUP 自动 Sorter, T7 Code 识别)
- Track In/Out (By Batch/Lot/Wafer)
- 特殊操作 (Split/Merge, Hold/Release, Skip, Back Operation)
- Future Action (Future Hold/Skip/Split/Merge)
- Dynamic Branch & Flow 变更 (Auto/Manual Reassign, Outsourcing Process Linkage)

#### 4.2 Exception Handling & Traceability (异常处理与追溯)

- Rework 管理 (Inline/BankIn/StockIn/Customer 退回, 自动触发 RRC)
- Scrap/Unscrap & Terminate/Unterminate
- ETC 管理 (Lending/Borrowing, OA/ERP 集成)
- Die Lot 管理 & No-Wafer-Lot 操作 (Die Bank 管理)
- Wafer Level 追溯 (BinGrade, Map, Defect Review)
- RunCard 管理系统 (Split/Recovery/Nested/Future RunCard, 签核集成, Full Auto 支持)
- Pi-Run 管理 (APC Pi-Lot, On Demand Pi-Lot Logic)

### 5. Quality & Engineering Control (质量与工程管控)

支持数据采集、图形化 OCAP、精细化取样、CP 判定及防错机制:

#### 5.1 Data Collection & Analysis (数据采集与分析)

- 数据采集 (EDC) (Manual/Auto/File Mode, 自定义公式)
- OCAP 管理 (图形化执行, 签核集成, Inline/Off-Line/Wafer Test 分类, RAC Format)
- Sampling 规则 (Production/YE/Wafer Sampling, Key Tool/Long Time No WIP, Step Sampling)
- Wafer Selection 规则 (NearestUp/Down, Ignore Slot, Same As Before)

#### 5.2 Process Control & Interlock (制程控制与互锁)

- Q-Time 管控 (Max/Min, Nested/Cross-Flow, Auto Action Trigger)
- Tool Constraint & Qualification (Binding, Run-card, Daily/Total Count)
- Recipe Inhibit & Auto Monitor (Idle Time, Season, Pre/Post Measurement, Cycle Control, Monitor Flow Definition)
- 制程条件与污染等级管控 (FE/BE Exchange)
- CP Wafer Judgement System (原始数据加载、规则判定: Yield/Bin/Stat, 策略维护, WJS 集成)

### 6. Resource & Material Management (资源与物料管理)

支持载具、光罩、化学品全生命周期、治具计米及 BOM 耗用管理:

#### 6.1 Carrier & Reticle Management (载具与光罩管理)

- Carrier 管理 (FOUP/FOSB/Pod, Cleaning/Inspection 状态, 污染管控, MCS 位置同步)
- Reticle 管理 (LifeTime/Energy Accumulation, Field 设定, Kit/UnKit, Inspection/Clean 周期, Stocker 集成)

#### 6.2 Chemical & Consumable Control (化学品与耗材管控)

- Photo Resist 管理 (退冰、时效 / 过期、PR 更换、安全库存预警、批次认证)
- Consumable & Durable 管理 (Timer, BOM 绑定, Kit/UnKit, Meter Counting, DPS Blade 管理)
- Runtime Consume (Auto/Manual Consumption, 可用物料检查, BOM 运行时绑定)
- Label 打印集成 (Lot/Carrier/Wafer/Material 级别, Multi-level Label Template)

### 7. Production Support & Advanced Modules (生产支持与高级模块)

支持全自动生产、测试线、Micro OLED、先进封装及 Turnkey 业务:

#### 7.1 Automation & General Production (自动化与通用生产)

- Full Auto Support (Auto 1/2/3, Dispatch/Transport/Equipment 集成)
- Season 管控 (Idle/PM/Recipe Change, Mixed NPW/PW Mode)
- NPW 管理 (降级、回收、库存、Full Auto 准备)
- 安全管理 (数据级权限、超时、审计追踪)
- Turnkey 解决方案 (多阶层 BOM, Cross-Fab 生产, Outsourcing Linkage)

#### 7.2 Test, Packaging & Specialized Modules (测试、封装与专用模块)

- CP Test Line & Probe Card 管理 (Program, Touch Down, YMS 集成)
- Wafer Judgement System (原始数据加载、规则判定、策略、WJS 集成)
- Wafer Map 模块 (解析、合并 / 比较、旋转 / 镜像、Manual Ink)
- Lab Product Tracking (Experiment Start/End, QE 结果、TQMS 集成)
- Matching Sorter & ODF Bonding (Pre-sorting, Slot/FOUP Matching, Debond)
- Micro OLED 专用功能 (Continuous Run, EVA Mask, Frame/Tray, Die PnP)
- Wafer Bonding 模块 (WoW/WoG, Pre-Bonding/De-Bonding, Mapping Traceability)
- Die Attach 模块 (DoW, Substrate/Die Matching, EAP 上报追溯)
- DPS Pick and Place (Die Count, 重构 Wafer, 二次拾取, Blade 寿命管理)

## MES Phase

| 子项           | 核心内容 / 关键问题                                                                                                             |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 产品和工艺流程 | flow 工艺步骤数量，光刻层数，EDC 量测点数量级.污染等级 /Qtime/rework 管理要求                                                   |
| 设备管理       | 各类型设备大类有哪些，litho，chamber，CMP，炉管，量测，bond/debond，sorter，stk，OHB，NTB，N2，foupclean 等.状态 /Loadport 管理 |
| 载具管理       | 载具类型，形态，识别方式 (条码，RFID)，Opencst/pod?是否有特殊槽位数量或者其他要求                                               |
| WIP/Lot 管理   | 下线投片方式 (手动 /STK 自动)，Tracking，出货标签，不同产线间流转方式                                                           |
| NPW 管理       | Dummy，Monitor，Season 管控                                                                                                     |
| 备品或物料管理 | Parts 管理，Rawwafer/EPI/ 封装线 BOM 管理                                                                                       |
| 工艺制程管理   | PMS，Constraint，选片规则，Reticle，光阻，Runcard，OCAP 等管理                                                                  |

尤其针对 Auto3 的时候有 NPW 管理 rule

因为非单 FAB, 除了常规 Parts 外还要有 BOM 管理

MOXA 布点, 弱电, 拿到 Tool list 后就可以确认

# SPC

## SPC Terminology

| Abbreviation | Full form                    | Desc             |
| :----------- | :--------------------------- | :--------------- |
| SPC          | Statistical Process Control  | 统计过程控制系统 |
| Cp           | Process Capability Ratio     | 过程能力指数     |
| Cpk          | Process Capability K Ration  | 过程能力 K 指数  |
| Pp           | Process Performance Ratio    | 过程绩效指数     |
| Ppk          | Process Performance K Ration | 过程绩效 K 指数  |

> Note:
>
> 若 MES 里勾选 SPC Flag, 则根据 SPC 设置的 OOS/OOC Rule 来触发
>
> SPC 内不仅有 MES 传来的 SPC Chart 参数, 还有温度, 压力等参数
>
> SPC 会返回 OCAP Flow Number 给 MES, 但 OCAP 规则由 MES 定义 (包括 wafer 完整性校验规则) , 所以即使是 small lot 也会触发 OCAP

1. Cp, Cpk, Pp 和 Ppk 概念

    Cp, Cpk, Pp 和 Ppk 都是用来体现过程能力的指标, 它们是用来测量过程能力的指数(process capability index), 不是过程能力本身.

2. 过程能力的定义

    过程能力是指过程本身在没有外因干预、没有漂移(drift)(即统计学意义上可控 under statistical control)的情况下其产出品的均一程度(uniformity of product). 不难理解, 我们不可能直接测量过程本身, 而只能通过测量其产出品的某个特性来体现其能力. 通常用被测量的特性的离散程度, 即标准方差, (西格玛), 来表示过程能力. 而且过程能力被量化为 , 即其总宽度为 6 个西格玛.

    e.g. A 过程的西格玛=2, 其过程能力=`6*2=12`. B 过程的西格玛=2.5, 其过程能力=`6*2.5=15`. A 过程和 B 过程那个好呢?答案是: 视情况而定(it depends). 为什么?因为没有判断标准.

3. 衡量过程能力的指标的定义与计算公式

    过程能力的定义与产品的可接受标准(specifications)无关. 可是抛开产品的可接受标准, 单纯地讲过程能力, 又毫无意义. 这就是为什么人们要引入"过程能力的指标(Cp, Cpk, Pp 和 Ppk )"这些概念.

    Cp, Cpk, Pp 和 Ppk 这些指数是过程能力和可接受标准比较的结果, 也被称为过程能力比率(process capability ratio). 笔者更倾向于使用过程能力比率, 因为它直观. 另外这些概念的计算都引入了标准方差或西格玛, 因此它们都是统计学意义上的概念, 也正是如此它们都没有单位.

4. Cp, Cpk, Pp 和 Ppk 的异同点
    1. 有 k 指数(Cpk 和 Ppk)和没 k 指数(Cp 和 Pp)的区别:

        没 k 指数(Cp 和 Pp)只显示过程的产出品的离散程度和可接受标准的关系

        有 k 指数(Cpk 和 Ppk)除了显示过程的产出品的离散程度和可接受标准的关系外, 还关注过程的产出品的均值是否偏离可接受标准的中间值

        其数学关系是: 有 k 指数永远不大于没 k 指数

    2. 过程能力指数(Cp 和 Cpk)和过程绩效指数(Pp 和 Ppk)的区别:
        - 过程能力指数(Cp 和 Cpk)表示的是过程在稳定状态下能使其产出品达到可接受标准的程度的指标, 也可以理解为过程的"潜在"能力. 因为 Cp 和 Cpk 体现的是稳定状态下过程的潜在能力, 因此 Cp 和 Cpk 可以用来预测该过程将来在现有过程条件下的最好的情况.

        - 过程绩效指数(Pp 和 Ppk)则是过程在过去某个观察时段内的实际绩效, 即是该过程的已经产生的产出品实际达到可接受标准的情况. 由于 Pp 和 Ppk 是体现过程在过去的某个时段的绩效, 所以 Pp 和 Ppk 被称为"过程绩效指数". 也正因如此, Pp 和 Ppk 仅代表过程过去的情况, 并不能用来预测过程将来的状态.

## SPC interview

### 1.【概念】SPC 在 CIM 中的位置?与 FDC, APC, MES 的分工?

- **SPC**:量测结果的 "统计裁判" —— 对 CD、膜厚、Rs, Overlay 等 **量测结果数据** 做统计监控,判异 (OOC) 与判合格 (OOS),触发 Hold/OCAP
- **FDC**:设备 **传感器过程数据**(温度、压力、RF、气体流量) 的实时故障侦测 —— SPC 看 "做出来的结果",FDC 看 "做的时候设备的状态",这是经典边界
- **APC**:R2R 闭环主动调参;SPC 是 APC 的数据源与效果裁判 (调完有没有稳住,看 SPC Chart)
- **MES**:账料与流程中枢;量测数据随 Track-Out 经 MES 进 SPC,**MES 勾选 SPC Flag 后按 SPC 设置的 OOS/OOC Rule 触发**;SPC 返回 **OCAP Flow Number** 给 MES,OCAP 规则由 MES 定义 (所以 small lot 也会触发 OCAP)

一句话:EAP 采集与控制、FDC 侦测拦截、SPC 统计监控、APC 主动调控、MES 管账料与流程.

### 2.【概念】OOC 与 OOS 的本质区别?处置有何不同?

- **OOC(Out of Control)**:超 **管控线**(术语表定义如 [-99.5, 100.5]),判的是 **过程是否稳定** —— 点可能还在规格内,但统计上已异常 (漂移、趋势、异常散差)
- **OOS(Out of Spec)**:超 **规格线**(如 [-99, 101]),判的是 **产品是否合格** —— 直接关系这批货能不能走

处置差异:OOC → 过程预警,触发 OCAP, Hold 机台 /Recipe,重点查过程;OOS → 产品处置 (复测、隔离、报废评估),重点圈货.**OOC 常早于 OOS 出现,这正是管控线的预警价值**;两者判定轴独立,可能 OOC 但未 OOS(提前拦截成功),处置链条不同但都要留痕.

### 3.【概念】Cp/Cpk/Pp/Ppk 的区别?

| 指数 | 类型            | 关注点                          | 用途                      |
| :--- | :-------------- | :------------------------------ | :------------------------ |
| Cp   | 能力指数 (潜在) | 只比离散程度与规格宽度          | 过程稳定时的潜在能力上限  |
| Cpk  | 能力指数 (潜在) | 离散 + **均值是否偏离规格中心** | 预测现有条件下最好情况    |
| Pp   | 绩效指数 (实际) | 只比离散程度与规格宽度          | 过去某时段实际表现        |
| Ppk  | 绩效指数 (实际) | 离散 + 均值偏移                 | 过去实际绩效,不能预测未来 |

**关键考点**:**有 k 指数永远不大于没 k 指数**;Cp/Cpk 的前提是过程 **统计受控**(无判异),过程不受控时算 Cpk 没意义,应看 Ppk.

### 4.【概念】控制限、规格限、报警限、接收限有什么区别?

系统支持 **Control Limit / Spec Limit / Alarm Limit / Acceptance Limit** 四类界限的上下限及中心线设定:

- **Spec Limit**:来自产品设计 / 客户要求,判合格 (OOS),工艺 / 质量定,SPC 不能擅自改
- **Control Limit**:来自过程自身数据 (3σ),判异 (OOC),反映过程实际能力
- **Alarm Limit**:预警线 (如 2σ),只通知不 Hold,提前介入
- **Acceptance Limit**:特殊场景接收判定用

**关键考点**:控制限 ≠ 规格限.拿规格线当管控线用是新手最常见错误 —— 规格线宽于过程波动时,过程早就漂移了但你永远显示 "合格".

### 5.【概念】量测数据从哪些渠道进 SPC?

多源数据收集,覆盖 Inline, Offline 及厂务环境:

- **Inline 自动**:工艺设备 Inline 数据随 Track-Out 经 MES/EAP 接口实时进,95% 以上 EDC 任务 5 秒内完成处理
- **Offline**:设备日常点检数据、量测设备 **校准(Calibration)数据**
- **测试与来料**:WAT, CP、进料 Incoming(Sub/EPI/ 化学品等)
- **环境与实验室**:无尘室监控 (Particle/ 温湿度 / 纯水)、微污染测试
- **手动兜底**:手工录入 EDC 数据界面,支持 Lot/Non-Lot 数据
- **By Wafer 级采集**:支持单片级别数据,支撑片间与 Chamber 间分析

### 6.【概念】MES 过站时 SPC 怎么介入?会卡住生产吗?

- MES Lot 勾选 **SPC Flag** → Track-Out/Operation Completion 时数据送 SPC,**即时返回结果**
- **同步阻塞机制**:MES 过站需 SPC 收集时,支持 **等待 SPC 结果后再继续处理 Lot 或设备** —— 判异当场拦截,不让问题 Lot 往下流
- 性能保障:95% 以上 EDC 任务 5 秒内完成,阻塞代价可控
- 判异后:按结果自动启动 **Hold Lot、Hold Meas. Eqp、Hold Proc. Eqp** 等动作

**考点**:同步阻塞 vs 异步通知的取舍 —— 关键站位 (如 Litho CD) 同步阻塞,一般监控站位异步通知即可,别把全厂过站都卡在 SPC 上.

### 7.【规则】判异规则体系有哪些?怎么配?

- **标准规则集**:支持 SPC 9 大标准 Rule, Western Electric(WECO)Rules, Nelson Rule 参数模式,共 **60 种以上 SPC Rules**
- 经典 WECO 思路:单点超 3σ、连续 2/3 点超 2σ/1σ 同侧、连续 9 点中心线同侧、6 点连续上升 / 下降 —— 分别抓 **突跳、偏移、分层、趋势**
- **Sigma 独立计算**:上 3σ=(UCL-CL)/3、下 3σ=(CL-LCL)/3 分开算,避免偏态过程被对称管控误判
- 配置友好:**无代码调参**;规则按 **Rule ID / Rule ID+Chart Type / Rule ID+Chart Type+Spec** 多粒度维护变更
- 实践:不要规则全开 —— 每多开一条虚警率就累加;按参数风险分级,关键参数开 3-4 条,一般参数只开单点超 3σ

### 8.【规则】OOC 触发后系统做什么?

按 **Spec+Rule 颗粒度** 配置的分级响应链:

1. **通知**:客户端消息、SMS、邮件、TTS 语音,收件人与内容可自定义;Rule Out 自动触发 Alarm 并在 SPC/MES 客户端提示指定用户
2. **自动 Action**:违规自动触发 **Lot Hold、Equipment Hold**(通过 MES/EAP 执行);量测 OOC/OOS 还支持 **Hold Recipe、Hold PPID 或 Hold 机台**
3. **OCAP 联动**:按 Plan/Spec 设置 **OCAP Type ID**,违规自动创建 OCAP Process 并执行默认 Action(如 Lot Hold),OCAP Flow Number 返回 MES 走处置流程
4. **留痕**:数据点备注、操作历史全程记录

设计原则:**先卡控后通知** —— Hold 是系统自动做的,人是被通知来处置的,不靠人盯 Chart.

### 9.【Chart】控制图怎么选型?

| 图类型                   | 适用                     | 典型场景                             |
| :----------------------- | :----------------------- | :----------------------------------- |
| I-MR(Raw/MR)             | 计量型,单值 (子组=1)     | 每 Lot 只测 1-2 片的膜厚、Rs         |
| Mean-Range / Mean-StdDev | 计量型,子组 ≥2           | 一片测多点 (片内均匀性)、一 Lot 多片 |
| EWMA(M/S/R)              | 计量型,加权历史          | 抓缓慢小漂移 (APC 调参后监控)        |
| MA/MS                    | 计量型,移动平均          | 平滑噪声看趋势                       |
| np / n 图                | 计数型,不良数 / 不良率   | 外观检验不良、Test Bin 不良率        |
| c / u 图                 | 计数型,缺陷数 / 单位缺陷 | Particle 计数、缺陷密度              |

系统计量型支持 Raw/Mean/Range/StdDev/MA/MS/MR/EWMA/Sigma Charts,计数型支持 Attributive Chart(n/np/c/u),还可按质量部门规则自定义.**选型原则**:先看计量还是计数,再看子组大小,最后看要抓突变 (3σ 规则) 还是缓变 (EWMA).

### 10.【Chart】Chart 按什么维度分组?多机台多腔体怎么管?

- **Context 动态分图**:按数据携带的 Context(Tool/Chamber/Recipe/Product) 自动拆分 **Sub Chart**;Sub Chart 支持 **继承上层 Control Limit/Rule 或单独配置** —— 新增 Chamber 不用人工建 Chart
- **组合命名规则**:[Module]+[产品]+[工艺路线]+[Plan Name]+EDC 项目 /Spec ID 自定义组合,配合文件夹分组管理
- **Context 定义 Chart**:可指定只收某 Context Value 数据,或包含 / 排除特定 Value
- **叠图对比**:同一 Spec Limit 下不同 Chamber 或 Tool 数据叠图,直观做 Chamber Matching

**考点**:不分组全合在一张 Chart 是虚警重灾区 —— 两台机台均值差 1σ,合图后 "连续 9 点同侧" 必爆.先分图,再谈规则.

### 11.【Chart】PM 后数据怎么处理?为什么不能和 PM 前的点混在一张图?

设备 PM 后状态与 PM 前有系统性差异 (换件、清腔后首 Run),混在一起会污染控制限计算并触发误判:

- **PM 数据隔离**:PM 后的点 **分开进 Chart,不参与原 Chart Alarm Rule 计算**
- **特殊状态独立管控**:Offline Monitor, MON_PM, MON_DOWN、**Pilot Inline Measurement** 等状态下的 Lot 用单独 Control Limit 管控 (如放宽到 2σ)
- PM 后首批确认稳定 → 数据回归正常 Chart;确认期长的可结合 Auto Flag 排除出 Cpk 统计

呼应 FDC 的 **PMQA** 概念:FDC 管 PM 后设备过程参数确认,SPC 管 PM 后量测结果确认,两边都过了才放量产.

### 12.【Chart】控制限怎么生成与收紧?为什么要签核?

- **动态计算(Auto Limit)**:支持用选定数据的 3σ 计算新 Control Limit,筛选条件可为 **时间范围或数据点个数** —— 新 Chart 上线初期数据少先宽管,数据累积后定期重算收紧
- **定期评审**:季度 / 半年评审,过程改善后收紧控制限保持 Chart 敏感度;收紧以新版本生效,不回改历史点
- **SPACE API 签核**:对接厂内签核系统,**修改 Control Limit / SPC Rule / Corrective Action 必须经过传签** —— 控制限是判异基准,谁都能改等于没有管控
- 批量维护:支持批量修改 Spec Limit/Control Limit/Alarm Rule,批量导入新增 / 修改 Chart

**考点**:控制限变更 = 管控标准变更,必须留痕可追溯 (谁、何时、旧值新值、签核单号).

### 13.【公式】公式计算引擎能做什么?举例 Uniformity.

- **多源因子引用**:支持引用当前 Plan 内 / 外 Spec、外部 Plan 公式作因子,支持引用多个 Spec 计算
- **内置函数**:ABS/EXP/MOD/POWER/ROUND、三角函数;聚合函数 MIN/MAX/AVG/MED/SIGMA
- **自身数据计算**:典型如片内均匀性 **Uniformity=(Max-Min)/2Mean** —— 一片测 9 点,直接算出派生参数进 Chart 管控
- **变更自适应**:因子 Spec 的 Product 变更、因子前后 Wafer 被替换时按匹配关系正常计算
- 可扩展:配置方式使用内建公式,提供开发包自定义新公式

价值:很多关键管控参数是 **算出来的**(均匀性、刻蚀速率、Delta 值),公式引擎让派生参数也能走完整的 Chart+Rule+OCAP 链路.

### 14.【前道】前道 SPC 的关注点?

- 参数:CD, Overlay、膜厚、Rs、刻蚀速率、Particle —— 计量型为主,**By Wafer 级采集** 支撑片间分析
- **Chamber Matching**:同 Recipe 多 Chamber 叠图对比,抓腔体间系统性偏移
- 与 APC 联动:APC R2R 调参效果由 SPC Chart 验证 (均值是否回到 Target, EWMA 是否收敛);边界要清 —— APC 管动态偏移,SPC 管监控判异,数据同源职责不同
- 与 FDC 互证:CD OOC 时先查 FDC 同时段设备传感器有无异常,量测结果与过程数据互相印证
- Litho CD 等关键站位走 **同步阻塞**,OOC 当场 Hold 不流站

### 15.【后道】后道 SPC 与前道有什么差异?

- 参数形态不同:推拉力 / 剪切力 / 共面性 / 胶厚 —— 量测少而关键,很多是 **破坏性抽测**,样本天然小
- **计数型图占比高**:外观检验不良 (np/n 图)、缺陷密度 (c/u 图)、Test Bin 不良率
- 追溯粒度细到 Die/Strip 级;CP/FT 测试数据量大,进 SPC 做趋势监控
- **Incoming 来料管控**:Sub/EPI/ 化学品等进料数据建 Chart,供应商批次间差异叠图对比
- 换型频繁 → 更依赖 Spec Template 模板化 + Context 按产品分图

### 16.【全产品】逻辑 / 功率 /CIS/ 化合物家族参数差异巨大,SPC 怎么统一管?

- **统一的是引擎**:规则库、Chart 引擎、OCAP 联动、签核流程全家族共用
- **差异化的是配置**:按产品家族建 Spec Template 与 Chart 分组 —— 功率关注 Rs/ 击穿电压,CIS 关注暗电流 / 缺陷密度,化合物关注翘曲 / 外延厚度,各自选型与限值
- **Context 过滤**:By Lot Type, Product, Flow 等维度过滤与分析,家族间数据天然隔离
- 跨家族不追求同构,各自建 Chart 体系;报表层按 Group 汇总 (周期统计报表按日 / 周 / 月 / 季 / 年,Group Daily 导出 PPT/PDF)

### 17.【2-12 寸】老量测设备没有自动接口,数据怎么进 SPC?

务实分层:

1. **能自动的全自动**:新量测机台 (12 寸 CD-SEM/Overlay) 走 EAP/MES 接口 Inline 实时采集
2. **半自动**:老设备 RS232 走 MOXA 串口转网,或产出结果文件走文件导入;有数据库的直连轮询
3. **人工兜底**:无接口设备走 **手工录入 EDC 界面**(Lot/Non-Lot 都支持),扫码辅助减少录入错误
4. **数据质量管控**:手动录入二次确认;**离散规格过滤** 在接收数据时自动滤掉超限离散点 (数量级录错直接拦截)

原则:**先卡控后自动化** —— 哪怕手动录入也要先让数据进 Chart 接受判异,自动化程度再逐步提升.

### 18.【中试线】中试线 Run 少样本小,控制限算不稳怎么办?

小样本是中试线 SPC 的第一难题,务实分层:

- **短期(数据 <25 点)**:用 Spec Limit 内缩或工程经验固定限先管起来,只开单点超 3σ 规则 —— 宁宽勿漏
- **中期**:数据累积后用 **动态计算**(按时间范围或数据点个数取 3σ) 重算,Auto Limit 定期评审逐步收紧
- **借力**:同平台产品数据合并计算,或引用历史 / 理论 σ
- **特殊状态借力**:Pilot Inline Measurement 等状态走单独限 (如 2σ),试运行阶段不污染正式 Chart
- 心态:中试线 SPC 第一目标是 **抓重大异常**,不是追求 Cpk 达标 —— 阶段目标不同,别把量产的 1.33 考核套在研发批上

### 19.【中试线】产品换型频繁,每个产品数据都不够单独建 Chart,怎么办?

- **Context 动态分图**:一个 Plan 按 Product/Recipe 自动拆 Sub Chart,继承上层限或单独配置,换型新增产品零配置成本
- **Group Chart / 标准化**:同族产品用 **相对值控制** —— 对 Target 的偏差 (x-Target) 或标准化值 (x-Target)/σ 进图,多产品共享一张 Chart,缓解样本量问题
- **Spec Template 模板化**:同族产品共用模板,配合批量导入工具新增 / 修改 Chart、控制规格及 Rule 设置
- 组合命名规范 ([Module]+[产品]+[工艺路线]+[Plan]+Spec ID),保证 Chart 可查可管、数量不爆炸

### 20.【中试线】实验批数据要不要进 Chart?怎么隔离?

要进 (留痕可追溯) 但不能污染判异与能力统计,三层隔离:

1. **Auto Flag 接口**:实验批数据自动 Flag,**进 Chart 但不计入 Cpk 统计**、不参与控制限计算
2. **特殊状态管控**:Pilot Inline Measurement / MON_PM 等状态用单独 Control Limit,实验批走专用限
3. **Context 隔离**:按 Lot Type 过滤,实验 Lot 与量产 Lot 分图或分视图;个别异常点可手动过滤 (隐藏且不计入制程指标及管控界限计算)

原则与 RMS 的 Under Control/Not Control 一致:**实验与量产分区,但都在系统内受控**,不允许 "线下搞".

### 21.【中试线】SPC 的 Chart 定义、Rule、控制限要调整,怎么安全上线?

- **非侵入式变更**:修改 Chart 定义 **不影响正在进行的数据收集**;基础数据修改需 **发布/生效后才作用** 于收集过程 —— 改配置不打断生产
- **Pilot 验证**:新规则 / 新 Chart 先在个别产品、个别机台 Pilot,验证虚警率与拦截效果,未参与部分完全不受影响
- **批量导入工具**:大批量 Chart 建设用工具批量导入,避免手工逐条出错
- **签核兜底**:Control Limit/SPC Rule/Corrective Action 变更走 SPACE API 传签;版本留档可回滚

上线 checklist:测试环境验证 → Pilot → 评审虚警率 → 签核发布 → 观察期 → 全量推广.

### 22.【场景】OOC 报警后,从报警到 Release 的完整处置流程?

1. **自动卡控(系统)**:Rule Out 触发 → 自动 Lot Hold / Equipment Hold / Hold Recipe/PPID → 创建 OCAP Process,多级通知责任人
2. **先怀疑尺子,再怀疑工艺**:查量测机台校准状态 (Calibration 数据)、复测验证、排查录入错误 —— 确认数据有效性
3. **分层排查根因**:量测无问题 → 查 FDC 同时段设备传感器有无异常 → 查 RMS 侧 Recipe/EC 有无变更 → 查同 Chamber/Tool 其他点是否同步异常 (叠图对比、Context Matching 比较分析)
4. **产品处置**:按时间范围+Context 检索圈定受影响 Lot,复测 / 评估 / 隔离
5. **Release**:根因明确 + 纠正措施生效后按 OCAP 流程签核放行;数据点备注处置结论,全程留痕

原则:**先保生产再排障**(该 Hold 先 Hold,该分流先分流),一切变更留痕可追溯.

### 23.【场景】Cpk 只有 1.1(<1.33) 但 Chart 上没有任何违规点,怎么解读?

这是 "稳定但能力不足" 的典型场景:

- **无违规点** = 过程统计受控 (无特殊原因变异);**Cpk 低** = 普通原因变异太大,或均值偏离规格中心
- 拆 Cp 与 Cpk 看:Cp 尚可但 Cpk 明显低 → **均值偏移问题**,对策是对中 (调 Target,联动 APC/RMS 基线);Cp 本身就低 → **离散问题**,对策是降 σ(设备精度、来料、工艺窗口)
- **禁忌**:不能靠放宽规格或收紧控制限来 "解决" —— 控制限管稳定性,管不了能力
- 行动:这是工艺改善课题 (DOE/ 设备升级),不是 SPC 配置课题;短期加 Alarm Limit 提前预警,长期改善落地后收紧控制限

**追问**:如果所有点都紧贴中心线、Cpk 还是低,说明什么?(σ 相对规格太宽,或 σ 被高估 —— 检查控制限计算样本是否混入了多机台 / 多批次数据)

### 24.【场景】量测数据迟到 (接口故障 / 手动录入延迟),Lot 放行后才触发 OOC,怎么处理?

处置:

1. **数据回补**:迟到数据进系统后重新判异,Chart 自动补点
2. **误放追溯**:回补后触发 OOC → 按时间范围+Context 检索受影响 Lot,已流站的追回 Hold,已出货的启动客户风险评估
3. **反向场景**:因数据缺失被误 Hold 的 Lot,确认数据正常后走 OCAP Release,备注留痕

预防:

- 关键站位启用 **同步阻塞机制**(MES 等 SPC 结果再放过站),从机制上杜绝 "先放后判"
- 接口监控:数据未按时到达本身也算异常,联动 AMS 告警通知 IT/ 设备
- 手动录入工位定 SOP(量测完限时录入),录入延迟纳入管理

### 25.【场景】OOC 报警泛滥,产线已经麻木不看报警了,怎么治理?

报警泛滥 = SPC 信誉破产,分层治理 (与 FDC 误报治理同思路):

1. **控制限问题(最常见)**:小样本算的 3σ 太窄 → 动态计算重算;PM 前后混图 → PM 数据隔离;多 Chamber 合图 → Context 分图
2. **规则配置问题**:WECO 全开虚警叠加 → 按参数风险分级,关键参数开 3-4 条,一般参数只开单点超 3σ
3. **数据质量问题**:录入错误、异常离散点 → 离散规格过滤 + 录入校验
4. **通知分级**:按 Spec+Rule 颗粒度配通知 —— 判异才 Hold+ 强提醒,预警只进仪表板,避免每条都轰炸
5. **指标监控**:用数字仪表板盯最近两周 **OOC%/OOS% Bar Chart**,OOC 率本身超标就是治理信号;定期评审报警记录,关闭长期无动作的报警

目标:让每条报警都值得有人来处理.

### 26.【软技能】PE 抱怨 "控制限太紧,三天两头 Hold 我的设备,能不能放宽点?",怎么应对?

- 先查数据不站队:拉该 Chart 的 OOC 记录,看是 **真异常多** 还是 **虚警多** —— 真异常多说明过程确实不稳,放宽控制限是掩耳盗铃;虚警多说明限算得有问题,该重算
- 分层处理:虚警问题走技术通道 (重算限 / 分图 / 调规则);真漂移问题反弹给工艺 —— 那是改善课题,不是限的问题
- 底线:**控制限变更必须走签核**(SPACE API 传签),任何人口头要求都不直接改;数据说话,把 OOC% 与对应的报废 / 返工记录摆出来
- 给替代方案:用 Alarm Limit 做预警层给他提前量,而不是直接放宽 Control Limit

### 27.【软技能】SPC 工程师最重要的三个能力?

**统计功底(判异规则/控制限/能力指数的正确理解与场景化选型,不被教科书绑架)、数据链路理解(量测数据从机台到 Chart 的全链路,知道每个环节会怎么坏)、平衡艺术(中试线灵活与量产管控的平衡、报警敏感度与产线信任度的平衡)**.

## SPC Function List

### 1. 数据采集与集成

#### 1.1 多源数据收集

支持全方位的生产与量测数据采集, 覆盖 Inline, Offline 及厂务环境数据.

- **工艺与设备数据**: 支持工艺设备 Inline 数据、设备日常点检 (Offline) 数据、量测设备校准 (Calibration) 数据采集.
- **测试与来料数据**: 支持 WAT, CP、进料 Incoming(Sub/EPI/ 化学品等) 数据收集.
- **环境与实验室数据**: 支持无尘室监控 (Particle/ 温湿度 / 纯水等) 及实验室数据 (微污染测试等) 采集.
- **手动录入**: 提供手工录入 EDC 数据界面, 支持手动输入 Lot/Non-Lot 数据.
- **Wafer级采集**: 支持 By Wafer 级别的数据收集.

#### 1.2 数据管理与维护

支持高效的数据存储策略及灵活的导出功能.

- **生命周期管理**: 配合硬件存储容量配置数据最长保存时间, 提供过期数据清理脚本, 保障系统性能不随时间下降.
- **批量导出**: 支持一个或多个 Chart 的 SPC 数据和原始数据的批次导出 (Excel/CSV/PDF).
- **MES集成查询**: MES 中可查询 SPC 测量的 Raw Data 并支持 Excel 导出.
- **非侵入式变更**: 修改 Chart 定义不影响正在进行的数据收集;基础数据修改需发布 / 生效后才作用于收集过程.

### 2. SPC 核心引擎与性能

#### 2.1 实时统计管制

支持高性能的在线 SPC 计算与即时响应.

- **实时响应**: Online SPC 在 Track-Out/Operation Completion 时即时返回结果, 95% 以上的 EDC 任务在 5 秒内完成所有处理.
- **同步阻塞机制**: MES 过站需 SPC 收集时, 支持等待 SPC 结果后再继续处理 Lot 或设备.
- **自动处置动作**: 根据 SPC 结果自动启动 Hold Lot, Hold Meas. Eqp, Hold Proc. Eqp 等动作.
- **Context动态分图**: 支持根据收到的数据 Context 信息自动拆分 Sub Chart 管控;Sub Chart 支持继承上层 Control Limit/Rule 或单独配置.

#### 2.2 公式计算引擎

支持复杂的跨 Plan、跨 Spec 数学运算与因子引用.

- **多源因子引用**: 支持引用当前 Plan 内 / 外 Spec、外部 Plan 公式作为因子;支持引用多个 Spec 进行计算.
- **内置数学函数**: 支持 ABS, EXP, MOD, POWER, ROUND, Cp/Cpk 等数学公式及 SIN/COS/TAN 等三角函数.
- **聚合统计函数**: 支持对因子 Spec 获取 MIN, MAX, AVG, MED, SIGMA 等数值参与计算.
- **自身数据计算**: 支持基于自身数据的公式计算, 如 Uniformity=(Max-Min)/2Mean.
- **变更自适应**: 支持 Formula 计算时应对因子 Spec 的 Product 变更;支持因子前后 Wafer 被替换时按匹配关系正常计算.
- **可扩展性**: 采用配置方式使用内建公式, 提供开发包及培训帮助用户开发新公式.

### 3. 图表可视化与交互

#### 3.1 多样化图表类型

支持全面的计量型与计数型控制图.

- **计量型图表**: Raw, Mean, Range, StdDev, MA, MS, MR, EWMA(M/S/R), Sigma Charts.
- **计数型图表**: Attributive Chart (n, np, c, u chart).
- **自定义图表**: 支持根据质量部门制定的规则产生其他类型 Chart.
- **叠图对比**: 支持同一 Spec Limit 下不同 Chamber 或 Tool 数据叠图对比.

#### 3.2 图表显示与定制

支持丰富的统计指标展示与个性化视觉配置.

- **统计指标显示**: 显示 Max, Min, Mean, Median, Range, StdDev, Total Count, OOC%, OOS%, USL/LSL, UCL/LCL, UAL/LAL, Target, Cp, Cpk 等.
- **多Chart同屏**: 支持单屏显示一张或多张 Chart, 并展示所有数据点相关信息.
- **Context区分**: 支持 Chart 中数据按附带 Context 信息区分显示.
- **坐标轴调整**: 支持横坐标按时间 /Context 格式调整;支持纵坐标根据数据 / 管控线调整比例.
- **颜色管理**: 自定义控制线颜色及数据点在不同状态 (如 OOC) 下的颜色.
- **动态更新**: 支持 Chart 动态显示及更新;改变 Spec/Control 范围后, 新界限在新数据点进入时显示.

#### 3.3 数据点交互操作

支持精细化的数据点管理与标注.

- **手动过滤**: 支持手动过滤数据点, 过滤点在图中隐藏 / 显示且不计入制程指标及管控界限计算.
- **离散规格过滤**: 定义 Chart 离散规格, 接收数据时自动滤掉超限离散点.
- **备注说明**: 支持对单个或多个数据点进行备注说明.
- **详情查看**: 支持在 Chart 中显示所选数据点的统计值及 Context 信息.

### 4. 规则引擎与报警管理

#### 4.1 SPC 规则体系

支持标准化的判异规则及灵活的参数配置.

- **标准规则集**: 支持 SPC 9 大标准 Rule, Western Electric (WE) Rules, Nelson Rule 参数模式.
- **规则丰富度**: 支持 60 种以上 SPC Rules.
- **Sigma独立计算**: 上下 Sigma 分开计算, 上 3σ=(UCL-CL)/3, 下 3σ=(CL-LCL)/3, 避免非对称管控误判.
- **无代码调参**: 支持无需开发变更即可调整 Rule 参数.
- **多级版本管理**: 支持按 Rule ID, Rule ID+Chart Type, Rule ID+Chart Type+Spec 等多粒度维护变更.

#### 4.2 违规处置与通知

支持分级报警、自动化 Action 及 OCAP 联动.

- **多级Notify**: 支持客户端消息、SMS、邮件、TTS 语音等多种通知方式, 可按 Spec+Rule 颗粒度配置.
- **自动化Action**: 违规时自动触发 Lot Hold, Equipment Hold 等命令 (通过 MES/EAP 执行).
- **OCAP联动**: 支持根据 Plan/Spec 设置 OCAP Type ID;违规时自动创建 OCAP Process 并执行默认 Action(如 Lot Hold).
- **Recipe/PPID Hold**: 量测 OOC/OOS 时, 支持 Hold Recipe, Hold PPID 或 Hold 机台.
- **Rule Out报警**: 自动触发 Alarm 并通过 SPC/MES 客户端提示指定用户.
- **邮件报警**: 违反规则后发送邮件, 收件人与内容可自定义.

#### 4.3 PM 与特殊状态管控

支持设备维护后及特殊运行模式的差异化管控.

- **PM数据隔离**: PM 后的点分开进 Chart, 不参与原 Chart Alarm Rule 计算.
- **特殊状态独立管控**: 支持 Offline Monitor, MON_PM, MON_DOWN, Pilot Inline Measurement 等状态下 Lot 的单独 Control Limit 管控 (如 2σ).

### 5. Chart 配置与管理

#### 5.1 Chart 定义与组织

支持灵活的命名规则、分组管理及批量操作.

- **组合命名规则**: 支持[Module]+[产品]+[工艺路线]+[Plan Name]+EDC 项目 /Spec ID 等自定义组合命名.
- **文件夹分组**: 支持 Chart 按文件夹分组管理.
- **Context定义**: 支持通过 Context 信息定义 Chart, 指定只收某 Context Value 数据或包含 / 排除特定 Value.
- **手动建立**: 提供操作界面让用户手动建立 Chart.
- **批量导入修改**: 支持工具批量导入新增 / 修改 Chart、控制规格及 Rule 设置.
- **EDC关联管理**: 支持 SPC Chart 与 MES EDC Spec 关联查询, 批量同时新增 / 修改.

#### 5.2 控制界限管理

支持多种界限设定、动态计算及签核流程.

- **多类界限**: 支持 Control Limit / Spec Limit / Alarm Limit / Acceptance Limit 的上限、下限及中心线设定.
- **动态计算**: 支持使用选定数据的 3σ计算新 Control Limit, 筛选条件可为时间范围或数据点个数.
- **批量修改**: 支持批量修改 Spec Limit, Control Limit, Alarm Rule.
- **SPACE API签核**: 提供 API 对接厂内签核系统, 强制要求修改 Control Limit/SPC Rule/Corrective Action 等必须经过传签流程.

### 6. 数据分析与报表

#### 6.1 统计分析与仪表板

支持多维度的质量指标分析与交互式探索.

- **关键指标计算**: 支持 Cp/Cpk 等关键性指标实时计算.
- **数字仪表板**: 汇总最近两周 OOC/OOS/Cpk Bar Chart, 提供互动下钻 (Drill-down) 分析.
- **Context比较分析**: 支持根据 Context Matching 功能进行比较分析.
- **Auto Flag接口**: 支持通过接口对数据 Auto Flag, 进 Chart 但不计入 Cpk 统计.
- **统计值汇总**: 包含 Max, Min, Mean, Median, Range, StdDev, Count, OOC%, OOS%, Discrete Count 等.

#### 6.2 报表生成与导出

支持周期性统计报表及标准化格式输出.

- **周期统计报表**: 依照 Chart 分组, 按日 / 周 / 月 / 季 / 年创建统计报表.
- **Group Daily导出**: 支持 By Group Daily 导出 All Inline/Offline Chart, 格式为 PPT/PDF.
- **标准格式导出**: 支持 SPACE 自带报表导入 PDF, Chart 数据导出 Excel/CSV.
- **外部系统访问**: 提供连接方式支持外部系统访问 SPC Chart 和数据点.

### 7. 系统管理与安全

#### 7.1 权限与审计

支持严格的访问控制与操作追溯.

- **权限管控**: 提供完善的用户权限管理体系.
- **历史记录追踪**: 记录 Chart 设定修改、数据点备注标记等操作历史.
- **书签功能**: 支持将常用 Chart 和搜索条件存为书签.

#### 7.2 数据查询与检索

支持多条件组合搜索与灵活的结果展示.

- **Context过滤**: 支持 By Lot Type, Product, Flow 等多种 Context 过滤.
- **数据点搜索**: 支持按 Context 值、OOC/OOS, Comment、收集时间点等属性搜索, 可选列表模式或 Chart 列表模式显示.
- **Chart搜索**: 支持按 ChartName, ParameterName, Context 值、SPC Rule 等属性搜索 Chart.
- **实时查询**: 支持实时查询所有 SPC Chart 的数据信息.

# AMS

## AMS interview

### 1.【概念】AMS 在 CIM 中的位置?与 EAP / FDC / SPC / MES 的分工?

- **AMS**:全厂告警的 "统一入口 + 闭环管理"—— 聚合 EAP(设备 Alarm)、FDC(故障侦测)、SPC(OOC/OOS)、MES(业务异常)、PMS(PM 到期) 多源告警,统一分级、过滤、通知、升级、处置、关闭
- **EAP / FDC / SPC**:负责 "发现异常"(采集与侦测算法);**AMS** 不负责侦测,负责 "触达与闭环"—— 这条异常谁该知道、确认了没有、处理了没有
- **MES**:业务执行中枢,是 AMS 联动的执行端 (Hold Lot / Change EQP State / Hold Reticle/FOUP)

边界一句话:FDC/SPC 回答 "有没有问题",AMS 回答 "问题有没有人管".

### 2.【概念】告警生命周期与状态机?核心 KPI 是什么?

生命周期:**触发 → 通知 → 确认 → 处置 → 关闭**.AMS 状态机为 **Open → Closed / Terminated**,所有状态变更留痕、可追溯处理过程.

核心 KPI 是 **闭环率与 MTTR,不是告警数量**:

- 告警多不等于管得好,数量靠规则治理 (过滤 / 抑制 / 屏蔽) 压下来
- 闭环率衡量 "有没有真处理",MTTR 衡量 "处理得快不快"
- 看板按子系统分级统计告警数量 + 最近 20 条,10 秒自动刷新 (频率可配),是值班室的态势感知入口

### 3.【概念】五级严重等级怎么定?为什么分级是一切治理的前提?

AMS 支持为 Alarm Code 自定义五级:**Informational / Low / Medium / High / Critical**.分级依据:对生产的影响 (是否需要 Hold)、安全风险、处置时效要求.

分级是前提,因为所有机制都挂在级别上:

- 看板按严重等级分级统计
- 规则引擎的 Alarm Code Filter 可按 Severity 过滤
- 通知渠道与升级链按级分层 (Low 邮件,Critical 短信 + 企业微信)
- MES 联动口径:**Warning 级(含)以下只通知,Critical 才联动 Hold**

级别定错了,后面全错:定高了告警疲劳,定低了真事故没人理.

### 4.【概念】为什么说 Alarm Code 是 AMS 基础数据的核心?

AMS 里几乎所有对象都挂在 Alarm Code 上:严重等级、自定义描述、四元组规则、屏蔽条件、通知模板、报表统计.

- **双模维护**:单个手动建立或系统集成导入 (老系统收编时批量导入)
- **自定义描述**:让值班人员看到 Code 就知道是什么问题,不用查手册
- 治理要求:命名规范、每个 Code 有 owner、定期清理无效 Code —— 基础数据乱了,规则和报表全是垃圾数据

### 5.【概念】用户警报 / 普通警报 / 忽略警报 / 无效警报的分类有什么意义?

AMS 检索支持区分这四类状态.意义在于 **把 "要人处理的" 和 "噪声" 分开**:

- 闭环率、MTTR 的统计口径才真实 (噪声不进入处置考核)
- 无效 / 忽略警报占比是规则治理的输入:占比高说明规则该修了
- 实验区临时告警可打标归类,不污染量产统计

### 6.【规则】四元组规则模型是什么?Tool Filter / Alarm Code Filter 的粒度?

规则基于四个维度:**Factory Id × System Id × Tool Filter × Alarm Code Filter**.

- **Tool Filter** 三档粒度:Tool Module / Tool Model / 具体 Tool Id
- **Alarm Code Filter**:具体 Alarm Code 或 Severity 等级
- 可屏蔽符合特定条件的警报

设计经验:**先粗后细** —— 从 Model 级规则起步覆盖共性,例外设备再用 Tool Id 级打补丁;每条规则要有 owner 和评审记录,规则本身也是受控配置.

### 7.【规则】重复抑制与远程清除分别解决什么问题?

- **重复抑制**:配置时间间隔,窗口内重复上报的相同告警只算一次 —— 解决传感器抖动 / 设备反复上报造成的刷屏
- **远程清除**:接收外部清除指令,自动清除符合条件的已有告警 —— 例如设备复位、FDC 模型恢复后自动清看板,保持看板整洁

风险点:抑制窗口设太长会掩盖 "反复发作" 信号 —— 重复次数本身要可统计,日报里能看到 "被压掉的告警量".

### 8.【规则】设备状态联动屏蔽 (PM / DOWN 时自动抑制) 为什么重要?有什么风险?

PM / DOWN 状态的机台必然产生大量 "正常的异常"(断电、通讯中断、传感器离线),不屏蔽就是 **固定周期的告警风暴源**.AMS 支持按子系统和设备配置:设备处于 PM 或 DOWN 等特定状态时,自动抑制告警通知及触发动作.

风险:**屏蔽期间真故障也漏了**.补偿措施:

- 屏蔽跟随 EQP State 自动解除,PM 结束即恢复,不依赖人记得
- 屏蔽动作本身留痕可查
- 安全类关键告警不进入屏蔽清单

### 9.【通知】多渠道通知怎么选?各渠道的定位?

| 渠道                       | 定位                       | 适用级别        |
| :------------------------- | :------------------------- | :-------------- |
| 看板 (10 秒刷新)           | 值班室实时态势             | 全部            |
| 企业微信                   | 移动端即时推送,日常主力    | Medium 及以上   |
| 邮件 (SMTP,HTML 模板)      | 非紧急通知、留档、日报     | Low / 汇总      |
| 短信 (移动云 MAS / 阿里云) | 到达率兜底,夜间与 Critical | High / Critical |

原则:**渠道按严重度分层**,Critical 走双通道冗余 (短信 + 企业微信);通知标题与内容支持自定义模板,接收方支持多群组 (工艺 + 设备 + 制造跨部门协同).

### 10.【通知】逐级升级机制怎么设计?

机制:设定 **响应超时阈值**,超时未确认自动升级到下一等级、发送给更高 Level 的群组.

设计要点:

- 超时阈值按严重度分级:Critical 5-10 分钟,Low 可放宽到小时级
- 升级层级 2-3 级封顶:值班工程师 → 资深 / 主管 → 值班经理,顶端必须有人兜底
- AMS 只认 **通知群组** 不认人 —— 换班改群组成员即可,不用改规则

**追问**:夜间和白天的升级链应该一样吗?(不一样 —— 夜间无人值守,阈值要收紧、层级要加深,见中试线题)

### 11.【联动】AMS 与 MES 的联动动作有哪些?什么级别才允许联动?

AMS 触发警报时可自动或手动执行三类 MES 动作:

- **Hold Lot**:拦截相关批次
- **Change EQP State**:变更设备状态
- **Hold Reticle / FOUP**:防止污染扩散

联动口径 (与 FDC 一致):**Warning 只通知,Critical 才联动**.自动联动只挂 "宁停勿放" 的最确定规则,其余走手动确认;所有联动动作进 **警报动作报表**,可审计、可回溯.

### 12.【权限】细粒度权限怎么用?谁能关闭 Critical 告警?

- **按系统限定**:用户只能查看 / 处理特定系统 (如 MES) 上报的警报及修改对应范围设定
- **按机台限定**:只能查看 / 处理自己辖区机台的警报
- 认证:AD 域集成直接登录 + Applied Common Core 统一身份验证 + 自定义角色权限

授权原则:**查看从宽、关闭从严** —— 看可以多看,确认 / 关闭必须授权;Critical 告警的关闭权限收到资深工程师以上,关闭必填处置说明 (留痕).

### 13.【报表】AMS 报表怎么做告警治理?数据生命周期怎么管?

三类报表:**警报报表、通知报表、警报动作报表**,可按时间段 / 系统 / 机台过滤,导出 Excel.

治理抓手:

- **TopN 告警**:每周评审,80% 噪声通常来自 20% 的 Code,推动源头整改 (修设备 / 修阈值 / 改级别)
- **MTTR 与闭环率**:处置质量考核
- **趋势分析**:告警量走势验证治理效果

数据运维:**自动归档清理** + **定时压缩存储**(过期数据压缩存 AMS 服务器、清理 DB)—— 告警库不控制体量,几年后查询会拖垮系统.

### 14.【前道】前道告警管理的要点?

- 联动价值最大:前道按 Lot 生产,**Hold Lot 拦截批量报废、Hold Reticle/FOUP 防污染扩散** 是刚需
- 检索维度以 Lot Id 为中心:AMS 支持 Lot Id 组合过滤,追溯某批货触发过哪些告警
- 主力场景是 **FDC → AMS → MES** 链路:FDC 侦测异常 → AMS 判 Critical → 自动 Hold
- 设备密集、告警量大,看板分级 + 规则治理是日常工作

### 15.【后道】后道告警与前道有什么不同?

- 设备类型杂 (WB / DB / Test / Printer / Molding),Alarm Code 体系不如前道规范 —— 收编时先建 Code 命名规范与自定义描述,否则规则没法配
- **换型频繁**:换型 / 治具相关告警多且多为提示性,级别别给高,否则淹没真告警
- 异常来源偏业务侧:辅材过期、错料等多由 MES 上报,AMS 聚合后通知工艺 + 物料双群组
- 联动要更谨慎:后道 Hold 的是 Strip / 整批产品,误联动影响面大,自动联动白名单比前道更严

### 16.【2-12 寸】老设备 / 非标设备的告警怎么接入 AMS?

分层务实方案:

1. 有 SECS 的走 EAP 正常上报
2. 老设备 RS232 走 **MOXA 串口转网**;再无通讯能力的走 PLC / OPC / GPIB / 文件 / 数据库采集,极端情况扫码人工兜底
3. 采集层汇聚后统一接口入 AMS;基础信息利用 **系统集成导入** 批量建 Code,别手敲几百条

原则:瓶颈设备与安全相关设备优先接;老设备告警字段能少则少 (Code + Tool + 时间戳即可),别强求与设备能力不匹配的功能.

### 17.【中试线】实验设备告警泛滥,怎么区分实验临时告警和真故障?

根因:实验机台长期处于调试态,告警本身就是噪声,不管就是告警疲劳源头.

分层方案:

- **规则分区**:四元组按 Tool Filter 圈出实验区,默认 **只记录不通知**;只有安全类保留通知与联动
- **打标归类**:实验临时告警归入忽略 / 用户警报分类,不进闭环率考核,不污染量产统计
- **状态屏蔽复用**:设备挂调试状态期间抑制通知,但记录保留 (可追溯)
- **定期治理**:报表 TopN 里实验区常年霸榜的 Code,要么修规则要么修设备,不许躺平

### 18.【中试线】夜间无人值守,升级链路怎么设计?

白天靠人盯看板,夜间靠升级链兜底:

- **超时阈值收紧**(Critical 5 分钟内必须有人确认)、**升级层级加深**:值班工程师 → 资深 → 值班经理 → 厂务 24h 联系人
- Critical 双通道:短信 (到达率兜底)+ 企业微信
- **夜间自动联动白名单制**:只有验证过的规则允许夜间自动 Hold,其余只通知不动作 —— 防夜间误联动没人救场
- 交接班机制:未闭环告警清单交接,不让告警跨班 "蒸发"

### 19.【中试线】研发与量产混线,告警规则怎么分区?

- **按区划线**:四元组的 Factory Id / System Id 维度天然支持分区 —— 量产区规则严 (通知 + 升级 + 联动),研发区宽 (记录为主)
- **权限配合**:按机台限定,研发工程师只能处理研发机台告警;量产区关闭权限收制造 / 资深
- **同一台设备混跑研发与量产 Lot 是硬骨头**:AMS 侧难以按 Lot 区分规则,承认系统边界 —— 在上游 (MES / EAP 上报时按 Lot Type 打标) 解决,AMS 按标签路由
- 实验设备转量产时,规则从研发区 "转正" 到量产区,连同告警级别一起评审

### 20.【中试线】告警规则 / 联动逻辑的变更怎么安全上线?

- **Pilot 机制**:新规则先单设备 / 小范围验证,观察误报漏报,不影响未参与部分
- **影子模式**:联动类变更先 "只通知不动作" 跑 1-2 周,确认命中率后再开自动动作
- **变更留痕**:谁改的规则、何时、理由 —— 规则是受控配置,不是随手改的文本
- **版本化可回滚**:规则配置留档,出问题能退回上一版

### 21.【场景】看板告警刷屏 (告警风暴),怎么定位根因与止血?

先止血 (先保生产),再定位:

1. **确认有无联动误伤**:刷屏告警是否挂了自动 Hold?有则先评估影响 Lot
2. **临时止血**:对相关 Tool/Code 挂临时屏蔽 + 收紧重复抑制窗口 + 远程清除看板存量
3. **按维度聚类定位**:
    - 单机台单 Code 重复 → 设备真故障 / 传感器抖动
    - 同 Model 多机台同 Code → 系统性问题(软件版本、上游 Facility)
    - 全厂杂乱 Code → 怀疑 AMS 自身或网络(与 EAP 雪崩题呼应)
4. **根因处置后恢复规则**:临时屏蔽必须带有效期、留痕,每日清单评审 —— 防 "临时屏蔽变永久"

事后用 TopN 报表复盘,从源头修,不靠长期抑制过日子.

### 22.【场景】关键告警漏通知了,怎么分层排查?

按链路逐层排查:

1. **规则层**:四元组覆盖该 Tool / Code 吗?Severity 被过滤了吗?设备状态屏蔽 (PM/DOWN) 挂着吗?是不是落在重复抑制窗口内?
2. **通道层**:通知模板配置、通知群组配置对不对?
3. **值班层**:群组里有没有人、是不是该班次的人?
4. **网关层**:SMTP Server / 短信平台 (移动云 MAS / 阿里云)/ 企业微信接口可用性、配额耗尽没有?

AMS 侧证据:**通知报表 + 警报动作报表** —— 发了没、发给谁、几点发的,一查便知.处置顺序:先补通知恢复监控,再修链路根因.

### 23.【场景】AMS 误联动 Hold 了正在跑的量产 Lot,怎么处理?

先保生产,再查根因:

1. **处置 Lot**:确认该 Lot 实际无质量问题后,走 MES 正规释放流程 (留痕)—— 不能图快直接放,释放动作也要可追溯
2. **查联动链路**:警报动作报表定位是哪条规则触发的动作 → 告警源是否误报 (找 FDC / EAP 核实)→ 规则的 Critical 判定是否过宽
3. **整改**:该规则降级为 "通知 + 人工确认 Hold",或收窄触发条件;所有自动联动规则定期评审
4. 原则重申:**自动联动只挂 "宁停勿放" 级规则**,拿不准的一律人工确认

### 24.【场景】发现闭环率造假 —— 值班确认即关闭、不实际处理,怎么识别与治理?

数据交叉验证:

- **关闭时长分布**:秒级关闭占比高 = 明显信号
- **同 Tool + Code 重复率**:MTTR 很漂亮但同告警反复出现,说明没真处理
- **Closed 后 24h 内复发率**:真正的质量指标

治理手段:

- 制度:关闭必填处置说明 (留痕),Critical 关闭需上级复核
- 报表:区分 Closed / Terminated 口径,Terminated(误报终止) 抽样复核 —— 误报率高也可能是规则问题
- 考核导向:不考 "关得快",考 **复发率低** —— 指标设计成什么样,行为就是什么样

### 25.【场景】设备 PM 挂了状态屏蔽,PM 结束后没恢复,告警全漏了,怎么防?

- **首选机制性方案**:屏蔽跟随设备状态自动解除 (状态联动屏蔽本来就绑定 EQP State,PM 结束自动恢复)—— **手动屏蔽才是风险源**
- 手动屏蔽必须带:有效期 + 到期自动提醒 + 日报列出所有生效中屏蔽清单
- **监控 "沉默的设备"**:某机台告警量长期为 0 本身就是异常信号,看板 / 报表要能发现 "该说话的不说话"
- 事后审计:屏蔽操作全部留痕,谁挂的、挂了多久、覆盖哪些 Code,可追溯

**追问**:怎么区分 "设备真的健康" 和 "告警通路断了"?(心跳机制 / 定期测试告警 —— 通路本身也要被监控)

### 26.【软技能】各部门抱怨告警太多,要求 "都关了",怎么办?

- 理解诉求:告警疲劳是真实问题,看板全是告警等于没有告警;但 "全关" 是把监控变瞎
- **数据说话**:TopN 报表展示 80% 噪声来自哪 20% 的 Code,针对性治理 —— 修阈值、修设备、改级别,而不是关
- **分层而非关闭**:该记录的记录、该通知的通知、该联动的联动,五级严重度就是干这个的
- 底线不动摇:安全与质量关键告警不可关,只能优化触发条件

### 27.【软技能】AMS 工程师最重要的三个能力?

**规则治理能力(信噪比是生命线,四元组 / 抑制 / 屏蔽 / 分级的组合拳)、闭环推动力(AMS 的价值不在告警数量而在闭环率与 MTTR,要用报表驱动跨部门源头整改)、风险边界感(Critical 联动可停线可放行,误联动与漏联动都是事故,权限与留痕是底线)**.

## AMS Function List

### 1. 系统设定与基础数据管理

#### 1.1 基础信息维护

支持灵活的数据录入方式与多维度警报分级定义.

- **双模数据维护**: 支持单个手动建立或系统集成导入两种方式维护 AMS 基础信息 (Alarm Code, Tool、用户、部门、警报规则、通知群组、通知模板、警报动作).
- **警报严重等级**: 支持为 Alarm Code 自定义指定严重等级, 包括 Informational, Low, Medium, High, Critical 五级分类.
- **自定义描述**: 支持自定义警报代码 (Alarm Code) 的描述信息, 便于快速识别问题.

#### 1.2 集成与认证

支持与现有企业基础设施无缝对接, 简化身份验证流程.

- **Applied Common Core集成**: 与 Applied Common Core 服务集成, 统一 APG 产品的使用者身份验证与授权.
- **Active Directory集成**: 支持 AD 域集成, 允许使用域用户账号直接登录系统.
- **自定义角色权限**: 支持自定义用户角色及对应的功能访问权限配置.

### 2. 警报监控与查询

#### 2.1 即时警报看板

提供实时可视化的警报态势感知能力.

- **分级统计展示**: 按子系统以不同严重等级展示警报数量统计信息及最近发生的 20 条警报.
- **自动刷新机制**: 看板数据每 10 秒钟自动刷新, 刷新频率及显示数量均可配置.

#### 2.2 警报检索与导出

支持多条件组合过滤与数据离线分析.

- **多维过滤条件**: 支持 Factory Id, System Id, Tool Module, Tool Model, Tool Id, Alarm Code, Lot Id, Status, Severity, Start Date, End Date 等组合查询.
- **状态分类查询**: 可区分查询用户警报、普通警报、忽略警报及无效警报.
- **Excel导出**: 支持将查询结果一键导出为 Excel 文件, 便于后续分析与归档.

### 3. 警报规则引擎

#### 3.1 规则定义与过滤

支持精细化的警报触发条件配置, 减少误报与噪声.

- **四元组规则模型**: 基于 Factory Id, System Id, Tool Filter, Alarm Code Filter 四个维度建立警报规则.
- **设备级过滤**: Tool Filter 支持指定 Tool Module, Tool Model 或具体 Tool Id.
- **代码级过滤**: Alarm Code Filter 支持指定具体 Alarm Code 或 Severity 等级.
- **特定条件屏蔽**: 支持屏蔽符合特定条件的警报, 避免无效干扰.
- **设备状态联动屏蔽**: 支持按子系统和设备配置, 当设备处于 PM 或 DOWN 等特定状态时, 自动抑制警报通知及触发动作.

#### 3.2 重复与清除管理

支持智能去重与自动化状态同步.

- **重复警报抑制**: 支持管理重复性 Alarm, 可配置忽略指定时间间隔内重复上报的相同警报.
- **远程清除指令**: 支持接收外部清除指令, 自动清除之前收到的符合指定条件的警报, 保持看板整洁.

### 4. 通知与升级机制

#### 4.1 多渠道通知

支持邮件、短信及即时通讯工具的多元化告警触达.

- **SMTP邮件通知**: 支持通过 SMTP Server 发送邮件, 内容支持 HTML 格式模板.
- **短信平台集成**: 支持中国移动云 MAS 短信平台、阿里云短信平台等主流短信接口.
- **企业微信集成**: 支持对接企业微信接口, 实现移动端即时推送.
- **自定义模板**: Alarm 通知标题和内容均支持自定义模板配置.
- **多群组支持**: 通知接收方支持配置多个通知群组, 满足跨部门协同需求.

#### 4.2 逐级升级报警

支持超时未响应的自动升级机制, 确保关键警报不被遗漏.

- **超时自动升级**: 可设定警报响应超时阈值, 超时后自动升级到下一等级并发送给更高 Level 的群组.

### 5. 警报处置与联动

#### 5.1 状态流转管理

支持完整的警报生命周期闭环处理.

- **状态变更**: 用户可在 AMS Client 响应和处理 Alarm, 将初始 Open 状态更改为 Closed 或 Terminated.
- **处理记录**: 所有状态变更操作均有据可查, 支持追溯处理过程.

#### 5.2 MES 系统联动

支持与 MES 深度集成, 实现自动化生产管控动作.

- **Hold Lot**: 触发警报时自动或手动 Hold 相关批次.
- **Change EQP State**: 触发警报时自动或手动变更设备状态.
- **Hold Reticle/FOUP**: 触发警报时自动或手动 Hold 光罩或载具, 防止污染扩散.

### 6. 访问控制与安全

#### 6.1 细粒度权限管控

支持按系统与机台维度的数据隔离与操作授权.

- **按系统限定**: 可限制用户仅能查看 / 处理特定系统 (如 MES) 上报的警报及修改对应范围内的设定.
- **按机台限定**: 可限制用户仅能查看 / 处理特定机台相关的警报及修改对应范围内的设定.

### 7. 报表与数据运维

#### 7.1 统计分析报表

支持多维度的历史数据分析与绩效评估.

- **多类型报表**: 支持生成警报报表、通知报表及警报动作报表.
- **灵活过滤**: 支持按时间段、系统、机台作为过滤条件生成报表.
- **Excel导出**: 所有报表均支持导出为 Excel 文件.

#### 7.2 数据生命周期管理

支持自动化数据归档与清理, 保障系统长期稳定运行.

- **自动归档清理**: 可配置过期警报的自动归档和清理策略.
- **定时压缩存储**: 定时自动对过期警报数据进行压缩并存储在 AMS 服务器, 同时清理 DB 中的过期数据, 释放数据库空间.

# PMS

## PMS interview

### 1.【概念】PMS 在 CIM 中的位置?与 MES, EAP, FDC 的分工?

- **PMS**:设备健康与备件的 "管家" —— PM 计划与排程、Checklist、工单执行、备件全生命周期、维保报警
- **MES**:生产中枢 —— 管设备状态与派工;PMS 与其深度整合:机台 Module、原因代码、机台 Template 只定义一次,机台状态及状态转换实时同步
- **EAP**:数据采集通道 —— Usage-Based PM 的 Wafer Count / RFTM 等参数由 EAP 实时采集传给 PMS 触发保养
- **FDC**:故障侦测 —— Condition-Based 保养的状态来源,发现异常后通过 API 创建 Ad-hoc 维修单;PM Complete 信息也回馈 FDC / R2R(APC) 做模型重置

一句话:FDC 发现 "病了",PMS 管 "体检与治疗",MES 管 "病假期间不排班".

### 2.【概念】PM 三种触发策略 (Time-Based / Usage-Based / Condition-Based) 对比?

| 策略            | 触发依据                    | 优点             | 缺点                   | 适用                     |
| :-------------- | :-------------------------- | :--------------- | :--------------------- | :----------------------- |
| Time-Based      | 日历周期 (周 / 月 / 季保)   | 简单可控、易排程 | 忙时欠保养、闲时过保养 | 负载稳定的量产设备       |
| Usage-Based     | Wafer Count / RFTM 等使用量 | 与实际磨损匹配   | 依赖 EAP 实时采集参数  | 负载波动大的设备         |
| Condition-Based | FDC 状态数据                | 按需保养、最经济 | 需要传感器与模型支撑   | 关键部件、有监控的新设备 |

落地方式:PMS 原生支持 Calendar-Based, Usage-Based 及两者混合触发;Usage 数据走 EAP 集成实时接收设备参数值.Condition-Based 不由 PMS 直接算,而是 FDC 侦测到劣化趋势后经 API 创建 Ad-hoc 维修单进入工单流程.

**追问**:一条 2-12 寸混线怎么组合?(关键新设备 Condition-Based、主力量产设备 Usage-Based、无采集能力的老设备 Time-Based 兜底)

### 3.【概念】Early Due / Due / Overdue 窗口机制怎么理解?

- **Early Due**:进入预警期 —— AMS 自动报警,同时列出本次 PM 所需 Parts,工程师勾选后直接生成领料单 (备件先行,不等 Due 到才领料)
- **Due**:到点应做 —— 正常安排停机执行
- **Overdue**:超期未做 —— 可按配置自动 Inhibit 机台、强制切换设备 / Chamber 可用性,MES 联动禁止派工

窗口长度按 PM 级别配置 (大 PM 窗口宽、小 PM 窗口窄).配套机制:UI 可预约 PM 时间,到时强制切换设备状态 —— 防止 "再跑一个 Lot 就停" 的无限拖延.

### 4.【概念】PM 工单生命周期?

触发 (计划自动触发 / Ad-hoc / 外部系统 API 创建)→ 派发 → 执行 → 数据采集 → 确认 → 关闭.

- 工单支持开始、重新计划、中止、取消、继续、完成、激活、延迟、Adhoc 全流程操作
- 每个 Action(开始 / 暂停 / 取消 / 完成 / 延期) 可预设与机台状态的自动关联逻辑,如 "开始" 自动切 PM 状态
- 完成前两道卡:必填参数未填 Complete 时报警;关键备件未更换不允许 Complete
- UnScheduling Down 建立故障单后,可手动挂 PM Work Request 及所需 Checklist;系统默认交接登记

### 5.【概念】浮动型 (Floating) 与静态型 (Static) 排程的区别?

- **浮动型**:下一次 PM 基于本次实际完成时间推算 —— 什么时候做完,周期从什么时候重算;适合执行时间不可控的中试线
- **静态型**:下一次 PM 固定于预设时间点,不论本次何时完成 —— 节奏稳定,适合节拍固定的量产设备

配套规则:周期性保养完成后自动安排下一次;计划重叠时按用户设定仅触发高级别保养 (如 Quarterly 覆盖 Monthly);大 PM 涵盖小 PM 时自动 Reset 小 PM 计数参数并清除对应小 PM 工单.

### 6.【概念】备件全生命周期状态机?

默认状态流:**FREE → INUSE → SWAPPED →(WAITREPAIR → Repairing → REPAIRED|WAITOE → OE 判定 → REPAIRED / SCRAP|Cleaning / WaitClean)→ SCRAP**,另有 WAITRETURN, OutRepair 等外送分支.

- 切换方式三种:Unscrap 回退、Modify 按规则切换、To Free 强制切换 (高权限);维修转 Repaired、报废转 Scrap 也需高权限
- 备件领入即生成唯一识别号,在线仓内全程唯一性跟踪
- 每次状态迁移记 History,可按 PartNo/SN/EQID/UserID/Activity/ 时间范围查询并 Export —— 装错追溯、寿命分析全靠它

### 7.【计划】大小 PM 撞期 (月保与季保重叠) 怎么处理?

- **大 PM 涵盖小 PM**:大 PM 的 Checklist 通常包含小 PM 项目;同参数多 PM 类型到达大 PM Range 时,自动 Reset 小 PM 计数参数并清除对应小 PM 工单,只做一次大 PM
- **重叠触发规则**:PM 计划重叠时,按用户设定仅触发高级别保养 (Quarterly 覆盖 Monthly)
- 价值:同一台设备一周内不停两次机;小 PM 计数器清零重算,周期不错乱
- 配置要点:哪几个小 PM 被哪个大 PM 涵盖,要在模板里显式定义 (Trigger 递增性 / 替换性参数),不能靠系统默认猜

### 8.【计划】PM 排程与生产计划冲突,怎么协调?

矛盾本质:机台停下来做 PM,RTD/MES 派工就要避开;生产压力大时 PM 容易被无限推迟.

- **预测先行**:PMS 具备维修保养时间预测能力,提前给出未来 PM 窗口,生产排程提前避开
- **可视化协同**:PM 计划 Gantt 图 + 计划导出,给生产 / 制造部门做排程输入
- **弹性窗口**:进 Early Due 窗口即可执行,给调度留出提前量
- **预约守住窗口**:协商好的 PM 时间在 UI 预约,到时强制切换设备状态,系统替工程师 "守信用"
- 中试线实践:研发 Lot 间隙天然有碎片窗口,Usage-Based + 浮动型排程的窗口利用率远高于死板周期

### 9.【Checklist】Checklist 数字化设计要点?

- 模板 By EquipmentTemplate 或 By EquipmentID 配置,带版本控制与签核;支持 Export/Load 跨设备复用
- Step 分必选 / 可选;参数必填 / 选填 + Spec 限制 + OOS 上下限卡控,未填必填项 Complete 时报警
- 每 Step 可挂 SOP/ 图片附件,内容支持中文;执行界面标明必做 / 选做、显示采集值是否在 Spec 范围内
- **Mobile 增强**:Word 模板嵌套 Excel 定义复杂表格采集 + 公式 Spec 卡控;现场拍照上传;关键步骤 Double Confirm;每步设预计完成时间 (整体超预估时间 AMS 报警);移动端可查知识库
- **复机检查**:PM 复机时独立检查步骤,防 "装完就开机"
- 知识沉淀:执行备注 + 拍照 + 知识库,把老师傅经验变成组织资产

### 10.【备件】备件寿命与循环量怎么卡控?

- **寿命互锁**:对 Machine 设置 Parts Life Time Interlock,超限不可上货并提示原因 —— 卡在生产之前而不是事后
- **循环量管控**:设 Part 最大循环量,卸下时自动累加使用次数并与 Recycle Spec 比对,超限自动报警
- **化学液寿命**:WET Chemical Life Time 支持 By Wafer Counts 与 By Life Time 双重标准,优先到达者优先卡控 (药液既防用多也防放久)
- **污染等级卡控**:限制 Part 只能上到同一 Equipment Group 的设备,防交叉污染
- 替换界面颜色显示过期 / 低水位 Part,实时显示当前 Parts 使用情况;维保必换件未换,PM 无法 Complete

### 11.【备件】备件安全库存怎么定?系统怎么支撑?

- 系统支撑:后台定期扫描安全库存,低于阈值自动 AMS 报警;Early Due 预警时列出所需 Parts、勾选自动生成领料单 —— 从 "缺料才发现" 变成 "预测式备料"
- 定额方法:年消耗量 × 采购周期 + 安全系数;关键件 (停机损失大、交期长) 安全系数取高
- 与 ERP 打通:标准接口从 SAP 自动领料录入;白名单机制校验是否准入库,Key/Non-Key 属性自动带入
- 中试线特殊:品种多批量小,不能照搬量产公式 —— 按 "停机容忍天数" 分级:A 类 (停机即停线) 必囤,B 类维持低水位,C 类零库存走急单

### 12.【集成】PMS 与 MES 深度整合体现在哪?

- **数据同源**:机台 Module、原因代码、机台 Template 与 MES 整合,只定义一次,不维护两套主数据
- **权限统一**:权限管理模块与 MES 整合,Runtime 权限一处定义
- **状态同步**:机台状态及状态转换与 MES 深入整合 —— PM 工单 "开始" 自动切设备为 PM 状态,Complete 后回 Idle/Run;Run → PM → Idle 全程自动,MES 派工实时感知
- 结果:PMS 里开工单,MES 侧设备立即不可派工;PM 完成自动恢复可派,账实一致,不需要人工两边改状态

### 13.【集成】PM 到期未做的卡控策略?

- **硬卡控**:Due 窗口配置 Overdue 自动 Inhibit 机台,强制切换设备 /Chamber 可用性,MES 禁止派工 —— 安全相关 PM(气体柜、互锁类) 必须走这条
- **软降级**:一般清洁 / 点检类可配置为报警 + 限制部分产品或 Recipe,不直接停线
- **三段报警**:AMS 在 Early/Due/OverDue 时间点自动报警,支持按 Reason Code, Shop、机台、PM 重要级别过滤通知,避免告警淹没
- **延期受控**:延期走标准签核接口审批,不是工程师手动改日期;系统对 "周期性 Schedule 被手动修改" 本身发报警,一切变更留痕可追溯

### 14.【集成】PM 与 FDC / APC 的联动 (PM 后模型处理)?

- **模型重置**:PM 换件后设备物理状态改变,旧 FDC 模型基线失效 —— PM Complete 事件同步 FDC,触发模型重置或标记重建期
- **前 N 片宽 Spec**:PM 后首批跑货用放宽的 Spec 监控,确认状态回归后切回紧 Spec
- **PMQA**:PM 后与基准设备 (Golden Tool) 比对关键参数,Matching 合格再放量
- **R2R 集成**:PM Complete 时将特定机台类型的结束信息发送给 R2R(APC) 系统,APC 据此调整初始偏置或暂停反馈若干片
- 边界原则:PMS 只负责 "报告 PM 事件与数据",模型重置、宽 Spec, R2R 策略逻辑在 FDC/APC 侧实现,职责清晰

### 15.【前道】前道 PM 的特殊性?

- **Chamber 级 PM**:Etch/CVD 多腔体设备,PMS 支持整机或独立 Chamber 维度配置维护计划 —— 单腔 PM,其余腔继续跑货
- 使用量是核心触发:射频小时 (RFTM)、Wafer Count 走 EAP 实时采集,Usage-Based 是主力
- **WET 药液寿命**:By Wafer Counts + By Life Time 双标准先到先卡
- 换件联动防错:支持定义某些 Parts 更换后自动切换机台 Recipe Constraint(如换关键部件后限制部分 Recipe),PM 与配方管理联动
- PM 后验证重:PMQA + FDC 宽 Spec + 首片量测合格才放量 (见集成题)

### 16.【后道】后道 PM 与前道的差异?

- 换型频繁:Die Bond/Wire Bond 换产品就要换吸嘴、劈刀、夹具,备件更换频次远高于前道 —— Part Group 关联机台、上机自动匹配可用 Part 价值最大
- 寿命按次数:劈刀按 Bond 次数、吸嘴按 Pick 次数,Usage-Based 是绝对主力,Time-Based 只兜底
- 机台数量多、单台价值低:后道同类机台成百上千,PM 计划必须靠 Equipment Template 批量管控,逐台配 EquipmentID 不现实
- 关注点不同:前道防交叉污染 (Equipment Group 卡控),后道更关心机械精度保养与工装磨损
- 边界要划清:金线 / 胶 / 框架等辅材的有效期管理在 MES/ 物料侧,PMS 只管设备与工装备件

### 17.【2-12 寸】老旧设备没有 SECS 能力,Usage-Based PM 的数据从哪来?

分层方案:

1. **有 SECS/GEM**:EAP 实时采集 Wafer Count/RFTM 直接传给 PMS 触发 (原生集成路径)
2. **无 SECS 但有 PLC/传感器**:走 PLC/OPC 采集计数信号接入 EAP
3. **纯手动老设备(2/4/6 寸常见)**:用 MES 跑货账反推 Wafer Count(Lot 完成数 × 片数),班次级精度对 PM 够用
4. **兜底**:连账都没有的设备退化为 Time-Based + Mobile Checklist 人工抄表录入读数

原则:**先卡控后自动化** —— 先让老设备全部纳入 PM 计划与 Overdue 卡控,采集精度再逐台升级,不等 "数据完美" 才管.

### 18.【中试线】科研设备没有 Vendor 标准 PM 模板,怎么办?

- **自研 Checklist 起步**:设备手册 + 供应商口头建议 + 工程师经验,先建最小 Checklist(安全项 + 易损件),版本控制逐步迭代
- **运行中沉淀**:每次故障维修后复盘 "哪个点检能提前发现",反哺 Checklist;执行备注与拍照沉淀进知识库
- **先单机后模板**:独一份的设备先按 EquipmentID 单独配;同类设备攒到 2-3 台再抽象成 Equipment Template
- **周期先保守后优化**:初期 Time-Based 高频保守,积累故障数据后拉长周期或转 Usage-Based
- 用 Checklist Export/Load 功能在相似设备间复用,降低自研成本

### 19.【中试线】实验设备启停频繁、负载极不稳定,PM 策略怎么调?

- 弃用纯 Time-Based:启停频繁意味着日历周期与实际磨损严重脱节 —— 闲时过保养、忙时欠保养
- **转混合触发**:Calendar + Wafer Count/RFTM 混合模式,先到先触发;忙时按量保、闲时按周期兜底防 "放坏"
- **浮动型排程**:下一次 PM 基于实际完成时间推算,适配不可预测的研发节奏
- 启停本身也是应力:对频繁冷热循环的设备 (炉管类),把启停次数也作为 Trigger 参数维护
- 利用碎片窗口:实验间隙插 PM,靠时间预测 + Early Due 宽窗口给调度弹性

### 20.【中试线】科研设备备件难买 (停产 / 进口周期长),怎么应对?

- **分级备库**:按停机影响分级,A 类 (独一份设备的关键件) 提前囤货,安全库存扫描 + AMS 报警盯住水位
- **国产替代/兼容件**:建替代件档案,用 Part Group 机制关联机台 —— 原厂件与替代件同组管理,上机自动匹配 Group 内可用 Part
- **共享备件池**:同 Vendor 系列设备共用模块的,备件集中池化管理,唯一识别号全程跟踪件在哪台设备上
- **翻新件管理**:走 WAITREPAIR → OutRepair → REPAIRED 状态流;REPAIRED 件单独标记,Recycle Spec 比新件更严,上机后加密 FDC 监控
- 追溯兜底:VendorSN + 唯一识别号记录来源,某批替代件出问题可批量圈定受影响设备

### 21.【中试线】PMS 重要逻辑 (如 Overdue 自动 Inhibit 规则) 要修改,怎么安全上线?

- **Pilot 机制**:先在个别设备 / 单个区域启用新规则,其余设备保持旧逻辑,参与验证的部分出问题不影响全局
- **先报警后拦截**:新卡控规则先 "只报警不 Inhibit" 跑两周,看命中清单是否合理、误报率多高,数据验证后再切硬卡控
- 灰度推广:验证通过按设备类型分批推开;PM 模板 /Checklist 本身带版本控制,可回退
- 变更留痕:谁改的、何时改的、改了什么全部记录,叠加 "Schedule 手动修改报警" 做审计 —— 一切变更留痕可追溯

### 22.【场景】发现 PM 已 Overdue 的设备还在跑货,怎么处置?

先保质量再排障:

1. **确认口径**:查该设备 PM 计划与 Due 窗口配置 —— 真 Overdue 还是报警配置问题?为什么没自动 Inhibit(规则未启用?被延期签核豁免?)
2. **分级处置**:安全相关 PM → 立即停机;一般保养 → 设备+ 工艺工程师会签评估超期时长与使用量,决定是否跑到当前 Lot 结束
3. **圈影响**:MES 拉出超期期间该机台跑的 Lot 清单,做质量风险评估,必要时 Hold 待验
4. **补做销项**:尽快安排 PM,工单标记超期 Reason Code
5. **整改根因**:人为 "再跑一个 Lot" 拖延 → 启用 PM 预约到时强制切状态;规则缺失 → 补 Overdue Inhibit 配置;延期泛滥 → 收紧延期签核

### 23.【场景】设备故障停机,备件缺料,采购周期 6 周,怎么办?

应急 (先保生产):

1. **查库存与拆借**:按 PartNo/Status/Location 综合查询 —— 其他停机设备、共享备件池有无可用件;Part Group 内有无替代件
2. **翻新件顶上**:库房 REPAIRED 件评估寿命 Spec 后临时使用,上机后加密监控
3. **供应商加急 + 同行拆借**,同步评估降级运行方案 (降负载、屏蔽部分 Chamber 维持部分产能)

预防 (事后):

- 该件升 A 类安全库存,配置后台扫描 + 低水位报警
- 复盘:故障件是否纳入 Part Lifetime 定时监控 (逾期自动报警)—— 是不是寿命早到了没预警
- 推动替代件验证建档,摆脱单一来源

### 24.【场景】PM 后首批跑货,FDC 全线报警,怎么排查?

分层排查:

1. **先分真假**:是 PM 后模型未重置的 "假警"(基线已变、旧模型不适用),还是设备真没装好?
2. **查 PM 记录**:Checklist 采集参数有无 OOS?关键备件更换记录是否完整?复机检查步骤是否执行?
3. **核对联动链路**:PM Complete 信息有没有正确发给 FDC/R2R?前 N 片宽 Spec 机制是否生效?联动信息丢失 → 接口问题,手动触发模型重置
4. **PMQA 比对**:与基准设备比对关键参数 —— 差异大是装回问题 (拆机重检),差异小是纯模型问题
5. 处置:先 Hold 该设备跑货 → 模型重置 / 宽 Spec 确认 → 首片量测合格再放量;装配问题则 PM 返工,并复盘 Checklist 是否要加验证步骤

### 25.【场景】怀疑某台设备上批 PM 装错了备件 (用错型号),怎么追溯?

1. **正向追**:按 EQID + 时间范围查 PM 执行记录与备件更换 History(Activity/ReadingType,可 Export)—— 当时装的是哪个唯一识别号的件
2. **反向追**:该识别号查详情 (VendorSN/ 料号 / 属性) 确认是否错料;若确错,查它本应用在哪、同期还有哪些设备领了同批件
3. **圈影响**:装错时段内该机台跑的 Lot 清单 (MES 账),质量评估后 Hold
4. **查根因**:为什么能装上 —— Part Group 自动匹配没拦住 (料号未入 Group/ 白名单缺失)?上机没做 Barcode 合法性验证?
5. **整改**:领用与上机强制 Barcode 扫描 + 白名单 /Group 校验,Key 件更换 Double Confirm 并拍照留档

### 26.【软技能】生产主管抱怨 "PM 太频繁,影响产能和交期",怎么回应?

- 理解诉求:中试线交期压力真实存在;PM 占机台时间是显性成本,故障停机是隐性成本,大家容易只看前者
- 数据说话:拉报表算笔账 —— 该设备 PM 频次与耗时 vs 非计划 Down 机时长与批废损失,"不做 PM 的期望损失" 摆出来
- 给优化方案:Time-Based 改 Usage-Based/ 混合 (忙时不多保、闲时不少保);大小 PM 合并减少停机次数;Early Due 窗口提前到生产空档执行;时间预测 + Gantt 让 PM 窗口与生产计划提前对齐
- 底线不动摇:安全相关 PM 与 Overdue Inhibit 不可谈判 —— 省一次 PM 赌上一批货,账算不过来

### 27.【软技能】PMS 工程师最重要的三个能力?

**设备与工艺理解力(不懂设备的人配不出合理的 PM 策略和 Checklist)、数据驱动的平衡能力(过保养浪费产能、欠保养赌质量,用故障与寿命数据找到平衡点)、跨系统整合力(PMS 的价值一半在与 MES/EAP/FDC/AMS 的联动,单打独斗的 PMS 只是个记事本)**.

## PMS Function List

### 1. 维修保养计划管理 (PM Planning)

#### 1.1 多类型保养策略

支持灵活定义各类预防性维护触发机制, 满足复杂生产环境需求.

- **混合触发模式**: 支持基于时间 (Calendar-Based)、基于使用情况 (Usage-Based, 如 Wafer Count/RFTM) 及两者结合的混合类型保养管理.
- **非周期维修**: 支持非周期的 Ad-hoc 维修管理, 并提供 API 供外部系统创建维修单.
- **EAP集成触发**: 与 EAP 整合, 实时接收设备参数值以触发基于使用情况的保养.
- **多重计划优化**: 大 PM 自动涵盖小 PM(如月保替代周保);同参数多 PM 类型到达大 PM Range 时, 自动 Reset 小 PM 参数并清除对应工单.

#### 1.2 PM 模板与规则配置

支持标准化的保养模板管理及精细化的执行规则设定.

- **模板管控**: 支持按 Equipment Template 或机台 ID 统一管控维护计划, 具备版本控制功能.
- **Chamber级配置**: 支持按照设备整机或独立 Chamber 维度配置维护计划.
- **Checklist关联**: 支持选择并一次添加多个已建立的 Checklist 模板.
- **Trigger参数设置**: 支持设置 PM Trigger 所需的递增性及替换性参数.
- **Due窗口管理**: 支持设置 Early Due, Due, Overdue 时间, 并可定义 Overdue 时是否自动 Inhibit 机台.
- **命名与排程规则**: 支持自定义 PM 工单 Naming Rule;支持浮动型 (基于完成时间) 与静态型 (固定时间) 的下一次 PM 规划.
- **备件与附件**: 支持定义 PM 所需部品备件详细信息 (料号 / 描述) 及共享附件 (SOP/ 图片).
- **重叠处理**: PM 计划重叠时, 支持根据用户设定仅触发高级别保养 (如 Quarterly 覆盖 Monthly).
- **签核逻辑**: 提供系统默认签核逻辑 (权限群组) 管理维修保养模板.

#### 1.3 保养计划排程与预测

支持智能化的排程辅助与强制管控机制.

- **时间预测**: 具备预测维修保养时间的能力.
- **自动排程**: 周期性保养完成后自动安排下一次计划.
- **强制切换状态**: 达到 Overdue 条件时, 强制切换设备 /Chamber 可用性.
- **PM预约**: 支持在 UI 界面预约 PM 时间, 到时强制切换设备状态.
- **计划导出**: 支持 PM 计划数据的导出功能.

### 2. PM Checklist 管理

#### 2.1 Checklist 模板配置

支持结构化的检查步骤定义与多媒体内容集成.

- **多维度配置**: 支持 By EquipmentTemplate 或 By EquipmentID 配置, 支持系统默认签核逻辑.
- **步骤管理**: 支持添加、删除、修改 Checklist Step;步骤分为可选和必选;支持版本控制.
- **内容本地化**: Checklist Step 内容支持中文汉字显示.
- **参数采集与卡控**: 支持设置必填 / 选填参数;支持 Spec 限制及 OOS 上下限卡控;未填必填项 Complete 时报警提醒.
- **附件关联**: 支持为每个 Step 添加 SOP 文件或图片等共享附件.
- **复机检查**: 支持设置 PM 复机时的 Checklist 检查执行步骤.
- **导入导出**: 支持 Export 及 Load Checklist 模板.
- **故障单关联**: UnScheduling Down 建立故障单后, 支持手动添加 PM Work Request 及所需 Checklist.

#### 2.2 Mobile Checklist 增强

支持移动端专属的检查表设计与复杂数据录入.

- **Word/Excel嵌套**: 支持加载 Word 格式模板, 并在其中嵌套 Excel 定义复杂表格采集及公式 Spec 卡控.
- **多媒体支持**: 方便地在 Mobile Checklist 中添加图片;支持移动设备拍照上传.
- **交互增强**: 支持 Double Confirm 步骤;支持不同字体颜色显示;支持设定每步预计完成时间.
- **警示与标题**: 支持定义 Checklist Title, Detail Title 及警示语句.
- **知识库集成**: 移动设备端支持知识库查询.

### 3. 维修保养执行 (PM Execution)

#### 3.1 工单生命周期管理

支持完整的 PM 作业流程控制与状态流转.

- **全流程操作**: 支持开始、重新计划、中止、取消、继续、完成、激活、延迟、Adhoc 等操作.
- **状态关联**: 提前设定 PM 不同 Action(开始 / 暂停 / 取消 / 完成 / 延期) 与机台状态的自动关联逻辑.
- **交接登记**: 系统默认的交接登记功能.

#### 3.2 现场执行与数据采集

支持规范化的作业指导与实时数据记录.

- **可视化指引**: 标明 Checklist 必做 / 选做项目;显示 Step 附件及所需采集值;标明是否在 Spec 范围内.
- **备注信息**: 支持在执行过程中添加备注.
- **自动跳转**: Mobile 端 Checklist Step 完成后自动跳转下一步.
- **关键备件验证**: PM 结束时检查关键备件是否更换, 未更换则不允许 Complete.
- **Recipe联动**: 支持定义某些 Parts 更换后自动切换机台 Recipe Constraint.

### 4. 备件全生命周期管理 (Parts Management)

#### 4.1 备件入库与领用

支持与 ERP 集成及精细化的库存准入控制.

- **多渠道领入**: 支持手动填写基本信息领料;提供标准接口从 SAP 自动领料录入.
- **白名单机制**: 提供白名单定义界面, 标准领料接口校验白名单决定是否入库;支持 Key/Non-Key 属性自动带入.
- **Part Group管理**: 支持建立 Part Group 并关联机台, 上机时自动从 Group 中匹配可用 Part.
- **初始化工具**: 提供 Part EQP Release 功能, 方便一次性初始化机台已挂 Part.

#### 4.2 备件使用与循环控制

支持严格的寿命管理与防错卡控.

- **寿命互锁**: 针对 Machine 设置 Parts Life Time Interlock, 超限不可上货并提示原因.
- **循环量管控**: 设置 Part 最大循环量, 超限自动报警;卸下 Part 时自动累加使用次数并与 Recycle Spec 比对.
- **化学液寿命**: WET Chemical Life Time 支持 By Wafer Counts 和 By Life Time 双重标准, 优先到达者优先卡控.
- **污染等级卡控**: 限制 Part 只能上到同一 Equipment Group 的设备, 防止交叉污染.
- **替换卡控**: 配置维保必换 Parts List;替换界面颜色显示过期 / 低水位 Part;未换必换件 PM 无法 Complete.
- **使用情况显示**: 替换过程中实时显示当前 Parts 的使用情况.

#### 4.3 备件状态与维修报废

支持完整的备件状态机管理与异常处理.

- **全状态支持**: 默认支持 FREE, INUSE, SCRAP, SWAPPED, WAITREPAIR, REPAIRED, WAITOE, WAITRETURN, OutRepair, Repairing, Cleaning, WaitClean 等状态.
- **状态切换方式**: 支持 Unscrap 回退、Modify 按规则切换、To Free 强制切换三种方式.
- **维修与报废**: 高权限用户可执行维修 (转 Repaired) 或报废 (转 Scrap) 操作.
- **OE处理**: 支持 Wait OE 状态的 Part 经 OE 部门处理后切换至 Repaired 或 Scrap.
- **错误删除**: 高权限用户可删除刚领入未使用的 Free Part.

#### 4.4 备件查询与追溯

支持多维度的库存查询与历史追踪.

- **唯一标识跟踪**: Parts 领入生成唯一识别号, 在线仓内全程唯一性跟踪.
- **综合查询**: 支持按 PartNo/SeriesNo/VendorSN/Module/Status/Location 查询数量及详情.
- **详细信息展示**: 展示包括 VendorSN, ReadingSpec, RFTIME, CycleLimit, CostCenter, Authentication 等完整属性.
- **历史导出**: 支持按 PartNo/SN/EQID/UserID/Activity/ReadingType/ 时间范围查询 History 并 Export;支持一键全选 Activity 和 Reading Type.
- **条码支持**: 支持 KeyIn/Barcode 录入, 具备合法性验证及唯一识别编码管理.

### 5. 监控、通知与报表

#### 5.1 AMS 系统集成报警

支持与 Alarm 系统深度联动, 实现主动式运维监控.

- **PM时机报警**: 整合 AMS, 在 Early/Due/OverDue 时间点自动发送报警.
- **执行异常报警**: PM 完成时间超过预估时间、周期性 Schedule 手动修改时发送报警.
- **完成通知**: PM 做完后通过 Alarm 系统通知用户.
- **备件监控**: 定时监控 Part Lifetime, 逾期自动报警;后台定期扫描安全库存, 低于阈值自动报警.
- **Early预警领料**: Early 预警时列出所需 Parts, 工程师勾选后自动生成领料单.
- **过滤机制**: 支持通过 Reason Code, Shop、机台、PM 重要级别过滤通知.

#### 5.2 报表与数据分析

支持全面的维保数据统计与可视化展示.

- **DB Schema支持**: 提供 DB Schema 支持客户端报表系统开发.
- **PM列表报表**: 包含 Scheduled/Unscheduled PM List 及具体信息 (Due Date/Meter/Module/EQP ID).
- **参数趋势图**: 机台保养记录中单个参数可生成 Chart;支持机台参数值历史记录查询.
- **执行记录**: 提供机台 PM 执行记录查询, 同部门员工均可查看.
- **Gantt图显示**: 图例化 (Gantt) 显示 PM 计划.
- **清单导出**: 支持 Export 维修保养清单列表.

### 6. 系统集成与基础支撑

#### 6.1 MES 深度整合

支持与 MES 系统的数据同源与权限统一.

- **基础数据同步**: 机台 Module、原因代码、机台 Template 与 MES 深入整合, 仅需定义一次.
- **权限统一**: 权限管理模块与 MES 整合, 减少重复定义.
- **状态同步**: 机台状态及状态转换与 MES 深入整合.

#### 6.2 标准化接口与工具

支持开放的系统集成能力与便捷的数据初始化.

- **标准API**: 提供领料、退料、Part 领料上限控制、Part 状态切换、Part 延期、创建异常单 Work Request 等标准接口.
- **R2R集成**: PM Complete 时将特定机台类型结束信息发送给 R2R 系统.
- **签核接口**: 提供 PM 延期及 Checklist 签核的标准接口供客户签核系统调用.
- **Loader工具集**: 提供机台数据、状态转换、用户权限组、机台 Template、原因代码 (及分组)、Mobile/ 标准 Checklist 的默认录入工具.

#### 6.3 移动端与权限

支持移动化作业与精细化的运行时权限控制.

- **移动应用**: 支持平板 / 手机等移动设备;支持拍照上传及知识库.
- **Runtime权限**: 提供用户 Runtime 权限管理机制.
- **通知渠道**: 支持邮件、短信等方式通知维保负责人.

# RTD

| Abbreviation | Full form             | Desc                          |
| :----------- | :-------------------- | :---------------------------- |
| RTD          | Real Time Dispatching | 实时派工系统                  |
| SDR          | Sensor Decide Respond | 感知决策响应 (工厂自动化系统) |

> Note:
>
> RTD 主要业务是设置派工规则, SDR 根据规则响应派工
>
> RTD 与 SDR 可以合并为一个系统

## RTD interview

### 1.【概念】RTD 在 CIM 版图中的位置?与 MES, EAP, AMA 的分工?

- **RTD**:实时派工大脑 —— 回答 "这台机下一步该做什么 Lot / 这个 Lot 下一步该去哪台机",输出派工建议
- **MES**:WIP / 账料数据源与业务约束来源 —— RTD **不直接读 MES DB**,通过 Oracle Trigger 秒级同步进内建 Repository;派工结果回传 MES(可派 Lot 的 Sorting 信息 + 不可派 Lot 的 Reason)
- **EAP**:设备状态与执行通道 —— 机台状态、Recipe/PPID 状态是派工约束的输入
- **AMA**:搬运执行 —— RTD 决定 Where Next(去哪),AMA 负责怎么搬过去

集成链路:MES WIP 变化事件 → RTD 规则计算 → 回传 MES → EAP 下发作业 / AMA 执行搬送.

### 2.【概念】派工的本质两问:What Next 与 Where Next?

- **What Next(选 Lot)**:机台 Idle 时,从候选 Lot 中按优先级排序挑出下一个加工的 —— 对应 Common Rules 的优先级排序与机台选择逻辑
- **Where Next(选去向)**:Lot TrackOut 后去哪 —— 下一机台选择 + 存储位置优先级 (**Dedicate OHB > Bay OHB > Default Stocker**)

两问共用同一套约束检查与规则引擎,区别在触发事件不同:What Next 由机台 Idle 事件触发,Where Next 由 Lot 移动事件触发.

### 3.【概念】RTD 实时派工与 APS 排产的区别?

| 维度     | RTD 实时派工                  | APS 排产                  |
| :------- | :---------------------------- | :------------------------ |
| 触发方式 | 事件驱动 (机台 Idle/Lot 移动) | 批量 / 周期计算           |
| 时效     | 秒级,单独 Rule 运行 <10 秒    | 分钟 / 小时级             |
| 粒度     | 单 Lot、单机台、当下          | 全厂 / 全产品线、未来时段 |
| 回答     | **现在做什么**                | **未来该做什么**          |

两者不是替代关系:RTD 支持通过文件 (Flat/CSV) 或 DB 直接读取 Scheduling/Planning 等外部系统结果,把排产计划作为派工输入 (如 Schedule Monitor 快到期 Lot 优先).

### 4.【概念】RTD 与 SDR 是什么关系?

笔记原文:**RTD 主要业务是设置派工规则,SDR(Sensor Decide Respond)根据规则响应派工;RTD 与 SDR 可以合并为一个系统**.

- 分工:RTD 是规则定义侧 (规则建模、参数、权重),SDR 是执行响应侧 —— **Sensor(感知机台 Idle/Lot 移动/MES 事件)→ Decide(跑规则)→ Respond(回传派工结果)**
- 合并趋势:规则设置与响应执行本是一体两面,合并为一个系统可减少接口开销与数据一致性问题

### 5.【概念】RTD 为什么内建 Repository 而不直接读 MES DB?

- **保护 MES**:派工是高频查询,直接打 MES DB 会拖垮生产中枢;内建高速 Repository 支撑 Rule 运行,无需额外商用数据库
- **实时性**:通过 Oracle Trigger 等方式从 MES / 第三方系统实时同步,**延迟 <1s**
- **可追溯**:内置 **Event Maker** 可查看数据生命周期内的变化 —— "派工那一刻数据长什么样" 可回放,这是排障基础
- **一致性**:事务处理保证数据一致 + 完善异常处理

### 6.【概念】RTD 平台的高可用与性能指标?

- **分布式并行**:多台 Server 并行处理 MES 派工请求,负载均衡;单台异常不影响其他 Server(故障隔离)
- **弹性扩展**:负载重时增加 Server 节点横向扩展
- **指标**:Uptime **99.99%** 以上,支撑 **20K/Month** 产能规模
- **Cross-Fab**:单一 Rule 可整合多个 MES 的 Lot 与机台信息,支持跨厂区派工
- **在线升级 + 快速 RollBack**:升级不影响生产,异常可秒级回退上一版本
- POC 门槛:国内 12 寸 Fab(月产能 ≥10K) 稳定运行一年以上的验收案例

### 7.【规则】Lot 优先级与排序体系怎么设计?

核心思想:**多级标记 + 权重** —— 每个 Lot 具备所有 Sorting 优先级标记,最终按用户设定权重排序,不是单一字段定生死.

- **Hot Lot / Bullet Lot**:识别并优先派工;支持 By LoadPort 或整机预约,避免等待
- **Critical Ratio(CR)**:基于历史或用户提供数据计算出货紧急度,按 CR 派工
- **Target 达成率**:Daily / Product Stage Target 按完成 Ratio 排序,低完成率优先
- **Rework / Run Card Lot 优先**;也可直接依据 MES Priority 派工
- **NPW 库存联动**:NPW 低于安全存量自动提升派工等级
- **Merge 优先**:Inline 分批 Lot 有 Future Merge 站且部分已到站时,未到站 Lot 优先
- **Schedule Monitor**:快到期 Lot 优先

### 8.【规则】Q-Time 管控有哪些手段?

三层手段,从预防到抢救:

- **Auto Control(上游预防)**:计算 Q-time 区间内各站点 WIP Limit,在 **入口站管控派货数量**,从源头防止 Over Q-time
- **Auto Speedup(下游抢救)**:根据 Remain Q-time 或 **Remain Q-time / Remain CT 比值** 自动提升优先级,越接近超时越往前排
- **Manual Override(人工兜底)**:手动设定 Speedup 阈值与 WIP Limit,**优先级高于 Auto 策略**
- 配套保护:**Downstream 保护** —— 下游不可用时把 Lot 停在安全站点,避免在 Q-time Loop 里等死

### 9.【派工】机台选择与 Load Balancing 怎么做?

- **Line Balance**:基于 Bottleneck 机台群组设定,WIP 少时从上游拉货,堆货时停止派货
- **机台偏好**:按 Product/Station 指定优先机台、最低优先级机台、禁止派工机台、限定派工机台
- **Recipe 分组**:机台群组内按 Recipe 类型分组优先派工,减少换型
- **Chamber Idle 优先**:选 Idle 时间最长的 Chamber,或未来最先 Idle 的机台
- **PM 避让**:考虑机台 PM 计划,避免派货影响 PM 执行
- **最小片数限制**:低于限制则 Block;NPW 清洗机等场景支持暂 Block 小片数等 Merge
- **FIFO 兜底** + 传送效率 (传送距离短 / 时间少的 Lot 优先)

### 10.【派工】派工前的约束检查有哪些?不可派的 Lot 怎么反馈?

约束检查 (层层过滤):

- **全面约束**:Lot 属性、机台状态、MES Normal Constraint, Recipe 状态、PPID 状态
- **MES Constraint 预过滤**:MES 传参时就标记 / 过滤已有 Constraint 的 Lot,避免 RTD 二次检查浪费资源 —— 分层分担思想
- **Mark Lot 屏蔽**:被 Mark 的 Lot 不参与派工;**Reserve Queue** 内 Lot 手动优先派
- **Season / Dummy 搭配**:特定 LotType 不单独派工,仅在生产需要时伴随派工

结果反馈 (可解释性):回传 MES 时显示 **可派 Lot 的 Sorting 信息 + 不可派 Lot 的 Reason**;所有用户设定功能均具备 **独立开关**,便于灰度与排障.

### 11.【派工】Where Next 策略:Lot 的下一站怎么选?

- **存储位置优先级**:下一机台 **Dedicate OHB > Bay OHB > Default Stocker**
- **无可用下一站设备时**:优先存放当前机台对应存储区 (就近暂存),其次按 Dedicate / Bay / Default 顺序选择
- **空载具回送**:空 FOUP/FOSB 搬送至专用 Stocker,支持不同楼层 / 区域差异化配置

目标:减少搬运距离与 Stocker 拥堵,与 AMA 联动执行.

### 12.【前道】Litho 派工有哪些特殊规则?

- **Reticle 连续性**:优先派连续使用同一光罩的 Lot,减少 Reticle 搬送 Cost;**Reticle 预准备** —— 提前提供未来 Reticle 列表触发提前搬送
- **Reticle 寿命管控**:检查 Startlight / Printdown Inspection / Wafer Count / Use Time,超限则不使用该 Reticle、不派对应 Lot
- **温控 Setup Cost**:识别机台升降温状态,优先减少升降温切换
- **垂直机限**:遵守 Layer 间同机台限定;考虑 **Chuck 顺序** 排货
- **小片数避让**:避免连续派小片数 Lot 造成产能损失
- **Domapath 异常处理**:设置失败时 Hold Lot 等工程师处理;派工时检查 Litho APC R2R 状况

### 13.【前道】Furnace/Wet 凑批:Batch 最大化与等待超时怎么权衡?

- **Pre-form Batch**:WET-DIFF 间提前组批,考虑 Process Time 与 Q-time Limit,**避免过早进入 Q-time Loop**
- **Batch 优先级**:综合 Batch 内 Lot 优先级、Batch Size、等待时间,**权重可调** —— 权衡本质是这三个因子的配比
- **Batch Size 管控**:Form Batch 最大最小片数限制;在 MES Layout Recipe 允许范围内尽量 **最大化 Batch 片数**
- **Idle 等待策略**:Furnace 快 Idle 时继续等 Production Lot 还是先 Form Batch 上机 —— 可设定阈值
- **双 Diff 联动**:Wet-Diff-Diff 连续流评估第二站 Diff 的 Q-time 风险,必要时暂缓第一站及 WET 开始时间
- **连续派货**:同 Batch 内 Lot 连续派,避免进入 Diffusion 间隔过长
- **Manual Form Batch**:用户手动组批结果优先 —— 人工兜底通道
- 即使无 Q-time 也综合优先级、Size、等待时间组批

### 14.【前道】Etch/CMP/Implanter 等 Multi-Chamber 机台的 Chamber 级派工要点?

- **Chamber Idle 优先**:优先选择先 Idle 的 Chamber 派货;**多 Chamber 程序优先**(占用较多 Chamber 的程序先跑,提升整体利用率)
- **Recipe Grouping**:同 Group Lot 优先,减少频繁 Change Layer 做 Season
- **Season/Dummy 预留**:需搭 Season/Dummy 时预留足够 Load,CDW 与 Product 一起预约
- **Implanter**:考虑 Source/Energy/Gas 切换成本,优先 **最小 Setup Cost**;**Train Limit** —— 同 Setup 连续跑 Wafer 数超限后强制切 Setup
- **CMP**:检查 Pad Life Time 选择可用 PPID;按配置避免连续派小片数 Lot
- Dry Etch / CMP 派工时检查 **APC R2R Block** 状态

### 15.【规则】派工规则怎么开发、监控与维护?

- **低代码开发**:Formatter 工具 **Block 拖拽** 开发 Rule,无需编程语言或 SQL;基于流程引擎,支持调试、模拟及自定义组件
- **管理界面**:规则启用 / 禁用、顺序调整、参数设置、数据集成展示
- **性能基线**:单独 Rule 运行速度通常 **10 秒以内**
- **全链路 Log**:每次 Query 均记录 **MES 传入参数 + RTD 回传参数**,派工决策全程可回放
- **健康监控**:状态监控指令 + 健康监控脚本;异常实时通知并支持自动切换
- **报表**:CSV、饼图、折线图、柱状图、甘特图,支持用户自主开发

### 16.【后道】后道派工与前道有什么差异?RTD 怎么适用?

Function List 的 Local Rules 全是前道场景 (Litho/Furnace/Etch/CMP/Measurement),RTD 主战场在前道;后道适用但要认清差异:

- 前道关心 **Wafer**(数量、Slot Map, Recipe);后道关心 **辅材**(料号、批次、有效期) 与 Die/Strip 级追溯 —— 辅材校验要进约束检查层
- 后道 **换型频繁**,Setup Cost / 换型矩阵类规则权重比前道更高
- 后道设备自动化率参差,常见 "**RTD 只出建议、人工执行**" 的辅助派工模式

务实做法:Common Rules(优先级、Load Balancing, Where Next) 直接复用,后道按 Station 客制 Local Rules,不追求一套规则通吃前后道.

### 17.【2-12 寸】新旧机台并存、部分设备接不进自动化,派工怎么分层覆盖?

按设备自动化程度分三层,不搞一刀切:

- **全自动设备**(SECS + EAP + AMA):进 RTD 全自动派工 + AMA 搬送
- **半自动设备**(有 EAP 无 AMA):RTD 出派工建议,操作员按推荐上货
- **无数据老设备**(2/4/6 寸):不进派工范围,MES 人工派工;先通过 MOXA 串口转网 / PLC / OPC 把状态采集进来,**状态可信才纳入派工** —— 状态不准的机台派了也白派

规则侧用 "限定派工机台 / 禁止派工机台" 按 Product 圈定老设备能力范围;收编顺序先瓶颈站后一般站,一切扩围走 Pilot.

### 18.【中试线】多品种小批量凑批难,Furnace Batch 永远凑不满怎么办?

中试线痛点:量产厂凑批靠 WIP 厚度,中试线同 Recipe 的 Lot 少,死等满载会拖死交期.务实分层:

1. **放宽组批范围**:同 Recipe Group / 同温度曲线跨产品组批 (Layout Recipe 允许范围内最大化)
2. **权重调参**:Batch 优先级里把 "等待时间" 权重调高,等到阈值即放行小 Batch
3. **Idle 等待策略参数化**:快 Idle 时等多久、最小几片放行,按中试线节拍往小设
4. **Manual Form Batch 兜底**:工程师手动组批优先 —— 先人工后自动
5. 无 Q-time 的组批规则照跑 (优先级 / Size / 等待综合)

底线:**宁可选小 Batch 快跑,不为等满载饿死 Hot Lot**.

### 19.【中试线】实验 Lot 插队、研发优先与交付优先怎么用规则表达?

- **Hot Lot / Bullet Lot 机制**:实验 Lot 打 Hot 标记自动提级,支持 By LoadPort 或整机预约
- **Reserve Queue**:紧急实验 Lot 手动加入 Queue 优先派
- **政策 = 权重配置**:研发攻关期调高实验标记权重,交付冲刺期调高 CR / Target 达成率权重 —— **政策变化只改权重参数,不改规则代码**
- **防滥用**:Hot 标记配额管理 (每项目同时 Hot 的 Lot 数设上限)—— 全是 Hot 等于没有 Hot
- **公平性兜底**:等待时间进 Sorting 权重 (老化),保证量产 Lot 不被实验 Lot 永久压制
- **留痕**:谁打的 Hot、何时、理由,可追溯审计

### 20.【中试线】产品家族多、规则复杂,规则数量爆炸怎么治理?

- **分层复用**:Common Rules 全厂共用,Local Rules 只给特殊机台;新家族 (功率 / CIS / 化合物) 接入 **先只配 Common Rules 跑顺,再逐步加 Local**
- **家族差异用参数不用代码**:家族间差异体现在权重、阈值、机台偏好等参数,规则逻辑不变 —— 与全产品家族共存的关键
- **功能独立开关**:每个功能有开关,支持单功能灰度与快速止血
- **所有权下放**:Block 拖拽低代码让 IE / 制造工程师自维护参数与简单规则,IT 只管复杂规则
- **规则生命周期**:命名规范、上线评审、仿真验证、定期清理失效规则

**追问**:怎么判断规则失效?(看规则命中率与不可派 Reason 分布报表,长期零命中或 Reason 集中即可疑)

### 21.【场景】低优先级 Lot 永远排不上 (饿死),怎么发现与解决?

发现:

- 报表看站点 **WIP 停留时间分布** 与 Lot 等待时长排行,长尾 Lot 现形
- 分析不可派 Reason 与 Sorting 日志,确认是 "一直被插队" 还是 "被约束卡死"

解决 (先保生产,再上机制,最后查根因):

1. **短期**:Reserve Queue 手动捞起 / MES Priority 手动提级
2. **机制**:**老化(Aging)** —— 等待时间作为 Sorting 标记进权重,等越久优先级越高;FIFO 兜底
3. **配额**:Hot Lot 配额管控,防止高优先级泛滥挤压
4. **根因**:检查是否机台偏好 / 限定机台配错,把该 Lot 圈进了常年满载的机台

### 22.【场景】关键设备闲置但 Lot 在排队,怎么排查?

典型根因是 **约束层层过滤后无可用机**.排查框架:

1. **看回传**:RTD 回传的 **不可派 Reason** 是第一入口,直接定位被哪条约束卡掉
2. **逐层过约束**:Lot 属性 → 机台状态 → MES Normal Constraint → Recipe/PPID 状态,看哪层把唯一可用机过滤掉
3. **查开关与顺序**:管理界面核对功能开关、规则启用 / 禁用与执行顺序 —— 常见坑是新规则上线把旧规则结果覆盖
4. **查数据**:Event Maker 回放派工时刻 Repository 里的机台状态,区分 "**状态同步延迟**" 与 "**规则过滤**"
5. **仿真复现**:仿真模式重放该事件,逐个关开关定位冲突规则

处置:先手动指定派工保生产,再修规则,变更留痕可追溯.

### 23.【场景】Lot 的 Q-Time 即将超时,怎么紧急调度?

- **抢救**:Auto Speedup 按 Remain Q-time / Remain CT 比值自动提级;不够就 **Manual Override** 手动设 Speedup 阈值 (优先级高于 Auto);再不行 Reserve Queue / 手动直接派
- **保护**:Downstream 不可用时把 Lot 停在安全站点,避免卡在 Q-time Loop 里超时
- **预防(平时就该配好)**:Auto Control 在 Q-time 区间入口站设 WIP Limit 限流
- **事后复盘**:为什么走到快超时 —— WIP Limit 设置不合理?下游机台 Down 太久?Speedup 规则没生效?形成 5W1H 记录

### 24.【场景】新派工规则上线,怎么安全验证?

**仿真 → 灰度 → 全量**,全程可回滚:

1. **仿真先行**:流程引擎自带调试 / 模拟,用历史 WIP 快照跑仿真,对比新旧规则派工结果差异
2. **灰度(Pilot)**:单 Station / 单机台先启用 —— 功能独立开关 + 规则按范围启用,未参与部分完全不受影响
3. **监控**:全链路 Log(MES 传入 / RTD 回传)+ 报表观察 Sorting 结果与不可派 Reason 分布变化
4. **回滚预案**:版本控制 + 快速 RollBack;在线升级不影响生产
5. **全量**:灰度观察 1-2 周无异常后推广,变更全程留痕

### 25.【场景】派工结果与预期不符 (派了 "不该派" 的机台 / Lot),怎么定位?

1. **全链路 Log**:先查该次 Query 的 **MES 传入参数 + RTD 回传参数**,确认输入对不对 (Garbage In, Garbage Out)
2. **数据回放**:Event Maker 查看派工时刻 Repository 数据的生命周期变化,确认 MES 同步是否延迟 (对照 <1s 指标)
3. **规则路径**:管理界面查规则执行顺序、开关状态、权重参数,版本控制查 "谁最后改了什么"
4. **仿真重放**:同输入重跑复现问题
5. **定性归类**:数据问题 (同步延迟)→ 规则问题 (逻辑 / 参数)→ 操作问题 (手动 Override 残留),重大 Issue 提交 5W1H / 8D 书面记录

### 26.【软技能】制造部说 "RTD 派的不如老师傅",怎么应对?

- **先承认合理性**:老师傅经验里有未显性化的约束 (哪台机最近状态飘、哪个产品娇贵),规则确实没覆盖
- **把经验翻译成规则**:跟老师傅逐案例复盘,把他的决策逻辑变成机台偏好 / 权重 / 限定参数 —— RTD 的价值是 **把个人经验组织化**,不是取代人
- **用数据对话**:拉报表对比 RTD 派与人工派的机台利用率、Q-time 达标率、Move 数
- **保留人工通道**:Manual Form Batch, Reserve Queue、手动指定本身就是系统设计的一部分 —— 人机协同不是非此即彼
- 目标对齐:RTD 不追求每次都比老师傅聪明,追求 **稳定、可追溯、24 小时不走神**

### 27.【软技能】RTD 工程师最重要的三个能力?

**生产业务理解力(不懂 Reticle 连续性、Furnace 凑批、Q-Time 就写不出对的规则)、系统与数据思维(事件驱动架构、Repository 同步机制、全链路 Log 排障)、沟通翻译能力(把制造政策与老师傅经验翻译成规则参数,在研发优先与交付优先之间找到可执行的平衡)**.

## RTD Function List

### 1. 平台架构与性能要求

#### 1.1 系统架构与高可用性

支持分布式部署与高可用设计, 满足大规模晶圆厂生产需求.

- **分布式并行处理**: 支持多台 Server 并行处理 MES 派工请求, 具备负载均衡能力, 避免单点过载.
- **弹性扩展**: 系统负载较重时, 支持通过增加 Server 节点横向扩展 RTD 处理能力.
- **故障隔离**: 单台 RTD Server 异常不影响其他 Server 运行, 确保生产连续性.
- **高可用指标**: 系统 Uptime 需达到 99.99% 以上, 支持 20K/Month 产能规模.
- **Cross-Fab支持**: 支持跨厂区派工, 单一 Rule 可整合多个 MES 的 Lot 与机台信息.
- **POC验证**: 需在国内 12 寸 Fab 厂 (月产能≥10K) 有稳定运行一年以上并验收的成功案例.

#### 1.2 数据存储与同步

采用独立 Repository 机制, 保障 MES 数据库安全与数据实时性.

- **内建Repository**: 内置独立高速 Repository 支持 Rule 运行, 无需额外商用数据库, 不直接读取 MES DB.
- **实时数据同步**: 通过 Oracle Trigger 等方式从 MES/ 第三方系统实时更新数据, 延迟控制在秒级 (<1s).
- **历史追溯**: Repository 具备历史数据追溯能力, 内置 Event Maker 可查看数据生命周期内的变化.
- **事务一致性**: 支持事务处理保证数据一致性, 具备完善的异常处理机制.

#### 1.3 版本管理与升级

支持在线热更新与快速回滚, 保障生产零中断.

- **版本控制**: 支持完整的版本控制功能.
- **Online升级**: 支持系统在线升级, 不影响正常生产.
- **快速RollBack**: 支持快速回滚至上一版本, 应对升级异常.

### 2. 派工规则开发与管理

#### 2.1 可视化开发工具

提供低代码 / 无代码开发环境, 降低 Rule 开发门槛.

- **Block拖拽开发**: 提供 Formatter 工具, 通过 Block 拖拽方式开发 Rule, 无需掌握编程语言或 SQL.
- **流程引擎**: 基于流程引擎开发 Rule, 支持调试、模拟及自定义组件开发.
- **详细日志**: 开发工具提供详细的 Log 记录及系统异常报警机制.
- **管理界面**: 配套友好的 UI 界面, 支持启用 / 禁用、顺序调整、参数设置及数据集成展示.

#### 2.2 规则执行与监控

保障 Rule 高效执行与全链路可追溯.

- **高性能计算**: 单独 RTD Rule 运行速度通常在 10 秒以内.
- **全链路日志**: 每次 Query 均有 Log 记录, 包含 MES 传入参数及 RTD 回传参数.
- **健康监控**: 提供丰富的状态监控指令, 支持编写健康监控脚本;提供实时监控工具, 异常时实时通知并支持自动切换.
- **外部数据集成**: 支持通过文件 (Flat/CSV) 或 DB 直接读取 Scheduling, Planning, Reporting 等外部系统信息.
- **报表输出**: 支持 CSV、饼图、折线图、柱状图、甘特图等多种格式, 支持用户自主开发报表.

### 3. 通用派工策略 (Common Rules)

#### 3.1 优先级与排序逻辑

支持多维度的 Lot 优先级计算与精细化排序.

- **多级优先级标记**: 每个 Lot 具备所有 Sorting 优先级标记, 最终根据用户设定的权重排序.
- **高等级Lot优先**: 支持 Bullet Lot/Hot Lot 识别与优先派工;支持 By LoadPort 或整机预约, 避免等待.
- **Q-Time管控**:
    - **Auto Speedup**: 根据Remain Q-time或Remain Q-time/Remain CT比值自动提升优先级.
    - **Auto Control**: 计算Q-time区间内各站点WIP Limit, 在入口站管控派货数量, 防止Over Q-time.
    - **Manual Override**: 支持手动设定Speedup阈值与WIP Limit, 优先级高于Auto策略.
- **Critical Ratio**: 基于历史数据或用户提供数据计算出货紧急程度 (CR), 按 CR 派工.
- **Target达成率**: 支持 Daily Stage Target/Product Stage Target, 按完成 Ratio 排序, 低完成率优先.
- **Rework/Run Card优先**: 支持 Rework Lot 与 Run Card Lot 优先派工.
- **MES Priority**: 支持直接依据 MES Priority 进行派工.
- **NPW库存联动**: NPW 可用量低于安全存量时自动提升派工等级.
- **Schedule Monitor**: 优先考虑快要到期的 Schedule Monitor Lot.
- **Merge优先**: Inline 分批 Lot 若有 Future Merge 站且部分已到站, 未到站 Lot 优先.

#### 3.2 机台选择与 Load Balancing

支持智能机台分配与产线平衡优化.

- **Line Balance**: 基于 Bottleneck 机台群组设定, WIP 少时从上游拉货, 堆货时停止派货.
- **机台偏好设置**: 支持指定特定 Product/Station 下的优先机台、最低优先级机台、禁止派工机台及限定派工机台.
- **Recipe分组**: 支持机台群组内按 Recipe 类型分组优先派工.
- **Chamber Idle优先**: 优先选择 Idle 时间最长的 Chamber 或未来最先 Idle 的机台.
- **传送效率**: 优先选择传送距离短或传送时间少的 Lot.
- **PM避让**: 考虑机台 PM 计划, 避免派货影响 PM 执行.
- **最小片数限制**: 支持设定机器最小派工片数, 低于限制则 Block;NPW 清洗机等特定场景支持暂 Block 小片数等待 Merge.
- **FIFO**: 支持先进先出基础规则.

#### 3.3 约束检查与状态联动

确保派工决策符合物理与业务约束.

- **全面约束检查**: 派工前检查 Lot 属性、机台状态、MES Normal Constraint, Recipe 状态、PPID 状态.
- **MES Constraint预过滤**: MES 传参时标记或过滤已有 Constraint 的 Lot, 避免 RTD 二次检查浪费资源.
- **Downstream保护**: Downstream 不可用时将 Lot 停在安全站点, 避免 Q-time Overdue.
- **Mark Lot屏蔽**: 被 Mark 的 Lot 不参与派工.
- **Reserve Queue**: 支持手动加入 Reserve Queue, Queue 内 Lot 优先派工.
- **Season/Dummy搭配**: 支持特定 LotType(如 Season) 不单独派工, 仅在生产需要时伴随派工.
- **Scan/Sampling**: 支持自定义规则判定 Lot 是否进入 YE 站点.
- **结果反馈**: 回传 MES 时显示可派 Lot 的 Sorting 信息及不可派 Lot 的 Reason.
- **功能开关**: 所有用户设定功能均具备独立开关.

#### 3.4 Where Next 策略

优化 Lot 下一站目的地选择与搬送效率.

- **存储位置优先级**: 优先选择下一机台 Dedicate OHB > Bay OHB > Default Stocker.
- **无设备时的暂存**: 当前无可用下一站设备时, 优先存放在当前机台对应存储区, 其次按 Dedicate/Bay/Default 顺序选择.
- **空载具回送**: 支持空 FOUP/FOSB 搬送至专用 Stocker, 支持不同楼层 / 区域差异化配置.

### 4. 设备专属派工规则 (Local Rules)

#### 4.1 Litho (光刻) 派工

针对光刻机台特性优化 Reticle 管理与 Setup 效率.

- **Reticle连续性**: 优先派工连续使用同一光罩的 Lot, 减少 Reticle 搬送 Cost.
- **Reticle寿命管控**: 检查 Startlight/Printdown Inspection/Wafer Count/Use Time, 超限不使用该 Reticle 且不派对应 Lot.
- **温控Setup Cost**: 识别机台升降温状态, 优先减少升降温切换.
- **小片数避让**: 避免连续派小片数 Lot 造成产能损失.
- **Loading Balance**: 综合考虑 WIP、状态、Constraint 等因素平衡 Litho 群组负载.
- **Reticle预准备**: 提前提供未来 Reticle 列表, 触发提前搬送.
- **APC R2R联动**: 检查 Litho APC R2R 状况.
- **垂直机限**: 遵守 Layer 间同机台限定规则.
- **Chuck顺序**: 考虑 Chuck 顺序进行排货.
- **Domapath异常处理**: Domapath 设置失败时 Hold Lot 等待工程师处理.

#### 4.2 Furnace/Wet (炉管 / 湿法) 派工

针对 Batch 机台特性优化组批与 Q-time 管控.

- **Pre-form Batch**: WET-DIFF 间提前组批, 考虑 Process Time 与 Q-time Limit, 避免过早进入 Q-time Loop.
- **连续派货**: 同 Batch 内 Lot 连续派货, 避免进入 Diffusion 时间间隔过长.
- **Batch Size管控**: 检查 Form Batch 最大最小片数限制.
- **Batch优先级**: 综合考虑 Batch 内 Lot 优先级、Batch Size、等待时间, 权重可调.
- **双Diff联动**: 针对 Wet-Diff-Diff 连续流, 评估第二站 Diff Q-time 风险, 必要时暂缓第一站及 WET 开始时间.
- **Idle等待策略**: 支持设定 Furnace 快 Idle 时是继续等待 Production Lot 还是先 Form Batch 上机.
- **Zone Inhibit/Loading Effect**: Form Batch 时考虑 Zone 抑制与装载效应.
- **Manual Form Batch**: 支持用户手动组批结果优先.
- **Layout Recipe优化**: 在 MES Layout Recipe 允许范围内尽量最大化 Batch 片数.
- **GOI/FML支持**: 支持 GOI Lot 自动派工及 Furnace 单跑 FML 测机.
- **非Q-time组批**: 即使无 Q-time 也综合考虑优先级、Size、等待时间进行组批.

#### 4.3 Multi-Chamber / Etch / CMP / Implanter 派工

针对单片及特殊机台优化 Setup 与腔体利用率.

- **Chamber Idle优先**: 优先选择先 Idle 的 Chamber 派货.
- **多Chamber程序优先**: 优先选择占用较多 Chamber 的程序.
- **Season/Dummy预留**: 需搭 Season/Dummy 时预留足够 Load, CDW 与 Product 一起预约.
- **Recipe Grouping**: 同 Group Lot 优先, 减少频繁 Change Layer 做 Season.
- **APC R2R联动**: Dry Etch/CMP 派工时检查 APC R2R Block 状态.
- **Implanter Setup Cost**: 考虑 Source/Energy/Gas 切换成本, 优先最小 Setup Cost.
- **Implanter Train Limit**: 同 Setup 连续跑 Wafer 数超限后切换 Setup.
- **CMP Pad Life**: 检查 Pad Lift Time 选择可用 PPID.
- **CMP小片数避让**: 根据配置避免连续派小片数 Lot.

#### 4.4 Measurement / Sorter 派工

针对量测与分拣机台优化采样与 Job 管理.

- **Wafer Mark优先**: WIP 超过 Wafer Mark 时 Product Lot 优先.
- **同机台限定**: 遵守 Pre/Post Measurement 同机台规则.
- **Monitor Lot优先**: PM/Downtime 后的 Monitor Lot 优先, 加速机台恢复.
- **指定机台优先**: 支持指定某些量测机台 Product Lot 优先.
- **Sorter Job Prep**: 同 Job 内 Lot 一起 JobPrep.
- **Sorter多源排序**: 同时考虑 Source/Target Lot 及 Carrier 状况.

### 5. 项目实施与服务保障

#### 5.1 测试与验收标准

严格的测试流程与明确的验收指标.

- **全流程测试**: 上线前必须通过硬件性能、子模块功能、集成测试、系统测试, 并提供完整文档.
- **验收标准**: 各项指标达标, 完成 RFQ 及补充内容, 技术转移与培训完成并获认可.
- **需求变更**: 验收前用户提出的合理新需求, 厂商应无条件满足.
- **解释权**: 所有需求以用户最终解释为准, 差异项通过 SRS 澄清.

#### 5.2 培训与知识转移

确保用户具备自主二次开发与运维能力.

- **全程参与**: 用户与 IT 全程参与评估、设计、开发、测试、培训、部署.
- **培训课时**: 代码开发≥10 天, 系统业务逻辑≥15 天, Trouble Shooting≥3 天.
- **教材提供**: 提供全部功能清单、说明文档、开发设计文件及电子教材.
- **二次开发支持**: 提供二次开发所需全部环境、技术及工具服务.
- **入门课程**: 按用户要求频繁进行入门培训.

#### 5.3 维保与技术支持

提供驻厂服务与严格的 SLA 保障.

- **1年驻厂维保**: 验收日起 1 年驻厂服务, 协助处理问题与技术难题.
- **专家支持**: 驻厂无法解决的问题, 24 小时内安排资深专家入厂.
- **免费升级**: 项目及维保期间提供不受限免费的软件升级、迁移与 Bug Fix.
- **SLA响应**: 紧急 Case≤2h(或有效替代方案), 次紧急≤4h, 一般≤8h.
- **接口费用**: RTD 与第三方系统集成接口开发费用由 RTD 厂商承担.
- **Issue报告**: 线上重大 Issue 需提交格式化书面记录 (5W1H 或 8D 报告).

#### 5.4 知识产权

明确客制化成果归属.

- **IP归属**: 所有客制化系统 / 代码知识产权属于用户公司, 受法律保护.
- **保密义务**: 未经许可, 厂商不得在其他公司 Release 或讨论客制化代码 / 解决方案.

# AMA

## AMA interview

### 1.【概念】AMA 在 CIM 中的位置?与 RTD, MES, EAP 的分工?

- **AMA**:全自动化的 "执行手脚" —— 支持 OHT 设备 Run 货全自动化,遵循 SOP 及时供料,把派工决策变成真实搬运动作:Run 货派工、Season/Dummy/Monitor 准备、跨站点衔接、异常恢复
- **RTD**:派工决策的 "大脑" —— 按规则算出 "哪台机跑哪批货";AMA 监听机台 /LoadPort/Lot 状态变化,实时呼叫 MES/RTD 获取派工列表并执行
- **MES**:账料中枢 —— Lot 账、Flow/Step, Track In/Out;AMA 一切动作以 MES 账为准
- **EAP**:设备控制 —— AMA 把货送到 LoadPort 后,EAP 负责 Recipe 下发、Start、数据采集

一句话:**RTD 决定 "做什么",AMA 负责 "送到位",EAP 负责 "跑起来",MES 负责 "记清楚"**.

### 2.【概念】AMA 的派工触发机制有哪些?为什么需要多种并存?

- **定时触发**:基于时间周期的周期性派工触发
- **事件触发**:LoadPort 状态变化、机台状态变化等实时事件 —— APF 监听 Repository Event(机台、LoadPort, Lot 信息变化),状态变更毫秒级呼叫 MES/RTD 取派工列表
- **Watch Dog / Schedule 兜底**:事件可能丢失 (消息中断、系统重启、EAP 断线),Watch Dog 定时巡检未完成派工,保证 "事件没收到也能补上"

**考点**:事件触发保实时性,定时与 Watch Dog 保完备性,是互补关系不是二选一.全自动系统不能假设 "事件一定会到".

### 3.【概念】单一设备 Run 货全自动化的三种设备形态?

| 形态                       | 特征                                             | 派工要点                                                       |
| :------------------------- | :----------------------------------------------- | :------------------------------------------------------------- |
| Fixed Buffer 设备          | LoadPort 固定,货直接上 Port                      | 单 Lot / 多 Lot 合批 / Season 搭配 / 空 FOUP 搭配 / Dummy 预留 |
| Internal Buffer (NTB) 设备 | 带 NTB (FOUP Exchanger) 或内部 Buffer,可暂存多批 | Batch of Multiple Lots, Furnace Form Batch, Dummy 自动补充     |
| 专用自动化设备             | Sorter, FOUP Clean, Inspection                   | 分拣、清洗、检测专项 Job 自动派工                              |

三种形态派工逻辑差异大,AMA 按设备形态配置不同 Workflow,不是一套逻辑打全场.

### 4.【概念】Fixed Buffer 设备有哪些典型派货组合?

- **单 Lot 派工**:单个 Production Lot 或 Monitor Lot
- **多 Lot 合批**:一个 FOUP 内含多个 Production/Monitor Lots 的 Batch 派工
- **Season 搭配**:1 Production + 1 Season;1 Monitor + 1 Season
- **空 FOUP 搭配**:1 Production + 1 空 FOUP(如 Back Side Clean 设备左进右出场景)
- **Dummy 预留**:Auto Reserve Etch Inside/Outside Dummy Lot
- **Zero Idle CMP**:MES 触发 CMP Season 条件时,自动同时派工 Production 与 Season Lot,货到齐后 Season 先 Run 实现 Zero Idle

### 5.【概念】为什么必须 "Season 先 Run"?Season 优先逻辑怎么实现?

Season 的目的:用非产品片暖机、稳定腔体状态,让 Production 片跑在稳定的工艺环境里.Production 先跑,Season 就失去意义.

实现:

- Production + Season 组合派工中,**无论谁先到达 LoadPort,均遵循 Season Lot 先 Run 原则** —— 先到的 Production 被 Hold 住等 Season 完成
- 单 LoadPort 场景:允许一 Lot 在 Port、一 Lot 预送 OHB 候位
- 支持自动准备 Pilot,Season/Monitor Lot Auto Split for Inuse

### 6.【概念】APF 是什么?AMA 为什么构建在 APF 之上?

APF = **Activity Manager for Automation**,全自动化派工的基础组件平台:

- **事件驱动**:Repository Event 监听机台 /LoadPort/Lot 变化,毫秒级响应;支持 APF Component Event 及内部自定义 Event 收发,灵活构建实时 Workflow
- **多触发**:Event + Watch Dog + 定时 Schedule 三种方式驱动 Workflow
- **分布式**:多 Server 并行处理派工请求,自动 Load Balance
- **集成能力**:通用 Web Service(外部触发 AMA / AMA 调用外部)、Tibco RV、直接整合 RTD Dispatch(简单调用即可跑 Rule 与 Report)、Oracle Raw SQL / Procedure, OS 命令调用
- **可视化开发**:AMA/AMR Block 拖拽撰写派工 Workflow,支持执行历史查询
- **资源互斥锁**:内部资源 Claim/Release,避免逻辑 Race Condition

AMA 的派工逻辑本质是大量 Workflow,APF 让其低代码化、可复用、执行可追溯.

### 7.【概念】什么是跨站点 Run 货全自动化?和单设备自动化区别在哪?

单设备自动化是 "点的供料"(把货按时送到某台机 LoadPort),跨站点自动化是 "资源流" —— 辅助资源在多站点间准备、使用、回收的全链闭环:

- **Auto Batch Run**:带 Furnace Monitor 的自动 Batch Run
- **跨站准备**:Etch/Furnace Dummy Lots 自动 Prepare 与 Reserve;Season/Monitor Lot Auto Split for Inuse
- **复用循环**:Monitor/Season/Dummy 的 Reuse 与 Recycle 自动化
- **Eqp Monitor**:带或不带 Season 的 Eqp Monitor 自动化;单机台多 Monitor Lot Carpool(拼车)
- **Pre-send**:基于 Watermark 或 Pending Process Wafer Qty 的跨站预发送

### 8.【自动化】NTB / Furnace 这类 Internal Buffer 设备,派工特殊在哪?

- 内部 Buffer 可暂存多批 → 支持 **Batch of Multiple Lots** 自动派工,不是一次一 Lot
- **Form Batch**:遵循 MES 机制自动 Form Batch 并派货;Furnace Form Batch 自动组合 Production 与 Monitor Lot
- **Furnace Dummy 自动补充**:Dummy 不足时自动选择可用 Dummy Lot 派工至机台 —— 炉管凑不满舟就开不了火,Dummy 供给是开炉前提
- 支持带 Furnace Monitor 的 Batch、纯 Furnace Monitor Lot 派工、Tools with NTB (FOUP Exchanger) 的自动化派工

### 9.【自动化】Sorter, FOUP Clean, Inspection 这些辅助设备怎么纳入全自动化?

- **Sorter**:支持 FOSB↔FOUP, FOUP↔FOUP 多种 Job 类型;Planned 与 Adhoc Sorter Actions;1->N, N->1(N>LoadPort 数) 的大规模分拣;换 FOUP 时自动选择可用 FOUP
- **FOUP Clean**:按规则 (如上次 Clean 时间) 排序,自动派工空闲清洗位;待洗 FOUP 内有 Lot 时,自动创建 Adhoc Sorter Job 先把 Lot 转移走再派清洗
- **FOUP Inspection**:依据 MES Flow 过滤需 Inspection 的 FOUP,设备空闲时自动派工至 LoadPort

**考点**:辅助设备自动化的价值是 "不打断主流" —— FOUP 该洗了不用人等,Lot 自动挪走,Production 流不被杂事卡住.

### 10.【搬运】Pre-Send 策略:短 Process 与长 Process 设备的供料节奏有何不同?

- **短 Process 设备**(单片快速作业):货跑得比搬得快,瓶颈在搬运 → 按预定义 **水位 (Watermark)** 预先把货搬至设备附近 **OHB** 候着,LoadPort 一空立即补位
- **长 Process 设备**(如炉管):货等机台,瓶颈在设备 → 按 **未加工 Wafer 数量 (Pending Process Wafer Qty)** 及水位控制派工节奏,避免 FOUP 压在 Port 上无法周转
- 共同目标:LoadPort 持续有料可跑 (产能利用率优化),又不过度占用搬运与存储资源

**追问**:Pre-Send 太激进有什么副作用?(OHB 被占满、FOUP 周转率下降、急货插单挪不动 —— 水位要按设备 Process 时间分层调)

### 11.【自动化】Dummy 与 Season 自动控制具体做什么?RC/RI 怎么联动?

- **Etch Dummy 控制**:Inside Dummy 不足自动补料到 LoadPort;DummyPort 为空自动补料;达到 MaxUsedCount 自动 Dummy Out
- **Season 自动准备**:需用 Season 时自动从 Source NPW Product 分批,支持逻辑分批绑定机台
- **RC/RI 联动**:配方变更后 (RC)、机台闲置后 (RI) 需先 Season 验证 —— 机台状态 / 配方变更事件触发 Season 条件 (如 MES 对 CMP 触发 Season 条件),AMA 自动准备 Dummy/Season Run,货到齐 Season 先 Run(Zero Idle)
- **复用循环**:Monitor/Season/Dummy 的 Reuse 与 Recycle 自动化

价值:RC/RI 后最常见的空窗是 "机等 Season、Season 等人找片",自动化把这个等待消灭掉.

### 12.【自动化】NPW 库存与生命周期怎么全自动管理?

- **水位管理**:自动计算 NPW Product Wafer 数量,低于水位自动下新 NPW 或 Downgrade 补充;水位不足时自动创建 NPW Lot,从 FOSB 选 Wafer 下线并执行 Sorter
- **自动分批**:Eqp Monitor 按 Schedule Monitor 时间及提前量自动分批 (物理分批自动选空 FOUP);GOI Monitor 按 MES GOI Schedule 提前准备;Furnace Monitor 按 Preform Batch 时间及水位提前备货;需 Dummy 时自动从 Source NPW Product 创建 Dummy Lot
- **生命周期三级处置**:
    - InUse End → 按 **MaxUsedCount** 决定 Reuse / Recycle / Downgrade
    - Recycle End → 按 **MaxRecycleCount** 决定 Reuse / Reclaim / Downgrade
    - Reclaim End → 按 **MaxReclaimCount** 决定 Reuse / Downgrade
    - 到达 Downgrade 站点且有对应表时 **Auto Downgrade**

一句话:NPW 从入库、使用到回收全流程不需要人下单.

### 13.【异常】Group Cancel 机制解决什么问题?

场景:JobPrep 已做 (搬送指令下发、LoadPort 资源预留),但 Lot 长时间未到达 —— 可能 OHT 堵车、搬运失败、FOUP 卡在 STK.

机制:JobPrep 后 **超过可配置时长 Lot 未到达,系统自动 Cancel JobPrep**,释放机台预留状态,让其他 Lot 能派上来,避免设备空等.

**考点**:全自动系统必须假设 "搬运会失败",每个预留动作都要有超时回收机制,否则一次搬运异常就把设备锁死.这是异常处理设计的基本功.

### 14.【高可靠】AMA 一台 Server 宕机,全厂派工会停吗?

不会,架构上就是多 Server 设计:

- **负载均衡**:多台 Server 运行时自动 Load Balance,避免单点过载
- **故障转移**:单 Server 异常时,其他 Server 自动接管后续派工任务,不影响生产
- APF 分布式设计:多 Server 并行处理自动派工请求

注意边界:故障转移接管的是 "后续派工任务";已在途的搬运动作由搬运控制系统负责.AMA 恢复后要能对账 (Job 执行历史查询),确认宕机窗口内哪些 JobPrep 已完成、哪些要 Group Cancel 重来.

### 15.【2-12 寸】12 寸与 8 寸以下厂区,AMA 自动化成熟度差异?怎么分层落地?

| 维度     | 12 寸                                      | 8 寸以下 (2/4/6/8)                          |
| :------- | :----------------------------------------- | :------------------------------------------ |
| 载体     | FOUP/FOSB 标准封装                         | SMIF / 开放式 Cassette,甚至花篮             |
| 搬运     | OHT + STK/OHB,全自动成熟                   | 人工搬运为主,局部 AGV/RGV                   |
| AMA 角色 | 全自动化派工主力 (OHT 设备 Run 货全自动化) | 退化为 "自动派工建议 + 人工执行 + 扫码闭环" |
| 触发     | LoadPort/ 机台事件实时触发                 | 靠 MES Track In/Out 事件近似                |

分层方案:12 寸区域上全自动化;8 寸以下先复用 AMA 的决策价值 (派什么、Season/Dummy/Monitor 准备、NPW 水位),执行层留给人并扫码过账;新旧混线区域按机台逐台评估 OHT 可达性.后道封装段载体是 Magazine/Tray 而非 FOUP、无 LoadPort 事件,AMA 全自动模型不直接适用,可复用其派工决策与 APF Workflow 能力.

### 16.【前道】Etch 设备 Inside/Outside Dummy 自动控制的要点?

- **Auto Reserve**:派 Production Lot 时自动 Reserve Etch Inside/Outside Dummy Lot
- **自动补料**:Inside Dummy 不足时自动补料到 LoadPort;DummyPort 为空时自动补料
- **寿命管控**:Dummy 片有使用次数寿命,达到 **MaxUsedCount** 自动 Dummy Out,进入 Reuse/Recycle/Downgrade 流程
- **库存联动**:Dummy 不足时自动从 Source NPW Product 创建 Dummy Lot

**考点**:Dummy 管理的核心是 "次数账" —— 超寿命 Dummy 继续用会造成颗粒污染腔体,必须靠系统自动退役,靠人记次数一定出漏子.

### 17.【全产品】CIS Wafer Bonding 的 Pixel/Logic 片数不一致,怎么自动派工?

场景:CIS 堆叠工艺中 Pixel 片与 Logic 片要 1:1 配对 Bonding,但两者 Flow 长度不同,到达 Bonding 站时片数常不一致.

AMA 方案:

- RTD 选择 **Pixel < Logic** 的组合 (Logic 多出可拆,Pixel 少了配不上对)
- Full Auto 对 Logic 做 **逻辑分批**
- 多余片数通过 **Sorter 传出**
- 片数一致后再 Bonding

**考点**:全产品家族下,产品专属约束 (配对比例) 通用规则覆盖不了,靠 APF Workflow 客制承载 —— 这是 AMA 平台化能力的体现.

### 18.【中试线】实验 Lot 人工干预多,全自动化边界怎么设计?

中试线核心矛盾:全自动要 "无干预",实验 Lot 偏偏 "步步要确认".务实分层:

- **按 LotType 划边界**:量产 Lot 走全自动流;实验 Lot 默认 "自动派工建议 + 人工确认放行",关键站 (新 Recipe 首站、首次试跑) 强制人工
- **站点白名单**:实验 Lot 哪些站允许自动 (如常规量测)、哪些禁止,按 Flow 逐站配置,验证一站开放一站
- **Pilot 自动准备例外**:集成 R2R/RTD/MES,产品触碰 Pilot 条件时自动分批,分出后按 WhatNext 自动派工 —— 实验流程中的标准段落仍可自动
- **兜底原则**:实验 Lot 被误搬误加工的代价 >> 人工确认的成本,宁可保守

**考点**:自动化边界不是技术问题,是责任问题 —— 搬错了谁负责,那个环节就要留人工确认点.

### 19.【中试线】研发与量产混线,AMA 如何做到互不干扰?

- **派工来源隔离**:RTD 规则区分量产 / 研发 Lot,AMA 只执行派工列表内的任务
- **资源互斥**:APF 支持内部资源 **Claim/Release**,避免逻辑 Race Condition —— 同一 LoadPort 不会被研发与量产两条派工 Workflow 同时抢占
- **优先级分层**:量产 Lot 保供料优先 (LoadPort 持续有料),研发 Lot 用空闲窗口
- **异常隔离**:研发 Lot 派工异常 (如 Group Cancel) 只影响自身,不阻塞量产派工流
- 一切自动化规则变更走 Pilot 机制:个别设备 / 小范围先验证,不影响未参与部分

### 20.【中试线】Tool Recovery 后 (PM 完 / 故障修复),怎么自动恢复到可 Run 货状态?

- **Recovery 提前准备**:PMS 指定 Recovery Package 或 MES 设为 **WaitPrepare** 时,AMA 自动提前做 Monitor 分批 —— 机台还没修好,Monitor Lot 已备好
- **Season 衔接**:PM 后需 Season/Monitor 验证,自动准备 Season Run,遵循 Season 先 Run 原则
- **恢复派工**:机台状态变回 Available → 事件触发呼叫 RTD 取派工列表,恢复正常 Run 货自动化
- 价值:Recovery 的瓶颈常不是修机本身,而是 "修好了等 Monitor/Season 片",自动化把等待前置消化

### 21.【场景】OHT 堵塞 / 死锁,派工大面积卡住,怎么处置?

分层处置:

1. **先保生产**:确认堵塞范围,受影响机台切人工供料,优先保在跑 Lot 与关键机台 LoadPort 有料
2. **止血**:暂停向堵塞区域的自动派工,避免更多 FOUP 涌入加重死锁;已 JobPrep 未到达的靠 **Group Cancel** 超时自动释放
3. **排障**:联合搬运控制系统 (MCS)/ 厂商定位死锁点 (路口冲突、STK 出入库拥塞、故障车占道)
4. **恢复**:分段恢复自动派工,先单区域验证再全量
5. **复盘**:核对堵塞时段 Lot 账料 (挂在 OHT 上的 FOUP 账在哪),一切处置留痕可追溯

原则:OHT 是物流,AMA 是调度 —— 调度必须为物流异常设计降级路径,而不是假设物流永远正常.

### 22.【场景】STK/OHB 满仓,自动派工送不出也存不进,怎么办?

现象:Pre-Send 持续往 OHB 备货至满仓;STK 满仓导致下线 FOUP 无处可存,派工链整体卡死.

处置:

- **短期**:调低或暂停非必要 Pre-Send;优先把已在 OHB 的货消化上机;人工清出长期滞留 FOUP
- **中期**:复查水位配置 —— 短 Process 设备 OHB 水位过高是常见根因;NTB 设备是否被当成 "免费存储" 堆货
- **长期**:NPW、空 FOUP 也占仓位,把 NPW 水位与空 FOUP 数量纳入仓位规划;加爆仓预警 (水位到阈值提前报警,而非满了才发现)

**考点**:存储也是资源.全自动化节奏控制的本质是仓、运、产三者平衡,只盯着 "设备有料" 会把仓挤爆.

### 23.【场景】FOUP 搬错位置,或实物与 MES 账不符,怎么排查?

排查路径:

1. **对账**:以 MES 账为基准,盘点异常 FOUP 应有位置 vs 实际位置 (STK/OHT/LoadPort/OHB)
2. **追溯搬运记录**:AMA 派工 Workflow 支持 **执行历史查询**,查该 FOUP 最近的派工 Job(触发源、起点、终点、完成状态)
3. **找分叉点**:常见根因 —— 人工搬动未过账、搬运失败重试产生重复 Job, JobPrep 后 Group Cancel 但货已在途
4. **修复**:实物归位 + MES 账修正 (变更留痕);评估 FOUP 内 Lot 是否有误加工风险

原则:全自动系统里账料不符,**第一嫌疑人是 "人工干预没走系统"**,其次才是系统 Bug.

### 24.【场景】货送到 LoadPort 但设备不响应 (不 Load / 不 Start),恢复流程?

分层排查:

1. **链路分段定位**:AMA 送到 Port 了吗 (搬运层)→ EAP 与机台 SECS/GEM 通讯正常吗 (控制层)→ 机台自身状态 (设备层:卡匣错位、Door 未关、传感器异常)
2. **卡匣错位**:FOUP 上 Port 放置歪斜 → 机台拒绝 Load → 人工复位,同时暂停该机台派工避免重复送货
3. **事件失真**:EAP 断线导致机台状态事件丢失,AMA 以为机台 Available 持续派货 → Watch Dog 发现长时间无进展,Group Cancel 释放资源
4. **恢复**:设备恢复后事件触发重新派工,积压 Lot 由 RTD 重新排序

**考点**:AMA 依赖机台状态事件的准确性,事件链 (EAP → Repository → APF 监听) 任一环失真都会引发错误派工.

### 25.【场景】发现一批实验 Lot 被全自动流搬到机台并 Track In 了,怎么处置与预防?

处置:

1. **立即拦截**:确认是否已 Start —— 未 Start:撤出 LoadPort 恢复待工;已 Start:评估 Recipe 正确性与工艺影响,必要时 Hold Lot 通知工艺工程师
2. **圈定范围**:查派工执行历史,确认同一 Job 是否波及其他实验 Lot
3. **根因**:实验 Lot 为何进了自动派工列表?—— LotType 标识缺失 / 错误、RTD 规则未排除、Flow 白名单配置遗漏

预防:

- 全自动派工按 **LotType 强制卡控**,实验 Lot 默认人工模式
- 新 Flow/ 新产品首次进线默认人工,验证后逐站开放自动
- 自动化规则变更一律走 Pilot 机制,小范围先验证

### 26.【软技能】操作员抵触全自动化 ("FOUP 搬错了算谁的?"),怎么推进落地?

- 理解抵触的合理性:责任不清,人人自危
- **责任边界清晰化**:全自动段系统负责 (执行历史可追溯到 Job 级),人工确认段操作员负责,界面明确显示当前 Lot 是自动还是人工模式
- **从 "帮人" 切入**:先自动化最烦人的活 (Dummy 补充、FOUP Clean, NPW 下线),让操作员尝到甜头,再谈 Run 货自动化
- **留人工接管口**:任何自动流程一键可切人工,操作员有安全感才敢放手
- 数据说话:上线前后对比 LoadPort 等待时间、设备利用率,用结果争取支持

### 27.【软技能】AMA 工程师最重要的三个能力?

**系统联动视野(RTD/MES/EAP/搬运链路任一环失真都会表现为 "派工错了",要能跨系统分段定位)、异常设计能力(全自动的核心不在正常流而在异常流:超时回收、故障转移、降级人工)、生产意识(派工卡一分钟就是产能损失,先保生产再排障,一切变更留痕可追溯)**.

## AMA Function List

### 1. 全自动化基础架构与触发机制

#### 1.1 自动化范围与目标

支持 OHT 设备 Run 货全自动化, 遵循 SOP 及时供料以最大化设备产能.

- **OHT全自动化支持**: 全面支持 OHT 设备的 Run 货自动化流程.
- **SOP合规执行**: 严格依照设备特性与 Run 货 SOP, 将货物及时送达设备 LoadPort.
- **产能利用率优化**: 通过精确控制派工选货与时机, 确保设备 LoadPort 持续有料可跑.

#### 1.2 触发机制

支持多种触发方式, 确保派工响应的实时性与准确性.

- **定时触发**: 支持基于时间周期的周期性派工触发.
- **事件触发**: 支持 LoadPort 状态变化、机台状态变化等实时事件触发派工.

### 2. 单一设备 Run 货全自动化场景

#### 2.1 固定缓冲区 (Fixed Buffer) 设备

针对 Fixed Buffer 设备的多样化派货场景支持.

- **单Lot派工**: 支持单个 Production Lot 或 Monitor Lot 的自动派工.
- **多Lot合批**: 支持一个 FOUP 内包含多个 Production/Monitor Lots 的 Batch 派工.
- **Season搭配**: 支持 "1个Production Lot + 1个Season Lot" 的组合派工.
- **空FOUP搭配**: 支持 "1个Production Lot + 1个空FOUP" 的派工 (如 Back Side Clean 设备左进右出场景).
- **Dummy预留**: 支持 Auto Reserve Etch Inside/Outside Dummy Lot.
- **Monitor搭配**: 支持 "1个Monitor Lot + 1个Season Lot" 的组合派工.
- **Zero Idle CMP**: MES 触发 CMP Season 条件时, 自动同时派工 Production 与 Season Lot, 货到齐后 Season 先 Run 以实现 Zero Idle.
- **Season优先逻辑**: Production+Season 组合中, 无论谁先到达, 均遵循 Season Lot 先 Run 货原则.

#### 2.2 内部缓冲区 (Internal Buffer/NTB) 设备

针对含 NTB 及 Internal Buffer 设备的特殊派工逻辑.

- **多Lot Batch**: 支持 Batch of Multiple Lots 自动派工.
- **Furnace Batch**: 支持 Furnace Batch with Furnace Monitor Lot 及纯 Furnace Monitor Lot 派工.
- **Furnace Dummy**: 支持 Furnace Dummy Lots 的自动补充与派工.
- **NTB设备支持**: 支持 Tools with NTB (Foup Exchanger) 的自动化派工.
- **Form Batch**: 遵循 MES 机制自动 Form Batch 并派货;Furnace Form Batch 自动组合 Production 与 Monitor Lot.
- **Dummy自动补充**: Furnace Dummy 不足时, 自动选择可用 Dummy Lot 派工至机台.

#### 2.3 专用自动化设备

支持 Sorter, FOUP Clean 及 Inspection 设备的专项自动化.

- **Sorter自动化**:
    - 支持FOSB↔FOUP、FOUP↔FOUP等多种Job类型.
    - 支持Planned和Adhoc Sorter Actions.
    - 支持1->N、N->1(N>LoadPort数)的大规模分拣.
    - 换FOUP时自动选择可用FOUP.
- **FOUP Clean自动化**:
    - 按规则(如上次Clean时间)排序并自动派工空闲清洗位.
    - 待洗FOUP内有Lot时, 自动创建Adhoc Sorter Job转移Lot后再派工清洗.
- **FOUP Inspection自动化**:
    - 依据MES Flow过滤需Inspection的FOUP.
    - 设备空闲时自动派工至LoadPort.

### 3. 跨站点与辅助资源全自动化

#### 3.1 跨站点 Run 货全自动化

支持复杂的跨工序联动与资源准备.

- **Auto Batch Run**: 支持带 Furnace Monitor 的自动 Batch Run.
- **Season/Monitor/Dummy准备**: 支持 Etch/Furnace Dummy Lots 的自动 Prepare 与 Reserve;支持 Season/Monitor Lot 的 Auto Split for Inuse.
- **资源复用循环**: 支持 Monitor/Season/Dummy 的 Reuse 与 Recycle 自动化.
- **Eqp Monitor**: 支持带或不带 Season 的 Eqp Monitor 自动化;支持单机台多 Monitor Lot Carpool.
- **Pre-send策略**: 支持基于 Watermark 或 Pending Process Wafer Qty 的预发送.

#### 3.2 Dummy 与 Season 自动控制

精细化管控辅助资源的补充与回收.

- **Etch Dummy控制**: Inside Dummy 不足时自动补料到 LoadPort;DummyPort 为空时自动补料;达到 MaxUsedCount 时自动 Dummy Out.
- **Bonding派工**: Pixel 与 Logic 片数不一致时, RTD 选择 Pixel<Logic 组合, Full Auto 对 Logic 做逻辑分批, 多余片数 Sorter 传出, 片数一致后再 Bonding.
- **Season执行**: 单 LoadPort 可用时, 允许一 Lot 在 Port、一 Lot 预送 OHB;支持自动准备 Pilot.

#### 3.3 NPW 库存与生命周期管理

实现 NPW 从入库、使用到回收的全流程自动化.

- **水位管理**: 自动计算 NPW Product Wafer 数量, 低于水位时自动下新 NPW 或 Downgrade 补充.
- **自动分批**:
    - **Eqp Monitor**: 根据Schedule Monitor时间及提前量自动分批(物理/逻辑), 物理分批自动选空FOUP.
    - **GOI Monitor**: 根据MES GOI Schedule自动提前准备.
    - **Season Wafers**: 需用Season时自动从Source NPW Product分批, 支持逻辑分批绑定机台.
    - **Furnace Monitor**: 根据Preform Batch时间及水位提前备货.
    - **Dummy Wafers**: 需Dummy时自动从Source NPW Product创建Dummy Lot.
- **生命周期处置**:
    - **InUse End**: 根据MaxUsedCount决定Reuse/Recycle/Downgrade/等待同FOUP其他Wafer.
    - **Recycle End**: 根据MaxRecycleCount决定Reuse/Reclaim/Downgrade.
    - **Reclaim End**: 根据MaxReclaimCount决定Reuse/Downgrade.
    - **Auto Downgrade**: 到达Downgrade站点且有对应表时自动执行.

### 4. 高级自动化功能与异常处理

#### 4.1 Pre-Send 与 Recovery 准备

优化短 / 长 Process 时间设备的供料节奏及恢复效率.

- **短Process设备**: 根据预定义水位预先搬送至设备附近 OHB.
- **长Process设备**: 根据未加工 Wafer 数量及水位进行派工控制.
- **Tool Recovery准备**: PMS 指定 Recovery Package 或 MES 设为 WaitPrepare 时, 自动提前做 Monitor 分批.

#### 4.2 Pilot 自动准备与 Lot 下线

支持 AMAT R2R 集成及自动下线流程.

- **Pilot自动准备**: 集成 AMAT R2R/RTD/MES, 当产品触碰 Pilot 条件时自动分批, 分出后按 WhatNext 自动派工.
- **Production Lot下线**: MES 创建 Lot 后, 自动从 FOSB 选 Wafer 下线并执行 Sorter.
- **NPW Lot下线**: NPW 水位不足时自动创建 Lot, 从 FOSB 选 Wafer 下线并执行 Sorter.

#### 4.3 异常处理

保障自动化流程的健壮性.

- **Group Cancel**: JobPrep 后长时间 (可配置)Lot 未到达, 系统自动 Cancel JobPrep.

### 5. 系统性能与高可靠性

#### 5.1 负载均衡与容错

确保派工系统的高可用性与稳定性.

- **负载均衡**: 多台 Server 运行时自动 Load Balance, 避免单点过载.
- **故障转移**: 单 Server 异常时, 其他 Server 自动接管后续派工任务, 不影响生产.

### 6. APF 全自动派工组件 (Activity Manager for Automation)

#### 6.1 事件驱动与实时监控

基于事件监听实现毫秒级自动化响应.

- **Repository Event监听**: 实时监控机台、LoadPort, Lot 信息变化, 状态变更时实时呼叫 MES/RTD 获取派工列表.
- **组件Event支持**: 支持 APF Component Event 监听及内部自定义 Event 收发, 灵活构建实时 Workflow.
- **Watch Dog/Schedule**: 除 Event 外, 支持 Watch Dog 与定时 Schedule 触发 Workflow.

#### 6.2 分布式架构与集成能力

支持高并发处理与多系统无缝对接.

- **分布式设计**: 多 Server 并行处理自动派工请求, 支持 Load Balance.
- **Web Service**: 支持通用 Web Service 接口, 实现外部系统触发 AMA Workflow 及 AMA 调用外部系统.
- **Tibco RV**: 支持通过 Tibco RV 调用外部系统接口.
- **RTD整合**: 直接整合 APF RTD Dispatch 功能, 简单调用即可运行 Rule 与 Report.

#### 6.3 可视化开发与工具链

提供低代码开发环境与丰富的数据处理能力.

- **可视化开发**: 提供 AMA/AMR Block 拖拽工具, 快速撰写派工 Workflow, 支持执行历史查询.
- **数据库操作**: 支持 Oracle Raw SQL 执行与 Procedure 调用, 实现数据增删改查.
- **资源互斥锁**: 支持内部资源 Claim/Release, 避免逻辑 Race Condition.
- **报表与通知**:
    - 支持本地保存或FTP传输至共享盘.
    - 支持HTML/PDF/Text等多格式报表转换.
    - 支持通过客户邮件系统发送邮件.
- **OS命令调用**: 支持调用操作系统命令行及自定义脚本.

# YMS

## YMS Terminology

| Abbreviation | Full form                  | Desc             |
| :----------- | :------------------------- | :--------------- |
| YMS          | Yield Management           | 良率管理系统     |
| DMS          | Defect Management System   | 缺陷管理系统     |
| ADC          | Auto Defect Classification | 自动缺陷分类系统 |

mean 均值, 反应了数列的集中趋势

variance 方差, 反应一组数据时离散程度 (sigma^2)

standard deviation 标准差: 就是方差开根号, 在大样本中一般使用样本的标准差近似代替总体的标准差, 标准差可以计算钟型曲线 (正态分布)

### Tool Commonality

设备共同性

### ANova

Analysis of variance

方差分析

ANOVA 就是把方差拆成两个部分进行对比, 因为:

e.g.

1. 给病人不同的药物剂量;
2. 病人本身不同, 比如年轻的病人代谢速度快, 有些病人对这个药物比较敏感

### one-way ANOVA

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

### Regression analysis

回归分析

确定两种或两种以上变量间相互依赖的定量关系

R^2 范围: `[0, 1]`, 越接近 1, 说明线性回归线与原始数据越吻合

### Top Down Analysis

一种自顶向下, 逐步分解的性能分析

就比如二叉树 dfs 的时候每层 bfs 分析各个节点

### Pareto analysis

帕累托图, 排列图

将出现的质量问题和质量改进项目按照重要程度依次排列而采用的一种图表

### hard bin vs soft bin

- hard bin
  know the overall reason about the failure

- soft bin
  also know the compartment in which it has failed or compartment in which it has been placed

## YMS interview

### 1.【概念】YMS 在 CIM 中的位置?与 DMS, SPC, RPT 的分工?

- **YMS**:良率数据的 "分析师" —— 把 CP/FT/WAT/Defect/ 量测 (EDC) 数据 ETL 进来做统计分析与逐层下钻,回答 "良率为什么掉、主要矛盾在哪"
- **DMS**:缺陷原始数据与空间分析 (Defect Map, ADC 自动分类),回答 "缺陷长什么样、在哪";YMS 引用 DMS 数据做良率关联 (Defect Impact Inline),不重复建缺陷库
- **SPC**:过程实时统计监控 (管制图 + 八大判异),回答 "过程稳不稳" —— 是监控拦截,不是事后分析
- **RPT**:运营管理报表定时分发 (固定格式日报周报);YMS 也带自动报告 (邮件 /FTP/NAS、条件触发),但定位是分析型自助报表

一句话:EAP 采集、SPC 实时监控、YMS/DMS 事后分析、RPT 例行汇报.

### 2.【概念】良率数据链路全貌?从原始数据到报表分发经过哪几环?

1. **接入**:多数据库 (Oracle/MS SQL/PostgreSQL/DB2/Greenplum)、SQL 直连、拖拉式免编程查询;覆盖 Lot/Wafer History/WIP/WAT/CP/EDC/Chamber/Event/Defect/FDC/FT/PMS/Equip 等文本、数值及图片
2. **清洗转换**:空值替换、类型转换、分组 (多列去重最多 5 列)、左 / 右 / 内 / 外关联、差集、表达式函数
3. **调度**:Flow 可视化编排 + Scheduler 定时执行,结果存指定路径或发邮件
4. **分析**:分析模板 (Pareto、箱线、Wafer Map、统计检验)
5. **分发**:邮件 (HTML 正文)/FTP/NAS,周期或条件触发

考点:任何一环口径不一致都会造成 "YMS 与 MES 数字对不上"(见场景题).

### 3.【概念】hard bin 与 soft bin 的区别和用途?

|      | hard bin                   | soft bin                                          |
| :--- | :------------------------- | :------------------------------------------------ |
| 粒度 | 知道失效的总体原因 (大类)  | 还知道失效落在哪个 compartment(具体测试项 / 模块) |
| 举例 | Bin 5 = 功能失效           | Bin 5.12 = 功能失效下的某寄存器读写项             |
| 用途 | 失效大类 Pareto,找主要矛盾 | 定位到具体测试项,指导设计 / 测试程序排查          |

YMS 支持 Bin Definition 文件解析 (BinID/Code/Name/Type)、**Soft/Hard Bin 转换**、Bin Summary, Top N Fail Bins 累积 Map.

### 4.【概念】Pareto analysis 解决什么问题?怎么用?

**找主要矛盾**.把失效 Bin / 缺陷类型按频次降序排列 + 累积百分比,通常前 2-3 项占 80% 损失 —— 集中攻关它们投入产出比最高.

用法:良率损失分解第一步永远先画 Pareto(YMS 内置柏拉图、Top N Fail Bins 累积 Map);切忌对着长尾小项平均用力.

### 5.【概念】Top-Down Analysis 的分析思路?

**自顶向下、逐层分解**:产品线 → 产品 → Lot → Wafer → Bin/Die,每层先做对比 (Pareto/ 箱线图) 找出异常集中的那一层,再向下钻 —— 类似二叉树每层 bfs 地分析各节点.

YMS 支撑:图表下钻、页面跳转传参、Stack Map 逐片叠图.良率突降排查就是 Top-Down + Tool Commonality 的组合拳 (见场景题).

### 6.【概念】mean / variance / standard deviation 在良率分析里各自回答什么?

- **mean**:集中趋势 —— 这批的中心在哪
- **variance**:离散程度 (σ²)
- **std**:方差开根号,正态钟形曲线的宽度参数;大样本用样本 std 近似总体 std

意义:Cpk、管制限、ANOVA, T 检验全建立在这三个量上 —— 比较两组良率不能只看 mean 差多少,还要看 std(噪声) 决定差异是否显著.

### 7.【分析】one-way ANOVA 的原理?F 值怎么判读?

目的:检验多组均值是否相同,零假设 H0: μA = μB = μC.把总方差拆成两部分对比:

- **MSB**(组间均方):组与组之间的差异
- **MSE**(组内均方):组内随机噪声,MSE = (varianceA + varianceB + varianceC) / 组数
- **F = MSB / MSE**

判读:F 大 (组间差远大于组内噪声)→ 拒绝 H0,至少一组显著不同;F 小 → 无法拒绝,两种可能:各组均值本就接近,或组内方差太大把差异淹没了.自由度 d1 = 组数 - 1,d2 = 总样本数 - 组数 (3 组各 34 个:d1=2, d2=99).

注意:ANOVA 只说 "有差异",哪组跟哪组差要靠箱线图 / 事后检验;**F 小不等于证明无差异**.

### 8.【分析】Tool Commonality(设备共同性分析) 怎么用?坑在哪?

思路:圈定低良 Lot/Wafer,按 **EQP/Chamber/Recipe/Foup/Slot** 维度交叉透视,找 "低良批次共同经过了哪台机台/哪个腔体" —— 命中率最高的就是头号嫌疑.

坑:

- **共同性 ≠ 因果**:中试线某产品只在某一台机台跑 (新旧机台并存常态),"共同经过" 是假象,要结合对照组 (同机台的好批次)
- 维度要全:Chamber 级差异常被 Tool 级平均掩盖
- 嫌疑机台出来后,转 FDC Indicator Trend(By Tool/Chamber Split) 与 PMS 维保记录验证

### 9.【分析】Regression analysis 与 R² 怎么用?注意什么?

确定变量间定量依赖关系.YMS 支持线性回归、Spearman 相关、PLS、参数敏感性分析;拟合线类型丰富 (线性 / 对数 / 指数 / 多项式 / 高斯 / 样条).

- **R² ∈ [0,1]**,越接近 1 回归线与原始数据越吻合
- 典型场景:WAT & Inline/Bin/Parameter Correlation —— 某 Inline 参数与 Bin 良率画散点 + 拟合线,找敏感性强的前馈参数
- 注意:**相关 ≠ 因果**;R² 高但样本少、有离群点、混了多产品数据都会骗人;非线性单调关系用 Spearman 比线性回归靠谱

### 10.【ETL】YMS 数据接入与清洗转换的能力边界?

接入:

- 多数据库:Oracle/MS SQL/PostgreSQL/DB2/Greenplum
- SQL 直连 + 拖拉式免编程查询接口 (可复用)
- 自定义查询条件:产品 / 批号 / 站点 / 机台 / 日期多维组合,支持通配符 (%, \*)
- 结果缓存可存储 / 过滤 / 排序,接续下一步分析

清洗转换:

- 表达式与函数 (保留最近 20 个,带预览提示)
- 分组:特定间隔 / 平均间隔 / 固定大小 / 唯一值分布 / 标准差;多列去重分组最多 5 列
- 合并关联:去重合并、直接合并、左 / 右 / 内 / 外关联、差集、排除列、标识数据源
- 空值替换、类型转换、列名修改、自定义排序

### 11.【ETL】Flow 编排与 Scheduler 调度怎么支撑无人值守分析?

- **Flow 可视化编排**:节点库含数据查询 / 过滤 / 汇总 / 图表绘制 / 统计分析 / 报表 /Wafer Map 节点,支持 Loop 循环、报错提示、导入导出、按用户持久化重复执行
- **Scheduler**:定时执行分析流程,结果存指定路径或发邮件;配合报表模块的周期 / 条件触发分发 (邮件 HTML 正文、FTP, NAS,正文可带动态指标、告警规则联动)
- **扩展**:Python/R 脚本节点;Chart/Grid/Data Cache/Map Handler 二次开发接口
- **高可用**:系统异常处理与故障恢复;被删 Flow 列表展示可恢复

**追问**:调度失败怎么发现?(Flow 报错提示 + 日志诊断定位 + 资源监控看 CPU/ 内存 / 线程;关键报表建议加条件触发校验,数据为空不发.)

### 12.【可视化】Wafer Map 专题有哪些能力?中试线最常用哪几个?

- 展示:Single/Gallery/**Stack Map**、Contour/3D Contour, Vector, Bubble, MAP 切面 Trend, CP Map & Reticle Layout
- Bin 分析:Bin Definition 解析、Bin Summary/ 柱状图 /Sorting/**Re-test 次数显示**、Soft/Hard Bin 转换、Top N Fail Bins 累积 Map、特定 Bin Box-Plot 比较
- 高级:Zone 分析与自定义 Zone、**边缘良率检查**、**探针卡叠加分析**、Ink Die 标注、Overlay 偏移矢量图
- 性能:1000 片 Wafer 叠图 5 分钟内显示

中试线最常用:Stack Map 看图样 (环状 / 边缘 / 条纹直接指向工艺根因)、Top N Fail Bins、探针卡叠加 (CP 扎针问题高发).

### 13.【可视化】Wafer Map / Bin Map / Defect Map / Image Gallery 怎么联动分析?

核心思路:**空间图样比对** —— 同一坐标系下把三层叠起来看:

1. Bin Map(CP 失效分布) 与 Defect Map(缺陷位置,Color By Class) 图样重合 → 缺陷杀伤型失效
2. 框选 Defect 联动 Image Gallery 看实拍图 (FTP/S3/NAS/HTTP 加载 JPG/PNG,亮度对比度可调) 确认缺陷类型
3. 再叠 Inline Parameter Map(By Site) 看是否与某站点参数图样相关
4. 跨图表标记联动 + 图表下钻 + 第三方系统跳转传参 (跳 DMS 看缺陷明细)

分工边界:缺陷原始数据与 ADC 分类在 DMS,YMS 做引用与关联 (Defect Impact Inline, Inline & Defect & FDC Indicator Correlation).

### 14.【模板】分析模板作为部门资产,怎么做版本、权限与分发治理?

- **版本**:每个模板保留最近 10 次保存记录 (含修改人及时间),可回退;草稿箱机制 —— 新增模板自动存 Drafts 防开发遗失
- **权限**:用户组 × 模板文件夹,**访问/浏览/编辑/完全控制** 四态;数据权限按用户组隔离 (查询 / 填报);自助分析编辑权限独立设置;自动报告任务单独授权
- **安全**:基于用户信息的系统水印,截图外发可溯源
- **协作**:收藏夹个人化、模板跨部门分享;主页集中展示与切换、默认主页
- **分发**:报表订阅 —— 邮件 /FTP/NAS 多渠道、周期 + 条件触发、HTML/Excel/PDF/PPT 多格式、Index Sheet 自动生成与链接

### 15.【前道】前道良率分析的数据特点?WAT, CP, Inline 怎么串?

前道三层数据各有各的角色:

- **Inline EDC**(过程量测):过程参数,最早期的信号
- **WAT**:电性参数,工艺健康度的先导指标 —— CP 掉之前 WAT 往往先偏
- **CP**:Bin 良率最终结果

串联靠 YMS 关联性分析:**WAT & Inline/Bin/Parameter Correlation**、Inline Impact WAT/Bin/Parameter;Device Four Corner Spec(FF/SS/SF/FS/Center) 散点看工艺角漂移;Inline Parameter Trend By Site 逐站点看趋势.排查套路:CP 掉 → 看 WAT 哪项偏 → 反查关联的 Inline 站点参数.

### 16.【后道】后道良率分析与前道有何不同?Bin 与追溯重点?

- 后道核心指标是 **Bin 良率**(FT),Bin Summary/ 柱状图 /**Sorting 与 Re-test 次数显示** 是标配 —— 后道重测常见,口径必须说清 First-pass 还是 Final,否则数字能差几个点
- 追溯链条变成 **Wafer → Die → Strip** 重构:Map 关联 Lot/Date/Step/Device/ProbeCard 信息;辅材批次 / 有效期在 MES 账料侧,YMS 按批次维度分组对比 (如某批塑封料对 FT 良率的影响)
- FT 与 CP Map 对照 (前道坏 Die 位置 vs 后道失效位置) 可区分前道遗留问题与封装引入问题

### 17.【全产品】逻辑 / 功率 /CIS/ 化合物各家族良率定义不同,YMS 怎么统一管?

| 家族             | 良率口径侧重                  |
| :--------------- | :---------------------------- |
| 逻辑             | CP Bin1 率、Defect 密度       |
| 功率             | 参数达标率 (击穿 / 导通)+ Bin |
| CIS              | Defect(暗点 / 亮点)、像素级   |
| 化合物 (SiC/GaN) | 外延缺陷、击穿电压分布        |
| MEMS             | 结构释放成功率等非标口径      |

原则:**统一平台,差异化口径** —— ETL、模板框架、权限模型全家族共用;各家族自己的 Bin Definition 文件、By ProductType 设置 Bin 颜色、自定义产品底图 /Zone/Reticle.跨家族不做横向良率排名,每家族口径写成文档,报表口径标注在模板注释里.

### 18.【2-12 寸】新旧测试机并存、数据格式杂 (STDF/ 文本 /Excel/ 数据库),ETL 怎么分层收编?

1. **标准格式**(STDF 等):自动化 ETL 解析 CP Tester 数据,直通分析模板
2. **文本/CSV/Excel**:自定义解析模板 (表达式 + 格式化 + 类型转换),先半自动导入,跑稳再定时化
3. **只有数据库表**:SQL 直连,跳过文件层
4. **什么都没有**(极老机台 /2-6 寸):人工填报兜底,填报数据权限单独管控

原则:先做机台 × 数据格式台账,**口径正确优先于自动化**;老格式解析模板版本留痕,机台软件升级后回归验证.

### 19.【中试线】Split Lot / DOE 组间对比是研发刚需,YMS 怎么支撑?小样本怎么办?

支撑:

- **G/B Wafer 分析 + 自定义 Group**:按实验条件分组,箱线图 /Stack Map 直观看组间差异
- 显著性检验:单 / 双样本 T 检验、**ANOVA(单/双因素)**、卡方;不正态用 K-W, Mann-Whitney 非参
- 样本量估计:描述统计模块自带,实验设计阶段先算需要几片

小样本现实:中试线一组常只有 2-3 片,检验功效低 —— **F 小不显著 ≠ 无差异**(组内方差大就把差异淹没了).务实做法:效应量 + 历史波动 σ 对比优先,p 值作参考;能加样本就加;关键结论必须重复一批验证.

### 20.【中试线】研发与量产混线,良率口径与分析权限怎么隔离?

- **口径隔离**:实验 Lot 带特殊处理 (多 Site 测试、工程批),默认模板按 LotType 过滤 (自定义查询条件),防止实验批拉低量产良率报表;两类口径各自成文
- **数据权限**:按用户组隔离查询 / 填报范围,研发组与量产组互不可见敏感数据
- **模板分区**:研发区放开自助分析编辑权限 (迭代快);量产区模板只浏览,修改走版本留痕
- **分发隔离**:自动报告任务按组授权,研发报表不发量产订阅列表;水印溯源防截图外泄

### 21.【中试线】分析模板 / ETL Flow 的逻辑要改,怎么安全上线?

YMS 不卡生产,但 **数字错了会误导研发决策**,变更同样要留痕可回退:

1. 草稿箱开发,改完自动存 Drafts,不覆盖在用模板
2. 小范围 Pilot:先分享给个别用户组 / 研发工程师验证数据正确性 (新旧模板并行跑几天比对结果)
3. 正式发布:覆盖前确认历史版本可回退 (最近 10 次保存记录),Scheduler 任务切换后盯首轮自动分发结果
4. 口径变更必须发通知 + 模板注释写明版本差异 —— 否则前后两期报表对不上,又会引发 "数字打架"

### 22.【场景】某产品 CP 良率昨天起突降 5%,你的分层排查框架?

先保生产再排障:

1. **确认事实**:Trend 转折点自动侦测定位起始时间点;确认哪些产品 / 站点受影响、是否还在持续掉
2. **先卡控**:若仍在恶化,联动 SPC/MES 评估 Hold 嫌疑机台与在制 Lot —— 先止血,再分析
3. **Pareto**:Top N Fail Bins / Defect Trend By Class 损失分解,锁定主要矛盾 (某 Bin 突起还是全面恶化)
4. **Top-Down 下钻**:产品 → Lot → Wafer → Stack Map 看图样 (环状 → 炉管 /CVD,边缘 → 匀胶 / 蚀刻,条纹 → 清洗)
5. **Tool Commonality**:EQP/Chamber/Recipe/Foup/Slot 维度找嫌疑机台,命中率排序
6. **关联验证**:FDC Indicator Trend, PMS 维保记录、WAT & Inline 参数关联
7. **留痕回归**:分析报告模板存档分享,措施上线后回归验证良率曲线

**追问**:Commonality 找不出共同机台怎么办?(图样指向的工艺站点 + WAT/Defect 关联继续挖;考虑来料批次、环境温湿度、量测系统本身漂移.)

### 23.【场景】YMS 算出的良率与 MES / 测试部门数据对不上,怎么查?

按层排查,九成是口径不是 bug:

1. **口径**:First-pass vs Final、含不含 Retest、含不含工程批 —— 先对口径定义文档
2. **时差**:YMS 走 Scheduler 定时 ETL,MES 是实时账 —— 确认两边数据快照时间
3. **范围**:过滤条件差异 (LotType/ 站点 / 日期边界、通配符)
4. **清洗规则**:空值替换、去重 (多列去重最多 5 列)、关联方式 (左关联 vs 内关联会丢行)
5. **源数据**:测试机重传 / 补传造成重复或覆盖

方法:拿同一 Lot 清单逐层对数量 (Lot 数 → 片数 → Die 数),定位从哪一层开始分叉;修正后重跑 Flow,结论写进模板注释留痕.

### 24.【场景】车规客户要某 Lot 的完整追溯包,YMS 怎么组织?

以 Lot/Wafer 为主线把数据链全串起来 (YMS 数据类型天然覆盖):

- 良率:Bin Summary + Wafer Map(Stack/Gallery)、FT Re-test 记录
- 过程:WAT 关键参数、Inline EDC 趋势、SPC 管制图 (支持 Offline SPC 批次模拟补算历史)
- 缺陷:Defect Map/Class 分布 (联 DMS 原始数据)
- 履历:Wafer History、机台 /Chamber 清单 (Common Tool 维度)、Event 记录
- 输出:PDF/Excel/PPT 多格式,Index Sheet 自动生成与链接;结果存 NAS 指定路径长期留档

注意:外发数据走权限审批 + **水印**;追溯包固化为订阅任务模板,下批车规产品直接复用.

### 25.【场景】实验组良率比对照组高 1.5%,PE 问 "能不能转正",你怎么判?

判定流程:

1. **样本量**:每组几片?1-2 片直接回 "统计上无法判,先补样本"(样本量估计可算需要几片)
2. **选检验**:两组对比用 T 检验,多组用 one-way ANOVA;样本少 / 不正态换 Mann-Whitney/K-W
3. **判读**:p < 0.05 且 F = MSB/MSE 足够大才算显著;同时看效应量 —— 1.5% 与该站点历史良率 std 比是大是小
4. **排混淆**:两组是否走了相同机台 /Chamber/ 时间段?用 Tool Commonality 排除 "实验组恰好都跑过好机台"
5. **工程闭环**:统计显著 + 机理可解释 (哪个参数改善)+ **重复一批复现** —— 三者齐了才建议转正;单次显著不算数

### 26.【软技能】工程师拿着自己 Excel 算的结果说 "你们 YMS 的数字不对",怎么处理?

- 先不急辩:数字分歧九成是口径 / 范围 / 时差,不是系统错了,也不是他错了
- 并排核对:同一 Lot 清单逐层对 (Lot → Wafer → Bin),把他的过滤条件与模板条件摆在一起,差异自然浮出来
- 固化结论:口径对齐后写进模板注释 / 口径文档,避免下次再争
- 借力:开放自助分析权限 + 模板分享,让他能在 YMS 里自己复算验证 —— 信任来自可复现
- 底线:源数据不可为迁就任何一方而改,口径差异透明可追溯

### 27.【软技能】YMS 工程师最重要的三个能力?

**统计分析功底(ANOVA/回归/Commonality 用对场景,小样本不误判)、数据链路工程能力(多源异构 ETL 与口径治理、Flow/Scheduler 运维)、业务翻译能力(把工艺/测试工程师的问题翻译成可下钻的分析模板,良率突降时先保生产再排障)**.

## YMS Function List

### 1. 平台基础与模板管理

#### 1.1 主页与个性化

支持高度自定义的工作台, 提升用户访问效率.

- **模板展示与切换**: 主页集中展示所有分析模版, 支持便捷切换查看.
- **默认主页设置**: 可选择特定模板作为主页默认展示内容, 支持自定义布局.
- **收藏夹管理**: 支持将模板收藏至个人收藏夹, 并可自定义修改与开发.
- **草稿箱机制**: 新增模板自动保存至 Drafts, 防止开发工作遗失.
- **分享协作**: 支持将模板分享给其他部门或同事.

#### 1.2 权限与安全管控

提供多维度的权限体系与安全防护机制.

- **分级权限控制**: 支持按用户组及模板文件夹管控权限, 包含访问、浏览、编辑、完全控制四种状态.
- **功能权限弹性配置**: 可灵活调整平台内各功能分类及操作权限.
- **数据权限隔离**: 支持按用户组设置查询数据、填报数据的使用权限.
- **自助分析权限**: 支持对用户组的自助分析编辑权限进行独立设置.
- **自动报告权限**: 新增自动报告任务权限管理模块.
- **系统水印**: 支持基于用户信息设置系统水印, 增强数据安全与溯源能力.

#### 1.3 模板属性与版本

保障模板资产的可追溯性与规范化管理.

- **历史版本管理**: 支持查看每个模板最近 10 次保存记录 (含修改人及时间).
- **路径与搜索**: 支持模板路径查看与全局搜索.
- **打开模式设置**: 可配置模板打开时的默认模式 (查看 / 编辑).
- **数据表管理**: 支持显示数据表信息、设置默认表、建立表关系.
- **列属性配置**: 支持修改数据类型、列名称, 以及按数据类型、自然字符串或自定义规则排序.

### 2. 数据处理与 ETL 引擎

#### 2.1 数据接入与查询

支持多源异构数据的统一接入与灵活查询.

- **多数据库支持**: 兼容 Oracle, MS SQL, PostgreSQL, DB2, Greenplum 等主流数据库.
- **SQL直连查询**: 提供 SQL 指令直接获取数据库数据的能力.
- **免编程查询工具**: 提供拖拉式查询接口生成工具, 无需编码即可复用.
- **自定义查询条件**: 支持产品、批号、站点、机台、日期等多维度条件组合, 支持通配符 (%, \*).
- **结果缓存与再利用**: 查询结果可存储、过滤、排序及输出, 支持接续下一步分析.
- **Grid交互**: 支持在 Grid 中过滤数据、格式化显示、调整字段顺序与样式.

#### 2.2 数据清洗与转换

提供丰富的数据处理函数与算子.

- **表达式与函数**: 支持常用数据函数, 保留最近 20 个表达式, 提供预览与提示功能.
- **多类型数据支持**: 涵盖 Lot, Wafer History, WIP, WAT, CP, Metrology(EDC)、Chamber, Event, Defect, FDC, FT, PMS, Equip 等文本、数值及图片数据.
- **数据分组**: 支持特定间隔、平均间隔、固定大小、唯一值分布、标准差等多种分组模式;支持多列去重分组 (最多 5 列).
- **数据合并与关联**: 支持去重合并、直接合并、左 / 右 / 内 / 外关联;支持获取差集、排除指定列、标识数据源.
- **格式化与替换**: 支持空值替换、数据类型转换、列名修改及自定义排序.
- **表关系高亮**: 支持通过设置表关系实现多表联动高亮.

#### 2.3 流程自动化与调度

支持分析流程的编排、定时执行与异常处理.

- **Flow可视化编排**: 提供节点化 Flow 编辑界面, 支持运行、报错提示及导入导出.
- **Workflow节点库**: 内置数据查询、过滤、汇总、图表绘制、统计分析、报表、Wafer Map 等节点.
- **定时调度(Scheduler)**: 支持定时执行分析流程, 结果存储至指定路径或发送邮件.
- **流程持久化**: 支持按用户存储分析流程并重复执行.
- **Loop运算**: 提供流程循环运算功能.
- **二次开发接口**: 提供 Chart/Grid/Data Cache/Map Handler 等接口, 支持客户扩展.
- **高可用设计**: 包含系统异常处理及故障恢复功能.
- **脚本集成**: 支持 Python/R 脚本编写, 可在自助分析及 Flow 中调用交互.

### 3. 数据可视化模块

#### 3.1 通用图表 (General Chart)

提供全面的统计图表库与定制化能力.

- **丰富图表类型**: 支持垂直 / 交叉表、折线、散点、饼图、雷达、箱线、热力、3D 散点、密度、直方、柏拉图、曲面、CDF、等值线、矩形树图、甘特、组合、平行坐标、散点矩阵、桑基、瀑布、云状图等.
- **深度定制**: 支持外观、字体、轴、颜色、标签、工具提示、图例、格栅、辅助线、规格线 (Spec Line)、超链接等配置.
- **智能分析增强**:
    - 支持从数据列绘制动态规格线及Cpk计算.
    - 支持自动分群批量绘图.
    - 支持Trend转折点自动侦测与违规高亮.
    - 支持趋势拟合(直线、样条、平滑等).
    - 支持X-Y, X-YY, XX-YY多图叠加.
    - 支持Device Four Corner Spec (FF/SS/SF/FS/Center) 散点图定义.
    - 支持极值自适应(Defect Chart Y轴).
- **半导体专用图表**:
    - Inline Parameter Trend (By Site).
    - WS Yield & Parameter Trend.
    - Defect Trend (By Class).
    - WAT Raw Chart & Map联动.
    - FDC Indicator Trend (By Tool/Chamber Split).
    - Parameter相关性散点矩阵图.
    - Parameter热力图(自定义色阶).

#### 3.2 Wafer Map 专题

提供业界领先的晶圆图谱分析能力.

- **Map展示模式**: 支持 Single/Gallery/Stack Map, Contour/3D Contour, Vector Map, Parametric Map, Bubble Map, MAP 切面 Trend, CP Map & Reticle Layout 等.
- **Bin管理与分析**:
    - Bin Definition文件解析与规则定义(BinID/Code/Name/Type).
    - Bin Summary/柱状图/Sorting/Re-test次数显示.
    - Soft/Hard Bin转换.
    - Top N Fail Bins累积Map.
    - 特定Bin Box-Plot比较.
- **高级分析功能**:
    - 分区(Zone)分析与自定义Zone工具.
    - 重复缺陷分析、位图分析、Step决策分析.
    - 边缘良率检查、曝光检查、探针卡叠加分析.
    - Ink Die自动/手动标注及周边Good Die识别.
    - Overlay数据偏移矢量图分析.
    - Reticle设置与展示.
- **交互与操作**:
    - 动态鼠标跟随显示Bin Detail.
    - 实时Rotation、Zoom In、鸟瞰图.
    - 圆形/矩形/异形框选.
    - Map色阶自定义(均分/小值多分段/大值多分段).
    - 关联Lot/Date/Step/Device/ProbeCard信息.
- **数据集成**:
    - 自动化ETL解析CP Tester数据.
    - Integration with Excel Macro/R/Python.
    - 支持Inline Parameter Map (By Site).

#### 3.3 Defect Map & Image Gallery

支持缺陷图谱与影像的深度关联分析.

- **Defect Map**: 支持 Die Grid 显示、Color By Class, Stack Map/Gallery, Reticle Map, Zone Map.
- **Image Gallery**: 支持 FTP/S3/NAS/HTTP 路径图片加载;支持 JPG/PNG 格式;支持亮度对比度调整、平铺、缩放旋转.
- **联动交互**: 框选 Defect 联动 Image Gallery;支持 Image Marker;支持多种框选方式;支持调整 Defect Size/Shape;联动查看明细.

#### 3.4 交互与编辑增强

提升分析过程的流畅度与探索性.

- **联动与高亮**: 支持跨图表标记联动、数据源异同的高亮联动;支持分组标签调用.
- **辅助线系**: 支持水平 / 垂直 / 拟合线 (线性 / 对数 / 指数 / 多项式 / 逻辑回归 / 乘方 / 高斯 / 样条 / 平滑).
- **跳转与钻取**: 支持页面跳转、第三方系统跳转、传参模板自定义;支持图表下钻.
- **便捷操作**: 右键切换图表类型、拖拽布局、跨页拖动、复制粘贴、轴选择器切换、表达式过滤、反选、注释.
- **导出**: 支持自定义组合导出图表页面及数据文件.
- **文本组件**: 支持背景图、计算值、链接、输入控件、筛选器、页面 / 节点操作按钮.
- **Tab组件**: 支持多层嵌套、内部排布设置、参数联动.

### 4. 统计分析模块

#### 4.1 基础与高级统计

内置完整的统计学算法库.

- **假设检验**: 单 / 双样本 T 检验、配对 T 检验、ANOVA(单 / 双因素)、卡方检验、K-W 检验、Mann-Whitney U, Wilcoxon 符号秩、Kolmogorov-Smirnov 检验、正态性检验.
- **回归与相关**: 线性回归、Spearman 相关、偏最小二乘回归 (PLS)、通用参数敏感性分析.
- **多元分析**: 主成分分析 (PCA)、K 均值聚类、层次聚类、平均算法聚类、随机森林、决策树.
- **描述性统计**: 基础 / 高级描述性统计、数据透视、列连表分析、样本量估计.
- **制程分析**: 过程能力分析、共性分析、根因分析、制程参数最佳解、特征标准化.

#### 4.2 SPC 与半导体专项分析

针对半导体制造场景的深度分析工具.

- **SPC管制图**: 支持 Xbar-R/S, X-MR, Xbar-Uniformity, EWMA, CuSum, P/nP/C/U Chart;支持八大判异规则及国际标准 Rule;支持 Offline SPC 批次模拟.
- **CPK计算**: 支持 By Parameter 计算 CP/CPK/PPK;支持过滤后计算;支持 Control Limit 自定义.
- **关联性分析**: WAT & Inline/Bin/Parameter Correlation;Inline Impact WAT/Bin/Parameter;Defect Impact Inline;Inline & Defect & FDC Indicator Correlation.
- **Common Tool分析**: 支持 EQP/Chamber/Recipe/Foup/Slot 等维度分析.
- **G/B Wafer分析**: 支持自定义 Group 分析.
- **性能指标**: 保证 1000 片 Wafer 叠图在 5 分钟内显示.

### 5. 报表与分发模块

#### 5.1 报表生成与管理

支持多格式、结构化的报告产出.

- **全生命周期管理**: 支持添加、删除、重命名、编辑、分享、查看报表.
- **内容定制**: 支持更改列名 / 顺序、动态详细数据显示、组件注释 / 标签.
- **多格式输出**: HTML, Excel(2003/2007), CSV, PPT(2003/2007), Open-Office, PDF, 图片.
- **Excel增强**: 支持表格合并、图表 /Map 混合排版、Index Sheet 自动生成与链接.
- **PPT增强**: 支持多章节格式、单页多图合并 (X/Y 轴定义)、自定义分页逻辑.

#### 5.2 自动分发与订阅

实现报告的无人值守推送.

- **多渠道发送**: 邮件 (支持 HTML 正文)、FTP 服务器、NAS 挂载盘.
- **触发机制**: 支持自定义周期发送、条件触发发送.
- **动态内容**: 支持邮件正文动态指标、告警规则联动.
- **模板管理**: 支持 PPT 模板增删改、Report Output Type 配置.

### 6. 系统运维与其他

#### 6.1 系统配置与维护

提供完善的后台管理能力.

- **数据源管理**: 支持新增、修改、删除多种数据库连接.
- **服务配置**: FTP 服务器 (多节点)、邮件服务器、系统默认参数.
- **底图与Zone**: 支持自定义产品底图、Zone, Recticle;支持 By ProductType 设置 Bin 颜色.
- **恢复机制**: 展示被删除 Flow 列表并支持恢复.
- **帮助与反馈**: 内置帮助手册与用户问题反馈界面.

#### 6.2 监控与审计

保障系统稳定运行与合规使用.

- **资源监控**: 查看服务器 CPU, Memory、线程数及状态.
- **日志诊断**: 查看日志与报错定位.
- **在线监控**: 监控系统在线人员及资源使用情况.
- **使用统计**: 提供模板使用情况的可视化统计.
- **兼容性**: User 端支持 Windows 7/8/10/11;支持简体中文 / 英语多语言.

# DMS

## DMS interview

### 1.【概念】DMS 在 CIM 中的位置?缺陷数据链路全貌?

- **DMS**(Defect Management System):缺陷数据中枢 —— 管缺陷原始数据与空间分布分析,服务 YE(良率工程师)/ PIE
- 数据链路:**检测设备(KLA 等)→ Klarf 文件解析入库 → 图像数据管理 → Wafer Map 分析 → 高级分析(DSA/DTT/Commonality/Overlay)→ 自动报告**
- 上游:检测设备产出 Klarf + Review 图像,DMS 按机型 / 版本模板解析,每分钟 100+ 个 Klarf 入库
- 横向:与 MES 关联 Lot/Wafer 账料,关联 WIP 与 CP 数据做综合分析
- 下游:是 **YMS 的重要数据源**

一句话分工:EAP 采集控制、MES 管账料、DMS 管缺陷、YMS 管良率.

### 2.【概念】DMS 与 YMS 的分工边界?(经典边界题)

|          | DMS                                     | YMS                          |
| :------- | :-------------------------------------- | :--------------------------- |
| 对象     | 缺陷原始数据 (Klarf + 图像)             | 良率指标 (CP Bin, WAT、良率) |
| 核心分析 | Wafer Map 空间分布、DSA/DTT/Commonality | 良率趋势、归因、Bin 分析     |
| 数据粒度 | Defect 级 (坐标、尺寸、Class)           | Die/Lot 级                   |
| 关系     | YMS 的数据源                            | 消费 DMS 缺陷数据做归因      |

边界原则:**缺陷 "是什么、在哪、从哪来" 归 DMS;"影不影响良率、影响多少" 归 YMS**.DMS 的 Kill Ratio/Hit Rate, Defect Map 与 CP Map Overlay 正是两个系统的衔接点.

**追问**:缺陷暴增但良率没掉,谁的责任域?(先看 Kill Ratio —— 缺陷落在非致命区域,DMS 定位源头,YMS 确认无良率影响后降级处理.)

### 3.【概念】Klarf 文件是什么?为什么缺陷数据必须挂到 MES 账料上才有意义?

Klarf 是检测设备 (KLA 等) 输出的标准缺陷结果文件:每片 Wafer 的缺陷清单 (坐标、尺寸、Class,单文件约 2000 个 defect)+ Lot/Wafer 标识.

挂账原因:

- 缺陷数据本身只有 "坐标 + 类别",必须与 **Lot/Wafer/Layer/Product** 关联后,才能回答 "哪个产品、哪一站、哪台设备出的问题"
- **Tool Commonality 要拉 WIP 数据与 Defect 数据交叉分析** —— 没有账料关联就没有过站历史,共性机台无从算起
- CP Overlay, Kill Ratio 分析同样依赖 Wafer 级关联

实现:Klarf 解析时做字段映射,提取 Lot/Wafer ID 与 MES 账比对挂接;挂不上的进异常队列人工处理,**绝不能静默丢弃**.

### 4.【概念】Cluster / Repeater / Adder 分别是什么?分析意义?

- **Cluster**:空间上聚集成团的缺陷 —— 指向局部性事件 (颗粒掉落、水渍、刮伤),Cluster 分析是 DSA 的重要输入
- **Repeater**:多片 Wafer 同一坐标重复出现的缺陷 —— 指向设备 / 掩模问题 (Reticle 缺陷、Chuck 脏污),Region Stack(Repeater) 专门看这类
- **Adder**:本站新增的缺陷 (Post Map 相对 Pre Map 多出来的)—— Split Map(PreMap/Post Map/Hit Map/Adder Map) 与 Color by Post-Adder 是站间归因的基础

Map 上支持显示 / 隐藏三类标记,查询结果可一键过滤 HasCluster/HasRepeater;Repeater 与 Cluster 的 **判断参数可自定义配置**(聚集半径、重复片数阈值).

### 5.【概念】缺陷分类体系 (Class / RoughBin / ADCBin / SEM 分类) 怎么组织?

分类是多级递进的:

- **RoughBin**:检测机台自动粗分类
- **ADCBin**:ADC(自动缺陷分类) 结果
- **Manual-SEM / Auto-SEM**:Review 后的人工 / 自动 SEM 精分类
- **SSA-Macro/Micro**:宏观 / 微观形貌分类

DMS 支持各级 **分类名称自定义配置 + 每 Class 颜色配置**;Map 与 Image Gallery 上均可做 **Bin 重分类**,人工修正结果回流.分类质量直接决定 Pareto 与 DSA 的可信度 —— Garbage in, garbage out.

### 6.【概念】DMS 系统架构特点?为什么强调 Loader 分布式?

- **微服务架构**:自动负载均衡与资源统一编排,支持 **在线热发布**(改功能不停机)
- **DMS 与 Loader 均分布式**:解析入库 (Loader) 与查询分析 (DMS) 解耦,随产能弹性扩展 —— 检测数据量随产品家族扩张增长很快,Loader 必须先扩得动
- **多数据库**:Oracle/OpenGauss/StarRocks,满足国产化适配
- 配套:集群监控、全链路日志审计、数据处理异常报警与恢复、机台配置化动态增删

考点:缺陷数据是 "写多读多" 场景 —— 高峰每分钟 100+ Klarf 写入,同时 YE 在跑大查询,读写分离与 Loader 水平扩展是架构关键.

### 7.【Klarf】现场 KLA 机型杂、Klarf 版本不一,多版本兼容怎么做?

- 支持 **Klarf 1.1 至 1.8 全版本** 解析
- **按机型、按版本的读取模板**(提供模板及源代码)—— 新机型接入 = 配模板,不是改代码
- 字段映射:不同版本字段差异在模板层吸收,入库存统一模型
- 非标准格式文件走 **手动上传**(支持自定义格式) 兜底
- 验证方法:拿新机型真实 Klarf 样本先在测试环境跑通,用 **原始数据查看** 功能逐字段核对,再上生产

中试线现实:老 KLA 版本停更、新机型版本超前,模板化把 "版本杂" 从开发问题降级为配置问题.

### 8.【Klarf】解析链路的可靠性怎么保障?(大文件、断流、补数据)

- **大文件异步机制**:超大 Klarf 异步解析,不阻塞正常文件流程
- **上传监控工具**:实时监控 Klarf 上传状态,断流第一时间发现
- **手动上传**:自动链路挂了可手动补传,保证数据不丢
- **原始数据查看 + 导出**:解析结果有疑义可回查原文
- 全链路日志审计:每个文件解析成败、失败原因可追溯
- 数据处理异常报警与恢复机制

原则:**先保数据不丢(文件落盘 + 可补传),再保时效(异步 + 监控告警)**.

### 9.【Map】叠图分析有哪些手段?各解决什么问题?

| 手段                                            | 解决问题                            |
| :---------------------------------------------- | :---------------------------------- |
| Map Gallery / By Reticle / By Die 叠图          | 多片 Map 对齐叠加,看系统性分布      |
| 多片叠图计算 DSA                                | 叠加后定位缺陷源                    |
| Region Stack(Defect Map/Reticle Stack/Repeater) | Reticle 级重复缺陷 (掩模问题)       |
| Split Map(PreMap/Post Map/Hit Map/Adder Map)    | 站间对比:本站新增 vs 已有缺陷被命中 |
| Color by Post-Adder / Post-Missing / Diff       | 着色区分新增 / 消失 / 差异          |

配套:按 Die/Reticle 统计 Defect Count/Density/Percent 色阶渲染、等值线图、Zone/Edge 自定义区域统计.

### 10.【Map】两片 Map 叠加对不齐,常见原因有哪些?(坐标系对齐是常见坑)

- **坐标系/原点定义不同**:不同机型原点与 Notch/Flat 基准、Y 轴方向定义不同
- **旋转/镜像**:Klarf 里带 Orientation 信息,解析模板未统一处理
- **Die/Reticle 尺寸不一致**:Zone/Reticle/Subdie 配置与实际不符
- **Overlay 偏移未配**:Wafer 配置中的 Zone/Reticle/Subdie/Overlay 偏移信息要按机型维护

DMS 手段:**Wafer 匹配关系设置 + Auto Wafer Alignment**;DSA 允许用户 **自行调整根源分析的位置误差范围**(对齐有残差时放宽).预防:新机型接入用标准片验证坐标映射,固化进模板.

### 11.【分析】DSA(Defect Source Analysis) 的原理与关键配置?

原理:把多片 / 多层缺陷空间对齐叠加,**Particle to Particle** 逐颗粒回溯,找出缺陷最早出现的 Layer/ 站位 —— 即缺陷源.

关键配置:

- **Layer 过滤**:单一 Layer / Layer 列表 / Layer Group 参与运算
- **Wafer 匹配 + Auto Wafer Alignment**:对齐是前提
- **Repeater/Cluster 判断参数自定义**
- **Step Contribution**:指定 Layer 做追溯,算各站贡献度
- **位置误差范围可调**:对齐残差大时放宽

输出:晶圆层级汇总表、相关性汇总表、命中缺陷对照表.

### 12.【分析】Tool Commonality 怎么找嫌疑机台?

逻辑:**拉 WIP 数据(过站历史)与 Defect 数据交叉分析** —— 把缺陷异常的 Lot/Wafer 按 "共同经过哪台设备" 收敛,共性机台即嫌疑源.

- 前提:缺陷数据挂了 MES 账料、WIP 过站记录完整
- 用法:异常组 vs 正常组对比,看异常组在 Equipment 维度是否高度集中
- 配合查询:按 Product/Equipment/Layer/Lot/Wafer 多条件组合 + 统计过滤 (Defect Count/Defective Dies) 圈定异常组

局限要清楚:Commonality 给的是 **"嫌疑" 不是 "定罪"** —— 还要结合 DSA 的 Step Contribution 与 FDC/ 设备状态交叉验证.

**追问**:混线生产时 Commonality 容易误判,怎么办?(先用查询条件把 Lot 范围圈干净,研发 Lot 与量产 Lot 分开算.)

### 13.【分析】DTT 与 Overlay 分析分别做什么?和 CP 数据怎么结合?

- **DTT(Defect Traceability)**:按 Layer 展示缺陷物理坐标映射关系 (含 Image),可只保留 **Common Defect** —— 回答 "同一个物理缺陷在各 Layer 检测图上长什么样、被谁报出来"
- **Overlay 分析**:**Defect Map 与 CP Map Overlay 叠加** —— 回答 "缺陷落在哪些失效 Die 上"
- **Kill Ratio / Hit Rate**:缺陷导致芯片失效的概率,是 Overlay 的量化结果;Kill Ratio 高的 Class 才是真杀手,指导分类优先级与改善方向

后道衔接:CP Bin 数据来自测试段,DMS 通过关联 WIP 与 CP 数据,完成前道缺陷与后道电性失效的闭环.

### 14.【分析】Image Gallery 与 Sampling 怎么支撑缺陷分类闭环?

- **Review Sampling Rule 自定义配置**:按 Class/ 数量 / 区域等规则决定哪些 Defect 送 Review 机台拍照;支持 **Auto Sampling** 自动采样 + 按 Rule 手动导出 Klarf
- **Send to Review**:分析时选中缺陷直接发 Review 机台复查拍照
- **Image Gallery**:行列 /Panel 排布、对比度亮度全局调整、Smooth/Sharp, Colored by Defect Code、树状浏览、Bin 重分类、人工再分类、Cluster 分析

考点:检测机台报几千个 defect 不可能全 Review —— **Sampling 是用有限 Review 产能换最大分类覆盖率**,Rule 设计 (每 Class 保底抽样数、异常片加抽) 是 YE 与 DMS 工程师的共同工作.

### 15.【前道】前道缺陷管理的特点?各站点关注点差异?

- **Layer 级追踪**:前道每个关键 Layer 都可能插检测站,DSA 的 Layer 过滤 /Step Contribution 就是为此设计
- 站点差异:Litho 后看 Repeater(掩模 / 涂胶问题);Etch/CMP 后看 Adder(Split Map 站间对比);炉管 / 薄膜后看 Particle(Cluster)
- Scan + Review 两级:Scan 机台 (KLA) 全片扫坐标,Review 机台抽样拍照分类 —— DMS 的 Sampling/Send to Review 串起两级
- Inline 监控:Trend 图 + OOC/OOS Spec 线,站级 Defect Count 异常自动预警

### 16.【2-12 寸】2/4/6/8/12 寸检测设备并存、协议杂,怎么统一接入?

分层务实方案:

1. **有标准 Klarf 的**(主流 KLA):按机型 / 版本配解析模板接入,机台增删走 **配置化动态管理**,不改代码
2. **老设备非标格式**:自定义格式走 **手动上传** + 一次性格式转换脚本
3. **无数字输出的老设备**(目检 / 显微镜):人工补录关键计数,至少保证站级趋势不断
4. 图像:TIFF 等常见格式统一载入;Review 照片支持批量导出归档

要点:不追求 100% 自动化接入,先保 "重点产品 + 关键站位" 数据全,边缘设备人工兜底 —— 与全厂老设备接入策略 (RS232 走 MOXA, PLC/ 文件 / 人工兜底) 一致.

### 17.【全产品】化合物半导体 (SiC) 与 Micro OLED 的缺陷检测特殊性?

- **SiC**:衬底缺陷 (微管、位错、层错) 是先天缺陷,要与工艺缺陷分开建 Class 体系;衬底来料检测数据也入 DMS 做源头追溯;4/6 寸小尺寸 + 透明衬底,检测配方与坐标系定义与 Si 不同,模板与 Zone/Reticle 配置单独维护
- **Micro OLED**:CMOS 背板上做显示,缺陷粒度细 (亚像素级)、单 Panel 缺陷少但致命 (Mura 类);Map 分析从 Die 级细化到 **Subdie 级**,Subdie 配置要启用
- 共性:全产品家族共用一套 DMS 框架 (解析模板、分类与颜色按家族自定义),**不共用 Class 定义与缺陷基线**

### 18.【中试线】检测设备少、只能抽样检测,缺陷监控覆盖率低怎么补?

- **Sampling 策略补强**:Auto Sampling + Rule 设计 —— 研发新 Lot 前几片必检、量产品按比例抽检、异常站临时加抽
- **数据复用**:手动上传外部 / 委外检测数据;直接读取本地 Klarf 档案补充分析
- **关联补位**:没检测数据的站位,用 **Defect Map 与 CP Map Overlay + Kill Ratio** 从电性失效反推,弥补空间分布盲区
- **趋势守底**:用已有抽样数据建 Trend + OOC/OOS 线,承认覆盖率不足,但守住 "趋势突变可发现" 底线
- 原则:抽样方案与 YE 共签,覆盖率数字写进报告不粉饰

### 19.【中试线】研发与量产混线,研发期缺陷基线怎么建?数据怎么隔离?

- **基线建立**:研发阶段用 Trend/ 直方图 /Pareto 积累各 Layer 的 Defect Count/Density 分布,收敛后固化为 OOC/OOS Spec 线 —— 基线是统计出来的,不是拍出来的
- **数据隔离**:查询按 Product/Lot Type 区分研发 / 量产;自动报告模板分开配置;研发的实验性 Class 配置不带入量产
- **混线干扰**:研发 Lot 的异常缺陷会污染量产 Commonality 分析 —— 分析前先用查询条件圈定 Lot 范围
- **转正衔接**:研发转量产时基线与 Class 配置评审后继承,避免重新积累

### 20.【中试线】缺陷图像存储量大,保留策略怎么定?

分层务实方案:

- **热数据**:近 3-6 个月 Klarf + 图像在线,支撑日常分析
- **温数据**:量产客户相关 / 客诉风险期产品,图像保留 1-2 年 (可先照片批量导出归档)
- **冷处理**:普通研发 Lot 图像到期清理,**Klarf 文本永久保留**(体积小,是重分析的种子)
- **按需补拍**:图像清了但 Klarf 在,必要时 Send to Review 重新拍照 —— 片子还在就有救
- 原则:保留策略与 YE/QA 会签,清理动作留痕;**宁可清图像,不可清 Klarf**

### 21.【场景】某站后缺陷暴增,怎么定位源机台?

分层排查 (先保生产再排障):

1. **卡控**:站级 Trend 确认 OOC → 通知 MES Hold 受影响 Lot,防止继续流片
2. **定性**:Map 上看形态 —— Cluster(局部事件)?Repeater(设备 / 掩模)?Adder(Split Map 确认是否本站新增)?
3. **定位**:**DSA** 做 Step Contribution 找始发 Layer;**Tool Commonality** 拉 WIP 交叉找共性机台
4. **验证**:嫌疑机台结合 FDC 参数 + Image Gallery 缺陷形貌确认
5. **处置**:机台下线查证,恢复后先跑监控片确认,全程留痕可追溯

### 22.【场景】YE 报 "两片 Map 叠图对不上",怎么排查?

排查顺序:

1. **基本信息**:两片是否同产品同 Layer?Die/Reticle 尺寸是否一致 (Zone/Reticle 配置)?
2. **方向**:是否一片旋转 / 镜像 —— 查 Klarf 的 Orientation 信息,两片 Notch 方向是否统一
3. **坐标映射**:不同机型检测的片坐标系不同,检查解析模板映射
4. **对齐功能**:用 **Auto Wafer Alignment** 重对齐;仍不行调大 DSA 位置误差范围验证
5. 定界数据问题还是配置问题:显示 Klarf 原始数据,逐字段核对坐标

预防:新机型接入用标准片验证坐标映射并固化模板,变更留痕.

### 23.【场景】Klarf 解析失败,缺陷数据断流,怎么处置?

先保生产再排障:

1. **发现**:上传监控工具 + 数据异常报警第一时间告警
2. **保数据**:确认原始 Klarf 文件已落盘未丢 —— 文件在就不怕,可 **手动上传** 补传
3. **定界**:单文件失败 (版本突变 / 字段缺失 / 文件损坏)vs 批量失败 (Loader 服务 / 存储满 / 升级)
4. **处置**:单文件 → 原始数据查看定位字段问题,必要时改映射模板 (测试环境先验);服务问题 → 重启 / 扩容 Loader,全链路日志追溯根因
5. **补流**:修复后按上传时间重放积压文件,与 YE 确认分析数据完整性
6. 复盘:检测设备软件升级要与 DMS 模板验证同步排期,避免 "设备升了级 DMS 不会读" 的空窗

### 24.【场景】YE 说 "昨天那批货 DMS 里查不到缺陷数据",怎么查?

按 "源 → 传 → 解析 → 挂账 → 查询" 五段逐段排除:

1. **有没有测**:先查 MES 该 Lot 是否真过了检测站 (WIP 过站记录)—— 最常见是没安排检测或跳站
2. **有没有传**:上传监控查该时段 Klarf 是否到达
3. **有没有解析**:解析日志查成败;失败走断流处置流程
4. **有没有挂上账**:解析成功但与 MES Lot/Wafer 关联失败 (Lot 改名 /Wafer ID 映射错)→ 进异常队列人工挂接
5. **查询姿势**:确认查询条件 (Product/Layer;相对时间 vs 绝对时间模式常踩坑),或用直接读取本地 Klarf 档案验证数据本身在不在

### 25.【软技能】YE 每天提大量临时分析需求,怎么支撑又不被淹没?

- 自助优先:常用查询存成 **历史记录** 复用,自动报告按模板周期推送 (目录 / 邮箱),YE 能自己查的不来找你
- 培训沉淀:教会 YE 用组合查询 + SQL 高级查询 + Map 二次筛选,需求降级
- 分层响应:影响生产的 (断流 / 暴增定位) 立即响应;优化类需求进 Backlog 排期
- 需求抽象:高频临时需求沉淀成功能 (新图表 / 新报告模板),一次解决一类

### 26.【软技能】DMS 工程师最重要的三个能力?

**数据链路功力(Klarf 解析/账料关联/坐标对齐,数据不准一切分析归零)、缺陷分析思维(Map 形态语言 + DSA/Commonality 组合拳,能与 YE 同频对话)、工程化意识(存储/性能/断流的兜底设计,先保数据不丢再谈高级分析)**.

## DMS Function List

### 1. 系统架构与基础支撑

#### 1.1 架构设计与高可用

- **国产化数据库支持**:支持 Oracle, OpenGauss, StarRocks 等多种数据库, 满足国产化适配需求.
- **微服务架构**:采用微服务架构设计, 实现自动负载均衡与资源统一编排, 部署便捷.
- **分布式高可用**:所有组件及服务实例均支持分布式高可用方案, 消除单点故障.
- **弹性扩展能力**:DMS(数据管理服务) 与 Loader 均采用分布式架构, 可随产能增长灵活扩展.

#### 1.2 系统运维与安全

- **数据安全与备份**:提供底层数据库安全架构、数据备份策略, 以及数据处理异常报警与恢复机制.
- **权限管理**:提供用户登录认证及分组授权功能, 支持细粒度的权限管控.
- **集群监控**:提供服务器及集群的实时监控与管理系统.
- **在线发布**:支持系统功能的在线热发布, 减少停机维护时间.
- **日志审计**:记录数据处理的全链路详细日志, 便于问题追溯.
- **机台配置管理**:支持通过配置方式动态添加或减少检测机台.
- **Klarf 解析模板**:提供基于不同机型、不同版本 Klarf 文件的读取模板及源代码.

### 2. 数据接入与解析

#### 2.1 Klarf 数据解析

- **多版本兼容**:支持 Klarf 1.1 至 1.8 全版本数据格式解析.
- **高性能解析**:支持每分钟解析入库 100+ 个 Klarf 文件 (单文件约 2000 个 defect).
- **大文件处理**:大文件解析采用异步机制, 不阻塞正常 Klarf 文件的解析流程.
- **原始数据查看**:支持显示 Klarf 原始数据内容, 并提供导出功能.
- **手动上传**:支持用户手动上传 Klarf 文件 (含自定义格式文件).
- **上传监控**:提供 Klarf 文件上传状态的实时监控工具.

#### 2.2 图像数据管理

- **多格式支持**:支持 TIFF 及其他常见照片格式的载入与解析.
- **照片导出**:支持将 Review 机台拍摄的缺陷照片批量导出到本地电脑.
- **外部系统对接**:支持与公司现有数据系统对接, 实现数据自动同步.

### 3. 查询与检索功能

#### 3.1 多维度组合查询

- **自定义条件**:支持 Product, Equipment, Layer, Recipe, Lot, Wafer、测试时间、数据载入时间等多条件组合查询.
- **模糊查询**:支持使用通配符进行模糊匹配.
- **SQL 查询**:支持直接使用 SQL 语句进行高级查询.
- **时间模式**:支持相对时间与绝对时间两种查询模式.
- **关联查询**:支持关联 WIP(在制品) 与 CP(晶圆测试) 数据进行综合分析.
- **直接读取**:支持直接读取本地 Klarf 档案进行查询分析.

#### 3.2 查询结果交互

- **数据导出**:查询结果支持导出为 Excel, 且包含 Map 数据.
- **Map 预览**:支持在查询界面直接预览 Wafer Map.
- **Map 标记筛选**:支持在查询结果的 Map 上进行数据标记及二次筛选.
- **历史记录**:支持保存查询记录, 下次可通过历史记录快速复用.
- **显示模式切换**:支持下拉框模式与 List 列表模式切换;支持列表与行列定义等多种显示模式.
- **结果过滤**:
    - 一键过滤:Classified、Unclassified、HasCluster、HasRepeater、HasImage.
    - 统计过滤:对 Class、Defect Count、Defective Dies 等统计结果进行精确过滤.
    - 最终结果:支持设置仅呈现最终检测结果.

### 4. Wafer Map 分析

#### 4.1 Map 显示与交互

- **缺陷标记**:支持显示 / 隐藏 Defect 照片标记、Cluster, Repeater, Adder 标记;支持快速 Mark 带 Image 或 Cluster 的 Defect.
- **显示控制**:
    - 支持修改 Defect 显示大小与形状.
    - 支持显示/隐藏 Reticle、Zone、Die Text、Die Border.
    - 支持 Map 缩放与 Overview 功能.
    - 支持查看/隐藏 Image.
    - 支持 Defect Display Mode 切换(All/Classified Only/Cluster Only/Images Only).
- **框选操作**:支持矩形、圆形、异形、Die 模式框选.
- **测量工具**:支持在 Map 上进行长度及夹角测量.
- **外观自定义**:支持用户自定义 Map 显示外观、标题格式及动态切换标题.
- **Set up 定制**:支持 Map Properties Customization, 调整显示细项条件.

#### 4.2 Map 分析与统计

- **Sidebar 面板**:
    - 统计 Defect Map 信息.
    - 显示 Trend Chart 与直方图.
    - 显示框选 Defect 的 Image.
- **叠图分析**:
    - 支持 Map Gallery 与 Map 叠图(By Reticle / By Die).
    - 支持多片 Wafer Map 叠图计算 DSA.
    - 支持 Region Stack(Defect Map, Reticle Stack, Repeater).
    - 支持 Split Map(PreMap, Post Map, Hit Map, Adder Map).
    - 支持 Color by Post-Adder / Post-Missing / Diff.
- **统计渲染**:支持按 Die/Reticle 统计 Defect Count, Density, Percent, 并根据数值大小渲染颜色 (色阶可调).
- **等值线图**:支持显示 Map 等值线图, 色阶可自定义.
- **Kill Ratio 分析**:支持计算 Defect 导致芯片失效的概率 (Hit Rate).
- **Zone/Edge 分析**:支持自定义 Zone, Edge 进行区域统计分析.
- **联动分析**:
    - Map 关联 Summary Table 联动.
    - Interactive with Data Set / Statistic Chart.
    - Defect 链接到对应图像.
- **Repeat Defect**:支持查看重复缺陷分布.
- **Wafer Split**:支持用户手动选择 Wafer Split 功能.

#### 4.3 Map 操作与导出

- **重分类**:支持在 Map 上对 Defect 进行 Bin 的重新分类.
- **二次过滤**:支持在 Map 上进行数据的二次过滤.
- **Drill Down**:支持选中 Defect 下钻到其他分析组件.
- **Rawdata 查看**:支持显示框选 Defect 的原始数据表格.
- **导出功能**:支持导出 Klarf 文件、PPT 到指定路径;支持复制 Map 到剪切板.
- **Send to Review**:支持指定缺陷发送到 Review 机台进行复查拍照.

### 5. Image Gallery 与图表

#### 5.1 Image Gallery

- **排布模式**:支持行列模式与 Panel 模式自定义排布.
- **图像操作**:支持放大 / 缩小、对比度 / 亮度调整 (全局应用)、Smooth/Sharp 处理.
- **选择操作**:支持全选、反选、Ctrl 框选、Shift 多选.
- **信息显示**:支持在 Image 上显示 Defect Information;支持 Colored by Defect Code.
- **重分类**:支持在 Image 上进行 Bin 的重新分类.
- **导航与导出**:支持设置默认起始图片;支持 Copy to Clipboard/File;支持 Drill Down.
- **树状浏览**:支持按自定义条件树状结构浏览 Review Defect Image.
- **Cluster 分析**:支持 Defect Cluster 分析及检测资讯显示.
- **人工分类**:界面上支持缺陷的重新人工分类.

#### 5.2 统计图表

- **图表类型**:支持 Trend、双 Y 轴 Trend, Bar, Stacked Bar, Box、散点图、直方图、Pareto 等.
- **统计指标**:支持 Defect Count, True Defects, Non-Adder, Defective Dies, Defect Density, Reviewed, Classified, TestedDies, TestArea 及其交叉统计 (By Class/Zone/Test).
- **辅助线**:支持 OOC, OOS、中位线、均值线等 Spec 线显示.
- **交互功能**:
    - 支持更改标题、字体、数字格式及动态切换标题.
    - 支持自定义图例颜色并保存.
    - 支持显示/隐藏提示框、注释、标签.
    - 支持任意选择数据隐藏/重现.
    - 支持多图表同界面自定义布局.
    - 支持图表上显示 Map 及 Image.
    - 支持 Change X/Y Axis、Enable/Disable Unclassify、Defect Size Definition.
- **照片参数**:可查看 DefectID, LayerID, ReviewTime、坐标, 并显示选中照片在 Map/Die 中的位置.

### 6. 高级分析功能

#### 6.1 DSA (Defect Source Analysis)

- **Particle to Particle**:支持颗粒级缺陷溯源分析.
- **Cluster 分析**:支持 DSA Cluster 分析计算.
- **Layer 过滤**:支持按单一 Layer, Layer 列表、Layer Group 过滤运算.
- **Wafer 匹配**:支持设置 Wafer 匹配关系及 Auto Wafer Alignment.
- **参数定义**:支持自定义 Repeater 与 Cluster 判断参数.
- **Step Contribution**:支持指定 Layer 进行缺陷追溯分析.
- **误差调整**:支持用户自行调整缺陷根源分析的位置误差范围.
- **结果汇总**:提供晶圆层级汇总表、相关性汇总表及命中缺陷对照表.

#### 6.2 DTT (Defect Traceability)

- **物理坐标映射**:支持按 Layer 展示 Defect 物理坐标映射关系 (含 Image).
- **Common Defect**:支持仅保留 Common Defect 显示.

#### 6.3 Tool Commonality

- **交叉分析**:支持拉取 WIP 数据与 Defect 数据进行交叉分析, 识别共性机台.

#### 6.4 Overlay 分析

- **Map 叠加**:支持 Defect Map 与 CP Map 的 Overlay 叠加分析.

### 7. 系统配置与自动化

#### 7.1 个性化配置

- **分析配置**:配置 DSA, Cluster, Repeater 选项.
- **分类名称**:配置 Class, RoughBin, ADCBin, Manual-SEM, Auto-SEM, SSA-Macro/Micro 名称.
- **颜色配置**:配置每种 Class 的显示颜色.
- **Wafer 配置**:配置 Zone, Reticle, Subdie, Overlay 偏移等信息.
- **Sampling 规则**:自定义配置 Review Sampling Rule.
- **PPT 样式**:配置 PPT 导出样式.
- **持久化**:所有配置支持修改、保存, 重启后仍保持生效.

#### 7.2 Sampling 功能

- **手动导出**:支持根据 Sampling Rule 手动导出 Klarf 文件.
- **Auto Sampling**:支持自动采样功能.

#### 7.3 自动报告

- **参数配置**:基于模板选择报告页面, 定义运行条件与周期.
- **自动执行**:自动生成报告并保存至指定目录或发送至指定邮箱.

#### 7.4 组件交互

- **页面跳转**:支持选择部分 / 全部数据跳转到其他页面进一步分析.
- **分类跳转**:支持选择 Defect 跳转至照片 /MAP 分类页面进行分类.

# ADC

http://mirlab.org/dataset/public/?spm=5176.28103460.0.0.96a07551Xxqtvw

MIR-WM811K, 包含 811,000 个晶圆图谱

# RPT

| Abbreviation | Full form | Desc         |
| :----------- | :-------- | :----------- |
| RPT          | Report    | 生产报表系统 |

## RPT interview

### 1.【概念】RPT 在 CIM 中的位置?与 YMS 的分工边界?

- **RPT**:生产运营的 "固定窗口"—— 统一 ETL + 统一数据模型 + 报表交付平台,管 **运营/管理类固定报表** 与定时分发 (WIP 日报、OEE 周报、Hold WIP 明细)
- **YMS**:工程分析的 "工作台"—— 交互式钻取、良率 / 缺陷根因分析,面向工程师的自助探索

一句话:**RPT 是 "看数",YMS 是 "找因"**.边界划不清的后果:工程师让 RPT 做无限自由的分析 (做成第二个 YMS),或管理层让 YMS 发定时邮件 (缺订阅分发能力).判断标准:需求是 "每天固定时间给固定的人看固定的口径" → RPT;是 "我不知道问题在哪,要切片钻取" → YMS.

### 2.【概念】报表为什么不直接查 MES 生产库,要单独建 Report DB?

- **隔离负载**:大报表聚合查询会拖垮 MES 交易库,影响 Run 货 —— 生产永远优先
- **口径固化**:ETL 把多源数据 (MES/EAP/FDC/SPC/YMS) 清洗成统一数据模型,报表口径不随源系统变更漂移
- **性能基础**:Report DB 可做预聚合、历史分层 (在线 1 年 + 归档),MES 库不为此设计
- **一致性保障**:系统内置校验机制确保 Report DB 与 MES 源数据的一致性、完整性、准确性

代价是 **时效性**:History 类数据 (Lot/Machine/Wafer History) 更新频率控制在 3 分钟以内 —— 面试要能答出 "报表数据最多滞后约 3 分钟,这不是 bug 是设计".

### 3.【概念】双引擎架构 (FineReport + Report Framework) 为什么需要两个?

| 引擎                          | 技术栈            | 适用场景                                                    |
| :---------------------------- | :---------------- | :---------------------------------------------------------- |
| FineReport(Tomcat Web)        | 商业工具 + 设计器 | 复杂中国式报表 (合并单元格、套打)、业务部门自助拖拽、交付快 |
| Report Framework(EXT.Net Web) | C# 自研框架       | 深度客制化、复杂统计算法扩展、与 CIM 权限 / 门户深度集成    |

配套工具链:FineReport 设计器 + C# 报表开发工具,覆盖不同技术栈;可视化编辑降低二次开发门槛;**算法可扩展**(数据提取逻辑与统计算法可自定义修改) 应对半导体复杂 KPI.务实原则:能用 OOB/ 设计器画出来的不写代码,写代码的才走 Framework.

### 4.【概念】Lot / Equipment / Wafer 三级数据模型分别回答什么问题?

- **Lot 批次级**(回答 "货跑得怎么样"):按 Start/Out, Ship, Rework, Scrap, Terminate, Hold/Release, Bank, Trackout, Branch 等事件类型结构化存 Lot History;KPI 含 WIP, Start/Out Qty, Move, Run/Wait/Hold/Queue Time, Rework/Scrap Qty, Hold 次数、Skip 次数
- **Equipment 设备级**(回答 "机台用得怎么样"):状态转换历史 + 每日各状态时间 / 次数 / 占比;OEE, Uptime, Down Time, Utilization, Efficiency 按日 / 周 / 月;Equipment Move 数量
- **Wafer 晶圆级**(回答 "这片经历了什么"):整合 Track In/Out, Process Start/End, WPH(Wafer History) 的综合追溯

三级模型是 Drill-down 的骨架:Index Summary → Lot 列表 → Wafer 履历,层层钻取.

### 5.【概念】OOB 标准报表库与客制化开发的关系?

OOB(开箱即用) 标准库预置行业通用报表:**WIP Profile、Hold WIP、Index Summary、EQP Status Change History、EQP Performance Summary** 等,按项目规划数量支持客制化扩展.

价值:一是 **加速落地**(进场即有报表可用,不必从零建模);二是 **口径教育**(OOB 报表内嵌了行业标准的指标算法,客制化在此基础上改,避免每个厂各造一套 OEE).实施原则:先盘点 OOB 覆盖率,差异点做客制化,不为 "我们想要自己的样子" 重写标准报表.

### 6.【ETL】RPT 的 ETL 引擎有哪些核心能力?

- **可视化管理**:Web UI 做 ETL 任务增删改查、启停、配置,不靠改配置文件
- **精细化调度**:Schedule Job 频率精确到秒 / 分 / 时 / 天 / 周 / 月
- **断点续传与补数**:按生产数据时间戳自动检测缺失区间,系统恢复后从停机时刻自动补数,保证数据连续性
- **运行监控**:ETL 运行历史可查 (执行效率、耗时趋势),报错日志详细记录,辅助快速定位抽取 / 转换异常
- **时效指标**:History 更新 ≤ 3 分钟

考点:**断点续传是中试线刚需** —— 研发网络维护、服务器重启频繁,不能每次断流都人工补数.

### 7.【ETL】工厂日历 (08:00 - 次日 08:00) 为什么这么重要?自然日统计不行吗?

半导体是 24 小时连续生产,班次跨零点.**按自然日切,一个班次的产出被劈到两天**,班别绩效、日产出全错;且与 MES 的班次账对不上,报表永远被挑战.

RPT 内置工厂日历时间逻辑,只需简单配置即可按工厂班次自动汇总.延伸考点:所有 "日" 级指标 (WIP 日报、日 OEE、日 Move) 都要声明时间口径 (工厂日 / 自然日 / 周起始),跨系统对齐,这是报表可信度的地基.

**追问**:月度报表跨月夜班次怎么处理?(按工厂日历归属到班次开始日,口径写进报表说明.)

### 8.【ETL】数据从 MES/EAP/FDC/SPC/YMS 多源汇聚,口径不一致怎么办?

分层处理:

1. **主数据对齐先行**:Equipment, Product, Flow, Equipment Capability 等核心实体以 MES 为权威源,其他系统编码做映射表,杜绝 "同一台机三个名字"
2. **指标口径单一出处**:OEE 从设备状态历史算,不重复从 EAP 日志再算一套;良率口径与 YMS 对齐 (RPT 引用其结果,不自造算法)
3. **校验机制兜底**:Report DB 与 MES 源数据做一致性 / 完整性 / 准确性校验,差异超阈值告警
4. **口径文档化**:每张报表标注数据来源与计算逻辑,争议时查文档不吵架

### 9.【数据模型】OEE / Uptime / Utilization / Efficiency 怎么算?为什么设备级报表按日 / 周 / 月三档?

OEE = 时间稼动 × 性能稼动 × 良品率;数据底座是 **Equipment 状态转换历史**(每日各状态的时间、次数、占比):

- **Uptime**:生产可用状态时间占比
- **Utilization**:实际 Run 货时间 / Uptime(剔 Idle)
- **Down Time**:故障 / 维修状态累计,关联 PMS 工单可下钻原因

按日 / 周 / 月三档是因为消费场景不同:日档给值班工程师看异常、周档给生产会看趋势、月档给管理层看 KPI.陷阱:状态定义 (如 ENG/IDLE/PM 算不算 Uptime) 各厂不同,**实施第一件事是与设备工程师冻结状态映射表**,否则 OEE 永远对不上.

### 10.【分发】报表交付有哪些手段?权限怎么管?

- **导出**:富格式 Excel(字体颜色、字号、单元格背景色保真导出)、PDF,保持视觉一致性 —— 管理层拿 Excel 直接贴 PPT 是刚需
- **订阅分发**:按日 / 周 / 月定时自动发报表邮件;门户在线查看;报表间参数传递与 **Drill-down** 钻取
- **开放接口**:带认证鉴权的数据 API,供外部系统安全取数

**三级权限体系**:查看权限 (可见报表范围)、数据维护权限 (数据编辑 / 修正)、系统权限 (ETL 配置等后台操作).数据级管控落到涉密 Lot 保护:实验 / 客户 Lot 按产品族或 Lot 属性过滤,看不到的报表里直接不出现该行.

### 11.【性能】大报表 (如全年 Wafer 级追溯) 查询超时,有哪些优化手段?

分层方案:

1. **预聚合**:日 / 周 / 月指标提前算好存汇总表,报表查汇总不查明细
2. **异步生成**:大报表后台跑,完成后通知下载 / 邮件送达,不占前端连接
3. **生命周期分层**:在线只留 1 年 MES 数据,历史查询走归档库,在线库保持轻量
4. **监控预警**:实时监控报表点击率、数据更新状态、查询响应时间、渲染效率,性能瓶颈 / 数据延迟有预警机制
5. **报表治理**:限制一次查询时间范围、强制必填过滤条件,防止 "select 全表" 式自助查询

原则:先看监控定位是慢在取数、计算还是渲染,再对症下药,不一上来就加索引.

### 12.【生命周期】报表数据的生命周期怎么设计?

- **在线层**:原则上在线保留 MES 数据 **1 年**,保障近期查询性能
- **归档层**:超期数据迁归档库,可查但慢,满足追溯与审计
- **清理层**:按用户对保存时限的要求定制归档与清理机制

中试线特殊考量:研发实验数据价值密度高但量小,可延长在线保留;量产运行数据量大,严格按 1 年 + 归档.清理动作必须留痕 (清了什么、谁批的),实验数据清理要过研发负责人签认 —— **一切变更可追溯** 同样适用于数据本身.

### 13.【前道】【后道】前道与后道的报表重点有什么差异?

| 维度       | 前道 (晶圆制造)                               | 后道 (封装测试)                          |
| :--------- | :-------------------------------------------- | :--------------------------------------- |
| 追溯粒度   | Wafer 级:Track In/Out, Process Start/End, WPH | Die/Strip 级:单颗 / 单条履历             |
| 核心对象   | Lot 的 25 片、Slot Map, Recipe                | 辅材 (料号、批次、有效期)、Lot 与载具    |
| 典型报表   | WIP Profile, Cycle Time、设备 OEE             | 辅材消耗 / 批次追溯、Test 良率、换型记录 |
| 数据源侧重 | MES + EAP + FDC                               | MES + 辅材管理 + Test Program 结果       |

落点:数据模型不变 (Lot/Equipment/Wafer 三级),但后道要扩展 **Strip/Die 级与辅材维度** 的抽取与关联;Test 结果常从 Tester 文件 /STDF 走 ETL 补入 Report DB.

### 14.【2-12 寸】新旧机台并存 (2/4/6/8/12 寸)、数据质量参差,设备报表怎么做才可信?

务实分层:

1. **先分层再求准**:12 寸 SECS/GEM 机台数据全自动;老机台 (PLC/ 文件 / 人工录入) 单独标记 **数据置信等级**,报表上可区分展示,不和自动数据混在一起算平均
2. **状态映射先行**:老机台状态字典各自为政,先做统一状态映射表再谈 OEE;实在拿不到状态的机台,OEE 报表里标注 N/A 而不是编数
3. **人工兜底补入口**:无接口机台提供人工补录界面,纳入同一数据模型,但保留录入人 / 时间戳以便审计
4. **覆盖率指标**:设备报表附 "数据自动采集覆盖率",让管理层知道数字的可信边界

原则:**先卡控口径,再追求自动化**,不为了报表好看而硬凑数据.

### 15.【全产品】逻辑 / 功率 /CIS/MEMS/ 化合物多家族并存,一套数据模型怎么适配?

- **骨架统一**:Lot/Equipment/Wafer 三级模型、事件分类 (Start/Out/Hold/Rework/Scrap…)、状态历史全家族共用 —— 这些是制造共性
- **KPI 按族配置**:CIS 看 Defect 密度、功率看高温工序 Cycle Time, MEMS 看 Release 良率,通过 **算法可扩展**(统计算法自定义) 挂到统一模型上,不改表结构
- **Tech 维度隔离**:报表权限与汇总口径按 Tech/Product 族切分,跨家族汇总只做 WIP/Move 等共性指标
- **化合物半导体**:批量小、实验多,Wafer 级追溯反而比产量指标更重要,追溯包报表优先做

### 16.【中试线】研发量产混线,涉密实验 Lot 在报表里怎么保护?

- **数据级权限**:报表查询按用户角色过滤,实验 Lot/ 客户验证 Lot 对无关人员整行不可见 —— 不止藏报表,连报表里的行都藏
- **报表级权限**:实验进度、客户验证追溯包等敏感报表放入受限目录,查看权限按项目组授予
- **分发管控**:邮件订阅清单审批制,涉密报表禁止外发邮箱;导出的 Excel 继承权限标记
- **审计留痕**:谁看了、谁导出了涉密报表有日志可查
- 中试线坑:研发人员离职 / 转组后权限未回收 —— 权限定期 Review 机制比技术管控更容易漏

### 17.【中试线】中试线最常被要的报表是哪几张?各自服务谁?

- **WIP 日报**(生产 / 值班):按工厂日历的在制品分布,基于 WIP Profile 客制,盯瓶颈工序堆积
- **Hold WIP + 异常日报**(PIE/QA):Hold/Release 次数、Hold Time、原因分类,研发混线下 Hold 量远超量产厂
- **良率周报**(管理层 / 项目组):与 YMS 对齐口径,RPT 管固定分发,YMS 管异常下钻
- **设备状态/OEE 周报**(设备 / 生产):EQP Performance Summary 为基础,新旧机台分级呈现
- **实验进度跟踪**(研发):实验 Lot 当前站别、Wait/Run Time、计划对比 —— 中试线特有,OOB 没有,是客制化大头
- **客户验证 Lot 追溯包**(QA/ 客户):Lot History + Wafer History + 关键量测值一键导出 PDF

### 18.【中试线】每个工程师都来提客制化报表需求,需求爆炸怎么治理?

- **先 OOB 后客制**:需求先对 OOB 标准库 (WIP Profile/Hold WIP/Index Summary/EQP 两张),能钻取 / 参数化满足的就不新开
- **自助优先**:FineReport 可视化设计器 + 培训,让有能力的工程师自助做草稿,RPT 团队只做发布审核与性能把关
- **准入评审**:新报表评审三问 —— 给谁看、多久看一次、现有报表加参数能否满足;一次性分析需求引导去 YMS/ 自助取数,不落 RPT
- **生命周期管理**:报表也有上下线 —— 点击率监控里长期零访问的报表定期下线,避免报表坟场
- 底线:客制化报表的数据口径必须走统一数据模型,禁止报表直连源系统私自取数

### 19.【场景】早上生产的反映:报表里的 WIP 和 MES 实时数据对不上.怎么查?

排查框架 (按概率排序):

1. **时差**:Report DB 是 ETL 抽取的,History 更新有 ≤3 分钟窗口;日报还是按工厂日 (08:00 切) 算的 —— 先确认对方比的是不是 "此刻" 与 "昨日工厂日"
2. **口径**:报表 WIP 是否含 Bank/Terminate?Ship 出去的算不算?拿出口径文档对一遍
3. **ETL 断流**:查 ETL 运行监控与错误日志,是否昨夜任务失败未重跑;失败则利用断点续传按时间戳补数后重跑
4. **源数据变更**:MES 侧是否有 Lot 属性事后修改 (Change Attribute),重跑对应区间

处置:**先告知数据可信边界与恢复时间(保生产决策),再修数留痕** —— 数据修正走数据维护权限,改前改后留记录.

### 20.【场景】一张年度追溯大报表把 RPT 服务器 CPU 打满,在线报表全卡死.怎么处理?

先保生产再排障:

1. **止血**:杀掉该查询会话,大报表临时下线或限制查询范围,恢复在线服务
2. **隔离**:大报表改 **异步生成**(后台跑+ 完成通知),与在线查询资源隔离
3. **根治**:该报表走预聚合 / 归档库;加时间范围必填限制;纳入性能监控 (查询响应时间、渲染效率) 设阈值预警
4. **复盘**:为什么它能上线 —— 客制化报表发布前补一道大数据量压测;查监控确认是否还有其他隐形大报表

原则:**一张报表的任性不能拖垮全厂的看板**,先卡控查询边界,再谈优化.

### 21.【场景】有工程师投诉:他在 WIP 报表里看到了别的项目组的涉密实验 Lot.怎么查证与整改?

查证:

1. 确认该用户的 **查看权限** 角色与数据级过滤规则,复现他能看到什么
2. 查 ETL/ 报表配置:这张报表是否漏配数据级权限过滤 (客制化报表最常见的坑 —— 标准报表有过滤,新做报表忘了加)
3. 查订阅分发:邮件附件是否把全量数据发给了不该收的人
4. 审计日志:该 Lot 数据还被谁看过 / 导出过,评估泄露面

整改:修复过滤规则 → 复测同目录下所有客制化报表 → 权限配置纳入报表发布 Checklist → 权限定期 Review.全程留痕,向数据所有方通报处置结果.

### 22.【场景】MES 升级改了 Lot History 表结构,早上发现所有 Lot 级报表断数.怎么应对?

1. **先保分发**:确认影响范围,管理层日报用昨日快照或手工简报顶上,明确恢复时间预期
2. **定位**:ETL 错误日志会明确报字段缺失 / 类型变更;对比 MES 升级 Release Note 圈定变更点
3. **修复**:调整 ETL 抽取映射,测试环境验证后用 **断点续传** 按时间戳自动补齐断流区间,报表重跑
4. **防线**:与 MES 团队建表结构变更通知机制,升级前在测试环境先跑 ETL 冒烟;核心任务配断流告警,不要等用户投诉

考点:答出 "断点续传补数" 与 "变更联动机制",而不是只说 "改代码适配".

### 23.【软技能】业务部门说 "你们的报表没用,我自己从 MES 拉 Excel 更快",怎么办?

- 先听真需求:是时效 (等不了 3 分钟 / 日报滞后)、口径 (指标不是他要的算法)、还是交互 (不能自己切片)—— 三种不满三种解法
- 时效 / 交互问题:引导到数据 API 或 YMS 自助分析,给他一个合法出口,**比自己直连生产库强**
- 口径问题:拉他一起对口径文档,多数争吵止于 "原来你的 Move 含 Rework"
- 守住底线:**任何自助取数不能直连 MES 生产库**,给他更快的路,但不能给危险的路;同时反思报表目录是否该按角色重组

### 24.【软技能】RPT 工程师最重要的三个能力?

**数据建模与口径治理能力(Lot/Equipment/Wafer 三级模型 + 指标口径是报表可信的地基)、全链路排障能力(从源系统表结构到 ETL 到报表渲染,断在哪一环都能定位)、服务与边界意识(既懂管理层要什么,又守住权限、性能与生产库隔离的底线)**.

## RPT Function List

### 1. 系统架构与开发平台

#### 1.1 混合技术架构

支持主流报表工具与自定义开发框架, 兼顾标准化与灵活性.

- **双引擎架构**:提供 FineReport (Tomcat Web) 与 Report Framework (EXT.Net Web) 双重架构支持.
- **开发工具链**:支持 FineReport 设计器及 C# 报表开发工具, 满足不同技术栈的开发需求.
- **可视化开发**:提供可视化报表编辑工具, 支持用户自定义报表布局、图表样式及交互逻辑, 降低二次开发门槛.
- **算法可扩展**:支持报表数据提取逻辑与统计算法的自定义扩展和修改, 适应复杂业务计算场景.

#### 1.2 开放接口与集成

支持跨系统数据共享与嵌入式集成.

- **标准数据接口**:提供认证鉴权机制的数据 API, 允许外部系统安全获取报表数据.
- **报表联动**:支持不同报表间的参数传递与钻取 (Drill-down), 点击图表或表格可串联至详细报表进行深层查询.

### 2. ETL 数据整合引擎

#### 2.1 任务调度与管理

提供可视化的 ETL 全生命周期管理能力.

- **UI 管理界面**:提供 Web UI 进行 ETL 任务的增删改查、启停控制及配置管理.
- **精细化调度**:支持 Schedule Job 定时执行, 频率精确到秒 / 分 / 时 / 天 / 周 / 月.
- **工厂时间适配**:内置工厂日历时间逻辑 (如 08:00- 次日 08:00), 仅需简单配置即可自动按工厂班次汇总数据.
- **断点续传与补数**:支持根据生产数据时间戳自动检测缺失区间, 系统恢复后自动从停机时刻开始补数据, 确保数据连续性.

#### 2.2 运行监控与运维

保障 ETL 过程的透明化与问题快速定位.

- **历史运行分析**:记录 ETL 运行历史, 支持查询与分析执行效率、耗时趋势.
- **错误日志追踪**:详细记录运行报错信息, 辅助维护人员快速定位数据抽取 / 转换异常.
- **数据一致性保障**:通过校验机制确保 Report DB 与 MES 源数据的一致性、完整性与准确性.
- **高频更新**:历史信息 (Lot/Machine/Wafer History) 更新频率控制在 3 分钟以内.

### 3. 数据模型与关键指标

#### 3.1 基础主数据

构建标准化的半导体制造数据底座.

- **核心实体**:涵盖 Equipment(设备)、Equipment Capability(设备能力)、Product(产品)、Flow(工艺流程) 等基础数据.

#### 3.2 Lot 批次级数据

支持全流程批次追溯与绩效分析.

- **事件分类存储**:按 Start/Out, Ship/Unship, Rework, Scrap/Unscrap, Terminate/UnTerminate, Hold/Release, Bank, Trackout, Change Attribute, Branch 等事件类型结构化保存 Lot History.
- **关键绩效指标 (KPIs)**:
    - **WIP 与产出**:Lot WIP, Start Qty, Out Qty, Move 数量.
    - **时间效率**:Run Time, Wait Time, Hold Time, Queue Time, Rework Time, Branch Time.
    - **质量与异常**:Rework Qty, Scrap/UnScrap Qty, Terminate/UnTerminate Qty, Hold/Release 次数, Skip 次数, Branch Count.

#### 3.3 Equipment 设备级数据

支持设备利用率分析与状态监控.

- **状态历史**:记录 Equipment 状态转换历史及每日各状态的时间、次数、占比.
- **效能指标**:支持每日 / 每周 / 每月的 OEE, Uptime, Down Time, Utilization, Efficiency 计算与展示.
- **产出统计**:统计 Equipment Move 数量.

#### 3.4 Wafer 晶圆级数据

支持精细到单片晶圆的制程追溯.

- **Wafer Level 整合**:具备整合 Track In/Out, Process Start/End, Wafer History (WPH) 等信息的综合报表功能.

### 4. 报表功能与交付

#### 4.1 导出与格式

支持高保真数据导出与离线分析.

- **富格式 Excel 导出**:支持导出包含字体颜色、字号、单元格背景色等样式的 Excel 文件, 保持报表视觉一致性.

#### 4.2 自动化分发

支持报表的定时推送与主动触达.

- **邮件订阅**:支持按日 / 周 / 月设定特定时间自动发送报表邮件, 满足管理层定期审阅需求.

#### 4.3 权限与安全

支持多维度的数据访问控制.

- **三级权限体系**:
    - **查看权限**:控制用户可见的报表范围.
    - **数据维护权限**:控制用户对报表数据的编辑/修正能力.
    - **系统权限**:控制系统配置、ETL 管理等后台操作权限.

#### 4.4 性能监控

保障报表服务的稳定性与响应速度.

- **运行指标监控**:实时监控报表点击率、数据更新状态、查询响应时间及图表渲染效率.
- **异常提醒**:针对性能瓶颈或数据延迟提供预警机制.

### 5. 数据生命周期管理

#### 5.1 存储与清理策略

平衡在线查询性能与历史数据保留需求.

- **在线保留策略**:原则上在线保留 MES 数据 1 年, 保障近期数据查询性能.
- **定制化清理方案**:根据用户对数据保存时限的具体要求, 提供完善的数据归档与清理机制.

### 6. 开箱即用 (OOB) 客制化报表

#### 6.1 标准报表库

提供预置的行业标准报表, 加速项目落地.

- **WIP Profile**:在制品分布概况报表.
- **Hold WIP**:被扣留批次明细与原因分析报表.
- **Index Summary**:综合生产指数摘要报表.
- **EQP Status Change History**:设备状态变更履历报表.
- **EQP Performance Summary**:设备效能综合汇总报表.
- **客制化扩展**:支持根据项目规划数量进行额外的客制化报表开发.

# FMS

## FMS interview

### 1.【概念】FMS 在 CIM 五层架构中的位置?与 EAP/MES/AMS/RPT 的边界?

FMS 位于 **决策展示层**:产线实时状态可视化 + KPI 看板 + 异常滚动播报,服务操作员 / 工程师 / 厂长各层级用户.

| 系统 | 分工                            | 与 FMS 边界                                                  |
| :--- | :------------------------------ | :----------------------------------------------------------- |
| EAP  | 状态数据 **采集源**(SECS/GEM)   | FMS 不直连机台,不重复采集                                    |
| MES  | 状态数据 **业务源**(账料、流程) | FMS 从 MES DB 自动同步 Tool ID/Model/Chamber/Port 等基础信息 |
| AMS  | 告警 **产生与通知**             | FMS 只做告警滚动播报的展示出口                               |
| RPT  | **历史** 报表                   | FMS 管 **实时** 可视化,历史深分析交给 RPT                    |

一句话:**FMS 只读不写、只展示不控制**,是各系统的 "显示屏",不是数据源.

### 2.【概念】设备状态为什么要分三个维度显示?

FMS 多维状态显示把设备状态拆成三层,各回答一个问题:

- **连接状态**(Online/Offline):EAP 和机台 **通不通** —— 通讯层
- **操作模式**(Auto/Manual/Idle):机台 **听谁指挥** —— 控制层,Manual 意味着有人在机台本地操作,CIM 指令可能不生效
- **使用状态**(Running/Down/Standby):机台 **在不在干活** —— 生产层

不分层的坑:一台 Offline 的设备无法区分是 "通讯断了" 还是 "设备真 Down";一台 Running 但 Manual 的设备,派工上去必卡.**三个维度正交组合才是设备真实状态**,颜色映射也按优先级渲染 (通常 Down > Offline > Manual > 其他).

### 3.【概念】FMS 的状态数据从哪来?时效性怎么保证?

数据链路:**机台 → EAP(SECS/GEM 事件)→ MES(状态入账)→ FMS(定时拉取渲染)**.

- FMS 界面打开后 **自动定时刷新**,无需手动刷新;刷新周期可配 (典型 5-30 秒)
- 时效性 = 链路各环节延迟之和:EAP 事件上报 (秒级)+ MES 入账 + FMS 轮询周期
- 关键认知:FMS 是 **准实时** 不是硬实时,大屏比现场慢十几秒是设计使然;要求 "零延迟" 的需求应该回到 EAP 层解决

**追问**:如果要求刷新周期 1 秒?(先问并发:多少客户端 × 多少设备图标,轮询会打爆 MES DB,应改事件推送或加缓存层)

### 4.【概念】Layout 布局管理解决什么问题?为什么不直接用 CAD 平面图?

Layout 是把 FAB 物理空间搬进系统的 **可视化建模层**:

- **拖拽式建置**:设备图标拖放定位、快速调整,Move In/Out 时工程师自己改,不用等开发
- **自由分组编辑**:按区域、制程或自定义逻辑划分群组,群组内单台设备及 **Chamber 级独立属性编辑**
- 状态数据绑定在图标上,平面图才有 "生命"

不用 CAD 的原因:CAD 是静态图纸,改一次要走图档流程;Layout 是 **活的数据载体** —— 图标绑定 Tool ID 实时渲染状态,点击可下钻履历.中试线设备变动频繁,CAD 模式根本追不上现场.

### 5.【概念】状态颜色映射为什么必须支持用户自定义?

- **动态颜色映射** 是 FMS 的核心交互:绿色 Run、红色 Down、黄色 Idle……一眼扫全厂
- 可自定义增删改状态- 颜色对应关系,因为:
    - 各厂状态模型不同(有没有 Engineering 态、Scheduled Down 算不算 Down)
    - 使用场景不同:客户参观版要弱化告警色,运维版要突出 Offline
    - 新状态类型引入(如老设备的 "Unknown" 态)不用改代码
- 工程原则:**颜色语义全厂统一**,自定义权限收到 CIM 管理员,避免每个班配一套颜色,交接班全靠猜

### 6.【概念】实时状态、状态履历、统计报表三者的分工?

| 维度 | 实时状态        | 状态履历                                  | 统计分析                     |
| :--- | :-------------- | :---------------------------------------- | :--------------------------- |
| 回答 | 现在怎么样      | 发生过什么                                | 规律是什么                   |
| 形态 | Layout 图标颜色 | 逐条变更记录 (带 Lot ID/Alarm ID/Comment) | 状态时长占比 %、筛选汇总     |
| 用户 | 操作员 / 班组长 | 工程师排障                                | 管理层 /OEE 分析             |
| 时效 | 秒级刷新        | 按需查询 (自定义时间段)                   | 按群组 / 型号 / 厂商多维筛选 |

三者共用同一份状态流水,**实时看板是流水的当前快照,履历是流水本身,统计是流水的聚合**.

### 7.【看板】操作员、工程师、厂长看同一块大屏吗?内容怎么分层?

不看同一块,分层设计:

- **操作员/班组长**:本区域 Layout 大图 + 设备三色状态 + 当前 Lot —— 关心 "哪台要我干活、哪台卡了"
- **工程师**:状态履历 + Alarm 滚动播报 + 多维筛选 (按型号 / 厂商找同型问题机台)—— 关心 "为什么停、停了多久"
- **厂长/管理层**:全厂 KPI 看板 —— Run 率、Down 机台数、状态占比分布、UPH 趋势 —— 关心 "今天产出有没有风险"

中试线实践:**一套数据多套视图**,按角色配置默认页面;大屏轮播模式循环播放各区域 Layout.

### 8.【履历】状态履历为什么要带 Lot ID, Alarm ID, Comment?

一条状态变更记录不只是 "10:03 Down → 11:20 Run",上下文才是排障钥匙:

- **Lot ID**:Down 时正在跑哪批货 → 直接圈定受影响 Lot,联动 MES 查这批货后续处理
- **Alarm ID 及内容**:Down 的 **原因码** —— 是真空报警还是机械手卡死,不用跑现场先判方向
- **Comment**:人员备注 (PM 中、待料、等工程师)—— 区分 "设备坏了" 和 "计划性停机",统计口径才干净

没有这三样,履历只是时间轴;有了它,履历是 **可关联追溯的事件链**.

### 9.【统计】状态占比统计与 OEE 是什么关系?

FMS 自动计算每台设备各状态的 **时间百分比**(Run/Idle/PM/Down 分布),这是 OEE 的 **数据地基**:

- OEE = 时间稼动率 × 性能稼动率 × 良率;FMS 状态统计直接支撑 **时间稼动率**(Run 时间 / 总时间)
- 性能稼动率 (UPH 类) 需要状态履历 + MES 过账节拍联合计算
- 良率维度在 YMS,FMS 不越界

关键考点:**状态定义决定 OEE 口径** —— Standby 算稼动还是损失、Engineering 实验时间算不算,必须和生产部门先对齐定义再谈统计,否则每个部门算出的 OEE 都不一样.FMS 的价值是让口径 **可配置、可筛选(按群组/型号/厂商/时间段)**、可导出报表.

### 10.【前道】前道场景 FMS 展示有什么侧重?

- **Chamber 级颗粒度**:前道多腔设备 (Etch/CVD) 要展示到 Chamber —— 群组内单台设备及腔体独立属性编辑正是为此;主机 Idle 但 Chamber 2 在 Run 是常态
- **Lot 关联**:前道更关心 Wafer(数量、Slot Map, Recipe),履历带 Lot ID 支持从设备反查在制批
- **状态优先级**:前道设备贵、瓶颈集中,Down/PM 状态必须最醒目;Litho 等瓶颈机台单独置顶或独立视图
- **与 RTD 联动看板**:派工停滞 (设备 Ready 但无货 / 有货无 Ready 设备) 是前道大屏常见专区

### 11.【后道】后道 FMS 与前道的差异?

| 维度     | 前道              | 后道                     |
| :------- | :---------------- | :----------------------- |
| 设备节拍 | 小时级 Batch      | 秒级 / 分钟级,换型频繁   |
| 关注颗粒 | Wafer/Lot/Chamber | Strip/Die、辅材批次      |
| 状态特点 | Down/PM 影响大    | Idle(待料 / 换型) 占比高 |
| Layout   | 按 Bay/ 制程分区  | 按产品线 / 封装形式分区  |

后道要点:**Idle 要细分原因**(待料 / 换型 / 等首件确认),靠履历 Comment 与 MES 联动区分;换型频繁意味着设备状态切换密度高,刷新周期与统计粒度要适配,否则履历被换型记录刷屏.

### 12.【2-12 寸】老设备没有 SECS 能力、状态数据不全,FMS 怎么展示?

分层务实方案,不追求一步到位:

1. **有 SECS 的新机台**:走标准链路 (EAP→MES→FMS),三维度状态齐全
2. **RS232 老机台**:MOXA 串口转网接入 EAP,状态可能有但事件不全 —— 只显示能拿到的维度
3. **无任何接口设备**:PLC/OPC 采集 Run 信号兜底,或退化为 **人工扫码报状态**
4. **实在没数据**:Layout 上照常摆图标,状态置 **Unknown(灰色)**,履历标注 "人工维护"

原则:**图标要全(账上有这台设备),状态允许分层残缺**,并在大屏图例中明示灰色 = 未接入,避免被误读为 Offline.全灰区域就是后续自动化改造的优先级清单.

### 13.【2-12 寸】2/4/6/8/12 寸多区域多楼层混线,Layout 怎么组织?

- **按物理结构分层**:楼层 → 区域 → 群组,自由分组编辑按区域 / 制程 / 自定义逻辑划分 —— 中试线推荐 "尺寸 + 制程" 双维度 (如 "8 寸-Etch 区"、"12 寸-Litho 区")
- **新旧机台同区并存**:同群组内按型号筛选查看 (多维筛选支持设备型号 / 厂商)
- **大屏导航**:总览图 (全厂色块热力)→ 点击下钻区域 Layout → 单机履历,三级结构
- 务实建议:不要追求一张图放下全厂几百台设备,**缩放层级比信息密度重要**;默认视图落在各区域,总览只给管理层

### 14.【中试线】实验设备和量产设备在同一大屏上,怎么区分?

- **分组隔离**:Layout 群组按 "量产区/实验区" 划分,研发与量产视图分离,各看各的
- **图标标识**:实验设备加角标 / 边框样式 (状态颜色体系之外再加一维 "设备属性"),一眼可辨
- **状态语义区分**:实验设备跑货时标记 Engineering 态 (颜色映射自定义增加),不计入量产 OEE 统计口径
- **权限视图**:按角色配置可见群组 —— 量产班组长大屏不滚实验设备告警,避免告警疲劳

核心:中试线混线是物理现实,但 **逻辑视图必须分开**,否则实验机台的频繁启停会把量产 KPI 全打乱.

### 15.【中试线】客户参观时,大屏展示要做什么特殊处理?

中试线承接多客户产品,参观模式是刚需:

- **涉密屏蔽**:隐藏 / 脱敏 Lot ID、产品名、客户名 —— 履历里的 Lot ID 用代号替代,看板只留状态色块与计数
- **展示版配色**:状态颜色映射切到 "参观模板"(弱化红色告警的视觉冲击,但不造假状态)
- **区域过滤**:只展示参观动线覆盖的区域 Layout,其他客户专属实验区整区隐藏
- **锁定操作**:大屏切只读轮播,禁用下钻履历 (履历含 Alarm 详情与 Comment,最易泄密)

原则:**脱敏不脱水** —— 可以隐去 "是谁的货",不能伪造 "设备在跑".

### 16.【中试线】设备 Move In/Out 频繁,Layout 和基础信息怎么保持同步?

- **基础信息自动同步**:FMS 从 MES DB 自动同步 Tool ID/Tool Model/Chamber ID/Port ID,Move In 在 MES 建账后 FMS 自动有这台设备 —— **账是先于图的**
- **Layout 人工拖放**:新设备图标拖入对应群组、绑定 Tool ID,Move Out 设备移入 "已拆除" 虚拟群组 (不删,保留履历可查)
- **防呆机制**:每日比对 "MES 有账 Layout 无图" 与 "Layout 有图 MES 已拆账" 两个差集,产出待办清单
- 中试线现实:Move In 高峰每月数台,靠流程卡点 (设备验收单含 "FMS Layout 更新" 检查项) 而不是靠人记

### 17.【场景】大屏显示设备 Running,但现场明明停了,怎么排查?

按数据链路分层排查,**先确认影响面再逐段定位**:

1. **单机还是大面积**:大面积不符 → FMS 服务或 MES 接口问题;单机 → 该机台链路问题
2. **FMS 层**:刷新是否卡住 (界面自动刷新机制是否在工作)、缓存是否过期
3. **MES 层**:查 MES 里该设备当前状态 —— MES 也错 → 问题在上游;MES 对而 FMS 错 → FMS 同步 / 渲染问题
4. **EAP 层**:查 EAP 与机台通讯 (Online/Offline),SECS 事件是否上报 —— 常见根因:机台本地手动停机但事件未发、EAP 进程挂死
5. **机台层**:机台端状态与 SECS 上报是否一致

处置原则:先在大屏标注该设备状态存疑 (避免误导派工),再修;修复后补录履历保持统计完整.

### 18.【场景】大屏刷新越来越慢、偶尔卡顿,排查思路?

先保展示再根治:

1. **看 FMS 自身监控**:FMB 平台自带性能监控 (响应时间、并发数、资源占用),先确认是不是自己慢了
2. **并发排查**:交接班 / 早会时段多客户端同时开大屏,轮询请求打爆后端 → 调大刷新周期或改推送
3. **数据量排查**:Layout 单页图标过多 (几百台一页)、履历查询未限时间范围全表扫
4. **依赖排查**:MES DB 慢查询传导 —— FMS 是 MES 的读放大器,MES 卡顿 FMS 先感知
5. **触发报警**:性能下降自动触发报警通知运维 —— 确认报警阈值是否合理,别等用户报障

中试线经验:客户端逐年增多是常态,容量规划按 "设备数 × 客户端数 × 刷新频率" 做,不靠感觉.

### 19.【场景】重要客户 1 小时后到厂参观,展示准备流程?

Checklist 式处置:

1. **切参观模式**:涉密 Lot 屏蔽、展示配色模板、锁定只读轮播 (见中试线参观题)
2. **数据核对**:抽查 3-5 台关键设备大屏状态 vs 现场实际,确认链路无延迟异常
3. **区域确认**:参观动线覆盖的 Layout 区域状态正常;涉密客户专属区域已隐藏
4. **告警预案**:参观期间突发 Down 告警的应对 —— 播报音量 / 弹窗策略预先调低,避免满屏红
5. **回退准备**:参观结束后一键切回运维视图,所有临时配置留痕 (谁切的、何时、何时恢复)

原则:**一切临时变更可追溯、可回退**,展示模式不是关灯造假.

### 20.【场景】统计显示某设备 Down 时间占比 30%,但设备工程师说 "根本没坏过",怎么查?

典型 **状态定义/数据源** 问题,不是设备问题:

1. **拉履历看明细**:按自定义时间段查该机状态履历,看 Down 记录集中在什么时段、Alarm ID 是什么、Comment 写了什么
2. **常见根因排查**:
    - 计划性停机(PM/待料/实验)被误标 Down —— Comment 缺失导致归类错误
    - EAP 通讯中断被计为 Down(实际应 Offline/Unknown)
    - Manual 模式本地调试,状态事件未正确上报
3. **口径对齐**:与设备 / 生产部门确认 Down 定义,修正状态映射规则
4. **补正数据**:履历修正留痕,重出统计

考点:FMS 统计 **garbage in garbage out**,状态语义治理比图表漂亮重要得多.

### 21.【软技能】厂长要求大屏加上 "实时良率趋势",FMS 没有这数据,怎么处理?

- 不直接说 "做不了":先确认诉求本质 —— 厂长要的是 "全厂健康一屏看清",良率只是其中一项
- **划清边界**:良率数据在 YMS/DMS,FMS 不重复建设;方案是 FMS 看板 **嵌入 YMS 的良率组件** 或做跨系统 Portal 集成,数据所有权仍在 YMS
- 分层交付:先卡控 (确认数据口径与权限)→ 再自动化 (Pilot 一个大屏点位验证 → 推广)
- 如果厂长只要一个数字:状态占比统计里已有 Run 率,先满足 80%,良率趋势走集成排期

考点:知道 **FMS 是展示层,可以集成各系统数据出口,但不抢数据所有权**.

### 22.【软技能】FMS 工程师最重要的三个能力?

**数据链路理解力(机台→EAP→MES→FMS 全链路,大屏错了知道去哪层找)、状态语义治理力(状态定义/颜色/统计口径的严谨,垃圾数据进不出好看板)、用户分层服务力(操作员要快、工程师要准、厂长要全,一套数据多套视图)**.

## FMS Function List

### 1. 设备基础信息管理

- **MES数据自动同步**:支持从 MES 数据库自动同步设备基础信息, 确保数据实时准确.
    - 同步字段包括:Tool ID、Tool Model、Chamber ID、Port ID等关键标识.
- **信息导出与报表**:
    - 支持将设备基本信息一览表导出为通用格式文件.
    - 提供基于设备基础信息的数据统计与报表分析功能.

### 2. 设备状态可视化界面

#### 2.1 Layout 布局管理

- **可视化建置**:提供便捷的工厂 Layout 拖拽式建置与修改工具, 支持快速调整设备位置.
- **自由分组编辑**:
    - 支持按区域、制程或自定义逻辑对设备进行自由划分与群组编辑.
    - 支持对群组内的单台设备及腔体(Chamber)进行独立属性编辑.

#### 2.2 实时状态渲染

- **动态颜色映射**:根据设备实时状态自动变换图标颜色, 直观反映设备运行情况.
- **状态颜色配置**:支持用户自定义增加、减少或编辑设备状态与图标颜色的对应关系.
- **自动刷新机制**:设备状态界面打开后自动定时更新状态, 无需手动刷新.
- **多维状态显示**:
    - 实时显示设备的连接状态(Online/Offline)与操作模式(Auto/Manual/Idle等).
    - 实时显示设备的当前使用状态(Running/Down/Standby等).

### 3. 设备状态履历与统计分析

#### 3.1 状态履历追踪

- **单机履历查询**:支持查看每台设备的完整状态变更履历.
- **详细信息展示**:每条状态记录包含 Lot ID, Alarm ID 及内容、Comment 备注等上下文信息.
- **状态占比统计**:自动计算并显示每台设备各状态所占的时间百分比.

#### 3.2 筛选与查询

- **多维度筛选**:支持按群组、设备型号、设备厂商等条件组合筛选设备状态履历.
- **自定义时间范围**:提供查询选单, 支持用户自定义统计时间段进行历史数据分析.

### 4. 系统运维与监控

- **性能监控**:实时监控 FMB 平台自身的运行性能指标 (如响应时间、并发数、资源占用等).
- **异常报警机制**:当系统性能下降或服务异常时, 自动触发报警通知运维人员.
- **功能清单文档**:提供 FMB 其他模块的详细功能列表及操作说明文档.

# WPH

| Abbreviation | Full form                           | Desc                 |
| :----------- | :---------------------------------- | :------------------- |
| WPH          | Wafer Per Hour                      | 每小时晶圆数         |
| EOQC         | Electronic Outgoing Quality Control | 电子出货质量控制系统 |

# ERP

| Abbreviation | Full form                    | Desc             |
| :----------- | :--------------------------- | :--------------- |
| ERP          | Enterprise Resource Planning | 企业资源经营计划 |

## 硬件配置

AP 服务器 (Application Server)

- **承载业务逻辑的中间层服务器**: 与 DB(数据库服务器) 相对, AP 服务器不直接存储核心数据, 而是运行 MES, EAP, SPC 等子系统的应用程序、中间件、Web 服务和 API 接口.
- **开发/测试环境的专用节点**: 这 3 台服务器专门用于搭建与生产环境隔离的 Dev/UAT 环境, 供开发人员进行代码调试、版本验证和用户验收测试, 避免测试操作污染生产数据库或影响产线运行.
- **区别于生产虚拟集群**: 生产环境的 AP 以虚拟机形式部署在 29 台宿主机上; 而开发 / 测试环境独立使用 3 台物理机, 既保证了测试资源的独占性, 也便于快速重装系统、克隆环境和模拟故障场景.

> **注意**: 此处的 "AP"**不是** 指无线接入点, 也不是指先进过程控制, 在 CIM 硬件清单中 "AP 服务器" 是行业通用术语, 专指应用层服务器.

---

|   维度   |                     CIM DB 服务器                     |          开发 / 测试 AP 服务器           |                 生产虚拟集群宿主机                  |
| :------: | :---------------------------------------------------: | :--------------------------------------: | :-------------------------------------------------: |
| 核心角色 |          数据持久层: 承载所有子系统的数据库           | 非生产应用层: Dev/UAT 环境的应用逻辑验证 | 生产应用层: 承载 232 台 VM, 运行全部生产 AP/ 中间件 |
| 部署方式 |             物理机裸金属部署 (严禁虚拟化)             |     物理机部署 (可装虚拟化或直接 OS)     |         虚拟化宿主机 (ESXi/KVM), 1:8 超分比         |
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
| 单位 TB 成本  | 高 (含专有硬件溢价+License)                       | 低 (通用硬件+ 开源 / 商业软件授权)                              |
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

5. MES/EAP 终端 (工控电脑)

    > - 设备 /5 = MES 终端
    > - 中试线研发线设备型号杂, 自动化程度低, EAP 终端密度反而更高
    > - 需预留质检站、包装区、仓库等非直接生产工位终端
    > - 工控机故障率高于办公 PC, 需 10% 现场备件 (基础需求×1.3 缓冲系数)

6. 数据采集与交互接口服务器
    > - 与DB服务器1:1, 每台DB服务器对应的子系统都有独立的SECS/GEM或Interface A数据流, 1:1是CIM行业标准架构

## 规划图

### EAP 组

```txt
            [ RMS ] ←───────┐
               ↑            │
               │            ▼
          ┌────┴────┐   [ EAP ]
          │         │      ↑
        [ RCM ]   [ APC ]──┘
               ↖     ↗
                 [ FDC ]
```

### MES 组

```txt
            [ MES ] ←───────┐
               ↑            │
               │            ▼
          ┌────┴────┐   [ SPC ]
          │         │      ↑
        [ PMS ]   [ AMS ]──┘
               ↖     ↗
                 [ OOC/CPK ]
```

### RTD 组

```txt
            [ RTD ] ←──→ [ AMA ]
               ↑            │
               │            ▼
           [ Queue/List ]  [ 物料搬运 ]
               │            │
               └───→ [ Lot 状态流 ]
```

### YMS 组

```txt
            [ YMS ] ←───────┐
               ↑            │
               │            ▼
          ┌────┴────┐   [ DMS ]
          │         │      ↑
        [ RPT ]   [ FMS ]──┘
               ↖     ↗
            [ Metology/Recipe ]
```

| 发起方 → 接收方    | 传输内容示例                                                                      | 协议 / 机制                                            |
| :----------------- | :-------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **EAP组 内部交互** |                                                                                   |                                                        |
| EAP → FDC          | `传感器原始数据`, `设备状态快照`, `Process Start/End信号`                         | `MQ`(高吞吐实时流)<br>`SECS/GEM`(设备直连透传)         |
| EAP → RMS          | `配方请求`, `当前运行配方版本`, `配方执行结果反馈`                                | `API/gRPC`(同步校验)<br>`REST`(异步状态上报)           |
| EAP → RCM          | `设备实时状态`, `远程指令执行结果`, `安全互锁状态`                                | `SECS/GEM`(底层设备协议)<br>`API/gRPC`(状态回传)       |
| EAP → APC          | `Run-to-Run量测数据`, `设备工艺参数`, `前馈/反馈值`                               | `MQ`(实时数据流)<br>`OPC UA`(工业标准接口)             |
| FDC → EAP          | `实时异常检测结果`, `拦截指令`, `Fault Code`                                      | `MQ`(低延迟告警)<br>`SECS/GEM S2F41`(远程命令)         |
| FDC → RMS          | `配方相关异常标记`, `Recipe Drift趋势`                                            | `MQ`(事件触发)<br>`REST API`(分析结果推送)             |
| RMS → EAP          | `配方校验结果`, `Hold/Release指令`, `配方下载包`                                  | `API/gRPC`(同步响应)<br>`FTP/ESB`(大文件传输)          |
| RMS → FDC          | `配方变更通知`, `关键参数阈值更新`                                                | `MQ`(配置同步)<br>`REST API`(规则下发)                 |
| RCM → EAP          | `远程指令下发`, `安全准入确认`, `维护模式切换`                                    | `SECS/GEM`(设备级控制)<br>`API/gRPC`(指令封装)         |
| APC → EAP          | `FB/FF值更新指令`, `Run-to-Run参数调整`, `模型修正系数`                           | `SECS/GEM`(设备级闭环)<br>`MQ`(软 PLC 指令)            |
| **MES组 内部交互** |                                                                                   |                                                        |
| MES → SPC          | `工单信息`, `产品规格`, `采样计划`, `Trace Data`                                  | `JDBC/DBLink`(数据同步)<br>`MQ`(事件驱动)              |
| MES → AMS          | `设备状态变更`, `工单优先级`, `告警配置规则`                                      | `MQ`(状态事件)<br>`REST API`(配置下发)                 |
| MES → PMS          | `工单优先级变更`, `设备运行时长`, `OOC触发信号`                                   | `JDBC/DBLink`(数据库同步)<br>`MQ`(事件驱动)            |
| SPC → AMS          | `CPK下降趋势`, `OOC频次`, `部件级异常信号`                                        | `MQ`(实时告警流)<br>`REST API`(规则触发)               |
| AMS → MES          | `告警分级结果(OK/NG)`, `历史告警关联性`, `SOP推送`                                | `API/gRPC`(同步响应)<br>`Webhook`(事件回调)            |
| PMS → MES          | `维修计划生成`, `备件库存消耗`, `CBM维修工单`                                     | `API/gRPC`(工单创建)<br>`MQ`(状态同步)                 |
| **RTD组 内部交互** |                                                                                   |                                                        |
| RTD → AMA          | `派工指令`, `优先级`, `跳站/重跑指令`, `DueTime`                                  | `WebSocket`(低延迟指令)<br>`FTP/ESB`(批量路径规划)     |
| AMA → RTD          | `搬运完成状态`, `ETA预测`, `异常处理结果`, `Track In/Out`                         | `MQ`(异步确认)<br>`REST API`(状态上报)                 |
| **YMS组 内部交互** |                                                                                   |                                                        |
| YMS → DMS          | `缺陷分析请求`, `ADC分类规则更新`, `Sampling Plan`                                | `REST API`(分析指令)<br>`JDBC`(规则库同步)             |
| YMS → RPT          | `良率多维分析结果`, `根因结论`, `Recipe优化建议`                                  | `JDBC/DBLink`(报表库写入)<br>`FTP/ESB`(离线报表包)     |
| YMS → FMS          | `监控指标定义`, `异常阈值配置`, `看板布局`                                        | `REST API`(配置下发)<br>`MQ`(动态规则更新)             |
| DMS → YMS          | `晶圆缺陷图自动分类结果`, `Defect Map`, `ADC密度趋势`                             | `JDBC/DBLink`(图像元数据)<br>`CA/SDK`(电子签章归档)    |
| RPT → YMS          | `报表订阅反馈`, `自定义查询结果缓存`                                              | `REST API`(数据拉取)<br>`MQ`(异步结果通知)             |
| FMS → YMS          | `关键参数看板快照`, `设备OEE`, `实时异常通知`                                     | `WebSocket`(可视化推送)<br>`WebService/REST`(API 拉取) |
| **跨业务组交互**   |                                                                                   |                                                        |
| EAP → MES          | `Process Start`, `Recipe参数`, `Lot-to-EQP绑定`, `TrackIn/Out通知`, `EQP状态更新` | `WS/SSE/MQ`(实时流)<br>`API/gRPC`(同步请求)            |
| MES → RPT          | `WIP快照`, `工单完成记录`, `设备利用率`, `Trace Data`                             | `ETL逻辑复制`<br>`定时任务`(OEE 统计报表)              |
| RTD → MES          | `派工决策结果`, `Queue Time预警`, `机台利用率反馈`                                | `MQ`(调度事件)<br>`REST API`(状态同步)                 |
| MES → RTD          | `工单列表`, `Product Priority`, `Hold/Release状态`, `BOM信息`                     | `JDBC/DBLink`(数据同步)<br>`MQ`(工单事件)              |
| YMS → MES          | `质量判定结果`, `批次放行/扣留指令`, `SPC Rule Violation`                         | `API/gRPC`(质量反馈)<br>`MQ`(处置指令)                 |
| FMS → RPT          | `工厂级KPI聚合数据`, `跨车间异常汇总`                                             | `WebSocket`(大屏推送)<br>`REST API`(报表数据源)        |

## CIM 负责人

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

## NDA(Non-Disclosure Agreement)

保密协议或不披露协议

## RFP(Request for Proposal) 提案请求

| 相关方       | RFP 的核心价值与职能定位                                                                                                                                                                                                                                                  |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 采购方       | 作为需求表达与采购管理的纲领性文件, 确保内部需求经跨部门对齐后对外统一输出; 通过标准化的结构与评分体系, 保障招标过程的合规性、透明度与可审计性; 同时为后续 SOW 细化、合同谈判及供应商绩效管理提供不可变更的需求基线, 从源头控制采购风险与履约偏差.                        |
| 投标方       | 作为响应编制与方案设计的唯一权威输入, 明确界定 "必须响应" 与 "可选增值" 的边界, 支撑精准的技术方案设计、资源规划与成本测算; 帮助识别采购方的隐性期望与评估权重, 优化竞争策略; 同时作为判断项目可行性与商业价值的决策依据, 避免因信息不对称导致的无效投入或履约风险.       |
| 项目执行团队 | 作为项目启动前的需求验证与交付蓝图预演载体, 使执行团队在投标阶段即介入理解客户真实意图与验收逻辑; 为中标后 SOW 的快速转化、工作分解结构 (WBS) 制定及里程碑规划提供前置输入; 同时提前暴露需求模糊点与技术冲突, 推动在签约前完成澄清, 降低执行阶段的变更频率与范围蔓延风险. |

| 相关方       | SOW 的核心价值与职能定位                                                                                                                                                           |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 采购方       | 确保所有投标方基于统一的需求基准进行报价, 保障评标工作的公平性与可比性; 同时作为合同不可分割的法律附件, 明确界定交付范围与验收标准, 有效规避履约争议及法律风险.                    |
| 投标方       | 为准确理解客户需求提供权威依据, 支撑科学的工作量评估与成本测算, 避免因需求误判导致的报价偏差 (低估引发亏损或高估丧失竞争力); 同时有助于系统性识别项目潜在风险, 制定合理的应对策略. |
| 项目执行团队 | 作为项目范围管理的基准文件, 为进度控制、成本管理及质量验收提供根本依据; 任何超出 SOW 约定范围的工作内容, 均须严格遵循变更控制流程进行审批与管理, 确保项目可控、合规推进.           |

### 保密

### SOW

SOW( Statement of Work): 工作说明书 / 工作范围说明

| 维度         | 技术架构                                      | 部署架构                                                 |
| :----------- | :-------------------------------------------- | :------------------------------------------------------- |
| 核心问题     | 系统用什么技术栈?模块间如何交互?数据如何流转? | 软件安装在哪些服务器 / 容器上?网络如何连通?资源如何分配? |
| 关注点       | 逻辑结构、功能分层、接口协议、数据模型        | 物理 / 虚拟拓扑、节点规划、网络分区、高可用策略          |
| 主要产出物   | 分层架构图、API 接口文档、ER 图、时序图       | 部署拓扑图、IP 地址规划表、资源配置清单、容灾方案        |
| 变更频率     | 相对稳定, 随业务大版本迭代                    | 相对灵活, 可随运维需求独立调整 (如扩容、迁移)            |
| 受众对象     | 开发人员、架构师、测试人员                    | 运维人员、DBA、安全管理员、基础设施团队                  |
| 典设中的定位 | 定义 "标准化组件与集成规范"                   | 定义 "标准化环境基线与资源模板"                          |

### 项目交付物要求

### 项目约束和资源要求

### 相应要求

### 工具平台

### 专业服务体系

1. 联系人
2. 时间安排
3. 要求

### 成功案例

## CIM 团队建制

OA(Office Automation): 办公自动化

OP(Operations): 运维 / 运营支撑

EES(Equipment Engineering System): 设备工程系统

BPM(Business Process Management): 业务流程管理

ISM(Intelligent Smart Manufacturing): 智能制造系统

- CIMPF(CIM Platform Foundation): CIM 平台基础
    - 包括微服务架构、数据库中间件、消息总线、统一认证、DevOps 工具链及公共组件开发, 为上层 MES/EES/YMS 等应用提供标准化支撑.

## demo 评分标准

1. 真实场景性能
    - EAP: 单台设备SECS/GEM消息解析并写入DB耗时 (≤200ms)
    - MES: 批量过站(50 Lots)事务提交响应时间 (≤3s)
    - FDC: 加载单Run完整Trace曲线(≥10万数据点)渲染耗时 (≤4s)
2. 核心任务操作效率
    - EAP: 新增/修改一个设备通讯参数映射 (≤6次点击, 0页面跳转, 有字段级校验提示)
    - MES: 执行一次标准Hold/Release操作 (≤4次点击, 1次弹窗确认, 有明确状态反馈)
    - FDC: 调整一个Sensor的Fault Detection阈值 (≤5次点击, 0页面跳转, 有预览/模拟效果)

# PRD(Product Requirements Document) & URS(User Requirement Specification)

PRD 产品需求文档, 定义了 "要做什么"

URS 用户需求说明书, 定义了 "怎么验证做到了"

SWIR 器件 (Short-Wave Infrared 探测器 / 传感器)

| PRD                 | 核心内容要素                                                                                                                       | 样例                                                                                                                                                                                              |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. 项目背景与目标   | 业务痛点、项目范围、预期收益、成功指标 (KPI)；明确“为什么做”和“做到什么程度算成功”，避免需求无限蔓延                               | 解决 SWIR 外延片良率波动大、非标设备数据孤岛问题；目标:EAP 覆盖率≥90%，FDC 关键站覆盖 100%，YMS Bin Map 自动解析率≥95%                                                                            |
| 2. 用户角色与权限   | 角色清单、职责描述、系统操作权限矩阵、数据可见范围；定义“谁用什么功能看什么数据”，是 MES/EAP 权限配置的直接输入                    | PE:可编辑 RMS Golden Recipe、查看 FDC Trend、审批 SPC OCAP；MFG Operator:仅可查看 EAP UI、执行 Lot Track、触发 Hold，不可修改 Recipe 参数                                                         |
| 3. 业务流程与场景   | As-Is/To-Be 流程图、异常处理分支、人机交互时序、跨系统接口点；将口头业务规则转化为可配置的 Workflow，是 EAP/MES 逻辑设计的核心依据 | To-Be 外延生长流程:OHT 送达 Gel-Pak→EAP 读取 Barcode→MES 校验 Route→EAP 下载 Recipe→FDC 启动 Trace→Process End→EAP 上传 Thickness→SPC 判定→合格则 Release 至下一站，不合格则 Auto Hold 并通知 PE  |
| 4. 功能需求清单     | 模块归属、功能编号、优先级 (MoSCoW)、业务描述、验收标准 (AC)；将业务语言翻译为 IT 可交付的功能点，作为 UAT 测试用例的直接来源      | [FDC-F003][Must] 外延腔室温度 Trace 采集:采样率 10 Hz，采集窗口从 Recipe Step "Growth" 开始到 "Cooldown" 结束，超时未收到 Data 则触发 EAP Interlock Hold Lot；AC:连续 10 批数据采集完整率≥99.9%   |
| 5. 数据模型与接口   | 实体关系、字段定义、数据格式、上下游系统交互协议、数据保留策略；定义系统间“说什么语言”，是 DB Schema 设计和 Interface 开发的契约   | YMS 接收 Bin Map:格式 STDF v4，包含 Die X/Y 坐标、Bin Value, Test Time；通过 FTP 推送至 YMS Server；YMS 解析后写入 Oracle DB；原始 STDF 文件保留 90 天，解析结果永久保存                          |
| 6. 非功能性需求     | 性能指标、可用性 (SLA)、安全合规、兼容性、可扩展性约束；定义“系统好不好用、稳不稳定、合不合规”，是架构设计和基础设施采购的依据     | EAP Transaction 响应时间≤500 ms (P99)；MES 可用性≥99.95%；符合 ITAR 出口管制要求，所有 Recipe 修改操作强制 Audit Log 且不可删除；支持未来扩展至 8 寸 InP 衬底载具类型                             |
| 7. 依赖与风险登记   | 前置条件、外部依赖项、已识别风险、缓解措施、Owner；提前暴露阻塞点和不确定性，避免项目中途因“没想到”而停滞                          | 依赖:Vendor A 的外延炉 Custom Adapter 需在 T1 前交付 FAT 版本；风险:Gel-Pak Barcode 读取成功率<95% 导致 WIP Tracking 中断；缓解:加装备用固定式 Scanner + EAP 提供手动输入 UI 兜底；Owner: EE Lead |
| 8. 术语表与参考文档 | 业务缩写全称、领域专有名词解释、关联文档链接、版本变更记录；消除跨部门沟通歧义，确保 EE/PE/YE/CIM 对同一词汇理解一致               | CTQ = Critical to Quality (关键质量特性)；Gel-Pak = 一种用于化合物半导体晶圆运输的弹性凝胶托盘载具；参考:《SWIR 外延工艺 Spec v2.1》《EQP-EXT-003 PICS 文档》                                     |

| URS               | 核心内容要素                                                                                                                                                        | 样例                                                                                                                                                                                                                         |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. 范围与边界     | 涵盖的产线区域、设备清单、工艺模块、明确排除项 (Out of Scope)；划定 URS 的法律效力边界，防止验收时用户提出“我以为包含”的额外需求                                    | 覆盖 SWIR 外延、光刻、刻蚀 3 个模块共 28 台设备；不包含减薄划片后道工序、不包含厂务 Facility 监控系统 (FMS) 的底层 PLC 改造                                                                                                  |
| 2. 业务需求映射   | PRD 功能编号、业务场景描述、用户操作序列、预期系统响应、异常处理逻辑；将 PRD 的业务语言逐条转化为可验证的用户行为规格，是 UAT 测试用例的直接来源                    | [PRD-FDC-F003] 外延生长监控:PE 在 FDC 界面选择 Recipe "EXT-InGaAs-v3" → 点击 "Enable Trace" → 系统在下一批 Lot 进腔时自动启动 10 Hz 温度采集 → 若采集断连>5s 则 EAP Hold Lot 并弹窗告警 "Trace Lost" → PE 确认后方可 Release |
| 3. 数据需求规格   | 数据实体、字段类型 / 长度 / 单位、数据来源、更新频率、保留周期、数据质量要求；定义系统间数据交换的精确契约，是 DB Schema, Interface Spec, ETL 设计的唯一依据        | Bin Map 数据:DieX(Integer), DieY(Integer), BinCode(String[4]), TestTime(Float, ms)；来源:Tester STDF 文件；更新频率:每片 Wafer 测试完成后≤30s 内写入 YMS DB；保留:原始 STDF 90 天，解析结果永久；完整性:BinCode 缺失率=0%    |
| 4. 接口与集成需求 | 对接系统名称、协议标准 (SECS/GEM, OPC-UA, REST)、消息格式、触发条件、超时 / 重试策略；明确系统间 "如何对话"，是 EAP Adapter, Middleware, API Gateway 开发的技术输入 | EAP↔MES:HSMS-SS (SEMI E37)，S2F41/S2F44 用于 RCMD 下发，S6F11/S6F12 用于 Event Report；超时:5s 无响应则 Retry 3 次，间隔 2s；3 次失败后 EAP 进入 Offline Mode 并记录 Alarm Log                                               |
| 5. 性能与容量需求 | 并发用户数、Transaction 响应时间、数据吞吐量、存储增长预估、峰值负载场景；量化非功能性指标，是服务器选型、网络带宽规划、压力测试 Pass/Fail 的判定基准               | MES 支持 50 并发 Operator + 20 并发 Engineer；Lot Track Transaction P99 ≤ 800 ms；FDC Trace Data 峰值吞吐≥5 MB/s/Tool；YMS DB 月增量≤200 GB；峰值场景:换班交接时 30 人同时查询 Yield Report，响应≤3s                         |
| 6. 合规与安全需求 | 法规标准 (ITAR/ISO)、审计日志要求、权限分级、数据加密、备份恢复 (RTO/RPO)；满足行业监管与客户稽核要求，是 IT Security Review 和 Validation 文档的核心输入           | 符合 ITAR 管控:所有 Recipe 修改、Bin Map 导出操作强制记录 Audit Log(User/Timestamp/Old/New Value)，Log 不可删除且保留 7 年；Recipe 参数传输采用 TLS 1.2 加密；MES DB RTO≤4h, RPO≤15min                                       |
| 7. 验收标准 (AC)  | 测试方法、通过阈值、测试环境要求、签字确认流程、缺陷分级处理规则；将每条 URS 转化为可执行的验收条款，是 UAT Sign-off 和 Vendor 付款的法律依据                       | [URS-FDC-003 AC] 连续执行 20 批外延 Lot，FDC Trace 采集完整率≥99.9% 且 Hold 触发延迟≤2s 视为 Pass；测试环境:Production Mirror + Simulator；缺陷分级:Trace 丢失=Critical(阻塞 Sign-off)，告警弹窗延迟>2s=Major(限期修复)      |
| 8. 约束与假设     | 硬件限制、Vendor 配合前提、工艺稳定性假设、项目里程碑依赖、已知技术栈；提前声明 URS 成立的前提条件，避免验收时因外部因素未达成而产生争议                            | 假设:Vendor A 外延炉 Custom Adapter 在 T1 前通过 FAT；约束:Gel-Pak 载具 Barcode 标签由 MFG 统一打印粘贴，EAP 不负责标签生成；依赖:EE 在 UAT 前完成所有 EQP 的 SECS 联机调试并签署 EQP Ready 证书                             |
