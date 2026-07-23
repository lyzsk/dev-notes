## FDC Function List

### 1. 故障侦测 (Fault Detection)

#### 1.1 建模与 Context 配置

支持 UVA/MVA 建模及基于 Context 的精细化监控对象配置.

- **Context 标签绑定**: 支持建模配置条件时加入用户自定义信息标签 (MES Context 字段), 并可与工艺绑定.
- **签核机制**: UVA 模型激活时支持签核功能.
- **Wafer 筛选监控**: 支持依据 Context 设置规则筛选所需监控的 Wafer 进行 UVA 模型设置, 如 First Wafer Monitoring.
- **向导式建模**: 提供向导式快速建模工具, 可基于 Sensor 历史数据建议使用的统计方法.
- **MVA 多变量分析**: 支持 MVA 多变量分析模型.
- **AI 集成建模**: 支持利用 AI 算法建立监控模型.
- **二次开发**: 支持 Model 算法二次开发, 提供 Sample Code.

#### 1.2 数据窗口与虚拟 Sensor

支持灵活的数据窗口划分与虚拟 Sensor 生成, 提升监控信噪比.

- **多维窗口划分**: 数据窗口可通过 Step, Recipe Time, Sensor 规则, Offset 划分; 支持通过连续多点上升/下降规则划分; 支持对 Recipe 任意一段区间进行监控.
- **参数化窗口**: 窗口定义支持参数化, 参数可随当前 Run 的 Context 变化而调整, 例如窗口自动匹配当前 Recipe 的 Main Step.
- **Cycle Step 批量监控**: 支持在 Cycle Step 中批量检查 Main/Sub-step, 可将 Cycle Step 的所有 Main Sub-step 设定成一个窗口, 共用一个规格.
- **虚拟 Sensor 生成**: 提供 Function 使 Raw Data 通过计算生成虚拟 Sensor, 支持表达式方式, 并可通过客制新方法扩充 Function.
- **滑动统计算法**: 提供 Function 使 Raw Data 和指标值通过前后多点运算生成 Moving Average, Moving Range 等虚拟 Sensor, 并支持无缝扩展.
- **非线性监控**: 提供 Raw Data 的非线性监控.
- **噪音过滤**: 窗口内任意 Sensor 支持灵活过滤功能, 可设置过滤掉噪音数据.

#### 1.3 实时侦测与跨片统计

支持制程中的实时异常侦测与跨片统计计算, 实现异常早发现早处置.

- **跨片统计**: 支持连续多片 Wafer 之间的模型统计值计算 (如连续两片之间 Moving Range), 并在 Lot ID 切换时重置; 统计算法包括 Mean, Max, Min, Sum, Slope, EWMA.
- **步骤时间累加**: 支持对工艺中某个步骤的时间进行累加, 超过规格后报警并可复原.
- **Data Quality 联锁**: Sensor 的 Data Quality 检查不合格时, 可跳过部分模型的监测.
- **长制程实时检查**: 提供在长时间制程中及时检查规格的解决方案, 避免制程结束时才发现问题.
- **工艺时间异常侦测**: 支持发现工艺时间异常, 例如 Wafer 工艺过程中未上报 End 事件时, 可经配置及时发现并通过 OCAP 报警.

#### 1.4 规格体系与自动限值

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

#### 1.5 报警规则与联动处置

支持自定义报警规则, 规则仿真与外部系统的闭环联动处置.

- **SPC Alarm Rule**: 支持 SPC Alarm Rules 及自定义 Alarm Rule; 支持基于算法, 参数设定 Alarm Rule 模板; 单个模型支持设置多个 Alarm Rule.
- **Rule 仿真测试**: 支持 Alarm Rule 的仿真测试, 评估新 Alarm Rule 的执行结果.
- **模型级别抑制**: 模型可设置级别, 高级别模型报警后, 低级别模型不再报警.
- **AMS 报警集成**: 通过集成 AMS 系统支持 Email/SMS/Phone/Wechat 多种报警方式.
- **MES 联动处置**: 通过集成 MES 支持 Hold Lot/Hold Tool/Hold Chamber/Hold Recipe.
- **Chamber Mapping**: 支持设置 MES 与 EQP Chamber 之间的 Mapping 关系.

### 2. 报表 (Reporting)

支持多维度的报警统计查询与 UVA 配置分析报表.

