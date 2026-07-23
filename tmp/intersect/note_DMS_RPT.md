### DMS

#### 仅上扬独有的功能(未纳入交集)
- 时间维度查询支持相对时间与绝对时间两种时间模式
- 高级过滤具体条件: Defect Density, Scan Area, Defect Count, Defective Die Count, Has Cluster, Has Repeat
- Lot, Wafer 及 Layer 级别的 Map 分析; Defect Map By Class 查看
- Map 显示参数设定 (标题、大小), Defect Size 调整, 快速过滤 (Show/Hide Defect Clusters, Show Adder Defect Only, Show Images Only, Show Repeat Only, Manual Classified Only)
- Defect 备注的添加、删除
- Repeater Analysis 重复缺陷分析 (Die 及 Reticle 两种分析模式)
- Cluster 重算 (用户自定义条件重新计算、显示及修改 Cluster 信息)
- 在 Map 上导出 Txt Map
- Gallery Map 透视分析
- 两片 Wafer Compare 的 Sum Up 模式; Defect Kill Yield Ratio 分析与报告
- Small Die 功能
- By Lot/Wafer Cross WIP 分析
- DSA 按 Layer 过滤及自定义 Ignore Layer
- Defect Image 自定义文本显示 (一键展示/隐藏), Image 旋转, Image Copy, 双击放大切换, 单选/多选/连选与 Map, Die 交互
- Chart 的 Split 分析, Lot/Wafer/Layer 层级绘制, 运算公式 (Sum, Average, Max, Min, Median, Std), 表格操作 (Copy, 列自定义展示/隐藏, 删除行, 升降序)
- 基本要求: 多类型数据 (History/WIP, WAT, CP, Metrology (EDC), Event, FT, Defect, Defect Image) 收集处理, 数据可视化, 缺陷识别分类运算, 自动生成 Excel, PPT 格式报告
- 数据加载程序: 多源加载 (文件/MES/DB), Loader 开发平台, 详细日志服务, 加载程序自动计算 DSA, Defect Classification 维护 (增删改, 从 KLARF 导入定义), ADC Defect 分类结果整合

#### 仅赛美特独有的功能(未纳入交集)
- 查询结果显示模式: 列表、行列定义等多种显示模式
- 指标查询: 缺陷分类结果以及 DDC/DDP 等指标查询
- 原始数据查询与用户自定义图形显示条件; 查询结果汇出为 Excel, CSV
- 抽样分析 (多图显示模块) 及自动缺陷抽样 (可配置多种多重条件)
- 芯片资讯与芯片边界可选择是否显示
- 一键复制 Map 至剪贴板
- 统计图显示条件调整 (X/Y 轴条件, 开关缺陷是否有分类或缺陷尺寸等)
- 缺陷照片多种显示模式 (列表、行列定义、按条件排序等); 同一颗缺陷不同照片堆栈显示
- 缺陷晶圆图比较的差异着色 (按后测增加、后测消失、前后测有差异等条件改变缺陷显示颜色)
- DSA 参数调整与结果汇总: 缺陷位置误差范围调整, 晶圆层级汇总与相关性汇总表, 命中缺陷对照表

#### 与原文不一致处(⚠️ 标记说明)
- 1.2 DSA 分析: 两方均仅在总述层面描述 DSA 能力, 无独立 bullet (上扬总述为"支持缺陷根源分析运算, 并可通过 Layer 过滤与自定义配置灵活控制分析范围", 后半 Layer 过滤为上扬独有; 赛美特总述为"支持缺陷根源分析 (DSA) 的参数调整与结果汇总", 参数调整与汇总为赛美特独有). 取上扬总述前半句改写为 bullet 并补充英文缩写 DSA, 仅表达两方共有的 DSA 运算能力.
- 1.3 多图显示: 合并赛美特第 3 节总述"支持多片 Wafer Map 的同屏显示"与其 bullet"排布调整: 支持自由调整显示的行列数量"为一条, 因赛美特无单独完整描述该交集功能的 bullet, 上扬对应的 Gallery Map bullet 含独有的透视分析.
- 1.5 图表类型: 上扬图表类型为 Trend, BarStack, BoxPlot 及 Split 分析, 赛美特为趋势图、条形图、堆叠条形图、面积图、散点图、盒须图, 两方图表类型集合不同, 取两方共有类型 (趋势图, 堆叠条形图, 盒须图) 改写, 各自独有图表类型按规则不再单列.

