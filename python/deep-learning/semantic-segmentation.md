#

-   图像分类是图像级别的:

    图像中的局部抽象特征对物体的大小、位置和方向等敏感性更低，从而有助于分类性能的提高. 这些抽象的特征对分类很有帮助，可以很好地判断出一幅图像中包含什么类别的物体

-   图像语义分割是像素级别的:

    与分类不同的是，语义分割需要判断图像每个像素点的类别，进行精确分割. 但是由于 CNN 在进行 convolution 和 pooling 过程中丢失了图像细节，即 feature map size 逐渐变小，所以不能很好地指出物体的具体轮廓、指出每个像素具体属于哪个物体，无法做到精确的分割

因为 CNN 无法在语义分割的轮廓起到很好的效果, 所以提出了 Fully Convolutional Networks (FCN) 用于语义分割. 比如之前的 deeplabv3+ 在 ASPP 结构后, 引入 条件随机场 (Conditional Random Fields，CRF) 计算, 平滑像素级别的预测，改善分割结果的边界和一致性. (CRF = Bayesian principle + Markov Random Field/MRF)

# Conditional Random Fields Meet Deep Neural Networks for Semantic Segmentation

2018

这篇论文中提出的方法将 CRF 完全建模进 CNN，从而使得网络可以用平常的反向传播算法进行端到端训练，避免了用于目标描绘的后处理方法

普通的 semantic segmentation CNN 解决了每个像素点 分类 + 分割的任务, CRF + CNN 主要重点辅助解决 image edges(图像边界), appearance consistency(外观一致性), spatial consistency(空间一致性)

如果使用逐像素点分类器, 通常会导致 noisy predictions, 所以在已知先验知识的情况下, 要分割的对象通常是连续的结构体, 我们期望附近的像素被分配相同的对象标签 (通过 CRF 实现)

核心算法在: Fig. 5: A mean-field iteration expressed as a sequence of common CNN operations.

就是把像素标签建模成 MRF 中的随机变量, global observation (全局观测) 视为 Image 整张图像.

Xi 代表与像素 i 相关的随机变量, 是预设好的与标签集合 L 相关的, X 代表随机变量 Xi-Xn 组成的向量, N 即图像中的像素点个数

给定一个 Graph, `G = (V, E), V = {X1, ..., Xn}`, 在给定一个 global observation `I`, 就有了 `pair(I, X)` 由 Gibbs distributon (吉布斯分布) 建模成一个具有 CRF 特点的 pair, `E(X)` 就是像素 i 标签 L 的 X 的能量, `Z(I)` (简写成`I`) 是 partition function (配分函数)

`E(X) = 总和u(Xi) + 总和p(Xi, Xj)(i < j)`, unary energy components (一元能量, 简写 u)度量像素 i 取标注 Xi 的全局可能性 (损失), pairwise energy components (`p(Xi, Xj)`) 度量同时分配给像素 i, j 的损失

就是算 E 的时候, u 用到了全局不考虑 CNN 平滑性和标注分配一致性的条件下的每个像素点的预估标注 (先验值), p 提供了对于 smoothing term (图像数据的平滑项), 该项鼓励具有相似性质的像素点分配相似的标注. p 可以建模成加权高斯函数 (weighted Gaussians). 每个像素 i 得到的特征向量 (比如空间位置和 RGB 值) 构成 fi, 然后乘以 weight, w(m) (这里 fi, fj 会形成 k(m)), 然后相加得到特征, 再乘以兼容性函数 (label compatibility function, `miu(xi, xj)`), 捕获不同标注对之间的兼容性.

核心就是要最小化能量函数 `E(X)`, 让给定图像最可能的平滑化边缘像素的标注 X. 这里就又在 CNN 里引入了 CRF 的分布平均场用于近似最大化后验边缘推理 (posterior marginal inference), 即用一个相似分布 `Q(X)` 近似 CRF 分布 P(X), 这个后验边缘推理可以写成独立边缘分布的乘积 (marginal distribution). 在 CNN 没有收敛前, Q 一直在 while 循环中推理. (Initialization 后进 while 循环, 不断重复 meesage passing -> weighting filter outputs -> compatibility transform -> adding unary potentials -> normalizing). 在 Fig. 5 这个 mean-fild 均场算法中可以观察到每次都用到了前面说的高斯空间和双线性滤波器 (就是两个高斯核, 一个 spatial kernel 空间核, 一个 bilateral kernel 双线性核). 这个算法是 filter-based, 保留了 edge-preserving Gaussian filters, 其系数取决于 spatial and appearance information (图像的原始空间信息和外表信息), 优势就是滤波器尺寸和图像一样大, 初始化的参数多, 需要的运算的参数少

虽然算法中每一步都是用 CNN 表示的, 但是加了 while 就是 RNN 表示整个算法了

因为要计算损失梯度, 所以引入 negative of the unary energy, 负单能量, 就是在 adding unary potentials 的时候是一个 `Qi(l) = u取负数的 Ui(l) - Qi(l)`, 这里不是 `-` 是 `+` 吧??? 得到的不是应该是后验推理 exp 概率吗?是一个正数才对???

1. **Message Passing**:

    用的是 O(N) 算法, N = 图像像素个数, `[15] A. Adams, J. Baek, and M. A. Davis, “Fast high-dimensional filtering using the permutohedral lattice,” Computer Graphics Forum, vol. 29, no. 2, pp. 753–762, 2010`, 就是一个 permutoheral lattice 计算 filter 的响应, 实现高维的 gaussian filter (全程都是 2 个高斯核: spatial kernel 空间核, bilateral kernel 双线性核).

2. **Weighting Filter Outputs**

    第一步算出了整张图 M 个像素的平均场, 接下来就是对每个分类标注 I 加权求和, 相当于 M channel 的 1x1 conv filter, 这一步因为反向传播参数是已知的, 所以在 while 循环中可以实现自动学习 filter 的 weight (那意思就是 Qu 就是先验概率/像素 i 的全局先验标注),

3. **Compatibility Transform**

    兼容性变换 (Compatibility Transform), 就是用 label compatibility function (`miu(l, l')`), 通过 potts model (derived from statistical mechanics, 从 Fig 2. 中看就是把不同标签相同特征的像素点, 比如 cat 和 dog 都有毛发深浅渐变的像素点, 通过对周围像素点的计算, 比如超过一定比例被 cat 的像素点标签包含了这个像素点, 那就认为这个像素点就是 cat 标签, 说白了就是统计学概率), 设置一个固定的惩罚项, 给 2 个不同标签标注给具有相似特性的 2 个像素 (相当于减少误差?)

4. **Adding Unary Potential**

    一元输入 unary inputs U, 按像素减去兼容性变换步骤的输出, 反向传播就可以直接把输出的 error 传递给输入 (但还是刚才的问题, 应该是 + 不是 - 吧? error 是一个正数?)

5. **Normalization**

    while 循环里 (迭代过程中)的归一化步骤就可以当作就是一个 softmax, 没懂它到底是 relu 然后 norm 完成 n 次循环再 softmax 还是每次都 softmax 换成概率, 感觉因为 2018 比较早, 也不是重点在先 norm 还是先 relu, 然后是否要每次都 softmax.

@see: https://www.robots.ox.ac.uk/~tvg/publications/2017/CRFMeetCNN4SemanticSegmentation.pdf

@see: https://blog.csdn.net/ShuqiaoS/article/details/89249699