- **违规详情**: 警报中包含详细的违规信息.
- **重复警报过滤**: 经由集成发送外部系统时, 过滤 Run 中重复警报.
- **Alarm 报表模块**: 机台 Alarm 信息单独呈现在 FDC Report 模块中; 支持按周, 月, 季度, 年汇总 FAB, Module 的警报数量; 支持分级汇总 Tool/Recipe 的警报数量.
- **多维统计**: 支持 By FAB, By Module, By Tool, By Recipe, By Indicator, By OOC, By Lot 统计.
- **报警查询**: 支持按照 Lot 查询警报; 支持按照警报动作查看警报; 支持查看 UChart 中报警点分布.
- **UVA 配置分析**: 支持按照机台腔查看 UVA 设置详情列表; 支持查看 UVA 设置覆盖率统计图表.
- **图表联动**: 查看 UChart 时支持点击 Link 到 TChart; 查看警报记录列表时点击单条可直接在右侧弹出 UChart 绘图.
- **数据导出**: 所有列表支持数据导出.
- **收藏功能**: 支持收藏当前页面查询条件, 在收藏夹列表中点击收藏标题后进入首页查看收藏内容.

### 3. Dashboard (可视化看板)

支持生产数据大屏展示与灵活可配置的看板开发.

- **大屏展示**: 提供 Dashboard 工具, 支持生产数据的大屏展示; 支持业务监控和风险预警展示; 支持庞杂数据的可视化展示.
- **快速开发**: 看板支持快速开发, 支持数据可视化配置.
- **多数据源**: 看板支持多数据源配置, 支持 API, SQL, 数据源接入.
- **轮播配置**: 看板支持轮播样式自定义, 轮播切换样式与轮播时长均可配置.

### 4. 扩展算法 (Algorithm Extension)

支持统计算法的在线扩展与脚本化开发, 无需停机.

- **内置算法库**: 默认提供 50+ 以上默认统计算法.
- **Java API 扩展**: 支持以 Java Method 扩展新的算法 API 及其他 API; 支持通过上传 Jar 或 Class 实时支持扩展 API; 支持实时不停机扩展 API.
- **脚本式算法**: 支持脚本式算法, 厂商需具备基本客制及升级脚本语法的能力.
- **可视化模板编辑**: 建立监控时支持可视化调整模板, 提供脚本编辑界面.

### 5. 图形化工作流 (Graphical Workflow)

支持拖拽式图形化工作流平台, 实现低代码业务定制与第三方集成.

- **工作流平台**: 具备图形化工作流平台, 支持基于当前流程创建新流程.
- **第三方集成**: 支持利用图形化接口定制与第三方接口能力.
- **外部访问能力**: 具备数据库访问, 访问外部 WebService 等能力.
- **业务接口实现**: 支持利用工作流实现 Query Lot Process Context 接口业务.

### 6. 系统 (System Architecture)

#### 6.1 微服务架构与平台

支持基于 Spring Cloud 的微服务架构, 保障高并发, 高可用与易扩展.

- **微服务框架**: 基于 Spring Cloud 微服务框架封装, 平台设计灵活可扩展, 可移植, 可应对高并发需求; 支持灵活的可配置性和拓展性.
- **高可用机制**: 基于服务发现和注册实现自动负载平衡和故障切换; 基于分布式配置简化跨多环境和服务的配置管理, 提高系统一致性.
- **平台监控**: 提供系统平台监控工具, 对 OS 和运行程序全方位监控和预警.

#### 6.2 数据库与存储

支持多数据库选型与开放的数据架构.

- **数据库分离**: 微服务化构建 FDC 核心程序, 支持 RAW, ROUTE, ADMIN 数据库分离, 支持异构数据库.
- **多数据库支持**: 除 Oracle 外, 系统支持 PostgreSQL 和 SQLServer 作为 FDC 核心业务数据库.
- **开放 Schema**: 开放 DB Schema.
- **操作系统**: 支持 FDC 核心应用服务运行于 Linux/CentOS 操作系统.
- **Rawdata 存储**: 支持 Rawdata 分表存储, 文件存储.

#### 6.3 权限与运维

支持细粒度权限管控与灵活的运维配置.

- **角色管理**: 提供角色管理, 支持自定义角色.
- **细粒度权限**: 提供按钮级别权限控制及数据层权限控制.
- **日志配置**: 支持日志文件的大小, 路径等参数可配置.
