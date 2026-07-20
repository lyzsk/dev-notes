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

"一个平台"：即打造统一的CIM智能制造平台, 作为中心生产管理、设备自动化运行及制造数据管理的数字化底座, 实现生产制造全过程的统一管理、统一数据和统一协同.

"四大能力"：即全面构建"制造执行能力"、"设备自动化能力"、"智能调度能力"、"质量分析能力"四大核心能力, 以制造执行系统(MES)为核心, 结合设备自动化(EAP、RMS、RCM、FDC、APC)、智能调度(RTD、AMA)及质量管理(SPC、YMS、DMS)等系统, 促进科研研发、生产制造、质量控制和运营管理的深度融合与协同发展.

"五层架构"：即重点打通"设备层"、"自动化控制层"、"制造执行层"、"数据分析层"、"决策展示层"五个层级, 实现设备互联互通、生产过程实时管控、制造数据集中治理、质量全过程追溯以及生产经营可视化分析, 形成从设备数据采集、生产执行控制、质量分析优化到经营决策支撑的完整数字化闭环, 全面消除信息孤岛, 提升工厂智能化运营水平和制造协同效率.

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

简单来说, POC 搭建就是回答一个核心问题："**这个东西理论上说得通, 但在现实中真的能做出来且有效吗?**"

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

一个完整的服务 SKU 通常包含以下维度的组合：

- 基础服务项目： 例如"设备维修"、"系统部署"、"咨询服务".
- 规格/等级： 例如"标准版 vs 专业版"、"5×8支持 vs 7×24支持"、"初级工程师 vs 专家级".
- 计量单位： 例如"按人天"、"按设备台数"、"按年订阅"、"按调用次数".
- 地域/语言： 例如"中国大陆区服务"、"全球英文支持".
- SLA 标准： 例如"2小时响应"、"99.9%可用性保障".

# EAP

EAP Server 1:1 tool, 1 Server 跑 30 进程, 原因是FAB-EQP影响最小化, 而不是最大化

前道后道一般部分系统, 但是前道更关心wafer数量, 后道更关心辅材

关机开机, 厚道可能EQP可以随便关, 前道有风险, 重点在能耗管控

8寸以下, 要外加SMIF, 拉线要考虑, 转TCP/IP, InterfaceA很少用了, 基本都是转SECS采集, 转化器是IT自己采购

适配移动终端扫码, 需要布无线点位

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

> 确认COM Type是采购前置条件：若新购设备仍只提供RS232, 必须要求Vendor升级为HSMS, 否则将严重影响EAP性能和FDC数据采集能力
>
> HSMS版本确认：HSMS有SS(Single Session)和MS(Multi Session)之分.FAB通常使用 HSMS-SS;若设备支持Interface A (E164), 则可能同时运行HSMS-SS(用于SECS/GEM)+ HSMS-MS(用于EDA), 需在Conn-Mode字段中明确区分
>
> IP地址规划：HSMS设备需分配固定IP, 纳入工厂OT网络VLAN管理, 严禁接入办公网
>
> 串口转以太网适配器：对于仅有RS232的旧设备, 可使用MOXA等品牌的Serial Device Server将其转换为HSMS, 使EAP端统一按HSMS处理, 但需注意转换延迟和丢包风险
>
> SECS-II消息体相同：无论底层是HSMS还是SECS-I, 上层的SECS-II消息格式(SxFy)是完全一致的.COM Type只影响"怎么送", 不影响"送什么"

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

## EAP Function List

### 1. 设备建模与模板管理

#### 1.1 设备分类与模板定义

支持设备根据Buffer类型、用途、工艺等进行分类, 基于共同性创建模板, 以提升后期开发效率.

- **分类示例**:工艺设备(固定 Buffer、内部 Buffer、Inline 等)、测量设备、测试设备、分拣设备(Sorter)、存储设备(Bare Reticle/Wafer)等.

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
- **FOUP 类型管控**:管理并限制接受的 FOUP 类型(如 FOSB, FE FOUP, BE FOUP, Co FOUP, Cu FOUP), 非指定类型识别为错误并拒绝传输.
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
- **Wafer 作业信息采集**:收集指定 Wafer 的作业开始、作业结束信息, 以及进出子设备(Chamber/Unit)的详细信息, 并实时上传至上位系统.
- **多系统数据交互与上报**:
    - 支持将 Wafer 信息按要求传递至 MES、FDC 或其他第三方系统.
    - 支持接收 MES 返回的 Wafer 处理结果/指令, 并将交互过程完整记录至 EAP 日志, 确保数据可追溯.
- **Wafer History 全链路追踪**:收集指定 Wafer 的全生命周期 History 信息, 按配置规则分发上报至 MES、FDC 等系统, 支撑质量分析与制程优化.
- **Sorter 内容映像**:Sorter 作业开始时自动进行内容映像(Wafer ID 与 Slot ID 映射), 由 EAP 收集并上报, 确保分拣后物料信息的准确性.

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

- **设备接入**:支持 SECS/GEM、PLC 通讯, 以及 Database、文件/FTP 等非标准数据接入.
- **系统对接**:支持 WebService、TCP/IP 等接口与 MES 等上位系统集成.
- **集成范围**:支持与 MES/RMS/APC/FDC/Alarm/PMS/YMS/DMS 等系统集成.
- **多连接能力**:支持一个 EAP 同时连接多个设备、多个连接点.

### 4. 日志与运维工具

#### 4.1 日志管理

支持提供完善的日志记录与分析机制, 便于问题追踪与系统调试.

- **日志类型**:保留 SECS I, SECS II, Trace, Host Log, 可按种类配置是否记录.
- **分级与配置**:Log 记录分级定义, 调试追踪可通过配置文件/工具开关.
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

- **程序监控**:实时监控 EAP 程序, 崩溃/挂起/进程消失时立即重启并通过 Alarm 系统(邮件/短信)通知.
- **连接监控**:监控 EAP 与机台连接, 断开或报错时发送告警.
- **Batch 监控**:EAP 升级后首个 Batch 运行时发送通知.
- **版本监控**:发现启动/运行版本与部署版本不一致时发送告警.
- **维护豁免**:支持特定权限人员临时避开监控进行机台测试.

#### 5.2 远程控制与恢复

支持远程运维操作及故障后的状态自愈.

- **远程操作**:支持远程启动/停止(含批量)、LOG 目录访问、远程桌面、配置重载.
- **状态恢复**:EAP 崩溃并在设定时间内重启成功后, 自动恢复至重启前最新保存的对象状态.

#### 5.3 部署与升级

支持灵活的部署与平滑升级机制, 最小化对生产的影响.

- **拷贝部署**:支持同类型机台 EAP 拷贝部署, 并提供配置差异比较功能.
- **远程/在线升级**:支持远程部署; 非通讯模块支持在线升级; 版本变更后提醒.
- **空闲自动升级**:机台空闲(无 Carrier/Wafer/Job)时自动执行升级并通知.
- **预约升级**:支持自定义时间段内检测并执行升级.
- **首件通知**:自动升级完成后, 首个 FOUP 开始时发送提示通知.

#### 5.4 信息与版本管控

支持集中管理 EAP 资产, 确保版本一致性与可追溯性.

- **基本信息**:显示/比较当前版本与配置, 支持按服务器/FAB/机台类型查询状态及连接信息.
- **版本历史**:显示发布负责人、日期、版本号、说明等历史信息.
- **版本切换**:支持保存不同版本并自由切换, 显示空闲机台自动升级列表.
- **差异比对**:支持比较同类型机台在线版本的文件差异.
- **分层管控**:从不同层次管控 EAP 所有核心文件.

#### 5.5 迁移与执行模型

支持大规模集群管理及可扩展的软件架构.

- **批量迁移**:支持批量/预约迁移空闲 EAP 至另一台 Server.
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

支持SECS Driver 须满足高性能、高可靠性的工业级通讯要求.

- **大消息处理**:5 秒内完成单笔 10M 大 Message 的处理.
- **零丢包架构**:通讯时不允许因 Driver 本身问题发生丢包断线.
- **高频数据采集**:稳定处理采样频率达 10 Hz 级别的设备数据流.

#### 7.2 多协议与设备兼容

支持统一通讯驱动层, 覆盖标准与非标设备, 无需嵌入第三方驱动, 便于后期维护与扩展.

- **SEMI 标准协议**:原生支持 SECS-I / SECS-II / GEM / HSMS 等半导体标准通讯协议.
- **工业控制协议**:支持 PLC(三菱、欧姆龙等)、OPC、I/O Controller 等协议, 适配 4/6 寸线非标设备.
- **通用应用层协议**:支持 TCP/IP、Socket、HTTP、FTP、Database、Text 等多种通讯方式.
- **外设与辅机通讯**:支持与 SMIF、Tag/RFID/Barcode Reader、扫码枪等设备直接交互.
- **非标设备扩展接入**:除 EAP Driver 外, 支持通过设备 Screen、Panel、GPIB 等方式连接非标设备, 提升整线自动化覆盖率.
- **协议客制化**:支持通信协议的自定义开发与适配, 满足特殊设备或老旧机台的接入需求.

#### 7.3 测机与日志支持

- **自动化测机**:支持模拟 EAP 向机台发送 SECS 消息并自动格式化, 用于通讯合规性验证与功能测试.
- **日志管理**:完整保存测试及生产环境的 SECS 日志, 提供可视化查看与分析工具, 支撑问题定位与回溯.

### 8. EAP GUI (用户界面)

#### 8.1 界面功能与交互

支持独立、直观的操作界面, 支持多语言与权限管控.

- **信息展示**:直观显示 Run 货情况、设备/连接/Port 状态、提示/错误/物料信息.
- **多机台聚合**:单个 GUI 可配置显示多台 EAP 信息.
- **独立运行**:GUI 与 EAP 后端独立, GUI 关闭不影响 EAP 任何功能.
- **权限管控**:支持 GUI 账号登录, 支持同步 MES 权限.
- **消息记录**:按设备/时间生成日志, 支持查询最近 300 条数据.
- **多语言与样式**:支持中英文消息配置管理, 支持消息分类、格式与颜色设定.

### 9. 发布与变更管理

#### 9.1 Pilot 验证机制

- **Pilot 支持**:当 EAP 任何模块更改时, 必须支持在个别设备上先进行 Pilot 验证, 且不影响未参与 Pilot 的设备正常运行.

## EAP/FDC Phase

> 按 T-n 阶段组织的 EAP/FDC 实施填写表, 聚焦 EAP 与 FDC 的机台接入实施, 供项目执行中分工填写.
> 阶段轴: 项目启动 → EQP 采购/验收 → EAP 前置准备 → 接口开发 → 接口验证 → 装机验机(T0/T1/T2) → 现场联调 → 上线收尾

| Phase | T-n 时间窗     | 目标                                                                      | 主要填写方      | 输出物               |
| :---- | :------------- | :------------------------------------------------------------------------ | :-------------- | :------------------- |
| 0     | 项目启动       | 锁定 EAP/FDC 项目级基础信息                                               | MFG/IT          | 基础信息表           |
| 1     | T-90 ~ T-60    | EQP 采购与验收, 收集接口资料, 风险评估, EAP 前置准备(网络/硬件/标签/环境) | Vendor/EE/IT    | EAP_Phase1 Checklist |
| 2     | T-60 ~ T-30    | EAP/FDC 接口开发与配置                                                    | IT              | Interface Design     |
| 3     | T-30 ~ T-14    | Simulator/Offline 验证与 FAT                                              | IT              | FAT Report           |
| 4     | T0 → T2        | Hookup → 装机调试 → Offline 验机                                          | IT/EE/Vendor/PE | T2 Release           |
| 5     | T-14 ~ Move In | 现场联调与 SAT                                                            | IT              | SAT Report           |
| 6     | Move In ~ +7   | 上线支持、稳定性观察与收尾                                                | PM              | Release/Close Report |

### Phase 0 项目启动

一次性填写, 仅收集 EAP/FDC 实施所需的项目级输入.

| No  | 子项           | 填写内容                                                                                                  | 负责方 | 完成时限 |
| :-- | :------------- | :-------------------------------------------------------------------------------------------------------- | :----- | :------- |
| 1   | 自动化程度     | 工厂自动化程度(Auto1/2/3), 哪些设备需要Auto3                                                              | MFG    | T-90 前  |
| 2   | 追溯粒度       | 各产线(Raw wafer/EPI/前道/封装/FT)在制品追溯粒度(Lot/Wafer/Die), 决定 EAP Wafer 级追踪与 FDC 采集粒度     | MFG    | T-90 前  |
| 3   | 产线与产能规划 | 各产线产能规划; 启动/通线/出货/量产里程碑, 决定 EAP/FDC 实施批次与节奏                                    | MFG    | T-90 前  |
| 4   | 系统规模估算   | 设备总台数与分布(EAP Server 1:1 Tool, 单 Server 约 30 进程, 据此估算 Server 数量); 最高在线人数(GUI 并发) | IT     | T-90 前  |
| 5   | FDC 覆盖目标   | FDC 覆盖的站点/机台范围与关键参数清单(关键站覆盖率目标)                                                   | MFG    | T-90 前  |

### Phase 1 EQP 采购与验收 & EAP 前置准备 (T-90 ~ T-60)

> 目标1: 锁定设备清单与 EAP/FDC 需求; 从 Vendor 处收齐 EQP 验收所需的全部接口材料; 完成标准/非标判定与风险评估.
>
> 目标2: 完成 EAP 接入所需的网络、硬件、标签与数据环境准备; 确保现场联调(Phase 6)前全部就绪.

#### 设备清单与需求 (每台设备一行, EE 填写)

| Seq | Area | Module | EQP ID | OLD EQP ID | 设备中文名 | 新旧机台(Y/N) | Vendor | Model | Sub Model | Type | Inch | LP Qty | RF Reader(Y/N) | SMIF type | EAP(Y/N) | EDC(Y/N) | FDC(Y/N) | RMS(Y/N) | APC(Y/N) | RCM(Y/N) | Run mode | IO mode | NewType-Rollout | Refer EQP ID | SECS Manual(Y/N) | Owner |
| :-- | :--- | :----- | :----- | :--------- | :--------- | :------------ | :----- | :---- | :-------- | :--- | :--- | :----- | :------------- | :-------- | :------- | :------- | :------- | :------- | :------- | :------- | :------- | :------ | :-------------- | :----------- | :--------------- | :---- |
|     |      |        |        |            |            |               |        |       |           |      |      |        |                |           |          |          |          |          |          |          |          |         |                 |              |                  |       |

| 列名            | 说明                                                                                                                                                                                                                                                                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Area            | 设备所在Fab区域                                                                                                                                                                                                                                                                                                                       |
| Module          | 工艺模块                                                                                                                                                                                                                                                                                                                              |
| EQP ID          | 设备编号                                                                                                                                                                                                                                                                                                                              |
| Vendor          | 设备厂商名称                                                                                                                                                                                                                                                                                                                          |
| Model           | 设备型号                                                                                                                                                                                                                                                                                                                              |
| Sub Model       | 设备子型号/结构类型，包括：Fixed buffer（跑货过程中FOUP一直停在Port口，wafer从load port搬进搬出）、Internal buffer（跑货过程中FOUP被搬到设备内部Buffer区域，不占用设备load port，实现比较高的throughput）、Inline（track + scanner）、Sorter、Foupexchange、Foupinspection、Foupclean、Reticleinspection、Reticlesorter、Bond、Debond |
| Type            | 设备类型分类：Process（生产设备）、Metrology（量测设备）、Support（辅助型设备，如Sorter）                                                                                                                                                                                                                                             |
| SMIF type       | SMIF接入方式：整合（SMIF与设备连接，EAP通过设备控制SMIF IO动作）、非整合（SMIF与设备分离，EAP单独控制SMIF IO动作）、OpenFOUP                                                                                                                                                                                                          |
| Run mode        | 跑货模式：Single（以Lot为单元跑货，一个FOUP包含一个或者多个Lot）、Batch（以Carrier为单元跑货，一个Batch包含多个FOUP的Lot，如WetBench、Furnace以Batch的方式跑货）                                                                                                                                                                      |
| IO mode         | Wafer进出模式（从Wafer Process前后对应FOUP的位置是否一致区分）：同进同出（Wafer从FOUP出去，Process完毕后回到原先的FOUP）、左进右出（Wafer从左边FOUP进去，右边FOUP出来）                                                                                                                                                               |
| NewType-Rollout | 机型认定标识：相同机型的认定标准为型号相同且Run货模式也相同；相同机型的第一台标识为NewType，其余标识为Rollout                                                                                                                                                                                                                         |
| Refer EQP ID    | Rollout机台所参考的NewType EQP ID                                                                                                                                                                                                                                                                                                     |
| SECS Manual     | 是否已经有SECS Manual                                                                                                                                                                                                                                                                                                                 |

#### EQP 验收材料清单 (Vendor/EE 提供, 逐项打勾/填路径)

| 字段                  | 内容要求                                                      | 是否收到 | 存放路径/备注 |
| :-------------------- | :------------------------------------------------------------ | :------- | :------------ |
| GEM Manual            | SECS/GEM 接口说明书 (PDF/Word), 含 SECS Message/状态模型/RCMD |          |               |
| Interface Spec        | 设备与 Host/MES 接口流程、业务逻辑及通信时序                  |          |               |
| PICS                  | SEMI 标准逐条合规性声明                                       |          |               |
| SEDD                  | SECS 设备数据字典 (XML/Excel)                                 |          |               |
| VID List              | 变量 ID 列表 (含 SVID)                                        |          |               |
| CEID List             | 采集事件列表                                                  |          |               |
| Alarm List            | 告警清单 (ID/名称/说明/严重等级)                              |          |               |
| Remote Command List   | 远程命令清单 (START/STOP/PAUSE/ABORT 等)                      |          |               |
| Recipe Spec           | Recipe 上传/下载/切换/校验接口说明                            |          |               |
| PP Format             | Recipe 文件格式 (Binary/XML/Text)                             |          |               |
| Recipe File Sample    | 至少一个完整 Recipe 样例                                      |          |               |
| 非标通信手册          | 2-12 寸非 SECS 设备: 通信协议说明 + 通信手册                  |          |               |
| COM Type              | TCP/IP(HSMS) / RS232(SECS-I); 新购设备必须要求 HSMS           |          |               |
| Conn-Mode             | HSMS-SS / SECS-I / Interface A                                |          |               |
| Device ID / Port      | SECS Device ID / HSMS 端口号                                  |          |               |
| GEM Version           | E30/E37/E40/E94 等                                            |          |               |
| Software/Firmware Ver | 机台软件版本 / 固件版本                                       |          |               |

#### Interface Checklist 判定 (MFG/IT 填写)

| EQP ID | Need EAP | Need FDC | Support SECS/GEM | Support EDA | Support E87 | Support E90 | Need Custom Adapter | Need Gateway | Reuse Existing Driver |
| :----- | :------- | :------- | :--------------- | :---------- | :---------- | :---------- | :------------------ | :----------- | :-------------------- |
|        |          |          |                  |             |             |             |                     |              |                       |

#### Risk Assessment (MFG/IT 汇总)

| EQP ID | 风险项 (无PICS/无SEDD/RS232/无RF Reader/新Model/其他) | Impact (High/Medium) | 应对措施 | Owner |
| :----- | :---------------------------------------------------- | :------------------- | :------- | :---- |
|        |                                                       |                      |          |       |

#### EAP 前置准备

