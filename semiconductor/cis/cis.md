# CMOS

CMOS (Complementary Metal-Oxide-Semiconductor), 互补金属氧化物半导体, 是一种集成电路制造技术, 也是一种常见的逻辑家族, 在数字集成电路中, CMOS 技术被广泛应用于制造处理器、存储器、传感器、逻辑门等各种电子设备

# 逻辑家族

在数字电路设计中, 逻辑家族指的是一组具有相似逻辑特性和电气特性的集成电路

常见的逻辑家族:

1. TTL (Transistor-Transistor Logic): 使用双极型晶体管构建的逻辑家族, 速度较快, 但功耗较高

2. CMOS: 使用互补金属氧化物半导体技术构建的逻辑家族, 功耗低, 集成度高

3. ECL (Emitter-Coupled Logic): 发射极耦合逻辑, 速度非常快, 但功耗高

4. RTL (Resistor-Transistor Logic): 电阻-双极型晶体管逻辑, 用于早期的数字电路设计

5. FPGA (Field-Programmable Gate Array): 可编程门阵列, 不是传统的逻辑家族, 但提供了可编程逻辑功能

SOC 芯片通常用于嵌入式系统、移动设备、智能家居等领域

# CIS

CIS (CMOS Image Sensor), 互补金属氧化物半导体图像传感器

是一种集成在单个芯片上的图像传感器, 用于将光学图像转换为电子信号, 是数字相机、手机摄像头和许多其他设备中常用的图像传感器类型之一

CIS 相对于传统的 CCD (电荩波耦合器件图像传感器) 具有许多优势, 包括低功耗、集成度高、成本低等

-   优点:

    -   低功耗: CMOS 技术本身具有低功耗特性, 使得 CIS 在移动设备等对功耗要求较高的应用中具有优势.

    -   集成度高: CMOS 技术能够实现高度集成, 使得 CIS 可以集成更多的功能, 如信号处理, 模拟数字转换等, 从而简化整个系统设计.

    -   良好的噪声特性: CMOS 图像传感器通常具有较好的噪声控制能力, 有利于提高图像质量.

    -   成本较低: 相对于其他图像传感器制造技术, CMOS 图像传感器的制造成本较低.

-   缺点:

    -   灵敏度相对较低: 与一些专用图像传感器相比, CMOS 图像传感器的灵敏度可能较低.

    -   动态范围受限: CMOS 图像传感器的动态范围可能受到一定限制, 这可能会在某些高要求的应用中受到影响.

-   应用场景:

    -   消费类电子产品: 如智能手机, 平板电脑, 数码相机等, 由于 CIS 具有低功耗, 集成度高等优势, 被广泛应用于这些产品中.

    -   安防监控: CIS 在安防监控领域也有广泛应用, 可用于监控摄像头, 视频会议设备等.

    -   医疗影像: CMOS 图像传感器在医疗影像设备中也有应用, 如 X 射线成像, 内窥镜等.

专用图像传感器通常指针对特定应用场景而设计的图像传感器, 例如专门用于低光条件下拍摄的低照度传感器或用于高动态范围场景的 HDR (高动态范围) 传感器等.这些专用传感器在特定方面通常具有比 CIS 更高的性能, 如更高的灵敏度、更广泛的动态范围等.

在动态范围受限方面, 动态范围是指图像传感器能够捕获的亮度范围, 即从最暗到最亮的范围. 动态范围较大的传感器能够同时捕获细节丰富的阴影和亮部, 产生更具视觉吸引力和信息丰富度的图像. 而动态范围受限的 CMOS 图像传感器可能无法在同一图像中准确捕获极暗和极亮的细节, 导致图像在这些区域失真或丢失细节.

这种限制可能会在需要对比度较高的场景中产生影响, 如在拍摄高对比度场景 (同时包含非常明亮和非常暗的区域) 时. 在这种情况下, 动态范围受限的 CMOS 图像传感器可能无法准确捕获整个场景的细节, 导致亮部过曝或暗部细节丢失, 从而影响图像质量和信息的完整性.

因此, 对于一些对图像质量要求较高、需要捕获广泛亮度范围的应用, 如专业摄影、广告拍摄、医学影像等领域, 动态范围受限的 CMOS 图像传感器可能无法满足需求, 因为这些应用对图像细节和色彩准确性有较高要求. 在这些情况下, 专用图像传感器可能更适合, 因为它们通常具有更广泛的动态范围和更高的灵敏度, 能够更好地满足这些高要求的应用场景.

## CIS 原理

1. 光信号捕捉: 传感器表面的微小像素阵列捕捉进入镜头的光线. 每个像素对应于影像中的一个点.
2. 光电转换: 当光线击中像素时, 它会被转换成电子. 这一过程通过光电效应实现, 是数字影像的基础.
3. 信号放大和转换: 捕捉到的电子信号随后被放大并转换为数字形式, 以便于存储和处理.

## CIS vs logic

-   DIFF

    -   CIS 制程中 IMP 步骤离子注入用于调节感光元件的电性能
    -   Logic chip 制程中 IMP 步骤离子注入步骤可能不常见, 因为焦点是在电路逻辑功能上

-   TF

    -   CIS 制程中 CVD 步骤用于沉积薄膜在像素结构和感光元件上
    -   Logic chip 制程中 CVD 步骤用于沉积多层金属导线, 绝缘层等
    -   CIS 制程中 CMP 步骤用于平整化像素结构和感光元件
    -   Logic chip 制程中 CMP 步骤用于凭证复杂的电路结构

-   LITHO

    -   CIS 制程中 LITHO 步骤主要用于定义像素结构, 感光元件的形状
    -   Logic chip 制程中 LITHO 步骤更不服, 用于定义大量逻辑门, 存储单元等复杂电路结构

-   ETCH

    -   CIS 制程中 ETCH 步骤用于去除不需要的材料, 以形成稳定结构
    -   Logic chip 制程中 ETCH 步骤设计更复杂的结构, 如多层金属线路的刻蚀

# SOC

SOC (System-on-chip), 是一种集成了多个功能模块或组件的芯片, 包括处理器核心、内存、输入/输出接口、通信模块等, 以实现完整的系统功能

edge ai + CIS 某种程度上可以被称为 SOC

e.g. CIS + ASIC (Application-Specific Integrated Circuit) + NN (Neural Network); CIS + AI + MCU (Microcontroller Unit)

CIS 用于捕获图像数据, 将光学信号转换为数字图像

