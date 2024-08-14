# transformer

前提:

embedding: 将词表示在向量空间中

prompt: 各种输入从模型中引出的响应

@see: https://www.cnblogs.com/mantch/p/11591937.html

@see: https://arxiv.org/abs/1706.03762

google 提出的 transformer, 抛弃了以往深度学习任务里面使用到的 CNN, RNN, BERT 也是基于 transformer 架构, 机器翻译, 问答系统, 文本摘要, 语音识别等 NLP 任务都能用

input -> embedding -> encoder (self-attention -> feed forward neural net work) -> decoder

核心: positional embedding, self-attention, multi-headed attention, feed-forward neural network

normalization 得到的时 [0, 1] 的映射, 是将数据缩放到特定范围内的结果, 有助于提高模型训练的效率和稳定性

softmax 得到的时概率分布, 用于表示多分类问题中每个类别的概率, 或者说语义表达的决策

## 总体结构

Transformer 的结构和 Attention 模型一样, 都是 encoder-decoder 结构, 但是比 attention 更复杂, encoder/decoder 层由 6 个 encoder 堆叠在一起

-   encoder 包含两层, 一个 self-attention 层和一个前馈神经网络, self-attention 能帮助当前节点不仅仅只关注当前的词, 从而获得上下文的语义
-   decoder 也包含 encoder 提到的两层网络, 但是在两层中间还有一层 attention 层, 帮助当前节点获取到当前需求关注的内容

self-attention (自注意力机制) 作用:

    - 捕捉序列内依赖关系: Self-attention机制允许模型在处理序列数据时，直接关注序列中的其他部分。这使得模型能够理解词与词之间的关系，例如在句子中识别代词所指代的对象
    - 并行计算: 与传统的循环神经网络（RNN）不同，self-attention可以并行处理序列中的所有位置，从而提高计算效率
    - 长距离依赖: Self-attention能够有效地处理长距离依赖关系，因为它不依赖于序列中位置的递归连接

self-attention 原理:

    - 计算注意力分数: 通过将输入向量转换为Query、Key和Value向量，计算每个位置对其他位置的注意力分数
    - 缩放和归一化: 将注意力分数除以一个缩放因子（通常是Key向量维度的平方根），然后应用softmax函数进行归一化
    - 加权求和: 使用归一化的注意力分数对Value向量进行加权求和，得到每个位置的输出向量

Feed-Forward Neural Network (前馈神经网络) 作用:

    - 非线性变换: 前馈神经网络在每个位置独立地应用非线性变换，进一步处理和转换self-attention层的输出
    - 特征提取: 通过多层感知机（MLP）结构，前馈神经网络能够提取和组合更高层次的特征
    - 增强模型表达能力: 前馈神经网络为模型提供了额外的非线性处理能力，增强了模型的表达能力和学习复杂模式的能力

Feed-Forward Neural Network 原理:

    - 线性变换: 将self-attention层的输出向量进行线性变换，通常是两个线性层
    - 非线性激活: 在两个线性层之间应用非线性激活函数（如ReLU）
    - 输出变换: 最终的线性层将向量转换回原始维度，作为该位置的输出

总结来说，self-attention 层主要用于捕捉序列内的依赖关系和长距离依赖，而前馈神经网络则用于进一步的非线性变换和特征提取，两者共同构成了 Transformer 模型的核心组件

encoder: input -> embedding -> encoder1 (self-attention -> feed forward neural network) -> encoder2

transformer 模型中缺少一种解释输入序列中单词顺序的方法, 为了处理这个问题, transformer 给 encoder 层和 decoder 层的输入添加了一个额外的向量 Positional Encoding, 维度和 embedding 的维度一样, 这个向量采用了一种很独特的方法来让模型学习到这个值, 这个向量能决定当前词的位置, 或者说在一个句子中不同的词之间的距离

@see: https://www.vectorexplore.com/tech/transformer-explain/

## Encoder

首先，模型需要对输入的数据进行一个 embedding 操作，也可以理解为类似 w2c 的操作，enmbedding 结束之后，输入到 encoder 层，self-attention 处理完数据后把数据送给前馈神经网络，前馈神经网络的计算可以并行，得到的输出会输入到下一个 encoder

thinking 和 machines 代表 input sequence 中的两个 token (标记), 来方便模型处理单词或子词单元来理解和生成语义:

-   thinking: Transformer 模型会根据这个词在序列中的位置以及与其他词的关系来理解其含义和上下文
-   machines: 模型会分析这个词的语义以及它在句子中的角色

### Positional Encoding

ransformer 模型中缺少一种解释输入序列中单词顺序的方法，它跟序列模型还不不一样。为了处理这个问题，transformer 给 encoder 层和 decoder 层的输入添加了一个额外的向量 Positional Encoding，维度和 embedding 的维度一样，这个向量采用了一种很独特的方法来让模型学习到这个值，这个向量能决定当前词的位置，或者说在一个句子中不同的词之间的距离。这个位置向量的具体计算方法有很多种, 公式看论文(PE(pos, 2i) 那部分)

