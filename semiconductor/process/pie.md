# Term

| Abbreviation | Full form                   | Desc           |
| :----------- | :-------------------------- | :------------- |
| PIE          | Process Integration Enineer | 工艺整合工程师 |

主要工作是整合各部门的资源, 对工艺持续进行改善, 确保产品 yield 的稳定良好

1m = 100cm, 1cm = 10mm, 1mm = 1000um

1 inch = 2.54cm

# Q & A

Q: 200mm, 300mm wafer 区别

A:

8 吋 wafer 直径 200mm, 12 吋 wafer 直径 300mm

---

Q: 为什么需要 300mm 12 吋 wafer?

A:

wafer size 变大, 单一 wafer 上的 chip 数变多, 单位成本降低, 200mm -> 300mm 面积增加 2.25 倍, 芯片数目约增加 2.5 倍

---

Q: 0.13 um 的 technology(工艺能力) 代表什么意义?

A:

指工艺能力可以达到 0.13um 栅极的线宽. 栅极的线宽越小, 整个器件就可以越小, 工作速度也越快. 一般工艺能力的难度为 0.35um -> 0.25um -> 0.18um -> 0.15um -> 0.13um

---

Q: 一般 wafer 的 substrate(基材/衬底) N-type 和 P-type 的区别

A:

N-type wafer 指掺杂 negative 元素(5 价电荷元素, e.g. P, As).

P-type wafer 指掺杂 positive 元素(3 价电荷元素, e.g. B, In)

---

Q: P, M, mask layer(光照层数) 有什么意义? 为什么用来代表工艺的时间长短?

A:

P 指 Poly(多晶硅), M 指 metal(金属导线), 几 P 几 M 指几层 Poly, 几层 metal. e.g. 0.15um 的产品为 1P6M

mask layer 代表必须要经过几次光刻

---

Q: Wafer 下线的第一道步骤是形成 start oxide and zero layer, start oxide 的目的是什么? 为什么要 zero layer?

A:

start oxide 的目的:

1. 不希望有机成分的光刻胶直接接触 Si 表面
2. 再 laser 刻号过程中, 避免粉尘污染

zero layer 是作为芯片工艺各层次之间的对准基准(T7 Code 是 substrate 背面刻号, 与原物料相关, 用于追溯供应商的 ID, 是数字字母流水码)

---

Q: wafer process 制造过程包含那些主要部分?

A:

1. frontend(前段), device(元器件) 的制造过程
2. backend(后段), metal(金属导线) 的连接及 passivation(护层)

---

Q: frontend process 大致区分?

A:

1. STI(Shallow Trench Isolation, 浅沟道隔离) 的形成(定义 AA 区域及器件间的隔离)
2. well implant(阱区离子注入) 以调整电性
3. poly gate(栅极) 的形成
4. source/drain(源/漏极) 的形成
5. salicide(硅化物) 的形成

---

Q: 为何需要 STI?

A: STI 可以当作两个 device 间的阻隔, 避免两个组件间的短路

---

Q: AA 的用途?

A:

Active Area(源区), 是用来建立晶体管主体的位置所在, 在 AA 上形成 源/漏/栅极, 两个 AA 区之间就是用 STI 作隔离

---

Q: 在 STI 的刻蚀 process 中, 需要注意的参数?

A:

1. STI ETCH 角度
2. STI ETCH 深度
3. STI ETCH 后的 CD(critical dimension) 尺寸大小控制

---

Q: STI 形成步骤中的 liner oxide(线形氧化层) 的特性和功能?

A:

特性: liner oxide 为 1100C, 120 min 高温炉管形成的氧化层

功能:

1. 修补 STI ETCH 造成的 substrate 损伤
2. 将 STI ETCH 造成的尖角 corner rounding(圆化)

---

Q: 一般的阱区 IMP 调整电性可以分为 3 步骤, 功能为何?

A:

1. Well Implant: 形成 N, P 阱区
2. Channel Implant: 防止 source/drain(源/漏极) 间的漏电
3. Vt Implant: 调整 Vt(阈值电压)

---

Q: 一般 Implant layer(离子注入层次) 分为几步骤?

A:

1. 光刻及图形的形成
2. 离子注入调整
3. 离子注入完后的 ash(plasma 等离子体清洗)
4. 光刻胶去除(PR strip)

