## AMA Function List

### 1. 系统管理

#### 1.1 系统管理

支持系统基础管理功能, 保障系统安全稳定运行.

- **角色与权限管理**: 提供角色管理、用户管理、权限管理等功能, 按角色进行访问控制.
- **消息管理**: 提供消息管理等系统基础管理能力.

#### 1.2 POD Location

支持各类存储与搬送设备之间的全自动化流程.

- **全自动化流程**: 支持 Stocker、OHB、NTB、EQP、Exchanger 等设备之间的全自动化流程.

### 2. 场景支持

#### 2.1 What Next 规则触发

支持多种触发方式驱动 Dispatching Rule, 确保派工响应的实时性与灵活性.

- **事件触发**: 当 Load Port Ready to Unload Event 报出时, 自动 Trigger Dispatching Rule.
- **定时触发**: 基于 Periodic Watchdog 周期性 Trigger Dispatching Rules.
- **自定义触发**: 基于设备状态及其他用户自定义的客制化状态 Trigger Dispatching Rules.

#### 2.2 Full Auto 场景

支持全自动化派工的各类业务场景, 包含但不局限于以下场景.

- **基础场景**: 支持 Basic Scenario、Fix/Internal Buffer Automation Scenario.
- **专项场景**: 支持 Sorter Scenario (including Wafer Start, Package etc.)、Pilot Run Scenario、Back Side Clean Scenario、Super-Hot Lot Scenario、Bonding/Debonding Scenario、Measurement Scenario、FOUP Clean、FOUP Inspection Scenario、Mixrun Scenario、Tool Balance Scenario.
- **Multi Lot 约束**: 同一个 FOUP 的 Multi Lot 只能被派到同一个机台, 但可根据派工规则决定其中 Lot 的派工顺序;工程师不能任意组合 Multi Lot, 只能 Run 同机台、同 Stage 或者同 Step 的 Lot.
- **全局派工因素**: 支持 Critical Ratio、Move Target、Q-time Urgency、Cycle Time、Shift Target、Hot Lot、交货时间、WIP Balance 等全局因素的派工规则设定和逻辑支持.
- **Q-time 管理**: 支持多样 Q-time 管理、Run Path、Q-time Urgency, 并能够根据 Q-time 提供报警功能;提供有效的 Q-time Loop 监控工具, 监控 Q-time 模型的执行效率.
- **设备派工优先调度**: 支持同 PPID 优先派货, 同组内机台优先派货.

#### 2.3 Where Next 功能

支持 Lot 下一站目的地的预判与准时搬送.

- **下货时间预判**: 提供 Lot 下货时间的提前预判, 并与 MCS 系统联动, 实现 Lot 准时搬送到下一个目标机台.
- **上货顺序预判**: 与 What Next 功能联动, 预判当前 Where Next 的 Lot 的上货顺序.
- **Reroute 支持**: 根据 MCS 能力决定是否支持 Reroute 功能.

### 3. 系统集成和运维

#### 3.1 高效运作

支持最佳搬运方案与 Port 预约机制, 提升整体搬送效率.

- **最佳搬运方案**: Fully Auto 做到最佳搬运方案, 设备到设备是被要求且首推的搬送方式.
- **Port 预约与 Queue 机制**: 可预约设备的 Port, 当设备 Port 预约满后, 支持 Queue 预约机制, 将 WIP 预约到附近的 NTB 或 OHB 以避免无效搬运.

#### 3.2 系统集成

支持与 MES、APC、PMS 等周边系统的直接交互与实时信息同步.

- **周边系统集成**: 支持与 MES、APC、PMS 等其它周边系统 (ERP、MCS、Signoff、YMS) 之间的直接交互与实时信息交互.
- **MES 操作支持**: MES 支持派工系统对设备的操作, 如 Track In、Job Control 等;支持派工系统对更多事件操作, 如 Merge、Create Monitor Wafer、Auto Hold/Release 等.

#### 3.3 对象锁定

支持对象锁定功能, 避免资源争抢, 提高派工效率.

- **对象锁定**: 支持对象 (Lot/Port/POD 等) 锁定功能, 避免多个设备或 Port 争抢同一个 Lot, 以便提高派工效率.

