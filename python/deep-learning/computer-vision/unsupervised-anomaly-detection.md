这里全是 unsupervised, 无监督学习

[Defect Detection Methods for Industrial Products Using Deep Learning Techniques: A Review](#defect-detection-methods-for-industrial-products-using-deep-learning-techniques-a-review)

# 工业无监督瑕疵检测前沿

## Inpainting

### Inpainting-Stripe

线条的

## Matching

### Matching-Global-Local-Patch-Matching

扣一块, 与周围的进行匹配

## Diffusion Model

把有瑕疵的图, 到白噪图, 再恢复, 然后相减

## Representation Baed

概率式的, 大部分是分布式的, 因为很多是 Teacher-Student Model

### Teacher Student Based

先训练一个重量级的网络(Teacher), 再训练一个轻量级的网络(Student)去模拟, 然后训练的时候都用正样本, 测试的时候用负样本

因为 Student 网络从来没见过负样本, 所以 Student 的结果和 Teacher 的结果会有显著差异, 通过这种差异体现缺陷

### Teacher-Student-Dir-Loss

### Teacher-Student-Multi-Scale

也可以泛化到多个尺度上

### Teacher-Student-Two-Teacher

### Teacher-Student-Multi-Student

因为幸福的家庭都一致, 不幸的家庭各不同, 缺陷有各种各样的, 一个学生不一定能体现全部种类

说明这种模型是用先验的, 幸福的先验, 对应幸福的学生都一致

### Teacher-Student-Reverse-KD

Reverse 让学生和老师更不一样

### Teacher-Student-Hard-Mining+Pairwise-Structure

不光学特征本身, 还学特征间的距离

## Similarity NN Based

### Similarity-NN-Based-Positional-Gaussian-Distribution

## MemBank

Memory Bank 把正样本存一个 bank 里, 新来一个图算距离, 做近邻查询(Nearest Neighbour Search)

这个方法排名很靠前

## Neighbouring+MemBank+Pos Gaussian

把概率的思想结合近邻思想

## MemBank+AE+Aug+Attention+MS

大综合

# SimCLR

self-supervised, 用于图像分类任务

重点从 CNN 卷积转向了数据增强, 通过对比学习(Contrastive Learning) + AutoEncoder 来最大化同类型相似度, 最小化不同类型相似度

random crop + color distort 效果最好

防止过拟合, 让同类型的特征更明显, 也就是加大了 negative samples, 加大了分母, 让损失函数得到的值接近 -1, 加大 batch size, 问题就是用的 TPU

算 contrastive loss 时使用在 NT-Xent (the normalized temperature-scaled cross entropy loss), NT-Xent 是这个框架用的 softmax 函数

重点在于 normalized embedding 与 appropriately adjusted temperature parameter

downstream task 是作为 Supervised Fine-Tuning 存在的, 也就是与训练之后还是在用 CNN, 不过即使是简单的 CNN 比如 ResNet50 在 Data Augmentation 做得够好的情况下都能有很好的输出

在通过 Base Encoders + Finetuning 得到 Representation 的过程叫 linear evaluation protocol

整个框架其实并没能超过 supervised learning?

@see: https://arxiv.org/abs/2002.05709

# Teacher Student

## TEMPORAL ENSEMBLING FOR SEMI-SUPERVISED LEARNING

2016/10/07

@see: https://arxiv.org/abs/1610.02242

## Modeling Teacher-Student Techniques in Deep Neural Networks for Knowledge Distillation

2019/12/31

@see: https://arxiv.org/abs/1912.13179

# LAMB optimizer

LAMB: Layer-wise Adaptive Moments optimizer for Batch training

基于 LARS 的改进

## Reducing BERT Pre-Training Time from 3 Days to 76 Minutes

2019/04/01

@see: https://arxiv.org/abs/1904.00962v1

## Large Batch Optimization for Deep Learning: Training BERT in 76 minutes

2019/04/01

@see: https://arxiv.org/abs/1904.00962

# SimSiam

不是用对比学习, 仅仅通过孪生网络和损失函数, 使数据增强输出比 SimCLR 更好

优势是: 不需要准备大量的负样本
