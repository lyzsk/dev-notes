## APC Function List

### 1. 基础功能模块

#### 1.1 数据收集

支持工艺测量数据的自动收集、自定义量测项目配置及量测数据的检查与处理, 并提供可客制化扩充的计算能力.

- **数据收集**: 支持工艺测量数据的收集, 可自定义要收集的量测项目.
- **计算公式**: 提供最小值、最大值、平均值、标准差等计算公式, 并支持客制化扩充.
- **异常处理**: 提供量测资料的检查、过滤、补点以及超过规格 (OOS) 的处理流程.

#### 1.2 控制器

支持光刻、刻蚀、研磨、湿法、TRIM 等工艺模块的 R2R 控制器开发, 覆盖控制模型、反馈方式、特殊批次处理及管控验证等通用能力.

- **工艺覆盖**: 支持光刻、刻蚀、研磨、湿法、TRIM 等工艺模块, 可调整工艺流程参数.
- **反馈粒度**: 支持 Lot to Lot、Wafer to Wafer 控制并可切换, 支持前反馈 (Feedforward) 和后反馈 (Feedback), 支持 Chamber level 反馈控制的实施方案.
- **控制模型**: 支持 MPC (Model Predictive Control) 和 EWMA 控制特性, 提供 SISO/MIMO 等不同控制模型并能够切换; R2R Control Block 除基本的 EWMA 和 MPC 外, 支持新增 WMA 或其他算法.
- **Recipe 联动**: 支持 WET Run to Run, 根据前一步的量测膜厚选择下一步不同的 Process Recipe; 与 MES 的配方管理功能集成.
- **特殊批次处理**: 支持 Pi Lot、Rework Lot、设备 PM、Runcard 及 Special Lot 等处理流程, 支持设备内置的 Rework 功能 (CMP); 用户可在 UI 上设定某种 Lot 或 Product 只跑对应的 Special R2R flow.
- **数据过滤**: 提供量测数据的异常检查功能, 异常数据不参与反馈及计算; 支持通过设置离群批次清单实现离群批次 (Lot) 过滤.
- **输出管控**: 针对控制器输出的值提供多种管控方式 (上下限、MTT 等), 并支持 OOS 后自定义处理流程.
- **调试验证**: 提供调试和模拟运行验证功能.
- **运行架构**: 控制器支持多线程运作.
- **控制器重置**: 提供重置控制器功能, 如设备 PM 后用户可手动重置或由外部事件驱动.

#### 1.3 集成及工具

支持统一的制程操作界面与周边系统集成, 并提供开发、权限、报表及系统运维等配套工具.

- **统一界面**: 为不同的制程提供统一的界面, 提供友好的设计界面.
- **系统集成**: 与 MES/SPC/FDC/RMS/Dispatching/Alarm/Workflow 等周边系统集成.
- **Dedication 功能**: 支持 Dedicate Chuck、Dedicate EQP 功能.
- **二次开发**: 提供功能组件允许用户开发和集成自己的 APC 控制模块, 提供便捷高效的开发工具.
- **权限管理**: 提供完善的权限管理机制和历史记录, 支持数据级的权限管理.
- **报表功能**: 提供全面的报表功能.
- **不停机升级**: 软件升级和新功能发布不影响系统使用 (不停机).
- **性能维护**: 提供高效的数据清理及恢复机制, 保障系统性能不随时间推移而下降; 支持多产线同时使用.
- **系统运维**: 提供必要的系统管理工具和性能监控及报警机制.

#### 1.4 报表

支持丰富的报表及图形展示与自定义配置.

- **自定义报表**: 提供丰富的报表及图形功能, 用户可自定义报表字段.

#### 1.5 流程

支持灵活的流程定义与复用.

- **子流程**: 可定义子流程 (计算逻辑), 流程间可嵌套, 提高重用性.

### 2. 区域的 APC 功能

#### 2.1 Litho Controller

