# MES

## 业务

### 代码定义与机况

@see: ## MES Function List → ### 1. 工厂基础建模 → #### 1.5 代码定义 (Code Define)

- Reason Code 需要 by department, section 设置，针对权限区分，Hold - Release 需对应
- 机况定义：需要由 IE 提供机况切换关系图，以及各部门对应的权限

### Lot Type

@see: ## MES Function List → ### 1. 工厂基础建模 → #### 1.6 Lot Type Define (批次类型定义)

- NPW Lot 进 downgrade 时，子母批的 Lot Type 在 downgrade 后不一致，无法进 merge，需要卡控 downgrade 时，不能更改 lot type
- change lot type 需要制定 transfer path

### Lot Naming

@see: ## MES Function List → ### 1. 工厂基础建模 → #### 1.7 Lot Naming (批次命名)

- SRC 拆批后的子批，需要单独命名子批的 lot naming rule

### Rework

@see: ## MES Function List → ### 2. 流程建模和管理 → #### 2.7 Rework (流程维度)

- Litho 机台存在 layer 垂直限定，当进行 Rework 的时候，回到 main flow 应遵循进站时 run 的机台继续 run
- double run by wafer，部分子 lot run 过后会 merge 到母 lot，再次进行 run，有可能会触发 double run，需要 by wafer 卡控 double run

### Flip

@see: ## MES Function List → ### 2. 流程建模和管理 → #### 2.8 Flip

- 需指定特定的 sorter 机台进行作业

### ProcessLocation

@see: ## MES Function List → ### 2. 流程建模和管理 → #### 2.9 ProcessLocation

- 载具是否需要 purge，需要在 flow 的 step 中进行设置
- step 需要的载具需要明确具体的 carrier 类型及污染

### DedicationFlag

@see: ## MES Function List → ### 2. 流程建模和管理 → #### 2.10 DedicationFlag

- 需要支持量测机台的前后量绑定，后量机台 follow 前量机台进行 run

### Q-Time

@see: ## MES Function List → ### 2. 流程建模和管理 → #### 2.15 Q-Time (容许时间)

- flow 升版，Lot 上带有 Qtime，自动 ReAssign 时需要使用新的 Qtime 还是旧的 Qtime，没有 ReAssign 时保持 Qtime 不变
- Qtime by Grouping 分组，存在多组时怎么 close

### ECS / 机台限制

@see: ## MES Function List → ### 3. 机台建模和管理 → #### 3.6 ECS / 机台限制 (Tool Constraint)

- ECS 存在正向、负向、全局时，需要怎么进行校验
- 当主机台与子机台的 ECS 冲突时，以哪个为准
- 什么场景下会自动添加 ECS，到生效时间自动卡控 lot

### EQP 查询

@see: ## MES Function List → ### 3. 机台建模和管理 → #### 3.7 EQP 查询和 History 查询

- by equipment 查询 run 货历史，包括（carrier, recipe, ppid, reticle，lot Reserve / Track in / Process Start / Process End / Track out time）

### BankFlag

@see: ## MES Function List → ### 2. 流程建模和管理 → #### 2.16 BankFlag

- 到 Bank Step 能自动进行 Bank Hold，hold code 指定特殊 hold code

### 设备状态切换联动

@see: ## MES Function List → ### 3. 机台建模和管理 → #### 3.4 Equipment Status Define (设备状态定义)

- 机台与子机台的状态切换需要具有联动性
- 机台切 PM 时，要能联动到 PM Season 与 PM Monitor
- PMS 中机台或者子机台需要进行 Job Start 的时候能自动切换状态到 PM，并且卡控固定状态才能 PM Job

### Sorter

@see: ## MES Function List → ### 3. 机台建模和管理 → #### 3.10 Sorter 设备 (倒片机作业)

- 支持 MES 帐上转化 carrier
- 支持在 PMS 系统中进行 PM 管理

### 光刻机台

@see: ## MES Function List → ### 3. 机台建模和管理 → #### 3.11 光刻机台 (Photo)

- 记录 Lot 在两个子机台中 run 货的历史，能查找到已经过 Scanner 机台但未过 Track 机台的 Lot

### 激光打码

@see: ## MES Function List → ### 3. 机台建模和管理 → #### 3.15 激光打码机台 (Laser Mark)

- 打印标签需要支持多步骤审核，double check

### 载具

@see: ## MES Function List → ### 4. 载具管理

- 支持设定清洗时间，到期标记 Flag，无法再进行使用
- 考虑到多个子平台互相调用的情况，应支持切换 Carrier 的 FabSite
- RSP 也支持相同的功能

### Reticle

@see: ## MES Function List → ### 5. Reticle 管理

- 支持 Reticle 暴露在空气中一定时间时，能将其 Hold 住，需要回 stocker 充气一定时间后才能继续使用
- Reticle 状态切换需要定制好 rule path
- 支持卡控 Reticle 跑到一定的 wafer 数量后不能再使用，需要先进行 IRIS 或者 Inspection 后才能再次使用，需要记录当前跑过的 wafer pcs

### 批次下线

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.3 批次下线 (Wafer Start)

- 支持多物料下线一个 Lot
- 支持半成品再次下线
- transfer 回来后支持直接下线到指定 Step，并进行 Hold
- 支持物料在指定 FOSB 中才能下线

### 批次查询

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.5 批次查询 (Lot Portal)

- 支持未来要 run 的 Step 的预测，方便进行排程

### 预约 Reserve

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.7 预约 / 取消预约 (Reserve)

