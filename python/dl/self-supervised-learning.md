# definitions

## AUC ROC

ROC: Receiver Operating Characteristics

AUC: Area Under Curve

AUC-ROC 曲线是针对各种阈值设置下的分类问题的性能度量。 ROC 是概率曲线，AUC 表示可分离的程度或测度，它告诉我们多少模型能够区分类别。 AUC 越高，模型在将 0 预测为 0，将 1 预测为 1 时越好

### ROC

ROC 曲线是一种用于表示分类模型性能的图形工具。它通过将真阳性率(True Positive Rate，TPR)和假阳性率(False Positive Rate，FPR)作为横纵坐标来描绘分类器在不同阈值下的性能。

-   TPR: True Positive Rate, 真阳性率

    真阳性率(True Positive Rate，TPR)通常也被称为敏感性(Sensitivity)或召回率(Recall)。它是指分类器正确识别正例的能力。真阳性率可以理解为所有阳性群体中被检测出来的比率(1-漏诊率)，因此 TPR 越接近 1 越好

    TPR = TP /(TP + FN)

-   FPR: False Positive Rate, 假阳性率

    假阳性率(False Positive Rate，FPR)是指在所有实际为负例的样本中，模型错误地预测为正例的样本比例。假阳性率可以理解为所有阴性群体中被检测出来阳性的比率(误诊率)，因此 FPR 越接近 0 越好

    FPR = FP /(FP + TN)

### AUC

    AUC(ROC曲线下面积)是ROC曲线下的面积，用于衡量分类器性能。AUC值越接近1，表示分类器性能越好；反之，AUC值越接近0，表示分类器性能越差。在实际应用中，我们常常通过计算AUC值来评估分类器的性能

## CNN vs MLP

MLP: Multilayer Perceptron 多层感知器

-   使用 fully connected layer
-   只接受 vector 作为输入

CNN: Convolutional Neural Network, 卷积神经网络

-   locally connected layer
-   可接收 matrix 作为输入

在图像处理上, CNN 使用稀疏连接层, 未解决 MLP 向量输入时丢失的像素或像素之间的 2D 空间信息(spatial information)

## fully connected layer vs locally connected layer

fully connected layer = global connected layer

全连接层就是将最后一层卷积得到的特征图(matrix) 层展开成一维向量, 并为分类器提供输入

具体点就是全连接层把输入的大尺寸图象经过卷积层和池化层压缩成多个小尺寸的图像, 再经过卷积和卷积核 + 激活函数, 输出成一个一维的向量

-   全连接层的作用:

    起到分类器的作用, 如果说卷积层, 池化层, 激活函数等操作是将操作将原属数据映射到隐层特征空间的话(特征提取 + 选择的过程), 全连接层则是起到将学习到的特征表示映射到样本的标记空间的作用. 换句话说就是高度提纯特征, 把特征整合到一起, 方便最后给分类器或者回归

-   全连接层的问题:

    参数冗余, 降低了训练效率, 容易过拟合

CNN 里带有 FC Layer 的输入图片尺寸是固定的, 全连接层需求的输入维度是固定的

CNN 支持任意尺寸输入图像的方法:

1. 使用全局平均池化/卷积层代替 FC Layer
2. 在卷积层和 FC layer 之间假如空间金字塔池化

局部连接: 每层神经元只有局部范围内的连接, 在这个范围内采用全连接的方式, 超过这个范围的神经元则没有连接, 连接与连接之间独立参数, 相比于全连接减少了感受域外的连接, 有效减少参数规模

## full convolution vs local convolution

全卷积: 层间神经元只有局部范围内的连接, 在这个范围内采用全连接的方式, 连接采用的参数在不同感受域之间共享, 有利于提取特定模式的特征; 共用感受域之间的参数可以进一步减少参数量

局部卷积: 层间神经元只有局部范围内的连接, 感受域内采用全连接的方式, 而感受域之间间隔采用局部连接与全连接的连接方式; 相比于全卷积会引入额外参数, 但有更强的灵活性与表达能力, 相比于局部连接, 可以有效控制参数量

