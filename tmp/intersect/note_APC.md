### APC

#### 仅上扬独有的功能(未纳入交集)
- 量测数据补点及超过规格 (OOS) 的处理流程(平台数据收集)
- Chamber level 反馈控制的平台级声明(上扬 1.2 反馈粒度)
- 控制器输出管控的 MTT 方式及 OOS 后自定义处理流程
- 设备 PM 处理流程、设备内置 Rework 功能 (CMP)、UI 设定 Lot/Product 只跑 Special R2R flow
- 通过离群批次清单实现离群批次 (Lot) 过滤
- 控制器重置功能(设备 PM 后手动重置或外部事件驱动)
- 完善的权限管理机制和数据级权限管理及历史记录
- 报表功能(全面报表、自定义报表字段及图形展示)
- 性能维护: 数据清理及恢复机制, 支持多产线同时使用
- 系统管理工具和性能监控报警机制(系统运维向)
- Litho OVL: Sub Recipe 指定及 Chuck to Chuck
- Litho: 量测数据 site 有效性检查、量测数据过滤与验证, 量测按 Wafer Process Run 反馈
- CMP: Chamber/Header/Platen 级别前馈/后馈
- CMP: Monitor run 控制情境
- CMP: RemoveRate 控制参数
- ETCH: Chamber 级别前馈/后馈
- ETCH: Monitor run 控制情境
- WET: Lot 级别前馈
- TRIM by THK: Lot/Point level Feedforward/Feedback 及 WMA 算法
- Non-Function: OOB 分阶段上线计划与方案
- Non-Function: Non-stop Migration 及正式环境 PiRun 验证发布流程
- Non-Function: 明确的 32bits & 64bits 及 Windows XP/7/8/10/11 版本支持
- Non-Function: 明确性能指标(99% 处理 5 秒内、复杂事务不超过 60 秒、故障恢复不超过 10 分钟)

#### 仅赛美特独有的功能(未纳入交集)
- 完全国产化、自主可控、自主知识产权
- 计算模型版本控制
- 多步骤的同一 Parameter 同时控制
- Linux 平台部署
- 多数据库支持 (SQL Server, Oracle, MySQL, Pg SQL, Vastbase G100, Open Guass)
- 具体消息总线类型 (Tibco RV, Raven Cast, H101, Web API, Rabbit MQ)
- 登录接入 OA 验证、多浏览器访问
- 图形化 workflow 开发及图形组件编辑(快速定位、多选/全选、复制、整体移动)
- 机台下货参数的配置
- Litho OVL: HOPC/iHOPC 高阶参数
- Litho: Thread 状态控制, FEM 下货参数支持
- Litho: 反馈有效批次控制, 按 Lot Type 反馈
- Litho OVL: wafer 数据有效性检测, Tool dedication 检查, Simulate 功能, 曝光记录手动补录, Wafer 级别前层对准
- CMP: 研磨时间+分区压力控制参数, 研磨量、分区厚度输出
- ETCH: ESC Chuck Temperatures 控制参数
- ETCH: 基于单 output 的多个 zone 的计算
- ETCH: Hydra uniformity system (raw metro data and X/Y coordinates), first wafer 效应处理
- Furnace Controller 整个模块(MIMO MPC, Batch 级反馈, Zone 反馈, Kokusai/Tel 机型等)
- Thin Film Controller 整个模块(MIMO MPC, Dep Time/RF Power 控制等)

#### 与原文不一致处(⚠️ 标记说明)
- 1.2 前馈反馈控制: 合并两方文字改写. 赛美特原文含"多步骤的同一 Parameter 同时控制"(其独有), 上扬原文含"Chamber level 反馈控制"(其独有), 交集仅保留两方共有的 Lot/Batch/Wafer 级别前馈/后馈及根据前值选择 Recipe.
- 1.4 系统集成: 合并两方文字改写. 上扬列举 MES/SPC/FDC/RMS/Dispatching/Alarm/Workflow 等具体系统, 赛美特列举具体消息总线, 交集为"与周边系统集成/通讯"这一共同能力, 故概括表述.
- 2.1/2.2 Litho 反馈控制: 合并两方要点改写. 两方共有"量测数据有效性检查、反馈有效期控制、根据最近的 run 货值计算返工 Lot 下货值"; 上扬另含按 Wafer Process Run 反馈, 赛美特另含反馈有效批次控制、按 Lot Type 反馈, 均未纳入.
- 2.2 Chuck Dedication: 从两方更大的要点中抽取改写. 上扬原文为"支持 Chuck Dedication, Sub Recipe 指定及 Chuck to Chuck"(后两项独有), 赛美特将其嵌于 OVL 其他功能长要点中.
- 3.1 CMP 控制参数: 合并改写, 两方表述存在差异——上扬为"控制参数为研磨时间、RemoveRate, 输出为 Thickness", 赛美特为"控制参数为研磨时间, 研磨时间+分区压力, 输出参数为研磨量, 分区厚度", 交集仅保留共有的研磨时间与厚度.
- 4.1 ETCH 控制参数: 截取改写. 上扬要点另含 Chamber 级别前馈/后馈(独有), 赛美特另含 ESC Chuck Temperatures(独有), 交集取共有的蚀刻时间、Gas Flows 与 CD/Thickness/Depth 输出.
- 7.2 操作系统: 合并改写. 上扬为"支持 32bits & 64bits, 支持 Windows XP/7/8/10/11"(仅 Windows), 赛美特为"支持 Windows/Linux 平台部署", 交集为 Windows 平台支持.

另有两处数值/表述差异, 原文引用未改写故未加 ⚠️, 在此标注:
- 7.1 高可用: 上扬明确"系统架构设计应达到 99.99% 高可用水平", 赛美特仅表述"支持集群, 具有高可用性", 无量化指标.
- 5.1 WET 控制模式: 上扬控制参数名为 WET_TIME, 赛美特为 ETCH_TIME("支持 1) 根据前量厚度选择 recipe, 2) 更新 ETCH_TIME 两种模式"), 交集引用了上扬原文.

#### 原文来源选择说明
- 两方区域控制器(Litho/CMP/ETCH/WET/TRIM)的文字高度同源, 多数要点几乎逐字一致, 选择时以"单要点内不包含对方所无的独有子项"为优先. TRIM 与平台功能部分更多选用赛美特原文, 因其要点粒度更聚焦、较少混入独有子项; Litho、CMP、ETCH 部分更多选用上扬原文, 因其要点拆分更细、描述更完整.