其中 pos 是指当前词在句子中的位置，i 是指向量中每个值的 index，可以看出，在偶数位置，使用正弦编码，在奇数位置，使用余弦编码

最后把这个 Positional Encoding 与 embedding 的值相加，作为输入送到下一层

### self-attention

接下来我们详细看一下 self-attention，其思想和 attention 类似，但是 self-attention 是 Transformer 用来将其他相关单词的“理解”转换成我们正在处理的单词的一种思路，我们看个例子：

The animal didn't cross the street because it was too tired

这里的 it 到底代表的是 animal 还是 street 呢，对于我们来说能很简单的判断出来，但是对于机器来说，是很难判断的，self-attention 就能够让机器把 it 和 animal 联系起来，接下来我们看下详细的处理过程

具体步骤:

1. 首先，self-attention 会计算出三个新的向量，在论文中，向量的维度是 512 维，我们把这三个向量分别称为 Query、Key、Value，这三个向量是用 embedding 向量与一个矩阵相乘得到的结果，这个矩阵是随机初始化的，维度为（64，512）注意第二个维度需要和 embedding 的维度一样，其值在 BP 的过程中会一直进行更新，得到的这三个向量的维度是 64
2. 计算 self-attention 的分数值，该分数值决定了当我们在某个位置 encode 一个词时，对输入句子的其他部分的关注程度。这个分数值的计算方法是 Query 与 Key 做点乘，以下图为例，首先我们需要针对 Thinking 这个词，计算出其他词对于该词的一个分数值，首先是针对于自己本身即 q1·k1，然后是针对于第二个词即 q1·k2
3. 接下来，把点乘的结果除以一个常数，这里我们除以 8，这个值一般是采用上文提到的矩阵的第一个维度的开方即 64 的开方 8，当然也可以选择其他的值，然后把得到的结果做一个 softmax 的计算。得到的结果即是每个词对于当前位置的词的相关性大小，当然，当前位置的词相关性肯定会会很大
4. 下一步就是把 Value 和 softmax 得到的值进行相乘，并相加，得到的结果即是 self-attetion 在当前节点的预测值

在实际的应用场景，为了提高计算速度，我们采用的是矩阵的方式，直接计算出 Query, Key, Value 的矩阵，然后把 embedding 的值与三个矩阵直接相乘，把得到的新矩阵 Q 与 K 相乘，乘以一个常数，做 softmax 操作，最后乘上 V 矩阵。

这种通过 query 和 key 的相似性程度来确定 value 的权重分布的方法被称为 scaled dot-product attention

### multi-headed attention

这篇论文更牛逼的地方是给 self-attention 加入了另外一个机制，被称为“multi-headed” attention，该机制理解起来很简单，就是说不仅仅只初始化一组 Q、K、V 的矩阵，而是初始化多组，tranformer 是使用了 8 组，所以最后得到的结果是 8 个矩阵

transformer 的 self-attention 还加入了 Multi-Headed Attention 机制, 也就是不仅仅初始化一组 Q, K, V 矩阵, 而是初始化多组, 原论文是 8 组, 最后得到 8 个矩阵

### layer normarlization

在 transformer 中，每一个子层（self-attetion，Feed Forward Neural Network）之后都会接一个残缺模块，并且有一个 Layer normalization

Normalization 有很多种，但是它们都有一个共同的目的，那就是把输入转化成均值为 0 方差为 1 的数据。我们在把数据送入激活函数之前进行 normalization（归一化），因为我们不希望输入数据落在激活函数的饱和区

### Feed Forward Neural Network

前馈神经网络没法输入 8 个矩阵呀，这该怎么办呢？

所以我们需要一种方式，把 8 个矩阵降为 1 个，首先，我们把 8 个矩阵连在一起，这样会得到一个大的矩阵，再随机初始化一个矩阵和这个组合好的矩阵相乘，最后得到一个最终的矩阵

> note: 在 transformer 中, 每一个 self-attention + feed forward neural network 算一个子层, 经历过前向传播后, 都会接一个 layer normalisation 模块, LN 比 BN 好在: 在每一个样本上计算均差和方差, 而不是防止梯度爆炸在批维度归一化, 这样对于 transformer, 因为 batch size 也不大, 更容易得到直接的/直观的每一层输入的 mean & std 值

## Decoder

decoder 部分其实和 encoder 部分大同小异，刚开始也是先添加一个位置向量 Positional Encoding, 方法和 positional encoding 一样，接下来接的是 masked mutil-head attetion，这里的 mask 也是 transformer 一个很关键的技术

其余的层结构与 Encoder 一样，请参考 Encoder 层结构

### masked mutil-head attetion

mask 表示掩码，它对某些值进行掩盖，使其在参数更新时不产生效果。Transformer 模型里面涉及两种 mask，分别是 padding mask 和 sequence mask。其中，padding mask 在所有的 scaled dot-product attention 里面都需要用到，而 sequence mask 只有在 decoder 的 self-attention 里面用到

