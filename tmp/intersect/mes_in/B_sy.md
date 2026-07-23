### 4. 载具管理

#### 4.1 Create Carrier (载具创建)

支持载具的批量创建.

- **创建载具**: 允许用户创建 Carrier, 用户可以根据 Carrier 类型类别和 Carrier 型号创建指定数量的 Carrier.

#### 4.2 Assign Carrier (载具分配)

支持为批次分配载具.

- **分配载具**: 允许用户将 Carrier 分配给没有 Carrier 的批次, 指定的载体必须是 Free 的, 晶片的顺序可以在该功能中更改.

#### 4.3 Exchange Carrier (载具交换)

支持同类型载具的交换.

- **交换载具**: 允许用户交换载具, 原始 Carrier 和交换 Carrier 应为同一类型.

#### 4.4 Hold Carrier (载具扣留)

支持载具的 Hold 操作.

- **Hold CST**: 允许用户 Hold CST, CST 状态应更改为 HOLD.

#### 4.5 Release Carrier (载具放行)

支持载具的放行操作.

- **放行 CST**: 允许用户放行 CST, 完成此功能后, CST 应处于 Hold 之前的状态.

#### 4.6 Clean Carrier (载具清洗)

支持载具清洗流程管理.

- **清洗管理**: 允许用户为任何 Carrier 进行清理操作, 设置完成后其状态应为 WaitClean, 完成清洗后状态应为 Free.

#### 4.7 载具查询功能和历史查询

支持载具状态与历史的多条件查询.

- **信息查询**: 允许用户查询 Carrier 的状态, 历史, 实时信息, 装载的 LotID 等, 可以根据用户选择的不同条件进行查询.
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 \* 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.

#### 4.8 Change Slot Map Info (槽位信息变更)

支持载具内晶片映射关系的调整.

- **Slot Map 变更**: 允许用户更改同一 Carrier 中晶片和原始批次之间的关系.

#### 4.9 Modify Carrier Attribute (载具属性修改)

支持载具属性的维护.

- **属性修改**: 允许用户修改 Carrier 的属性.

#### 4.10 载具类型卡控

支持载具类型与流程位置的匹配管控.

- **类型防呆**: CST 跟 ProcessLocation 的 Mapping 关系需要可以配置, 实现流程管控中的 CST 类型防呆卡控.

#### 4.11 PCD

支持载具组成部件与清洗过帐管理.

- **载具组成**: Carrier 需要由 Cassette/Pod/Door 作为属性组成, RFID 内写入的是 Carrier ID (RFID 安装在 Cassette 中), Cassette/Pod/Door 扫码输入, 系统以 Carrier ID 做索引.
- **清洗管理**: 支持清洗周期管理, 支持清洗机台的 PCD 过帐管理.

### 5. Reticle 管理

#### 5.1 Add Reticle (新增光罩)

支持 Reticle 的注册与属性定义.

- **新增 Reticle**: 工程师可以通过特定的命名规则添加新的 Reticle ID, Pod, Film Type, Max Wafer Clean Count, Max Lot Clean Count 等等.

#### 5.2 Hold Reticle (光罩扣留)

支持 Reticle 的 Hold 操作.

- **Hold Reticle**: 工程师可以使用此功能来 Hold Reticle, 用户需要输入 Hold Code 和注释.

#### 5.3 Release Reticle (光罩放行)

支持 Reticle 的放行操作.

- **Release Reticle**: 工程师可以使用此功能 Release Reticle, 用户需要输入 Release Code 和注释.

#### 5.4 Return Reticle (光罩退回)

支持闲置 Reticle 的退回管理.

- **Return Reticle**: 如果 Reticle 不再使用, 工程师可以将 Reticle ID 返回到 Reticle 版室.

#### 5.5 Scrap Reticle (光罩报废)

支持 Reticle 的报废操作.

- **Scrap Reticle**: 工程师可以使用此功能来报废 Reticle, 用户需要输入 Scrap Code 和注释.

#### 5.6 UnScrap Reticle (光罩解报废)

支持报废 Reticle 的恢复.

- **UnScrap Reticle**: 如果 Reticle 已经报废, 经过工程师的验证仍然可以使用, 工程师可以使用此功能来解开 Reticle.