---

Q: Poly 栅极形成的步骤大致分为哪些?

A:

1. Gate oxide(栅极氧化层) 的沉积
2. Poly film 的沉积及 SiON(在光刻中作为抗反射层的物质) 的沉积
3. Poly 图形的形成
4. Poly 及 SiON 的 ETCH
5. ETCH 完后的 ash(plasma 等离子体清洗)及光刻胶去除(PR strip)
6. Poly 的 Re-oxidation(二次氧化)

---

Q: Poly 栅极的刻蚀要注意哪些地方?

A:

1. Poly 的 CD, i.e. 尺寸大小控制
2. 避免 gate oxide 被蚀刻掉, 造成 substrate 受损

---

Q: 何谓 Gate oxide(栅极氧化层) ?

A:

用来当器件的介电层, 利用不同厚度的 gate oxide, 可以调节栅极电压对不同器件进行开关

---

Q: source/drain 的形成步骤可以分为哪些?

A:

1. LDD implant(Light Doped Drain 离子注入)
2. Spacer 的形成
3. N+/P+ IMP 高浓度 S/D(源/漏极) 注入及 RTA(Rapid Thermal Anneal 快速热处理)

---

Q: LDD 用途

A:

LDD 是使用较低浓度的 source/drain, 以防止组件产生热载流子效应的一项工艺

---

Q: 何谓 Hot carrier effect(热载流子效应) ?

A:

在线宽小于 0.5um 以下时, 因为 source/drain 间的高浓度所产生的高电场, 导致载流子在移动时被加速产生热载流子效应, 此热载子会对 gate oxide 造成破坏, 造成组件损伤

---

Q: 何谓 Spacer? Spacer 蚀刻时需要注意哪些?

A:

在 poly 栅极的两旁用 dielectric(介电质) 形成的侧壁, 主要由 Ox/SiN/Ox 组成.

蚀刻 spacer 时需要注意 CD 大小, profile(剖面轮廓), remain oxide(残留氧化层的厚度)

---

Q: Spacer 的主要功能?

A:

1. 使用高浓度的 source/drain 与 gate 间产生一段 LDD 区域
2. 作为 Contact ETCH 时栅极的保护层

---

Q: 为何在离子注入后需要 Thermal Anneal(热处理) 的工艺?

A:

1. 为恢复经离子注入后造成的芯片表面损伤
2. 使注入离子扩散至适当的深度
3. 使注入离子移动到适当的晶格位置

---

Q: SAB(Salicide block) 目的为何?

A:

SAB 用于保护硅片表面, 在 RPO(Resist Protect Oxide) 的保护下硅片不与其他 Ti, Co 形成 salicide(硅化物)

---

Q: SAB 工艺的流程中需要注意哪些?

A:

1. SAB 光刻后, 刻蚀后的图案(特别是小块区域), 要确定有完整的 block 包覆住必需被包覆的地方
2. remain oxide(残留氧化层的厚度)

---

Q: 何谓 salicide(硅化物)?

A:

Si 与 Ti/Co 形成 TiSix/CoSix, 一般来说是用来降低电阻值(Rs, Rc)

---

Q: salicide 的形成步骤可以分为哪些?

A:

1. Co/Ti + TiN 的沉积
2. 第一次 RTA 来形成 Salicide
3. 将未反应的 Co/Ti 以化学酸去除
4. 第二次 RTA(用来形成 Ti 的晶相转化, 降低其阻值)

---

Q: MOS 器件的主要特性是什么?

A:

主要是通过栅极 Vg(电压) 来控制 S/D(source/drain) 之间电流, 实现其开关特性

---

Q: 一般用哪些参数来评价 device 的特性?

A:

主要由 Idsat, loff, Vt, Vbk(breakdown), Rs, Rc

一般要求 Idsat, Vbk 值尽量大; loff, Rc 尽量小; Vt, Rs 尽量接近设计值;

---

Q: 什么使 Idsat? Idsat 代表什么意义?

A: 饱和电流. 也就是在栅压(Vg) 一定时, 源/漏极之间流动的最大电流

---

Q: 在工艺制作过程中哪些工艺可以影响到 Idsat?

A:

