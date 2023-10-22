# LARS optimizer

LARS: Layer-wise Adaptive Rate Scaling

2017/08/13

特点:

1. LARS uses a separate learning rate for each layer and not for each weight, which leads to better stability.

2. the magnitude of the update is controlled with respect to the weight norm for better control of training speed

这里的每层指的是分层学习率的层

由于:

-   对于多任务模型, 不同任务的收敛速度可能不同
-   对于模型网络中的不同结构, 训练难度也可能不同
-   对于预训练微调任务, e.g. BERT, 底层的 BERT 结构最好使用较小的学习率(甚至冻结) 来保持稳定, 而下游任务(比如分类任务) 网络则可以使用较大的学习率
-   对于多模态模型, 不同模态的网络训练情况也不同

所以分层学习带来的优势:

-   一般来说, 小的学习率, 模型训练会比较稳定, 适合那些容易学偏的结构(例如容易梯度爆炸)
-   微调时, 预训练模型部分的 backbone 要使用较小的学习率
-   收敛快的网络可以使用小的学习率, 收敛慢的网络使用大学习率, 以达到全局同步收敛

但是每层改变 lr 会极度依赖超参数调整.

而且推荐用 large batches (@see: Alex Krizhevsky. One weird trick for parallelizing convolutional neural networks. arXiv preprint arXiv:1404.5997, 2014.), LARS 原文就是用的 8 卡分布式训练, 平衡 acc && speed

LARS 为了平衡初始阶段的学习率, 用 Alexnet-BN 替代了 BVLC Alexnet 原版的 Local Response Normalization layers, paper 里用的是 B=512 as baseline, total B=4k, 用 Alexnet-BN 比原版的 Alexnet 在 Batch=512 的时候 acc 高, 并且随着 Batch 增长到 8k, 学习率下降幅度也慢, 也就是没有明显的 loss gap.

Alexnet-BN Pros: With BN we could use large LR-s even without warm-up.

@see: https://arxiv.org/abs/1708.03888

# LAMB optimizer

LAMB: Layer-wise Adaptive Moments optimizer for Batch training

基于 LARS 的改进

## Reducing BERT Pre-Training Time from 3 Days to 76 Minutes

2019/04/01

@see: https://arxiv.org/abs/1904.00962v1

## Large Batch Optimization for Deep Learning: Training BERT in 76 minutes

2019/04/01

@see: https://arxiv.org/abs/1904.00962
