## MES Function List

### 1. 工厂基础建模

#### 1.1 Factory Base Data Modeling (工厂基础数据建模)

支持 FAB 级基础架构与产品工艺体系的建模定义.

- **区域与设备对应**: 支持 FAB/区域/设备对应关系定义, 设备可分配到不同区域, 用于工艺工程师/设备工程师/制造等不同目的.
- **产品架构模式**: 支持产品设置 (工艺--产品--生产流程--工序--工步--对应的 Recipe 与机台关系的 MES 架构模式), 包括产品工艺信息的定义.

#### 1.2 Equipment Modeling (设备建模)

支持设备分类、能力、配方参数及单元结构的完整建模.

- **设备分类管理**: 支持 Litho Inline Tool/Chamber Tool/Internal Buffer Tool/Fix Buffer Tool/Stocker 等设备类型的定义, Equipment 可自定义和转换.
- **设备能力定义**: 支持 Offline, Online Local, Online Remote 等设备能力的定义.
- **配方与参数配置**: 支持设备配方及参数等配置设置.
- **设备 Unit 定义**: 支持 Chamber, Header, Tank 等设备 Unit 的定义.
- **批量数量定义**: 支持设备批量数量的定义, 例如最大和最小 Wafer 数, 最大和最小载体数量的定义.

#### 1.3 Stocker Modeling

支持 Stocker 类型与存储形式的定义.

- **Stocker 类型**: 支持定义 Stocker 的类型, 如 Wafer STK, Reticle STK 等.
- **存储形式与容量**: 支持定义 Stocker 的存储形式及 STK 的容量.

#### 1.4 Process Basic Data Modeling (工艺基础数据建模)

支持产品、流程、配方等工艺基础对象的定义与版本控制.

- **产品定义**: 支持定义工厂生产的成品/半成品等产品及其属性, 可定义产品的 Wafer 类型, 产品责任人.
- **多流程指定**: 设置产品基本信息时, 可为产品指定一个或多个流程, 并指定缺省流程.
- **产品组与 Reticle 设置**: 支持定义产品组 (产品的 Type 定义), 不同工艺的产品类别, 以及 Reticle 的设置 (能定义不同产品的 Photo Layer 的光罩设置).
- **机台配方定义**: 支持设备配方的定义.
- **版本控制**: 支持 Active 版本的定义, 每个 Object 只有唯一的 Active 版本号; 流程支持版本和状态 (Unfrozen/Frozen/Active) 管理, Unfrozen 状态下可修改, Frozen 和 Active 状态下无法修改, 激活后的版本才会生效; Active 后不能修改和删除, 如需修改必须升级版本后对新版本进行修改并重新 Active.

#### 1.5 Code Define (代码定义)

支持各类业务代码与机况状态的定义.

- **Reason Code**: 提供 Reason Code 的定义, 用于 Hold, Rework 等各种功能.
- **机况定义**: 提供机况定义及其对应的 E10 状态, 支持设置不同机况下的跑货限制, 机况转换规则等.
- **用户自定义代码**: 提供用户自定义代码定义, 增加属性扩展的灵活性, 方便使用自定义逻辑.

#### 1.6 Lot Type Define (批次类型定义)

支持批次类型体系及关联规则的定义.

- **类型与子类型**: 提供批次类型和批次子类型定义.
- **命名规则**: 提供基于批次子类型的批次 ID 命名规则定义, 如起始字符.
- **状态转换规则**: 系统可以为特定批次子类型运行时的机器状态转换提供不同的规则定义.

#### 1.7 Lot Naming (批次命名)

支持灵活的 LotID 命名规则配置.

- **自定义命名**: LotID 命名规则支持通过配置方式自定义, 满足工厂多样性的要求.
- **子批命名**: 当进行批次分批时, 应自动生成子批次 LotID.

#### 1.8 用户组

支持基于用户组的统一权限管理.

- **用户组创建**: 用户可以创建一个用户组, 该组具有相同的权限.
- **按组管控**: MES 可以按组管理用户控制; 每个用户都属于某个用户组, 受用户组管理或控制, 一个命令作用于每个用户.

#### 1.9 权限管理

支持细粒度、多层次的权限管控体系.

- **操作安全管理**: 支持用户/用户组的添加/更新/删除等操作安全管理, 并对关键操作提供双重确认支持.
- **功能与数据权限**: 支持由用户/用户组控制的功能权限, 由用户部门控制的设备权限和持有/释放 (Hold/Release) 权限.
- **菜单与按钮级权限**: 菜单和操作按钮都要可以控制权限, 系统默认要对按钮具备权限管控, 不能只是对菜单权限管控; 支持用户组的角色配置, 为角色分配权限, 可以在菜单, 按钮级别明确权限.
- **设备/区域权限**: 支持设备/区域和权限设置, 操作者只能使用属于指定设备的设备.
- **菜单布局统一**: 系统的菜单布局和顺序应该默认统一; 相同权限组或用户组的用户登陆系统后看到的菜单布局完全一致, 不同权限组的用户登陆后菜单需按默认统一顺序展示具备权限的菜单, 而不能无序展示.
- **操作证书管理**: 支持操作员设备操作证书管理, 只有持有证书的操作员才能使用设备, 支持对接 OA 系统.

### 2. 流程建模和管理

#### 2.1 Process Specification Editor

支持类 Windows-Explorer 风格的工艺规格查看与在线编辑.

- **层次结构查看**: Process Specification Editor 是一个类似于 Windows-Explorer 风格的查看器, 提供带有 Process Planning 信息的层次结构.
- **运行时修改**: 用户可以更改其值并在运行时应用; 小批量修改直接在编辑器里进行, 大批量修改通过批量导入完成.

#### 2.2 Recipe

支持 Recipe 的结构、生命周期与归属管理.

- **多腔设备支持**: 支持多腔设备, 支持腔体串并联.
- **生命周期管理**: 支持 Recipe 生命周期管理.
- **类型与区域**: 可对 Recipe 的类型进行设置 (制程/测量等), 并可以定义 Recipe 所属区域.
- **产品设备挂载**: 不同的产品或产品组下可以挂不同的设备.

#### 2.3 Flow

支持模块化、可复用的流程建模体系.

- **多层模块化结构**: 在流程和配方之间需要有一个多层模块化结构, 至少有一个额外的层 (模块或子计划), 以便于未来的维护; 模块可以在流程内部和流程之间重复使用, 若系统提供的流程结构相对简单, 则需提供高效准确的系统解决方案应对未来大量变化.
- **多产品共用与 Bond 支持**: 一个流程可以被多个产品使用; 支持 Bond/Debond, 支持临时 Bond 和永久 Bond.
- **循环数设置**: 提供流程内部循环数设置, 可在批量界面查看.
- **流程模板**: 提供构建流程模板, 可以快速直观的构建流程并直接导入系统; 导入之前, 应在规则上预先检查流程.
- **流程导出**: Active Flow 或者任何一个版本的 Flow 均支持导出.

