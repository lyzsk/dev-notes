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

| Abbreviation | Full form                           | Desc                                                                      |
| :----------- | :---------------------------------- | :------------------------------------------------------------------------ |
| BR           | Business Rule                       | 业务规则建模                                                              |
| BSI          | backside illumination               | CMOS 背照式工艺                                                           |
| CMP          | Chemical Mechanical Polishing       | 化学机械抛光 <br/> 目的是磨掉金属介质                                     |
| DIFF         | Diffusion                           | 扩散, 可以长膜 <br/> 将掺杂源, 掺杂物和晶圆一起进行高温处理               |
| CVD          | Chemical Vapor Deposition           | 化学气相沉积 <br/> 用于进行半导体材料设备的专用设备, 包括反应室, 供气系统 |
| PVD          | Physical Vapor Deposition           | 物理气相沉积                                                              |
| EPI          | Epitaxial                           | 外延层生长衬层, EPI-Wafer                                                 |
| IMP          | Implant                             | 离子注入金属膜                                                            |
| METAL        | metal-semiconductor(MS) contact     | 金属介质沉积                                                              |
| PR           | PhotoResist                         | 光阻                                                                      |
| PW           | Product wafer                       | 产品晶圆                                                                  |
| SUP          | Support                             |                                                                           |
| WAT          | Wafer Acceptance Test               | 晶圆可接受测试                                                            |
| CP           | Chip probing                        | 针对 Wafer 的探针测试 <br/> 目的是剔除加工有故障的 Die                    |
| IQC          | Incoming Quality Control            | 来料校验                                                                  |
| IPQC         | In-Process Quality Control          | 制程校验                                                                  |
| FQC          | Final Quality Control               | 成品校验                                                                  |
| OQC          | Outgoing Quality Control            | 出货检测                                                                  |
| RSP          | Reticle Pod                         | Carrier 的一种, 用于防止 Reticle                                          |
| AMC          | Airborne Molecular Contamination    | 气态分子污染物                                                            |
| RTP          | Rapid Thermal Processing            | 退火, 快速热处理                                                          |
| RC           | RCP_CHANGE                          | 配方变化后, 需要 Season 进行测试                                          |
| RI           | RCP_IDLE                            | 配方无变化, 闲置时间也需要放 Season 进行测试                              |
| OOC          | Out of Cotrol                       | 管控线 [-99.5, 100.5]                                                     |
| OOS          | Out of Specification                | 规格线 [-99, 101]                                                         |
| OHB          | Over Head Buffer                    | 空中存储装置                                                              |
| OHT          | Overhead Hoist Transfer             | 天车搬运系统                                                              |
| OOA          | On-Orbit Assembly                   | 在轨组装, 打包                                                            |
| STK          | Stocker                             | 晶圆盒储存库                                                              |
| WPH          | Wafer Per Hour                      | 每小时晶圆数                                                              |
| EOQC         | Electronic Outgoing Quality Control | 电子出货质量控制系统                                                      |
| ERP          | Enterprise Resource Planning        | 企业资源经营计划                                                          |

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

## 非功能性要求

### 1. 高可用性

支持无单点故障的全天候不间断运行架构.

- **无单点架构**: 系统无单点故障, 全天候不间断高效运行, 满足月产至少 6 万片以上的产出需求.
- **不停机升级**: 硬件、软件及应用系统升级均无需停机, 不影响用户使用.
- **负载均衡**: 全部采用负载均衡机制, 保证系统的高可用性.
- **并发与一致性**: 提供良好的事务并发控制及数据一致性和完整性约束.
- **历史数据清理**: 提供高效的历史数据清理机制, 保障系统可持续性, 性能不随时间推移下降.

### 2. 高扩展性

支持不停机扩展的开放式架构与灵活部署.

- **不停机扩展**: 良好的系统架构, 可不停机扩展硬件及软件, 满足业务增长需求.
- **分离部署**: 各逻辑单元协同工作但可分离部署, 应用进程可部署在单台或多台服务器上.
- **开放API**: 提供完整的应用程序接口 (API) 及详细说明, 便于二次开发扩展功能.
- **开放式架构**: 面向服务或消息驱动的开放式架构, 可安全便捷地与其他系统集成.
- **64位支持**: 支持 64 位系统.
- **在线调参**: 系统参数在必要的时候可以在线修改进行调整, 无需停机.

### 3. 数据及系统安全性

支持可靠的数据保护、权限管控与操作追溯.

- **数据备份**: 提供可靠的数据备份机制保证数据安全.
- **灾难恢复**: 提供可靠的应用系统备份机制, 保证系统能从灾难中快速恢复.
- **版本控制**: 关键数据有版本控制, 并在审核后生效, 可与工作流系统协同工作.
- **权限与审计**: 提供权限管理和审计功能.
- **防呆机制**: 提供必要的防呆功能, 防止系统或人为导致的错误操作.
- **历史记录**: 所有的配置变更、交易或行为都需要有历史记录.
- **登录记录**: 所有系统需要记录登录信息, 如 who, when, where, which system, Client Information 等.

### 4. 易维护性

支持便利的运维工具、完善的日志体系与规范的开发流程.

- **升级发布工具**: 提供便利的系统升级及新功能发布工具.
- **管理与监控工具**: 提供必要的系统管理工具和性能监控工具.
- **独立Log模块**: 提供单独的 Log 模块, Log 支持分级, 容易查找、统计和分析, 并能够按照规定的格式写入 ES 数据库.
- **Log压缩**: 所有 Log 需要提供压缩功能, 并可以自定义压缩区间.
- **日志分析**: 提供方便的日志分析工具.
- **关键错误告警**: 系统发生关键错误 (如数据库错误、代码错误、通信错误等) 时, 系统监控工具要能及时发现并以邮件的方式发送到指定用户.
- **异常自动处理**: 当系统假死, crash, out of memory, CPU high (可自定义) 等情况发生时, 系统需在第一时间发现并以邮件的方式发送到指定的用户, 并具备自动重启功能.
- **Error Code管理**: 所有的错误都必须有一个唯一的 Error Code, Error Code 必须统一管理和分发.
- **客户端版本标识**: 所有的客户端必须标明版本号、环境、厂别; 版本号、环境信息可配且仅在一个地方配置.
- **广播消息**: 提供向已登录 MES 系统的客户端发送广播消息的功能, 例如新功能发布后通知用户升级客户端.
- **代码规范**: 所有系统的开发代码应符合客户规定的代码开发规范, 复杂逻辑要有清晰的逻辑说明, 并且要配合用户进行代码 review.
- **独立环境**: 提供独立的开发环境和测试环境 (软件和硬件都独立于生产环境), 开发和测试过程不影响生产系统.

### 5. 用户界面及体验

支持统一的登录、界面风格与明确的系统响应时间指标.

- **单点登录**: 支持单点登录 (SSO), 用户只需要登录一次就可以访问所有相互信任的 CIM 应用系统, 少数子系统可以有独立的账户管控.
- **多语言支持**: 支持简体中文、繁体中文和英文.
- **统一界面风格**: 统一的界面风格, 合理的界面布局以及必要的重点信息差异显示.
- **交互体验**: 提供必要的防呆、准确详细的错误提示及快速的界面反馈.
- **性能指标定义**: Inline function 为 Run 货过程中由系统触发的 Function; Offline function 为由用户 Manual 操作的 Function; Inline/Offline function 指一个完整的 Transaction, 而非单独函数 / 方法 / 过程.
- **实时通讯响应**: MES 内部子系统之间以及 MES 与外围系统之间的实时通讯响应时间 95% 须在 1 秒内.
- **Inline响应时间**: CIM 系统 Inline function 响应时间 90% 在 1 秒内, 99% 在 3 秒内, 100% 在 5 秒内.
- **Offline响应时间**: CIM 系统 Offline function 响应时间 99% 在 5 秒内, 100% 在 30 秒内.
- **未达标处理**: 如果不能达到上述 Spec, 需要列出 Function 列表并详细解释原因, 客户接受后才能上线, 否则必须优化至 Spec 范围内.

### 6. 各系统主要性能指标性能

支持各子系统明确的性能处理能力指标.

- **EAP性能**: 同时收到 EQP 多个消息的处理不能 delay, 具有至少 10 message/ 秒的处理能力, 个别大的消息处理时间不超过 2 秒; 其它系统发送的请求在 1 秒内处理完成, 个别大的消息处理时间不超过 2 秒.
- **RMS性能**: 上传创建 Recipe 时间不大于 30 秒, 个别大的消息处理时间不超过 60 秒; 单 Recipe 比对的时间不能大于 3 秒, 个别大的消息处理时间不超过 6 秒.
- **SPC性能**: 高效的数据绘图能力, 1000wf 25 个参数绘图时间小于 45 秒; 1000wf 250 个参数绘图时间小于 5 分钟.
- **PMS性能**: 其它系统发送的请求要在 2 秒内处理完成.
- **APC性能**: 其它系统发送的请求在 3 秒内处理完成; 完成量测数据运算反馈在 10 秒内处理完成.
- **FDC性能**: FDC 底层分流工具不能有延迟; 在机台性能允许的前提下, 支持 10 Hz 的取值频率; FDC 数据绘图能力: 100 点数据 _ 200 参数 _ 4000wf 绘图时间在 25 秒左右.

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

### 1. 基本功能

#### 1.1 跑货流程控制

支持与机台及各类外设整合, 实现从载具进出、工艺前校验、工艺执行到工艺后校验的全流程跑货控制, 并提供灵活的配置化能力.

- **设备与外设整合**:
    - 与机台、BarCode 扫码枪、SmartTag/SMIF、RFID 等整合, 实现对设备的控制与信息交互.
    - 支持 SECS、HSMS、PLC 等通讯协议, 实现与设备的通信; 支持 SECS-I, SECS-II, GEM 等半导体标准通讯.
    - 支持 Serial, TCP, TCP_SECS1, UDP, PIPE, PLC, Barcode, RFID, SMIF 等接入方式.
    - 支持大报文处理, 断线重连, 通讯超时与异常恢复, 保障通讯稳定可靠.
    - 支持单台 EAP 连接多个设备, 如 Inline 机台、SMIF、Smart Tag、RFID Reader.
    - 支持连接多种数据库, 如 Oracle、PostSql 等.
- **GEM 能力**:
    - 完整实现 Communication, Control, Processing 三类 GEM 标准状态机.
    - 支持 COMMUNICATING, OFF-LINE/LOCAL/REMOTE, IDLE/READY/EXECUTING 等状态同步.
    - 支持 S1/S2/S5/S6/S7/S10 等常用 Stream.
    - 支持 Collection Event, Report, SV/DV/EC 数据采集.
    - 支持 Alarm Set/Clear 成对上报.
    - 支持 Remote Command START, STOP, PAUSE, RESUME, ABORT 等命令及 ACK 处理.
- **配置化管理**:
    - 机台事件动态配置, 系统信息配置管理, 均通过 ini 文件进行配置.
    - 设备初始化以及工艺前校验模块的配置管理.
    - 可配置的 EAP Scenario, 实现逻辑与功能分离; 支持 EAP Scenario 的图形化配置, 显示和修改.
    - 支持异常流程, 动态事件配置, Port/Chamber/Recipe 路径配置, Inline 多设备配置.
- **设备状态监测与控制**:
    - 设备通讯状态监测, 至少包含通讯断开 (Disconnect)、设备离线 (Offline)、设备本地控制 (Online-Local)、设备远程控制 (Online-Remote), 同步设备状态.
    - 设备控制状态与工艺状态检查, 同步设备状态变化.
    - 支持切换设备 Offline/Online 状态.
    - 支持设备重连或者 Offline 切换到 Online 的自动初始化.
- **Load Port 控制**:
    - 支持控制 Load Port 载入载出, 同步 Load Port 状态变化.
    - 支持 300mm LoadPort, FOUP/FOSB/OpenCassette 的自动 / 手动模式控制.
    - 支持 E84/E87 标准流程: Carrier 到达, ID 验证, SlotMap 验证, Proceed, Complete, Release, CarrierOut 等.
- **工艺前校验**:
    - 支持工艺前的 Mapping 检查, 区分数量校验与位置校验, 可通过配置文件进行配置.
    - 支持工艺 Recipe 一致性校验; 支持 Run 货前校验 RecipeID 存在性及与 MES/RMS 配方一致性.
- **工艺中监控**: 支持工艺时晶圆工艺状态检查, 及时上报每片晶圆工艺状态.
- **工艺后校验**:
    - 支持工艺后的 Mapping 检查, 区分数量校验与位置校验, 可通过配置文件进行配置.
    - 支持工艺后正常工艺晶圆数量校验.
    - 支持工艺后对设备参数, 如 SV/EC/DummyStatus 的校验.
- **量测数据处理**: 支持量测数据具体位置灵活配置, 支持量测数据过滤与数据转换.
- **数据采集与上报**:
    - 支持 SECS/GEM, TCP/IP, File, Database, FTP, PLC 等方式采集数据.
    - 支持设备事件, 报警, 状态, 常量, 工艺参数等数据采集.
    - 支持数据格式转换与采集开关配置.
    - 支持向 FDC, AMS, MES 等系统上报.
- **状态同步**: 支持设备通讯状态, Online/Offline, Local/Remote, Port Auto/Manual, 设备运行状态, Chamber 状态与上位系统实时同步.
- **物料追踪**:
    - 支持 Track-in, Track-out, Hold 等过账信息实时上报.
    - 支持 Buffer 管控及 Cassette 进出 Buffer 信息上报.
    - 支持 Wafer 进出 Chamber 信息采集及 Wafer History 采集.
- **光罩管理 (Reticle)**:
    - 支持光罩 Load/Unload 及 Reticle Library 状态展示.
    - 支持光罩使用次数采集.
    - 支持 IRIS 检测数据上报.
    - 支持光罩预约及 Run 货前光罩状态验证.
- **异常处理与恢复**: 支持安全且便于处理的异常处理流程, 支持流程异常中断的原地恢复.
- **作业控制**: 支持 FOUP/Cassette 优先级控制和 Wafer 级流程控制.
- **下 Job 方式**: 支持多种下 Job 方式, By Lot, Batch, Wafer, Recipe 等.
- **特殊流程适配**:
    - 支持 OpenCassette、无 Load Port、文件解析等涉及特殊流程的安全生产控制流程制定, 同时进行 UI 的相应客制化.
    - 支持与特殊工艺设备, 如 MOCVD、Bond、Debond 适配的安全生产控制流程.
- **并发与框架支持**:
    - 支持多线程锁.
    - 支持 Fixed Buffer、Metrology、Internal Buffer、Photo Inline、Sorter、FOUP Clean 几种各类型 EAP 框架.
- **系统集成**: 支持与 MES, RMS, APC, FDC 等系统的整合.
- **警报管理**: 支持实时设备警报收集、警报过滤、分级管理, 实现邮件通知、Hold Lot 等功能.

#### 1.2 EAP 模板管理

支持按设备 Buffer 类型、用途、工艺、通讯方式建立模板库, 沉淀标准化 Scenario, 提升后期开发与导入效率.

- **内置模板**: 支持 FixedBuffer, Inline, Furnace, Wet, InternalBuffer, Sorter, CarrierExchange, Bonding, FoupClean, FoupInspection, ReticleStocker, ReticleInspection, N2Purge, 开盒器等设备模板.
- **模板复用**: NewType 设备优先按模板沉淀复用.

#### 1.3 EAP UI / 客户端

支持简洁直观的图形化操作界面, 支持多机台聚合、权限管控与消息记录管理.

- **状态显示**: 支持简洁清晰的设备状态显示.
- **多机台聚合**: 支持一个 UI/OUI 对应多台 EAP, UI 关闭不影响 EAP 正常运行, 支持查询 UI 对应 EAP 信息.
- **权限管控**: 支持权限配置, 支持同步 MES 权限进行管控; 支持账号权限管理与中英文消息.
- **消息记录**: 支持消息记录查询, UI 界面可查询 300 条数据; 支持 UI 消息记录, 按照设备和时间生成日志文件; 支持消息格式与消息颜色设定; 支持消息记录及设备, 物料, 错误信息查询.
- **异常干预**: 支持手动指令发送和异常处置.
- **移动终端**: 支持 PDA (安卓) 移动终端 APP UI.

#### 1.4 EAP 日志

支持完善、分类清晰且可灵活配置的日志机制, 便于问题定位与测试开发.

- **日志分类**: 提供详细灵活且分门别类的日志, 包括但不限于 SECSLog, EventLog, MESLog, RMSLog, UILog, ErrorLog, StatusLog, AlarmLog 等.
- **日志文件管理**: 日志文件可以根据时间和大小为每台设备创建, 支持配置日志文件的路径, 支持定期文件自动压缩, 时间可配置; 支持 Log 分级, 按时间 / 大小切分, 定时备份和清理.
- **问题定位**: 提供根据日志进行问题定位与解决的方案; 支持问题追踪与日志分析工具.
- **日志回放测试**: 支持根据 SECSLog 模拟机台进行跑货测试, 便于设备测试开发与运维.

### 2. 运维和集成

#### 2.1 EAP 运维

支持覆盖开发、测试、部署、监控、升级全生命周期的运维能力, 保障系统高可用与易维护.

- **模拟器与测试环境**:
    - 支持根据 MESLog 模拟 MES 进行消息收发, 复现日志, 便于接口开发测试与运维.
    - 支持模拟 EAP 进行 SECS 测试, 便于设备测试与运维.
    - 提供设备模拟器、MES 模拟器与 EAP 模拟器, 便于本地测试.
    - 支持 SECS Log 回放, SECS 测试工具.
    - 提供完整的测试环境, 进行测试与开发.
    - 支持 NewType 模板开发, Lab Test, Fab Test, 回归测试和量产切换验证.
- **跨平台与兼容性**: 系统能跨平台运行 (Windows, Linux); 客户端至少兼容 Windows 10 x86/Windows 10 x64 及以上操作系统.
- **运维监控**: 提供统一的运维监控平台, 支持异常邮件通知; 支持第三方监控接入与异常告警.
- **EAP部署与版本管理**:
    - 支持 EAP 状态查询, Start/Stop/Restart, Code Version 查看, 日志查看.
    - 支持远程部署, 批量升级, 版本比对, 预约升级.
    - 支持 Pilot 验证, Rollback, 跨环境同步.
    - 支持部署与操作审计.
- **部署与升级**:
    - 支持版本回退.
    - 支持单台更新和批量更新.
    - 支持批量部署, 批量进行 Common 模块的升级替换.
    - 支持 Scenario 可视化配置.
- **消息中间件**: 支持 TibcoRV, WebService, RabbitMQ, RocketMQ 等主流中间件及相关服务, 实现与周边系统 (如 MES, RMS, UI) 的消息通讯.
- **高可用与性能**:
    - 支持双活.
    - 提供对应软件的压力测试报告.
    - 支持工厂满产负荷时系统 Performance 如下:
        - SECS 通信: <100 毫秒.
        - Recipe 校验: <2 秒; 查询 Recipe 内容: <2 秒.
        - 进站: <3 秒; 出站: <3 秒.
        - 数据收集: <0.5 秒/批, <1.5 秒/多批.
