# activation function

激活函数

常见的激活函数: ReLU, sigmoid, tanh

# softmax

在多分类中, softmax 将一组输入, 通常是未归一化地 logit, 转换为一组输出, 这些输出可以被解释为概率 (sum = 1)

无论是 CE loss 还是 constrastive loss, 得到的都是相似度, 都可以通过 softmax 把相似度转换成概率, 得到概率分布

# ReLU

Rectified Linear Unit

ReLU 定义: `f(x) = max(0, x)`, 即输入 `x > 0`, 则输出 x, 否则 0

ReLU 是非线性地, 能够在不影响反向传播梯度地条件下引入非线性

# sigmiod

二分类任务中常用 sigmoid 作为输出层地激活函数, 将输出结果映射到 (0, 1) 之间

# tanh

将输出结果映射到 (-1, 1) 之间