- 支持 Add Queue，Reserve 时优先 Add Queue 的 Lot

### Hold/Release

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.8 Hold/Release (扣留及释放)

- 支持批量 Release
- 特殊 Hold 不能手动 Release，标注只存在唯一 Hold 才能进行的场景，例如进 SRC 的 Hold，当有且只有一个进 SRC 的 Hold，到站后才能自动 Release 并进入 SRC

### FutureHold

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.9 FutureHold (计划扣留)

- 设定 Future Hold 能支持 by step, by condition, by lot 进行设置
- 需要自动设置 Future 的场景需要标明
- Future hold 分为 wait hold 和 Track out hold；track out hold 在一些会自动跳站的 Step 不允许进行设置

### 分批 / 合批

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.10 分批 / 合批 (Split/Merge)

- future split, future merge 能自动创建 sorter job

### 跳站及退站

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.12 跳站及退站 (Skip/Reposition)

- Skip 与 Reposition 到指定 Step 后，支持自动校验 Sampling，当到的 Step 命中 Sampling 规则，能自动执行

### Reassign

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.19 Reassign / 批次调整

- 只有 Lot 在 run 到下一个 Plan 的时候才能自动 Reassign
- NPW Lot 自动 Reassign 需要校验当前 lot 所在的 Monitor flow, season flow 等信息，当 Monitor flow, season flow 等 flow 信息同步更新后才能自动 Reassign

### Lot Info 显示

@see: ## MES Function List → ### 6. Lot 管理 (批次全生命周期) → #### 6.20 Lot Info 显示

- 在 Litho 站点时，显示当前所用 Reticle
- NPW Lot 需要显示 Wafer 的使用次数，以及 recycle 次数

### RRC

@see: ## MES Function List → ### 8. Run Card Management (SRC/RRC) → #### 8.4 RRC (异常恢复单)

- RRC 中能在签核时自由选择进行 T7 code 校验
- RRC 时需要明确 lot double run 的场景

### Equipment Monitor

@see: ## MES Function List → ### 9. Non-Production Wafer (NPW: Monitor / Season / Dummy) → #### 9.1 Equipment Monitor (机台监控)

- 支持配置 Monitor flow 指定 wafer 进行 monitor
- 支持 Monitor 根据 finish time 进行顺延下一次 Monitor date time
- PM Monitor 需要在 PM 动作时提前生成 Monitor Job
- process 机台 Monitor flow 中设置 target 站点，也支持多个 process 站
- 量测 /stocker 机台支持无 process 站的机台进行 monitor

### NPW

@see: ## MES Function List → ### 9. Non-Production Wafer (NPW: Monitor / Season / Dummy) → #### 9.3 NPW 定义

- NPW wafer use count 最大使用次数到达后能自动进行 downgrade
- NPW wafer use count 未到达最大使用次数，能自动拉到 recycle 站点
- NPW lot 在 monitor 中量测 NG 后，能自动进行拆批，将 NG 的 wafer 拆出子批，正常的 wafer 继续往下 run

### Season

@see: ## MES Function List → ### 9. Non-Production Wafer (NPW: Monitor / Season / Dummy) → #### 9.5 Season (机台暖机)

- 支持 season 互解
- 支持 Season Product 一起 Reserve
- Season Type：idle season, recipe change season, cmp 0 idle, cmp side idle, wafer count season
- 能记录 season 对应的 last process time, active 变更历史
- 支持 idle season, recipe change season 等 season 通过 Recipe Group 进行管控 Recipe

### Dummy

@see: ## MES Function List → ### 9. Non-Production Wafer (NPW: Monitor / Season / Dummy) → #### 9.6 Dummy (挡片)

- EAP 上报 Dummy out 失败，但实物已经出机台了，此时 MES 账上应与实物保持一致，也能正常记录 dummy out 的情况

### PRMS 光阻

@see: ## MES Function List → ### 11. PRMS (光阻管理系统)

- PR 报空预警，能给出报空具体信息，以及给出推荐的 PR 信息
- 更换 PR 时，先 Recommend PR lot，再 exchange PR lot，exchange PR lot 需要进行扫描实物条形码进行多次校验

### OCAP

@see: ## MES Function List → ### 12. OCAP (超规动作计划) → #### 12.1 OCAP FLOW 设置

- OCAP 中支持 Re-Mon，Re-Mon 未结束的时候不能 close ocap

### ERP 集成

@see: ## MES Function List → ### 16. 跟其他系统集成 → #### 16.1 跟 ERP 集成

- 当工单下达错误或者失败，支持 ERP 再次下达工单信息，MES 记录最新的工单信息

### OQC

@see: ## MES Function List → ### 23. 质量管理 (含 OQC) → #### 23.3 OQC

- 出货标签打印可存在多层级打印

### 派工自动化

@see: ## MES Function List → ### 33. 派工与自动化模式

- 派工自动化能有效校验 MES 约束条件

### SPC

@see: ## MES Function List → ### 42. SPC 统计过程控制

- 量测值 MES 端传给 SPC 时，lot 会有 spc hold，等待 SPC 收到值进行计算并反馈结果，当 spc 返回值正常时，Lot 自动 Release hold，move 到下一站
- lot 处于 WaitForMove
- 当 spc 超时未返回值时，lot 能转 hold 给最优的 step owner
- MES 设置上下限，当 EDC Item 的 SPC Flag 标记未勾选时，EDC 的收值是否 OOC/OOS 根据 MES 端设置的上下限进行判断