| No  | 准备项          | 适用对象              | 内容要求                                                                                | 负责方 | 状态 |
| :-- | :-------------- | :-------------------- | :-------------------------------------------------------------------------------------- | :----- | :--- |
| 1   | MOXA 盒         | 2/4/6/8 寸串口设备    | IT 采购 MOXA, 将串口转 TCP 接入网络                                                     | IT     |      |
| 2   | SMIF 接入       | 加装 SMIF 的设备      | 串口 SMIF: MOXA+网线转 TCP; HSMS SMIF: 网线+IP                                          | IT/EE  |      |
| 3   | 网线/IP 规划    | 所有入网设备          | 每台设备一根网线 + 工厂网络固定 IP (OT VLAN, 严禁办公网)                                | IT     |      |
| 4   | 手持端/FAB 热点 | 全 FAB                | EAP GUI 支持移动终端; FAB 布设无线热点; 手持扫随工单条码                                | IT     |      |
| 5   | 扫码枪/FAB PC   | 热点未覆盖区域        | 布设台式电脑 + 扫描枪, 扫随工单条码                                                     | IT     |      |
| 6   | RFID 标签       | 12 寸支持 RFID 的设备 | FOUP 加贴 RFID 标签; 不支持 RFID 的设备采用手持终端扫码                                 | EE     |      |
| 7   | 后道辅材条码    | 后道设备              | 需 EAP 卡控的辅材: 辅材信息须有单独条码并打印在随工单上, EAP 才能在当前作业进行比对卡控 | PE     |      |
| 8   | 通信协议确认    | 所有设备              | 尽量具备 SECS 通信能力, 尽量支持 HSMS 通信方式                                          | EE/MFG |      |
| 9   | EQP 杀毒        | Windows 系统的设备    | IT 安全合规检查(杀毒)完成                                                               | IT Sec |      |

### Phase 2 EAP/FDC 接口开发 (T-60 ~ T-30)

> 目标: 完成 EAP Driver/Host/Recipe/Alarm/Event/RCMD/设备状态开发; FDC Metadata/Data Collection/Trace/Sampling 配置.

| EQP ID | EAP Dev Start | EAP Dev Cost(Day) | EAP Dev Finish | EDA Model | Metadata | Data Collection Plan | Trace Variable List | Sampling Rate | Trace Event | Auto Owner | FDC Owner |
| :----- | :------------ | :---------------- | :------------- | :-------- | :------- | :------------------- | :------------------ | :------------ | :---------- | :--------- | :-------- |
|        |               |                   |                |           |          |                      |                     |               |             |            |           |

输出物: Interface Design (T-60) → Offline Test (T-45)

### Phase 3 接口验证与 FAT (T-30 ~ T-14)

> 内容: Simulator 测试、Offline 测试、FAT、Recipe/Alarm/Event/Trace 验证.

| EQP ID | SECS Test Start | SECS Test Cost(Day) | Simulator 测试 | Recipe 验证 | Alarm 验证 | Event 验证 | Trace 验证 | FAT 日期 | FAT 结果 |
| :----- | :-------------- | :------------------ | :------------- | :---------- | :--------- | :--------- | :--------- | :------- | :------- |
|        |                 |                     |                |             |            |            |            |          |          |

输出物: FAT Report (T-30); Recipe Mapping (T-21); Sampling Plan 确认

FAT(Factory Acceptance Test)

### Phase 4 装机验机 T0 → T2 (Move In 后)

> 目标: 完成 Hookup(T0)、装机调试(T1)、Offline 验机(T2), PE Sign-off.

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

> 内容: EAP Release、稳定性观察、Alarm 优化、Recipe 修正、Sampling 优化、Performance Monitoring、Closing.

| EQP ID | EAP Release Date | T2 Release Date | GAP(EAP/T2) 天 | 稳定性观察结论 | Alarm/Recipe/Sampling 优化项 | Close Report 日期 | PM 签字 |
| :----- | :--------------- | :-------------- | :------------- | :------------- | :--------------------------- | :---------------- | :------ |
|        |                  |                 |                |                |                              |                   |         |

> GAP(EAP Release/T2 Release) 为衡量自动化就绪延迟的关键指标, 目标 ≤ 0~3 天; 非标设备常 >14 天, 需 PM 提前预警.

# FDC

## FDC Architecture

- 表现层
    - 主要是UI层, 以及想外部系统提供数据的接口层, 这一部分主要是用来提供系统数据
- 业务逻辑层
    - 业务逻辑层, 主要是用于系统内部业务的逻辑处理, 主要包含数据控制, 错误侦测与分类, 模型建立, 以及工作引擎, 事件处理, 日志, 数据管理等功能, 业务逻辑层是整个系统的核心
- 数据访问层
    - 数据访问层, 主要是为上层提供了数据基础, 包括数据的访问, 以及设备数据的采集, 数据访问层是整个 FDC 的基础

## FDC Function List

### 1. 数据采集与集成 (Data Collection & Integration)

#### 1.1 多协议与多源数据接入

支持广泛的工业协议与数据源接入, 实现全厂设备数据的统一采集.

- **标准协议支持**:原生支持 SECS/GEM、Interface A (EDA)、OPC UA 协议;提供 nPortSECS 组件在机台与 EAP/FDC 间转发消息.
- **非标数据接入**:支持从 File、Database、TCP/IP 等非标接口收集数据;支持 Facility Data 采集.
- **附属设备整合**：支持与 External Sensor(如 RGA、Scrubber、Hot N2、Chiller、PPS、Pump 等)连接并采集数据.
- **Multi-Source 融合**：支持将主机台数据与附属设备数据通过配置合并至同一 Tool 视图, 无需编码.
- **复杂结构解析**：支持无代码提取 List、Array 等复杂结构数据;提供 EDA Meta Data 提取工具, 直接获取 Event Path 等元数据.

#### 1.2 采集策略与计划管理

支持灵活、精细化的数据采集配置, 平衡数据完整性与系统负载.

- **动态采样控制**：支持根据抽样变量和 Step 设定不同采样比例与频率, 并设置上下限防错;支持 Polling 与 Trace 两种采集模式.
- **DCP 计划定义**：支持基于事件、时间或数据点触发采集起止;支持按工艺类型/腔室级别配置 SVID 及独立采集频率.
- **轮检与追溯模式**：支持 By Tool 轮流采集(轮检模式)及精准回溯定位(追溯模式).
- **Idle 状态管控**：支持配置设备 Idle 时是否请求上报数据;支持 Non-Wafer / Non-Process 数据收集.
- **模板化部署**：支持同型机台共享 DCP/Sensor List/SVID List 模板, 亦支持单机台独立设定;支持导入导出配置.
- **热更新机制**：修改数据收集定义无需停机或重启 EAP.

#### 1.3 数据质量与上下文整合

支持数据有效性校验及业务上下文关联, 确保分析数据的可用性.

- **Context 整合**：支持将 MES Context(Lot ID, Prod ID, Stage, Recipe, Reticle 等)及自定义标签注入 FDC 工艺数据.
- **质量监控**：支持数据采集质量实时监控与汇总报告;支持机台数据缺失超时报警.
- **虚拟参数**：支持设定 Virtual Trace Parameters 与 Virtual Events.
- **存储能力**：提供硬件配置支持保存一年或以上历史数据.

### 2. 故障侦测与模型引擎 (Fault Detection & Modeling)

#### 2.1 UVA/MVA 建模与分析

支持单变量与多变量统计模型, 覆盖设备健康与工艺质量监控.

- **双模引擎**：支持同时运行多个 UVA(单变量)与 MVA(多变量, 含 Q, PCA, HT2, Diagonal HT2)监控模型.
- **虚拟 Sensor 生成**：支持通过线性表达式、Max/Min/Sum/Moving Range 等算法从 Raw Data 生成虚拟 Sensor;支持空值填充、异常点去除及片段截取.
- **跨片统计**：支持连续多片 Wafer 间的统计值计算(如 MovingRange), 并在 Lot 切换时自动重置.
- **历史回滚仿真**：支持利用历史数据对 UVA/MVA 模型进行离线仿真验证.
- **二次开发**：支持 Model 算法二次开发并提供 Sample Code.

#### 2.2 智能窗口与过滤

支持基于工艺特征的动态数据切片, 提升模型信噪比.

- **多维窗口定义**：支持 Step、Recipe Time、Sensor 规则、Offset 等多种窗口划分方式;支持 Cycle Step 内 Main/Sub-step 批量监控.
- **动态参数化窗口**：窗口起始点可基于 Sensor 统计值(如压力峰值)动态触发;窗口参数随 Context(如 Recipe Main Step)自动调整.
- **多级窗口叠加**：允许单次统计计算应用多个数据窗口.
- **噪音过滤**：支持窗口内 Sensor 数据灵活过滤, 剔除干扰信号.
- **向导式建模**：提供向导工具, 基于历史数据推荐统计方法.

#### 2.3 规格管理与自适应

支持多层次、动态化的规格体系, 降低误报率.

- **多级规格体系**：支持 Warning / Critical / Outlier 三级报警等级;每级可设独立 Spec、OCAP 及 Alarm Rule.
- **多种 Spec 类型**：支持 Fixed / Delta / EWMA / N-Sigma / Target% / Moving Average 等多种规格形式.
- **Auto-Limits 自动生成**：支持基于历史数据自动计算 Spec, 内置 8 种 Sigma 算法(PSEUDO, Bounded Boxplot, SIMR2 等);支持自动过滤异常数据及自定义过滤算法.
- **Golden Tool 机制**：支持设定 Golden Tool, 同型机台/Chamber 自动继承规格;支持 PM/新设备验机比对及偏离值计算.
- **Context Offset**：支持针对不同 Context Group(如不同 Recipe)设置 Offset, 使多 Recipe 共用同一模型与规格.
- **Baseline 比对**：支持 Sensor Baseline 设定及 Process Data 比对报警.
- **动态规格触发**：支持根据条件(PM 后、Idle N 小时、Run N 片后)动态开启/关闭检测或重置规格.
- **Auto Retarget**：支持 Offset Change、Event 或外部系统触发的自动目标值重校准.

#### 2.4 实时侦测与报警联动

支持制程中的实时异常拦截与闭环处置.

- **实时检查**：支持长制程中实时规格检查, 避免制程结束才发现异常;支持工艺时间异常(如 End Event 缺失)侦测.
- **GuardBand 动态频带**：支持基于 Trace Data 生成随时间变动的动态频带, 结合 SPC Trend Rule 降低误报.
- **逻辑组合报警**：支持 Summary Data 逻辑表达式生成新监控模型(如双模型同时报警才触发).
- **Data Quality 联锁**：Sensor 数据质量不合格时, 可配置跳过部分模型监测.
- **分级抑制**：支持模型级别设定, 高级别报警后自动抑制低级别报警.
- **系统集成处置**:
    - AMS：支持 Email/SMS/Phone/Wechat 多渠道报警.
    - MES：支持 Hold Lot/Tool/Chamber/Recipe.
    - EAP：支持 Stop Tool/Chamber.
- **Alarm Rule 管理**：支持自定义 SPC Alarm Rules;支持 Rule 仿真测试;支持全局共享 Rule 定义.

### 3. 数据可视化与分析 (Visualization & Analysis)

#### 3.1 交互式图表分析

支持多维度、深层次的数据探索与根因定位.

- **多源叠图**：支持 Trace Data / Summary Data 按 Lot/Wafer/Tool 等维度叠图;支持多 Run 数据按 Step Number 对齐.
- **Context 着色与筛选**：支持按 Product/Flow/Recipe/Mask 等 Context 筛选数据;支持按 Context 为数据点着色并生成图例.
- **双轴与多图**：支持双 Y 轴显示及多图同屏;支持辅助线(Alarm/Event/Spec)叠加.
- **Drilldown 追溯**：支持从汇总数据下钻至原始 Trace Data;支持 SPC Chart 点击跳转 Trace Data.
- **Tag 标记系统**：支持手动/自动(Range/Peak/Time Based)标记 Good/Bad Run;支持基于 Tag 的叠图、分色及 Key Sensor 偏差打分排序.
- **Idle 时间压缩**：支持按时间顺序显示多 Run 数据时去除中间 Idle 时段.
- **CSV 导入分析**：支持导入 CSV 文件至 FDC 图表工具进行分析.
- **图表定制**：支持图例、单位、点大小、线型、颜色、Y 轴刻度等自定义设置;支持 Highlight 特定 Run.
- **一键导出**：支持导出 Excel 及按条件一键导出 FDC Chart.

#### 3.2 时间跨度与数据源切换

支持高效的历史数据访问与对比.

- **时间跨度方案**：提供简单高效的线上/线下数据源切换方案(1年内/3年内/超3年).
- **Filter 功能**：支持图中数据实时过滤.

### 4. 报表与统计 (Reporting & Analytics)

#### 4.1 标准与定制报表

支持全方位的 FDC 绩效与质量统计.

- **Alarm 统计**：支持 Alarm Log 报表(Drilldown to UVA)、OOC/OOS 报表、Top10 报警模型统计.
- **覆盖率分析**：支持 Recipe 覆盖率与 Run 覆盖率统计.
- **模型质量评估**：支持规格质量报表(Cp/Cpk 汇总), 指导 Spec 收紧/放松.
- **趋势与分布**：支持 UVA Trend 报表(含 Spec)、Box Plot 报表(多机台/多时间段对比).
- **实施状况总览**：支持按 Fab/Area/ToolType 查看 DCP/Spec/OCAP 实施状况.
- **PMQA 与匹配报告**：支持 PM 后自动与基准设备比对;支持 Chamber Group Matching 报告(Base Line Shift 检查).
- **新设备验收**：支持新设备上线后与基准设备比对, 汇总超 Spec 数据.

#### 4.2 报表自动化与分发

支持报表任务的调度与多渠道交付.

- **任务调度**：支持计划报表生成任务, 支持客制化内容.
- **邮件推送**：支持报表通过电子邮件自动发送.
- **格式转换**：支持查询结果转换为 PDF/PPT Report.
- **收藏夹**：支持用户定义常用报表收藏夹.
- **开放 Schema**：开放 DB Schema 支持第三方报表开发.

### 5. 系统架构与运维 (System Architecture & Operations)

#### 5.1 高可用与无缝升级

支持企业级连续性保障, 确保 7x24 小时监控不中断.

- **数据采集无缝切换**：软件升级/打补丁期间, 支持数据采集无缝切换至备用服务器, 完成后切回.
- **自动故障转移**：支持采集服务器崩溃自动检测, 并在备份服务器启动采集进程.
- **不停机发布**：软件升级和新功能发布不影响系统使用.
- **多产线支持**：支持多产线同时使用.

#### 5.2 低代码扩展与集成

支持业务人员自主开发与外部系统对接.

- **可视化 Workflow**：提供拖拽式 Block 开发工具, 事件触发执行, 无需编码完成二次开发.
- **Python 脚本引擎**：提供 Python/IronPython 模块, 支持进阶分析与 AI/ML 复杂计算.
- **账号集成**：支持集成客户账号管理系统, 无需额外创建账号.
- **签核集成**：支持签核系统集成;支持紧急生效功能(特殊情况直接修改 Spec/OCAP).
- **消息分流**：支持对设备 Message 进行分流过滤.

#### 5.3 安全与监控

支持细粒度权限管控与系统健康自监控.

- **RBAC 权限**：支持基于角色的访问控制, 不同用户显示不同设备及操作功能.
- **性能监控**：支持 Performance Counter 对接 Zabbix 等主流监控系统;提供系统管理工具及性能报警.
- **数据生命周期**：提供数据保留期限、备份及清理机制.
- **历史记录**：提供完整的操作与变更历史记录.

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

## RMS Function List

### 1. Recipe 基础功能管理

#### 1.1 Recipe 创建与维护

支持通过 EAP 集成或手动方式对设备配方进行全生命周期维护, 确保配方数据的准确性与完整性.

- **Recipe List 同步**：支持通过 EAP 整合, 自动从设备上传并创建 Recipe List(Recipe Name).
- **Recipe Body 管理**：支持通过 EAP 从设备上传 Recipe Body, 支持批量上传;支持编辑修改 Recipe 内容及"另存为"复制功能.
- **状态变更与签核**：支持批量修改 Recipe 状态、批量签核及批量生效;支持按角色管控 Recipe 在 RMS 界面的显示权限, 防止误操作.
- **查询与删除**：支持通配符模糊查询 Recipe;支持在系统中安全删除 Recipe.
- **程序列表管控**：支持 Under Control / Not Control 设定, 针对 Not Control 程序支持按 LotType 进行卡控.
- **自动清理机制**：支持配置 Recipe Run 完成后是否自动从机台删除, 优化设备存储空间.

#### 1.2 Recipe 下载与部署

支持灵活高效的配方下发机制, 满足生产准备与自动化运行需求.

- **自动下载**：Run 货时响应 EAP 请求, 自动将指定 Recipe 从 RMS 下载至机台;支持设备 Idle 状态下预下载 Recipe.
- **手动批量下载**：支持在 RMS UI 上手动触发单个或多个 Recipe 的批量下载.
- **格式兼容**：支持 SECS、Binary、ASCII、XML 等多种数据类型的 Recipe Body 解析与存储.

### 2. Recipe 生命周期与版本控制

#### 2.1 版本状态流转

支持严谨的版本管理机制, 确保生产环境始终使用受控且正确的配方.

- **多版本共存**：支持 Draft(新创建)、Intermediate(中间修改/待签核)、Active(生效)三种版本状态;系统内可存在多个历史版本, 但最多仅有一个生效版本.
- **Golden Recipe 机制**：支持跨设备、跨腔体共享同一 Golden Recipe, 作为 Body 验证比对的基准源.
- **暂停与发布**：支持根据 Recipe ID 独立执行暂停或发布操作, 快速响应生产异常.
- **版本回退**：支持完善的版本控制, 更新 Spec 自动生成新版本, 并可回退至任意历史版本.
- **自动备份**：支持 Recipe 变更时自动备份至 RMS 备份系统, 保障数据安全.

#### 2.2 层级化与对象管理

支持复杂工艺场景下的配方结构化管理.

- **多层次 Recipe 架构**：支持主 Recipe 与子 Recipe 定义, 不限层级数, 且主子 Recipe 均支持校验.
- **EC/SV 管理**：支持设备常量(EC)与状态变量(SV)的上传、比对及 EC 下载;支持按 Tool/Recipe/LoadPort/Chamber/Product/Tech/Recipe Group 维度设定 EC/SV Spec.
- **历史追溯**：支持按时间范围等条件查询 Recipe 对象(机台/Lot)使用历史及 Recipe 内容变更历史.

### 3. Recipe 比对与校验 (Validation)

#### 3.1 Online 在线比对

支持生产过程中的实时配方一致性检查, 拦截错误配方上机.

- **实时触发**：Online Run 货时, 根据 EAP 或 MES 请求自动比对 Recipe Body.
- **异常联动**：比对失败时自动发送 Alarm 至报警系统, 并与 MES/EAP 整合执行设备 Hold 或 Recipe Hold.
- **Bypass 机制**：支持 By pass 单台设备所有 Recipe 或单个 Recipe 的比对, 适应特殊调试场景.
- **失败记录**：详细记录比对失败的具体参数信息, 辅助快速定位问题.

#### 3.2 Offline 离线比对

支持多维度的配方差异分析, 支撑工程分析与设备匹配.

- **多场景比对**：支持不同设备间相同 Recipe 比对、设备 Recipe 与 RMS 存档比对、同 Recipe 不同版本比对.
- **批量一键比对**：支持两台设备多程序一键比对、同型号所有设备同程序一键比对(客制化).
- **真实设备对比**：支持 FAB 中两台真实设备的程序差异直接比较.
- **结构化呈现**：支持 Sequence 比较结果分层呈现;支持将 Recipe Body 解析为系统可识别参数类型后进行比对(兼容 Format/Unformat).
- **上传预检**：Recipe 上传时自动进行参数合规性检查.

#### 3.3 比对 Spec 与策略配置

支持精细化的比对规则定义, 平衡管控严格度与灵活性.

- **多种比对方式**：支持 Target(目标值)、Range(范围)、In(枚举集合)等多种参数比对逻辑;支持 Full Body 与 Parameter 级比对.
- **容差定义**：支持按百分比或固定数值定义参数修改 Tolerance.
- **Spec Template**：支持定义 Spec 模板并应用至相应 Recipe, 简化配置工作量.
- **结构比对**：支持对 Recipe 结构本身进行比对, 而不仅限于参数值.
- **开关校验**：支持设备开关机时严格校验 Recipe 参数数量, 检测设备端参数冗余或缺失.

