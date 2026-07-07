# CIM

├── EES
│ ├── [EAP](#eap) - [EAP-Terminology](#eap-terminology) - [EAP-Function-List](#eap-function-list)
│ ├── [FDC](#fdc) - [FDC-Function-List](#fdc-function-list)
│ ├── [RMS](#rms) - [RMS-Function-List](#rms-function-list)
│ ├── [RCM](#rcm)
│ └── [APC](#apc)
│
├── MES
│ ├── [MES](#mes) - [MES-Terminology](#mes-terminology) - [MES-Function-List](#mes-function-list)
│ ├── [SPC](#spc)
│ ├── [AMS](#ams)
│ └── [PMS](#pms)
│
├── AUTO
│ ├── [RTD](#rtd)
│ └── [AMA](#ama)
│
├── YMS
│ ├── [YMS](#yms)
│ ├── [DMS](#dms)
│ ├── [RPT](#rpt)
│ └── [FMS](#fms)
│
├──[FAQ](#FAQ)

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

| WPH | Wafer Per Hour | 每小时晶圆数 |

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

# EAP

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
> - Carrier In/Out： 载具到达 Port → ID 读取 → MES 验证 → Slot Map → Load Port 锁定/解锁
> - Process Start/End： 获取 Recipe → 下载配方 → 启动设备 → 监控加工过程 → 采集 EDC 数据 → 结束加工
> - Wafer Handling： 机械手取放片 → Chamber 进出 → Wafer Mapping → 异常重试/跳过
> - Track In/Out： 向 MES 发送过账请求 → 接收确认 → 更新本地物料状态
> - 异常恢复： 遇到 Alarm 时的自动 Pause/Abort/Resume 逻辑，以及 Hold Lot 策略

## EAP Function List

### 1. 设备建模与模板管理

#### 1.1 设备分类与模板定义

支持设备根据Buffer类型、用途、工艺等进行分类，基于共同性创建模板，以提升后期开发效率.

- **分类示例**：工艺设备（固定 Buffer、内部 Buffer、Inline 等）、测量设备、测试设备、分拣设备（Sorter）、存储设备（Bare Reticle/Wafer）等.

#### 1.2 内置标准场景模板

支持设备根据特定模板，支持 Full Auto Scenario：

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

支持完善的异常处理流程，及时响应程序、设备、流程等异常情况，并提供图形化配置能力.

- **异常响应**：及时处理程序崩溃、设备故障、流程中断等异常.
- **图形化 Scenario**：支持 EAP Scenario 的图形化配置、实时显示和在线修改.

#### 2.2 帐料信息匹配校验

支持在载具到达 Port、获取 MES 作业信息、过账等关键时间点，通过验证实际作业信息与 MES 数据的一致性，确保生产准确性.

- **载具与信息一致性验证**：
    - 载具到达上下料口时，通过批次或载具 ID 从 MES 获取作业信息.
    - 校验 FOUP ID、Lot ID、Job ID、Recipe 等信息与 MES 保持一致（载具类型涵盖 FOUP、FOSB、Open Cassette、Reticle POD）.
    - 在过账等关键时间节点持续进行账料复核，保证作业全流程的准确性.
- **Slot Map 与 Wafer 校验**：
    - **作业前**：验证 Carrier 内 Wafer 的数量、位置（Slot Map）是否与 MES 定义一致，保证来料数量的准确性与可靠性.
    - **作业后**：对已加工 Wafer 的数量、加工状态及 Slot Map 进行二次校验，避免出现漏片或错误加工.
    - **配置化检查**：支持工艺前/后的 Mapping 检查，区分数量校验与位置校验，可通过配置文件灵活定义; 支持工艺后正常工艺晶圆数量校验.
- **异常处置机制**：
    - 当设备作业帐料信息不匹配时，根据用户配置要求自动执行退 Port、扣留批次（Hold Lot）或向相关人员发送预警通知.
- **MES 账户与权限同步**：
    - 支持同步 MES 账户进行用户验证及用户信息获取.
    - 支持基于用户权限的信息展示与操作管控，防止越权操作.
- **MES 数据交互与业务动作**：
    - 请求获取 Carrier、Lot、设备、并行批量（Batch）等信息并进行处理展示.
    - 请求验证 Lot 与待加工设备是否匹配，不匹配则触发异常处理.
    - 获取 EDC 量测信息，并支持将设备量测数据上报至 MES 或 SPC 系统.
    - 校验通过后，根据流程自动执行 JobIn、JobOut、CancelJobIn、HoldLot 等动作.
    - 针对 Batch 作业设备，校验通过后自动执行 BatchJobIn、BatchJobOut 等动作.
- **优先级调度控制**：
    - 支持根据 MES 给定的优先级顺序，控制 Cassette/FOUP 进入设备的顺序，确保高优先级批次优先加工.

#### 2.3 Load Port 智能管控

支持控制遵守 SEMI 标准的 200mm/300mm Load Port，并具备严格的安全与优先级管理机制.

- **状态同步**：实时更新 Load Port 状态至 MES，Load Port ID、数量、分类可通过配置管理.
- **安全拒绝机制**：无论何种模式，拒绝没有 FOUP/FOSB ID 的载具; 自动传送模式下，拒绝手动加载的 FOUP/FOSB/OpenCassette.
- **Purge 功能支持**：依据设备特性控制带 Purge 功能 Load Port 的气体喷充和停止.
- **FOUP 类型管控**：管理并限制接受的 FOUP 类型（如 FOSB, FE FOUP, BE FOUP, Co FOUP, Cu FOUP），非指定类型识别为错误并拒绝传输.
- **优先级调度**：高优先级 FOUP 无视作业顺序，优先被处理.

#### 2.4 专项设备与物料管理

支持针对特定设备和物料类型提供专门的管理模块，确保精细化控制.

- **Purge 设备整合**：支持气体 Purge 设备的自动化整合与控制.
- **光罩 (Reticle) 管理**：
    - EAP 控制光罩处理，支持手动搬送接收及使用信息更新.
    - Run 货前验证光罩在机台的状态.
    - 管理 Reticle Lib：支持 Load/Unload、显示使用情况、收集使用次数.
    - 支持 Reticle Inspection，收集 IRIS 数据并上报上位系统.
    - 光罩 Load Port 作为独立类别通过配置管理.
- **Recipe 管理**：
    - Run 货前验证设备是否存在对应 Recipe ID.
    - 支持 MES Recipe ID 到设备 Recipe ID 的解析/转换（前后缀、路径可配，支持按 Lot 类型配置路径）.
    - 配合 RMS 上传/下载 Recipe Body，支持 RMS 抓取请求.
    - 支持 Download Recipe 到机台（视设备能力而定）.
    - GUI 界面显示当前 Run 的 Recipe 信息.
- **Buffer 管理**：
    - 与上位系统集成，按要求自动管理并更新 Buffer 信息.
    - 支持 NTB Buffer 或 FOUP Exchange Buffer 设备.
    - 上报各类载具进出 Buffer 的信息至 MES.

#### 2.5 Wafer 级流程控制

支持精确到单片 Wafer 级别的追踪与控制，满足高阶制程需求.

- **指定 Wafer 作业**：支持选择指定 Wafer 进行加工或量测，实现灵活的单片级工艺控制.
- **Wafer 作业信息采集**：收集指定 Wafer 的作业开始、作业结束信息，以及进出子设备（Chamber/Unit）的详细信息，并实时上传至上位系统.
- **多系统数据交互与上报**：
    - 支持将 Wafer 信息按要求传递至 MES、FDC 或其他第三方系统.
    - 支持接收 MES 返回的 Wafer 处理结果/指令，并将交互过程完整记录至 EAP 日志，确保数据可追溯.
- **Wafer History 全链路追踪**：收集指定 Wafer 的全生命周期 History 信息，按配置规则分发上报至 MES、FDC 等系统，支撑质量分析与制程优化.
- **Sorter 内容映像**：Sorter 作业开始时自动进行内容映像（Wafer ID 与 Slot ID 映射），由 EAP 收集并上报，确保分拣后物料信息的准确性.

#### 2.6 数据收集 (EDC) 与物料追踪

支持全面的数据采集、格式转换及物料流转追踪能力，保障生产透明化与数据可追溯性.

- **多协议数据收集(EDC)**：
    - 支持与上位系统集成，兼容 SECS/GEM、TCP/IP、File、Database 等多种通信方式获取机台原始数据.
    - 提供 EDC SPEC 定义，支持设备参数、设备常量 (EC) 及设备状态 (SV) 数据的自动化收集.
    - 主动采集 SECS 信息（Alarm S5F1/S6F11, Event）及设备 Alarm 数据，并实时上报至 AMS 系统.
- **数据格式转换与配置**：
    - 支持将设备原始数据格式灵活转换为上位系统（MES/FDC/SPC 等）所需的标准格式.
    - 支持数据格式转换规则的配置化修改及收集开关设置，方便用户根据业务需求自定义，无需代码开发.
    - 支持将采集的设备常量、状态数据按策略保存至本地数据库或直接上传至外部系统.
- **物料追踪(Material Tracking)**：
    - 主动实时上报过账信息（Track-in, Track-out, Hold）及精确位置信息（FOUP, Slot, 设备, Unit）.
    - 上报 Lot 及 Wafer 级别的开始、结束作业信息给 MES，确保账实同步.
    - 异常发生时（如 Process 异常、Slot Map Fail）自动触发 Hold Lot 机制，防止不良品流出.
    - 配合 MES/PRMS 进行光阻液、靶材等耗材的绑定与消耗管控.

#### 2.7 设备状态同步与控制

支持建立设备数字模型，确保上位系统与物理设备状态实时一致，并支持基于状态的设备管控.

- **组件级建模与配置**：
    - 支持建模定义设备内组件（Unit/Chamber/Robot 等）的具体信息.
    - 设备内组件的系统映射关系支持灵活配置，适配不同机台结构.
- **主动状态同步**：
    - EAP 按设备内组件状态变化主动同步上位系统，保证状态转换和追踪的准确性.
    - 支持将组件及整机状态信息实时上传至 MES/ECS 等相关系统.
- **通讯状态监测与展示**：
    - 实时监测设备通讯状态，涵盖 Disconnect、Offline、Online-Local、Online-Remote 等模式.
    - 支持将设备通讯状态上报至外部系统或在 EAP UI 上可视化展示.
- **设备运行控制**：
    - 基于设备能力及特性，支持对设备进行暂停、停止运行等远程控制操作.
    - 支持切换设备 Offline/Online 状态，并将当前状态在机台 UI 或 EAP 界面上同步展示.
    - 所有控制操作及相关信息均记录至系统日志，确保操作可追溯.
- **Port Access Mode 管理**：
    - 针对支持 E84/E87 协议的设备，支持通过 MES 切换 Port Access Mode（Auto/Manual）.
    - 实时同步设备 Port 状态给 MES，确保物料交接过程中的端口控制权一致.

### 3. 系统集成与通讯

#### 3.1 接口与协议支持

支持多种标准及非标准接口，实现广泛的设备与系统互联.

- **设备接入**：支持 SECS/GEM、PLC 通讯，以及 Database、文件/FTP 等非标准数据接入.
- **系统对接**：支持 WebService、TCP/IP 等接口与 MES 等上位系统集成.
- **集成范围**：支持与 MES/RMS/APC/FDC/Alarm/PMS/YMS/DMS 等系统集成.
- **多连接能力**：支持一个 EAP 同时连接多个设备、多个连接点.

### 4. 日志与运维工具

#### 4.1 日志管理

支持提供完善的日志记录与分析机制，便于问题追踪与系统调试.

- **日志类型**：保留 SECS I, SECS II, Trace, Host Log，可按种类配置是否记录.
- **分级与配置**：Log 记录分级定义，调试追踪可通过配置文件/工具开关.
- **生命周期管理**：具备定时备份、删除、压缩机制，标配 Log 管理任务.
- **分析工具**：提供专用的 Log 分析工具.

#### 4.2 运行环境流程管理工具

支持图形化工具，简化 EAP 的日常运维与异常处理.

- **Scenario 管理**：图形化查看、启动、结束 EAP Scenario，支持直观配置与修改.
- **状态监控**：直观查看 EAP 当前状态、设备信息、物料信息、错误消息.
- **异常干预**：支持手动发指令给设备和上位系统处理异常.
- **热重载**：在不关闭 EAP 的情况下重新 Load 配置文件.

### 5. 系统管理平台 (EAP Manager)

#### 5.1 监控与告警

支持全方位监控 EAP 运行健康度，确保系统高可用.

- **程序监控**：实时监控 EAP 程序，崩溃/挂起/进程消失时立即重启并通过 Alarm 系统（邮件/短信）通知.
- **连接监控**：监控 EAP 与机台连接，断开或报错时发送告警.
- **Batch 监控**：EAP 升级后首个 Batch 运行时发送通知.
- **版本监控**：发现启动/运行版本与部署版本不一致时发送告警.
- **维护豁免**：支持特定权限人员临时避开监控进行机台测试.

#### 5.2 远程控制与恢复

支持远程运维操作及故障后的状态自愈.

- **远程操作**：支持远程启动/停止（含批量）、LOG 目录访问、远程桌面、配置重载.
- **状态恢复**：EAP 崩溃并在设定时间内重启成功后，自动恢复至重启前最新保存的对象状态.

#### 5.3 部署与升级

支持灵活的部署与平滑升级机制，最小化对生产的影响.

- **拷贝部署**：支持同类型机台 EAP 拷贝部署，并提供配置差异比较功能.
- **远程/在线升级**：支持远程部署; 非通讯模块支持在线升级; 版本变更后提醒.
- **空闲自动升级**：机台空闲（无 Carrier/Wafer/Job）时自动执行升级并通知.
- **预约升级**：支持自定义时间段内检测并执行升级.
- **首件通知**：自动升级完成后，首个 FOUP 开始时发送提示通知.

#### 5.4 信息与版本管控

支持集中管理 EAP 资产，确保版本一致性与可追溯性.

- **基本信息**：显示/比较当前版本与配置，支持按服务器/FAB/机台类型查询状态及连接信息.
- **版本历史**：显示发布负责人、日期、版本号、说明等历史信息.
- **版本切换**：支持保存不同版本并自由切换，显示空闲机台自动升级列表.
- **差异比对**：支持比较同类型机台在线版本的文件差异.
- **分层管控**：从不同层次管控 EAP 所有核心文件.

#### 5.5 迁移与执行模型

支持大规模集群管理及可扩展的软件架构.

- **批量迁移**：支持批量/预约迁移空闲 EAP 至另一台 Server.
- **执行模型**：采用面向任务的统一推送和执行模型，方便功能扩展.

### 6. 设备及上位系统模拟器 (Simulator)

#### 6.1 仿真与测试能力

支持基于实测数据与业务需求的提供完整的模拟环境，实现全链路仿真，加速开发测试、测机验证与运维排查.

- **SECS 规范设计与测机验证**：
    - 根据测机结果、设备指令集顺序及用户业务需求，设计每型号设备的 SECS Communication Spec. & Scenario.
    - 支持对生产线设备进行 SECS 标准通讯测机，验证设备通讯合规性与功能完整性.
    - 支持模拟 EAP 向机台发送 SECS 消息进行自动化测机，自动格式化消息内容，并保存、查看测试 SECS 日志.
- **Log 驱动全链路复现**：
    - 支持加载实际产线 SECS Log 与上层系统通讯 Log，自动生成 Simulator Message Library.
    - 完全复现日志中的机台 Run 货记录及 MES 消息收发流程，支持按配置灵活调整发送策略.
    - 支持模拟 MES 系统发送/接收消息，实现 EAP 程序与模拟器对生产场景的精准还原.
- **多系统与脚本化测试**：
    - 支持同时模拟 MES、RMS、FDC 等多个上位系统，覆盖跨系统集成测试场景.
    - Equipment Simulator 支持编辑测试脚本，实现消息自动连续发送及批量自动化测试.
- **完整测试开发环境**：
    - 提供包含设备模拟器、上位系统模拟器、日志分析工具在内的完整测试与开发环境，支撑从开发调试到上线验证的全生命周期需求.

### 7. 底层通讯引擎

#### 7.1 稳定性与性能指标

支持SECS Driver 须满足高性能、高可靠性的工业级通讯要求.

- **大消息处理**：5 秒内完成单笔 10M 大 Message 的处理.
- **零丢包架构**：通讯时不允许因 Driver 本身问题发生丢包断线.
- **高频数据采集**：稳定处理采样频率达 10 Hz 级别的设备数据流.

#### 7.2 多协议与设备兼容

支持统一通讯驱动层，覆盖标准与非标设备，无需嵌入第三方驱动，便于后期维护与扩展.

- **SEMI 标准协议**：原生支持 SECS-I / SECS-II / GEM / HSMS 等半导体标准通讯协议.
- **工业控制协议**：支持 PLC（三菱、欧姆龙等）、OPC、I/O Controller 等协议，适配 4/6 寸线非标设备.
- **通用应用层协议**：支持 TCP/IP、Socket、HTTP、FTP、Database、Text 等多种通讯方式.
- **外设与辅机通讯**：支持与 SMIF、Tag/RFID/Barcode Reader、扫码枪等设备直接交互.
- **非标设备扩展接入**：除 EAP Driver 外，支持通过设备 Screen、Panel、GPIB 等方式连接非标设备，提升整线自动化覆盖率.
- **协议客制化**：支持通信协议的自定义开发与适配，满足特殊设备或老旧机台的接入需求.

#### 7.3 测机与日志支持

- **自动化测机**：支持模拟 EAP 向机台发送 SECS 消息并自动格式化，用于通讯合规性验证与功能测试.
- **日志管理**：完整保存测试及生产环境的 SECS 日志，提供可视化查看与分析工具，支撑问题定位与回溯.

### 8. EAP GUI (用户界面)

#### 8.1 界面功能与交互

支持独立、直观的操作界面，支持多语言与权限管控.

- **信息展示**：直观显示 Run 货情况、设备/连接/Port 状态、提示/错误/物料信息.
- **多机台聚合**：单个 GUI 可配置显示多台 EAP 信息.
- **独立运行**：GUI 与 EAP 后端独立，GUI 关闭不影响 EAP 任何功能.
- **权限管控**：支持 GUI 账号登录，支持同步 MES 权限.
- **消息记录**：按设备/时间生成日志，支持查询最近 300 条数据.
- **多语言与样式**：支持中英文消息配置管理，支持消息分类、格式与颜色设定.

### 9. 发布与变更管理

#### 9.1 Pilot 验证机制

- **Pilot 支持**：当 EAP 任何模块更改时，必须支持在个别设备上先进行 Pilot 验证，且不影响未参与 Pilot 的设备正常运行.

# FDC

## FDC Function List

### 1. 数据采集与集成 (Data Collection & Integration)

#### 1.1 多协议与多源数据接入

支持广泛的工业协议与数据源接入，实现全厂设备数据的统一采集。

- **标准协议支持**：原生支持 SECS/GEM、Interface A (EDA)、OPC UA 协议；提供 nPortSECS 组件在机台与 EAP/FDC 间转发消息。
- **非标数据接入**：支持从 File、Database、TCP/IP 等非标接口收集数据；支持 Facility Data 采集。
- **附属设备整合**：支持与 External Sensor（如 RGA、Scrubber、Hot N2、Chiller、PPS、Pump 等）连接并采集数据。
- **Multi-Source 融合**：支持将主机台数据与附属设备数据通过配置合并至同一 Tool 视图，无需编码。
- **复杂结构解析**：支持无代码提取 List、Array 等复杂结构数据；提供 EDA Meta Data 提取工具，直接获取 Event Path 等元数据。

#### 1.2 采集策略与计划管理

支持灵活、精细化的数据采集配置，平衡数据完整性与系统负载。

- **动态采样控制**：支持根据抽样变量和 Step 设定不同采样比例与频率，并设置上下限防错；支持 Polling 与 Trace 两种采集模式。
- **DCP 计划定义**：支持基于事件、时间或数据点触发采集起止；支持按工艺类型/腔室级别配置 SVID 及独立采集频率。
- **轮检与追溯模式**：支持 By Tool 轮流采集（轮检模式）及精准回溯定位（追溯模式）。
- **Idle 状态管控**：支持配置设备 Idle 时是否请求上报数据；支持 Non-Wafer / Non-Process 数据收集。
- **模板化部署**：支持同型机台共享 DCP/Sensor List/SVID List 模板，亦支持单机台独立设定；支持导入导出配置。
- **热更新机制**：修改数据收集定义无需停机或重启 EAP。

#### 1.3 数据质量与上下文整合

支持数据有效性校验及业务上下文关联，确保分析数据的可用性。

- **Context 整合**：支持将 MES Context（Lot ID, Prod ID, Stage, Recipe, Reticle 等）及自定义标签注入 FDC 工艺数据。
- **质量监控**：支持数据采集质量实时监控与汇总报告；支持机台数据缺失超时报警。
- **虚拟参数**：支持设定 Virtual Trace Parameters 与 Virtual Events。
- **存储能力**：提供硬件配置支持保存一年或以上历史数据。

### 2. 故障侦测与模型引擎 (Fault Detection & Modeling)

#### 2.1 UVA/MVA 建模与分析

支持单变量与多变量统计模型，覆盖设备健康与工艺质量监控。

- **双模引擎**：支持同时运行多个 UVA（单变量）与 MVA（多变量，含 Q, PCA, HT2, Diagonal HT2）监控模型。
- **虚拟 Sensor 生成**：支持通过线性表达式、Max/Min/Sum/Moving Range 等算法从 Raw Data 生成虚拟 Sensor；支持空值填充、异常点去除及片段截取。
- **跨片统计**：支持连续多片 Wafer 间的统计值计算（如 MovingRange），并在 Lot 切换时自动重置。
- **历史回滚仿真**：支持利用历史数据对 UVA/MVA 模型进行离线仿真验证。
- **二次开发**：支持 Model 算法二次开发并提供 Sample Code。

#### 2.2 智能窗口与过滤

支持基于工艺特征的动态数据切片，提升模型信噪比。

- **多维窗口定义**：支持 Step、Recipe Time、Sensor 规则、Offset 等多种窗口划分方式；支持 Cycle Step 内 Main/Sub-step 批量监控。
- **动态参数化窗口**：窗口起始点可基于 Sensor 统计值（如压力峰值）动态触发；窗口参数随 Context（如 Recipe Main Step）自动调整。
- **多级窗口叠加**：允许单次统计计算应用多个数据窗口。
- **噪音过滤**：支持窗口内 Sensor 数据灵活过滤，剔除干扰信号。
- **向导式建模**：提供向导工具，基于历史数据推荐统计方法。

#### 2.3 规格管理与自适应

支持多层次、动态化的规格体系，降低误报率。

- **多级规格体系**：支持 Warning / Critical / Outlier 三级报警等级；每级可设独立 Spec、OCAP 及 Alarm Rule。
- **多种 Spec 类型**：支持 Fixed / Delta / EWMA / N-Sigma / Target% / Moving Average 等多种规格形式。
- **Auto-Limits 自动生成**：支持基于历史数据自动计算 Spec，内置 8 种 Sigma 算法（PSEUDO, Bounded Boxplot, SIMR2 等）；支持自动过滤异常数据及自定义过滤算法。
- **Golden Tool 机制**：支持设定 Golden Tool，同型机台/Chamber 自动继承规格；支持 PM/新设备验机比对及偏离值计算。
- **Context Offset**：支持针对不同 Context Group（如不同 Recipe）设置 Offset，使多 Recipe 共用同一模型与规格。
- **Baseline 比对**：支持 Sensor Baseline 设定及 Process Data 比对报警。
- **动态规格触发**：支持根据条件（PM 后、Idle N 小时、Run N 片后）动态开启/关闭检测或重置规格。
- **Auto Retarget**：支持 Offset Change、Event 或外部系统触发的自动目标值重校准。

#### 2.4 实时侦测与报警联动

支持制程中的实时异常拦截与闭环处置。

- **实时检查**：支持长制程中实时规格检查，避免制程结束才发现异常；支持工艺时间异常（如 End Event 缺失）侦测。
- **GuardBand 动态频带**：支持基于 Trace Data 生成随时间变动的动态频带，结合 SPC Trend Rule 降低误报。
- **逻辑组合报警**：支持 Summary Data 逻辑表达式生成新监控模型（如双模型同时报警才触发）。
- **Data Quality 联锁**：Sensor 数据质量不合格时，可配置跳过部分模型监测。
- **分级抑制**：支持模型级别设定，高级别报警后自动抑制低级别报警。
- **系统集成处置**：
    - AMS：支持 Email/SMS/Phone/Wechat 多渠道报警。
    - MES：支持 Hold Lot/Tool/Chamber/Recipe。
    - EAP：支持 Stop Tool/Chamber。
- **Alarm Rule 管理**：支持自定义 SPC Alarm Rules；支持 Rule 仿真测试；支持全局共享 Rule 定义。

### 3. 数据可视化与分析 (Visualization & Analysis)

#### 3.1 交互式图表分析

支持多维度、深层次的数据探索与根因定位。

- **多源叠图**：支持 Trace Data / Summary Data 按 Lot/Wafer/Tool 等维度叠图；支持多 Run 数据按 Step Number 对齐。
- **Context 着色与筛选**：支持按 Product/Flow/Recipe/Mask 等 Context 筛选数据；支持按 Context 为数据点着色并生成图例。
- **双轴与多图**：支持双 Y 轴显示及多图同屏；支持辅助线（Alarm/Event/Spec）叠加。
- **Drilldown 追溯**：支持从汇总数据下钻至原始 Trace Data；支持 SPC Chart 点击跳转 Trace Data。
- **Tag 标记系统**：支持手动/自动（Range/Peak/Time Based）标记 Good/Bad Run；支持基于 Tag 的叠图、分色及 Key Sensor 偏差打分排序。
- **Idle 时间压缩**：支持按时间顺序显示多 Run 数据时去除中间 Idle 时段。
- **CSV 导入分析**：支持导入 CSV 文件至 FDC 图表工具进行分析。
- **图表定制**：支持图例、单位、点大小、线型、颜色、Y 轴刻度等自定义设置；支持 Highlight 特定 Run。
- **一键导出**：支持导出 Excel 及按条件一键导出 FDC Chart。

#### 3.2 时间跨度与数据源切换

支持高效的历史数据访问与对比。

- **时间跨度方案**：提供简单高效的线上/线下数据源切换方案（1年内/3年内/超3年）。
- **Filter 功能**：支持图中数据实时过滤。

### 4. 报表与统计 (Reporting & Analytics)

#### 4.1 标准与定制报表

支持全方位的 FDC 绩效与质量统计。

- **Alarm 统计**：支持 Alarm Log 报表（Drilldown to UVA）、OOC/OOS 报表、Top10 报警模型统计。
- **覆盖率分析**：支持 Recipe 覆盖率与 Run 覆盖率统计。
- **模型质量评估**：支持规格质量报表（Cp/Cpk 汇总），指导 Spec 收紧/放松。
- **趋势与分布**：支持 UVA Trend 报表（含 Spec）、Box Plot 报表（多机台/多时间段对比）。
- **实施状况总览**：支持按 Fab/Area/ToolType 查看 DCP/Spec/OCAP 实施状况。
- **PMQA 与匹配报告**：支持 PM 后自动与基准设备比对；支持 Chamber Group Matching 报告（Base Line Shift 检查）。
- **新设备验收**：支持新设备上线后与基准设备比对，汇总超 Spec 数据。

#### 4.2 报表自动化与分发

支持报表任务的调度与多渠道交付。

- **任务调度**：支持计划报表生成任务，支持客制化内容。
- **邮件推送**：支持报表通过电子邮件自动发送。
- **格式转换**：支持查询结果转换为 PDF/PPT Report。
- **收藏夹**：支持用户定义常用报表收藏夹。
- **开放 Schema**：开放 DB Schema 支持第三方报表开发。

### 5. 系统架构与运维 (System Architecture & Operations)

#### 5.1 高可用与无缝升级

支持企业级连续性保障，确保 7x24 小时监控不中断。

- **数据采集无缝切换**：软件升级/打补丁期间，支持数据采集无缝切换至备用服务器，完成后切回。
- **自动故障转移**：支持采集服务器崩溃自动检测，并在备份服务器启动采集进程。
- **不停机发布**：软件升级和新功能发布不影响系统使用。
- **多产线支持**：支持多产线同时使用。

#### 5.2 低代码扩展与集成

支持业务人员自主开发与外部系统对接。

- **可视化 Workflow**：提供拖拽式 Block 开发工具，事件触发执行，无需编码完成二次开发。
- **Python 脚本引擎**：提供 Python/IronPython 模块，支持进阶分析与 AI/ML 复杂计算。
- **账号集成**：支持集成客户账号管理系统，无需额外创建账号。
- **签核集成**：支持签核系统集成；支持紧急生效功能（特殊情况直接修改 Spec/OCAP）。
- **消息分流**：支持对设备 Message 进行分流过滤。

#### 5.3 安全与监控

支持细粒度权限管控与系统健康自监控。

- **RBAC 权限**：支持基于角色的访问控制，不同用户显示不同设备及操作功能。
- **性能监控**：支持 Performance Counter 对接 Zabbix 等主流监控系统；提供系统管理工具及性能报警。
- **数据生命周期**：提供数据保留期限、备份及清理机制。
- **历史记录**：提供完整的操作与变更历史记录。

# RMS

## RMS Function List

### 1. Recipe 基础功能管理

#### 1.1 Recipe 创建与维护

支持通过 EAP 集成或手动方式对设备配方进行全生命周期维护，确保配方数据的准确性与完整性。

- **Recipe List 同步**：支持通过 EAP 整合，自动从设备上传并创建 Recipe List（Recipe Name）。
- **Recipe Body 管理**：支持通过 EAP 从设备上传 Recipe Body，支持批量上传；支持编辑修改 Recipe 内容及“另存为”复制功能。
- **状态变更与签核**：支持批量修改 Recipe 状态、批量签核及批量生效；支持按角色管控 Recipe 在 RMS 界面的显示权限，防止误操作。
- **查询与删除**：支持通配符模糊查询 Recipe；支持在系统中安全删除 Recipe。
- **程序列表管控**：支持 Under Control / Not Control 设定，针对 Not Control 程序支持按 LotType 进行卡控。
- **自动清理机制**：支持配置 Recipe Run 完成后是否自动从机台删除，优化设备存储空间。

#### 1.2 Recipe 下载与部署

支持灵活高效的配方下发机制，满足生产准备与自动化运行需求。

- **自动下载**：Run 货时响应 EAP 请求，自动将指定 Recipe 从 RMS 下载至机台；支持设备 Idle 状态下预下载 Recipe。
- **手动批量下载**：支持在 RMS UI 上手动触发单个或多个 Recipe 的批量下载。
- **格式兼容**：支持 SECS、Binary、ASCII、XML 等多种数据类型的 Recipe Body 解析与存储。

### 2. Recipe 生命周期与版本控制

#### 2.1 版本状态流转

支持严谨的版本管理机制，确保生产环境始终使用受控且正确的配方。

- **多版本共存**：支持 Draft（新创建）、Intermediate（中间修改/待签核）、Active（生效）三种版本状态；系统内可存在多个历史版本，但最多仅有一个生效版本。
- **Golden Recipe 机制**：支持跨设备、跨腔体共享同一 Golden Recipe，作为 Body 验证比对的基准源。
- **暂停与发布**：支持根据 Recipe ID 独立执行暂停或发布操作，快速响应生产异常。
- **版本回退**：支持完善的版本控制，更新 Spec 自动生成新版本，并可回退至任意历史版本。
- **自动备份**：支持 Recipe 变更时自动备份至 RMS 备份系统，保障数据安全。

#### 2.2 层级化与对象管理

支持复杂工艺场景下的配方结构化管理。

- **多层次 Recipe 架构**：支持主 Recipe 与子 Recipe 定义，不限层级数，且主子 Recipe 均支持校验。
- **EC/SV 管理**：支持设备常量（EC）与状态变量（SV）的上传、比对及 EC 下载；支持按 Tool/Recipe/LoadPort/Chamber/Product/Tech/Recipe Group 维度设定 EC/SV Spec。
- **历史追溯**：支持按时间范围等条件查询 Recipe 对象（机台/Lot）使用历史及 Recipe 内容变更历史。

### 3. Recipe 比对与校验 (Validation)

#### 3.1 Online 在线比对

支持生产过程中的实时配方一致性检查，拦截错误配方上机。

- **实时触发**：Online Run 货时，根据 EAP 或 MES 请求自动比对 Recipe Body。
- **异常联动**：比对失败时自动发送 Alarm 至报警系统，并与 MES/EAP 整合执行设备 Hold 或 Recipe Hold。
- **Bypass 机制**：支持 By pass 单台设备所有 Recipe 或单个 Recipe 的比对，适应特殊调试场景。
- **失败记录**：详细记录比对失败的具体参数信息，辅助快速定位问题。

#### 3.2 Offline 离线比对

支持多维度的配方差异分析，支撑工程分析与设备匹配。

- **多场景比对**：支持不同设备间相同 Recipe 比对、设备 Recipe 与 RMS 存档比对、同 Recipe 不同版本比对。
- **批量一键比对**：支持两台设备多程序一键比对、同型号所有设备同程序一键比对（客制化）。
- **真实设备对比**：支持 FAB 中两台真实设备的程序差异直接比较。
- **结构化呈现**：支持 Sequence 比较结果分层呈现；支持将 Recipe Body 解析为系统可识别参数类型后进行比对（兼容 Format/Unformat）。
- **上传预检**：Recipe 上传时自动进行参数合规性检查。

#### 3.3 比对 Spec 与策略配置

支持精细化的比对规则定义，平衡管控严格度与灵活性。

- **多种比对方式**：支持 Target（目标值）、Range（范围）、In（枚举集合）等多种参数比对逻辑；支持 Full Body 与 Parameter 级比对。
- **容差定义**：支持按百分比或固定数值定义参数修改 Tolerance。
- **Spec Template**：支持定义 Spec 模板并应用至相应 Recipe，简化配置工作量。
- **结构比对**：支持对 Recipe 结构本身进行比对，而不仅限于参数值。
- **开关校验**：支持设备开关机时严格校验 Recipe 参数数量，检测设备端参数冗余或缺失。

### 4. 签核与审批流程 (Approval Workflow)

#### 4.1 外部系统集成签核

支持与企业内部流程系统对接，实现配方变更的合规审批。

- **OA/RMS 整合**：支持连接内部 OA 系统或专用签核系统，实现 Recipe Parameter 设定及变更的在线签核。
- **灵活送签策略**：支持按 Recipe 或按 Tool 维度设定是否送签；支持选择 Bypass 签核直接生效，适应紧急生产需求。
- **生效控制**：签核完成的 Recipe 方可变为 Active 版本，未签核版本禁止用于生产。

#### 4.2 自动化免签核策略

支持针对特定场景的签核流程优化，提升工程效率。

- **自动跳过签核**：支持按 Tool Type 或 Recipe 设定自动跳过签核规则，直接生成激活版本（客制化）。
- **Validate Log 统计**：支持对各类型校验结果进行汇总统计，生成基于历史的 Validation Report。

### 5. 权限与安全管控

#### 5.1 多维度权限模型

支持细粒度的功能与数据访问控制，保障系统安全。

- **角色与用户组**：支持 User Group 与 Function Role 设定，可对任何操作功能设置权限。
- **设备级数据隔离**：支持按设备设置权限，用户仅能查看和操作其授权范围内的设备。
- **界面可见性管控**：支持按角色管控 Recipe 在 RMS 界面上的显示，避免非授权人员误操作。

### 6. 系统高可用与运维

#### 6.1 高可用架构

支持企业级稳定性要求，确保 7x24 小时不间断服务。

- **负载均衡与故障切换**：支持多台服务器间负载平衡及自动故障切换。
- **零停机维护**：支持软件升级、新功能发布、新设备上线、产能扩充（动态增加服务器）等操作不影响系统正常使用。

#### 6.2 Pilot Run 验证机制

支持变更的安全灰度发布，降低全局风险。

- **Pilot 隔离验证**：RMS 重要逻辑修改时，支持在个别设备、个别 Recipe 上先进行 Pilot 验证。
- **独立 PiRun 环境**：通过额外准备的 PiRun 服务器承载验证流量，确保未参与 Pilot 的设备和 Recipe 完全不受影响。

#### 6.3 报表与扩展

支持数据开放与定制化开发，满足工厂个性化需求。

- **客制化报表支持**：提供完整数据接口与底层数据，支持客制化报表开发。
- **Validate Report**：内置校验结果汇总统计功能，支持基于历史数据的分析报告生成。

# RCM

# APC

# MES

## MES Terminology

| Abbreviation | Full form         | Desc     |
| :----------- | :---------------- | :------- |
| BOM          | Bill of Materials | 物料清单 |

BOM 核心内容: 父项(成品/组件)、子项(原料/零件)、用量、单位、损耗率、生效日期等
BOM 结构形式: 通常是树状层级结构(多级BOM)，反映了产品的装配关系

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

### 1. 工厂建模与基础数据管理 (FAB Modeling)

#### 1.1 工厂物理模型定义

支持构建完整的半导体工厂数字化模型，确保生产要素定义的准确性与一致性。

- **层级化位置定义**：支持 FAB、Area、Bay、Stocker、OHB、NTB 等 Location 定义；支持 CMP、CVD、ETCH、LITHO 等 WorkArea 定义。
- **设备架构建模**：支持 3 层 Tool 架构（Main Tool → Chamber → Load Port/Header）；支持 Fix Buffer、Internal Buffer、Metrology、Inline Tool 等多种设备类型定义。
- **载具与暂存区**：支持 FOUP Stocker、OHB、NTB 等暂存区定义；支持载具（FOSB, FOUP, Reticle Pod）及制具（Reticle, Probe Card）、耗材（Photo Resist）的自定义命名与属性扩展。
- **Port 与状态定义**：支持 Port 自动化模式（AUTO-1/2/3）定义；支持符合 SEMI E10 标准的设备状态及自定义状态转换规则（含权限管控）。
- **能力与配方基础**：支持设备及 Chamber 能力（Capability）定义；支持 Flow Recipe 和 Recipe Parameter 基础定义。
- **Reason Code 管理**：支持 Scrap/Release/Hold 等 Reason Code 定义及批量导入。

#### 1.2 产品与工艺路径定义

支持灵活的产品规格配置与复杂的工艺流程建模，满足多品种变批量生产需求。

- **产品规格管理**：支持 Technology、Product、Flow 关联设置；支持 DPW、ERP 料号、供应商信息、关键参数等规格定义；支持 Production/NPW/Engineer 三大类产品及版本管控（差异比较、升版校验）。
- **工艺流程架构**：支持 Top Plan → Operation → Sub Plan → Step 多层级定义；支持 MainFlow、SubFlow、BranchFlow、ReworkFlow、NPW Flow 及 Multipath、条件分支等复杂路径结构。
- **动态路径与资源绑定**：支持基于前层量测结果、设备历史、Parameter 等条件的动态路径选择（Dynamic Path）；支持 Product+Plan+Step 维度的 Spec 绑定（Recipe, Reticle, EDC, Q-Time 等），支持变量（Parameter Family）解析。
- **污染与防错控制**：支持 FE/BE/Cu/Non-Cu 等污染等级定义及转换通路设定；支持建模数据一致性检查（如 Step 依赖的 Recipe/设备就绪检查）及运行时冲突检查。
- **Future Action 机制**：支持在工艺站点预设 Future Hold、Future Rework、Future Split/Merge 等动作，支持按 Product/Lot 维度配置。
- **批量维护与导入**：支持通过 Excel/Loader 批量导入 Product、Plan、EDC、RCP 等对象；支持新旧版本比较、数据校验防错及对象复用共享。

#### 1.3 版本与变更管控

支持全生命周期内的工程数据版本控制，确保生产追溯与变更合规。

- **全对象版本控制**：覆盖 Product、Flow、Step、Recipe、EDC、Reticle、Q-Time 等所有核心模型对象；支持 Draft/Frozen/Active 状态流转，唯一 Active 版本原则。
- **变更影响分析**：版本升级时自动继承 Q-Time、Sampling、Future Action 等设定；识别并提示因站点增删导致的关联失效风险。
- **签核与生效机制**：支持工艺制程信息变更签核后生效；支持 EDC Retarget 内嵌签审流程（无需升版）。
- **历史追溯与归档**：记录所有模型变更历史；支持基于 Lot 状态定期归档历史 Flow 数据，不影响在线生产与报表查询。

### 2. 设备管理与集成 (Equipment Management)

#### 2.1 设备状态与能力模型

支持精细化设备建模与实时状态同步，为自动化派工提供准确依据。

- **多层级状态管理**：支持 Main EQP、Chamber、Port 独立状态管理及联动逻辑（如 Critical Chamber Down → Main EQP Down）；支持 SEMI E10 标准状态及用户自定义状态图（矩阵图/状态机）。
- **能力与容量管控**：支持设备/Chamber 容量（Capacity）、加工能力（Capability）、Batch Size（Wafer/FOUP 上下限）管理；支持 Internal Buffer 容量实时监控。
- **Port 智能管控**：支持 Port 传输模式（Ready To Load/Unload 等）及 Access Mode（Auto/Manual）管理；支持指定 Port 给特定 FOUP/FOSB/Reticle Pod；支持 Unload 完成后即时释放 Port（Lot Hold 状态下）。
- **多腔设备协同**：支持主设备与子腔室状态优先级决策（如 RUN > ENG）；支持根据 Chamber 状态、PPID 开关、Recipe 组合动态计算设备可用能力。

#### 2.2 专用设备管控模块

支持针对特定工艺设备的差异化业务逻辑集成。

- **湿法/炉管 Batch 管理**：支持 Batch 组批规则（按 Wafer/FOUP/Recipe/Tank Life）；支持 Dummy Wafer 填充、Side/Fill Dummy 区分及卸载流转；支持 Furnace Monitor Lot 生命周期（Prep/Using/Recycle/Downgrade）及 AB Batch 验证逻辑。
- **Sorter 管理**：支持 Inline/Ad-hoc Sorter 模式；支持 Foup Exchange、Split/Merge、Wafer Rotate/Flip/Verification 等 Job 类型；支持基于 Carrier/Lot 属性的 Port 约束及污染卡控。
- **光刻 (Litho) 管理**：支持多重光罩（Multiple Reticle）管控；支持 Scanner+Tracker 双设备同步管控；支持 28nm 以下同 Chuck/同 Tool 绑定（FeedForward）；支持 FOUP Exchanger 作为自动化缓冲。
- **N2 Purge 管理**：支持整合至 OHB/Stocker/Load Port/独立机台的 N2 Purge 设备管理；支持 Purge 后 Q-Time 实时更新。
- **Stocker/OHB/NTB 管理**：支持与 MCS 同步库存、搬送任务及 FOUP 位置；支持 NTB/Exchanger 作为 Internal Buffer 及 On Top Load Port（Auto 2/3 only）管理。

#### 2.3 设备约束与预约

支持多维度派工限制与灵活的预约机制，保障生产安全与效率。

- **多维 Tool Constraint**：支持基于 Product/Process/Step/Recipe/Lot Type/Capability 等条件的正向（Trackable）/负向（Non-trackable）派工限制；支持试生产（STR/MSTR）数量/时间段管控及新设备白名单机制。
- **设备绑定 (Coupling)**：支持跨站点设备绑定（如 Monitor 前后量同机台、Track+Scanner 绑定）；支持 FeedForward 实现设备选择联动。
- **预约与队列管理**：支持 Auto 1/2/3 及 Manual 多种预约模式；支持 Reserve Queue 及 What Next 自动派工；支持预约前全面校验（Constraint/Inhibit/Contamination/PM/Q-Time 等）。
- **Recipe 内容校验**：支持约货时联动 RMS/EAP 校验 Recipe Body 内容；支持 Recipe 使用次数/Lifetime 自动 Inhibit；支持 Season Constraint 及 Recipe Group Change 管控。

### 3. 在制品管控 (WIP Management)

#### 3.1 批次创建与下线

支持灵活的批次生成与原材料绑定，打通 ERP/WMS 集成链路。

- **Lot/Wafer ID 生成**：支持自动/手动生成 Lot ID 及 Wafer ID（含 T7 Code）；支持不同 Lot Type 命名规则及 Wafer ID 与 Slot ID 映射规则。
- **Wafer Start 全流程**：支持手动/GUI 及 Full Auto 下线模式；支持 FOSB→FOUP 自动 Sorter Job 触发；支持 Raw Material/Vendor/Cost Center 绑定及 ERP/WMS 物料校验。
- **Source Lot 管理**：支持自动读取 FOSB 信息创建 Source Lot；支持 Cancel Create Lot 及原材料回退。

#### 3.2 批次流转与处置

支持生产全过程中的批次状态变更、异常处理及特殊流转逻辑。

- **Hold & Release**：支持多 Reason Code Hold/Release；支持 Batch Hold 及按 Department/Reason 权限管控；支持 Recovery Runcard 关联处理。
- **Split / Merge**：支持逻辑/物理分批合批；支持子批继承母批属性（Future Action/Q-Time/前量数据）；支持小批过站（Auto Split/Merge）及永久分批。
- **Bank In / Out**：支持逻辑缓冲区出入库；支持 Bank 内 Transfer/Change Carrier/Bank 转换。
- **Rework 管理**：支持 Plan Rework、Ad-hoc Rework 及 Dynamic Rework；支持 Wafer Level Rework Count 管控；支持 Rework Flow 可视化及 Multipath。
- **Scrap / Terminate**：支持 Lot/Wafer 级报废/取消报废（含污染卡控及载具回退）；支持 Terminate/Cancel Terminate。
- **Skip / Reassign**：支持 Forward/Backward 跳站（含权限及签核）；支持当前站或未来站的 Product/Plan Reassign 及 Version Upgrade。

#### 3.3 批次预约与派工执行

支持精细化的派工前校验与执行过程控制。

- **Reserve 校验体系**：预约时自动校验 Constraint、Inhibit、Contamination、Lot Type vs Eqp State、Pilot、Season、PM Near 等；支持 RTD 最优排序反馈。
- **Cancel Track In / Running Split**：支持 Track In 取消回退；支持设备故障时按 Wafer 状态（未做/在做/已做）自动拆分并触发 Recovery Runcard。
- **Double Run 预防**：支持同站点同 PPID 重复加工预警（量测加量除外）。
- **委外加工串联**：支持本厂与外包 Fab 的多段式流转（Outsourcing/Insourcing 混合模式）。

#### 3.4 Die Lot 与特殊批次管理

支持封装测试阶段及非量产批次的差异化管控。

- **Die Lot 全功能**：支持 Die Lot 的 Dispatch、History、Bonus/Scrap、Future Action、Rework、Hold/Release、Split/Merge、Ship 等全套 WIP 操作；支持 No Wafer Lot 模式。
- **NPW 生命周期**：支持 Monitor/Season/Dummy/Fill Dummy 等 NPW 类型；支持 Preparation→InUse→Recycle→Downgrade 全生命周期及 Usage/Recycle Count 片级管控。
- **Small Lot / Experiment**：支持小批量过站自动 Split/Merge；支持实验单（SRC）及 Pi-Run 批次管理。

### 4. 晶圆级管控 (Wafer Level Control)

#### 4.1 晶圆追踪与位置

支持单片级全流程追溯，满足先进制程精度要求。

- **精细粒度追踪**：支持 Wafer → Chamber/Tank/Chuck/Scanner/Head 级追踪；支持 In-Process 单片数据采集及 Track-Out 前批量回传。
- **Slot Mapping 管理**：支持随机抽片顺序下的 Slot-Wafer 对应关系记录；支持 Boat/Tank/Chuck 内位置信息记录；支持 Sorter 作业自动 Content Mapping 上报。
- **T7 Code 关联**：支持 Wafer ID 与 T7 Code 动态映射及历史记录。

#### 4.2 晶圆级工艺控制

支持基于单片状态的动态工艺调整与限制。

- **Recipe/Parameter 动态调整**：支持 In-Process 集成 R2R 系统，按 Lot/Wafer 动态调整 Recipe Parameter。
- **片级计数卡控**：支持按 Wafer 记录并卡控 Rework 次数、NPW Usage/Recycle 次数。
- **量测一致性**：强制前量与后量为同一片 Wafer；支持 Furnace Monitor Wafer 位置级数据反馈至 Production Wafer。
- **APC 集成**：支持 Litho 机台集成 APC，实现 28nm 以下同 Chuck 绑定。

### 5. 配方与工艺规格管理 (Recipe & Spec)

#### 5.1 Recipe 体系管理

支持复杂设备类型的配方结构化管理与解析。

- **多类型 Recipe 支持**：支持 Serial/Parallel/Hybrid 模式；支持 Flow Recipe → PPID 映射及 Recipe Group 管理。
- **专用设备 Recipe**：支持 Litho Track+Scanner 双 Recipe 定义；支持 Furnace Recipe 限腔限位及按 Wafer 数匹配 PPID；支持 CMP Recipe 按 Pad Life 匹配 PPID。
- **多腔 Recipe 均衡**：支持根据 Chamber 状态、Idle 时间、Chamber Flow 选择 PPID，配合 RTD 实现腔室均衡。

#### 5.2 工艺规格 (Spec) 绑定

支持多维度工艺参数的灵活配置与下发。

- **多维 Spec 设置**：支持 Product+Plan+Step 维度设置 Recipe、Reticle、EDC Plan、Contamination Level 等；支持 Parameter Family 变量解析。
- **光罩寿命管理**：支持 Recipe Energy 字段及 Reticle Field 设定，用于光罩 Lifetime 累计计算。
- **Recipe 执行联动**：支持 MES 联动 EAP/RMS 下载 Recipe Parameter；支持 R2R 系统集成及 PPID Chamber Flow 下发。

### 6. 质量管理与工程数据分析 (Quality & EDC)

#### 6.1 工程数据采集 (EDC)

支持全方位、高精度的生产过程数据采集与处理。

- **多模式采集**：支持自动（EAP）/手动（GUI）采集；支持 Lot/Eqp/Reticle/Carrier/Wafer/Site 多层级对象；支持 Float/Integer/String 数据类型。
- **高级数据处理**：支持 Derived Item 及自定义公式（基础/客制）；支持前后站 Delta 数据收集及坐标信息存储；支持单 Step 超 10000 条 DC Item。
- **Spec 检查与 SPC**：支持 EDC Spec Check 及 SPC Chart 生成（Trend/By Machine/Recipe/Product）；支持 OOC/OOS 自动触发 Action（Hold Lot/EQP/Reticle/OCAP/DRB）。
- **APC-R2R 集成**：支持 EDC 数据实时推送至 APC-R2R 系统。

#### 6.2 批次抽样 (Lot Sampling)

支持灵活多样的量测挑片策略，平衡质量与产能。

- **多维抽样规则**：支持基于 Product/Plan/Step/Stage/Capability/Lot ID/Priority/Q-Time 等条件的抽样；支持 Key Tool Sampling（Interval/Lot Count/Wafer Count）。
- **YE 专用规则**：支持 WIP Count、Skip/Scan Lot ID、Long Time No WIP、Lot Tail Number 等 YE 挑片规则。
- **Wafer Selection Rule**：支持忽略特殊 Slot、前后量一致、先上再下/先下再上、螺旋搜索等多种选片算法；支持 GUI 维护及选片结果追溯。

#### 6.3 超规处理计划 (OCAP)

支持标准化的异常处置流程，闭环质量问题。

- **图形化 OCAP 引擎**：支持可视化流程执行（Re-measurement/Add Measurement/Change Recipe/EQP/Step/EDC/Hold/Release 等）；支持 SPC Chart Link 及外部签核系统集成。
- **多源触发机制**：支持 EDC → SPC/FDC → OOS/OOC 自动触发；支持 Inline/Offline/Wafer Test 三种 OCAP 类型。
- **RAC 规范**：支持 Reason/Action/Disposition 标准化格式记录；支持 OCAP 历史追溯及特殊关闭。

#### 6.4 CP/WAT 测试与判定 (WJS Integration)

支持测试数据自动解析与智能判定，打通 Test 数据流。

- **Raw Data 解析**：支持定时扫描解析机台 Raw Data File（Site/Wafer/Lot Level Summary）；支持多语言及文件服务器断线重连。
- **Judge Rule Engine**：支持良率、Bin 比例、统计量（AVG/STD/CPK）、Gross Die 等多种判定规则；支持 By Product/Recipe 策略管理及 Excel 批量导入。
- **MES 集成闭环**：支持 WJS 主动上报/MES 主动查询 Judge 结果；支持 Pass→Release、Fail→OCAP、No Data→Request 自动流转逻辑。

### 7. 生产资源与辅材管理 (Resource Management)

#### 7.1 载具管理 (Carrier)

支持载具全生命周期状态与位置追踪。

- **全类型载具**：支持 FOSB/FOUP/Cassette/Reticle Pod 管理；支持命名规则定制及状态（Hold/Clean/Scrap 等）管控。
- **位置与清洗**：集成 MCS 实现位置同步；支持清洗/检测状态管控及有效期检查；支持载具与 Lot Type 绑定及污染等级验证。
- **操作历史**：记录 Create/Assign/Exchange/Hold/Clean 等全操作历史。

#### 7.2 光罩管理 (Reticle)

支持光罩从入库到报废的全流程精细化管控。

- **状态与位置**：支持 Normal/Hold/Wait_QC/In_Use/Damage 等全状态流转；支持 E-Rack/Stocker/EQP 位置集成及手动位置校准。
- **使用控制**：支持 Process 前 Constraint 检查（Status/WaferCount/Inspection Time）；支持 Process 后自动更新状态及计数；支持 Reticle Inspection/Starlight 执行及 IRIS/PD Spec 校验。
- **Life Time 管理**：支持 Energy 累加及 Field 设定；支持 Lifetime 超限自动 Hold 及送修流程。

#### 7.3 光阻与耗材管理

支持化学品及消耗品的时效、库存与绑定管控。

- **光阻管理**：支持 Receive→Defrost→Install→Use→Terminate 全生命周期；支持退冰计时、有效期自动 Hold、FIFO 推荐及 Batch Confirm/Pi-run 提醒。
- **耗材 BOM 管理**：支持 BOM 配置绑定至 Product/BP/Step；支持运行时自动/手动耗用及可用材料校验。
- **治具管理**：支持 DPS 刀片等治具的 Create/Hold/Release/Inspection/Clean 及计米管理。

### 8. 自动化与系统集成 (Automation & Integration)

#### 8.1 全自动化支持 (Full Auto)

支持多级自动化模式及异常自愈，保障无人化生产。

- **多级自动化**：支持 Auto 3（Full Auto）、Auto 2（Manual Dispatch + Auto Transport）、Auto 1（Manual Transport + EAP）、Manual 四级模式切换。
- **异常自动恢复**：支持 FOUP 未到达/Track In 前异常的自动监控、Cancel Reserve 及最佳位置回存；支持 Alarm 系统集成及自动 Hold Lot。
- **高效搬运优化**：支持 Swap（Unload 触发 What Next）；支持 Port Queue 及 NTB/OHB 缓冲预约；支持 Direct Tool-to-Tool 搬运。

#### 8.2 自动点检与暖机 (Auto Monitor & Season)

支持设备预防性维护与状态准备的自动化执行。

- **Auto Monitor**：支持周期性 Monitor 任务定义（含容许时间窗口）；支持 Monitor Flow（前量→Process→后量）自定义；支持 Monitor Fail 自动 Inhibit Recipe/Constraint 设备。
- **Season Control**：支持按 Idle Time/Wafer Count/PM 触发 Season；支持 Season Lot 与 Production Lot 组预约及混合进机台；支持 Recipe Change Season 及 Zero-idle 模式。

#### 8.3 流程卡与实验管理 (RunCard)

支持灵活的实验设计与异常恢复流程。

- **Split RunCard (SRC)**：支持 Normal/Rework/Future/Multiple SRC；支持 By Wafer 实验设计、EDC Spec 自定义、Q-Time 增量及污染卡控；支持 SRC 合规性提交校验。
- **Recovery RunCard (RRC)**：支持设备故障/Running Hold 自动触发 RRC；支持按 Wafer 状态（未做/在做/已做）分流处理；支持 MFG→EQP→PE 多级签核及 Auto3 机台释放绑定。
- **Pi-Run 管理**：支持 APC Trigger（Auto）及 On Demand（Manual）两种 Pi-Lot 模式；支持 Pi-Lot Fail 后的 Remeasurement/Re-Pilot/Rework 异常处理。

#### 8.4 权限与安全 (Security)

支持细粒度的功能与数据权限管控。

- **多维权限模型**：支持 User/Role → Function Permission；支持 EqpType/Product/Technology/EqpStateTransition/Equipment 数据级权限。
- **操作安全**：支持重要操作二次密码验证；支持账号时效限制及 GUI 权限维护。

### 9. 高级制造模块 (Advanced Manufacturing)

#### 9.1 Wafer Bonding & Die Attach

支持晶圆键合与芯片贴装的特殊追溯与工艺管控。

- **Wafer Bonding**：支持 Wafer-to-Wafer/Glass Bonding；支持 Pre-Bonding→Cleaning→Bonding→Measurement 流程；支持 De-Bonding Rework 及 Adhoc Sorter 调整；支持 Auto/Manual Bond 及 Mapping 历史追溯。
- **Die Attach**：支持 Substrate Wafer 与 Die Wafer/Lot 绑定；支持 Attach 关系（Step/Order/Qty）记录及 EAP 上报追溯；支持外购 Die Wafer 入线边库及 Resource 匹配校验。

#### 9.2 Turnkey Solution

支持一站式服务业务模式与多阶层 BOM 生产。

- **多阶层串联**：支持通过 Turnkey Product Mapping 及 MBOM 实现 WLP→CP→DPS→WLP 等多阶层流转。
- **混合投产**：支持厂内自制与外来 Wafer 混合投产；支持工单属性决定入库 Shipping 或 Inventory。

#### 9.3 Wafer Map 与取放料

支持 Wafer Map 数据处理及 Die 级产出追溯。

- **Wafer Map 处理**：支持 Map 文件导入/导出、BIN 更新、Ink Die 及版本管理。
- **Pick & Place**：支持 Wafer→Die/Tape/Tray 捡晶；支持二次捡晶及原始 Wafer/Lot 双向追溯；支持 Die Bank 库存及良率管制。

# SPC

SPC: Statistical Process Control

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

## Cp, Cpk, Pp, Ppk

Cp: Process Capability Ratio, 过程能力指数

Cpk: Process Capability K Ration, 过程能力 K 指数

Pp: Process Performance Ratio, 过程绩效指数

Ppk: Process Performance K Ration, 过程绩效 K 指数

1. Cp, Cpk, Pp 和 Ppk 概念

    Cp, Cpk, Pp 和 Ppk 都是用来体现过程能力的指标, 它们是用来测量过程能力的指数(process capability index), 不是过程能力本身.

2. 过程能力的定义

    过程能力是指过程本身在没有外因干预、没有漂移(drift)(即统计学意义上可控 under statistical control)的情况下其产出品的均一程度(uniformity of product). 不难理解, 我们不可能直接测量过程本身, 而只能通过测量其产出品的某个特性来体现其能力. 通常用被测量的特性的离散程度, 即标准方差, (西格玛), 来表示过程能力. 而且过程能力被量化为 , 即其总宽度为 6 个西格玛.

    e.g. A 过程的西格玛=2, 其过程能力=`6*2=12`. B 过程的西格玛=2.5, 其过程能力=`6*2.5=15`. A 过程和 B 过程那个好呢?答案是: 视情况而定(it depends). 为什么?因为没有判断标准.

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

# AMS

# PMS

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

# AMA

# YMS

| Abbreviation | Full form                  | Desc             |
| :----------- | :------------------------- | :--------------- |
| YMS          | Yield Management           | 良率管理系统     |
| DMS          | Defect Management System   | 缺陷管理系统     |
| ADC          | Auto Defect Classification | 自动缺陷分类系统 |

mean 均值, 反应了数列的集中趋势

variance 方差, 反应一组数据时离散程度 (sigma^2)

standard deviation 标准差: 就是方差开根号, 在大样本中一般使用样本的标准差近似代替总体的标准差, 标准差可以计算钟型曲线 (正态分布)

## Tool Commonality

设备共同性

## ANova

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

## Regression analysis

回归分析

确定两种或两种以上变量间相互依赖的定量关系

R^2 范围: `[0, 1]`, 越接近 1, 说明线性回归线与原始数据越吻合

## WAT Chart

## Top Down Analysis

一种自顶向下, 逐步分解的性能分析

就比如二叉树 dfs 的时候每层 bfs 分析各个节点

## Pareto analysis

帕累托图, 排列图

将出现的质量问题和质量改进项目按照重要程度依次排列而采用的一种图表

## hard bin vs soft bin

- hard bin
  know the overall reason about the failure

- soft bin
  also know the compartment in which it has failed or compartment in which it has been placed

# DMS

# ADC

http://mirlab.org/dataset/public/?spm=5176.28103460.0.0.96a07551Xxqtvw

MIR-WM811K, 包含 811,000 个晶圆图谱

# RPT

| Abbreviation | Full form | Desc         |
| :----------- | :-------- | :----------- |
| RPT          | Report    | 生产报表系统 |

# FMS

# WPH

| Abbreviation | Full form                           | Desc                 |
| :----------- | :---------------------------------- | :------------------- |
| WPH          | Wafer Per Hour                      | 每小时晶圆数         |
| EOQC         | Electronic Outgoing Quality Control | 电子出货质量控制系统 |

# ERP

| Abbreviation | Full form                    | Desc             |
| :----------- | :--------------------------- | :--------------- |
| ERP          | Enterprise Resource Planning | 企业资源经营计划 |

# 硬件配置

AP 服务器 (Application Server)

- **承载业务逻辑的中间层服务器**: 与 DB(数据库服务器)相对, AP 服务器不直接存储核心数据, 而是运行 MES, EAP, SPC 等子系统的应用程序、中间件、Web 服务和 API 接口.
- **开发/测试环境的专用节点**: 这 3 台服务器专门用于搭建与生产环境隔离的 Dev/UAT 环境, 供开发人员进行代码调试、版本验证和用户验收测试, 避免测试操作污染生产数据库或影响产线运行.
- **区别于生产虚拟集群**: 生产环境的 AP 以虚拟机形式部署在 29 台宿主机上; 而开发 / 测试环境独立使用 3 台物理机, 既保证了测试资源的独占性, 也便于快速重装系统、克隆环境和模拟故障场景.

> **注意**: 此处的“AP”**不是** 指无线接入点, 也不是指先进过程控制, 在 CIM 硬件清单中“AP 服务器”是行业通用术语, 专指应用层服务器.

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

## Oracle 方案

| 序号 | 硬件系统名称                                   | 10K-13K WPM 期望数量    | 5K-8K WPM 期望数量      | 应用场景 / 数量拆解                                                                                                                                                                                                                                                                                                                                              | 应用板块                      |
| :--- | :--------------------------------------------- | :---------------------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| 1    | 2U 机架式 CPU 服务器 <br>(Oracle 生产 DB 集群) | 15 台 <br>+ 扩展单元    | 9 台 <br>+ 扩展单元     | **10K-13K 基准 (15 台)**: MES/SPC(2)、EAP/RMS/AMS/PMS/APC/RCM(3)、RTD(1)、ADG(1)、Report(1)、YMS/DMS(2)、FDC(2)、AMA(2)、FMB(1); 承载全部 15 子系统核心事务, RAC/ADG 物理部署; 先进制程>30% 时 FDC/APC+2 台. <br>**5K-8K 基准 (9 台)**: MES/SPC(2)、EAP/RMS/PMS(2)、RTD(1)、FDC/APC/RCM(2)、YMS/DMS/Report/AMS/AMA/FMB(2); 每新增 1 种工艺平台 YMS/FDC 独立+1 台 | Oracle 方案                   |
| 2    | 2U 机架式 CPU 服务器 <br>(Oracle 开发测试集群) | 3 台 <br>+ 扩展单元     | 2 台 <br>+ 扩展单元     | **10K-13K 基准 (3 台)**: UAT/DEV 环境按生产 1:1 镜像, 支撑 MES/EAP/RMS/SPC/Report/PMS/AMS/YMS/DMS/FDC/APC/RTD/AMA/RCM/FMB 全模块版本验证与回退测试; 每新增 1 个产品族+1 台. <br>**5K-8K 基准 (2 台)**: 含 1 台独立脱敏 DB 用于 15 子系统生产数据合规导入测试; 多版本并行验证时+1 台                                                                              |                               |
| 3    | 2U 机架式 CPU 服务器 <br>(Oracle 生产虚拟集群) | 28 台 <br>+ 扩展单元    | 12 台 <br>+ 扩展单元    | **10K-13K 基准 (28 台)**: 承载 15 子系统全部 AP/ 中间件 VM, 按 1:8 超分; MES/EAP/RMS/RTD/PMS/RCM 高并发事务集群占 50%, FDC/APC/YMS/DMS/Report/AMS/AMA/FMB 分析查询集群占 50%; 每+1K WPM 加 2 台. <br>**5K-8K 基准 (12 台)**: 按 1:8~1:10 加权超分; 每+1K WPM 加 1 台, 新工艺导入期临时+1 台                                                                      |                               |
| 4    | 全闪存 SAN 存储阵列 <br>(Oracle 专用 FC 架构)  | 2 台×260 TB<br>+ 扩展柜 | 2 台×100 TB<br>+ 扩展柜 | **10K-13K 基准**: 有效容量 260 TB, IOPS≥300K, 延迟<0.3 ms; NVMe 热层 150 TB(MES/SPC/EAP/RMS/RTD/PMS/RCM), SAS SSD 温层 110 TB(FDC/APC/YMS/DMS/Report/AMS/AMA/FMB); Oracle 分区启用存储级缓存加速, 禁用压缩; 每+1K WPM 加 1 个扩展柜. <br>**5K-8K 基准**: 有效容量 100 TB, NVMe 热层 60 TB, SAS SSD 温层 40 TB; 每+1K WPM 加 1 个扩展柜                           |                               |
| 5    | MES/EAP 终端 <br>(Oracle 关联工控电脑)         | 249 台 <br>+ 扩展单元   | 70 台 <br>+ 扩展单元    | **10K-13K 基准 (249 台)**: 覆盖 15 子系统全部工位; 自动化产线终端密度= 设备数÷5(占 60%), 半自动 / 手动工位密度= 设备数÷3(占 40%); 备件率 8%; 每+50 台设备加 8 台. <br>**5K-8K 基准 (70 台)**: 同比例缩放, 另加 5% 研发专用调试终端及半自动工位补配                                                                                                               | 终端数量待定                  |
| 6    | 数据采集与交互接口服务器 <br>(Oracle 侧)       | 13 台 <br>+ 扩展单元    | 7 台 <br>+ 扩展单元     | **10K-13K 基准 (13 台)**: 与 15 个子系统 DB 实例对应, 覆盖全部设备接入; 侧重事务完整性校验, 单线程处理为主; 标准协议设备 1 台带 30-50 台. <br>**5K-8K 基准 (7 台)**: 与 Oracle DB 物理机 1:1 对应; 新工艺验证期临时+1 台                                                                                                                                         | 与 CIM 系统 DB 服务器一一对应 |

## MySQL 方案

| 序号 | 硬件系统名称                                   | 10K-13K WPM 期望数量  | 5K-8K WPM 期望数量   | 应用场景 / 数量拆解                                                                                                                                                                                                                                                                                                                                                                                   | 应用板块                      |
| :--- | :--------------------------------------------- | :-------------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| 1    | 2U 机架式 CPU 服务器 <br>(MySQL 生产 DB 集群)  | 15 台 <br>+ 扩展单元  | 9 台 <br>+ 扩展单元  | **10K-13K 基准 (15 台)**: MES/SPC(2)、EAP/RMS/AMS/PMS/APC/RCM(3)、RTD(1)、YMS/DMS(2)、FDC(2)、AMA(1)、FMB(1)、备份节点 (1); 每台配≥3.84 TB NVMe SSD×4 作为本地数据盘, 采用 MGR/InnoDB Cluster 高可用; 先进制程>30% 时 FDC/APC+2 台. <br>**5K-8K 基准 (9 台)**: MES/SPC(2)、EAP/RMS/PMS(2)、RTD(1)、FDC/APC/RCM(1)、YMS/DMS/Report/AMS/AMA/FMB(2)、备份节点 (1); 每新增 1 种工艺平台 YMS/FDC 独立+1 台 | MySQL 方案                    |
| 2    | 2U 机架式 CPU 服务器 <br>(MySQL 开发测试集群)  | 3 台 <br>+ 扩展单元   | 2 台 <br>+ 扩展单元  | **10K-13K 基准 (3 台)**: UAT/DEV 环境按生产 1:1 镜像, 支撑 15 子系统快速 Schema 变更与多版本并行测试; 每新增 1 个产品族+1 台. <br>**5K-8K 基准 (2 台)**: MySQL 测试实例可与 AP 混部以节省资源; 合规审计需求增加时+1 台                                                                                                                                                                                |                               |
| 3    | 2U 机架式 CPU 服务器 <br>(MySQL 生产虚拟集群)  | 28 台 <br>+ 扩展单元  | 12 台 <br>+ 扩展单元 | **10K-13K 基准 (28 台)**: 承载 15 子系统全部 AP/ETL/ 采集 VM, MES/EAP/RMS/RTD/PMS/RCM CPU 密集型集群按 1:6 超分 (占 40%), FDC/APC/YMS/DMS/Report/AMS/AMA/FMB 轻量采集 / 日志集群按 1:10 超分 (占 60%); 每+1K WPM 加 1 台. <br>**5K-8K 基准 (12 台)**: 按 1:8~1:10 加权超分; 每+1K WPM 加 1 台, 新工艺导入期临时+1 台                                                                                  |                               |
| 4    | 2U 机架式存储服务器 <br>(MySQL 配套分布式存储) | 4 台 <br>+ + 扩展柜   | 2 台 <br>+ + 扩展柜  | **10K-13K 基准 (4 台)**: 承载 15 子系统 ETL 暂存区、历史数据归档、MGR 异步备份目标; 采用三副本分布式架构, 有效容量 130 TB; NVMe 缓存层 50 TB(MES/EAP/FDC/RCM 热数据缓冲), HDD/SAS SSD 容量层 80 TB(RPT/YMS/DMS/AMS/FMB 冷数据); 启用纠删码节省 30% 空间; 每+1K WPM 加 1 台. <br>**5K-8K 基准 (2 台)**: 有效容量 50 TB, NVMe 缓存层 20 TB, 容量层 30 TB; 每+1K WPM 加 1 台                             |                               |
| 5    | MES/EAP 终端 <br>(MySQL 关联工控电脑)          | 249 台 <br>+ 扩展单元 | 70 台 <br>+ 扩展单元 | **10K-13K 基准 (249 台)**: 覆盖 15 子系统全部工位; 自动化产线终端密度= 设备数÷5(占 60%), 半自动 / 手动工位密度= 设备数÷3(占 40%); 备件率 8%; 每+50 台设备加 8 台. <br>**5K-8K 基准 (70 台)**: 同比例缩放, 另加 5% 研发专用调试终端及半自动工位补配                                                                                                                                                    | 终端数量待定                  |
| 6    | 数据采集与交互接口服务器 <br>(MySQL 侧)        | 13 台 <br>+ 扩展单元  | 7 台 <br>+ 扩展单元  | **10K-13K 基准 (13 台)**: 与 15 个子系统 MySQL DB 实例对应, 覆盖全部设备接入; 侧重批量 ETL 与流式写入, 多线程并发处理; 非标协议设备 1 台带 10-15 台. <br>**5K-8K 基准 (7 台)**: 与 MySQL DB 物理机 1:1 对应; 新工艺验证期临时+1 台                                                                                                                                                                    | 与 CIM 系统 DB 服务器一一对应 |

# 团队搭建

## (一) CIM 业务划分

半导体领域中计算机集成制造 (CIM/Computer Integrated Manufacturing), 是行业标准系统, 作为半导体制造工厂 (FAB) 的“中枢神经系统”, 其核心业务为实现全流程自动化、数字化与智能化管控. CIM 系统包含四大核心业务板块: 设备自动化与控制、生产执行与追踪、智能调度与物流、工程与质量管理

### 1. CIM 子系统介绍

创新中心现存业务共包含 15 个 CIM 子系统

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

### 2. 现阶段痛点

现阶段因缺乏信息技术 (IT/Information Technology) 相关支撑, 无法对上述系统进行工作内容的推进, 包括: 厂商选型、生产系统软件适配、厂商软件的本地开发与部署、客制化功能需求开发与部署等.

### 3. 现阶段解决方案

现提议申请成立制造信息技术组 (MIT/Manufacturer Information Technology), 负责上述 15 个子系统的规划、实施、落地等工作

因办公人员不足的原因暂定根据最小规模划分原则, 在 MIT 组下按 CIM 系统业务模块进行划分业务模块

| 业务板块         | 包含子系统              | 对应小组 |
| :--------------- | :---------------------- | :------- |
| 设备自动化与控制 | EAP, FDC, RMS, RCM, APC | EAP 组   |
| 生产执行与追踪   | MES, SPC, AMS, PMS      | MES 组   |
| 智能调度与物流   | RTD, AMA                | RTD 组   |
| 工程与质量管理   | YMS, DMS, RPT, FMS      | YMS 组   |

其中, 因时间紧、任务重, 为确保通线时间节点, 应以 **EAP、MES、FDC** 三大系统的配套方案建设为重点, 再后续完成其余子系统的解决方案

应在 1-3 个月内组建 20 人自有团队, 并联合厂商驻场开发及协助人员以完成开发任务、资源整合、实施保障. 待系统稳定运行后, 逐步扩大 MIT 组的人数规模并降低外部依赖, 有序实现能力内化、知识沉淀、自主运维, 为 CIM 系统长期稳定运行与生产质量提供坚实支撑

---

## (二) MIT 组开发规划

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

## 术语

- SSO(Single Sign-On, 单点登录) 是一种身份认证机制, 它允许用户只需登录一次, 就可以访问所有相互信任的应用系统, 而无需在每个系统中重复输入用户名和密码.
- FTP(文件传输协议), 最传统、最底层的文件搬运工, 局限于非实时、无事务保证、需自行解析文件、错误处理困难
- ESB(企业服务总线), 当 FTP 把文件搬过来后, ESB 负责将其转化为标准服务调用; 或者在不同异构系统 (如 SAP ERP ↔ MES ↔ YMS) 之间做协议适配.
- CA (Certificate Authority, 证书授权中心), 负责签发、管理和吊销数字证书, 通常对接企业内部 PKI 体系或国家认可的第三方 CA 机构
- SDK (Software Development Kit, 签章开发套件), 嵌入到各业务系统中的“签章,引擎”, 通常为 DLL/JAR/REST API 形式, 支持国密 SM2/SM3 或国际 RSA/AES 算法

> SVID 是 Status Variable ID(状态变量标识符)

| 术语  | 全称                  | 作用                                                    |
| :---- | :-------------------- | :------------------------------------------------------ |
| SVID  | Status Variable ID    | 标识实时状态 / 传感器读数 (只读或周期性采集)            |
| ECID  | Equipment Constant ID | 标识设备配置常量 (如校准系数、硬件版本, 通常不频繁变化) |
| DVVAL | Data Value Definition | 标识可设定的工艺参数 (Setpoint, 可由 EAP 写入修改)      |

本质是“数据标签”

SVID 是一个整数编号 (如 12001), 它对应机台内部的一个具体变量. 例如:

SVID=12001 → 腔体温度 (Chamber Temperature)

SVID=12002 → 射频功率 (RF Power)

SVID=12003 → 气体流量 (Gas Flow Rate)

SVID=12004 → 当前加工晶圆数 (Wafer Count)

## 规划图

## EAP 组

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

## MES 组

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

## RTD 组

```txt
            [ RTD ] ←──→ [ AMA ]
               ↑            │
               │            ▼
           [ Queue/List ]  [ 物料搬运 ]
               │            │
               └───→ [ Lot 状态流 ]
```

## YMS 组

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

## 绘图规范

> 颜色规范:
>
> - EAP 组: 橙色系 (#D4A56B)
> - MES 组: 红色系 (#E74C3C)
> - RTD 组: 青绿色系 (#1ABC9C)
> - YMS 组: 蓝色系 (#3498DB)
> - 集成底座: 灰色 (#95A5A6)
>
> 连接线样式建议:
>
> - 实线: 同步调用 / 主流程
> - 虚线: 异步事件 / 告警通知
> - 粗线: 高频大数据流 (如 Trace Data / SEM Image)
> - 双向箭头: 状态同步 / 闭环反馈

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
| 采购方       | 作为需求表达与采购管理的纲领性文件，确保内部需求经跨部门对齐后对外统一输出; 通过标准化的结构与评分体系，保障招标过程的合规性、透明度与可审计性; 同时为后续 SOW 细化、合同谈判及供应商绩效管理提供不可变更的需求基线，从源头控制采购风险与履约偏差.                        |
| 投标方       | 作为响应编制与方案设计的唯一权威输入，明确界定“必须响应”与“可选增值”的边界，支撑精准的技术方案设计、资源规划与成本测算; 帮助识别采购方的隐性期望与评估权重，优化竞争策略; 同时作为判断项目可行性与商业价值的决策依据，避免因信息不对称导致的无效投入或履约风险.           |
| 项目执行团队 | 作为项目启动前的需求验证与交付蓝图预演载体，使执行团队在投标阶段即介入理解客户真实意图与验收逻辑; 为中标后 SOW 的快速转化、工作分解结构 (WBS) 制定及里程碑规划提供前置输入; 同时提前暴露需求模糊点与技术冲突，推动在签约前完成澄清，降低执行阶段的变更频率与范围蔓延风险. |

| 相关方       | SOW 的核心价值与职能定位                                                                                                                                                           |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 采购方       | 确保所有投标方基于统一的需求基准进行报价，保障评标工作的公平性与可比性; 同时作为合同不可分割的法律附件，明确界定交付范围与验收标准，有效规避履约争议及法律风险.                    |
| 投标方       | 为准确理解客户需求提供权威依据，支撑科学的工作量评估与成本测算，避免因需求误判导致的报价偏差 (低估引发亏损或高估丧失竞争力); 同时有助于系统性识别项目潜在风险，制定合理的应对策略. |
| 项目执行团队 | 作为项目范围管理的基准文件，为进度控制、成本管理及质量验收提供根本依据; 任何超出 SOW 约定范围的工作内容，均须严格遵循变更控制流程进行审批与管理，确保项目可控、合规推进.           |

## 保密

## SOW

SOW( Statement of Work): 工作说明书 / 工作范围说明

| 维度         | 技术架构                                      | 部署架构                                                 |
| :----------- | :-------------------------------------------- | :------------------------------------------------------- |
| 核心问题     | 系统用什么技术栈?模块间如何交互?数据如何流转? | 软件安装在哪些服务器 / 容器上?网络如何连通?资源如何分配? |
| 关注点       | 逻辑结构、功能分层、接口协议、数据模型        | 物理 / 虚拟拓扑、节点规划、网络分区、高可用策略          |
| 主要产出物   | 分层架构图、API 接口文档、ER 图、时序图       | 部署拓扑图、IP 地址规划表、资源配置清单、容灾方案        |
| 变更频率     | 相对稳定，随业务大版本迭代                    | 相对灵活，可随运维需求独立调整 (如扩容、迁移)            |
| 受众对象     | 开发人员、架构师、测试人员                    | 运维人员、DBA、安全管理员、基础设施团队                  |
| 典设中的定位 | 定义“标准化组件与集成规范”                    | 定义“标准化环境基线与资源模板”                           |

## 项目交付物要求

## 项目约束和资源要求

## 相应要求

## 工具平台

## 专业服务体系

1. 联系人
2. 时间安排
3. 要求

## 成功案例

## CIM 团队建制

OA(Office Automation): 办公自动化

OP(Operations): 运维 / 运营支撑

EES(Equipment Engineering System): 设备工程系统

BPM(Business Process Management): 业务流程管理

ISM(Intelligent Smart Manufacturing): 智能制造系统

- CIMPF(CIM Platform Foundation): CIM 平台基础
    - 包括微服务架构、数据库中间件、消息总线、统一认证、DevOps 工具链及公共组件开发，为上层 MES/EES/YMS 等应用提供标准化支撑.

# FAQ

> AP(Application Platform) 应用平台
>
> - Master AP: 指上位管控平台. 它不直接对接机台，而是作为 EAP 的管理中枢，负责:
>     - 统一管理多台 EAP 实例的部署、升级、配置下发;
>     - 提供统一的 GUI 界面、日志聚合、告警监控;
>     - 作为 EAP 与 MES/FDC/RMS 等工厂级系统之间的集成网关;
>     - 管理设备模板、Recipe, Pilot 验证等平台级资源.

| 缩写 | 全称                 | 核心职责                                                                                                            | 对应层级          |
| :--- | :------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------- |
| AP   | Application Platform | 业务逻辑层. 承载 VM 模型运算、Recipe 管理、数据采集策略、与 MES/FDC 交互等上层业务.                                 | 上位机 / 服务器端 |
| EI   | Equipment Interface  | 通讯协议层. 负责 SECS/GEM, OPC, PLC 等底层协议的解析、消息收发、连接管理，将机台原始数据转化为 AP 可识别的标准格式. | 驱动层 / 边缘端   |

Q: 为什么 VM 系统需要区分 AP 和 EI ?

A:

1. 解耦设计与多机台适配
    - VM 需要对接大量不同型号、不同协议的设备。EI 作为“翻译官”屏蔽了底层差异(如 A 机台用 SECS-II，B 机台用 OPC-UA)，向 AP 提供统一的数据接口。AP 只需关注 VM 算法本身，无需关心数据是如何从机台获取的
2. 性能隔离
    - VM 对数据采集的实时性要求极高(尤其是 Trace Data)。EI 通常以独立进程/线程运行，甚至部署在靠近机台的 Edge Server 上，确保高频采集不会阻塞 AP 的模型计算和数据库写入
3. 标准化交付
    - 在许多 CIM 项目中，EI 往往是标准化产品(如前面提到的 FA SECS Driver)，而 AP 则包含大量客制化的 VM 建模逻辑。区分两者有利于分工: EI 团队专注协议稳定性，AP 团队专注工艺模型精度
