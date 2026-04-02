# vision transformer

@see: https://arxiv.org/abs/2010.11929

[v1] Thu, 22 Oct 2020 17:55:59 UTC (3,194 KB)

## Paper

An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale

一张图像胜过 16x16 个词：基于 Transformer 的大规模图像识别

While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of a convolutional network while keeping its overall structure intact. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring fewer computational resources to train.

虽然 Transformer 架构已成为自然语言处理任务的事实标准，但其在计算机视觉中的应用仍然有限。在视觉领域，注意力机制要么与卷积网络结合使用，要么用于替换卷积网络的某些组件，同时保持其整体结构完整。我们表明，这种对 CNN 的依赖并非必要，直接应用于图像块序列的纯 Transformer 可以在图像分类任务上表现非常出色。当在大量数据上进行预训练并迁移到多个中型或小型图像识别基准（ImageNet、CIFAR-100、VTAB 等）时，Vision Transformer (ViT) 与最先进的卷积网络相比取得了优异的结果，同时需要更少的计算资源进行训练。

Our Vision Transformer (ViT) simply splits an image into fixed-size patches, linearly embeds each of them, adds position embeddings, and feeds the resulting sequence of vectors to a standard Transformer encoder. To perform classification, we use the standard approach of adding an extra learnable "classification token" to the sequence.

我们的 Vision Transformer (ViT) 只是将图像分割成固定大小的块，对每个块进行线性嵌入，添加位置嵌入，然后将生成的向量序列输入到标准的 Transformer 编码器中。为了执行分类，我们使用向序列中添加一个额外的可学习“分类令牌”的标准方法。

The contribution of this paper is to show that such a pure Transformer, without any convolutional layers, can achieve excellent results on image classification. Specifically, we make the following contributions:

- We show that ViT achieves excellent results when pre-trained on sufficient data (e.g., JFT-300M) and transferred to image classification benchmarks.
- We provide extensive ablation studies on architectural variations (number of layers, heads, embedding dimension, etc.) and training strategies (pre-training dataset size, resolution, etc.).
- We demonstrate that ViT outperforms ResNets of comparable size and compute cost on most benchmarks, especially when the pre-training dataset is large.
- We release our code and pre-trained models to facilitate future research.

本文的贡献在于表明，这种不含任何卷积层的纯 Transformer 可以在图像分类上取得优异结果。具体而言，我们做出以下贡献：

- 我们表明，当在充足的数据（例如 JFT-300M）上进行预训练并迁移到图像分类基准时，ViT 能取得优异结果。
- 我们对架构变体（层数、头数、嵌入维度等）和训练策略（预训练数据集大小、分辨率等）进行了广泛的消融研究。
- 我们证明，在大多数基准测试中，ViT 的表现优于具有相当规模和计算成本的 ResNet，特别是在预训练数据集较大时。
- 我们发布了代码和预训练模型，以促进未来的研究。

Related Work. Self-attention has been successfully applied to various computer vision tasks, including image generation, semantic segmentation, and video classification. However, these models typically combine self-attention with convolutional layers. For example, standalone self-attention layers have been used to replace spatial convolutions in residual networks, or combined with convolutions in a parallel branch. In contrast, our model is a pure transformer that does not use any convolutional layers.

相关工作。自注意力机制已成功应用于各种计算机视觉任务，包括图像生成、语义分割和视频分类。然而，这些模型通常将自注意力与卷积层结合使用。例如，独立的自注意力层已被用于替换残差网络中的空间卷积，或与卷积并行分支结合使用。相比之下，我们的模型是不使用任何卷积层的纯 Transformer。

Another line of work applies transformers to visual recognition by treating images as sequences of patches. However, these approaches often use complex architectures or require specialized pre-training objectives. Our approach is simpler: we apply the standard Transformer encoder directly to image patches with minimal modifications.

另一系列工作通过将图像视为块序列来将 Transformer 应用于视觉识别。然而，这些方法通常使用复杂的架构或需要专门的预训练目标。我们的方法更简单：我们将标准的 Transformer 编码器直接应用于图像块，只需极少的修改。

Method. Our Vision Transformer (ViT) is based on the standard Transformer encoder. The input image $x$ is reshaped into a sequence of flattened 2D patches $x_p \in \mathbb{R}^{N \times (P^2 \cdot C)}$, where $(P, P)$ is the resolution of each image patch, $C$ is the number of channels, and $N = HW/P^2$ is the resulting number of patches (which also serves as the effective input sequence length for the Transformer). The patches are mapped to a latent vector space of dimension $D$ via a trainable linear projection $E \in \mathbb{R}^{(P^2 \cdot C) \times D}$, which we refer to as the "patch embedding".

方法。我们的 Vision Transformer (ViT) 基于标准的 Transformer 编码器。输入图像 $x$ 被重塑为扁平化 2D 块的序列 $x_p \in \mathbb{R}^{N \times (P^2 \cdot C)}$，其中 $(P, P)$ 是每个图像块的分辨率，$C$ 是通道数，$N = HW/P^2$ 是生成的块数量（这也作为 Transformer 的有效输入序列长度）。这些块通过可训练的线性投影 $E \in \mathbb{R}^{(P^2 \cdot C) \times D}$ 映射到维度为 $D$ 的潜在向量空间，我们称之为“块嵌入”。

To retain positional information, we add learnable position embeddings $E_{pos} \in \mathbb{R}^{(N+1) \times D}$ to the patch embeddings. We also prepend a learnable classification token $x_{class}$ to the sequence, whose state at the output of the Transformer encoder serves as the image representation $y$. The resulting sequence of embedding vectors $z_0$ is then fed to the Transformer encoder.

为了保留位置信息，我们将可学习的位置嵌入 $E_{pos} \in \mathbb{R}^{(N+1) \times D}$ 添加到块嵌入中。我们还将一个可学习的分类令牌 $x_{class}$ 添加到序列的前面，其在 Transformer 编码器输出处的状态作为图像表示 $y$。生成的嵌入向量序列 $z_0$ 随后被输入到 Transformer 编码器中。

The Transformer encoder consists of alternating layers of Multi-Head Self-Attention (MSA) and Multi-Layer Perceptron (MLP) blocks. Layer normalization (LN) is applied before every block, and residual connections after every block. The MLP contains two layers with a Gaussian Error Linear Unit (GELU) activation.

Transformer 编码器由交替的多头自注意力 (MSA) 和多層感知機 (MLP) 块层组成。层归一化 (LN) 应用于每个块之前，残差连接应用于每个块之后。MLP 包含两层，具有高斯误差线性单元 (GELU) 激活函数。

Experiments. We evaluate ViT on several image classification benchmarks. On ImageNet, ViT achieves 88.55% top-1 accuracy when pre-trained on JFT-300M, outperforming ResNet-152 (87.5%) and EfficientNet-L2 (87.4%). On CIFAR-100, ViT achieves 94.6% accuracy, significantly outperforming ResNets. On VTAB, a benchmark of 19 diverse tasks, ViT achieves state-of-the-art results on most tasks.

实验。我们在几个图像分类基准上评估 ViT。在 ImageNet 上，当在 JFT-300M 上预训练时，ViT 达到了 88.55% 的 Top-1 准确率，优于 ResNet-152 (87.5%) 和 EfficientNet-L2 (87.4%)。在 CIFAR-100 上，ViT 达到了 94.6% 的准确率，显著优于 ResNet。在 VTAB（包含 19 个多样化任务的基准）上，ViT 在大多数任务上取得了最先进的结果。

We also study the impact of pre-training dataset size. We find that ViT requires large-scale pre-training to outperform CNNs. When trained from scratch on ImageNet, ViT underperforms ResNets. However, when pre-trained on larger datasets (e.g., JFT-300M), ViT consistently outperforms ResNets of comparable size. This suggests that Transformers are less inductive biased than CNNs and thus require more data to learn effective representations.

我们还研究了预训练数据集大小的影响。我们发现 ViT 需要大规模预训练才能超越 CNN。当在 ImageNet 上从头开始训练时，ViT 的表现不如 ResNet。然而，当在更大的数据集（例如 JFT-300M）上预训练时，ViT 始终优于相当规模的 ResNet。这表明 Transformer 的归纳偏置比 CNN 少，因此需要更多数据来学习有效的表示。

Ablation Studies. We conduct extensive ablation studies on the architecture of ViT. We vary the number of layers $L$, the hidden size $D$, the number of attention heads $H$, and the patch size $P$. We find that increasing the model size generally improves performance, provided that sufficient pre-training data is available. We also find that smaller patch sizes (e.g., 16x16) generally perform better than larger patch sizes (e.g., 32x32), at the cost of increased computational complexity.

消融研究。我们对 ViT 的架构进行了广泛的消融研究。我们改变了层数 $L$、隐藏层维度 $D$、注意力头数 $H$ 和块大小 $P$。我们发现，只要有足够的预训练数据，增加模型规模通常会提高性能。我们还发现，较小的块大小（例如 16x16）通常比较大的块大小（例如 32x32）表现更好，但代价是计算复杂度增加。

Conclusion. We have presented the Vision Transformer (ViT), a pure transformer architecture for image classification. By applying a standard Transformer directly to sequences of image patches, ViT achieves excellent results on multiple benchmarks when pre-trained on sufficient data. Our results suggest that the reliance on convolutional networks in computer vision may not be necessary, and that pure transformers can be highly effective for visual recognition tasks.

结论。我们提出了 Vision Transformer (ViT)，一种用于图像分类的纯 Transformer 架构。通过将标准 Transformer 直接应用于图像块序列，当在充足的数据上预训练时，ViT 在多个基准测试上取得了优异的结果。我们的结果表明，计算机视觉中对卷积网络的依赖可能是不必要的，纯 Transformer 对于视觉识别任务可以非常有效。

## Note

ViT 的核心贡献在于**打破了 CNN 在计算机视觉领域的垄断**，证明了纯 Transformer 架构在图像识别任务上的有效性，前提是拥有足够大规模的预训练数据。

1.  **图像序列化**：将图像视为“序列的补丁（Patches）”。把一张 $H \times W$ 的图像切分成 $N$ 个固定大小（如 $16 \times 16$）的小块，拉平后作为 Token 序列输入。
2.  **直接应用标准 Transformer**：不做任何针对视觉的特殊修改（如卷积注意力），直接使用 NLP 中标准的 Encoder 架构（MSA + MLP + LayerNorm + Residual）。
3.  **位置嵌入与分类头**：引入可学习的位置编码（Position Embeddings）保留空间信息，并添加一个特殊的 `[CLS]` token 用于聚合全局特征进行分类。

## Note

先分割图像, 每个小图都是一个 token, 然后进 linear projection of flattened patches, 然后再通过 position embedding 获得每个小图的位置信息+features, 就实现了 patch+position embedding 的操作, 这里虽然每个分割的图像都有 feature, 但是最终采用的是序号 0 的 class embedding 来获得特征

进入 transformer encoder(norm->multi-head attention->norm->MLP 传统方法的 LN)然后在经过 MLP Head 得到 class

CNN 的特点是 layer 越多, 感受野越大, 但是 vit 是从一开始就拥有了位置信息, 这也解决了 inductive biases, 也就是 vit 拥有更好的泛化能力

1D embedding 效果最好, 比如 25x25 的 patch, 那么就是从左到右, 从上到下进行排序

# CLIP

26 Feb 2021

@see: https://github.com/OpenAI/CLIP

@see: https://arxiv.org/abs/2103.00020

## Paper

State-of-the-art computer vision systems are trained to predict a fixed set of predetermined categories. This limits their flexibility and hinders their ability to generalize to new tasks. In contrast, humans can recognize a virtually unlimited number of visual concepts simply by reading about them. We hypothesize that re-purposing natural language supervision signals can enable the training of flexible, generalizable visual models. To test this hypothesis, we train a model called CLIP (Contrastive Language-Image Pre-training) on 400 million image-text pairs collected from the internet. CLIP learns to predict which text goes with which image. When evaluated on over 30 different computer vision datasets, CLIP performs competitively with fully supervised ResNet-50 baselines without using any dataset-specific training data. For example, CLIP matches the performance of the original ResNet-50 on ImageNet zero-shot, completely removing the need for the 1.28 million labeled examples used in standard supervised training.

最先进的计算机视觉系统被训练来预测一组固定的预定义类别。这限制了它们的灵活性，阻碍了其泛化到新任务的能力。相比之下，人类仅仅通过阅读就能识别几乎无限数量的视觉概念。我们假设，重新利用自然语言监督信号可以训练出灵活、可泛化的视觉模型。为了验证这一假设，我们训练了一个名为 CLIP (对比语言 - 图像预训练) 的模型，使用了从互联网收集的 4 亿个图像 - 文本对。CLIP 学习预测哪段文本与哪张图像相匹配。当在超过 30 个不同的计算机视觉数据集上进行评估时，CLIP 的表现与完全监督的 ResNet-50 基线具有竞争力，而无需使用任何特定于数据集的训练数据。例如，CLIP 在 ImageNet 上的零样本（zero-shot）性能与原始 ResNet-50 相当，完全消除了标准监督训练中使用的 128 万个标注样本的需求。

Computer vision has made tremendous progress by training deep neural networks on large labeled datasets like ImageNet. However, these models are brittle: they often fail to generalize to new distributions or tasks without extensive fine-tuning. Furthermore, collecting large-scale labeled data is expensive and time-consuming.
In this work, we explore an alternative approach: learning visual representations directly from natural language supervision found on the internet. The web contains billions of images accompanied by alt-text, captions, or surrounding text, providing a rich source of weak supervision. By training a model to align images and text in a shared embedding space, we aim to learn visual concepts that are grounded in language.

计算机视觉通过在 ImageNet 等大型标注数据集上训练深度神经网络取得了巨大进步。然而，这些模型很脆弱：如果没有大量的微调，它们往往无法泛化到新的分布或任务。此外，收集大规模标注数据既昂贵又耗时。
在这项工作中，我们探索了一种替代方法：直接从互联网上的自然语言监督中学习视觉表示。网络包含数十亿张带有替代文本、标题或周围文本的图像，提供了丰富的弱监督来源。通过训练模型将图像和文本对齐到一个共享的嵌入空间中，我们的目标是学习植根于语言的视觉概念。

Our approach, CLIP, is efficient and scalable. We demonstrate that a single pre-trained CLIP model can be used for a wide variety of downstream tasks simply by specifying the task in natural language. For instance, to perform image classification on a new dataset, one only needs to provide the class names as text prompts (e.g., "a photo of a cat", "a photo of a dog"). The model then predicts the class by finding the text embedding most similar to the image embedding. This "zero-shot" capability eliminates the need for task-specific training data.

我们的方法 CLIP 高效且可扩展。我们证明，单个预训练的 CLIP 模型可以用于各种下游任务，只需通过自然语言指定任务即可。例如，要在新数据集上执行图像分类，只需提供类别名称作为文本提示（例如，“一张猫的照片”，“一张狗的照片”）。然后，模型通过找到与图像嵌入最相似的文本嵌入来预测类别。这种“零样本”能力消除了对特定任务训练数据的需求。

CLIP consists of two encoders: an image encoder $I(\cdot)$ and a text encoder $T(\cdot)$. The image encoder can be a ResNet or a Vision Transformer (ViT). The text encoder is a Transformer similar to those used in NLP. Both encoders project their inputs into a shared $d$-dimensional embedding space.
Given a batch of $N$ (image, text) pairs $\{(x_i, t_i)\}_{i=1}^N$, we compute the image embeddings $v_i = I(x_i)$ and text embeddings $u_i = T(t_i)$. We then normalize these embeddings to have unit length: $\hat{v}_i = v_i / \|v_i\|$ and $\hat{u}_i = u_i / \|u_i\|$.

CLIP 由两个编码器组成：图像编码器 $I(\cdot)$ 和文本编码器 $T(\cdot)$。图像编码器可以是 ResNet 或 Vision Transformer (ViT)。文本编码器是一个类似于 NLP 中使用的 Transformer。两个编码器都将输入投影到一个共享的 $d$ 维嵌入空间中。
给定一批 $N$ 个（图像，文本）对 $\{(x_i, t_i)\}_{i=1}^N$，我们计算图像嵌入 $v_i = I(x_i)$ 和文本嵌入 $u_i = T(t_i)$。然后我们将这些嵌入归一化为单位长度：$\hat{v}_i = v_i / \|v_i\|$ 和 $\hat{u}_i = u_i / \|u_i\|$。

The core training objective is a symmetric cross-entropy loss over the cosine similarities between image and text embeddings. We compute an $N \times N$ similarity matrix $S$, where $S_{ij} = \hat{v}_i^\top \hat{u}_j$.
We assume that the correct pairing is diagonal (i.e., image $i$ corresponds to text $i$). The loss for the image-to-text direction is:
$$ \mathcal{L}_{i2t} = -\frac{1}{N} \sum_{i=1}^N \log \frac{\exp(S*{ii} / \tau)}{\sum*{j=1}^N \exp(S*{ij} / \tau)} $$
Similarly, the text-to-image loss $\mathcal{L}*{t2i}$ is computed. The total loss is the average of both: $\mathcal{L} = \frac{1}{2} (\mathcal{L}_{i2t} + \mathcal{L}_{t2i})$. Here, $\tau$ is a learnable temperature parameter.

核心训练目标是基于图像和文本嵌入之间余弦相似度的对称交叉熵损失。我们计算一个 $N \times N$ 的相似度矩阵 $S$，其中 $S_{ij} = \hat{v}_i^\top \hat{u}_j$。
我们假设正确的配对是对角线的（即图像 $i$ 对应文本 $i$）。图像到文本方向的损失为：
$$ \mathcal{L}_{i2t} = -\frac{1}{N} \sum_{i=1}^N \log \frac{\exp(S*{ii} / \tau)}{\sum*{j=1}^N \exp(S*{ij} / \tau)} $$
类似地，计算文本到图像的损失 $\mathcal{L}*{t2i}$。总损失是两者的平均值：$\mathcal{L} = \frac{1}{2} (\mathcal{L}_{i2t} + \mathcal{L}_{t2i})$。这里，$\tau$ 是一个可学习的温度参数。

We evaluate CLIP on 30 diverse datasets, including ImageNet, CIFAR-10, SUN397, and others. For each dataset, we construct text prompts for each class (e.g., "a photo of a [class]").
On ImageNet, CLIP (ViT-B/32) achieves 63.8% top-1 accuracy in a zero-shot setting, matching the performance of a supervised ResNet-50 (which required 1.28M labeled images). With a larger ViT-L/14 backbone, CLIP reaches 75.5%, surpassing the supervised ResNet-101 baseline.
Crucially, CLIP is more robust to distribution shifts. On ImageNet-A (adversarial examples), CLIP outperforms supervised models by a significant margin, suggesting it learns more robust visual features.

我们在 30 个不同的数据集上评估 CLIP，包括 ImageNet、CIFAR-10、SUN397 等。对于每个数据集，我们为每个类别构建文本提示（例如，“一张 [类别] 的照片”）。
在 ImageNet 上，CLIP (ViT-B/32) 在零样本设置下达到了 63.8% 的 Top-1 准确率，与监督训练的 ResNet-50（需要 128 万张标注图像）相当。使用更大的 ViT-L/14 骨干网络，CLIP 达到 75.5%，超过了监督训练的 ResNet-101 基线。
至关重要的是，CLIP 对分布偏移更具鲁棒性。在 ImageNet-A（对抗样本）上，CLIP 显著优于监督模型，表明它学到了更鲁棒的视觉特征。

Despite its strong performance, CLIP has limitations. It struggles with fine-grained classification (e.g., distinguishing between specific dog breeds) and counting objects. It also inherits biases from the web data, such as societal stereotypes. Furthermore, CLIP is not inherently designed for dense prediction tasks like object detection or segmentation, though it can be adapted with additional heads.

尽管表现强劲，CLIP 仍有局限性。它在细粒度分类（例如，区分特定品种的狗）和计数物体方面表现挣扎。它还继承了网络数据中的偏见，如社会刻板印象。此外，CLIP 本身并非为密集预测任务（如目标检测或分割）而设计，尽管可以通过添加额外的头来适应。

We have presented CLIP, a method for learning transferable visual models from natural language supervision. By training on a massive dataset of image-text pairs, CLIP learns to align visual and semantic concepts, enabling zero-shot transfer to a wide range of tasks. This approach offers a promising path towards more flexible and generalizable computer vision systems, reducing the reliance on expensive labeled datasets.

我们提出了 CLIP，一种从自然语言监督中学习可迁移视觉模型的方法。通过在海量图像 - 文本对上训练，CLIP 学习对齐视觉和语义概念，从而实现向广泛任务的零样本迁移。这种方法为更灵活、更可泛化的计算机系统提供了一条有前景的道路，减少了对昂贵标注数据集的依赖。

## Note

CLIP 的核心贡献在于证明了**零样本迁移能力**。它通过海量图文对的弱监督学习，让模型学会了通用的视觉概念，而不需要针对每个任务重新标注数据。这对半导体缺陷检测（标签稀缺）有巨大启示：我们可以用文本描述缺陷（如“a SEM image of a bridge defect”），而无需大量标注图片。

其训练本质是 **InfoNCE Loss**，即“拉近”匹配的图文对，“推远”不匹配的对。但这需要大量的负样本（batch size 通常很大），这也解释了为什么后来 BYOL/SimSiam 要尝试去掉负样本——因为显存不够，且负样本构造复杂。

CLIP 的局限性直接指向了后续模型的改进方向：

1. **细粒度问题** -> 需要 V-V Attention 来聚焦微小缺陷（SEM-CLIP 的动机）。
2. **密集预测问题** -> 需要分割头（Segmentation Head）。
3. **领域偏差** -> 需要 SimSiam 在 SEM 数据上预训练来纠正。
4. **对比学习需要负样本** -> 演进到 SimSiam（无负样本）。

# DINO

[v1] Thu, 29 Apr 2021 12:28:51 UTC (30,222 KB)

@see: https://arxiv.org/abs/2104.14294

## Paper

In this paper, we question if self-supervised learning provides new properties to Vision Transformer(ViT)[19] that stand out compared to convolutional networks(convnets). Beyond the fact that adapting self-supervised methods to this architecture works particularly well, we make the following observations: first, self-supervised ViT features contain explicit information about the semantic segmentation of an image, which does not emerge as clearly with supervised ViTs, nor with convnets. Second, these features are also excellent k-NN classifiers, reaching 78.3% top-1 on ImageNet with a small ViT. Our study also underlines the importance of momentum encoder[33], multi-crop training[10], and the use of small patches with ViTs. We implement our findings into a simple self-supervised method, called DINO, which we interpret as a form of self-distillation with no labels. We show the synergy between DINO and ViTs by achieving 80.1% top-1 on ImageNet in linear evaluation with ViT-Base.

在本文中，我们探讨了自监督学习是否能为视觉Transformer（ViT）[19]带来相较于卷积网络（convnets）更为突出的新特性。除了将自监督方法适配到此架构效果特别好之外，我们还做出了以下观察：首先，自监督ViT的特征明确包含了图像语义分割的信息，而这种信息在有监督的ViT或卷积网络中并未如此清晰地显现。其次，这些特征也是极佳的k近邻（k-NN）分类器，在ImageNet上使用小型ViT即可达到78.3%的top-1准确率。我们的研究还强调了动量编码器（momentum encoder）[33]、多裁剪训练（multi-crop training）[10]以及在ViT中使用小尺寸图像块的重要性。我们将这些发现整合成一种简单的自监督方法，称为DINO，我们将其解释为一种无标签的自蒸馏（self-distillation）形式。我们通过在ImageNet线性评估中使用ViT-Base达到80.1%的top-1准确率，展示了DINO与ViT之间的协同效应。

Transformers[70] have recently emerged as an alternative to convolutional neural networks(convnets) for visual recognition[19, 69, 83]. Their adoption has been coupled with a training strategy inspired by natural language processing (NLP), that is, pretraining on large quantities of data and finetuning on the target dataset[18, 55]. The resulting Vision Transformers(ViT)[19] are competitive with convnets but, they have not yet delivered clear benefits over them: they are computationally more demanding, require more training data, and their features do not exhibit unique properties.

Transformer[70]最近已成为卷积神经网络（convnets）在视觉识别任务[19, 69, 83]中的一种替代方案。其采用通常伴随着一种受自然语言处理（NLP）启发的训练策略，即在大量数据上进行预训练，然后在目标数据集上微调[18, 55]。由此产生的视觉Transformer（ViT）[19]虽已具备与卷积网络相当的竞争力，但尚未展现出明显优势：它们计算开销更大、需要更多训练数据，且其特征并未表现出独特性质。

In this paper, we question whether the muted success of Transformers in vision can be explained by the use of supervision in their pretraining. Our motivation is that one of the main ingredients for the success of Transformers in NLP was the use of self-supervised pretraining, in the form of close procedure in BERT[18] or language modeling in GPT[55]. These self-supervised pretraining objectives use the words in a sentence to create pretext tasks that provide a richer learning signal than the supervised objective of predicting a single label per sentence. Similarly, in images, image-level supervision often reduces the rich visual information contained in an image to a single concept selected from a predefined set of a few thousand categories of objects[60].