Poly CD(多晶硅尺寸), Gate oxide Thk(栅氧化层厚度), AA(有源区)宽度, Vt IMP 条件, LDD IMP 条件, N+/P+ IMP 条件

---

Q: 什么是 Vt? Vt 代表什么意义?

A: 阈值电压(Threshold Voltage), 就是产生强反转所需的最小电压. 当栅极电压 Vg < Vt 时, MOS 处于关闭状态, 而 Vg >= Vt 时, 源/漏极之间便产生导电沟道, MOS 处于开状态

---

Q: 在工艺制作过程中哪些工艺可以影响到 Vt?

A:

Poly CD, Gate oxide Thk, AA 宽度, Vt IMP 条件

---

Q: 什么是 loff? loff 小有什么好处?

A:

关态电流, Vg = 0 时的 source/drain 之间的电流, 一般要求此电流值越小越好. loff 越小, 表示栅极的控制能力越好, 可以避免不必要的漏电流(省电)

---

Q: 什么是 device breakdown voltage?

A:

指崩溃电压(击穿电压), 在 Vg = Vs = 0 时, Vd 所能承受的最大电压. 当 Vd 大于此电压时, source/drain 之间形成的导电沟道不受栅压的影响. 在 device 越做越小的情况下, 这种情况会越来越严重

---

Q: 何谓 ILD? IMD? 其目的为何?

A:

ILD: Inter Layer Dielectric, 是用来做 device 与第一层 metal 的 isolation(隔离).

IMD: Inter Metal Dielectric, 是用来做 metal 与 metal 的 isolation.

要注意 ILD 及 IMD 在 CMP 后的厚度控制

---

Q: 一般介电层 ILD 的形成由哪些层次组成?

A:

1. SiON 层沉积(用来避免上层 B, P 渗入器件)
2. BPSG(掺有硼, 磷和硅玻璃) 层沉积
3. PETEOS(等离子体增强正硅酸乙脂) 层沉积

最后再经 ILD Oxide CMP(SiO2 的化学机械研磨) 来做平坦化

---

Q: 一般介电层 IMD 的形成由哪些层次组成?

A:

1. SRO 层沉积(用来避免上层的氟离子往下渗入器件)
2. HDP-FSG(掺有氟离子的硅玻璃) 层沉积
3. PE-FSG(等离子体增强, 掺有氟离子的硅玻璃) 层沉积

使用 FSG 的目的时用来降低 dielectric k 值, 减低金属层之间的寄生电容

最后再经 IMD Oxide CMP(SiO2 的化学机械研磨) 来做平坦化

---

Q: 简单说明 Contact(CT) 的形成步骤由哪些?

A:

Contact 是指器件与金属线连接部分, 分布在 poly, AA 上

1. Contact 的 photo(光刻)
2. Contact 的 Etch 及光刻胶去除(ash & PR strip)
3. Glue layer(粘合层) 的沉积
4. CVD W(钨) 的沉积
5. W-CMP

---

Q: Glue layer 的沉积所处的位置, 成分, 薄膜沉积方法是什么?

A:

因为 W 比较难附着在 Salicide 上, 所以必须先沉积 Glue layer 再沉积 W

Glue layer 是为了增强粘合性而加入的一层. 主要在 salicide 与 W(CT), W(VIA) 与 metal 之间, 其成分为 Ti, TiN, 分别采用 PVD, CVD 方式制作

---

Q: 为何各金属层之间的连接大多是采用 CVD 的 W-plug(钨插塞) ?

A:

1. 因为 W 有较低的电阻
2. W 有较佳的 step converage(阶梯覆盖能力)

---

Q: 一般 metal layer(金属层) 的形成工艺采用哪种方式? 大致可分为哪些步骤?

A:

1. PVD Metal film 沉积
2. Photo 及图形的形成
3. Metal film Etch 及 plasma(等离子体) 清洗(此步骤为连续工艺, 在同一个机台内完成, 其目的在避免金属腐蚀)
4. Solvent 光刻胶去除

---

Q: Top metal 和 inter metal 的厚度, 线宽有何不同?

A:

Top metal 通常要比 inter metal 厚的多, e.g. 0.18um 工艺中 inter metal 为 4KA, 而 top metal 要 8KA.

主要是因为 top metal 直接与外部电路相接, 所承受负载较大. 一般 top metal 的线宽也比 inter metal 宽些