#### 3.4 开发工具与报表

提供可视化的开发工具与丰富的报表能力, 降低开发与运维门槛.

- **可视化开发工具**: 提供快速、可视化的开发工具, 基于流程引擎开发 Rule, 支持调试、模拟及自定义组件开发;有详细的 Log 以及相应的 Log 分析工具, 有相应的系统异常报警机制.
- **外部数据导入**: 支持从外部系统导入的集成工具, 例如 Flat 文件、CSV 格式文件或者其他数据库.
- **报表输出**: 提供丰富的报表, 可查看不派工的原因、系统性能、执行效率等, 并能定期生成, 以 Text/Excel/HTML 的格式保存到用户自定义的目录里.
- **管理界面**: 配套的界面包括基础资料的设置、启用功能、参数设置等, 支持界面交互和数据集成展示;界面友好, 操作便捷, 具备相应的权限管理机制.

#### 3.5 功能修改与发布

支持在线发布与灵活的数据同步机制, 保障系统持续演进.

- **在线发布**: 支持在线功能发布, 并支持在下次运行时自动调用系统发布的最新版本规则.
- **数据同步**: 数据同步除全表同步外, 支持选定列的数据同步.
- **在线加列**: 当需要在目标数据库中添加新的列的时候, 不影响系统的运行.

#### 3.6 其它

支持高性能数据同步与系统级保障能力.

- **实时数据同步**: 数据同步具有不弱于 Oracle OGG 的实时性同步能力.
- **负载均衡**: 系统具有自动 Load Balance 的能力, 平均分配不同 Rule 的执行.
- **缓存优先**: 在能使用缓存数据库的情况下, 优先使用缓存数据库.
- **自动编译**: 具备自动编译的功能.
- **版本控制与事务**: 支持版本控制及回退功能;支持事务及异常处理.

## RTD Function List

### 1. 系统管理

#### 1.1 权限管理

支持基于角色的用户与权限管理, 实现精细化访问控制.

- **角色管理**: 支持对所有人员按照分组角色进行管理.
- **角色权限管理**: 支持根据分组角色进行权限管理, 可管控到具体某一个功能 (按钮), 如系统远程发布.

#### 1.2 基础数据管理

支持区域、派工时效与配置等基础数据的灵活管理.

- **区域管理**: 支持用户建立不同的区域来管理.
- **派工时效管理**: 支持用户按需求修改派工的时效.
- **派工配置管理**: 支持用户按需求修改派工配置.
- **机台派工管理**: 支持用户手动开关机台的派工状态.

#### 1.3 规则建模管理

支持派工规则的配置与版本管控.

- **规则管理**: 支持用户配置派工的先后顺序的规则.
- **版本管控**: 可保存多个版本, 可随时进行版本切换及查询.

#### 1.4 进度管理

支持派工记录的查询监控与人工干预操作.

- **派工监控**: 提供界面让用户查询已经派工的记录以及进度.
- **插单**: 支持用户将需要的工单手动指派到机台任务.
- **替换**: 支持用户手动替换已派工工单.
- **删单**: 支持用户手动将已派工工单删除.
- **派工顺序调整**: 允许用户调整机台上的任务顺序.

### 2. 场景支持

#### 2.1 Full Auto 场景

支持全自动化派工的各类业务场景, 包含但不局限于以下场景.

- **基础场景**: 支持 Basic Scenario、Fix/Internal Buffer Automation Scenario、WET Batch Scenario.
- **专项场景**: 支持 Sorter Scenario (including Wafer Start, Package etc.)、Pilot Run Scenario、Back Side Clean Scenario、Super-Hot Lot Scenario、Bonding/Debonding Scenario、Measurement Scenario、Tool Balance Scenario、Mixrun Scenario、FOUP Clean、FOUP Inspection Scenario.
- **Multi Lot 约束**: 同一个 FOUP 的 Multi Lot 只能被派到同一个机台, 但可根据派工规则决定其中 Lot 的派工顺序;工程师不能任意组合 Multi Lot, 只能 Run 同机台、同 Stage 或者同 Step 的 Lot.
- **全局派工因素**: 支持 Critical Ratio、Move Target、Q-time Urgency、Cycle Time、Shift Target、Hot Lot、交货时间、WIP Balance 等全局因素的派工规则设定和逻辑支持.
- **Q-time 管理**: 支持多样 Q-time 管理、Run Path、Q-time Urgency, 并能够根据 Q-time 提供报警功能;提供有效的 Q-time Loop 监控工具, 监控 Q-time 模型的执行效率.
- **设备派工优先调度**: 支持同 PPID 优先派货, 同组内机台优先派货.