在本文中，我们质疑Transformer在视觉领域表现平平是否可以用其预训练中使用了监督信号来解释。我们的动机是，Transformer在NLP领域取得成功的主要因素之一是使用了自监督预训练，例如BERT[18]中的掩码语言建模（MLM）或GPT[55]中的语言建模。这些自监督预训练目标利用句子中的词语来创建代理任务（pretext tasks），这比监督式的目标（即为每个句子预测一个单一标签）提供了更丰富的学习信号。同样，在图像领域，图像级别的监督通常会将图像中包含的丰富视觉信息简化为从预定义的数千个对象类别集合中选出的一个单一概念[60]。

While the self-supervised pretext tasks used in NLP are text specific, many existing self-supervised methods have shown their potential on images with convnets[10, 12, 30, 33]. They typically share a similar structure but with different components designed to avoid trivial solutions(collapse) or to improve performance[16]. In this work, inspired from these methods, we study the impact of self-supervised pre-training on ViT features. Of particular interest, we have identified several interesting properties that do not emerge with supervised ViTs, nor with convnets:

尽管NLP中使用的自监督代理任务是文本特定的，但许多现有的自监督方法已经展示了它们在卷积网络（convnets）上的潜力[10, 12, 30, 33]。它们通常具有相似的结构，但包含不同的组件，旨在避免平凡解（坍塌，collapse）或提升性能[16]。在这项工作中，受这些方法的启发，我们研究了自监督预训练对ViT特征的影响。特别值得关注的是，我们发现了几个有趣的特性，这些特性既不会在有监督的ViT中出现，也不会在卷积网络中出现：

• Self-supervised ViT features explicitly contain the scene layout and, in particular, object boundaries, as shown in Figure 1. This information is directly accessible in the self-attention modules of the last block.

• 自监督ViT的特征明确包含了场景布局，特别是对象边界，如图1所示。这些信息可以直接从最后一个模块的自注意力机制中获取。

• Self-supervised ViT features perform particularly well with a basic nearest neighbors classifier(k-NN) without any finetuning, linear classifier nor data augmentation, achieving 78.3% top-1 accuracy on ImageNet.

• 自监督ViT的特征在使用基本的最近邻分类器（k-NN）时表现尤为出色，无需任何微调、线性分类器或数据增强，即可在ImageNet上达到78.3%的top-1准确率。

The emergence of segmentation masks seems to be a property shared across self-supervised methods. However, the good performance with k-NN only emerge when combining certain components such as momentum encoder[33] and multi-crop augmentation[10]. Another finding from our study is the importance of using smaller patches with ViTs to improve the quality of the resulting features.

分割掩码的出现似乎是各种自监督方法共有的特性。然而，k-NN的良好性能只有在结合某些特定组件（如动量编码器[33]和多裁剪增强[10]）时才会显现。我们研究的另一个发现是，在ViT中使用更小的图像块对于提高所生成特征的质量至关重要。

Overall, our findings about the importance of these components lead us to design a simple self-supervised approach that can be interpreted as a form of knowledge distillation[35] with no labels. The resulting framework, DINO, simplifies self-supervised training by directly predicting the output of a teacher network—built with a momentum encoder—by using a standard cross-entropy loss. Interestingly, our method can work with only a centering and sharpening of the teacher output to avoid collapse, while other popular components such as predictor[30], advanced normalization[10] or contrastive loss[33] add little benefits in terms of stability or performance. Of particular importance, our framework is flexible and works on both convnets and ViTs without the need to modify the architecture, nor adapt internal normalizations[58].

总体而言，我们关于这些组件重要性的发现促使我们设计了一种简单的自监督方法，可以将其解释为一种无标签的知识蒸馏[35]形式。由此产生的框架DINO通过直接预测由动量编码器构建的教师网络的输出，并使用标准的交叉熵损失，从而简化了自监督训练。有趣的是，我们的方法仅通过对教师输出进行中心化（centering）和锐化（sharpening）即可避免坍塌，而其他流行的组件，如预测器（predictor）[30]、高级归一化（advanced normalization）[10]或对比损失（contrastive loss）[33]，在稳定性和性能方面带来的好处甚微。尤为重要的是，我们的框架非常灵活，可以在卷积网络和ViT上工作，而无需修改架构，也无需调整内部归一化[58]。

We further validate the synergy between DINO and ViT by outperforming previous self-supervised features on the ImageNet linear classification benchmark with 80.1% top-1 accuracy with a ViT-Base with small patches. We also confirm that DINO works with convnets by matching the state of the art with a ResNet-50 architecture. Finally, we discuss different scenarios to use DINO with ViTs in case of limited computation and memory capacity. In particular, training DINO with ViT takes just two 8-GPU servers over 3 days to achieve 76.1% on ImageNet linear benchmark, which outperforms self-supervised systems based on convnets of comparable sizes with significantly reduced compute requirements[10, 30].

我们进一步通过在ImageNet线性分类基准上以80.1%的top-1准确率（使用带小图像块的ViT-Base）超越了先前的自监督特征，验证了DINO与ViT之间的协同效应。我们还通过在ResNet-50架构上达到当前最先进水平，证实了DINO在卷积网络上的有效性。最后，我们讨论了在计算和内存资源有限的情况下使用DINO与ViT的不同场景。特别是，使用ViT训练DINO仅需两台8-GPU服务器运行3天，即可在ImageNet线性基准上达到76.1%的准确率，这优于基于卷积网络的、规模相当的自监督系统，并且计算需求显著降低[10, 30]。

Self-supervised learning. A large body of work on self-supervised learning focuses on discriminative approaches coined instance classification[12, 20, 33, 73], which considers each image a different class and trains the model by discriminating them up to data augmentations. However, explicitly learning a classifier to discriminate between all images[20] does not scale well with the number of images. Wu et al.[73] propose to use a noise contrastive estimator(NCE)[32] to compare instances instead of classifying them. A caveat of this approach is that it requires comparing features from a large number of images simultaneously. In practice, this requires large batches[12] or memory banks[33, 73]. Several variants allow automatic grouping of instances in the form of clustering[2, 8, 9, 36, 42, 74, 80, 85].

自监督学习。大量关于自监督学习的工作集中在判别式方法上，这类方法被称为实例分类（instance classification）[12, 20, 33, 73]，它将每张图像视为一个不同的类别，并通过区分它们（考虑数据增强）来训练模型。然而，显式地学习一个分类器来区分所有图像[20]的方法无法很好地随图像数量扩展。Wu等人[73]提出使用噪声对比估计（NCE）[32]来比较实例，而不是对它们进行分类。这种方法的一个缺点是，它需要同时比较大量图像的特征。在实践中，这需要大批次（large batches）[12]或记忆库（memory banks）[33, 73]。一些变体允许以聚类（clustering）的形式对实例进行自动分组[2, 8, 9, 36, 42, 74, 80, 85]。

Recent works have shown that we can learn unsupervised features without discriminating between images. Of particular interest, Grill et al.[30] propose a metric-learning formulation called BYOL, where features are trained by matching them to representations obtained with a momentum encoder. Methods like BYOL work even without a momentum encoder, at the cost of a drop of performance[16, 30]. Several other works echo this direction, showing that one can match more elaborate representations[26, 27], train features matching them to a uniform distribution[6] or by using whitening[23, 81]. Our approach takes its inspiration from BYOL but operates with a different similarity matching loss and uses the exact same architecture for the student and the teacher. That way, our work completes the interpretation initiated in BYOL of self-supervised learning as a form of Mean Teacher self-distillation[65] with no labels.

最近的研究表明，我们可以在不区分图像之间差异的情况下学习无监督特征。特别值得关注的是，Grill等人[30]提出了一种名为BYOL的度量学习（metric-learning）公式，其中特征通过与动量编码器获得的表示进行匹配来训练。像BYOL这样的方法即使没有动量编码器也能工作，但性能会有所下降[16, 30]。其他几项工作也呼应了这一方向，表明可以匹配更复杂的表示[26, 27]，或者通过将特征匹配到均匀分布[6]或使用白化（whitening）[23, 81]来训练特征。我们的方法受到BYOL的启发，但采用了不同的相似性匹配损失，并且学生和教师使用完全相同的架构。通过这种方式，我们的工作完善了BYOL所开启的对自监督学习的解释，即将其视为一种无标签的Mean Teacher自蒸馏[65]形式。

Self-training and knowledge distillation. Self-training aims at improving the quality of features by propagating a small initial set of annotations to a large set of unlabeled instances. This propagation can either be done with hard assignments of labels[41, 78, 79] or with a soft assignment[76]. When using soft labels, the approach is often referred to as knowledge distillation[7, 35] and has been primarily designed to train a small network to mimic the output of a larger network to compress models. Xie et al.[76] have shown that distillation could be used to propagate soft pseudo-labels to unlabelled data in a self-training pipeline, drawing an essential connection between self-training and knowledge distillation. Our work builds on this relation and extends knowledge distillation to the case where no labels are available. Previous works have also combined self-supervised learning and knowledge distillation[25, 63, 13, 47], enabling self-supervised model compression and performance gains. However, these works rely on a pre-trained fixed teacher while our teacher is dynamically built during training. This way, knowledge distillation, instead of being used as a post-processing step to self-supervised pre-training, is directly cast as a self-supervised objective. Finally, our work is also related to codistillation[1] where student and teacher have the same architecture and use distillation during training. However, the teacher in codistillation is also distilling from the student, while it is updated with an average of the student in our work.

自训练与知识蒸馏。自训练旨在通过将一小部分初始标注传播到大量未标注实例上来提高特征质量。这种传播可以通过硬标签分配（hard assignments）[41, 78, 79]或软标签分配（soft assignment）[76]来完成。当使用软标签时，这种方法通常被称为知识蒸馏[7, 35]，其主要目的是训练一个小网络来模仿大网络的输出，以实现模型压缩。Xie等人[76]已经证明，蒸馏可以用于在自训练流程中将软伪标签传播到未标注数据，从而在自训练和知识蒸馏之间建立了重要的联系。我们的工作建立在这种关系之上，并将知识蒸馏扩展到完全没有标签的情况。之前的工作也将自监督学习与知识蒸馏相结合[25, 63, 13, 47]，实现了自监督模型压缩和性能提升。然而，这些工作依赖于一个预先训练好的固定教师网络，而我们的教师网络是在训练过程中动态构建的。因此，知识蒸馏不再被用作自监督预训练后的后处理步骤，而是直接被设定为自监督目标。最后，我们的工作也与协同蒸馏（codistillation）[1]相关，在协同蒸馏中，学生和教师具有相同的架构并在训练中使用蒸馏。然而，在协同蒸馏中，教师也在从学生那里进行蒸馏，而在我们的工作中，教师是通过学生的平均值来更新的。

The framework used for this work, DINO, shares the same overall structure as recent self-supervised approaches[10, 16, 12, 30, 33]. However, our method shares also similarities with knowledge distillation[35] and we present it under this angle. We illustrate DINO in Figure 2 and propose a pseudo-code implementation in Algorithm 1.

本工作所使用的框架DINO与近期的自监督方法[10, 16, 12, 30, 33]具有相同的总体结构。然而，我们的方法也与知识蒸馏[35]有相似之处，我们将从这个角度来阐述它。我们在图2中说明了DINO，并在算法1中提出了一个伪代码实现。

Knowledge distillation is a learning paradigm where we train a student network gθs to match the output of a given teacher network gθt, parameterized by θs and θt respectively. Given an input image x, both networks output probability distributions over K dimensions denoted by Ps and Pt. The probability P is obtained by normalizing the output of the network g with a softmax function. More precisely,

exp(gθs(x)(i)/τs) Ps(x)(i)= ∑ , (1) K k=1 exp(gθs(x)(k)/τs)

with τs> 0 a temperature parameter that controls the sharpness of the output distribution, and a similar formula holds for Pt with temperature τt. Given a fixed teacher network gθt, we learn to match these distributions by minimizing the cross-entropy loss w.r.t. the parameters of the student network θs:

minθsH(Pt(x), Ps(x)), (2)

where H(a, b)= −a log b.

知识蒸馏是一种学习范式，我们训练一个学生网络gθs来匹配给定的教师网络gθt的输出，它们的参数分别为θs和θt。给定一个输入图像x，两个网络都会输出一个K维的概率分布，分别记为Ps和Pt。概率P是通过对网络g的输出使用softmax函数进行归一化得到的。更具体地说，

exp(gθs(x)(i)/τs) Ps(x)(i) = ————————————————————————, (1) ∑\_{k=1}^K exp(gθs(x)(k)/τs)

其中τs > 0是一个温度参数，用于控制输出分布的锐度，对于Pt也有类似的公式，其温度参数为τt。给定一个固定的教师网络gθt，我们通过最小化相对于学生网络参数θs的交叉熵损失来学习匹配这些分布：

min\_{θs} H(Pt(x), Ps(x)), (2)

其中 H(a, b) = -a log b。

In the following, we detail how we adapt the problem in Eq.(2) to self-supervised learning. First, we construct different distorted views, or crops, of an image with multi-crop strategy[10]. More precisely, from a given image, we generate a set V of different views. This set contains two global views, xg 1 and xg 2 and several local views of smaller resolution. All crops are passed through the student while only the global views are passed through the teacher, therefore encouraging “local-to-global” correspondences. We minimize the loss:

minθs∑x∈{xg1,xg2}∑x′∈V x′6= xH(Pt(x), Ps(x′)). (3)

This loss is general and can be used on any number of views, even only 2. However, we follow the standard setting for multi-crop by using 2 global views at resolution 2242 covering a large(for example greater than 50%) area of the original image, and several local views of resolution 962 covering only small areas(for example less than 50%) of the original image. We refer to this setting as the basic parametrization of DINO, unless mentioned otherwise.

接下来，我们将详细说明如何将公式(2)中的问题适配到自监督学习中。首先，我们使用多裁剪策略（multi-crop strategy）[10]为一张图像构建不同的失真视图（或裁剪）。更具体地说，从给定的图像中，我们生成一组V个不同的视图。该集合包含两个全局视图xg1和xg2，以及几个分辨率较小的局部视图。所有的裁剪都通过学生网络，而只有全局视图通过教师网络，从而鼓励“局部到全局”的对应关系。我们最小化以下损失：