---

Q: 在量测 Contact / Via(metal 与 metal 间的连接) 的接触窗开的好不好时, 利用什么电性参数来得知的?

A:

通过 Contact/Via 的 Rc 值, Rc 值越高, 代表接触窗的电阻越大, 一般来说希望 Rc 是越小越好

---

Q: 什么是 Rc? Rc 代表什么意义?

A:

接触窗电阻, 具体指 金属和半导体(contact) 或 金属和金属(via), 在相接触时在节处所形成的电阻, 一般要求此电阻越小越好

---

Q: 影响 Contact(CT) Rc 的主要原因有哪些?

A:

1. ILD CMP 的厚度是否异常
2. CT 的 CD 大小
3. CT 的 Etch 过程是否正常
4. 接触 substrate 的质量或浓度(Salicide, non-salicide)
5. CT 的 glue layer(粘合层) 形成
6. CT 的 W-plug

---

Q: 什么是 spacing? 如何量测?

A:

在电性测量中, 给一条线(poly or metal) 加一定电压, 测量与此线相邻但不相交的另外一线的电流, 此电流越小越好. 当电流偏大时, 代表导线间可能发生短路现象

---

Q: 什么是 Rs?

A: 片电阻(单位面积, 单位长度的电阻), 用来量测导线的导电情况如何. 一般可以量测的为 AA(N+, P+), Poly && metal.

---

Q: 影响 Rs 有哪些工艺?

A:

1. 导线 line(AA, poly & metal) 的 CD 大小
2. 导线 line(poly & metal) 的厚度
3. 导线 line(AA, poly & metal) 的本身电导性(在 AA, poly line 时可能为注入离子的剂量有关)

---

Q: 一般护层的结构是由哪三层组成?

A:

1. HDP Oxide(高浓度等离子体二氧化硅)
2. SRO Oxide(Silicon rich oxygen 富氧二氧化硅)
3. SiN Oxide

---

Q: 护层的功能是什么?

A:

使用 oxdide 或 SiN 层, 用来保护下层的线路, 以避免与外界的水汽, 空气相接触而造成电路损害

---

Q: Alloy 的目的为何?

A:

1. Release 各层间的 stress(应力), 形成良好的层与层之间的接触面
2. 降低层与层接触面之间的电阻

---

Q: 工艺流程后有一步骤为 WAT, 其目的为何?

A: wafer acceptance test(WAT), 是在工艺流程结束后对芯片做电性测量, 用来检验各段工艺流程是否符合标准.(Idsat, loff, Vt, Vbk, Rs, Rc 都会在这步测完)

---

Q: WAT 电性测试的主要项目有哪些?

A:

1. device 特性测试
2. Contact resistant(Rc)
3. Sheet resistant(Rs)
4. Break down test
5. 电容测试
6. Isolation(spacing test)

---

Q: 什么是 WAT Watch 系统?它有什么功能?

A:

Watch 系统提供 PIE 一个工具, 来针对不同 WAT 测试项目, 设置不同的栏住产品及发出 Warning 警告标准, 能使 PIE 早期发现工艺上的问题

---

Q: 什么是 PCM SPEC?

A:

Process control monitor(PCM) SPEC

广义而言指芯片制造过程中所有工艺量测项目的规格

狭义而言是 WAT 测试参数的规格

---

Q: 当 WAT 量测到异常是如何处理?

A:

1. 查看 WAT 机台是否异常, 若有则重测
2. 利用手动机台 Double confirm
3. 检查产品是在工艺流程制作上是否有异常记录
4. 切片检查

---

Q: 什么是 EN? EN 有何功能?

A:

由 CE 发出, 祥记关于某一产品的相关信息(包括 Technology ID, Reticle and some split condition ETC...) 或是客户要求的事项(包括 HOLD, Split, Bank, Run to complete, Package...), 根据 EN 提供信息才可以建立 process flow 及处理此产品的相关动作

---

Q: PIE 每天开门五件事 check 哪些项目?

A:

1. Check MES, 查看自己的 lot 情况
2. 处理 inline hold lot(defect, process, WAT)
3. 分析汇总相关产品 inline 数据(raw data & SPC)
4. 分析汇总相关产品 CP test 结果
5. 参加晨会, 汇报相关产品信息
