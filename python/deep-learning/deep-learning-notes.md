# FLOPS vs FLOPs

FLOPS: floating point operations per seconds, 意指每秒浮点运算次数, 理解为计算速度, 是一个衡量硬件性能的指标

FLOPs: floating point operations(s 表复数), 意指浮点运算数, 理解为计算量, 用来衡量算法/模型的复杂度

Params: 指模型训练中需要训练的总参数数

> Note:
>
> 1. params 只与定义的网络结构有关, 与 forward 的任何操作无关, 而 FLOPs 和不同层运算结构有关, 如果 forward 时在同一层多次运算, FLOPS 不会增加
> 2. 模型大小约为参数量的 4 倍
> 3. 一个卷积层 converlution layer = `h * w * c * n`(c = input channel, n = output channel), output feature map = `H' * W'`
>
>     - `params = n * (h * w * c + 1)`
>     - FLOPS = `H' * W' * n * (h * w * c + 1)`, 即 FLOPS = `H' * W' * params`

MAC: memory access cost, 内存访问成本

e.g.

```py
from torchstat import stat
from torchvision.models import resnet50
model = resnet50()
stat(model, (3, 224, 224))
```

@see: https://www.cvmart.net/community/detail/5746

# image processing

**图像处理:**

-   空间域处理

    -   点运算
        -   HE, CLAHE
    -   形态学运算
        -   膨胀, 腐蚀
    -   临域运算
        -   卷积, 金字塔

-   频率域处理

    -   傅里叶变化
    -   小波变换

---

点运算最基本的就是统计 RGB 图片的 color histogram (直方图):

-   对图片数据/特征分布的一种统计

    -   灰度, 颜色
    -   梯度/边缘, 形状, 纹理
    -   局部特征点, 视觉词汇

-   区间/数据空间 (bin) 量化
    -   具有一定的统计或物理意义
    -   一种数据或特征的代表
    -   需要预定义或基于数据进行学习
    -   数值是一种统计量: 概率, 频数

用自适应直方图均衡 (AHE) 算法通过局部区域进行直方图均衡:

-   移动模板在原始图片上按照特定步长华东
-   每次移动后, 模板区域内作直方图均衡, 映射后的结果赋值给模板区域内所有点
-   每个点会有多次赋值, 最终的取值为这些赋值的均值

CLAHE 算法是一种非常经典的直方图均衡化算法: Contrast Limited Adaptive Histogram Equalization, 目的就是 image enhancement, 一般就是 低对比度 (low contrast) -> 对比度拉伸
(contrast stretching) -> 直方图均衡 (histogram equalization)

# depthwise separable convolution vs pointwise separable convolution

dw: depthwise separable convolution

pw: pointwise separable convolution

dw 就是 深度可分离卷积, 即逐通道卷积, 一个 3 通道的图像输入, 对于每一个像素, 就有 pixel _ pixel _ channel 的卷积核, 而 dw 经过一次卷积运算, 完全在二维平面内进行, 卷积核的数量和上一层的通道数相同, 所以 3channel 就只会输出 3 个 feature map

Depthwise Convolution 完成后的 Feature map 数量与输入层的通道数相同，无法扩展 Feature map。而且这种运算对输入层的每个通道独立进行卷积运算，没有有效的利用不同通道在相同空间位置上的 feature 信息。因此需要 Pointwise Convolution 来将这些 Feature map 进行组合生成新的 Feature map

@see: https://zhuanlan.zhihu.com/p/80041030

# momentum

momentum 超参数常用在权重更新的时候, 目的是得到全局最优解, 引入动量, 在某时刻的梯度与历史时刻梯度方向相似时, 加强该趋势, 反之, 若某时刻的梯度与历史时刻的梯度方向不同, 则减弱, 前者能够加速收敛, 后者能够减小摆动

`w = w- lr * dw`

`v = mu * v - lr * dw`, `w = w + v` v 初始化为 0, mu 常见设定为 0.9

@see: https://murphypei.github.io/blog/2018/12/dl-momentum