With a convolutional network, each neuron only receives input from a small local group of the pixels in the input image. This is what is meant by "local connectivity", all of the inputs that go into a given neuron are actually close to each other.

Both full convolution and local convolution layers can be trained using back propagation.

## LR warm up

常见 learning rate warm up 方法:

1. constant 常熟
2. linear 线性
3. exponent 指数

linear LR warm up 方法各有不同:

-   Timn:

    1. epoch 在 [0, warmup_epochs] 时, 根据不同的策略设置相应的 wamup 学习率
    2. epoch = warmup_epochs 时, 将 LR 设置为 warmup_epochs, 这样可以保证 warmup 结束后, lr 能恢复到常规数值

    这种方法称为 fix, fix 容易导致第 warmup_epochs 个 epoch 的学习率出现跳变

-   Detectron2:

    D2 中初始学习率为 `eta * warmup_factor`, 这样的好处是可以为 optimizer 的不同 param_groups 自适应地设置初始学习率, 这种方式称为 auto, auto 会自动地调整斜率, 使得线性增长的终点刚好是 warmup_epochs

-   MMCV:

    warmup_lr 会在前两种基础上乘以一个 ratio, `warmup_lr = ratio * LR` 这个 ratio 是 linear 的, 因为 LR 本身是非线性的, 所以最终乘积也是非线性的, 这种方法称为 factor

# Teacher Student KD

## TEMPORAL ENSEMBLING FOR SEMI-SUPERVISED LEARNING

2016/10/07

这是面向 semi-supervised 的, 也就是还是有少量的标注图像输入

self-ensembling improves the classification accuracy in fully labeled cases as well, and provides tolerance against incorrect labels.

@see: https://arxiv.org/abs/1610.02242

## Model Compression with Two-stage Multi-teacher Knowledge Distillation for Web Question Answering System

2019/10/18

可以用多个 teacher 模型 relevance 关联一个 student 模型

因为不同 teacher 模型训练出来的 bias 可能都会对学生产生影响

博采众家之长的学生, 可以达到师不必强于弟子, 弟子不必不如师

Multi-teacher KD 下最厉害的老师不一定会教出最厉害的学生, 可能的理解解释是教师模型较大, 可以捕捉到数据分布中比较细微的模式并记录在自己的参数中, 而这些参数数据分布不一定能被小的学生模型学到局部数据分布的特点

解决方法就是不固定每个教师模型的权重, 根据学生模型的状态, 动态的调整权重, 即对不同的样本以及在训练的不同阶段, 给不同教师模型分配不同的权重

@see: https://arxiv.org/abs/1910.08381

## Modeling Teacher-Student Techniques in Deep Neural Networks for Knowledge Distillation

2019/12/31

是一种 Knowledge Distillation(KD)