#### 5.7 Bank In Reticle (光罩入库)

支持 Reticle 移入 Mask 室.

- **Bank In**: 工程师可以使用此功能将需要的 Reticle 移动到 Mask 室.

#### 5.8 Bank Out Reticle (光罩出库)

支持 Reticle 移出 Mask 室.

- **Bank Out**: 如果经过工程师的验证 Reticle 仍然可以使用, 工程师可以使用此功能将 Reticle 从 Mask 室中取出.

#### 5.9 Modify Reticle (光罩修改)

支持 Reticle 属性的维护.

- **属性修改**: 工程师可以修改 Reticle 的各种属性.

#### 5.10 Inspect Reticle (光罩检查)

支持 Reticle 的检查操作.

- **检查 Reticle**: 工程师可以使用此功能来检查 Reticle.

#### 5.11 Clean Reticle (光罩清洗)

支持 Reticle 的清洁操作.

- **清洁 Reticle**: 如果需要清洁 Reticle, 工程师可以清洁 Reticle ID.

#### 5.12 Reticle Location (光罩位置)

支持 Reticle 位置的记录追踪.

- **位置记录**: 支持记录 Reticle 位置, 例如 Stocker, 机台, Maskroom 等.

#### 5.13 Reticle Pod (光罩盒)

支持 Reticle Pod 的信息管理.

- **Pod 管理**: 工程师可以为 Reticle 添加一个 Pod ID, Pod 信息包括 Pod ID, Pod 类型, Pod 容量, 清洁周期等.

#### 5.14 Change Reticle Status (光罩状态变更)

支持 Reticle 状态模型的配置化管理.

- **状态配置**: 可以通过配置方式实现各种状态和切换规则.

#### 5.15 Reticle TrackIn/TrackOut (光罩进出站)

支持 Reticle 在 Litho 机台的进出站管控.

- **进出站过帐**: 支持在特定 Litho 机台做 Reticle 的进出站过帐并记录对应历史.
- **联动卡控**: Lot 所需的 Reticle 进站后, Lot 才允许进站; Lot 使用的 Reticle 需要等待 Lot 出站后, 才允许出站.
- **数量卡控**: 支持机台最大 TrackIn 的 Reticle 数量卡控, 超出数量不允许 TrackIn.

#### 5.16 Printdown (PD 管控)

支持 Reticle 曝光次数与有效期的管控.

- **PD 设定**: 支持设置 PDFlag, 设置 PD 最大使用次数和有效期.
- **超限卡控**: Max Using Count 超限后, 卡控批次不能进站, 状态切为 WAIT_PD, Track In 后 Status 切为 IN_PD.
- **历史记录**: 系统保留 Reticle 和 Reticle Pod 的状态变更历史记录.

#### 5.17 IRIS

支持 Reticle IRIS 检验的管控.

- **IRIS 设定**: 支持设置 IRISFlag, 设置 IRIS 的管控 Spec, 设置 IRIS 最大曝光 Wafer 数量.
- **收值判定**: 支持 IRIS 收值和判定.

#### 5.18 查询主界面和历史查询

支持 Reticle 信息的多条件查询.

- **信息查询**: 工程师可以使用此功能查看 Reticle 的详细信息, 用户可以根据 Reticle ID, Group, Pod and EQP 来选择 Reticle 的具体信息, 可以根据用户选择的不同条件进行查询.
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 \* 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.

#### 5.19 Reticle Group (光罩组)

支持 Reticle 分组管理.

- **ReticleGroup**: 支持设定 ReticleGroup, 下面关联多个 Reticle.

### 6. Lot 管理

#### 6.1 Lot Plan (批次计划)

支持多来源、多方式的批次创建.

- **ERP 联动创建**: 可以跟 ERP 系统联动, 创建新的 Lot 和半成品 Lot; 也支持在 MES 系统中独立创建 Lot, 支持 Batch 创建 Lot.
- **物料选择**: 支持创建 Lot 的 Wafer 选择不同物料, 而不是同一个 Lot 的 Wafer 只能用一种物料.
- **订单信息**: 支持创建 Lot 时具备记录 PO, Order, 客户信息等功能.
- **数量与编码**: 创建 Lot 的 Qty 可以自定义; 创建 Lot ID 时可以根据 LotType 等信息自动进行编码.
- **创建卡控**: 未到规定的下线时间不允许下线 Lot; 物料不足时, 不允许创建 Lot.
- **StartHold**: 支持 StartHold 功能, 并且可选开启还是关闭.