#### 2.4 Multipath Flow (多路径流程)

支持按预设条件灵活跳转的分支流程.

- **分支跳转**: 允许手动或在预设条件下灵活跳转到正常产品流上的其他分支流程.
- **预设条件**: 预设条件包含手动, byProd, ByEDC 等; byProd 针对不同 Prod 共用一个 Process 的场景, 可以按照不同 ProdID 自动选择走不同的分支; ByEDC 针对量测结果的不同区间, 自动选择该区间对应的分支.

#### 2.5 Reticle

支持 Reticle 组的管理与查询.

- **Reticle 组**: 需要 Reticle 组的概念, 可以将相同类型的光刻分组为一组, 实际在线使用时可以选择其中之一完成光刻.
- **整套信息查询**: 系统可以查询每个产品的整套 Reticle 信息.

#### 2.6 Product

支持产品共用流程与属性动态匹配.

- **共用 Flow**: 不同 Prod 可以共用同一个 Flow, Prod 可以设定基本属性.
- **ProdAttribute**: 具备 ProdAttribute 功能, 可针对 Recipe, Reticle, EDCPlan 进行动态匹配.

#### 2.7 Rework

支持返工次数的精细化设定与管控.

- **超限授权**: Rework 次数到了, 支持超级权限继续做 Rework.
- **次数设定**: 支持 By Prod, By Process 设定 Rework Count.
- **Subplan 级计算**: Rework 需要具备 Subplan 级别的计算方式, 支持不同工步返工次数的绑定计算, 共享相同的返工次数.

#### 2.8 Version Control (版本控制)

支持工艺对象的版本管理与比对.

- **版本与历史**: Process, Product, Subplan 要具备版本控制功能, 都要具备历史查询详细的记录.
- **Flow 升版**: Flow 支持版本升级, 默认使用最新版本; 需要具备人性化的 Flow 版本比对功能.

#### 2.9 Flip

支持 Wafer 正反面属性的设定与管控.

- **Flip 属性**: 可以设定 Wafer 的正反面 Flip 属性.
- **防呆卡控**: 需在流程管控体系中支持 Flip 的各种防呆卡控.

#### 2.10 ProcessLocation

支持载具类型在流程中的防呆卡控.

- **载具防呆**: 支持不同类型载具在流程中不同 Step 的防呆卡控, 例如槽位数量不同需卡控, 前后段制程转换需卡控.

#### 2.11 DedicationFlag

支持指定机台/机台组的绑定卡控.

- **机台绑定**: 支持不同 Stage, Layer 卡控必须使用相同的机台或者机台组, 前量和后量卡控同一台设备.

#### 2.12 Loop Control (循环控制)

支持流程 Loop 次数的自动管控.

- **Loop 次数管理**: 次数没到上限就自动返回 Loop 起始站点继续加工, 次数达到上限就自动跳出 Loop 循环.

#### 2.13 EDCPlan

支持流程站点的数据采集计划设定.

- **站点设定**: 流程上的站点可以设定 EDCPlan.

#### 2.14 站点污染等级

支持按站点管控批次污染等级.

- **ByStep 污染等级**: ByStep 设定污染等级, Lot 在该站点出站后的污染等级变更为该站点设定的污染等级.

#### 2.15 Q-Time

支持全面的 Q-Time 设定、触发与继承管理.

- **嵌套与触发**: 支持 Q-Time 嵌套, 交叉等设定, 支持 TrackOut 触发, TrackIn 触发, TrackIn 结束, TrackOut 结束; Lot 支持多个 Q-Time.
- **Q-Time 设置与动作**: 提供最小和最大 Q-Time, 多步之间的 Q-Time, 并提供不同的触发设置, 当系统超过 Q-Time 时自动触发, 不同的时间触发不同的警告.
- **CancelTrackIn 恢复**: 具备 CancelTrackIn 后 Q-Time 恢复计时的能力, 当 Lot 处在 Q-Time 结束站点时, 如果发生 Cancel TrackIn, Q-Time 需要继承回来.
- **分批继承**: 分批时, 子批要能自动继承母批的 Q-Time.
- **超时处置**: 如果 Lot 在加工过程中 Over Q-Time, 要能够触发 Track Out 后 Hold Lot 动作.
- **Wafer 级记录**: 具备 Wafer 级别的 Q-Time 记录能力, Lot 分批或者合批后 Q-Time 仍然有 Wafer 级别的单独记录, 可以为后续操作提供精准的 Q-Time 数据.
- **关闭与人工判定**: 支持强制关闭 Q-Time 的功能; 支持设定 DummyStepForQtime, 人工进行判定是否放行 Q-Time.

#### 2.16 BankFlag

支持 Bank 操作站点的定义.

- **Bank 站点定义**: 可定义允许做 Bank 操作的站点.

#### 2.17 导入功能

支持流程数据的批量导入.

- **Excel 导入**: Flow, Subplan, Step 等都要支持 Excel 模版导入, 提高工作效率.

### 3. 机台建模和管理

#### 3.1 EQP 基本属性

支持设备基础属性的全面管理.

- **属性管理**: 支持设备属性/能力/类型管理, 包括设备名称, 描述, 组别, Batchsize, 腔室, Module 等.

#### 3.2 Define Equipment Group (设备组定义)

支持设备分组管理.

- **设备组**: Equipment Group 下面可以挂多个机台.

#### 3.3 Define Chamber (腔室定义)

支持腔室结构与扩展的定义.

- **腔室模式**: 可以定义腔室 ID, 可以定义串行/并行/组合三种模式.
- **腔室扩展**: Chamber 机台增加新的 Chamber 时, 只需要添加 Chamber 机台 (自动继承父设备属性), 无需修改其他 Flow/Recipe 等属性.

#### 3.4 Set Multi Chamber Recipe Mapping (多腔配方映射)

支持 Chamber 级配方联动管控.

- **Chamber RCP**: 具备 Chamber RCP 系统功能; 针对并行模式, 需要具备一键关闭某一个 Chamber 就把所有带有该 Chamber 的 Recipe 全部都关闭的能力.

#### 3.5 Equipment Status Define (设备状态定义)

支持设备状态体系与转换规则的自定义.

- **转换规则与权限**: 提供用户定义的机器状态转换规则以及对应的权限.
- **状态映射**: 提供原始设备状态的定义, 以转换为 MES 定义的设备状态.
- **状态切换**: 支持机台状态切换规则, 以及不同 LotType (例如 MonitorLot) 进出机台时, 机台状态要切换到特定状态, 不能简单的 Run-Idle 模式.

#### 3.6 Chamber Status Define (腔室状态定义)

支持腔室状态与设备状态的联动管控.

- **状态联动**: 腔室状态与批次进出站联动, 腔室状态将对应转换为不同的设备状态; 主设备状态将根据腔室状态合理的自动更改.
- **配方选择**: 相应的 Recipe 由设备和腔室状态组合定义, 当执行该过程时, 系统会选择最佳的可运行配方 (RCP 系统管控).
- **独立切换**: Chamber 状态可以跟父设备联动, 也可以单独切换.