#### 2.2 履历管理

支持 RTD 操作历史的完整记录与追溯.

- **操作履历**: 提供 RTD 操作历史记录, 支持履历追溯.

#### 2.3 补充需求

支持高可用、高并发与便捷管理的系统能力.

- **Code 高可用**: RTD 逻辑模块可以在不同地方重复调用, 而不是复制代码块.
- **高并发性**: 多个 Event 并发时, RTD 能做到快速处理, 互不影响速度.
- **管理便捷**: RTD 支持多选/全选设备进行启动、停止等操作.

#### 2.4 Scheduling

支持 Litho 及 WET 机台的精细化 Scheduling 策略.

- **全面状态考量**: 计算时, Scheduling 需考虑所有 Litho 的 WIP、机台状态、Recipe 状态、Reticle 状态、PPID 状态、MES Normal Constraint 以及 R2R.
- **Loading Balance**: 考虑机台间的 Loading Balance, Idle 或者最快将要 Idle 的机台优先 Schedule.
- **Chuck 切换优化**: 与前一个 Lot 最后一片 Wafer 所用 Chuck 不一样的 Lot 优先.
- **Reticle 连续性**: 相同 Reticle 连续进行, 减少 Reticle Change 的次数.
- **Reticle 预搬送**: 反应 Reticle 送检的时间, 提前将 Reticle 搬送至指定的 Stocker.
- **温控 Setup Cost**: 用户提供 Litho 机台升降温的识别方式, Litho 机台 Scheduling 时需考虑机台升降温的 Setup Cost, 减少机台升降温.
- **Litho Dedication**: 实现 Litho 机台 Dedication, 即第一层 Litho 使用的机台, 在第二层工艺需要在相同的机台上 Process.
- **小片数避让**: 避免连续派小片数的 Lot, 造成产能损失.
- **Batch Size 检查**: Check Max/Min Batch Size, Check Max/Min Wafer Size.
- **WET 瓶颈 Tank**: WET 在进行 Schedule 时考虑瓶颈 Tank, 派工时保证瓶颈 Tank 不 Idle.

### 3. 系统集成和运维

#### 3.1 多系统集成

支持与 MES、EAP、SPC、ALARM、MCS、EMS 等多系统集成.

- **MCS 集成**: 支持搬运任务下发, 实现自动化搬运.
- **MES 集成**:
    - WIP 清单: 可加工工单信息清单.
    - 机台主数据: 同步机台主数据信息 (如果需要).
    - 批次信息获取: 批次信息下载.
    - 物料库存: 查询线边库的库存信息.
    - 耗材管理: 查询耗材的信息.
- **EMS 集成**:
    - 机台主数据: 同步机台主数据信息 (如果需要).
    - 机台台账: 机台信息查询.

#### 3.2 功能修改与发布

支持在线发布与灵活的数据同步机制, 保障系统持续演进.

- **在线发布**: 支持在线功能发布, 并支持在下次运行时自动调用系统发布的最新版本规则.
- **数据同步**: 数据同步除全表同步外, 支持选定列的数据同步.
- **在线加列**: 当需要在目标数据库中添加新的列的时候, 不影响系统的运行.

#### 3.3 其它

支持高性能数据同步与系统级保障能力.

- **实时数据同步**: 数据同步具有不弱于 Oracle OGG 的实时性同步能力.
- **负载均衡**: 系统具有自动 Load Balance 的能力.
- **缓存优先**: 在能使用缓存数据库的情况下, 优先使用缓存数据库.
- **自动编译**: 具备自动编译的功能.
- **版本控制与事务**: 支持版本控制及回退功能;支持事务及异常处理.
