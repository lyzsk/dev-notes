@see: https://github.com/state-spaces/mamba

# mamba 1

@see: https://arxiv.org/abs/2312.00752

transformer 是 tokenized 的模型, mamba 更像 RNN, 但事实 selective state spaces, 拥有选择机制, 解决了 transformer 对于长序列的效率问题, SSM 架构也不需要 attention 机制, 也不需要 MLP 模块.

transformer 采用 self-attention 机制, 但 mamba 采用 selective state spaces, 即每个状态变量只与当前时刻的输入有关, 而不与历史输入有关. 因此, mamba 具有更高的计算效率, 且不用 attention 机制, 也不用 MLP 模块, 因此更适合长序列的处理.

transformer 的一个主要优点是, 无论它接收到多长的输入, 它都使用序列中的任何令牌信息 (无论序列有多长)来对输入数据进行处理

但是为了获得全局信息, 注意力机制在长序列上非常耗费显存

transformer 的 encoder-decoder 结构把所有文本相关的任务都干了, 包括翻译

transformer attention 机制就是在每个 encoder 里, feed-forward 这样 attetion 创建一个 matrix, matrix 里 token 与 token 进行矩阵计算相关性, = 1 就是 high attention, 而计算下一个注意力的时候前一个 attention 已经算完了, 但是这种迭代耗显存

而 mamba 借鉴 RNN, 只需要考虑之前的隐藏状态和当前的输入, 不会重新计算之前的隐藏状态, 这样比 transformer 快, 并且理论上是无限的上下文长度, 不管输入序列长短, 内存占用都很稳定 (每个隐藏状态都是以前所有隐藏状态的聚合), 但 RNN 的致命缺点就是不能并行化训练, 所以推理快, 训练慢, SSM 就解决了这个问题, 具体看下面链接的公式

@see: https://cloud.tencent.com/developer/article/2390382

## SSM (State Space Models)

mamba 用的是 linear attention

SSM 本身就定义了一个线性映射, 半可分离矩阵有着特殊的低秩结构, 这种结构又恰好对应了 SSM 模型中的状态变量. 矩阵乘法就相当于 SSM 的线性时变系统了, 带选择性的 SSM 本质上就是一种广义线性注意力机制

@see: https://www.qbitai.com/2024/06/149893.html

一般任意带掩码的注意力机制, 都可以表示为 4 个张量缩井 (Contraction), 其中 QKV 对应注意力中的 query, key, value, L 对应掩码矩阵

借助线性注意力, 加上结构化掩码注意力 SMA (Structured Masked Attention), 就可以让注意力的掩码矩阵是半可分离的, 就与 SSM 等价了, 然后就有了 mamba 的核心思想: 状态空间二元性 SSD (Structured State Space Duality)

一般 SSMs 包括以下组成:

-   映射输入序列 x(t), 比如在迷宫中向左和向下移动
-   到潜在状态表示 h(t), 比如距离出口距离和 x/y 坐标
-   并导出预测输出序列 y(t), 比如再次向左移动以更快到达出口

然而, SSM 不使用离散序列(如向左移动一次), 而是将连续序列作为输入并预测输出序列: input(sequence) x(t) -> State Space Model -> output(sequence) y(t)

State equation: h'(t) = Ah(t) + Bx(t)

Output equation: y(t) = Ch(t) + Dx(t)

等效于: h(t) = Ah(t - 1) + Bx(t)

这个个 RNN 循环结构: ht = tanh(Wht-1 + Uxt) 非常类似, 通过上一个隐藏状态和当前输入综合得到当前的隐藏状态, 只是把权重 W, U 换成了系数 A, B, 并且去掉了非线性的激活函数 tanh

系数 A 代表所有历史信息的存储, 即一个矩阵表示, 基于 A 来更新下一个时刻的 hidden state 隐藏状态空间

就是在 input 变化的时候, A,B,C,D 是固定不变的, 作为常数系数矩阵, 而这是在 SSM 不变, 到了 mamba 里, 4 个矩阵就是可学习参数, 会变

SSM 的状态方程其实写成: h(t) = Ah(t - 1) + Bx(t) 更好理解, 就是前一个时刻的状态乘以系数 A, 加上当前时刻的输入乘以系数 B

再简化一下就是: input x, 对于状态 h, 通过 `A * h(t-1) + B * x(t)` 得到当前状态 h 的表示, 然后通过 `C * h(t)` 也就是 C 乘以前面的结果, 再加上 `D * x(t)` 得到 output y, 其中 x(t) 也可以说叫 signal input

h: 状态向量, 包含了系统在当前时刻所有内部状态变量

x: 系统在时间 t 的输入向量, 包含了所有外部输入变量, 这些变量可以影响系统的状态

A: 状态转移矩阵, 描述了系统状态如何随时间演化

B: 输入矩阵, 描述了输入如何影响系统状态

C: 输出矩阵, 描述了系统状态如何映射到输出

D: 也称为 skip-connection 跳跃连接, 是直接传输矩阵, 描述了输入如何直接影响输出

State equation 还能添加过程噪声向量 wt: h'(t) = Ah(t) + Bx(t) + wt, 表示状态转移中的随机误差

Output equation 还能添加观测噪声向量 vt: y(t) = Ch(t) + Dx(t) + vt, 表示输出测量中的随机误差

@see: https://cloud.tencent.com/developer/article/2390382

在 mamba 中, A,B,C,D:

step size delta: 输入的离散化表示 (discretization parameter of the input)

Matrix A: 当前状态空间如何随时间演化 (How the current state evolves over time)

Matrix B: 输入矩阵如何影响状态空间 (How the input influences the state)

Matrix C: 当前状态空间如何映射到输出矩阵 (How the current state translates to the output)

## S4 (Structured State Spaces for sequences)

而 mamba 是将 SSM 升级到 S4(State Space Models for sequences), 即离散化 SSM, 循环/卷积表示, 基于 HiPPO 处理长序列

因为结构化序列通常会是离散的数据, SSM 中 sequnce 不过是连续信号 signal 的采样, 而对于本文之类的离散数据(非连续的), 需要离散化处理数据, 需要 Zero-order hold technique 零阶保持技术, e.g. 视频是每一帧连接起来的, 把每一帧非离散数据整合成离散数据, 具体如下:

1. 每次收到离散信号时, 保留其值, 直到下一次收到新的离散信号, 这样可以创建 SSM 需要的 continuous input signal
2. 保持该值的时间由一个可学习参数表示: delta - 步长(size), 代表阶段性保持(resolution)
3. 有了连续的输入信号后, 便可以生成连续的输出, 并且仅根据输入的时间步长对值进行采样

Discretized matrix A = `exp(delta A)`

Discretized matrix B = `(delta A)-1 * (exp(delta A) - I) * delta B`

也就是离散参数矩阵 A, B 变成了 mamba 的参数, SSM 转变成了离散 SSM, x(t) -> y(t) 的函数变成了序列 xk -> yk, 注意这里用 k 而不是 t 表示时间的步长, 因为连续信号的采样步长是可学习的, 而离散信号的采样步长是固定的, 所以用 k 表示, 也可以理解成 k 代表是一段时间范围而不是一个 t 时间点

也就是对于每一个时间步长, 计算当前输入 Bxk 如何影响前一个状态 Ahk-1, 然后计算预测输出 Chk, 当 k=0 时, Ah-1 可以忽略不计

注意, A 和 C 在整个过程中是不变的, 要想有随机性, 就是通过 wt 和 vt 来添加随机误差

如何保留大上下文大小的方式创建矩阵 A 呢?

HiPPO 的模型结合了递归记忆（Recurrent Memory）和最优多项式投影（Optimal Polynomial Projections）的概念，这种投影技术可以显著改善递归记忆的性能，特别是在处理长序列和长期依赖关系时。

@see: https://proceedings.neurips.cc/paper/2020/hash/102f0bb6efb3a6128a3c750dd16729be-Abstract.html

continuous state space + long-range dependencies(HiPPO) + Discrete Representations => Structured State Spaces for sequences(S4)

解决了:

1. 状态空间模型
2. 处理远程依赖关系
3. 离散化和并行运算

@see: https://srush.github.io/annotated-s4/

## selective state spaces

mamba 主要两个贡献:

1. 选择性扫描算法(Selective Scanning Algorithm), 可以过滤有关和无关的信息
2. 硬件感知算法(Hardware-Aware Algorithm), 通过并行扫描, 核融合, 重计算, 有效地存储中间结果

mamba 本质就是检索式模型, transformer 是生成式模型

mamba 处理矩阵 4 个重要参数: B(batch size), L(sequence length), D(size of input vector), N(Hidden state size)

对于 S4 结构化状态空间模型, Matrix A, B, C 独立于输入, 因为他们的维度 N, D 是静态的, 不会改变, 而输入序列长度和批量大小, 使 Matrix B, C 依赖输入步长 delta, 这意味着对于每个输入标记, 有不同的 Matrix B, C, 解决了内容感知问题. Matrix A 恒不变, 因为总体状态本身使保持静态的, 通过动态的 B, C 来学习不同输入的表示. 也就是说它们一起选择性地选择将什么保留在隐藏状态中, 什么需要忽略, 这都是由输入确定的.

较小的步长 delta 导致忽略特定的单词, 而是更多地使用之前的上下文

较大的步长 delta 更多地关注输入单词而不是上下文

扫描操作: 每个状态都是前一个状态(乘以 A)加上当前输入(乘以 B)的和