### 4. 签核与审批流程 (Approval Workflow)

#### 4.1 外部系统集成签核

支持与企业内部流程系统对接, 实现配方变更的合规审批.

- **OA/RMS 整合**：支持连接内部 OA 系统或专用签核系统, 实现 Recipe Parameter 设定及变更的在线签核.
- **灵活送签策略**：支持按 Recipe 或按 Tool 维度设定是否送签;支持选择 Bypass 签核直接生效, 适应紧急生产需求.
- **生效控制**：签核完成的 Recipe 方可变为 Active 版本, 未签核版本禁止用于生产.

#### 4.2 自动化免签核策略

支持针对特定场景的签核流程优化, 提升工程效率.

- **自动跳过签核**：支持按 Tool Type 或 Recipe 设定自动跳过签核规则, 直接生成激活版本(客制化).
- **Validate Log 统计**：支持对各类型校验结果进行汇总统计, 生成基于历史的 Validation Report.

### 5. 权限与安全管控

#### 5.1 多维度权限模型

支持细粒度的功能与数据访问控制, 保障系统安全.

- **角色与用户组**：支持 User Group 与 Function Role 设定, 可对任何操作功能设置权限.
- **设备级数据隔离**：支持按设备设置权限, 用户仅能查看和操作其授权范围内的设备.
- **界面可见性管控**：支持按角色管控 Recipe 在 RMS 界面上的显示, 避免非授权人员误操作.

### 6. 系统高可用与运维

#### 6.1 高可用架构

支持企业级稳定性要求, 确保 7x24 小时不间断服务.

- **负载均衡与故障切换**：支持多台服务器间负载平衡及自动故障切换.
- **零停机维护**：支持软件升级、新功能发布、新设备上线、产能扩充(动态增加服务器)等操作不影响系统正常使用.

#### 6.2 Pilot Run 验证机制

支持变更的安全灰度发布, 降低全局风险.

- **Pilot 隔离验证**：RMS 重要逻辑修改时, 支持在个别设备、个别 Recipe 上先进行 Pilot 验证.
- **独立 PiRun 环境**：通过额外准备的 PiRun 服务器承载验证流量, 确保未参与 Pilot 的设备和 Recipe 完全不受影响.

#### 6.3 报表与扩展

支持数据开放与定制化开发, 满足工厂个性化需求.

- **客制化报表支持**：提供完整数据接口与底层数据, 支持客制化报表开发.
- **Validate Report**：内置校验结果汇总统计功能, 支持基于历史数据的分析报告生成.

# RCM

## RCM Function List

### 1. 用户与权限管理

#### 1.1 账号与角色体系

支持多层级用户管理及灵活的权限配置, 确保系统访问安全可控.

- **用户全生命周期管理**: 支持用户的导入、新增、修改、删除及个性化设置保存至DB, 实现多终端配置漫游.
- **多级角色管理**: 支持超级管理员、管理员、审计员、普通用户等多层角色架构;支持角色的增删改查及菜单/按钮级界面配置.
- **精细化权限控制**: 提供角色权限配置界面, 权限粒度可控制到功能级别的只读或操作.
- **AD域集成**: 支持对接AD域账密, 自动同步更新RCM系统账号信息.

#### 1.2 本地与远程互锁机制

支持Local/Remote模式切换及近端优先原则, 保障机台现场操作安全.

- **模式切换**: 支持Local模式(仅本地操作)与Remote模式(远端操作或双端操作)切换, 本地Interlock权限优先.
- **近端优先保护**: 当机台近端有键盘/鼠标操作时, 自动关闭远端操作通道, 远端降级为仅查看模式.
- **Interlock物理按钮**: 支持近端Interlock按钮, 启用时禁止远程控制;远程用户View/Control时被触发Interlock会有明确提示.
- **Control权限保护**: 远程Control权限不可被强制退出(除非超时未操作或主动释放);操作权交替需经当前操作者同意, 超时未回应视为默认放弃.

### 2. 设备与区域管理

#### 2.1 区域与机台建模

支持树状层级化管理及灵活的机台绑定.

- **多级区域管理**: 支持区域的增删改查及多级树状图显示维护.
- **机台信息管理**: 支持机台编码、名称、所属区域、机型、负责人/Group等信息的增删改查.
- **KVM硬件配置**: 支持配置RCM硬件KVM的IP、端口、网关、子网掩码及对应的机台绑定关系.
- **KVM名称同步**: 联机时直接抓取KVM上定义的名称显示, 分割画面子窗格同步显示对应KVM NAME.

#### 2.2 机台权限与并发控制

支持基于角色的机台访问控制及多用户协同策略.

- **角色-机台授权**: 提供赋予角色-机台权限的配置界面.
- **并发操作仲裁**: 多用户同时远程操作同一机台时, 依据权限级别决定操作人员(默认高权限优先).
- **连接数管控**: 单台设备支持x人同时登入(一人主控≥30FPS, 其余监控≥1FPS);连接数达上限时弹出提醒窗口.
- **个人收藏夹**: 支持用户添加常用机台至收藏夹, UI登入后默认显示且不受群组限制.
- **动态加载**: 后台新增机台/KVM或开放权限后, 前端无需重启即可实时加载.

### 3. 远程监控与操作体验

#### 3.1 高清低延视听传输

支持高分辨率、低延迟及多种外设适配, 还原现场操作体验.

- **性能指标**: 画面传输和操作响应平均时间≤500ms, 最大≤1s;支持1920x1200@60Hz及以上真彩色显示.
- **自适应显示**: 设备自适应机台屏幕分辨率, 支持自定义分辨率设置;支持全屏/非全屏及缩放/自适应/填充/原始比例等多种显示模式.
- **鼠标精准控制**: 支持绝对鼠标、双/单鼠标模式、触摸板/轨迹球/电容笔等样式;支持手动设置参数对齐精度;自动合并远近端鼠标避免双光标困扰.
- **多屏与特殊显示**: 支持远端双开(View+Control分离);支持VGA/DVI/HDMI/DP/触控屏等多种接口;支持组态方式接入无屏幕机台的操作按钮.
- **多国语言支持**: 支持多国语言键盘及屏幕软键盘.

#### 3.2 智能窗格与状态展示

支持灵活的布局配置及实时的设备状态反馈.

- **自定义布局**: 支持3x3、3x4、4x4、5x5等灵活窗格数量设置.
- **OSD信息叠加**: 画面显示机台名称、实时状态、报警信息、Run货Lot名称等.
- **离线状态诊断**: 机台离线时显示具体原因(KVM连接失败、机台无法访问等);恢复后画面自动恢复无需刷新.
- **在线状态监控**: 支持查看当前KVM同时在线人数及操作等待人数.
- **多主机面板**: 针对一机多主机场景, 提供单屏切换或多屏显示的特殊控制面板设计.
- **快速检索定位**: 支持按区域/机台组/ID树状层级显示, 支持模糊查询机台ID并直接定位画面.

#### 3.3 协同作业与通讯

支持多用户协作交流及资源有序释放.

- **即时传讯**: 为登入同一远程机台的用户提供信息交流平台.
- **资源自动释放**: 远端控制端在设定时间内无操作, 自动释放控制通道资源.
- **占用提示**: 点击窗格时若联机已满或被Control权限占用, 系统提示相应讯息.

### 4. 日志审计与报表

#### 4.1 全链路操作审计

支持完整的操作记录、视频录制及数据分析.

- **访问日志**: 记录用户连接的KVM、时间、IP、账号及异常情况;保留客户端访问日志(人员、起止时间、时长).
- **操作日志**: 保留远程控制端的鼠标/键盘操作记录;日志包含事件ID、Timestamp、分类、描述, 至少保存一个月(周期可配).
- **视频录屏**: 支持RCM操作界面视频录制、画质配置及回放;截屏录像及录屏保留30自然日(可配), 支持BigData分析.
- **日志导出**: 支持导出为TXT、CSV、Excel等易读格式.

#### 4.2 统计报表与查询

支持多维度的使用时长统计及数据库直连查询.

- **时长报表**: 支持按机台、按人员查看访问时长, 查看KVM历史在线时长报表.
- **SQL直连查询**: 使用记录存入数据库, 开放特定账号通过SQL快速获取信息.
- **前端可视化**: 支持在前端直接查看访问日志及统计信息.

### 5. 智能化扩展功能

#### 5.1 RPA与OCR能力

支持自动化脚本执行及图像识别, 提升运维效率.

- **RPA脚本**: 支持运行自定义脚本, 实现自动化操作.
- **OCR识别**: 支持文字图像识别, 辅助信息提取与校验.

#### 5.2 系统集成接口

支持标准化API开发, 便于第三方系统整合.

- **开发接口**: 提供RCM应用程序开发接口(.dll文件等), 利于软件应用整合.
- **协议支持**: 硬件支持HTML、Microsoft .NET等主流协议, 降低未来技术升级成本.

### 6. 硬件规格与部署要求

#### 6.1 电气与物理安全

支持工业级电气标准及防脱落设计, 确保厂务环境适应性.

- **电源规范**: 用电需求AC 220V(国标), 匹配厂务5孔插座(禁转接头);支持电压压降至100V不影响运行.
- **防脱落设计**: 电源适配器输入接头及所有转接接口均需防脱落紧固设计;DC延长线按需定制且保证电气参数正常.
- **线材安全**: 信号采集线材必须带磁环滤波;所有接口线材不可线芯外露, 转角处予以保护.
- **独立供电**: RCM设备及附属部件不得从机台端取电.
- **散热性能**: 环境温度最高55°C时设备正常运行, 无卡顿或热宕机.

#### 6.2 网络与兼容性

支持标准网络协议及零侵入式安装, 保障生产环境稳定.

- **网络接口**: 100/1000M自适应网口, 支持IPv6/IPv4、Telnet、SSH;单个RCM仅需一个RJ45网口和一个IP.
- **时钟同步**: 支持NTP时钟同步.
- **零侵入安装**: 采用硬件连线获取屏幕/键鼠信号, 严禁在机台端安装任何软件;安装过程无需机台关机或重启(特殊机型除外).
- **故障隔离**: 单个RCM损坏仅影响对应机台的远程操作, 不影响机台正常Run货及数据传送.
- **断点续传**: 断电/断网恢复后<1分钟自动恢复工作, 参数无需重设.
- **跨平台客户端**: 支持Windows、Linux、Sun等多平台客户端;推荐使用实体机, 也支持虚拟桌面.
- **设备信息获取**: 支持Host端获取设备型号、FW版本、IP、序列号/MAC地址等信息.
- **调试便捷性**: 支持直接连接笔记本或移动设备进行参数设置与调教.

# APC

## APC Function List

### 1. 数据收集与计算 (Data Collection & Calculation)

#### 1.1 工艺测量数据集成

- 提供工艺测量数据收集与集成的开发扩充功能
- 支持工艺测量数据的自动收集
- 提供工艺控制项目的配置功能

#### 1.2 计算公式与异常处理

- 提供最小值、最大值、平均值、标准差等计算公式以供开发控制所需
- 支持自定义异常量测数据及客制化检查流程(如滤除低GOF量测资料不参与R2R反馈计算)
- 支持控制工艺对量测项目的检查、过滤及OOS处理流程客制

### 2. 集成及工具 (Integration & Tools)

#### 2.1 系统集成接口

- 为不同的制程提供统一的操作界面
- 提供接口定义功能与周边系统集成的开发工具
- 提供图形化的接口定义功能与其他系统(MES, EAP, Dispatching)集成
- 支持访问外部数据库
- 按照WebService协议提供对外通讯
- 易于扩展其他通讯方式与第三方系统通讯(如Tibco RV)
- 与MES/SPC/FDC/RMS/DISPATCHING/Alarm/Workflow等周边系统集成
- 与Litho inside系统集成, 支持多种Sub Recipe类型(CPE, DOMA, Files, BMMO OVL, BMMO Focus, LIS等)
- 与MES的配方管理功能集成

#### 2.2 开发与权限工具

- 提供功能组件允许用户开发和集成自己的APC控制模块
- 提供便捷高效的开发工具
- 提供完善的权限管理机制, 支持用户群组及权限配置
- 提供对象(Strategy, Parameter Table)的Owner/OwnerGroup管理
- 提供对象(流程及参数表)的权限管理及修改历史记录
- 提供全面的报表功能
- 提供友好的设计界面

#### 2.3 历史数据与性能维护

- 提供检视及输出APC/R2R历史资料功能, 支持基于不同控制器的run货历史查询
- 提供高效的数据清理及恢复机制, 保障系统性能不随时间推移而下降
- 软件升级和新功能发布不影响系统使用(不停机)
- 支持多产线同时使用
- 提供必要的系统管理工具和性能监控及报警机制

### 3. Pilot Run 管理

#### 3.1 Pilot触发与设定

- 提供Pilot(Send Ahead)设定, 支持依客户指定的module和条件配置
- 支持设定Pilot Triggering Conditions(Wafer count、时间、recipe idle等, 按Product group+flow+Step+Tool/Chamber或PPID)
- 支持自动放行Flag设定
- 适用于PM Pi-Run、YE Defect Pi-Run、Adhoc Pi-Run及其他pilot需求

#### 3.2 Pilot执行与反馈

- 支持Pilot结果回馈给MES
- 支持全自动执行Pilot流程

### 4. 控制器开发通用功能 (Controller Development)

#### 4.1 基础控制开发

- 提供客户开发支持工艺模块控制的基础功能(炉管、薄膜、离子注入、光刻、刻蚀、研磨、湿法)
- 针对工艺流程参数实施反馈或调整, 调整参数基于机台可调整参数及相关集成
- 提供不同程度的前馈/反馈控制器开发(lot-level, batch-level, wafer-level)
- 支持根据前馈选择下一步不同的process recipe
- 支持MPC(Model Predictive Control)和EWMA控制特性

#### 4.2 控制模型与算法

- 提供Exponential Weighted Moving Average (EWMA) 控制模型
- 提供Linear States Space Model (LSSM) 控制模型
- 提供SISO/MIMO等不同控制模型并支持切换
- R2R Control Block除基本EWMA和MPC外, 支持免费客制化开发培训以新增WMA或其他算法
- 提供R2R用户block及自定义功能开发, 允许用户集成自有模块

#### 4.3 控制流程与情境

- 提供反馈群组控制开发(如根据产品与配方作为群组控制)
- 支持针对不同控制情境开发不同流程(pilot lot, rework lot, runcard lot, special lot)
- 支持子流程开发, 流程间可嵌套以提高重用性
- 支持配置流程等方式对现有solution进行适配
- 用户可在UI上设定特定LOT或Product只跑对应的Special APC flow

#### 4.4 数据处理与过滤

- 支持离群批次(Lot)过滤功能, 通过设置离群批次清单实现
- 支持special lot过滤功能
- 提供量测数据异常检查功能, 异常数据不参与反馈及计算
- 控制器可处理多个调整工艺参数建议请求(parallel R2R recommend setting request)

#### 4.5 管控与验证

- 针对控制器输出值提供多种管控方式(上下限、MTT等)及OOS自定义处理流程
- 提供调整(offset)功能
- 提供应用开发需要的reset功能
- 提供重置控制器功能(设备PM后手动重置或外部事件驱动)
- Controller上线前支持模拟Output, 确保有效性及model正确性
- 控制器支持多线程运作, 同时处理不同请求

### 5. Litho CD 控制

#### 5.1 CD控制模型与参数

- 支持SISO EWMA Model及Lot-level feedback
- 支持Process机型：ASML、CANON、NIKON
- 支持量测机型：CD-SEM及OCD量测机台
- 输入参数支持Dose(调控项)及Focus(用户配置)
- 输出参数为CD

#### 5.2 CD控制情境与功能

- 内置pilot run、rework run、normal run、special run、runcard run场景
- 支持参数值最小调整阈值、tuning参数变化量上下限及绝对上下限
- 支持调整参数值截取(根据上下限或变化量上下限)
- 支持R2R模式：反馈开启模式、固定基线模式、禁止模式
- 支持量测数据site有效性检查及量测有效性验证
- 支持Target/Dose sensitivity变动侦测
- 支持过滤Lot type进行反馈及反馈有效期控制
- 支持根据最近run货值计算返工下货值
- 支持Feedback exclusion feature
- 支持光阻原料时效性Feed Forward及Lens heating Feed Forward(通过配置)
- 支持返工批有条件参与反馈
- 支持量测根据wafer process run或Lot process run进行反馈
- 支持Dose Vs CD slope根据历史数据自动更新
- 支持Control Flag: ON、FIX(固定值模式)、OFF
- 支持分光罩反馈(不包含次光罩offset)
- 支持Single Reticle Double Exposure功能

#### 5.3 CD第三方集成

- 支持RTD Integration
- 内建MES/Alarm Integration
- 内建AutoPilot Integration

### 6. Litho OVL 控制

#### 6.1 OVL控制模型与参数

- 支持MSISO EWMA及Lot-level feedforward/feedback
- 支持Process机型：ASML Linear/HOPC/iHOPC、CANON Linear 8P/10P、NIKON Linear 8P/10P
- 支持量测机型：KT / YS
- 支持litho机台OVL线性/高阶/iHOPC控制参数

#### 6.2 OVL控制情境与功能

- 支持pilot run、rework run、normal run、special run、runcard run场景
- 支持参数值最小调整阈值、tuning参数变化量上下限及绝对上下限
- 支持调整参数值截取
- 支持R2R模式：反馈开启、固定基线、禁止
- 支持量测数据site有效性检查及量测有效性验证
- 支持其他后量信息(如wafer residual)仅用于反馈滤除, 不参与计算
- 支持Chuck dedication及User offset FF(通过配置)
- 支持按产品配置特定lottype不参与反馈及反馈有效期控制
- 支持LIS、5DA数据整合及FF/FB反馈方式
- 支持New control thread initialization feature及Context relaxation
- 支持返工Lot特性(根据最近run货值计算返工下货值)
- 支持分光罩反馈或双光罩offset模式
- 支持Special Run时指定全部参数
- 支持量测根据Wafer process run或Lot metrology与process run进行反馈

#### 6.3 OVL第三方集成

- 支持LIS Integration及5DA Integration
- 内建RTD Integration
- 内建MES/Alarm Integration
- 支持AutoPilot Integration

### 7. CMP 控制

#### 7.1 CMP控制模型与参数

- 支持多输入多输出模型(Model Predictive Control)
- 支持Lot级别前馈/后馈、Wafer级别前馈、基于Chamber/Header/Platen的前馈/后馈
- 支持Process机型：EBARA、AMAT Reflexion LK/LKP、HHQK
- 输入参数：研磨时间、研磨时间+区间压力
- 输出参数：研磨后厚度(by zonal)、研磨量

#### 7.2 CMP控制情境与功能

- 支持pilot run、rework run、normal run、special run、runcard场景
- 支持参数值最小调整阈值、tuning参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持维修后预设参数值配置及配合Pad/Head使用时间调整下货参数
- 支持下货参数值与实际下货值差异检查
- 支持量测数据site有效性检查
- 支持后量连续不合格时控制绪切换至pilot状态
- 支持多道前量值组合及Lot前量丢失时的EWMA补值预测
- 支持手工前量补录
- 支持有效反馈有效期控制, 超时未更新自动切换至pilot状态
- 支持Measurement disorder handling(process与measurement顺序不一致)
- 支持Reset time tracking、自动侦测维修及自动设置维修事件
- 支持控制绪关联管理
- 支持自动计算重工次数与决定是否为重工Lot/Wafer

#### 7.3 CMP第三方集成与UI

- 支持RTD Integration、内建MES/Alarm Integration、AutoPilot Integration
- 内建Applied PMS集成
- 独立UI支持反馈条件设定、控制绪操作、PiRun操作及run货历史查询