1. padding mask

    因为每个批次输入序列长度是不一样的也就是说，我们要对输入序列进行对齐。具体来说，就是给在较短的序列后面填充 0。但是如果输入的序列太长，则是截取左边的内容，把多余的直接舍弃。因为这些填充的位置，其实是没什么意义的，所以我们的 attention 机制不应该把注意力放在这些位置上，所以我们需要进行一些处理

    具体的做法是，把这些位置的值加上一个非常大的负数(负无穷)，这样的话，经过 softmax，这些位置的概率就会接近 0

    而我们的 padding mask 实际上是一个张量，每个值都是一个 Boolean，值为 false 的地方就是我们要进行处理的地方

2. Sequence mask

    sequence mask 是为了使得 decoder 不能看见未来的信息, 也就是对于一个序列，在 time_step 为 t 的时刻，我们的解码输出应该只能依赖于 t 时刻之前的输出，而不能依赖 t 之后的输出。因此我们需要想一个办法，把 t 之后的信息给隐藏起来

    具体怎么做呢？也很简单：产生一个上三角矩阵，上三角的值全为 0。把这个矩阵作用在每一个序列上，就可以达到我们的目的

对于 decoder 的 self-attention，里面使用到的 scaled dot-product attention，同时需要 padding mask 和 sequence mask 作为 attn_mask，具体实现就是两个 mask 相加作为 attn_mask

其他情况，attn_mask 一律等于 padding mask

### output 层

当 decoder 层全部执行完毕后，怎么把得到的向量映射为我们需要的词呢，很简单，只需要在结尾再添加一个全连接层和 softmax 层，假如我们的词典是 1w 个词，那最终 softmax 会输入 1w 个词的概率，概率值最大的对应的词就是我们最终的结果

编码器通过处理输入序列开启工作。顶端编码器的输出之后会变转化为一个包含向量 K（键向量）和 V（值向量）的注意力向量集 ，这是并行化操作。这些向量将被每个解码器用于自身的“编码-解码注意力层”，而这些层可以帮助解码器关注输入序列哪些位置合适

在完成编码阶段后，则开始解码阶段。解码阶段的每个步骤都会输出一个输出序列的元素

接下来的步骤重复了这个过程，直到到达一个特殊的终止符号，它表示 transformer 的解码器已经完成了它的输出。每个步骤的输出在下一个时间步被提供给底端解码器，并且就像编码器之前做的那样，这些解码器会输出它们的解码结果

# Transformer 为什么需要进行 Multi-head Attention

原论文中说到进行 Multi-head Attention 的原因是将模型分为多个头，形成多个子空间，可以让模型去关注不同方面的信息，最后再将各个方面的信息综合起来。其实直观上也可以想到，如果自己设计这样的一个模型，必然也不会只做一次 attention，多次 attention 综合的结果至少能够起到增强模型的作用，也可以类比 CNN 中同时使用多个卷积核的作用，直观上讲，多头的注意力有助于网络捕捉到更丰富的特征/信息

# Transformer 相比于 RNN/LSTM，有什么优势？为什么？

1. RNN 系列的模型，并行计算能力很差。RNN 并行计算的问题就出在这里，因为 T 时刻的计算依赖 T-1 时刻的隐层计算结果，而 T-1 时刻的计算依赖 T-2 时刻的隐层计算结果，如此下去就形成了所谓的序列依赖关系。

2. Transformer 的特征抽取能力比 RNN 系列的模型要好。

    但是值得注意的是，并不是说 Transformer 就能够完全替代 RNN 系列的模型了，任何模型都有其适用范围，同样的，RNN 系列模型在很多任务上还是首选，熟悉各种模型的内部原理，知其然且知其所以然，才能遇到新任务时，快速分析这时候该用什么样的模型，该怎么做好。

# 为什么说 Transformer 可以代替 seq2seq？

seq2seq 缺点：这里用代替这个词略显不妥当，seq2seq 虽已老，但始终还是有其用武之地，seq2seq 最大的问题在于将 Encoder 端的所有信息压缩到一个固定长度的向量中，并将其作为 Decoder 端首个隐藏状态的输入，来预测 Decoder 端第一个单词(token)的隐藏状态。在输入序列比较长的时候，这样做显然会损失 Encoder 端的很多信息，而且这样一股脑的把该固定向量送入 Decoder 端，Decoder 端不能够关注到其想要关注的信息。

Transformer 优点：transformer 不但对 seq2seq 模型这两点缺点有了实质性的改进(多头交互式 attention 模块)，而且还引入了 self-attention 模块，让源序列和目标序列首先“自关联”起来，这样的话，源序列和目标序列自身的 embedding 表示所蕴含的信息更加丰富，而且后续的 FFN 层也增强了模型的表达能力，并且 Transformer 并行计算的能力是远远超过 seq2seq 系列的模型，因此我认为这是 transformer 优于 seq2seq 模型的地方。
