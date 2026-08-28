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