### 8. Etch 控制

#### 8.1 Etch控制模型与参数

- 支持多输入多输出模型
- 支持Chamber-level前馈/后馈及Wafer-Level前馈/Chamber-Level后馈
- 支持Process机型：AMAT Producer、LAM、TEL
- 输入参数：Etch Time、Trim Time、ESC Chuck Temperatures、Gas Flows
- 输出参数(支持2个output)：CDSEM/OCD、Thickness、CDSEM/OCD+Trench depth

#### 8.2 Etch控制情境与功能

- 支持pilot run、normal run、special run、runcard run场景
- 支持参数值最小调整阈值、tuning参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持tuning参数连续达到上下限的次数控制
- 提供不同Input之间线性关系的约束
- 支持量测数据site有效性检查及基于单output的多zone计算
- 支持有效反馈有效期控制及最新量测反馈控制
- 支持主/从tuning参数
- 支持wafer level前馈缺少量测数据时自动补偿计算
- 支持根据DF zone、CVD Chamber或Scanner Type(KrF, ArF, iLine, DUV)反馈
- 支持根据Litho as Pre-process机型反馈
- 支持Hydra uniformity system(raw metro data and X/Y coordinates)
- 支持手动调整Modeling侦测及tuning parameter下货值侦测
- 支持前值/后值量测来自于多个站点
- 支持first wafer效应处理
- 支持by RF life time预补偿参数值(RF life-time control)

#### 8.3 Etch第三方集成与UI

- 内建AutoPilot Integration
- 独立UI支持反馈条件设定、控制绪操作、PiRun操作及run货历史查询

### 9. Diffusion 控制

#### 9.1 Diffusion控制模型与参数

- 支持多输入多输出MPC线性状态空间模型
- 支持Batch级别反馈(生产批、monitoring wafer、混合反馈)
- 支持Process机型：NAURA furnace batch、TEL furnace batch、KE batch
- 支持Control Type: Monitor, Product, Hybrid Control
- 支持Deptime/Loop/ZoneTemp开关
- 支持工艺类别：LPCVD、APCVD、ALD
- 输入参数：各区温度(5-10区)、deposition时间或ALD loop
- 输出参数：各区厚度(5-10区)

#### 9.2 Diffusion控制情境与功能

- 支持pilot run、normal run、special run、runcard run场景
- 支持Zone反馈资料识别及根据必要Zone量测资料反馈
- 支持有效反馈有效期控制、输出预测检查及量测数据site/有效性检查
- 支持最新量测反馈控制
- 支持不同recipe之间的主/从控制绪关联管理
- 支持Zone量测缺省处理及量测超期处理
- 支持关键设定侦测及控制绪重置跟踪
- 支持后量lot类型处理及Batch加工wafer数量限制
- 支持参数值最小调整阈值、tuning参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持下货tuning参数连续超限处理及手动调整侦测
- 支持连续无效量测控制及控制绪Enable/Disable
- 支持手动调整tuning parameter delta限制
- 支持Boat zone定义
- 支持Monitor Bias Control(Hybrid场景下单独Tune Monitor Target偏移量)
- 支持APCVD根据常压变动预补偿Diffusion Time
- 支持Loading Size Control分群及Pre-mature FB
- 支持Thickness Vs Zone温度系数根据历史数据自动更新
- 支持Linked Control及Ratio Control
- 支持Furnace Tube-THK pre-tune

#### 9.3 Diffusion第三方集成与UI

- 内建Applied MES/Alarm Integration及PMS集成
- 自动同步Applied MES Product Target并计算反馈
- 独立UI支持反馈条件设定、控制绪操作、Test Run操作及run货历史查询

### 10. ThinFilm 控制

#### 10.1 ThinFilm控制模型与参数

- 支持多输入多输出MPC线性状态空间模型
- 支持Lot级别、Chamber级别、Chuck级别反馈
- 支持Process机型：AMAT Producer、AMAT GT
- 支持两种Wafer跑货模式：Parallel Mode、Serial Mode
- 输入参数：Deposition Time、Chuck RF Time/Power/Heater等
- 输出参数：Thickness等

#### 10.2 ThinFilm控制情境与功能

- 支持pilot run、rework run、normal run、special run、runcard run场景
- 支持参数值最小调整阈值、tuning参数变化量上下限及绝对上下限
- 支持调整参数值截取及固定值模式
- 支持tuning参数连续达到上下限次数控制
- 支持量测数据site有效性检查及滤除失控/不合规晶圆量测
- 支持有效反馈有效期控制及使用最新量测data参与R2R运算
- 支持线性约束
- 支持控制绪单向/双向联动(Linear/Non-linear Quadratic/Cubic)
- 支持Slave Parameter控制

#### 10.3 ThinFilm第三方集成与UI

- 内建MES/Alarm Integration
- 独立UI支持反馈条件设定、控制绪操作、PiRun操作及run货历史查询

### 11. WET Controller

#### 11.1 WET控制模型与参数

- 控制模型：SISO EWMA
- FFFB模型：Batch/Lot级别前馈, Batch级别反馈
- 支持根据前量厚度选择Recipe或更新ETCH_TIME两种模式
- 控制参数：ETCH_TIME
- 输出参数：Thickness

#### 11.2 WET控制功能

- 支持piLot run、normal run、special run、runcard run
- 支持tuning参数变化量绝对值上限及上下限
- 支持调整参数值截取及连续达到上下限次数控制
- 支持主/从Tuning参数及手动调整下货值侦测
- 支持Control Flag: ON、FIX、OFF
- 支持量测数据site/Wafer/Lot有效性检查并触发action
- 支持有效反馈有效期控制, 超时未更新自动hold
- 支持量测根据Wafer process run进行反馈

### 12. TRIM Controller

#### 12.1 TRIM by THK

- 控制模型：MSISO;控制参数：去除量;输出：thickness
- 支持Lot/Wafer/Point level Feedforward及Feedback
- 支持Tune Flag开关及EWMA模型算法
- 支持工程师UI手动调整去除量Offset及数据模拟计算
- 支持新产品或条件过期自动piLot run
- 支持PiLot Lot量测结果上传前相同条件其他Lot禁止进站
- 支持多种去除方式及下货值/量测值SPEC卡控
- 支持去除量Offset变动卡控及多种OOS点处理方式
- 支持用户指定去除坐标
- 支持工程师操作记录Log追溯
- 支持量测/生产数据Excel导出及设置Excel导入导出
- 支持参数值最小调整阈值
- 支持Process顺序和量测顺序不一致处理及手工前量补录

#### 12.2 TRIM by WAT

- 支持Wafer Level前馈及WAT量测结果自动处理
- 支持不同device系数计算及引用
- 支持By机台设置系数Offset及Tool Dedication
- 支持多种系数选项及目标值选项
- 支持最小有效点数卡关及最大OOS点数卡关
- 支持CupLifetime卡关及量测值SPEC卡控
- 支持OOS Points卡关及OOS Hold Lot处理
- 支持工程师操作记录Log追溯
- 支持量测/生产数据Excel导出及设置Excel导入导出
- 支持手工前量补录及文件类型处理

### 13. 独立UI通用功能 (Standalone UI)

#### 13.1 操作与配置

- 支持反馈条件设定及控制绪操作
- 支持PiRun/Test Run操作
- 方便用户或IT导入修正数据、赋值或针对special Lot中途overwrite反馈值
- 支持设定跑n批货后人工干预判断R2R reply结果
- 支持设定test条件(by Wafer/Lot/站点), test pass自动判定继续使用R2R

#### 13.2 查询与权限

- 支持查询workflow数据结果以验证准确性
- 支持灵活的权限设置和管控
- 支持必要的数据报表查询
- 支持控制绪run货历史查询

# MES

## MES Terminology

| Abbreviation | Full form         | Desc     |
| :----------- | :---------------- | :------- |
| BOM          | Bill of Materials | 物料清单 |

BOM 核心内容: 父项(成品/组件)、子项(原料/零件)、用量、单位、损耗率、生效日期等
BOM 结构形式: 通常是树状层级结构(多级BOM), 反映了产品的装配关系

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

## MES Function List

### 1. FAB Modeling (工厂建模)

支持工厂、产品、工艺流程及资源的全面建模与定义, 包含数据校验、批量维护及权限扩展：

#### 1.1 Physical & Resource Modeling (物理与资源建模)

- Factory/Area/Bay Modeling (Production/Storage Type, 数据一致性检查)
- Location 定义 & 库存查询 (OHB, NTB, Stocker, 运行时冲突检查)
- WorkArea 定义 (OLED, ODF, CMP, CVD, ETCH, LITHO, etc.)
- Equipment/Tool 架构 (Main Tool, Chamber, Loadport, Header, Custom Attribute Extension)
- 天车与端口定义 (Auto-1/2/3 Mode, Internal Buffer Logic)
- 机台状态 & Capability 定义 (E10 标准, 关键参数设置/查看权限分离)
- 耗材与耐用品物料建模 (自定义命名、计时/计米管理定义)
- 用户权限与建模对象加载器 (Excel 导入导出、批量生效/冻结)

#### 1.2 Product & Process Definition (产品与工艺定义)

- Product & Process Flow Modeling (PW/NPW、多版本、可视化拖拽、版本比较)
- Recipe & Parameter 定义 (批量导入、RMS集成检查)
- 数据采集与制程规范建模 (EDC Spec & SPC Chart 联动)
- ReasonCode & Bank 定义 (Start/End/Reticle/Receive Bank, 批量导入)
- 污染管控 (FOUP/Sorter Level 转换, Future Action 定义)

### 2. Tool Management (设备管理)

支持设备全生命周期管理、状态监控、自动化集成及特定设备高级控制：

#### 2.1 Equipment Status & Control (设备状态与控制)

- 机台建模 (Fix Buffer, Inline, Sorter, Multi-chamber, NTB as Internal Buffer)
- 机台状态与控制 (E10 扩展, Auto/Manual Transition, On Top Load Port)
- 机台 Capability & Capacity 管理 (Constraint Configuration GUI)
- Port 管理 (In/Out/InOut Mode, Automation Mode, FOSB<->FOUP Transfer)
- 机台Hold控制与异常检测 (Monitor失败自动禁止)
- Reserve Equipment (Auto/Semi-auto Mode)
- MES-EAP信息同步与报警集成 (Recipe Body Content 检查)

#### 2.2 Advanced Equipment Operations (高级设备作业)

- WET Batch Run & Dummy 填充机制 (Side/Fill Dummy 区分)
- Furnace Batch 控制 (AB Batch, Boat 厚度验证, Zone Mapping, Monitor 量测反馈)
- Sorter 管理 (Inline/Ad-hoc, Full Auto, Split/Merge/Exchange, Constraint GUI)
- Litho/Photo 设备控制 (Multiple Reticle, Inline Track+Scanner, Chuck/Tool FeedForward, Reticle Inspection Integration)
- N2 Purge 集成 & QTime 更新
- Stocker/OHB/NTB与MCS同步(位置同步、污染管控)
- 污染管控与配方内容检查(RMS集成)

### 3. Process Plan (工艺流程)

支持多层级工艺架构、严格版本控制、动态流程调整及批量维护：

#### 3.1 Flow Architecture & Versioning (流程架构与版本)

- 层级化工艺架构 (Flow, Layer, Stage, Step)
- 工艺复用与Golden Flow支持
- 版本管理与自动升版继承 (SRC/RRC/Ocap Lot 保护, Q-Time/Sampling 继承)
- Excel导入与可视化流程建模 (Flow Comparison, Tech-based 批量载入/修改, Where Used 查询)

#### 3.2 Dynamic Execution Logic (动态执行逻辑)

- 动态选择 (Equipment, Recipe, Reticle, EDC Plan)
- Virtual Site & 原材料Turnkey管理 (虚拟工序)
- NPW Flow Modeling (Prepare, InUse, Recycle, DownGrade)
- Branch/Rework Plan & Q-Time Cross-Flow 管理 (Dynamic Branch, Future Hold 继承)

### 4. WIP Management (在制品管控)

支持批次/晶圆级追踪、RunCard体系、特殊操作及全流程生产管控：

#### 4.1 Lot Tracking & Basic Operations (批次追踪与基础作业)

- Lot Create/Wafer Start (手动/自动、ERP/WMS集成、FOSB->FOUP自动Sorter、T7 Code识别)
- Track In/Out (By Batch/Lot/Wafer)
- 特殊操作 (Split/Merge, Hold/Release, Skip, Back Operation)
- Future Action (Future Hold/Skip/Split/Merge)
- Dynamic Branch & Flow 变更 (Auto/Manual Reassign, Outsourcing Process Linkage)

#### 4.2 Exception Handling & Traceability (异常处理与追溯)

- Rework 管理 (Inline/BankIn/StockIn/Customer 退回, 自动触发RRC)
- Scrap/Unscrap & Terminate/Unterminate
- ETC 管理 (Lending/Borrowing, OA/ERP 集成)
- Die Lot 管理 & No-Wafer-Lot 操作 (Die Bank 管理)
- Wafer Level 追溯 (BinGrade, Map, Defect Review)
- RunCard管理系统 (Split/Recovery/Nested/Future RunCard, 签核集成, Full Auto 支持)
- Pi-Run 管理 (APC Pi-Lot, On Demand Pi-Lot Logic)

### 5. Quality & Engineering Control (质量与工程管控)

支持数据采集、图形化OCAP、精细化取样、CP判定及防错机制：

#### 5.1 Data Collection & Analysis (数据采集与分析)

- 数据采集 (EDC) (Manual/Auto/File Mode, 自定义公式)
- OCAP管理 (图形化执行, 签核集成, Inline/Off-Line/Wafer Test 分类, RAC Format)
- Sampling 规则 (Production/YE/Wafer Sampling, Key Tool/Long Time No WIP, Step Sampling)
- Wafer Selection 规则 (NearestUp/Down, Ignore Slot, Same As Before)

#### 5.2 Process Control & Interlock (制程控制与互锁)

- Q-Time 管控 (Max/Min, Nested/Cross-Flow, Auto Action Trigger)
- Tool Constraint & Qualification (Binding, Run-card, Daily/Total Count)
- Recipe Inhibit & Auto Monitor (Idle Time, Season, Pre/Post Measurement, Cycle Control, Monitor Flow Definition)
- 制程条件与污染等级管控 (FE/BE Exchange)
- CP Wafer Judgement System (原始数据加载、规则判定: Yield/Bin/Stat, 策略维护, WJS 集成)

### 6. Resource & Material Management (资源与物料管理)

支持载具、光罩、化学品全生命周期、治具计米及BOM耗用管理：

#### 6.1 Carrier & Reticle Management (载具与光罩管理)

- Carrier 管理 (FOUP/FOSB/Pod, Cleaning/Inspection 状态, 污染管控, MCS 位置同步)
- Reticle 管理 (LifeTime/Energy Accumulation, Field设定, Kit/UnKit, Inspection/Clean 周期, Stocker 集成)

#### 6.2 Chemical & Consumable Control (化学品与耗材管控)

- Photo Resist 管理 (退冰、时效/过期、PR更换、安全库存预警、批次认证)
- Consumable & Durable 管理 (Timer, BOM 绑定, Kit/UnKit, Meter Counting, DPS Blade 管理)
- Runtime Consume (Auto/Manual Consumption, 可用物料检查, BOM运行时绑定)
- Label 打印集成 (Lot/Carrier/Wafer/Material 级别, Multi-level Label Template)

### 7. Production Support & Advanced Modules (生产支持与高级模块)

支持全自动生产、测试线、Micro OLED、先进封装及Turnkey业务：

#### 7.1 Automation & General Production (自动化与通用生产)

- Full Auto Support (Auto 1/2/3, Dispatch/Transport/Equipment 集成)
- Season 管控 (Idle/PM/Recipe Change, Mixed NPW/PW Mode)
- NPW 管理 (降级、回收、库存、 Full Auto 准备)
- 安全管理 (数据级权限、超时、审计追踪)
- Turnkey 解决方案 (多阶层BOM, Cross-Fab 生产, Outsourcing Linkage)

#### 7.2 Test, Packaging & Specialized Modules (测试、封装与专用模块)

- CP Test Line & Probe Card 管理 (Program, Touch Down, YMS 集成)
- Wafer Judgement System (原始数据加载、规则判定、策略、WJS 集成)
- Wafer Map 模块 (解析、合并/比较、旋转/镜像、 Manual Ink)
- Lab Product Tracking (Experiment Start/End、QE 结果、TQMS 集成)
- Matching Sorter & ODF Bonding (Pre-sorting, Slot/FOUP Matching, Debond)
- Micro OLED 专用功能 (Continuous Run, EVA Mask, Frame/Tray, Die PnP)
- Wafer Bonding 模块 (WoW/WoG, Pre-Bonding/De-Bonding, Mapping Traceability)
- Die Attach 模块 (DoW, Substrate/Die Matching, EAP上报追溯)
- DPS Pick and Place (Die Count, 重构 Wafer, 二次拾取, Blade 寿命管理)

## MES Phase

| 子项           | 核心内容/关键问题                                                                                                              |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| 产品和工艺流程 | flow工艺步骤数量，光刻层数，EDC量测点数量级。污染等级/Qtime/rework管理要求                                                     |
| 设备管理       | 各类型设备大类有哪些，litho，chamber，CMP，炉管，量测，bond/debond，sorter，stk，OHB，NTB，N2，foupclean等。 状态/Loadport管理 |
| 载具管理       | 载具类型，形态，识别方式（条码，RFID），Opencst/pod？ 是否有特殊槽位数量或者其他要求                                           |
| WIP/Lot管理    | 下线投片方式（手动/STK自动），Tracking，出货标签，不同产线间流转方式                                                           |
| NPW管理        | Dummy，Monitor，Season管控                                                                                                     |
| 备品或物料管理 | Parts管理，Rawwafer/EPI/封装线BOM管理                                                                                          |
| 工艺制程管理   | PMS，Constraint，选片规则，Reticle，光阻，Runcard，OCAP等管理                                                                  |

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

## SPC Function List

### 1. 数据采集与集成

#### 1.1 多源数据收集

支持全方位的生产与量测数据采集, 覆盖Inline、Offline及厂务环境数据.

- **工艺与设备数据**: 支持工艺设备Inline数据、设备日常点检(Offline)数据、量测设备校准(Calibration)数据采集.
- **测试与来料数据**: 支持WAT、CP、进料Incoming(Sub/EPI/化学品等)数据收集.
- **环境与实验室数据**: 支持无尘室监控(Particle/温湿度/纯水等)及实验室数据(微污染测试等)采集.
- **手动录入**: 提供手工录入EDC数据界面, 支持手动输入Lot/Non-Lot数据.
- **Wafer级采集**: 支持By Wafer级别的数据收集.

#### 1.2 数据管理与维护

支持高效的数据存储策略及灵活的导出功能.

- **生命周期管理**: 配合硬件存储容量配置数据最长保存时间, 提供过期数据清理脚本, 保障系统性能不随时间下降.
- **批量导出**: 支持一个或多个Chart的SPC数据和原始数据的批次导出(Excel/CSV/PDF).
- **MES集成查询**: MES中可查询SPC测量的Raw Data并支持Excel导出.
- **非侵入式变更**: 修改Chart定义不影响正在进行的数据收集;基础数据修改需发布/生效后才作用于收集过程.

### 2. SPC 核心引擎与性能

#### 2.1 实时统计管制

支持高性能的在线SPC计算与即时响应.

- **实时响应**: Online SPC在Track-Out/Operation Completion时即时返回结果, 95%以上的EDC任务在5秒内完成所有处理.
- **同步阻塞机制**: MES过站需SPC收集时, 支持等待SPC结果后再继续处理Lot或设备.
- **自动处置动作**: 根据SPC结果自动启动Hold Lot、Hold Meas. Eqp、Hold Proc. Eqp等动作.
- **Context动态分图**: 支持根据收到的数据Context信息自动拆分Sub Chart管控;Sub Chart支持继承上层Control Limit/Rule或单独配置.

