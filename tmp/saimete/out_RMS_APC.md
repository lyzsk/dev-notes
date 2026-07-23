## RMS Function List

### 1. Equipment Category

支持设备程序类型的统一分类设定, 为后续配方管理提供基础分类依据.

- **程序类型设定**: 支持设定设备程序类型为 Standard Recipe - Full Body.

### 2. Equipment List

支持设备清单与责任归属管理, 确保设备维护责任明确, 通知准确送达.

- **设备关联角色**: 支持选择关联角色, 设定设备负责人员及负责人相关组别.
- **通知测试**: 支持测试邮件发送, 验证通知链路有效性.
- **基准设备设定**: 支持 Share Recipe 基准设备设定.

### 3. Notification Settings

支持灵活的事件通知机制, 确保关键配方事件及时通知相关人员.

- **通知时机设定**: 支持设定邮件通知时机点, 如 Recipe Validation Fail, Set Active 等.

### 4. Recipe List

支持从设备端同步程序清单并进行管控范围设定.

- **程序列表获取**: 支持从设备端获取程序列表.
- **Under Control 设定**: 支持设定 Recipe/Sequence 的 Under Control 列表.

### 5. Recipe Configuration

支持 Standard Recipe 与 Sequence Recipe 的全流程配置管理, 涵盖上传, 参数规范设定, 版本生效等完整生命周期.

#### 5.1 Standard Recipe - Full Body

支持 Full Body 类型标准程序的上传与版本管理.

- **程序上传**: 支持从设备上传程序, 并查看程序大小.
- **版本操作**: 支持程序 Set Frozen, Audit against EQP, Set Active, Approve, 生成 Active 版本, 以及 Active 程序变成 Deactivate.

#### 5.2 Standard Recipe - Parameter

支持 Parameter 类型标准程序的参数规范定义与版本管理.

- **程序上传与规范设定**: 支持从设备上传程序, 手动设定参数规范, 支持 Recipe Parameter 的 Absolute, ByRange, ByTolerance, ByList 比较类型.
- **规范复用**: 支持通过模板复制参数规范及通过 Excel 导入参数规范, 参数规范可保存成模板.
- **版本操作**: 支持程序 Set Frozen, Audit against EQP, Set Active, Approve, 生成 Active 版本, 以及 Active 程序变成 Deactivate.

#### 5.3 Sequence Recipe

支持主子程序结构的 Sequence Recipe 配置与版本管理.

- **主程序管理**: 支持从设备上传主程序, 设定子程序是否比较, 手动设定 Sequence Parameter 规范, 通过模板复制或 Excel 导入主程序参数规范, 主程序参数规范可保存成模板.
- **子程序管理**: 支持从设备上传子程序, 手动设定子程序参数规范, 通过模板复制或 Excel 导入子程序参数规范, 子程序参数规范可保存成模板.
- **版本操作**: 支持主程序与子程序的 Set Frozen, Audit against EQP, Set Active, Approve, 生成 Active 版本, 以及 Active 程序变成 Deactivate.

### 6. Recipe Template

支持程序模板的统一管理与维护, 提升参数规范设定效率.

- **模板查看**: 支持根据设备类型查看所有模板.
- **规范编辑**: 支持模板规范设定, 支持公式编辑, 支持程序模板修改规范.
- **模板删除**: 支持删除选中模板.

### 7. Recipe Advance Active

支持与工厂签核体系整合的进阶生效审批管理.

- **签核系统整合**: 支持整合工厂现有签核系统.
- **待审批查询**: 支持根据区域, 设备类型或设备查看所有待 Approve 的 Recipe/Sequence.
- **审批操作**: 支持 Approve/Reject 程序.

### 8. Recipe Status

支持全量程序状态的查询与管控操作.

- **状态查看**: 支持根据区域, 设备类型或设备查看所有程序状态, 支持根据关键字模糊查询相关程序.
- **管控操作**: 支持 Bypass, Cancel Bypass, Delete 所选中程序.

### 9. Recipe Download

支持 Standard Recipe 与 Sequence Recipe 的灵活下载部署.

- **Standard Recipe 下载**: 支持同型号设备中 Active 程序 Download 到指定设备, 支持批量 Download 本设备 Active 程序.
- **Sequence Recipe 下载**: 支持同型号设备中 Active 主程序及 Active 子程序 Download 到指定设备.

### 10. Recipe Compare

支持多场景离线的程序差异比对, 支撑工程分析与设备匹配.

