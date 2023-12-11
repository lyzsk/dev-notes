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

| Abbreviation | Full form                         | Desc               |
| :----------- | :-------------------------------- | :----------------- |
| MES          | Manufacturing Execution System    | 制造执行系统       |
| AMS          | Alarm Management System           | 报警管理系统       |
| AMHS         | Automatic Material Handing System | 自动物料搬送系统   |
| ECS          | Equipment Constraint System       | 机台限制(卡控)系统 |
| EDC          | Equipment Data Collection         | 量测设备数据采集   |
| MCS          | Material Control System           | 物料搬运系统       |
| PMS          | Preventive Maintenance System     | 预防性保养维修系统 |
| RMS          | Recipe Management System          | 配方管理系统       |
| RTMS         | Reticle Management System         | 掩膜管理系统       |
| PRMS         | PhotoResist Management System     | 光刻管理系统       |
| WIPM         | Wafer in Process Management       | 晶圆过程控制系统   |

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
| METAL        | metal-semiconductor (MS) contact | 金属介质沉积                                                              |
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

[EAP]: #eap
[MES]: #mes
[SPC]: #spc
[RTD]: #rtd
[YMS]: #yms
[RPT]: #rpt
[WPH]: #wph
