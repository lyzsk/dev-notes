### FDC

#### 仅上扬独有的功能(未纳入交集)
- 系统设置类: 人员登录验证, 菜单自动隐藏/显示, 个人信息展示, 密码修改, 帮助文档, 多语言 (中文/英文)
- 用户信息维护 (FAB 部门下输入/导入用户), 用户层级维护 (岗位从属关系及区域关系)
- 设备建模: FAB/AREA/部门信息维护, 设备类型及腔体结构定义, 设备台账与腔体启用/暂停
- 参数采集配置: SVID/DVID 导入导出与同型设备同步, 通用采集模板与 KEY Parameter 设定及验证, 模板与腔体绑定及 SVID 自动同步, 设备事件维护与 Process Event 绑定, Context 维度 (Lot ID/Carrier ID 等) 与配方信息维护
- 采集计划与数据接入: 按事件/时间/数据点定义采集起止的 Data Collection Plan, Trace/Event/Alarm/Facility/External Sensor 多源采集, 差异化采样频率, Non-Wafer/Non-Process 数据收集, SECS/GEM, Interface A, OPC 协议及 File/DB/FTP/TCP 非标接入, Polling/Trace 采集模式, 断流报警, PT 中间件数据分流
- Context Group 分组与优先级, UVA 主页面 (最近打开模型)
- 按时间/Count 的前后时序数据过滤
- 多模型并行运行, 历史数据模拟
- 模型修改履历查看与版本对比
- MVA 具体算法列举 (PCA, Q 统计量, Hotelling T2, Diagonal HT2)
- Lot/Wafer 加工履历追溯, 参数维度 Lot/机台/腔体对比分析与多对象叠图
- 实时监控图表 (牛眼图, 计量图, 控制限制/规格限制判定)
- UVA 模型 Stats 趋势追溯与 Raw Data 确认
- 全厂机台状态实时总览
- 报表订阅与定时推送, 按部门的邮件组配置
- 软件不停机升级发布
- 图表工具交互: 缩放, 注释标记, Context 筛选, 双 Y 轴, Overlay, 辅助线, 图表定制, 时间压缩, CSV 导入图表工具

#### 仅赛美特独有的功能(未纳入交集)
- UVA 模型激活签核机制
- Wafer 筛选监控 (如 First Wafer Monitoring)
- 向导式快速建模 (基于 Sensor 历史数据建议统计方法)
- AI 算法建模, Model 算法二次开发 (提供 Sample Code)
- 参数化窗口 (窗口随当前 Run 的 Context 动态调整, 自动匹配 Main Step), Cycle Step 批量监控 (共用规格)
- 滑动统计算法 (Moving Average, Moving Range 虚拟 Sensor), Raw Data 非线性监控
- 跨片统计 (连续多片 Wafer 间统计值计算, Lot ID 切换重置, 含 EWMA/Slope 等), 步骤时间累加报警, 工艺时间异常侦测 (未上报 End 事件时经 OCAP 报警)
- 规格体系: Fixed/Delta/百分比 Spec, 按 Tool/Chamber/Recipe/Step/Context 多维规格设定, 批量自动限值 (Run List 抽样), 5 种 Sigma 算法及 Sigma 倍数定制, 训练样本组管理 (PerProcessType/PerTool/PerChamber), 规格种类 (N-Σ, Δ, 删除百分比, 移动平均目标值), Target Bias, MeanAgg 算法扩展, 50 种基础计算公式明细
- Alarm Rule 仿真测试, 模型级别报警抑制
- AMS 集成的 SMS/Phone/Wechat 报警方式 (Email 已纳入交集)
- MES 联动处置 (Hold Lot/Hold Tool/Hold Chamber/Hold Recipe), MES 与 EQP Chamber Mapping
- 重复警报过滤, 按周/月/季度/年汇总 FAB/Module 警报, UVA 设置详情与覆盖率统计
- Dashboard 大屏 (多数据源接入, 轮播配置, 快速开发)
- 扩展算法: Java Method/Jar/Class 实时不停机扩展 API, 脚本式算法, 可视化模板编辑
- 图形化工作流平台 (低代码流程定制, 第三方接口, 数据库/外部 WebService 访问)
- Spring Cloud 微服务框架, 服务发现注册/负载均衡/故障切换, 分布式配置
- 数据库架构: RAW/ROUTE/ADMIN 数据库分离与异构数据库, PostgreSQL/SQLServer 支持, 开放 DB Schema, Rawdata 分表/文件存储
- 按钮级别与数据层细粒度权限, 日志文件大小/路径参数配置

#### 与原文不一致处(⚠️ 标记说明)
- 1.7 模型复制: 截取上扬原 bullet "支持对模型的控制窗口进行统一管理, 可以进行集中修改, 并支持对模型进行快速复制" 中的末句; 前半部分 (控制窗口统一管理, 集中修改) 赛美特未提及, 故仅保留交集部分.
- 2.3 报警通知: 合并改写. 上扬原文为 "根据部门建立邮件组并关联用户及设备推送邮件", 赛美特原文为 "集成 AMS 支持 Email/SMS/Phone/Wechat 多种报警方式"; 两方交集仅为 Email 报警通知, 故改写为 "支持通过 Email 推送报警通知", SMS/Phone/Wechat 列入赛美特独有.
- 2.4 数据质量检查: 合并改写. 上扬侧重 "采集点数不足时进行报警推送", 赛美特侧重 "Sensor Data Quality 不合格时跳过部分模型监测"; 两方交集为 Data Quality 检查机制本身, 处置方式不同, 故合并为 "质量异常时报警或联动处理".
- 3.5 数据导出: 截取上扬原 bullet "具备导出数据到 Excel 的功能;支持把 CSV 数据文件导入到 FDC 图表工具中进行图形化展示和分析" 的前半句; CSV 导入图表工具为上扬独有.
- 数值/表述差异 (纳入交集但未标 ⚠️): 2.2 分级报警的等级命名两方不同, 上扬为 Warning/Critical/Outlier, 赛美特为 Warning/Alarm/Outlier 且每个等级可设置不同规格和对应 OCAP; 3.2 统计计算两方能力粒度不同, 赛美特明示 50+ (另处为 50 种) 内置统计算法, 上扬以 Min/Max/Count 手动汇总及 CP/CA/CAP 计算形式提供且未给出数量, 上扬的 CA/CAP 与赛美特的 Cpk 命名口径不同.

#### 原文来源选择说明
- 交集 bullet 以上扬原文为主, 因其功能描述通常更完整, 结构层次更清晰, 且多数交集能力 (建模, 窗口, 虚拟参数, 告警, 报表统计, 系统对接) 在上扬文档中有独立成条的表述. 赛美特原文在统计算法库 (明确数量), 图表联动, 收藏功能, 平台监控等表述更具体, 更贴合集市场景的条目中被选用. 凡单方原文含有另一方未覆盖的从句且无法直接引用时, 采用截取或合并改写并加 ⚠️ 标记.