- **Offline Audit**: 支持模拟 EAP Validation 比较, 支持批量多个程序 Offline Audit.
- **设备间比对**: 支持设备间程序差异比较, 支持相同程序批量比较多个设备之间的差异, 支持两个设备批量比较多个程序之间的差异.
- **版本比对**: 支持不同版本程序比较.

### 11. Batch Load From EQP

支持批量从设备上传程序并生效, 提升批量运维效率.

- **Standard Recipe 批量操作**: 支持批量从设备中上传多个程序, 支持批量 Active 多个程序.
- **Sequence Recipe 批量上传**: 支持批量从设备中上传主/子程序.

### 12. Batch Set Active

支持批量版本生效操作并与签核流程联动.

- **可生效版本查看**: 支持根据区域, 设备类型或设备查看所有能够 Set Active 版本的 Standard Recipe 和 Sequence Sub Recipe.
- **批量生效与签核联动**: 支持批量选中多个程序 Set Active, 如整合签核系统则产生一张签核审批单.

### 13. Recipe Operate Log

支持程序版本与参数规范变更履历的完整追溯.

- **Standard Recipe 履历**: 支持查询 Recipe Version 的变更履历, 查看 Parameter SPEC 修改履历.
- **Sequence Recipe 履历**: 支持查询 Sequence Version 的变更履历, 查看 Sequence Parameter SPEC 修改履历, 子程序是否比较开关履历, 以及主程序 Parameter SPEC 修改履历.

### 14. Recipe Validate Log

支持程序校验履历查询与结果汇总分析.

- **Validation 履历**: 支持查询 Recipe(Sequence) 的 EAP Validation 履历.
- **汇总报表**: 支持查看机台校验结果汇总报表.

### 15. Golden Recipe

支持跨设备共享的基准配方机制, 简化同型号设备的配方管理.

- **基准设备设定**: 支持在设备设定中新建基准设备, 勾选 Allow Share Recipe, 并勾选 Auto Share.
- **共享生效**: 支持在 Recipe Configuration 中从同型号任意设备上传程序, 程序规范设定同上, 程序 Set Active 时默认共享给同型号所有设备, 其他设备无需再设定.
- **共享审批与维护**: 支持在 Advance Active 时 Approve/Reject 程序, 支持在 Recipe Status 页面中查看和修改共享关系.
- **独立版本**: 支持非基准设备设定自己的 Active 版本.

### 16. Strict Parameter

支持关键参数的强制检查锁定, 防止重要参数被跳过校验.

- **严格检查锁定**: 支持预设锁定严格检查参数, 设定的参数不允许 Uncheck.

### 17. Recipe Key Param Spec

支持关键参数的规格范围统一管理与自动套用.

- **Key Param Spec 设定**: 支持根据机型设置 Key Param 的 Spec 范围, Spec 设置方式有 ByRange, ByTolerance, 公式.
- **自动套用**: 支持 Load Recipe 时自动套用 Key Param Spec.

### 18. Uncheck Param List

支持免检查参数的机型化配置与自动套用.

- **Uncheck 参数设定**: 支持根据设备机型设置 Uncheck 的参数.
- **自动 Uncheck**: 支持 Load Recipe 的时候自动把不需要 Check 的参数 Uncheck.

### 19. Recipe Parse Adaptor

支持配方解析组件的热更新, 保障系统持续可用.

- **不停机更新**: 支持不停机上线或更新 Parse Adaptor.

### 20. Equipment Constant

支持设备常量 (EC) 参数的全生命周期管理与一致性比对.

- **常量定义**: 支持新建设备常量参数, 并编辑参数规范, 支持设备常量的 Absolute, ByRange, ByTolerance, ByList 比较类型.
- **设定复用**: 支持同类型设备之间的设备常量设定 Copy, 支持设定 Excel 导入.
- **常量比对**: 支持设定设备常量与设备中常量数值比较, 支持同类型设备之间的设备常量比较差异.

### 21. EC Operate Log

支持设备常量设定变更的履历追溯.

- **变更履历**: 支持查询设备常量的设定变更履历.

### 22. EC Validate Log

支持设备常量校验履历的查询追溯.

- **Validation 履历**: 支持查询设备常量的 EAP Validation 履历.

## APC Function List

### 1. 平台功能

支持自主可控, 高可用的 R2R 控制平台, 提供控制模型, 开发工具, 数据处理和运行监控的完整平台能力.

#### 1.1 控制模型与算法

