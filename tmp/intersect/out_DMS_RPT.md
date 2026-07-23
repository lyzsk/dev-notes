## DMS Function List

### 1. 缺陷分析

#### 1.1 数据查询

支持多维度、多条件的缺陷数据查询与筛选, 快速定位目标 Lot/Wafer 的 Defect 数据.

- **多维度过滤**: 支持按时间过滤筛选缺陷数据, 支持产品、批次、晶圆、站点、配方等维度的数据过滤.
- **条件筛选**: 支持按数据内容及原始数据条件进行缺陷数据的筛选过滤.
- **结果过滤**: 支持设置仅呈现最终检测结果; 支持筛选过滤有照片的检测记录.

#### 1.2 DSA (Defect Source Analysis)

支持缺陷根源分析运算.

- **DSA 分析**: 支持缺陷根源分析 (DSA) 运算. ⚠️

#### 1.3 Wafer Map 分析

支持 Defect Wafer Map 的显示控制、交互操作、群聚分析、叠图分析、对比分析及数据输出.

- **显示控制**: 支持显示检测资讯; 支持调整缺陷晶圆图的显示细项条件, 缺陷显示条件可自由调整; 支持放大或缩小缺陷晶圆图.
- **颜色自定义**: 支持自由调整缺陷类别的显示颜色.
- **多图显示**: 支持多片 Wafer Map 的同屏显示, 支持自由调整显示的行列数量. ⚠️
- **群聚分析**: 支持缺陷群聚 (Cluster) 分析.
- **联动显示**: 缺陷晶圆图可与缺陷数据、统计图互动显示.
- **框选操作**: 支持矩形、自定义框选过滤 Defect; 支持 Select Filter.
- **测量工具**: 支持测量两个缺陷间的距离.
- **叠图分析**: 支持叠图分析; 支持 Defect Map Overlay CP Map.
- **Zone 分析**: 支持 Zone Map 分析, 包含 Zone 的定义、Zone 分析以及分类.
- **前后测对比**: 支持分别呈现前测、后测、前后测共同、后测新增等缺陷晶圆图.
- **Send to Review**: 支持在 Map 上框选 Defect, 并将结果 Send to Review 机台.
- **Klarf 输出**: 支持输出 Klarf 档案.

#### 1.4 Defect Image

支持 Defect 图像的树形浏览、排序、查看与重新分类.

- **树形浏览**: 支持树形结构快速查看 Image.
- **排序功能**: 支持 Image 升降排序 (By Scan Time, By Layer, By Defect ID, By Wafer ID).
- **照片操作**: 支持放大或缩小缺陷照片, 可点击照片进行重新分类.

#### 1.5 Defect Chart

支持缺陷统计图表绘制.

- **图表类型**: 支持趋势图 (Trend), 堆叠条形图 (BarStack), 盒须图 (BoxPlot) 图表分析. ⚠️

#### 1.6 Klarf File Viewer

支持 Klarf 文件读取分析.

- **Klarf 读取**: 支持直接读取 Klarf 档案进行查询分析.

## RPT Function List

### 1. 基础报表

#### 1.1 Summary Report

支持生产状况的综合统计类报表.

- **FAB Indices Report**: 汇总每天的生产状况, 包括 EOH, 出货, 晶圆下线, Hold Lot, 废料和良率等数据.

#### 1.2 Analysis Report

支持良率、投入产出等面向经营分析的分析类报表.

- **CP Yidle Report**: 按天查询基于产品和 Lot 的良率及其他测试指标的均值.
- **Wafer Start Report**: 按照产品统计时间段内的投产情况.
- **Ship Lot Report**: 统计每天的每个产品的 ship 数量及明细.

#### 1.3 WIP Report

支持在制品 (WIP) 类报表的生成与查询.

- **WIP Profile Report**: 展示各个阶段 (Stage) 的 WIP 分布状况.
- **Coming Lot Report**: 按 Tech / 产品 / 区域 / 设备组统计当前站点及所选时间内即将到站的 Wafer 数量, 并支持按 Lot 查看剩余工序.
- **Move By Day Shift WIP Report**: 展示选定时间 WIP 段内每天的 Track In & Track Out 的 Move 量, 并可查看每个阶段及操作的具体数据.

#### 1.4 EQ Report

支持设备类报表.

- **EQP Status**: 设备历史事件报表, 查看详细的设备历史记录以及设备甘特图.

#### 1.5 Cycle Time

支持批次 Cycle Time 类报表.

- **CT统计**: 提供批次 Cycle Time 类报表, 可统计批次和产品的 Cycle Time.

#### 1.6 Hold Info

支持现场被 Hold Lot 的信息追溯报表.

- **Hold明细**: 提供现场被 Hold 的 Lot 信息报表, 可指定时间段, 列出是否 Release, Hold/Release 人员, 原因, 时间等信息.