#### 2.2 公式计算引擎

支持复杂的跨Plan、跨Spec数学运算与因子引用.

- **多源因子引用**: 支持引用当前Plan内/外Spec、外部Plan公式作为因子;支持引用多个Spec进行计算.
- **内置数学函数**: 支持ABS、EXP、MOD、POWER、ROUND、Cp/Cpk等数学公式及SIN/COS/TAN等三角函数.
- **聚合统计函数**: 支持对因子Spec获取MIN、MAX、AVG、MED、SIGMA等数值参与计算.
- **自身数据计算**: 支持基于自身数据的公式计算, 如Uniformity=(Max-Min)/2Mean.
- **变更自适应**: 支持Formula计算时应对因子Spec的Product变更;支持因子前后Wafer被替换时按匹配关系正常计算.
- **可扩展性**: 采用配置方式使用内建公式, 提供开发包及培训帮助用户开发新公式.

### 3. 图表可视化与交互

#### 3.1 多样化图表类型

支持全面的计量型与计数型控制图.

- **计量型图表**: Raw, Mean, Range, StdDev, MA, MS, MR, EWMA(M/S/R), Sigma Charts.
- **计数型图表**: Attributive Chart (n, np, c, u chart).
- **自定义图表**: 支持根据质量部门制定的规则产生其他类型Chart.
- **叠图对比**: 支持同一Spec Limit下不同Chamber或Tool数据叠图对比.

#### 3.2 图表显示与定制

支持丰富的统计指标展示与个性化视觉配置.

- **统计指标显示**: 显示Max, Min, Mean, Median, Range, StdDev, Total Count, OOC%, OOS%, USL/LSL, UCL/LCL, UAL/LAL, Target, Cp, Cpk等.
- **多Chart同屏**: 支持单屏显示一张或多张Chart, 并展示所有数据点相关信息.
- **Context区分**: 支持Chart中数据按附带Context信息区分显示.
- **坐标轴调整**: 支持横坐标按时间/Context格式调整;支持纵坐标根据数据/管控线调整比例.
- **颜色管理**: 自定义控制线颜色及数据点在不同状态(如OOC)下的颜色.
- **动态更新**: 支持Chart动态显示及更新;改变Spec/Control范围后, 新界限在新数据点进入时显示.

#### 3.3 数据点交互操作

支持精细化的数据点管理与标注.

- **手动过滤**: 支持手动过滤数据点, 过滤点在图中隐藏/显示且不计入制程指标及管控界限计算.
- **离散规格过滤**: 定义Chart离散规格, 接收数据时自动滤掉超限离散点.
- **备注说明**: 支持对单个或多个数据点进行备注说明.
- **详情查看**: 支持在Chart中显示所选数据点的统计值及Context信息.

### 4. 规则引擎与报警管理

#### 4.1 SPC 规则体系

支持标准化的判异规则及灵活的参数配置.

- **标准规则集**: 支持SPC 9大标准Rule、Western Electric (WE) Rules、Nelson Rule参数模式.
- **规则丰富度**: 支持60种以上SPC Rules.
- **Sigma独立计算**: 上下Sigma分开计算, 上3σ=(UCL-CL)/3, 下3σ=(CL-LCL)/3, 避免非对称管控误判.
- **无代码调参**: 支持无需开发变更即可调整Rule参数.
- **多级版本管理**: 支持按Rule ID、Rule ID+Chart Type、Rule ID+Chart Type+Spec等多粒度维护变更.

#### 4.2 违规处置与通知

支持分级报警、自动化Action及OCAP联动.

- **多级Notify**: 支持客户端消息、SMS、邮件、TTS语音等多种通知方式, 可按Spec+Rule颗粒度配置.
- **自动化Action**: 违规时自动触发Lot Hold、Equipment Hold等命令(通过MES/EAP执行).
- **OCAP联动**: 支持根据Plan/Spec设置OCAP Type ID;违规时自动创建OCAP Process并执行默认Action(如Lot Hold).
- **Recipe/PPID Hold**: 量测OOC/OOS时, 支持Hold Recipe、Hold PPID或Hold机台.
- **Rule Out报警**: 自动触发Alarm并通过SPC/MES客户端提示指定用户.
- **邮件报警**: 违反规则后发送邮件, 收件人与内容可自定义.

#### 4.3 PM 与特殊状态管控

支持设备维护后及特殊运行模式的差异化管控.

- **PM数据隔离**: PM后的点分开进Chart, 不参与原Chart Alarm Rule计算.
- **特殊状态独立管控**: 支持Offline Monitor、MON_PM、MON_DOWN、Pilot Inline Measurement等状态下Lot的单独Control Limit管控(如2σ).

### 5. Chart 配置与管理

#### 5.1 Chart 定义与组织

支持灵活的命名规则、分组管理及批量操作.

- **组合命名规则**: 支持[Module]+[产品]+[工艺路线]+[Plan Name]+EDC项目/Spec ID等自定义组合命名.
- **文件夹分组**: 支持Chart按文件夹分组管理.
- **Context定义**: 支持通过Context信息定义Chart, 指定只收某Context Value数据或包含/排除特定Value.
- **手动建立**: 提供操作界面让用户手动建立Chart.
- **批量导入修改**: 支持工具批量导入新增/修改Chart、控制规格及Rule设置.
- **EDC关联管理**: 支持SPC Chart与MES EDC Spec关联查询, 批量同时新增/修改.

#### 5.2 控制界限管理

支持多种界限设定、动态计算及签核流程.

- **多类界限**: 支持Control Limit / Spec Limit / Alarm Limit / Acceptance Limit的上限、下限及中心线设定.
- **动态计算**: 支持使用选定数据的3σ计算新Control Limit, 筛选条件可为时间范围或数据点个数.
- **批量修改**: 支持批量修改Spec Limit、Control Limit、Alarm Rule.
- **SPACE API签核**: 提供API对接厂内签核系统, 强制要求修改Control Limit/SPC Rule/Corrective Action等必须经过传签流程.

### 6. 数据分析与报表

#### 6.1 统计分析与仪表板

支持多维度的质量指标分析与交互式探索.

- **关键指标计算**: 支持Cp/Cpk等关键性指标实时计算.
- **数字仪表板**: 汇总最近两周OOC/OOS/Cpk Bar Chart, 提供互动下钻(Drill-down)分析.
- **Context比较分析**: 支持根据Context Matching功能进行比较分析.
- **Auto Flag接口**: 支持通过接口对数据Auto Flag, 进Chart但不计入Cpk统计.
- **统计值汇总**: 包含Max, Min, Mean, Median, Range, StdDev, Count, OOC%, OOS%, Discrete Count等.

#### 6.2 报表生成与导出

支持周期性统计报表及标准化格式输出.

- **周期统计报表**: 依照Chart分组, 按日/周/月/季/年创建统计报表.
- **Group Daily导出**: 支持By Group Daily导出All Inline/Offline Chart, 格式为PPT/PDF.
- **标准格式导出**: 支持SPACE自带报表导入PDF, Chart数据导出Excel/CSV.
- **外部系统访问**: 提供连接方式支持外部系统访问SPC Chart和数据点.

### 7. 系统管理与安全

#### 7.1 权限与审计

支持严格的访问控制与操作追溯.

- **权限管控**: 提供完善的用户权限管理体系.
- **历史记录追踪**: 记录Chart设定修改、数据点备注标记等操作历史.
- **书签功能**: 支持将常用Chart和搜索条件存为书签.

#### 7.2 数据查询与检索

支持多条件组合搜索与灵活的结果展示.

- **Context过滤**: 支持By Lot Type、Product、Flow等多种Context过滤.
- **数据点搜索**: 支持按Context值、OOC/OOS、Comment、收集时间点等属性搜索, 可选列表模式或Chart列表模式显示.
- **Chart搜索**: 支持按ChartName、ParameterName、Context值、SPC Rule等属性搜索Chart.
- **实时查询**: 支持实时查询所有SPC Chart的数据信息.

# AMS

## AMS Function List

### 1. 系统设定与基础数据管理

#### 1.1 基础信息维护

支持灵活的数据录入方式与多维度警报分级定义.

- **双模数据维护**: 支持单个手动建立或系统集成导入两种方式维护AMS基础信息(Alarm Code、Tool、用户、部门、警报规则、通知群组、通知模板、警报动作).
- **警报严重等级**: 支持为Alarm Code自定义指定严重等级, 包括Informational、Low、Medium、High、Critical五级分类.
- **自定义描述**: 支持自定义警报代码(Alarm Code)的描述信息, 便于快速识别问题.

#### 1.2 集成与认证

支持与现有企业基础设施无缝对接, 简化身份验证流程.

- **Applied Common Core集成**: 与Applied Common Core服务集成, 统一APG产品的使用者身份验证与授权.
- **Active Directory集成**: 支持AD域集成, 允许使用域用户账号直接登录系统.
- **自定义角色权限**: 支持自定义用户角色及对应的功能访问权限配置.

### 2. 警报监控与查询

#### 2.1 即时警报看板

提供实时可视化的警报态势感知能力.

- **分级统计展示**: 按子系统以不同严重等级展示警报数量统计信息及最近发生的20条警报.
- **自动刷新机制**: 看板数据每10秒钟自动刷新, 刷新频率及显示数量均可配置.

#### 2.2 警报检索与导出

支持多条件组合过滤与数据离线分析.

- **多维过滤条件**: 支持Factory Id, System Id, Tool Module, Tool Model, Tool Id, Alarm Code, Lot Id, Status, Severity, Start Date, End Date等组合查询.
- **状态分类查询**: 可区分查询用户警报、普通警报、忽略警报及无效警报.
- **Excel导出**: 支持将查询结果一键导出为Excel文件, 便于后续分析与归档.

### 3. 警报规则引擎

#### 3.1 规则定义与过滤

支持精细化的警报触发条件配置, 减少误报与噪声.

- **四元组规则模型**: 基于Factory Id、System Id、Tool Filter、Alarm Code Filter四个维度建立警报规则.
- **设备级过滤**: Tool Filter支持指定Tool Module、Tool Model或具体Tool Id.
- **代码级过滤**: Alarm Code Filter支持指定具体Alarm Code或Severity等级.
- **特定条件屏蔽**: 支持屏蔽符合特定条件的警报, 避免无效干扰.
- **设备状态联动屏蔽**: 支持按子系统和设备配置, 当设备处于PM或DOWN等特定状态时, 自动抑制警报通知及触发动作.

#### 3.2 重复与清除管理

支持智能去重与自动化状态同步.

- **重复警报抑制**: 支持管理重复性Alarm, 可配置忽略指定时间间隔内重复上报的相同警报.
- **远程清除指令**: 支持接收外部清除指令, 自动清除之前收到的符合指定条件的警报, 保持看板整洁.

### 4. 通知与升级机制

#### 4.1 多渠道通知

支持邮件、短信及即时通讯工具的多元化告警触达.

- **SMTP邮件通知**: 支持通过SMTP Server发送邮件, 内容支持HTML格式模板.
- **短信平台集成**: 支持中国移动云MAS短信平台、阿里云短信平台等主流短信接口.
- **企业微信集成**: 支持对接企业微信接口, 实现移动端即时推送.
- **自定义模板**: Alarm通知标题和内容均支持自定义模板配置.
- **多群组支持**: 通知接收方支持配置多个通知群组, 满足跨部门协同需求.

#### 4.2 逐级升级报警

支持超时未响应的自动升级机制, 确保关键警报不被遗漏.

- **超时自动升级**: 可设定警报响应超时阈值, 超时后自动升级到下一等级并发送给更高Level的群组.

### 5. 警报处置与联动

#### 5.1 状态流转管理

支持完整的警报生命周期闭环处理.

- **状态变更**: 用户可在AMS Client响应和处理Alarm, 将初始Open状态更改为Closed或Terminated.
- **处理记录**: 所有状态变更操作均有据可查, 支持追溯处理过程.

#### 5.2 MES系统联动

支持与MES深度集成, 实现自动化生产管控动作.

- **Hold Lot**: 触发警报时自动或手动Hold相关批次.
- **Change EQP State**: 触发警报时自动或手动变更设备状态.
- **Hold Reticle/FOUP**: 触发警报时自动或手动Hold光罩或载具, 防止污染扩散.

### 6. 访问控制与安全

#### 6.1 细粒度权限管控

支持按系统与机台维度的数据隔离与操作授权.

- **按系统限定**: 可限制用户仅能查看/处理特定系统(如MES)上报的警报及修改对应范围内的设定.
- **按机台限定**: 可限制用户仅能查看/处理特定机台相关的警报及修改对应范围内的设定.

### 7. 报表与数据运维

#### 7.1 统计分析报表

支持多维度的历史数据分析与绩效评估.

- **多类型报表**: 支持生成警报报表、通知报表及警报动作报表.
- **灵活过滤**: 支持按时间段、系统、机台作为过滤条件生成报表.
- **Excel导出**: 所有报表均支持导出为Excel文件.

#### 7.2 数据生命周期管理

支持自动化数据归档与清理, 保障系统长期稳定运行.

- **自动归档清理**: 可配置过期警报的自动归档和清理策略.
- **定时压缩存储**: 定时自动对过期警报数据进行压缩并存储在AMS服务器, 同时清理DB中的过期数据, 释放数据库空间.

# PMS

## PMS Function List

### 1. 维修保养计划管理 (PM Planning)

#### 1.1 多类型保养策略

支持灵活定义各类预防性维护触发机制, 满足复杂生产环境需求.

- **混合触发模式**: 支持基于时间(Calendar-Based)、基于使用情况(Usage-Based, 如Wafer Count/RFTM)及两者结合的混合类型保养管理.
- **非周期维修**: 支持非周期的Ad-hoc维修管理, 并提供API供外部系统创建维修单.
- **EAP集成触发**: 与EAP整合, 实时接收设备参数值以触发基于使用情况的保养.
- **多重计划优化**: 大PM自动涵盖小PM(如月保替代周保);同参数多PM类型到达大PM Range时, 自动Reset小PM参数并清除对应工单.

#### 1.2 PM模板与规则配置

支持标准化的保养模板管理及精细化的执行规则设定.

- **模板管控**: 支持按Equipment Template或机台ID统一管控维护计划, 具备版本控制功能.
- **Chamber级配置**: 支持按照设备整机或独立Chamber维度配置维护计划.
- **Checklist关联**: 支持选择并一次添加多个已建立的Checklist模板.
- **Trigger参数设置**: 支持设置PM Trigger所需的递增性及替换性参数.
- **Due窗口管理**: 支持设置Early Due、Due、Overdue时间, 并可定义Overdue时是否自动Inhibit机台.
- **命名与排程规则**: 支持自定义PM工单Naming Rule;支持浮动型(基于完成时间)与静态型(固定时间)的下一次PM规划.
- **备件与附件**: 支持定义PM所需部品备件详细信息(料号/描述)及共享附件(SOP/图片).
- **重叠处理**: PM计划重叠时, 支持根据用户设定仅触发高级别保养(如Quarterly覆盖Monthly).
- **签核逻辑**: 提供系统默认签核逻辑(权限群组)管理维修保养模板.

#### 1.3 保养计划排程与预测

支持智能化的排程辅助与强制管控机制.

- **时间预测**: 具备预测维修保养时间的能力.
- **自动排程**: 周期性保养完成后自动安排下一次计划.
- **强制切换状态**: 达到Overdue条件时, 强制切换设备/Chamber可用性.
- **PM预约**: 支持在UI界面预约PM时间, 到时强制切换设备状态.
- **计划导出**: 支持PM计划数据的导出功能.

### 2. PM Checklist 管理

#### 2.1 Checklist 模板配置

支持结构化的检查步骤定义与多媒体内容集成.

- **多维度配置**: 支持By EquipmentTemplate或By EquipmentID配置, 支持系统默认签核逻辑.
- **步骤管理**: 支持添加、删除、修改Checklist Step;步骤分为可选和必选;支持版本控制.
- **内容本地化**: Checklist Step内容支持中文汉字显示.
- **参数采集与卡控**: 支持设置必填/选填参数;支持Spec限制及OOS上下限卡控;未填必填项Complete时报警提醒.
- **附件关联**: 支持为每个Step添加SOP文件或图片等共享附件.
- **复机检查**: 支持设置PM复机时的Checklist检查执行步骤.
- **导入导出**: 支持Export及Load Checklist模板.
- **故障单关联**: UnScheduling Down建立故障单后, 支持手动添加PM Work Request及所需Checklist.

#### 2.2 Mobile Checklist 增强

支持移动端专属的检查表设计与复杂数据录入.

- **Word/Excel嵌套**: 支持加载Word格式模板, 并在其中嵌套Excel定义复杂表格采集及公式Spec卡控.
- **多媒体支持**: 方便地在Mobile Checklist中添加图片;支持移动设备拍照上传.
- **交互增强**: 支持Double Confirm步骤;支持不同字体颜色显示;支持设定每步预计完成时间.
- **警示与标题**: 支持定义Checklist Title、Detail Title及警示语句.
- **知识库集成**: 移动设备端支持知识库查询.

### 3. 维修保养执行 (PM Execution)

#### 3.1 工单生命周期管理

支持完整的PM作业流程控制与状态流转.

- **全流程操作**: 支持开始、重新计划、中止、取消、继续、完成、激活、延迟、Adhoc等操作.
- **状态关联**: 提前设定PM不同Action(开始/暂停/取消/完成/延期)与机台状态的自动关联逻辑.
- **交接登记**: 系统默认的交接登记功能.

#### 3.2 现场执行与数据采集

支持规范化的作业指导与实时数据记录.

- **可视化指引**: 标明Checklist必做/选做项目;显示Step附件及所需采集值;标明是否在Spec范围内.
- **备注信息**: 支持在执行过程中添加备注.
- **自动跳转**: Mobile端Checklist Step完成后自动跳转下一步.
- **关键备件验证**: PM结束时检查关键备件是否更换, 未更换则不允许Complete.
- **Recipe联动**: 支持定义某些Parts更换后自动切换机台Recipe Constraint.

### 4. 备件全生命周期管理 (Parts Management)

#### 4.1 备件入库与领用

支持与ERP集成及精细化的库存准入控制.

- **多渠道领入**: 支持手动填写基本信息领料;提供标准接口从SAP自动领料录入.
- **白名单机制**: 提供白名单定义界面, 标准领料接口校验白名单决定是否入库;支持Key/Non-Key属性自动带入.
- **Part Group管理**: 支持建立Part Group并关联机台, 上机时自动从Group中匹配可用Part.
- **初始化工具**: 提供Part EQP Release功能, 方便一次性初始化机台已挂Part.

#### 4.2 备件使用与循环控制

支持严格的寿命管理与防错卡控.

- **寿命互锁**: 针对Machine设置Parts Life Time Interlock, 超限不可上货并提示原因.
- **循环量管控**: 设置Part最大循环量, 超限自动报警;卸下Part时自动累加使用次数并与Recycle Spec比对.
- **化学液寿命**: WET Chemical Life Time支持By Wafer Counts和By Life Time双重标准, 优先到达者优先卡控.
- **污染等级卡控**: 限制Part只能上到同一Equipment Group的设备, 防止交叉污染.
- **替换卡控**: 配置维保必换Parts List;替换界面颜色显示过期/低水位Part;未换必换件PM无法Complete.
- **使用情况显示**: 替换过程中实时显示当前Parts的使用情况.

#### 4.3 备件状态与维修报废

支持完整的备件状态机管理与异常处理.

- **全状态支持**: 默认支持FREE, INUSE, SCRAP, SWAPPED, WAITREPAIR, REPAIRED, WAITOE, WAITRETURN, OutRepair, Repairing, Cleaning, WaitClean等状态.
- **状态切换方式**: 支持Unscrap回退、Modify按规则切换、To Free强制切换三种方式.
- **维修与报废**: 高权限用户可执行维修(转Repaired)或报废(转Scrap)操作.
- **OE处理**: 支持Wait OE状态的Part经OE部门处理后切换至Repaired或Scrap.
- **错误删除**: 高权限用户可删除刚领入未使用的Free Part.