#### 原文来源选择说明
- 数据查询与过滤部分选用赛美特原文, 因其 bullet 粒度与两方交集吻合, 上扬对应 bullet 中混有独有的高级过滤条件; 时间模式、DSA、Klarf 读取同理.
- Map 交互部分按"最准确、最具体、最完整"原则混合选取: 框选、叠图、Zone、Send to Review 选上扬 (描述更具体且含英文术语), 显示控制、测量工具、联动显示、前后测对比选赛美特 (上扬对应 bullet 含有独有细节, 如 Sum Up、图像链接).
- 引用时将赛美特原文中的全角逗号统一为半角逗号", ", 分号后补空格, 文字内容未改动.

### RPT

#### 仅上扬独有的功能(未纳入交集)
- Report 数据架构: Report 数据与生产数据隔离, 通过 ETL 定时抽取转换并存储至 ODS
- 前台展现工具与多格式导出: 所有报表可导出为 Excel, PDF, Word 等格式, 支持各种常见图表
- W/O Info 工单 (Work Order) 信息报表
- FineReport 数据接入与填报: 多数据源关联, Excel 导入, 数据录入, 数据多级上报
- FineReport 报表设计: 多 Sheet 报表设计, 组件式设计, 多分页设计, 聚合报表, 参数查询界面, 模板助手
- FineReport 图表与可视化: H5 动态图表, 扩展图表, 图表高级交互, 地图, 可视化看板
- FineReport 分析能力: 增强分析统计模块, 数据分析, Alpha Fine
- FineReport 运行与运维: 多报表运行环境, 运维平台, 决策平台, 定时调度, 打印导出
- FineReport 权限管控: 模板权限集成, 集团权限控制

#### 仅赛美特独有的功能(未纳入交集)
- Product Monthly Indices (盘点表): 按月统计投产、消耗、废碎片等指标数据
- Target Report: 维护各个报表的关键指标公式
- Bullet Hot Lot Report: 跟踪优先级为 1/2 的 Lot, 显示生产状态、运行/等待/Hold 时长并以甘特图呈现
- View Lot History Report: 按工艺流程顺序图表展示产品历史数据 (PRT, PQT, PHT 及累计生产时间)
- Slow Lot Report: 展示全产线长时间停滞的 Lot
- Q Time Report: 展示超出 Q-Time 且尚未结束的 Lot
- Rework Lot Report: 返工 Lot 相关信息
- Scrap Terminate Report: 状态为废料或终止的 Lot 及每个 Lot 的晶圆数量
- RRC Summary Report: 按时间段汇总 RRC 数据
- SRC Summary Report: SRC 信息审查
- Operator Production By Day Report (作业员产量表): 按站点查看每班次进出站数量
- EQP Index Report: 按区域和时间区间跟踪 Fab 机台生产表现
- OEE 报表: 机况综合情况, 设备利用率, 设备加工情况和加工效率
- Carrier Status Report: Carrier 状态汇总及超过清洗周期未清洗的 Carrier
- Reticle Report: By Tech & Prod 展示 Reticle 状态分布
- OCAP Report: OCAP 清单及对应处理履历和异常值数据

#### 与原文不一致处(⚠️ 标记说明)
- 无. RPT 交集所有 bullet 均为两方原文原样引用.

#### 原文来源选择说明
- 上扬 RPT 的 WIP Report, EQ Report 等仅有总述无具体 bullet, 其泛述覆盖了赛美特对应的具体报表 (按规则 1 一方要点对应另一方多个要点), 故具体报表条目选用赛美特原文.
- Cycle Time 与 Hold Info 上扬有更完整具体的 bullet, 选上扬原文; 两方 Hold Lot 报表内容侧重不同 (上扬列 Release 人员/原因/时间, 赛美特列持有比率/时长), 均属 Hold Lot 明细能力, 取更详细的上扬原文.
- 引用时将赛美特原文中的全角逗号统一为半角逗号", ", 文字内容未改动.