支持 Litho CD 与 OVL 的 R2R 控制, 覆盖主流曝光机型及完整的控制情境与量测验证能力.

- **CD 控制模型**: 采用 SISO EWMA Model, 支持 Lot 级别反馈 (FFFB); 支持 Process 机型 ASML、Canon、NIKON; 控制参数为 Dose、Focus, 输出参数为 CD.
- **OVL 控制模型**: 采用 MSISO EWMA, 支持 Lot 级别反馈 (FFFB); 支持 Process 机型 ASML/CANON/NIKON, 支持 8/10 para 线性参数; 支持 FF、FB 的反馈方式.
- **OVL 特性**: 支持 Chuck Dedication、Sub Recipe 指定及 Chuck to Chuck.
- **控制情境**: 支持 PiLot run、Rework run、Normal run、Special run、Runcard run 场景.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持固定值模式.
- **Control Flag**: 支持 ON、FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site 有效性检查、量测有效性检查及量测数据过滤与验证.
- **反馈控制**: 支持反馈有效期控制, 量测可根据 Wafer Process Run 进行反馈, 支持根据最近的 run 货值计算返工 Lot 下货值.

#### 2.2 CMP Controller

支持 CMP 工艺的 MIMO MPC 控制, 覆盖多级别前馈/后馈及维修事件自动处理.

- **控制模型**: 采用 MIMO MPC; 支持 Lot 级别前馈/后馈、Wafer 级别前馈/后馈及 Chamber/Header/Platen 级别前馈/后馈, 对集成量测特别支持 Wafer 级别反馈; 控制参数为研磨时间、RemoveRate, 输出为 Thickness.
- **控制情境**: 支持 PiLot run、Normal run、Monitor run、Special/Runcard、Rework run 场景.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持主从参数设置.
- **Control Flag**: 支持 ON、FIX (固定值模式)、OFF 三种控制模式.
- **差异检查**: 支持下货参数值与实际下货值差异检查, 支持量测数据 site 有效性检查.
- **补录与反馈**: 支持手工前量补录, 量测可根据 Wafer Process Run 进行反馈.
- **有效期控制**: 支持有效反馈的有效期控制, 控制绪的反馈值连续超出规定时间未更新时自动切换至 PiLot 状态.
- **维修处理**: 支持自动侦测维修及自动设置维修事件.
- **异常切换**: 支持后量连续不合格时控制绪切换至 PiLot 状态.

#### 2.3 ETCH Controller

支持 Etch 工艺的 MIMO MPC 控制, 覆盖多级别反馈及灵活的参数约束与补偿机制.

- **控制模型**: 采用 MIMO MPC; 支持 Lot 级别、Wafer 级别及 Chamber 级别的前馈/后馈; 控制参数为蚀刻时间、Gas Flows 等, 输出为 CD、Thickness、Depth.
- **控制情境**: 支持 PiLot run、Normal run、Monitor run、Special run、Runcard run 场景.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持 tuning 参数连续达到上下限的次数控制, 支持主/从 tuning 参数.
- **线性约束**: 提供不同 Input 之间线性关系的约束.
- **Control Flag**: 支持 ON、FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site 有效性检查, 支持前值/后值量测来自于多个站点.
- **反馈控制**: 支持有效反馈的有效期控制及最新量测反馈控制.
- **缺值补偿**: 支持 Wafer level 前馈缺少 Wafer 量测数据时的自动补偿计算.
- **手动侦测**: 支持手动调整 tuning parameter 下货值侦测.

#### 2.4 WET Controller

支持 WET 工艺的 SISO EWMA 控制, 根据前量厚度实现 Recipe 选择或时间调整.