对于扫描操作, 因为矩阵 B, C 使动态的, 所以不能用卷积进行计算, 只能用循环进行处理, 这样就无法使其并行化(每个状态只有在我们有前一个状态时才能计算出来)

为了让扫描能并行化, mamba 通过关联属性假定执行操作的顺序无关紧要, 这样就可以计算部分序列并迭代组, 这样还有一个好处是因为顺序不重要合它们, 也可以省略掉 Transformer 的位置编码

也就是 x -> B -> h (循环调用 A 更新状态 h) -> C -> y 公式中, 将 h 放在 SRAM 里, 也就是缓存里, A 因为是静态, 而且包含整个序列的状态信息的所以放在 DRAM 里

## mamba block

选择性 SSM 可以作为一个 block 块, 就像在 Transformer 中的的注意力模块一样, 可以堆叠多个块, 并使用它们的输出作为下一个块的输入

mamba block 用的不是单纯的 Layer Norm, 而是 RMS Norm (Root Mean Square Layer Normalization)

相比于普通的 layer norm, RMS Norm 去除了平移部分, 只保留了缩放部分, 也就是减少了计算均值和平移系数的部分, 训练速度更快, 效果基本相当

@see: https://arxiv.org/abs/1910.07467

@see: https://juejin.cn/post/7308782796953436210

@see: https://mltalks.medium.com/rmsnorm%E8%AE%BA%E6%96%87%E9%98%85%E8%AF%BB-bfae83f6d464

# Mamba-2

mamba-2 就是在 mamba 基础上把状态维度从 16 扩大到 256, 从而学习更强的表示能力, 这基于 SSD 算法, 即基于块分解矩阵乘法, 利用了 GPU 的存储层次结构, 提高训练速度

架构设计上, Mamba-2 简化了块的设计, 同时受注意力启发做出一些改动, 借鉴多头注意力创建了多输入 SSM

有了与注意力之间的联系, SSD 还可以轻松将 Transformer 架构多年来积累起来的优化方法引入 SSM。

e.g. 引入张量并行和序列并行, 扩展到更大的模型和更长的序列

e.g. 引入可变序列长度, 以实现更快的微调和推理

Mamba2 跑分更高, 侧面证明 Attention 和 SSM 两种机制可以互为补充

@see: https://arxiv.org/abs/2405.21060

@see: https://goombalab.github.io/blog/2024/mamba2-part1-model/

@see: https://goombalab.github.io/blog/2024/mamba2-part2-theory/

@see: https://goombalab.github.io/blog/2024/mamba2-part3-algorithm/

@see: https://goombalab.github.io/blog/2024/mamba2-part4-systems/

---

Mamba2（即 Mamba-2）是一种改进的选择性状态空间模型（Selective State Space Model, SSM），其核心在于通过结构化状态空间对偶性（SSD）理论将状态空间模型（SSM）与 Transformer 的注意力机制统一，从而在长序列建模中实现高效性与灵活性。以下是其连续状态空间的输入、输出、作用及数据处理方式的详细分析：

---

### **1. 输入与输出**

-   **输入**：  
    Mamba2 的输入是**连续的序列数据**，例如语言模型中的文本序列、视觉任务中的图像补丁序列或时间序列数据。具体来说，输入序列会被建模为连续时间信号，通过状态空间模型的动态系统进行转换。

    -   在连续时间视角下，输入信号通过零阶保持（Zero-Order Hold, ZOH）技术进行离散化处理，将离散的输入序列转换为连续的信号，以适应 SSM 的数学框架。

-   **输出**：  
    输出是**经过状态空间模型处理的序列**，通常包括两部分：
    1. **隐藏状态的更新**：通过状态方程（如\( h\_{t+1} = A h_t + B u_t \)）动态调整，捕捉序列中的长期依赖关系。
    2. **预测结果**：通过输出方程（如\( y_t = C h_t \)）将隐藏状态映射到目标输出，例如语言模型的预测词或图像分类的类别概率。

---

### **2. 核心作用**

Mamba2 的连续状态空间设计主要解决以下问题：

1. **长序列建模效率**：

    - 通过状态空间模型的线性时间复杂度和并行扫描技术，避免了 Transformer 的二次计算复杂度，尤其适用于百万级长度的序列处理。
    - 在视觉任务中，双向状态空间模型（如 Vision Mamba, Vim）通过四向扫描策略捕捉全局空间信息，替代了传统自注意力机制。

2. **动态选择性机制**：

    - 通过选择性 SSM（S6），模型可根据输入内容动态调整参数（如状态转移矩阵 A、输入投影矩阵 B），从而聚焦关键信息，忽略噪声或冗余数据。

3. **硬件优化**：
    - 结合 GPU 的并行计算特性，采用核融合（Kernel Fusion）和重计算（Recomputation）技术，减少内存访问开销，提升训练和推理速度。

---

### **3. 数据处理与转换**

Mamba2 对输入数据的处理主要包括以下步骤：

1. **离散化与零阶保持（ZOH）**：

    - 将离散输入序列（如文本或图像补丁）转换为连续信号，通过 ZOH 保持每个输入值的持续时间，并由可学习的步长参数 Δ 控制离散化过程。

2. **结构化参数化**：

    - 使用 HiPPO 矩阵（High-order Polynomial Projection Operators）捕捉输入信号的历史信息，通过多项式基函数逼近连续信号，增强对长程依赖的建模能力。

3. **多维数据扩展**：

    - 针对视觉数据，将 2D 图像分割为补丁序列，通过交叉扫描模块（Cross-Scan Module, CSM）进行四向扫描，解决传统 SSM 单向建模的局限性。

4. **动态参数调整**：
    - 选择性机制通过输入相关的参数（如 Δ、B、C）动态调整状态转移和输入投影，使模型能够适应不同数据模式（如语言中的关键词或图像中的关键区域）。

---

### **4. 与其他模型的对比**

与 Transformer 和传统 SSM 相比，Mamba2 的创新体现在：

-   **理论统一性**：通过 SSD 理论揭示了 SSM 与注意力机制在数学上的等价性，例如将注意力掩码矩阵映射为半可分矩阵（Semi-Separable Matrix），实现计算加速。
-   **效率优势**：在 ImageNet 分类任务中，Vision Mamba（Vim）的推理速度比 DeiT 快 2.8 倍，内存占用减少 86.8%。

---

### **总结**

Mamba2 的连续状态空间通过动态选择性机制和结构化参数化，实现了对长序列的高效建模。其输入为经过离散化处理的连续信号，输出为隐藏状态与目标预测的结合，核心作用在于平衡模型容量与计算效率。这一设计使其在语言建模、视觉任务及时间序列预测中展现出显著优势，成为 Transformer 的有力替代方案。

SRAM：常用于 GPU 中的 L1、L2 缓存，高功耗，低容量，低延迟

DRAM：常用于 GPU 中的显存，功耗更低，容量更大，但延迟更高

硬件感知算法 Hardware-aware Algorithm：

GPU 的缺陷： SRAM 和 DRAM 之间的频繁通信导致的计算瓶颈

类似 Flash Attention，Mamba 通过核融合限制 SRAM 和 DRAM 间的通信次数

在 SRAM 中积累一批结果再集中写入 DRAM，从而降低来回读写的次数

这里指的是 initial tensors(DRAM) -> kernel fusion(SRAM 存多个 calculation 值) -> results(DRAM)

硬件感知算法不会保存中间状态，而是在后向传递时对中间状态进行重新计算；因为重新计算的成本，比从相对较慢的 DRAM 中读取中间状态的成本更低

Tensor 实际上就是一个多维数组（multidimensional array）

Tensor 的目的是能够创造更高维度的矩阵、向量

張量為多維數組(multidimensional array)，能夠靈活地表示不同類型和不同維度的數據，可以表示純量(0D 張量)、向量(1D 張量)、矩陣(2D 張量)及更高維度的數據結構

深度學習框架(如 TensorFlow 和 PyTorch)設計用來高效地處理張量。張量運算可以被分解成許多小的計算單元，這些單元可以在 GPU 上並行執行多個運算任務，加速計算過程

@see: https://estellacoding.github.io/blog/what-is-tensor/

### segsum

```py
def segsum(x):
    """More stable segment sum calculation."""
    T = x.size(-1)  # 获取张量 x 在最后一个维度的大小，记为 T
    x = repeat(x, "... d -> ... d e", e=T)  # 将张量 x 在新的维度 e 上重复 T 次
    # 创建一个掩码，这个掩码是一个下三角矩阵，对角线以上的元素为False，对角线及以下的元素为True
    mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=-1)
    x = x.masked_fill(~mask, 0)  # 将掩码为False的位置的元素填充为0
    x_segsum = torch.cumsum(x, dim=-2)  # 在倒数第二个维度上计算累积和
    # 创建一个新的掩码，这个掩码是一个下三角矩阵，对角线及以上的元素为True
    mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=0)
    x_segsum = x_segsum.masked_fill(~mask, -torch.inf)  # 将掩码为False的位置的元素填充为负无穷
    return x_segsum  # 返回计算得到的分段和张量

```

1. T = x.size(-1)：获取张量 x 在最后一个维度上的尺寸，记为 T。这通常意味着 x 是一个形状为 (batch_size, sequence_length, dimension) 的张量，其中 T 对应于 sequence_length。