支持多样化的控制模型与算法体系, 满足不同工艺场景的控制需求.

- **内置控制模型**: 产品提供的控制模型包括 MA, WMA, EWMA, MPC, 支持 SISO/MIMO 系统.
- **自定义模型**: 支持用户开发自定义控制模型, 支持计算模型版本控制.
- **前馈反馈控制**: 支持提供不同程度的前馈反馈控制器开发, 如 lot-level, batch-level, or wafer-level 前馈和后馈, 支持根据前值选择不同的生产 recipe, 支持多步骤的同一 Parameter 同时控制.
- **常用函数**: 产品提供常用函数如最小值, 最大值, 平均值, 标准差等.

#### 1.2 系统架构与部署

支持国产化, 高可用, 多平台的系统架构与灵活部署.

- **自主可控**: 完全国产化, 自主知识产权, 易于通过客制化扩展自定义功能.
- **高可用架构**: 支持集群, 具有高可用性, 消息并行处理, 处理速度快, 软件升级以及新功能发布不影响系统使用, 不停机.
- **多平台部署**: 支持 Windows/Linux 平台部署, 支持 SQL Server, Oracle, MySQL, Pg SQL, Vastbase G100, Open Guass 等多种数据库.
- **通讯集成**: 支持多种消息总线, 如 Tibco RV, Raven Cast, H101, Web API, Rabbit MQ 等, 和其他系统通讯.
- **用户接入**: 支持 Web UI, 支持多浏览器访问, 登录支持接入 OA 验证.

#### 1.3 Workflow 开发与集成

支持图形化的流程开发, 调试与系统集成能力.

- **图形化开发**: 支持图形化 workflow, 提供图形化的接口与其他系统集成, 开发的流程间可嵌套, 提高重用性.
- **调试与编辑**: 支持 workflow 及 sub workflow Debug, 图形组件快速定位, 图形组件多选/全选, 复制, 整体移动.
- **开发验证**: 产品提供开发验证.

#### 1.4 数据收集与处理

支持量测数据的收集, 配置与异常过滤处理.

- **数据收集配置**: 提供测量数据收集及过滤功能, 提供收值项目和机台下货参数的配置.
- **异常数据处理**: 可自定义异常量测数据以及客制化检查流程, 例如滤除低 GOF (goodness-of-fit) 量测资料不参与 R2R 反馈计算.

#### 1.5 运行情境与监控

支持多种生产情境下的控制执行与运行状态监控.

- **多情境支持**: 支持 pilot, rework, special, runcard, normal run 等 scenario.
- **执行监控**: 支持分 module R2R 执行情况的监控, Request 的数量及生命周期按不同控制器统计, 查询 R2R 计算执行失败履历.

### 2. Litho Controller

支持光刻工艺 CD 与 OVL 的 Run-to-Run 闭环控制.

#### 2.1 Litho CD 控制模型与参数

支持 Litho CD 的 SISO 控制模型与多机型适配.

- **控制模型**: Litho CD 控制模型为 SISO EWMA Model, Litho CD FFFB 模型为 Lot 级别反馈.
- **机型与参数**: Litho 支持 Process 机型 ASML, Canon, NIKON, Litho CD 控制参数为 Dose, Focus, 输出参数为 CD.

#### 2.2 Litho CD 控制功能

支持 CD 控制的多情境运行与精细化管控.

- **运行情境**: 支持 pilot run, rework run, normal run, special run, runcard run.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量上限控制, tuning 参数的上下限控制, Control Flag: ON, FIX (固定值模式), OFF, 支持固定值模式.
- **反馈控制**: 支持量测数据有效性检查, 反馈有效期控制, 反馈有效批次控制, 按 Lot Type 反馈, 根据最近的 run 货值计算返工 lot 下货值.
- **其他功能**: 支持 Thread 状态控制, FEM 下货参数支持.

#### 2.3 Litho OVL 控制模型与参数

支持 Litho OVL 的 MSISO 控制模型与高阶参数控制.

- **控制模型**: OVL 控制模型为 MSISO EWMA, OVL FFFB 模型为 Lot 级别反馈.
- **机型与参数**: 支持 Process 机型 ASML/CANON/NIKON, 支持 8, 10 para 线性参数, 支持 HOPC/iHOPC 高阶参数.

#### 2.4 Litho OVL 控制功能

支持 OVL 控制的多情境运行与精细化管控.