ASIC 是专门为特定应用定制设计的集成电路, 可以实现高度定制化的功能, 在结合 CIS 和 ASIC 时, ASIC 可以用于处理 CIS 捕获的图像数据, 进行特定的图像处理、分析和决策, ASIC 可以根据具体的应用需求, 设计和优化特定的图像处理算法和功能模块, 以提高系统性能和效率

将神经网络集成到 CIS 和 ASIC 系统中, 可以实现智能图像处理和决策能力, 例如目标检测、图像识别、实时跟踪等功能, 可以通过学习和训练识别图像中的模式和特征, 从而使系统具备智能决策能力

MCU vs ASIC

1. 设计和用途

    - MCU 是一种集成了处理器核心、存储器、输入/输出接口和定时器等功能的单芯片微处理器, 通常用于控制嵌入式系统中的各种设备和执行特定任务, 如传感器数据采集、控制执行等
    - ASIC 是一种专门定制的集成电路, 根据特定应用的需求进行设计和制造. ASIC 的设计是为了在特定应用中实现特定功能或性能, 通常用于高性能计算、专用加速、图像处理等领域

2. 灵活性

    - MCU 通常具有更高的灵活性, 可以编程执行各种不同的任务和功能, 适用于广泛的应用领域
    - ASIC 是为特定应用而设计的, 功能固定, 不具备灵活性, 但在特定任务上通常具有更高的性能和效率

3. 成本

    - 通常来说, ASIC 的设计和制造成本较高, 适用于大量生产并需要高性能和定制化功能的场景
    - MCU 的成本相对较低, 适用于中小规模生产和需要较高灵活性的应用

4. 功耗

    - ASIC 通常设计为在特定任务上实现高效能力, 因此在功耗方面可以更加优化
    - MCU 通常设计为在低功耗下运行, 适用于需要长时间运行的嵌入式系统

光谱 (Spectrum) vs RGB vs 灰度图 (Grayscale image)

-   Spectrum 是指整个可见光谱范围内的颜色表示, 涵盖了从红色到紫色的所有颜色, 每种颜色对应着不同的波长, 是一种更广泛的颜色表示方式, 而不仅仅局限于 RGB 颜色空间
-   RGBRGB 是一种颜色模型, 在数字图像处理中, 每个像素的颜色可以通过 RGB 值来表示, 每个通道的值范围通常是 0 到 255
-   Grayscale image 是一种只包含灰度信息的图像, 没有彩色信息. 即在灰度图中, 每个像素的值表示灰度级别, 通常在 0 (黑色) 到 255 (白色) 之间. 灰度图是一种单通道图像, 与 RGB 图像相比, 它只包含亮度信息, 而不包含颜色信息

可以认为, 在 CV 中, RGB image -> Grayscal image, 三通道 -> 单通道, 在处理速度和存储方面更高效, 降低计算复杂度, 加快训练速度; 光谱概念更多与光学和传感器技术有关,例如光谱分析、光谱成像等领域, 即 CV 任务一般不需要光谱数据

对于嵌入式系统 (如 MCU), 彩色图像需要更多的计算资源和存储空间, 所以要用到 WLO (Wafer Level Optic) 晶圆光学, 已知的是把一篇 8 吋镜片直接叠在 wafer 上, 相当于两片重叠, 然后获取图像数据的时候每次读 4 列 (设计为类似于麦克风阵列的光谱检测阵列), 只有 288k (还包含所有固件、软件, 所以 320 x 320 图片数据 远低于这个值), 而且其中 144k 使里面 operation 用的, 也就是没有大算力 (解决隐私问题和联网问题), 但是单芯片能做 AI 任务

诺磊 NB100X 系列中的 2×3 阵列有 6 颗小芯片(18mm), 即 6 个 SOC 并行运算, 就是 6 颗一般算力加在一起用, 让他可以做海量的图像数据并行处理, 且扩展性很高, 用的模块式 IC 涉及, 功耗可控 (随时关闭不需要用的芯片), 不怕坏 (6 颗中有坏了的, 也可以用另一颗替代???但是不是一颗做一个任务吗), 系列中还有 2x2 阵列, 3x3 阵列, 4x1 阵列 (NB1001, 功耗仅有 0.3W)

1. 还可以做成光谱的矩阵. 人是两个眼睛的, 所以可以看到立体, 四个眼睛看的立体更强烈, 这是用在光谱上, 所以说这一个里面可以做不同镜头的角度
2. 可以做不同的光谱
3. 应用很多, 医疗健康 (健康追踪尿液检查/非侵入式健康检查/医疗机器功能扩充), 智能生态 (手机功能扩充,/ADAS 自动驾驶功能扩充/珠宝金矿石高订材质坚定), 环保安全 (环境监督及管理/无人机/食品安全)

spectrum (光谱) 可以用在哪里, 可以用在调光、摄像头图像增强、增强现实等方面, 单颗的放在 VR 里面, 就是我们实际上放在眼镜里面, 追踪你眼球的移动. 这是眨眼, 再看另外一边. 不管眼球转多快, 都会跟得上. 这里面没有什么所谓的高算力, 对 IC 来说是很简单的事

@see: https://www.bilibili.com/video/BV1e24y1C7Dx/?vd_source=b8cb8db44d97eb71e6c4a2b35f279324

@see: https://www.sohu.com/a/732358180_120159035

# CIS 架构

CMOS IMAGE SENSOR 由大量的像素阵列组成, 每个像素都包含光感受器和信号处理电路

1. 像素阵列: CMOS 图像传感器由成千上万个像素组成的阵列构成. 每个像素负责捕获光线并将其转换为电信号
2. 光感受器: 每个像素都包含一个光感受器, 通常是光电二极管 (photodiode) . 光感受器负责将光信号转换为电荷
3. 信号处理电路: 每个像素还包含信号处理电路, 用于处理从光感受器中生成的电荷. 这些电路包括放大器、模数转换器 (ADC/Analog-to-Digital Converter) 等
4. 列选择器: 在像素阵列的顶部有一组列选择器, 用于选择要读取的像素行
5. 行选择器: 在像素阵列的侧面有一组行选择器, 用于选择要读取的像素列
6. 控制逻辑: CMOS 图像传感器还包含控制逻辑, 用于协调像素的操作、信号的传输以及整体的工作
7. 输出引脚: 最终, 通过输出引脚, 传感器将处理后的图像数据传输给外部设备, 如处理器或存储器

光电二极管将 RGB 光的强度 转化为 电流的大小, 输出为 电压的大小

图像 -> 电信号过程: 每个像素点 RGB 强度 -> 光电二极管通过电路转化一定比例的电流

