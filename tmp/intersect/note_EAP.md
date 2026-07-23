### EAP

#### 仅上扬独有的功能(未纳入交集)
- 支持连接多种数据库, 如 Oracle、PostSql 等.
- 机台事件/系统信息通过 ini 文件配置; 设备初始化及工艺前校验模块的配置管理.
- 工艺后校验: 工艺后 Mapping 检查、正常工艺晶圆数量校验、设备参数 (SV/EC/DummyStatus) 校验.
- 下 Job 方式含 By Recipe(赛美特仅覆盖 By Lot/Batch/Wafer 粒度).
- 特殊流程适配: 无 Load Port、文件解析等特殊流程的安全生产控制与 UI 客制化; MOCVD、Bond、Debond 特殊工艺设备的安全生产控制流程.
- 支持多线程锁.
- 设备框架类型中的 Metrology、Photo Inline.
- EAP UI: PDA (安卓) 移动终端 APP UI; UI 界面可查询 300 条数据; 按设备和时间生成日志文件; 消息格式与消息颜色设定.
- 日志文件路径配置、定期自动压缩(时间可配置).
- 同步 MES 账户进行用户验证、用户信息获取及权限验证.
- 上报 MES 设备 PMS Parameter 信息、Wafer 的 T7Code.
- 专项设备作业: Sorter Job (含 Split/Merge 等 Sorter Action)、Bonding/Debonding Job、MOCVD Job、NPW 相关操作 (Dummy In/Out、Monitor Start/End、Clean Start/End).
- 异常时请求 MES 切换设备状态.
- RMS 校验按 By LotType/StepId 判断, 可通过配置文件配置.
- 跨平台运行 (Windows, Linux), 客户端兼容 Windows 10 x86/x64 及以上.
- 高可用与性能: 双活、压力测试报告、满产负荷 15K 及量化 Performance 指标 (SECS 通信 <100 毫秒, Recipe 校验/查询 <2 秒, 进出站 <3 秒, 数据收集 <0.5 秒/批 等).
- 开发与管控: 成熟开发语言 (C#、Java), 开发测试部署管控流程, EAP 源代码管理与提供.
- EAP 和 RMS 服务器异常处理流程与恢复 SOP.
- 文档与培训(开发文档、操作/运维文档、API 文档、各类测试文档、面向 IT 与用户的培训).
- 项目管理方案与项目追踪.
- 消息中间件具体产品: TibcoRV, RabbitMQ, RocketMQ 等.

#### 仅赛美特独有的功能(未纳入交集)
- GEM 能力明细: Communication/Control/Processing 三类状态机, S1/S2/S5/S6/S7/S10 等常用 Stream, Remote Command (START/STOP/PAUSE/RESUME/ABORT) 及 ACK 处理, SV/DV/EC 变量采集, Alarm Set/Clear 成对上报.
- 通讯能力明细: 大报文处理, 通讯超时与异常恢复; Serial, TCP_SECS1, UDP, PIPE 等接入方式.
- E84/E87 标准流程明细: Carrier 到达, ID 验证, SlotMap 验证, Proceed, Complete, Release, CarrierOut.
- 300mm LoadPort, FOUP/FOSB 的自动/手动模式控制.
- Port Auto/Manual 状态、Chamber 状态同步.
- FOUP/Cassette 优先级控制.
- Port/Chamber/Recipe 路径配置.
- 校验不匹配时退 Port 处理.
- Buffer 管控及 Cassette 进出 Buffer 信息上报; Wafer 进出 Chamber 信息采集及 Wafer History 采集.
- 光罩 (Reticle) 管理: Load/Unload, Reticle Library 状态展示, 使用次数采集, IRIS 检测数据上报, 光罩预约及 Run 货前状态验证.
- 与 AMS, PMS, AMHS, RCM 等系统集成.
- 数据采集方式明细: TCP/IP, File, Database, FTP 等; 采集开关配置.
- RMS 协同中的版本校验; Run 货前 RecipeID 存在性校验; 当前 Recipe 信息展示.
- OUI 中英文消息; 手动指令发送和异常处置; 设备、物料、错误信息查询.
- 运维: EAP 远程 Start/Stop/Restart, Code Version 查看, 日志查看; 远程部署, 版本比对, 预约升级; Pilot 验证, 跨环境同步; 部署与操作审计.
- 日志定时备份和清理; 第三方监控接入.
- 模板管理: 模板库内置模板明细 (Furnace, Wet, CarrierExchange, FoupInspection, ReticleStocker, ReticleInspection, N2Purge, 开盒器等) 及模板复用指标 (503 台设备中 390 台 NewType).
- 测试验证: NewType 模板开发, Lab Test, Fab Test, 回归测试和量产切换验证.

#### 与原文不一致处(⚠️ 标记说明)
- 2.1 流程配置: 引用赛美特原文时删除"Port/Chamber/Recipe 路径配置"(仅赛美特明确), 保留两方均覆盖的异常流程、动态事件配置、Inline 多设备配置.
- 2.1 作业粒度控制: 合并自上扬"支持多种下 Job 方式, By Lot, Batch, Wafer, Recipe 等"与赛美特"BatchJob/Wafer 级流程控制", 删除仅上扬明确的 By Recipe, 交集取 By Lot/Batch/Wafer 粒度.
- 2.1 设备框架/模板: 合并两方表述, 仅保留两方均覆盖的框架/模板类型 (Fixed Buffer, Internal Buffer, Sorter, FOUP Clean); 上扬另有 Metrology、Photo Inline, 赛美特另有 Furnace, Wet 等更多模板, 均列入独有功能.
- 2.3 载具类型适配: 合并改写, 交集取 FOUP/OpenCassette 载具支持; 赛美特的 300mm、FOSB、自动/手动模式及上扬的无 Load Port/文件解析流程为各自独有.
- 2.4 异常处置: 引用赛美特原文时删除"退 Port"(仅赛美特明确), 保留两方均覆盖的 Hold Lot 与报警处置.
- 3.2 Recipe 校验: 合并改写, 交集取 Recipe 比对/一致性校验能力; 上扬的 By LotType/StepId 可配置校验与赛美特的版本校验为各自独有.
- 3.3 数据处理配置: 合并自上扬"量测数据过滤与数据转换"与赛美特"数据格式转换与采集开关配置"; 上扬的量测数据位置配置与赛美特的采集开关配置为各自独有.
- 3.3 数据上报: 引用赛美特原文时删除 AMS(仅赛美特明确), 交集取向 FDC, MES 上报.
- 3.4 接口方式: 合并自上扬"TibcoRV, WebService, RabbitMQ, RocketMQ 等主流中间件"与赛美特"Message Bus, REST/Web API, TCP/IP, DB/File 等接口方式", 交集取 Message Bus 消息中间件与 WebService/Web API; 上扬的具体中间件产品与赛美特的 TCP/IP, DB/File 等方式为各自独有.
- 4.1 权限管控: 合并改写, 交集取账号权限配置与管控; 上扬的同步 MES 权限与赛美特的中英文消息为各自独有.
- 4.1 消息记录: 合并改写, 交集取 UI 消息记录查询; 上扬的 300 条上限/日志文件生成/颜色格式与赛美特的设备、物料、错误信息查询为各自独有.
- 5.1 日志文件管理: 引用上扬原文时仅保留"根据时间和大小为每台设备创建"(赛美特同样有按时间/大小切分), 删除仅上扬明确的路径配置与自动压缩; 赛美特的定时备份清理为独有.
- 数值差异说明: 两方未出现"同一能力均给出具体数值但数值不同"的情况; 上扬的性能指标 (15K 负荷, <100 毫秒等)、UI 300 条, 赛美特的 390/503 台模板复用均为单方独有数值, 已列入各自独有功能.

#### 原文来源选择说明
- 交集 bullet 以上扬原文为主: 上扬对跑货流程控制、MES/RMS 整合、日志、模拟器等交集能力的描述更具体、要素更完整(如状态枚举、信息项清单、动作清单), 故优先选用. 设备通讯协议、采集内容、Scenario 图形化配置等少数要点赛美特表述更准确完整, 选用赛美特原文. 凡两方文字需合并或删减才能准确表达交集处, 均已加 ⚠️ 并在上方说明.