- **开发与管控**:
    - 支持成熟的开发语言 (C#、Java 等), 便于运维与开发.
    - 完善可靠的开发、测试、部署管控流程.
    - 支持 EAP 源代码管理, 提供各组件源代码.
- **异常恢复 SOP**: 提供 EAP 和 RMS 服务器异常处理流程与恢复 SOP.
- **文档与培训**:
    - 提供 EAP 开发工具详细文档和开发指导书, 提供 EAP 开发工具培训和各类型设备开发培训.
    - 提供系统设计文档、开发文档、操作文档、运维文档、系统核心 API 文档等, 用于二次开发和日常运维.
    - 面向 IT 提供系统开发运维培训与问题解答, 面向用户提供系统基础操作培训与问题解答.
    - 提供测试过程中产生的所有文档, 包括但不限于 SECS 功能测试、Lab 测试、Fab 测试、Pirun 测试、Scenario 流程图等.
- **项目管理**: 提供项目管理方案, 进行项目追踪, 保证项目推进状态.

#### 2.2 EAP 与 MES 整合

支持与 MES 的深度整合, 覆盖账户验证、信息交互、作业执行与设备状态同步等核心业务.

- **账户与权限**: 支持同步 MES 账户进行用户验证及用户信息获取及权限验证.
- **信息获取与上报**: 支持请求 MES 获取 Carrier 信息、Lot 信息、设备信息、Batch 信息等, 并支持上报上述信息至 MES.
- **匹配验证**: 支持请求 MES 验证 Lot 与设备是否匹配; 支持 Recipe 校验.
- **EDC 量测数据**: 支持请求 MES 获取 EDC 量测信息与上报设备量测数据.
- **过程信息上报**: 支持上报 MES Process Start 与 Process End 时间及信息.
- **作业动作执行**:
    - 支持请求 MES 执行 Job In、Job Out、Cancel Job In、Hold Lot 等动作.
    - 支持请求 MES 执行 Batch Job In、Batch Job Out.
- **异常处置**: 校验不匹配时支持退 Port, Hold Lot, 报警等处理.
- **专项数据上报**: 支持上报 MES 设备 PMS Parameter 信息, 支持上报 MES Wafer 的 T7Code.
- **专项设备作业支持**:
    - 支持 Sorter Job 信息请求、Sorter Job In、Sorter Job Out, 支持 Split、Merge 等多种类 Sorter Action.
    - 支持 Bonding 和 Debonding 的 Job 信息请求、Job In、Job Out.
    - 支持 MOCVD 设备的 Job 信息请求、Job In、Job Out.
    - 支持 NPW 相关操作请求, Dummy In、Dummy Out、Monitor Start、Monitor End、Clean Start 和 Clean End 等功能.
- **设备状态同步**:
    - 支持 MES 控制设备 Offline/Online 状态, EAP 需同步更新设备状态至 MES.
    - 支持异常时请求 MES 切换设备状态.
    - 支持 MES 侧状态查询和切换控制 (远程控制).

#### 2.3 EAP 与 RMS 整合

支持与 RMS 系统的接口整合, 实现 Recipe 的双向传输与可配置的校验机制.

- **Recipe 解析上传**: 支持对设备 Recipe Parameter, Recipe Body 的解析并上传至 RMS 系统.
- **Recipe 抓取**: 支持 RMS 系统请求抓取设备 Recipe/Sequence.
- **双向传输**: 支持设备 Recipe 上传至 RMS 系统与 RMS 系统中 Recipe 下载至设备.
- **RMS 协同**: 支持 RMS 请求抓取, 下载, 比对, 版本校验.
- **接口整合**: 支持与 RMS 接口进行整合.
- **信息展示**: 支持当前 Recipe 信息展示.
- **校验配置**: 支持 By LotType/StepId 进行判断是否需要进行 RMS 校验, 可通过配置文件配置.

#### 2.4 EAP 与上位系统集成

支持与各类上位系统集成, 接口方式灵活多样.

- **集成范围**: 支持与 MES, RMS, FDC, APC, AMS, PMS, AMHS, RCM 等CIM其他系统集成.
- **接口方式**: 支持 REST/Web API, TCP/IP, DB/File 等接口方式, 具体以客户 CIM 接口规范为准.

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

### 1. 系统设置 (System Settings)

#### 1.1 登录 / 登出

支持系统访问的基础身份验证.

- **人员登录验证**: 支持人员登录验证, 确保系统访问安全.

#### 1.2 菜单管理

支持个性化的界面布局配置.

- **菜单自动隐藏/显示**: 支持根据用户喜好设置菜单的隐藏与展示.

#### 1.3 个人信息

支持用户查看个人信息.

- **个人信息展示**: 支持展示用户的个人信息.

#### 1.4 安全维护

支持用户账号安全的自助维护.

- **密码修改**: 支持用户修改个人密码信息.

#### 1.5 帮助文档

支持在线帮助文档访问.

- **在线帮助文档**: 支持用户打开帮助文档.

#### 1.6 多语言

支持多语言界面切换.

- **多语言支持**: 默认支持用户选择语言 (中文 / 英文).

### 2. 用户管理 (User Management)

#### 2.1 用户信息维护

支持用户基础信息的统一管理.

- **用户信息管理**: 支持在 FAB 的部门下输入 / 导入用户信息.

#### 2.2 用户组权限维护

支持基于用户组的权限配置.

- **用户组设置**: 支持在用户部门下添加用户组, 并关联用户和设备, 即设定用户组权限.

#### 2.3 用户层级维护

支持组织从属关系的定义.

- **用户层级设置**: 支持根据车间管理岗位, 设置用户的从属关系以及区域的关系.

#### 2.4 角色与权限

支持角色化管理与细粒度权限管控.

- **角色管理**: 提供角色管理, 支持自定义角色.
- **细粒度权限**: 提供按钮级别权限控制及数据层权限控制.

### 3. 设备管理 (Equipment Management)

#### 3.1 工厂信息维护

支持多 FAB 的集中管理.

- **FAB 管理**: 支持用户输入 / 导入 FAB 信息, 支持多个 FAB 同时使用且互不影响.

#### 3.2 AREA 信息维护

支持车间区域信息的维护.

- **区域管理**: 支持用户根据车间输入 / 导入区域信息.

#### 3.3 部门信息维护

支持部门组织信息的维护.

- **部门管理**: 支持用户输入 / 导入部门信息.

#### 3.4 设备类型维护

支持设备类型及腔体结构的定义.

- **设备类型管理**: 支持用户在区域下输入 / 导入设备类型信息, 以及设置设备类型的腔体信息.

#### 3.5 设备信息维护

支持设备台账与腔体状态管理.

- **设备管理**: 支持用户在设备类型下输入 / 导入设备信息, 并且启用 / 暂停设备的腔体信息.

#### 3.6 邮箱组配置

支持报警邮件推送的群组配置.

- **设备邮件管理**: 支持根据部门建立邮件组, 并关联用户以及设备, 用于后续推送邮件.

### 4. 参数采集设置 (Data Collection Configuration)

#### 4.1 参数管理

支持采集参数的批量维护与同步.

- **参数导入导出**: 支持按照设备 / 腔体的 SVID/DVID 的导入导出.
- **同型同步**: 支持同类型设备的 SVID/DVID 的相互同步.

#### 4.2 模板管理

支持参数采集的模板化配置与虚拟参数定义.

- **通用模板**: 支持根据设备类型建立通用的参数管理模板, 并绑定到设备;支持多腔体设备共用同一模板, 也可使用不同的模板.
- **虚拟参数**: 支持添加虚拟参数, 虚拟参数可通过图形化的组合, 支持常用的算数表达式, 并支持虚拟参数的模拟.
- **KEY Parameter**: 支持 KEY Parameter 的设定.

#### 4.3 模板&腔体绑定

支持模板与腔体的绑定及自动同步.

- **绑定关系**: 支持腔体与模板的绑定关系;支持绑定后腔体的 SVID 自动同步, 且虚拟参数的 SVID 自动与该腔体的 SVID 绑定.
- **数据校验**: 支持对绑定的数据进行校验;支持 KEY Parameter 的验证功能.

#### 4.4 事件管理

支持设备事件的定义与工艺事件绑定.

- **事件维护**: 支持按照设备类型输入 / 导入机台的所有事件.
- **Process Event 绑定**: 支持设置设备类型 Process Event 的类型, 并设定设备事件与 Process Event 的绑定关系.

#### 4.5 维度信息维护

支持 Context 维度与配方信息的维护.

- **Context 管理**: 支持用户添加 / 删除 / 修改 Context 信息;支持常用的 Context 信息, 如 Lot ID, Carrier ID, Slot ID, Wafer ID, Stage, Step, Recipe ID, Product ID 等.
- **配方信息**: 支持用户导入配方信息以及配方的步骤信息.

#### 4.6 参数计划配置

支持灵活的数据采集计划定义.

- **采集计划**: 支持根据 Process Type 建立采集计划;支持灵活定义数据收集计划 (Data Collection Plan), 可根据事件、时间或数据点的条件设置数据收集的起始点和结束点.
- **多源数据采集**: 支持收集 Trace Data, Event Data, Alarm Data;支持收集 Facility Data;支持与附属设备 (External Sensor) 连接并收集数据.
- **差异化采样**: 不同 Sensor 或不同 Step 可以设置不同的采样频率.
- **特殊数据收集**: 支持 Non-Wafer Data, Non-Process Data 收集.

#### 4.7 通信协议

支持多种工业通信协议的数据接入.

- **标准协议**: 支持 SECS/GEM 协议、Interface A 协议、OPC 协议收集数据.
- **非标接入**: 支持从 File, DB, FTP, TCP/IP 中收集 Extra Sensor 数据.

#### 4.8 设备通信模式

支持多种设备数据采集模式.

- **Polling 模式**: 支持 Polling 方式收集数据.
- **Trace 模式**: 支持 Trace 方式收集数据.

#### 4.9 数据上报监控

支持数据采集异常的自动报警.

- **断流报警**: 支持在设定的时间段内没有采集到设备数据时自动报警.

#### 4.10 PT 中间件

支持数据分流的中间件能力.

- **PT 分流**: 能够提供 PT, 支持 EAP 的数据与 FDC 的数据进行分流.

#### 4.11 系统对接

支持与外围系统的集成.

- **Context 获取**: 支持与 EAP 或者 MES 系统对接, 获取设备当前作业 Context 信息.

### 5. 告警规则管理 (Alarm Rule Management)

#### 5.1 告警规则设置

支持告警规则的统一维护.

- **规则维护**: 支持用户添加、修改以及导入告警规则, 告警规则的设定符合 WECO 标准.
- **SPC Alarm Rule**: 支持 SPC Alarm Rules 及自定义 Alarm Rule; 支持基于算法, 参数设定 Alarm Rule 模板; 单个模型支持设置多个 Alarm Rule.
- **Rule 仿真测试**: 支持 Alarm Rule 的仿真测试, 评估新 Alarm Rule 的执行结果.

#### 5.2 告警定义

支持分级报警方式的定义.

- **分级报警**: 支持根据告警规则, 设定 Warning, Critical 以及 Outlier 的报警方式.

#### 5.3 数据质量报警管理

支持数据采集质量的报警配置.

- **质量报警**: 支持根据设备类型设置数据采集的数据质量报警, 在没有达到采集的点数时进行报警的推送.

### 6. 模型管理 (Model Management) / 故障侦测 (Fault Detection)

#### 6.1 UVA 模型创建与建模配置

支持单变量模型的创建与条件配置, 及基于 Context 的精细化监控对象配置.

- **模型创建**: 支持根据设备类型所对应设备的 Process Type 建立 UVA 模型, 并能够根据 Context 信息设置 UVA 的条件, 根据 Context 条件设置数据过滤条件.
- **Context Group**: 支持 Context Group 的概念, 即类似的 Context 可以在一个 UVA 模型下进行分组, 并可以设置 Context 的优先级.
- **主页面展示**: 提供 UVA 主页面, 能够展示用户最近打开的 UVA 模型.
- **Context 标签绑定**: 支持建模配置条件时加入用户自定义信息标签 (MES Context 字段), 并可与工艺绑定.
- **签核机制**: UVA 模型激活时支持签核功能.
- **Wafer 筛选监控**: 支持依据 Context 设置规则筛选所需监控的 Wafer 进行 UVA 模型设置, 如 First Wafer Monitoring.
- **向导式建模**: 提供向导式快速建模工具, 可基于 Sensor 历史数据建议使用的统计方法.
- **AI 集成建模**: 支持利用 AI 算法建立监控模型.
- **二次开发**: 支持 Model 算法二次开发, 提供 Sample Code.

#### 6.2 Window 窗口配置与数据窗口

支持模型数据窗口的分段定义与灵活划分.

- **分段建模**: 支持模型按照设备 RUN、工艺步骤以及其他条件分段建立模型.
- **分段过滤**: 支持按照段设置过滤条件, 如 Context 条件设置、参数的范围设置以及根据 Step 设置.
- **多维窗口划分**: 数据窗口可通过 Step, Recipe Time, Sensor 规则, Offset 划分; 支持通过连续多点上升 / 下降规则划分; 支持对 Recipe 任意一段区间进行监控.
- **参数化窗口**: 窗口定义支持参数化, 参数可随当前 Run 的 Context 变化而调整, 例如窗口自动匹配当前 Recipe 的 Main Step.
- **Cycle Step 批量监控**: 支持在 Cycle Step 中批量检查 Main/Sub-step, 可将 Cycle Step 的所有 Main Sub-step 设定成一个窗口, 共用一个规格.
- **噪音过滤**: 窗口内任意 Sensor 支持灵活过滤功能, 可设置过滤掉噪音数据.

#### 6.3 虚拟 Sensor 与滑动统计

支持虚拟 Sensor 生成与滑动统计算法, 提升监控信噪比.

- **虚拟 Sensor 生成**: 提供 Function 使 Raw Data 通过计算生成虚拟 Sensor, 支持表达式方式, 并可通过客制新方法扩充 Function.
- **滑动统计算法**: 提供 Function 使 Raw Data 和指标值通过前后多点运算生成 Moving Average, Moving Range 等虚拟 Sensor, 并支持无缝扩展.
- **非线性监控**: 提供 Raw Data 的非线性监控.

#### 6.4 数据过滤

支持多维度的数据过滤机制.

- **过滤条件**: 支持 SV, DV, 用户自定义过滤 Limit 以及用户自定义条件来进行数据过滤.
- **时序过滤**: 支持按照时间、Count 进行前 / 后数据过滤.

#### 6.5 模型配置与实时侦测

支持单变量模型的运行与仿真, 及制程中的实时异常侦测与跨片统计.

- **健康监控**: 支持基于单变量模型的设备和工艺健康状况监控.
- **多模型并行**: 具备同时运行多个基于单变量的监控模式能力.
- **历史模拟**: 支持历史数据模拟.
- **跨片统计**: 支持连续多片 Wafer 之间的模型统计值计算 (如连续两片之间 Moving Range), 并在 Lot ID 切换时重置; 统计算法包括 Mean, Max, Min, Sum, Slope, EWMA.
- **步骤时间累加**: 支持对工艺中某个步骤的时间进行累加, 超过规格后报警并可复原.
- **Data Quality 联锁**: Sensor 的 Data Quality 检查不合格时, 可跳过部分模型的监测.
- **长制程实时检查**: 提供在长时间制程中及时检查规格的解决方案, 避免制程结束时才发现问题.
- **工艺时间异常侦测**: 支持发现工艺时间异常, 例如 Wafer 工艺过程中未上报 End 事件时, 可经配置及时发现并通过 OCAP 报警.

#### 6.6 规格体系与自动限值

支持多层次, 多维度的规格定义与基于历史数据的自动限值生成.

- **Spec 类型**: 支持 Fixed Spec; 支持 Delta Spec, 即在 Target 基础上加减运算生成 Spec; 支持 Target 以上百分比规格 (如仅卡 Target 以上 10% 的部分).
- **多维规格设定**: 可根据设备 (Tool), 腔室 (Chamber), 配方 (Recipe), Recipe Step 或其他 Context 信息 (Product, Stage) 设定规格.
- **分级报警体系**: 模型报警等级分为 Warning, Alarm, Outlier, 每个等级可设置不同的规格和对应的 OCAP.
- **批量自动限值**: 支持批量使用历史数据对所有腔室生成规格; 生成规格时选择的 Run List 支持抽样.
- **Sigma 限值定制**: 自动计算规格时可个别指定 Warning Limit, Alarm Limit, Outlier Limit 上下限对应的 Sigma 倍数, Sigma 算法可选择和自定义; 内置 5 种 Sigma 算法: PSEUDO Sigma, Bounded Boxplot Sigma, SIMR2, SROBUST, SUMVU.
- **训练样本组管理**: 每个 Indicator 可单独设定计算规格时的训练样本组 (PerProcessType, PerTool, PerChamber), 每次计算 Limit 均保留记录并可查看所用样本.
- **规格种类**: 支持 N-Σ (目标值 ± N-Σ), Δ (目标值 ± Δ), 删除百分比 (目标值 ± 删除 × N%), 移动平均目标值 (用户定义 N 值).
- **Target Bias**: 目标值偏移支持 Product, Tool, Chamber 维度设置 Offset 值.
- **基础计算公式**: 内置 50 种基本计算公式, 包括 AAD, Area, Count, Cp, Cpk, Dt, FirstPoint, HitCountAbove, HitCountBelow, Intercept, IQR, Kurtosis, LastPoint, MAD, Max, MaxDownwardSpike, MaxGap, MaxJump, MaxOscillation, MaxSpike, MaxUpwardSpike, Mean, MeanG, MeanH, MeanT, Median, Min, MinGap, Mode, Percentile, PointCount, PointCountAbove, PointCountBelow, PointCountBounded, Q1, Q3, Range, RMS, SampleRat, SampleTime, Skew, Slope, SlopeR2, Stdev, StdevT, Sum, TimeCountAbove, TimeCountBelow, TimeRange, Trend.
- **算法扩展**: 支持 MeanAgg 算法扩展, 计算两组平均值之间的差值.
- **规格复用**: 模型规格支持复制粘贴.

#### 6.7 UVA 模型管理

支持模型的集中管控与版本追溯.

- **集中管理**: 支持对模型的控制窗口进行统一管理, 可以进行集中修改, 并支持对模型进行快速复制.
- **履历与版本**: 支持保存修改历史, 能够对模型的修改履历进行查看, 并提供模型不同版本的对比功能.

#### 6.8 MVA 模型管理

支持多变量模型的质量监控.

- **多变量监控**: 支持基于多变量模型, 监控机台和工艺流程的质量.
- **多种算法**: 支持提供 PCA, Q 统计量, Hotelling T2, Diagonal HT2 等多种算法.
- **数据模拟**: 支持通过数据进行模拟.

#### 6.9 报警联动处置

支持报警与外部系统的闭环联动处置.

- **模型级别抑制**: 模型可设置级别, 高级别模型报警后, 低级别模型不再报警.
- **AMS 报警集成**: 通过集成 AMS 系统支持 Email/SMS/Phone/Wechat 多种报警方式.
- **MES 联动处置**: 通过集成 MES 支持 Hold Lot/Hold Tool/Hold Chamber/Hold Recipe.
- **Chamber Mapping**: 支持设置 MES 与 EQP Chamber 之间的 Mapping 关系.

### 7. 报表分析 (Reporting & Analysis)

#### 7.1 批次履历

支持以批次为维度的加工追溯.

- **Lot/Wafer 履历**: 支持以 Lot/Wafer 为单位查看设备加工履历, 查看加工过程中参数的趋势变化, 并结合模型数据进行分析.

#### 7.2 设备参数履历

支持以参数为维度的对比分析.

- **参数对比分析**: 支持以参数的维度进行 Lot 之间的参数分析、机台 / 腔体间的分析.
- **多对象叠图**: 不同 Chamber/Tool 可放在同一张 FDC Chart 查看.

#### 7.3 实时数据

支持跟踪参数的实时监控.

- **实时监控图表**: 支持在趋势图表中显示跟踪参数的实时值, 并提供牛眼图表和计量图;支持查看跟踪参数的实时值是否偏移控制限制或规格限制, 或是否保持在控制限制内.

#### 7.4 参数验证

支持参数履历数据的手动汇总计算.

- **手动汇总**: 支持对用户指定的参数履历数据手动进行汇总计算 (Min/Max/Count 等).

#### 7.5 UVA 模型履历

支持模型统计值的趋势追溯.

- **Stats 趋势**: 支持根据时间查看 FD 模型中所有 Stats 的 Chart 图形的变化趋势, 并可以确认计算每个 Stats 的 Raw Data.
- **Drilldown**: 支持从汇总数据 Drilldown 到原始数据.

#### 7.6 告警汇总

支持报警数据的多维度统计.

- **分组统计**: 支持展示根据设备、配方以及统计值分组的 UVA 结果;支持统计不同机台每天报警次数 Top N 的模型.
- **多维分析**: 支持按照设备类型、设备、批次、参数等各种条件统计报警的数量, 能够通过柱状图进行分析, 并能够展示出报警的详细信息.
- **违规详情**: 警报中包含详细的违规信息.
- **重复警报过滤**: 经由集成发送外部系统时, 过滤 Run 中重复警报.
- **Alarm 报表模块**: 机台 Alarm 信息单独呈现在 FDC Report 模块中; 支持按周, 月, 季度, 年汇总 FAB, Module 的警报数量; 支持分级汇总 Tool/Recipe 的警报数量.
- **多维统计**: 支持 By FAB, By Module, By Tool, By Recipe, By Indicator, By OOC, By Lot 统计.
- **报警查询**: 支持按照 Lot 查询警报; 支持按照警报动作查看警报; 支持查看 UChart 中报警点分布.

#### 7.7 设备状态

支持全厂机台状态的实时总览.

- **机台状态总览**: 支持查看工厂的机台状态, 并能够实时查看机台的加工信息.

#### 7.8 数据质量

支持 RUN 级数据质量的评估.

- **Data Quality 评估**: 支持反映用户选择某台设备的一个 RUN 或者多个 RUN 的 Data Quality 是否在用户设定的阈值之内;如果 Data Quality 异常, 则说明采集的 RUN 的样本点不具备 FD 的意义, 需要跟踪原因进行分析.

#### 7.9 UVA 模型统计

支持模型制程能力的统计评估.

- **Cp 统计**: 支持为每一个设备或者 Model 计算 CP, CA, and CAP, 并且仅反馈某个设备的 CP 小于阈值的情况.

#### 7.10 UVA 配置分析

支持 UVA 设置情况的统计分析.

- **设置详情**: 支持按照机台腔查看 UVA 设置详情列表; 支持查看 UVA 设置覆盖率统计图表.

#### 7.11 图表联动与导出

支持图表间的联动查询与数据导出.

- **图表联动**: 查看 UChart 时支持点击 Link 到 TChart; 查看警报记录列表时点击单条可直接在右侧弹出 UChart 绘图.
- **数据导出**: 所有列表支持数据导出.

#### 7.12 报表自定义

支持个性化的报表订阅与推送.

- **收藏夹与订阅**: 支持用户根据自己的喜好设置报表收藏夹功能;支持设定报表产生的条件, 按照自定义的时间点推送 FDC 相关报表; 支持收藏当前页面查询条件, 在收藏夹列表中点击收藏标题后进入首页查看收藏内容.

### 8. 可视化看板 (Dashboard)

支持生产数据大屏展示与灵活可配置的看板开发.

- **大屏展示**: 提供 Dashboard 工具, 支持生产数据的大屏展示; 支持业务监控和风险预警展示; 支持庞杂数据的可视化展示.
- **快速开发**: 看板支持快速开发, 支持数据可视化配置.
- **多数据源**: 看板支持多数据源配置, 支持 API, SQL, 数据源接入.
- **轮播配置**: 看板支持轮播样式自定义, 轮播切换样式与轮播时长均可配置.

### 9. 扩展算法 (Algorithm Extension)

支持统计算法的在线扩展与脚本化开发, 无需停机.

- **内置算法库**: 默认提供 50+ 以上默认统计算法.
- **Java API 扩展**: 支持以 Java Method 扩展新的算法 API 及其他 API; 支持通过上传 Jar 或 Class 实时支持扩展 API; 支持实时不停机扩展 API.
- **脚本式算法**: 支持脚本式算法, 厂商需具备基本客制及升级脚本语法的能力.
- **可视化模板编辑**: 建立监控时支持可视化调整模板, 提供脚本编辑界面.

### 10. 图形化工作流 (Graphical Workflow)

支持拖拽式图形化工作流平台, 实现低代码业务定制与第三方集成.

- **工作流平台**: 具备图形化工作流平台, 支持基于当前流程创建新流程.
- **第三方集成**: 支持利用图形化接口定制与第三方接口能力.
- **外部访问能力**: 具备数据库访问, 访问外部 WebService 等能力.
- **业务接口实现**: 支持利用工作流实现 Query Lot Process Context 接口业务.

### 11. 其他 (Others) / 系统架构

#### 11.1 软件升级

支持系统的不停机升级.

- **不停机发布**: 软件升级和新功能发布不影响系统使用 (不停机).

#### 11.2 服务监听

支持系统服务的运行监控.

- **Service 监控**: 提供 Service 监控管理工具.

#### 11.3 微服务架构与平台

支持基于 Spring Cloud 的微服务架构, 保障高并发, 高可用与易扩展.

- **微服务框架**: 基于 Spring Cloud 微服务框架封装, 平台设计灵活可扩展, 可移植, 可应对高并发需求; 支持灵活的可配置性和拓展性.
- **高可用机制**: 基于服务发现和注册实现自动负载平衡和故障切换; 基于分布式配置简化跨多环境和服务的配置管理, 提高系统一致性.
- **平台监控**: 提供系统平台监控工具, 对 OS 和运行程序全方位监控和预警.

#### 11.4 数据库与存储

支持多数据库选型与开放的数据架构.

- **数据库分离**: 微服务化构建 FDC 核心程序, 支持 RAW, ROUTE, ADMIN 数据库分离, 支持异构数据库.
- **多数据库支持**: 除 Oracle 外, 系统支持 PostgreSQL 和 SQLServer 作为 FDC 核心业务数据库.
- **开放 Schema**: 开放 DB Schema.
- **Rawdata 存储**: 支持 Rawdata 分表存储, 文件存储.

#### 11.5 运行环境

支持企业级的部署环境.

- **Linux 平台**: 支持运行在 Linux 平台, 如 CentOS/RedHat.
- **集群部署**: 支持集群化的部署环境;支持 MQ 集群方式进行消息的转发与各模块的通信.

#### 11.6 日志配置

支持灵活的运维配置.

- **灵活日志配置**: 支持日志文件的大小, 路径等参数可配置.

#### 11.7 图表展示工具

支持丰富的交互式图表分析能力.

- **图表交互**: 浏览数据时可放大和缩小, 并显示数据来源;当鼠标悬停在图表上时可以显示 Context 的数据;支持在数据或图表上标记注释.
- **Context 筛选**: 支持根据 Product, Process Flow, Recipe, Mask ID 等 Context 信息来筛选数据.
- **多轴与叠图**: 支持双 Y 轴显示;支持 Overlay 显示 Trace Data, 如 Overlay by Lot ID, Wafer ID, Tool Name;支持多图同屏显示.
- **辅助线与刻度**: 支持添加显示辅助线, 如 Alarm 和 Event 的辅助线;支持调整 Y 轴的刻度.
- **图表定制**: 支持为不同系列数据选择颜色;支持修改图表显示设定, 例如显示图例、显示单位、设置数据点大小、设置以点或者线的形式显示;支持设置某个 Run 的数据 Highlight 显示.
- **时间压缩**: 支持按时间顺序显示多个 Run 的数据, 并支持把 X 轴中间 Idle 的时间段去掉.
- **数据导入导出**: 具备导出数据到 Excel 的功能;支持把 CSV 数据文件导入到 FDC 图表工具中进行图形化展示和分析.

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

### 1. 基本功能

#### 1.1 Recipe 管理

支持 Recipe/Sequence 的全生命周期管控, 涵盖版本管理、比对校验、批量作业及历史追溯, 确保生产配方的准确性与一致性.

- **管控列表与 ByPass**: 支持设定 Recipe/Sequence 管控列表 (Under Control 列表), 默认纳入管控;支持设定 ByPass Recipe, 此类 Recipe 不进行比对;支持设置 SubRecipe 是否进行卡控; 支持 Bypass, Cancel Bypass, Delete 所选中程序.
- **设备程序类型**: 支持设备程序类型的统一分类设定 (如 Standard Recipe - Full Body), 为配方管理提供基础分类依据.
- **程序列表获取**: 支持从设备端获取程序列表.
- **多种比对方式**: 支持 Recipe FullBody, CheckSum, Recipe Parameter, Recipe 修改时间等多种形式的比较;支持字符串、整数、小数等多种数据类型;支持 Recipe Binary Body 的分析与解析; 支持 Recipe Parameter 的 Absolute, ByRange, ByTolerance, ByList 比较类型.
- **多版本管控**: 支持 Recipe 多版本管控与 Active 版本管控, 系统内可保存多个 Recipe 版本; 支持程序 Set Frozen, Audit against EQP, Set Active, Approve, 生成 Active 版本, 以及 Active 程序变成 Deactivate.
- **比对场景与呈现**: 支持同类型设备不同 Recipe 之间、同一 Recipe 不同版本、系统中与设备中的 Recipe 进行比对, 可根据需要选择显示全部内容或仅显示差异.
- **Offline Audit**: 支持模拟 EAP Validation 比较, 支持批量多个程序 Offline Audit.
- **设备间比对**: 支持设备间程序差异比较, 支持相同程序批量比较多个设备之间的差异, 支持两个设备批量比较多个程序之间的差异.
- **Spec 模板与批量设定**: 支持多设备共用模板, 便于设定 Recipe Parameter Spec;支持 Recipe 中不同 Step 的相同参数批量设定 Spec;支持设置关键参数并高亮显示; 支持通过模板复制参数规范及通过 Excel 导入参数规范, 参数规范可保存成模板.
- **Recipe Template**: 支持根据设备类型查看所有模板; 支持模板规范设定, 支持公式编辑, 支持程序模板修改规范; 支持删除选中模板.
- **Recipe Key Param Spec**: 支持根据机型设置 Key Param 的 Spec 范围, Spec 设置方式有 ByRange, ByTolerance, 公式; 支持 Load Recipe 时自动套用 Key Param Spec.
- **Strict Parameter**: 支持预设锁定严格检查参数, 设定的参数不允许 Uncheck.
- **Uncheck Param List**: 支持根据设备机型设置 Uncheck 的参数; 支持 Load Recipe 的时候自动把不需要 Check 的参数 Uncheck.
- **校验与异常处理**: 支持 Recipe/Sequence 校验, 以及校验失败邮件通知等相关的异常处理流程.
- **上传下载与备份**: 支持系统与设备之间下载与上传 Recipe/Sequence;支持设备 Recipe/Sequence Spec 批量备份到系统以及批量下载至设备;支持 Recipe 批量共享; 支持从设备上传程序并查看程序大小.
- **Recipe Download**: 支持同型号设备中 Active 程序 Download 到指定设备, 支持批量 Download 本设备 Active 程序; 支持同型号设备中 Active 主程序及 Active 子程序 Download 到指定设备.
- **批量加载**: 支持批量加载 Recipe, 可选择每次加载数目.
- **Batch Load From EQP**: 支持批量从设备中上传多个程序, 支持批量 Active 多个程序; 支持批量从设备中上传主 / 子程序 (Sequence Recipe).
- **Batch Set Active**: 支持根据区域, 设备类型或设备查看所有能够 Set Active 版本的 Standard Recipe 和 Sequence Sub Recipe; 支持批量选中多个程序 Set Active, 如整合签核系统则产生一张签核审批单.
- **Sequence Recipe 管理**: 支持从设备上传主程序, 设定子程序是否比较, 手动设定 Sequence Parameter 规范, 通过模板复制或 Excel 导入主程序参数规范; 支持从设备上传子程序, 手动设定子程序参数规范; 支持主程序与子程序的版本操作 (Set Frozen, Audit against EQP, Set Active, Approve, Deactivate).
- **导入导出**: 支持 Recipe 导入导出功能, 并实施严格的权限管控.
- **查询与排序**: 支持各项排序;支持不同条件下查询 Recipe/Sequence 的版本变更历史详情及校验历史; 支持根据区域, 设备类型或设备查看所有程序状态, 支持根据关键字模糊查询相关程序.

#### 1.2 Golden Recipe

支持跨设备共享的基准配方机制, 简化同型号设备的配方管理.

- **基准设备设定**: 支持在设备设定中新建基准设备, 勾选 Allow Share Recipe, 并勾选 Auto Share; 支持 Share Recipe 基准设备设定.
- **共享生效**: 支持在 Recipe Configuration 中从同型号任意设备上传程序, 程序 Set Active 时默认共享给同型号所有设备, 其他设备无需再设定.
- **共享审批与维护**: 支持在 Advance Active 时 Approve/Reject 程序, 支持在 Recipe Status 页面中查看和修改共享关系.
- **独立版本**: 支持非基准设备设定自己的 Active 版本.

#### 1.3 EC 管理 (Equipment Constant)

支持设备常量 (EC) 与状态变量 (SV) 的参数管控、共享及历史追溯.

- **管控范围设定**: 支持按照设备或按照 Recipe 设定 EC/SV 参数的管控范围;支持字符串、整数、小数等多种数据类型.
- **常量定义**: 支持新建设备常量参数, 并编辑参数规范, 支持设备常量的 Absolute, ByRange, ByTolerance, ByList 比较类型.
- **多设备共享**: 支持多设备之间共享 EC/SV 设定; 支持同类型设备之间的设备常量设定 Copy, 支持设定 Excel 导入.
- **常量比对**: 支持设定设备常量与设备中常量数值比较, 支持同类型设备之间的设备常量比较差异.
- **历史追溯**: 支持查询设备 EC/SV 变更历史及校验历史.

#### 1.4 Recipe Parse Adaptor

支持配方解析组件的热更新, 保障系统持续可用.

- **不停机更新**: 支持不停机上线或更新 Parse Adaptor.

#### 1.5 Equipment List 与通知

支持设备清单与责任归属管理及灵活的事件通知机制.

- **设备关联角色**: 支持选择关联角色, 设定设备负责人员及负责人相关组别.
- **通知测试**: 支持测试邮件发送, 验证通知链路有效性.
- **通知时机设定**: 支持设定邮件通知时机点, 如 Recipe Validation Fail, Set Active 等.

#### 1.6 履历查询

支持程序版本、参数规范变更及校验履历的完整追溯.

- **Standard Recipe 履历**: 支持查询 Recipe Version 的变更履历, 查看 Parameter SPEC 修改履历.
- **Sequence Recipe 履历**: 支持查询 Sequence Version 的变更履历, 查看 Sequence Parameter SPEC 修改履历, 子程序是否比较开关履历, 以及主程序 Parameter SPEC 修改履历.
- **Validation 履历**: 支持查询 Recipe(Sequence) 的 EAP Validation 履历; 支持查看机台校验结果汇总报表.
- **EC 履历**: 支持查询设备常量的设定变更履历及 EAP Validation 履历.

### 2. 系统管理和功能集成

#### 2.1 签核系统集成

支持 Recipe 关键节点的内部签核与外部系统整合, 确保配方变更的合规审批.

- **关键节点签核**: Recipe Active 等关键节点需要进行签核;支持系统内部签核, 可设定各区域模块签核人 / 组.
- **外部系统整合**: 支持与外部签核系统整合; 支持整合工厂现有签核系统.
- **待审批查询**: 支持根据区域, 设备类型或设备查看所有待 Approve 的 Recipe/Sequence.
- **审批操作**: 支持 Approve/Reject 程序.
- **邮件通知**: 支持设定各关键节点邮件通知, 如 Recipe 校验失败、Recipe 签核、Recipe ByPass 等.
- **批量签核**: 支持批量签核, 并进行特殊标注记录.
- **签核可视性**: 支持设定关键参数, 签核人员可以查看参数内容.

#### 2.2 系统管理

支持用户权限、安全策略、日志及高可用架构等系统级管理功能.

- **比对方式配置**: 支持设置程序比较方式 (FullBody/CheckSum/Parameter 等).
- **用户组与权限**: 支持设定不同级别的用户组, 管控用户对界面的操作权限及对设备的操作权限;支持设备关联用户 / 用户组;支持一个用户属于多个用户组.
- **用户管理**: 支持对用户状态的修改;支持用户子管理员, 可创建不高于自身权限的用户;支持用户修改密码、管理员重置密码, 所有密码加密保存.
- **会话管理**: 支持查询用户登入登出记录;支持用户无操作自动登出, 登出时间可配置.
- **日志管理**: 支持配置所有日志保存时间.
- **高可用架构**: 支持 RMS Server 之间的网络负载均衡 (NLB) 的 Failover 功能.
- **数据库兼容**: 支持 Oracle, PostSql 等主流数据库.

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

### 1. 基础功能

#### 1.1 基本要求

支持集中式远程控制架构与多客户端协同, 满足多语言及基本审计需求.

- **集中管控**: 1 套 RCM 系统控制所有设备;每台 RCM 电脑可控制所有设备, 防止个别 RCM 电脑宕机造成单点失效.
- **并发策略**: 允许多个客户端查看同一设备, 同时只有一个客户端可以控制它.
- **多语言支持**: 使用者控制语言支持英语 / 中文.
- **网络协议**: 网络协议支持 TCP, UDP.
- **画面联动**: 可实现 PC 端 KVM 和触摸屏画面联动.
- **历史记录**: 可记录每个 RCM 用户登录历史和远程控制历史, 包括登录信息及使用信息.
- **用户配置**: RCM 用户支持配置管理, 包括添加、删除、编辑、查找.
- **登录验证**: 输入账号密码, 通过后端接口完成身份验证.

#### 1.2 硬件基本要求

支持机房级部署架构与硬件异常告警, 保障系统基础设施稳定可靠.

- **部署要求**: RCM 系统服务器建议部署在机房;服务器数量为双机热备.
- **网络规格**: 建议核心交换机通讯速率不低于 4320 Mpps/36000 Mpps.
- **异常报警**: 当硬件通讯异常时, RCM 界面有相关报警, 如 KVM 设备断开时系统弹窗报警.
- **客制化能力**: RCM 系统支持客制化.

### 2. 核心功能

#### 2.1 控制功能

支持账号集成、操作审计及开放的系统接口, 实现安全可控的远程操作.

- **账号系统对接**: RCM 系统须能够对接本司账号系统, 并拉取部门结构, 由管理员设定不同部门或人员权限.
- **鼠标合一**: 自动将远端与近端的鼠标合二为一, 避免两个鼠标出现在同一个画面的困扰.
- **鼠标矫正**: 智能模式 / 标准模式下可矫正鼠标 (需硬件支持).
- **光标显隐**: 可隐藏和显示远端鼠标.
- **操作记录**: 支持操作记录保存, 包括人员操作 RCM 的记录, 保存时长取决于存储空间.
- **硬件接入规模**: RCM UI 对于接入 RCM 硬件数目无限制, 无额外费用.
- **系统集成接口**: 可自定义开发接口, 与 EAP, MES 等上层系统作系统信息交互.
- **断连状态提示**: 设备与 RCM 链接断开或 RCM 无法正常抓取时, 需在 RCM 界面显示状态并报警提示.
- **请求操作**: 与 PlantU RCM Server 交互, 进行操作页的权限分配.
- **特殊快捷键**: 针对 Ctrl+Alt+Del 等容易被本地端拦截的特殊快捷键位, 采用按钮命令方式发送.
- **聊天室**: 可以和打开同一操作页的用户进行聊天.

#### 2.2 通讯和图像功能

支持多系统通讯、影音记录及近远端切换, 扩展远程运维能力.

- **多系统通讯**: 支持自定义开发与 PLC, MES, EAP, RMS 等系统的通讯功能, 可获取、处理、传送数据.
- **影音与日志**: 支持录像、LOG 记录、截图功能; 有操作权限时按规则对画面进行侧录, 保存并记录侧录 log, 供之后多维度快捷查询; 支持保存机台当下的画面.
- **RPA 融合**: 支持融合 RPA 功能, 后续使用此功能时可提供技术支持.
- **近远端切换**: 设备端设置物理按钮, 实现远程和近端控制切换.
- **显示模式**: 支持原比例, 等比缩放等显示模式; 可进行全屏操作和窗口操作.
- **连接信息**: 显示 KVM 的相关信息 (需硬件支持).

#### 2.3 Client 易用性

支持友好的操作界面与现场状态提示, 提升远程作业体验.

- **本地警示**: 远程控制时, 本地画面有醒目的文本提示 (正在远程, 请勿操作), 且本地操作失效.
- **声光报警**: 异常时可支持加装报警灯和蜂鸣器方式报警 (客制化需求).
- **设备检索**: 远程 Client 主控制屏幕上可进行设备别搜索; 支持机台 ID 模糊查询.
- **界面友好**: UI 界面操作简单、便捷, 画面设计美观.
- **状态同步**: 本地切换 EQ Monitoring 时, 远程 Client 实时更新显示.

#### 2.4 个人设置

支持用户个性化的界面与显示设置.

- **宫格布局自定义**: 用户可自定义宫格页面, 支持 1x1, 2x2, 3x3 等多种规格.
- **轮播间隔设定**: 用户可自定义宫格画面的轮播间隔.
- **皮肤样式**: 提供多种皮肤样式供用户选择.
- **密码修改**: 支持修改当前密码并保存.

#### 2.5 Tool List

支持机台列表的收藏、加载与刷新管理.

- **收藏列表**: 支持查看已收藏的机台列表.
- **权限化加载**: 按照设定权限加载用户可见的机台.
- **连接开关**: 提供连接宫格和断开宫格的开关.
- **动态刷新**: 在后台给用户添加 / 删除机台后, 用户无需退出即可刷新获取最新的机台列表.

#### 2.6 宫格页面

支持宫格矩阵的自动加载与批量连接轮播.

- **自动排布**: 按照设定加载宫格矩阵并自动排布.
- **连接轮播**: 开始连接后, 对选中的机台画面进行连接并轮播.
- **操作页开启**: 双击画面或点击操作页按钮, 开启所选择画面的操作页.

#### 2.7 操作页

支持完整的远程机台操作能力.

- **远程控制**: 支持正常的远程操作, 包括双荧幕的操作.

### 3. 系统管理

#### 3.1 权限管理

支持分级权限体系与分组管理, 保障系统访问安全.

- **分级权限**: 登陆权限分为 Operate, 工程师, 管理者三级, 每种操作权限需要对应密码登陆.
- **分组管理**: 支持将同一类型画面、功能统一分组管理.

#### 3.2 Client 实时性

支持低延迟画面传输与实时报警提示, 保障远程监控时效性.

- **画面布局**: 远程 Client 主界面画面显示个数可手动配置.
- **网络延时**: 远程 Client 画面操作时, 远程与本地网络延时响应 < 0.1 s.
- **报警提示**: 设备发生报警时, 远程 Client 主画面对应设备外框颜色应发生变化, 用以提示远程监控人员.

#### 3.3 系统性能

支持流畅无闪烁的画面表现, 确保远程操作如临现场.

- **画面质量**: 连接完成或画面切换时, Client 画面实时更新, 显示器无闪烁、影像残留等现象发生.
- **流畅度指标**: 使用时不可出现卡顿情况, 延时小于 65 ms.

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

### 1. 基础功能模块 / 平台功能

#### 1.1 数据收集

支持工艺测量数据的自动收集、自定义量测项目配置及量测数据的检查与处理, 并提供可客制化扩充的计算能力.

- **数据收集**: 支持工艺测量数据的收集, 可自定义要收集的量测项目; 提供测量数据收集及过滤功能, 提供收值项目和机台下货参数的配置.
- **计算公式**: 提供最小值、最大值、平均值、标准差等计算公式, 并支持客制化扩充.
- **异常处理**: 提供量测资料的检查、过滤、补点以及超过规格 (OOS) 的处理流程; 可自定义异常量测数据以及客制化检查流程, 例如滤除低 GOF (goodness-of-fit) 量测资料不参与 R2R 反馈计算.

#### 1.2 控制器

支持光刻、刻蚀、研磨、湿法、TRIM 等工艺模块的 R2R 控制器开发, 覆盖控制模型、反馈方式、特殊批次处理及管控验证等通用能力.

- **工艺覆盖**: 支持光刻、刻蚀、研磨、湿法、TRIM 等工艺模块, 可调整工艺流程参数.
- **反馈粒度**: 支持 Lot to Lot, Wafer to Wafer 控制并可切换, 支持前反馈 (Feedforward) 和后反馈 (Feedback), 支持 Chamber level 反馈控制的实施方案; 支持 lot-level, batch-level, or wafer-level 前馈和后馈, 支持根据前值选择不同的生产 recipe, 支持多步骤的同一 Parameter 同时控制.
- **控制模型**: 支持 MPC (Model Predictive Control) 和 EWMA 控制特性, 提供 SISO/MIMO 等不同控制模型并能够切换; R2R Control Block 除基本的 EWMA 和 MPC 外, 支持新增 WMA 或其他算法; 内置控制模型包括 MA, WMA, EWMA, MPC.
- **自定义模型**: 支持用户开发自定义控制模型, 支持计算模型版本控制.
- **Recipe 联动**: 支持 WET Run to Run, 根据前一步的量测膜厚选择下一步不同的 Process Recipe; 与 MES 的配方管理功能集成.
- **特殊批次处理**: 支持 Pi Lot, Rework Lot、设备 PM, Runcard 及 Special Lot 等处理流程, 支持设备内置的 Rework 功能 (CMP); 用户可在 UI 上设定某种 Lot 或 Product 只跑对应的 Special R2R flow.
- **数据过滤**: 提供量测数据的异常检查功能, 异常数据不参与反馈及计算; 支持通过设置离群批次清单实现离群批次 (Lot) 过滤.
- **输出管控**: 针对控制器输出的值提供多种管控方式 (上下限、MTT 等), 并支持 OOS 后自定义处理流程.
- **调试验证**: 提供调试和模拟运行验证功能.
- **运行架构**: 控制器支持多线程运作.
- **控制器重置**: 提供重置控制器功能, 如设备 PM 后用户可手动重置或由外部事件驱动.

#### 1.3 集成及工具

支持统一的制程操作界面与周边系统集成, 并提供开发、权限、报表及系统运维等配套工具.

- **统一界面**: 为不同的制程提供统一的界面, 提供友好的设计界面.
- **系统集成**: 与 MES/SPC/FDC/RMS/Dispatching/Alarm/Workflow 等周边系统集成.
- **Dedication 功能**: 支持 Dedicate Chuck, Dedicate EQP 功能.
- **二次开发**: 提供功能组件允许用户开发和集成自己的 APC 控制模块, 提供便捷高效的开发工具.
- **权限管理**: 提供完善的权限管理机制和历史记录, 支持数据级的权限管理.
- **报表功能**: 提供全面的报表功能.
- **不停机升级**: 软件升级和新功能发布不影响系统使用 (不停机).
- **性能维护**: 提供高效的数据清理及恢复机制, 保障系统性能不随时间推移而下降; 支持多产线同时使用.
- **系统运维**: 提供必要的系统管理工具和性能监控及报警机制.
- **执行监控**: 支持分 module R2R 执行情况的监控, Request 的数量及生命周期按不同控制器统计, 查询 R2R 计算执行失败履历.

#### 1.4 系统架构与部署

支持国产化, 高可用, 多平台的系统架构与灵活部署.

- **自主可控**: 完全国产化, 自主知识产权, 易于通过客制化扩展自定义功能.
- **高可用架构**: 支持集群, 具有高可用性, 消息并行处理, 处理速度快, 软件升级以及新功能发布不影响系统使用, 不停机.
- **多平台部署**: 支持 Windows/Linux 平台部署, 支持 SQL Server, Oracle, MySQL, Pg SQL, Vastbase G100, Open Guass 等多种数据库.
- **通讯集成**: 支持多种消息总线, 如 Tibco RV, Raven Cast, H101, Web API, Rabbit MQ 等, 和其他系统通讯.
- **用户接入**: 支持 Web UI, 支持多浏览器访问, 登录支持接入 OA 验证.

#### 1.5 Workflow 开发与集成

支持图形化的流程开发, 调试与系统集成能力.

- **图形化开发**: 支持图形化 workflow, 提供图形化的接口与其他系统集成, 开发的流程间可嵌套, 提高重用性.
- **调试与编辑**: 支持 workflow 及 sub workflow Debug, 图形组件快速定位, 图形组件多选 / 全选, 复制, 整体移动.
- **开发验证**: 产品提供开发验证.

#### 1.6 报表

支持丰富的报表及图形展示与自定义配置.

- **自定义报表**: 提供丰富的报表及图形功能, 用户可自定义报表字段.

#### 1.7 流程

支持灵活的流程定义与复用.

- **子流程**: 可定义子流程 (计算逻辑), 流程间可嵌套, 提高重用性.

### 2. 区域的 APC 功能

#### 2.1 Litho Controller

支持 Litho CD 与 OVL 的 R2R 控制, 覆盖主流曝光机型及完整的控制情境与量测验证能力.

- **CD 控制模型**: 采用 SISO EWMA Model, 支持 Lot 级别反馈 (FFFB); 支持 Process 机型 ASML, Canon, NIKON; 控制参数为 Dose, Focus, 输出参数为 CD.
- **OVL 控制模型**: 采用 MSISO EWMA, 支持 Lot 级别反馈 (FFFB); 支持 Process 机型 ASML/CANON/NIKON, 支持 8/10 para 线性参数; 支持 HOPC/iHOPC 高阶参数; 支持 FF, FB 的反馈方式.
- **OVL 特性**: 支持 Chuck Dedication, Sub Recipe 指定及 Chuck to Chuck; 支持 Tool dedication 检查, Wafer 级别前层对准.
- **控制情境**: 支持 PiLot run, Rework run, Normal run, Special run, Runcard run 场景.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持固定值模式.
- **Control Flag**: 支持 ON, FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site 有效性检查、量测有效性检查及量测数据过滤与验证; 支持 wafer 数据有效性检测.
- **反馈控制**: 支持反馈有效期控制, 反馈有效批次控制, 按 Lot Type 反馈, 量测可根据 Wafer Process Run 进行反馈, 支持根据最近的 run 货值计算返工 Lot 下货值.
- **其他功能**: 支持 Thread 状态控制, FEM 下货参数支持, Simulate 功能, 曝光记录手动补录.

#### 2.2 CMP Controller

支持 CMP 工艺的 MIMO MPC 控制, 覆盖多级别前馈 / 后馈及维修事件自动处理.

- **控制模型**: 采用 MIMO MPC; 支持 Lot 级别前馈 / 后馈、Wafer 级别前馈 / 后馈及 Chamber/Header/Platen 级别前馈 / 后馈, 对集成量测特别支持 Wafer 级别反馈; 控制参数为研磨时间、研磨时间+ 分区压力、RemoveRate, 输出为 Thickness、研磨量、分区厚度.
- **控制情境**: 支持 PiLot run, Normal run, Monitor run, Special/Runcard, Rework run 场景.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持主从参数设置.
- **Control Flag**: 支持 ON, FIX (固定值模式)、OFF 三种控制模式.
- **差异检查**: 支持下货参数值与实际下货值差异检查, 支持量测数据 site 有效性检查.
- **补录与反馈**: 支持手工前量补录, 量测可根据 Wafer Process Run 进行反馈.
- **有效期控制**: 支持有效反馈的有效期控制, 控制绪的反馈值连续超出规定时间未更新时自动切换至 PiLot 状态.
- **维修处理**: 支持自动侦测维修及自动设置维修事件.
- **异常切换**: 支持后量连续不合格时控制绪切换至 PiLot 状态.

#### 2.3 ETCH Controller

支持 Etch 工艺的 MIMO MPC 控制, 覆盖多级别反馈及灵活的参数约束与补偿机制.

- **控制模型**: 采用 MIMO MPC; 支持 Lot 级别、Wafer 级别及 Chamber 级别的前馈 / 后馈; 控制参数为蚀刻时间、ESC Chuck Temperatures, Gas Flows 等, 输出为 CD, Thickness, Depth.
- **控制情境**: 支持 PiLot run, Normal run, Monitor run, Special run, Runcard run 场景.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持 tuning 参数连续达到上下限的次数控制, 支持主 / 从 tuning 参数.
- **线性约束**: 提供不同 Input 之间线性关系的约束.
- **Control Flag**: 支持 ON, FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site 有效性检查, 支持前值 / 后值量测来自于多个站点; 支持基于单 output 的多个 zone 的计算.
- **反馈控制**: 支持有效反馈的有效期控制及最新量测反馈控制.
- **缺值补偿**: 支持 Wafer level 前馈缺少 Wafer 量测数据时的自动补偿计算.
- **手动侦测**: 支持手动调整 tuning parameter 下货值侦测.
- **特殊处理**: 支持 Hydra uniformity system (raw metro data and X/Y coordinates), 支持有关 first wafer 效应的处理.

#### 2.4 Furnace Controller

支持炉管工艺的 Batch 级闭环控制与多区温控.

- **控制模型**: 采用 MIMO MPC, FFFB 模型为 Batch 级别的反馈, 支持 Process 机型 Kokusai furnace, Tel furnace; 控制参数为各区的温度 (usually 5 or 6, up to 10), deposition 的时间或者 ALD loop, 输出参数为各区的厚度 (usually 5 or 6, up to 10).
- **运行情境**: 支持 pilot run, normal run, special run, runcard run scenarios.
- **Zone 反馈**: 支持 Zone 的反馈资料识别, 根据必要 Zone 量测资料反馈, Boat zone 定义.
- **数据与反馈控制**: 支持有效反馈的有效期控制, 输出预测, 量测数据 site 有效性检查, 量测有效检查, 最新量测反馈控制, 量测超期处理.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX, OFF, 下货 tuning 参数连续超限处理, 手动调整 tuning parameter 下货值侦测, 手动调整 tuning parameter 参数的 delta 限制, 控制器 Enable/Disable.

#### 2.5 WET Controller

支持 WET 工艺的 SISO EWMA 控制, 根据前量厚度实现 Recipe 选择或时间调整.

- **控制模型**: 采用 SISO EWMA; 支持 Batch/Lot 级别前馈及 Batch 级别反馈; 控制参数为 WET_TIME/ETCH_TIME, 输出参数为 Thickness.
- **控制模式**: 支持根据前量厚度选择 Recipe、更新 WET_TIME/ETCH_TIME 两种模式.
- **控制情境**: 支持 PiLot run, Normal run, Special run, Runcard run 场景.
- **参数管控**: 支持 tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限).
- **Control Flag**: 支持 ON, FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site/Wafer/Lot 有效性检查并触发相应 action.
- **有效期控制**: 支持有效反馈的有效期控制, 控制绪反馈值连续超出规定时间未更新时自动 Hold.
- **反馈方式**: 量测可根据 Wafer Process Run 进行反馈.

