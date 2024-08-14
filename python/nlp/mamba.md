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