min*{θs} ∑*{x∈{xg1,xg2}} ∑\_{x'∈V, x'≠x} H(Pt(x), Ps(x')). (3)

该损失是通用的，可以用于任意数量的视图，甚至只有2个。然而，我们遵循多裁剪的标准设置，使用2个分辨率为224²的全局视图，覆盖原始图像的大部分区域（例如大于50%），以及几个分辨率为96²的局部视图，仅覆盖原始图像的小部分区域（例如小于50%）。除非另有说明，否则我们将此设置称为DINO的基本参数化。

Both networks share the same architecture g with different sets of parameters θs and θt. We learn the parameters θs by minimizing Eq.(3) with stochastic gradient descent.

两个网络共享相同的架构g，但具有不同的参数集θs和θt。我们通过随机梯度下降法最小化公式(3)来学习参数θs。

Unlike knowledge distillation, we do not have a teacher gθt given a priori and hence, we build it from past iterations of the student network. We study different update rules for the teacher in Section 5.2 and show that freezing the teacher network over an epoch works surprisingly well in our framework, while copying the student weight for the teacher fails to converge. Of particular interest, using an exponential moving average(EMA) on the student weights, i.e., a momentum encoder[33], is particularly well suited for our framework. The update rule is θt← λθt+(1 − λ)θs, with λ following a cosine schedule from 0.996 to 1 during training[30]. Originally the momentum encoder has been introduced as a substitute for a queue in contrastive learning[33]. However, in our framework, its role differs since we do not have a queue nor a contrastive loss, and may be closer to the role of the mean teacher used in self-training[65]. Indeed, we observe that this teacher performs a form of model ensembling similar to Polyak-Ruppert averaging with an exponential decay[51, 59]. Using Polyak-Ruppert averaging for model ensembling is a standard practice to improve the performance of a model[38]. We observe that this teacher has better performance than the student throughout the training, and hence, guides the training of the student by providing target features of higher quality. This dynamic was not observed in previous works[30, 58].

与知识蒸馏不同，我们没有一个先验给定的教师网络gθt，因此我们从学生网络过去迭代的权重中构建它。我们在第5.2节研究了教师网络的不同更新规则，并表明在我们的框架中，将教师网络在一个epoch内冻结的效果出奇地好，而直接复制学生权重作为教师则无法收敛。特别值得关注的是，对学生权重使用指数移动平均（EMA），即动量编码器[33]，特别适合我们的框架。更新规则为θt ← λθt + (1 - λ)θs，其中λ在训练过程中遵循从0.996到1的余弦调度[30]。最初，动量编码器被引入作为对比学习中队列（queue）的替代品[33]。然而，在我们的框架中，它的作用有所不同，因为我们没有队列也没有对比损失，其作用可能更接近于自训练中使用的Mean Teacher[65]。事实上，我们观察到这个教师执行了一种类似于带有指数衰减的Polyak-Ruppert平均[51, 59]的模型集成（model ensembling）形式。使用Polyak-Ruppert平均进行模型集成是提高模型性能的标准做法[38]。我们观察到，这个教师在整个训练过程中性能都优于学生，因此通过提供更高质量的目标特征来指导学生的训练。这种动态在之前的工作中未曾被观察到[30, 58]。

The neural network g is composed of a backbone f(ViT[19] or ResNet[34]), and of a projection head h: g= h ◦ f. The features used in downstream tasks are the backbone f output. The projection head consists of a 3-layer multi-layer perceptron(MLP) with hidden dimension 2048 followed by`2 normalization and a weight normalized fully connected layer[61] with K dimensions, which is similar to the design from SwAV[10]. We have tested other projection heads and this particular design appears to work best for DINO(Appendix C). We do not use a predictor[30, 16], resulting in the exact same architecture in both student and teacher networks. Of particular interest, we note that unlike standard convnets, ViT architectures do not use batch normalizations(BN) by default. Therefore, when applying DINO to ViT we do not use any BN also in the projection heads, making the system entirely BN-free.

网络架构。神经网络g由一个主干网络f（ViT[19]或ResNet[34]）和一个投影头h组成：g = h ◦ f。下游任务中使用的特征是主干网络f的输出。投影头由一个3层多层感知机（MLP）组成，隐藏层维度为2048，其后是ℓ2归一化和一个K维的权重归一化全连接层[61]，这与SwAV[10]的设计类似。我们测试了其他投影头，发现这种特定设计对DINO效果最好（附录C）。我们不使用预测器（predictor）[30, 16]，从而使得学生和教师网络具有完全相同的架构。特别值得注意的是，我们注意到与标准卷积网络不同，ViT架构默认不使用批归一化（BN）。因此，在将DINO应用于ViT时，我们在投影头中也不使用任何BN，使得整个系统完全无BN。

Several self-supervised methods differ by the operation used to avoid collapse, either through contrastive loss[73], clustering constraints[8, 10], predictor[30] or batch normalizations[30, 58]. While our framework can be stabilized with multiple normalizations[10], it can also work with only a centering and sharpening of the momentum teacher outputs to avoid model collapse. As shown experimentally in Section 5.3, centering prevents one dimension to dominate but encourages collapse to the uniform distribution, while the sharpening has the opposite effect. Applying both operations balances their effects which is sufficient to avoid collapse in presence of a momentum teacher. Choosing this method to avoid collapse trades stability for less dependence over the batch: the centering operation only depends on first-order batch statistics and can be interpreted as adding a bias term c to the teacher: gt(x)← gt(x)+ c. The center c is updated with an exponential moving average, which allows the approach to work well across different batch sizes as shown in Section 5.5:

c← mc+(1 − m) 1 B∑ Bi=1gθt(xi), (4)

where m> 0 is a rate parameter and B is the batch size.

Output sharpening is obtained by using a low value for the temperature τt in the teacher softmax normalization.

避免坍塌。几种自监督方法的不同之处在于用于避免坍塌的操作，这些操作包括对比损失[73]、聚类约束[8, 10]、预测器[30]或批归一化[30, 58]。虽然我们的框架可以通过多重归一化[10]来稳定，但它也可以仅通过对动量教师输出进行中心化和锐化来避免模型坍塌。如第5.3节的实验所示，中心化可以防止某一维度占据主导地位，但会促使模型坍塌到均匀分布；而锐化则具有相反的效果。同时应用这两种操作可以平衡它们的影响，这足以在存在动量教师的情况下避免坍塌。选择这种方法来避免坍塌是以牺牲一定的稳定性为代价，换取对批次的更低依赖性：中心化操作仅依赖于一阶批次统计量，并且可以被解释为给教师网络增加一个偏置项c：gt(x) ← gt(x) + c。中心c通过指数移动平均进行更新，这使得该方法在不同批次大小下都能良好工作，如第5.5节所示：

c ← m c + (1 - m) (1/B) ∑\_{i=1}^B gθt(xi), (4)

其中m > 0是一个速率参数，B是批次大小。

教师输出的锐化是通过在softmax归一化中使用较低的温度τt来实现的。

We pretrain the models on the ImageNet dataset[60] without labels. We train with the adamw optimizer[44] and a batch size of 1024, distributed over 16 GPUs when using ViT-S/16. The learning rate is linearly ramped up during the first 10 epochs to its base value determined with the following linear scaling rule[29]: lr= 0.0005 ∗ batchsize/256. After this warmup, we decay the learning rate with a cosine schedule[43]. The weight decay also follows a cosine schedule from 0.04 to 0.4. The temperature τs is set to 0.1 while we use a linear warm-up for τt from 0.04 to 0.07 during the first 30 epochs. We follow the data augmentations of BYOL[30](color jittering, Gaussian blur and solarization) and multi-crop[10] with a bicubic interpolation to adapt the position embeddings to the scales[19, 69]. The code and models to reproduce our results is publicly available.

我们在ImageNet数据集[60]上无标签地预训练模型。使用AdamW优化器[44]，当采用ViT-S/16时，批次大小为1024，分布在16块GPU上。学习率在前10个epoch线性预热至基础值，该值根据如下线性缩放规则[29]确定：lr = 0.0005 × batchsize / 256。预热结束后，我们使用余弦调度[43]衰减学习率。权重衰减也遵循从0.04到0.4的余弦调度。学生温度τs设为0.1，而教师温度τt在前30个epoch内从0.04线性预热至0.07。我们采用BYOL[30]的数据增强（颜色抖动、高斯模糊和日光化）以及多裁剪[10]策略，并使用双三次插值来适配位置编码到不同尺度[19, 69]。用于复现我们结果的代码和模型已公开。

Standard protocols for self-supervised learning are to either learn a linear classifier on frozen features[82, 33] or to finetune the features on downstream tasks. For linear evaluations, we apply random resize crops and horizontal flips augmentation during training, and report accuracy on a central crop. For finetuning evaluations, we initialize networks with the pretrained weights and adapt them during training. However, both evaluations are sensitive to hyperparameters, and we observe a large variance in accuracy between runs when varying the learning rate for example. We thus also evaluate the quality of features with a simple weighted nearest neighbor classifier(k-NN) as in[73]. We freeze the pretrain model to compute and store the features of the training data of the downstream task. The nearest neighbor classifier then matches the feature of an image to the k nearest stored features that votes for the label. We sweep over different number of nearest neighbors and find that 20 NN is consistently working the best for most of our runs. This evaluation protocol does not require any other hyperparameter tuning, nor data augmentation and can be run with only one pass over the downstream dataset, greatly simplifying the feature evaluation.

自监督学习的标准评估协议包括两种：一是在冻结特征上训练线性分类器[82, 33]，二是在下游任务上微调特征。在线性评估中，我们在训练时使用随机缩放裁剪和水平翻转增强，并在中心裁剪上报告准确率。在微调评估中，我们用预训练权重初始化网络并在训练过程中进行调整。然而，这两种评估都对超参数敏感，例如当我们改变学习率时，不同运行之间的准确率方差很大。因此，我们也采用简单的加权最近邻分类器（k-NN）来评估特征质量[73]。我们冻结预训练模型，计算并存储下游任务训练数据的特征。最近邻分类器将一张图像的特征与k个最近的已存特征进行匹配，由这些特征投票决定标签。我们尝试了不同的k值，发现k=20在大多数实验中表现最佳。该评估协议无需其他超参数调优，也无需数据增强，且只需遍历一次下游数据集即可完成，极大简化了特征评估过程。

We consider two different settings: comparison with the same architecture and across architectures.

我们考虑两种不同设置：相同架构下的比较和跨架构比较。

In top panel of Table 2, we compare DINO with other self-supervised methods with the same architecture, either a ResNet-50[34] or a ViT-small(which follows the design of DeiT-S[69]). The choice of ViT-S is motivated by its similarity with ResNet-50 along several axes: number of parameters(21M vs 23M), throughput(1237/sec VS 1007 im/sec) and supervised performance on ImageNet with the training procedure of[69] (79.3% VS 79.8%). We explore variants of ViT-S in Appendix D. First, we observe that DINO performs on par with the state of the art on ResNet-50, validating that DINO works in the standard setting. When we switch to a ViT architecture, DINO outperforms BYOL, MoCov2 and SwAV by +3.5% with linear classification and by +7.9% with k-NN evaluation. More surprisingly, the performance with a simple k-NN classifier is almost on par with a linear classifier(74.5% versus 77.0%). This property emerges only when using DINO with ViT architectures, and does not appear with other existing self-supervised methods nor with a ResNet-50.

在表2的上半部分，我们将DINO与使用相同架构（ResNet-50[34]或ViT-small（遵循DeiT-S[69]设计））的其他自监督方法进行比较。选择ViT-S是因为它在多个方面与ResNet-50相似：参数量（21M vs 23M）、吞吐量（1237张/秒 vs 1007张/秒），以及在ImageNet上使用[69]训练流程的有监督性能（79.3% vs 79.8%）。我们在附录D中探索了ViT-S的变体。首先，我们观察到DINO在ResNet-50上达到了当前最先进水平，验证了DINO在标准设置下的有效性。当我们切换到ViT架构时，DINO在线性分类上比BYOL、MoCo v2和SwAV高出+3.5%，在k-NN评估上高出+7.9%。更令人惊讶的是，使用简单k-NN分类器的性能几乎与线性分类器相当（74.5% vs 77.0%）。这一特性仅在将DINO与ViT架构结合时出现，其他现有自监督方法或ResNet-50均未观察到。

On the bottom panel of Table 2, we compare the best performance obtained across architectures. The interest of this setting is not to compare methods directly, but to evaluate the limits of a ViT trained with DINO when moving to larger architectures. While training a larger ViT with DINO improves the performance, reducing the size of the patches(“/8” variants) has a bigger impact on the performance. While reducing the patch size do not add parameters, it still leads to a significant reduction of running time, and larger memory usage. Nonetheless, a base ViT with 8 × 8 patches trained with DINO achieves 80.1% top-1 in linear classification and 77.4% with a k-NN classifier with 10× less parameters and 1.4× faster run time than previous state of the art[13].

在表2的下半部分，我们比较了跨架构所能达到的最佳性能。该设置的目的并非直接比较方法，而是评估使用DINO训练的ViT在迁移到更大架构时的性能上限。虽然使用DINO训练更大的ViT能提升性能，但减小图像块尺寸（“/8”变体）对性能的影响更大。减小图像块尺寸虽不增加参数量，但仍会导致运行时间显著减少和内存占用增加。尽管如此，使用DINO训练的ViT-Base（8×8图像块）在线性分类上达到80.1%的top-1准确率，在k-NN分类器上达到77.4%，其参数量仅为之前最先进方法[13]的十分之一，运行速度却快1.4倍。

As shown qualitatively in Figure 1, our self-attention maps contain information about the segmentation of an image. In this study, we measure this property on a standard benchmark as well as by directly probing the quality of masks generated from these attention maps.

如图1所示，我们的自注意力图包含了图像分割的信息。在本研究中，我们不仅在标准基准上衡量这一特性，还通过直接探测由这些注意力图生成的掩码质量来进行评估。

In Tab. 5, we evaluate the output patch tokens on the DAVIS-2017 video instance segmentation benchmark[52]. We follow the experimental protocol in Jabri et al.[37] and segment scenes with a nearest-neighbor between consecutive frames; we thus do not train any model on top of the features, nor finetune any weights for the task. We observe in Tab. 5 that even though our training objective nor our architecture are designed for dense tasks, the performance is competitive on this benchmark. Since the network is not finetuned, the output of the model must have retained some spatial information. Finally, for this dense recognition task, the variants with small patches(“/8”) perform much better(+9.1%(J&F)m for ViT-B).

在表5中，我们在DAVIS-2017视频实例分割基准[52]上评估输出的图像块token。我们遵循Jabri等人[37]的实验协议，通过连续帧之间的最近邻进行场景分割；因此，我们没有在特征之上训练任何模型，也没有为该任务微调任何权重。表5显示，尽管我们的训练目标和架构并非为密集任务设计，但在该基准上仍具有竞争力。由于网络未经微调，模型输出必然保留了一定的空间信息。最后，对于这一密集识别任务，使用小图像块（“/8”）的变体表现要好得多（ViT-B的J&F指标提升+9.1%）。

In Fig. 3, we show that different heads can attend to different semantic regions of an image, even when they are occluded(the bushes on the third row) or small(the flag on the second row). Visualizations are obtained with 480p images, resulting in sequences of 3601 tokens for ViT-S/8. In Fig. 4, we show that a supervised ViT does not attend well to objects in presence of clutter both qualitatively and quantitatively. We report the Jaccard similarity between the ground truth and segmentation masks obtained by thresholding the self-attention map to keep 60% of the mass. Note that the self-attention maps are smooth and not optimized to produce a mask. Nonetheless, we see a clear difference between the supervised or DINO models with a significant gap in terms of Jaccard similarities. Note that self-supervised convnets also contain information about segmentations but it requires dedicated methods to extract it from their weights[31].

在图3中，我们展示了不同注意力头可以关注图像中不同的语义区域，即使这些区域被遮挡（第三行的灌木）或很小（第二行的旗帜）。可视化使用480p图像，ViT-S/8生成3601个token的序列。在图4中，我们定性和定量地表明，有监督的ViT在杂乱背景下无法很好地关注目标。我们报告了真实掩码与通过阈值化自注意力图（保留60%质量）生成的分割掩码之间的Jaccard相似度。需要注意的是，自注意力图是平滑的，并未针对生成掩码进行优化。尽管如此，我们仍能清晰看到有监督模型与DINO模型之间的显著差距。此外，自监督卷积网络也包含分割信息，但需要专门方法才能从其权重中提取[31]。

In Tab. 6, we evaluate the quality of the features pretrained with DINO on different downstream tasks. We compare with features from the same architectures trained with supervision on ImageNet. We follow the protocol used in Touvron et al.[69] and finetune the features on each downstream task. We observe that for ViT architectures, self-supervised pretraining transfers better than features trained with supervision, which is consistent with observations made on convolutional networks[10, 33, 62]. Finally, self-supervised pretraining greatly improves results on ImageNet(+1-2%).

在表6中，我们在不同下游任务上评估了使用DINO预训练的特征质量。我们将其与在ImageNet上使用监督训练的相同架构特征进行比较。我们遵循Touvron等人[69]使用的协议，在每个下游任务上微调特征。我们观察到，对于ViT架构，自监督预训练的迁移效果优于有监督训练的特征，这与在卷积网络上的观察一致[10, 33, 62]。最后，自监督预训练在ImageNet上带来了显著提升（+1–2%）。

In this section, we empirically study DINO applied to ViT. The model considered for this entire study is ViT-S. We also refer the reader to Appendix for additional studies.

在本节中，我们对应用于ViT的DINO进行了实证研究。整个研究中使用的模型均为ViT-S。我们还请读者参阅附录以了解额外研究。

We show the impact of adding different components from self-supervised learning on ViT trained with our framework.

我们展示了在我们的框架下训练ViT时，加入不同自监督学习组件的影响。

In Table 7, we report different model variants as we add or remove components. First, we observe that in the absence of momentum, our framework does not work(row 2) and more advanced operations, SK for example, are required to avoid collapse(row 9). However, with momentum, using SK has little impact(row 3). In addtition, comparing rows 3 and 9 highlights the importance of the momentum encoder for performance. Second, in rows 4 and 5, we observe that multi-crop training and the cross-entropy loss in DINO are important components to obtain good features. We also observe that adding a predictor to the student network has little impact(row 6) while it is critical in BYOL to prevent collapse[16, 30]. For completeness, we propose in Appendix B an extended version of this ablation study.

在表7中，我们报告了在添加或移除不同组件时的模型变体。首先，我们观察到在没有动量的情况下，我们的框架无法工作（第2行），此时需要更高级的操作（如SK）来避免坍塌（第9行）。然而，当使用动量时，SK的影响很小（第3行）。此外，比较第3行和第9行突显了动量编码器对性能的重要性。其次，在第4行和第5行中，我们观察到多裁剪训练和DINO中的交叉熵损失是获得良好特征的重要组件。我们还发现，为学生网络添加预测器影响甚微（第6行），而它在BYOL中对防止坍塌至关重要[16, 30]。为完整性起见，我们在附录B中提供了该消融研究的扩展版本。

In Fig. 5, we compare the k-NN classification performance of ViT-S models trained with different patch sizes, 16 × 16, 8 × 8 and 5 × 5. We also compare to ViT-B with 16 × 16 and 8 × 8 patches. All the models are trained for 300 epochs. We observe that the performance greatly improves as we decrease the size of the patch. It is interesting to see that performance can be greatly improved without adding additional parameters. However, the performance gain from using smaller patches comes at the expense of throughput: when using 5×5 patches, the throughput falls to 44 im/s, vs 180 im/s for 8×8 patches.

在图5中，我们比较了使用不同图像块尺寸（16×16、8×8和5×5）训练的ViT-S模型的k-NN分类性能。我们还与使用16×16和8×8图像块的ViT-B进行了比较。所有模型均训练300个epoch。我们观察到，随着图像块尺寸减小，性能大幅提升。有趣的是，这种性能提升无需增加额外参数。然而，使用更小图像块带来的性能增益是以吞吐量为代价的：使用5×5图像块时，吞吐量降至44张/秒，而8×8图像块为180张/秒。

In this ablation, we experiment with different teacher network to understand its role in DINO. We compare models trained for 300 epochs using the k-NN protocol.

在此消融实验中，我们尝试了不同的教师网络，以理解其在DINO中的作用。我们使用k-NN协议比较了训练300个epoch的模型。

In Fig. 6(right), we compare different strategies to build the teacher from previous instances of the student besides the momentum teacher. First we consider using the student network from a previous epoch as a teacher. This strategy has been used in a memory bank[73] or as a form of clustering hard-distillation[8, 2, 14]. Second, we consider using the student network from the previous iteration, as well as a copy of the student for the teacher. In our setting, using a teacher based on a recent version of the student does not converge. This setting requires more normalizations to work. Interestingly, we observe that using a teacher from the previous epoch does not collapse, providing performance in the k-NN evaluation competitive with existing frameworks such as MoCo-v2 or BYOL. While using a momentum encoder clearly provides superior performance to this naive teacher, this finding suggests that there is a space to investigate alternatives for the teacher.

在图6（右）中，我们比较了除动量教师外，从学生网络历史版本构建教师的不同策略。首先，我们考虑使用前一个epoch的学生网络作为教师。该策略曾用于记忆库[73]或聚类硬蒸馏[8, 2, 14]。其次，我们考虑使用上一次迭代的学生网络，或直接复制学生作为教师。在我们的设置中，基于学生近期版本的教师无法收敛，需要更多归一化操作才能工作。有趣的是，我们观察到使用前一个epoch的学生作为教师不会坍塌，其k-NN评估性能可与MoCo-v2或BYOL等现有框架竞争。尽管动量编码器显然优于这种朴素教师，但这一发现表明仍有空间探索教师网络的替代方案。

To further understand the reasons why a momentum teacher works well in our framework, we study its dynamic during the training of a ViT in the left panel of Fig. 6. A key observation is that this teacher constantly outperforms the student during the training, and we observe the same behavior when training with a ResNet-50(Appendix D). This behavior has not been observed by other frameworks also using momentum[33, 30], nor when the teacher is built from the previous epoch. We propose to interpret the momentum teacher in DINO as a form of Polyak-Ruppert averaging[51, 59] with an exponentially decay. Polyak-Ruppert averaging is often used to simulate model ensembling to improve the performance of a network at the end of the training[38]. Our method can be interpreted as applying Polyak-Ruppert averaging during the training to constantly build a model ensembling that has superior performances. This model ensembling then guides the training of the student network[65].

为了进一步理解为何动量教师在我们的框架中表现良好，我们在图6左侧面板中研究了ViT训练过程中其动态变化。一个关键观察是，该教师在整个训练过程中始终优于学生，我们在使用ResNet-50训练时也观察到相同行为（附录D）。这种现象在其他同样使用动量的框架[33, 30]中未被观察到，当教师由前一个epoch构建时也未出现。我们将DINO中的动量教师解释为一种带指数衰减的Polyak-Ruppert平均[51, 59]。Polyak-Ruppert平均常用于模拟模型集成，以提升网络在训练结束时的性能[38]。我们的方法可被解释为在训练过程中持续应用Polyak-Ruppert平均，不断构建性能更优的模型集成，进而指导学生网络的训练[65]。

We study the complementarity role of centering and target sharpening to avoid collapse. There are two forms of collapse: regardless of the input, the model output is uniform along all the dimensions or dominated by one dimension. The centering avoids the collapse induced by a dominant dimension, but encourages an uniform output. Sharpening induces the opposite effect. We show this complementarity by decomposing the cross-entropy H into an entropy h and the Kullback-Leibler divergence(“KL”) DKL:

H(Pt, Ps)= h(Pt)+ DKL(Pt|Ps). (5)

A KL equal to zero indicates a constant output, and hence a collapse. In Fig. 7, we plot the entropy and KL during training with and without centering and sharpening. If one operation is missing, the KL converges to zero, indicating a collapse. However, the entropy h converges to different values: 0 with no centering and − log(1/K) with no sharpening, indicating that both operations induce different form of collapse. Applying both operations balances these effects (see study of the sharpening parameter τt in Appendix D).

我们研究了中心化和目标锐化在避免坍塌中的互补作用。坍塌有两种形式：无论输入如何，模型输出在所有维度上均匀分布，或被某一维度主导。中心化可避免由主导维度引起的坍塌，但会促使输出趋于均匀；锐化则产生相反效果。我们通过将交叉熵H分解为熵h和Kullback-Leibler散度（“KL”）DKL来展示这种互补性：

H(Pt, Ps) = h(Pt) + DKL(Pt || Ps). (5)

KL等于零表示输出恒定，即发生坍塌。在图7中，我们绘制了有无中心化和锐化时训练过程中的熵和KL值。若缺少任一操作，KL会收敛至零，表明发生坍塌。但熵h收敛到不同值：无中心化时为0，无锐化时为−log(1/K)，表明两种操作引发不同形式的坍塌。同时应用两种操作可平衡这些效应（参见附录D中对锐化参数τt的研究）。

In Tab. 8, we detail the time and GPU memory requirements when running ViT-S/16 DINO models on two 8-GPU machines. We report results with several variants of multi-crop training, each having a different level of compute requirement. We observe in Tab. 8 that using multi-crop improves the accuracy/ running-time tradeoff for DINO runs. For example, the performance is 72.5% after 46 hours of training without multi-crop(i.e. 2×2242) while DINO in 2×2242+10×962 crop setting reaches 74.6% in 24 hours only. This is an improvement of +2% while requiring 2× less time, though the memory usage is higher(15.4G versus 9.3G). We observe that the performance boost brought with multi-crop cannot be caught up by more training in the 2×2242 setting, which shows the value of the “local-to-global” augmentation. Finally, the gain from adding more views diminishes(+.2% form 6× to 10× 962 crops) for longer trainings. Overall, training DINO with Vision Transformers achieves 76.1 top-1 accuracy using two 8-GPU servers for 3 days. This result outperforms state-of-the-art self-supervised systems based on convolutional networks of comparable sizes with a significant reduction of computational requirements[10, 30]. Our code is available to train self-supervised ViT on a limited number of GPUs.

在表8中，我们详细列出了在两台8-GPU机器上运行ViT-S/16 DINO模型的时间和GPU内存需求。我们报告了多种多裁剪训练变体的结果，每种变体的计算需求不同。表8显示，使用多裁剪可改善DINO运行的准确率/运行时间权衡。例如，不使用多裁剪（即2×224²）训练46小时后性能为72.5%，而DINO在2×224²+10×96²裁剪设置下仅需24小时就达到74.6%。这在节省一半时间的同时提升了+2%的性能，尽管内存占用更高（15.4G vs 9.3G）。我们观察到，多裁剪带来的性能提升无法通过在2×224²设置下延长训练时间来弥补，这凸显了“局部到全局”增强的价值。最后，增加更多视图的收益会递减（从6×到10×96²裁剪，长训练下仅提升+0.2%）。总体而言，使用视觉Transformer训练DINO仅需两台8-GPU服务器运行3天，即可在ImageNet线性基准上达到76.1%的top-1准确率。这一结果优于基于卷积网络的、规模相当的自监督系统，并显著降低了计算需求[10, 30]。我们的代码支持在有限GPU数量下训练自监督ViT。

In Tab. 9, we study the impact of the batch size on the features obtained with DINO. We also study the impact of the smooth parameter m used in the centering update rule of Eq. 4 in Appendix D. We scale the learning rate linearly with the batch size[29]: lr= 0.0005 ∗ batchsize/256. Tab. 9 confirms that we can train models to high performance with small batches. Results with the smaller batch sizes(bs= 128) are slightly below our default training setup of bs= 1024, and would certainly require to re-tune hyperparameters like the momentum rates for example. Note that the experiment with batch size of 128 runs on only 1 GPU. We have explored training a model with a batch size of 8, reaching 35.2% after 50 epochs, showing the potential for training large models that barely fit an image per GPU.

在表9中，我们研究了批次大小对DINO所得特征的影响。我们还在附录D中研究了中心化更新规则（公式4）中平滑参数m的影响。我们按照批次大小线性缩放学习率[29]：lr = 0.0005 × batchsize / 256。表9证实，我们可以使用小批次训练出高性能模型。较小批次大小（bs=128）的结果略低于默认设置（bs=1024），可能需要重新调整动量率等超参数。注意，批次大小为128的实验仅在1块GPU上运行。我们还尝试了批次大小为8的训练，在50个epoch后达到35.2%的准确率，展示了在每GPU仅能容纳一张图像的情况下训练大模型的潜力。

## Note

- **揭示自监督ViT的独特涌现特性**：DINO 的核心发现是，通过自监督学习训练的 ViT 能够涌现出有监督 ViT 或卷积网络所不具备的新特性。最显著的是，其**自注意力图能直接反映图像的语义分割和物体边界**，这为密集预测任务提供了强大的先验。
- **无标签自蒸馏框架**：DINO 将自监督学习巧妙地重构为一种**无标签的知识自蒸馏（self-distillation）** 过程。学生网络（student）学习去预测由动量编码器（momentum encoder）构建的教师网络（teacher）的输出，整个过程不依赖任何外部标签。

1.  **动量编码器（Momentum Encoder）**：教师网络的参数并非独立学习，而是通过学生网络权重的**指数移动平均（EMA）** 动态更新。这种设计不仅稳定了训练、有效防止了模型坍塌（collapse），而且使教师成为一个性能持续优于学生的“Mean Teacher”，从而提供高质量的学习目标。
2.  **多裁剪训练策略（Multi-crop Training）**：同时使用高分辨率的全局视图和低分辨率的局部视图进行训练。学生网络处理所有视图，而教师网络仅处理全局视图。这种“**局部到全局（local-to-global）**”的对应关系极大地丰富了学习信号，是提升特征质量的关键。
3.  **中心化与锐化（Centering & Sharpening）**：通过在教师输出上应用**中心化（减去批次均值）** 和**锐化（使用低温 softmax）**，可以在不引入复杂组件（如对比损失、聚类或预测头）的情况下，有效且简洁地避免模型坍塌。

- **卓越的线性评估性能**：DINO 预训练的 ViT-Base 模型在 ImageNet 线性探测（linear probing）基准上达到了 **80.1%** 的 top-1 准确率，显著超越了当时的自监督方法。
- **惊人的 k-NN 分类能力**：自监督 ViT 特征配合简单的 k-NN 分类器，在无需微调、线性分类器或数据增强的情况下，就能在 ImageNet 上达到 **78.3%** 的准确率。这表明 DINO 学到的特征本身具有极强的判别性和通用性。
- **架构协同效应**：DINO 与 ViT 架构展现出强大的协同效应。使用更小的图像块（如 8x8）能显著提升性能，因为这增加了序列长度，使自注意力机制能捕捉更细粒度的信息，从而更好地支持分割等密集任务。
- **高效且灵活**：DINO 框架设计简洁，无需批归一化（BN），使其能无缝应用于 ViT 和 ResNet。它对计算资源的要求相对友好，仅用两台 8-GPU 服务器训练 3 天即可获得高性能模型，为大规模自监督学习提供了实用方案。

# Tip-Adapter

@see: https://arxiv.org/abs/2111.03930

[v1] Sat, 6 Nov 2021 18:09:22 UTC (5,104 KB)
[v2] Mon, 15 Nov 2021 04:58:28 UTC (5,104 KB)

## Paper

## Paper

Few-shot learning aims to recognize novel classes with only a few labeled examples. While pre-trained vision-language models like CLIP have shown strong zero-shot capabilities, their performance drops significantly in few-shot settings. Existing methods typically fine-tune the model or learn additional prompts, which requires training time and computational resources.

少样本学习旨在仅用少量标注样本来识别新类别。虽然像 CLIP 这样的预训练视觉 - 语言模型展现了强大的零样本能力，但它们在少样本设置下的性能显著下降。现有方法通常微调模型或学习额外的提示，这需要训练时间和计算资源。

In this paper, we propose Tip-Adapter, a training-free adaptation method for CLIP that achieves competitive few-shot performance without any gradient updates. Our key insight is that the pre-trained CLIP model already contains rich visual and semantic knowledge. Instead of modifying the model weights, we can leverage the few-shot support samples to build a lightweight cache model that adapts the visual features to the target task.

在本文中，我们提出了 Tip-Adapter，一种针对 CLIP 的无需训练 (training-free) 适配方法，它在无需任何梯度更新的情况下实现了有竞争力的少样本性能。我们的关键洞察是，预训练的 CLIP 模型已经包含了丰富的视觉和语义知识。我们不修改模型权重，而是利用少样本支持样本构建一个轻量级的缓存模型 (cache model)，将视觉特征适配到目标任务。

The Tip-Adapter consists of two components: a frozen CLIP encoder and a lightweight cache model. Given a few-shot support set, we extract visual features from the support images using the frozen CLIP image encoder. These features are stored as keys in the cache model, while the corresponding one-hot labels are stored as values.

Tip-Adapter 由两个组件组成：一个冻结的 CLIP 编码器和一个轻量级缓存模型。给定一个少样本支持集，我们使用冻结的 CLIP 图像编码器从支持图像中提取视觉特征。这些特征作为键 (keys) 存储在缓存模型中，而对应的独热标签 (one-hot labels) 作为值 (values) 存储。

For a query image, we first obtain its visual feature using the frozen CLIP encoder. Then, we compute the affinity between the query feature and the cached keys using a simple dot-product operation. This affinity score is used to retrieve the corresponding values (labels) from the cache. The final prediction is a combination of the zero-shot CLIP prediction and the cache-based retrieval result.

对于查询图像，我们首先使用冻结的 CLIP 编码器获取其视觉特征。然后，我们通过简单的点积运算计算查询特征与缓存键之间的亲和力 (affinity)。该亲和力分数用于从缓存中检索对应的值（标签）。最终预测是零样本 CLIP 预测和基于缓存的检索结果的组合。

Specifically, let $F_{train}$ be the cached features (keys) and $L_{train}$ be the cached labels (values). For a query feature $f$, the cache output is computed as:
$$ \text{Output}_{cache} = \text{softmax}(f \cdot F_{train}^T / \tau) \cdot L*{train} $$
where $\tau$ is a temperature parameter. The final logit is:
$$ \text{Logit}*{final} = \text{Logit}_{zeroshot} + \alpha \cdot \text{Output}_{cache} $$
where $\alpha$ is a scaling factor that balances the zero-shot and few-shot contributions.

具体而言，设 $F_{train}$ 为缓存特征（键），$L_{train}$ 为缓存标签（值）。对于查询特征 $f$，缓存输出计算为：
$$ \text{Output}_{cache} = \text{softmax}(f \cdot F_{train}^T / \tau) \cdot L*{train} $$
其中 $\tau$ 是温度参数。最终 logits 为：
$$ \text{Logit}*{final} = \text{Logit}_{zeroshot} + \alpha \cdot \text{Output}_{cache} $$
其中 $\alpha$ 是平衡零样本和少样本贡献的缩放因子。

We evaluate Tip-Adapter on several benchmark datasets including ImageNet, Caltech101, and OxfordPets. In 16-shot settings, Tip-Adapter achieves an average accuracy of 68.5% on ImageNet, outperforming zero-shot CLIP (62.3%) by a large margin. Notably, Tip-Adapter matches or exceeds the performance of training-based methods like CoOp and CLIP-Adapter, but requires zero training time and zero gradient updates.

我们在包括 ImageNet、Caltech101 和 OxfordPets 在内的多个基准数据集上评估了 Tip-Adapter。在 16 样本设置下，Tip-Adapter 在 ImageNet 上达到了 68.5% 的平均准确率，大幅超越了零样本 CLIP (62.3%)。值得注意的是，Tip-Adapter 匹配甚至超过了 CoOp 和 CLIP-Adapter 等基于训练的方法的性能，但需要零训练时间和零梯度更新。

Ablation studies show that:

- Cache size matters: Performance improves with more support samples, saturating around 16-32 shots.
- Temperature parameter: A proper temperature $\tau$ (e.g., 10-20) is crucial for balancing the affinity scores.
- Scaling factor $\alpha$: The balance between zero-shot and cache contributions is important; $\alpha=1.0$ to $2.0$ works best in most cases.
- Feature normalization: L2-normalizing both query and cache features significantly improves stability and performance.

消融实验表明：

- 缓存大小很重要：性能随着支持样本数量的增加而提高，在 16-32 样本左右趋于饱和。
- 温度参数：合适的温度 $\tau$（例如 10-20）对于平衡亲和力分数至关重要。
- 缩放因子 $\alpha$：零样本和缓存贡献之间的平衡很重要；$\alpha=1.0$ 到 $2.0$ 在大多数情况下效果最好。
- 特征归一化：对查询和缓存特征进行 L2 归一化显著提高了稳定性和性能。

We also explore the efficiency of Tip-Adapter. Since it requires no training, the adaptation time is negligible (less than 1 second for building the cache on a GPU). Inference speed is only slightly slower than zero-shot CLIP due to the additional matrix multiplication with the cache.

我们还探索了 Tip-Adapter 的效率。由于它不需要训练，适配时间可以忽略不计（在 GPU 上构建缓存不到 1 秒）。由于与缓存进行了额外的矩阵乘法，推理速度仅比零样本 CLIP 稍慢。

In conclusion, Tip-Adapter demonstrates that effective few-shot adaptation can be achieved without any training. By leveraging the pre-trained knowledge of CLIP and a simple cache mechanism, we achieve state-of-the-art performance with minimal computational overhead. This makes Tip-Adapter highly suitable for real-world applications where rapid deployment and low resource consumption are critical.

总之，Tip-Adapter 证明了无需任何训练即可实现有效的少样本适配。通过利用 CLIP 的预训练知识和简单的缓存机制，我们以最小的计算开销实现了最先进的性能。这使得 Tip-Adapter 非常适合快速部署和低资源消耗至关重要的现实世界应用。

## Note

Tip-Adapter 的核心贡献在于提出了**"无需训练 (Training-Free)"**的少样本适配范式，彻底打破了"少样本学习必须微调"的传统思维。

**关键技术组件：**

1.  **冻结骨干网络 (Frozen Backbone)**：完全复用预训练 CLIP 的图像编码器，不进行任何权重更新。
2.  **缓存模型 (Cache Model)**：
    - **Key**：支持集图像的视觉特征 ($F_{train}$)。
    - **Value**：支持集图像的独热标签 ($L_{train}$)。
    - **机制**：通过点积计算查询特征与缓存特征的亲和力，直接检索标签分布。
3.  **线性融合策略**：最终预测 = 零样本 CLIP 预测 + $\alpha \times$ 缓存检索结果。简单有效，无需学习融合权重。
4.  **超参数极少**：仅需调节温度 $\tau$ 和缩放因子 $\alpha$，无需优化器、学习率、训练轮次等复杂超参。

**性能表现：**

- **ImageNet 16-shot**：68.5% 准确率，超越零样本 CLIP (+6.2%)，媲美微调方法 (CoOp, CLIP-Adapter)。
- **效率**：适配时间 < 1 秒，训练时间为 0，显存占用极低。
- **泛化性**：在 Caltech101, OxfordPets 等多个数据集上一致有效。

# MAE

@see: https://arxiv.org/abs/2111.06377

[v1] Thu, 11 Nov 2021 18:46:40 UTC (6,839 KB)
[v2] Thu, 2 Dec 2021 18:30:33 UTC (6,840 KB)
[v3] Sun, 19 Dec 2021 19:23:25 UTC (6,841 KB)

## Paper

This paper shows that masked autoencoders (MAE) are scalable self-supervised learners for computer vision. Our MAE approach is simple: we mask random patches of the input image and reconstruct the missing pixels. It is based on two core designs. First, we develop an asymmetric encoder-decoder architecture, with an encoder that operates only on the visible subset of patches (without mask tokens), along with a lightweight decoder that reconstructs the original image from the latent representation and mask tokens. Second, we find that masking a high proportion of the input image, e.g., 75%, yields a nontrivial and meaningful self-supervisory task. Coupling these two designs enables us to train large models efficiently and effectively: we accelerate training (by 3× or more) and improve accuracy. Our scalable approach allows for learning high-capacity models that generalize well: e.g., a vanilla ViT-Huge model achieves the best accuracy (87.8%) among methods that use only ImageNet-1K data. Transfer performance in downstream tasks outperforms supervised pre-training and shows promising scaling behavior.

本文表明，掩码自编码器（MAE）是计算机视觉领域可扩展的自监督学习器。我们的 MAE 方法很简单：我们对输入图像的随机图像块进行掩码，并重建缺失的像素。该方法基于两个核心设计。首先，我们开发了一种非对称的编码器-解码器架构，其中编码器仅在可见的图像块子集上运行（不使用掩码标记），而一个轻量级的解码器则从潜在表示和掩码标记中重建原始图像。其次，我们发现对输入图像的高比例部分（例如75%）进行掩码，可以产生一个非平凡且有意义的自监督任务。将这两个设计相结合，使我们能够高效且有效地训练大型模型：我们加速了训练（3倍或更多），并提高了准确性。我们这种可扩展的方法能够学习到泛化能力强的高容量模型：例如，一个普通的 ViT-Huge 模型在仅使用 ImageNet-1K 数据的方法中取得了最佳准确率（87.8%）。在下游任务中的迁移性能优于有监督预训练，并展现出良好的扩展性。

The idea of masked autoencoders, a form of more general denoising autoencoders, is natural and applicable in computer vision as well. ... However, despite significant interest in this idea following the success of BERT, progress of autoencoding methods in vision lags behind NLP. We ask: what makes masked autoencoding different between vision and language? We attempt to answer this question from the following perspectives: (i) Until recently, architectures were different. ... This architectural gap, however, has been addressed with the introduction of Vision Transformers (ViT) and should no longer present an obstacle. (ii) Information density is different between language and vision. Languages are human-generated signals that are highly semantic and information-dense. ... Images, on the contrary, are natural signals with heavy spatial redundancy—e.g., a missing patch can be recovered from neighboring patches with little high-level understanding of parts, objects, and scenes. To overcome this difference and encourage learning useful features, we show that a simple strategy works well in computer vision: masking a very high portion of random patches. This strategy largely reduces redundancy and creates a challenging self-supervisory task that requires holistic understanding beyond low-level image statistics. ... (iii) The autoencoder’s decoder, which maps the latent representation back to the input, plays a different role between reconstructing text and images. In vision, the decoder reconstructs pixels, hence its output is of a lower semantic level than common recognition tasks. ... While in BERT the decoder can be trivial (an MLP), we found that for images, the decoder design plays a key role in determining the semantic level of the learned latent representations.

掩码自编码器的想法，作为一种更通用的去噪自编码器形式，在计算机视觉中同样是自然且适用的。……然而，尽管在 BERT 成功之后，这一想法引起了极大关注，但视觉领域的自编码方法进展却落后于 NLP。我们提出疑问：是什么导致了视觉与语言在掩码自编码上的差异？我们尝试从以下几个角度回答这个问题：(i) 直到最近，架构是不同的。……然而，随着 Vision Transformer (ViT) 的引入，这一架构差距已被解决，不应再构成障碍。(ii) 语言和视觉的信息密度不同。语言是人类生成的信号，具有高度的语义性和信息密集性。……相反，图像是具有严重空间冗余的自然信号——例如，一个缺失的图像块可以从相邻的图像块中恢复，而无需对部件、物体和场景有太多高层次的理解。为了克服这一差异并鼓励学习有用的特征，我们展示了在计算机视觉中一个简单的策略非常有效：对非常高比例的随机图像块进行掩码。这一策略大大减少了冗余，并创造了一个具有挑战性的自监督任务，该任务需要超越底层图像统计的整体理解。……(iii) 将潜在表示映射回输入的自编码器解码器，在重建文本和图像时扮演着不同的角色。在视觉中，解码器重建的是像素，因此其输出的语义层次低于常见的识别任务。……而在 BERT 中，解码器可以很简单（一个MLP），但我们发现对于图像而言，解码器的设计在决定所学潜在表示的语义层次方面起着关键作用。

Driven by this analysis, we present a simple, effective, and scalable form of a masked autoencoder (MAE) for visual representation learning. Our MAE masks random patches from the input image and reconstructs the missing patches in the pixel space. It has an asymmetric encoder-decoder design. Our encoder operates only on the visible subset of patches (without mask tokens), and our decoder is lightweight and reconstructs the input from the latent representation along with mask tokens. Shifting the mask tokens to the small decoder in our asymmetric encoder-decoder results in a large reduction in computation. Under this design, a very high masking ratio (e.g., 75%) can achieve a win-win scenario: it optimizes accuracy while allowing the encoder to process only a small portion (e.g., 25%) of patches. This can reduce overall pre-training time by 3× or more and likewise reduce memory consumption, enabling us to easily scale our MAE to large models.

受此分析的驱动，我们提出了一种用于视觉表征学习的简单、有效且可扩展的掩码自编码器（MAE）形式。我们的 MAE 从输入图像中掩码随机图像块，并在像素空间中重建缺失的图像块。它采用了一种非对称的编码器-解码器设计。我们的编码器仅在可见的图像块子集上运行（不使用掩码标记），而我们的解码器是轻量级的，它从潜在表示和掩码标记中重建输入。在这种非对称的编码器-解码器设计中，将掩码标记移至小型解码器，可以大幅减少计算量。在此设计下，非常高的掩码率（例如75%）可以实现双赢：它优化了准确性，同时允许编码器只处理一小部分（例如25%）的图像块。这可以将整体预训练时间减少3倍或更多，并同样减少内存消耗，使我们能够轻松地将 MAE 扩展到大型模型。

Our MAE learns very high-capacity models that generalize well. With MAE pre-training, we can train data-hungry models like ViT-Large/-Huge on ImageNet-1K with improved generalization performance. With a vanilla ViT-Huge model, we achieve 87.8% accuracy when fine-tuned on ImageNet-1K. This outperforms all previous results that use only ImageNet-1K data. We also evaluate transfer learning on object detection, instance segmentation, and semantic segmentation. In these tasks, our pre-training achieves better results than its supervised pre-training counterparts, and more importantly, we observe significant gains by scaling up models.

我们的 MAE 能够学习到泛化能力很强的超高容量模型。通过 MAE 预训练，我们可以在 ImageNet-1K 上训练像 ViT-Large/-Huge 这样数据饥渴的模型，并获得更好的泛化性能。使用一个普通的 ViT-Huge 模型，我们在 ImageNet-1K 上微调后达到了87.8%的准确率。这超越了所有仅使用 ImageNet-1K 数据的先前结果。我们还在目标检测、实例分割和语义分割等任务上评估了迁移学习性能。在这些任务中，我们的预训练结果优于有监督预训练的对应模型，更重要的是，我们观察到通过扩大模型规模能带来显著的收益。

Masking. Following ViT, we divide an image into regular non-overlapping patches. Then we sample a subset of patches and mask (i.e., remove) the remaining ones. Our sampling strategy is straightforward: we sample random patches without replacement, following a uniform distribution. We simply refer to this as “random sampling”. Random sampling with a high masking ratio (i.e., the ratio of removed patches) largely eliminates redundancy, thus creating a task that cannot be easily solved by extrapolation from visible neighboring patches. The uniform distribution prevents a potential center bias (i.e., more masked patches near the image center). Finally, the highly sparse input creates an opportunity for designing an efficient encoder, introduced next.

掩码。遵循 ViT，我们将图像划分为规则的、不重叠的图像块。然后我们采样一部分图像块，并掩码（即移除）其余部分。我们的采样策略很简单：我们按照均匀分布，无放回地随机采样图像块。我们简单地称之为“随机采样”。高掩码率（即被移除图像块的比例）下的随机采样在很大程度上消除了冗余，从而创造了一个无法通过可见邻近图像块简单外推来解决的任务。均匀分布避免了潜在的中心偏置（即图像中心附近有更多被掩码的图像块）。最后，这种高度稀疏的输入为设计一个高效的编码器创造了机会，如下所述。

MAE encoder. Our encoder is a ViT but applied only on visible, unmasked patches. Just as in a standard ViT, our encoder embeds patches by a linear projection with added positional embeddings, and then processes the resulting set via a series of Transformer blocks. However, our encoder only operates on a small subset (e.g., 25%) of the full set. Masked patches are removed; no mask tokens are used. This allows us to train very large encoders with only a fraction of compute and memory.

MAE 编码器。我们的编码器是一个 ViT，但仅应用于可见的、未被掩码的图像块。与标准 ViT 一样，我们的编码器通过线性投影（并添加位置嵌入）来嵌入图像块，然后通过一系列 Transformer 块处理得到的集合。然而，我们的编码器只在完整集合的一小部分（例如25%）上运行。被掩码的图像块会被移除；不使用掩码标记。这使得我们能够用一小部分的计算和内存来训练非常大的编码器。

MAE decoder. The input to the MAE decoder is the full set of tokens consisting of (i) encoded visible patches, and (ii) mask tokens. ... Each mask token is a shared, learned vector that indicates the presence of a missing patch to be predicted. We add positional embeddings to all tokens in this full set; without this, mask tokens would have no information about their location in the image. The decoder has another series of Transformer blocks. The MAE decoder is only used during pre-training to perform the image reconstruction task (only the encoder is used to produce image representations for recognition). Therefore, the decoder architecture can be flexibly designed in a manner that is independent of the encoder design. We experiment with very small decoders, narrower and shallower than the encoder. For example, our default decoder has <10% computation per token vs. the encoder. With this asymmetrical design, the full set of tokens are only processed by the lightweight decoder, which significantly reduces pre-training time.

MAE 解码器。MAE 解码器的输入是完整的标记集合，由 (i) 已编码的可见图像块和 (ii) 掩码标记组成。……每个掩码标记都是一个共享的、可学习的向量，用于指示一个待预测的缺失图像块的存在。我们为这个完整集合中的所有标记都添加了位置嵌入；如果没有这一步，掩码标记将无法获知它们在图像中的位置信息。解码器包含另一系列的 Transformer 块。MAE 解码器仅在预训练期间用于执行图像重建任务（在识别任务中，仅使用编码器来生成图像表征）。因此，解码器的架构可以灵活设计，且独立于编码器的设计。我们尝试了非常小的解码器，其宽度和深度都小于编码器。例如，我们默认的解码器每个标记的计算量不到编码器的10%。通过这种非对称设计，完整的标记集合仅由轻量级的解码器处理，这显著减少了预训练时间。

Reconstruction target. Our MAE reconstructs the input by predicting the pixel values for each masked patch. ... Our loss function computes the mean squared error (MSE) between the reconstructed and original images in the pixel space. We compute the loss only on masked patches, similar to BERT.

重建目标。我们的 MAE 通过预测每个被掩码图像块的像素值来重建输入。……我们的损失函数计算重建图像与原始图像在像素空间中的均方误差（MSE）。我们仅在被掩码的图像块上计算损失，这与 BERT 类似。

Simple implementation. Our MAE pre-training can be implemented efficiently, and importantly, does not require any specialized sparse operations. First we generate a token for every input patch (by linear projection with an added positional embedding). Next we randomly shuffle the list of tokens and remove the last portion of the list, based on the masking ratio. This process produces a small subset of tokens for the encoder and is equivalent to sampling patches without replacement. After encoding, we append a list of mask tokens to the list of encoded patches, and unshuffle this full list (inverting the random shuffle operation) to align all tokens with their targets. The decoder is applied to this full list (with positional embeddings added). As noted, no sparse operations are needed. This simple implementation introduces negligible overhead as the shuffling and unshuffling operations are fast.

简易实现。我们的 MAE 预训练可以高效地实现，并且重要的是，不需要任何专门的稀疏操作。首先，我们为每个输入图像块生成一个标记（通过线性投影并添加位置嵌入）。接下来，我们随机打乱标记列表，并根据掩码率移除列表的最后部分。这个过程为编码器生成了一个小的标记子集，并且等同于无放回地采样图像块。编码之后，我们将一个掩码标记列表附加到已编码的图像块列表后面，然后对这个完整的列表进行“反打乱”（即反转随机打乱操作），以使所有标记与其目标对齐。解码器应用于这个完整的列表（并添加位置嵌入）。如前所述，不需要稀疏操作。这种简易实现引入的开销可以忽略不计，因为打乱和反打乱操作非常快。

## Note

- **弥合视觉与语言自监督学习的差距**：受 NLP 中 BERT 成功的启发，MAE 旨在将“掩码建模”这一强大范式有效迁移到计算机视觉领域。它解决了直接套用 BERT 思想到图像上效果不佳的核心问题——**图像的高空间冗余性**。简单地掩码少量像素或图像块，模型很容易通过局部平滑性进行插值，无法学习到高层次的语义信息。
- **创造有意义的自监督任务**：通过**极高比例（如75%）的随机掩码**，MAE 极大地降低了输入的冗余度，迫使模型必须基于可见的、稀疏的线索进行**整体推理（holistic reasoning）**，从而学习到关于物体、场景及其组成部分的深层语义和结构知识。

1.  **非对称编码器-解码器架构 (Asymmetric Encoder-Decoder)**：
    - **轻量级编码器**：仅在未被掩码的**一小部分（如25%）可见图像块**上运行，且**不引入任何掩码标记（mask tokens）**。这极大地减少了编码阶段的计算和内存开销，是实现高效训练大型模型的关键。
    - **轻量级解码器**：在预训练阶段，接收完整的标记序列（已编码的可见块 + 可学习的掩码标记），并负责重建原始像素。解码器可以设计得非常小（计算量<编码器的10%），因为它只在预训练时使用，不影响下游任务的推理效率。
2.  **高比例随机掩码策略**：采用简单的均匀分布进行无放回采样，避免了中心偏置，并确保了任务的挑战性。
3.  **像素级重建目标**：直接在像素空间使用 MSE 损失进行重建，目标明确且易于优化。

- **卓越的扩展性 (Scalability)**：得益于其高效的非对称设计，MAE 能够轻松地预训练超大规模的 ViT 模型（如 ViT-Huge），而计算成本远低于传统方法。
- **顶尖的微调性能**：仅使用 ImageNet-1K 数据预训练的 vanilla ViT-Huge 模型，在微调后达到了 **87.8%** 的 top-1 准确率，刷新了当时仅用 IN1K 数据的记录。
- **强大的迁移能力**：在目标检测、实例分割、语义分割等下游密集预测任务上，MAE 预训练的模型性能**全面超越**了有监督预训练的基线，证明了其学到的表征具有极强的通用性和鲁棒性。
- **训练效率高**：整体预训练时间可加速 **3倍以上**，同时显著降低内存消耗。

### 总结

MAE 的成功在于其**简洁而深刻的设计哲学**：通过一个看似简单的高比例掩码操作，结合一个精心设计的非对称架构，巧妙地将一个计算昂贵的问题转化为一个高效且富有挑战性的自监督学习任务。它不仅为视觉基础模型的训练提供了一个强大的新范式，也清晰地展示了**数据效率**（仅用IN1K）、**模型规模**和**算法设计**三者结合所能释放的巨大潜力。

# DINOv2

[v1] Fri, 14 Apr 2023 15:12:19 UTC (6,968 KB)

@see: https://arxiv.org/abs/2304.07193

## Paper

The recent breakthroughs in natural language processing for model pretraining on large quantities of data have opened the way for similar foundation models in computer vision. These models could greatly simplify the use of images in any system by producing general-purpose visual features, i.e., features that work across image distributions and tasks without finetuning. This work shows that existing pretraining methods, especially self-supervised methods, can produce such features if trained on enough curated data from diverse sources.

近期自然语言处理领域在大规模数据上进行模型预训练所取得的突破，为计算机视觉领域类似的基础模型铺平了道路。这些模型通过生成通用视觉特征（即无需微调即可跨不同图像分布和任务工作的特征），可以极大地简化任何系统中对图像的使用。本研究表明，现有的预训练方法，特别是自监督方法，只要在足够多且来源多样的精选数据上进行训练，就能产生此类特征。

We revisit existing approaches and combine different techniques to scale our pretraining in terms of data and model size. Most of the technical contributions aim at accelerating and stabilizing the training at scale. In terms of data, we propose an automatic pipeline to build a dedicated, diverse, and curated image dataset instead of uncurated data, as typically done in the self-supervised literature. In terms of models, we train a ViT model (Dosovitskiy et al., 2021) with 1B parameters and distill it into a series of smaller models that surpass the best available general-purpose features, OpenCLIP (Ilharco et al., 2021) on most of the benchmarks at image and pixel levels.

我们重新审视了现有方法，并结合了多种技术，以在数据和模型规模上扩展我们的预训练。大部分技术贡献都旨在加速并稳定大规模训练。在数据方面，我们提出了一种自动化的流水线，用于构建一个专门的、多样化的、经过精选的图像数据集，而不是像自监督学习文献中通常所做的那样使用未经筛选的数据。在模型方面，我们训练了一个拥有10亿参数的ViT模型（Dosovitskiy等，2021），并将其蒸馏成一系列更小的模型，这些模型在大多数图像级和像素级基准测试中超越了当前最佳的通用特征模型OpenCLIP（Ilharco等，2021）。

Learning task-agnostic pretrained representations have become the standard in Natural Language Processing (NLP) (Radford et al., 2019; Raffel et al., 2020; Chowdhery et al., 2022; Hoffmann et al., 2022; Touvron et al., 2023). One can use these features “as they are”, i.e., without fine-tuning, and achieve performances on downstream tasks that are significantly better than those produced by task-specific models (Brown et al., 2020). This success has been fueled by pretraining on large quantities of raw text using pretext objectives, such as language modeling (Radford et al., 2017) or word vectors (Devlin et al., 2019), that require no supervision.

学习与任务无关的预训练表征已成为自然语言处理（NLP）领域的标准（Radford等，2019；Raffel等，2020；Chowdhery等，2022；Hoffmann等，2022；Touvron等，2023）。人们可以直接使用这些特征（即无需微调），在下游任务上取得的性能显著优于特定任务模型所产生的性能（Brown等，2020）。这一成功得益于在大量原始文本上使用无需监督的代理目标（如语言建模（Radford等，2017）或词向量（Devlin等，2019））进行预训练。

Following this paradigm shift in NLP, we expect similar “foundation” models to appear in computer vision (Bommasani et al., 2021). These models should generate visual features that work out of the box on any task, both at the image level, e.g., image classification, and pixel level, e.g., segmentation. Most promising efforts towards these foundation models focus on text-guided pretraining, i.e., using a form of textual supervision to guide the training of the features (Joulin et al., 2016; Mahajan et al., 2018; Radford et al., 2021).

继NLP领域的这一范式转变之后，我们预计计算机视觉领域也会出现类似的“基础”模型（Bommasani等，2021）。这些模型应能开箱即用地生成适用于任何任务的视觉特征，无论是图像级别的任务（如图像分类）还是像素级别的任务（如分割）。目前最有前景的基础模型研究工作主要集中在文本引导的预训练上，即利用某种形式的文本监督来指导特征的训练（Joulin等，2016；Mahajan等，2018；Radford等，2021）。

This form of text-guided pretraining limits the information that can be retained about the image since captions only approximate the rich information in images, and complex pixel-level information may not surface with this supervision. Furthermore, these image encoders require aligned text-image corpora and hence, do not offer the flexibility of their text counterparts, that is, to learn from raw data alone.

这种文本引导的预训练形式限制了模型能够保留的关于图像的信息，因为标题只能近似地表达图像中的丰富信息，而复杂的像素级信息可能无法在这种监督下显现出来。此外，这些图像编码器需要对齐的图文语料库，因此不具备其文本对应物那样的灵活性，即无法仅从原始数据中学习。

An alternative to text-guided pretraining is self-supervised learning (Caron et al., 2018; Chen et al., 2020; He et al., 2022) where features are learned from images alone. These approaches are conceptually closer to pretext tasks such as language modeling and can capture information at the image and pixel level (Caron et al., 2021). Additionally, the features output by self-supervised models have been shown to exhibit various useful properties, and have enabled enabled a wide variety of applications (Amir et al., 2022; Tumanyan et al., 2022; Ofri-Amar et al., 2023; Hamilton et al., 2022). However, despite their potential to learn general-purpose features, most of the advances in self-supervised learning were made in the context of pretraining on a small curated dataset, ImageNet-1k (Russakovsky et al., 2015). Some efforts on scaling these approaches beyond ImageNet-1k have been attempted (Caron et al., 2019; Goyal et al., 2021; 2022a), but they focused on uncurated datasets, which typically lead to a significant drop in the quality of the features. This is explained by the lack of control over the data quality and diversity, which are essential to produce good features.

文本引导预训练的一种替代方案是自监督学习（Caron等，2018；Chen等，2020；He等，2022），其中特征仅从图像中学习。这些方法在概念上更接近于语言建模等代理任务，并且能够捕捉图像级别和像素级别的信息（Caron等，2021）。此外，自监督模型输出的特征已被证明具有多种有用的特性，并已催生了广泛的应用（Amir等，2022；Tumanyan等，2022；Ofri-Amar等，2023；Hamilton等，2022）。然而，尽管自监督学习有潜力学习通用特征，但其大部分进展都是在小型精选数据集ImageNet-1k（Russakovsky等，2015）上进行预训练的背景下取得的。虽然已有一些尝试将这些方法扩展到ImageNet-1k之外（Caron等，2019；Goyal等，2021；2022a），但它们主要集中在未经筛选的数据集上，这通常会导致特征质量显著下降。这是因为缺乏对数据质量和多样性的控制，而这对于产生高质量特征至关重要。

In this work, we explore if self-supervised learning has the potential to learn general-purpose visual features if pretrained on a large quantity of curated data. We revisit existing discriminative self-supervised approaches that learn features at both the image and patch level, such as iBOT (Zhou et al., 2022a), and we reconsider some of their design choices under the lens of a larger dataset. Most of our technical contributions are tailored toward stabilizing and accelerating discriminative self-supervised learning when scaling in model and data sizes. These improvements make our approach around 2× faster and require 3× less memory than similar discriminative self-supervised methods, allowing us to leverage longer training with larger batch sizes.

在本工作中，我们探索了如果在大量精选数据上进行预训练，自监督学习是否具有学习通用视觉特征的潜力。我们重新审视了现有的判别式自监督方法，例如iBOT（Zhou等，2022a），这些方法能在图像和图像块级别同时学习特征，并在更大规模数据集的视角下重新考量了它们的一些设计选择。我们的大部分技术贡献都旨在稳定和加速模型与数据规模扩展时的判别式自监督学习。这些改进使我们的方法速度提升了约2倍，内存占用减少了3倍，使我们能够利用更大的批次大小进行更长时间的训练。

Regarding pretraining data, we have built an automatic pipeline to filter and rebalance datasets from an extensive collection of uncurated images. This pipeline is inspired by pipelines used in NLP (Wenzek et al., 2020), where data similarities are used instead of external metadata and do not require manual annotation. A major difficulty when dealing with images in the wild is to rebalance concepts and avoid overfitting on a few dominant modes. In this work, a naive clustering approach works reasonably well to resolve this issue. We gathered a small but diverse corpus of 142M images to validate our approach.

关于预训练数据，我们构建了一个自动化流水线，用于从海量未经筛选的图像中过滤和重新平衡数据集。该流水线受NLP领域所用流水线的启发（Wenzek等，2020），它利用数据相似性而非外部元数据，且无需人工标注。处理真实场景图像时的一个主要难点在于重新平衡概念，避免对少数主导模式过拟合。在本工作中，一种朴素的聚类方法能很好地解决此问题。我们收集了一个规模虽小但多样化的1.42亿图像语料库来验证我们的方法。

Finally, we provide a variety of pretrained visual models, called DINOv2, trained with different Vision Transformers (ViT) (Dosovitskiy et al., 2016) architectures on our data. We release all the models and the code to retrain DINOv2 on any data. We validate the quality of DINOv2 on various computer vision benchmarks at both image and pixel levels as we scale them, as summarized in Fig. 2. We conclude that self-supervised pretraining alone is a good candidate for learning transferable frozen features that are competitive with the best openly available weakly-supervised models.

最后，我们提供了多种在自有数据上使用不同Vision Transformer（ViT）（Dosovitskiy等，2016）架构训练的预训练视觉模型，称为DINOv2。我们发布了所有模型及用于在任意数据上重新训练DINOv2的代码。我们在各种计算机视觉基准上验证了DINOv2的质量，涵盖了图像级和像素级任务，并展示了其随规模扩展的性能，如图2所示。我们得出结论：仅靠自监督预训练就足以成为学习可迁移冻结特征的良好候选方案，其性能可与当前最佳的公开弱监督模型相媲美。

## Note

- **迈向真正的视觉基础模型**：DINOv2 的核心目标是证明，**仅通过自监督学习**（无需任何文本或人工标签），也能在大规模、高质量、多样化的精选数据上训练出强大的通用视觉特征。这些特征可直接用于下游任务（冻结使用），在图像级和像素级任务上均达到甚至超越当前最佳的弱监督模型（如 OpenCLIP）。
- **数据为王：构建高质量视觉预训练语料库**：DINOv2 成功的关键在于其**自动化的数据构建流水线**。该流水线从海量未标注网络图像中，通过基于图像相似性的聚类方法进行过滤与概念重平衡，有效避免了对少数流行概念的过拟合，确保了数据的**多样性**与**质量**，这是以往使用原始网络数据的自监督方法所缺乏的。

1.  **高效稳定的判别式自监督框架**：DINOv2 在 DINO 和 iBOT 等工作的基础上进行了工程优化，大幅提升了训练效率和稳定性。其改进使得训练速度提升约 **2倍**，内存占用减少 **3倍**，从而能够支持更大规模的模型和更长的训练周期。
2.  **大规模模型蒸馏**：团队首先训练了一个拥有 **10亿参数** 的巨型 ViT 模型作为“教师”，然后通过知识蒸馏技术，将其能力迁移到一系列更小、更实用的 ViT 模型（如 ViT-S/14, ViT-B/14, ViT-L/14, ViT-g/14）中，形成了完整的 DINOv2 模型家族。
3.  **开箱即用的强大表征**：DINOv2 模型在**冻结特征**（frozen features）的设定下，在广泛的下游任务上展现出卓越性能，包括图像分类、目标检测、实例分割、语义分割、单目深度估计等，验证了其作为通用视觉特征提取器的价值。

- **全面超越现有基线**：在大量基准测试中，DINOv2 不仅在传统的 ImageNet 线性探测上表现优异，更重要的是在需要细粒度空间信息的**密集预测任务**（如分割）上，其性能显著优于 OpenCLIP 等基于图文对齐的弱监督模型。
- **开源与可复现性**：Meta AI 公开了所有 DINOv2 预训练模型以及完整的训练代码，允许研究者和开发者在自己的数据上复现或微调模型，极大地推动了社区对自监督视觉基础模型的研究与应用。
- **自监督学习的新范式**：DINOv2 的成功确立了一条清晰的路径——**高质量数据 + 高效自监督算法 + 大规模模型**——可以独立于文本监督，构建出强大的、通用的视觉基础模型，为计算机视觉领域的发展提供了新的方向。

# AA-CLIP

9 Mar 2025

@see : https://arxiv.org/abs/2503.06661

## Paper

Vision-language models like CLIP have shown remarkable zero-shot capabilities in general image classification. However, they suffer from "anomaly-unawareness" in industrial defect detection tasks. Specifically, CLIP's feature space does not explicitly separate normal and anomalous patterns, leading to high false-positive rates when detecting subtle defects. In this paper, we propose AA-CLIP, a two-stage adaptation framework that makes CLIP anomaly-aware without catastrophic forgetting. In Stage 1, we disentangle text embeddings to create explicit "normal" and "anomalous" semantic anchors. In Stage 2, we align visual patch features with these anchors using residual adapters. Extensive experiments on MVTec AD and VisA benchmarks show that AA-CLIP achieves state-of-the-art zero-shot anomaly detection performance, outperforming vanilla CLIP by 15.3% in AUROC and 18.7% in F1-max.

像 CLIP 这样的视觉 - 语言模型在通用图像分类中展现了卓越的零样本能力。然而，它们在工业缺陷检测任务中存在"异常无感"问题。具体而言，CLIP 的特征空间没有明确分离正常和异常模式，导致在检测微小缺陷时误报率很高。在本文中，我们提出了 AA-CLIP，一个两阶段适配框架，使 CLIP 具备异常感知能力而不会发生灾难性遗忘。在阶段一，我们解耦文本嵌入以创建明确的"正常"和"异常"语义锚点。在阶段二，我们使用残差适配器将视觉图像块特征与这些锚点对齐。在 MVTec AD 和 VisA 基准上的大量实验表明，AA-CLIP 实现了最先进的零样本异常检测性能，在 AUROC 上超越原始 CLIP 15.3%，在 F1-max 上超越 18.7%。

Automated defect detection is critical for quality control in manufacturing. Traditional supervised methods require extensive labeled data, which is costly and time-consuming to collect. Zero-shot approaches based on pre-trained vision-language models offer a promising alternative, as they can detect defects without task-specific training.
However, directly applying CLIP to anomaly detection faces a fundamental challenge: CLIP is trained on natural images where "anomaly" is rarely explicitly defined. As a result, CLIP's visual encoder treats a scratched metal surface and a normal one similarly, as both share the semantic concept of "metal surface". This phenomenon, which we term "anomaly-unawareness", severely limits CLIP's effectiveness in industrial settings.

自动化缺陷检测对于制造过程中的质量控制至关重要。传统的监督方法需要大量的标注数据，收集这些数据既昂贵又耗时。基于预训练视觉 - 语言模型的零样本方法提供了一种有前景的替代方案，因为它们可以在无需特定任务训练的情况下检测缺陷。
然而，直接将 CLIP 应用于异常检测面临一个根本性挑战：CLIP 是在自然图像上训练的，其中"异常"很少被明确定义。因此，CLIP 的视觉编码器对有划痕的金属表面和正常金属表面的处理方式相似，因为它们都共享"金属表面"这一语义概念。我们将这种现象称为"异常无感"，它严重限制了 CLIP 在工业环境中的有效性。

To address this limitation, we propose AA-CLIP, which enhances CLIP's anomaly awareness through a two-stage adaptation process. Unlike prior works that fine-tune the entire model (risking catastrophic forgetting), AA-CLIP employs lightweight residual adapters that preserve CLIP's general knowledge while injecting anomaly-specific semantics.
Our key insight is that anomaly detection requires not just recognizing what defects look like, but also understanding what they are not. By explicitly disentangling "normal" and "anomalous" text embeddings, we create a semantic coordinate system that guides visual feature alignment.

为了解决这一局限性，我们提出了 AA-CLIP，它通过两阶段适配过程增强 CLIP 的异常感知能力。与之前微调整个模型的工作不同（有灾难性遗忘的风险），AA-CLIP 采用轻量级残差适配器，在保留 CLIP 通用知识的同时注入异常特定语义。
我们的关键洞察是，异常检测不仅需要识别缺陷的样子，还需要理解它们不是什么。通过明确解耦"正常"和"异常"文本嵌入，我们创建了一个语义坐标系来指导视觉特征对齐。

AA-CLIP consists of three components: (1) a frozen CLIP backbone, (2) text adapters for semantic disentanglement, and (3) visual adapters for patch-level feature alignment. The framework operates in two stages: Stage 1 focuses on text space adaptation, while Stage 2 aligns visual features with the disentangled text anchors.

AA-CLIP 由三个组件组成：(1) 一个冻结的 CLIP 骨干网络，(2) 用于语义解耦的文本适配器，(3) 用于图像块级特征对齐的视觉适配器。该框架分两个阶段运行：阶段一专注于文本空间适配，而阶段二将视觉特征与解耦的文本锚点对齐。

In the first stage, we freeze the image encoder and only train lightweight adapters inserted into the shallow layers of the text encoder. The goal is to create two distinct semantic anchors: $T_N$ for "normal" and $T_A$ for "anomalous".
We construct prompts at two levels:

- Template-level: "A photo of a \{state\} object"
- State-level: \{state\} ∈ {"normal", "intact", "defect-free"} for $T_N$, and \{state\} ∈ {"damaged", "scratched", "broken"} for $T_A$
  The disentanglement loss minimizes the cosine similarity between $T_N$ and $T_A$:
  $$ \mathcal{L}\_{dis} = \frac{T_N \cdot T_A}{\|T_N\| \|T_A\|} $$
  This forces the model to learn orthogonal representations for normal and anomalous concepts.

在第一阶段，我们**冻结图像编码器**，只训练插入文本编码器浅层的轻量级适配器。目标是创建两个不同的语义锚点：$T_N$ 代表"正常"，$T_A$ 代表"异常"。
我们在两个层级构建提示：

- 模板级："一张\{状态\}物体的照片"
- 状态级：$T_N$ 的\{状态\} ∈ {"正常", "完好", "无缺陷"}，$T_A$ 的\{状态\} ∈ {"损坏", "划痕", "破损"}
  解耦损失最小化 $T_N$ 和 $T_A$ 之间的余弦相似度：
  $$ \mathcal{L}\_{dis} = \frac{T_N \cdot T_A}{\|T_N\| \|T_A\|} $$
  这迫使模型学习正交的正常和异常概念表示。

In the second stage, we freeze the text encoder (including the adapters trained in Stage 1) and train visual adapters inserted into the image encoder. The objective is to align patch-level visual features with the text anchors $T_N$ and $T_A$.
Given an image, we extract patch features $\{v_i\}_{i=1}^N$ from the ViT backbone. For each patch $v_i$, we compute its similarity to both anchors:
$$ s*N^i = \text{sim}(v_i, T_N), \quad s_A^i = \text{sim}(v_i, T_A) $$
The anomaly score for patch $i$ is then:
$$ A_i = s_A^i - s_N^i $$
A positive $A_i$ indicates the patch is more similar to "anomalous" than "normal".
The alignment loss uses a contrastive formulation:
$$ \mathcal{L}*{align} = -\log \frac{\exp(s*{correct} / \tau)}{\exp(s_N / \tau) + \exp(s_A / \tau)} $$
where $s*{correct}$ is the similarity to the correct anchor based on ground truth.

在第二阶段，我们冻结文本编码器（包括阶段一训练好的适配器），训练插入图像编码器的视觉适配器。目标是将图像块级视觉特征与文本锚点 $T_N$ 和 $T_A$ 对齐。
给定一张图像，我们从 ViT 骨干网络提取图像块特征 $\{v_i\}_{i=1}^N$。对于每个图像块 $v_i$，我们计算它与两个锚点的相似度：
$$ s*N^i = \text{sim}(v_i, T_N), \quad s_A^i = \text{sim}(v_i, T_A) $$
图像块 $i$ 的异常分数为：
$$ A_i = s_A^i - s_N^i $$
正的 $A_i$ 表示该图像块与"异常"的相似度高于"正常"。
对齐损失使用对比形式：
$$ \mathcal{L}*{align} = -\log \frac{\exp(s*{correct} / \tau)}{\exp(s_N / \tau) + \exp(s_A / \tau)} $$
其中 $s*{correct}$ 是根据真实标签与正确锚点的相似度。

To prevent catastrophic forgetting, we use residual adapters instead of full fine-tuning. A residual adapter is a lightweight module inserted into each Transformer layer:
$$ \text{Output} = \text{Layer}(x) + \text{Adapter}(x) $$
where $\text{Adapter}(x) = W_2 \cdot \text{ReLU}(W_1 \cdot x)$, with $W_1$ reducing dimension by a factor of 16 and $W_2$ restoring it.
This design ensures that the original CLIP weights remain unchanged, preserving its general knowledge. Only the adapter parameters (less than 3% of total) are trained, making AA-CLIP efficient and stable.

为了防止灾难性遗忘，我们使用残差适配器而不是完全微调。残差适配器是插入每个 Transformer 层的轻量级模块：
$$ \text{Output} = \text{Layer}(x) + \text{Adapter}(x) $$
其中 $\text{Adapter}(x) = W_2 \cdot \text{ReLU}(W_1 \cdot x)$，$W_1$ 将维度降低 16 倍，$W_2$ 恢复它。
这种设计确保原始 CLIP 权重保持不变，保留其通用知识。只有适配器参数（少于总数的 3%）被训练，使 AA-CLIP 高效且稳定。

We evaluate AA-CLIP on two standard anomaly detection benchmarks:

- MVTec AD: 15 categories of industrial surfaces and objects, with pixel-level defect annotations.
- VisA: 12 categories of electronic components, more challenging due to complex structures.
  We compare against CLIP, WinCLIP, PromptAD, and PatchCore. All methods are evaluated in zero-shot settings without task-specific training.

我们在两个标准异常检测基准上评估 AA-CLIP：

- MVTec AD：15 类工业表面和物体，带有像素级缺陷标注。
- VisA：12 类电子元件，由于结构复杂更具挑战性。
  我们与 CLIP、WinCLIP、PromptAD 和 PatchCore 进行比较。所有方法都在零样本设置下评估，无需特定任务训练。

Table 1 shows image-level AUROC results. AA-CLIP achieves 94.2% on MVTec AD and 91.7% on VisA, outperforming vanilla CLIP by 15.3% and 17.8% respectively. For pixel-level segmentation, AA-CLIP reaches 96.5% AUROC on MVTec AD, surpassing the previous SOTA (PatchCore) by 2.1%.
Notably, AA-CLIP's advantage is most pronounced on subtle defects (e.g., small scratches, texture anomalies), where CLIP often fails due to anomaly-unawareness.

表 1 显示了图像级 AUROC 结果。AA-CLIP 在 MVTec AD 上达到 94.2%，在 VisA 上达到 91.7%，分别比原始 CLIP 高出 15.3% 和 17.8%。对于像素级分割，AA-CLIP 在 MVTec AD 上达到 96.5% AUROC，超过之前的 SOTA (PatchCore) 2.1%。
值得注意的是，AA-CLIP 的优势在微小缺陷（例如，小划痕、纹理异常）上最为明显，而 CLIP 由于异常无感往往在这些情况下失败。

We conduct ablation studies to validate each component:

- w/o Stage 1 (Text Disentanglement): AUROC drops by 8.4%, confirming the importance of semantic anchors.
- w/o Stage 2 (Visual Alignment): AUROC drops by 6.7%, showing patch-level alignment is crucial for segmentation.
- w/o Residual Adapters (Full Fine-tuning): AUROC drops by 3.2%, and training becomes unstable, validating the adapter design.
- Number of Adapter Layers: Inserting adapters into shallow layers (1-3) performs best, while deep layers (10-12) risk overfitting.

我们进行消融实验以验证每个组件：

- 无阶段一（文本解耦）：AUROC 下降 8.4%，证实语义锚点的重要性。
- 无阶段二（视觉对齐）：AUROC 下降 6.7%，表明图像块级对齐对分割至关重要。
- 无残差适配器（完全微调）：AUROC 下降 3.2%，且训练变得不稳定，验证了适配器设计的有效性。
- 适配器层数：将适配器插入浅层（1-3 层）表现最好，而深层（10-12 层）有过拟合风险。

We have presented AA-CLIP, a two-stage adaptation framework that makes CLIP anomaly-aware for zero-shot defect detection. By disentangling text embeddings and aligning visual features with residual adapters, AA-CLIP achieves state-of-the-art performance without catastrophic forgetting. This work demonstrates that vision-language models can be effectively adapted for industrial applications with minimal labeled data.

我们提出了 AA-CLIP，一个两阶段适配框架，使 CLIP 具备零样本缺陷检测的异常感知能力。通过解耦文本嵌入并使用残差适配器对齐视觉特征，AA-CLIP 在实现最先进性能的同时避免了灾难性遗忘。这项工作表明，视觉 - 语言模型可以通过最少的标注数据有效地适配工业应用。

## Note

AA-CLIP 的核心贡献在于解决了**异常无感**问题。它指出 CLIP 的根本问题：特征空间里"正常"和"异常"靠得太近。解决方案是**两阶段适配**：先解耦文本，再对齐视觉。这对 SEM 缺陷检测至关重要，因为正常电路纹理和微小缺陷在视觉上非常相似。

其关键技术点包括：

1. **残差适配器**：只训练少量参数，保护原始知识，避免灾难性遗忘。
2. **语义解耦**：强制让"正常"和"异常"在特征空间里彻底分开（正交）。
3. **像素级对齐**：通过计算每个 patch 与正常/异常锚点的距离差，生成异常热力图。

# SEM-CLIP

15 Feb 2025

@see: https://arxiv.org/abs/2502.14884

## Paper

In the field of integrated circuit manufacturing, the detection and classification of nanoscale wafer defects are critical for subsequent root cause analysis and yield enhancement. The complex background patterns observed in scanning electron microscope (SEM) images and the diverse textures of the defects pose significant challenges. Traditional methods usually suffer from insufficient data, labels, and poor transferability. In this paper, we propose a novel few-shot learning approach, SEM-CLIP, for accurate defect classification and segmentation. SEM-CLIP customizes the Contrastive Language-Image Pretraining (CLIP) model to better focus on defect areas and minimize background distractions, thereby enhancing segmentation accuracy. We employ text prompts enriched with domain knowledge as prior information to assist in precise analysis. Additionally, our approach incorporates feature engineering with textual guidance to categorize defects more effectively. SEM-CLIP requires little annotated data, substantially reducing labor demands in the semiconductor industry. Extensive experimental validation demonstrates that our model achieves impressive classification and segmentation results under few-shot learning scenarios.

在集成电路制造领域，纳米级晶圆缺陷的检测与分类对于后续的根因分析和良率提升至关重要。扫描电子显微镜（SEM）图像中观察到的复杂背景图案以及缺陷多样的纹理构成了巨大挑战。传统方法通常受限于数据不足、标签缺乏以及迁移能力差。在本文中，我们提出了一种新颖的小样本学习方法——SEM-CLIP，用于精确的缺陷分类和分割。SEM-CLIP 定制了对比语言 - 图像预训练（CLIP）模型，使其能更好地聚焦于缺陷区域并最大限度地减少背景干扰，从而提高分割精度。我们利用富含领域知识的文本提示作为先验信息，以辅助精确分析。此外，我们的方法结合了带有文本引导的特征工程，以更有效地对缺陷进行分类。SEM-CLIP 仅需极少的标注数据，大幅降低了半导体行业的人力需求。大量的实验验证表明，我们的模型在小样本学习场景下取得了令人印象深刻的分类和分割结果。

Semiconductor manufacturing is a complex and multifaceted process where defects occur due to ill processes or equipment issues. To provide real-time monitoring for the fabrication, SEM images are captured and then classified based on the appearance of the defects, helping the defect detection and root cause analysis. Unlike rough wafer-level defect maps, SEM images can provide more detailed characteristics of defects, thereby helping to determine the specific process steps and equipment. Currently, defect detection primarily relies on manual efforts, making it both cumbersome and error-prone. Developing an automated defect detection system has become a trend.

半导体制造是一个复杂且多层面的过程，缺陷往往由于工艺不当或设备问题而产生。为了对制造过程进行实时监控，需要采集 SEM 图像，并根据缺陷的外观进行分类，从而辅助缺陷检测和根因分析。与粗糙的晶圆级缺陷图不同，SEM 图像能提供更详细的缺陷特征，进而帮助确定具体的工艺步骤和设备。目前，缺陷检测主要依赖人工，既繁琐又容易出错。开发自动化的缺陷检测系统已成为一种趋势。

The current wafer surface defect detection and classification research predominantly employs supervised learning methods, requiring substantial amounts of data and detailed annotated labels. Some methods are presented to classify defects [1–3]. Furthermore, some segmentation methods are proposed to provide detailed location and shape information [4–6]. Although these methods achieve outstanding performance, they usually require many annotated data for training, resulting in heavy workloads. Besides, these methods also suffer from poor transferability for new defect detection due to a lack of adequate training data. Annotated data is always precious in industry.

当前的晶圆表面缺陷检测与分类研究主要采用监督学习方法，这需要大量的数据和详细的标注标签。一些方法被提出用于缺陷分类 [1–3]。此外，还有一些分割方法被提出以提供详细的位置和形状信息 [4–6]。尽管这些方法取得了出色的性能，但它们通常需要大量标注数据进行训练，导致工作量巨大。此外，由于缺乏足够的训练数据，这些方法在检测新类型缺陷时的迁移能力也较差。在工业界，标注数据始终非常宝贵。

Consequently, there has been a shift in the field of industrial defect detection toward unsupervised or self-supervised anomaly segmentation methods [7–10]. These approaches only require normal samples to learn their distribution, and they detect anomalies by calculating the distributional differences between test samples and normal samples. However, this method still requires a substantial number of normal samples for training. Due to the highly variable backgrounds where defects occur, there are significant differences among normal samples, making applying this approach in wafer surface defect detection scenarios challenging.

因此，工业缺陷检测领域已转向无监督或自监督的异常分割方法 [7–10]。这些方法仅需正常样本来学习其分布，并通过计算测试样本与正常样本之间的分布差异来检测异常。然而，这种方法仍然需要大量的正常样本进行训练。由于缺陷发生的背景高度可变，正常样本之间存在显著差异，使得将这种方法应用于晶圆表面缺陷检测场景具有挑战性。

Recently, pre-trained vision-language models like CLIP [11] and SAM [12] have rapidly advanced, utilizing prompts to access stored prior knowledge and thus exhibiting strong zero-shot visual perception capabilities [13]. Considering this, we are exploring using a CLIP model-based approach to address data scarcity issues. However, given the unique aspects of integrated circuit application scenarios, the text-image pairs used in network pre-training may contain minimal or no SEM images of semiconductors. Consequently, it becomes essential to adjust the base structure of the CLIP model and to incorporate a small number of SEM images of both normal and anomalous samples as support images for the target categories. These adaptations will enable the model to more effectively recognize and classify the specific types of defects encountered in semiconductor manufacturing.

最近，像 CLIP [11] 和 SAM [12] 这样的预训练视觉 - 语言模型迅速发展，利用提示（Prompts）访问存储的先验知识，从而展现出强大的零样本视觉感知能力 [13]。鉴于此，我们正在探索基于 CLIP 模型的方法来解决数据稀缺问题。然而，考虑到集成电路应用场景的独特性，网络预训练中使用的图文对可能包含极少甚至没有半导体的 SEM 图像。因此，调整 CLIP 模型的基础结构，并引入少量正常和异常样本的 SEM 图像作为目标类别的支持图像，变得至关重要。这些适配将使模型能够更有效地识别和分类半导体制造中遇到的特定类型的缺陷。

This strategy allows us to leverage the model's inherent ability to understand complex visual concepts through minimal samples, adapting it to the specific requirements of semiconductor manufacturing. We can create a more efficient and effective model for detecting and classifying wafer surface defects without heavily relying on large, annotated datasets. To this end, we propose SEM-CLIP, a crafted CLIP method for defect detection, following the few-shot learning mechanism. The contributions of our work are summarized as follows:

该策略使我们能够利用模型通过极少量样本理解复杂视觉概念的固有能力，并将其适配到半导体制造的具体需求中。我们可以创建一个更高效、更有效的模型来检测和分类晶圆表面缺陷，而无需过度依赖大型标注数据集。为此，我们提出了 SEM-CLIP，这是一种遵循小样本学习机制、专为缺陷检测定制的 CLIP 方法。我们工作的贡献总结如下：

- We propose a novel few-shot learning-based approach, SEM-CLIP, for accurate SEM image defect classification and segmentation with little data and label requirements. To the best of our knowledge, it is the first few-shot learning work for SEM-level IC defect detection tasks.
- We customize the Contrastive Language-Image Pretraining model to focus on the defect areas and adopt a novel feature extraction method by adding V-V attention blocks to minimize the complex background distractions and improve the segmentation accuracies.
- Prompts enriched with expert knowledge are crafted and employed as prior information to guide both classification and segmentation processes. Feature engineering with textual guidance is incorporated with a classification head to boost the classification performance.
- We conduct comprehensive experiments across various few-shot settings, benchmarked on an in-house SEM image defect dataset. The results demonstrate that our method significantly outperforms others in terms of iAUROC, pAUROC, and F1-max scores. For instance, SEM-CLIP surpasses the recent SOTA method PromptAD, showing improvements of 2.0%, 1.3%, and 21.1%, respectively, under the 10-shot setting. Our approach will help fabs alleviate the issues of insufficient labeling and expensive labor, thereby facilitating intelligent manufacturing.

- 我们提出了一种基于小样本学习的新方法 SEM-CLIP，用于在数据和标签需求极少的情况下实现准确的 SEM 图像缺陷分类和分割。据我们所知，这是首个针对 SEM 级集成电路缺陷检测任务的小样本学习工作。
- 我们定制了对比语言 - 图像预训练模型以聚焦于缺陷区域，并通过添加 V-V 注意力模块采用了一种新颖的特征提取方法，以最大限度地减少复杂背景的干扰并提高分割精度。
- 我们构建并使用了富含专家知识的提示作为先验信息，以指导分类和分割过程。结合了文本引导的特征工程与分类头，以提升分类性能。
- 我们在各种小样本设置下进行了全面的实验，并在内部 SEM 图像缺陷数据集上进行了基准测试。结果表明，我们的方法在 iAUROC、pAUROC 和 F1-max 分数方面显著优于其他方法。例如，在 10-shot 设置下，SEM-CLIP 超越了最近的 SOTA 方法 PromptAD，分别提升了 2.0%、1.3% 和 21.1%。我们的方法将帮助晶圆厂缓解标注不足和人力昂贵的问题，从而促进智能制造。

Vision-language models process and integrate visual and textual data, enabling tasks that require a cohesive understanding of both domains. The CLIP model [11], which was pre-trained on 400 million image-text pairs, has robust generalization and enables it to utilize natural language to refer to learned visual concepts. These Transformer-based encoders [14] project features into a shared embedding space where similarity is computed, guided by a contrastive loss function that aligns matching pairs and separates non-matching pairs. This design allows CLIP to generalize effectively across various tasks without task-specific training, demonstrating its flexibility in downstream applications [15–18].

视觉 - 语言模型处理并整合视觉和文本数据，使需要同时理解这两个领域的任务成为可能。CLIP 模型 [11] 在 4 亿个图文对上进行了预训练，具有强大的泛化能力，使其能够利用自然语言来指代已学习的视觉概念。这些基于 Transformer 的编码器 [14] 将特征投影到一个共享的嵌入空间中，在此计算相似度，并由对比损失函数引导，该函数对齐匹配的图文对并分离不匹配的对。这种设计使 CLIP 能够在无需特定任务训练的情况下有效地泛化到各种任务中，展示了其在下游应用中的灵活性 [15–18]。

Defect detection is essential for improving yields in integrated circuit fabrication. Traditional research has focused on wafer maps, where faulty chips are marked with colors based on test results. While these maps can provide spatial insights into defects, the increasing complexity of chip components has made wafer map-level detection more challenging and less precise [19–22]. To address these limitations, magnified imaging techniques like scanning electron microscopy (SEM) are crucial for closely examining wafer surfaces. As shown in Figure 1, advanced methods are needed to accurately detect, classify, and analyze microscopic defects, pinpointing the exact process steps where defects originate.

缺陷检测对于提高集成电路制造的良率至关重要。传统研究主要集中在晶圆图上，即根据测试结果用颜色标记有故障的芯片。虽然这些图可以提供缺陷的空间洞察，但随着芯片组件复杂性的增加，晶圆图级别的检测变得更加困难且不够精确 [19–22]。为了解决这些局限性，像扫描电子显微镜（SEM）这样的放大成像技术对于仔细检查晶圆表面至关重要。如图 1 所示，需要先进的方法来准确检测、分类和分析微观缺陷，从而精确定位缺陷产生的确切工艺步骤。

In the absence of a public SEM Image dataset, we collect some data from an in-house 12-inch, 55nm CMOS fabrication line. The dataset includes 1332 grayscale images, with 226 non-defective and 1106 defective images, categorized into six common defect types: 59 bridges, 141 copper residues, 230 holes, 77 infilm defects, 455 particles, and 144 scratches. Figure 2 illustrates some examples.

由于缺乏公开的 SEM 图像数据集，我们从内部的一条 12 英寸、55nm CMOS 产线收集了一些数据。该数据集包含 1332 张灰度图像，其中 226 张无缺陷，1106 张有缺陷，分为六种常见缺陷类型：59 个桥接，141 个铜残留，230 个孔洞，77 个膜内缺陷，455 个颗粒，以及 144 个划痕。图 2 展示了一些示例。

Traditional anomaly detection relies on extensive training data, which limits its effectiveness in dynamic environments with diverse anomaly types. Recent research has focused on using few or zero samples to overcome these challenges... Our research extends the CLIP method to support SEM image defect detection.

传统异常检测依赖大量训练数据，这限制了其在具有多种异常类型的动态环境中的有效性。最近的研究集中在利用少量或零样本来克服这些挑战……我们的研究扩展了 CLIP 方法以支持 SEM 图像缺陷检测。

Problem 1 (Few-shot Learning for SEM Image Defect Detection). Given dataset of N-way K-shot SEM images... We aim to construct a model with few-shot learning capabilities based on the X. It can generate accurate defect classification labels and pixel-level segmentation results for the M SEM image testing set with M ≫ K. By default, N= 7 in our context without further explanations.

问题 1（SEM 图像缺陷检测的小样本学习）给定一个 N-way K-shot 的 SEM 图像数据集 X……我们的目标是基于 X 构建一个具有小样本学习能力的模型。它能够为包含 M 张 SEM 图像的测试集（其中 M ≫ K）生成准确的缺陷分类标签和像素级分割结果。默认情况下，在我们的语境中 N=7（包含 1 类正常和 6 类缺陷），不再赘述。

In this section, we introduce SEM-CLIP, as shown in Figure 4, specifically designed for classifying and segmenting wafer surface defects under the few-shot setting. Initially, we construct a text prompt incorporating expert knowledge regarding wafer surface defect patterns. This prompt enables us to avoid detailed labels for each sample. Following this, we implement a dual path block by adding a V-V attention block to the transformer block within the vanilla ViT architecture [31]. We extract features at various levels from this architecture and employ a new method to remove redundant features to calculate similarity. Additionally, we fine-tune the Transformation Layer and Classification Head using few-shot samples, ultimately achieving precise defect classification and segmentation results.

在本节中，我们介绍 SEM-CLIP（如图 4 所示），它是专门为在小样本设置下分类和分割晶圆表面缺陷而设计的。首先，我们构建了一个包含关于晶圆表面缺陷模式专家知识的文本提示。该提示使我们能够避免为每个样本提供详细标签。随后，我们在原始 ViT 架构 [31] 的 Transformer 块中添加了一个 V-V 注意力块，实现了一个双路径块。我们从该架构中提取多层次的特征，并采用一种新方法来去除冗余特征以计算相似度。此外，我们利用小样本对变换层（Transformation Layer）和分类头（Classification Head）进行微调，最终实现精确的缺陷分类和分割结果。

Due to the complexity of integrated circuit manufacturing processes, wafer surface defects can vary greatly in appearance. Consequently, it is essential to utilize domain expert knowledge to refine the rough cues such as "anomaly" or "defect" into more detailed descriptions of defect morphologies by useful prior information about the target defect areas. This task employs a composite prompt structure, as illustrated in Figure 5. We decompose the prompts into template-level and state-level components. Template-level prompts provide the general context (e.g., "A SEM image of \{state\} on wafer surface"), while state-level prompts specify the defect type (e.g., "bridge", "particle", "scratch"). Finally, by replacing the state in the template-level prompts with the state-level prompts, we combine them to form the final text prompts. The text prompts are designed and shared for all SEM images. During the practical application of our model and the analysis of query images, there is no need to adjust the prompts.

由于集成电路制造工艺的复杂性，晶圆表面缺陷的外观可能差异巨大。因此，必须利用领域专家知识，通过关于目标缺陷区域的有用先验信息，将"异常"或"缺陷"等粗略线索细化为更详细的缺陷形态描述。本任务采用如图 5 所示的复合提示结构。我们将提示分解为模板级和状态级组件。模板级提示提供通用上下文（例如，"晶圆表面上的\{状态\} SEM 图像"），而状态级提示指定缺陷类型（例如，"桥接"、"颗粒"、"划痕"）。最后，通过将模板级提示中的状态替换为状态级提示，我们将它们组合形成最终的文本提示。这些文本提示是为所有 SEM 图像设计和共享的。在我们模型的实际应用和查询图像分析过程中，无需调整提示。

For SEM images, the variability and complexity of background patterns tend to interfere with defect detection, which is undesirable. Recent studies have reported that Q-K self-attention [14] may lead to incorrectly establishing connections in semantically irrelevant areas, resulting in dispersed attention [32]. In contrast, V-V attention [32], by directly comparing and associating similar feature values, can more accurately focus on relevant feature areas, effectively reducing interference from the background. Therefore, we modify the vanilla CLIP ViT [31] backbone for feature extraction by adding a branch while retaining the vanilla transformer structure. This branch incorporates the V-V attention block, constructing a new dual-path block.

对于 SEM 图像，背景图案的可变性和复杂性往往会干扰缺陷检测，这是不可取的。最近的研究表明，Q-K 自注意力 [14] 可能导致在语义无关的区域错误地建立连接，从而导致注意力分散 [32]。相比之下，V-V 注意力 [32] 通过直接比较和关联相似的特征值，可以更准确地聚焦于相关特征区域，有效减少背景干扰。因此，我们修改了原始的 CLIP ViT [31] 骨干网络以进行特征提取，在保留原始 Transformer 结构的同时添加了一个分支。该分支包含了 V-V 注意力块，构建了一个新的双路径块。

Given an input image patch sequence $X \in \mathbb{R}^{N \times D}$, the standard self-attention computes:
$$ \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d*k}}\right)V $$
where $Q = XW_Q$, $K = XW_K$, $V = XW_V$ are learned projections.
The V-V attention branch computes:
$$ \text{Attention}*{VV}(V) = \text{softmax}\left(\frac{VV^\top}{\sqrt{d*k}}\right)V $$
The outputs from both branches are fused via a learnable parameter $\gamma$:
$$ X*{\text{out}} = X*{\text{standard}} + \gamma \cdot X*{\text{VV}} $$

给定输入图像块序列 $X \in \mathbb{R}^{N \times D}$，标准自注意力计算：
$$ \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d*k}}\right)V $$
其中 $Q = XW_Q$，$K = XW_K$，$V = XW_V$ 是学习的投影。
V-V 注意力分支计算：
$$ \text{Attention}*{VV}(V) = \text{softmax}\left(\frac{VV^\top}{\sqrt{d*k}}\right)V $$
两个分支的输出通过可学习参数 $\gamma$ 融合：
$$ X*{\text{out}} = X*{\text{standard}} + \gamma \cdot X*{\text{VV}} $$

When using a pre-trained CLIP model for zero-shot defect segmentation, the typical method is directly calculating the similarity between text and image embeddings to get a defect map. However, this approach is not suitable for our task. Instead, it requires few-shot samples for fine-tuning. Segmentation based on F (feature from standard path) and segmentation based on V (feature from V-V path) are computed separately. Research indicates that erroneous bright spots often appear in the same non-defective areas regardless of the textual prompts. Identifying and removing these irrelevant bright spots as redundant features can effectively reduce noise in the predicted segmentation results [32]. Considering the segmentation results from these two image embeddings, the final overall defect map is given by: $A = A_F + A_V$.

当使用预训练的 CLIP 模型进行零样本缺陷分割时，典型方法是直接计算文本和图像嵌入之间的相似度以获得缺陷图。然而，这种方法不适合我们的任务。相反，它需要小样本进行微调。基于 F（标准路径特征）的分割和基于 V（V-V 路径特征）的分割分别计算。研究表明，无论文本提示如何，错误的亮点经常出现在相同的非缺陷区域。识别并去除这些作为冗余特征的无关亮点可以有效降低预测分割结果中的噪声 [32]。综合考虑这两种图像嵌入的分割结果，最终的总体缺陷图由下式给出：$A = A_F + A_V$。

The self-supervised contrastive learning ability of CLIP [11] enables it to understand the semantic relationships between images and text, thereby possessing zero-shot classification capability. Although CLIP's contrastive learning capability enables direct completion of image classification tasks, we require a few SEM defect images for fine-tuning. The final classification prediction probabilities are derived from the image-text contrast score calculated by CLIP and the prediction scores of the classification head.

CLIP 的自监督对比学习能力 [11] 使其能够理解图像和文本之间的语义关系，从而具备零样本分类能力。尽管 CLIP 的对比学习能力可以直接完成图像分类任务，但我们仍需少量 SEM 缺陷图像进行微调。最终的分类预测概率源自 CLIP 计算的图文对比分数和分类头的预测分数的加权组合。

Evaluation metrics include iAUROC, pAUROC, and pixel-level F1-max for segmentation, and Accuracy, Precision, Recall, and F1 score for classification. We utilize the LAION-400M-based CLIP model equipped with ViT-B/16+ for our experiments. All experiments are conducted on NVIDIA RTX 4090.

评估指标包括分割任务的 iAUROC、pAUROC 和像素级 F1-max，以及分类任务的准确率、精确率、召回率和 F1 分数。我们使用基于 LAION-400M 预训练并配备 ViT-B/16+ 的 CLIP 模型进行实验。所有实验均在 NVIDIA RTX 4090 上进行。

For defect segmentation performance, we primarily compare our method with WinCLIP+, PromptAD, DRA, and AnomalyGPT. Given the lack of multi-category classification in previous methods, we compare classification performance using models pre-trained on ImageNet-21K.

对于缺陷分割性能，我们主要将我们的方法与 WinCLIP+、PromptAD、DRA 和 AnomalyGPT 进行比较。鉴于以往方法缺乏多类别分类能力，我们使用在 ImageNet-21K 上预训练的模型来比较分类性能。

Segmentation performance comparisons. We evaluated iAUROC, pAUROC, and F1-max scores across various shot settings, as shown in Table 1. The results show that SEM-CLIP outperforms the SOTA scores in BSL across all few-shot settings. Classification performance comparisons. SEM-CLIP excels in nearly all metrics, especially in the F1 score, demonstrating its ability to identify defect categories while minimizing the false negatives.

分割性能比较。我们在各种 shot 设置下评估了 iAUROC、pAUROC 和 F1-max 分数，如表 1 所示。结果表明，SEM-CLIP 在所有小样本设置下均优于 BSL 中的 SOTA 分数。分类性能比较。SEM-CLIP 在几乎所有指标上都表现出色，尤其是在 F1 分数上，证明了其在最小化假阴性的同时识别缺陷类别的能力。

SEM-CLIP for defect Segmentation. We first examined the impact of fine-tuning with few-shot samples. "w/o Transformation Layer" indicates that the Transformation Layer was not used. Without fine-tuning, the model tends to identify this textual information as defects erroneously. We also assessed the influence of prompt design. Lastly, we analyzed the role of multi-layer features. SEM-CLIP for defect Classification. Table 3 shows the effects of various components on classification. The results demonstrate that solely relying on pre-trained CLIP is inadequate for SEM defect classification. Fine-tuning with few-shot samples significantly improves performance.

用于缺陷分割的 SEM-CLIP。我们首先检查了小样本微调的影响。"w/o Transformation Layer"表示未使用变换层。如果不进行微调，模型倾向于错误地将图像中的文本信息识别为缺陷。我们还评估了提示设计的影响。最后，我们分析了多层特征的作用。用于缺陷分类的 SEM-CLIP。表 3 展示了各组件对分类的影响。结果表明，仅依赖预训练的 CLIP 不足以进行 SEM 缺陷分类。使用小样本进行微调可显著提高性能。

In this paper, we introduce SEM-CLIP, a novel few-shot learning approach that innovatively integrates defect classification and segmentation functionalities. This method utilizes carefully crafted prompts to optimize the vision-language model for more effective text-guided learning. Additionally, it features a customized architecture for the distinct needs of segmentation and classification tasks. SEM-CLIP effectively minimizes the impact of complex backgrounds inherent in SEM defect data and addresses the challenges of intricate defect textures.

在本文中，我们介绍了 SEM-CLIP，这是一种新颖的小样本学习方法，创新性地集成了缺陷分类和分割功能。该方法利用精心设计的提示来优化视觉 - 语言模型，以实现更有效的文本引导学习。此外，它具有针对分割和分类任务不同需求的定制架构。SEM-CLIP 有效地最小化了 SEM 缺陷数据中固有的复杂背景的影响，并解决了复杂缺陷纹理的挑战。

## Note

SEM-CLIP 的核心贡献在于**领域定制化**。它指出 CLIP 和 AA-CLIP 在 SEM 图像上的根本问题：**复杂电路背景干扰**。解决方案是：**V-V Attention**（聚焦缺陷）+ **领域知识 Prompt**（专家描述）。这对你们的项目是直接基础。

其关键技术点包括：

1. **V-V Attention**：双路径架构，标准 +V-V 融合，$\gamma$ 可学习。直接比较 Value 值，聚焦缺陷区域，避免背景分散。
2. **分层 Prompt**：模板 + 状态，可扩展为模板 + 类别 + 属性。
3. **Few-Shot 微调**：变换层 + 分类头，部分层解冻。
4. **冗余去除**：分割时去除一致的背景误报。

# DINO v3

@see: https://arxiv.org/abs/2508.10104

[v1] Wed, 13 Aug 2025 18:00:55 UTC (14,591 KB)

## Paper

Self-supervised learning holds the promise of eliminating the need for manual data annotation, enabling models to scale effortlessly to massive datasets and larger architectures. By not being tailored to specific tasks or domains, this training paradigm has the potential to learn visual representations from diverse sources, ranging from natural to aerial images— using a single algorithm. This technical report introduces DINOv3, a major milestone toward realizing this vision by leveraging simple yet effective strategies. First, we leverage the benefit of scaling both dataset and model size by careful data preparation, design, and optimization. Second, we introduce a new method called Gram anchoring, which effectively addresses the known yet unsolved issue of dense feature maps degrading during long training schedules. Finally, we apply post-hoc strategies that further enhance our models’ flexibility with respect to resolution, model size, and alignment with text. As a result, we present a versatile vision foundation model that outperforms the specialized state of the art across a broad range of settings, without fine-tuning. DINOv3 produces high-quality dense features that achieve outstanding performance on various vision tasks, significantly surpassing previous self- and weakly-supervised foundation models. We also share the DINOv3 suite of vision models, designed to advance the state of the art on a wide spectrum of tasks and data by providing scalable solutions for diverse resource constraints and deployment scenarios.

自监督学习有望消除对手动数据标注的需求，使模型能够轻松扩展到海量数据集和更大规模的架构。由于不针对特定任务或领域，这种训练范式有潜力使用单一算法从多样化的来源（从自然图像到航拍图像）中学习视觉表征。本技术报告介绍了 DINOv3，这是实现这一愿景的一个重要里程碑，它采用了简单而有效的策略。首先，我们通过精心的数据准备、设计和优化，充分利用了扩大数据集和模型规模的优势。其次，我们引入了一种名为 Gram anchoring（Gram 锚定）的新方法，有效解决了在长时间训练过程中稠密特征图质量下降这一已知但尚未解决的问题。最后，我们应用了事后（post-hoc）策略，进一步增强了模型在分辨率、模型大小和文本对齐方面的灵活性。因此，我们提出了一种多功能的视觉基础模型，该模型无需微调，就能在广泛的设置中超越专门的最先进模型。DINOv3 生成的高质量稠密特征在各种视觉任务上取得了卓越的性能，显著超越了之前的自监督和弱监督基础模型。我们还分享了 DINOv3 视觉模型套件，旨在通过为不同的资源约束和部署场景提供可扩展的解决方案，在广泛的任务和数据上推动技术前沿。

Foundation models have become a central building block in modern computer vision, enabling broad generalization across tasks and domains through a single, reusable model. Self-supervised learning (SSL) is a powerful approach for training such models, by learning directly from raw pixel data and leveraging the natural co-occurrences of patterns in images. Unlike weakly and fully supervised pretraining methods (Radford et al., 2021; Dehghani et al., 2023; Bolya et al., 2025) which require images paired with high-quality metadata, SSL unlocks training on massive, raw image collections. This is particularly effective for training large-scale visual encoders thanks to the availability of virtually unlimited training data. DINOv2 (Oquab et al., 2024) exemplifies these strengths, achieving impressive results in image understanding tasks (Wang et al., 2025) and enabling pre-training for complex domains such as histopathology (Chen et al., 2024). Models trained with SSL exhibit additional desirable properties: they are robust to input distribution shifts, provide strong global and local features, and generate rich embeddings that facilitate physical scene understanding. Since SSL models are not trained for any specific downstream task, they produce versatile and robust generalist features. For instance, DINOv2 models deliver strong performance across diverse tasks and domains without requiring task-specific finetuning, allowing a single frozen backbone to serve multiple purposes. Importantly, self-supervised learning is especially suitable to train on the vast amount of available observational data in domains like histopathology (Vorontsov et al., 2024), biology (Kim et al., 2025), medical imaging (Pérez-García et al., 2025), remote sensing (Cong et al., 2022; Tolan et al., 2024), astronomy (Parker et al., 2024), or high-energy particle physics (Dillon et al., 2022). These domain often lack metadata and have already been shown to benefit from foundation models like DINOv2. Finally, SSL, requiring no human intervention, is well-suited for lifelong learning amid the growing volume of web data.

基础模型已成为现代计算机视觉的核心构建模块，通过单一、可重用的模型实现跨任务和跨领域的广泛泛化。自监督学习（SSL）是训练此类模型的一种强大方法，它直接从原始像素数据中学习，并利用图像中模式的自然共现性。与需要图像与高质量元数据配对的弱监督和全监督预训练方法（Radford等，2021；Dehghani等，2023；Bolya等，2025）不同，SSL 解锁了在海量原始图像集合上进行训练的可能性。由于几乎无限的训练数据可用，这对于训练大规模视觉编码器尤其有效。DINOv2（Oquab等，2024）就体现了这些优势，在图像理解任务（Wang等，2025）中取得了令人印象深刻的结果，并实现了在组织病理学（Chen等，2024）等复杂领域的预训练。使用 SSL 训练的模型还表现出其他理想的特性：它们对输入分布偏移具有鲁棒性，能提供强大的全局和局部特征，并生成有助于物理场景理解的丰富嵌入。由于 SSL 模型并非针对任何特定的下游任务进行训练，因此它们能产生多功能且鲁棒的通用特征。例如，DINOv2 模型在各种任务和领域中都表现出色，无需进行特定任务的微调，使得单个冻结的主干网络可以服务于多种用途。重要的是，自监督学习特别适合在组织病理学（Vorontsov等，2024）、生物学（Kim等，2025）、医学成像（Pérez-García等，2025）、遥感（Cong等，2022；Tolan等，2024）、天文学（Parker等，2024）或高能粒子物理（Dillon等，2022）等领域中利用大量可用的观测数据进行训练。这些领域通常缺乏元数据，并且已经证明可以从 DINOv2 等基础模型中受益。最后，SSL 无需人工干预，非常适合在不断增长的网络数据量中进行终身学习。

In practice, the promise of SSL, namely producing arbitrarily large and powerful models by leveraging large amounts of unconstrained data, remains challenging at scale. While model instabilities and collapse are mitigated by the heuristics proposed by Oquab et al. (2024), more problems emerge from scaling further. First, it is unclear how to collect useful data from unlabeled collections. Second, in usual training practice, employing cosine schedules implies knowing the optimization horizon a priori, which is difficult when training on large image corpora. Third, the performance of the features gradually decreases after early training, confirmed by visual inspection of the patch similarity maps. This phenomenon appears in longer training runs with models above ViT-Large size (300M parameters), reducing the usefulness of scaling DINOv2.

在实践中，SSL 的承诺——即通过利用大量无约束数据来生成任意庞大且强大的模型——在规模化时仍然面临挑战。虽然 Oquab 等人（2024）提出的启发式方法缓解了模型不稳定和坍塌问题，但在进一步扩展时出现了更多问题。首先，尚不清楚如何从未标记的集合中收集有用的数据。其次，在常规训练实践中，采用余弦调度意味着需要先验地知道优化范围，而在大型图像语料库上训练时这很困难。第三，特征的性能在早期训练后会逐渐下降，这一点通过观察图像块相似度图得到了证实。这种现象出现在使用 ViT-Large 以上规模（3亿参数）模型的长时间训练中，降低了扩展 DINOv2 的实用性。

Addressing the problems above leads to this work, DINOv3, which advances SSL training at scale. We demonstrate that a single frozen SSL backbone can serve as a universal visual encoder that achieves state-of-the-art performance on challenging downstream tasks, outperforming supervised and metadata-reliant pre-training strategies. Our research is guided by the following objectives: (1) training a foundational model versatile across tasks and domains, (2) improving the shortcomings of existing SSL models on dense features, (3) disseminating a family of models that can be used off-the-shelf. We discuss the three aims in the following.

解决上述问题促成了本项工作 DINOv3，它推动了大规模 SSL 训练的发展。我们证明，单个冻结的 SSL 主干网络可以作为通用视觉编码器，在具有挑战性的下游任务上达到最先进性能，超越了依赖监督和元数据的预训练策略。我们的研究遵循以下目标：(1) 训练一个在任务和领域上通用的基础模型，(2) 改进现有 SSL 模型在稠密特征方面的不足，(3) 发布一系列可开箱即用的模型。我们将在下文讨论这三个目标。

Strong & Versatile Foundational Models DINOv3 aims to offer a high level of versatility along two axes, which is enabled by the scaling of the model size and training data. First, a key desirable property for SSL models is to achieve excellent performance while being kept frozen, ideally reaching similar state-of-the-art results as specialized models. In that case, a single forward pass can deliver cutting-edge results across multiple tasks, leading to substantial computational savings—an essential advantage for practical applications, particularly on edge devices. We show the wide breadth of tasks that DINOv3 can successfully be applied to in Sec. 6. Second, a scalable SSL training pipeline that does not depend on metadata unlocks numerous scientific applications. By pre-training on a diverse set of images, whether web images or observational data, SSL models generalize across a large set of domains and tasks. As illustrated in Fig. 1(d), the PCA of DINOv3 features extracted from a high-resolution aerial image clearly allows to separates roads, houses, and greenery, highlighting the model’s feature quality.

强大且通用的基础模型 DINOv3 旨在沿两个维度提供高度的通用性，这得益于模型规模和训练数据的扩展。首先，SSL 模型的一个关键理想特性是在保持冻结状态时仍能取得优异性能，理想情况下能达到与专用模型类似的最先进结果。在这种情况下，单次前向传递即可在多个任务上提供尖端结果，从而带来巨大的计算节省——这对于实际应用，尤其是在边缘设备上，是一个至关重要的优势。我们在第6节展示了 DINOv3 可以成功应用于广泛的任务。其次，一个不依赖元数据的可扩展 SSL 训练流水线开启了众多科学应用的大门。通过对多样化的图像集（无论是网络图像还是观测数据）进行预训练，SSL 模型可以在大量领域和任务上实现泛化。如图1(d)所示，从高分辨率航拍图像中提取的 DINOv3 特征的 PCA 分析清晰地分离了道路、房屋和绿地，凸显了该模型的特征质量。

Superior Feature Maps Through Gram Anchoring Another key feature of DINOv3 is a significant improvement of its dense feature maps. The DINOv3 SSL training strategy aims at producing models excelling at high-level semantic tasks while producing excellent feature maps amenable to solving geometric tasks such as depth estimation, or 3D matching. In particular, the models should produce dense features that can be used off-the-shelf or with little post-processing. The compromise between dense and global representation is especially difficult to optimize when training with vast amounts of images, since the objective of high-level understanding can conflict with the quality of the dense feature maps. These contradictory objectives lead to a collapse of dense features with large models and long training schedules. Our new Gram anchoring strategy effectively mitigates this collapse (see Sec. 4). As a result, DINOv3 obtains significantly better dense feature maps than DINOv2, staying clean even at high resolutions (see Fig. 3).

通过 Gram 锚定实现卓越的特征图 DINOv3 的另一个关键特性是其稠密特征图的显著改进。DINOv3 的 SSL 训练策略旨在生成既能出色完成高级语义任务，又能产生优秀特征图以解决深度估计或3D匹配等几何任务的模型。特别是，这些模型应能生成可开箱即用或只需少量后处理的稠密特征。在使用海量图像进行训练时，稠密表示和全局表示之间的权衡尤其难以优化，因为高级理解的目标可能与稠密特征图的质量相冲突。这些相互矛盾的目标会导致在大型模型和长时间训练计划下稠密特征的崩溃。我们新的 Gram 锚定策略有效地缓解了这种崩溃（见第4节）。因此，DINOv3 获得了比 DINOv2 显著更好的稠密特征图，即使在高分辨率下也能保持清晰（见图3）。

The DINOv3 Family of Models Solving the degradation of dense feature map with Gram anchoring unlocks the power of scaling. As a consequence, training a much larger model with SSL leads to significant performance improvements. In this work, we successfully train a DINO model with 7B parameters. Since such a large model requires significant resources to run, we apply distillation to compress its knowledge into smaller variants. As a result, we present the DINOv3 family of vision models, a comprehensive suite designed to address a wide spectrum of computer vision challenges. This model family aims to advance the state of the art by offering scalable solutions adaptable to diverse resource constraints and deployment scenarios. The distillation process produces model variants at multiple scales, including Vision Transformer (ViT) Small, Base, and Large, as well as ConvNeXt-based architectures. Notably, the efficient and widely adopted ViT-L model achieves performance close to that of the original 7B teacher across a variety of tasks.

DINOv3 模型系列 通过 Gram 锚定解决稠密特征图退化问题，释放了扩展的威力。因此，使用 SSL 训练一个大得多的模型带来了显著的性能提升。在这项工作中，我们成功地训练了一个拥有70亿参数的 DINO 模型。由于如此庞大的模型运行需要大量资源，我们应用蒸馏技术将其知识压缩到更小的变体中。因此，我们推出了 DINOv3 视觉模型系列，这是一个旨在应对广泛计算机视觉挑战的综合套件。该模型系列旨在通过提供可适应不同资源约束和部署场景的可扩展解决方案来推动技术前沿。蒸馏过程产生了多种规模的模型变体，包括 Vision Transformer (ViT) Small、Base 和 Large，以及基于 ConvNeXt 的架构。值得注意的是，高效且被广泛采用的 ViT-L 模型在各种任务上的性能接近于原始的70亿参数教师模型。

Overall, the DINOv3 family demonstrates strong performance on a broad range of benchmarks, matching or exceeding the accuracy of competing models on global tasks, while significantly outperforming them on dense prediction tasks, as visible in Fig. 2.

总体而言，DINOv3 系列在广泛的基准测试中表现出色，在全局任务上达到了与竞争模型相当甚至更高的准确率，同时在稠密预测任务上显著超越了它们，如图2所示。

## Note

- **DINOv3：自监督视觉基础模型的新巅峰**：DINOv3 是 DINO 系列的又一次重大飞跃，它不仅延续了“纯自监督 + 无文本依赖”的核心理念，更通过系统性创新，解决了大规模训练中的关键瓶颈，确立了自监督学习作为构建通用视觉基础模型的主导范式。

1.  **Gram Anchoring：解决稠密特征退化的革命性技术**：DINOv3 最核心的技术贡献是 **Gram Anchoring（Gram 锚定）**。该方法巧妙地稳定了在超长训练周期和超大模型（如 ViT-L 以上）下极易退化的**稠密特征图**（dense feature maps）。这一突破使得模型在追求高级语义理解的同时，也能保留高质量的几何与空间细节，从而在深度估计、3D 匹配等对像素级精度要求极高的任务上取得显著优势。

2.  **极致规模与高效蒸馏**：得益于 Gram Anchoring 带来的稳定性，DINOv3 成功训练了参数量高达 **70亿**（7B）的巨型教师模型，这在纯自监督领域是前所未有的。为了兼顾性能与实用性，团队通过高效的**知识蒸馏**技术，将 7B 模型的强大能力压缩到一系列更小的模型中（包括 ViT-S/B/L 和 ConvNeXt 架构），形成了完整的 **DINOv3 模型家族**。其中，ViT-L 变体以合理的计算开销，几乎复现了 7B 教师模型的卓越性能。

3.  **真正的“冻结即用”通用编码器**：DINOv3 在**冻结特征**（frozen features）的设定下，在广泛的下游任务中全面超越了包括 DINOv2 在内的所有先前自监督和弱监督模型。无论是在图像分类等全局任务，还是在语义分割、实例分割等稠密预测任务上，DINOv3 都展现出**开箱即用**（off-the-shelf）的顶尖性能，验证了其作为单一、通用视觉主干网络的巨大价值。

4.  **数据与训练策略的协同进化**：DINOv3 的成功再次印证了“**数据质量决定模型上限**”的原则。其训练建立在比 DINOv2 更庞大、更多样化的精选数据集之上，并结合了更鲁棒的训练调度策略，有效规避了传统余弦退火等方法在超大规模训练中因预设训练步数带来的局限性。

5.  **赋能科学发现与边缘部署**：由于完全不依赖人工标注或图文对齐，DINOv3 特别适合应用于**缺乏元数据的科学领域**（如医学影像、遥感、天文学、粒子物理等），为这些领域的自动化分析提供了强大的基础工具。同时，其优异的冻结性能也为**边缘设备**上的高效推理提供了可能，大幅降低了部署成本。

- **开源承诺与社区影响**：与前代一样，Meta AI 公开了 DINOv3 的完整模型套件和相关代码，旨在为学术界和工业界提供一个强大、灵活且可扩展的视觉基础模型基线，进一步推动计算机视觉技术的发展和普及。

# SimCLR

@see: https://arxiv.org/abs/2002.05709

[v1] Thu, 13 Feb 2020 18:50:45 UTC (5,093 KB)
[v2] Mon, 30 Mar 2020 15:32:51 UTC (5,047 KB)
[v3] Wed, 1 Jul 2020 00:09:08 UTC (5,829 KB)

## Paper

Learning image representations without manual labels is a challenging problem. Recent work has shown that contrastive learning can learn powerful representations by maximizing agreement between differently augmented views of the same image. However, the best results have required large batch sizes and careful tuning of hyperparameters.

在无需人工标签的情况下学习图像表示是一个具有挑战性的问题。最近的工作表明，对比学习可以通过最大化同一图像的不同增强视图之间的一致性来学习强大的表示。然而，最佳结果需要大批次大小和仔细的超参数调优。

In this paper, we present a simple framework for contrastive learning of visual representations, which we call SimCLR. We systematically study the major components of contrastive prediction tasks and show that the combination of the following components leads to substantial improvements over prior methods: (1) a data augmentation module that combines multiple transformation types to generate two correlated views of an image, (2) a base encoder network that extracts representations from augmented images, (3) a small projection head that maps representations to a space where contrastive loss is applied, and (4) a contrastive loss function that maximizes agreement between positive pairs while treating other examples in the batch as negatives.

在本文中，我们提出了一个用于视觉表示对比学习的简单框架，我们称之为 SimCLR。我们系统地研究了对比预测任务的主要组件，并表明以下组件的组合可以比先前方法带来实质性改进：(1) 一个数据增强模块，结合多种变换类型生成图像的两个相关视图，(2) 一个基础编码器网络，从增强图像中提取表示，(3) 一个小型投影头，将表示映射到应用对比损失的空间，(4) 一个对比损失函数，最大化正样本对之间的一致性，同时将批次中的其他样本视为负样本。

Our framework is illustrated in Figure 1. Given an input image x, we apply two different random augmentations to obtain two correlated views, denoted as x̃i and x̃j. We then use a base encoder f(·) to extract representation vectors hi = f(x̃i) and hj = f(x̃j). A small neural network projection head g(·) maps hi and hj to zi = g(hi) and zj = g(hj), where the contrastive loss is applied. The projection head is crucial; removing it significantly degrades performance.

我们的框架如图 1 所示。给定输入图像 x，我们应用两种不同的随机增强来获得两个相关视图，记为 x̃i 和 x̃j。然后我们使用基础编码器 f(·) 提取表示向量 hi = f(x̃i) 和 hj = f(x̃j)。一个小型神经网络投影头 g(·) 将 hi 和 hj 映射到 zi = g(hi) 和 zj = g(hj)，在此应用对比损失。投影头至关重要；移除它会显著降低性能。

The contrastive loss we use is the NT-Xent (normalized temperature-scaled cross entropy) loss. For a batch of N images, we generate 2N augmented samples. For each positive pair (i, j), the loss is computed as the negative log probability that i and j are similar, relative to all other 2N-2 samples in the batch which are treated as negatives. The temperature parameter τ controls the concentration level of the distribution. We find that a smaller temperature (e.g., 0.5 or 0.1) works better than larger values.

我们使用的对比损失是 NT-Xent（归一化温度缩放交叉熵）损失。对于一批 N 张图像，我们生成 2N 个增强样本。对于每个正样本对 (i, j)，损失被计算为 i 和 j 相似的负对数概率，相对于批次中所有其他 2N-2 个被视为负样本的样本。温度参数 τ 控制分布的集中程度。我们发现较小的温度（例如 0.5 或 0.1）比较大的值效果更好。

We evaluate our method on ImageNet for linear evaluation, where we freeze the learned representations and train a linear classifier on top. With a ResNet-50 backbone, SimCLR achieves 66.5% top-1 accuracy, which is a 7% improvement over the previous best self-supervised methods. With a larger ResNet-152 backbone and larger batch sizes (up to 8192), we achieve 70.4% top-1 accuracy, approaching the performance of supervised pretraining (76.5%).

我们在 ImageNet 上评估我们的方法进行线性评估，其中我们冻结学习到的表示并在其上训练线性分类器。使用 ResNet-50 骨干网络，SimCLR 达到 66.5% 的 Top-1 准确率，比之前最好的自监督方法提高了 7%。使用更大的 ResNet-152 骨干网络和更大的批次大小（高达 8192），我们达到 70.4% 的 Top-1 准确率，接近监督预训练的性能（76.5%）。

We also evaluate on downstream tasks including object detection and segmentation. When transferred to PASCAL VOC object detection, SimCLR representations achieve comparable performance to supervised pretraining. On COCO object detection, SimCLR shows strong transferability, outperforming ImageNet supervised pretraining when using the same amount of labeled data for fine-tuning. Notably, SimCLR pretraining reduces the need for labeled data by up to 2x compared to supervised pretraining.

我们还在下游任务上进行评估，包括目标检测和分割。当迁移到 PASCAL VOC 目标检测时，SimCLR 表示实现了与监督预训练相当的性能。在 COCO 目标检测上，SimCLR 显示出强大的迁移能力，当使用相同数量的标注数据进行微调时，优于 ImageNet 监督预训练。值得注意的是，与监督预训练相比，SimCLR 预训练将标注数据的需求减少了多达 2 倍。

Ablation studies reveal several key insights:

- Data augmentation is critical: The combination of random cropping with color distortion (including brightness, contrast, saturation, and hue) and Gaussian blur is essential for good performance. Removing color distortion drops accuracy by over 10%.
- Projection head matters: Using a non-linear projection head (MLP) before the contrastive loss significantly improves the quality of representations compared to a linear projection or no projection. The representation before the projection head (hi) is better for downstream tasks than the output after it (zi).
- Batch size affects performance: Larger batch sizes provide more negative samples, leading to better results. Performance saturates around batch size 4096-8192.
- Temperature parameter: A smaller temperature (e.g., 0.5) works better than larger values (e.g., 1.0).

消融实验揭示了几个关键见解：

- 数据增强至关重要：随机裁剪与颜色失真（包括亮度、对比度、饱和度和色调）以及高斯模糊的组合对于良好性能至关重要。移除颜色失真会使准确率下降超过 10%。
- 投影头很重要：在对比损失之前使用非线性投影头（MLP）与线性投影或无投影相比，显著提高了表示质量。投影头之前的表示（hi）比之后的输出（zi）更适合下游任务。
- 批次大小影响性能：更大的批次大小提供更多负样本，导致更好的结果。性能在批次大小 4096-8192 左右趋于饱和。
- 温度参数：较小的温度（例如 0.5）比较大的值（例如 1.0）效果更好。

We have presented SimCLR, a simple framework for contrastive learning of visual representations. By systematically studying the key components and scaling up batch sizes and model capacity, SimCLR achieves state-of-the-art results in self-supervised learning, closing the gap with supervised pretraining on ImageNet. Our work demonstrates that contrastive learning can be a viable alternative to supervised pretraining for many computer vision tasks.

我们提出了 SimCLR，一个用于视觉表示对比学习的简单框架。通过系统地研究关键组件并扩大批次大小和模型容量，SimCLR 在自监督学习中实现了最先进的结果，缩小了与 ImageNet 监督预训练的差距。我们的工作表明，对于许多计算机视觉任务，对比学习可以成为监督预训练的可行替代方案。

## Note

SimCLR 的核心贡献在于建立了**对比学习的基本范式**，证明了无需人工标签即可通过学习图像增广视图间的一致性来获取强大的视觉表示。

**关键技术组件：**

1.  **强数据增强组合**：随机裁剪 + 颜色失真（亮度/对比度/饱和度/色调）+ 高斯模糊是核心。移除颜色失真会导致性能暴跌 >10%。
2.  **非线性投影头 (Projection Head)**：在对比损失前加入 MLP 投影头至关重要，它能过滤掉无关细节，提升表示质量。注意：下游任务应使用投影头前的特征 ($h_i$) 而非投影后的 ($z_i$)。
3.  **NT-Xent 损失**：归一化温度缩放交叉熵损失，依赖大批次提供充足负样本。
4.  **大批次训练**：必须使用大 Batch Size (4096-8192) 以提供足够负样本，这是其主要计算瓶颈。
5.  **小温度参数**：$\tau=0.5$ 或更小能更好地区分难易样本。

**性能表现：**

- **ImageNet 线性评估**：ResNet-50 达 66.5%，ResNet-152 + 大 Batch 达 70.4%，接近监督预训练 (76.5%)。
- **下游迁移**：在 COCO/PASCAL 检测分割任务上媲美甚至超越监督预训练，且能减少 2 倍标注数据需求。

---

# SimCLR v2

@see: https://arxiv.org/abs/2006.10029

[v1] Wed, 17 Jun 2020 17:48:22 UTC (187 KB)
[v2] Mon, 26 Oct 2020 03:09:28 UTC (192 KB)

## Paper

Self-supervised learning has shown promising results for learning visual representations without manual labels. SimCLR demonstrated that contrastive learning can achieve competitive performance with supervised pretraining when scaled up with large batch sizes and strong data augmentations. However, several limitations remain: the need for very large batch sizes, the computational cost of training, and the gap with supervised pretraining on downstream tasks.

自监督学习在无需人工标签的情况下学习视觉表示方面显示出有前景的结果。SimCLR 表明，当使用大批次大小和强数据增强进行扩展时，对比学习可以实现与监督预训练有竞争力的性能。然而，仍存在几个局限性：需要非常大的批次大小、训练的计算成本、以及在下游任务上与监督预训练的差距。

In this paper, we present SimCLR v2, an improved version of SimCLR that addresses these limitations through three key modifications: (1) using a deeper and wider backbone architecture, (2) employing a memory bank to store negative samples from previous batches, allowing for smaller batch sizes, and (3) introducing supervised fine-tuning with a small amount of labeled data to further improve downstream performance.

在本文中，我们提出了 SimCLR v2，这是 SimCLR 的改进版本，通过三个关键修改解决这些局限性：(1) 使用更深更宽的骨干架构，(2) 采用记忆库存储来自先前批次的负样本，允许使用更小的批次大小，(3) 引入少量标注数据的监督微调以进一步提高下游性能。

Our first improvement is to use a more powerful backbone architecture. We replace the ResNet-50 used in SimCLR with a deeper ResNet-101 or even a EfficientNet variant. This increases the model capacity and allows for learning richer representations. We also increase the width of the network by a factor of 2-3x, following the design principles of modern architectures. Specifically, we use a ResNet-152 (3x wider) which significantly boosts performance.

我们的第一个改进是使用更强大的骨干架构。我们将 SimCLR 中使用的 ResNet-50 替换为更深的 ResNet-101 甚至 EfficientNet 变体。这增加了模型容量，允许学习更丰富的表示。我们还按照现代架构的设计原则，将网络宽度增加 2-3 倍。具体而言，我们使用了 ResNet-152（3 倍宽），这显著提升了性能。

The second improvement is to introduce a memory bank for storing negative samples. In SimCLR, negative samples are limited to the current batch, requiring batch sizes of 4096 or larger. With a memory bank, we can store representations from previous batches and use them as additional negatives. This allows us to reduce the batch size to 256 or 512 while maintaining similar performance, significantly reducing memory requirements and making training more accessible. The memory bank is updated with a momentum mechanism to ensure consistency.

第二个改进是引入记忆库来存储负样本。在 SimCLR 中，负样本仅限于当前批次，需要 4096 或更大的批次大小。使用记忆库，我们可以存储来自先前批次的表示并将它们用作额外的负样本。这允许我们将批次大小减少到 256 或 512，同时保持相似的性能，显著减少内存需求并使训练更易于进行。记忆库通过动量机制更新以确保一致性。

The third improvement is to incorporate supervised fine-tuning with a small amount of labeled data. After self-supervised pretraining, we fine-tune the model on a small labeled dataset (e.g., 1% or 10% of ImageNet). This semi-supervised approach bridges the gap between self-supervised and supervised learning, achieving better performance on downstream tasks than either approach alone. We find that even with only 1% labeled data, SimCLR v2 can match or exceed fully supervised pretraining.

第三个改进是结合少量标注数据的监督微调。在自监督预训练之后，我们在小型标注数据集（例如 ImageNet 的 1% 或 10%）上微调模型。这种半监督方法弥合了自监督学习和监督学习之间的差距，在下游任务上实现了比任一方法单独使用更好的性能。我们发现，即使只有 1% 的标注数据，SimCLR v2 也能匹配甚至超过完全监督预训练。

We evaluate SimCLR v2 on ImageNet for linear evaluation and downstream tasks. With the improved architecture and memory bank, SimCLR v2 achieves 72.1% top-1 accuracy in linear evaluation, surpassing SimCLR's 70.4% and approaching supervised pretraining performance (76.5%). On COCO object detection, SimCLR v2 shows consistent improvements over SimCLR across all metrics. When fine-tuned with 1% labeled data, SimCLR v2 achieves 75.3% top-1 accuracy, nearly matching supervised pretraining with full labels.

我们在 ImageNet 上评估 SimCLR v2 的线性评估和下游任务。凭借改进的架构和记忆库，SimCLR v2 在线性评估中达到 72.1% 的 Top-1 准确率，超过 SimCLR 的 70.4%，接近监督预训练性能（76.5%）。在 COCO 目标检测上，SimCLR v2 在所有指标上都显示出比 SimCLR 一致的改进。当使用 1% 标注数据微调时，SimCLR v2 达到 75.3% 的 Top-1 准确率，几乎匹配使用全量标签的监督预训练。

Ablation studies confirm the contribution of each component:

- Deeper backbone: +2.3% improvement in linear evaluation accuracy. Using a wider ResNet-152 provides the largest gain.
- Memory bank: Enables 8x reduction in batch size (from 4096 to 512) with minimal performance loss (<0.5%).
- Supervised fine-tuning: +3.1% improvement on downstream tasks with only 1% labeled data. This is particularly effective for tasks with limited annotations.

消融实验证实了每个组件的贡献：

- 更深的骨干：线性评估准确率提高 2.3%。使用更宽的 ResNet-152 提供了最大的增益。
- 记忆库：在性能损失最小（<0.5%）的情况下实现批次大小减少 8 倍（从 4096 降至 512）。
- 监督微调：仅使用 1% 标注数据，下游任务提高 3.1%。这对于标注有限的任务特别有效。

We have presented SimCLR v2, an improved contrastive learning framework that addresses the limitations of SimCLR. By combining architectural improvements, memory bank for negative samples, and semi-supervised fine-tuning, SimCLR v2 achieves state-of-the-art self-supervised learning performance with reduced computational requirements. Our work demonstrates that self-supervised learning can effectively leverage both unlabeled and limited labeled data for robust representation learning.

我们提出了 SimCLR v2，一个改进的对比学习框架，解决了 SimCLR 的局限性。通过结合架构改进、负样本记忆库和半监督微调，SimCLR v2 以降低的计算需求实现了最先进的自监督学习性能。我们的工作表明，自监督学习可以有效地利用无标签数据和有限标注数据进行鲁棒的表示学习。

## Note

SimCLR v2 的核心贡献在于**工程化与实用化改进**，针对 SimCLR 的三大痛点（大 Batch 依赖、计算成本高、下游任务差距）提出了系统性解决方案。

**三大关键改进：**

1.  **更深更宽架构 (Deeper & Wider Backbone)**：
    - 从 ResNet-50 升级至 **ResNet-152 (3x 宽)** 或 EfficientNet。
    - 效果：线性评估准确率提升 **+2.3%**，证明模型容量对自监督学习至关重要。
2.  **记忆库机制 (Memory Bank)**：
    - 存储历史批次的负样本，打破 Batch Size 限制。
    - 效果：允许 Batch Size 从 **4096 降至 512** (8 倍减少)，性能损失 <0.5%，大幅降低显存门槛。
3.  **半监督微调 (Semi-Supervised Fine-tuning)**：
    - 自监督预训练 + **少量标注数据 (1%-10%)** 微调。
    - 效果：仅用 1% 标签即可达到 **75.3%** 准确率，几乎追平全量监督预训练 (76.5%)，填补了自监督与监督的最后一道鸿沟。

# BYOL

@see: https://arxiv.org/abs/2006.07733

[v1] Sat, 13 Jun 2020 22:35:21 UTC (1,446 KB)
[v2] Wed, 9 Sep 2020 13:38:14 UTC (4,291 KB)
[v3] Thu, 10 Sep 2020 09:46:02 UTC (3,909 KB)

## Paper

Learning image representations without manual labels is a challenging problem. Recent work has shown that contrastive learning can learn powerful representations by maximizing agreement between differently augmented views of the same image while minimizing agreement between views of different images. However, these methods require large batch sizes to provide enough negative samples, which is computationally expensive.

在无需人工标签的情况下学习图像表示是一个具有挑战性的问题。最近的工作表明，对比学习可以通过最大化同一图像的不同增强视图之间的一致性同时最小化不同图像视图之间的一致性来学习强大的表示。然而，这些方法需要大批次大小以提供足够的负样本，计算成本高昂。

In this paper, we present Bootstrap Your Own Latent (BYOL), a new approach to self-supervised image representation learning. BYOL relies on two neural networks, referred to as online and target networks, that interact and learn from each other. The online network is trained to predict the target network's representation of an image under a different augmented view. The target network's parameters are an exponential moving average of the online network's parameters.

在本文中，我们提出了 Bootstrap Your Own Latent (BYOL)，一种新的自监督图像表示学习方法。BYOL 依赖于两个神经网络，称为在线网络和目标网络，它们相互交互并相互学习。在线网络被训练来预测目标网络对同一图像在不同增强视图下的表示。目标网络的参数是在线网络参数的指数移动平均。

Our framework is illustrated in Figure 1. Given an input image x, we apply two different random augmentations to obtain two correlated views, denoted as v and v'. We pass v through the online network, which consists of an encoder f*θ, a projector g*θ, and a predictor q*θ, to obtain a representation. We pass v' through the target network, which consists of an encoder f*ξ and a projector g_ξ, to obtain a target representation. The target network parameters ξ are an exponential moving average of the online network parameters θ.

我们的框架如图 1 所示。给定输入图像 x，我们应用两种不同的随机增强来获得两个相关视图，记为 v 和 v'。我们将 v 通过在线网络，其由编码器 f*θ、投影器 g*θ 和预测器 q*θ 组成，以获得表示。我们将 v' 通过目标网络，其由编码器 f*ξ 和投影器 g_ξ 组成，以获得目标表示。目标网络参数 ξ 是在线网络参数 θ 的指数移动平均。

The learning objective is to minimize the mean squared error between the normalized predictions from the online network and the normalized target representations. Specifically, we compute the loss as the squared L2 distance between the l2-normalized prediction and the l2-normalized target, with a stop-gradient operation applied to the target. We do not use any negative samples in our loss function, which distinguishes BYOL from contrastive learning methods.

学习目标是最小化在线网络的归一化预测与归一化目标表示之间的均方误差。具体而言，我们将损失计算为 l2 归一化预测与 l2 归一化目标之间的平方 L2 距离，并对目标应用停止梯度操作。我们在损失函数中不使用任何负样本，这将 BYOL 与对比学习方法区分开来。

The target network parameters are updated as an exponential moving average of the online network parameters: ξ ← τξ + (1-τ)θ, where τ is the target decay rate. We use τ = 0.996 in our experiments, which means the target network changes slowly and provides stable targets for the online network to learn from. This momentum update mechanism is crucial for preventing collapse.

目标网络参数作为在线网络参数的指数移动平均进行更新：ξ ← τξ + (1-τ)θ，其中 τ 是目标衰减率。我们在实验中使用 τ = 0.996，这意味着目标网络变化缓慢，为在线网络提供稳定的学习目标。这种动量更新机制对于防止坍塌至关重要。

We evaluate our method on ImageNet for linear evaluation, where we freeze the learned representations and train a linear classifier on top. With a ResNet-50 backbone, BYOL achieves 74.3% top-1 accuracy, which is a significant improvement over previous self-supervised methods. With a larger ResNet-200 backbone, we achieve 77.4% top-1 accuracy, surpassing supervised pretraining (76.5%) for the first time in self-supervised learning.

我们在 ImageNet 上评估我们的方法进行线性评估，其中我们冻结学习到的表示并在其上训练线性分类器。使用 ResNet-50 骨干网络，BYOL 达到 74.3% 的 Top-1 准确率，比之前的自监督方法有显著提高。使用更大的 ResNet-200 骨干网络，我们达到 77.4% 的 Top-1 准确率，首次在自监督学习中超越监督预训练（76.5%）。

We also evaluate on downstream tasks including object detection and segmentation. When transferred to PASCAL VOC object detection, BYOL representations achieve better performance than supervised pretraining. On COCO object detection, BYOL shows strong transferability, outperforming ImageNet supervised pretraining across all metrics. Notably, BYOL pretraining reduces the need for labeled data compared to supervised pretraining.

我们还在下游任务上进行评估，包括目标检测和分割。当迁移到 PASCAL VOC 目标检测时，BYOL 表示实现了比监督预训练更好的性能。在 COCO 目标检测上，BYOL 显示出强大的迁移能力，在所有指标上都优于 ImageNet 监督预训练。值得注意的是，与监督预训练相比，BYOL 预训练减少了对标注数据的需求。

Ablation studies reveal several key insights:

- Target network is essential: Removing the target network and using a stop-gradient only leads to collapse. The momentum update is crucial for stability.
- Predictor head matters: Using a non-linear predictor head in the online network significantly improves performance compared to a linear predictor or no predictor.
- Batch size affects performance: BYOL works well with smaller batch sizes (256-512) compared to contrastive methods that require 4096+. Performance saturates around batch size 4096.
- Target decay rate: A high target decay rate (e.g., 0.996) works better than lower values. Too low a decay rate causes instability.
- Batch normalization: Using batch normalization in the projector and predictor is important. Removing it degrades performance significantly.

消融实验揭示了几个关键见解：

- 目标网络至关重要：移除目标网络仅使用停止梯度会导致坍塌。动量更新对于稳定性至关重要。
- 预测头很重要：与线性预测器或无预测器相比，在线网络中使用非线性预测头显著提高了性能。
- 批次大小影响性能：与需要 4096+ 的对比方法相比，BYOL 在较小的批次大小（256-512）下表现良好。性能在批次大小 4096 左右趋于饱和。
- 目标衰减率：高目标衰减率（例如 0.996）比较低值效果更好。衰减率太低会导致不稳定。
- 批归一化：在投影器和预测器中使用批归一化很重要。移除它会显著降低性能。

We have presented BYOL, a new approach to self-supervised learning that does not rely on negative samples. By using two networks that bootstrap each other with a momentum update mechanism, BYOL achieves state-of-the-art results in self-supervised learning, surpassing supervised pretraining on ImageNet. Our work demonstrates that contrastive learning is not necessary for learning high-quality visual representations.

我们提出了 BYOL，一种新的自监督学习方法，不依赖负样本。通过使用两个相互自举的网络并配合动量更新机制，BYOL 在自监督学习中实现了最先进的结果，在 ImageNet 上超越监督预训练。我们的工作表明，对比学习对于学习高质量视觉表示并非必需。

## Note

BYOL 的核心贡献在于证明了**无需负样本的自监督学习**是可行的，打破了 SimCLR 等对比学习方法对负样本的依赖。

**关键技术组件：**

1.  **双网络架构**：在线网络 (Online Network) + 目标网络 (Target Network)。在线网络可训练，目标网络参数为在线网络的指数移动平均 (EMA)。
2.  **动量更新机制**：目标网络参数更新公式 ξ ← τξ + (1-τ)θ，τ=0.996。缓慢变化的目标网络提供稳定学习目标，防止坍塌。
3.  **预测头 (Predictor)**：仅在线网络包含非线性预测头 (MLP)，目标网络无预测头。这是防止表示坍塌的关键设计。
4.  **均方误差损失**：最小化归一化预测与归一化目标之间的 MSE，无需负样本对比。
5.  **停止梯度 (Stop-Gradient)**：对目标网络输出应用停止梯度，避免梯度回传至目标网络。

**性能表现：**

- **ImageNet 线性评估**：ResNet-50 达 **74.3%**，ResNet-200 达 **77.4%**，首次超越监督预训练 (76.5%)。
- **下游迁移**：在 COCO/PASCAL 检测分割任务上全面超越监督预训练。
- **批次大小**：256-512 即可工作，远小于 SimCLR 的 4096-8192。

**关键消融发现：**

- **无目标网络会坍塌**：仅用停止梯度而无动量更新会导致表示坍塌。
- **预测头不可少**：非线性预测头比线性或无预测器性能提升显著。
- **批归一化重要**：投影器和预测器中的 BN 对稳定性至关重要。
- **高动量系数**：τ=0.996 比低值更稳定，τ 太低会导致训练不稳定。

# SimSiam

Nov 2020

@see: https://arxiv.org/abs/2011.10566

## Paper

Siamese networks have become a common structure for various representation learning tasks. Recent works, such as SimCLR and BYOL, have demonstrated the power of contrastive learning and bootstrapping, respectively. However, SimCLR requires large batch sizes to provide enough negative samples, and BYOL relies on a momentum encoder and predictor to prevent collapse. In this paper, we report a surprisingly simple framework, SimSiam, that achieves competitive results without negative samples, momentum encoders, or large batches. Our method uses a Siamese network with weight sharing and a stop-gradient operation to prevent collapse. We show that this simple setup is sufficient for learning high-quality representations, achieving comparable performance to SimCLR and BYOL on ImageNet.

孪生网络已成为各种表示学习任务的常见结构。最近的工作，如 SimCLR 和 BYOL，分别展示了对比学习和自举（bootstrapping）的力量。然而，SimCLR 需要大批次大小以提供足够的负样本，而 BYOL 依赖动量编码器和预测器来防止坍塌。在本文中，我们报告了一个惊人的简单框架 SimSiam，它在不需要负样本、动量编码器或大批次的情况下实现了有竞争力的结果。我们的方法使用权重共享的孪生网络和停止梯度（stop-gradient）操作来防止坍塌。我们表明，这种简单的设置足以学习高质量的表示，在 ImageNet 上实现了与 SimCLR 和 BYOL 相当的性能。

Self-supervised learning has gained significant attention for its ability to learn representations without manual labels. Contrastive learning methods, exemplified by SimCLR, rely on maximizing agreement between differently augmented views of the same image while minimizing agreement between views of different images (negative samples). This requires large batch sizes (e.g., 4096) to provide sufficient negative pairs, which is computationally expensive.
BYOL avoids negative samples by using a momentum encoder and a predictor, bootstrapping the online network to match the target network. While effective, this introduces additional hyperparameters (momentum coefficient) and architectural complexity.

自监督学习因其能够在无需人工标签的情况下学习表示而获得了广泛关注。以 SimCLR 为代表的对比学习方法，依赖于最大化同一图像的不同增强视图之间的一致性，同时最小化不同图像视图（负样本）之间的一致性。这需要很大的批次大小（例如 4096）以提供足够的负样本对，计算成本高昂。
BYOL 通过使用动量编码器和预测器来避免负样本，自举在线网络以匹配目标网络。虽然有效，但这引入了额外的超参数（动量系数）和架构复杂性。

We propose SimSiam, a simple Siamese network for self-supervised learning. The architecture consists of two identical branches (twin networks) sharing weights. Each branch takes an augmented view of the same image as input. One branch includes a predictor head, while the other does not (or equivalently, uses a stop-gradient operation). The objective is to maximize the similarity between the output of the predictor and the output of the other branch.
Formally, given an image $x$, we generate two augmented views $x_1$ and $x_2$. Let $f(\cdot)$ be the encoder, $g(\cdot)$ be the projector, and $h(\cdot)$ be the predictor. The representations are $z_1 = g(f(x_1))$ and $z_2 = g(f(x_2))$. The predictions are $p_1 = h(z_1)$ and $p_2 = h(z_2)$. The loss is:
$$ \mathcal{L} = \frac{1}{2} \mathcal{D}(p_1, \text{sg}(z_2)) + \frac{1}{2} \mathcal{D}(p_2, \text{sg}(z_1)) $$
where $\text{sg}(\cdot)$ denotes the stop-gradient operation, and $\mathcal{D}$ is the negative cosine similarity.

我们提出了 SimSiam，一个简单的用于自监督学习的孪生网络。该架构由两个共享权重的相同分支（双网络）组成。每个分支将同一图像的增强视图作为输入。一个分支包含预测头，而另一个不包含（或者等效地，使用停止梯度操作）。目标是最大化预测器的输出与另一分支的输出之间的相似度。
形式上，给定图像 $x$，我们生成两个增强视图 $x_1$ 和 $x_2$。设 $f(\cdot)$ 为编码器，$g(\cdot)$ 为投影器，$h(\cdot)$ 为预测器。表示为 $z_1 = g(f(x_1))$ 和 $z_2 = g(f(x_2))$。预测为 $p_1 = h(z_1)$ 和 $p_2 = h(z_2)$。损失为：
$$ \mathcal{L} = \frac{1}{2} \mathcal{D}(p_1, \text{sg}(z_2)) + \frac{1}{2} \mathcal{D}(p_2, \text{sg}(z_1)) $$
其中 $\text{sg}(\cdot)$ 表示停止梯度操作，$\mathcal{D}$ 是负余弦相似度。

The key to preventing collapse in SimSiam is the stop-gradient operation. Without it, the network would trivially map all inputs to a constant vector. The stop-gradient breaks the symmetry between the two branches, forcing the predictor to learn meaningful transformations rather than collapsing. Interestingly, we find that weight sharing between the two branches is crucial; without it, performance degrades significantly.

防止 SimSiam 坍塌的关键是停止梯度操作。没有它，网络会将所有输入平凡地映射为常数向量。停止梯度打破了两个分支之间的对称性，迫使预测器学习有意义的变换而不是坍塌。有趣的是，我们发现两个分支之间的权重共享至关重要；没有它，性能会显著下降。

We evaluate SimSiam on ImageNet for linear evaluation and semi-supervised learning. With a ResNet-50 backbone, SimSiam achieves 67.7% top-1 accuracy in linear evaluation, comparable to SimCLR (68.3%) and BYOL (67.4%). Notably, SimSiam uses a batch size of 256, much smaller than SimCLR's 4096, making it more memory-efficient.
We also apply SimSiam to downstream tasks like object detection and segmentation, where it shows strong transferability.

我们在 ImageNet 上评估 SimSiam 的线性评估和半监督学习效果。使用 ResNet-50 骨干网络，SimSiam 在线性评估中达到 67.7% 的 Top-1 准确率，与 SimCLR (68.3%) 和 BYOL (67.4%) 相当。值得注意的是，SimSiam 使用 256 的批次大小，远小于 SimCLR 的 4096，使其更节省显存。
我们还将 SimSiam 应用于目标检测和分割等下游任务，显示出强大的迁移能力。

Ablation studies reveal several insights:

- Stop-gradient is essential: Removing it causes immediate collapse.
- Weight sharing matters: Non-shared weights lead to inferior representations.
- Predictor design: A multi-layer MLP predictor works best; a linear predictor is insufficient.
- Batch size: SimSiam is robust to small batch sizes (down to 64), unlike SimCLR.

消融实验揭示了几个见解：

- 停止梯度至关重要：移除它会导致立即坍塌。
- 权重共享很重要：非共享权重导致表示质量较差。
- 预测器设计：多层 MLP 预测器效果最好；线性预测器不足。
- 批次大小：SimSiam 对小批次大小（低至 64）具有鲁棒性，这与 SimCLR 不同。

We have presented SimSiam, a simple yet effective framework for self-supervised learning. By eliminating the need for negative samples, momentum encoders, and large batches, SimSiam simplifies the training process while maintaining competitive performance. Its simplicity makes it an attractive choice for resource-constrained environments and domains with limited data, such as medical imaging or industrial inspection.

我们提出了 SimSiam，一个简单而有效的自监督学习框架。通过消除对负样本、动量编码器和大批次的需求，SimSiam 简化了训练过程，同时保持了有竞争力的性能。其简单性使其成为资源受限环境和数据有限领域（如医学成像或工业检测）的有吸引力的选择。

## Note

SimSiam 的核心贡献在于**极简主义**。它证明了自监督学习不需要复杂的机制（如负样本、动量编码器），只需**对称双网络 + 停止梯度**即可。

其关键技术点包括：

1. **停止梯度 (Stop-Gradient)**：防止模型坍塌的关键，打破对称性。
2. **权重共享**：两个分支共享编码器权重，确保一致性。
3. **预测器 (Predictor)**：仅在其中一个分支使用，学习非线性变换。
4. **小批次友好**：不需要 SimCLR 那样的大批次，节省显存。

# 半导体缺陷智能分析与溯源系统设计方案

## 1. 项目背景与目标

在半导体制造中，缺陷检测（Inspection）产生的数据量巨大，但传统的自动缺陷分类（ADC）仅能给出标签（如 "Particle", "Scratch"），缺乏对**宏观分布模式（Defect Map Pattern）**的理解，也无法直接关联**微观形貌（SEM Image）**来生成自然语言的根因分析。

本项目旨在构建一套基于 **DINOv3 + MAE + SEM-CLIP** 的多模态智能分析系统，实现：

1.  **Defect Map 模式自动识别**：从晶圆缺陷分布图中识别出 Random, Edge, Ring, Linear 等模式。
2.  **图文跨模态对齐**：将宏观分布与微观 SEM 图像关联，理解缺陷的物理本质。
3.  **自动化溯源报告**：直接输出自然语言描述的缺陷分析报告及可能的工艺根因建议。

## 2. 核心业务流程 (Workflow)

系统的工作流分为三个阶段：**数据感知** -> **智能分析** -> **决策支持**。

### 2.1 输入层 (Data Input)

- **宏观数据 (Macro)**:
    - **Defect Map**: 晶圆级的缺陷坐标分布图（如用户提供的 YMS 系统截图）。
    - **Metadata**: Lot ID, Wafer ID, Layer, Step, Tool ID 等工艺上下文信息。
- **微观数据 (Micro)**:
    - **SEM Images**: 针对关键缺陷点（Review Sample）扫描的高倍率电子显微镜图像。
    - **ADC Labels**: 传统的缺陷分类标签（作为辅助监督信号）。

### 2.2 处理层 (AI Engine)

采用 **三塔架构** 进行特征提取与融合：

1.  **空间特征塔 (DINOv3)**:
    - **输入**: Defect Map 图像 (渲染为 224x224 或 512x512 的灰度/伪彩图)。
    - **作用**: 利用 DINOv3 强大的自监督预训练权重，提取缺陷分布的全局拓扑特征（如：是否成环、是否聚集边缘）。
    - **优势**: 无需大量标注数据即可理解“形状”和“分布”概念。

2.  **结构重建塔 (MAE - Masked Autoencoder)**:
    - **输入**: 经过掩码处理的 Defect Map。
    - **作用**: 通过重建被遮挡的缺陷分布，强迫模型学习缺陷之间的**空间相关性**（例如：线性缺陷往往意味着连续的空间关系）。
    - **输出**: 增强的空间表征向量。

3.  **多模态对齐塔 (SEM-CLIP)**:
    - **Image Encoder**: 接收 SEM 图像，提取微观纹理特征。
    - **Text Encoder**: 接收工艺知识库中的文本描述（如 "Photo Resist Residue", "Etch Micro-loading"）。
    - **对齐目标**: 将 (Defect Map 特征 + SEM 特征) 映射到同一语义空间，使其与特定的“根因文本描述”距离最近。

### 2.3 输出层 (Output & Action)

- **Pattern 分类**: 输出缺陷分布类型 (e.g., "Center Cluster", "Edge Ring")。
- **自然语言报告**:
    > "检测到 Wafer #05 存在明显的**边缘环形缺陷 (Edge Ring Pattern)**。结合 SEM 图像分析，微观形貌显示为**光刻胶残留 (PR Residue)**。推测根因为**涂胶机 (Coater) 喷嘴堵塞**或**边缘清洗工艺 (EBR) 参数漂移**。"
- **溯源建议**: 推荐检查的设备 (Tool ID)、工艺步骤 (Step) 及参数范围。

## 3. 关键技术需求梳理

### 3.1 可视化与前端交互 (Java + Vue)

- **Defect Map 渲染**:
    - 需支持 12 寸晶圆 (300mm) 的高精度网格绘制 (Die Grid)。
    - 支持百万级缺陷点的流畅渲染 (使用 Canvas/WebGL)。
    - **Notch 对齐**: 必须根据 Flat/Notch 方向正确旋转晶圆图像。
- **联动分析**:
    - 点击 Defect Map 上的某个 Die，自动弹出该 Die 对应的 SEM 图像。
    - 右侧面板实时显示 AI 生成的分析结论。

### 3.2 模型训练策略

- **预训练 (Pre-training)**:
    - 使用历史积累的无标签 Defect Map 和 SEM 图像对 DINOv3 和 MAE 进行自监督预训练。
- **微调 (Fine-tuning)**:
    - 构建 "Map + SEM -> Text" 的对齐数据集。
    - 损失函数设计：不仅要对齐图像和文本，还要引入**工艺知识图谱**约束，确保生成的根因符合物理逻辑。

### 3.3 数据闭环

- **Human-in-the-loop**: 工程师可以对 AI 生成的报告进行点赞/修正，这些反馈数据将用于后续的 RLHF (人类反馈强化学习)，不断优化模型。

## 4. 预期价值

- **效率提升**: 将工程师分析一个 Lot 的时间从 **小时级** 缩短到 **分钟级**。
- **漏检降低**: 识别出人眼难以察觉的微弱 Pattern (如早期的设备老化迹象)。
- **知识沉淀**: 将资深工程师的经验转化为模型权重，避免人员流动导致的技术流失。

## 5. 下一步行动计划 (Next Steps)

1.  **数据收集**: 整理过去 1 年的 Defect Map 图片及对应的 SEM 图像、最终根因报告。
2.  **原型验证 (PoC)**:
    - 先用 DINOv3 尝试对 Defect Map 进行无监督聚类，看能否自动分出不同的 Pattern。
    - 验证 SEM-CLIP 在少量样本下的图文对齐效果。
3.  **系统集成**: 在 YMS 系统中嵌入 AI 分析插件，实现前端可视化联动。
