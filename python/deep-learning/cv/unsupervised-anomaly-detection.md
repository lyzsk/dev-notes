这里全是 unsupervised, 无监督学习

# Inpainting

## Inpainting-Stripe

线条的

# Matching

## Matching-Global-Local-Patch-Matching

扣一块, 与周围的进行匹配

# Diffusion Model

把有瑕疵的图, 到白噪图, 再恢复, 然后相减

# Representation Baed

概率式的, 大部分是分布式的, 因为很多是 Teacher-Student Model

## Teacher Student Based

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

# Similarity NN Based

## Similarity-NN-Based-Positional-Gaussian-Distribution

# MemBank

Memory Bank 把正样本存一个 bank 里, 新来一个图算距离, 做近邻查询(Nearest Neighbour Search)

这个方法排名很靠前

# Neighbouring+MemBank+Pos Gaussian

把概率的思想结合近邻思想

# MemBank+AE+Aug+Attention+MS

大综合