#### 4.4 备件查询与追溯

支持多维度的库存查询与历史追踪.

- **唯一标识跟踪**: Parts领入生成唯一识别号, 在线仓内全程唯一性跟踪.
- **综合查询**: 支持按PartNo/SeriesNo/VendorSN/Module/Status/Location查询数量及详情.
- **详细信息展示**: 展示包括VendorSN、ReadingSpec、RFTIME、CycleLimit、CostCenter、Authentication等完整属性.
- **历史导出**: 支持按PartNo/SN/EQID/UserID/Activity/ReadingType/时间范围查询History并Export;支持一键全选Activity和Reading Type.
- **条码支持**: 支持KeyIn/Barcode录入, 具备合法性验证及唯一识别编码管理.

### 5. 监控、通知与报表

#### 5.1 AMS系统集成报警

支持与Alarm系统深度联动, 实现主动式运维监控.

- **PM时机报警**: 整合AMS, 在Early/Due/OverDue时间点自动发送报警.
- **执行异常报警**: PM完成时间超过预估时间、周期性Schedule手动修改时发送报警.
- **完成通知**: PM做完后通过Alarm系统通知用户.
- **备件监控**: 定时监控Part Lifetime, 逾期自动报警;后台定期扫描安全库存, 低于阈值自动报警.
- **Early预警领料**: Early预警时列出所需Parts, 工程师勾选后自动生成领料单.
- **过滤机制**: 支持通过Reason Code、Shop、机台、PM重要级别过滤通知.

#### 5.2 报表与数据分析

支持全面的维保数据统计与可视化展示.

- **DB Schema支持**: 提供DB Schema支持客户端报表系统开发.
- **PM列表报表**: 包含Scheduled/Unscheduled PM List及具体信息(Due Date/Meter/Module/EQP ID).
- **参数趋势图**: 机台保养记录中单个参数可生成Chart;支持机台参数值历史记录查询.
- **执行记录**: 提供机台PM执行记录查询, 同部门员工均可查看.
- **Gantt图显示**: 图例化(Gantt)显示PM计划.
- **清单导出**: 支持Export维修保养清单列表.

### 6. 系统集成与基础支撑

#### 6.1 MES深度整合

支持与MES系统的数据同源与权限统一.

- **基础数据同步**: 机台Module、原因代码、机台Template与MES深入整合, 仅需定义一次.
- **权限统一**: 权限管理模块与MES整合, 减少重复定义.
- **状态同步**: 机台状态及状态转换与MES深入整合.

#### 6.2 标准化接口与工具

支持开放的系统集成能力与便捷的数据初始化.

- **标准API**: 提供领料、退料、Part领料上限控制、Part状态切换、Part延期、创建异常单Work Request等标准接口.
- **R2R集成**: PM Complete时将特定机台类型结束信息发送给R2R系统.
- **签核接口**: 提供PM延期及Checklist签核的标准接口供客户签核系统调用.
- **Loader工具集**: 提供机台数据、状态转换、用户权限组、机台Template、原因代码(及分组)、Mobile/标准Checklist的默认录入工具.

#### 6.3 移动端与权限

支持移动化作业与精细化的运行时权限控制.

- **移动应用**: 支持平板/手机等移动设备;支持拍照上传及知识库.
- **Runtime权限**: 提供用户Runtime权限管理机制.
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

## RTD Function List

### 1. 平台架构与性能要求

#### 1.1 系统架构与高可用性

支持分布式部署与高可用设计, 满足大规模晶圆厂生产需求.

- **分布式并行处理**: 支持多台Server并行处理MES派工请求, 具备负载均衡能力, 避免单点过载.
- **弹性扩展**: 系统负载较重时, 支持通过增加Server节点横向扩展RTD处理能力.
- **故障隔离**: 单台RTD Server异常不影响其他Server运行, 确保生产连续性.
- **高可用指标**: 系统Uptime需达到99.99%以上, 支持20K/Month产能规模.
- **Cross-Fab支持**: 支持跨厂区派工, 单一Rule可整合多个MES的Lot与机台信息.
- **POC验证**: 需在国内12寸Fab厂(月产能≥10K)有稳定运行一年以上并验收的成功案例.

#### 1.2 数据存储与同步

采用独立Repository机制, 保障MES数据库安全与数据实时性.

- **内建Repository**: 内置独立高速Repository支持Rule运行, 无需额外商用数据库, 不直接读取MES DB.
- **实时数据同步**: 通过Oracle Trigger等方式从MES/第三方系统实时更新数据, 延迟控制在秒级(<1s).
- **历史追溯**: Repository具备历史数据追溯能力, 内置Event Maker可查看数据生命周期内的变化.
- **事务一致性**: 支持事务处理保证数据一致性, 具备完善的异常处理机制.

#### 1.3 版本管理与升级

支持在线热更新与快速回滚, 保障生产零中断.

- **版本控制**: 支持完整的版本控制功能.
- **Online升级**: 支持系统在线升级, 不影响正常生产.
- **快速RollBack**: 支持快速回滚至上一版本, 应对升级异常.

### 2. 派工规则开发与管理

#### 2.1 可视化开发工具

提供低代码/无代码开发环境, 降低Rule开发门槛.

- **Block拖拽开发**: 提供Formatter工具, 通过Block拖拽方式开发Rule, 无需掌握编程语言或SQL.
- **流程引擎**: 基于流程引擎开发Rule, 支持调试、模拟及自定义组件开发.
- **详细日志**: 开发工具提供详细的Log记录及系统异常报警机制.
- **管理界面**: 配套友好的UI界面, 支持启用/禁用、顺序调整、参数设置及数据集成展示.

#### 2.2 规则执行与监控

保障Rule高效执行与全链路可追溯.

- **高性能计算**: 单独RTD Rule运行速度通常在10秒以内.
- **全链路日志**: 每次Query均有Log记录, 包含MES传入参数及RTD回传参数.
- **健康监控**: 提供丰富的状态监控指令, 支持编写健康监控脚本;提供实时监控工具, 异常时实时通知并支持自动切换.
- **外部数据集成**: 支持通过文件(Flat/CSV)或DB直接读取Scheduling、Planning、Reporting等外部系统信息.
- **报表输出**: 支持CSV、饼图、折线图、柱状图、甘特图等多种格式, 支持用户自主开发报表.

### 3. 通用派工策略 (Common Rules)

#### 3.1 优先级与排序逻辑

支持多维度的Lot优先级计算与精细化排序.

- **多级优先级标记**: 每个Lot具备所有Sorting优先级标记, 最终根据用户设定的权重排序.
- **高等级Lot优先**: 支持Bullet Lot/Hot Lot识别与优先派工;支持By LoadPort或整机预约, 避免等待.
- **Q-Time管控**:
    - **Auto Speedup**: 根据Remain Q-time或Remain Q-time/Remain CT比值自动提升优先级.
    - **Auto Control**: 计算Q-time区间内各站点WIP Limit, 在入口站管控派货数量, 防止Over Q-time.
    - **Manual Override**: 支持手动设定Speedup阈值与WIP Limit, 优先级高于Auto策略.
- **Critical Ratio**: 基于历史数据或用户提供数据计算出货紧急程度(CR), 按CR派工.
- **Target达成率**: 支持Daily Stage Target/Product Stage Target, 按完成Ratio排序, 低完成率优先.
- **Rework/Run Card优先**: 支持Rework Lot与Run Card Lot优先派工.
- **MES Priority**: 支持直接依据MES Priority进行派工.
- **NPW库存联动**: NPW可用量低于安全存量时自动提升派工等级.
- **Schedule Monitor**: 优先考虑快要到期的Schedule Monitor Lot.
- **Merge优先**: Inline分批Lot若有Future Merge站且部分已到站, 未到站Lot优先.

#### 3.2 机台选择与Load Balancing

支持智能机台分配与产线平衡优化.

- **Line Balance**: 基于Bottleneck机台群组设定, WIP少时从上游拉货, 堆货时停止派货.
- **机台偏好设置**: 支持指定特定Product/Station下的优先机台、最低优先级机台、禁止派工机台及限定派工机台.
- **Recipe分组**: 支持机台群组内按Recipe类型分组优先派工.
- **Chamber Idle优先**: 优先选择Idle时间最长的Chamber或未来最先Idle的机台.
- **传送效率**: 优先选择传送距离短或传送时间少的Lot.
- **PM避让**: 考虑机台PM计划, 避免派货影响PM执行.
- **最小片数限制**: 支持设定机器最小派工片数, 低于限制则Block;NPW清洗机等特定场景支持暂Block小片数等待Merge.
- **FIFO**: 支持先进先出基础规则.

#### 3.3 约束检查与状态联动

确保派工决策符合物理与业务约束.

- **全面约束检查**: 派工前检查Lot属性、机台状态、MES Normal Constraint、Recipe状态、PPID状态.
- **MES Constraint预过滤**: MES传参时标记或过滤已有Constraint的Lot, 避免RTD二次检查浪费资源.
- **Downstream保护**: Downstream不可用时将Lot停在安全站点, 避免Q-time Overdue.
- **Mark Lot屏蔽**: 被Mark的Lot不参与派工.
- **Reserve Queue**: 支持手动加入Reserve Queue, Queue内Lot优先派工.
- **Season/Dummy搭配**: 支持特定LotType(如Season)不单独派工, 仅在生产需要时伴随派工.
- **Scan/Sampling**: 支持自定义规则判定Lot是否进入YE站点.
- **结果反馈**: 回传MES时显示可派Lot的Sorting信息及不可派Lot的Reason.
- **功能开关**: 所有用户设定功能均具备独立开关.

#### 3.4 Where Next 策略

优化Lot下一站目的地选择与搬送效率.

- **存储位置优先级**: 优先选择下一机台Dedicate OHB > Bay OHB > Default Stocker.
- **无设备时的暂存**: 当前无可用下一站设备时, 优先存放在当前机台对应存储区, 其次按Dedicate/Bay/Default顺序选择.
- **空载具回送**: 支持空FOUP/FOSB搬送至专用Stocker, 支持不同楼层/区域差异化配置.

### 4. 设备专属派工规则 (Local Rules)

#### 4.1 Litho (光刻) 派工

针对光刻机台特性优化Reticle管理与Setup效率.

- **Reticle连续性**: 优先派工连续使用同一光罩的Lot, 减少Reticle搬送Cost.
- **Reticle寿命管控**: 检查Startlight/Printdown Inspection/Wafer Count/Use Time, 超限不使用该Reticle且不派对应Lot.
- **温控Setup Cost**: 识别机台升降温状态, 优先减少升降温切换.
- **小片数避让**: 避免连续派小片数Lot造成产能损失.
- **Loading Balance**: 综合考虑WIP、状态、Constraint等因素平衡Litho群组负载.
- **Reticle预准备**: 提前提供未来Reticle列表, 触发提前搬送.
- **APC R2R联动**: 检查Litho APC R2R状况.
- **垂直机限**: 遵守Layer间同机台限定规则.
- **Chuck顺序**: 考虑Chuck顺序进行排货.
- **Domapath异常处理**: Domapath设置失败时Hold Lot等待工程师处理.

#### 4.2 Furnace/Wet (炉管/湿法) 派工

针对Batch机台特性优化组批与Q-time管控.

- **Pre-form Batch**: WET-DIFF间提前组批, 考虑Process Time与Q-time Limit, 避免过早进入Q-time Loop.
- **连续派货**: 同Batch内Lot连续派货, 避免进入Diffusion时间间隔过长.
- **Batch Size管控**: 检查Form Batch最大最小片数限制.
- **Batch优先级**: 综合考虑Batch内Lot优先级、Batch Size、等待时间, 权重可调.
- **双Diff联动**: 针对Wet-Diff-Diff连续流, 评估第二站Diff Q-time风险, 必要时暂缓第一站及WET开始时间.
- **Idle等待策略**: 支持设定Furnace快Idle时是继续等待Production Lot还是先Form Batch上机.
- **Zone Inhibit/Loading Effect**: Form Batch时考虑Zone抑制与装载效应.
- **Manual Form Batch**: 支持用户手动组批结果优先.
- **Layout Recipe优化**: 在MES Layout Recipe允许范围内尽量最大化Batch片数.
- **GOI/FML支持**: 支持GOI Lot自动派工及Furnace单跑FML测机.
- **非Q-time组批**: 即使无Q-time也综合考虑优先级、Size、等待时间进行组批.

#### 4.3 Multi-Chamber / Etch / CMP / Implanter 派工

针对单片及特殊机台优化Setup与腔体利用率.

- **Chamber Idle优先**: 优先选择先Idle的Chamber派货.
- **多Chamber程序优先**: 优先选择占用较多Chamber的程序.
- **Season/Dummy预留**: 需搭Season/Dummy时预留足够Load, CDW与Product一起预约.
- **Recipe Grouping**: 同Group Lot优先, 减少频繁Change Layer做Season.
- **APC R2R联动**: Dry Etch/CMP派工时检查APC R2R Block状态.
- **Implanter Setup Cost**: 考虑Source/Energy/Gas切换成本, 优先最小Setup Cost.
- **Implanter Train Limit**: 同Setup连续跑Wafer数超限后切换Setup.
- **CMP Pad Life**: 检查Pad Lift Time选择可用PPID.
- **CMP小片数避让**: 根据配置避免连续派小片数Lot.

#### 4.4 Measurement / Sorter 派工

针对量测与分拣机台优化采样与Job管理.

- **Wafer Mark优先**: WIP超过Wafer Mark时Product Lot优先.
- **同机台限定**: 遵守Pre/Post Measurement同机台规则.
- **Monitor Lot优先**: PM/Downtime后的Monitor Lot优先, 加速机台恢复.
- **指定机台优先**: 支持指定某些量测机台Product Lot优先.
- **Sorter Job Prep**: 同Job内Lot一起JobPrep.
- **Sorter多源排序**: 同时考虑Source/Target Lot及Carrier状况.

### 5. 项目实施与服务保障

#### 5.1 测试与验收标准

严格的测试流程与明确的验收指标.

- **全流程测试**: 上线前必须通过硬件性能、子模块功能、集成测试、系统测试, 并提供完整文档.
- **验收标准**: 各项指标达标, 完成RFQ及补充内容, 技术转移与培训完成并获认可.
- **需求变更**: 验收前用户提出的合理新需求, 厂商应无条件满足.
- **解释权**: 所有需求以用户最终解释为准, 差异项通过SRS澄清.

#### 5.2 培训与知识转移

确保用户具备自主二次开发与运维能力.

- **全程参与**: 用户与IT全程参与评估、设计、开发、测试、培训、部署.
- **培训课时**: 代码开发≥10天, 系统业务逻辑≥15天, Trouble Shooting≥3天.
- **教材提供**: 提供全部功能清单、说明文档、开发设计文件及电子教材.
- **二次开发支持**: 提供二次开发所需全部环境、技术及工具服务.
- **入门课程**: 按用户要求频繁进行入门培训.

#### 5.3 维保与技术支持

提供驻厂服务与严格的SLA保障.

- **1年驻厂维保**: 验收日起1年驻厂服务, 协助处理问题与技术难题.
- **专家支持**: 驻厂无法解决的问题, 24小时内安排资深专家入厂.
- **免费升级**: 项目及维保期间提供不受限免费的软件升级、迁移与Bug Fix.
- **SLA响应**: 紧急Case≤2h(或有效替代方案), 次紧急≤4h, 一般≤8h.
- **接口费用**: RTD与第三方系统集成接口开发费用由RTD厂商承担.
- **Issue报告**: 线上重大Issue需提交格式化书面记录(5W1H或8D报告).

#### 5.4 知识产权

明确客制化成果归属.

- **IP归属**: 所有客制化系统/代码知识产权属于用户公司, 受法律保护.
- **保密义务**: 未经许可, 厂商不得在其他公司Release或讨论客制化代码/解决方案.

# AMA

## AMA Function List

### 1. 全自动化基础架构与触发机制

#### 1.1 自动化范围与目标

支持OHT设备Run货全自动化, 遵循SOP及时供料以最大化设备产能.

- **OHT全自动化支持**: 全面支持OHT设备的Run货自动化流程.
- **SOP合规执行**: 严格依照设备特性与Run货SOP, 将货物及时送达设备LoadPort.
- **产能利用率优化**: 通过精确控制派工选货与时机, 确保设备LoadPort持续有料可跑.

#### 1.2 触发机制

支持多种触发方式, 确保派工响应的实时性与准确性.

- **定时触发**: 支持基于时间周期的周期性派工触发.
- **事件触发**: 支持LoadPort状态变化、机台状态变化等实时事件触发派工.

### 2. 单一设备Run货全自动化场景

#### 2.1 固定缓冲区 (Fixed Buffer) 设备

针对Fixed Buffer设备的多样化派货场景支持.

- **单Lot派工**: 支持单个Production Lot或Monitor Lot的自动派工.
- **多Lot合批**: 支持一个FOUP内包含多个Production/Monitor Lots的Batch派工.
- **Season搭配**: 支持"1个Production Lot + 1个Season Lot"的组合派工.
- **空FOUP搭配**: 支持"1个Production Lot + 1个空FOUP"的派工(如Back Side Clean设备左进右出场景).
- **Dummy预留**: 支持Auto Reserve Etch Inside/Outside Dummy Lot.
- **Monitor搭配**: 支持"1个Monitor Lot + 1个Season Lot"的组合派工.
- **Zero Idle CMP**: MES触发CMP Season条件时, 自动同时派工Production与Season Lot, 货到齐后Season先Run以实现Zero Idle.
- **Season优先逻辑**: Production+Season组合中, 无论谁先到达, 均遵循Season Lot先Run货原则.

#### 2.2 内部缓冲区 (Internal Buffer/NTB) 设备

针对含NTB及Internal Buffer设备的特殊派工逻辑.

- **多Lot Batch**: 支持Batch of Multiple Lots自动派工.
- **Furnace Batch**: 支持Furnace Batch with Furnace Monitor Lot及纯Furnace Monitor Lot派工.
- **Furnace Dummy**: 支持Furnace Dummy Lots的自动补充与派工.
- **NTB设备支持**: 支持Tools with NTB (Foup Exchanger) 的自动化派工.
- **Form Batch**: 遵循MES机制自动Form Batch并派货;Furnace Form Batch自动组合Production与Monitor Lot.
- **Dummy自动补充**: Furnace Dummy不足时, 自动选择可用Dummy Lot派工至机台.

#### 2.3 专用自动化设备

支持Sorter、FOUP Clean及Inspection设备的专项自动化.

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

#### 3.1 跨站点Run货全自动化

支持复杂的跨工序联动与资源准备.

- **Auto Batch Run**: 支持带Furnace Monitor的自动Batch Run.
- **Season/Monitor/Dummy准备**: 支持Etch/Furnace Dummy Lots的自动Prepare与Reserve;支持Season/Monitor Lot的Auto Split for Inuse.
- **资源复用循环**: 支持Monitor/Season/Dummy的Reuse与Recycle自动化.
- **Eqp Monitor**: 支持带或不带Season的Eqp Monitor自动化;支持单机台多Monitor Lot Carpool.
- **Pre-send策略**: 支持基于Watermark或Pending Process Wafer Qty的预发送.

#### 3.2 Dummy与Season自动控制

精细化管控辅助资源的补充与回收.

- **Etch Dummy控制**: Inside Dummy不足时自动补料到LoadPort;DummyPort为空时自动补料;达到MaxUsedCount时自动Dummy Out.
- **Bonding派工**: Pixel与Logic片数不一致时, RTD选择Pixel<Logic组合, Full Auto对Logic做逻辑分批, 多余片数Sorter传出, 片数一致后再Bonding.
- **Season执行**: 单LoadPort可用时, 允许一Lot在Port、一Lot预送OHB;支持自动准备Pilot.