CMOS 图像传感器中, 一般每个像素通常包含一个光电二极管 (Photodiode), 用于捕获光信号并将其转换为电荷, 这些电荷随后通过信号处理电路进行放大和数字化, 最终形成图像数据

一般包含带 vdd 的电路越多, 对图像的分辨率越高, 画质越精细

一般传感器尺寸越大, 各感光像素点的尺寸越大, 电路面积越大, 受干扰性越强, 即使在阴暗处 (光强度区分不明显处) 也能很好的辨别颜色, 简而言之就是尺寸越大, 性能越好

图像传感器的基本单位: 像素

一般是光信号 -> 片上微透镜阵列 (On-Chip Microlens Array) -> 片上彩色滤波器阵列 (On-Chip Color Filter Array) -> 介质材料 (Dielectric Material) -> 遮光层 (Light Sheild) -> 二极管 (Photodiode) (n+ -> P) -> 衬底

前照式 CMOS: 光线 -> microlens (微透镜) -> color filter (颜色过滤器) -> metal wiring (金属排线) -> substrate (光电二极管)

背照式 CMOS: 光线 -> microlens (微透镜) -> color filter (颜色过滤器) -> substrate (光电二极管) -> metal wiring (金属排线)

由于传统 CMOS 传感器的金属布线在光电二极管上面, 因此会遮挡住一部分入射的光线, 减少光通量, 还会造成噪声, 所以目前大部分 CMOS 传感器均采用背照式传感器, BSI (Back side illumination) 技术来构建像素, 光线无需穿过金属排线, 光线几乎没有阻挡和干扰的就到达了光电二极管, 光线利用率高

CMOS 填充系数: 填充因子: 像素中感光区域面积比像素面积比率

`FF = (Apd / Apix) x 100%` Apd 指的是传感器横截面的 Aperture 光圈, Apix 指的是传感器横截面的 Pixel

非堆栈式 CMOS vs 堆栈式 CMOS: 像素区域和处理电路区域在一片 65nm 晶体管门极长度上, 而堆栈式是一片 65nm 的像素区域, 下面放一片 45nm 的处理电路区域, 效率更高, 处理电路上的晶体管数量能翻倍, 像素处理越快(nm 一般指的是半导体制造工艺技术的节点, 表示晶体管的最小特征尺寸, 即晶体管的门极长度, 而不是指硅片、批次或芯片的厚度)

堆栈式 CIS 结构包括像素层、信号处理层和封装层, 这些层可以垂直堆叠在一起, 从而实现更高的像素密度和更好的性能, 堆栈式结构可以使 CIS 在相同尺寸下具有更多的像素, 同时还能够减少像素间的电路长度, 提高信号处理效率, 从而提高图像质量和传感器的整体性能

还有一种填充系数是与微透镜的覆盖率, microlens 主要是汇聚光用的, 定义为微透镜覆盖像素的面积 / 像素的集合面积, 即透镜是否可以将整个像素的面积全部覆盖, 和 CMOS 填充系数一样, 与像素面积正相关

CMOS 传感器成像质量不仅受到 CMOS 填充系数的影响, 同时还会受到微透镜覆盖率的影响

# 封装

bump 封装 硅通孔/线连接

CIS 通常用 bump 封装, 其中芯片的连接引脚通过小球 (bump) 连接到封装基板或其他器件上

这种封装方式可以提供良好的电连接和热管理, 并且可以在封装过程中实现高密度的引脚布局, 适合于集成度高、尺寸小的器件, 比如 CMOS 图像传感器

# CIS vs bayesian brain

CIS 和贝叶斯大脑有一定关联, 尤其是在模仿生物视觉系统方面

1. 感知和处理方式: 贝叶斯大脑是指大脑使用贝叶斯推断 (Bayesian inference) 来处理感知信息的方式. 这种方法涉及将先验知识与新观察到的数据相结合, 从而更新对世界的认知. 类似地, CIS 通过感知光信号并使用电子电路处理这些信号, 类似于生物视觉系统感知光线并将其转换为神经信号.

2. 模式识别: 贝叶斯方法在模式识别和感知中发挥重要作用. CIS 也在图像处理中起着类似的作用, 识别图像中的模式和特征.

3. 生物启发: CIS 的设计受到生物视觉系统的启发, 尝试模仿大脑如何处理视觉信息. 这种生物启发设计可以帮助改进 CIS 的性能和效率.

但它们是两个不同的概念, 一个是关于图像传感器的技术, 另一个是关于大脑如何处理信息的理论

在人工智能和机器学习领域, 贝叶斯方法也被广泛应用于模式识别、决策制定和概率推断等方面

# Whatever Next? Predictive Brains, Situated Agents, and the Future of Cognitive Science.

@see: https://www.researchgate.net/publication/236689333_Whatever_Next_Predictive_Brains_Situated_Agents_and_the_Future_of_Cognitive_Science

Brains, it has recently been argued, are essentially prediction machines

They are bundles of cells that support perception and action by constantly attempting to match incoming sensory inputs with top-down expectations or predictions

This is achieved using a hierarchical generative model that aims to minimize prediction error within a bidirectional cascade of cortical processing

这个 bidirectional cascade 就很像 CNN 的前向传播+反向传播, 对卷积核之间的错误率进行 weight 的调整, 最小化预测值和真实值之间的 error, 感觉可以认为是脑信号 -> Encoder -> Decoder -> CNN, 可以用功能性 MRI 机器 (Magnetic resonance imaging/磁共振成像) 测量的视觉皮层脑信号活动, 把看到图像后的大脑活动转化为像素, 产生灰度图用于训练, 也就是借助深度学习强大的表征能力从局部开始构建人类大脑的模型

2016 Neural Encoding and Decoding with Deep Learning for Dynamic Natural Vision 图 1. 使用深度学习模型进行神经编码和解码的过程. 当一个人在看一部视频的时候 (a) , 信息通过级联的大脑皮质区 (b) 处理, 生成 fMRI 活动模式 (c) . 我们在这里使用一个深度卷积神经网络对皮质视觉处理过程建模 (d) . 这个模型将影片的每一帧转换为多个层的特征, 从视觉空间 (第 1 层) 的方向和颜色, 到语义空间 (第 8 层) 的目标类别. 编码过程中, 网络对视频中的视觉刺激和每一个皮质位置的反应之间的非线性关系进行建模. 解码过程中, 将不同位置的皮质应答组合以估算第 1 层和第 8 层的特征输出. 前者是一个解卷积过程 (deconvolved) , 用于重建视频的每一帧, 而后者输出语义描述.

@see: https://arxiv.org/ftp/arxiv/papers/1608/1608.03425.pdf