2. x = repeat(x, "... d -> ... d e", e=T)：使用 repeat 函数将张量 x 在一个新的维度上进行重复。具体来说，假设 x 原本的形状是 (batch_size, sequence_length, dimension)，经过这一步后，x 的形状会变成 (batch_size, sequence_length, dimension, T)。这里的 ... 表示前面对应的所有维度，d 和 e 分别代表最后一个和新添加的维度。新添加的维度 T 上的元素都是 x 中对应元素的重复。

3. mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=-1)：创建一个下三角矩阵掩码，其中对角线以上的元素为 False，对角线及以下的元素为 True。这里的 diagonal=-1 表示对角线以上的部分也需要填充为 False。

4. x = x.masked_fill(~mask, 0)：将 x 中对应于 mask 为 False 的位置的元素填充为 0。这样可以确保在后续的累积和计算中，只考虑下三角部分的元素。

5. x_segsum = torch.cumsum(x, dim=-2)：在倒数第二个维度（即 T 这个新添加的维度）上计算累积和。这一步的目的是为了计算分段和，即在 T 维度上，逐行累加元素的值。

6. mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=0)：创建一个新的下三角矩阵掩码，其中对角线及以上的元素为 True，对角线以下的元素为 False。这里的 diagonal=0 表示对角线部分也需要填充为 True。

7. x_segsum = x_segsum.masked_fill(~mask, -torch.inf)：再次使用掩码，将 x_segsum 中对应于 mask 为 False 的位置的元素填充为负无穷 -torch.inf。这一步的目的是确保在后续的操作中，只保留下三角部分的累积和结果，大于对角线的部分会被填充为负无穷，从而在需要时（例如取最大值）可以忽略这些位置的值。

8. return x_segsum：返回计算得到的分段和张量 x_segsum，其形状为 (batch_size, sequence_length, dimension, T)，并且只保留了下三角部分的有效累积和结果。

segsum 函数可以处理任意维度的输入张量 x，而不仅仅是 3 维矩阵。具体来说，输入张量 x 的最后一个维度的大小被用来计算段和（segment sum），即 T = x.size(-1)。函数的主要目的是计算一个特定的段和矩阵，该矩阵在某些情况下用于生成半可分矩阵（semi-separable matrix），这种矩阵在处理长序列时可以提高效率

1. 输入形状处理

    ```py
    T = x.size(-1)
    x = repeat(x, "... d -> ... d e", e=T)

    ```

    这里使用 repeat 函数将输入张量 x 在最后一个维度之后增加了一个新的维度，使得 x 的形状变为 (..., d, T, T)，其中 d 是 x 的倒数第二个维度的大小（或其他维度大小，用 ... 表示），T 是序列的长度。这样做是为了准备后续的矩阵运算。

2. 创建掩码

    ```py
    mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=-1)
    x = x.masked_fill(~mask, 0)

    ```

    使用 torch.tril 创建一个下三角掩码矩阵，其中只有下三角部分（不包括对角线）为 True，其余部分为 False。然后，使用 masked_fill 函数将 x 中对应掩码为 False 的位置填充为 0。这一步是为了确保只有序列中较早的时间点可以对后面的时间点产生影响

3. 计算累计和

    ```py
    x_segsum = torch.cumsum(x, dim=-2)

    ```

    在新的倒数第二个维度（即 ... d e 中的 e）上计算累积和。这一步将 x 中的值累积起来，形成一个累积和矩阵

4. 再次应用掩码

    ```py
    mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=0)
    x_segsum = x_segsum.masked_fill(~mask, -torch.inf)

    ```

    再次创建一个下三角掩码矩阵，这次包括对角线部分。然后，使用 masked_fill 函数将 x_segsum 中对应掩码为 False 的位置填充为 -torch.inf。这一步是为了确保累积和矩阵中只有有效的段和值，无效的部分被设置为负无穷，通常用于后续的 softmax 或其他归一化操作中避免无效值的影响

segsum 函数的核心功能是通过累积和和掩码操作生成一个特定的段和矩阵，该矩阵用于后续的状态空间模型或注意力机制中的计算。输入张量 x 可以是任意维度的，只要其最后一个维度的大小表示序列的长度即可

对于 mamba2, input 通常是 [batch_size, sequence_length] 二维矩阵, 然后进行高维扩展变成 [batch_size, sequence_length, n_heads, d_head], 其中 n_heads 表示多头注意力的数量, d_head 表示每个注意力头的维度

然后这些高维矩阵(tensor) 会进行:

1. 离散化与零阶保持（ZOH）: 将离散的输入序列转换为连续信号。每个输入值在一段持续时间内保持不变，这个持续时间由可学习参数 delta 控制

2. 映射到状态空间模型: 通过线性变换和结构化掩码注意力（SMA），将输入信号映射到状态空间模型中。在这个过程中，A, B, C, 和 D 矩阵会被用到，其中 A 和 C 是静态的，而 B 和 C 是动态的，可以根据输入内容进行调整

3. 进入 segsum 函数: segsum 函数用于计算段和（segment sum），在 Mamba2 中主要用于生成状态空间模型中的掩码矩阵。这里的输入张量 x 通常是经过离散化和线性变换后的结果，它可能是一个三维矩阵（例如 [batch_size, sequence_length, n_heads]），但在 segsum 函数中，它会被处理为一个更高维度的张量，以便进行段和计算

segsum 函数返回的 x_segsum 是一个四维张量，包含了段和计算的结果，这些结果会被用于后续的状态空间模型的计算中

核心应该是: input -> mamba block -> RMS Norm -> Linear + Sofmax -> output

1. input: 1D sequence, 这个长度 L 变成 [batch_size, sequence_length, d_head] 的张量

2. RMS Norm: Root Mean Square Layer Normalization 先对输入进行归一化, 保留了缩放部分, 而不进行平移, 对于输入张量计算根均方值, 使用这个值作为缩放输入, 从而保持输入的分不稳定, 减少训练中的变量便宜