#### 6.2 Cancel Lot Plan (取消批次计划)

支持未下线批次计划的取消.

- **取消创建**: 创建的 Lot 还未下线之前, 可以取消创建 Lot, 并且 LotID 编码不会被占用.

#### 6.3 Change Lot Plan (变更批次计划)

支持批次计划属性的修改与追溯.

- **属性修改**: 可以修改 Plan 好的 Lot 的 Lot 类型, 优先级, StartHold, Owner, CustomerID, Plan Start Day/Due Day.
- **历史记录**: 所有修改需要具备历史记录.

#### 6.4 Lot Plan Portal 和历史查询

支持批次计划的多条件查询.

- **信息查询**: 工程师可以使用此功能查看 Lot 的详细信息, 可自定义结果排序, 可以根据用户选择的不同条件进行查询, Lot ID 条件支持同时输入逗号分隔的多个 LotID 模糊查询.
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 \* 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.

#### 6.5 Bank In/Out

支持批次的入库 / 出库操作.

- **Bank 操作**: 可以单个 Lot 或多个 Lot 同时做 BankIn/BankOut 动作.

#### 6.6 Ship/UnShip

支持批次的出货与取消出货.

- **出货管理**: 支持 Lot Ship 以及取消 Ship.

#### 6.7 Scrap/UnScrap

支持批次的报废与取消报废.

- **报废管理**: 支持 Lot 整批报废以及取消报废.

#### 6.8 Terminate/UnTerminate

支持批次的终止与取消终止.

- **终止管理**: 可以针对 Lot 做 Terminate 动作或 UnTerminate 动作.

#### 6.9 Finish/UnFinish

支持批次的完工与取消完工.

- **完工管理**: 可以针对 Lot 做 Finish 动作或 UnFinish 动作.

#### 6.10 Wafer Start

支持计划批次的投线作业.

- **WFS**: 针对 Plan 的 Lot 进行 WFS (Wafer Start).
- **载具与物料**: 绑定载具并进行防呆卡控; 指定物料, 支持 By Wafer 指定物料.

#### 6.11 分批 / 合批

支持逻辑与物理的分批 / 合批作业.

- **分批**: 需要支持逻辑 / 物理分批; 物理分批动作后, 要自动触发分批的 Sorter Job, 后续使用 Sorter 站点标准作业进行分批.
- **合批**: 需要支持逻辑 / 物理合批; 物理合批动作后, 要自动触发并批的 Sorter Job, 后续使用 Sorter 站点标准作业进行合批.
- **属性继承**: 当分批时, 子批默认继承母批的属性, 包括 FutureAction, Q-Time, Wafer 的前量数据, 加工站所有信息等; 当子批 Merge 到母批时, 子批的 Future Action 等信息需要 Merge 到母批上.
- **合批防呆**: 合批时需要具备防呆卡控, 确保 Lot 核心属性一致, 不得产生 MO 风险, 例如 Lot Flow 版本, 站点, 污染等级, 优先级等等.

#### 6.12 Hold/Release

支持批次扣留与放行的完整管控.

- **多原因 Hold**: 可以同时用不同原因 (Reason Code) 对同一个 Lot 加以 Hold, 支持 Batch Hold.
- **历史追溯**: Hold 和 Release 要有历史记录, 可以清晰的跟踪 Release 动作对应的是哪个 Hold 动作, 历史要可以查询; Release Hold 时须选择相应的 Hold Code, 并填写 Release Comment.
- **权限管控**: 根据 Department 以及 Reason Code 管控 Hold/Release 动作时的权限.
- **批量放行**: 单一 Lot 有多个 Hold Code, 可以选择多个 Hold 使用相同的 Release Code 一次 Release.
- **异常处置**: 具备强制将机台上发生异常的 Lot 做出站操作的系统功能; 支持 Running Hold, 因机台故障等各种原因而将所跑的 Lot Hold 住, 再使用 Recovery Run Card 进行后续处理.