Intrinsic brain activity is not random, instead, it is spatiotemporally organised into reproducible, topologically meaningful patterns

@see: https://www.nature.com/articles/s41467-022-34410-6

## 1.1 From Helmholtz to Action-Oriented Predictive Processing

就有个小总结: The whole function of the brain is summed up in: error correction, 证明大脑如果在 CNN 中就是对训练的梯度反向传播最小化预测值和真实值之间的 error

## 1.3 Dynamic Predictive Coding by the Retina 视网膜动态预测编码

就是 Encoder, 将图像进入眼睛编码成神经信号,

What this means, in each case, is that neural circuits predict, on the basis of local image characteristics, the likely image characteristics of nearby spots in space and time (basically, assuming that nearby spots will display similar image intensities) and subtract this predicted value from the actual value.

是否可以理解成就是感受野 比如 9x9 的图像, 通过 3x3 感受野从左上到右下扫描一遍, 然后会得到每个像素点的特征值 (1x1) 和临近像素矩阵的特征值 (3x3), 然后通过训练, 得到一个空间维度的 bias, 加权运算下一轮卷积时的特征提取? 但是已知的是可以从空间维度进行预测加权, 但是时间维度的怎么做? 时间维度在训练时只能有前序时间, 后序时间来自于什么? 换句话说, 后序时间节点得到的是对 9x9 图像中每轮矩阵平移的 bias, 还是对 1x1 特征值的预测?

“Ganglion cells signal not the raw visual image but the departures from the predictable structure, under the assumption of spatial and temporal uniformity"

这段从宏观角度将很合理, 但是从已知的 CNN 角度来说无法去量化/产生公式, 因为如果输入图像本身就是个模糊的样本 (不知道是正样本还是负样本), 你如何通过训练网络计算真实值和预测值的差异? 除非你把这所谓的模糊的输入当成正样本? 或者说, 我是对比学习不要正样本负样本, 那问题是假设我 assume 了网络训练中产生的 `[0,1]` 跟眼睛看到的 (大脑猜想的) 不一样, 那该如何处理这一 batch 的结果呢? 是忽略他认为是 bias 还是把他作为一个参数传入下一个 epoch, 那这样网络训练中多次出现这种偏移大的参数就会导致网络无法收敛

Hosoya et al confirmed their hypothesis: within a space of several seconds about 50% of the ganglion cells altered their behaviours to keep step with the changing image statistics of the varying environments. A mechanism was then proposed and tested using a simple feedforward neural network that performs a form of anti-Hebbian learning.

文中的意思是改变环境只有 50% 的神经细胞发生转变, 这还有个原因肯定是因为生物神经是有记忆的, 改变环境不可能让他全改变. 这里讲的 Anti-Hebbian learning 前向传播神经网络本质其实指的应该是, 对于输入的样本而言, 样本间差异性越大, 训练难度越大, 才能有更好的泛化能力, 但这个泛化能力的增强也取决于初始基准样本的情况和初始复杂样本的情况. 偏差太大欠拟合, 偏差太小过拟合.

就原始的 NN 学习权重修正值就分成: 权值修正可以分为 Hebbian, anti-Hebbian, 和 non-Hebbian 三种情况:

-   Hebbian 方式会增强正相关的突触前和突触后的信号, 而减弱负相关的 突触前和突触后的信号
-   anti-Hebbian 方式则与 Hebbian 相反
-   而 non-Hebbian 则不使用 Hebbian 方式

到这里其实就是宏观的前向反馈网络来实现 error-correction, 最终输出与隐层和输出层的神经元都是相关, 而权值的修正 是通过当前输出自适应目标输出来实现的

那这时候就要引入 supervised learning with a teacher, 就也是一种自适应 error-correction 方法, 对于分类/识别问题, 输入数据不仅包含 feature, 还包含对应的 label, 目标函数就是让 NN 的输出与 Teacher 的结果差异最小, 即均方误差最小, 随后 student 就可以不需要 teacher 的情况下对新数据进行训练, 做分类/识别任务

但也可以 learning without a teacher:

1. unsupervised learning 就是 NN 尝试着对自己的隐含的统计规律, 比如用一个合适的线形模型来区分输入数据, Competitive Learning 和 Hebbian Learning 都算是非监督型学习, 经过非监督学习之后, NN 可以对输入数据进行特征编码
2. reinforcement learning 用到了 critic, 从环境中获取原始信号转换为更高质量的启发式的增强信号. 系统从延迟的 reinforcement 中学习, 也就让系统察觉到增强学习中时序的状态向量, 最终目标是为了最小化一个 cost-to-go function, 它的任一个任务是 discover the actions determing the best overall behavior of the system, 和动态规划算法非常相似

Filtering: 一个 Filter 可以从包含噪声的观察样本中获取一些有趣的性质, 可以用于 Filtering,Smoothing, Prediction, etc.

Adaptation: 在一个稳定的环境中, 一个 NN 经过学习之后, 就可以保持 weight 不变了, 并将之应用在新数据上. 但在实际应用中, 环境是会随着时间而改变的, 这就需要我们不断 更新我们的 NN 模型, 也就是要根据环境变化(输入数据的变化)来改变 weight, 这个过程称为 Adaptation. 在 Adaptation 中, 线性的 adaptation 方法是最简单的, 然而更多的 可能是使用非线性的 filter. 所以实际应用的时候难点在于在何时重新训练 NN 是适当的.

@see: https://ibillxia.github.io/blog/2013/03/27/learning-process-of-neural-networks/

## 1.4 Another Illustration: Binocular Rivalry

这部分其实就是将两个单独网络, 对比学习/对抗学习, 增大三维空间内 layer 的关系

Notice, though, what this means in the context of the predictive coding cascade. Topdown
signals will explain away (by predicting) only those elements of the driving signal
that conform to (and hence are predicted by) the current winning hypothesis. In the
binocular rivalry case, however, the driving (bottom-up) signals contain information that
suggests two distinct, and incompatible, states of the visually presented world – e.g. face at location X/house at location X.

这其实还是在说前向传播, 反向传播, 然后 error-correction, 不管是梯度下降还是其他反向传播算法, 更新前向过程中的权重, 达到对不同对象 (像素区域) 真实值和预测值得到区分, 特征图中归属于 label 的概率要明确, 才能把人脸和背景房子区分开

## 1.5 Action-Oriented Predictive Processing

就是个宏观的 AOPP 理论框架, 旨在解释大脑如何通过动作和感知来交互地构建对世界的预测, 可能的应用:

1. 增强学习: 使其更好地理解动作与环境之间的关系, 通过结合动作和感知的预测, 模型可以更有效地学习如何采取行动来实现预期的结果
2. 动态环境建模: 模型不仅预测感知输入的变化, 还预测由动作引起的环境变化, 有助于深度学习模型更好地适应不断变化的环境
3. 探索与利用: 指导深度学习模型在探索和利用之间取得平衡, 通过将动作和感知整合到预测过程中, 模型可以更好地决定何时进行探索以获得更多信息, 何时利用已有知识来实现目标
4. 模仿生物系统: 受到生物系统中感知与动作之间相互作用的启发, 帮助深度学习模型更好地模仿生物系统中的学习和行为

In motor systems error signals self-suppress, not through neuronally mediated
effects, but by eliciting movements that change bottom-up proprioceptive and
sensory input. This unifying perspective on perception and action suggests that
action is both perceived and caused by its perception”

就意思是对大脑而言, 预测先于感知, 分层预测处理, 再感知决策响应, 本质上就是 backbone 主干网络用到了预训练模型的参数, 动态改变了训练参数, 影响了最终推理结果

## 1.6 The Free Energy Formulation

自由能原理 Free energy principle 依然是一个宏观理论框架, 并且到 2018 年还是说不能被证伪, 也不能被证明, 说白了就是不能公式化 (原文要付钱 TMD, 典型废话自说自话, 动手能力为 0)

@see: https://wiki.swarma.org/index.php/%E8%87%AA%E7%94%B1%E8%83%BD%E5%8E%9F%E7%90%86#cite_note-wired20181112-3

自由能在 CNN 中应用:

1. 变分推断: Variational Inference, 是一种用于近似推断概率模型的技术, 通过最小化自由能, 可以实现对潜在变量的后验分布进行有效估计, 从而提高模型的推断能力
2. 生成模型: 用于训练生成模型, 如变分自编码器 (Variational Autoencoders, VAE), 通过最小化自由能, 使生成模型学习数据的潜在表示, 并生成符合数据分布的新样本
3. 主动学习: 可以帮助指导主动学习过程 (Active Learning), 模型可以通过选择最能减少自由能的数据样本来进行主动学习, 从而实现更高效的数据利用和模型改进
4. 探索与利用的平衡: 指导模型在探索和利用之间取得平衡, 通过最小化自由能, 模型可以同时考虑对环境的准确表示和对未知信息的探索, 从而实现更好的决策和行为

## 2.2 Encoding, Inference, and the ‘Bayesian Brain’

总而言之, CNN 跟这部分仅有点关系, 文中讲的 encode probability density distributions 编码概率密度分布跟 CNN 没关系纯粹就是个宏观理论, 但是 potential integration of Bayesian principles 和 CNN 的分层处理信息, 从概率中提取信息, 处理不确定性 (改进决策), 得到结果, 这部分和 CNN 有一定的一致性

## 2.3 The Delicate Dance Between Top-Down and Bottom-Up

不用总结了, 用词口语化用词不是学术论文用词, reasearchgate 也就人文社科可以放点文章上去反正没审查, 本质就不是个学术期刊是个学术交流社交社区, 跟 linkedin 一个性质

## 3.1 The Neural Evidence

Another example is the Bayesian treatment of color perception (see Brainerd (2009))
which again accounts for various known effects (here, color constancies and some color
illusions) in terms of optimal cue combination.

就这段话有点用, 引入 the Bayesian treatment of color perception 一个古老原始的机器学习可能会用到的贝叶斯概率 (先验概率, 条件概率, 后验概率), 它本身条件概率就很难得到, 在原始机器学习的时候都是定死的? 跟 CNN 这种深度学习无关系, 不知道高斯模糊图像增强的时候算不算? 但是高斯模糊并不是一种优秀的图像增强方法, 主要靠其他图像预处理方法结合, 产生复杂的图像增强才有点用 (增加训练难度).

@see: https://juejin.cn/post/7321777867604262939

常见用到贝叶斯概率的模型:

1. 贝叶斯线性回归: 在传统的线性回归中, 通常使用最小二乘法来估计模型参数. 而在贝叶斯线性回归中, 将参数视为随机变量, 并使用贝叶斯推断来估计参数的后验分布, 以及对新数据点的预测分布.

2. 朴素贝叶斯分类器: 朴素贝叶斯分类器是一种基于贝叶斯定理和特征条件独立性假设的分类器. 它通过计算给定类别的特征向量的条件概率来进行分类, 进而计算后验概率来确定最可能的类别.

3. 贝叶斯网络: 贝叶斯网络是一种用于建模变量之间概率依赖关系的概率图模型. 它使用有向无环图来表示变量之间的依赖关系, 并通过贝叶斯定理来推断变量之间的概率分布.

4. 高斯过程: 高斯过程是一种非参数贝叶斯方法, 用于建模连续函数的分布. 它通过定义一个先验分布 (通常是高斯分布) 来估计函数的分布, 并根据观测数据更新后验分布.

5. 变分推断: 变分推断是一种用于近似推断复杂概率模型后验分布的方法. 它通过最大化一个辅助目标函数来逼近真实的后验分布, 从而实现对参数和隐变量的推断.

以朴素贝叶斯分类器为例,

-   朴素贝叶斯分类器:

    -   模型类型: 朴素贝叶斯分类器是一种基于贝叶斯定理和特征条件独立性假设的简单概率分类器.
    -   参数估计: 通过计算特征向量的条件概率来进行分类，假设特征之间是独立的.
    -   适用性: 适用于文本分类、垃圾邮件过滤等简单分类任务，特别是在特征维度较高、样本量较小的情况下表现良好.

-   深度学习模型:

    -   模型结构: 这些深度学习模型通常是由深度神经网络构建而成，具有复杂的结构和多层次的特征提取能力.
    -   参数估计: 通过大量数据的反向传播和梯度下降等优化算法来学习模型参数，以最大化预测准确性.
    -   适用性: 适用于图像分割 (DeepLabv3, UNet, etc.) 、目标检测 (YOLO) 、轻量级模型设计 (MobileNetv2) 、自监督学习 (MoCo、BYOL) 和对比学习 (SimCLR v2) 等领域.

# 贝叶斯概率理论应用于 CIS

## 宏观应用

1. 噪声建模和去噪

    - 噪声建模: 贝叶斯概率理论可以帮助建模不同类型的噪声, 如暗电流噪声, 读出噪声, 固定模式噪声等. 这些噪声源会影响图像质量, 了解其统计特性对于有效去除噪声至关重要
    - 去噪算法: 基于贝叶斯概率理论，可以开发适用于 CIS 图像传感器的各种去噪算法，例如基于贝叶斯推断的去噪方法，通过对噪声进行建模和估计，实现更准确的噪声消除，提高图像质量

