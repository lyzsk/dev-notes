# definitions

## AUC ROC

ROC: Receiver Operating Characteristics

AUC: Area Under Curve

AUC-ROC 曲线是针对各种阈值设置下的分类问题的性能度量。 ROC 是概率曲线，AUC 表示可分离的程度或测度，它告诉我们多少模型能够区分类别。 AUC 越高，模型在将 0 预测为 0，将 1 预测为 1 时越好

### ROC

ROC 曲线是一种用于表示分类模型性能的图形工具。它通过将真阳性率（True Positive Rate，TPR）和假阳性率（False Positive Rate，FPR）作为横纵坐标来描绘分类器在不同阈值下的性能。

-   TPR: True Positive Rate, 真阳性率

    真阳性率（True Positive Rate，TPR）通常也被称为敏感性（Sensitivity）或召回率（Recall）。它是指分类器正确识别正例的能力。真阳性率可以理解为所有阳性群体中被检测出来的比率(1-漏诊率)，因此 TPR 越接近 1 越好

    TPR = TP / (TP + FN)

-   FPR: False Positive Rate, 假阳性率

    假阳性率（False Positive Rate，FPR）是指在所有实际为负例的样本中，模型错误地预测为正例的样本比例。假阳性率可以理解为所有阴性群体中被检测出来阳性的比率(误诊率)，因此 FPR 越接近 0 越好

    FPR = FP / (FP + TN)

### AUC

    AUC（ROC曲线下面积）是ROC曲线下的面积，用于衡量分类器性能。AUC值越接近1，表示分类器性能越好；反之，AUC值越接近0，表示分类器性能越差。在实际应用中，我们常常通过计算AUC值来评估分类器的性能

## fc

fc: fully connected layer, 对全连接层

# optimizer

## LARS optimizer

LARS: Layer-wise Adaptive Rate Scaling

2017

@see: https://arxiv.org/abs/1708.03888

## LAMB optimizer

LAMB: Layer-wise Adaptive Moments optimizer for Batch training

基于 LARS 的改进

### Reducing BERT Pre-Training Time from 3 Days to 76 Minutes

2019/04/01

@see: https://arxiv.org/abs/1904.00962v1

### Large Batch Optimization for Deep Learning: Training BERT in 76 minutes

2019/04/01

@see: https://arxiv.org/abs/1904.00962

# Teacher Student

## TEMPORAL ENSEMBLING FOR SEMI-SUPERVISED LEARNING

2016/10/07

@see: https://arxiv.org/abs/1610.02242

## Modeling Teacher-Student Techniques in Deep Neural Networks for Knowledge Distillation

2019/12/31

# DenseCL

2020/11/18

@code: https://github.com/WXinlong/DenseCL

@see: https://arxiv.org/abs/1912.13179

# RegionCL + DenseCL

2021/11/24

regionCL-D

@code: https://github.com/CoinCheung/DenseCL

@see: https://arxiv.org/abs/2011.09157

# SimCLR

对比学习类

self-supervised, 用于图像分类任务

SimCLR 提出了 nonlinear projection head 的概念

重点从 CNN 卷积转向了数据增强, 通过对比学习(Contrastive Learning) + AutoEncoder 来最大化同类型相似度, 最小化不同类型相似度

random crop + color distort 效果最好

防止过拟合, 让同类型的特征更明显, 也就是加大了 negative samples, 加大了分母, 让损失函数得到的值接近 -1, 加大 batch size, 问题就是用的 TPU

算 contrastive loss 时使用在 NT-Xent (the normalized temperature-scaled cross entropy loss), NT-Xent 是这个框架用的 softmax 函数

重点在于 normalized embedding 与 appropriately adjusted temperature parameter

downstream task 是作为 Supervised Fine-Tuning 存在的, 也就是与训练之后还是在用 CNN, 不过即使是简单的 CNN 比如 ResNet50 在 Data Augmentation 做得够好的情况下都能有很好的输出

在通过 Base Encoders + Finetuning 得到 Representation 的过程叫 linear evaluation protocol

整个框架其实并没能超过 supervised learning?

@see: https://arxiv.org/abs/2002.05709

# MOCO

2019/11/13

MOCO: Momentum Contrast

对比学习类

MoCo v1

@see: https://arxiv.org/abs/1911.05722

# BYOL

2020/01/13

对比学习类

BYOL: Bootstrap your own latent

@see: https://arxiv.org/abs/2006.07733

# SimSiam

2020/11/20

Exploring Simple Siamese Representation Learning

不是用对比学习, 仅仅通过孪生网络和损失函数, 使数据增强输出比 SimCLR 更好

优势是: 不需要准备大量的负样本

@see:https://arxiv.org/abs/2011.10566