#### 6.13 FutureHold

支持未来站点扣留的设定与管理.

- **FutureHold 设定**: 支持 Lot 在现在的 Flow 上, 对未来某个站点设置 Future Hold.
- **生效时机**: 按生效时间点不同, FutureHold 可以分为 PreFutureHold (进站就 Hold) 和 PostFutureHold (TrackOut 时 Hold).
- **多重设定**: Lot 的 Future Hold 支持 Multi Future Hold 的设置, Future Hold 的设置可以被更改, 删除.
- **版本继承**: Lot Future Hold 生效后与版本无关, 版本升级后 Future Hold 应该被继承.

#### 6.14 Lot Portal 和历史查询

支持批次信息的多维度查询.

- **查询条件**: 查询条件包括 Lot ID, Lot Type, Lot Priority, Location Work Area, Carrier ID, Lot Status, Product, Plan, Stage, EQPGroup ID, Production/NPW/Engineer, Normal/RunCard/All, 可以根据用户选择的不同条件组合进行查询.
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 \* 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.

#### 6.15 多批次操作

支持特殊机台的多批次协同作业.

- **多批次进出站**: 支持炉管 BatchLot 操作进出站和 CancelTrackin; 支持 Bond 机台多批次一同进出站和 CancelTrackin; 支持 WET 机台多批次一同进出站和 CancelTrackin.

#### 6.16 进出站

支持批次进出站作业与防呆卡控.

- **进出站模式**: 支持手动和自动进出站, 和 CancelTrackin.
- **Chamber 选择**: 针对并行 Chamber 机台, MFG 可以手动选特定 Chamber 进站.
- **进站防呆**: 进站之前需具备防呆卡控, 例如设备状态, Lot 状态, Flow 站点信息匹配, ECS, Season, Monitor, RCP, 污染等级等等.

#### 6.17 快速过站 Process Lot

支持批次的快速加工过站.

- **快速过站**: 支持快速过站功能, 指定 Lot 和 Lot 当前站的可用设备, 可对批次进行快速加工和过站.

#### 6.18 Change Hold Code (变更扣留代码)

支持已存在 Hold 的代码变更.

- **EditHold**: 对存在的 Hold 有权限的前提下可以 EditHold; ChangeHold 以后, Release 权限也相应变更.
- **历史记录**: ChangeHold 要记录详细的历史, 包括 Change 前后的 HoldCode 记录.

#### 6.19 Update Lot Attributes (批次属性更新)

支持批次属性的分级修改.

- **AdjustLot**: AdjustLot 功能提供常规属性的修改.
- **特殊属性权限**: 特殊属性支持单独权限修改, 例如仅仅修改 LotOwner 或者 Priority.

#### 6.20 Ship Label (出货标签)

支持出货标签打印.

- **标签打印**: 标签打印需要打印机联调一起使用, 例如 Zebra 打印机.

#### 6.21 Reassign

支持批次产品与流程的重指派.

- **版本升级与变更**: 支持 Lot 在现在的站点上进行 Product, Plan 的 Version Upgrade, 或是 Change Product, Plan.
- **By Lot Reassign**: 按多种条件查询和选择一个或多个 Lot, 指定目标产品 (使用产品当前激活的流程和版本), 工序和 Step 进行 Reassign, 可选择是否保留 Lot 的 Future Hold.
- **By ProductChange Reassign**: 按 Product 查询和选择一个或多个 Lot, 指定目标产品 (使用产品当前激活的流程和版本) 进行 Reassign, 系统自动 Reassign 每个 Lot 到目标产品和流程上, 并定位到与 Lot 当前 Step Seq 相同的 Step; 如果目标产品流程上没有 Lot 对应的 Step, Reassign 失败并提示, 可选择是否保留 FutureHold.
- **By FlowVersionUp Reassign**: 按 Product 查询和选择一个或多个 Lot 进行 Reassign, 系统自动 Reassign 每个 Lot 到目标产品和流程上, 并定位到与 Lot 当前 Step Seq 相同的 Step; 如果目标产品流程上没有 Lot 对应的 Step, Reassign 失败并提示, 可选择是否保留 FutureHold.
- **自动 Reassign**: 支持 Lot 出站后自动执行 Reassign, 并且具备防呆卡控, 防止不具备升版条件的 Lot 错误的升版导致 MO.