2. 图像重建和增强

    - 贝叶斯推断: 贝叶斯推断是一种用于从观测数据中推断未知参数的统计方法. 在图像重建和增强中，贝叶斯推断可以帮助恢复缺失的信息，提高图像的质量和清晰度
    - 超分辨率算法: 基于贝叶斯概率理论的图像超分辨率算法可以利用图像中的先验信息和统计特性，从低分辨率图像中恢复出高分辨率图像，提高图像的细节和清晰度

3. 目标检测和跟踪

    - 贝叶斯目标检测: 贝叶斯概率理论可用于设计目标检测算法，通过建模目标和背景的概率分布，实现对图像中目标的准确检测
    - 目标跟踪: 基于贝叶斯滤波器 (如卡尔曼滤波器或粒子滤波器) 的目标跟踪算法可以结合传感器测量和运动模型，实现对目标在图像序列中的连续跟踪

4. 图像分割和特征提取

    - 贝叶斯图像分割: 贝叶斯概率理论可用于图像分割，将图像分成不同的区域或对象. 通过建模像素之间的关系和先验知识，可以实现准确的图像分割
    - 特征提取: 贝叶斯方法可以帮助提取图像中的关键特征，如边缘、纹理等，为后续的图像识别和分析提供更准确的信息

5. 动态范围优化

    - 贝叶斯动态范围优化: 通过贝叶斯方法，可以优化图像传感器的动态范围，使其能够更好地适应不同亮度条件下的图像采集，提高图像的对比度和细节表现
    - 参数调整: 基于贝叶斯概率理论，可以对图像传感器的参数进行优化调整，以最大化图像的信息捕获和质量

## 具体实现思路

1. 模型训练和转换

    - 使用 PyTorch 等深度学习框架训练适用于 CMOS 图像传感器的贝叶斯概率模型, 例如用于去噪、图像重建、目标检测等任务的模型
    - 将训练好的模型转换为 ONNX 格式或 PyTorch 的 PTH 格式，以便在不同平台上部署和使用

2. 模型嵌入到芯片上

    - 将训练好的模型嵌入到 wafer 上可能需要专门的硬件支持和设计. 这可能涉及到硬件加速器、专用芯片设计等
    - 目前将深度学习模型直接嵌入到芯片上的技术还处于探索阶段，需要深入的硬件和软件集成工作

3. 堆栈式 CMOS 工艺

    - 分图像传感器层和逻辑处理层, 每层是一个 wafer, 图像 wafer 接收图像, 逻辑 wafer 可以用于处理图像传感器采集的数据，实现不同的图像处理功能，包括噪声去除、图像重建、目标检测等

对像素层 wafer 和逻辑层 wafer 有两种选择:

1. die 级数据汇聚: 每个 die 上的图像处理器会处理部分图像数据，然后将处理后的部分数据传输给相应的逻辑层 wafer 中的处理器. 逻辑层 wafer 上的处理器负责汇聚和整合来自不同 die 的数据，最终生成完整的图像数据. 这种方式可以提高系统的并行处理能力，但需要在逻辑层 wafer 上实现复杂的数据汇聚逻辑.
2. 完整图像传输: 在图像层 wafer 上将整个图像处理完毕后，将完整的图像数据传输给逻辑层 wafer. 这样逻辑层 wafer 上的处理器可以直接处理完整的图像数据，而无需进行数据的汇聚和整合. 这种方式简化了逻辑层 wafer 的设计，但可能会增加数据传输的复杂性和延迟.

但是由于逻辑层 wafer 可能还要做其他任务:

1. 信号处理和数据传输: 逻辑 wafer 层可能需要进行信号处理和数据传输的任务，包括处理来自图像层 wafer 的数据传输、数据解码、编码等工作
2. 控制逻辑: 逻辑 wafer 层可能包含控制逻辑，用于管理整个系统的运行和协调不同部分之间的通信和操作
3. 功耗管理: 逻辑 wafer 层可能需要管理系统的功耗，包括优化功耗消耗、调整电源供应等功耗管理任务
4. 存储和缓存: 逻辑 wafer 层可能包含存储单元和缓存，用于存储处理过的数据或临时数据，以提高数据访问速度和系统性能
5. 错误检测和纠正: 逻辑 wafer 层可能需要实现错误检测和纠正功能，以确保系统的稳定性和可靠性
6. 通信接口: 逻辑 wafer 层可能包含通信接口，用于与其他系统或设备进行通信和数据交换

所以个人倾向 像素层 wafer 汇聚整张图像数据, 传给逻辑层 wafer

## 总结

这些都是传统机器学习模型, 实际要深度学习模型嵌入进逻辑 wafer 层, 需要的更多的是 IC 设计门电路如何接收训练好的模型文件

# 背照式 + TSV (硅通孔) + 堆栈式 CIS

究其原因, 主要是随着应用端对画面像素及其他性能需求的持续提升, 传感器也正逐步受限于 CIS 的面积与感光二极体的大小. 果仍采用单纯的背照式结构, 要提升 CIS 的画素就需要增大器件的尺寸, 但显然成本也会成倍增加, 仅仅为了提升画素这一个性能显得有些得不偿失

因此, 在不增大 CIS 尺寸的情况下, 厂商更偏好于通过提升 CIS 效率 (例如进光亮、光的消耗率等) 以及强化 CIS 以外的部分, 来达到强化整体的影像品质的效果. 但这种方式实际上也难以达到厂商的预期，大多数情况下还是会牺牲很多其他方面的性能，以换取某个单一性能水平的提升.

## 关键参数

1. 量子效率 (Quantum Efficiency)
2. 暂态暗杂讯 (Temporal Dark Noise)
3. 系统增益 (Overall System Gain)
4. 空间非均匀性 (DSNU, PRNU)
5. 信噪比 SNR (Signal-to-Noise Ratio)
6. 灵敏度阈值 (Absolute Sensitivity Threshold)
7. 线性度误差 (Linearity Error)
8. 饱和容量值 (Saturation Capacity)
9. 动态范围 (Dynamic Range)
10. CRA (Chief Ray Angle) 主光线角度

## SONY 三层堆栈式 CMOS

1. 第一层 - CIS (像素层):

    - 任务: 负责捕获光学信号并将其转换为电信号.
    - 功能: 像素层包括光敏元件和信号转换电路，用于在图像传感器上捕获图像并生成电信号. 可以把这一层做成两层设计，图像层和逻辑层可能会分别位于不同的 wafer 上，即图像层 wafer 和逻辑层 wafer 整合成像素层，以便更好地优化每个层级的工艺和材料选择.