对于人而言, 图片发生一些小的扰动不影响我们的判断, 但是模型则不然(@see: https://arxiv.org/abs/1412.6572 2014/12/20), 所以应该避免 pesudo label 的方法, 因为少量的标签数据集配上生成的伪标签本质还是会导致过拟合

在 TS 模型中的 data preparation 时, 会分两步骤: data modification and data partitioning, 即数据修复和数据分区

data modification 包括数据增强, 添加噪声, 对特征进行转换等, 这种修改提供了一个增广的数据集, 提供的 student 模型, 有助于 student 更好的学习 teacher, 训练的时候是 teacher 先在原数据集上训练生成预测值或 soft targets, 再训练 student 模型, 增广数据集有助于提高 student 对不同类型输入的泛化能力, 有助于减小过拟合风险

data partition 的时候可以分成 teacher(s), student(s)

> Note: 不同的 student 可以用不同的 data modification, 不同的 data augmentation, etc.

TS 模型的 KD 部分有三个步骤: knowledge types, location of distillation, methods of knowledge transfer

knowledge types 里的 soft-labels(also known as logits) 可以从不同的 teacher model 里提取, 包括输出层和中间层

distillation loss 通过 CE Function 实现, 并作为 student model 的输出和 teacher model 的 soft-labels 输出

Transfer Methods 做成 multilevel 可以作为 teacher 提供的 information mask 用来交给 student 训练, 也就是 student 既训练了 information masks, 还训练了 teacher's ground truth

在 distillation 的时候, student 可以有三层蒸馏: segmenting, classification, semantic segmentation(@see: https://arxiv.org/abs/1903.04197v2 2019/03/11)

@see: https://arxiv.org/abs/1912.13179

知识蒸馏的意义是随着时代发展, 模型的 params 在短短 4/5 年内从亿级 -> 千亿级 -> 万亿级别, 随着 parameters 的增加, 对于线上 model 的 inference 推理有更严峻的挑战, 因为线上模型有严格的时间延迟限制, 知识蒸馏压缩模型, 把大模型应用到产品中

知识蒸馏过程中学生模型学习教师模型, 不断调整参数, 使学生训练时不断使预测结果和教师模型预测结果相近, 减少差异

## Reinforced Multi-Teacher Selection for Knowledge Distillation

2020/11/11

选择 teacher 是一个策略问题, 优化策略是根据学生的反馈机制

提到用 reinforced multi-teacher KD, 通过用 agent 来选择 1-k 个 teacher model 的 soft label, 计算得到 select or not 的 action, 由学生来通过 agent 选择 teacher 的 representation, soft label, teacher CE loss

teacher 训练到一个指定的 batch 上通过 validation set 查看学生模型的反馈情况, 正确越多, reward 值越高

然后 reward 作为反馈, 用梯度的方法更变策略函数的学习:

1. 选择什么样的教师 feature 来教学
2. 如何设定学生的 reward
3. 策略函数本身定义形式

一般实验的时候分成:

-   single teacher KD

    BERT12/RoBERTa12/ALBERT12/XLNet12

-   U-Ensemble Teacher

    assign an equal weight to each teacher model

-   Rand-Single-Ensemble Teacher

    randomly select one teacher from the teacher model candidates at mini-batch level

-   W-Ensemble Teacher

    assign a different weight to each teacher model, weights are fix during the whole distillation

-   Logistic Regression(LR)-Ensemble Teacher

    use LR model to model the best weights for each teacher candidates

-   Best-Single-Ensemble

    an instance-level teacher model selection method

    in the training set, for each instance select the best performance single teacher

    最优教师模型, 对每一个样本, 根据每个教师输出结果比较 ground-truth, 动态的选择教师模型, 作为采纳

根据学生模型的能力, 可能是 batch size? 动态的选择教师模型会更好, 实现逐渐适应的匹配

蒸馏也就是说研究组-产品组, 一个关注创新-一个关注性价比

一般来说模型越大, 整体性能越好, 但平均计算单个参数带来的收益, 模型越大平均收益越小, 需要提高每个参数的效率

@see: https://arxiv.org/abs/2012.06048

## Reinforced Iterative Knowledge Distillation for Cross-Lingual Named Entity Recognition

2021/06/01

不再是单纯的压缩模型, 而是对教师模型进行知识萃取, 通过训练数据的选择把真正有用的知识逐步传递给学生

采用多步迭代的方法, 在每一步迭代中, 学生模型只选择教师模型在部分样本上的输出作为训练数据, 训练完后本轮的学生模型就变成了下一轮迭代的教师模型

经过多次迭代后, student 学习到了真正知识部分的特征, 而抛弃了一些噪音的部分, 模型能力得到了增强

本质就是通过反馈更新策略, 与 curriculum learning 课程学习相似

@see: https://arxiv.org/abs/2106.00241

momentum 超参数常用在权重更新的时候, 目的是得到全局最优解, 引入动量, 在某时刻的梯度与历史时刻梯度方向相似时, 加强该趋势, 反之, 若某时刻的梯度与历史时刻的梯度方向不同, 则减弱, 是否可以认为学生模型的反馈和更新的策略输出的是 momentum?

# DenseCL

2020/11/18

@code: https://github.com/WXinlong/DenseCL

@see: https://arxiv.org/abs/1912.13179

# RegionCL + DenseCL

2021/11/24

regionCL-D

@code: https://github.com/CoinCheung/DenseCL

@see: https://arxiv.org/abs/2011.09157

# SimCLR v1

属于 Contrastive learning 对比学习/对抗学习

self-supervised, 用于图像分类任务

SimCLR 提出了 nonlinear projection head 的概念

重点从 CNN 卷积转向了数据增强, 通过对比学习(Contrastive Learning) + AutoEncoder 来最大化同类型相似度, 最小化不同类型相似度

Data augmentation 可以有: random cropping followed by resize back to the original size, random
color distortions, random Gaussian blur, roberts filtering, sobel filtering, random flip,

random crop + color distort 效果最好

防止过拟合, 让同类型的特征更明显, 也就是加大了 negative samples, 加大了分母, 让损失函数得到的值接近 -1, 加大 batch size, 问题就是用的 TPU

算 contrastive loss 时使用在 NT-Xent(the normalized temperature-scaled cross entropy loss), NT-Xent 是这个框架用的 softmax 函数

重点在于 normalized embedding 与 appropriately adjusted temperature parameter

downstream task 是作为 Supervised Fine-Tuning 存在的, 也就是与训练之后还是在用 CNN, 不过即使是简单的 CNN 比如 ResNet50 在 Data Augmentation 做得够好的情况下都能有很好的输出

在通过 Base Encoders + Finetuning 得到 Representation 的过程叫 linear evaluation protocol

Encoder 其实就是通过残差网络(residual network)

> Residual Network(ResNet) 解决的问题:
>
> 1. 梯度消失/梯度爆炸问题, 当神经网络深度增加, 通过反向传播更新权重的梯度可能快速缩小到 0(梯度消失), 或者快速增加到非常大(梯度爆炸), 使模型无法正常的进行学习
>
> 2. 退化问题: 实际训练中, 随着网络的深度增加, 训练误差可能反而增大, 这和过拟合是不一样的, 是退化问题, 优化困难, 而不是模型复杂度过高的问题
>
> 残差网络本质就是学习 input/output 之间的残差, 而不是直接学习 input/output 的映射

SimCLR 本质就是提供了 特征提取 的能力, 正样本与正样本之间最大化相似度, 正样本与负样本之间最小化相似度

整个框架其实并没能超过 supervised learning?

SimCLR 主要贡献:

1. 发现多种数据增强方法的组合对 contrastive learning 是至关重要的
2. 在表征和 contrastive loss 之间引入了可学习的非线性变换
3. 发现 normalized embedding 和适当调整后的 temperate 参数对表征学习有好的效果
4. 发现更大的 batch size 和更长期的训练, 相比对于监督学习, 对 contrastive learning 有更好的效果

SimCLR 用更大的 batch size, 但是用标准的 SGD 或者基于动量的优化器训练更大的 batch size 会造成训练的不稳定, 为了使训练稳定, SimCLR 用了 LARS 优化器, 但是 LARS 可以改成更优解 LAMB

大 batch size 相关的需要涉及分布式训练, 就需要用 Global BN

SimCLR 的特色就是训练结束前加入了 nonlinear projection head, 非线性的 projection head 能够提升它前一层的表征的质量, 主要是让 `g` 去掉一些对 downstream task 无关的信息, 比如颜色和方向等, 使非线性变换 `g(.)` 能够通过杠杆作用, more information can be formed and maintained in `h`, 也就是通用的表征必须要损失一些无用的信息, 去掉一些 downstream task 有用的无关信息, 只留下更深层次的 inxi, 通过 Encoder 留下的精炼信息对分类更有帮助, 而通过 projection head 来处理, 那么前面就尽可能的保留哪些信息直到 projection head(paper section 4.2: A nonlinear projection head improves the representation quality of the layer before it)

> Note: nonlinear projection head 可以理解成非线性投影器

2020/02/13

@see: https://arxiv.org/abs/2002.05709

# SimCLR v2

2020/06/17

Intro 陈述了目前已知的一些主要是通过 fine-tunes 的时候用一些 labeled examples. 有一种方法把 leverage unlabeled data during supervised learning as a form of regularization, 这种方法依赖于不同的 data augmentation or encourage class label prediction consistency on unlabeled data among different models.

@see: https://arxiv.org/abs/2006.10029

Compared to SimCLR with 2-layer projection head, SimCLRv2 uses a 3-layer projection head and fine-tunes from the 1st layer of projection head, it results in as much as 14% relative improvement in top-1 accuracy when fine-tuned on 1% of labeled examples.

# MoCo v1

2019/11/13

MOCO: Momentum Contrast

对比学习类

@see: https://arxiv.org/abs/1911.05722

# MoCo v2

2020/03/09

@see: https://arxiv.org/abs/2003.04297v1

# BYOL

2020/01/13

对比学习类, 但是不像 simclr, moco 一样需要负样本, 仅需正样本就能训练!

BYOL: Bootstrap your own latent

假如 SimCLR 使用 batch size = 4096, 则 4096 -> 2048 -> 1024 -> 512 到 2048 的批次 BYOL 就能达到相同的 top-1/accuracy, 而到 batch size = 1024/512 BYOL 的性能下降明显比 SimCLR 少, 因为 SimCLR 的数据增强依托于颜色, 而同一张图(同一个正样本)的 color hitogram 色值直方图应该是一样的, 且在 BN 过程中 512 个 batch 同时进入 projection head, 已经能够互相成为正负样本了, 无需人为增强增加负样本

input 一张 image x, 会得到两个 view: `v, v'`, 然后用不同的增强方式(超参数值在每一个分支里是相同的) `f`, 得到不同的特征表示 `y1, y2`, 再通过不同的超参数得到的不同的 `g` , 经过 projection 得到不同的特征向量 `z`, online 的分支还会进行 `q` 将特征向量再次进入 prediction, 向 `v'` 处于的 target 分支结果靠拢, 而在这过程中 target 分支是 `sg` 的, 即暂停梯度

online network 里的 prediction,就是当作预测值, 然后把 target network 里 `sg` 的 `z'` 当作真实值, 进行回归, 让预测值越来越接近真实值, 因为 BYOL 认为从同一张输入图像, 经过两种不同数据增强的图像变化后的 `v, v'` 应该学习到相同的特征向量才是对的

结束上述步骤后会得到一个 `L`, 然后会进行一次 reverse, 将 `v'`作为 online 分支, `v` 作为 target 分支再来一次, 得到 `L'`. 最终的 `L-BYOL = L + L'`

Q: 但是因为没有负样本, 假设输出的 特征值都是 1 呢? 就是 online/target network 在回归的过程中的值都是 1? 不就会导致模型崩塌吗?

A: 因为 `q` 多加了一层 MLP(Multilayer Perceptron), 里面结构是 input projection z -> linear -> BN -> ReLU -> Linear -> prediction, 核心就是 BN, 相当于虽然只是在一个 batch 里的一对 `v, v'`, 但计算 BN 的时候是全局的, 即 `batch size * 2` 个 view, 用到了大量负样本的信息, 提取了大量均值和标准差; 简而言之就是没有直接制造负样本, 而是在计算过程中由 BN 间接引用了负样本的信息

与 GAN 网络类似, 由于 online network 是新的 network, 而 target network 是旧的 networ, 在模型内形成了 GAN 一样的对抗, 使 loss 永远不会降到 0, 也就是 representation space -> higher dim latent space -> aim at a target has momentum

结论是 BYOL 使 sensitive to batch size && optimizer choices, 但是对 batch size 不像 SimCLR 那么敏感

@see: https://arxiv.org/abs/2006.07733

但是 BYOL 的泛化能力可能没有 SimCLR 好, 因为没有直接引入负样本, 但是更可能适用于实际生产环境, 因为实际环境只需要做一种深度学习任务

# SimSiam

2020/11/20

Exploring Simple Siamese Representation Learning

不是用对比学习, 仅仅通过孪生网络和损失函数, 使数据增强输出比 SimCLR 更好

优势是: 不需要准备大量的负样本

@see:https://arxiv.org/abs/2011.10566

# S2-BNN

2021/02/17

SimSiam Top-1 68.1%

S2-BNN Top-1 68.7%

@see: https://arxiv.org/abs/2102.08946