#### 6.22 RepositionStep (跳站)

支持批次站点的重新定位.

- **权限管控**: 支持特殊权限管控.
- **防呆卡控**: 支持防呆卡控, 防止污染等级或者载具不匹配等错误的跳站.

#### 6.23 Q-Time 显示

支持批次 Q-Time 信息的可视化展示.

- **Q-Time 展示**: LotInfo UI 针对多条 Q-Time 都要有显示详细信息的 UI 展示, 并且展示 Q-Time 的相关信息, 例如 Start/End 站点, Q-Time 触发时间等等.

#### 6.24 Rework 显示和功能

支持返工信息的展示与返工操作管控.

- **Rework 展示**: LotInfo UI 针对 Rework 要能够显示详细的信息, 包括 ByStep/ByRoute Rework 次数, 剩余次数, 设定的 Rework 站点详细信息等.
- **Cancel Rework**: 支持 Lot 在 Rework 流程开始前的 Cancel Rework, Lot 自动返回到 Rework 开始前的工序.
- **超限扣留**: 超过 Rework 次数, Lot 自动被 Hold.

#### 6.25 Loop 显示

支持循环信息的可视化展示.

- **Loop 展示**: LotInfo UI 针对 Loop 要能够显示详细的信息, 包括 Loop 次数, 剩余次数, 设定的 Loop 站点详细信息等.

#### 6.26 FetchStep

支持上下游站点信息的查询展示.

- **站点信息**: 支持显示 Flow 的上下游站点信息, 并且显示对应的 FH, Q-Time 设定等未来步骤的关键工艺设定; 支持显示 ReworkFlow.
- **ECS 预检**: 支持显示未来站点的 ECS 卡控结果, 得出可以加工的机台.

#### 6.27 SubconOut/In (委外加工)

支持跨厂委外加工的多种模式.

- **委外模式**: 支持前半部分在其它 Fab Run, 后半部分在本厂 Run; 后半部分在其它 Fab Run, 前半部分在本厂 Run; 一部分在本厂 Run, 然后外包给其它 Fab Run, 再又回到本厂 Run 等多种委外场景.

#### 6.28 Add Comment (添加备注)

支持批次站点备注.

- **站点备注**: 支持给 Lot 在站点增加 Comment.

### 7. Bond/Debond

#### 7.1 Bond/Debond 设定

支持绑定 / 解绑关系与站点的完整定义.

- **产品绑定关系**: ByProd 设定主 Prod 和副 Prod 的绑定关系; 支持 WaferBond 时的 TopProd/BottomProd 关系的设置, 并且需要跟 EAPAuto 联动.
- **站点联动**: 支持主副 Bond 站点的联动设定, 支持主副 Debond 站点的联动设定; Bond 站点和 Debond 站点需要设定特殊标记, 不得被混用.
- **循环与模式**: 支持副 Prod 的 Loop 循环使用设定; 支持永久 Bond 和临时 Bond.

#### 7.2 Bond/Debond 操作

支持主次产品批次的绑定作业与追溯.

- **Bonding 指定**: 主次产品批次一起作业, Dispatch 前或 Move Out 时指定 Bonding 关系, 在指定 Bonding 关系时可调整主次产品批次的 Wafer 顺序, 系统成对绑定; 如果是 Dispatch 前指定 Bonding 关系, 则没有指定 Bonding 关系时 Lot 不能进站加工.
- **Bond 后管控**: Bond 后, 此产品的 Lot 状态变为 Bonded, 系统只操作主产品 Lot; 支持多层 Bond, 即 Bond 后可以再 Bond.
- **Debonding**: 支持 Debonding, 走过带有 Debonding 逻辑的工步自动 Debonding, Debond 出来的批次需要指定合法的新 Carrier; Debond 也支持多层 Debond, 可以指定 Debond 哪一层, 缺省是后 Bond 的先 Debond.
- **次产品流程**: 次产品可以定义完整的 Flow, 如果可以 Debonding, 可设定循环次数并进行控制.
- **追溯**: 可以查询主次产品批次的完整 Wafer 历史, 可以追溯 Wafer 到 Wafer 的 Mapping 关系.

