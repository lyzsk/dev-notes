## APC Function List

### 1. 平台功能

#### 1.1 数据收集与处理

支持量测数据的自动收集、项目配置及异常数据的检查与过滤, 并提供常用计算函数.

- **数据收集**: 支持工艺测量数据的收集, 可自定义要收集的量测项目.
- **常用函数**: 产品提供常用函数如最小值, 最大值, 平均值, 标准差等.
- **异常数据处理**: 可自定义异常量测数据以及客制化检查流程, 例如滤除低 GOF (goodness-of-fit) 量测资料不参与 R2R 反馈计算.

#### 1.2 控制模型与反馈

支持多样化的内置控制模型、多级别前馈/后馈控制及用户自定义模型扩展.

- **内置控制模型**: 产品提供的控制模型包括 MA, WMA, EWMA, MPC, 支持 SISO/MIMO 系统.
- **前馈反馈控制**: 支持 Lot/Batch/Wafer 等级别的前馈 (Feedforward) 与后馈 (Feedback) 控制, 并支持根据前值选择不同的生产 Recipe. ⚠️
- **二次开发**: 提供功能组件允许用户开发和集成自己的 APC 控制模块, 提供便捷高效的开发工具.

#### 1.3 流程开发与调试

支持子流程定义与嵌套复用, 并提供调试与模拟验证能力.

- **子流程**: 可定义子流程 (计算逻辑), 流程间可嵌套, 提高重用性.
- **调试验证**: 提供调试和模拟运行验证功能.

#### 1.4 系统集成与运行监控

支持多生产情境下的控制执行、与周边系统集成及运行状态监控.

- **多情境支持**: 支持 pilot, rework, special, runcard, normal run 等 scenario.
- **系统集成**: 与 MES 等周边系统集成, 支持多种消息总线与其他系统通讯. ⚠️
- **Dedication 功能**: 支持 Dedicate Chuck, Dedicate EQP 功能.
- **执行监控**: 支持分 module R2R 执行情况的监控, Request 的数量及生命周期按不同控制器统计, 查询 R2R 计算执行失败履历.
- **统一界面**: 为不同的制程提供统一的界面, 提供友好的设计界面.
- **运行架构**: 控制器支持多线程运作.

### 2. Litho Controller

#### 2.1 Litho CD 控制

支持 Litho CD 的 SISO EWMA 控制, 覆盖主流曝光机型、多情境运行与精细化管控.

- **CD 控制模型**: 采用 SISO EWMA Model, 支持 Lot 级别反馈 (FFFB); 支持 Process 机型 ASML, Canon, NIKON; 控制参数为 Dose, Focus, 输出参数为 CD.
- **运行情境**: 支持 pilot run, rework run, normal run, special run, runcard run.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量上限控制, tuning 参数的上下限控制, Control Flag: ON, FIX (固定值模式), OFF, 支持固定值模式.
- **反馈控制**: 支持量测数据有效性检查, 反馈有效期控制, 根据最近的 run 货值计算返工 Lot 下货值. ⚠️

#### 2.2 Litho OVL 控制

支持 Litho OVL 的 MSISO EWMA 控制, 覆盖主流曝光机型、多情境运行与精细化管控.

- **OVL 控制模型**: 采用 MSISO EWMA, 支持 Lot 级别反馈 (FFFB); 支持 Process 机型 ASML/CANON/NIKON, 支持 8/10 para 线性参数; 支持 FF, FB 的反馈方式.
- **运行情境**: 支持 pilot run, rework run, normal run, special run, runcard run.
- **参数管控**: 支持参数值最小调整阈值, tuning 参数的变化量上限控制, tuning 参数的上下限控制, Control Flag: ON, FIX (固定值模式), OFF, 支持固定值模式.
- **Chuck Dedication**: 支持 Chuck Dedication. ⚠️
- **反馈控制**: 支持量测数据有效性检查, 反馈有效期控制, 根据最近的 run 货值计算返工 Lot 下货值. ⚠️

### 3. CMP Controller

#### 3.1 控制模型与参数

支持 CMP 工艺的 MIMO MPC 控制与多级别前馈/后馈.

- **控制模型**: 控制模型为 MIMO MPC, FFFB 模型为 Lot 级别的前馈 / 后馈, Wafer 级别的前馈, 特别地, 对于 CMP 集成量测支持 Wafer 级别反馈.
- **控制参数**: 控制参数为研磨时间, 输出为厚度. ⚠️

#### 3.2 控制情境与功能

支持 CMP 控制的多情境运行、参数管控、数据检查与维修联动.

- **运行情境**: 支持 pilot run, normal run, special/runcard, rework run 功能.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持主从参数设置.
- **Control Flag**: 支持 ON, FIX (固定值模式)、OFF 三种控制模式.
- **差异检查**: 支持下货参数值与实际下货值差异检查, 支持量测数据 site 有效性检查.
- **补录与反馈**: 支持手工前量补录, 量测可根据 Wafer Process Run 进行反馈.
- **有效期控制**: 支持有效反馈的有效期控制, 控制绪的反馈值连续超出规定时间未更新时自动切换至 PiLot 状态.
- **维修联动**: 支持自动侦测维修, 自动设置维修事件, 后量连续不合格, 控制绪切换至 pilot 状态.