- **控制模型**: 采用 SISO EWMA; 支持 Batch/Lot 级别前馈及 Batch 级别反馈; 控制参数为 WET_TIME, 输出参数为 Thickness.
- **控制模式**: 支持根据前量厚度选择 Recipe、更新 WET_TIME 两种模式.
- **控制情境**: 支持 PiLot run、Normal run、Special run、Runcard run 场景.
- **参数管控**: 支持 tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限).
- **Control Flag**: 支持 ON、FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site/Wafer/Lot 有效性检查并触发相应 action.
- **有效期控制**: 支持有效反馈的有效期控制, 控制绪反馈值连续超出规定时间未更新时自动 Hold.
- **反馈方式**: 量测可根据 Wafer Process Run 进行反馈.

#### 2.5 TRIM Controller

支持 TRIM by THK 与 TRIM by WAT 两种控制方式, 覆盖去除量调整、卡控及工程数据分析能力.

- **TRIM by THK 控制模型**: 采用 MSISO 模型, 控制参数为去除量, 输出为 Thickness; 支持 Lot/Wafer/Point level Feedforward 及 Feedback, 模型算法支持 EWMA/WMA, Tune Flag 可开关.
- **THK 参数调整**: 工程师可在 UI 上手动调整去除量 Offset 并进行数据模拟计算, 支持多种去除方式及用户指定去除坐标, 支持参数值最小调整阈值.
- **THK Pilot 管控**: 支持新产品或之前条件过期时自动 PiLot run, PiLot Lot 量测结果上传前相同条件其他 Lot 禁止进站.
- **THK 卡控**: 支持下货值 SPEC 卡控、量测值 SPEC 卡控、去除量 Offset 变动卡控及多种 OOS 点处理方式.
- **THK 数据处理**: 支持 Process 顺序和量测顺序不一致处理及手工前量补录.
- **TRIM by WAT 控制**: 支持 Wafer Level 前馈及 WAT 量测结果自动处理, 支持不同 device 的系数计算及引用.
- **WAT 系数配置**: 支持 By 机台设置系数 Offset、Tool Dedication、多种系数选项及多种目标值选项.
- **WAT 卡控**: 支持最小有效点数卡关、最大 OOS 点数卡关、CupLifetime 卡关、量测值 SPEC 卡控、OOS Points 卡关及 OOS Hold Lot 处理.
- **WAT 数据处理**: 支持手工前量补录及文件类型处理.
- **追溯与导出**: 工程师操作记录存 Log 方便追溯; 支持量测数据、生产数据 Excel 导出以便工程师数据分析, 相关设置可通过 Excel 导入、导出.

### 3. Non-Function Requirement

#### 3.1 OOB Deployment

支持各区域 APC 系统的分阶段上线部署.

- **上线计划**: 提供各区域 APC 系统的阶段上线计划和方案.

#### 3.2 High Availability and Reliability

支持高可用与可靠的系统架构.

- **高可用**: 系统架构设计应达到 99.99% 高可用水平.

#### 3.3 Scalability

支持系统架构的横向扩展以满足产能增长.

- **扩展性**: 系统整体架构具有良好的扩展性, 可满足工厂的产能需求.

#### 3.4 Application Non-Stop Migration

支持不停机的系统迁移与升级验证.

- **不停机迁移**: 系统整体设计支持 Non-stop Migration, 所有软件、硬件及应用可在车间持续升级.
- **正式环境 PiRun**: 支持正式环境 PiRun 验证流程, UAT 通过后在指定的机台、流程进行 PiRun 验证, 测试通过则发布生产环境.

#### 3.5 OS Support

支持主流操作系统及 32/64 位环境.

- **操作系统**: 系统整体设计与程序支持 32bits & 64bits, 支持 Windows XP/7/8/10/11.

#### 3.6 Performance

支持明确的系统性能指标要求.

- **响应时间**: 99% 的处理在 5 秒或更短时间内完成, 复杂的事务处理不超过 60 秒.
- **故障恢复**: 系统应用服务的故障恢复时间不超过 10 分钟.

#### 3.7 Source Code

支持二次开发与源码级扩展.

- **二次开发**: 提供二次开发平台.
