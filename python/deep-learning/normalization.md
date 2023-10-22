# Definition

Normalization: 归一化/规范化/标准化, 就是把输入数据 x, 在输送给神经元之前对其进行平移和伸缩变换, 将 x 地分布规范化成在固定区间范围地标准分布

normalization 是一个通用地概念, 指将数据或一系列数值按照特定规则进行转换, 使得转换后地数据满足某种特性, 这些特性是为了让不同规模地数据可以在合理范围内变化, 或者使得数据地分布有特定的形状, 如均值为 0, 方差为 1 等

深度网络中数据维度一般是: N, H, W, C 格式

N: Batch size

H/W: feature 的高/宽, 三维表示时将 H/W 压缩至同一纬度

C: feature 的 channel

Normalization 是在 deep neural network 的内部曾(隐藏层)进行, 而 softmax 更多的是在网络的输出层进行

# Internal Covariate Shift

ICS: Internal Covariate Shift
深度神经网络模型为什么训练困难? 其中一个因素是: 深度神经网络涉及到很多层的叠加, 而每一层的参数更新会导致上层的输入数据分布发生变化, 通过层层叠加, 高层的输入分布变化会变得非常剧烈, 使得同层需要不断去重新适应底层的参数更新

为了训练好模型, 需要非常谨慎地去设定 lr, weight, 以及尽可能地细致地参数更新策略

ICS 会导致地现象: 简而言之, 每个神经元地输入数据不再是 "独立同分布":

1. 上层参数需要不断适应新的输入数据分布, 降低学习速度
2. 下层输入的变化可能趋向于变大或变小, 导致上层落入饱和区, 使得学习过早停止
3. 每层的更新会影响到其它层, 因此每层的参数更新策略要尽可能谨慎

本质是 deep learning 随着层数加深必然会有 ICS

在统计机器学习中一个经典的假设是: 源空间 (source domain) 和目标空间 (target domain) 的数据分布是一致的, 如果不一致, 那么就出现了新的机器学习问题, e.g. transfer learning, domain adaptation, etc. 而 covariate shift 就是分布不一致假设下的一个分支问题, 指源空间和目标空间的条件概率是一致的但是边缘概率不同

对于神经网络的各层输出, 由于它们经过了层内操作作用, 其分布显然与各层对应的输入信号分布不同, 而且差异会随着深度的增大而增大, 可能它们所能指示的标记 (label) 仍然是不变的, 这便符合了 covariate shift 的定义, 由于是对层间信号的分析, 也就是 internal 的由来

# Batch Normalization

BN: Batch Normalization

BN 是 batch 维度的, 归一化维度为 N, H, W, 对 batch 中对应的 channel 归一化

BN 受 batch size 影响, 因为在均值和方差计算中, 为了将数据归一化要用到 batch 中的数据进行计算, 如果 batch size 过小, 可能导致不太准确

不过全局 BN (跨多个 mini-batches 计算均值和方差) 或使用 Group Normalization (将每个 channel 内的样点归一化) 可以解决受 batch size 影响的问题

BN 的本质就是利用优化, 优化方差大小和均值位置, 使得新的分布更切合数据的真实分布, 保证模型的非线性表达能力, BN 的极端情况就是两个参数等于 mini-batch 的均值和方差, 那么经过 BN 之后的数据和输入的数据分布就会基本保持一致

> Note: 即使模型用大 batch size, 也可以在 fine-tune 阶段使用 BN 或者冻结 BN 层等策略来降低微调阶段小 batch size 带来的影响

但是 BN 被认为没有解决 ICS 问题, 因为本质上是通过 gamma 和 beta 在优化均值和方差