#### 2.6 Thin Film Controller

支持薄膜工艺的 MIMO 闭环控制.

- **控制模型**: 采用 MIMO MPC, FFFB 模型为 Lot 级别的前馈 / 后馈, Wafer 级别的前馈; 控制参数为 Dep Time, RF Power 等, 输出为 Thickness.
- **运行情境**: 支持 pilot run, normal run, special run, runcard run 功能.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX, OFF, tuning 参数连续达到上下限的次数控制, 提供不同 Input 之间线性关系的约束, 支持主 / 从 tuning 参数.
- **反馈控制**: 支持量测数据 site 有效性检查, 支持基于单 output 的多个 zone 的计算, 有效反馈的有效期控制, 最新量测反馈控制, 提供 wafer level 前馈时缺少 wafer 的量测数据自动补偿计算, 支持前值 / 后值量测来自于多个站点.
- **特殊处理**: 支持手动调整 tuning parameter 下货值侦测.

#### 2.7 TRIM Controller

支持 TRIM by THK 与 TRIM by WAT 两种控制方式, 覆盖去除量调整、卡控及工程数据分析能力.

- **TRIM by THK 控制模型**: 采用 MSISO 模型, 控制参数为去除量, 输出为 Thickness; 支持 Lot/Wafer/Point level Feedforward 及 Feedback, 模型算法支持 EWMA/WMA, Tune Flag 可开关.
- **THK 参数调整**: 工程师可在 UI 上手动调整去除量 Offset 并进行数据模拟计算, 支持多种去除方式及用户指定去除坐标, 支持参数值最小调整阈值.
- **THK Pilot 管控**: 支持新产品或之前条件过期时自动 PiLot run, PiLot Lot 量测结果上传前相同条件其他 Lot 禁止进站.
- **THK 卡控**: 支持下货值 SPEC 卡控、量测值 SPEC 卡控、去除量 Offset 变动卡控及多种 OOS 点处理方式.
- **THK 数据处理**: 支持 Process 顺序和量测顺序不一致处理及手工前量补录.
- **TRIM by WAT 控制**: 支持 Wafer Level 前馈及 WAT 量测结果自动处理, 支持不同 device 的系数计算及引用.
- **WAT 系数配置**: 支持 By 机台设置系数 Offset, Tool Dedication、多种系数选项及多种目标值选项.
- **WAT 卡控**: 支持最小有效点数卡关、最大 OOS 点数卡关、CupLifetime 卡关、量测值 SPEC 卡控、OOS Points 卡关及 OOS Hold Lot 处理.
- **WAT 数据处理**: 支持手工前量补录及文件类型处理.
- **追溯与导出**: 工程师操作记录存 Log 方便追溯; 支持量测数据、生产数据 Excel 导出以便工程师数据分析, 相关设置可通过 Excel 导入、导出.

### 3. Non-Function Requirement

#### 3.1 OOB Deployment

支持各区域 APC 系统的分阶段上线部署.

- **上线计划**: 提供各区域 APC 系统的阶段上线计划和方案.

#### 3.2 High Availability and Reliability

支持高可用与可靠的系统架构.

- **高可用**: 系统架构设计应达到 99.99% 高可用水平.

#### 3.3 Scalability

支持系统架构的横向扩展以满足产能增长.

- **扩展性**: 系统整体架构具有良好的扩展性, 可满足工厂的产能需求.

#### 3.4 Application Non-Stop Migration

支持不停机的系统迁移与升级验证.

- **不停机迁移**: 系统整体设计支持 Non-stop Migration, 所有软件、硬件及应用可在车间持续升级.
- **正式环境 PiRun**: 支持正式环境 PiRun 验证流程, UAT 通过后在指定的机台、流程进行 PiRun 验证, 测试通过则发布生产环境.

#### 3.5 OS Support

支持主流操作系统及 32/64 位环境.

- **操作系统**: 系统整体设计与程序支持 32bits & 64bits, 支持 Windows XP/7/8/10/11.

#### 3.6 Performance

支持明确的系统性能指标要求.

- **响应时间**: 99% 的处理在 5 秒或更短时间内完成, 复杂的事务处理不超过 60 秒.
- **故障恢复**: 系统应用服务的故障恢复时间不超过 10 分钟.

#### 3.7 Source Code

支持二次开发与源码级扩展.

- **二次开发**: 提供二次开发平台.

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

### 1. 工厂基础建模

#### 1.1 厂区与组织架构建模

支持 FAB 级基础架构、多工厂多区域的层级建模.

- **区域与设备对应**: 支持 FAB/ 区域 / 设备对应关系定义, 设备可分配到不同区域, 用于工艺工程师 / 设备工程师 / 制造等不同目的; 支持 Fab, Area, Bay, Bank 等定义, 及 DIFF, Litho 等工作区域定义.
- **多工厂建模**: 支持多工厂建模及生产 (8 英寸及先进封装工厂、微组装工厂), 各工厂独立且批次产品、流程、批次隔离, 支持后续新工厂模型扩展建立和生产流片运转; 支持产品在多工厂切换加工.
- **工厂日历与排班**: 支持工厂日历; 支持生产排班, 批次加工历史正确记录班次信息.

#### 1.2 产品建模

支持产品定义、版本管控、关联关系及产品主数据维护.

- **产品定义**: 支持定义工厂生产的成品 / 半成品等产品及其属性, 可定义产品的 Wafer 类型, 产品责任人; 支持定义产品类型、产品负责人、DPW (每片晶圆 Die 数)、ERP 料号、单位等属性; 源产品信息包含关键参数、厂家、供应商原批次号.
- **产品架构模式**: 支持产品设置 (工艺-- 产品-- 生产流程-- 工序-- 工步-- 对应的 Recipe 与机台关系的 MES 架构模式), 包括产品工艺信息的定义; 支持量产、科研、监控片、挡片等不同产品类型.
- **多流程指定**: 设置产品基本信息时, 可为产品指定一个或多个流程, 并指定缺省流程; 支持定义产品与工艺的多对一对应关系、产品与原单晶产品关系, 及产品、工艺流程、Recipe、机台对应关系.
- **产品组与 Reticle 设置**: 支持定义产品组 (产品的 Type 定义), 不同工艺的产品类别, 以及 Reticle 的设置 (能定义不同产品的 Photo Layer 的光罩设置); 支持产品状态定义及转换.
- **编码规则**: 支持自定义产品编码规则.
- **版本管控**: 支持产品版本管控, 升版时进行新旧版本差异比较以确认修改正确性.
- **批量维护**: 支持产品创建、修改、复制生成及批量处理.
- **数据清除与存档**: 提供产品主数据及历史数据删除与存档功能, 不影响报表数据库及现有批次流片与查询; 记录历史详情.

#### 1.3 设备建模

支持设备分类、能力、配方参数及单元结构的完整建模.

- **设备分类管理**: 支持 Litho Inline Tool/Chamber Tool/Internal Buffer Tool/Fix Buffer Tool/Stocker 等设备类型的定义, Equipment 可自定义和转换.
- **设备能力定义**: 支持 Offline, Online Local, Online Remote 等设备能力的定义.
- **配方与参数配置**: 支持设备配方及参数等配置设置.
- **设备 Unit 定义**: 支持 Chamber, Header, Tank 等设备 Unit 的定义.
- **批量数量定义**: 支持设备批量数量的定义, 例如最大和最小 Wafer 数, 最大和最小载体数量的定义.

#### 1.4 Stocker Modeling

支持 Stocker 类型与存储形式的定义.

- **Stocker 类型**: 支持定义 Stocker 的类型, 如 Wafer STK, Reticle STK 等.
- **存储形式与容量**: 支持定义 Stocker 的存储形式及 STK 的容量.

#### 1.5 代码定义 (Code Define)

支持各类业务代码与机况状态的定义.

- **Reason Code**: 提供 Reason Code 的定义, 用于 Hold, Rework 等各种功能; 灵活配置报废、扣留、释放、终止等各类原因代码, 并方便查询、展示.
- **机况定义**: 提供机况定义及其对应的 E10 状态, 支持设置不同机况下的跑货限制, 机况转换规则等.
- **用户自定义代码**: 提供用户自定义代码定义, 增加属性扩展的灵活性, 方便使用自定义逻辑.
- **编号规则**: 基于业务需要灵活配置产品批次 (子母批)、工艺配方、产品、制造资源等对象的编号规则.
- **条码配置**: 灵活配置各类形式的打印条码.
- **批量维护**: 支持批量导入 / 导出及批量新增、修改、删除.

#### 1.6 Lot Type Define (批次类型定义)

支持批次类型体系及关联规则的定义.

- **类型与子类型**: 提供批次类型和批次子类型定义.
- **命名规则**: 提供基于批次子类型的批次 ID 命名规则定义, 如起始字符.
- **状态转换规则**: 系统可以为特定批次子类型运行时的机器状态转换提供不同的规则定义.

#### 1.7 Lot Naming (批次命名)

支持灵活的 LotID 命名规则配置.

- **自定义命名**: LotID 命名规则支持通过配置方式自定义, 满足工厂多样性的要求.
- **子批命名**: 当进行批次分批时, 应自动生成子批次 LotID.

#### 1.8 建模基础管控 (统一要求)

支持建模基础资料的统一管控, 包含操作历史、版本控制、属性扩展、一致性校验与权限分离.

- **操作历史追溯**: 所有基础资料维护保留操作历史记录, 支持按时间、对象等条件查询.
- **建模数据查询导出**: 支持查询工厂建模、产品、工艺流程、Recipe, EDC、设备、代码等所有建模数据并导出.
- **Where-Used 查询**: 支持快捷查询各对象被谁使用.
- **自定义属性扩展**: 支持对工厂、机台、机台组、产品、产品组、工艺流程、层、段、站点、EDC, Recipe, Reticle、探针卡、Q-Time、批次、晶圆等所有模型对象自定义扩展属性.
- **生效前一致性校验**: 数据生效前检查所有设定彼此间一致性, 变更时与当前实际情况比对确认是否可变更.
- **版本控制**: 产品、工艺流程、层、段、站点、Logical Recipe, Physical Recipe, EDC, Reticle、探针卡、Q-Time 等模型对象支持版本控制, 每个对象仅唯一 Active 版本, 新版本生效后旧版本冻结不可随意激活, 版本号自动增加, 所有变更可记录追踪; 流程支持版本和状态 (Unfrozen/Frozen/Active) 管理, Unfrozen 状态下可修改, Frozen 和 Active 状态下无法修改, 激活后的版本才会生效; Active 后不能修改和删除, 如需修改必须升级版本后对新版本进行修改并重新 Active.
- **设置与查看权限分离**: 关键模型参数的设置功能与查看功能分开, 避免查看人员拥有设置权限.
- **用户需求优先**: MES 模型逻辑与用户需求逻辑冲突时, 以用户需求为准调整.
- **采样计划免升版调整**: 修改工艺量测参数采样计划时, 按 MES 内嵌签审流程重设目标值, 无需升版.

#### 1.9 用户组与权限管理

支持基于用户组的统一权限管理及细粒度、多层次的权限管控体系.

- **用户组创建**: 用户可以创建一个用户组, 该组具有相同的权限; MES 可以按组管理用户控制; 每个用户都属于某个用户组, 受用户组管理或控制, 一个命令作用于每个用户.
- **操作安全管理**: 支持用户 / 用户组的添加 / 更新 / 删除等操作安全管理, 并对关键操作提供双重确认支持; 重要系统及其功能操作都要有权限验证, 重要操作需再次输入账号和密码.
- **功能与数据权限**: 支持由用户 / 用户组控制的功能权限, 由用户部门控制的设备权限和持有 / 释放 (Hold/Release) 权限.
- **菜单与按钮级权限**: 菜单和操作按钮都要可以控制权限, 系统默认要对按钮具备权限管控, 不能只是对菜单权限管控; 支持用户组的角色配置, 为角色分配权限, 可以在菜单, 按钮级别明确权限.
- **设备/区域权限**: 支持设备 / 区域和权限设置, 操作者只能使用属于指定设备的设备; 按设备或设备组、按用户或用户组双向增减操作权限; 用户对设备进行设置或动作 (Track-In, Track-Out、切换设备状态 / 模式等) 时按权限校验.
- **菜单布局统一**: 系统的菜单布局和顺序应该默认统一; 相同权限组或用户组的用户登陆系统后看到的菜单布局完全一致, 不同权限组的用户登陆后菜单需按默认统一顺序展示具备权限的菜单, 而不能无序展示.
- **操作证书管理**: 支持操作员设备操作证书管理, 只有持有证书的操作员才能使用设备, 支持对接 OA 系统.
- **任职周期**: 人员任职周期管理.
- **状态切换权限**: 提供界面维护设备状态权限, 即什么角色可将设备状态从什么状态切到什么状态.
- **建模权限**: 提供产品 / 工艺流程建模维护权限管控.

### 2. 流程建模和管理

#### 2.1 Process Specification Editor

支持类 Windows-Explorer 风格的工艺规格查看与在线编辑.

- **层次结构查看**: Process Specification Editor 是一个类似于 Windows-Explorer 风格的查看器, 提供带有 Process Planning 信息的层次结构.
- **运行时修改**: 用户可以更改其值并在运行时应用; 小批量修改直接在编辑器里进行, 大批量修改通过批量导入完成.

#### 2.2 工艺流程建模

支持多层级、模块化、多路径的工艺流程架构建模与资源关联.

- **多层级模块化建模**: 支持工艺流程、工段、站点多层级, 支持模块化建模, 各级模型对象可复用和共享, 多个产品可共用相同工艺流程; 在流程和配方之间需要有一个多层模块化结构, 至少有一个额外的层 (模块或子计划), 以便于未来的维护; 模块可以在流程内部和流程之间重复使用, 若系统提供的流程结构相对简单, 则需提供高效准确的系统解决方案应对未来大量变化.
- **流程对象类型**: 支持定义各级对象类型 (量产、工程、实验、返工、监控等), 支持对各级对象编号、状态、版本管控, 可由工艺流程 / 站点定义段 / 层.
- **资源关联**: 支持基于产品、工艺流程、工序关联机台组、机台、Recipe, EDC, Q-Time、光刻板、探针卡.
- **多路径结构 (Multipath Flow)**: 主工艺流程可由多个子路径组成, 含普通路径、分支路径 (Multi-Path)、返工路径 (Rework)、条件判断分支等; 允许手动或在预设条件下灵活跳转到正常产品流上的其他分支流程; 预设条件包含手动, byProd, ByEDC 等; byProd 针对不同 Prod 共用一个 Process 的场景, 可以按照不同 ProdID 自动选择走不同的分支; ByEDC 针对量测结果的不同区间, 自动选择该区间对应的分支.
- **返工路径**: 支持主工艺路径工序绑定计划返工路径 (Rework), 可定义返工站点和指示, 返工制程可被多个主制程调用.
- **量测站点对应**: 支持工艺站点 (Process Step) 与量测站点 (Metrology Step)、前量与后量的关系对应.
- **虚拟站点**: 支持虚拟站点.
- **按产品配置**: Recipe, EDC, Q-Time 均可按产品单独配置.
- **多产品共用与 Bond 支持**: 一个流程可以被多个产品使用; 支持 Bond/Debond, 支持临时 Bond 和永久 Bond.
- **循环数设置**: 提供流程内部循环数设置, 可在批量界面查看.
- **流程模板**: 提供构建流程模板, 可以快速直观的构建流程并直接导入系统; 导入之前, 应在规则上预先检查流程.
- **流程导出**: Active Flow 或者任何一个版本的 Flow 均支持导出.

#### 2.3 版本升级与在制批次处理

支持工艺流程升版时的设定继承、失效识别及在制批次自动升版.

- **升版继承**: 工艺流程升版继承旧版设定的 Q-Time、采样、计划扣留等; 批次升版保留已触发的 Q-Time.
- **失效识别**: 增删站点 / 工段导致 Q-Time, SRC, RRC, Pilot 等起止站点失效时, 识别影响并告知用户按合适方式处理.
- **批次自动升版**: 新版本 Active 时除特别要求批次外自动升版; 作业中批次待加工完成后判定升版, 特别要求批次保留原版本.
- **非常规批次保护**: 升版不影响 SRC, RRC, Rework, OCAP 处理中的批次, 其返回主流程后自动升版; 返回点不存在时回到旧版返回点并扣留批次, 支持人工升版到新版 (子) 工艺流程.
- **升版失败通知**: 未自动升版成功的批次给出提示, 并将未成功批次清单邮件发送相关工程师.
- **版本与历史**: Process, Product, Subplan 要具备版本控制功能, 都要具备历史查询详细的记录; Flow 支持版本升级, 默认使用最新版本; 需要具备人性化的 Flow 版本比对功能; 支持比较两条工艺流程 (不同流程或不同版本) 并标记不同之处.

#### 2.4 维护与校验

支持工艺流程的批量维护、比较校验与签审生效.

- **批量导入导出**: 导入 / 导出格式统一, 导出数据修改后可直接导入, 导入时有比较与校验防错功能; Flow, Subplan, Step 等都要支持 Excel 模版导入, 提高工作效率.
- **工序顺序校验**: 支持工段内特定工序先后顺序校验.
- **变更签审**: 支持工艺制程信息变更签审后生效.
- **批量维护**: 支持各级对象创建、修改、复制生成及批量处理.
- **数据清除与存档**: 提供工艺流程主数据及历史数据删除与存档功能, 不影响报表数据库及现有批次流片与查询; 记录历史详情.

#### 2.5 Recipe (配方建模管理)

支持 Recipe 的结构、生命周期、归属管理及与 PPID 的对应管理.

- **Recipe 与 PPID 对应**: 流程站点上定义 Recipe, 跑货时下给设备 PPID (Process Program ID), 支持 Recipe 与 PPID 之间的对应关系.
- **多腔设备支持**: 支持多腔设备, 支持腔体串并联.
- **生命周期管理**: 支持 Recipe 生命周期管理; 提供修改、复制、查询、状态修改等维护功能, 支持配方启用和停用.
- **类型与区域**: 可对 Recipe 的类型进行设置 (制程 / 测量等), 并可以定义 Recipe 所属区域; 支持配方分组.
- **产品设备挂载**: 不同的产品或产品组下可以挂不同的设备.
- **多机台类型支持**: 支持普通独立机台、多 Chamber 机台、炉管机台、研磨机台、匀胶曝光显影联线光刻机台等机台类型的配方配置.
- **低耦合变更**: 更新配方无需对所有产品工艺流程逐一更新, 仅需少量调整; 增加机台按机台组内新增即可, 并可查询机台组对应使用的工艺流程.
- **Where-Used 查询**: 支持根据配方查询哪些产品在使用.
- **智能 PPID 选择**: 多腔机台派工时考虑腔的状态选择 PPID; 炉管机台根据配方和生产晶圆片数选择对应 PPID.
- **履历记录**: 生产批次履历记录设备加工所使用的 Recipe/PPID; 记录历史详情.

#### 2.6 Product (流程维度)

支持产品共用流程与属性动态匹配.

- **共用 Flow**: 不同 Prod 可以共用同一个 Flow, Prod 可以设定基本属性.
- **ProdAttribute**: 具备 ProdAttribute 功能, 可针对 Recipe, Reticle, EDCPlan 进行动态匹配.

#### 2.7 Rework (流程维度)

支持返工次数的精细化设定与管控.

- **超限授权**: Rework 次数到了, 支持超级权限继续做 Rework.
- **次数设定**: 支持 By Prod, By Process 设定 Rework Count.
- **Subplan 级计算**: Rework 需要具备 Subplan 级别的计算方式, 支持不同工步返工次数的绑定计算, 共享相同的返工次数.

#### 2.8 Flip

支持 Wafer 正反面属性的设定与管控.

- **Flip 属性**: 可以设定 Wafer 的正反面 Flip 属性.
- **防呆卡控**: 需在流程管控体系中支持 Flip 的各种防呆卡控.

#### 2.9 ProcessLocation

支持载具类型在流程中的防呆卡控.

- **载具防呆**: 支持不同类型载具在流程中不同 Step 的防呆卡控, 例如槽位数量不同需卡控, 前后段制程转换需卡控.

#### 2.10 DedicationFlag

支持指定机台 / 机台组的绑定卡控.

- **机台绑定**: 支持不同 Stage, Layer 卡控必须使用相同的机台或者机台组, 前量和后量卡控同一台设备; 支持设定不同的层需要使用相同的设备.

#### 2.11 Loop Control (循环控制)

支持流程 Loop 次数的自动管控.

- **Loop 次数管理**: 次数没到上限就自动返回 Loop 起始站点继续加工, 次数达到上限就自动跳出 Loop 循环.

#### 2.12 工程数据收集计划 (EDC Plan)

支持 EDC Plan 各对象的建模、复用、版本控制与关联使用, 以及与 SPC 的双向集成.

- **站点设定**: 流程上的站点可以设定 EDCPlan.
- **对象建模**: 支持定义采集点、采集计划、采集参数 (EDC 参数)、采样规则、上下限规则、上下文内容, 采集计划、采集参数、采样规则、上下限规则可复用.
- **版本控制**: 支持 EDC Plan 各对象的版本控制及修订追踪.
- **关联使用**: 支持 EDC Plan 与产品、工艺流程、站点关联使用; 支持定义 Lot/Wafer 数据收集类型; 支持在采集点关联采集计划、采集参数、采样规则、上下限规则; 在采集计划关联采集参数、采样规则、上限规则.
- **上下文收集**: 支持数据采集时伴随收集上下文信息.
- **批量维护**: 支持各对象创建、修改、复制生成及批量处理; 支持工艺制程信息变更签审后生效.
- **数据清除与存档**: 提供 EDC Plan 主数据及历史数据删除与存档功能, 不影响报表数据库及现有批次流片与查询; 支持历史详情记录.
- **SPC 联动**: EDC 参数支持传入 SPC, 支持接受 SPC 结果发起 Hold Lot, Hold Tool 等动作; EDC 规格违反导致 OOC 时可扣留批次、锁定机台.
- **SPC 管制计划集成**: 支持将 EDC Plan 内容送 SPC 定义管制计划收集数据的过滤条件 (按设备、子设备、配方、产品、流程), 接受 SPC OOC 触发的 OCAP 流程.
- **关联查询与同步维护**: 支持 SPC 管制计划与 EDC Plan 规格按规则关联查询, 并支持批量 EDC Plan 规格与关联 SPC 管制计划同时新增和修改.
- **炉管监控数据共享**: 炉管监控批次的量测数据可共享给生产批次.
- **前后测对应**: 母批前测完成后分批, 子批支持继承前测量测结果, 并支持子批后测及对应关系计算.

#### 2.13 选片规则

支持 EDC 采集选片规则的灵活定义、搜索策略配置与多维度绑定.

- **规则定义**: 采集规则可定义, 规则号可自行编辑, 可按不同片数批次选择不同片数, Wafer 位置均可配置.
- **特殊位置忽略**: 可忽略特殊位置.
- **搜索方向策略**: 支持从目标插槽向结束插槽或向起始插槽搜索第一片晶圆, 及一个方向无晶圆时反向搜索的组合策略.
- **搜索范围**: 可设置搜索插槽位置的上限 / 下限.
- **量测片数**: 提供设置规则需挑选的量测片数.
- **多维度绑定**: 支持按批次片数、产品、参数等多种维度绑定规则.

#### 2.14 站点污染等级 (流程维度)

支持按站点管控批次污染等级.

- **ByStep 污染等级**: ByStep 设定污染等级, Lot 在该站点出站后的污染等级变更为该站点设定的污染等级.

#### 2.15 Q-Time (容许时间)

支持全面的 Q-Time 设定、触发、继承与维护管理.

- **时间与动作设定**: 支持设定最小时间、预警时间、最大时间, 各时间点可设定暂停、发邮件、加急等一个或多个并存动作, 邮件支持不同邮件组、收件人; 支持多步之间的 Q-Time, 当系统超过 Q-Time 时自动触发, 不同的时间触发不同的警告.
- **嵌套与触发**: 支持 Q-Time 嵌套, 交叉等设定, 支持 TrackOut 触发, TrackIn 触发, TrackIn 结束, TrackOut 结束; Lot 支持多个 Q-Time.
- **复用关联**: 定义好的 Q-Time 可复用关联到不同产品、工艺流程、工序.
- **变更联动**: 修改工艺流程变更站点时一并更新相应 Q-Time, 无效 Q-Time 提示用户修改.
- **多点计时**: 批次出机台后多个 Q-Time 可在同一时间点开始计时; 入机台后多个 Q-Time 可同时结束; 具备 CancelTrackIn 后 Q-Time 恢复计时的能力, 当 Lot 处在 Q-Time 结束站点时, 如果发生 Cancel TrackIn, Q-Time 需要继承回来; 批次在 Q-Time 结束站点发生取消进站或跳站时, Q-Time 需继承回来.
- **分支自动结束**: 分支路径上有 Q-Time 结束站点而批次实际走另一分支时, 提供 Q-Time 自动结束机制.
- **触发机制**: 时间条件达到时系统自动采取预设动作, 触发机制需合理, 避免不生效、邮件爆发等异常.
- **分批合批继承**: 分批时, 子批要能自动继承母批的 Q-Time; 合批时检查子母批 Q-Time, 自动将子批中比母批短的 Q-Time 带回母批.
- **超时处置**: 如果 Lot 在加工过程中 Over Q-Time, 要能够触发 Track Out 后 Hold Lot 动作.
- **Wafer 级记录**: 具备 Wafer 级别的 Q-Time 记录能力, Lot 分批或者合批后 Q-Time 仍然有 Wafer 级别的单独记录, 可以为后续操作提供精准的 Q-Time 数据.
- **关闭与人工判定**: 支持强制关闭 Q-Time 的功能; 支持设定 DummyStepForQtime, 人工进行判定是否放行 Q-Time.
- **SRC/RRC 继承**: 支持在 SRC 与 RRC 中定义 Q-Time 及继承原工艺流程上的 Q-Time.
- **批量维护**: 支持 Q-Time 创建、修改、复制生成及批量处理.
- **数据清除与存档**: 提供 Q-Time 主数据及历史数据删除与存档功能, 不影响报表数据库及现有批次流片与查询.

#### 2.16 BankFlag

支持 Bank 操作站点的定义.

- **Bank 站点定义**: 可定义允许做 Bank 操作的站点.

#### 2.17 统一维护工具

支持全流程配置查看、一键导入导出及升版影响定位的统一维护.

- **全流程配置查看**: 支持查看产品、工艺路径、分支路径、工段、站点、机台组、机台 ID, Recipe & PPID, EDC Plan、光刻板、探针卡、Q-Time、污染、工时、模组、作业指南等全流程配置信息.
- **一键导入导出**: 支持基于一款产品、工艺流程所有相关数据 (含关联机台或机台组、分支路径、Recipe, EDC Plan、光刻板、探针卡、Q-Time、污染、工时、模组、作业指南等) 的一键完整导入 / 导出.
- **批量导入导出**: 导入 / 导出格式统一, 导出数据修改后可直接导入; 功能导入及 Excel 模版导入两种方式均需支持比较与校验防错.
- **版本比较**: 新旧版本比较并将不同点显著标识.
- **数据校验**: 校验数据类型、长度、特殊字符、空值、值范围、依赖关系、唯一性、与系统其他数据相关性一致性、是否重复等, 提示数据错误信息, 各列有栏位填写说明要求.
- **变更签审与顺序校验**: 支持工艺制程信息变更签审后生效; 支持工段特定工序先后顺序校验.
- **升版影响定位**: 工艺流程及其下各对象升版时定位影响范围 (SRC, Q-Time、在制批次、Pilot) 并反馈用户处理.
- **导入即可生产**: 导入完成后可基于该产品 / 工艺流程进行正常流片生产.

### 3. 机台建模和管理

#### 3.1 EQP 基本属性与设备组

支持设备基础属性的全面管理与设备分组.

- **属性管理**: 支持设备属性 / 能力 / 类型管理, 包括设备名称, 描述, 组别, Batchsize, 腔室, Module 等; 设备号支持自定义, 建模期设备支持批量导入; 设备类型、物理区域、工艺区域、资产编码、负责人等信息均可维护.
- **设备分级建模**: 支持主机台与子机台 (Chamber, Tube, Loadport 等) 分级定义及关联; 支持设备分类管理及类型 / 型号定义, 含倒片机 (Sorter)、光刻联机设备 (Inline) 等特殊设备.
- **设备属性定义**: 支持定义主、子机台属性, 含污染等级、状态切换模型、加工类型、最大加工能力、单次并行加工能力 (Batch) 等, 及机台可接受的载具类型; 设备最大加工批数、片数均可管控.
- **设备组**: Equipment Group 下面可以挂多个机台; 支持通过机台 / 机台组关联产品、工艺流程、工序, 工序增减机台时按机台组快速变更, 无需对所有产品工艺流程逐一更新.
- **批量维护**: 支持设备各级对象创建、修改、复制生成, 支持操作者一次处理多条记录.
- **数据清除与存档**: 提供终端用户及 IT 进行设备主数据及历史数据删除与存档功能, 不影响报表数据库及现有批次流片与查询.
- **设备列表查询**: 可查询全部设备列表, 含设备编码、名称、主 / 子状态、旧主 / 子状态、维修信息、设备组、机台责任人、最新动作、备注等.
- **历史记录**: 记录机台所有过程详细信息, 含机台信息、状态转换信息、批次加工信息、上下光刻板信息.

#### 3.2 Define Chamber (腔室定义)

支持腔室结构与扩展的定义.

- **腔室模式**: 可以定义腔室 ID, 可以定义串行 / 并行 / 组合三种模式.
- **腔室扩展**: Chamber 机台增加新的 Chamber 时, 只需要添加 Chamber 机台 (自动继承父设备属性), 无需修改其他 Flow/Recipe 等属性.

#### 3.3 Set Multi Chamber Recipe Mapping (多腔配方映射)

支持 Chamber 级配方联动管控.

- **Chamber RCP**: 具备 Chamber RCP 系统功能; 针对并行模式, 需要具备一键关闭某一个 Chamber 就把所有带有该 Chamber 的 Recipe 全部都关闭的能力.

#### 3.4 Equipment Status Define (设备状态定义)

支持设备状态体系与转换规则的自定义.

- **转换规则与权限**: 提供用户定义的机器状态转换规则以及对应的权限; 设备状态转换支持按角色权限设定, 无权限则不能转到对应状态; 权限配置支持批量导入导出及变更调整.
- **状态映射**: 提供原始设备状态的定义, 以转换为 MES 定义的设备状态; 标准支持 E10 及用户自定义状态.
- **状态切换**: 支持机台状态切换规则, 以及不同 LotType (例如 MonitorLot) 进出机台时, 机台状态要切换到特定状态, 不能简单的 Run-Idle 模式; 支持事件发生时实时自动触发状态切换 (如批次入机台时机台由闲置转运行), 也支持手动状态转换.
- **运行时状态检查**: 支持配置运行时主、子机台状态检查.
- **手动与自动化管控**: 支持手动和自动化 (Online-Remote 状态, 通过 EAP 控制机台加工) 操作管控.

#### 3.5 Chamber Status Define (腔室状态定义)

支持腔室状态与设备状态的联动管控.

- **状态联动**: 腔室状态与批次进出站联动, 腔室状态将对应转换为不同的设备状态; 主设备状态将根据腔室状态合理的自动更改.
- **配方选择**: 相应的 Recipe 由设备和腔室状态组合定义, 当执行该过程时, 系统会选择最佳的可运行配方 (RCP 系统管控).
- **独立切换**: Chamber 状态可以跟父设备联动, 也可以单独切换.

#### 3.6 ECS / 机台限制 (Tool Constraint)

支持灵活的设备派工限制规则管理, 按主 / 子机台设定多维控制条件、动态管控、模拟验证与批量维护.

- **PN/RN 列表**: 具备 PN/RN 机制, 正向列表根据限制规则设置允许 Lot 派工, 负向列表根据限制规则设置禁止 Lot 派工; 提供设置在特定条件下可以根据时间间隔自动重新启动 RN; 支持机台限制正反向设定.
- **禁止条件**: 设置的禁止条件可以按照 IdleTime, LotCount(Total/Daily), WaferCount(Total/Daily).
- **控制条件**: 可根据主机台和子机台 (Tube, Chamber 等) 设置产品 / 工艺流程 / 段 / 站点 / 配方 / 光罩 / 探针卡 / 晶圆片数量 / 批次等控制条件, 支持通配符, 可单独或组合设定, 同一主 / 子机台允许设定多条; 支持多种的条件组合定义, 如产品 /Flow/LotID/LotType/StepID/Priority/StageID/Recipe/ 设备 / 腔室 /Reticle 等.
- **动态条件管控**: 支持批次在特定时间区间内限制最大可运行晶圆片数或批次数.
- **同设备约束**: 支持设定不同的层需要使用相同的设备.
- **优先级**: 支持优先级设定, 后设定的优先级高于先设定的机台限制条件.
- **例外与通配符**: 支持例外条件, 在卡控条件基础上可以让满足例外条件的获得通过, 提高用户设定的工作效率; 支持通配符设定卡控条件和例外条件.
- **生效机制**: 需具备 Doublecheck 才能生效的机制.
- **复制与模拟**: 支持复制机台限制并修改; 可用已有批次通过模拟器确认设定正确性; 提供指定批次和指定机台是否存在限制的查询; MES 自检机台限制设置是否正确 (含格式).
- **查询筛选**: 支持基于产品、工艺流程、工序、模组、机台组、机台类型、机台、子机台查询筛选已设定规则, 至少一个筛选条件需输入值.
- **卡控提示**: 批次被机台限制卡控时提示被哪些条限制卡控及设定人信息.
- **预先验算**: 支持验算批次在未来指定站点是否在哪个机台 / 子机台被限定无法加工 (需明确单站点及机台 / 子机台).
- **批量导入导出**: 支持机台限制信息批量导入导出.

#### 3.7 EQP 查询和 History 查询

支持高效的设备信息查询与追溯.