3. Projection: 归一化后的张量会被投影到更高维度的空间。这个投影通常是通过线性变换, 型变成 [batch_size, sequence_length, n_heads, d_head] 然后应用[segsum](#segsum) , 投影后的张量包含了更丰富的特征表示, 为后续的 SSM 处理做准备

4. Convolution: 投影后的张量会通过卷积层进行特征提取, 卷积层可以捕捉输入序列中的局部模式和依赖关系, 将 [batch_size, sequence_length, n_heads, d_state] 的 tensor 在时间步长上进行操作, 提取特征并生成新的 [batch_size, sequence_length, n_heads, d_head] 卷积层的输出通常经过 SiLU（Sigmoid Linear Unit）激活函数进行非线性变换

5. SiLU: SiLU 激活函数会对卷积层的输出进行非线性变换，使得模型能够学习更复杂的特征表示, `SiLU(x) = x * sig(x)`, 直接调用 Sigmoid 函数

6. Selective SSM: 经过卷积和 SiLU 激活函数处理后的张量会被输入到选择性 SSM 中, 选择性 SSM 是 Mamba2 的核心部分，它能够根据输入内容动态调整状态转移和输入投影，从而聚焦关键信息，忽略噪声或冗余数据。选择性 SSM 处理后的输出是一个形状为 [batch_size, sequence_length, n_heads, d_head] 的张量，这个张量包含了隐藏状态与目标预测的结合

7. Projection: 选择性 SSM 的输出可能会再次经过一个投影层，将特征映射到原始的输出空间中，形状为 (batch, length, n_heads, d_head)。这个步骤通常是可选的，具体取决于 Mamba2 的实现细节

segsum 函数的作用是计算段和，以优化长序列的处理，从而减少 SRAM 和 DRAM 之间的频繁通信，提高计算效率

AI 生成的:

Mamba2 实际上并不是非 tokenized 的模型。虽然它在架构上借鉴了 RNN 和选择性状态空间模型（SSM）的理念，但本质上仍然是处理 token 序列的模型，类似于 Transformer。这种误解可能源于 Mamba2 使用了更高效的方式来处理这些 token 序列，避免了像 Transformer 那样的自注意力机制，而是通过状态空间模型来捕捉长序列中的依赖关系。

具体来说，Mamba2 的输入序列 input_ids 是 token 序列，这些 token 是通过分词器（tokenizer）将文本或其他序列数据转换成的离散整数序列。在 Mamba2LMHeadModel 的 forward 方法中，首先将这些 token 序列通过嵌入层（embedding layer）映射成连续的向量表示，然后通过多层的状态空间处理模块（SSM block）来逐步处理这些向量序列。

最终，经过所有层的处理后，输出会被通过一个线性层（lm_head），将处理后的向量映射回 token 的词汇表空间，从而得到每个 token 的预测概率分布。因此，logits 的输出维度是 (batch, seqlen, vocab_size)，表示每个序列中的每个 token 对应的词汇表中每个 token 的预测概率

---

## code and model explain

@see: https://github.com/tommyip/mamba2-minimal

### 初始化配置及工具类

这里是全局配置, 配置变量初始化:

```py
@dataclass
class Mamba2Config:
    d_model: int  # model dimension (D)
    n_layer: int = 24  # number of Mamba-2 layers in the language model
    d_state: int = 128  # state dimension (N)
    d_conv: int = 4  # convolution kernel size
    expand: int = 2  # expansion factor (E)
    headdim: int = 64  # head dimension (P)
    chunk_size: int = 64  # matrix partition size (Q)
    vocab_size: int = 50277
    pad_vocab_size_multiple: int = 16

    def __post_init__(self):
        self.d_inner = self.expand * self.d_model
        assert self.d_inner % self.headdim == 0
        self.nheads = self.d_inner // self.headdim
        if self.vocab_size % self.pad_vocab_size_multiple != 0:
            self.vocab_size += (
                self.pad_vocab_size_multiple
                - self.vocab_size % self.pad_vocab_size_multiple
            )

```

这里是基础的配置算法:

```py
class InferenceCache(NamedTuple):
    conv_state: Tensor  # (batch, d_inner + 2 * d_state, d_conv)
    ssm_state: Tensor  # (batch, nheads, headdim, d_state)

    @staticmethod
    def alloc(batch_size: int, args: Mamba2Config, device: Device = None):
        return InferenceCache(
            torch.zeros(
                batch_size, args.d_inner + 2 * args.d_state, args.d_conv, device=device
            ),
            torch.zeros(
                batch_size, args.nheads, args.headdim, args.d_state, device=device
            ),
        )


class Mamba2LMHeadModel(nn.Module):
    def __init__(self, args: Mamba2Config, device: Device = None):
        super().__init__()
        self.args = args
        self.device = device

        self.backbone = nn.ModuleDict(
            dict(
                embedding=nn.Embedding(args.vocab_size, args.d_model, device=device),
                layers=nn.ModuleList(
                    [
                        nn.ModuleDict(
                            dict(
                                mixer=Mamba2(args, device=device),
                                norm=RMSNorm(args.d_model, device=device),
                            )
                        )
                        for _ in range(args.n_layer)
                    ]
                ),
                norm_f=RMSNorm(args.d_model, device=device),
            )
        )
        self.lm_head = nn.Linear(
            args.d_model, args.vocab_size, bias=False, device=device
        )
        self.lm_head.weight = self.backbone.embedding.weight

    @staticmethod
    def from_pretrained(huggingface_model_id: str, device: Device = None):
        from transformers.utils import CONFIG_NAME, WEIGHTS_NAME
        from transformers.utils.hub import cached_file

        config_path = cached_file(huggingface_model_id, CONFIG_NAME)
        assert config_path, "Failed to get huggingface config file"
        state_dict_path = cached_file(huggingface_model_id, WEIGHTS_NAME)
        assert state_dict_path, "Failed to get huggingface state dict file"

        config = json.load(open(config_path))
        args = Mamba2Config(
            d_model=config["d_model"],
            n_layer=config["n_layer"],
            vocab_size=config["vocab_size"],
            pad_vocab_size_multiple=config["pad_vocab_size_multiple"],
        )

        map_location = "cpu" if device is None else device
        state_dict = torch.load(
            state_dict_path, weights_only=True, map_location=map_location, mmap=True
        )
        model = Mamba2LMHeadModel(args, device=device)
        model.load_state_dict(state_dict)
        model.eval()
        return model

    def forward(
        self, input_ids: LongTensor, h: list[InferenceCache] | list[None] | None = None
    ) -> tuple[LongTensor, list[InferenceCache]]:
        """
        Arguments
            input_ids: (batch, seqlen) tokens from `EleutherAI/gpt-neox-20b` tokenizer
            h: hidden states for inference step. If present the constant-time
               (wrt sequence length) inference path will be taken, input_ids
               should have shape (batch, 1) containing the next batch of prompt
               token.

        Return (logits, h)
            logits: (batch, seqlen, vocab_size)
            h: updated inference cache after processing `input_ids`
        """
        seqlen = input_ids.shape[1]

        if h is None:
            h = [None for _ in range(self.args.n_layer)]

        x = self.backbone.embedding(input_ids)
        for i, layer in enumerate(self.backbone.layers):
            y, h[i] = layer.mixer(layer.norm(x), h[i])
            x = y + x

        x = self.backbone.norm_f(x)
        logits = self.lm_head(x)
        return logits[:, :seqlen], cast(list[InferenceCache], h)

    def generate(
        self,
        input_ids: LongTensor,
        max_new_length: int = 20,
        temperature: float = 1.0,
        top_k: int = 50,
        top_p: float = 1.0,
        eos_token_id: int = 0,
    ) -> Iterable[tuple[int, list[InferenceCache]]]:
        prefix, tokens = input_ids[:-1], input_ids[-1:].unsqueeze(0)

        # Process prompt
        # The input sequence to forward (non-inference path) must have length multiple that of chunk_size.
        # We split out excess tokens so that n_chunked tokens can be processed by one forward call and
        # process the rest in multiple inference steps.
        n_chunked = (prefix.shape[0] // self.args.chunk_size) * self.args.chunk_size
        if n_chunked > 0:
            _, h = self(prefix[:n_chunked].unsqueeze(0), None)
        else:
            h = [
                InferenceCache.alloc(1, self.args, device=self.device)
                for _ in range(self.args.n_layer)
            ]
        for i in range(n_chunked, prefix.shape[0]):
            _, h = self(prefix[i : i + 1].unsqueeze(0), h)

        # Generate
        for _ in range(max_new_length):
            with torch.no_grad():
                out, h = self(tokens, h)
            logits = out[0, -1]
            if temperature != 1.0:
                logits = logits / temperature
            if top_k > 0:
                indices_to_remove = logits < torch.topk(logits, k=top_k)[0][-1]
                logits[indices_to_remove] = -torch.inf
            if top_p < 1.0:
                sorted_logits, sorted_indices = torch.sort(logits, descending=True)
                cum_probs = torch.cumsum(F.softmax(sorted_logits, dim=-1), dim=-1)
                sorted_indices_to_remove = cum_probs > 0.5
                sorted_indices_to_remove[1:] = sorted_indices_to_remove[:-1].clone()
                sorted_indices_to_remove[0] = False
                indices_to_remove = sorted_indices[sorted_indices_to_remove]
                logits[indices_to_remove] = -torch.inf
            probs = F.softmax(logits, dim=-1)
            next_token = torch.multinomial(probs, num_samples=1)
            if next_token.item() == eos_token_id:
                return
            tokens = next_token.unsqueeze(0)
            yield cast(int, next_token.item()), h


```

以上会在训练过程中被调用, 复用

### mamba2 step1: 处理 input

核心部分是:

```py
class Mamba2(nn.Module):
        def __init__(self, args: Mamba2Config, device: Device = None):
        super().__init__()
        self.args = args
        self.device = device

        # Order: (z, x, B, C, dt)
        d_in_proj = 2 * args.d_inner + 2 * args.d_state + args.nheads
        self.in_proj = nn.Linear(args.d_model, d_in_proj, bias=False, device=device)

        conv_dim = args.d_inner + 2 * args.d_state
        self.conv1d = nn.Conv1d(
            in_channels=conv_dim,
            out_channels=conv_dim,
            kernel_size=args.d_conv,
            groups=conv_dim,
            padding=args.d_conv - 1,
            device=device,
        )

        self.dt_bias = nn.Parameter(torch.empty(args.nheads, device=device))
        self.A_log = nn.Parameter(torch.empty(args.nheads, device=device))
        self.D = nn.Parameter(torch.empty(args.nheads, device=device))
        self.norm = RMSNorm(args.d_inner, device=device)
        self.out_proj = nn.Linear(args.d_inner, args.d_model, bias=False, device=device)
```

以及之后的内容,

输入是 tokenized 的序列数据，具体来说，`input_ids` 是一个形状为 `(batch, seqlen)` 的矩阵，其中 `seqlen` 必须是 `chunk_size` 的倍数。这些 token 是通过像 `EleutherAI/gpt-neox-20b` 这样的 tokenizer 生成的(也就是 graphRAG 中存在的训练集)

`input_ids` 调用了 `Mamba2LMHeadModel` 中的:

```py
    def forward(
        self, input_ids: LongTensor, h: list[InferenceCache] | list[None] | None = None
    ) -> tuple[LongTensor, list[InferenceCache]]:
        """
        Arguments
            input_ids: (batch, seqlen) tokens from `EleutherAI/gpt-neox-20b` tokenizer
            h: hidden states for inference step. If present the constant-time
               (wrt sequence length) inference path will be taken, input_ids
               should have shape (batch, 1) containing the next batch of prompt
               token.

        Return (logits, h)
            logits: (batch, seqlen, vocab_size)
            h: updated inference cache after processing `input_ids`
        """
        seqlen = input_ids.shape[1]

        if h is None:
            h = [None for _ in range(self.args.n_layer)]

        x = self.backbone.embedding(input_ids)
        for i, layer in enumerate(self.backbone.layers):
            y, h[i] = layer.mixer(layer.norm(x), h[i])
            x = y + x

        x = self.backbone.norm_f(x)
        logits = self.lm_head(x)
        return logits[:, :seqlen], cast(list[InferenceCache], h)
```

```py
    def forward(self, u: Tensor, h: InferenceCache | None = None):
        """
        Arguments
            u: (batch, seqlen, d_model) input. seqlen should be a multiple of chunk_size.
            h: hidden states for inference step. Initialized to 0s if not present.

        Return (y, h)
            y: (batch, seqlen, d_model) output
            h: updated inference cache after processing `u`
        """
        if h:
            return self.step(u, h)

        A = -torch.exp(self.A_log)  # (nheads,)
        zxbcdt = self.in_proj(u)  # (batch, seqlen, d_in_proj)
        z, xBC, dt = torch.split(
            zxbcdt,
            [
                self.args.d_inner,
                self.args.d_inner + 2 * self.args.d_state,
                self.args.nheads,
            ],
            dim=-1,
        )
        dt = F.softplus(dt + self.dt_bias)  # (batch, seqlen, nheads)

        # Pad or truncate xBC seqlen to d_conv
        conv_state = F.pad(
            rearrange(xBC, "b l d -> b d l"), (self.args.d_conv - u.shape[1], 0)
        )

        xBC = silu(
            self.conv1d(xBC.transpose(1, 2)).transpose(1, 2)[:, : u.shape[1], :]
        )  # (batch, seqlen, d_inner + 2 * d_state))
        x, B, C = torch.split(
            xBC, [self.args.d_inner, self.args.d_state, self.args.d_state], dim=-1
        )
        x = rearrange(x, "b l (h p) -> b l h p", p=self.args.headdim)
        y, ssm_state = ssd(
            x * dt.unsqueeze(-1),
            A * dt,
            rearrange(B, "b l n -> b l 1 n"),
            rearrange(C, "b l n -> b l 1 n"),
            self.args.chunk_size,
            device=self.device,
        )
        y = y + x * self.D.unsqueeze(-1)
        y = rearrange(y, "b l h p -> b l (h p)")
        y = self.norm(y, z)
        y = self.out_proj(y)

        h = InferenceCache(conv_state, ssm_state)
        return y, h
```

### mamba2 step2: 进行 RMS 归一化

RMS Norm RMS Norm 是对输入进行归一化处理，并且添加了一个可选的权重 z，其目的是进行双向的归一化和缩放

```py
class RMSNorm(nn.Module):
    def __init__(self, d: int, eps: float = 1e-5, device: Device = None):
        super().__init__()
        self.eps = eps
        self.weight = nn.Parameter(torch.ones(d, device=device))

    def forward(self, x, z=None):
        if z is not None:
            x = x * silu(z)
        return x * torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps) * self.weight

```

因为 init 设置了 RMSNorm 的调用所以在 Mamba2 class 中可以直接调用使用:

```py
    def __init__(self, args: Mamba2Config, device: Device = None):
        super().__init__()
        self.args = args
        self.device = device

        # Order: (z, x, B, C, dt)
        d_in_proj = 2 * args.d_inner + 2 * args.d_state + args.nheads
        self.in_proj = nn.Linear(args.d_model, d_in_proj, bias=False, device=device)

        conv_dim = args.d_inner + 2 * args.d_state
        self.conv1d = nn.Conv1d(
            in_channels=conv_dim,
            out_channels=conv_dim,
            kernel_size=args.d_conv,
            groups=conv_dim,
            padding=args.d_conv - 1,
            device=device,
        )

        self.dt_bias = nn.Parameter(torch.empty(args.nheads, device=device))
        self.A_log = nn.Parameter(torch.empty(args.nheads, device=device))
        self.D = nn.Parameter(torch.empty(args.nheads, device=device))
        self.norm = RMSNorm(args.d_inner, device=device)
        self.out_proj = nn.Linear(args.d_inner, args.d_model, bias=False, device=device)
```

第一次 RMS Norm 是这样调用的:

```py
    def forward(self, u: Tensor, h: InferenceCache | None = None):
        """
        Arguments
            u: (batch, seqlen, d_model) input. seqlen should be a multiple of chunk_size.
            h: hidden states for inference step. Initialized to 0s if not present.

        Return (y, h)
            y: (batch, seqlen, d_model) output
            h: updated inference cache after processing `u`
        """
        if h:
            return self.step(u, h)

        A = -torch.exp(self.A_log)  # (nheads,)
        zxbcdt = self.in_proj(u)  # (batch, seqlen, d_in_proj)
        z, xBC, dt = torch.split(
            zxbcdt,
            [
                self.args.d_inner,
                self.args.d_inner + 2 * self.args.d_state,
                self.args.nheads,
            ],
            dim=-1,
        )
        dt = F.softplus(dt + self.dt_bias)  # (batch, seqlen, nheads)

        # Pad or truncate xBC seqlen to d_conv
        conv_state = F.pad(
            rearrange(xBC, "b l d -> b d l"), (self.args.d_conv - u.shape[1], 0)
        )

        xBC = silu(
            self.conv1d(xBC.transpose(1, 2)).transpose(1, 2)[:, : u.shape[1], :]
        )  # (batch, seqlen, d_inner + 2 * d_state))
        x, B, C = torch.split(
            xBC, [self.args.d_inner, self.args.d_state, self.args.d_state], dim=-1
        )
        x = rearrange(x, "b l (h p) -> b l h p", p=self.args.headdim)
        y, ssm_state = ssd(
            x * dt.unsqueeze(-1),
            A * dt,
            rearrange(B, "b l n -> b l 1 n"),
            rearrange(C, "b l n -> b l 1 n"),
            self.args.chunk_size,
            device=self.device,
        )
        y = y + x * self.D.unsqueeze(-1)
        y = rearrange(y, "b l h p -> b l (h p)")
        y = self.norm(y, z)
        y = self.out_proj(y)

        h = InferenceCache(conv_state, ssm_state)
        return y, h
```

u：（batch、seqlen、d_model）输入。 seqlen 应该是 chunk_size 的倍数。

h：推理步骤的隐藏状态。如果不存在则初始化为 0。

返回（y，h）

    - y: (batch, seqlen, d_model) 输出

    - h：处理“u”后更新推理缓存

### mamba2 step3: in_projection 第一次投影(包含在 step 函数中, 即 mamba block)

首先通过 in_proj 将输入进行线性变换，生成多个相关的矩阵，包括 z, xBC, 和 dt, 其中 xBC 是进一步用于状态空间模型中的 B 和 C，而 dt 是用于调整步长的参数

```py
        zxbcdt = self.in_proj(u.squeeze(1))  # (batch, d_in_proj)
        z, xBC, dt = torch.split(
            zxbcdt,
            [
                self.args.d_inner,
                self.args.d_inner + 2 * self.args.d_state,
                self.args.nheads,
            ],
            dim=-1,
        )

```

-   z 的维度为 (batch, seqlen, d_inner)
-   xBC 的维度为 (batch, seqlen, d_inner + 2 \* d_state)
-   dt 的维度为 (batch, seqlen, nheads)
-   归一化后的 tensor 会被投影到更高维度的空间。这个投影(in_projection)通常是通过线性变换, 投影后的张量包含了更丰富的特征表示, 为后续的 SSM 处理做准备

### mamba2 step4: convolution

使用 1D 卷积对 xBC 进行处理，生成新的 xBC, 这里卷积的目的是: 对输入进行特征提取和转换，使得输入更适合后续的状态空间处理

```py
        # Advance convolution input
        h.conv_state.copy_(torch.roll(h.conv_state, shifts=-1, dims=-1))
        h.conv_state[:, :, -1] = xBC
        # Convolution step
        xBC = torch.sum(
            h.conv_state * rearrange(self.conv1d.weight, "d 1 w -> d w"), dim=-1
        )
        xBC += self.conv1d.bias
        xBC = silu(xBC)
```

-   conv_state 的维度为 (batch, d_inner + 2 \* d_state, d_conv)
-   经过卷积后的 xBC 维度为 (batch, seqlen, d_inner + 2 \* d_state)
-   这里用到了 SiLU 激活函数:

    激活方式(在 forward 函数中复用):

    ```py
    xBC = silu(
        self.conv1d(xBC.transpose(1, 2)).transpose(1, 2)[:, : u.shape[1], :]
    )  # (batch, seqlen, d_inner + 2 * d_state))
    ```

    调用了函数:

    ```py
    conv_dim = args.d_inner + 2 * args.d_state
    self.conv1d = nn.Conv1d(
        in_channels=conv_dim,
        out_channels=conv_dim,
        kernel_size=args.d_conv,
        groups=conv_dim,
        padding=args.d_conv - 1,
        device=device,
    )
    ```

    ```py
    def silu(x):
        """Applies the Sigmoid Linear Unit (SiLU), element-wise.
        手动定义它，因为 torch 的版本似乎不适用于 MPS(GPU M1用的, 实际用A100可以换torch的方法)
        """
        return x * F.sigmoid(x)
    ```

### mamba2 step5: 分割 B 和 C

将 xBC 分割成 B 和 C，分别用于状态空间模型中的状态更新和输出计算

这里主要是:

1. `x, B, C = torch.split(xBC, [self.args.d_inner, self.args.d_state, self.args.d_state], dim=-1)`
2. `x = rearrange(x, "b (h p) -> b h p", p=self.args.headdim)` (batch, seqlen, n_heads, d_head)
3. `B = rearrange(B, "b l n -> b l 1 n")` (batch, seqlen, 1, d_state)
4. `C = rearrange(C, "b l n -> b l 1 n")` (batch, seqlen, 1, d_state)

调用的是 einops 包中的 rearrange 方法:

    ```py
    def rearrange(tensor: Union[Tensor, List[Tensor]], pattern: str, **axes_lengths) -> Tensor:
        return reduce(tensor, pattern, reduction="rearrange", **axes_lengths)
    ```

这里具体代码:

```py
        x, B, C = torch.split(
            xBC, [self.args.d_inner, self.args.d_state, self.args.d_state], dim=-1
        )
        A = -torch.exp(self.A_log)  # (nheads,)

        # SSM step
        dt = F.softplus(dt + self.dt_bias)  # (batch, nheads)
        dA = torch.exp(dt * A)  # (batch, nheads)
        x = rearrange(x, "b (h p) -> b h p", p=self.args.headdim)
        dBx = torch.einsum("bh, bn, bhp -> bhpn", dt, B, x)
        h.ssm_state.copy_(h.ssm_state * rearrange(dA, "b h -> b h 1 1") + dBx)
        y = torch.einsum("bhpn, bn -> bhp", h.ssm_state, C)
        y = y + rearrange(self.D, "h -> h 1") * x
        y = rearrange(y, "b h p -> b (h p)")
        y = self.norm(y, z)
        y = self.out_proj(y)

        return y.unsqueeze(1), h
```

### mamba2 step5.1: step6 前的准备, segsum 函数

这里涉及到 segsum 函数, 用于计算稳定的分段求和, 这里因为是 minimal 的代码, 为防止混乱先理解成: 用于计算 SSD 模型 A，B，C:分别表示状态短阵、扩展短阵和收缩矩阵先对输入张量 X、A、B 和 C 进行重排，将它们重排成块的形式

1. 对每个块内的对角块(Diagonal Block)进行计算，使用 torch.einsum 计算块内的矩阵来法。
2. 计算每个块内的低秩块(Low-Rank Block)，用于生成下一个块的输入状态。
3. 生成块间的状态转移，确保在块边界处的状态正确。
4. 对块内的低秩块进行计算，将状态转换为输出。最后将块内和块间的输出汇总，得到最终输出 Y 和最终状态 final state。该代码的主要目的是通过块分解的方法，将一个大规模的状态空间模型问题分解成多个小规模的块级别运算问题。这种方法利用了半可分矩阵的特性，能够提高计算效率和并行性，适合硬件加速。

@see: http://139.9.1.231/index.php/2024/07/10/mamba-2/

mamba github 的源码:

```py
def segsum(x):
    """More stable segment sum calculation."""
    T = x.size(-1)
    x = repeat(x, "... d -> ... d e", e=T)
    mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=-1)
    x = x.masked_fill(~mask, 0)
    x_segsum = torch.cumsum(x, dim=-2)
    mask = torch.tril(torch.ones(T, T, device=x.device, dtype=bool), diagonal=0)
    x_segsum = x_segsum.masked_fill(~mask, -torch.inf)
    return x_segsum
```

-   输入 x 的维度为 (batch, seqlen, n_heads)
-   输出 x_segsum 的维度为 (batch, seqlen, n_heads, seqlen)

### mamba2 step5.2: step6 前的准备, SSD 函数

用于计算状态空间模型的输出，通过分块处理和并行化计算提高效率

```py
def ssd_minimal_discrete(X, A, B, C, block_len, initial_states=None):
    """
    Arguments:
        X: (batch, length, n_heads, d_head)
        A: (batch, length, n_heads)
        B: (batch, length, n_heads, d_state)
        C: (batch, length, n_heads, d_state)
    Return:
        Y: (batch, length, n_heads, d_head)
    """
    assert X.dtype == A.dtype == B.dtype == C.dtype
    assert X.shape[1] % block_len == 0

    # Rearrange into blocks/chunks
    X, A, B, C = [rearrange(x, "b (c l) ... -> b c l ...", l=block_len) for x in (X, A, B, C)]

    A = rearrange(A, "b c l h -> b h c l")
    A_cumsum = torch.cumsum(A, dim=-1)

    # 1. Compute the output for each intra-chunk (diagonal blocks)
    L = torch.exp(segsum(A))
    Y_diag  = torch.einsum("bclhn,bcshn,bhcls,bcshp->bclhp", C, B, L, X)

    # 2. Compute the state for each intra-chunk
    # (right term of low-rank factorization of off-diagonal blocks; B terms)
    decay_states = torch.exp((A_cumsum[:, :, :, -1:] - A_cumsum))
    states = torch.einsum("bclhn,bhcl,bclhp->bchpn", B, decay_states, X)

    # 3. Compute the inter-chunk SSM recurrence; produces correct SSM states at chunk boundaries
    # (middle term of factorization of off-diag blocks; A terms)
    if initial_states is None:
        initial_states = torch.zeros_like(states[:, :1])
    states = torch.cat([initial_states, states], dim=1)
    decay_chunk = torch.exp(segsum(F.pad(A_cumsum[:, :, :, -1], (1, 0))))
    new_states = torch.einsum("bhzc,bchpn->bzhpn", decay_chunk, states)
    states, final_state = new_states[:, :-1], new_states[:, -1]

    # 4. Compute state -> output conversion per chunk
    # (left term of low-rank factorization of off-diagonal blocks; C terms)
    state_decay_out = torch.exp(A_cumsum)
    Y_off = torch.einsum('bclhn,bchpn,bhcl->bclhp', C, states, state_decay_out)

    # Add output of intra-chunk and inter-chunk terms (diagonal and off-diagonal blocks)
    Y = rearrange(Y_diag+Y_off, "b c l h p -> b (c l) h p")
    return Y, final_state
```

-   输入 x 的维度为 (batch, seqlen, n_heads, d_head)
-   输入 A 的维度为 (batch, seqlen, n_heads)
-   输入 B 的维度为 (batch, seqlen, 1, d_state)
-   输入 C 的维度为 (batch, seqlen, 1, d_state)
-   输出 Y 的维度为 (batch, seqlen, n_heads, d_head)
-   输出 final_state 的维度为 (batch, nheads, headdim, d_state)

1. 分块处理(chunk/block)

    - `X, A, B, C = [rearrange(x, "b (c l) ... -> b c l ...", l=block_len) for x in (X, A, B, C)` 将输入序列 X 以及参数 A、B、C 分割成长度为 block_len 的块/片段。这样做是为了减少计算量和内存占用，尤其是当处理长序列时

2. 计算 chunk 内的 output(diagonal blocks)

    - `L = torch.exp(segsum(A))` 计算每个块内的长度归一化因子 L, 再通过 segsum 函数进行分段求和
    - `Y_diag = torch.einsum("bclhn,bcshn,bhcls,bcshp->bclhp", C, B, L, X)` 对角线块表示当前块的输入对当前块输出的影响, 也就是对于时间 t, 和时间 t-1 的存储, 算法核心就是能够在 unfold-RNN 上添加状态空间计算, 可以加快计算效率, GPU 计算单元的使用效率
    - 对角线块, 仅关注当前时间步的信息，无法捕捉长程依赖

3. 对非 diagonal, 即非对角线块计算

    - `decay_states = torch.exp((A_cumsum[:, :, :, -1:] - A_cumsum))`, 计算块内状态的衰减因子, `A_cumsum` 是 A 的累积和，表示随时间累积的衰减量, 1. `torch.exp` 强化衰减效应, 确保远距离时间步的影响逐渐减弱; 2. `A_cumsum`：累积和矩阵，表示时间步的累积效应; 3. `A_cumsum[:, :, :, -1:] - A_cumsum`：计算当前时间步与最后时间步的差异，反映时间衰减
    - 非对角线块, 反映了序列中不同时间步之间的相互作用，帮助模型理解远距离元素间的关联
    - 非对角线块和对角线块的结合可以让模型获得 1. 捕捉长程依赖; 2. 时间衰减机制; 3. 状态更新(decay_states); 4. 高效计算(非对角线块 避免逐元素计算的低效)

4. 补充 2, 3 中的调用函数解决的问题, 及可能替代的方法和优劣势:

    - `torch.exp` 主要作用是控制信息在时间步之间的传递强度，尤其是对长程依赖的衰减, 如果不进行衰减计算会遇到的问题:

        - 长程依赖的干扰: 远距离时间步的信息不会被衰减，可能导致噪声或无关信息干扰当前时间步的计算
        - 梯度问题: 未衰减的长程依赖可能导致梯度爆炸或消失，影响训练稳定性(导致训练提前拟合或欠拟合, 也就是提前终止)
        - 计算效率: 未衰减的信息可能导致计算复杂度增加，因为模型需要处理更多的长程依赖(这个方法因为经常用所以不是重点, 每个封装函数都是为了防止计算冗余)

    - `cumsum` 是一种常用的操作，用于计算时间步的累积效应, 优点是: 1. 高效计算, 可以通过矩阵运算高效实现，适合 GPU 加速(结合硬件感知算法适配); 2. 显式建模长程依赖, 适合捕捉长程依赖(也就是 mamba 需要解决 transformer 的痛点之一, 也是 nlp 所有模型的痛点); 3. 于 torch.exp 结合, 因为方便. 缺点就是对于长序列(input sequence) 计算复杂度高以及内存占用, 所以计算的时候是切割求和后的 `segsum(A)`, 而不是直接把 A 放进去.
    - `cumsum` 这种基于时间的累积算法是有替代的, 比如滑动窗口, 递归运算, 注意力机制(transformer 核心机制), 但是注意力机制更强调通用性, 他会对长序列进行 cutoff, 而 `segsum(A)` 保留了 A 的内容又避免了 cutoff

5. 计算块间 SSM 递归(非对角线 chunk)

    - `if initial_states is None: initial_states = torch.zeros_like(states[:, :1])`, 如果没有初始状态，则初始化为零
    - `states = torch.cat([initial_states, states], dim=1)`, 将初始状态拼接到当前块的状态前面(递归过程中使用, 即 i=1 开始)
    - `decay_chunk = torch.exp(segsum(F.pad(A_cumsum[:, :, :, -1], (1, 0))))`, 计算块间的衰减因子
    - `new_states = torch.einsum("bhzc,bchpn->bzhpn", decay_chunk, states)`, 计算新的状态，考虑了块间的衰减
    - `states, final_state = new_states[:, :-1], new_states[:, -1]`, 更新状态，并分离出最后一个时间步的状态 `final_state`，作为下一个块的初始状态

6. 计算状态到输出的转换(非对角线 chunk)

    - `state_decay_out = torch.exp(A_cumsum)`, 计算状态到输出的衰减因子
    - `Y_off = torch.einsum('bclhn,bchpn,bhcl->bclhp', C, states, state_decay_out)`, 计算非对角线块的输出 `Y_off`，表示过去的状态对当前输出的影响

7. 合并输出

    - `Y = rearrange(Y_diag + Y_off, "b c l h p -> b (c l) h p")`, 将对角线块和非对角线块的输出相加，得到最终的输出 `Y` 和 最后一次循环后的最终 `final_state`( `states, final_state = new_states[:, :-1], new_states[:, -1]`)
    - 输出的是 `Y, finial_state`:
        - `Y` 是经过结构化状态空间双重性处理后的输出, 代表每个时间步 token 的隐藏状态转换为 tensor, 其调用的是: `def rearrange(tensor: Union[Tensor, List[Tensor]], pattern: str, **axes_lengths) -> Tensor:`, 也就可以理解成: final_state 形状是 (batch, n_heads, d_state)，并没有 chunk_size 这个维度, 对于 minial 的定义: `x = torch.randn(2, 64, 768)  # (batch, seqlen, d_model)`, 那么就是 (2, 4, 32), 实际上本地化部署不会是 minial 版本, 起码 (4, 8, 64), 在双卡情况下? 毕竟没部署过双卡情况, 也没在意过过程 tensor 值
        - `final_state` 是 SSD 函数在处理完所有时间步后更新的最终状态, 表了整个序列处理完后的隐状态，这些状态包含了整个序列的信息. `final_state` 在 step 函数中被用于更新 `InferenceCache` 中的 `ssm_state`, 这个更新后的隐藏状态在接下来的时间步中会被传递使用. 通过这种方式，模型可以保持对整个序列信息的记忆，从而更好地生成后续的 token(也就是他是模型能够进行序列预测的关键, 因为得到概率映射后我们还是需要生成文本序列的对于 QA system 而言)

### mamba2 step6 线性层(全连接层) && 输出(mamba block/chunk 的输出)

-   `self.out_proj = nn.Linear(args.d_inner, args.d_model, bias=False, device=device)` 这是 init 函数里定义的方法, 用于将输入的特征维度从 args.d_inner 转换为 args.d_model。这里的 bias=False 表示该线性层不包含偏置项

-   在 forward 函数中被调用:

    ```py
        y = y + x * self.D.unsqueeze(-1)
        y = rearrange(y, "b l h p -> b l (h p)")
        y = self.norm(y, z)
        y = self.out_proj(y)

        h = InferenceCache(conv_state, ssm_state)
        return y, h
    ```

-   这个线性层 `out_proj` 通常用于模型的输出层或者循环结束后对特征进行变换，以匹配模型的输出维度要求, 用于将循环处理后的特征映射回原始输入的维度(即 `d_model`), 也就是在 Mamba2Config(step1) 中 定义的 `d_model: int  # model dimension (D)`, minimal 的时候 `config = Mamba2Config(d_model=768)`, 表示模型中隐藏层的维度大小
-   额外解释: 隐藏层的维度 `d_model` 决定了模型能够处理的特征数量，从而影响模型的表达能力和学习能力, 这代表了模型的容量, 计算资源, 性能, 更大的 d_model 代表可以有更多参数, 可以捕捉更复杂的语言特征, 但也会存在过拟合风险(比如过度解读, 过度推理, 重复 citation 之前的 inference, etc.), 一般是通过 SFT 人为的自监督微调得到的, 适配不同 GPU, 不同 GPU 集群数. 这里就需要一次次的本地训练和人为测试而非机器脚本测试或验证集测试, 从而得到最优解

-   转换回 `d_model` 后最终通过 `lm_head` 计算 logits, 即每个维度位置上每个 token 的预测概率. logits 的维度为 (batch, seqlen, vocab_size)

```py
    y = y + x * self.D.unsqueeze(-1)
    y = rearrange(y, "b l h p -> b l (h p)")
    y = self.norm(y, z)
    y = self.out_proj(y)
    logits = self.lm_head(y)  # (batch, seqlen, vocab_size)
```

-   额外补充: y 和 h 的定义在 `class InferenceCache(NamedTuple)`, `conv_state: Tensor  # (batch, d_inner + 2 * d_state, d_conv)`, `ssm_state: Tensor  # (batch, nheads, headdim, d_state)`, y 是模型的输出 tensor(是每个位置的词汇分布，表示模型对下一个词的预测), h 是一个 InferenceCache 对象([conv_state, ssm_state]对象), 分别表示卷积层的状态和状态空间模型的状态
-   额外补充: `lm_head` 在 `class Mamba2LMHeadModel(nn.Module):` 中(step1)定义, 包含了 `nn.Linear` 线性化 和 `backbone.embedding.weight`, 其中 `backbone`又调用了 `nn.ModuleDict`, 对 dict(K,v) embedding, 每一层 layer 进行了归一化(依然是 RMS)得到的 layers

```py
    self.lm_head = nn.Linear(
        args.d_model, args.vocab_size, bias=False, device=device
    )
    self.lm_head.weight = self.backbone.embedding.weight
```

-   额外补充上一条: backbone 是模型的核心部分, 负责对输入数据进行特征提取和转换, 最终输出的是一个上下文表示, 由:

    1. embedding 嵌入层, 用于将词汇索引转化为向量表示, 每个词坐标对应唯一的向量, 向量的维度为 `d_model`, minial 情况为 768, embedding 的作用是捕捉词汇之间的语义关系, 并将输入的词汇序列转换为模型可以理解的连续向量序列
    2. layers 是神经网络的每个 layer, 每个层级内部包含 mixer(混合转换输入序列信息), 具体代码实现在: `class MambaMixer(nn.Module):` 里, 计算状态空间参数 Δ、A、B、C 和 D，并计算 `contextualized_states`, A、D 与输入无关（参阅 Mamba 论文 [1] 第 3.5.2 节“A 的解释”了解 A 不具有选择性的原因, Δ、B、C 取决于输入（这是 Mamba 和线性时不变 S4 之间的关键区别， 这就是为什么 Mamba 被称为**选择性**状态空间）, 代码实现:

    ```py
    def __init__(self, config: MambaConfig, layer_idx: int):
        super().__init__()
        self.config = config
        self.hidden_size = config.hidden_size
        self.ssm_state_size = config.state_size
        self.conv_kernel_size = config.conv_kernel
        self.intermediate_size = config.intermediate_size
        self.time_step_rank = int(config.time_step_rank)
        self.layer_idx = layer_idx
        self.use_conv_bias = config.use_conv_bias
        self.conv1d = nn.Conv1d(
            in_channels=self.intermediate_size,
            out_channels=self.intermediate_size,
            bias=config.use_conv_bias,
            kernel_size=config.conv_kernel,
            groups=self.intermediate_size,
            padding=config.conv_kernel - 1,
        )

        self.activation = config.hidden_act
        self.act = ACT2FN[config.hidden_act]

        self.use_mambapy = config.use_mambapy

        # projection of the input hidden states
        self.in_proj = nn.Linear(self.hidden_size, self.intermediate_size * 2, bias=config.use_bias)
        # selective projection used to make dt, B and C input dependant
        self.x_proj = nn.Linear(self.intermediate_size, self.time_step_rank + self.ssm_state_size * 2, bias=False)
        # time step projection (discretization)
        self.dt_proj = nn.Linear(self.time_step_rank, self.intermediate_size, bias=True)

        # S4D real initialization. These are not discretized!
        # The core is to load them, compute the discrete states, then write the updated state. Keeps the memory bounded
        A = torch.arange(1, self.ssm_state_size + 1, dtype=torch.float32)[None, :]
        A = A.expand(self.intermediate_size, -1).contiguous()

        self.A_log = nn.Parameter(torch.log(A))
        self.D = nn.Parameter(torch.ones(self.intermediate_size))
        self.out_proj = nn.Linear(self.intermediate_size, self.hidden_size, bias=config.use_bias)
        self.use_bias = config.use_bias

        if not is_fast_path_available:
            if self.use_mambapy:
                if is_mambapy_available():
                    logger.warning_once(
                        "The fast path is not available because one of `(selective_state_update, selective_scan_fn, causal_conv1d_fn, causal_conv1d_update, mamba_inner_fn)`"
                        " is None. Falling back to the mamba.py backend. To install follow https://github.com/state-spaces/mamba/#installation and"
                        " https://github.com/Dao-AILab/causal-conv1d"
                    )
                else:
                    raise ImportError(
                        "use_mambapy is set to True but the mambapy package is not installed. To install it follow https://github.com/alxndrTL/mamba.py."
                    )
            else:
                logger.warning_once(
                    "The fast path is not available because one of `(selective_state_update, selective_scan_fn, causal_conv1d_fn, causal_conv1d_update, mamba_inner_fn)`"
                    " is None. Falling back to the sequential implementation of Mamba, as use_mambapy is set to False. To install follow https://github.com/state-spaces/mamba/#installation and"
                    " https://github.com/Dao-AILab/causal-conv1d. For the mamba.py backend, follow https://github.com/alxndrTL/mamba.py."
                )

    ```

    简单说就是 `layer.norm(x), h[i]` 作为 `(config, layer_idx)`, 注意 mambablock 源码用的是 `residual_in_fp32`, 可以自行优化成 BF16, 因为现在主流就是 BF16, 更加节省内存占用

    3. `norm_f` 是最后一个 norm 层, 就是循环的最后一层, 经过迭代让每次循环都能归一化一次.

    4. 补充说明, 这就是神经网络 forward 的一个过程, 最终输出: `logits: (batch, seqlen, vocab_size)`, `h: updated inference cache after processing input_ids`

    5. 1-4 为了一个目的: 把多层神经网络的卷积过程 转换和归一化得到 上下文表示

    ```py
    def forward(
        self, input_ids: LongTensor, h: list[InferenceCache] | list[None] | None = None
    ) -> tuple[LongTensor, list[InferenceCache]]:
        """
        Arguments
            input_ids: (batch, seqlen) tokens from `EleutherAI/gpt-neox-20b` tokenizer
            h: hidden states for inference step. If present the constant-time
               (wrt sequence length) inference path will be taken, input_ids
               should have shape (batch, 1) containing the next batch of prompt
               token.

        Return (logits, h)
            logits: (batch, seqlen, vocab_size)
            h: updated inference cache after processing `input_ids`
        """
        seqlen = input_ids.shape[1]

        if h is None:
            h = [None for _ in range(self.args.n_layer)]

        x = self.backbone.embedding(input_ids)
        for i, layer in enumerate(self.backbone.layers):
            y, h[i] = layer.mixer(layer.norm(x), h[i])
            x = y + x

        x = self.backbone.norm_f(x)
        logits = self.lm_head(x)
        return logits[:, :seqlen], cast(list[InferenceCache], h)
    ```

```py
        self.backbone = nn.ModuleDict(
            dict(
                embedding=nn.Embedding(args.vocab_size, args.d_model, device=device),
                layers=nn.ModuleList(
                    [
                        nn.ModuleDict(
                            dict(
                                mixer=Mamba2(args, device=device),
                                norm=RMSNorm(args.d_model, device=device),
                            )
                        )
                        for _ in range(args.n_layer)
                    ]
                ),
                norm_f=RMSNorm(args.d_model, device=device),
            )
        )
        self.lm_head = nn.Linear(
            args.d_model, args.vocab_size, bias=False, device=device
        )
        self.lm_head.weight = self.backbone.embedding.weight
```

### mamba2 step7 generate

generate 生成过程 通过 逐步处理输入序列并生成新的 token, 其中每个新的 token 是通过 softmax 和 multinomial 函数从预测的概率分布中采样得到的

```py
    def generate(
        self,
        input_ids: LongTensor,
        max_new_length: int = 20,
        temperature: float = 1.0,
        top_k: int = 50,
        top_p: float = 1.0,
        eos_token_id: int = 0,
    ) -> Iterable[tuple[int, list[InferenceCache]]]:
        prefix, tokens = input_ids[:-1], input_ids[-1:].unsqueeze(0)

        # Process prompt
        # The input sequence to forward (non-inference path) must have length multiple that of chunk_size.
        # We split out excess tokens so that n_chunked tokens can be processed by one forward call and
        # process the rest in multiple inference steps.
        n_chunked = (prefix.shape[0] // self.args.chunk_size) * self.args.chunk_size
        if n_chunked > 0:
            _, h = self(prefix[:n_chunked].unsqueeze(0), None)
        else:
            h = [
                InferenceCache.alloc(1, self.args, device=self.device)
                for _ in range(self.args.n_layer)
            ]
        for i in range(n_chunked, prefix.shape[0]):
            _, h = self(prefix[i : i + 1].unsqueeze(0), h)

        # Generate
        for _ in range(max_new_length):
            with torch.no_grad():
                out, h = self(tokens, h)
            logits = out[0, -1]
            if temperature != 1.0:
                logits = logits / temperature
            if top_k > 0:
                indices_to_remove = logits < torch.topk(logits, k=top_k)[0][-1]
                logits[indices_to_remove] = -torch.inf
            if top_p < 1.0:
                sorted_logits, sorted_indices = torch.sort(logits, descending=True)
                cum_probs = torch.cumsum(F.softmax(sorted_logits, dim=-1), dim=-1)
                sorted_indices_to_remove = cum_probs > 0.5
                sorted_indices_to_remove[1:] = sorted_indices_to_remove[:-1].clone()
                sorted_indices_to_remove[0] = False
                indices_to_remove = sorted_indices[sorted_indices_to_remove]
                logits[indices_to_remove] = -torch.inf
            probs = F.softmax(logits, dim=-1)
            next_token = torch.multinomial(probs, num_samples=1)
            if next_token.item() == eos_token_id:
                return
            tokens = next_token.unsqueeze(0)
            yield cast(int, next_token.item()), h


```

-   结合 step6, forward 前向传播, 接受输入的 token id 和 隐藏状态 h, 返回 模型的 logits(训练过程中是 (batch, seqlen, vocab_size)维度, 对应每个序列中的每个 token 对应的词汇表中每个 token 的预测概率), 可以理解成循环中的 logits

    1. 输入
        - input_ids: 输入的 token 序列，形状为 (batch, seqlen)
        - h: 使用常数时间（相对于序列长度）的推理路径，input_ids 应该有形状 (batch, 1)，包含下一个批次的提示 token
    2. embedding 层
        - self.backbone.embedding(input_ids): 将输入的 token ID 转换为嵌入向量，形状为 (batch, seqlen, d_model)
    3. mamba2 层:
        - 对于每个层 layer，首先对输入的嵌入向量 x 进行归一化处理 layer.norm(x)，然后通过 Mamba2 混合器 layer.mixer 进行处理，得到输出 y 和更新后的隐藏状态 h[i]
        - x = y + x: 将 Mamba2 层的输出与输入相加，形成残差连接，增强模型训练的稳定性
    4. 最终归一化(即 mamba block 外的最终 RMS Norm)
        - self.backbone.norm_f(x): 对最终的输出 x 进行归一化处理, 得到高维映射
    5. linear + softmax
        - logits = self.lm_head(x): 通过线性层将归一化后的输出转换为每个词汇的概率分布（logits），形状为 (batch, seqlen, vocab_size)
    6. output
        - 返回 logits 和更新后的隐藏状态 h，其中 logits 是模型预测的每个词汇的概率分布

-   模型的训练其实到 step6 就结束了, 然后进入 generate 生成, 才能实现 QA, 用来生成文本, 接受输入的 token ID 和生成的最大长度等参数(这里可以通过 SFT 根据具体显卡和集群的算力进行调整, 得到更好的效果, 详见下面的 1)。 返回一个可迭代对象（Iterable），每次迭代生成一个 token 及其对应的隐藏状态

    1. 输入处理:
        - `input_ids`: 输入的 token 序列，用于初始化生成过程。
        - `max_new_length`: 生成的最大 token 长度。
        - `temperature`: 控制生成文本的随机性，temperature 值越低，生成的文本越确定。
        - `top_k, top_p`: 控制生成文本的多样性，top_k 表示只考虑概率最高的前 k 个 token，top_p 表示只考虑累积概率达到 p 的 token。
        - `eos_token_id`: 结束符的 token ID，当生成的 token 等于 eos_token_id 时，生成过程结束。
    2. 处理提示

        - prefix, tokens = input_ids[:-1], input_ids[-1:].unsqueeze(0): 分割输入的 token 序列为提示部分 prefix 和初始生成 token tokens。
        - 根据 prefix 的长度（n_chunked）来决定是否使用常数时间的推理路径处理 prefix。
        - 如果 prefix 长度大于 0，则通过 forward 方法处理 prefix，并更新隐藏状态 h。
        - 如果 prefix 长度为 0，则初始化隐藏状态 h

    3. 生成循环
        - 使用 forward 方法处理当前的 tokens，得到 out 和更新后的隐藏状态 h。
        - logits = out[0, -1]: 获取最后一个 token 的 logits。
        - 根据 temperature, top_k, top_p 参数对 logits 进行调整。
        - probs = F.softmax(logits, dim=-1): 将 logits 转换为概率分布。
        - next_token = torch.multinomial(probs, num_samples=1): 根据概率分布随机选择下一个 token。
        - 如果 next_token 等于 eos_token_id，则生成过程结束。
        - 否则，更新 tokens 为 next_token，并继续生成下一个 token。
        - 每次生成一个 token，都会 yield 该 token 及其对应的隐藏状态 h。

-   最终 generate output: `Iterable[tuple[int, list[InferenceCache]]]: prefix, tokens = input_ids[:-1], input_ids[-1:].unsqueeze(0)`

    1. token: 生成的下一个 tokenID
    2. h: 更新后的隐藏状态, 类型为 `InferenceCache`, 如 step6 所示, (conv_state, ssm_state) 都是 tensor 分别表示卷积层的状态和状态空间模型的状态

    ```py
    class InferenceCache(NamedTuple):
        conv_state: Tensor  # (batch, d_inner + 2 * d_state, d_conv)
        ssm_state: Tensor  # (batch, nheads, headdim, d_state)
    ```

-   最终调用:

    1. 迭代生成 tokenID 结果代表了 token, 被 append 成一个序列化的文本, 可以理解成 `generated_tokens = []` 是一个 list, tokenID 是里面的元素, tokenID 又对应了 token(通过 `tokenizer.decode` 方法 ):

    ```py
        generated_tokens = []
        for token, _ in model.generate(input_ids):
            generated_tokens.append(token)

        generated_text = tokenizer.decode(generated_tokens)
    ```

    2. 综上实现了 实际的文本序列化, 用于模型的推理和生成任务
