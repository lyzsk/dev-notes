# Systems

| Abbreviation | Full form                         | Desc                          |
| :----------- | :-------------------------------- | :---------------------------- |
| CIM          | Computer Integrated Manufacturing | 计算机整合制造                |
| EAP          | Equipment Automation Programming  | 设备自动化                    |
| APC          | Advanced Process Control          | 先进过程控制                  |
| AMHS         | Automatic Material Handing System | 自动物料搬送系统              |
| MCS          | Material Control System           | 物料搬运系统                  |
| ECS          | Equipment Constraint System       | 机台限制(卡控)系统            |
| PMS          | Preventive Maintenance System     | 预防性保养维修系统            |
| EDA          | Equipment Data Acquisition        | 设备数据采集                  |
| EDC          | Equipment Data Collection         | 设备数据采集                  |
| MES          | Manufacturing Execution System    | 制造执行系统                  |
| RMS          | Recipe Management System          | 配方管理系统                  |
| RTMS         | Reticle Management System         | 掩膜管理系统                  |
| PRMS         | PhotoResist Management System     | 光刻管理系统                  |
| WIPM         | Wafer in Process Management       | 晶圆过程控制系统              |
| SPC          | Statistical Process Control       | 统计过程控制系统              |
| WPH          | Wafer Per Hour                    | 每小时晶圆数                  |
| AMS          | Alarm Management System           | 报警管理系统                  |
| RPT          | Report                            | 生产报表系统                  |
| SDR          | Sensor Decide Respond             | 感知决策响应 (工厂自动化系统) |
| FDC          | Fault Detection Classification    | 错误侦测与分类                |
| RTD          | Real Time Dispatching             | 实时派工系统                  |
| YMS          | Yield Management                  | 良率管理系统                  |
| DMS          | Defect Management System          | 缺陷管理系统                  |
| ADC          | Auto Defect Classification        | 自动缺陷分类系统              |
| ERP          | Enterprise Resource Planning      | 企业资源经营计划              |

## main systems in CIM

| Abbreviation | Full form                        | Desc             |
| :----------- | :------------------------------- | :--------------- |
| EAP          | Equipment Automation Programming | 设备自动化       |
| MES          | Manufacturing Execution System   | 制造执行系统     |
| SPC          | Statistical Process Control      | 统计过程控制系统 |
| WPH          | Wafer Per Hour                   | 每小时晶圆数     |
| RTD          | Real Time Dispatching            | 实时派工系统     |
| RPT          | Report                           | 生产报表系统     |
| FDC          | Fault Detection Classification   | 错误侦测与分类   |
| YMS          | Yield Management                 | 良率管理系统     |
| DMS          | Defect Management System         | 缺陷管理系统     |
| ADC          | Auto Defect Classification       | 自动缺陷分类系统 |

# Terminology

| Abbreviation   | Full form                                                               | Desc                                                                                                  |
| :------------- | :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| AMC            | Airborne Molecular Contamination                                        | 气态分子污染物                                                                                        |
| BR             | Business Rule                                                           | 业务规则建模                                                                                          |
| BSI            | backside illumination                                                   | CMOS 背照式工艺                                                                                       |
| CEID           | Collect Event ID                                                        | onlinesubstate(4=onlinelocal, 5=onlineremote) <br/> carrierholdtrigger(0 = hostrelease, 1=eqprelease) |
| CMP            | Chemical Mechanical Polishing                                           | 化学机械抛光 <br/> 目的是磨掉金属介质                                                                 |
| CP             | Chip probing                                                            | 针对 Wafer 的探针测试 <br/> 目的是剔除加工有故障的 Die                                                |
| CVD            | Chemical Vapor Deposition                                               | 化学气相沉积 <br/> 用于进行半导体材料设备的专用设备, 包括反应室, 供气系统                             |
| DIFF           | Diffusion                                                               | 扩散, 可以长膜 <br/> 将掺杂源, 掺杂物和晶圆一起进行高温处理                                           |
| DN             | Defect Notes                                                            | 缺陷记录                                                                                              |
| DVID           | Data Variable ID                                                        | 在固定的时机, 伴随着机台事件才能查询出值, 动态                                                        |
| EPI            | Epitaxial                                                               | 外延层生长衬层, EPI-Wafer                                                                             |
| FMB            | Fab Monitoring Board                                                    | 监控面板                                                                                              |
| FT             | Final Test                                                              | 针对封装后的芯片的测试 <br/> 目的是剔除封装有问题的芯片, FT 之后就可以包装出货了                      |
| GEM            | Generic Model for Communications and Control of Manufacturing Equipment | 通用设备模型 <br/> 定义了通过通信链路所能看到的半导体设备                                             |
| HSMS           | High-Speed SECS Message Services                                        | 用 TCP/IP 协议, 用网口作为通讯口                                                                      |
| IMP            | Implant                                                                 | 离子注入金属膜                                                                                        |
| LDRQ/UDRQ/UDCM | load request / unload request / unload complete                         |                                                                                                       |
| MC             | Management Control                                                      | EAP 管理工具                                                                                          |
| METAL          | metal-semiconductor (MS) contact                                        | 金属介质沉积                                                                                          |
| OHB            | Over Head Buffer                                                        | 空中存储装置                                                                                          |
| OHT            | Overhead Hoist Transfer                                                 | 天车搬运系统                                                                                          |
| OOA            | On-Orbit Assembly                                                       | 在轨组装, 打包                                                                                        |
| OOC            | Out of Cotrol                                                           | 管控线 [-99.5, 100.5]                                                                                 |
| OOS            | Out of Specification                                                    | 规格线 [-99, 101]                                                                                     |
| PPID           | Process Program ID                                                      | 物理气相沉积                                                                                          |
| PR             | PhotoResist                                                             | 光阻                                                                                                  |
| PVD            | Physical Vapor Deposition                                               | 物理气相沉积                                                                                          |
| PW             | Product wafer                                                           | 产品晶圆                                                                                              |
| RC             | RCP_CHANGE                                                              | 配方变化后, 需要 Season 进行测试                                                                      |
| RI             | RCP_IDLE                                                                | 配方无变化, 闲置时间也需要放 Season 进行测试                                                          |
| RPTID          | Report ID                                                               | 可以自定义, 一对一, 一对多                                                                            |
| RSP            | Reticle Pod                                                             | Carrier 的一种, 用于防止 Reticle                                                                      |
| RTP            | Rapid Thermal Processing                                                | 退火, 快速热处理                                                                                      |
| STK            | Stocker                                                                 | 晶圆盒储存库                                                                                          |
| SUP            | Support                                                                 |                                                                                                       |
| SVID           | Status Variable ID                                                      | 可以在任意时刻都可以查询状态 <br> Temperature, Chamber, Clock, CJSpace, PortAccessNode, Control State |
| WAT            | Wafer Acceptance Test                                                   | 晶圆可接受测试                                                                                        |