- **条件查询**: 支持 By 各种条件筛选查询; 支持查询条件的文本框内直接输入模糊字符 (例如带有 \* 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.
- **ElogSheet**: 需具备 Chamber 级别的 Wafer 过帐记录的能力 (ElogSheet 功能).

#### 3.8 炉管基础功能 (Furnace)

支持炉管设备的 Batch 组批、监控片贴值、缓冲批与挡片填充管理.

- **多种 Batch 方式**: 支持生产批次+ 炉管 MonitorLot, 仅生产批次, 仅 Monitor 批次, 生产批次+RCLot+ 炉管 MonitorLot, RCLot+MonitorLot, 生产批次+RCLot, 生产批次+RCLot+ 炉管 MonitorLot+ 非炉管区的前制程需长膜的 MonitorLot 等多种 Batch 组合方式; 支持生产批与炉管监控批一起组批, 也支持只有生产批或监控批单独组批的跑货模式.
- **动态 Recipe 调整**: 通过 ARG 系统针对 BatchLot 的 Wafercount 区间, 进行 Layout Recipe 动态调整; 支持设定 Batch 最少晶圆片数, 跑货时根据生产片数量决定配方.
- **组批卡控**: 组 Batch 时需针对 Batch 内多个 Lot 的 Recipe, EDC 等信息进行合理的卡控.
- **监控片管理**: 炉管监控晶圆片纳入非生产批管理, 进行准备 / 使用 / 回收 / 降级 (Preparation/In-Use/Recycle/Downgrade) 管理; 监控批 In-Use 作业中可进行前量 / 组批 / 后量.
- **Boat Position**: 支持指定批量组合中生产批次在炉管中的顺序 (Boat Position).
- **量测同步与贴值**: 炉管 MonitorLot 做完量测后, 可以对 Batch 内的生产批次进行同步的量测过帐以及量测数据贴值; 炉管后生产批次在当站等待监控批量测结果.
- **分区动作**: 根据监控片所处位置对相应区域产品批次采取动作, 某监控片超规只对其对应批次采取动作.
- **缓冲批管理**: 支持炉管缓冲批管理, 从 EAP 得到缓冲批剩余数决定是否可以组批.
- **异常处理**: 炉管 Batch Run 异常后, 可以先 DeleteBatch, 然后 MonitorLot 和 Batch 内其他 Lot 需要各自走自己的 Flow.
- **Dummy 自动作业**: 炉管的 Fill/Side DummyLot 可以 EAPAuto 进出站; 支持炉管机台填充挡片 (Dummy) 机制.
- **预约上限**: 支持最大预约 Batch 数管控 (该炉管上可预约的最大批量数).

#### 3.9 WET 基础功能 (酸槽批量跑货)

支持 WET 设备的批次作业.

- **Batch Run**: 可以选择相同 Recipe 的 Lot 在 WET 进行单批或者 2 个批次 BatchRun; 可选择同时跑 2 个载具或 1 个载具; 用户可设定 Batch 最少晶圆片数.

#### 3.10 Sorter 设备 (倒片机作业)

支持 Sorter 设备的作业管理与多端口并行导片任务.

- **SorterJob 类型**: 支持 SorterJob 基本类型, 如 Exchange, Split, Merge, WaferFlip, ReadT7Code; 支持载具更换、批次转移、分批、合批、批次下线 (Wafer Start)、批次入库 (Wafer Out)、转角、晶圆片 ID 验证、晶圆片排序、晶圆片翻转.
- **作业模式**: Sorter 机台要能支持流程内 (Inline Sorter) 和非流程 (Adhoc Sorter) 的作业; 支持 Inline Sorter Step, 能够按照用户的设定完成 Sorter 动作, 例如 Split, Flip, ReadT7Code 等.
- **多端口并行**: 多装载端口 (Load Port) 倒片机在机台能力允许下灵活组合 (如 4 端口), 在端口数量允许情况下同时执行多个导片任务.
- **分合批**: 支持分批 (1-N)、合批 (N-1).
- **端口与载具限制**: 提供以载具 / 批次属性限制 Load Port 使用; 提供设定决定载具是否能传送到另一个载具.
- **任务互斥**: 倒片机任务列表中的批次不能再被倒片机任务预约.
- **物料盒传递**: 支持原物料盒和载具之间的传递.
- **查询与取消**: 支持 SorterJob 的查询和取消.

#### 3.11 光刻机台 (Photo)

支持双光罩及 Track/Scanner 联机控管.

- **双光罩**: 光刻 (Photo) 机台支持双光罩使用.
- **联机子机台**: 支持一个主机台同步控管两个子机台 (Track/Scanner), 并可分别设置两个子机台的配方 (Track Recipe/Scanner Recipe).

#### 3.12 多腔体设备 (Multi-Chamber)

支持多腔体设备的并行 / 串行跑货与 PPID 组合.

- **跑货模式**: 支持多腔体设备并行 / 串行跑货模式.
- **PPID 组合**: 可根据子机台状态, 下达给 EAP 最合理的 PPID 组合.

#### 3.13 化学机械研磨 (CMP)

支持 CMP 设备耗材期限校验与端口组合管控.

- **耗材期限校验**: 开工前校验研磨垫 (Pad)、抛光头 (Head) 的使用期限.
- **端口载具管控**: 定义进出 Load Port 允许的载具类型并在开工前校验; 可定义进出端口组合 (如 Port1 进 Port2 出、Port3 进 Port4 出).

#### 3.14 量测设备

支持量测设备与 EAP 的数据采集集成.

- **EDC 下达与回传**: 可将工程数据采集计划下达给 EAP, EAP 根据采集计划将量测数据上传至 MES.

#### 3.15 激光打码机台 (Laser Mark)

支持激光打码建模与自动打码.

- **打码建模**: 支持用户根据客户、产品、订单等信息建模.
- **自动打码**: 支持通过 EAP 自动打码.

#### 3.16 机台可接受污染等级

支持机台污染等级接受范围的管控.

- **污染等级卡控**: 机台设定可接受的 Lot 的污染等级, 支持设定多个污染等级, 污染等级需要精确匹配.
- **开工校验**: 校验载具、批次污染等级, 通过才能开工; 支持一个载具中存在多个批次.

### 4. 载具管理

支持载具全生命周期管理、清洗管控与双向查询.

- **创建载具 (Create Carrier)**: 允许用户创建 Carrier, 用户可以根据 Carrier 类型类别和 Carrier 型号创建指定数量的 Carrier; 命名规则可自定义批量创建, 也可自行创建, 也可批量导入.
- **分配载具 (Assign Carrier)**: 允许用户将 Carrier 分配给没有 Carrier 的批次, 指定的载体必须是 Free 的, 晶片的顺序可以在该功能中更改.
- **交换载具 (Exchange Carrier)**: 允许用户交换载具, 原始 Carrier 和交换 Carrier 应为同一类型.
- **载具操作**: 支持创建、分配、释放、废弃 / 取消废弃、报废 / 取消报废、清洗、交换、调整载具.
- **Hold/Release 载具**: 允许用户 Hold CST, CST 状态应更改为 HOLD; 允许用户放行 CST, 完成此功能后, CST 应处于 Hold 之前的状态.
- **清洗管理 (Clean Carrier)**: 允许用户为任何 Carrier 进行清理操作, 设置完成后其状态应为 WaitClean, 完成清洗后状态应为 Free; 通过载具模型设置清洗次数或期限, 批次入 / 出机台时检查达到清洗条件时提示用户交换载具并清洗旧载具, 但不卡死本次加工; 快捷查询需清洗载具及当前存储位置; 批次长期扣留导致载具超清洗周期时, 系统自动更换载具并将过期载具送洗.
- **信息查询**: 允许用户查询 Carrier 的状态, 历史, 实时信息, 装载的 LotID 等, 可以根据用户选择的不同条件进行查询; 提供载具具体信息、历史、状态查询; 所有通过载具编码查询批次的功能都支持通过批次编码查询; 支持模糊查询 (文本框直接输入 \* 号等模糊字符查询); 查询结果具备分页显示.
- **载具信息**: 含载具状态、模型、位置、最后位置、载具类型、清洗时间、载具种类、载具槽位信息等.
- **槽位信息变更 (Change Slot Map Info)**: 允许用户更改同一 Carrier 中晶片和原始批次之间的关系.
- **载具属性修改 (Modify Carrier Attribute)**: 允许用户修改 Carrier 的属性.
- **载具类型卡控**: CST 跟 ProcessLocation 的 Mapping 关系需要可以配置, 实现流程管控中的 CST 类型防呆卡控; 支持批次类型与载具种类关联对应, 支持污染管控.
- **载具类型**: 支持来料盒子、过程载具、送库房载具等各类载具管理.
- **生命周期**: 对载具进行生命周期管理, 载具上有唯一码标签.
- **PCD (载具组成)**: Carrier 需要由 Cassette/Pod/Door 作为属性组成, RFID 内写入的是 Carrier ID (RFID 安装在 Cassette 中), Cassette/Pod/Door 扫码输入, 系统以 Carrier ID 做索引; 支持清洗周期管理, 支持清洗机台的 PCD 过帐管理.

### 5. Reticle 管理

支持光罩全生命周期、状态控管、检测周期及 EAP 集成.

- **新增 Reticle (Add Reticle)**: 工程师可以通过特定的命名规则添加新的 Reticle ID, Pod, Film Type, Max Wafer Clean Count, Max Lot Clean Count 等等; 光罩命名方式可由用户定义, 按类型、等级管理; 属性可按业务需要定义 (类型、目录、设备类型、等级); 提供查询、新增、修改、履历维护界面.
- **Hold/Release Reticle**: 工程师可以使用此功能来 Hold / Release Reticle, 用户需要输入 Hold Code / Release Code 和注释; 光罩扣留支持多重扣留, 可针对不同扣留分别释放.
- **Return Reticle (光罩退回)**: 如果 Reticle 不再使用, 工程师可以将 Reticle ID 返回到 Reticle 版室.
- **Scrap/UnScrap Reticle**: 工程师可以使用此功能来报废 Reticle, 用户需要输入 Scrap Code 和注释; 如果 Reticle 已经报废, 经过工程师的验证仍然可以使用, 工程师可以使用此功能来解开 Reticle.
- **Bank In/Out Reticle**: 工程师可以使用此功能将需要的 Reticle 移动到 Mask 室; 如果经过工程师的验证 Reticle 仍然可以使用, 工程师可以使用此功能将 Reticle 从 Mask 室中取出.
- **Modify Reticle**: 工程师可以修改 Reticle 的各种属性.
- **Inspect/Clean Reticle**: 工程师可以使用此功能来检查 / 清洁 Reticle; 支持光罩和光罩盒清洗、检测等状态控管; 检测规格可设置, 检验数据可收集并通过 SPC 控制; 支持周期控管光罩检测及光罩盒清洗.
- **Reticle Location**: 支持记录 Reticle 位置, 例如 Stocker, 机台, Maskroom 等.
- **Reticle Pod**: 工程师可以为 Reticle 添加一个 Pod ID, Pod 信息包括 Pod ID, Pod 类型, Pod 容量, 清洁周期等; 支持与 EAP 集成的光罩盒位置管理, 支持手动移动; 光罩盒 (Reticle Pod) 清洗时间 / 清除时间管理.
- **状态配置**: 可以通过配置方式实现各种状态和切换规则; 提供光罩状况变化、追踪及跳转控制.
- **Reticle TrackIn/TrackOut**: 支持在特定 Litho 机台做 Reticle 的进出站过帐并记录对应历史; Lot 所需的 Reticle 进站后, Lot 才允许进站; Lot 使用的 Reticle 需要等待 Lot 出站后, 才允许出站; 支持机台最大 TrackIn 的 Reticle 数量卡控, 超出数量不允许 TrackIn.
- **Printdown (PD 管控)**: 支持设置 PDFlag, 设置 PD 最大使用次数和有效期; Max Using Count 超限后, 卡控批次不能进站, 状态切为 WAIT_PD, Track In 后 Status 切为 IN_PD; 系统保留 Reticle 和 Reticle Pod 的状态变更历史记录.
- **IRIS**: 支持设置 IRISFlag, 设置 IRIS 的管控 Spec, 设置 IRIS 最大曝光 Wafer 数量; 支持 IRIS 收值和判定.
- **作业检查**: 作业时检查光罩的晶圆数量和检测时间; 检查光罩运行间隔控制 (不能连续超时使用).
- **状态自动更新**: MES 自动更新光罩状态、位置、晶圆片计数; 支持通过所选光罩决定配方.
- **量测数据**: 支持光刻板工程量测数据采集, 量测结果 (颗粒) 超标自动扣留光刻板.
- **信息查询**: 工程师可以使用此功能查看 Reticle 的详细信息, 用户可以根据 Reticle ID, Group, Pod and EQP 来选择 Reticle 的具体信息, 可以根据用户选择的不同条件进行查询; 支持模糊查询与分页显示; 光罩操作及使用记录历史可查询; 光罩检测机台整合 EAP 和 MES, MES 可查询光罩处理历史.
- **Reticle Group**: 支持设定 ReticleGroup, 下面关联多个 Reticle; 需要 Reticle 组的概念, 可以将相同类型的光刻分组为一组, 实际在线使用时可以选择其中之一完成光刻; 系统可以查询每个产品的整套 Reticle 信息.
- **装载端口**: 支持光罩装载端口管理 (通过配置管理) 及与 EAP 对接.

### 6. Lot 管理 (批次全生命周期)

#### 6.1 Lot Plan / 批次创建

支持多来源、多方式的批次自动与手动创建及订单集成.

- **批次对象**: MES 批次为流片监控等操作主体, 生产流片批次承接内外部生产订单, 监控批次为库房领料用于日常、机台保养、挡位用的晶圆批次.
- **批次类型**: 支持创建各类批次, 批次类型自定义, 含生产、工程、测试、控挡片、陪片等.
- **ERP 联动创建**: 可以跟 ERP 系统联动, 创建新的 Lot 和半成品 Lot; 也支持在 MES 系统中独立创建 Lot, 支持 Batch 创建 Lot; ERP 订单下达时 MES 自动创建生产批次, 接收产品、工艺流程、数量、收货库房、长文本、优先级、计划扣留、计划下线时间、计划入库时间、批次负责人、招标方等信息, 并按批次命名规则及 ERP 订单类型自动确定批次类型.
- **手动创建**: 支持手动创建批次编号并按规格校验防错, 支持 Excel 批量导入创建批次并校验防错.
- **多订单类型**: 支持外延订单、晶圆订单、划片订单、晶圆复测订单、芯片复测订单等各种订单的批次创建.
- **物料选择**: 支持创建 Lot 的 Wafer 选择不同物料, 而不是同一个 Lot 的 Wafer 只能用一种物料.
- **订单信息**: 支持创建 Lot 时具备记录 PO, Order, 客户信息等功能.
- **数量与编码**: 创建 Lot 的 Qty 可以自定义; 创建 Lot ID 时可以根据 LotType 等信息自动进行编码.
- **创建卡控**: 未到规定的下线时间不允许下线 Lot; 物料不足时, 不允许创建 Lot.
- **StartHold**: 支持 StartHold 功能, 并且可选开启还是关闭.
- **取消批次 (Cancel Lot Plan)**: 允许在批次未开工前取消已创建的批次; 创建的 Lot 还未下线之前, 可以取消创建 Lot, 并且 LotID 编码不会被占用.
- **变更批次计划 (Change Lot Plan)**: 可以修改 Plan 好的 Lot 的 Lot 类型, 优先级, StartHold, Owner, CustomerID, Plan Start Day/Due Day; 所有修改需要具备历史记录.
- **Lot Plan Portal 查询**: 工程师可以使用此功能查看 Lot 的详细信息, 可自定义结果排序, 可以根据用户选择的不同条件进行查询, Lot ID 条件支持同时输入逗号分隔的多个 LotID 模糊查询; 支持模糊查询与分页显示.

#### 6.2 创建源批次

支持源批次的自动与手动创建及与生产批次的关联.

- **自动创建**: ERP 发料时 MES 自动创建相应物料源批次, 源批次建立与生产订单批次关联.
- **手动创建**: 支持手动创建源批次, 可选建立或不建立与生产订单批次关联, 创建时按规格校验防错, 支持 Excel 批量导入创建并关联生产批次.

#### 6.3 批次下线 (Wafer Start)

支持计划批次的投线作业、下线绑定、单据打印及背刻码记录.

- **WFS**: 针对 Plan 的 Lot 进行 WFS (Wafer Start).
- **下线绑定**: 绑定生产批次、源批次装载到载具中, 有生产订单时通过生产订单关联, 无订单信息时通过产品与源产品对应关系匹配才能下线, 对批次类型、载具类别进行对应管控.
- **载具与物料**: 绑定载具并进行防呆卡控; 指定物料, 支持 By Wafer 指定物料.
- **单据打印**: 支持打印履历卡、批次标签、流程卡 (已有相关模版).
- **T7 Code**: 下线时记录晶圆背刻码 (T7 Code), 背刻码伴随批次全生命周期.

#### 6.4 批次与载具关联管理

支持批次与载具、晶圆与插槽的关联记录.

- **装载规则**: 一个载具可容纳一个或多个批次, 一个批次只能在一个载具内.
- **关联记录**: 系统记录批次与载具的关联, 及晶圆片与插槽位置的关联.

#### 6.5 批次查询 (Lot Portal)

支持多维度批次查询、特殊批次高亮及历史追溯.

- **查询条件**: 查询条件包括 Lot ID, Lot Type, Lot Priority, Location Work Area, Carrier ID, Lot Status, Product, Plan, Stage, EQPGroup ID, Production/NPW/Engineer, Normal/RunCard/All, 可以根据用户选择的不同条件组合进行查询; 支持批次号、批次类型、批次优先级、位置、工作区域、载具号、批次状态、产品、工艺流程、子流程、工序段、设备组、设备、批次负责人等条件, 支持定制.
- **多界面查询**: 提供多种界面查询批次, 可通过筛选条件过滤批次清单, 支持按设备、按站点查询.
- **快捷操作**: 查询批次界面提供基本在制品操作按钮.
- **特殊批次高亮**: 扣留的、有 Q-Time、优先级高等特殊批次高亮显示.
- **未来作业查询**: 可查看批次已触发的 Q-Time、计划扣留、站点可用机台的信息.
- **历史查询**: 批次 / 晶圆操作留下历史, 提供详细方便的历史查找功能, 历史查询不对生产造成影响; 支持模糊查询与分页显示.

#### 6.6 进出站 (Track In/Out)

支持手动 / 自动进出站、进站检查及取消进站.

- **进出站模式**: 支持手动和自动进出站, 和 CancelTrackin.
- **进站检查**: Track-In 检查机台状态、污染、Q-Time、机台限制等一系列逻辑; 进站之前需具备防呆卡控, 例如设备状态, Lot 状态, Flow 站点信息匹配, ECS, Season, Monitor, RCP, 污染等级等等.
- **取消进站**: 允许的状况下可取消批次进站, 批次状态返回进站之前, 支持 EAP 端发起的取消批次进站.
- **Chamber 选择**: 针对并行 Chamber 机台, MFG 可以手动选特定 Chamber 进站.
- **出站停留配置**: 可配置批次出站后批次停留在当站或下一站.
- **快速过站 (Process Lot)**: 支持快速过站功能, 指定 Lot 和 Lot 当前站的可用设备, 可对批次进行快速加工和过站.

#### 6.7 预约 / 取消预约 (Reserve)

支持批次开工前的预约检查、指定机台预约与预约列表管理.

- **预约检查**: 预约时检查批次开工所必须通过的条件, 如设备机限、RMS、污染等.
- **载具数量上限**: 提供可设置预约载具的最大数量.
- **指定机台预约**: 支持将批次预约到指定机台.
- **取消预约**: 支持取消预约.
- **预约列表**: 人工预约支持预约列表, 支持排序.

#### 6.8 Hold/Release (扣留及释放)

支持角色化批次扣留释放、叠加扣留、邮件通知及批量操作.

- **多原因 Hold**: 可以同时用不同原因 (Reason Code) 对同一个 Lot 加以 Hold, 支持 Batch Hold.
- **角色化扣留**: 按 Hold Code 及角色进行批次扣留, 用户可被赋予多个角色, Release Code 与 Hold Code 有对应关系表配置; 根据 Department 以及 Reason Code 管控 Hold/Release 动作时的权限.
- **叠加扣留**: 支持叠加扣留暂停, 支持转扣留暂停的代码, 支持更改备注.
- **历史追溯**: Hold 和 Release 要有历史记录, 可以清晰的跟踪 Release 动作对应的是哪个 Hold 动作, 历史要可以查询; Release Hold 时须选择相应的 Hold Code, 并填写 Release Comment.
- **邮件通知**: 扣留时发邮件通知相应角色里所有人员, 默认自动发送对应角色人员, 同时支持额外手动勾选具体人员.
- **全状态扣留**: 支持所有状态下批次扣留 (对应扣留类型不同); 每次释放仅能释放对应一条扣留.
- **批量放行**: 单一 Lot 有多个 Hold Code, 可以选择多个 Hold 使用相同的 Release Code 一次 Release; 支持批量扣留 / 释放.
- **代码配置**: 扣留 / 释放原因代码可调整配置及查询.
- **Running Hold**: 支持因设备故障等原因将加工中的批次扣留.
- **异常处置**: 具备强制将机台上发生异常的 Lot 做出站操作的系统功能; 支持 Running Hold, 因机台故障等各种原因而将所跑的 Lot Hold 住, 再使用 Recovery Run Card 进行后续处理.
- **扣留查询导出**: 按不同筛选条件查询所有被扣留批次 (已扣留时间、扣留代码、扣留人、释放责任角色), 支持导出 Excel, CSV 文件.
- **Change Hold Code**: 对存在的 Hold 有权限的前提下可以 EditHold; ChangeHold 以后, Release 权限也相应变更; ChangeHold 要记录详细的历史, 包括 Change 前后的 HoldCode 记录.

#### 6.9 FutureHold (计划扣留)

支持未来站点计划扣留的设定、批量操作、版本继承及产品级规则.

- **FutureHold 设定**: 支持 Lot 在现在的 Flow 上, 对未来某个站点设置 Future Hold; 支持当站 (还未入机台时) 出机台扣留、未来站点入机台前及出机台计划扣留, 批次未到站时可取消, 支持批量设定及批量取消.
- **生效时机**: 按生效时间点分为进站就扣留 (Pre Future Hold) 和出站时扣留 (Post Future Hold).
- **多重设定**: Lot 的 Future Hold 支持 Multi Future Hold 的设置, Future Hold 的设置可以被更改, 删除; 支持批量预设扣留, 设置可更改、删除; 支持叠加计划扣留.
- **版本继承**: Lot Future Hold 生效后与版本无关, 版本升级后 Future Hold 应该被继承.
- **取样站点扣留**: 在取样站点设定计划扣留, 批次即使非抽样批次也需扣留在取样站点.
- **产品级规则**: 基于产品 / 工艺流程对某个站点设定计划扣留, 该产品到达该站点即自动扣留; 取消设定时已受影响批次的计划扣留一并取消, 已扣留批次单独释放.

#### 6.10 分批 / 合批 (Split/Merge)

支持逻辑 / 物理分合批、属性继承、计划合批及 Sorter 自动化.

- **逻辑物理分批**: 支持逻辑 / 物理分批, 支持写分 / 合批备注; 物理分批动作后, 要自动触发分批的 Sorter Job, 后续使用 Sorter 站点标准作业进行分批; 物理合批动作后, 要自动触发并批的 Sorter Job, 后续使用 Sorter 站点标准作业进行合批.
- **多批操作**: 支持一次分一个或多个子批, 支持同一时间合并多个子批到母批.
- **计划合批**: 分批时可同时设定计划合批站点或不合批, 计划合批动作可单独取消.
- **属性继承**: 分批时子批默认继承母批的基本属性、当前站点信息、上下流程、长文本、备注、Q-Time、实验单、扣留、计划扣留、计划分批、污染等级 (适用正常产品批、SRC 批、Pilot 批、非生产批等); 包括 FutureAction, Wafer 的前量数据, 加工站所有信息等; 当子批 Merge 到母批时, 子批的 Future Action 等信息需要 Merge 到母批上.
- **合批规则**: 同家族且相同产品、相同工艺流程、相同站点的子批可互相合批; 原始 (祖宗) 批次不能被合并到子孙批中; 有计划合批动作的批次不允许被合批, 除非计划合批已到达合批当站或提前取消.
- **合批防呆**: 合批时需要具备防呆卡控, 确保 Lot 核心属性一致, 不得产生 MO 风险, 例如 Lot Flow 版本, 站点, 污染等级, 优先级等等.
- **Sorter 自动化**: 支持倒片机 EAP 自动化分、合批.

#### 6.11 Bank In/Out

支持批次的入库 / 出库操作与长时停留批次的暂存.

- **Bank 操作**: 可以单个 Lot 或多个 Lot 同时做 BankIn/BankOut 动作.
- **暂存流程**: 长时不流的批次由提出人以暂存专用扣留代码扣留给制造部, 由制造部决定执行暂存或拒绝并转扣留代码给提出人部门角色, 该动作权限赋予制造部指定人员; 已暂存批次可执行暂存转出回到产线.
- **货架位置**: 暂存位货架操作需指定批次暂存到的目标边仓位置, 便于后续查找实物批次.
- **显示隔离**: 扣留批次中不显示暂存批次.

#### 6.12 跳站及退站 (Skip/Reposition)

支持跳站退站的污染校验、Double Run 防控及量测跳站权限.

- **权限管控**: 支持特殊权限管控; 支持量测机台跳站, 权限可放宽至 PE, 各模组只能跳自己的站点.
- **污染与 Double Run 校验**: 跳站及退站时校验载具、批次和站点的污染等级, 及工艺工序重复跑货 (Double Run) 防控.
- **防呆卡控**: 支持防呆卡控, 防止污染等级或者载具不匹配等错误的跳站.

#### 6.13 Scrap/UnScrap (报废及取消报废)

支持晶圆级与整批报废、单据影响识别及信息回退.

- **报废管理**: 支持 Lot 整批报废以及取消报废; 支持基于晶圆 (可针对不同晶圆选定不同报废原因代码) 和整批 (统一报废原因代码) 的报废 / 取消报废, 取消报废时指定返回载具 (原载具或新载具) 进行分配并卡控污染等级.
- **单据影响识别**: 批次报废影响到 SRC 等单据 (涉及未来站点确定晶圆) 时提前识别并告知单据设定人变更或取消重设, SRC 即使已审批发布也能撤回修改.
- **多批次载具**: 一个载具多批次情况, 载具中所有批次须统一报废或取消报废.
- **信息回退**: 取消报废后批次所有信息回退到报废前.
- **代码配置**: 报废原因代码可调整配置及查询.

#### 6.14 Terminate/UnTerminate

支持整批终止与取消终止.

- **整批终止**: 支持整批终止或取消终止, 基于整批终止选定统一终止原因代码.
- **多批次载具**: 一个载具多批次情况, 载具中所有批次须统一终止或取消终止.
- **信息回退**: 取消终止后批次所有信息回退到终止前.
- **代码配置**: 终止原因代码可调整配置及查询.

#### 6.15 Finish/UnFinish

支持批次的完工与取消完工.

- **完工管理**: 可以针对 Lot 做 Finish 动作或 UnFinish 动作.

#### 6.16 入 / 出库与出货

支持多种形式产品入库、两段式入库确认、退库与出货.

- **多形式入库**: 支持晶圆入库、外延片入库、芯片入库等多种形式产品入库.
- **两段式入库**: 入库时先由制造部入库, 再由仓库人员操作入库确认, 入库进度可查询, 入库信息可通过接口抛转 ERP.
- **退库**: 支持入库后退库返回现场的操作.
- **Ship/UnShip**: 支持 Lot Ship 以及取消 Ship.
- **Ship Label**: 标签打印需要打印机联调一起使用, 例如 Zebra 打印机.

#### 6.17 多批次操作

支持特殊机台的多批次协同作业.

- **多批次进出站**: 支持炉管 BatchLot 操作进出站和 CancelTrackin; 支持 Bond 机台多批次一同进出站和 CancelTrackin; 支持 WET 机台多批次一同进出站和 CancelTrackin.

#### 6.18 Update Lot Attributes (批次属性更新)

支持批次属性的分级修改.

- **AdjustLot**: AdjustLot 功能提供常规属性的修改.
- **特殊属性权限**: 特殊属性支持单独权限修改, 例如仅仅修改 LotOwner 或者 Priority.

#### 6.19 Reassign / 批次调整

支持批次产品与流程的重指派, 在当前站点或未来站点的产品与流程变更.

- **版本升级与变更**: 支持 Lot 在现在的站点上进行 Product, Plan 的 Version Upgrade, 或是 Change Product, Plan.
- **By Lot Reassign**: 按多种条件查询和选择一个或多个 Lot, 指定目标产品 (使用产品当前激活的流程和版本), 工序和 Step 进行 Reassign, 可选择是否保留 Lot 的 Future Hold.
- **By ProductChange Reassign**: 按 Product 查询和选择一个或多个 Lot, 指定目标产品 (使用产品当前激活的流程和版本) 进行 Reassign, 系统自动 Reassign 每个 Lot 到目标产品和流程上, 并定位到与 Lot 当前 Step Seq 相同的 Step; 如果目标产品流程上没有 Lot 对应的 Step, Reassign 失败并提示, 可选择是否保留 FutureHold.
- **By FlowVersionUp Reassign**: 按 Product 查询和选择一个或多个 Lot 进行 Reassign, 系统自动 Reassign 每个 Lot 到目标产品和流程上, 并定位到与 Lot 当前 Step Seq 相同的 Step; 如果目标产品流程上没有 Lot 对应的 Step, Reassign 失败并提示, 可选择是否保留 FutureHold.
- **自动 Reassign**: 支持 Lot 出站后自动执行 Reassign, 并且具备防呆卡控, 防止不具备升版条件的 Lot 错误的升版导致 MO.
- **当站调整**: 支持批次在当前站点进行产品、工艺流程的版本升级, 或改变产品、工艺流程.
- **未来站点重绑定**: 支持对未来某个站点设置流程重新绑定, 进行产品、流程的版本升级或改变.

#### 6.20 Lot Info 显示

支持批次 Q-Time, Rework, Loop、上下游站点信息的可视化展示.

- **Q-Time 展示**: LotInfo UI 针对多条 Q-Time 都要有显示详细信息的 UI 展示, 并且展示 Q-Time 的相关信息, 例如 Start/End 站点, Q-Time 触发时间等等.
- **Rework 展示**: LotInfo UI 针对 Rework 要能够显示详细的信息, 包括 ByStep/ByRoute Rework 次数, 剩余次数, 设定的 Rework 站点详细信息等; 支持 Lot 在 Rework 流程开始前的 Cancel Rework, Lot 自动返回到 Rework 开始前的工序; 超过 Rework 次数, Lot 自动被 Hold.
- **Loop 展示**: LotInfo UI 针对 Loop 要能够显示详细的信息, 包括 Loop 次数, 剩余次数, 设定的 Loop 站点详细信息等.
- **FetchStep**: 支持显示 Flow 的上下游站点信息, 并且显示对应的 FH, Q-Time 设定等未来步骤的关键工艺设定; 支持显示 ReworkFlow; 支持显示未来站点的 ECS 卡控结果, 得出可以加工的机台.

#### 6.21 SubconOut/In (委外加工)

支持跨厂委外加工的多种模式.

- **委外模式**: 支持前半部分在其它 Fab Run, 后半部分在本厂 Run; 后半部分在其它 Fab Run, 前半部分在本厂 Run; 一部分在本厂 Run, 然后外包给其它 Fab Run, 再又回到本厂 Run 等多种委外场景.

#### 6.22 Add Comment (添加备注)

支持批次站点备注.

- **站点备注**: 支持给 Lot 在站点增加 Comment.

### 7. Bond/Debond (键合)

支持绑定 / 解绑关系与站点的完整定义, 主次产品批次的绑定作业与追溯, 及多层键合.

- **产品绑定关系**: ByProd 设定主 Prod 和副 Prod 的绑定关系; 支持 WaferBond 时的 TopProd/BottomProd 关系的设置, 并且需要跟 EAPAuto 联动.
- **站点联动**: 支持主副 Bond 站点的联动设定, 支持主副 Debond 站点的联动设定; Bond 站点和 Debond 站点需要设定特殊标记, 不得被混用.
- **循环与模式**: 支持副 Prod 的 Loop 循环使用设定; 支持永久 Bond 和临时 Bond.
- **键合与解键**: 支持键合 (Bonding) 和解键 (De-bonding).
- **主辅产品配对**: 可配置器件批次主产品与封装批次辅产品对应关系, 在键合站点选择主产品批次与已配对辅产品批次进键合机台, 出机台后辅产品批终止 / 走回收流程, 支持手动 / 半自动操作模式.
- **多层键合**: 支持多层键合 / 堆叠.
- **Bonding 指定**: 主次产品批次一起作业, Dispatch 前或 Move Out 时指定 Bonding 关系, 在指定 Bonding 关系时可调整主次产品批次的 Wafer 顺序, 系统成对绑定; 如果是 Dispatch 前指定 Bonding 关系, 则没有指定 Bonding 关系时 Lot 不能进站加工.
- **Bond 后管控**: Bond 后, 此产品的 Lot 状态变为 Bonded, 系统只操作主产品 Lot; 支持多层 Bond, 即 Bond 后可以再 Bond.
- **Debonding**: 支持 Debonding, 走过带有 Debonding 逻辑的工步自动 Debonding, Debond 出来的批次需要指定合法的新 Carrier; Debond 也支持多层 Debond, 可以指定 Debond 哪一层, 缺省是后 Bond 的先 Debond.
- **次产品流程**: 次产品可以定义完整的 Flow, 如果可以 Debonding, 可设定循环次数并进行控制.
- **追溯**: 可以查询主次产品批次的完整 Wafer 历史, 可以追溯 Wafer 到 Wafer 的 Mapping 关系.

### 8. Run Card Management (SRC/RRC)

#### 8.1 Run Card Type

支持实验与异常两类 Run Card.

- **SRC/RRC**: 支持 Split Run Card (SRC) 和 Recover Run Card (RRC); SRC 一般由 PIE 根据实验要求开具, RRC 则一般由 MA 在发生异常后开具.

#### 8.2 RC 常规功能

支持 Run Card 的结构、签核与执行管理.

- **RC 结构**: 每个 RC 包括一个 Split Step, 多个 Loop Flow, 一个 Merge Step; 在 Split Step 可以不进行分批, 整个母批进入 RC; RC 可以连续执行多个, 中间无需走主流程 Step.
- **Split/Merge**: 支持自动 Split 和 Merge, 或人工 Split 和 Merge.
- **审核激活**: RC 需要审核和激活, 可按照 RC 开具的部门走不同的审核流程, 签核顺序需要可调整.
- **Loop Flow 定义**: Loop Flow 可以来源或基于现有 Flow 进行修改, 长度没有限制, 可以重用; 可以指定 EQP/EQP Group, 指定 Recipe, Check RCP, 指定量测选片等; Loop Flow 每个 Step 可以设定 Recipe, EQP, EQPGroup, Reticle, EDC Plan, EDC Wafer List, EDCSpec 等.
- **界面共用**: RC Lot 与普通 Lot 共用 Dispatch 界面, 各种 Trans 界面, 查询界面, 以及 Move In 和 Move Out 逻辑.
- **SPC 集成**: 支持 RC EDC 数据采集进 SPC, 并且支持手动勾选开关是否进 SPC.

#### 8.3 SRC (批次科研调整 / 实验分片单)

支持实验分片单的内容设定、校验、复制、签核与执行.

- **设定内容**: 支持设置工序、机台、子机台、片号、配方、采集参数、采集规则、光刻板、探针卡、Q-Time、曝光所需信息等; 可快速添加其他正常站点作为原始模版后调整, 也可直接添加情景化路径模版 (预先定义好的 Rework Flow) 后调整.
- **采集规则**: 支持采集片数、片号设定, 支持工程数据收集, 识别管制计划获取工程数据的规格与控制线; 采集参数是否进 SPC 管制计划允许用户自行配置.
- **Q-Time 管理**: SRC 内部子流程可新增 Q-Time 并关联原主流程 Q-Time 设定, 支持继承原 Q-Time 起止站点; 起止站点落在分 / 合批站点之间且工艺未设置时提醒用户设定.
- **类型与代码**: 支持设定实验分片单的类型、原因、代码及起止站点.
- **设定校验**: 校验是否与机台限制反向设定 (不允许入机台) 相违背并提醒修正; 检查机台 / 子机台上配方开关状态.
- **开具方式**: 支持当站开 SRC 或者在未来步骤开 FutureSRC, 已经有 FH (包括 byProdFH) 的站点需要可以开 RC; 可针对批次当前站点或未来站点开立, 一个批次可开立多张, 同一站点不允许开立多张, 不允许嵌套开立.
- **计划扣留**: 支持实验单过程批次设定计划扣留, 计划扣留站点可在实验单站点或终止站点.
- **快速复制**: 支持快速复制已有 SRC 修改调整创建, 创建时必须进行所有逻辑校验, 不限定相同产品或工艺流程, 起止站点当前批次不存在时允许用户调整.
- **签核流程**: 创建完成后按预设签核流程签核, 签核完成等待批次到达开始站点执行; 签核未完成而批次提前到达时, 自动对批次暂停等待签核完成.
- **触发分批**: 针对已有 SRC 的批次在设置的触发站点分批, 子批按 SRC 的流程与规格进行实验在制品作业.
- **片数确认**: 片数与 SRC 设定片数不符合时提交创建人确认, 该判断提前告知.
- **合批返回**: 子批实验做完后, 可与在设置站点等待的母批合批.
- **异常嵌套**: 支持 SRC 发生异常嵌套生成 RRC 的功能.
- **系统集成**: SRC 支持跟 APC 等系统集成; SRC 支持 RCP 系统联动, 并且有对应的设置防呆卡控.
- **特殊 RC**: 支持跳步 RC 等特殊 RC 功能.

#### 8.4 RRC (异常恢复单)

支持 Recover Run Card 的多种应用场景, 加工异常的恢复单触发、晶圆分流与临时作业.

- **触发方式**: 生产工步加工中批次或设备发生异常、批次 Running Hold 时可触发 RRC; 支持手动触发, 开立流程可开给工艺、设备进行签核.
- **晶圆分流**: 触发后可选择已加工、尚未加工、正在加工的晶圆片分批分别处理: 未加工晶圆分出子批后取消进站 (Cancel Track In), 已加工晶圆分出子批后执行出站 (Track Out), 正在加工晶圆分出子批后进入重工流程 (Rework Flow).
- **临时作业步骤**: 支持选择部分晶圆片设定临时作业步骤, 内容含工序、机台、子机台、片号、配方、采集参数、采集规则、光刻板、探针卡、Q-Time、曝光所需信息.
- **分批合批执行**: 执行时可分别对配置的不同情景晶圆分批作业, 作业完成再合批回到 RRC 中配置的完成节点.
- **PartialRRC**: 支持 PartialRRC.
- **Rework**: 支持 RRC 方式 Rework.
- **嵌套与场景**: 支持 RRC 方式嵌套 SRC, 支持 Bond/Debond 场景的 RRC.

#### 8.5 RC Q-Time

支持 Run Card 内的 Q-Time 管理.

- **RC Q-Time 设定**: 支持设定 RC Q-Time; 支持在 RC 内单独设定 Q-Time 开始和结束站点, 且开始和结束站点必须配对出现, 不得缺失设定导致 Q-Time 无法正常结束.
- **主流程继承**: 支持在 RC 设定时自动识别主 Flow Q-Time 结束站点, 并且在 RC 内继承该 Q-Time 结束站点的任务; 支持在 RC 设定时自动识别主 Flow Q-Time 起始站点, 并且在 RC 内继承该 Q-Time 起始站点的任务.
- **跨流程计时**: 支持 Lot 在主 Flow 开始一个 Q-Time 且在 RC 内结束该 Q-Time; 支持 Lot 在 RC 内触发继承自主 Flow 的 Q-Time 计时, RC 结束回到主 Flow 后结束该 Q-Time.

### 9. Non-Production Wafer (NPW: Monitor / Season / Dummy)

#### 9.1 Equipment Monitor (机台监控)

支持设备 Monitor 的灵活设置与执行, 设备稳定性监控、监控流程自定义及监控批管理.

- **触发方式**: 支持 By Interval Time, Fixed Time, byPM, Manual 设置设备 Monitor, 符合条件后自动触发; 支持配置有效时间, 即在设定的时间范围内才会自动触发 Monitor.
- **控制对象与要求**: 控制对象含主设备和子设备 (Chamber), 按时间、作业量要求配置监控要求, 监控量测参数合格才允许设备或腔体子设备继续作业; 半自动及手动模式均需支持.
- **维护界面**: 提供查询、新增、修改、履历、复制等监控信息维护页面.
- **周期管理**: 基于时间周期设定监控执行内容及单据, 可重复执行, 可设定目标时间区间并提前邮件预警, 超出时间则必须做监控.
- **执行调整**: 支持提前, 推迟, 跳过执行 Monitor; 支持在到达 Monitor 时间前提前预警; 因设备负荷或紧急情况可人工修改监控间隔时间; 批次量测数据通过则自动重置机台间隔时间.
- **Risk Run**: 支持 Risk Run, 即触发执行 Monitor 后, 支持在一段时间内可 Run 指定的 Recipe 或 Recipe Group.
- **多项目监控**: 支持一个载具内的 Wafer 同时 Monitor 多个 Item, 如 Litho 的 CD 和 Overlay; 支持自定义测机监控流程 (含作业和量测站点), 支持设备监控参数的前后计算, 一次测机可监控设备多个参数.
- **设备对应**: 支持定义设备和监控流程的对应关系, 可按设备组定义整个设备组的测机流程.
- **测机片管控**: 测机片产品、测机片数、循环测机次数、测机片回收循环次数均可配置管控.
- **监控批来源**: 监控批可来自不同的源批次, 晶圆支持来自不同批次的多片.
- **进机模式**: 监控可为独立非生产批单独进设备, 也可与生产批一起进设备.
- **使用后处理**: 监控批使用完成后可回母批、直接回收、废弃; 使用中量测值超标允许报废、回母批回收.
- **源批管理**: 监控源批可回收 (Recycle)、降级 (Downgrade)、报废 (Scrap), 回收完成后清零当前使用次数并更新回收次数、总使用次数; 降级后批次编号重新生成.
- **EAP 集成**: 支持使用 EAP 操作并自动收值.
- **数据查询**: 支持查询从 SPC 查询导入的 OFFLINE Chart 数据.
- **污染管控**: 支持污染等级管控.

#### 9.2 Equipment Monitor Plan 卡控

支持 Monitor Plan 的唯一性与执行卡控.

- **唯一性约束**: 同一触发条件下, 一个 EQP+Chamber+Plan Type 组合只能设定一条.
- **执行卡控**: 一个 Plan 被触发后执行完成前, 不能再次触发.

#### 9.3 NPW 定义

支持挡控片全生命周期的定义与管理.

- **型号与回收**: 支持定义挡控片 (NPW) 的型号信息, 定义回收流程 (Recycle Flow), 并可定义降转型号 (Downgrade); 在 Recycle Flow 的设定 Step, 通过输入判定条件, 系统按照预设 Downgrade 将 NPW 进行降转.
- **使用次数**: 可按照型号定义 NPW 可用次数, 支持管理和调整挡控片的已经使用次数 (By Wafer Level).
- **Monitor 流程**: 支持 By 机台 /Chamber 定义 Monitor 流程 (包含 Monitor 量测机台, 加工机台, Recipe, Offline Chart 等), 有版本管理, 并支持 Monitor 流程导入导出, 控片子批可注册 Monitor 流程; 不同测机流程之间升版本必须互相不能影响, 要互相独立, 松耦合.
- **量测作业**: 进站时可修改测机流程 Recipe, 量测需要支持指定部分 Wafer 量测; 量测中如有单片未收到值且没有 OCAP, 需要可以单独重测这一片; 支持手动上传挡控片测机数据; 支持量测设备单独做 AM 的方案; 要支持 Multilot 模式测机.
- **历史与计算**: 支持挡控片测机历史查询, 能查询采集参数, 可根据自定义公式计算测机结果.
- **NPW Downgrade**: 用户可自定义非生产片降级规则; 提供界面进行非生产片降级到其他非生产批类型.

#### 9.4 炉管 Monitor

支持炉管 Monitor 片的组批与量测联动.

- **Monitor 组批**: 对于炉管 Monitor 片, 在组 Batch 时需要指定 Monitor Lot; 在进行炉管加工后 Monitor 片会进行测量, 测量后的值会自动复制到 Batch 内的 Product Lot.
- **Batch 约束**: 一个炉管 Batch 内可包含多个 Product 的 Lot, 但这些 Lot 的加工 Recipe 必须相同; 如果进行量测时这些 Lot 的抽片方式不同, 则必须在量测前打散并重组 Batch, 保证每个量测的 Batch 内的 Lot 都有相同的抽片方式.
- **A/B Batch**: 支持 A/B Batch.

#### 9.5 Season (机台暖机)

支持设备暖机的多触发方式与全过程管控, 主 / 子设备的暖机控制、暖机批管理及多条件触发.

- **Season 定义**: 能够定义 Season Route, Season Lot, Season Recipe, 系统应该支持按用户配置的信息做 Season Split; 提供 GUI 给用户维护 Season 信息, 如 Query, Add, Modify, View, History, Copy 等; 可定义暖机计划、暖机批、暖机配方, 系统按用户配置信息执行暖机; 支持查询、新增、修改、履历、复制等维护.
- **控制对象与模式**: 暖机控制对象包括主机台和子机台 (Chamber), MES 在全自动, 半自动及手动模式下都需要支持 Season 控制.
- **暖机批管理**: 含状态模型、生命周期控制、属性维护、降级、清洗、回收等, 暖机批降级后批次编号重新生成.
- **触发方式**: 按照 ByPM 触发 Season, 且支持多个 SeasonProdLot 做 ByPM 的 Season; 按时间 (Eqp/Recipe Idle 时间) 触发 Season; 按 Wafer 数量 (持续 / 累计) 触发 Season; 按 Recipe Group 变化触发 Season.
- **自动执行**: Season 支持自动逻辑分批的 SeasonLot 进行 Season, 无需人工参与; 支持 ByPM 的 By Step Season Complete 和 Cancel, 支持中途 Down 机的场景.
- **连续运行**: 支持 CMP Zero-Idle, Season Lot 和 Production Lot 需要确保连续 RUN.
- **Chamber 级计时**: Chamber 的 Season 要以 Chamber 实际 Idle 的时间为准, 而非以主机台时间为准.
- **并行批量**: 设备配方更换的暖机及配方闲置的暖机均支持并行批量 (Batch).
- **独立或混合模式**: 暖机可为独立非生产片单独进设备, 也可与生产批一起进设备; 一个机台的不同子设备 (Chamber) 可并行跑暖机.
- **异常处理**: 当 Season 出现某些异常, 用户可以手动完成 Season 或重置 Season 状态及信息, 以使得重新做 Season.
- **多次暖机**: 支持机台需要用多种 Season Wafer 跑多个程序才完成暖机要求, 且有时效管控.
- **污染管控**: 支持污染等级管控.

#### 9.6 Dummy (挡片)

支持炉管挡片批次的进出控制与使用计数管理.

- **炉管进出控制**: 支持挡片批次在炉管机台的进出控制, 自动及手工模式均支持挡片放入和取出作业.
- **使用计数**: 晶圆使用计数、膜厚累加控制机制.
- **回收流程**: 支持大小回收流程及次数控制.
- **污染管控**: 支持污染等级管控.

### 10. Pi-Lot / Pi-Run (先行批试跑)

#### 10.1 Pi-Lot 定义和执行

支持 Pi-Lot 的设置、触发与状态管控.

- **设置条件**: 支持 EQP Type 为 P 的 Pi-Lot 设置; 支持 By IdleTime 设置触发 Pi-Lot, 支持 By Lot, Wafer 层级, 如设备为主机台设置为 Lot 层级, 设备为 Chamber 设置为 Wafer 层级.
- **参数设置**: 支持 Max Run Time, Idle Time 设置; 支持 Pi-Lot Wafer Count, Retry Wafer Count 设置.
- **维护与状态**: 支持 Pi-Lot 设置增加, 删除, 修改, 查询, OFF/ON 设置; Pi-Lot 包含 Created, Ongoing, WaitSplit, WaitMerge, Close 状态管控及 History 查询.

#### 10.2 Pi-Run 试跑模式

支持产品、机台、批次三种先行试跑模式.

- **产品先行试跑**: 验证批次情况, 流程为分批前量、加工、后量合批, 主动提示并要求分批, 连续加工多个工序后自动合批.
- **机台先行试跑**: 验证子机台情况, 只有先行批子批才能入试跑子腔加工, 其他批次只能使用非试跑腔体及配方; 多腔机台子腔 PM 之后需 Pi-Run 试跑合格后才放行.
- **试跑子腔指定**: Pi-Run 子批在试跑先行站点只能进试跑子腔, 由用户设定单时指定哪几片晶圆进入哪个机台哪个子腔, 一单可同时设定多个试跑子批.
- **批次先行试跑**: 主要有分批和合批设定, 与机台先行试跑基本相同, 区别在于没有必须入的先行试跑子腔.

#### 10.3 Pi-Run 试跑单设定

支持先行试跑单的片数设定、数量限制与异常确认.

- **片数设定**: 试跑片数由用户 (工艺指定) 设定, 支持提前设定先行试跑单.
- **单批单卡**: 一个批次生效的先行试跑单只能一张, 有多张需求时先对批次做计划扣留, 待当前单执行完成后再设定新单.
- **报废再确认**: 设定的分批晶圆在到达分批站点前已报废时, 提交工艺再确认, 工艺可修订其他晶圆作为试跑子批.
- **全片限制**: 不能将所有晶圆全部设定到试跑子批中, 无论单批还是多批.
- **采样优先级**: 先行试跑优先级高于静态采样, 试跑子批经过采样站点一定执行而不跳过, 片数抽样规则按站点本身设定.
- **合批扣留**: 支持在合批站点设定计划扣留, 在合批前扣留.

### 11. PRMS (光阻管理系统)

支持光阻基础数据与对应关系的维护、全生命周期状态管理、更换作业与安全库存预警.

- **基础 Mapping**: 支持 FAB 的 MaterialNo, ResistNo 和 ResistName 对应关系维护界面 (ResistMapping); 支持光阻的基本属性管理 (Resist No, Resist Name, Material No, Defrost Time 退冰时间, FollowBottleLife, BufferDaysAfterDefrost), BufferDaysAfterDefrost 支持退冰缓冲天数的管理.
- **Barcode 管理**: 支持 Operator 通过扫描枪扫描 VendorBarcode; 支持 Vendor Barcode 解析为 FAB 内部 Barcode (规则需客制化, 先默认手动录入); 支持将 Barcode 存入 PRMS 系统中, 连同打印机将 FAB 内部 Barcode 作为瓶身的唯一识别码; 扫描光阻瓶身条形码, 在系统生成光阻瓶编码 (该瓶光阻唯一标识).
- **有效期管理**: 支持光阻有效期管理.
- **设备管路对应**: 支持光阻, 机台, 光阻管路的对应关系管理 (ResistNo, EQPID, ChamberID, PRPipe); 支持一个光阻可以对应多个设备和光阻管路, 支持一个设备和光阻管路只对应一个光阻; 维护不同机台所需的光阻类型.
- **Recipe Mapping**: 支持 ResistNo 和 Recipe 的 Mapping, 支持 ResistNo 和 Recipe Mapping 设置的历史查询.
- **统一查询**: 支持光阻的统一查询界面管理.
- **状态模型**: 支持光阻的状态管理 (InUse, Empty, Defrosting, Ready, Hold); 光阻录入时的状态为 Defrosting; 光阻退冰时间到了自动变为 Ready; 光阻瓶被换到机台上 Status=InUse; 光阻报空并且没有被更换前 Status=Empty; 光阻更换后旧的光阻瓶 Status=Finish; 除 Finish 外, 其他的状态都可以切换到 Hold 状态; 光阻过期, 光阻状态自动切换为 Hold, 并备注原因是因为过期; 光阻 Release 后回到 Hold 之前的状态.
- **退冰 (Defrost)**: 建账后自动开始退冰计时, 退冰时间到达后自动更改光阻状态并自动发送 / 显示预警; 默认优先使用退冰完成光阻, 也可手动选择; 退冰开始超过设定时间后自动扣留光阻.
- **报空处理**: 支持机台报警时自动切换为 Empty (系统集成), 支持机台报警时手动将光阻报空.
- **新光阻录入**: 支持录入新的光阻; 支持推荐新光阻 BarcodeList (旧光阻同样 ResistNo 的 Status=Ready 的光阻瓶, 并且按照 ReceiveTime 从小到大排序).
- **更换联动 (PR Change)**: 光阻更换后, 旧的光阻瓶 Status 变为 InUse, 并记录 EQPID 和光阻管路; 光阻过期, 需更改 MES 机台状态 (系统集成); 更换时校验新老光阻是否符合要求, 不符合则退回; 同型号按领入时间先进先出优先使用最先领入的光刻胶; 更换完成后自动更改两瓶光阻状态; 可更换单个管路光阻.
- **过期管控**: 光阻超过有效期后自动扣留.
- **履历**: 光阻状态改变及用户操作均产生履历.
- **用尽警示**: 机台上光阻使用完毕后警示; 使用过程可强制结束.
- **安全库存**: 光阻安全库存提前预警.

### 12. OCAP (超规动作计划)

#### 12.1 OCAP FLOW 设置

支持 OCAP 流程的自定义配置.

- **流程自定义**: 支持自定义 OCAP FLOW, Inline/Offline 两种; 支持 OCAP FLOW Step 的自定义; 支持自定义 OCAP FLOW 对应的 Action 及 Handle; 支持自定义不同 OCAP 流程, 流程步骤支持用户方便地自行编制并部署上线.
- **处置方式**: 支持 Re-Keyin Data, 重新录入量测数据, 弹出 EDC 采集的数据, 用户修改数据重新提交并送 SPC; 支持 Remeasure, 按照原来的量测 Recipe 及选片规则重测; 支持 Remeasure With Other Recipes, 选择新的量测 Recipe 加测; 支持 Remeasure With Other Units, 重新选量测片加测; 支持 Lot Release, Lot Hold to Owner; 可在 OCAP 流程中定义扣留批次、释放批次、重测、加量 (片号)、转换机台状态、重工等功能 / 行为 / 操作.
- **结果确认**: 支持 Confirm OCAP Handle, 系统带出 OCAP Handle 的处理结果, 不能修改, 只能点按钮.
- **签核管理**: 支持 OCAP FLOW 每个节点的人员签核管理; 支持 Flow Action YES/NO/Approve/Reject/Confirm/Skip/Default.
- **换机重测**: Inline OCAP 重测要支持选择同机台组内的其他机台, 换机台后不要重复生成 SPC 收值, 需要覆盖收值.
- **信息查询**: 支持 OCAP Portal 查询详细的 OCAP 信息.
- **量测工艺联动**: 支持量测站点关联多个工艺站点, 量测数据 OOS 时扣留对应工艺机台, 或接收 SPC 系统传递的扣留要求时扣留对应工艺机台.
- **RRC 联动**: OCAP 流程涉及批次返工处理时需开立 RRC.

#### 12.2 OCAP FLOW 执行

支持 OCAP 的自动触发与执行管控.

- **Chart 关联**: 通过 MES 新增导入 SPC Inline/Offline Chart, 对应 Chart 可以指定 OCAP Flow ID; 支持通过 MES 端修改导入 SPC Inline/Offline Chart, 对应 Chart 可以指定 OCAP Flow ID.
- **执行模式**: 支持 Inline OCAP Inline/Offline 执行, 针对 OOC 可以允许自定义的放行次数, 次数没到就不 Hold.
- **自动触发**: 支持当量测收值 SPC 触发 Lot Hold 时, 根据 SPC Chart 对应的 OCAP Flow 触发对应 MES 的 OCAP; 支持 OCAP RULE 的自动生成编号 (OCAPYYYYMMDDhhmmssxxx); 量测收值任意一片 Wafer 触发 Lot Hold 就触发 OCAP.
- **SPC 集成触发**: 与外部 SPC 系统接口集成, OOC/OOS 时自动触发扣留批次、对应工艺机台并自动生成 OCAP 单据及相应 OCAP 流程; 集成 SPC 显示对应管制图.
- **OCAP ID**: 支持针对批次自动生成相关 OCAP ID.
- **签核集成**: 产生 OCAP 后与质量异常单签核系统集成, 将批次信息 (批次、段、站点、OCAP 原因等) 传递至外部签核系统, 指定步骤 (如判断重测是否 OOC/OOS) 支持传递至签核系统.
- **Hold 限制**: OCAP HOLD 限制不能手工 ReleaseHold, Edit Hold.
- **状态管理**: 支持 OCAP 的状态管理, 批次触发 OCAP 后 OCAP 的状态为 ACTIVE; 支持 RAD 管理; 支持强制关闭 OCAP.

### 13. LotSampling

#### 13.1 普通 Sampling 设置

支持常规采样规则的设置与执行.

- **Sampling 设置**: 支持 Step Type 为 Y 的 Sampling 设置; Sampling 设置条件包含 Eqp Group, ProductID, RecipeID, LotID (尾码) 等, Sampling 条件支持 \* 通配符设置.
- **维护功能**: 支持 Sampling 设置增加, 修改, 删除, 查询; 支持 Excel 导入功能; 支持系统 Sampling 设置查询, 导出功能.
- **跳站执行**: Lot 按 Sampling 设置跳站, 并记录 Trans.

#### 13.2 SmartSampling 建模

支持智能采样的规则建模.

- **分组方式**: 支持按照加工站或 Recipe 定义采样分组方式.
- **范围限定**: 支持按照 Prod 或者 EDCPlan 多个维度限定采样产品的范围和步骤.
- **规格设定**: 支持按照时间或者 WaferCount 设定 Spec.
- **特殊属性**: 支持禁止跳站的特殊 Lot 属性.

#### 13.3 SmartSampling 执行

支持智能采样的动态执行.

- **动态调整**: 系统可按照设定的规则, 智能动态的调整采样结果.
- **组内联动**: 当采样组内有 Lot 量测通过, 则组内其他 Lot 可以跳站, 反之不可以跳站.

#### 13.4 YE Sampling 设置

支持良率工程采样的设置.

- **采样条件**: 支持 Wafer Count, Long Time No WIP, Remain Q-Time 等条件.
- **Key Tool**: 支持 Key Tool Lot 的 Sampling.

### 14. checkCust

#### 14.1 checkCust 定义

支持客户出货检查规则的定义.

- **检查类型**: 支持 AutoHold 和 CheckSplit.
- **条件公式**: 支持条件公式自定义, 包含常用的 Lot 属性.

#### 14.2 checkCust 控制规则

支持出货前的自动卡控.

- **自动扣留**: 当满足设定的条件时, 在出货之前 AutoHoldLot.

### 15. 探针卡 (Probe Card)

支持探针卡全生命周期管理、对应关系、机台关联、寿命管理与送修流程.

- **创建与信息**: 创建探针卡, 可以绑定探针卡状态模型; 定义探针卡基础信息包括供应商, 针长, 以及库存位置, 当前 T/D 次数, 累计 T/D 次数, 预警值, 目标值, 最大使用次数, 报废预警次数, 报废次数; 可接收探针卡信息创建探针卡并更新位置, 提供探针卡分组.
- **对应关系设置**: 提供界面供用户对产品、站点、分组、测试程序与设置文件等设置对应关系.
- **产品约束**: 支持探针卡与产品的正反向约束功能; 来料加工时 MES 验证设备当前 Mount Prober 与产品匹配关系.
- **机台关联**: CP 测试时探针卡通过探针卡分组与设备组关联测试机台; 检查对应关系后可装载 / 卸载到机台.
- **状态操作**: 对探针卡可以执行暂停 / 释放或报废操作; 探针卡到达上限后, 可以送修并切换状态; 提供探针卡送修后再回到可用的状态.
- **Mount/Unmount**: 提供 Mount 界面, 选择测试设备, 选择 Prober Card ID 可以进行 Mount 到机台; 对探针卡可以 Unmount 机台操作.
- **寿命管理**: 探针卡增加扎针次数属性并进行寿命管理 (EAP 通过接口, 非 EAP 通过文件解析), 支持晶圆片计数; 批次进站校验有效期; 扎针次数与晶圆计数达上限或超过时限制使用; 剩余计数未达上限但少于本次作业片数时报警, 由员工选择继续或终止进站.
- **装载查询**: 提供探针卡装载到机台的查询.
- **SRC 寿命计算**: CP 的 SRC 时也需计算探针卡寿命.
- **历史**: 提供探针卡状态切换历史信息.

### 16. 跟其他系统集成

#### 16.1 跟 ERP 集成

支持与 ERP 系统的全面业务集成.

- **集成业务**: 支持领料, 退料, 工单下达 (将已经下达的生产订单传输给 MES 系统), WIP 报工, 报废, 入库, 退库, 工单完成, Product ID Change, Lot Type Change 及其他对接 ERP 系统功能的集成.

#### 16.2 跟 APC 集成

支持与 APC 系统的集成.

- **APC 集成**: 对接 APC 系统并且实现相关功能集成.

#### 16.3 跟 FDC 集成

支持与 FDC 系统的集成.

- **FDC 集成**: 对接 FDC 系统并且实现相关功能集成.

#### 16.4 跟 YMS 集成

支持与 YMS 系统的集成.

- **YMS 集成**: 对接 YMS 系统并且实现相关功能集成.

#### 16.5 跟 DMS 集成

支持与 DMS 系统的集成.

- **DMS 集成**: 对接 DMS 系统并且实现相关功能集成.

### 17. 测试线管理 (Wafer Sort / FT / WAT / Bin)

#### 17.1 产品与 Bin 基础定义

支持测试产品、Bin 的基础信息定义.

- **产品定义**: 支持产品的基本信息定义, 产品的特殊属性定义.
- **Bin 定义**: 支持 Bin Name 设置, 并定义 Bin Type (Pass, Fail).
- **Bin Group**: 支持 Bin Group 设置, 并关联其所含 Bin, 根据需求设置 BIN 中所含的缺陷明细.

#### 17.2 良率管控标准

支持 Bin 级与整批良率管控标准的定义.

- **BinControlRule**: 支持 Hard Bin 与 Soft Bin 的 Limit 管控标准定义; 支持单 BIN 良率标准; 支持多 BIN 组合良率标准; 支持良率上限与下限; 支持 SBL 管控标准定义.
- **TOTAL 良率配置 (SYL)**: 支持 SYL 管控标准定义; 支持单片良率标准; 支持整批良率标准; 支持良率上限与下限.
- **缺陷率设置**: 缺陷率可以 By 缺陷项设置, 也可以 By 产品, 流程, 缺陷项设置.

#### 17.3 测试资源与规则

支持测试程序、设备组合与测试规则的设定.

- **测试程序关系维护**: 支持定义机台上可以用 Recipe/ 程序; 支持产品, 工步与测试程序的关系维护.
- **组合设备设置**: 支持 Tester 与 Prober 以及 Tester 与 Handler 组合关系设定.
- **测试规则设定**: 支持测试 SYL, SBL 相关设置.

#### 17.4 测试线管理

支持测试线作业的全面管控.

- **测试设置**: 可设置产品批次的 AQL 标准; 支持测试 Bin 分批 / 不分批的设置; 支持测试尾数合并规则自定义.
- **测试作业**: 支持 By Pcs 结束; 支持进站校验 Recipe; 支持进站产生测试文件; 支持通过 FT 测试分出各种 Bin 以及对应数量.
- **复测管理**: 支持复测 FailBin 数量, 根据规则判定复测次数, 由系统判定复测结果; 支持从 PassBin 中抽测一定比例数量进行复测, 根据提前设定的复测比例, 由系统判定复测结果.
- **标签与分批**: 支持 PassBin, FailBin, LAT 好品, LAT 次品, EQC 好品, EQC 次品等各种标签打印; 支持按照 Bin 等级自动进行分批.
- **尾料处理**: 支持尾料绑定主批次包装入库; 支持尾料合批包装入库; 支持尾料包装直接入库 (尾数管理).
- **拆批 / 合批**: 支持 HOLD 状态下拆批, 支持作业中拆批; 支持 HOLD 状态下合批, 支持作业中合批.

#### 17.5 测试工步管控

支持测试工步的执行管控.

- **工步管控**: 支持 By Wafer 结束; 支持程序的防呆; 支持测试设备, 治具的校验; 支持读取测试结果文件; 支持 SYL/SBL 计算与管控; 支持 Mapping 查看.

#### 17.6 测试良率异常处理

支持测试后良率异常的多种处置方式.

- **异常处置**: 支持放行并拆批重测, 批次进行批次拆分, 部分进行重测, 部分流转到下一个工步; 支持放行并重测, 批次留在当前工步待开始, 进行重新测试; 支持放行, 批次直接流转到下一个工步.

#### 17.7 CP 测试结果处理 (Wafer Sort/Probe)

支持 CP 测试结果解析、叠加运算与卡控.

- **结果解析**: 基于 CP 机台测试结果文件按规则解析获取工程量测数据, 并计算每片晶圆合格管芯数更新到晶圆上.
- **叠加运算**: 支持 CP 测试结果文件按规则叠加运算, 并进行批次扣留、异常片号自动分批扣留、报废等功能.
- **卡控规则**: 支持片号不一致、晶圆标准颗粒数不一致等卡控.
- **OCAP 分流**: 异常 OCAP 触发后, 正常片号分子批出站继续流片.

#### 17.8 合格 Die 二次报废

支持晶圆级 Die 手动报废与自动报废.

- **手动 Die 报废**: 可作为工序动作或临时专门操作, 手动进行晶圆上 Die 报废; 一片 Die 合格率或指定参数低于一定值时该片自动报废或扣留, 批次可在产线正常流片.
- **历史与打印**: 需要历史记录; 支持随时打印晶圆合格 Die 数.

#### 17.9 复测业务

支持已入库批次的复测重投与良率追溯.

- **复测流程**: 支持已入库批次重新投入产线进行 CP 测试、外观检查或重新包装; 涵盖复测订单下达发料、复测流程模型、复测操作 Die 报废、质量追溯到源批计算良率.
- **良率更新**: CP 测试及外观检查支持更新良率数量 (基于上次入库合格数手动报废晶圆上 Die 数更新).

#### 17.10 FT 测试

支持 FT 测试的 BIN 卡控、分批并批、重工与耗材校验.

- **BIN 良率卡控**: FT 后 BIN 结果可进行良率卡控, 在 FT 等待结果站点根据 BIN 结果自动进入下一步 (扣留、放行等).
- **失败处置**: 失败可扣留, 工程师处置时可选择放行合格 Die (拆批)、重工不合格 Die (拆批) 或整批重测; 可手动通过 MES 扣留 / 放行.
- **重工站点选择**: 工程师可对需重测部分选择一个或多个站点进行重工.
- **返工计数**: FT 步操作中显示返工次数 (子批从父批复制), 超过返工计数显示警告并保持.
- **按 BIN 分批**: FT 完成后按 BIN 分批, 合格 Bin 流通, 不合格 Bin 自动扣留等待处置; FT 做完后在下一站点等待处置.
- **耗材校验**: 支持维护载带等耗材对应关系, 作业时校验防止用错, 并对载带批次记录使用历史以供查询.
- **并批规则**: FT 后支持并批, 可自定义并批规则 (批次、产品名等参数); 零头并批支持先进先出、少的先推荐原则, 显示满足条件的批次及不满足条件的原因.
- **自动拆批**: FT 后支持自动拆批, 整批继续流通, 零头留在零头仓库中.
- **良不良分流**: 不良品随良品整卷一起流通入库, 良品进良品仓, 不良品进废品仓.
- **部分出站**: FT 支持作业过程中部分出站功能.

#### 17.11 WAT

支持 WAT 站点设定与测试结果等待处置.

- **WAT 站点**: MES 可以设 WAT 站点.
- **结果等待**: WAT 测试站点出站后, 批次扣留在 WAT 结果等待站点等待规则检验结果.
- **结果处置**: 判定后支持放行批次, 不合格批次触发 OCAP 流程, 无数据部分手动或自动发送要求获取规则检验结果.

#### 17.12 产品测试 Bin 管理

支持 Bin 等级定义、自动分级拆分与使用限制.

- **Bin 等级定义**: 对指定产品设置 Bin 等级及划分机制, 不同 Bin 等级对应产品编码、加工工艺数据、处置方式 (降级、报废等).
- **自动分级**: 可设置 Bin 划分工序, 完成后自动按 Bin 测试结果分级生成新分级批次, 记录与原批次的对应关系及每个关键对象的 ID 与来源信息, 并按业务规则对应不同产品编码.
- **批次拆分转换**: 根据 Bin 等级自动完成批次拆分及对象、单位、产品编码转换, 拆分批次记录芯片来源片号、批号、Bin 等级等信息, 并按规则限制其可发往的工序、机台等后续加工过程.
- **使用限制**: 根据产品、对象来源、Bin 等级规定入库及加工限制, 如分级分批入库、不允许不同批次不同 Bin 等级芯片混合入库或混合发料、不允许不同 Bin 等级批次合批等.
- **降级报废**: 可根据 Bin 等级对产品进行降级或报废处理, 并对应到相应产品编码.

#### 17.13 湿敏与载带管控

支持物料湿敏管控与载带拉力检验.

- **MBB 管控**: 支持物料吸湿时间管控; 支持物料吸湿时间打开和关闭; 支持手动添加批次的吸湿时间管控.
- **载带拉力标准配置**: 根据封装类型配置载带拉力标准.
- **载带拉力送检信息**: 根据批次创建载带拉力送检信息; 配置批次的载带, 盖带的信息.
- **载带拉力检验**: 填写载带拉力检验数据; 自动校验载带拉力结果.

### 18. 封装线管理

#### 18.1 切割站点管控

支持切割工序的作业管控.

- **上料校验**: 支持产品型号校验 (晶圆 ID 或框架条码), 上料核对, 绑定产品.
- **治具验证**: 支持关键治具 (刀片) 上机验证, 记录使用数据.
- **良率统计**: 支持切割良率与崩边率统计 (录入以及集成 EAP).
- **Recipe 管控**: 支持切割 Recipe 管控 (集成 EAP).

#### 18.2 挑选芯片站点管控

支持芯片挑选工序的作业管控.

- **Map 与耗材**: 支持 Wafer Map 管理; 支持关键耗材上机验证, 记录使用数据 (耗材包括蓝膜 / 胶带, 顶针及吸嘴型号).
- **芯片挑选**: 支持多等级 / 多类型芯片挑选; 支持良品 / 不良品分类, 基于测试数据自动判定芯片等级, 指导挑选设备按等级分类.
- **统计与存放**: 支持挑选率 (拾取率) 统计 (录入以及集成 EAP); 支持挑选芯片存放方式, 包含 Reel 卷带, Tray 盘等.

#### 18.3 芯片贴装站点管控

支持芯片贴装工序的作业管控.

- **上料与贴装**: 支持贴片芯片型号校验, 上料核对, 绑定产品; 支持多芯贴装; 支持多层叠 Die 贴装.
- **首件与数据采集**: 支持首件管理; 支持 EDC 数据采集.
- **防错管理**: 支持贴装参数防错, MES 定义产品 / 设备 Recipe, 集成 EAP, 系统自动校验和下发 Recipe; 支持治具防错贴装吸嘴 / 顶针管理, 记录贴装头吸嘴, 顶针等治具的使用次数, 到期自动预警或锁定.
- **Map 管理**: 支持 Wafer Map 管理和 Strip (Wafer) Map 管理.

#### 18.4 塑封站点管控

支持塑封工序的作业管控.

- **材料管控**: 支持 EMC 材料扫码校验, 比对材料类型, 批次, 有效期; 支持材料解冻回温管理.
- **模具管理**: 支持模具上机校验, 记录塑封模具的使用次数, 保养周期.
- **Recipe 与 Map**: 支持塑封 Recipe 管控 (集成 EAP); 支持 Strip (Wafer) Map 管理.

#### 18.5 激光打标站点管控

支持激光打标工序的作业管控.

- **打标管理**: 支持激光打标数据源配置 (参考标签数据源配置); 支持打标数据防错防呆 (集成 EAP); 支持 Strip (Wafer) Map 管理.

#### 18.6 先进封装管理 (WLP)

支持晶圆级先进封装的键合配置、良率叠加分析及 Ink 管理.

- **键合关系配置**: 支持产品键合关系配置, 预先配置键合工步位置, 支持多层键合关系.
- **键合作业**: 键合工步必须选择最少一组晶圆进行作业, 允许多片一起键合; 键合错误或异常允许解绑重新作业.
- **良率叠加分析**: 键合两片晶圆的 Bin 值及 AOI 结果值支持叠加分析综合良率.
- **重新分选**: 键合后的晶圆支持重新导入新的分选文件给分选机作业.
- **手动 Ink**: 分选后人工检验不良时支持手动打点 (Ink) 去除, 可统计 Ink 之后的良率并追溯到颗粒级别.
- **测试数据解析**: 生产过程的测试数据系统可以解析.

### 19. 治具管理

支持各类治具的全生命周期管理、类型自定义、挂载计时、校验与 SPC 管控.

- **状态模型**: 支持按照不同治具类型定义状态模型; 状态转换基于 User Group 做权限控制; 用户可自由创建治具类型, 定义治具状态变更逻辑及生命周期.
- **使用管理**: 治具 Mount 设备时作匹配检查, Unmount 设备时可扣减使用量或计数, 或者使用时间累计; 支持治具的使用次数, 使用时间的自动计算, 自动切换状态; 治具次数, 使用时间达到上限的, 不能继续加工; 治具维护 (更换部件, 维修等) 后, 重置计时和计数.
- **挂载与计时**: 治具可挂载至机台 / 站点, 并在跑货期间计时 / 计数.
- **进出站校验**: 批次进出站校验治具可用性, 并有防呆报警.
- **治具类型**: 支持测试治具, 如 Prober Card; 支持封装治具, 如 Injection Mould 的管理.
- **SPC 管控**: 治具可建立工程量测数据在 SPC 中管控.
- **标签打印**: 支持打印治具标签.
- **历史查询**: 治具加工历史可查询.

### 20. 物料及 BOM 管理

#### 20.1 产品及物料

支持物料基础数据的继承.

- **基础数据**: 可继承 ERP 的物料形成 MES 的产品, 物料基础数据.

#### 20.2 物料及 BOM 管理

支持物料与 BOM 的完整管控体系、多维度管理、消耗追溯及与 ERP 集成.

- **物料分类**: 支持物料分类维护 (主要材料、间接材料、辅料等) 及物料编码维护, 工步配置对应材料.
- **BOM 体系**: 针对物料和产品可定义物料的管控属性 (例如化学品的时效等); 可承接 ERP 的产品 BOM 形成 MES 的产品 BOM, 并基于产品 BOM 结合工艺流程形成生产 BOM (工单 BOM, 工序 BOM); 在 MES 系统可自行创建 BOM (工单 BOM, 工序 BOM); 产品, 物料, BOM 可启用版本管理; 支持 BOM 分类管理 (返工、试制、量产、替代、设备维修等)、版本、状态、适用范围管理, 与 ERP BOM 功能有效配合集成, 可在产品族、产品、制造资源、批次等对象定义 BOM 结构, 支持变更追溯及变更履历记录.
- **工序物料**: 支持设置工序消耗的物料 BOM; 支持设置替代料和替代顺序; 可按工步设置、查询, 支持版本及激活权限控制.
- **物料校验**: 支持设备 Mount 物料的正确性, 有效性检查; 支持批次进出站物料的正确性, 有效性检查; 物料上机时, 系统根据上机物料信息, 自动校验物料型号和物料效期, 超出需要提醒.
- **消耗管理**: 支持物料使用消耗的历史记录, 主要运用于可定量统计的物料消耗 (按 Qty, Lot, Wafer 数进行消耗); 系统支持原材料的消耗扣减, 同时也支持辅材 / 耗材消耗; 系统支持半成品自动转原材料, 并按照用量完成消耗记录; 依据 BOM 中每个对应工站设定的标准用量完成物料消耗, 并支持 OP 实际调整消耗数量, 当消耗数量和用量不一致情况下进行提醒确认; 订单及批次 BOM 可记录实际物料消耗情况及物料数量、来源、批次、质量等级信息.
- **寿命管理**: 提供寿命有效期的定义, 包括 Life Time, 回温时间, 次数; 生产过账时能够获取寿命, 并及时进行报警; 联动 EAP 实现自动报警和机台控制.
- **ERP 集成**: 与 ERP 仓库管理模块集成, 共同完成线边仓、发料、检查、退库、物料 Q-Time 等业务.
- **消耗追溯**: 消耗数据 By 批次, 物料等维度进行查询和查看追溯.

#### 20.3 产品绑定 BOM 设置

支持产品与 BOM 的绑定定义.

- **基础物料信息**: 支持定义基础物料信息.

#### 20.4 特殊材料管控 (锡膏、光刻胶)

支持特殊材料的专项管控.

- **特殊材料**: 对锡膏, 光刻胶等特殊材料的编码, 属性, 分类, 状态, 使用范围, 生命周期, 安全库存等进行管理.

### 21. 工单管理

支持工单全生命周期管理与生产投产的完整流程.

- **工单创建**: 可通过接口承接上游 ERP 的销售订单, 形成 MES 系统的生产工单; 也可以在 MES 系统中根据生产所需自行创建生产工单, 例如研发或工程试验等不需要从 ERP 下单的情况.
- **工单操作**: 工单操作包括创建, 编辑, 确认投产, Hold/Release, 暂定, 完工, 强制完工等操作功能.
- **下达匹配**: 工单确认下达前, 工单需要匹配工艺流程, 生产 BOM, 关联 Wafer, 封装材料等关联配置.
- **编码建批**: 工单在确认下达投产时, 系统根据工单的产品料号及数量, 并结合编码规则创建在制品档案; 根据编码规则创建 Lot 号, Lot 号的编码规则可在基础配置中自定义.
- **投产登记**: 确认投产时根据 Wafer Lot 执行投产的操作, 系统提供投产的登记功能, 可按 Wafer Lot/Pcs Lot 进行投产, 登记 Lot 与 Carrier 的关系, 完成绑定后后续的生产过账可 By Lot, By Carrier 进行过账.
- **批次属性**: 对新建的 Lot 可定义生产所需的各种属性, 包括产品号, Lot 数量, Lot 类型, 优先级, Due Date, Lot Owner 等; 建批时可指定加工起始工步, 默认从工艺流程第一步开始加工; 对创建出来的批次进行投批到产线待加工.
- **批次管理**: 基于生产工单确认投产后得到生产批 Lot No, 可对生产批进行管控, 如拆批, 合批, 批次扣留等; 支持 RunCard 管理, 基于工单的生产批打印 RunCard, 供车间现场生产流转时标识在制品以及数据采集所用, 可提供 Lot 流程卡.
- **查询追溯**: 根据工单和批次可以方便的查看到所用的工艺流程和生产 BOM 等; 支持按工单信息查看, 包括已完成数量, 生产中数量, 报废数量等信息; 提供追溯查询, 查看批次的作业加工履历, 物料耗用数据, 工时数据等.
- **完工结算**: 工单完工结算, 从物料耗用, 工时核算两个大的角度对工单进行结算, 并将结算的数据回报给 ERP.

### 22. 线边仓管理

支持线边仓组织架构、收发存、批次追溯、退库及存储时效管控.

- **仓位定义**: 建立线边仓组织架构, 根据物料类型不同的管控要求, 设置各线边仓位的属性; 针对不同的仓位, 设置不同级别的操作属性.
- **收料管理**: 支持在 MES 中直接创建收料单实现车间现场物料的接收; 支持收料信息直接导入线边仓; 支持收料信息直接导入辅材线边库; 通过与 ERP 系统对接, MES 自动接收 ERP 的工单发料信息, 产线物料管理人员通过扫描物料标签进行收料确认, 登记实际收料信息.
- **发料上料**: 物料库存从线边仓发料至生产机台; 在机台, 可以利用机台上料的功能实现机台站点的物料上机; 开工单生产领料时将需要长时间回温等前期准备的物料情况考虑进去, 提前对应时长通知相关部门对物料进行回温操作; 根据生产排产要求, 产线物料管理人员通过扫描物料标签进行发料确认.
- **退料管理**: 提供机台退料至线边仓的功能; 提供线边仓的物料退料至 ERP 大仓的功能; 根据实际生产类型包含各种形式的退库管理; 提供从机台下料的管理功能; 剩余料的退库管理.
- **Wafer 管理 (Wafer Bank)**: 来料时, 可登记 Wafer 的客户, Lot, Cassette 等来料信息, 形成 Wafer 档案; 可记录每片 Wafer 的 Die 数; 生产投产时, 可以从 Wafer 库选择 Wafer 进行投产作业, 系统记录厂内 Wafer ID 与客户来料 Wafer ID 的关联匹配关系; 提供 Wafer 库存的实时查看, 查看厂内 Wafer 的状态; 针对 Wafer 启用 Wafer 库的管理, 实现 Wafer 的全面追溯管控.
- **寿命时效**: 寿命模型包括物料的有效期, 可回温次数, 回温时长, 回温后可用时长等; 从物料领用或发料时, 根据物料的保管状态的变化, 记录物料的不同状态下的时长; 结合站点的 Track In 和 Track Out, 对物料的时效进行计算, 超限或超标时报错提醒并提示处理; 对存储时间敏感的物料进行存储时效管控, 时效异常时扣留物料批次并提醒; 针对关键物料提供寿命管理模型, 用于管控对于存储环境和存储时间敏感的物料, 例如粘片胶, 锡膏, 线材等.
- **库存管控**: 支持打印物料批标签; 支持线边仓物料超期邮件提醒和线边仓库存超期颜色提醒; 支持安全库存管理; 支持线边仓盘点; 支持实时查看线边仓所有物料当前状态; 关键物料支持批次管理, 支持单件追踪; 支持线边仓库存管理.
- **批次追溯**: 根据约定规则形成批次管理策略, 能根据批次实现物料追溯管理.
- **辅材管理**: 支持辅材的收料, 发料和退料.
- **不合格物料控制**: 对发往产线的物料质量进行型号及批次控制管理.
- **物料报废**: 支持材料报废和转等级.
- **系统查询**: 可以实时查看所有机台的在线物料信息.

### 23. 质量管理 (含 OQC)

#### 23.1 检验规范定义

支持检验标准的基础定义.

- **检验规范**: 提供制造过程检验项和检验标准的定义配置.

#### 23.2 质量管理

支持检验模板、不良管控与扣留流程的管理.

- **检验模板**: 根据不同的检验类型, 可设定不同的检验标准和检验模板; 在工艺流程中可以基于站点设定可用的检验模板.
- **不良 Code**: 不良 Code 支持自定义; 支持工步绑定对应的不良 Code.
- **巡检与首检**: 支持质量人员巡检功能; 首检采集的数据, 进入 SPC 系统进行管控.
- **异常单**: 支持自动触发异常单, 异常单处理流程.
- **扣留管理**: 支持自动&手动两种扣留方式, 支持批量扣留; Hold 需要加 Hold Reason, Hold 有特定的 Hold Code, Hold Code 可在系统上根据实际需求进行灵活的配置, 扣留时可指定处理组, 不在该处理组的人员不能进行放行操作.
- **自动扣留**: 支持与其他系统进行对接, 实现批次及设备等的自动扣留; 自动扣留规则可配置; 重大异常扣留, 触发 OCAP 流程.
- **权限与提醒**: 扣留及解扣留均需要进行权限管控; 支持 Hold Lot 邮件提醒.
- **不良原因定义**: 支持不良检验项目定义, 可批量导入.
- **首巡检功能**: 支持自定义首检触发条件 (如换型号, 换物料, 换模具, 换程序, 清模, PM 等), 并根据规则触发创建检验单或报警提醒; 支持首件检验项目定义, 可批量导入.
- **站点良率卡控**: 出站良率异常, 自动 Hold 批次.
- **异常处理**: 支持多种类型 Hold, 如批次, Wafer, 物料, 设备, 载具等.

#### 23.3 OQC

支持出货检查站点、质量等级指定与出货条件检查.

- **OQC 站点**: 支持设置 OQC 站点, OQC 人员可为批次指定质量等级, 按晶圆等级分批入库.
- **OQA AVI**: OQA AVI 站发生 OOS 时自动扣留批次; 支持进站、出站、包装.
- **出货条件检查**: 可与 WAT, Defect, SPC, Lot Type 等其他系统集成检查批次是否符合出货条件, 出货条件可维护在 MES 或其他系统.

### 24. 包装和标签管理

支持包装作业与标签打印的管理、包装标准文件、二次比对及多层包装.

- **标签制作**: 支持基于标签设计软件设计标签模板, 自动打印包装标签; 支持补打 / 重打标签; 便捷标签制作工具, 标签布局可由用户制作和修改; 标签数据可由 IT 配置, 无需开发代码; 支持文字、图片、条码、二维码等; 支持打印预览、默认打印机设置、不同尺寸标签; 可对接主流标签打印机.
- **站点挂载**: 标签打印策略可挂载在站点上, 批次进出站时打印相对应的标签.
- **包装标准文件**: 支持设置对应产品的包装标准文件及包装示范文件, 扫描批次号自动调取该客户或产品的包装说明书.
- **包装条码**: 通过标签模块设置对应包装条码格式, 可对应多个包装标签, 每个标签支持多个打印条码 (一维或二维) 与内容.
- **二次比对**: 包装工步支持通过标签扫描二次比对.
- **材料计算**: 根据 BOM 及产品数据自动给出对应包装材料的数量、型号.
- **多层包装**: 支持多层包装 (REEL, Inner Box, Outer Box) 和每层标签绑定; 支持拆包装并保留包装和标签历史记录; 支持不良品包装; 支持多层包装及包装 ID 管理.
- **入库管理**: 支持按照指定包装 (REEL, Inner Box, Outer Box) 入库; 支持打印个性化的入库单据.

### 25. Wafer Mapping 管理

支持 WaferMap 文件的存储、解析、编辑与追溯.

- **文件存储**: 支持 WaferMap 文件存储路径监控及存储.
- **解析展示**: 支持 WaferMap 文件格式解析及图形化展示; 支持 WaferBinCode 配置及转换.
- **编辑转换**: 支持 WaferMap 人工编辑功能; 支持 WaferMap 自动角度转换; 支持前后工序 Map 合并, 生成新的 Map, 和导出.
- **追溯统计**: 可基于客户批, 产品批, 批次号, 显示对应的 Wafer Map, Strip Map, 并可基于图谱结果数据进行数据统计, 比如 Gross Die, Good Die, Fail Die, Yield, 每个 Defect Code 的统计; 关联 WaferMap 与 StripMap 的关系, 形成完整的产品全生命周期追溯.
- **EAP 联动**: 部分功能需要联动 EAP 实现.

### 26. Strip（Wafer）Mapping 管理

支持 Strip Map 的展示、维护与追溯.

- **Map 展示**: 产品支持 MES 界面上 Strip Map 展示.
- **Map 维护**: 支持 Strip Map 的导出; 支持 Strip Map 修改功能; 支持 Strip Map 版本管理; 支持 Strip Map 的上传, 下载和对比.
- **追溯统计**: 可基于客户批, 产品批, 批次号, 显示对应的 Wafer Map, Strip Map, 并可基于图谱结果数据进行数据统计, 比如 Gross Die, Good Die, Fail Die, Yield, 每个 Defect Code 的统计; 关联 WaferMap 与 StripMap 的关系, 形成完整的产品全生命周期追溯.
- **图谱类型**: 支持基板 Strip Map 图谱, 同时也支持 Wafer (Carrier/Base Die) Map 图谱.
- **EAP 联动**: 部分功能需要联动 EAP 实现.

### 27. 材料外延管理

#### 27.1 技术规范管理

支持材料相关规范的管理.

- **规范管理**: 支持主材, 产品客规, 厂规, 出货规范, 标签规范管理.

#### 27.2 品控管理

支持 COA/COC 模板的管理.

- **模板管理**: 支持 COA, COC 模板创建, 上传, 版本管理, 版本对比, 数据导入导出等, 不同模板需要可以配置完成.

#### 27.3 材料外延管理

支持材料检验与生命周期的管理.

- **报告生成**: 支持 COA, COC 电子报告生成; 支持主材物料批次 COA 参数设置, 导入, 导出等.
- **来料检验**: 支持 IQC, 抽检等; 支持物料上机 / 下机操作; 支持物料检查 (当物料变更时).
- **生命周期**: 支持生命周期管理, 需要监控剩余时间, 通过邮件 / 微信报警.
- **物料操作**: 支持物料 Hold/Release; 支持物料拆 / 合; 支持物料 Shipping.

#### 27.4 标签管理

支持标签的模板与打印管理.

- **标签的模板与打印管理**: 支持标签模板设置, 标签打印, 打印机设置等.

#### 27.5 包装管理

支持成品包装发货管理.

- **包装发货**: 支持成品组箱, 拆箱, 包装, 装箱单, 发货等.

#### 27.6 线边仓管理

支持材料线边仓的作业管理.

- **线边仓作业**: 支持线边仓定义, 收, 发, 退料, 上下架等管理, 库存水位, 超期预警.

#### 27.7 物料管理

支持物料基础数据与库存管理.

- **物料基础数据与库存管理**: 支持物料创建, BOM 管理, 物料使用历史, 库存检查.

### 28. 污染管理

支持站点污染类别设置、派工检查与载具交换管控.

- **站点污染设置**: 工艺流程上每个站点可设置接受进站的污染类别, 及出站后需要转换的污染类别.
- **派工检查**: 批次派工前检查载具与站点的污染类别, 不匹配时不允许派工.
- **载具交换**: 批次将进行另一污染类型制程时必须载具交换 (如当前站点为 FE 污染类别、下一站点为 Cu 污染类别时, 需更换载具后才可派工).
- **Sorter 污染管控**: 倒片机只有设置在污染类别对应表里的载具, 才可将晶圆片传到另一个载具.
- **单据污染检查**: SRC 与 RRC 批次作业时提供站点污染类别设置, 提交时检查符合污染类别转换规则才允许生效, 并按污染类别管理规则加工.
- **载具污染分类**: 基于制程污染级别, 载具分为不同污染类别; 批次出机台时更新为工序污染等级及载具类型.
- **重定位管控**: 批次重新定位 (退站、跳站、调整工艺流程、调整站点等) 进行污染等级管控; 跳站、调整工艺流程、交换载具、分批、取消报废、取消终止等操作卡控污染等级匹配.

### 29. 作业流程单管理

支持作业流程单的对象关联、工位显示与打印.

- **对象关联与打印**: 作业流程单按业务需要关联各相关对象, 支持按工单 / 按批打印并记录打印历史.
- **工位显示**: 可在 MES 各工位显示相应作业要求, 并可在投批时打印.
- **打印印记**: 可通过配置对应图片打印在流程单上, 供作业人员参考.

### 30. 现场货架管理

支持货架建模及上下架记录.

- **货架建模**: 支持创建货架, 属性含货架 ID、类型、区域、架位、行列数等.
- **存放内容**: 货架存放工装、批次成品、批次半成品等.
- **上下架记录**: 材料、批次上下货架都可记录, 并有对应代码选择.

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

### 1. 基础设定

#### 1.1 数据采集

支持多类型、多方式、多源生产数据的实时采集与可靠存储, 保障数据收集的稳定性与性能.

- **多源数据监控**: 支持工艺设备数据采集 (Inline), 设备日常点检数据 (Offline), Reticle, Carrier 及厂务数据等多种数据源; 支持产品、设备关键参数、厂务低频率定时汇总、原材料、出货等多种数据类型的采集.
- **采集方式**: 支持手动录入、EAP 上传、文件解析、FTP、邮件解析等多种采集方式.
- **数据存储与清理**: 具备实时环境保存一年以上数据的存储能力, 并提供过期数据处理脚本.
- **采集性能**: Inline, Offline 数据采集系统响应时间控制在 3 秒之内.
- **非侵入式变更**: 修改 Chart 的内容对数据收集无影响.
- **特殊点排除**: 支持特殊点的自动排除处理 (可配置), 如重量, 加量, SRC 等.

#### 1.2 Chart 定义

支持灵活的 Chart 组织, 建立与管控配置, 覆盖批量操作与 Sub Chart 自动拆分.

- **树状分组管理**: 支持以树的方式按不同数据源管理 Chart, 每个数据源下可嵌套任意深度的文件夹分类组织 Chart, 并支持 Chart 在 Folder 之间移动.
- **Context 过滤定义**: SPC Chart 可根据 Context Key 自定义过滤条件, 如 [产品]+[工艺路线]+[加工 Step]+[加工设备]+[Chamber]+[EDC Plan ID] 等;母 Chart (Group Chart), 子 Chart (Subgroup Chart) 的进点过滤条件使用 Context Key 表达式定义, 支持正向和反向 (排除名单) 过滤.
- **批量建立与修改**: 支持与 MES 端 Loader 集成批量建 Chart;支持基于 Excel 批量新建, 修改 Chart, 并支持 by Pastable Attributes 方式快速修改 Chart 内容; 支持 Excel 模板导入 / 导出建模数据.
- **手动建立**: 提供友好快捷的操作界面方便用户手动建立 Chart.
- **数据导出**: 支持一个或多个 SPC Chart 的数据和原始数据导出功能.
- **设备与站点关联**: 支持 SPC Chart 关联到一个或多个工艺设备或 Process 站点.
- **违规告警邮件**: 支持违规告警邮件发送, 可根据违规类型 (OOS, OOC, OOW 等) 单独设置.
- **自动 Sub Chart 管控**: 支持自动分 Sub Chart 管控, Sub Chart 可继承上层 Chart 的 Control Limit 及 SPC 规则, 也可单独配置;可根据 Context 值中包含的工艺设备, Chamber, 产品, Step, 炉管管控片位置 (如 Top/Center/Bottom) 等信息自动建立 Sub Chart.
- **PM 后特殊管控**: 支持 PM 后的 Offline Monitor, Pilot Inline Measurement 及第一批 Lot 的单独 Control Limit 管控 (如两倍 Sigma).
- **离散规格过滤**: 可以定义 Chart 的离散规格, 并过滤掉离散点.
- **多类管控线**: 支持 Control/Spec/Warning Line, 并支持分别 Enable/Disable 上界线, 下界线和中心线; 支持内规、客规、控制限、Target, Center Line、警告限、屏控限等多种控制限.
- **计量型图表 (Variables Charts)**: Xbar/X Chart, Range Chart, Sigma Chart (Standard Deviation), Raw Value Chart (Trend Chart), Moving Range Chart, Moving Sigma Chart, Moving Average Chart, EWMA_M, EWMA_S, EWMA_R Chart; 支持 X, Sigma, Range, Move Range, Move Sigma, Move Avg, XBAR, XBAR_S, XBAR_R 等多种图表类型.
- **计数型图表 (Attributive Charts)**: C Chart (不符合项), NP Chart (不合格数量), P Chart (不合格率), U Chart (平均不合格数); 支持正态分布图显示.
- **数值类型**: 支持整数、小数等数值类型, 可设置系统显示保留的小数位数及 Chart Y 轴小数位数.
- **Chart 分类属性**: 支持 K/NK/NC 属性, 用于区分关键、非关键、不管控等 Chart 类型.
- **版本管控**: 支持参数版本管控.
- **目标 CPK 设定**: 支持按参数、Channel(数据采集维度)、CKC 维度设定目标 CPK.
- **判异准则与 Action**: 支持按照图表设置判异准则和 Action(Email/Hold Lot/Down EQP/OCAP 等), 支持按优先级触发 OCAP, Action 支持客制化扩展.
- **建模数据管理**: 支持复制其他参数的 Channel, CKC 信息、规则、控制限; 支持参数、Channel(数据采集维度)、Chart 三层建模数据的基本属性继承.

#### 1.3 管控维度 (Channel)

支持按多种业务信息定义数据采集维度 (Channel) 并进行灵活管控.

- **多维度定义**: 支持按工艺流程、设备、Recipe 等多种主要信息设定数据采集维度 (Channel), 且数据采集维度支持扩展.
- **Channel 分组管理**: 支持 Channel 分组管理, 可设定分组、子组、Report Group.
- **动态启停**: 支持动态启用或禁用特定 Channel.
- **通配符模式**: 支持【_】、【XX_】模式, 数据采集时自动生成 CKC.
- **过滤条件**: Channel 维度可设置过滤条件, 排除符合过滤条件的数据.

### 2. 规则设定与计算

#### 2.1 SPC 判异规则

支持标准化判异规则与灵活的自定义扩展.

- **标准规则集**: 管制图的检查支持标准 WE Rule; 支持 SPC 八大判异准则.
- **判定点数设定**: 支持判异准则判定点数设定.
- **上下限判异**: 支持 OOS/OOC/OOR/OOT/OOW 等上下限判异.
- **自定义规则配置**: 支持自定义方式配置 Rule, 如连续 n 点上升的 n 可配置; 支持连续 N 点异常等客制化规则, 以及组合基本规则的客制化规则.
- **二次开发**: 提供开发包, 支持 Rule 二次开发, 方便扩展.

#### 2.2 Calc Parameter / 计算型参数

支持内置公式与丰富的计算函数, 基于公式的计算型参数定义与跨站点计算, 满足多参数复杂运算需求.

- **多公式配置**: 支持计算型参数设定, 一个参数可配置多个计算公式.
- **跨站点计算**: 支持跨站点参数计算.
- **内置公式**: 支持常用内置公式, 如 Trigger-Reference[#mean], Trigger\*Reference[#mean], Trigger+Reference[#mean], Reference-Trigger[#mean] 等.
- **计算函数**: 支持丰富的计算函数 (如选片选点函数, Round, Cos, Sin, Tan, Log 等), 可基于这些函数自定义公式, 支持多个参数的复杂运算; 支持多种计算函数, 以及加减乘除和常数运算.
- **因子取值**: 支持因子 Raw Data 计算, 可按照 Index 取部分原始值参与计算.
- **结果追溯**: 计算结果可 Link 参与计算的 Sample, 方便 Check 数据的正确性.
- **二次开发**: 提供计算函数的二次开发, 方便扩展.

### 3. 分析和报表统计

#### 3.1 控制图分析 (图表管理)

支持多类型绘图, 多 Chart 对比及精细化的数据点交互分析.

- **多类型绘图**: 支持 Control Chart, Histogram, NormalProb, Boxplot 等多种数据绘图能力;Chart 图表类型的显示及显示顺序支持可配置.
- **Chart 查看与过滤**: 支持按 Channel/CKC 查看 Chart;支持按参数名、Chart 名、样本 ID 等多条件过滤 Chart, 并可保存常用筛选条件.
- **多 Chart 同屏**: 支持单屏显示一张或多张 Chart, 并显示 Chart 上所选数据点的相关信息 (如 Context Key, 违规信息等).
- **多 Chart 对比分析**: 支持垂直分析, 水平分析, 叠图分析;垂直分析时支持上下 Sample 的对齐分析, 对齐 Key 可配置;支持用 Context 定义 Matching 条件用于叠图分析.
- **Chamber 自选分析**: By Chamber 分析可自选 Chamber 组合 (如一片 Wafer 经过 A/B/C/D 四个 Chamber, 可自选 A/B 或 B/C/D) Show 值并分析, 减少无关组合.
- **数据点过滤与排除**: 支持手动过滤数据点 (需要注释);排除数据点后支持重新显示 Chart 或重新计算;支持批量 Disable 数据点并批量隐藏; 支持数据点临时 / 永久隐藏, 以及临时 / 永久取消隐藏; 隐藏点或过滤数据点后, 按照过滤后数据重新计算 Cpk, Avg 等相关统计数据; 支持按点数、时间周期过滤, 以及按重量、离散点、屏控限等条件批量过滤 Chart 数据.
- **Sample Tag**: 支持手动, 自动给 Sample 打 Tag, Tag 支持自定义.
- **备注说明**: 支持对单个或多个数据点进行备注说明; 支持对数据点添加备注, 并查看该点过往所有备注记录.
- **Chart 检索配置**: 支持根据 Context Key 配置 Chart 检索条件.
- **界限显示**: 支持显示历史或当前 Chart 上配置的规格, 控制界限, 显示方式可配置; Chart 控制线支持使用历史数据进行展示.
- **移动图重置**: 支持重置移动图表开始计算时间.
- **坐标轴配置**: X 轴的显示 Label 支持可配置; 支持 Y 轴根据管控限或自定义范围调整, 支持科学计数法、对数显示; X 轴可显示时间、UNIT_ID, LOT_ID, T7 Code, 可组合显示;支持 Process Time, Measure Time, System Time 等多时间维度排序; 支持设置 X 轴 Label 默认显示信息 (时间、UNIT_ID, LOT_ID 等), 以及默认显示数量、倾斜角度等.
- **图表样式管理**: 支持按参数、Channel, Chart 等多个维度设置图表显示样式; 支持设置点的形状、大小、颜色等样式, 包含正常点、异常点、备注点等; 支持设置线的类型、粗细、颜色等样式, 包含 USL, LSL, UCL, LCL 等; 支持设置箱线图点位偏移量, 让重叠数据左右偏移.
- **OCAP 联动**: 异常数据可根据 OCAP No 链接到 OCAP 系统;提供接口支持外部系统访问 SPC Chart 和数据点, 点击 OCAP 信息链接可进入 SPC 相关 OOC/OOS 点界面; 支持选择数据点手动触发 OCAP, 并支持从异常点跳转至 OCAP 处理页.
- **批量查看与导图**: 支持批量查 Chart, 定时导图的功能.
- **设备状态叠加**: Chart 上可勾选显示 Tool EQP Status 异常变化的时间点 (DOWN/PM 等).
- **Sample History**: 支持 Sample History 功能, 支持跨 LDS 搜索.
- **母子 Chart 联动**: 支持在母 Chart 上查看子 Chart 的违规信息.
- **Control Limit 试算与推荐**: 支持手动计算 Control Limit, 计算出来的 Limit 可编辑, 可手动接收或拒绝;支持新 Limit 的模拟分析, 并用不同颜色显示模拟后的分析结果 (如模拟前后均无异常显示为蓝色); 支持基于当前 Chart 数据推荐控制限, 计算公式为 Avg±3Sigma.
- **颜色管理**: 支持自定义不同控制线的颜色及数据点在不同状态下的颜色 (如 OOC 点的颜色).
- **分区高亮**: 支持高亮 A/B/C 区.
- **分段显示**: 支持按辅助信息、CKC 分段显示控制图数据.
- **数据点详情**: 支持显示数据点详细信息, 包含数据采集的主数据与辅助信息.
- **统计指标显示**: Chart 显示内容包括 Max, Min, Mean, 中位值, 极差, 标准偏差, Total Count, OOC%, OOS%, USL/LSL, UCL/LCL, Target, Cp, Cpk 等, 显示的统计指标支持可配置; 支持显示 Count/Avg/Std/StdP/K/Pp/Ppk/Cp/Cpk/Oos Count/Oos Ratio/Ooc Count/Ooc Ratio/Abnormal Count/Abnormal Ratio 等指标.
- **一键导出**: 支持一键导出 Chart 与原始数据, 导出格式为 Excel/PPT.

#### 3.2 报表统计

支持 Cpk 关键指标统计, 周期性报表及多维度达标率分析.

- **实时指标统计**: 支持根据选择的时间或其他条件实时统计 Chart 的 Cpk 相关指标.
- **关键指标计算**: 支持 Cpk(d2), Cpk(MEAN), Ppk 等关键性指标计算, 统计哪些指标可配置.
- **定期统计**: 支持以 SPC Chart 为对象按日, 周, 月, 季等周期定期统计, 统计周期可配置;支持用户自定义查询 Chart 的过滤条件 (如 by Product, by Module, by Tool).
- **数据过滤**: 支持 OOS, OOC, SOOS, IQR 多种过滤功能, 被过滤 (排除) 的数据默认不参与 Cpk 统计.
- **统计值汇总**: 统计值包括 Max, Min, Mean, 中位值, 极差, 标准偏差, 数据点数, OOC%, OOS% 等.
- **趋势分析**: 支持 Cpk/Ppk/ 违规数据的趋势变化分析;支持 Ppk/Cpk 达标率统计及趋势分析, 目标值可配置.
- **CPK 总览表**: 支持 Cpk 总览表统计分析, 分为时间周期, 部门, Chart 详情三个维度.
- **违规统计**: 支持违反 Alarm Rule 的 Count 及 Ratio 统计.
- **报表调度**: 支持报表 Schedule 及执行 Log 详情查看.
- **格式导出**: 支持常用文件格式的导出 (如 Excel/CSV 等).
- **常用报表**: 提供 Cpk 统计报表; 提供报警率统计报表; 提供管控限统计报表.
- **自动计算**: 支持设置计算公式及数据过滤条件; 支持自动 / 手动计算, 自动计算周期支持月度 / 季度; 计算结果以报表形式展示.

#### 3.3 ACL 计算

支持 Control Limit 的自动计算 (ACL), 校验与签核.

- **Sigma 计算**: 支持使用选定数据的 N 倍 Sigma 计算新的 Control Limit, 数据筛选条件可使用时间范围或数据点个数, 几倍 Sigma 支持可配置.
- **自动计算**: 支持基于点数的自动计算, 也支持周期性自动计算 (如每隔一个季度执行一次).
- **数据过滤**: 支持数据过滤 (如 OOS, OOC), 过滤的数据不参与 ACL 计算.
- **CL Check**: 计算出来的 Limit 支持 CL Check, 如是否违规, 是否越来越紧, 是否超出 Spec Limit 等.
- **看图 Review**: 支持计算 Limit 看图 Review, 并用不同颜色显示新旧 Limit 以作对比分析.
- **签核集成**: 支持 Limit 的手动接收或拒绝, 也支持与其他签核系统集成.

#### 3.4 Dashboard 统计

支持 Fab 生产概况的实时统计与个性化仪表板.

- **小时级统计**: 每隔一小时统计活跃 Chart 的 Violation, Cpk, Collection Interval, Exclude Sample 四个维度 Good/Warn/Bad 的百分比, 真实展现 Fab 最近 1 小时的生产概况.
- **自定义分组**: 支持自定义 Chart 分组, 包括 Department, SPC Folder, Name, Job Name, Key Chart, Control Item, Context Key 等.
- **多种 View Type**: 支持 Chart Summary, Chart Detail, Violation Summary, Violation Detail, Violation Compare, Cpk Compare, Violation Pareto, OCAP Summary, OCAP Detail, OCAP Compare 等多种查看方式.
- **个性化 Dashboard**: 支持基于宫格的个性化 Dashboard 设置, 可将常用的 Dashboard 放到一起查看.

#### 3.5 收藏夹管理

支持按用户管理常用 Chart, 提升查找与批量操作效率.

- **个人收藏夹**: 支持按用户创建收藏夹, 将用户关注的关键 Chart 存入收藏夹, 方便查找和查看.
- **批量打开**: 支持按收藏夹批量打开 Chart.
- **批量导出**: 支持按收藏夹批量导出 Chart.

#### 3.6 其他需求

支持权限管控, 操作追溯及多样化的查询与显示增强功能.

- **查询权限**: 可依据产品, 设备等不同内容定义 Chart 的查询权限, 只有得到授权的人员才可查询对应的 SPC Chart 或内容.
- **操作历史追踪**: 提供详细 Log 追踪 Rule Change/Limit Change/Point Change 等各操作历史;Chart 的 Control Limit 修改时要有相关 Item 的修改记录.
- **自定义 Tag**: 支持自定义 Tag.
- **Chart 搜索**: 支持使用 Chart 的属性搜索 Chart, 如 ChartName, ParameterName, Context 值, SPC Rule.
- **数据点搜索**: 支持按数据点属性搜索, 如 Context 值, OOC/OOS, Comment, 数据收集时间点, 并可选择以数据点列表模式或 Chart 列表模式显示.
- **书签功能**: 可以把常用的 Chart 和搜索条件存为书签.
- **动态更新**: 支持 Online SPC Chart 动态显示及更新.
- **Raw Data 浮动显示**: Trend 图上的 Raw Data 可以浮动显示 LotID, WaferID 等.
- **测量设备对比**: 支持 by 测量设备对比分析.
- **定时导图**: 自动导图支持按时间设置.
- **历史规格计算**: 计算 Cpk 时支持拿历史规格来算.
- **Key Chart 标识**: 看图 ChartID 标题后面拼上 Key Chart Flag, 方便一眼看出当前分析 Chart 是否是 Key Chart.
- **图例 Limit 显示**: 看图图例 Spec/Control 线后面拼上 Chart 最新的 Limit 值.
- **选点函数**: 选点函数支持连续, 非连续选点, 可根据提供的算法封装新的选点函数自动选点, 减少人为操作.

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

### 1. Access Control (用户管理)

#### 1.1 User Management

支持系统用户的全方位管理与追溯.

- **用户查询与导出**: 支持用户信息的查询及导出, 便于人员信息盘点与离线分析; 支持用户账号的创建、维护与停用.
- **历史记录追溯**: 支持查看用户相关操作的历史记录, 确保变更过程有据可查.

#### 1.2 User Group Management

支持用户组的组织化管理与审计.

- **用户组维护**: 支持用户组的新增与查询, 便于按部门或职能进行群组化管理; 支持用户组的定义与管理, 便于按群组分配通知与权限.
- **历史记录追溯**: 支持查看用户组的历史记录, 掌握群组变更过程.

#### 1.3 Role Management

支持基于角色的权限体系构建.

- **角色维护**: 支持角色的新增与查询, 并可查看拥有该角色的用户清单; 支持系统角色的创建与维护.
- **菜单授权**: 支持按角色进行菜单授权, 控制功能访问范围; 支持按角色配置功能访问权限.
- **警报源授权**: 支持按角色进行警报源授权, 实现警报数据的范围隔离.

#### 1.4 Authorization Mgt

支持灵活的角色关联授权机制.

- **角色关联授权**: 支持对用户组及用户进行角色关联授权, 实现批量或个体的权限分配.

### 2. Equipment Mgt (设备信息)

#### 2.1 Area Management

支持工厂下的区域划分与维护.

- **区域维护**: 支持区域的新增 (下拉选择工厂, 输入区域名称), 编辑及删除.
- **操作历史**: 支持查看区域的操作历史, 追溯变更记录.

#### 2.2 Equipment Type Management

支持设备类型的定义与过滤规则配置.

- **类型维护**: 支持设备类型的新增 (下拉选择工厂 / 区域, 输入名称, 配置过滤规则), 编辑 (可重新挂靠工厂 / 区域, 修改过滤规则, 名称不可修改) 及删除.
- **历史追溯**: 支持查看设备类型的历史记录.

#### 2.3 Equipment Management

支持设备全生命周期管理.

- **设备维护**: 支持设备的新增 (关联工厂 / 区域 / 类型, 配置过滤规则), 编辑 (除名称外均可修改) 及删除; 支持 Factory / System / Tool 等产线结构树信息的维护; 支持设备 (Tool) 基础信息的录入与管理.
- **批量导入导出**: 支持设备信息的批量导入与导出, 提升建置效率.
- **状态控制**: 支持设备可用 / 不可用状态控制.
- **操作历史**: 支持查看设备的操作历史记录.

#### 2.4 Chamber Management

支持设备内腔体的精细化管理.

- **腔体维护**: 支持设备内腔体 (Chamber) 的新增, 删除, 修改及查询.

#### 2.5 Alarm Task Configuration

支持设备告警任务的可视化查看.

- **任务查看**: 支持查看设备下的告警任务配置 (规则), 掌握设备告警策略部署情况.

#### 2.6 Equipment Type Authorization

支持基于角色的设备类型授权.

- **类型授权**: 支持根据区域查询设备类型列表, 并对角色进行设备类型的授权与移除.
- **操作历史**: 完整记录授权操作历史, 确保权限变更可审计.

#### 2.7 Equipment Authorization

支持面向用户的设备级精细授权.

- **设备授权**: 支持对用户进行具体设备的授权管理, 实现机台维度的数据隔离.
- **操作历史**: 记录授权操作历史, 支持权限审计追溯.

### 3. Alarm Mgt (基础配置)

#### 3.1 Alarm Source Management

支持多来源警报接入的统一管理.

- **警报源维护**: 支持警报源的新增, 编辑 (工厂 / 来源系统 / 访问控制 / 回调 / 描述等), 删除及启用 / 禁用.
- **详情与历史**: 支持查看警报源详情及操作历史.

#### 3.2 Alarm Classification

支持警报分类的自定义管理.

- **分类维护**: 支持警报分类的新增, 编辑, 删除, 查看详情及操作历史.

#### 3.3 Alarm Level

支持警报等级的自定义管理.

- **等级维护**: 支持警报等级的新增, 编辑, 删除, 查看详情及操作历史; 支持 Alarm 严重等级 (Severity) 的定义与管理.

#### 3.4 Alarm Rule Management

支持告警规则的定义与批量维护.

- **规则维护**: 支持告警规则的新增, 编辑 (字段卡控与新增逻辑一致), 删除及启用 / 禁用; 支持基于工厂、系统、设备、Alarm Code 等维度的报警规则配置, 控制警报的触发、屏蔽与动作.
- **批量导入导出**: 支持规则的批量导入与导出, 便于规则迁移与备份.
- **关联查看**: 支持查看规则详情, 所属策略及操作历史.
- **报警统计配置**: 支持报警统计口径与维度的自定义配置.
- **报警代码维护**: 支持 Alarm Code 及其描述信息的维护.

#### 3.5 Alarm Strategy Management

支持系统级与设备级告警策略的统筹管理.

- **策略维护**: 区分系统策略与设备策略, 支持新增 (选择警报源 / 分类 / 规则等), 编辑, 删除及启用 / 禁用.
- **批量导入导出**: 支持策略的批量导入与导出.
- **关联查看**: 支持查看策略详情, 关联规则及操作历史.

#### 3.6 Equipment Alarm Strategy

支持设备级告警策略的独立配置.

- **策略维护**: 支持设备级告警策略的新增, 编辑, 删除及查看详情.
- **批量导入导出**: 支持设备级策略的批量导入与导出.
- **告警任务配置**: 支持为设备配置告警任务, 并记录操作历史.

#### 3.7 Alarm Ftp Config

支持基于 FTP 文件的告警策略管理.

- **FTP 策略维护**: 支持 FTP 文件告警策略的新增, 编辑, 删除及查看详情.
- **告警任务配置**: 支持配置 FTP 告警任务, 并记录操作历史.

### 4. Alarm Task

#### 4.1 Alarm Task Query

支持设备告警作业的多条件精确查询.

- **组合查询**: 可根据工厂, 警报源 (必填), 警报分类, 策略类型等条件进行精确查询.
- **详情与进度**: 支持查看任务详情及执行进度.

#### 4.2 Equipment Alarm Task

支持设备告警作业的独立查询入口.

- **任务查询**: 提供设备告警作业的独立查询入口, 可查看任务详情及执行进度.

#### 4.3 Alarm Log

支持告警记录的查询与策略匹配追溯.

- **告警记录**: 支持告警记录查询, 可查看匹配的告警策略及告警时间等详细信息.

#### 4.4 Equipment Alarm History

支持设备告警历史的多维度检索.

- **多维筛选**: 可根据起始日期, 区域, 设备类型, 设备名称, Alarm ID/Code 等条件筛选设备告警历史记录.
- **记录详情**: 支持查看告警记录详情.

### 5. Main (看板管理)

#### 5.1 Workplace Dashboard

支持告警态势的一站式可视化监控.

- **工作台视图**: 展示各种告警数据量, 告警分布情况, 处理率等关键监控指标.
- **报警看板**: 支持报警信息的实时看板展示, 直观呈现当前警报分布与状态.

### 6. System Mgt (系统管理与系统设置)

#### 6.1 Data Dictionary & Menu

支持系统基础数据与菜单的灵活配置.

- **数据字典**: 支持数据字典管理; 支持系统数据字典的定义与维护.
- **菜单配置**: 支持菜单配置管理.

#### 6.2 Permission & Log

支持系统权限管控与操作审计.

- **权限管理**: 支持系统权限管理.
- **操作日志**: 支持系统操作日志记录, 保障操作可追溯; 支持系统日志的检索与查询, 便于问题排查与审计追溯.

#### 6.3 Notification & Action

支持告警通知与联动动作的设定.

- **通知任务设定**: 支持通知任务的设定.
- **动作设定**: 支持告警动作的设定.

#### 6.4 系统设置

支持邮件与报警看板等系统级参数配置.

- **邮件设置**: 支持 SMTP 邮件发送参数的配置.
- **邮件模板设置**: 支持 Alarm 通知邮件模板的自定义配置.
- **报警看板设置**: 支持报警看板显示内容与刷新参数的自定义配置.
- **通用设置**: 支持系统通用参数的统一配置.

### 7. 手动操作

支持警报的人工处置与转单管理.

- **状态切换**: 支持人工对 Alarm 进行状态切换 (如响应、关闭、终止).
- **报警转单记录**: 支持报警转单的记录与查询, 追溯处置过程.
- **报警作业**: 支持报警相关作业的人工执行与管理.

### 8. Report (查询统计)

#### 8.1 Alarm Statistics

支持告警统计报表的查询与导出.

- **统计查询**: 可按区域, 设备类型等维度查询单日告警记录; 支持按多条件组合查询 Alarm 历史记录.
- **结果导出**: 支持将告警统计结果导出.

#### 8.2 Alarm Query Report

支持单日告警记录明细查询.

- **明细查询**: 支持按区域, 设备类型等维度查询单日告警记录明细.

#### 8.3 Alarm Count Statistics

支持告警发生次数的多维度统计.

- **次数统计**: 支持按 "设备+Alarm ID" 等维度统计告警发生次数; 支持按维度统计 Alarm 发生次数, 辅助问题分析.

#### 8.4 Alarm Availability

支持告警有效性的统计分析.

- **有效性分析**: 支持告警有效性统计, 按区域, 设备类型等维度进行分析.

#### 8.5 Alarm Completion Statistics

支持告警处理完成情况的统计.

- **完成情况统计**: 可按区域, 设备类型, 日期等维度查询告警完成情况.

#### 8.6 Alarm Date Comparison

支持跨日期的告警对比分析.

- **日期对比**: 支持不同日期的告警时间对比分析, 并支持结果导出.

#### 8.7 报警动作记录

支持报警触发动作的记录查询与追溯.

- **动作记录**: 支持报警触发动作 (如通知、联动操作) 的记录查询与追溯.

### 9. 定制功能

支持与企业现有基础设施的定制集成.

- **第三方通知平台**: 支持发送企业微信、飞书、短信等第三方通知平台, 实现多渠道告警触达.
- **SSO集成**: 支持 SSO 登录 (统一登录) 与账号验证, 与企业身份认证体系无缝对接.

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

### 1. PMS 维修保养管理

#### 1.1 基础数据管理

支持设备基础数据的自动同步与区域化组织管理.

- **MES设备同步**: 自动同步 MES 的设备及设备 Location, 建立 FAB/ 区域 / 设备对应关系.
- **区域分配**: 设备可分配到不同的区域, 便于不同模组的设备工程师进行分区管理.

#### 1.2 保养类型与触发机制

支持计划性与非计划性、多触发类型的维修保养管理及外部系统集成.

- **计划性保养**: 支持计划的维修保养管理.
- **非周期维修**: 支持非周期的维修管理及非计划维修保养任务.
- **时间周期保养**: 支持基于时间的周期性保养管理.
- **使用情况保养**: 支持基于使用情况的周期性保养管理, 与 EAP 整合, 接收对应参数值进行触发 (例如 Wafer Count / 晶圆计数以及 RFTM / RFM).
- **混合类型保养**: 支持基于时间周期和基于使用情况相结合的混合类型保养管理.
- **API 创建维修单**: 支持通过 API 供其他系统创建临时的维修保养单.
- **非计划宕机**: 支持非计划性宕机 (UnScheduling Down) 手动建立故障单作业请求 (Work Request), 并手动添加所需设备检查清单.

#### 1.3 维修保养管理建立 (PM 模板与计划配置)

支持标准化的保养模板统一管控与精细化的排程规则设定.

- **模板管理**: 支持增加、修改、复制维修保养管理模板, 计划性维护保养模板支持版本控制; 支持按照设备模板统一管控或者按照机台 ID 进行维护.
- **多维度配置**: 计划性维护支持按照设备、按照 Chamber / 子设备进行配置.
- **Checklist关联**: 支持选择所需的已建立 Checklist / 设备检查清单模板, 并可一次添加多个.
- **Trigger参数**: 支持设置 PM Trigger / 触发设备维保所需的递增性及替换性参数.
- **Due窗口管理**: 支持设置 Early Due, Due, Overdue 时间 (提前预警、规定时间以及逾期时间), 并可定义 Overdue 时是否自动 Inhibit 机台 / 自动设置机台维保超期状态.
- **命名规则**: 支持定义计划性维护保养所生成的设备维保任务命名规则.
- **排程类型**: 支持定义浮动型及静态型 PM, 即根据 PM 完成时间或固定的时间来重新规划下一次 PM.
- **附件与部品**: 支持添加 PM 过程中用户需要的共享附件 (例如 SOP 文件);支持定义 PM 需使用的部品详细信息 (料号与描述信息).
- **预估时间与标题**: 支持设置 PM 保养所需的预估保养时间以及标题.
- **原因代码**: 支持设置 PM 保养管理所需要的原因代码.
- **签核逻辑**: 提供系统默认签核逻辑 (权限群组设定) 管理维修保养管理模板.

#### 1.4 PM Checklist 建立与管理

支持结构化的检查步骤定义、参数卡控与模板复用的全生命周期维护.

- **步骤与模板管理**: 支持添加、删除、修改 Checklist Step / 设备检查清单步骤, 以及增加、修改、复制维修 PM Checklist 模板; 支持设备检查清单模板配置功能 (按设备模板或者按设备), 支持系统默认的签核逻辑.
- **内容本地化**: Checklist Step 内容支持中文汉字.
- **导入导出**: 支持 Export 及 Load / 导入导出设备检查清单模板.
- **参数类型与提示**: 支持设置必填及选填参数;未填写必输入参数时, Complete / 完成会进行报警提醒.
- **规格卡控**: 支持规格限制及 Check, 可定义超出规格时是否需要填写 Comment; 支持是否需要 OOS 上下限卡控.
- **步骤附件**: 支持添加用户执行设备检查清单步骤时所需的共享附件 (如执行 PM 所需要的 SOP 文件或者图片).
- **复机检查**: 支持设置 PM 复机 Checklist / 设备检查清单的检查执行步骤.
- **趋势分析**: Checklist 填写的值具备 Report 功能, 可查看这些值的趋势图.
- **故障单关联**: 支持 UnScheduling Down / 非计划性宕机时手动建立故障单 Work Request / 作业请求, 并手动添加所需 Checklist / 设备检查清单.

#### 1.5 机台状态关联的设定

支持 PM 作业 Action 与机台状态的联动控制.

- **状态关联**: 提前设定 PM 不同 Action (开始保养维修, 暂停保养维修, 取消保养维修, 完成保养维修, 延期保养维修) 之间机台状态的关联.

#### 1.6 保养计划规划 (排程与预警通知)

支持智能化的排程辅助、强制管控机制与多级预警通知.

- **时间预测**: 支持预测维修保养的时间.
- **自动排程**: 周期性保养完成后自动安排下一个维修保养计划.
- **Overdue强制切换**: 达到强制维修保养条件 Overdue / 逾期时, 强制切换设备 /Chamber / 子设备可用性.
- **PM预约**: 根据用户 UI 设定预约 PM, 设备到达预约 PM 时间时强制切换设备 /Chamber 可用性.
- **AMS报警整合**: 与 AMS 系统整合, 在用户定义的 Early (提前), Due (设定), OverDue (逾期) 时间点将报警发送给 Alarm / 预警系统.

#### 1.7 维修保养执行

支持完整的 PM 作业流程控制、状态流转与关键配件卡控.

- **全流程操作**: 支持开始, 重新计划, 中止, 取消, 继续, 执行, 完成, 激活, 延迟, Adhoc 等维修保养管理操作.
- **合并执行**: 关联的保养计划可以合并执行, 如周保养和月保养遇到时可以选择合并.
- **Key Parts定义**: 定义 PM 计划时可定义需更换的 Key Parts List (料号与数量) / 关键配件清单 (料号与描述).
- **更换卡控**: 完成 PM 时检查需更换的 Key Parts / 关键配件是否已完成更换, 否则 PM 不可以结束;更换可设置是否强制, 且需要填写 Comment / 备注.

#### 1.8 设备维保查询

支持多维度的维保计划与状态查询.

- **灵活查询**: 可按照设备、拟定的设备群、默认时间范围进行查询.
- **计划与状态**: 支持查询维修保养管理计划及维修保养管理状态.
- **清单查看与导出**: 支持查看维修保养清单列表, 并支持 Export 导出.

#### 1.9 维修保养历史记录

支持多条件的维保历史追溯.

- **时间段查询**: 支持通过选择默认的不同时间段进行查询.
- **分类查询**: 支持按照 Scheduled 及 Unscheduled 的分类进行查询.
- **组合条件**: 支持根据 Work Order, PM State, 机台, Title, Module, PM 开始结束时间进行查询.
- **执行历史**: 支持查询 PM 执行的历史记录.

#### 1.10 权限管理与 MES 整合

支持统一的用户权限管理机制及与 MES 的数据同源.

- **权限机制**: 提供用户权限的管理机制, 包括配置以及运行的权限管理.
- **MES账户整合**: 用户账户与 MES 整合, 减少用户维护成本; 权限管理模块与 MES 进行整合, 减少用户重复定义.
- **Module整合**: 机台 Module 与 MES 深入整合, 用户只需要定义一次, 不需要重复定义.
- **状态整合**: 机台状态以及状态转换与 MES 深入整合, 用户只需要定义一次, 不需要重复定义.

### 2. PTMS 备件管理 (备品备件管理)

#### 2.1 Parts 领入 (配件录入)

支持多渠道的备件领料录入.

- **手工领料**: 支持填写 Part 基本信息进行领料, 录入系统; 支持填写配件基本信息领料录入系统, 支持导入; 提供产品默认的配件录入工具.
- **SAP接口**: 提供标准的接口从 SAP 进行领料, 自动录入到系统.

#### 2.2 Parts 组装 (装卸管理)

支持备件上下机组装与替换作业管理.

- **组装与卸载**: 支持将 Parts Group 里面的 Part 组装到 EQP/Chamber / 设备 / 子设备, 并将此时挂在 EQP/Chamber 的 Part 进行卸载, 选择处理方法 (Scrap, WaitRepair, WaitOE, Swapped, Clean / 废弃、等待维修、待装机、已拆换、清洗).
- **替换分类**: Parts 替换分为 Non PM Job 的替换以及 PM Job 的替换.
- **使用情况显示**: 替换过程中显示当前 Parts 的使用情况.

#### 2.3 Parts 使用和再循环控制 (循环管控)

支持备件循环寿命的统计与卡控.

- **循环量设置**: 系统提供设置 Part 的最大循环量.
- **次数统计与比对**: 支持对 Parts 使用次数的统计, 当用户将 Parts 从 EQP/Chamber / 设备 / 子设备拿下来时, Parts 对应的次数属性自动加 1, 并与 Parts Recycle Spec / 配件循环使用规格进行比较.

#### 2.4 Parts 跟踪和历史 (唯一跟踪)

支持备件唯一性跟踪与履历查询.

- **唯一识别**: Parts 领入时生成唯一识别号, 领入到在线仓以后可以唯一性地进行跟踪记录.
- **信息展示**: 显示 Part 的相关信息以及执行的时间.

#### 2.5 Parts 逾期报警

支持备件寿命的定时监控与报警.

- **Lifetime监控**: 与 AMS 系统整合, 系统对 Part 的 Lifetime 进行定时监控, 发现 Parts 逾期时将相关信息发送给 Alarm / 预警系统.

#### 2.6 Parts 替换卡控 (维保配件卡控)

支持维保必换备件的防错卡控.

- **必换清单配置**: 用户可以在 PMS 系统中配置维保需要更换的 Parts List / 配件清单.
- **Complete卡控**: 用户在 PTMS 系统更换对应的 Part, 如果未更换必更换的 Parts, PM Job 无法 Complete / 维保任务无法完成.

#### 2.7 Part 安全库存

支持备件库存水位的监控与预警.

- **安全库存报警**: 与 AMS 系统整合, 提供用户配置某个料号的安全库存数量, 一旦 Part 数量少于该库存, 将相关信息发送给 Alarm 系统.

#### 2.8 Part 维护管理

支持备件准入控制与可视化信息管理.

- **白名单机制**: 提供用户白名单的定义界面, 维护需要领入到 PTMS 中的 PartNo List, 标准领料接口会查看白名单内容决定是否需要领入到系统.
- **图片上传**: Parts 属性具备图片上传功能, 可以直观地看出具体是什么 Parts.

#### 2.9 Part Group 维护管理 (配件组管理)

支持备件分组的建立与机台关联.

- **Group建立**: 提供用户建立 Part Group 的界面, 同时支持 Loader / 导入工具进行统一的创建.
- **机台关联**: 提供用户界面给机台添加 Part Group, 用户进行 Part 上机时会从该 Group 中找到可用的 Part.

#### 2.10 Part 属性修改

支持备件属性维护与维修状态流转.

- **属性修改**: 支持修改 Part 的 Vendor Series Number, Module, Cycle Count, Description, Warning Qty, Cycle Limit.
- **维修操作**: 对于待维修的 Part, 高权限的用户可以进行维修操作, 执行维修后 Part 状态自动转换成 Repaired 状态.

#### 2.11 Part 报废

支持备件报废的权限化管控.

- **报废操作**: 对于待报废的 Part, 高权限的用户可以进行报废操作, 执行报废后 Part 状态自动转换成 Scrap 状态.

#### 2.12 Part List 查询 (查询导出)

支持多条件的备件库存查询与导出.

- **组合查询**: 支持根据 PartNo, SeriesNo, VendorSeriesNo, Module, Status, Location / 配件号、序列号、供应商序列号、模组、状态、位置等查询对应 Part 的数量.
- **结果导出**: 用户可以根据查询出来的 Part List, 通过 Export 功能把 Part 导出.

#### 2.13 Part 信息的查询

支持备件详细属性的全面展示.

- **详细信息**: 提供用户查看 Part 的具体信息, 包括 PartNo, SeriesNo, Module, Status, Quantity, Current Location, Location Change Time, VendorSN, UserID, RFTIME, Warning Qty, Last Job, Cycle Limit, Cycle Count, Description.

#### 2.14 Return Part

支持错误领料备件的退库处理.

- **退库操作**: 对于错误刚刚领入并未使用的 New Part, 高权限的用户可以进行退库.

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

### 1. 系统管理

#### 1.1 权限管理

支持基于角色的用户与权限管理, 实现精细化访问控制.

- **角色管理**: 支持对所有人员按照分组角色进行管理; 支持新建角色及查看角色; 支持复制角色, 快速创建相似角色; 支持编辑角色及删除角色.
- **角色权限管理**: 支持根据分组角色进行权限管理, 可管控到具体某一个功能 (按钮), 如系统远程发布.
- **用户管理**: 支持新建用户及查询用户; 支持编辑用户及删除用户; 支持重置用户密码.

#### 1.2 基础数据管理

支持区域、派工时效与配置等基础数据的灵活管理.

- **区域管理**: 支持用户建立不同的区域来管理.
- **派工时效管理**: 支持用户按需求修改派工的时效.
- **派工配置管理**: 支持用户按需求修改派工配置.
- **机台派工管理**: 支持用户手动开关机台的派工状态.

#### 1.3 规则建模管理

支持派工规则的配置与版本管控.

- **规则管理**: 支持用户配置派工的先后顺序的规则.
- **版本管控**: 可保存多个版本, 可随时进行版本切换及查询.

#### 1.4 进度管理

支持派工记录的查询监控与人工干预操作.

- **派工监控**: 提供界面让用户查询已经派工的记录以及进度.
- **插单**: 支持用户将需要的工单手动指派到机台任务.
- **替换**: 支持用户手动替换已派工工单.
- **删单**: 支持用户手动将已派工工单删除.
- **派工顺序调整**: 允许用户调整机台上的任务顺序.

### 2. 场景支持

#### 2.1 Full Auto 场景

支持全自动化派工的各类业务场景, 包含但不局限于以下场景.

- **基础场景**: 支持 Basic Scenario, Fix/Internal Buffer Automation Scenario, WET Batch Scenario.
- **专项场景**: 支持 Sorter Scenario (including Wafer Start, Package etc.)、Pilot Run Scenario, Back Side Clean Scenario, Super-Hot Lot Scenario, Bonding/Debonding Scenario, Measurement Scenario, Tool Balance Scenario, Mixrun Scenario, FOUP Clean, FOUP Inspection Scenario.
- **Multi Lot 约束**: 同一个 FOUP 的 Multi Lot 只能被派到同一个机台, 但可根据派工规则决定其中 Lot 的派工顺序;工程师不能任意组合 Multi Lot, 只能 Run 同机台、同 Stage 或者同 Step 的 Lot.
- **全局派工因素**: 支持 Critical Ratio, Move Target, Q-time Urgency, Cycle Time, Shift Target, Hot Lot、交货时间、WIP Balance 等全局因素的派工规则设定和逻辑支持.
- **Q-time 管理**: 支持多样 Q-time 管理、Run Path, Q-time Urgency, 并能够根据 Q-time 提供报警功能;提供有效的 Q-time Loop 监控工具, 监控 Q-time 模型的执行效率.
- **设备派工优先调度**: 支持同 PPID 优先派货, 同组内机台优先派货.

#### 2.2 履历管理

支持 RTD 操作历史的完整记录与追溯.

- **操作履历**: 提供 RTD 操作历史记录, 支持履历追溯.

#### 2.3 补充需求

支持高可用、高并发与便捷管理的系统能力.

- **Code 高可用**: RTD 逻辑模块可以在不同地方重复调用, 而不是复制代码块.
- **高并发性**: 多个 Event 并发时, RTD 能做到快速处理, 互不影响速度.
- **管理便捷**: RTD 支持多选 / 全选设备进行启动、停止等操作.

#### 2.4 Scheduling

支持 Litho 及 WET 机台的精细化 Scheduling 策略.

- **全面状态考量**: 计算时, Scheduling 需考虑所有 Litho 的 WIP、机台状态、Recipe 状态、Reticle 状态、PPID 状态、MES Normal Constraint 以及 R2R.
- **Loading Balance**: 考虑机台间的 Loading Balance, Idle 或者最快将要 Idle 的机台优先 Schedule.
- **Chuck 切换优化**: 与前一个 Lot 最后一片 Wafer 所用 Chuck 不一样的 Lot 优先.
- **Reticle 连续性**: 相同 Reticle 连续进行, 减少 Reticle Change 的次数.
- **Reticle 预搬送**: 反应 Reticle 送检的时间, 提前将 Reticle 搬送至指定的 Stocker.
- **温控 Setup Cost**: 用户提供 Litho 机台升降温的识别方式, Litho 机台 Scheduling 时需考虑机台升降温的 Setup Cost, 减少机台升降温.
- **Litho Dedication**: 实现 Litho 机台 Dedication, 即第一层 Litho 使用的机台, 在第二层工艺需要在相同的机台上 Process.
- **小片数避让**: 避免连续派小片数的 Lot, 造成产能损失.
- **Batch Size 检查**: Check Max/Min Batch Size, Check Max/Min Wafer Size.
- **WET 瓶颈 Tank**: WET 在进行 Schedule 时考虑瓶颈 Tank, 派工时保证瓶颈 Tank 不 Idle.

### 3. Report 管理

#### 3.1 分组管理

支持 Report 分组的组织与维护.

- **分组维护**: 支持添加分组、修改分组名称及删除分组.

#### 3.2 Report 编辑

支持 Report 的可视化开发、发布与权限控制.

- **可视化编辑**: 提供 Report 可视化编辑器.
- **版本与导出**: 支持 Report 保存与升版, 以及 Report 导出与导入.
- **DV 发布管理**: 支持上线 / 重建 DV, 以及下线 / 删除 DV.
- **权限与分组**: 支持 Report 权限设置及 Report 切换分组.
- **Report 查询**: 支持 Report 查询.

### 4. Macro 管理

#### 4.1 Macro 编辑

支持 Macro 的可视化开发与版本管理.

- **可视化编辑**: 提供 Macro 可视化编辑器.
- **版本管理**: 支持 Macro 保存与升版.
- **导入导出**: 支持 Macro 导出及 Macro 导入.

#### 4.2 Macro 发版

支持 Macro 的上线与下线发布管理.

- **上线发布**: 支持 Macro 上线 DV.
- **下线管理**: 支持 Macro 下线 DV.

### 5. 机台映射

支持机台映射关系的批量维护与编辑.

- **批量导入导出**: 支持机台映射的批量导入与导出.
- **映射编辑**: 支持机台映射编辑.

### 6. 全局变量

支持全局变量的批量维护与编辑.

- **批量导入导出**: 支持全局变量的批量导入与导出.
- **变量编辑**: 支持全局变量编辑.

### 7. 依赖关系查询

支持系统内对象依赖关系的查询, 便于变更影响分析.

- **依赖查询**: 支持依赖关系查询.

### 8. 历史记录

支持用户操作记录的追溯查询.

- **操作记录查询**: 支持查询用户操作记录.

### 9. DV 管理

支持 DV 及其参数表的管理与异常处理.

- **DV 查询与删除**: 支持 DV 查询及删除.
- **参数表管理**: 支持参数表查询、删除及清空.
- **异常管理**: 支持 DV 异常管理.

### 10. 系统集成和运维

#### 10.1 多系统集成

支持与 MES, EAP, SPC, ALARM, MCS, EMS 等多系统集成.

- **MCS 集成**: 支持搬运任务下发, 实现自动化搬运.
- **MES 集成**:
    - WIP 清单: 可加工工单信息清单.
    - 机台主数据: 同步机台主数据信息 (如果需要).
    - 批次信息获取: 批次信息下载.
    - 物料库存: 查询线边库的库存信息.
    - 耗材管理: 查询耗材的信息.
- **EMS 集成**:
    - 机台主数据: 同步机台主数据信息 (如果需要).
    - 机台台账: 机台信息查询.

#### 10.2 功能修改与发布

支持在线发布与灵活的数据同步机制, 保障系统持续演进.

- **在线发布**: 支持在线功能发布, 并支持在下次运行时自动调用系统发布的最新版本规则.
- **数据同步**: 数据同步除全表同步外, 支持选定列的数据同步.
- **在线加列**: 当需要在目标数据库中添加新的列的时候, 不影响系统的运行.

#### 10.3 其它

支持高性能数据同步与系统级保障能力.

- **实时数据同步**: 数据同步具有不弱于 Oracle OGG 的实时性同步能力.
- **负载均衡**: 系统具有自动 Load Balance 的能力.
- **缓存优先**: 在能使用缓存数据库的情况下, 优先使用缓存数据库.
- **自动编译**: 具备自动编译的功能.
- **版本控制与事务**: 支持版本控制及回退功能;支持事务及异常处理.

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

### 1. 系统管理

#### 1.1 系统管理

支持系统基础管理功能, 保障系统安全稳定运行.

- **角色与权限管理**: 提供角色管理、用户管理、权限管理等功能, 按角色进行访问控制; 支持组织架构维护与用户角色管理; 支持功能菜单与访问权限的细粒度配置.
- **消息管理**: 提供消息管理等系统基础管理能力; 支持系统公告的发布与管理.
- **基础字典**: 支持系统基础字典数据的维护.
- **触发配置**: 支持流程触发规则的统一配置.
- **RTD同步**: 支持与 RTD 的数据同步, 保证派工规则与基础数据一致.

#### 1.2 POD Location

支持各类存储与搬送设备之间的全自动化流程.

- **全自动化流程**: 支持 Stocker, OHB, NTB, EQP, Exchanger 等设备之间的全自动化流程.

### 2. 业务建模 (管理后台)

支持 AMA 自动化流程的可视化建模与配置, 覆盖流程、表单、连接与运行参数的定义.

- **流程模型**: 支持业务流程模型的设计与维护, 定义自动化派工 Workflow.
- **表单模型**: 支持流程表单模型的建模, 支撑流程中的人机交互界面.
- **连接服务配置**: 在建模阶段配置流程所需的外部连接服务.
- **流程配置**: 支持流程运行参数与触发条件的灵活配置.
- **流程版本管理**: 支持流程版本的发布、切换与历史版本管理, 确保生产流程平稳迭代.
- **发起流程**: 支持手动发起、定时触发与事件触发三种流程启动方式.
- **查看流程**: 支持查看流程实例的执行进度、节点状态与执行结果.
- **应用管理**: 支持自动化应用的创建、编辑、发布与管理.
- **调度服务**: 支持按预定时间周期定时触发流程执行; 支持常规后台任务的调度与管理.
- **连接服务**: 支持数据源、API、消息队列等多种外部连接的配置与管理; 支持连接策略与连接模板的定义与复用.
- **通知服务**: 支持站内通知、邮箱、企业微信、短信等多种通知方式.
- **Action 管理**: 支持流程 Action 节点的创建、编辑与运行参数配置.
- **业务对象**: 支持系统内置业务对象及用户自定义对象的创建与维护.
- **运行监控**: 支持全局流程实例的运行状态监控; 支持全局资源锁的查看与管理, 避免并发冲突; 支持系统各服务运行状态的实时监控; 支持在线用户的查看与管理; 支持系统运行日志的查询与追溯.

### 3. 场景支持

#### 3.1 What Next 规则触发

支持多种触发方式驱动 Dispatching Rule, 确保派工响应的实时性与灵活性.

- **事件触发**: 当 Load Port Ready to Unload Event 报出时, 自动 Trigger Dispatching Rule.
- **定时触发**: 基于 Periodic Watchdog 周期性 Trigger Dispatching Rules.
- **自定义触发**: 基于设备状态及其他用户自定义的客制化状态 Trigger Dispatching Rules.

#### 3.2 Full Auto 场景

支持全自动化派工的各类业务场景, 包含但不局限于以下场景.

- **基础场景**: 支持 Basic Scenario, Fix/Internal Buffer Automation Scenario.
- **专项场景**: 支持 Sorter Scenario (including Wafer Start, Package etc.)、Pilot Run Scenario, Back Side Clean Scenario, Super-Hot Lot Scenario, Bonding/Debonding Scenario, Measurement Scenario, FOUP Clean, FOUP Inspection Scenario, Mixrun Scenario, Tool Balance Scenario.
- **Multi Lot 约束**: 同一个 FOUP 的 Multi Lot 只能被派到同一个机台, 但可根据派工规则决定其中 Lot 的派工顺序;工程师不能任意组合 Multi Lot, 只能 Run 同机台、同 Stage 或者同 Step 的 Lot.
- **全局派工因素**: 支持 Critical Ratio, Move Target, Q-time Urgency, Cycle Time, Shift Target, Hot Lot、交货时间、WIP Balance 等全局因素的派工规则设定和逻辑支持.
- **Q-time 管理**: 支持多样 Q-time 管理、Run Path, Q-time Urgency, 并能够根据 Q-time 提供报警功能;提供有效的 Q-time Loop 监控工具, 监控 Q-time 模型的执行效率.
- **设备派工优先调度**: 支持同 PPID 优先派货, 同组内机台优先派货.

#### 3.3 Where Next 功能

支持 Lot 下一站目的地的预判与准时搬送.

- **下货时间预判**: 提供 Lot 下货时间的提前预判, 并与 MCS 系统联动, 实现 Lot 准时搬送到下一个目标机台.
- **上货顺序预判**: 与 What Next 功能联动, 预判当前 Where Next 的 Lot 的上货顺序.
- **Reroute 支持**: 根据 MCS 能力决定是否支持 Reroute 功能.

### 4. 前台服务

#### 4.1 首页

提供用户工作入口与数据概览.

- **功能导航与数据概览**: 支持功能入口导航与关键业务数据的概览展示.

#### 4.2 流程中心

支持用户流程任务的集中处理与流程发起.

- **待办任务**: 支持待办任务的集中展示与处理.
- **我的草稿**: 支持未提交流程草稿的保存与继续编辑.
- **流程追踪**: 支持查看我发起的、我处理的及抄送我的流程记录.
- **代理设置**: 支持流程处理代理人的设置, 保障任务不因人员缺席而中断.
- **发起流程**: 支持在前台直接发起流程.

#### 4.3 应用中心

支持 AMA 应用的统一展示与访问.

- **应用列表与详情**: 支持已发布应用的列表浏览与详情查看.

### 5. 系统集成和运维

#### 5.1 高效运作

支持最佳搬运方案与 Port 预约机制, 提升整体搬送效率.

- **最佳搬运方案**: Fully Auto 做到最佳搬运方案, 设备到设备是被要求且首推的搬送方式.
- **Port 预约与 Queue 机制**: 可预约设备的 Port, 当设备 Port 预约满后, 支持 Queue 预约机制, 将 WIP 预约到附近的 NTB 或 OHB 以避免无效搬运.

#### 5.2 系统集成

支持与 MES, APC, PMS 等周边系统的直接交互与实时信息同步.

- **周边系统集成**: 支持与 MES, APC, PMS 等其它周边系统 (ERP, MCS, Signoff, YMS) 之间的直接交互与实时信息交互.
- **MES 操作支持**: MES 支持派工系统对设备的操作, 如 Track In, Job Control 等;支持派工系统对更多事件操作, 如 Merge, Create Monitor Wafer, Auto Hold/Release 等.

#### 5.3 对象锁定

支持对象锁定功能, 避免资源争抢, 提高派工效率.

- **对象锁定功能**: 支持对象 (Lot/Port/POD 等) 锁定功能, 避免多个设备或 Port 争抢同一个 Lot, 以便提高派工效率.

#### 5.4 开发工具与报表

提供可视化的开发工具与丰富的报表能力, 降低开发与运维门槛.

- **可视化开发工具**: 提供快速、可视化的开发工具, 基于流程引擎开发 Rule, 支持调试、模拟及自定义组件开发;有详细的 Log 以及相应的 Log 分析工具, 有相应的系统异常报警机制.
- **外部数据导入**: 支持从外部系统导入的集成工具, 例如 Flat 文件、CSV 格式文件或者其他数据库.
- **报表输出**: 提供丰富的报表, 可查看不派工的原因、系统性能、执行效率等, 并能定期生成, 以 Text/Excel/HTML 的格式保存到用户自定义的目录里.
- **管理界面**: 配套的界面包括基础资料的设置、启用功能、参数设置等, 支持界面交互和数据集成展示;界面友好, 操作便捷, 具备相应的权限管理机制.

#### 5.5 功能修改与发布

支持在线发布与灵活的数据同步机制, 保障系统持续演进.

- **在线发布**: 支持在线功能发布, 并支持在下次运行时自动调用系统发布的最新版本规则.
- **数据同步**: 数据同步除全表同步外, 支持选定列的数据同步.
- **在线加列**: 当需要在目标数据库中添加新的列的时候, 不影响系统的运行.

#### 5.6 其它

支持高性能数据同步与系统级保障能力.

- **实时数据同步**: 数据同步具有不弱于 Oracle OGG 的实时性同步能力.
- **负载均衡**: 系统具有自动 Load Balance 的能力, 平均分配不同 Rule 的执行.
- **缓存优先**: 在能使用缓存数据库的情况下, 优先使用缓存数据库.
- **自动编译**: 具备自动编译的功能.
- **版本控制与事务**: 支持版本控制及回退功能;支持事务及异常处理.

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

### 1. 系统管理

#### 1.1 系统基础

支持多语言、高可用的系统基础能力与分析流程自动化运行.

- **脚本文件操作**: 支持新建脚本、打开脚本、保存脚本、脚本另存为、关闭脚本.
- **多语言切换**: 支持中文、英文界面语言切换; 提供繁体中文 / 简体中文 / 英文界面.
- **高可用设计**: 包含系统异常处理及故障恢复功能.
- **客户端兼容性**: User 端支持 Windows 7/8/10 正常运作.
- **分析流程自动化**: 支持定时执行分析流程并将报告储存至指定路径;支持储存分析流程并再次执行;提供流程 Loop 运算功能.
- **Workflow 模式**: 支持 Workflow 模式的分析流程运作.
- **权限控管**: 可弹性调整分析平台内各功能的分类与功能权限.
- **邮件设定**: 可设定寄送报表的收件邮箱.
- **Image Cart**: 支持分析过程中使用截屏购物车 (Image Cart), 一键生成 PPT 报表.
- **个性化喜好设定**: 支持接口样式、图型颜色、字体、大小等个性化配置.
- **系统帮助**: 支持查看使用手册、更新日志及版本号.
- **退出保护**: 支持退出系统, 退出时提示保存当前操作.

#### 1.2 工具管理

支持系统用户、用户组、功能、权限与排程的统一维护.

- **用户信息维护**: 支持新增、编辑、删除用户信息, 支持变更用户归属的用户组.
- **用户组维护**: 支持新增、编辑、删除用户组.
- **功能维护**: 支持同步系统功能, 支持启用、关闭系统功能.
- **功能包维护**: 支持新增、编辑、删除功能包, 支持添加功能至所属功能包.
- **公共脚本管理**: 支持设置公共路径脚本访问权限, 支持按用户、用户组赋权.
- **权限管理**: 支持设置用户或用户组对功能、功能包的访问权限.
- **排程管理**: 支持设置排程任务, 自动运行脚本并输出报告.

#### 1.3 基础定义维护

支持产品、光罩、Zone, DSA 及缺陷分类等基础定义的统一维护.

- **产品光罩布局管理**: 支持设置产品光罩布局定义信息, 管理产品光罩布局.
- **CP 数据产品定义管理**: 支持设置维护 CP 数据产品定义信息.
- **WAT 数据 SITE 定义管理**: 支持设置维护 WAT 数据 SITE 定义信息.
- **Zone 布局维护**: 支持设置维护 Zone 布局定义信息.
- **DSA 定义维护**: 支持设置维护 DSA 定义, 支持 By FAB、产品、Layer, EQP 设置 Tolerance.
- **缺陷分类定义维护**: 支持设置维护缺陷分类定义信息.
- **Cluster 定义维护**: 支持设置维护 Cluster 定义信息, 包括 min count, Tolerance.
- **Repeat 定义维护**: 支持设置维护 Repeat 定义信息, 包括 min count, Tolerance.
- **缺陷分类映射定义维护**: 支持 By FAB 设置不同的缺陷分类映射至同一缺陷分类.

### 2. 数据查询 (数据导入)

支持多源数据库接入、本地文件导入与灵活的查询条件配置.

- **多数据库支持**: 兼容 Oracle, MS SQL, PostgreSQL, DB2, Greenplum 等主流数据库.
- **SQL 直连查询**: 提供透过 SQL 指令直接取得数据库内数据的能力; 支持通过编写 SQL 语句实现从 DB 中导入数据.
- **免编程查询工具**: 提供拖拉式查询接口生成工具, 可根据管理者设定自动生成可重复使用的查询接口, 无需编程.
- **自定义查询条件**: 支持产品、批号、制程站点、机台名称、日期时间等多维度条件, 并支持通配符 (%, \*).
- **条件组合筛选**: 支持设置不同的条件 / 时间范围组合筛选; 支持日历时间查询, 支持自定义时间规则.
- **多数据源接入**: 支持选择从 CP, WAT, FT, WIP, Inline 等不同的数据源查询数据.
- **文件批量导入**: 支持通过 Excel, CSV 格式文件导入数据, 支持多文件批量导入.
- **结果储存与再利用**: 查询结果可被储存并随时调整, 支持接续下一步分析.
- **结果过滤与输出**: 支持按规则过滤查询部分结果, 查询结果可输出.

### 3. 表格功能

支持表格数据的灵活展示、筛选与导出.

- **显示调整**: 可在操作画面上调整数据排序、字段顺序、字段名称与字型样式.
- **数据筛选**: 支持表格内数据筛选.
- **格式设置**: 支持表格数据格式设置.
- **数据导出**: 支持表格数据导出.

### 4. 数据处理

提供多格式数据导入导出与丰富的数据转换处理能力.

- **批量导入**: 支持多文件批量导入, 兼容 Excel, CSV 及 Txt 格式.
- **多路径导入**: 可同时兼容系统内数据表与外部文件导入.
- **多格式导出**: 支持多格式数据导出; 支持数据导出为 Excel, CSV 格式.
- **表关联与比对**: 支持表关联、合并与差异比对.
- **数据连接**: 支持不同类型数据的左右合并、上下合并、相减.
- **列操作**: 支持动态添加数据列、数据排序、行转列与列转行.
- **数据清洗**: 支持数据清理与补值 (统计值补值与自定义补值)、数据拆分、数据筛选及异常值过滤.
- **数据分组**: 支持数据的自定义分组、条件式分组.
- **数据筛选**: 支持自定义规则过滤数据, 支持使用统计方法筛选数据.
- **透视表**: 支持行列聚合、数据透视功能.
- **数据采样**: 支持数据采样.
- **图片数据处理**: 支持图片数据导入;系统内图片数据可与表格数据合并显示;支持图片导出至指定路径.

### 5. MAP 分析 (Map 图)

#### 5.1 CP/Sort/WAT Map

提供完整的晶圆图谱 (Wafer Map) 分析能力.

- **Map类型支持**: 支持查看良率 Map、参数 Map, WAT Map.
- **多层级分析**: 支持 Lot, Wafer 级别的分析, 支持单片以及多片叠图的分析.
- **Zone分析**: 支持 Wafer Zone 分析, 支持用户自定义分区计算 Yield, Parameter; 提供自定义区域 (Zone) 工具, 支持分析规则复用.
- **统计分析**: 支持 Bin 的统计分析与 Parameter 数据的统计分析.
- **分布图表**: 支持 Bin 分布图表功能 (如柱状图), 支持 Parameter 图表分析 (如直方图).
- **颜色梯度**: Sort Map 颜色梯度 (热力图) 支持 By Lot, Wafer 划分.
- **多片合并**: 支持多 Wafer Map 合并之后显示 Bin, Parameter 的分布.
- **WAT Map绘制**: 支持 WAT Map (5 Site / 9 Site) 的绘制.
- **光罩叠加**: 支持 Bin Map / Sort Map / WAT Map 和光罩叠加分析.
- **Map 展示模式**: 支持图库视图 / 单图视图、等高线图、3D 等高线图、双数值向量图、参数分布图、气泡分布图、MAP 切面趋势分布图、CP Map & 光罩版图.

#### 5.2 样式功能

提供丰富的 Map 展示与交互样式能力.

- **结果导出**: 支持 Wafer Map 导出到 Excel, PowerPoint, 支持复制 Wafer Map 到剪贴板.
- **交互提示**: Wafer Map 支持鼠标悬停数据内容的提示显示.
- **视图操作**: Wafer Map 支持缩放、旋转, 支持 Die / Site / Reticle Level 的数据视图.

#### 5.3 Ink

支持晶圆 Ink 标注与结果输出.

- **Ink操作**: 支持选择不同的规则对 Map 进行 Ink 操作并导出 Text Map.

### 6. 基础分析

内置完整的基础统计学算法库.

- **相关性分析**: 支持 Correlation (Pearson, Spearman) 分析功能.
- **描述性统计**: 支持描述性统计与高级描述性统计, 支持公式自定义; 支持数据汇总统计, 包括均值、标准差、最大值、最小值、求和、个数、四分位数、百分位、IQR、偏度、峰度; 支持描述性类别统计, 包括直方图、盒须图绘制.
- **方差分析**: 支持单因子方差分析与重复测量单因子方差分析; 支持两因素方差分析 Two Way ANOVA.
- **非参数检验**: 支持 Kruskal-Wallis 分析、Mann-Whitney U 检验、Wilcoxon Signed-Rank 检验.
- **T 检验**: 支持单样本 T 检验、双样本 T 检验、配对样本 T 检验.
- **其他检验**: 支持正态性检验 (Normality Test)、双样本 Kolmogorov-Smirnov 检验、F 检验、PCRB (F/T 检验).
- **过程能力分析**: 支持过程能力分析.
- **样本量估算**: 支持样本量估算.
- **共通性分析**: 支持共通性分析功能, 支持根据不同的字段排序优先级.

### 7. 多变量分析与高级分析

提供多元统计、建模预测与 Offline SPC 等深度分析能力.

- **主成分分析**: 支持 Principle Component Analysis (PCA) (with loadings, scores, scree plot, scatter plot) 分析.
- **偏最小二乘回归**: 支持 PLS Regression (with X/Y loadings, scores, and VIP) 模型分析.
- **多元回归**: 支持 Multiple Linear Regression 分析功能, 支持设置多项式变量; 支持线性回归分析.
- **决策树**: 支持 Decision Tree 分析.
- **数据透视**: 支持数据透视分析.
- **敏感性与共通性分析**: 支持通用参数敏感性分析与共通性分析.
- **多元分析**: 支持主成分分析 (PCA)、K 均值聚类、决策树分析.
- **模型预测**: 支持模型预测分析.
- **田口方法**: 支持田口方法设计与分析.
- **Offline SPC**: 支持 Control Limit, Rule Test 及 Ca/Cp/Cpk 计算, 可批次模拟、呈现并提供报告;支持 Xbar-R, Xbar-S, X-MR, Xbar-Uniformity, EWMA, CuSum, P, nP, C, U Chart, 提供国际标准 SPC Rule.

### 8. 假设检验

#### 8.1 T 检验

支持单样本均值假设检验.

- **One Sample T-Test**: 支持 One Sample T-Test 分析功能.

#### 8.2 F 检验

支持联合假设检验.

- **F Test**: 支持 F Test (联合假设检验) 分析功能.

#### 8.3 两样本集成检验 (PCRB)

支持工艺变更前后差异的定量评估.

- **PCRB检验**: 支持辅助用户对工艺变更前后的样本间差异进行定量分析.

### 9. 图形绘制 (图表)

提供全面的统计图表类型与智能分析增强能力.

- **基础图表**: 支持趋势图, 包括 Line, Line+Point, Bar, BarStacked; 支持时序图; 支持盒须图, 盒须图支持显示均值、标准差、四分位数等统计值; 支持散点图; 支持矩阵散点图; 支持 3D 散点图; 支持均匀累积分布图 (CDF); 支持正态概率分布图 (NPP); 支持帕累托图; 支持直方图; 支持饼图; 支持曲面图; 支持等高线图.
- **丰富图表类型**: 支持趋势图 (趋势线、点图、条形图、堆叠条形图、百分比堆叠条形图、面积图)、时间序列图、饼图、柏拉图、箱形图、区间图、Delta 图、散点图、3D 散点图、散点图矩阵、直方图、正态概率图、P-P 图、Q-Q 图、曲面图、等高线图、色阶网格图、箱形趋势图、颜色映射散点图.
- **X 轴合并显示**: 趋势图、条形图、箱形图、箱形趋势图支持 X 轴合并显示 (分组标签).
- **自动分群绘图**: 可依自动分群条件一次绘制多张图表.
- **规格线与常数线**: 支持从数据列生成规格线 (含动态规格线功能);支持根据设定条件绘制常数线, 条件可参考其他表格或自行输入; 支持在图表上添加规格线、控制线.
- **OOC/OOS 高亮**: 高亮显示 OOC 与 OOS 数据点;可于多图模式根据 OOC, OOS 高亮出违反的 Chart.
- **Cpk 计算**: 支持在图表上直接计算并显示 Cpk 值.
- **转折点侦测**: 趋势图支持自动侦测趋势转折点并绘制分隔线 (良率转折点、电测转折点).
- **四点规格散点图**: 散点图支持定义器件四点规格 (FF/SS/SF/FS/ 中心点).
- **样式功能**: 支持分组设置, 同一图内以不同颜色区分绘制不同组别的数据;支持分图设置, 同类型图表多图显示在同一窗口; 支持图表的缩放, 支持复制图表到剪贴板; 支持设置图表标题、图例、轴距、步距、颜色; 支持导出图表至 Excel, PowerPoint.

### 10. 工作流

#### 10.1 样式功能

支持可视化工作流的编排与执行.

- **模块管理**: 支持新增、编辑、删除功能模块.
- **布局编排**: 支持拖拽模块布局, 支持一键垂直布局、水平布局.
- **数据承接**: 支持两模块之间连线, 承接数据.
- **一键执行**: 支持流程一键执行.

#### 10.2 流程决策

支持工作流中的条件分支控制.

- **分支决策**: 支持流程决策功能, 在工作流中判断流程分支走向.

### 11. 报告 (报表)

支持报告的自定义生成、自动导出与分发, 灵活的报表逻辑设定与多格式输出.

- **报告定制**: 支持自定义报告版式布局、报告导出设定; 提供接口设定各种报表逻辑, 方便操作.
- **多格式导出**: 支持把分析结果导出到 Excel, PowerPoint, PDF 文件中; 支持 HTML, Excel, CSV, PowerPoint 格式.
- **自动报告**: 支持自动报告导出功能, 系统可以自动运行指定的分析模板生成并导出报告.
- **报告分发**: 报告生成后, 支持发送邮件、导出至共享文件夹机制; 支持 Email 寄送 Report, 邮件内可含 HTML 报表内容.
- **Excel 报表增强**: 支持两个表格合并数据显示于 Excel 报表;支持表格与图片 (图表 / 图片 / Map) 合并显示;支持多表格与 Chart, Map 产出时自动生成 Index Sheet 并建立链接, 方便浏览数据.
- **自定义布局**: 支持自定义单页面报表布局 (例: 2*2, 3*2);支持在操作界面动态调整数据顺序、字段名称及字体大小.
- **PPT 报表增强**: 支持多章节格式且每章节可自定义不同格式;可于单页 PPT 内定义 X 轴与 Y 轴, 将多张图片按定义合并显示于一页;可根据图片数量与排列逻辑自定义分页方式.

### 12. 插件

支持与外部工具集成, 扩展分析能力.

- **Excel 宏集成**: 支持与 Excel 宏 (Macro) 集成.
- **R 语言集成**: 支持与 R 语言集成.
- **Python 集成**: 支持与 Python 集成.

### 13. 运维

提供计划任务监控、日志诊断与 License 管理等运维能力.

- **计划任务监控**: 提供计划任务性能监控 (执行开始时间 / 结束时间 / 处理笔数等关键指标).
- **运行日志**: 提供系统运行日志文件, 支持故障排查与历史查询.
- **使用监控**: 提供功能使用监控日志与报告.
- **License 管理**: 提供 License 管理接口与维护功能.
- **权限控管**: 支持权限控管.
- **健康状况查询**: 提供管理页面可查询系统健康状况与异常回报.

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

### 1. 缺陷分析

#### 1.1 数据查询 (缺陷数据查询)

支持多维度、多条件的缺陷数据查询与高级筛选, 快速定位目标 Lot/Wafer 的 Defect 数据.

- **时间维度查询**: 支持相对时间与绝对时间两种时间模式查询; 支持按时间过滤筛选缺陷数据.
- **快速筛选**: 支持按 Product, Lot, Wafer, EQP, Recipe / 产品、批次、晶圆、站点、配方等不同条件快速筛选.
- **高级过滤**: 支持按 Defect Density, Scan Area, Defect Count, Defective Die Count, Has Images, Has Cluster, Has Repeat, Last Scan Only 等条件进行高级过滤; 支持按数据内容及原始数据条件进行缺陷数据的筛选过滤; 支持设置仅呈现最终检测结果;支持筛选过滤有照片的检测记录.
- **Klarf 读取**: 支持直接读取 Klarf 档案进行查询分析.
- **显示模式**: 支持列表、行列定义等多种显示模式.
- **指标查询**: 支持查询缺陷分类结果以及 DDC/DDP 等指标.
- **原始数据查询**: 支持查询原始数据; 用户可自行定义图形显示条件; 查询结果支持汇出为 Excel, CSV.

#### 1.2 DSA (Defect Source Analysis / 动态缺陷根源分析)

支持缺陷根源分析运算, 并可通过 Layer 过滤与自定义配置灵活控制分析范围.

- **Cluster 分析**: DSA 支持 Cluster 分析计算.
- **Layer 过滤**: DSA 分析运算支持按照 Layer 进行过滤设置, 支持自定义选择前层参与运算.
- **Ignore Layer**: 支持用户自定义 Ignore Layer, 指定不参与 DSA 分析的 Layer.
- **误差调整**: 用户可自行调整缺陷根源分析的缺陷位置误差范围.
- **汇总分析**: 提供缺陷根源分析的晶圆层级汇总与相关性汇总表.
- **命中对照**: 提供缺陷根源分析后的命中缺陷对照表.

#### 1.3 Wafer Map 分析 (单图 / 多图 / 叠图显示)

支持 Defect Wafer Map 的显示、交互、框选、叠图与对比分析, 并可与图像、图表及 Review 机台联动.

- **Map 显示**: 支持 Defect Wafer Map 显示及 Map 信息查看, 显示必要的 Defect 信息; 支持 Lot, Wafer 及 Layer 级别的 Map 分析; 支持 Defect Map By Class 查看.
- **显示控制**: 支持用户设定 Map 显示参数 (标题、大小、颜色等); 支持 Defect Size 调整; 支持快速过滤 (Show/Hide Defect Clusters, Show Adder Defect Only, Show Images Only, Show Repeat Only, Manual Classified Only); 支持调整缺陷晶圆图的显示细项条件, 缺陷显示条件可自由调整;支持放大或缩小缺陷晶圆图; 支持显示检测资讯.
- **芯片显示**: 芯片资讯与芯片边界可选择是否显示.
- **图像联动**: Map 上的 Defect 可以链接到对应的 Defect 图像; 支持 Map, Chart, Data Set 交互联动; 缺陷晶圆图可与缺陷数据、统计图互动显示.
- **备注管理**: 支持添加、删除 Defect 备注.
- **Repeater Analysis**: 支持重复缺陷分析, 通过叠加缺陷识别重复的 Defect, 支持 Die 及 Reticle 两种分析模式.
- **框选操作**: 支持矩形、自定义框选过滤 Defect; 支持 Select Filter; 用户可在缺陷晶圆图中以任意形状选取缺陷.
- **测量工具**: 支持 Defect 量距; 支持测量两个缺陷间的距离.
- **Send to Review**: 支持在 Map 上框选 Defect, 并将结果 Send to Review 机台.
- **Cluster 重算**: 支持用户自定义条件, 重新计算、显示以及修改 Cluster 信息; 支持缺陷群聚 (Cluster) 分析.
- **导出功能**: 支持在 Map 上导出 KLARF, Txt Map; 支持输出 Klarf 档案; 支持一键复制 Map 至剪贴板.
- **Gallery Map**: 支持 Gallery Map 自定义布局及透视分析.
- **多图显示**: 支持多片 Wafer Map 的同屏显示与分析; 支持自由调整显示的行列数量; 支持自由调整缺陷类别的显示颜色; 支持抽样分析.
- **对比分析**: 支持两片 Wafer 做 Compare 分析 (Post Adder, Missing, Common, Different, Sum Up); 支持按后测增加、后测消失、前后测有差异等条件改变缺陷显示颜色.
- **叠图分析**: 支持叠图分析; 支持 Defect Map Overlay CP Map; 支持晶圆中按区域或 Shot 等进行缺陷的叠图; 支持 CP 测试结果与缺陷叠图; 单图与叠图时支持区域划分与统计分析; 统计图支持改变各种显示条件, 如 X/Y 轴条件、开关缺陷是否有分类或缺陷尺寸等.
- **前后测对比 (新增缺陷分析)**: 支持分别呈现前测、后测、前后测共同、后测新增等缺陷晶圆图.
- **Kill Yield**: 支持 Defect Kill Yield Ratio 分析与报告.
- **Zone 分析**: 支持 Zone Map 分析, 包含 Zone 的定义、Zone 分析以及分类.
- **Small Die**: 支持 Small Die 功能.
- **WIP 关联**: 支持 By Lot/Wafer Cross WIP 分析.
- **缺陷拍照与自动抽样**: 支持指定缺陷进行检查拍照; 支持自动缺陷抽样, 可配置多种多重条件.

#### 1.4 Defect Image (缺陷照片浏览)

支持 Defect 图像的树形浏览、排序、查看与批量操作, 并可与 Map/Die 交互联动.

- **树形浏览**: 支持树形结构快速查看 Image; 支持树状缺陷照片浏览.
- **排序功能**: 支持 Image 升降排序 (By Scan Time, By Layer, By Defect ID, By Wafer ID).
- **文本显示**: 支持 Image 自定义文本显示功能, 支持一键展示 / 隐藏文本.
- **图像操作**: 支持双击放大 Image 及切换 Image; 支持 Image 放大、缩小、旋转; 支持 Image Copy 功能; 支持放大或缩小缺陷照片, 可点击照片进行重新分类.
- **照片堆栈**: 支持将同一颗缺陷的不同照片堆栈显示.
- **显示模式**: 缺陷照片支持多种显示模式 (列表、行列定义、按条件排序等).
- **选择联动**: 支持单选、多选、连选 Defect Image, 并与 Map, Die 交互.
- **重新分类**: 支持单选、多选 Defect 进行 Reclass; 界面上支持缺陷的重新人工分类.

#### 1.5 Defect Chart & Wafer Summary (绘图模块)

支持缺陷统计图表绘制与汇总表格分析, 提供灵活的运算、排序与显示配置.

- **图表类型**: 支持 Trend, BarStack, BoxPlot 图表分析; 支持 Split 分析; 支持各式趋势图、条形图、堆叠条形图、面积图、散点图、盒须图.
- **层级绘制**: 支持 Lot, Wafer 以及 Layer 级别的 Chart 绘制.
- **运算公式**: 支持多种运算公式 (Sum, Average, Max, Min, Median, Std).
- **表格操作**: 表格数据支持 Copy; 表格列支持自定义展示 / 隐藏; 表格支持删除行; 表格、Chart 数据支持升降序排列.

#### 1.6 Klarf File Viewer

支持 Klarf 文件导入分析.

### 2. 其他功能

#### 2.1 基本要求

支持多类型数据的收集、处理、可视化与缺陷分析, 并能自动生成分析报告.

- **数据处理**: 系统能提供数据处理功能, 能收集处理 History/WIP, WAT, CP, Metrology (EDC), Event, FT, Defect, Defect Image 等类型的数据.
- **数据可视化**: 系统能提供数据可视化功能, 如数据表格、图表、Wafer Map.
- **缺陷分析**: 系统能提供 Defect 数据的识别、分类、运算以及分析功能.
- **报告生成**: 系统能提供报告生成功能, 能就分析过程中产生的结果自动生成 Excel, PPT 格式的报告.

#### 2.2 数据加载程序

支持从文件、业务系统及数据库加载数据, 提供高效可靠的 Loader 开发平台与 Defect Classification 维护能力.

- **多源加载**: 数据加载程序支持从文件中加载数据 (WAT, CP, FT, Defect 等类型); 支持从业务系统 (如 MES) 加载数据; 支持从其它数据源 (如 DB) 加载数据.
- **Loader 平台**: 提供高效、可靠的数据加载程序开发平台 (Loader).
- **日志服务**: 数据加载程序提供详细日志服务.
- **自动 DSA**: 加载程序自动计算 DSA 功能.
- **Classification 维护**: 支持 Defect Classification 的维护, 包括增加、删除、更改; 支持从 KLARF 中导入 Defect Classification 定义.
- **ADC 整合**: 支持整合 ADC Defect 分类结果数据.

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

### 1. 基础报表

#### 1.1 Report 功能

支持与生产数据隔离的报表数据架构及便捷的前台展现工具.

- **数据隔离与ETL**: Report 数据与生产数据隔离, 通过 ETL 进行定时数据抽取转换并存储至 ODS.
- **展现与导出**: 前台展现工具便于开发, 所有报表都可以导出为 Excel, PDF, Word 等常用格式, 支持各种常见图表.

#### 1.2 Summary Report

支持多维度的统计类报表.

- **统计维度**: 提供统计类报表, 可以按产品, 流程, 工序, 工步, 设备, 时间段等进行统计.

#### 1.3 Analysis Report

支持面向经营分析的分析类报表.

- **分析报表**: 提供分析类报表, 如良率报表, 投入产出报表.

#### 1.4 WIP Report

支持在制品 (WIP) 类报表的生成与查询.

#### 1.5 EQ Report

支持设备类报表.

- **设备状态报表**: 提供设备类报表, 如设备各种状态 Summary 报表.

#### 1.6 Cycle Time

支持批次 Cycle Time 类报表.

- **CT统计**: 提供批次 Cycle Time 类报表, 可统计批次和产品的 Cycle Time.

#### 1.7 Hold Info

支持现场被 Hold Lot 的信息追溯报表.

- **Hold明细**: 提供现场被 Hold 的 Lot 信息报表, 可指定时间段, 列出是否 Release, Hold/Release 人员, 原因, 时间等信息.

#### 1.8 W/O Info

支持工单 (Work Order) 信息报表的生成与查询.

### 2. WIP 在制品报表

#### 2.1 生产运营综合报表

支持以日 / 月为粒度汇总产线生产状况与关键指标, 满足管理层生产运营分析需求.

- **FAB Indices Report**: 汇总每天的生产状况, 包括 EOH, 出货, 晶圆下线, Hold Lot, 废料和良率等数据.
- **Product Monthly Indices (盘点表)**: 按月统计各个指标数据 (投产, 消耗, 废碎片等).
- **Wafer Start Report**: 按照产品统计时间段内的投产情况.
- **Ship Lot Report**: 统计每天的每个产品的 ship 数量及明细.
- **Move By Day Shift WIP Report**: 展示选定时间 WIP 段内每天的 Track In & Track Out 的 Move 量, 并可查看每个阶段及操作的具体数据.
- **Target Report**: 用于维护各个报表的关键指标公式.

#### 2.2 WIP 分布与计划报表

支持实时掌握 WIP 分布状况及在制信息, 辅助批次生产安排.

- **WIP Profile Report**: 展示各个阶段 (Stage) 的 WIP 分布状况.
- **Coming Lot Report**: 按 Tech / 产品 / 区域 / 设备组统计当前站点及所选时间内即将到站的 Wafer 数量, 并支持按 Lot 查看剩余工序.
- **Cycle Time Report**: By Area & Tech 查询在制信息以及 Remain Step, 进行安排批次生产.

#### 2.3 Lot 追溯与异常报表

支持 Lot 全生命周期追溯及各类异常批次的专项分析.

- **Bullet Hot Lot Report**: 跟踪优先级为 1/2 的 Lot, 显示 Lot 的生产状态, 运行时长, 等待时长, Hold 时长等详细信息, 并以甘特图呈现.
- **View Lot History Report**: 按工艺流程顺序图表展示产品的历史数据, 包括 PRT, PQT, PHT 以及累计生产时间.
- **Hold Lot Report**: 展示所有 Hold 状态的 Lot, 按产品, 部门等条件查看其持有比率和持有时长.
- **Slow Lot Report**: 展示全产线长时间停滞的 Lot, 显示其停滞状态.
- **Q Time Report**: 展示超出 Q-Time 且尚未结束的 Lot 的基本信息.
- **Rework Lot Report**: 提供与返工 Lot 相关的信息.
- **Scrap Terminate Report**: 列出状态为废料或终止的 Lot, 并显示每个 Lot 的晶圆数量.

#### 2.4 质量与工程分析报表

支持良率, 测试指标及工艺审查类数据的查询与分析.

- **CP Yidle Report**: 按天查询基于产品和 Lot 的良率及其他测试指标的均值.
- **RRC Summary Report**: 按时间段汇总 RRC 数据.
- **SRC Summary Report**: 工程师可通过该报表审查 SRC 信息, 了解哪些区域需要调整流程.
- **Operator Production By Day Report (作业员产量表)**: 按照站点查看对应日期每个班次下的进出站数量.

### 3. EQP 设备报表

支持设备生产表现, 综合效能及状态历史的跟踪与分析.

- **EQP Index Report**: 按区域和时间区间跟踪 Fab 机台的生产表现.
- **OEE 报表**: 查看机况综合情况和设备利用率, 设备加工情况和加工效率等.
- **EQP Status**: 设备历史事件报表, 查看详细的设备历史记录以及设备甘特图.

### 4. 其他资源报表

支持载具, 光罩及异常管制等周边资源的状态监控.

- **Carrier Status Report**: 汇总 Carrier 的各个状态, 并显示超过清洗周期未清洗的 Carrier.
- **Reticle Report**: By Tech & Prod 展示 Reticle 的状态分布.
- **OCAP Report**: 按时间查询所有 OCAP 的清单, 并显示对应的处理履历和异常值数据.

### 5. FineReport 必备模块

支持 FineReport 平台的全功能模块, 覆盖报表设计, 可视化, 填报, 运维与权限管控.

- **数据接入与填报**: 多数据源关联, Excel 导入, 数据录入, 数据多级上报.
- **报表设计**: 多 Sheet 报表设计, 组件式设计, 多分页设计, 聚合报表, 参数查询界面, 模板助手.
- **图表与可视化**: H5 动态图表, 扩展图表, 图表高级交互, 地图, 可视化看板.
- **分析能力**: 增强分析统计模块, 数据分析, Alpha Fine.
- **运行与运维**: 多报表运行环境, 运维平台, 决策平台, 定时调度, 打印导出.
- **权限管控**: 模板权限集成, 集团权限控制.

# FMS

FMB+vFAB

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

### 1. 基础配置

#### 1.1 工作台

支持设备运行状态的实时监控与可视化展示.

- **实时监控**: 实时监控设备状态, 设备告警及设备加工 LOT, CARRIER 等信息.
- **状态颜色配置**: 支持动态配置设备状态颜色, 直观区分设备运行情况.
- **灵活查看**: 支持全屏及动态缩放移动查看机台.
- **多 FAB 支持**: 支持多个 FAB 选择查看机台监控数据.

#### 1.2 基础配置

支持车间与设备布局图的自定义建置与管理.

- **导航树浏览**: 通过导航树查看车间, 区域, 设备信息.
- **设备布局图**: 支持自定义组装设备布局图, 并提供保存, 查看, 清空, 下载功能.
- **车间布局图**: 支持自定义组装车间布局图, 并提供保存, 查看, 预览, 下载, 清除, 发布功能.
- **拖拽式组件**: 支持基础组件及设备组件的查看与拖拽功能, 实现便捷的布局编辑.

### 2. 看板系统

#### 2.1 看板设计

支持无需开发的可视化看板设计能力.

- **拖拉拽设计**: 系统提供丰富的组件, 无需开发, 通过拖拉拽方式设计界面.

#### 2.2 看板组件

支持丰富的看板组件库, 满足多样化展示需求.

- **组件库**: 提供 Chart, 表格, 图片, 数据源, 音频, 视频, 数据处理组件等 90+ 组件.

#### 2.3 播放管理

支持灵活的多看板播放策略.

- **轮播与分屏**: 支持多看板轮播, 可设定轮播时间, 支持分屏播放与单个播放.

#### 2.4 定时刷新

支持看板数据的定时自动刷新.

- **刷新机制**: 可设定刷新时间, 定时刷新看板数据, 最小单位 1 秒.

#### 2.5 3D 仓库

支持以 3D 方式呈现仓库现场.

- **3D 展示**: 以 3D 方式设计仓库现场, 点击货架展示货架物料信息.

#### 2.6 表单功能

支持 Form 表单能力, 实现数据交互.

- **表单搜索**: 提供 Form 表单功能, 结合组件可实现搜索功能.

#### 2.7 动态事件

支持组件间联动的事件机制, 实现复杂应用场景.

- **事件联动**: 结合组件之间的传值和不同事件, 可实现事件监控等复杂应用场景.

#### 2.8 动画效果

支持多种动画效果, 提升看板展示体验.

- **动画支持**: 提供多种动画效果, 丰富看板体验.

#### 2.9 数据源管理

支持以简单配置方式对接业务系统数据.

- **数据库连接**: 通过简单配置方式连接业务系统数据库.
- **多种数据源**: 同一网络环境内可配置多个不同关系型数据库.

#### 2.10 看板数据管理

支持管理员在线配置看板数据获取逻辑.

- **SQL 配置**: 在管理员界面里配置 SQL 来获取数据, 不需额外连接其他开发工具.

#### 2.11 用户与权限管理

支持多类型用户的分级管理与按看板组维度的访问权限控制.

- **用户分类**: 用户分为管理员和普通用户, 并区分可设计用户和只能查看的用户.
- **权限分配**: 按看板组的维度, 给不同用户开放可访问权限.

#### 2.12 字体管理

支持自定义字体的扩展与使用.

- **自定义字体**: 可自定义添加字体, 从其他地方下载后可添加到系统, 设计看板时使用.

#### 2.13 附件管理

支持多种类型附件的统一管理.

- **附件上传下载**: 支持图片, 视频, 音频, Excel 文件等多种附件的上传下载管理.

#### 2.14 日志管理

支持系统运行与用户行为的日志管理.

- **日志记录**: 支持错误日志管理与用户登录管理.

### 3. 系统管理

#### 3.1 资源管理

支持布局资源图的自定义维护.

- **资源图上传**: 支持自定义设备资源图及子设备资源图上传, 方便设备布局图的更换和添加.

#### 3.2 系统管理

支持车间组织架构规划与 MES 数据同步.

- **车间规划**: 支持创建车间, 并通过车间自主规划区域.
- **设备规划**: 支持通过区域自主规划设备, 方便车间布局图与实际物理位置对齐.
- **MES 数据同步**: 支持与 MES 设备及相关监控数据的实时同步.

### 4. 客制化

#### 4.1 设备状态监控

支持按用户现场布局定制的设备状态可视化监控.

- **Layout 定制**: 按照用户提供的厂区车间 Layout 定制设备 Layout, 按实际位置摆放设备.
- **状态展示**: 用不同颜色展示设备不同的状态.
- **详情查看**: 点击设备展示设备详细的信息.

#### 4.2 其他看板

支持 MES 相关业务的实时看板定制开发.

- **实时看板定制**: 可定制开发设备, 品质, 生产, 物料, 计划等 MES 相关实时看板.

# 硬件配置

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

# 规划图

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

# NDA(Non-Disclosure Agreement)

保密协议或不披露协议

# RFP(Request for Proposal) 提案请求

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

# CIM 团队建制

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

# CIM Infra

必须要有主选和次选, 国产 / 非国产

保证 服务器、存储、数据库

机台有 千兆 / 万兆, 机台都是网线不是光纤

FAB DC 和 (Dev UAT PRD) 是 1:1