### 4. ETCH Controller

#### 4.1 控制模型与参数

支持 Etch 工艺的 MIMO MPC 控制与多级别前馈/后馈.

- **控制模型**: 控制模型为 MIMO MPC, FFFB 模型为 Lot 级别的前馈 / 后馈, Wafer 级别的前馈.
- **控制参数**: 控制参数为蚀刻时间、Gas Flows 等, 输出为 CD, Thickness, Depth. ⚠️

#### 4.2 控制情境与功能

支持 ETCH 控制的多情境运行、灵活的参数约束与补偿机制.

- **运行情境**: 支持 pilot run, normal run, special run, runcard run 功能.
- **参数管控**: 支持参数值最小调整阈值、tuning 参数变化量绝对值上限及上下限, 支持调整参数值截取 (根据上下限或变化量上下限), 支持 tuning 参数连续达到上下限的次数控制, 支持主 / 从 tuning 参数.
- **线性约束**: 提供不同 Input 之间线性关系的约束.
- **Control Flag**: 支持 ON, FIX (固定值模式)、OFF 三种控制模式.
- **量测验证**: 支持量测数据 site 有效性检查, 支持前值 / 后值量测来自于多个站点.
- **反馈控制**: 支持有效反馈的有效期控制及最新量测反馈控制.
- **缺值补偿**: 支持 Wafer level 前馈缺少 Wafer 量测数据时的自动补偿计算.
- **手动侦测**: 支持手动调整 tuning parameter 下货值侦测.

### 5. WET Controller

#### 5.1 控制模型与参数

支持 WET 工艺的 SISO EWMA 控制, 根据前量厚度实现 Recipe 选择或时间调整.

- **控制模型**: 控制模型为 SISO EWMA, FFFB 模型为 Batch 级别前馈, 反馈.
- **控制模式**: 支持根据前量厚度选择 Recipe、更新 WET_TIME 两种模式.

#### 5.2 控制情境与功能

支持 WET 控制的多情境运行、多级有效性检查与反馈管控.

- **运行情境**: 支持 pilot run, normal run, special run, runcard run.
- **参数管控**: 支持 tuning 参数的变化量绝对值上限, tuning 参数的上下限, 调整参数值的截取 (根据上下限或者变化量上下限), Control Flag: ON, FIX (固定值模式), OFF.
- **量测验证**: 支持量测数据 site/Wafer/Lot 有效性检查并触发相应 action.
- **有效期控制**: 支持有效反馈的有效期控制, 控制绪反馈值连续超出规定时间未更新时自动 Hold.
- **反馈方式**: 量测可根据 Wafer Process Run 进行反馈.

### 6. TRIM Controller

#### 6.1 根据 THK Data Trim

支持基于厚度量测数据的去除量控制, 覆盖工程师操作、Pilot 管控、卡控与数据处理.

- **控制模型**: 控制模型为 MSISO, 控制参数为去除量, 输出为 thickness, 支持 Wafer level Feedforward, Feedback, Tune Flag 可以开关, 模型算法为 EWMA.
- **工程师操作**: 工程师可以在 UI 上手动调整去除量 Offset, 支持数据模拟计算, 工程师操作记录存 Log, 方便追溯.
- **Pilot 管控**: 支持新产品或之前条件过期自动 pilot run, Pilot Lot 量测结果上传前, 相同条件其他 Lot 禁止进站.
- **卡控机制**: 支持多种去除方式, 下货值 SPEC 卡控, 量测值 SPEC 卡控, 去除量 Offset 变动卡控, 多种 OOS 点处理方式, 支持用户指定去除坐标, 参数值最小调整阈值.
- **数据处理**: 支持量测数据, 生产数据 Excel 导出功能, 方便工程师数据分析, 相关设置可以通过 Excel 导入, 导出, 支持 Process 顺序和量测顺序不一致处理, 手工前量补录.

#### 6.2 根据 WAT Data Trim

支持基于 WAT 量测结果的 Wafer 级前馈控制, 覆盖系数配置、卡控与数据处理.

- **控制模型**: 支持 Wafer Level 前馈, WAT 量测结果自动处理, 支持不同 device, 系数计算及引用, 支持 By 机台设置系数 Offset, Tool Dedication, 多种系数选项支持, 多种目标值选项支持.
- **卡控机制**: 支持最小有效点数卡关, 最大 OOS 点数卡关, CupLifetime 卡关, 量测值 SPEC 卡控, OOS Points 卡关, OOS Hold Lot 处理.
- **数据处理**: 工程师操作记录存 Log, 方便追溯, 支持量测数据, 生产数据 Excel 导出功能, 方便工程师数据分析, 相关设置可以通过 Excel 导入, 导出, 支持手工前量补录, 文件类型处理.

### 7. 非功能需求

#### 7.1 高可用与不停机

支持高可用架构与不停机的软件升级发布.

- **高可用架构**: 支持集群, 具有高可用性, 消息并行处理, 处理速度快, 软件升级以及新功能发布不影响系统使用, 不停机.

#### 7.2 平台支持

支持主流操作系统平台部署.

- **操作系统**: 支持 Windows 平台部署. ⚠️
