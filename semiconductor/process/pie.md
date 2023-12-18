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

Q: 0.13 um 的 technology (工艺能力) 代表什么意义?

A:

指工艺能力可以达到 0.13um 栅极的线宽. 栅极的线宽越小, 整个器件就可以越小, 工作速度也越快. 一般工艺能力的难度为 0.35um -> 0.25um -> 0.18um -> 0.15um -> 0.13um

---

Q: 一般 wafer 的 substrate (基材/衬底) N-type 和 P-type 的区别

A:

N-type wafer 指掺杂 negative 元素 (5 价电荷元素, e.g. P, As).

P-type wafer 指掺杂 positive 元素 (3 价电荷元素, e.g. B, In)

---

Q: P, M, mask layer (光照层数) 有什么意义? 为什么用来代表工艺的时间长短?

A:

P 指 Poly (多晶硅), M 指 metal (金属导线), 几 P 几 M 指几层 Poly, 几层 metal. e.g. 0.15um 的产品为 1P6M

mask layer 代表必须要经过几次光刻

---

Q: Wafer 下线的第一道步骤是形成 start oxide and zero layer, start oxide 的目的是什么? 为什么要 zero layer?

A:

start oxide 的目的:

1. 不希望有机成分的光刻胶直接接触 Si 表面
2. 再 laser 刻号过程中, 避免粉尘污染

zero layer 是作为芯片工艺各层次之间的对准基准 (T7 Code 是 substrate 背面刻号, 与原物料相关, 用于追溯供应商的 ID, 是数字字母流水码)

---

Q: wafer process 制造过程包含那些主要部分?

A:

1. frontend (前段), device (元器件) 的制造过程
2. backend (后段), metal (金属导线) 的连接及 passivation (护层)

---

Q: frontend process 大致区分?

A:

1. STI (Shallow Trench Isolation, 浅沟道隔离) 的形成 (定义 AA 区域及器件间的隔离)
2. well implant (阱区离子注入) 以调整电性
3. poly gate (栅极) 的形成
4. source/drain (源/漏极) 的形成
5. salicide (硅化物) 的形成

---

Q: 为何需要 STI?

A: STI 可以当作两个 device 间的阻隔, 避免两个组件间的短路

---

Q: AA 的用途?

A:

Active Area (源区), 是用来建立晶体管主体的位置所在, 在 AA 上形成 源/漏/栅极, 两个 AA 区之间就是用 STI 作隔离

---

Q: 在 STI 的刻蚀 process 中, 需要注意的参数?

A:

1. STI ETCH 角度
2. STI ETCH 深度
3. STI ETCH 后的 CD (critical dimension) 尺寸大小控制

---

Q: STI 形成步骤中的 liner oxide (线形氧化层) 的特性和功能?

A:

特性: liner oxide 为 1100C, 120 min 高温炉管形成的氧化层

功能:

1. 修补 STI ETCH 造成的 substrate 损伤
2. 将 STI ETCH 造成的尖角 corner rounding (圆化)

---

Q: 一般的阱区 IMP 调整电性可以分为 3 步骤, 功能为何?

A:

1. Well Implant: 形成 N, P 阱区
2. Channel Implant: 防止 source/drain (源/漏极) 间的漏电
3. Vt Implant: 调整 Vt (阈值电压)

---

Q: 一般 Implant layer (离子注入层次) 分为几步骤?

A:

1. 光刻及图形的形成
2. 离子注入调整
3. 离子注入完后的 ash (plasma 等离子体清洗)
4. 光刻胶去除 (PR strip)

---

Q: Poly 栅极形成的步骤大致分为哪些?

A:

1. Gate oxide (栅极氧化层) 的沉积
2. Poly film 的沉积及 SiON (在光刻中作为抗反射层的物质) 的沉积
3. Poly 图形的形成
4. Poly 及 SiON 的 ETCH
5. ETCH 完后的 ash (plasma 等离子体清洗)及光刻胶去除 (PR strip)
6. Poly 的 Re-oxidation (二次氧化)