- **运行情境**: 支持 pilot run, rework run, normal run, special run, runcard run.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量上限控制, tuning 参数的上下限控制, Control Flag: ON, FIX (固定值模式), OFF, 支持固定值模式.
- **反馈控制**: 支持量测数据有效性检查, wafer 数据有效性检测, 反馈有效期控制, 反馈有效批次控制, 按 Lot Type 反馈, 根据最近的 run 货值计算返工 lot 下货值.
- **其他功能**: 支持 Thread 状态控制, Tool dedication 检查, Simulate 功能, 曝光记录手动补录, Chuck dedication, Wafer 级别前层对准.

### 3. CMP Controller

支持化学机械研磨工艺的 MIMO 闭环控制.

#### 3.1 控制模型与参数

支持 CMP 的 MIMO MPC 控制模型与多级别前馈反馈.

- **控制模型**: 控制模型为 MIMO MPC, FFFB 模型为 Lot 级别的前馈/后馈, Wafer 级别的前馈, 特别地, 对于 CMP 集成量测支持 Wafer 级别反馈.
- **控制参数**: 控制参数为研磨时间, 研磨时间+分区压力, 输出参数为研磨量, 分区厚度.

#### 3.2 控制情境与功能

支持 CMP 控制的多情境运行与维修联动管控.

- **运行情境**: 支持 pilot run, normal run, special/runcard, rework run 功能.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX (固定值模式), OFF.
- **数据检查**: 支持下货参数值与实际下货值差异检查, 量测数据 site 有效性检查, 手工前量补录.
- **反馈控制**: 支持主从参数设置, 有效反馈的有效期控制, 控制绪的反馈值连续超出规定时间没有更新, 此控制绪切换至 pilot 状态, 量测可根据 wafer process run 进行反馈.
- **维修联动**: 支持自动侦测维修, 自动设置维修事件, 后量连续不合格, 控制绪切换至 pilot 状态.

### 4. ETCH Controller

支持蚀刻工艺的 MIMO 闭环控制与均匀性优化.

#### 4.1 控制模型与参数

支持 ETCH 的 MIMO MPC 控制模型与多级别前馈反馈.

- **控制模型**: 控制模型为 MIMO MPC, FFFB 模型为 Lot 级别的前馈/后馈, Wafer 级别的前馈.
- **控制参数**: 控制参数为蚀刻时间, ESC Chuck Temperatures, Gas Flows 等, 输出为 CD, Thickness, depth.

#### 4.2 控制情境与功能

支持 ETCH 控制的多情境运行与精细化反馈管控.

- **运行情境**: 支持 pilot run, normal run, special run, runcard run 功能.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX (固定值模式), OFF, tuning 参数连续达到上下限的次数控制, 提供不同 Input 之间线性关系的约束, 支持主/从 tuning 参数.
- **反馈控制**: 支持量测数据 site 有效性检查, 支持基于单 output 的多个 zone 的计算, 有效反馈的有效期控制, 最新量测反馈控制, 提供 wafer level 前馈时缺少 wafer 的量测数据, 自动补偿计算, 支持前值/后值量测来自于多个站点.
- **特殊处理**: 支持手动调整 tuning parameter 下货值侦测, 支持 Hydra uniformity system (raw metro data and X/Y coordinates), 支持有关 first wafer 效应的处理.

### 5. Furnace Controller

支持炉管工艺的 Batch 级闭环控制.

#### 5.1 控制模型与参数

支持 Furnace 的 MIMO MPC 控制模型与多区温控.

- **控制模型**: 控制模型为 MIMO MPC, FFFB 模型为 Batch 级别的反馈, 支持 Process 机型 Kokusai furnace, Tel furnace.
- **控制参数**: 控制参数为各区的温度 (usually 5 or 6, up to 10), deposition 的时间或者 ALD loop, 输出参数为各区的厚度 (usually 5 or 6, up to 10).

#### 5.2 控制情境与功能

支持 Furnace 控制的 Zone 级反馈与运行管控.

- **运行情境**: 支持 pilot run, normal run, special run, runcard run scenarios.
- **Zone 反馈**: 支持 Zone 的反馈资料识别, 根据必要 Zone 量测资料反馈, Boat zone 定义.
- **数据与反馈控制**: 支持有效反馈的有效期控制, 输出预测, 量测数据 site 有效性检查, 量测有效检查, 最新量测反馈控制, 量测超期处理.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX (固定值模式), OFF, 下货 tuning 参数连续超限处理, 手动调整 tuning parameter 下货值侦测, 手动调整 tuning parameter 参数的 delta 限制, 控制器 Enable/Disable.

