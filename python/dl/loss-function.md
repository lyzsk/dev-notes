# loss function

损失函数/目标函数, 用于度量模型的预测与实际值之间的差距, ML 的目标通常是最小化 loss function

# cross-entropy loss

对于分类任务, 常用到的 loss function 使 cross-entropy loss 交叉熵损失函数, CE loss + softmax 的使用非常广泛

# Contrastive loss

在自监督学习任务, 比如 SimCLR 中, 由于没有标签, 无法直接使用 CE loss, 取而代之的就是 contrastive loss

基本思想是, 来自同一张图像的两个变换表示应尽可能地相近, 意味着他们地 constine 相似度很高, 而来自不同图像地表示应该尽可能地隔离
