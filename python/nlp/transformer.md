# transformer

Transformer 的结构和 Attention 模型一样, 都是 encoder-decoder 结构, 但是比 attention 更复杂, encoder/decoder 层由 6 个 encoder 堆叠在一起

encoder 包含两层, 一个 self-attention 层和一个前馈神经网络, self-attention 能帮助当前节点不仅仅只关注当前的词, 从而获得上下文的语义

encoder: input -> embedding -> encoder1 (self-attention -> feed forward neural network) -> encoder2

decoder 也包含 encoder 提到的两层网络, 但是在两层中间还有一层 attention 层, 帮助当前节点获取到当前需求关注的内容

transformer 模型中缺少一种解释输入序列中单词顺序的方法, 为了处理这个问题, transformer 给 encoder 层和 decoder 层的输入添加了一个额外的向量 Positional Encoding, 维度和 embedding 的维度一样, 这个向量采用了一种很独特的方法来让模型学习到这个值, 这个向量能决定当前词的位置, 或者说在一个句子中不同的词之间的距离

@see: https://www.cnblogs.com/mantch/p/11591937.html

@see: https://www.vectorexplore.com/tech/transformer-explain/

## Encoder

transformer 中的 self-attention 主要是用来理解相关单词的关系, e.g. The animal didn't cross the street because it was too tired. 这里的 it 代表的是 animal 还是 street, 对于机器来说很难判断, 所以需要 self-attention 能把 it 和 animal 联系起来

具体步骤:

1. self-attention 向量为度 512, 三个向量 Query, Key, Value, 三个响粮食 emmbedding 向量与一个矩阵相乘 (随机初始化, 维度位 64, 512) 的结果, 其值会在 BP 过程中更新, WQ, WK, WV
2. self-attention 的分数值, 该分值决定在某个绘制 encode 一个词的时候, 对输入句子的其他部分的关注程度. Query 和 Key 做成节点相乘, 得到 Input Thinking, 再矩阵相乘得到 Input Machine
3. 把点乘的结果除以一个常熟 (8), 一般是矩阵维度的开方 (64 开方=8), 然后把得到的其他结果进行 softmax 计算, 将向量转成得每个词对于当前位置的词的相关性大小
4. 把 Value 与 softmax 相乘, 得到结果即 self-attetion 在当前节点的值

但是在实际应用场景中, 上述步骤太慢了, 为了加速, 是把 Query, Key, Value 三个矩阵与 embdedding 的值直接相乘, 再通过 WQ _ WK _ 常熟 来得到 softmax, 最后乘以 V 矩阵, 这种通过 query 和 key 的相似度来确定 value 的权重分布方式被称为 scaled dot-product attention

###

transformer 的 self-attention 还加入了 Multi-Headed Attention 机制, 也就是不仅仅初始化一组 Q, K, V 矩阵, 而是初始化多组, 原论文是 8 组, 最后得到 8 个矩阵

###

在 transformer 中, 每一个 self-attention + feed forward neural network 算一个子层, 经历过前向传播后, 都会接一个 layer normalisation 模块, LN 比 BN 好在: 在每一个样本上计算均差和方差, 而不是防止梯度爆炸在批维度归一化, 这样对于 transformer, 因为 batch size 也不大, 更容易得到直接的/直观的每一层输入的 mean & std 值

## Decoder

transformer 的 encoder 和 decoder 对称的, 知识把 multi-head attention 在 decoder 中变成了 masked multi-head attention

mask 表示掩码, 它对某些值进行掩盖, 使其在参数更新时不产生效果, transformer 涉及两种 mask: padding mask, sequence mask

padding mask 在所有 scaled dot-product attention 里面都需要用到, 主要解决了输入序列对齐的问题, 因为每个批次输入序列长度是不一样的.

padding mask 实际上是一个张量, 每个值都是 boolean, 值为 false 的地方就是需要处理的地方. 具体解决就是给较短的序列后面填充 0, 对过长的序列截取左边多余序列并填充. 好处: attention 机制不会注意到这些填充序列, 注意力还在真实值序列中

sequece mask 只有在 decovder 的 self-attention 里面用到

主要是为了让当前 decoder 不能看到未来信息, 也就是不能看到 time_step t 的时刻信息, 具体方法就是产生一个上三角矩阵, 上三角的值全为 0, 把这个矩阵用在每一个进入 decoder 的序列上

对于 decoder 的 self-attention, 里面使用到的 scaled dot-product attention, 同时需要 padding mask 和 sequence mask 作为 attn_mask, 具体实现就是两个 mask 相加作为 attn_mask