2. 第二层 - DRAM:

    - 任务: 用于存储图像数据.
    - 功能: DRAM 层通常用于临时存储从像素层捕获的图像数据，以便后续处理和传输.

3. 第三层 - ISP (Image signal processing, 图像信号处理):

    - 任务: 负责对图像数据进行处理和优化.
    - 功能: ISP 层包含图像信号处理器，用于执行各种图像处理任务，如去噪、增强、压缩等，以提高图像质量和适应不同的应用需求.

@see: https://www.eet-china.com/news/201707140608.html

## OmniVision PureCel Plus-S 技术

具有高分辨率、低功耗和高动态范围等特点, 采用了先进的像素设计和图像处理算法，适用于各种应用领域

LFM (Light Field Modulation, 光场调制): 通过对光场进行调制，可以实现对图像的控制和处理, 在图像传感器领域，LFM 技术可以用于改善图像质量、增强对焦能力、实现景深控制等功能. LFM 技术的应用范围广泛，涵盖了摄影、医疗影像、安全监控等领域.

CFA (Color Filter Array, 彩色滤光阵列): 彩色滤光阵列是数字相机传感器上的一种排列方式，用于捕捉彩色图像. 常见的 CFA 包括 Bayer 滤光阵列和其他一些变种，它们通过在像素级别上使用不同颜色的滤光片来捕捉红、绿和蓝三个颜色通道的信息，从而生成彩色图像

DCG (Dark Current Generation, 暗电流生成): 暗电流是指在摄像头或传感器中，即使没有光线照射也会产生的电流. 暗电流的存在会导致图像中的噪声和暗点，影响图像质量. 因此，在 CIS 工艺技术中，管理和最小化暗电流生成是非常重要的，以确保图像质量和传感器性能.

BFCA (Binary Coded Full-Resolution Analog, 全分辨率模拟二进制编码): BCFA 是一种模拟信号处理技术，在 CMOS 图像传感器中用于对图像进行编码和处理的方法

DTI (Deep Trench Isolation, 深沟隔离): DTI 是一种在 CMOS 图像传感器中常用的隔离技术，用于在图像传感器中隔离不同像素之间的光电器件，以减少串扰和提高图像质量

CRA (Chief Ray Angle, 主光角): CRA 是光学设计中的一个参数，指的是从光学系统的主光轴射出的光线与光学元件表面的法线之间的夹角. 在 CMOS 图像传感器中，CRA 的优化可以帮助提高光学系统的性能和图像质量.

HDR (High Dynamic Range, 高动态范围): 指的是一种图像处理技术，通过合并不同曝光水平的图像来增加图像的动态范围，从而在亮部和暗部保留更多细节

LFM (Low Light Fusion): 即低光融合，是一种图像处理技术，用于在低光条件下提高图像质量和亮度

OmniVision 这个是

1. 堆栈式架构

    Traditional sensor -> 2L stacked die -> 3L stacked die sensor + analog + digital/AI

    是 split pixel and LFM + DCG + Different CFA + stacking + cybersecurity, 主要是在 smaller pixel size 上提高传感器的性能

2. BFCA (Bayer Color Filter Array, 彩色滤波器)

    通过 BFCA 显著提高了不同入射角度的光的采集宽容度，同时使设计更紧凑

3. DTI

    通过在硅片内的像素之间设置隔离来降低串扰，以获得更好的主光角 (CRA) 的容忍度

这三个技术和架构结合, 可以实现更小晶片尺寸, 更低功耗, 但性能却不打折扣. 获得了更优异的弱光性能、成像品质、动态范围, 搭载更多功能和算法, 例如 HALE (HDR 和 LFM 组合算法) 及网络安全功能, 这里 HALE 应该是 High Dynamic Range (HDR) and Low Light Fusion (LFM) Enhancement, 即 高动态范围 (HDR) 和低光融合 (LFM) 增强

@see: https://www.wecorp.com.cn/newsdetail.asp?newsid=1137

## Samsung ISOCELL 技术

旨在提供更高的像素性能、更低的噪声水平和更好的低光性能. ISOCELL 技术包括各种子技术，如 ISOCELL Plus、ISOCELL Bright、ISOCELL Fast 等

@see: https://semiconductor.samsung.com/cn/solutions/technology/ultra-high-resolution/

@see: https://semiconductor.samsung.com/cn/image-sensor/mobile-image-sensor/

@see: https://semiconductor.samsung.com/cn/image-sensor/

## ON Semiconductor XGS 技术

具有高分辨率、高速度和低功耗等特点. XGS 技术适用于工业、医疗和汽车等领域的高要求应用

## Canon Dual Pixel CMOS AF 技术

是一种专门用于相机的 CMOS 图像传感器技术，通过在像素级别实现双像素自动对焦，提供更快速、更准确的自动对焦性能

## 光焱科技 (Enlitech)

他是认为 microlens + on-chip color filter array + pixel array + CDS (Correlated Double Sampling) + Analog Singal Chain + ADC (Analog-to-Digital Converter) + ISP 整体属于 CMOS Image Sensor

@see: https://enlitechsy.com/%E5%85%88%E6%94%B6%E8%97%8F%E5%86%8D%E7%9C%8B%EF%BC%9A%E4%B8%80%E6%96%87%E5%B8%A6%E4%BD%A0%E4%BA%86%E8%A7%A3cis%E5%BD%B1%E5%83%8F%E4%BC%A0%E6%84%9F%E5%99%A8%E5%8D%81%E5%A4%A7%E5%85%B3%E9%94%AE/

SG-O 、SG-A 影像传感器晶圆测试仪两套完整商用级 CIS / ALS / Light-Sensor 测试仪. 除了针对晶片等级检测外，更可以结合探针台进行晶圆等级 CP 测试，提供企业研究人员高精度、迅速的量测解决方案

-   SG-A CIS Chip Level 图像传感器测试仪

    可提供最全面的 CMOS 图像传感器参数测试，如全光谱量子效率 QE 等 10 项以上参数性能量测，检验程序符合 EMVA 1288 标准

    可用于晶圆级光学检测、工艺参数控制、微透镜设计、微透镜验证

    适用于以下产品检测:

    -   指纹识别 (CIS + 镜头、CIS + 准直器、TFT 阵列传感器)
    -   CIS 微透镜设计，晶圆级光学检测
    -   CIS DSP 芯片算法开发
    -   Si TFT 传感器面板
    -   飞行时间相机传感器
    -   接近传感器 (量子效率、灵敏度、线性度、SNR 等)
    -   d-ToF 传感器、i-ToF 传感器
    -   多光谱传感器
    -   环境光传感器 (ALS)
    -   屏下指纹 (FoD) 传感器

