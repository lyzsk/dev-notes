## SPC Function List

### 1. 基础设定

#### 1.1 数据收集

支持多源生产数据的实时采集与可靠存储, 保障数据收集的稳定性与性能.

- **多源数据监控**: 支持工艺设备数据采集 (Inline), 设备日常点检数据 (Offline), Reticle, Carrier 及厂务数据等多种数据源.
- **数据存储与清理**: 具备实时环境保存一年以上数据的存储能力, 并提供过期数据处理脚本.
- **采集性能**: Inline, Offline 数据采集系统响应时间控制在 3 秒之内.
- **非侵入式变更**: 修改 Chart 的内容对数据收集无影响.
- **特殊点排除**: 支持特殊点的自动排除处理 (可配置), 如重量, 加量, SRC 等.

#### 1.2 Chart 定义

支持灵活的 Chart 组织, 建立与管控配置, 覆盖批量操作与 Sub Chart 自动拆分.

- **树状分组管理**: 支持以树的方式按不同数据源管理 Chart, 每个数据源下可嵌套任意深度的文件夹分类组织 Chart, 并支持 Chart 在 Folder 之间移动.
- **Context 过滤定义**: SPC Chart 可根据 Context Key 自定义过滤条件, 如 [产品]+[工艺路线]+[加工 Step]+[加工设备]+[Chamber]+[EDC Plan ID] 等;母 Chart (Group Chart), 子 Chart (Subgroup Chart) 的进点过滤条件使用 Context Key 表达式定义, 支持正向和反向 (排除名单) 过滤.
- **批量建立与修改**: 支持与 MES 端 Loader 集成批量建 Chart;支持基于 Excel 批量新建, 修改 Chart, 并支持 by Pastable Attributes 方式快速修改 Chart 内容.
- **手动建立**: 提供友好快捷的操作界面方便用户手动建立 Chart.
- **数据导出**: 支持一个或多个 SPC Chart 的数据和原始数据导出功能.
- **设备与站点关联**: 支持 SPC Chart 关联到一个或多个工艺设备或 Process 站点.
- **违规告警邮件**: 支持违规告警邮件发送, 可根据违规类型 (OOS, OOC, OOW 等) 单独设置.
- **自动 Sub Chart 管控**: 支持自动分 Sub Chart 管控, Sub Chart 可继承上层 Chart 的 Control Limit 及 SPC 规则, 也可单独配置;可根据 Context 值中包含的工艺设备, Chamber, 产品, Step, 炉管管控片位置 (如 Top/Center/Bottom) 等信息自动建立 Sub Chart.
- **PM 后特殊管控**: 支持 PM 后的 Offline Monitor, Pilot Inline Measurement 及第一批 Lot 的单独 Control Limit 管控 (如两倍 Sigma).
- **离散规格过滤**: 可以定义 Chart 的离散规格, 并过滤掉离散点.
- **多类管控线**: 支持 Control/Spec/Warning Line, 并支持分别 Enable/Disable 上界线, 下界线和中心线.
- **计量型图表 (Variables Charts)**: Xbar/X Chart, Range Chart, Sigma Chart (Standard Deviation), Raw Value Chart (Trend Chart), Moving Range Chart, Moving Sigma Chart, Moving Average Chart, EWMA_M, EWMA_S, EWMA_R Chart.
- **计数型图表 (Attributive Charts)**: C Chart (不符合项), NP Chart (不合格数量), P Chart (不合格率), U Chart (平均不合格数).

### 2. 规则设定与计算

#### 2.1 SPC 规则

支持标准化判异规则与灵活的自定义扩展.

- **标准规则集**: 管制图的检查支持标准 WE Rule.
- **自定义规则配置**: 支持自定义方式配置 Rule, 如连续 n 点上升的 n 可配置.
- **二次开发**: 提供开发包, 支持 Rule 二次开发, 方便扩展.

#### 2.2 Calc Parameter 计算

支持内置公式与丰富的计算函数, 满足多参数复杂运算需求.