#### 3.7 ECS (设备卡控系统)

支持灵活的设备派工限制规则管理.

- **PN/RN 列表**: 具备 PN/RN 机制, 正向列表根据限制规则设置允许 Lot 派工, 负向列表根据限制规则设置禁止 Lot 派工; 提供设置在特定条件下可以根据时间间隔自动重新启动 RN.
- **禁止条件**: 设置的禁止条件可以按照 IdleTime, LotCount(Total/Daily), WaferCount(Total/Daily).
- **条件组合**: 支持多种的条件组合定义, 如产品/Flow/LotID/LotType/StepID/Priority/StageID/Recipe/设备/腔室/Reticle 等.
- **例外与通配符**: 支持例外条件, 在卡控条件基础上可以让满足例外条件的获得通过, 提高用户设定的工作效率; 支持通配符设定卡控条件和例外条件.
- **生效机制**: 需具备 Doublecheck 才能生效的机制.

#### 3.8 EQP 查询和 History 查询

支持高效的设备信息查询与追溯.

- **条件查询**: 支持 By 各种条件筛选查询; 支持查询条件的文本框内直接输入模糊字符 (例如带有 * 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.
- **ElogSheet**: 需具备 Chamber 级别的 Wafer 过帐记录的能力 (ElogSheet 功能).

#### 3.9 炉管基础功能

支持炉管设备的 Batch 组批与作业管控.

- **多种 Batch 方式**: 支持生产批次+炉管 MonitorLot, 仅生产批次, 仅 Monitor 批次, 生产批次+RCLot+炉管 MonitorLot, RCLot+MonitorLot, 生产批次+RCLot, 生产批次+RCLot+炉管 MonitorLot+非炉管区的前制程需长膜的 MonitorLot 等多种 Batch 组合方式.
- **动态 Recipe 调整**: 通过 ARG 系统针对 BatchLot 的 Wafercount 区间, 进行 Layout Recipe 动态调整.
- **组批卡控**: 组 Batch 时需针对 Batch 内多个 Lot 的 Recipe, EDC 等信息进行合理的卡控.
- **量测同步**: 炉管 MonitorLot 做完量测后, 可以对 Batch 内的生产批次进行同步的量测过帐以及量测数据贴值.
- **异常处理**: 炉管 Batch Run 异常后, 可以先 DeleteBatch, 然后 MonitorLot 和 Batch 内其他 Lot 需要各自走自己的 Flow.
- **Dummy 自动作业**: 炉管的 Fill/Side DummyLot 可以 EAPAuto 进出站.

#### 3.10 WET 基础功能

支持 WET 设备的批次作业.

- **Batch Run**: 可以选择相同 Recipe 的 Lot 在 WET 进行单批或者 2 个批次 BatchRun.

#### 3.11 Sorter 设备

支持 Sorter 设备的作业管理.

- **SorterJob 类型**: 支持 SorterJob 基本类型, 如 Exchange, Split, Merge, WaferFlip, ReadT7Code.
- **作业模式**: Sorter 机台要能支持流程内 (Inline Sorter) 和非流程 (Adhoc Sorter) 的作业; 支持 Inline Sorter Step, 能够按照用户的设定完成 Sorter 动作, 例如 Split, Flip, ReadT7Code 等.
- **查询与取消**: 支持 SorterJob 的查询和取消.

#### 3.12 机台可接受污染等级

支持机台污染等级接受范围的管控.

- **污染等级卡控**: 机台设定可接受的 Lot 的污染等级, 支持设定多个污染等级, 污染等级需要精确匹配.

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
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 * 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
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

### 5. Reticle管理

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
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 * 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.

#### 5.19 Reticle Group (光罩组)

支持 Reticle 分组管理.

- **ReticleGroup**: 支持设定 ReticleGroup, 下面关联多个 Reticle.

### 6. Lot管理

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
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 * 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
- **分页显示**: 查询结果显示要具备分页查询功能, 不得将所有数据一起显示造成系统卡死或者闪退.

#### 6.5 Bank In/Out

支持批次的入库/出库操作.

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

#### 6.11 分批/合批

支持逻辑与物理的分批/合批作业.

- **分批**: 需要支持逻辑/物理分批; 物理分批动作后, 要自动触发分批的 Sorter Job, 后续使用 Sorter 站点标准作业进行分批.
- **合批**: 需要支持逻辑/物理合批; 物理合批动作后, 要自动触发并批的 Sorter Job, 后续使用 Sorter 站点标准作业进行合批.
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
- **模糊查询**: 支持查询条件的文本框内直接输入模糊字符 (例如带有 * 号) 后点击查询按钮就可以进行查询, 不可以是先点击下拉菜单获取数据后再模糊匹配选择确定数据再查询的方式.
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

支持绑定/解绑关系与站点的完整定义.

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

### 9. Non-Production Wafer (NPW)

#### 9.1 Equipment Monitor (设备监控)

支持设备 Monitor 的灵活设置与执行.

- **触发方式**: 支持 By Interval Time, Fixed Time, byPM, Manual 设置设备 Monitor, 符合条件后自动触发; 支持配置有效时间, 即在设定的时间范围内才会自动触发 Monitor.
- **执行调整**: 支持提前, 推迟, 跳过执行 Monitor; 支持在到达 Monitor 时间前提前预警.
- **Risk Run**: 支持 Risk Run, 即触发执行 Monitor 后, 支持在一段时间内可 Run 指定的 Recipe 或 Recipe Group.
- **多项目监控**: 支持一个载具内的 Wafer 同时 Monitor 多个 Item, 如 Litho 的 CD 和 Overlay.
- **数据查询**: 支持查询从 SPC 查询导入的 OFFLINE Chart 数据.

#### 9.2 Equipment Monitor Plan 卡控

支持 Monitor Plan 的唯一性与执行卡控.

- **唯一性约束**: 同一触发条件下, 一个 EQP+Chamber+Plan Type 组合只能设定一条.
- **执行卡控**: 一个 Plan 被触发后执行完成前, 不能再次触发.

#### 9.3 NPW 定义

支持挡控片全生命周期的定义与管理.

- **型号与回收**: 支持定义挡控片 (NPW) 的型号信息, 定义回收流程 (Recycle Flow), 并可定义降转型号 (Downgrade); 在 Recycle Flow 的设定 Step, 通过输入判定条件, 系统按照预设 Downgrade 将 NPW 进行降转.
- **使用次数**: 可按照型号定义 NPW 可用次数, 支持管理和调整挡控片的已经使用次数 (By Wafer Level).
- **Monitor 流程**: 支持 By 机台/Chamber 定义 Monitor 流程 (包含 Monitor 量测机台, 加工机台, Recipe, Offline Chart 等), 有版本管理, 并支持 Monitor 流程导入导出, 控片子批可注册 Monitor 流程; 不同测机流程之间升版本必须互相不能影响, 要互相独立, 松耦合.
- **量测作业**: 进站时可修改测机流程 Recipe, 量测需要支持指定部分 Wafer 量测; 量测中如有单片未收到值且没有 OCAP, 需要可以单独重测这一片; 支持手动上传挡控片测机数据; 支持量测设备单独做 AM 的方案; 要支持 Multilot 模式测机.
- **历史与计算**: 支持挡控片测机历史查询, 能查询采集参数, 可根据自定义公式计算测机结果.

#### 9.4 炉管 Monitor

支持炉管 Monitor 片的组批与量测联动.

- **Monitor 组批**: 对于炉管 Monitor 片, 在组 Batch 时需要指定 Monitor Lot; 在进行炉管加工后 Monitor 片会进行测量, 测量后的值会自动复制到 Batch 内的 Product Lot.
- **Batch 约束**: 一个炉管 Batch 内可包含多个 Product 的 Lot, 但这些 Lot 的加工 Recipe 必须相同; 如果进行量测时这些 Lot 的抽片方式不同, 则必须在量测前打散并重组 Batch, 保证每个量测的 Batch 内的 Lot 都有相同的抽片方式.
- **A/B Batch**: 支持 A/B Batch.

#### 9.5 Season (暖机)

支持设备暖机的多触发方式与全过程管控.

- **Season 定义**: 能够定义 Season Route, Season Lot, Season Recipe, 系统应该支持按用户配置的信息做 Season Split; 提供 GUI 给用户维护 Season 信息, 如 Query, Add, Modify, View, History, Copy 等.
- **触发方式**: 按照 ByPM 触发 Season, 且支持多个 SeasonProdLot 做 ByPM 的 Season; 按时间 (Eqp/Recipe Idle 时间) 触发 Season; 按 Wafer 数量 (持续/累计) 触发 Season; 按 Recipe Group 变化触发 Season.
- **自动执行**: Season 支持自动逻辑分批的 SeasonLot 进行 Season, 无需人工参与; 支持 ByPM 的 By Step Season Complete 和 Cancel, 支持中途 Down 机的场景.
- **连续运行**: 支持 CMP Zero-Idle, Season Lot 和 Production Lot 需要确保连续 RUN.
- **Chamber 级计时**: Chamber 的 Season 要以 Chamber 实际 Idle 的时间为准, 而非以主机台时间为准.
- **异常处理**: 当 Season 出现某些异常, 用户可以手动完成 Season 或重置 Season 状态及信息, 以使得重新做 Season.
- **暖机控制**: 暖机控制对象包括主机台和子机台, MES 在全自动, 半自动及手动模式下都需要支持 Season 控制; 支持多次暖机, 即机台需要用多种 Season Wafer 跑多个程序才完成暖机要求, 且有时效管控.

### 10. PRMS (光阻管理系统)

#### 10.1 光阻 Mapping

支持光阻基础数据与对应关系的维护.

- **基础 Mapping**: 支持 FAB 的 MaterialNo, ResistNo 和 ResistName 对应关系维护界面 (ResistMapping); 支持光阻的基本属性管理 (Resist No, Resist Name, Material No, Defrost Time 退冰时间, FollowBottleLife, BufferDaysAfterDefrost), BufferDaysAfterDefrost 支持退冰缓冲天数的管理.
- **Barcode 管理**: 支持 Operator 通过扫描枪扫描 VendorBarcode; 支持 Vendor Barcode 解析为 FAB 内部 Barcode (规则需客制化, 先默认手动录入); 支持将 Barcode 存入 PRMS 系统中, 连同打印机将 FAB 内部 Barcode 作为瓶身的唯一识别码.
- **有效期管理**: 支持光阻有效期管理.
- **设备管路对应**: 支持光阻, 机台, 光阻管路的对应关系管理 (ResistNo, EQPID, ChamberID, PRPipe); 支持一个光阻可以对应多个设备和光阻管路, 支持一个设备和光阻管路只对应一个光阻.
- **Recipe Mapping**: 支持 ResistNo 和 Recipe 的 Mapping, 支持 ResistNo 和 Recipe Mapping 设置的历史查询.
- **统一查询**: 支持光阻的统一查询界面管理.

#### 10.2 光阻状态

支持光阻全生命周期状态管理.

- **状态模型**: 支持光阻的状态管理 (InUse, Empty, Defrosting, Ready, Hold).
- **状态流转**: 光阻录入时的状态为 Defrosting; 光阻退冰时间到了自动变为 Ready; 光阻瓶被换到机台上 Status=InUse; 光阻报空并且没有被更换前 Status=Empty; 光阻更换后旧的光阻瓶 Status=Finish.
- **Hold 与放行**: 除 Finish 外, 其他的状态都可以切换到 Hold 状态; 光阻过期, 光阻状态自动切换为 Hold, 并备注原因是因为过期; 光阻 Release 后回到 Hold 之前的状态.

#### 10.3 光阻更换

支持光阻更换作业与系统联动.

- **报空处理**: 支持机台报警时自动切换为 Empty (系统集成), 支持机台报警时手动将光阻报空.
- **新光阻录入**: 支持录入新的光阻; 支持推荐新光阻 BarcodeList (旧光阻同样 ResistNo 的 Status=Ready 的光阻瓶, 并且按照 ReceiveTime 从小到大排序).
- **更换联动**: 光阻更换后, 旧的光阻瓶 Status 变为 InUse, 并记录 EQPID 和光阻管路; 光阻过期, 需更改 MES 机台状态 (系统集成).

### 11. OCAP

#### 11.1 OCAP FLOW 设置

支持 OCAP 流程的自定义配置.

- **流程自定义**: 支持自定义 OCAP FLOW, Inline/Offline 两种; 支持 OCAP FLOW Step 的自定义; 支持自定义 OCAP FLOW 对应的 Action 及 Handle.
- **处置方式**: 支持 Re-Keyin Data, 重新录入量测数据, 弹出 EDC 采集的数据, 用户修改数据重新提交并送 SPC; 支持 Remeasure, 按照原来的量测 Recipe 及选片规则重测; 支持 Remeasure With Other Recipes, 选择新的量测 Recipe 加测; 支持 Remeasure With Other Units, 重新选量测片加测; 支持 Lot Release, Lot Hold to Owner.
- **结果确认**: 支持 Confirm OCAP Handle, 系统带出 OCAP Handle 的处理结果, 不能修改, 只能点按钮.
- **签核管理**: 支持 OCAP FLOW 每个节点的人员签核管理; 支持 Flow Action YES/NO/Approve/Reject/Confirm/Skip/Default.
- **换机重测**: Inline OCAP 重测要支持选择同机台组内的其他机台, 换机台后不要重复生成 SPC 收值, 需要覆盖收值.
- **信息查询**: 支持 OCAP Portal 查询详细的 OCAP 信息.

#### 11.2 OCAP FLOW 执行

支持 OCAP 的自动触发与执行管控.

- **Chart 关联**: 通过 MES 新增导入 SPC Inline/Offline Chart, 对应 Chart 可以指定 OCAP Flow ID; 支持通过 MES 端修改导入 SPC Inline/Offline Chart, 对应 Chart 可以指定 OCAP Flow ID.
- **执行模式**: 支持 Inline OCAP Inline/Offline 执行, 针对 OOC 可以允许自定义的放行次数, 次数没到就不 Hold.
- **自动触发**: 支持当量测收值 SPC 触发 Lot Hold 时, 根据 SPC Chart 对应的 OCAP Flow 触发对应 MES 的 OCAP; 支持 OCAP RULE 的自动生成编号 (OCAPYYYYMMDDhhmmssxxx); 量测收值任意一片 Wafer 触发 Lot Hold 就触发 OCAP.
- **Hold 限制**: OCAP HOLD 限制不能手工 ReleaseHold, Edit Hold.
- **状态管理**: 支持 OCAP 的状态管理, 批次触发 OCAP 后 OCAP 的状态为 ACTIVE; 支持 RAD 管理; 支持强制关闭 OCAP.

### 12. LotSampling

#### 12.1 普通 Sampling 设置

支持常规采样规则的设置与执行.

- **Sampling 设置**: 支持 Step Type 为 Y 的 Sampling 设置; Sampling 设置条件包含 Eqp Group, ProductID, RecipeID, LotID (尾码) 等, Sampling 条件支持 * 通配符设置.
- **维护功能**: 支持 Sampling 设置增加, 修改, 删除, 查询; 支持 Excel 导入功能; 支持系统 Sampling 设置查询, 导出功能.
- **跳站执行**: Lot 按 Sampling 设置跳站, 并记录 Trans.

#### 12.2 SmartSampling 建模

支持智能采样的规则建模.

- **分组方式**: 支持按照加工站或 Recipe 定义采样分组方式.
- **范围限定**: 支持按照 Prod 或者 EDCPlan 多个维度限定采样产品的范围和步骤.
- **规格设定**: 支持按照时间或者 WaferCount 设定 Spec.
- **特殊属性**: 支持禁止跳站的特殊 Lot 属性.

#### 12.3 SmartSampling 执行

支持智能采样的动态执行.

- **动态调整**: 系统可按照设定的规则, 智能动态的调整采样结果.
- **组内联动**: 当采样组内有 Lot 量测通过, 则组内其他 Lot 可以跳站, 反之不可以跳站.

#### 12.4 YE Sampling 设置

支持良率工程采样的设置.

- **采样条件**: 支持 Wafer Count, Long Time No WIP, Remain Q-Time 等条件.
- **Key Tool**: 支持 Key Tool Lot 的 Sampling.

### 13. checkCust

#### 13.1 checkCust 定义

支持客户出货检查规则的定义.

- **检查类型**: 支持 AutoHold 和 CheckSplit.
- **条件公式**: 支持条件公式自定义, 包含常用的 Lot 属性.

#### 13.2 checkCust 控制规则

支持出货前的自动卡控.

- **自动扣留**: 当满足设定的条件时, 在出货之前 AutoHoldLot.

### 14. Pi-Lot

#### 14.1 Pi-Lot 定义和执行

支持 Pi-Lot 的设置、触发与状态管控.

- **设置条件**: 支持 EQP Type 为 P 的 Pi-Lot 设置; 支持 By IdleTime 设置触发 Pi-Lot, 支持 By Lot, Wafer 层级, 如设备为主机台设置为 Lot 层级, 设备为 Chamber 设置为 Wafer 层级.
- **参数设置**: 支持 Max Run Time, Idle Time 设置; 支持 Pi-Lot Wafer Count, Retry Wafer Count 设置.
- **维护与状态**: 支持 Pi-Lot 设置增加, 删除, 修改, 查询, OFF/ON 设置; Pi-Lot 包含 Created, Ongoing, WaitSplit, WaitMerge, Close 状态管控及 History 查询.

### 15. 探针卡

#### 15.1 Prober Card (探针卡管理)

支持探针卡全生命周期管理.

- **创建与信息**: 创建探针卡, 可以绑定探针卡状态模型; 定义探针卡基础信息包括供应商, 针长, 以及库存位置, 当前 T/D 次数, 累计 T/D 次数, 预警值, 目标值, 最大使用次数, 报废预警次数, 报废次数.
- **产品约束**: 支持探针卡与产品的正反向约束功能; 来料加工时 MES 验证设备当前 Mount Prober 与产品匹配关系.
- **状态操作**: 对探针卡可以执行暂停/释放或报废操作; 探针卡到达上限后, 可以送修并切换状态; 提供探针卡送修后再回到可用的状态.
- **Mount/Unmount**: 提供 Mount 界面, 选择测试设备, 选择 Prober Card ID 可以进行 Mount 到机台; 对探针卡可以 Unmount 机台操作.

### 16. 跟其他系统集成

#### 16.1 跟 ERP 集成

支持与 ERP 系统的全面业务集成.

- **集成业务**: 支持领料, 退料, 工单下达 (将已经下达的生产订单传输给 MES 系统), WIP 报工, 报废, 入库, 退库, 工单完成, Product ID Change, Lot Type Change 及其他对接 ERP 系统功能的集成.

#### 16.2 跟 APC 集成

支持与 APC 系统的集成.

- **APC 集成**: 对接 APC 系统并且实现相关功能集成.

#### 16.3 跟 FDC 集成

支持与 FDC 系统的集成.

- **FDC 集成**: 对接 FDC 系统并且实现相关功能集成.

#### 16.4 跟 YMS 集成

支持与 YMS 系统的集成.

- **YMS 集成**: 对接 YMS 系统并且实现相关功能集成.

#### 16.5 跟 DMS 集成

支持与 DMS 系统的集成.

- **DMS 集成**: 对接 DMS 系统并且实现相关功能集成.

#### 16.6 跟 WJS 集成

支持与 WJS 系统的集成.

- **WJS 集成**: 对接 WJS 系统并且实现相关功能集成.

### 17. 测试线管理

#### 17.1 产品型号定义

支持测试产品的基本信息定义.

- **产品定义**: 支持产品的基本信息定义, 产品的特殊属性定义.

#### 17.2 BIN 设置

支持 Bin 的基础定义.

- **Bin 定义**: 支持 Bin Name 设置, 并定义 Bin Type (Pass, Fail).

#### 17.3 BIN GROUP 定义

支持 Bin 分组管理.

- **Bin Group**: 支持 Bin Group 设置, 并关联其所含 Bin, 根据需求设置 BIN 中所含的缺陷明细.

#### 17.4 BinControlRule 设定

支持 Bin 级良率管控标准的定义.

- **Bin 管控**: 支持 Hard Bin 与 Soft Bin 的 Limit 管控标准定义; 支持单 BIN 良率标准; 支持多 BIN 组合良率标准; 支持良率上限与下限; 支持 SBL 管控标准定义.

#### 17.5 TOTAL 良率配置

支持整批良率管控标准的配置.

- **SYL 管控**: 支持 SYL 管控标准定义; 支持单片良率标准; 支持整批良率标准; 支持良率上限与下限.

#### 17.6 缺陷率设置

支持缺陷率的多维度设置.

- **缺陷率定义**: 缺陷率可以 By 缺陷项设置, 也可以 By 产品, 流程, 缺陷项设置.

#### 17.7 测试程序关系维护

支持测试程序与产品工步的关系管理.

- **程序关系**: 支持定义机台上可以用 Recipe/程序; 支持产品, 工步与测试程序的关系维护.

#### 17.8 组合设备设置

支持测试设备组合关系的设定.

- **设备组合**: 支持 Tester 与 Prober 以及 Tester 与 Handler 组合关系设定.

#### 17.9 测试规则设定

支持测试良率相关规则的设定.

- **测试规则**: 支持测试 SYL, SBL 相关设置.

#### 17.10 测试线管理

支持测试线作业的全面管控.

- **测试设置**: 可设置产品批次的 AQL 标准; 支持测试 Bin 分批/不分批的设置; 支持测试尾数合并规则自定义.
- **测试作业**: 支持 By Pcs 结束; 支持进站校验 Recipe; 支持进站产生测试文件; 支持通过 FT 测试分出各种 Bin 以及对应数量.
- **复测管理**: 支持复测 FailBin 数量, 根据规则判定复测次数, 由系统判定复测结果; 支持从 PassBin 中抽测一定比例数量进行复测, 根据提前设定的复测比例, 由系统判定复测结果.
- **标签与分批**: 支持 PassBin, FailBin, LAT 好品, LAT 次品, EQC 好品, EQC 次品等各种标签打印; 支持按照 Bin 等级自动进行分批.
- **尾料处理**: 支持尾料绑定主批次包装入库; 支持尾料合批包装入库.

#### 17.11 拆批

支持测试批次的拆分.

- **拆批**: 支持 HOLD 状态下拆批, 支持作业中拆批.

#### 17.12 合批

支持测试批次的合并.

- **合批**: 支持 HOLD 状态下合批, 支持作业中合批.

#### 17.13 测试工步管控

支持测试工步的执行管控.

- **工步管控**: 支持 By Wafer 结束; 支持程序的防呆; 支持测试设备, 治具的校验; 支持读取测试结果文件; 支持 SYL/SBL 计算与管控; 支持 Mapping 查看.

#### 17.14 测试良率异常处理

支持测试后良率异常的多种处置方式.

- **异常处置**: 支持放行并拆批重测, 批次进行批次拆分, 部分进行重测, 部分流转到下一个工步; 支持放行并重测, 批次留在当前工步待开始, 进行重新测试; 支持放行, 批次直接流转到下一个工步.

#### 17.15 物料 MBB 设置

支持物料湿敏管控.

- **MBB 管控**: 支持物料吸湿时间管控; 支持物料吸湿时间打开和关闭; 支持手动添加批次的吸湿时间管控.

#### 17.16 载带拉力标准配置

支持载带拉力标准的定义.

- **拉力标准**: 根据封装类型配置载带拉力标准.

#### 17.17 载带拉力送检信息

支持载带拉力送检的管理.

- **送检信息**: 根据批次创建载带拉力送检信息; 配置批次的载带, 盖带的信息.

#### 17.18 载带拉力检验

支持载带拉力检验作业.

- **拉力检验**: 填写载带拉力检验数据; 自动校验载带拉力结果.

#### 17.19 尾数管理

支持测试尾数的处理.

- **尾数入库**: 支持尾料包装直接入库.

### 18. 封装线管理

#### 18.1 切割站点管控

支持切割工序的作业管控.

- **上料校验**: 支持产品型号校验 (晶圆 ID 或框架条码), 上料核对, 绑定产品.
- **治具验证**: 支持关键治具 (刀片) 上机验证, 记录使用数据.
- **良率统计**: 支持切割良率与崩边率统计 (录入以及集成 EAP).
- **Recipe 管控**: 支持切割 Recipe 管控 (集成 EAP).

#### 18.2 挑选芯片站点管控

支持芯片挑选工序的作业管控.

- **Map 与耗材**: 支持 Wafer Map 管理; 支持关键耗材上机验证, 记录使用数据 (耗材包括蓝膜/胶带, 顶针及吸嘴型号).
- **芯片挑选**: 支持多等级/多类型芯片挑选; 支持良品/不良品分类, 基于测试数据自动判定芯片等级, 指导挑选设备按等级分类.
- **统计与存放**: 支持挑选率 (拾取率) 统计 (录入以及集成 EAP); 支持挑选芯片存放方式, 包含 Reel 卷带, Tray 盘等.

#### 18.3 芯片贴装站点管控

支持芯片贴装工序的作业管控.

- **上料与贴装**: 支持贴片芯片型号校验, 上料核对, 绑定产品; 支持多芯贴装; 支持多层叠 Die 贴装.
- **首件与数据采集**: 支持首件管理; 支持 EDC 数据采集.
- **防错管理**: 支持贴装参数防错, MES 定义产品/设备 Recipe, 集成 EAP, 系统自动校验和下发 Recipe; 支持治具防错贴装吸嘴/顶针管理, 记录贴装头吸嘴, 顶针等治具的使用次数, 到期自动预警或锁定.
- **Map 管理**: 支持 Wafer Map 管理和 Strip (Wafer) Map 管理.

#### 18.4 塑封站点管控

支持塑封工序的作业管控.

- **材料管控**: 支持 EMC 材料扫码校验, 比对材料类型, 批次, 有效期; 支持材料解冻回温管理.
- **模具管理**: 支持模具上机校验, 记录塑封模具的使用次数, 保养周期.
- **Recipe 与 Map**: 支持塑封 Recipe 管控 (集成 EAP); 支持 Strip (Wafer) Map 管理.

#### 18.5 激光打标站点管控

支持激光打标工序的作业管控.

- **打标管理**: 支持激光打标数据源配置 (参考标签数据源配置); 支持打标数据防错防呆 (集成 EAP); 支持 Strip (Wafer) Map 管理.

### 19. 治具管理

#### 19.1 治具管理

支持各类治具的全生命周期管理.

- **状态模型**: 支持按照不同治具类型定义状态模型; 状态转换基于 User Group 做权限控制.
- **使用管理**: 治具 Mount 设备时作匹配检查, Unmount 设备时可扣减使用量或计数, 或者使用时间累计; 支持治具的使用次数, 使用时间的自动计算, 自动切换状态; 治具次数, 使用时间达到上限的, 不能继续加工; 治具维护 (更换部件, 维修等) 后, 重置计时和计数.
- **治具类型**: 支持测试治具, 如 Prober Card; 支持封装治具, 如 Injection Mould 的管理.
- **标签打印**: 支持打印治具标签.

### 20. 物料及BOM管理

#### 20.1 产品及物料

支持物料基础数据的继承.

- **基础数据**: 可继承 ERP 的物料形成 MES 的产品, 物料基础数据.

#### 20.2 物料及BOM管理

支持物料与 BOM 的完整管控体系.

- **BOM 体系**: 针对物料和产品可定义物料的管控属性 (例如化学品的时效等); 可承接 ERP 的产品 BOM 形成 MES 的产品 BOM, 并基于产品 BOM 结合工艺流程形成生产 BOM (工单 BOM, 工序 BOM); 在 MES 系统可自行创建 BOM (工单 BOM, 工序 BOM); 产品, 物料, BOM 可启用版本管理.
- **工序物料**: 支持设置工序消耗的物料 BOM; 支持设置替代料和替代顺序.
- **物料校验**: 支持设备 Mount 物料的正确性, 有效性检查; 支持批次进出站物料的正确性, 有效性检查.
- **消耗管理**: 支持物料使用消耗的历史记录, 主要运用于可定量统计的物料消耗 (按 Qty, Lot, Wafer 数进行消耗); 系统支持原材料的消耗扣减, 同时也支持辅材/耗材消耗; 系统支持半成品自动转原材料, 并按照用量完成消耗记录.
- **寿命管理**: 提供寿命有效期的定义, 包括 Life Time, 回温时间, 次数; 生产过账时能够获取寿命, 并及时进行报警; 联动 EAP 实现自动报警和机台控制.

#### 20.3 产品绑定BOM设置

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

### 21. 工单管理

#### 21.1 工单管理

支持工单全生命周期管理与生产投产的完整流程.

- **工单创建**: 可通过接口承接上游 ERP 的销售订单, 形成 MES 系统的生产工单; 也可以在 MES 系统中根据生产所需自行创建生产工单, 例如研发或工程试验等不需要从 ERP 下单的情况.
- **工单操作**: 工单操作包括创建, 编辑, 确认投产, Hold/Release, 暂定, 完工, 强制完工等操作功能.
- **下达匹配**: 工单确认下达前, 工单需要匹配工艺流程, 生产 BOM, 关联 Wafer, 封装材料等关联配置.
- **编码建批**: 工单在确认下达投产时, 系统根据工单的产品料号及数量, 并结合编码规则创建在制品档案; 根据编码规则创建 Lot 号, Lot 号的编码规则可在基础配置中自定义.
- **投产登记**: 确认投产时根据 Wafer Lot 执行投产的操作, 系统提供投产的登记功能, 可按 Wafer Lot/Pcs Lot 进行投产, 登记 Lot 与 Carrier 的关系, 完成绑定后后续的生产过账可 By Lot, By Carrier 进行过账.
- **批次属性**: 对新建的 Lot 可定义生产所需的各种属性, 包括产品号, Lot 数量, Lot 类型, 优先级, Due Date, Lot Owner 等; 建批时可指定加工起始工步, 默认从工艺流程第一步开始加工; 对创建出来的批次进行投批到产线待加工.
- **批次管理**: 基于生产工单确认投产后得到生产批 Lot No, 可对生产批进行管控, 如拆批, 合批, 批次扣留等; 支持 RunCard 管理, 基于工单的生产批打印 RunCard, 供车间现场生产流转时标识在制品以及数据采集所用, 可提供 Lot 流程卡.
- **查询追溯**: 根据工单和批次可以方便的查看到所用的工艺流程和生产 BOM 等; 支持按工单信息查看, 包括已完成数量, 生产中数量, 报废数量等信息; 提供追溯查询, 查看批次的作业加工履历, 物料耗用数据, 工时数据等.
- **完工结算**: 工单完工结算, 从物料耗用, 工时核算两个大的角度对工单进行结算, 并将结算的数据回报给 ERP.

### 22. 线边仓管理

#### 22.1 线边仓定义

支持线边仓组织架构的建立.

- **仓位定义**: 建立线边仓组织架构, 根据物料类型不同的管控要求, 设置各线边仓位的属性.

#### 22.2 线边仓管理

支持线边仓收发存与物料时效的全面管理.

- **仓位操作**: 针对不同的仓位, 设置不同级别的操作属性.
- **收料管理**: 支持在 MES 中直接创建收料单实现车间现场物料的接收; 支持收料信息直接导入线边仓; 支持收料信息直接导入辅材线边库.
- **发料上料**: 物料库存从线边仓发料至生产机台; 在机台, 可以利用机台上料的功能实现机台站点的物料上机; 开工单生产领料时将需要长时间回温等前期准备的物料情况考虑进去, 提前对应时长通知相关部门对物料进行回温操作.
- **退料管理**: 提供机台退料至线边仓的功能; 提供线边仓的物料退料至 ERP 大仓的功能; 根据实际生产类型包含各种形式的退库管理.
- **Wafer 管理**: 来料时, 可登记 Wafer 的客户, Lot, Cassette 等来料信息, 形成 Wafer 档案; 可记录每片 Wafer 的 Die 数; 生产投产时, 可以从 Wafer 库选择 Wafer 进行投产作业, 系统记录厂内 Wafer ID 与客户来料 Wafer ID 的关联匹配关系; 提供 Wafer 库存的实时查看, 查看厂内 Wafer 的状态.
- **寿命时效**: 寿命模型包括物料的有效期, 可回温次数, 回温时长, 回温后可用时长等; 从物料领用或发料时, 根据物料的保管状态的变化, 记录物料的不同状态下的时长; 结合站点的 Track In 和 Track Out, 对物料的时效进行计算, 超限或超标时报错提醒并提示处理; 存储时效异常时, Hold 物料批次并做提醒.
- **库存管控**: 支持打印物料批标签; 支持线边仓物料超期邮件提醒和线边仓库存超期颜色提醒; 支持安全库存管理; 支持线边仓盘点; 支持实时查看线边仓所有物料当前状态; 关键物料支持批次管理, 支持单件追踪.

#### 22.3 收料管理

支持对接 ERP 的收料确认.

- **收料确认**: 通过与 ERP 系统对接, MES 自动接收 ERP 的工单发料信息, 产线物料管理人员通过扫描物料标签进行收料确认, 登记实际收料信息.

#### 22.4 发料管理

支持按排产的发料确认.

- **发料确认**: 根据生产排产要求, 产线物料管理人员通过扫描物料标签进行发料确认.

#### 22.5 物料批次管理

支持物料批次的追溯管理.

- **批次追溯**: 针对物料批次管理策略, 能根据批次实现物料追溯管理.

#### 22.6 退料管理

支持机台下料管理.

- **机台下料**: 提供从机台下料的管理功能.

#### 22.7 Wafer Bank

支持 Wafer 库的管理.

- **Wafer 库**: 针对 Wafer 启用 Wafer 库的管理, 实现 Wafer 的全面追溯管控.

#### 22.8 物料寿命管理

支持关键物料的寿命管控.

- **寿命模型**: 针对关键物料提供寿命管理模型, 用于管控对于存储环境和存储时间敏感的物料, 例如粘片胶, 锡膏, 线材等.

#### 22.9 辅材管理

支持辅材的收发退管理.

- **辅材管理**: 支持辅材的收料, 发料和退料.

#### 22.10 库内作业

支持线边仓库存管理.

- **库存管理**: 支持线边仓库存管理.

#### 22.11 不合格物料控制

支持发往产线物料的质量管控.

- **不合格管控**: 对发往产线的物料质量进行型号及批次控制管理.

#### 22.12 物料报废

支持物料的报废与降级.

- **报废管理**: 支持材料报废和转等级.

#### 22.13 系统查询

支持在线物料的实时查询.

- **在线物料查询**: 可以实时查看所有机台的在线物料信息.

### 23. 质量管理

#### 23.1 检验规范定义

支持检验标准的基础定义.

- **检验规范**: 提供制造过程检验项和检验标准的定义配置.

#### 23.2 质量管理

支持检验模板、不良管控与扣留流程的管理.

- **检验模板**: 根据不同的检验类型, 可设定不同的检验标准和检验模板; 在工艺流程中可以基于站点设定可用的检验模板.
- **不良 Code**: 不良 Code 支持自定义; 支持工步绑定对应的不良 Code.
- **巡检与首检**: 支持质量人员巡检功能; 首检采集的数据, 进入 SPC 系统进行管控.
- **异常单**: 支持自动触发异常单, 异常单处理流程.
- **扣留管理**: 支持自动&手动两种扣留方式, 支持批量扣留; Hold 需要加 Hold Reason, Hold 有特定的 Hold Code, Hold Code 可在系统上根据实际需求进行灵活的配置, 扣留时可指定处理组, 不在该处理组的人员不能进行放行操作.
- **自动扣留**: 支持与其他系统进行对接, 实现批次及设备等的自动扣留; 自动扣留规则可配置; 重大异常扣留, 触发 OCAP 流程.
- **权限与提醒**: 扣留及解扣留均需要进行权限管控; 支持 Hold Lot 邮件提醒.

#### 23.3 不良原因定义

支持不良检验项目的定义.

- **不良项目**: 支持不良检验项目定义, 可批量导入.

#### 23.4 首巡检功能

支持首检的触发管理.

- **首检触发**: 支持自定义首检触发条件 (如换型号, 换物料, 换模具, 换程序, 清模, PM 等), 并根据规则触发创建检验单或报警提醒.

#### 23.5 首件检验定义

支持首件检验项目的定义.

- **首件项目**: 支持首件检验项目定义, 可批量导入.

#### 23.6 站点良率卡控

支持出站良率的自动管控.

- **良率卡控**: 出站良率异常, 自动 Hold 批次.

#### 23.7 异常处理

支持多类型对象的 Hold 管控.

- **多类型 Hold**: 支持多种类型 Hold, 如批次, Wafer, 物料, 设备, 载具等.

### 24. 包装和标签管理

#### 24.1 包装和标签管理

支持包装作业与标签打印的管理.

- **标签打印**: 支持基于标签设计软件设计标签模板, 自动打印包装标签; 支持补打/重打标签.
- **多层包装**: 支持多层包装 (REEL, Inner Box, Outer Box) 和每层标签绑定; 支持拆包装并保留包装和标签历史记录; 支持不良品包装.
- **入库管理**: 支持按照指定包装 (REEL, Inner Box, Outer Box) 入库; 支持打印个性化的入库单据.

### 25. Wafer Mapping管理

#### 25.1 Wafer Mapping

支持 WaferMap 文件的存储管理.

- **文件存储**: 支持 WaferMap 文件存储路径监控及存储.

#### 25.2 Wafer Mapping管理

支持 WaferMap 的解析、编辑与追溯.

- **解析展示**: 支持 WaferMap 文件格式解析及图形化展示; 支持 WaferBinCode 配置及转换.
- **编辑转换**: 支持 WaferMap 人工编辑功能; 支持 WaferMap 自动角度转换; 支持前后工序 Map 合并, 生成新的 Map, 和导出.
- **追溯统计**: 可基于客户批, 产品批, 批次号, 显示对应的 Wafer Map, Strip Map, 并可基于图谱结果数据进行数据统计, 比如 Gross Die, Good Die, Fail Die, Yield, 每个 Defect Code 的统计; 关联 WaferMap 与 StripMap 的关系, 形成完整的产品全生命周期追溯.
- **EAP 联动**: 部分功能需要联动 EAP 实现.

### 26. Strip（Wafer）Mapping管理

#### 26.1 Strip（Wafer）Mapping

支持 Strip Map 的展示.

- **Map 展示**: 产品支持 MES 界面上 Strip Map 展示.

#### 26.2 Strip（Wafer）Mapping管理

支持 Strip Map 的维护与追溯.

- **Map 维护**: 支持 Strip Map 的导出; 支持 Strip Map 修改功能; 支持 Strip Map 版本管理; 支持 Strip Map 的上传, 下载和对比.
- **追溯统计**: 可基于客户批, 产品批, 批次号, 显示对应的 Wafer Map, Strip Map, 并可基于图谱结果数据进行数据统计, 比如 Gross Die, Good Die, Fail Die, Yield, 每个 Defect Code 的统计; 关联 WaferMap 与 StripMap 的关系, 形成完整的产品全生命周期追溯.
- **图谱类型**: 支持基板 Strip Map 图谱, 同时也支持 Wafer (Carrier/Base Die) Map 图谱.
- **EAP 联动**: 部分功能需要联动 EAP 实现.

### 27. 材料外延管理

#### 27.1 技术规范管理

支持材料相关规范的管理.

- **规范管理**: 支持主材, 产品客规, 厂规, 出货规范, 标签规范管理.

#### 27.2 品控管理

支持 COA/COC 模板的管理.

- **模板管理**: 支持 COA, COC 模板创建, 上传, 版本管理, 版本对比, 数据导入导出等, 不同模板需要可以配置完成.

#### 27.3 材料外延管理

支持材料检验与生命周期的管理.

- **报告生成**: 支持 COA, COC 电子报告生成; 支持主材物料批次 COA 参数设置, 导入, 导出等.
- **来料检验**: 支持 IQC, 抽检等; 支持物料上机/下机操作; 支持物料检查 (当物料变更时).
- **生命周期**: 支持生命周期管理, 需要监控剩余时间, 通过邮件/微信报警.
- **物料操作**: 支持物料 Hold/Release; 支持物料拆/合; 支持物料 Shipping.

#### 27.4 标签管理

支持标签的模板与打印管理.

- **标签管理**: 支持标签模板设置, 标签打印, 打印机设置等.

#### 27.5 包装管理

支持成品包装发货管理.

- **包装发货**: 支持成品组箱, 拆箱, 包装, 装箱单, 发货等.

#### 27.6 线边仓管理

支持材料线边仓的作业管理.

- **线边仓作业**: 支持线边仓定义, 收, 发, 退料, 上下架等管理, 库存水位, 超期预警.

#### 27.7 物料管理

支持物料基础数据与库存管理.

- **物料管理**: 支持物料创建, BOM 管理, 物料使用历史, 库存检查.