### 8. Run Card Management

#### 8.1 Run Card Type (Run Card 类型)

支持实验与异常两类 Run Card.

- **SRC/RRC**: 支持 Split Run Card (SRC) 和 Recover Run Card (RRC); SRC 一般由 PIE 根据实验要求开具, RRC 则一般由 MA 在发生异常后开具.

#### 8.2 RC 常规功能

支持 Run Card 的结构、签核与执行管理.

- **RC 结构**: 每个 RC 包括一个 Split Step, 多个 Loop Flow, 一个 Merge Step; 在 Split Step 可以不进行分批, 整个母批进入 RC; RC 可以连续执行多个, 中间无需走主流程 Step.
- **Split/Merge**: 支持自动 Split 和 Merge, 或人工 Split 和 Merge.
- **审核激活**: RC 需要审核和激活, 可按照 RC 开具的部门走不同的审核流程, 签核顺序需要可调整.
- **Loop Flow 定义**: Loop Flow 可以来源或基于现有 Flow 进行修改, 长度没有限制, 可以重用; 可以指定 EQP/EQP Group, 指定 Recipe, Check RCP, 指定量测选片等; Loop Flow 每个 Step 可以设定 Recipe, EQP, EQPGroup, Reticle, EDC Plan, EDC Wafer List, EDCSpec 等.
- **界面共用**: RC Lot 与普通 Lot 共用 Dispatch 界面, 各种 Trans 界面, 查询界面, 以及 Move In 和 Move Out 逻辑.
- **SPC 集成**: 支持 RC EDC 数据采集进 SPC, 并且支持手动勾选开关是否进 SPC.

#### 8.3 SRC

支持 Split Run Card 的开具与集成.

- **开具方式**: 支持当站开 SRC 或者在未来步骤开 FutureSRC, 已经有 FH (包括 byProdFH) 的站点需要可以开 RC.
- **异常嵌套**: 支持 SRC 发生异常嵌套生成 RRC 的功能.
- **系统集成**: SRC 支持跟 APC 等系统集成; SRC 支持 RCP 系统联动, 并且有对应的设置防呆卡控.
- **特殊 RC**: 支持跳步 RC 等特殊 RC 功能.

#### 8.4 RRC

支持 Recover Run Card 的多种应用场景.

- **PartialRRC**: 支持 PartialRRC.
- **Rework**: 支持 RRC 方式 Rework.
- **嵌套与场景**: 支持 RRC 方式嵌套 SRC, 支持 Bond/Debond 场景的 RRC.

#### 8.5 RC Q-Time

支持 Run Card 内的 Q-Time 管理.

- **RC Q-Time 设定**: 支持设定 RC Q-Time; 支持在 RC 内单独设定 Q-Time 开始和结束站点, 且开始和结束站点必须配对出现, 不得缺失设定导致 Q-Time 无法正常结束.
- **主流程继承**: 支持在 RC 设定时自动识别主 Flow Q-Time 结束站点, 并且在 RC 内继承该 Q-Time 结束站点的任务; 支持在 RC 设定时自动识别主 Flow Q-Time 起始站点, 并且在 RC 内继承该 Q-Time 起始站点的任务.
- **跨流程计时**: 支持 Lot 在主 Flow 开始一个 Q-Time 且在 RC 内结束该 Q-Time; 支持 Lot 在 RC 内触发继承自主 Flow 的 Q-Time 计时, RC 结束回到主 Flow 后结束该 Q-Time.


### 20. 物料及 BOM 管理

#### 20.1 产品及物料

支持物料基础数据的继承.

- **基础数据**: 可继承 ERP 的物料形成 MES 的产品, 物料基础数据.

#### 20.2 物料及 BOM 管理

支持物料与 BOM 的完整管控体系.