- **内置公式**: 支持常用内置公式, 如 Trigger-Reference[#mean], Trigger*Reference[#mean], Trigger+Reference[#mean], Reference-Trigger[#mean] 等.
- **计算函数**: 支持丰富的计算函数 (如选片选点函数, Round, Cos, Sin, Tan, Log 等), 可基于这些函数自定义公式, 支持多个参数的复杂运算.
- **结果追溯**: 计算结果可 Link 参与计算的 Sample, 方便 Check 数据的正确性.
- **二次开发**: 提供计算函数的二次开发, 方便扩展.

### 3. 分析和报表统计

#### 3.1 控制图分析

支持多类型绘图, 多 Chart 对比及精细化的数据点交互分析.

- **多类型绘图**: 支持 Control Chart, Histogram, NormalProb, Boxplot 等多种数据绘图能力;Chart 图表类型的显示及显示顺序支持可配置.
- **多 Chart 同屏**: 支持单屏显示一张或多张 Chart, 并显示 Chart 上所选数据点的相关信息 (如 Context Key, 违规信息等).
- **多 Chart 对比分析**: 支持垂直分析, 水平分析, 叠图分析;垂直分析时支持上下 Sample 的对齐分析, 对齐 Key 可配置;支持用 Context 定义 Matching 条件用于叠图分析.
- **Chamber 自选分析**: By Chamber 分析可自选 Chamber 组合 (如一片 Wafer 经过 A/B/C/D 四个 Chamber, 可自选 A/B 或 B/C/D) Show 值并分析, 减少无关组合.
- **数据点过滤与排除**: 支持手动过滤数据点 (需要注释);排除数据点后支持重新显示 Chart 或重新计算;支持批量 Disable 数据点并批量隐藏.
- **Sample Tag**: 支持手动, 自动给 Sample 打 Tag, Tag 支持自定义.
- **备注说明**: 支持对单个或多个数据点进行备注说明.
- **Chart 检索配置**: 支持根据 Context Key 配置 Chart 检索条件.
- **界限显示**: 支持显示历史或当前 Chart 上配置的规格, 控制界限, 显示方式可配置.
- **移动图重置**: 支持重置移动图表开始计算时间.
- **坐标轴配置**: X 轴的显示 Label 支持可配置.
- **OCAP 联动**: 异常数据可根据 OCAP No 链接到 OCAP 系统;提供接口支持外部系统访问 SPC Chart 和数据点, 点击 OCAP 信息链接可进入 SPC 相关 OOC/OOS 点界面.
- **批量查看与导图**: 支持批量查 Chart, 定时导图的功能.
- **设备状态叠加**: Chart 上可勾选显示 Tool EQP Status 异常变化的时间点 (DOWN/PM 等).
- **Sample History**: 支持 Sample History 功能, 支持跨 LDS 搜索.
- **母子 Chart 联动**: 支持在母 Chart 上查看子 Chart 的违规信息.
- **Control Limit 试算**: 支持手动计算 Control Limit, 计算出来的 Limit 可编辑, 可手动接收或拒绝;支持新 Limit 的模拟分析, 并用不同颜色显示模拟后的分析结果 (如模拟前后均无异常显示为蓝色).
- **颜色管理**: 支持自定义不同控制线的颜色及数据点在不同状态下的颜色 (如 OOC 点的颜色).
- **统计指标显示**: Chart 显示内容包括 Max, Min, Mean, 中位值, 极差, 标准偏差, Total Count, OOC%, OOS%, USL/LSL, UCL/LCL, Target, Cp, Cpk 等, 显示的统计指标支持可配置.

#### 3.2 报表统计

支持 Cpk 关键指标统计, 周期性报表及多维度达标率分析.

- **实时指标统计**: 支持根据选择的时间或其他条件实时统计 Chart 的 Cpk 相关指标.
- **关键指标计算**: 支持 Cpk(d2), Cpk(MEAN), Ppk 等关键性指标计算, 统计哪些指标可配置.
- **定期统计**: 支持以 SPC Chart 为对象按日, 周, 月, 季等周期定期统计, 统计周期可配置;支持用户自定义查询 Chart 的过滤条件 (如 by Product, by Module, by Tool).
- **数据过滤**: 支持 OOS, OOC, SOOS, IQR 多种过滤功能, 被过滤 (排除) 的数据默认不参与 Cpk 统计.
- **统计值汇总**: 统计值包括 Max, Min, Mean, 中位值, 极差, 标准偏差, 数据点数, OOC%, OOS% 等.
- **趋势分析**: 支持 Cpk/Ppk/违规数据的趋势变化分析;支持 Ppk/Cpk 达标率统计及趋势分析, 目标值可配置.
- **CPK 总览表**: 支持 Cpk 总览表统计分析, 分为时间周期, 部门, Chart 详情三个维度.
- **违规统计**: 支持违反 Alarm Rule 的 Count 及 Ratio 统计.
- **报表调度**: 支持报表 Schedule 及执行 Log 详情查看.
- **格式导出**: 支持常用文件格式的导出 (如 Excel/CSV 等).

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

#### 3.5 其他需求

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