#### 3.3 NPW库存与生命周期管理

实现NPW从入库、使用到回收的全流程自动化.

- **水位管理**: 自动计算NPW Product Wafer数量, 低于水位时自动下新NPW或Downgrade补充.
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

#### 4.1 Pre-Send与Recovery准备

优化短/长Process时间设备的供料节奏及恢复效率.

- **短Process设备**: 根据预定义水位预先搬送至设备附近OHB.
- **长Process设备**: 根据未加工Wafer数量及水位进行派工控制.
- **Tool Recovery准备**: PMS指定Recovery Package或MES设为WaitPrepare时, 自动提前做Monitor分批.

#### 4.2 Pilot自动准备与Lot下线

支持AMAT R2R集成及自动下线流程.

- **Pilot自动准备**: 集成AMAT R2R/RTD/MES, 当产品触碰Pilot条件时自动分批, 分出后按WhatNext自动派工.
- **Production Lot下线**: MES创建Lot后, 自动从FOSB选Wafer下线并执行Sorter.
- **NPW Lot下线**: NPW水位不足时自动创建Lot, 从FOSB选Wafer下线并执行Sorter.

#### 4.3 异常处理

保障自动化流程的健壮性.

- **Group Cancel**: JobPrep后长时间(可配置)Lot未到达, 系统自动Cancel JobPrep.

### 5. 系统性能与高可靠性

#### 5.1 负载均衡与容错

确保派工系统的高可用性与稳定性.

- **负载均衡**: 多台Server运行时自动Load Balance, 避免单点过载.
- **故障转移**: 单Server异常时, 其他Server自动接管后续派工任务, 不影响生产.

### 6. APF 全自动派工组件 (Activity Manager for Automation)

#### 6.1 事件驱动与实时监控

基于事件监听实现毫秒级自动化响应.

- **Repository Event监听**: 实时监控机台、LoadPort、Lot信息变化, 状态变更时实时呼叫MES/RTD获取派工列表.
- **组件Event支持**: 支持APF Component Event监听及内部自定义Event收发, 灵活构建实时Workflow.
- **Watch Dog/Schedule**: 除Event外, 支持Watch Dog与定时Schedule触发Workflow.

#### 6.2 分布式架构与集成能力

支持高并发处理与多系统无缝对接.

- **分布式设计**: 多Server并行处理自动派工请求, 支持Load Balance.
- **Web Service**: 支持通用Web Service接口, 实现外部系统触发AMA Workflow及AMA调用外部系统.
- **Tibco RV**: 支持通过Tibco RV调用外部系统接口.
- **RTD整合**: 直接整合APF RTD Dispatch功能, 简单调用即可运行Rule与Report.

#### 6.3 可视化开发与工具链

提供低代码开发环境与丰富的数据处理能力.

- **可视化开发**: 提供AMA/AMR Block拖拽工具, 快速撰写派工Workflow, 支持执行历史查询.
- **数据库操作**: 支持Oracle Raw SQL执行与Procedure调用, 实现数据增删改查.
- **资源互斥锁**: 支持内部资源Claim/Release, 避免逻辑Race Condition.
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

## YMS Function List

### 1. 平台基础与模板管理

#### 1.1 主页与个性化

支持高度自定义的工作台, 提升用户访问效率.

- **模板展示与切换**: 主页集中展示所有分析模版, 支持便捷切换查看.
- **默认主页设置**: 可选择特定模板作为主页默认展示内容, 支持自定义布局.
- **收藏夹管理**: 支持将模板收藏至个人收藏夹, 并可自定义修改与开发.
- **草稿箱机制**: 新增模板自动保存至Drafts, 防止开发工作遗失.
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

- **历史版本管理**: 支持查看每个模板最近10次保存记录(含修改人及时间).
- **路径与搜索**: 支持模板路径查看与全局搜索.
- **打开模式设置**: 可配置模板打开时的默认模式(查看/编辑).
- **数据表管理**: 支持显示数据表信息、设置默认表、建立表关系.
- **列属性配置**: 支持修改数据类型、列名称, 以及按数据类型、自然字符串或自定义规则排序.

### 2. 数据处理与ETL引擎

#### 2.1 数据接入与查询

支持多源异构数据的统一接入与灵活查询.

- **多数据库支持**: 兼容Oracle、MS SQL、PostgreSQL、DB2、Greenplum等主流数据库.
- **SQL直连查询**: 提供SQL指令直接获取数据库数据的能力.
- **免编程查询工具**: 提供拖拉式查询接口生成工具, 无需编码即可复用.
- **自定义查询条件**: 支持产品、批号、站点、机台、日期等多维度条件组合, 支持通配符(%, \*).
- **结果缓存与再利用**: 查询结果可存储、过滤、排序及输出, 支持接续下一步分析.
- **Grid交互**: 支持在Grid中过滤数据、格式化显示、调整字段顺序与样式.

#### 2.2 数据清洗与转换

提供丰富的数据处理函数与算子.

- **表达式与函数**: 支持常用数据函数, 保留最近20个表达式, 提供预览与提示功能.
- **多类型数据支持**: 涵盖Lot、Wafer History、WIP、WAT、CP、Metrology(EDC)、Chamber、Event、Defect、FDC、FT、PMS、Equip等文本、数值及图片数据.
- **数据分组**: 支持特定间隔、平均间隔、固定大小、唯一值分布、标准差等多种分组模式;支持多列去重分组(最多5列).
- **数据合并与关联**: 支持去重合并、直接合并、左/右/内/外关联;支持获取差集、排除指定列、标识数据源.
- **格式化与替换**: 支持空值替换、数据类型转换、列名修改及自定义排序.
- **表关系高亮**: 支持通过设置表关系实现多表联动高亮.

#### 2.3 流程自动化与调度

支持分析流程的编排、定时执行与异常处理.

- **Flow可视化编排**: 提供节点化Flow编辑界面, 支持运行、报错提示及导入导出.
- **Workflow节点库**: 内置数据查询、过滤、汇总、图表绘制、统计分析、报表、Wafer Map等节点.
- **定时调度(Scheduler)**: 支持定时执行分析流程, 结果存储至指定路径或发送邮件.
- **流程持久化**: 支持按用户存储分析流程并重复执行.
- **Loop运算**: 提供流程循环运算功能.
- **二次开发接口**: 提供Chart/Grid/Data Cache/Map Handler等接口, 支持客户扩展.
- **高可用设计**: 包含系统异常处理及故障恢复功能.
- **脚本集成**: 支持Python/R脚本编写, 可在自助分析及Flow中调用交互.

### 3. 数据可视化模块

#### 3.1 通用图表 (General Chart)

提供全面的统计图表库与定制化能力.

- **丰富图表类型**: 支持垂直/交叉表、折线、散点、饼图、雷达、箱线、热力、3D散点、密度、直方、柏拉图、曲面、CDF、等值线、矩形树图、甘特、组合、平行坐标、散点矩阵、桑基、瀑布、云状图等.
- **深度定制**: 支持外观、字体、轴、颜色、标签、工具提示、图例、格栅、辅助线、规格线(Spec Line)、超链接等配置.
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

- **Map展示模式**: 支持Single/Gallery/Stack Map、Contour/3D Contour、Vector Map、Parametric Map、Bubble Map、MAP切面Trend、CP Map & Reticle Layout等.
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

- **Defect Map**: 支持Die Grid显示、Color By Class、Stack Map/Gallery、Reticle Map、Zone Map.
- **Image Gallery**: 支持FTP/S3/NAS/HTTP路径图片加载;支持JPG/PNG格式;支持亮度对比度调整、平铺、缩放旋转.
- **联动交互**: 框选Defect联动Image Gallery;支持Image Marker;支持多种框选方式;支持调整Defect Size/Shape;联动查看明细.

#### 3.4 交互与编辑增强

提升分析过程的流畅度与探索性.

- **联动与高亮**: 支持跨图表标记联动、数据源异同的高亮联动;支持分组标签调用.
- **辅助线系**: 支持水平/垂直/拟合线(线性/对数/指数/多项式/逻辑回归/乘方/高斯/样条/平滑).
- **跳转与钻取**: 支持页面跳转、第三方系统跳转、传参模板自定义;支持图表下钻.
- **便捷操作**: 右键切换图表类型、拖拽布局、跨页拖动、复制粘贴、轴选择器切换、表达式过滤、反选、注释.
- **导出**: 支持自定义组合导出图表页面及数据文件.
- **文本组件**: 支持背景图、计算值、链接、输入控件、筛选器、页面/节点操作按钮.
- **Tab组件**: 支持多层嵌套、内部排布设置、参数联动.

### 4. 统计分析模块

#### 4.1 基础与高级统计

内置完整的统计学算法库.

- **假设检验**: 单/双样本T检验、配对T检验、ANOVA(单/双因素)、卡方检验、K-W检验、Mann-Whitney U、Wilcoxon符号秩、Kolmogorov-Smirnov检验、正态性检验.
- **回归与相关**: 线性回归、Spearman相关、偏最小二乘回归(PLS)、通用参数敏感性分析.
- **多元分析**: 主成分分析(PCA)、K均值聚类、层次聚类、平均算法聚类、随机森林、决策树.
- **描述性统计**: 基础/高级描述性统计、数据透视、列连表分析、样本量估计.
- **制程分析**: 过程能力分析、共性分析、根因分析、制程参数最佳解、特征标准化.

#### 4.2 SPC与半导体专项分析

针对半导体制造场景的深度分析工具.

- **SPC管制图**: 支持Xbar-R/S, X-MR, Xbar-Uniformity, EWMA, CuSum, P/nP/C/U Chart;支持八大判异规则及国际标准Rule;支持Offline SPC批次模拟.
- **CPK计算**: 支持By Parameter计算CP/CPK/PPK;支持过滤后计算;支持Control Limit自定义.
- **关联性分析**: WAT & Inline/Bin/Parameter Correlation;Inline Impact WAT/Bin/Parameter;Defect Impact Inline;Inline & Defect & FDC Indicator Correlation.
- **Common Tool分析**: 支持EQP/Chamber/Recipe/Foup/Slot等维度分析.
- **G/B Wafer分析**: 支持自定义Group分析.
- **性能指标**: 保证1000片Wafer叠图在5分钟内显示.

### 5. 报表与分发模块

#### 5.1 报表生成与管理

支持多格式、结构化的报告产出.

- **全生命周期管理**: 支持添加、删除、重命名、编辑、分享、查看报表.
- **内容定制**: 支持更改列名/顺序、动态详细数据显示、组件注释/标签.
- **多格式输出**: HTML, Excel(2003/2007), CSV, PPT(2003/2007), Open-Office, PDF, 图片.
- **Excel增强**: 支持表格合并、图表/Map混合排版、Index Sheet自动生成与链接.
- **PPT增强**: 支持多章节格式、单页多图合并(X/Y轴定义)、自定义分页逻辑.

#### 5.2 自动分发与订阅

实现报告的无人值守推送.

- **多渠道发送**: 邮件(支持HTML正文)、FTP服务器、NAS挂载盘.
- **触发机制**: 支持自定义周期发送、条件触发发送.
- **动态内容**: 支持邮件正文动态指标、告警规则联动.
- **模板管理**: 支持PPT模板增删改、Report Output Type配置.

### 6. 系统运维与其他

#### 6.1 系统配置与维护

提供完善的后台管理能力.

- **数据源管理**: 支持新增、修改、删除多种数据库连接.
- **服务配置**: FTP服务器(多节点)、邮件服务器、系统默认参数.
- **底图与Zone**: 支持自定义产品底图、Zone、Recticle;支持By ProductType设置Bin颜色.
- **恢复机制**: 展示被删除Flow列表并支持恢复.
- **帮助与反馈**: 内置帮助手册与用户问题反馈界面.

#### 6.2 监控与审计

保障系统稳定运行与合规使用.

- **资源监控**: 查看服务器CPU、Memory、线程数及状态.
- **日志诊断**: 查看日志与报错定位.
- **在线监控**: 监控系统在线人员及资源使用情况.
- **使用统计**: 提供模板使用情况的可视化统计.
- **兼容性**: User端支持Windows 7/8/10/11;支持简体中文/英语多语言.

# DMS

## DMS Function List

### 1. 系统架构与基础支撑

#### 1.1 架构设计与高可用

- **国产化数据库支持**：支持 Oracle、OpenGauss、StarRocks 等多种数据库, 满足国产化适配需求.
- **微服务架构**：采用微服务架构设计, 实现自动负载均衡与资源统一编排, 部署便捷.
- **分布式高可用**：所有组件及服务实例均支持分布式高可用方案, 消除单点故障.
- **弹性扩展能力**：DMS(数据管理服务)与 Loader 均采用分布式架构, 可随产能增长灵活扩展.

#### 1.2 系统运维与安全

- **数据安全与备份**：提供底层数据库安全架构、数据备份策略, 以及数据处理异常报警与恢复机制.
- **权限管理**：提供用户登录认证及分组授权功能, 支持细粒度的权限管控.
- **集群监控**：提供服务器及集群的实时监控与管理系统.
- **在线发布**：支持系统功能的在线热发布, 减少停机维护时间.
- **日志审计**：记录数据处理的全链路详细日志, 便于问题追溯.
- **机台配置管理**：支持通过配置方式动态添加或减少检测机台.
- **Klarf 解析模板**：提供基于不同机型、不同版本 Klarf 文件的读取模板及源代码.

### 2. 数据接入与解析

#### 2.1 Klarf 数据解析

- **多版本兼容**：支持 Klarf 1.1 至 1.8 全版本数据格式解析.
- **高性能解析**：支持每分钟解析入库 100+ 个 Klarf 文件(单文件约 2000 个 defect).
- **大文件处理**：大文件解析采用异步机制, 不阻塞正常 Klarf 文件的解析流程.
- **原始数据查看**：支持显示 Klarf 原始数据内容, 并提供导出功能.
- **手动上传**：支持用户手动上传 Klarf 文件(含自定义格式文件).
- **上传监控**：提供 Klarf 文件上传状态的实时监控工具.

#### 2.2 图像数据管理

- **多格式支持**：支持 TIFF 及其他常见照片格式的载入与解析.
- **照片导出**：支持将 Review 机台拍摄的缺陷照片批量导出到本地电脑.
- **外部系统对接**：支持与公司现有数据系统对接, 实现数据自动同步.

### 3. 查询与检索功能

#### 3.1 多维度组合查询

- **自定义条件**：支持 Product、Equipment、Layer、Recipe、Lot、Wafer、测试时间、数据载入时间等多条件组合查询.
- **模糊查询**：支持使用通配符进行模糊匹配.
- **SQL 查询**：支持直接使用 SQL 语句进行高级查询.
- **时间模式**：支持相对时间与绝对时间两种查询模式.
- **关联查询**：支持关联 WIP(在制品)与 CP(晶圆测试)数据进行综合分析.
- **直接读取**：支持直接读取本地 Klarf 档案进行查询分析.

#### 3.2 查询结果交互

- **数据导出**：查询结果支持导出为 Excel, 且包含 Map 数据.
- **Map 预览**：支持在查询界面直接预览 Wafer Map.
- **Map 标记筛选**：支持在查询结果的 Map 上进行数据标记及二次筛选.
- **历史记录**：支持保存查询记录, 下次可通过历史记录快速复用.
- **显示模式切换**：支持下拉框模式与 List 列表模式切换;支持列表与行列定义等多种显示模式.
- **结果过滤**:
    - 一键过滤：Classified、Unclassified、HasCluster、HasRepeater、HasImage.
    - 统计过滤：对 Class、Defect Count、Defective Dies 等统计结果进行精确过滤.
    - 最终结果：支持设置仅呈现最终检测结果.

### 4. Wafer Map 分析

#### 4.1 Map 显示与交互

- **缺陷标记**：支持显示/隐藏 Defect 照片标记、Cluster、Repeater、Adder 标记;支持快速 Mark 带 Image 或 Cluster 的 Defect.
- **显示控制**:
    - 支持修改 Defect 显示大小与形状.
    - 支持显示/隐藏 Reticle、Zone、Die Text、Die Border.
    - 支持 Map 缩放与 Overview 功能.
    - 支持查看/隐藏 Image.
    - 支持 Defect Display Mode 切换(All/Classified Only/Cluster Only/Images Only).
- **框选操作**：支持矩形、圆形、异形、Die 模式框选.
- **测量工具**：支持在 Map 上进行长度及夹角测量.
- **外观自定义**：支持用户自定义 Map 显示外观、标题格式及动态切换标题.
- **Set up 定制**：支持 Map Properties Customization, 调整显示细项条件.

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
- **统计渲染**：支持按 Die/Reticle 统计 Defect Count、Density、Percent, 并根据数值大小渲染颜色(色阶可调).
- **等值线图**：支持显示 Map 等值线图, 色阶可自定义.
- **Kill Ratio 分析**：支持计算 Defect 导致芯片失效的概率(Hit Rate).
- **Zone/Edge 分析**：支持自定义 Zone、Edge 进行区域统计分析.
- **联动分析**:
    - Map 关联 Summary Table 联动.
    - Interactive with Data Set / Statistic Chart.
    - Defect 链接到对应图像.
- **Repeat Defect**：支持查看重复缺陷分布.
- **Wafer Split**：支持用户手动选择 Wafer Split 功能.

#### 4.3 Map 操作与导出

- **重分类**：支持在 Map 上对 Defect 进行 Bin 的重新分类.
- **二次过滤**：支持在 Map 上进行数据的二次过滤.
- **Drill Down**：支持选中 Defect 下钻到其他分析组件.
- **Rawdata 查看**：支持显示框选 Defect 的原始数据表格.
- **导出功能**：支持导出 Klarf 文件、PPT 到指定路径;支持复制 Map 到剪切板.
- **Send to Review**：支持指定缺陷发送到 Review 机台进行复查拍照.

### 5. Image Gallery 与图表

#### 5.1 Image Gallery

- **排布模式**：支持行列模式与 Panel 模式自定义排布.
- **图像操作**：支持放大/缩小、对比度/亮度调整(全局应用)、Smooth/Sharp 处理.
- **选择操作**：支持全选、反选、Ctrl 框选、Shift 多选.
- **信息显示**：支持在 Image 上显示 Defect Information;支持 Colored by Defect Code.
- **重分类**：支持在 Image 上进行 Bin 的重新分类.
- **导航与导出**：支持设置默认起始图片;支持 Copy to Clipboard/File;支持 Drill Down.
- **树状浏览**：支持按自定义条件树状结构浏览 Review Defect Image.
- **Cluster 分析**：支持 Defect Cluster 分析及检测资讯显示.
- **人工分类**：界面上支持缺陷的重新人工分类.

#### 5.2 统计图表

- **图表类型**：支持 Trend、双 Y 轴 Trend、Bar、Stacked Bar、Box、散点图、直方图、Pareto 等.
- **统计指标**：支持 Defect Count、True Defects、Non-Adder、Defective Dies、Defect Density、Reviewed、Classified、TestedDies、TestArea 及其交叉统计(By Class/Zone/Test).
- **辅助线**：支持 OOC、OOS、中位线、均值线等 Spec 线显示.
- **交互功能**:
    - 支持更改标题、字体、数字格式及动态切换标题.
    - 支持自定义图例颜色并保存.
    - 支持显示/隐藏提示框、注释、标签.
    - 支持任意选择数据隐藏/重现.
    - 支持多图表同界面自定义布局.
    - 支持图表上显示 Map 及 Image.
    - 支持 Change X/Y Axis、Enable/Disable Unclassify、Defect Size Definition.
- **照片参数**：可查看 DefectID、LayerID、ReviewTime、坐标, 并显示选中照片在 Map/Die 中的位置.

### 6. 高级分析功能

#### 6.1 DSA (Defect Source Analysis)