- **BOM 体系**: 针对物料和产品可定义物料的管控属性 (例如化学品的时效等); 可承接 ERP 的产品 BOM 形成 MES 的产品 BOM, 并基于产品 BOM 结合工艺流程形成生产 BOM (工单 BOM, 工序 BOM); 在 MES 系统可自行创建 BOM (工单 BOM, 工序 BOM); 产品, 物料, BOM 可启用版本管理.
- **工序物料**: 支持设置工序消耗的物料 BOM; 支持设置替代料和替代顺序.
- **物料校验**: 支持设备 Mount 物料的正确性, 有效性检查; 支持批次进出站物料的正确性, 有效性检查.
- **消耗管理**: 支持物料使用消耗的历史记录, 主要运用于可定量统计的物料消耗 (按 Qty, Lot, Wafer 数进行消耗); 系统支持原材料的消耗扣减, 同时也支持辅材 / 耗材消耗; 系统支持半成品自动转原材料, 并按照用量完成消耗记录.
- **寿命管理**: 提供寿命有效期的定义, 包括 Life Time, 回温时间, 次数; 生产过账时能够获取寿命, 并及时进行报警; 联动 EAP 实现自动报警和机台控制.

#### 20.3 产品绑定 BOM 设置

支持产品与 BOM 的绑定定义.

- **基础物料信息**: 支持定义基础物料信息.

#### 20.4 特殊材料管控 (锡膏、光刻胶)

支持特殊材料的专项管控.

- **特殊材料**: 对锡膏, 光刻胶等特殊材料的编码, 属性, 分类, 状态, 使用范围, 生命周期, 安全库存等进行管理.

#### 20.5 物料校验

支持物料上机的自动校验.

- **上机校验**: 物料上机时, 系统根据上机物料信息, 自动校验物料型号和物料效期, 超出需要提醒.

#### 20.6 物料消耗

支持按标准用量的物料消耗管理.

- **消耗扣减**: 依据 BOM 中每个对应工站设定的标准用量完成物料消耗, 并支持 OP 实际调整消耗数量, 当消耗数量和用量不一致情况下进行提醒确认.

#### 20.7 物料消耗查询

支持物料消耗的多维度追溯.

- **消耗追溯**: 消耗数据 By 批次, 物料等维度进行查询和查看追溯.


### 25. Wafer Mapping 管理

#### 25.1 Wafer Mapping

支持 WaferMap 文件的存储管理.

- **文件存储**: 支持 WaferMap 文件存储路径监控及存储.

#### 25.2 Wafer Mapping 管理

支持 WaferMap 的解析、编辑与追溯.

- **解析展示**: 支持 WaferMap 文件格式解析及图形化展示; 支持 WaferBinCode 配置及转换.
- **编辑转换**: 支持 WaferMap 人工编辑功能; 支持 WaferMap 自动角度转换; 支持前后工序 Map 合并, 生成新的 Map, 和导出.
- **追溯统计**: 可基于客户批, 产品批, 批次号, 显示对应的 Wafer Map, Strip Map, 并可基于图谱结果数据进行数据统计, 比如 Gross Die, Good Die, Fail Die, Yield, 每个 Defect Code 的统计; 关联 WaferMap 与 StripMap 的关系, 形成完整的产品全生命周期追溯.
- **EAP 联动**: 部分功能需要联动 EAP 实现.

### 26. Strip（Wafer）Mapping 管理

#### 26.1 Strip（Wafer）Mapping

支持 Strip Map 的展示.

- **Map 展示**: 产品支持 MES 界面上 Strip Map 展示.

#### 26.2 Strip（Wafer）Mapping 管理

支持 Strip Map 的维护与追溯.

- **Map 维护**: 支持 Strip Map 的导出; 支持 Strip Map 修改功能; 支持 Strip Map 版本管理; 支持 Strip Map 的上传, 下载和对比.
- **追溯统计**: 可基于客户批, 产品批, 批次号, 显示对应的 Wafer Map, Strip Map, 并可基于图谱结果数据进行数据统计, 比如 Gross Die, Good Die, Fail Die, Yield, 每个 Defect Code 的统计; 关联 WaferMap 与 StripMap 的关系, 形成完整的产品全生命周期追溯.
- **图谱类型**: 支持基板 Strip Map 图谱, 同时也支持 Wafer (Carrier/Base Die) Map 图谱.
- **EAP 联动**: 部分功能需要联动 EAP 实现.


