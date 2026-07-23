### SPC

#### 仅上扬独有的功能(未纳入交集)

- 数据存储与清理: 实时环境保存一年以上数据, 提供过期数据处理脚本
- 采集性能指标: Inline/Offline 数据采集响应时间 3 秒之内
- 非侵入式变更: 修改 Chart 内容对数据收集无影响
- 手动建立 Chart 的友好操作界面
- 与 MES 端 Loader 集成批量建 Chart, by Pastable Attributes 快速修改
- PM 后特殊管控: Offline Monitor, Pilot Inline Measurement 及第一批 Lot 单独 Control Limit (如两倍 Sigma)
- 特殊点自动排除中的加量, SRC 等类型及可配置的自动排除处理
- SPC Rule 二次开发 (提供开发包)
- 计算函数二次开发
- 内置公式: Trigger-Reference[#mean], Trigger*Reference[#mean] 等
- 计算结果 Link 参与计算的 Sample 追溯
- EWMA_M/EWMA_S/EWMA_R Chart, Raw Value (Trend) Chart, Histogram
- 多 Chart 同屏显示与垂直/水平/叠图对比分析 (对齐 Key 可配置, Context Matching)
- By Chamber 自选 Chamber 组合分析
- Sample Tag: 手动/自动打 Tag, Tag 自定义
- 移动图重置开始计算时间
- Chart 叠加显示 Tool EQP Status 异常变化时间点 (DOWN/PM 等)
- Sample History 功能, 支持跨 LDS 搜索
- 母子 Chart 联动: 母 Chart 上查看子 Chart 违规信息
- Control Limit 试算模拟分析: Limit 可编辑, 手动接收/拒绝, 模拟结果用不同颜色显示
- 查询权限管控: 按产品/设备等定义 Chart 查询权限
- 操作历史追踪: Rule Change/Limit Change/Point Change 详细 Log
- 数据点搜索: 按 Context 值, OOC/OOS, Comment, 数据收集时间点搜索, 支持数据点列表/Chart 列表两种显示模式
- Online SPC Chart 动态显示及更新
- Trend 图 Raw Data 浮动显示 LotID, WaferID
- by 测量设备对比分析
- 定时导图: 自动导图按时间设置
- 计算 Cpk 支持使用历史规格
- 看图图例 Spec/Control 线后拼最新 Limit 值
- 选点函数支持连续/非连续选点, 可按算法封装自动选点
- Cpk/Ppk/违规数据趋势变化分析, Ppk/Cpk 达标率统计及趋势分析 (目标值可配置)
- CPK 总览表: 时间周期, 部门, Chart 详情三个维度
- 报表 Schedule 及执行 Log 详情查看
- ACL: CL Check (违规/越来越紧/超出 Spec Limit), 看图 Review 新旧 Limit 颜色对比, 与签核系统集成, 基于点数的自动计算
- 实时指标统计: 根据选择的时间或条件实时统计 Chart 的 Cpk 相关指标
- Dashboard 统计: 每小时统计 Violation/Cpk/Collection Interval/Exclude Sample 四维 Good/Warn/Bad 百分比, 自定义 Chart 分组, Chart/Violation/Cpk/OCAP 等多种 View Type, 宫格个性化 Dashboard

#### 仅赛美特独有的功能(未纳入交集)

- 采集方式: 手动录入, EAP 上传, 文件解析, FTP, 邮件解析
- 数值类型设置: 整数/小数, 系统显示及 Chart Y 轴小数位数
- 参数版本管控
- 目标 CPK 设定: 按参数, Channel, CKC 维度设定
- 配置复制: 复制其他参数的 Channel, CKC 信息, 规则, 控制限
- Channel 动态启用/禁用
- 判异 Action: Hold Lot, Down EQP, 按优先级触发 OCAP, Action 客制化扩展
- 控制限类型: 内规, 客规, 屏控限
- OOR/OOT 上下限判异
- 跨站点参数计算
- XBAR_S, XBAR_R 图表类型
- Y 轴调整: 按管控限或自定义范围, 科学计数法, 对数显示
- 多时间维度排序: Process Time, Measure Time, System Time
- 分区高亮: 高亮 A/B/C 区
- 分段显示: 按辅助信息, CKC 分段显示控制图数据
- 箱线图点位偏移量设置
- 数据点临时/永久取消隐藏 (恢复)
- 图表样式多维度设置: 按参数/Channel/Chart 维度, 点的形状与大小, 线的类型与粗细
- 管控限统计报表

#### 与原文不一致处(⚠️ 标记说明)

- 1.1 多源数据采集: 合并改写. 上扬原文列举 Inline/Offline/Reticle/Carrier/厂务, 赛美特列举产品/设备关键参数/厂务/原材料/出货, 两方数据源清单不一致, 取共同覆盖的表述.
- 1.2 分组管理: 合并改写. 上扬为树状 Folder 嵌套管理 Chart, 赛美特为 Channel 分组/子组/Report Group, 粒度与对象不同, 取"分组分层组织 Chart"的共同能力.
- 1.2 自动 Sub Chart 管控: 合并改写. 上扬按 Context 值 (设备/Chamber/产品/Step/炉管位置) 自动建 Sub Chart, 赛美特通过【_】【XX_】通配符模式采集时自动生成 CKC, 语义相同但机制表述不同.
- 1.3 多种控制限: 合并改写. 赛美特另有内规/客规/屏控限, 上扬另有分别 Enable/Disable 上界/下界/中心线, 交集仅取两方共有的限类型.
- 1.3 上下限判异: 基于赛美特原文删减 OOR/OOT. 上扬仅明确 OOS/OOC/OOW, 赛美特另有 OOR/OOT, 交集取 OOS/OOC/OOW.
- 1.3 OCAP 联动: 合并改写. 上扬为按 OCAP No 链接并提供外部系统访问接口, 赛美特为手动触发 OCAP 并跳转处理页, 取"异常点链接/跳转 OCAP"的共同能力.
- 3.1 计量型图表: 合并改写, 仅保留两方共有类型. 上扬另有 Raw Value (Trend), EWMA_M/S/R;赛美特另有 XBAR_S, XBAR_R.
- 3.1 分布类图表: 合并改写. 上扬另有 Histogram 且图表类型显示顺序可配置, 赛美特另有箱线图点位偏移, 交集取 NormalProb 与 Boxplot.
- 3.1 统计指标显示: 合并改写, 仅列共有指标. 上扬另有中位值/极差/USL/LSL/UCL/LCL/Target 且显示指标可配置;赛美特另有 StdP/K/Pp/Ppk/Abnormal Count/Ratio (Ppk 在上扬报表统计部分覆盖).
- 3.2 数据点过滤与隐藏: 合并改写. 上扬手动过滤需要注释, 支持批量 Disable 并批量隐藏;赛美特支持临时/永久隐藏及取消隐藏 (恢复), 细节不重合.
- 3.2 特殊点过滤: 合并改写. 上扬为重量/加量/SRC 自动排除 (可配置) 及离散规格过滤离散点;赛美特为按点数/时间周期/重量/离散点/屏控限批量过滤, 交集取重量与离散点条件.
- 3.4 书签与收藏: 合并改写. 上扬书签保存常用 Chart 和搜索条件, 赛美特按用户创建收藏夹并存关键 Chart, 表述合并.
- 3.4 批量查看与导出: 合并改写. 上扬为批量查 Chart 与定时导图, 赛美特为按收藏夹批量打开/批量导出, 交集取批量查看与批量导出.
- 4.1 数据过滤: 基于上扬原文删减 SOOS/IQR. 上扬支持 OOS/OOC/SOOS/IQR 过滤, 赛美特仅提计算配置的数据过滤条件, 交集取 OOS/OOC.
- 4.2 格式导出: 合并改写. 上扬导出格式为 Excel/CSV, 赛美特为 Excel/PPT, 交集取 Excel, 格式差异: CSV 仅上扬, PPT 仅赛美特.
- 数值差异 1 (4.1 定期统计, 引用上扬原文): 统计周期上扬支持日/周/月/季, 赛美特自动计算周期仅支持月度/季度.
- 数值差异 2 (3.2 控制限计算, 引用上扬原文): 上扬为 N 倍 Sigma 且倍数可配置, 赛美特控制限推荐公式固定为 Avg±3Sigma.
- 表述差异 (2.1 标准规则集, 引用上扬原文): 上扬称"标准 WE Rule", 赛美特称"SPC 八大判异准则", 为同一能力, 未改写故无 ⚠️, 在此说明.

#### 原文来源选择说明

- 交集 bullet 以上扬原文为主: 上扬对多数功能的描述更具体完整 (含配置项, 示例与可配置性说明), 如 Context 过滤, 计算函数, 界限显示, 定期统计等. 赛美特原文在建模 (Excel 导入导出, 属性继承, K/NK/NC 分类), 数据点操作 (备注管理, 过滤重算, 样式区分) 与 X 轴标签等处表述更准确简洁, 相应条目选用赛美特原文. 凡两方清单或机制不一致, 无法直接引用单方原文的, 均合并改写并以 ⚠️ 标记.