- **Particle to Particle**：支持颗粒级缺陷溯源分析.
- **Cluster 分析**：支持 DSA Cluster 分析计算.
- **Layer 过滤**：支持按单一 Layer、Layer 列表、Layer Group 过滤运算.
- **Wafer 匹配**：支持设置 Wafer 匹配关系及 Auto Wafer Alignment.
- **参数定义**：支持自定义 Repeater 与 Cluster 判断参数.
- **Step Contribution**：支持指定 Layer 进行缺陷追溯分析.
- **误差调整**：支持用户自行调整缺陷根源分析的位置误差范围.
- **结果汇总**：提供晶圆层级汇总表、相关性汇总表及命中缺陷对照表.

#### 6.2 DTT (Defect Traceability)

- **物理坐标映射**：支持按 Layer 展示 Defect 物理坐标映射关系(含 Image).
- **Common Defect**：支持仅保留 Common Defect 显示.

#### 6.3 Tool Commonality

- **交叉分析**：支持拉取 WIP 数据与 Defect 数据进行交叉分析, 识别共性机台.

#### 6.4 Overlay 分析

- **Map 叠加**：支持 Defect Map 与 CP Map 的 Overlay 叠加分析.

### 7. 系统配置与自动化

#### 7.1 个性化配置

- **分析配置**：配置 DSA、Cluster、Repeater 选项.
- **分类名称**：配置 Class、RoughBin、ADCBin、Manual-SEM、Auto-SEM、SSA-Macro/Micro 名称.
- **颜色配置**：配置每种 Class 的显示颜色.
- **Wafer 配置**：配置 Zone、Reticle、Subdie、Overlay 偏移等信息.
- **Sampling 规则**：自定义配置 Review Sampling Rule.
- **PPT 样式**：配置 PPT 导出样式.
- **持久化**：所有配置支持修改、保存, 重启后仍保持生效.

#### 7.2 Sampling 功能

- **手动导出**：支持根据 Sampling Rule 手动导出 Klarf 文件.
- **Auto Sampling**：支持自动采样功能.

#### 7.3 自动报告

- **参数配置**：基于模板选择报告页面, 定义运行条件与周期.
- **自动执行**：自动生成报告并保存至指定目录或发送至指定邮箱.

#### 7.4 组件交互

- **页面跳转**：支持选择部分/全部数据跳转到其他页面进一步分析.
- **分类跳转**：支持选择 Defect 跳转至照片/MAP 分类页面进行分类.

# ADC

http://mirlab.org/dataset/public/?spm=5176.28103460.0.0.96a07551Xxqtvw

MIR-WM811K, 包含 811,000 个晶圆图谱

# RPT

| Abbreviation | Full form | Desc         |
| :----------- | :-------- | :----------- |
| RPT          | Report    | 生产报表系统 |

## RPT Function List

### 1. 系统架构与开发平台

#### 1.1 混合技术架构

支持主流报表工具与自定义开发框架, 兼顾标准化与灵活性.

- **双引擎架构**：提供 FineReport (Tomcat Web) 与 Report Framework (EXT.Net Web) 双重架构支持.
- **开发工具链**：支持 FineReport 设计器及 C# 报表开发工具, 满足不同技术栈的开发需求.
- **可视化开发**：提供可视化报表编辑工具, 支持用户自定义报表布局、图表样式及交互逻辑, 降低二次开发门槛.
- **算法可扩展**：支持报表数据提取逻辑与统计算法的自定义扩展和修改, 适应复杂业务计算场景.

#### 1.2 开放接口与集成

支持跨系统数据共享与嵌入式集成.

- **标准数据接口**：提供认证鉴权机制的数据 API, 允许外部系统安全获取报表数据.
- **报表联动**：支持不同报表间的参数传递与钻取(Drill-down), 点击图表或表格可串联至详细报表进行深层查询.

### 2. ETL 数据整合引擎

#### 2.1 任务调度与管理

提供可视化的 ETL 全生命周期管理能力.

- **UI 管理界面**：提供 Web UI 进行 ETL 任务的增删改查、启停控制及配置管理.
- **精细化调度**：支持 Schedule Job 定时执行, 频率精确到秒/分/时/天/周/月.
- **工厂时间适配**：内置工厂日历时间逻辑(如 08:00-次日08:00), 仅需简单配置即可自动按工厂班次汇总数据.
- **断点续传与补数**：支持根据生产数据时间戳自动检测缺失区间, 系统恢复后自动从停机时刻开始补数据, 确保数据连续性.

#### 2.2 运行监控与运维

保障 ETL 过程的透明化与问题快速定位.

- **历史运行分析**：记录 ETL 运行历史, 支持查询与分析执行效率、耗时趋势.
- **错误日志追踪**：详细记录运行报错信息, 辅助维护人员快速定位数据抽取/转换异常.
- **数据一致性保障**：通过校验机制确保 Report DB 与 MES 源数据的一致性、完整性与准确性.
- **高频更新**：历史信息(Lot/Machine/Wafer History)更新频率控制在 3 分钟以内.

### 3. 数据模型与关键指标

#### 3.1 基础主数据

构建标准化的半导体制造数据底座.

- **核心实体**：涵盖 Equipment(设备)、Equipment Capability(设备能力)、Product(产品)、Flow(工艺流程)等基础数据.

#### 3.2 Lot 批次级数据

支持全流程批次追溯与绩效分析.

- **事件分类存储**：按 Start/Out, Ship/Unship, Rework, Scrap/Unscrap, Terminate/UnTerminate, Hold/Release, Bank, Trackout, Change Attribute, Branch 等事件类型结构化保存 Lot History.
- **关键绩效指标 (KPIs)**:
    - **WIP 与产出**：Lot WIP, Start Qty, Out Qty, Move 数量.
    - **时间效率**：Run Time, Wait Time, Hold Time, Queue Time, Rework Time, Branch Time.
    - **质量与异常**：Rework Qty, Scrap/UnScrap Qty, Terminate/UnTerminate Qty, Hold/Release 次数, Skip 次数, Branch Count.

#### 3.3 Equipment 设备级数据

支持设备利用率分析与状态监控.

- **状态历史**：记录 Equipment 状态转换历史及每日各状态的时间、次数、占比.
- **效能指标**：支持每日/每周/每月的 OEE, Uptime, Down Time, Utilization, Efficiency 计算与展示.
- **产出统计**：统计 Equipment Move 数量.

#### 3.4 Wafer 晶圆级数据

支持精细到单片晶圆的制程追溯.

- **Wafer Level 整合**：具备整合 Track In/Out, Process Start/End, Wafer History (WPH) 等信息的综合报表功能.

### 4. 报表功能与交付

#### 4.1 导出与格式

支持高保真数据导出与离线分析.

- **富格式 Excel 导出**：支持导出包含字体颜色、字号、单元格背景色等样式的 Excel 文件, 保持报表视觉一致性.

#### 4.2 自动化分发

支持报表的定时推送与主动触达.

- **邮件订阅**：支持按日/周/月设定特定时间自动发送报表邮件, 满足管理层定期审阅需求.

#### 4.3 权限与安全

支持多维度的数据访问控制.

- **三级权限体系**:
    - **查看权限**：控制用户可见的报表范围.
    - **数据维护权限**：控制用户对报表数据的编辑/修正能力.
    - **系统权限**：控制系统配置、ETL 管理等后台操作权限.

#### 4.4 性能监控

保障报表服务的稳定性与响应速度.

- **运行指标监控**：实时监控报表点击率、数据更新状态、查询响应时间及图表渲染效率.
- **异常提醒**：针对性能瓶颈或数据延迟提供预警机制.

### 5. 数据生命周期管理

#### 5.1 存储与清理策略

平衡在线查询性能与历史数据保留需求.

- **在线保留策略**：原则上在线保留 MES 数据 1 年, 保障近期数据查询性能.
- **定制化清理方案**：根据用户对数据保存时限的具体要求, 提供完善的数据归档与清理机制.

### 6. 开箱即用 (OOB) 客制化报表

#### 6.1 标准报表库

提供预置的行业标准报表, 加速项目落地.

- **WIP Profile**：在制品分布概况报表.
- **Hold WIP**：被扣留批次明细与原因分析报表.
- **Index Summary**：综合生产指数摘要报表.
- **EQP Status Change History**：设备状态变更履历报表.
- **EQP Performance Summary**：设备效能综合汇总报表.
- **客制化扩展**：支持根据项目规划数量进行额外的客制化报表开发.

# FMS

## FMS Function List

### 1. 设备基础信息管理

- **MES数据自动同步**：支持从MES数据库自动同步设备基础信息, 确保数据实时准确.
    - 同步字段包括：Tool ID、Tool Model、Chamber ID、Port ID等关键标识.
- **信息导出与报表**:
    - 支持将设备基本信息一览表导出为通用格式文件.
    - 提供基于设备基础信息的数据统计与报表分析功能.

### 2. 设备状态可视化界面

#### 2.1 Layout布局管理

- **可视化建置**：提供便捷的工厂Layout拖拽式建置与修改工具, 支持快速调整设备位置.
- **自由分组编辑**:
    - 支持按区域、制程或自定义逻辑对设备进行自由划分与群组编辑.
    - 支持对群组内的单台设备及腔体(Chamber)进行独立属性编辑.

#### 2.2 实时状态渲染

- **动态颜色映射**：根据设备实时状态自动变换图标颜色, 直观反映设备运行情况.
- **状态颜色配置**：支持用户自定义增加、减少或编辑设备状态与图标颜色的对应关系.
- **自动刷新机制**：设备状态界面打开后自动定时更新状态, 无需手动刷新.
- **多维状态显示**:
    - 实时显示设备的连接状态(Online/Offline)与操作模式(Auto/Manual/Idle等).
    - 实时显示设备的当前使用状态(Running/Down/Standby等).

### 3. 设备状态履历与统计分析

#### 3.1 状态履历追踪

- **单机履历查询**：支持查看每台设备的完整状态变更履历.
- **详细信息展示**：每条状态记录包含Lot ID、Alarm ID及内容、Comment备注等上下文信息.
- **状态占比统计**：自动计算并显示每台设备各状态所占的时间百分比.

#### 3.2 筛选与查询

- **多维度筛选**：支持按群组、设备型号、设备厂商等条件组合筛选设备状态履历.
- **自定义时间范围**：提供查询选单, 支持用户自定义统计时间段进行历史数据分析.

### 4. 系统运维与监控

- **性能监控**：实时监控FMB平台自身的运行性能指标(如响应时间、并发数、资源占用等).
- **异常报警机制**：当系统性能下降或服务异常时, 自动触发报警通知运维人员.
- **功能清单文档**：提供FMB其他模块的详细功能列表及操作说明文档.

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

- **承载业务逻辑的中间层服务器**: 与 DB(数据库服务器)相对, AP 服务器不直接存储核心数据, 而是运行 MES, EAP, SPC 等子系统的应用程序、中间件、Web 服务和 API 接口.
- **开发/测试环境的专用节点**: 这 3 台服务器专门用于搭建与生产环境隔离的 Dev/UAT 环境, 供开发人员进行代码调试、版本验证和用户验收测试, 避免测试操作污染生产数据库或影响产线运行.
- **区别于生产虚拟集群**: 生产环境的 AP 以虚拟机形式部署在 29 台宿主机上; 而开发 / 测试环境独立使用 3 台物理机, 既保证了测试资源的独占性, 也便于快速重装系统、克隆环境和模拟故障场景.

> **注意**: 此处的"AP"**不是** 指无线接入点, 也不是指先进过程控制, 在 CIM 硬件清单中"AP 服务器"是行业通用术语, 专指应用层服务器.

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

| PRD                 | 核心内容要素                                                                                                                       | 样例                                                                                                                                                                                                 |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. 项目背景与目标   | 业务痛点、项目范围、预期收益、成功指标 (KPI)；明确“为什么做”和“做到什么程度算成功”，避免需求无限蔓延                               | 解决 SWIR 外延片良率波动大、非标设备数据孤岛问题；目标：EAP 覆盖率≥90%，FDC 关键站覆盖 100%，YMS Bin Map 自动解析率≥95%                                                                              |
| 2. 用户角色与权限   | 角色清单、职责描述、系统操作权限矩阵、数据可见范围；定义“谁用什么功能看什么数据”，是 MES/EAP 权限配置的直接输入                    | PE：可编辑 RMS Golden Recipe、查看 FDC Trend、审批 SPC OCAP；MFG Operator：仅可查看 EAP UI、执行 Lot Track、触发 Hold，不可修改 Recipe 参数                                                          |
| 3. 业务流程与场景   | As-Is/To-Be 流程图、异常处理分支、人机交互时序、跨系统接口点；将口头业务规则转化为可配置的 Workflow，是 EAP/MES 逻辑设计的核心依据 | To-Be 外延生长流程：OHT 送达 Gel-Pak→EAP 读取 Barcode→MES 校验 Route→EAP 下载 Recipe→FDC 启动 Trace→Process End→EAP 上传 Thickness→SPC 判定→合格则 Release 至下一站，不合格则 Auto Hold 并通知 PE    |
| 4. 功能需求清单     | 模块归属、功能编号、优先级 (MoSCoW)、业务描述、验收标准 (AC)；将业务语言翻译为 IT 可交付的功能点，作为 UAT 测试用例的直接来源      | [FDC-F003][Must] 外延腔室温度 Trace 采集：采样率 10 Hz，采集窗口从 Recipe Step "Growth" 开始到 "Cooldown" 结束，超时未收到 Data 则触发 EAP Interlock Hold Lot；AC：连续 10 批数据采集完整率≥99.9%    |
| 5. 数据模型与接口   | 实体关系、字段定义、数据格式、上下游系统交互协议、数据保留策略；定义系统间“说什么语言”，是 DB Schema 设计和 Interface 开发的契约   | YMS 接收 Bin Map：格式 STDF v4，包含 Die X/Y 坐标、Bin Value, Test Time；通过 FTP 推送至 YMS Server；YMS 解析后写入 Oracle DB；原始 STDF 文件保留 90 天，解析结果永久保存                            |
| 6. 非功能性需求     | 性能指标、可用性 (SLA)、安全合规、兼容性、可扩展性约束；定义“系统好不好用、稳不稳定、合不合规”，是架构设计和基础设施采购的依据     | EAP Transaction 响应时间≤500 ms (P99)；MES 可用性≥99.95%；符合 ITAR 出口管制要求，所有 Recipe 修改操作强制 Audit Log 且不可删除；支持未来扩展至 8 寸 InP 衬底载具类型                                |
| 7. 依赖与风险登记   | 前置条件、外部依赖项、已识别风险、缓解措施、Owner；提前暴露阻塞点和不确定性，避免项目中途因“没想到”而停滞                          | 依赖：Vendor A 的外延炉 Custom Adapter 需在 T1 前交付 FAT 版本；风险：Gel-Pak Barcode 读取成功率<95% 导致 WIP Tracking 中断；缓解：加装备用固定式 Scanner + EAP 提供手动输入 UI 兜底；Owner: EE Lead |
| 8. 术语表与参考文档 | 业务缩写全称、领域专有名词解释、关联文档链接、版本变更记录；消除跨部门沟通歧义，确保 EE/PE/YE/CIM 对同一词汇理解一致               | CTQ = Critical to Quality (关键质量特性)；Gel-Pak = 一种用于化合物半导体晶圆运输的弹性凝胶托盘载具；参考：《SWIR 外延工艺 Spec v2.1》《EQP-EXT-003 PICS 文档》                                       |

| URS               | 核心内容要素                                                                                                                                                        | 样例                                                                                                                                                                                                                           |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. 范围与边界     | 涵盖的产线区域、设备清单、工艺模块、明确排除项 (Out of Scope)；划定 URS 的法律效力边界，防止验收时用户提出“我以为包含”的额外需求                                    | 覆盖 SWIR 外延、光刻、刻蚀 3 个模块共 28 台设备；不包含减薄划片后道工序、不包含厂务 Facility 监控系统 (FMS) 的底层 PLC 改造                                                                                                    |
| 2. 业务需求映射   | PRD 功能编号、业务场景描述、用户操作序列、预期系统响应、异常处理逻辑；将 PRD 的业务语言逐条转化为可验证的用户行为规格，是 UAT 测试用例的直接来源                    | [PRD-FDC-F003] 外延生长监控：PE 在 FDC 界面选择 Recipe "EXT-InGaAs-v3" → 点击 "Enable Trace" → 系统在下一批 Lot 进腔时自动启动 10 Hz 温度采集 → 若采集断连>5s 则 EAP Hold Lot 并弹窗告警 "Trace Lost" → PE 确认后方可 Release  |
| 3. 数据需求规格   | 数据实体、字段类型 / 长度 / 单位、数据来源、更新频率、保留周期、数据质量要求；定义系统间数据交换的精确契约，是 DB Schema, Interface Spec, ETL 设计的唯一依据        | Bin Map 数据：DieX(Integer), DieY(Integer), BinCode(String[4]), TestTime(Float, ms)；来源：Tester STDF 文件；更新频率：每片 Wafer 测试完成后≤30s 内写入 YMS DB；保留：原始 STDF 90 天，解析结果永久；完整性：BinCode 缺失率=0% |
| 4. 接口与集成需求 | 对接系统名称、协议标准 (SECS/GEM, OPC-UA, REST)、消息格式、触发条件、超时 / 重试策略；明确系统间 "如何对话"，是 EAP Adapter, Middleware, API Gateway 开发的技术输入 | EAP↔MES：HSMS-SS (SEMI E37)，S2F41/S2F44 用于 RCMD 下发，S6F11/S6F12 用于 Event Report；超时：5s 无响应则 Retry 3 次，间隔 2s；3 次失败后 EAP 进入 Offline Mode 并记录 Alarm Log                                               |
| 5. 性能与容量需求 | 并发用户数、Transaction 响应时间、数据吞吐量、存储增长预估、峰值负载场景；量化非功能性指标，是服务器选型、网络带宽规划、压力测试 Pass/Fail 的判定基准               | MES 支持 50 并发 Operator + 20 并发 Engineer；Lot Track Transaction P99 ≤ 800 ms；FDC Trace Data 峰值吞吐≥5 MB/s/Tool；YMS DB 月增量≤200 GB；峰值场景：换班交接时 30 人同时查询 Yield Report，响应≤3s                          |
| 6. 合规与安全需求 | 法规标准 (ITAR/ISO)、审计日志要求、权限分级、数据加密、备份恢复 (RTO/RPO)；满足行业监管与客户稽核要求，是 IT Security Review 和 Validation 文档的核心输入           | 符合 ITAR 管控：所有 Recipe 修改、Bin Map 导出操作强制记录 Audit Log(User/Timestamp/Old/New Value)，Log 不可删除且保留 7 年；Recipe 参数传输采用 TLS 1.2 加密；MES DB RTO≤4h, RPO≤15min                                        |
| 7. 验收标准 (AC)  | 测试方法、通过阈值、测试环境要求、签字确认流程、缺陷分级处理规则；将每条 URS 转化为可执行的验收条款，是 UAT Sign-off 和 Vendor 付款的法律依据                       | [URS-FDC-003 AC] 连续执行 20 批外延 Lot，FDC Trace 采集完整率≥99.9% 且 Hold 触发延迟≤2s 视为 Pass；测试环境：Production Mirror + Simulator；缺陷分级：Trace 丢失=Critical(阻塞 Sign-off)，告警弹窗延迟>2s=Major(限期修复)      |
| 8. 约束与假设     | 硬件限制、Vendor 配合前提、工艺稳定性假设、项目里程碑依赖、已知技术栈；提前声明 URS 成立的前提条件，避免验收时因外部因素未达成而产生争议                            | 假设：Vendor A 外延炉 Custom Adapter 在 T1 前通过 FAT；约束：Gel-Pak 载具 Barcode 标签由 MFG 统一打印粘贴，EAP 不负责标签生成；依赖：EE 在 UAT 前完成所有 EQP 的 SECS 联机调试并签署 EQP Ready 证书                            |