但是也有 paper 觉得 BN 和 ICS 无关 (@see: https://arxiv.org/abs/1805.11604), BN 是通过使高维 loss 更平滑来起到作用的

虽然原 paper ReLU 层之后是 BN 层, 但 BN 放在 ReLU 层之后效果会更好, 因为: 如果将 BN 放在激活层之前, 那么 BN 层的输出还需要经过激活层才到达下一层, 这样 BN 层就无法控制下一层的输入分布

BN 的缺陷: 带有 BN 的网络错误率会随着 batch size 的减小而迅速增大, 当硬件条件受限不得不使用较小的 batch size 时, 网络的效果会大打折扣, 所以有了后续的 LN, IN, GN

> Note: BN 可以理解成纵向 normalization, 抹杀了同一个样本内不同特征之间的大小关系, 但是保留了不同样本之间的大小关系

# Layer Normalization

LN: Layer Normalization

LN 是 feature channel 维度的, 归一化的维度为: C, H, W

LN 和 BN 的不同点是归一化的维度相互垂直的, BN 是取不同样本的同一个通道的特征做归一化, LN 取得是同一个样本的不同通道做归一化

LN 归一化公式中用到了隐层节点数量和 MLP 的层数, 但是没有对 batch 作平均, 所以 batch 变化时, 网络的错误率不会有明显的变化

LN 可以减轻 ICS, 因为 LN 将每个训练样本都归一化到相同的分布上, 理论上 LN 可以加速收敛

不过 LN 只被证明在 RNN, MLP, LSTM 上有效, 在 CNN 上的 LN 归一化破坏了卷积学习到的特征, 会使模型无法收敛

> Note: LN 可以理解成横向 normalization, 抹杀了不同样本之间的大小关系, 但是保留了一个样本内不同特征之间的大小关系

# Instance Normalization

IN: Instance Normalization

2016/07/27

@see: https://arxiv.org/abs/1607.08022

IN 归一化的维度为 H/W

IN 的提出是为了图像风格迁移的任务, e.g. GAN, Style Transfer 这类任务

1. 在 BN 中, 是在 batch 中跨样本的 normalization
2. LN 中, 在每个样本上跨通道的进行了 normalization, 这里可能因为不同的通道表征不同的特征, 在图像风格迁移中, 不同特征之间的差异性是十分重要的

IN 实际上就是针对每个样本的 channel 进行 normalization

还有 conditional IN, Interpreting IN

图像的 artistic style 就是特征图各个 feature channel 跨空间的统计信息, 比如 mean 和 variance.

迁移各个 channel 的 mean, variance 就可以实现风格迁移, 为此提出了 Adaptive IN 专门适配风格迁移任务 (@see: https://arxiv.org/abs/1703.66868 2017/03/20)

# Group Normalization

2018/03/22

GN: Group Normalization

@see: https://arxiv.org/abs/1803.08494

一般来说每个 GPU 上 batch 设 32 最合适, 但是对于一些其他深度学习任务 batch size 往往只有 1-2, e.g. object detection, segmentation, etc. 输入的图像数据很大, 较大的 batch size 显存吃不消

GN 和 LN 一样不是在 batch 维度进行 normalize, 而且都可以用来替代 BN

GN 极端情况:

1. G = 1, GN = LN
2. G = C, GN = IN

GN 介于 LN 和 IN 之间, 其首先将 channel 分为许多 group, 对每一组进行归一化, 即先将 feature 的维度由 N, C, H/W reshape 为 N, G, C//G, H/W, 归一化维度为 C//G, H/W

> Note: G 就是 number of channel groups, paper 中 G = 32 by default

GN 的原理来自于: 在同一张图像上学习到的特征应该是具有相同分布的, 那么具有相同的特征可以被分到同一个 group 中, it is not necessary to think of deep neural network features as unstructured vectors, 每一层有很多的卷积核 (kernels), 这些卷积核学习到的特征并不完全是独立的, 某些特征具有相同的分布, 而 pair of filters, or if the horizontal flipping is made into the architectures by design, then the corresponding channels of these filters canbe normalized togethcer, 因此可以被 group

> Note: kernel = filter = feature detector