-   SG-O 商用 Wafer Level 影像传感器晶圆测试仪

    可整合探针台

    可针对晶圆进行前述量子效率等 10 项以上参数性能量测，可整合自动化、半自动化相关设备 (自动晶圆装载机、探针台、模组化卡盘等) ，支持超大晶圆及晶片尺寸及低噪音与广域工作温度，一站式解决方案

## 引入 AI

可以引入到 ISP 层引入, 也可以在 CIS 的第二片逻辑 wafer 引入 (但有可能影响 ISP 层的深度学习)

1. 引入 AI 到 CIS 层的第二片 wafer (逻辑 wafer)

    - 效果: 在 CIS 层的第二片 wafer 引入 AI 可以使得图像传感器在捕获图像时就具备一定的智能处理能力，可以在像素级别进行一些基础的 AI 处理，如去噪、增强等
    - 优势: 通过在 CIS 层引入 AI，可以在图像采集阶段就对图像进行一些处理，减轻后续处理单元的负担，同时可以实现更快速的反馈和响应

2. 引入 AI 到 ISP 层的 wafer:
    - 效果: 在 ISP 层直接引入 AI 可以使图像处理更智能化和灵活，使得图像传感器更加适应各种复杂的应用场景. ISP 层可以利用 AI 技术进行更高级别的图像处理和分析任务，如目标检测、场景理解等
    - 优势: ISP 层可以更灵活地应用各种深度学习模型，实现更复杂的图像处理任务，同时可以在图像传感器内部完成更多的智能化处理，减少对外部处理单元的依赖.

# TSV 工艺

via first

@see: https://patents.google.com/patent/CN103956333A/zh

@see: https://pdf.dfcfw.com/pdf/H301_AP202305231587092369_1.pdf

via middle

via last

# MRF

马尔可夫随机场 (Markov Random Field，MRF) 是一种用于建模联合概率分布的图模型. 在 MRF 中，变量被组织成一个图的结构，其中节点表示随机变量，边表示变量之间的依赖关系. 马尔可夫随机场具有马尔可夫性质，即给定其他所有节点的条件下，一个节点的状态只与其邻居节点的状态有关.

MRF 在模式识别、计算机视觉、自然语言处理等领域有着广泛的应用. 在图像处理中，MRF 被用于建模像素之间的关系，用于图像分割、去噪、恢复等任务. 在自然语言处理中，MRF 被用于建模文本数据中单词之间的关系，用于词性标注、命名实体识别等任务. MRF 是概率图模型中重要的一种形式，它提供了一种灵活的方式来表示复杂的联合概率分布.

# Bayesian principle + MRF

贝叶斯理论和马尔可夫随机场 (MRF) 是概率建模中两个重要的概念，它们在不同方面发挥着关键作用.

1. **贝叶斯理论**：

    - 贝叶斯理论是一种用于推断未知参数的统计方法，它基于贝叶斯公式，通过将先验知识和观测数据结合来更新参数的后验概率分布.
    - 贝叶斯理论在机器学习和统计推断中被广泛应用，例如贝叶斯线性回归、朴素贝叶斯分类器等.

2. **马尔可夫随机场**：
    - 马尔可夫随机场是一种用于建模联合概率分布的图模型，其中节点表示随机变量，边表示变量之间的依赖关系.
    - 马尔可夫随机场在模式识别、计算机视觉、自然语言处理等领域广泛应用，用于建模复杂的数据关系.

**关系**：

-   贝叶斯理论和马尔可夫随机场都是概率建模的重要工具，它们可以结合使用.
-   在马尔可夫随机场中，贝叶斯推断方法可以用于估计未知参数，从而更好地拟合模型到数据.
-   贝叶斯方法可以用于为马尔可夫随机场中的参数提供先验分布，从而更好地进行参数估计和推断.

综合来看，贝叶斯理论和马尔可夫随机场在概率建模中可以相互补充，共同用于解决复杂的推断和建模问题.

一个典型的模型，利用了贝叶斯理论和马尔可夫随机场结合的算法是**条件随机场** (Conditional Random Fields，CRF) .

CRF 是一种判别式概率图模型，它结合了贝叶斯理论中的概率思想和马尔可夫随机场中的图模型思想. CRF 广泛应用于序列标注、自然语言处理、计算机视觉等领域，用于解决诸如标注、分割、分类等问题.

在 CRF 中，贝叶斯理论用于定义模型的参数先验分布，而马尔可夫随机场用于建模特征之间的依赖关系. 通过结合这两种方法，CRF 能够更好地利用特征之间的关系和先验知识，从而提高模型的性能和泛化能力.

具体来说，CRF 模型通常包括以下几个要素：

1. **特征函数**：描述输入特征和输出标签之间的关系.
2. **参数**：用来表示特征函数的权重.
3. **概率分布**：通过贝叶斯理论定义参数的先验分布.
4. **马尔可夫随机场**：用来建模标签之间的依赖关系.

在训练阶段，CRF 通过最大化条件概率来学习模型参数，结合了观测数据和标签序列. 在预测阶段，CRF 利用学习到的模型参数和特征函数，结合马尔可夫随机场的推断算法，预测最可能的标签序列.

因此，CRF 是一个典型的模型，展示了如何将贝叶斯理论和马尔可夫随机场结合在一起，以解决序列标注等任务.

CRF 算法和深度卷积网络算法之间存在一定的关系，通常在图像分割和语义分割等任务中会结合使用.

在这种情况下，深度卷积神经网络 (CNN) 通常用于提取图像特征，而 CRF 用于对这些特征进行后处理，以改善分割结果的空间一致性.

具体来说，CNN 在图像分割任务中表现出色，能够学习到丰富的图像特征. 然而，由于 CNN 是一种局部操作，它可能会导致分割结果中存在一些不连续性或者边界模糊的问题. 这时候，CRF 作为一种全局一致性模型，可以通过考虑像素之间的依赖关系来改善分割结果的准确性.

因此，结合 CNN 和 CRF 可以充分利用 CNN 学习到的特征，并通过 CRF 的空间一致性建模来提高分割结果的质量. 这种结合通常被称为“深度卷积神经网络与条件随机场” (Deep Convolutional Neural Networks with Conditional Random Fields，DeepLab 等) .

总的来说，CRF 算法和深度卷积网络算法在图像分割任务中通常结合使用，以充分利用两者的优势，提高分割结果的准确性和一致性.