### 6. WET Controller

支持湿法工艺的 SISO 闭环控制.

#### 6.1 控制模型与参数

支持 WET 的 SISO EWMA 控制模型与双模式控制.

- **控制模型**: 控制模型为 SISO EWMA, FFFB 模型为 Batch 级别前馈, 反馈.
- **控制模式与参数**: 支持 1) 根据前量厚度选择 recipe, 2) 更新 ETCH_TIME 两种模式, 控制参数为 ETCH_TIME, 输出参数为 Thickness.

#### 6.2 控制情境与功能

支持 WET 控制的多级有效性检查与反馈管控.

- **运行情境**: 支持 pilot run, normal run, special run, runcard run.
- **参数管控**: 支持 tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX (固定值模式), OFF.
- **数据检查**: 支持量测数据 site 有效性检查, 量测数据 wafer 有效性检查, 量测数据 lot 有效性检查并做触发 action.
- **反馈控制**: 支持有效反馈的有效期控制, 控制绪的反馈值连续超出规定时间没有更新, 会 hold 住, 量测可根据 wafer process run 进行反馈.

### 7. Thin Film Controller

支持薄膜工艺的 MIMO 闭环控制.

#### 7.1 控制模型与参数

支持 Thin Film 的 MIMO MPC 控制模型与多级别前馈反馈.

- **控制模型**: 控制模型为 MIMO MPC, FFFB 模型为 Lot 级别的前馈/后馈, Wafer 级别的前馈.
- **控制参数**: 控制参数为 Dep Time, RF Power 等, 输出为 Thickness.

#### 7.2 控制情境与功能

支持 Thin Film 控制的多情境运行与精细化反馈管控.

- **运行情境**: 支持 pilot run, normal run, special run, runcard run 功能.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX (固定值模式), OFF, tuning 参数连续达到上下限的次数控制, 提供不同 Input 之间线性关系的约束, 支持主/从 tuning 参数.
- **反馈控制**: 支持量测数据 site 有效性检查, 支持基于单 output 的多个 zone 的计算, 有效反馈的有效期控制, 最新量测反馈控制, 提供 wafer level 前馈时缺少 wafer 的量测数据, 自动补偿计算, 支持前值/后值量测来自于多个站点.
- **特殊处理**: 支持手动调整 tuning parameter 下货值侦测.

### 8. Trim Controller

支持基于量测数据的去除量微调控制, 涵盖 THK 与 WAT 两种数据来源.

#### 8.1 根据 THK Data Trim

支持基于厚度量测数据的 Wafer 级去除量控制.

- **控制模型**: 控制模型为 MSISO, 控制参数为去除量, 输出为 thickness, 支持 Wafer level Feedforward, Feedback, Tune Flag 可以开关, 模型算法为 EWMA.
- **工程师操作**: 工程师可以在 UI 上手动调整去除量 Offset, 支持数据模拟计算, 工程师操作记录存 Log, 方便追溯.
- **Pilot 管控**: 支持新产品或之前条件过期自动 pilot run, Pilot Lot 量测结果上传前, 相同条件其他 Lot 禁止进站.
- **卡控机制**: 支持多种去除方式, 下货值 SPEC 卡控, 量测值 SPEC 卡控, 去除量 Offset 变动卡控, 多种 OOS 点处理方式, 支持用户指定去除坐标, 参数值最小调整阈值.
- **数据处理**: 支持量测数据, 生产数据 Excel 导出功能, 方便工程师数据分析, 相关设置可以通过 Excel 导入, 导出, 支持 Process 顺序和量测顺序不一致处理, 手工前量补录.

#### 8.2 根据 WAT Data Trim

支持基于 WAT 量测结果的 Wafer 级前馈控制.

- **控制模型**: 支持 Wafer Level 前馈, WAT 量测结果自动处理, 支持不同 device, 系数计算及引用, 支持 By 机台设置系数 Offset, Tool Dedication, 多种系数选项支持, 多种目标值选项支持.
- **卡控机制**: 支持最小有效点数卡关, 最大 OOS 点数卡关, CupLifetime 卡关, 量测值 SPEC 卡控, OOS Points 卡关, OOS Hold Lot 处理.
- **数据处理**: 工程师操作记录存 Log, 方便追溯, 支持量测数据, 生产数据 Excel 导出功能, 方便工程师数据分析, 相关设置可以通过 Excel 导入, 导出, 支持手工前量补录, 文件类型处理.
