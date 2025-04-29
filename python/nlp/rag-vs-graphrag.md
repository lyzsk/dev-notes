为什么需要 RAG?

1. LLMs 并不了解你的数据, 且无法获取与此相关的最新数据, 它们是实现使用来自互联网的公共信息训练好的, 因此并不是专有数据库的专家也不会对该数据库进行更新
2. 上下文窗口-每个 LLM 都有一个 tokens 的最大限制(100 tokens 约等于 75 个单词), 用于限制每个用户每次提交的 tokens 数据, 会导致上下文丢失, 进而影响准确性, 产生检索问题, 模型幻觉, etc.
3. 中间遗失, 即 LLMs 可以一次性接受的所有数据, 存在检索信息问题, 如果相关信息位于文档中间, 而非开头或结尾时, 会导致性能降低

RAG 由 step-back prompting, 一种更新的 prompt 提示技术, 通过 LLM 的抽象来生成更高层次的概念和首要原则, 针对每一个 Question, 生成一个 step back question & answer

@see: https://www.cnblogs.com/charlieroro/p/18087301

# RAG

RAG(Retrieval-Augmented Generation) 检索增强

通过合并来自外部可靠知识库的信息来改善大型语言模型(LLMs)

当要求 LLM 回答问题时, 它并不仅依赖于已知的内容, 相反, 它首先查找来自特定知识源的相关信息, 这种方法确保生成的输出引用了大量上下文丰富数据, 通过当前和相关信息的增强

这在不重新训练或微调的情况下, 更新获得新信息或增强上下文理解能力, 解决了 ChatGPT 的常规用户常遇到的限制: "训练数据截至 20xx 年 xx 月", 过时或者不准确的回复, 导致了模型幻觉

## Retrieval Phase 检索阶段

在检索阶段, 算法会定位并收集与用户提示或查询相关的信息片段

e.g. 寻找某工艺的流程, 会得到提示: "具体流程的 recipe 是什么?"

也就是 问题 + LLM 产生的辅助问题, AI 辅助人提出正确的问题

系统识别具有与查询语义相关内容的文档, 并使用一种相似度度量(通常是余弦相似度), 计算相关性, 计算它们向量之间的相似度

@see: https://arxiv.org/html/2403.05440v1

## Content Generation Phase 内容生成阶段

基于检索信息 + 外部知识, 系统将其附加到用户的提示内容中, 并将其作为丰富的输入发送到语言模型

在随后的生成阶段, LLM 将这个增强的提示与自己的训练数据表示结合起来, 以生成针对用户查询定制的回复

prompt + query -> embedding model -> knowledge database -> retrieval -> enhanced context -> response & input

@see: https://53ai.com/news/qianyanjishu/2024060501643.html

RAG 的限制: 依赖多数据源(结构化/非结构化): PDF, Markdown, CSV, Web, etc.

## RAG RAPTOR 检索树

RAPTOR(Recursive Abstractive Processing for Tree-Organized Retrieval)

引入了一种新方法, 即递归嵌入, 聚类和总结文本块, 从下往上构建具有不同总结级别的树. 在推理时 RAPTOR 模型从这棵树中检索, 合不同抽象级别的长文档中的信息, 比传统的检索增强型 LM 性能与绝对准确度上提高 20%

1. 对文本进行合理的切片处理, 需要选择合适的切片算法
2. RAPTOR 根据其语义 embedding 递归地对文本块 chunk 进行聚类, 并生成这些聚类的文本摘要
3. RAPTOR 采用软聚类方法, 允许文本块跨多个聚类, 基于高斯混合模型(GMMs) 和 UMAP 技术进行降维, 以捕捉文本数据的复杂结构和关系, 从而优化文本聚类效果
4. 通过递归的向量分析, 精准地对文本块进行聚类, 并提炼出这些聚类的核心摘要, 自下而上地构建出一个结构化的树形模型. 在此树中, 相近的节点自然聚集形成兄弟关系, 而它们的父节点则承载着整个集群的概要性文本信息

@see: https://arxiv.org/abs/2401.18059

@see: https://github.com/parthsarthi03/raptor

@see: https://www.53ai.com/news/RAG/2024072513758.html

# GraphRAG

典型: neo4j, 微软 graphRAG

通过 KGs(knowledge graphs) 检索, 而不是 elasticsearch 检索

节点代表实体

边代表实体间的关系

## 传统的 vector RAG 常见问题和解决

### embedding 知识召回

1. 切片问题: 传统切片知识密度高, 每句话都可能包含答案, 且比如政策内容等文档条款间关联性强, 需要连续多个条款才能完成一个问题
2. embedding 微调: 通用的 embedding 模型不足以应对用户口语化严重的问题, 需要针对具体业务场景进行微调, 以过滤无关的信息, 从而提高准确度

3. Query vs Original: 简单高效, 数据结构是直接使用用户 query 召回知识库片段
4. Query vs Query: 便于维护, 即使用用户的 query 召回 query, 冷启动的时候可以利用模型自动化从对应的知识片段中抽取 query
5. Query vs Summary: 使用 query 召回知识片段的摘要, 构建摘要和知识片段之间的映射关系
6. F-Answer vs Original: 根据用户 query 生成 fake answer 去召回知识片段

经过微调后的 Embedding 模型在召回上会有大幅地提升, top 5 召回达到 100%, 而且不同 Embedding 模型微调后的召回差异在 1 个点之内, 模型的参数规模影响极小

### SFT & DPO(Direct Preference Optimization) 答案生成

1. 数据标注难度大: 业务人员虽然知道正确答案, 但难以标注出满足一致性和多样性要求的模型微调数据. 因此, 我们需要在获取基础答案后, 通过模型润色改写答案或增加 COT 的语言逻辑, 以提高数据的多样性和一致性
2. 问答种类多样: 业务需要模型能够正确回答/拒答不相关问题/反问以获取完整信息, 需要通过构造特定的数据来训练提升模型在这些方面的能力
3. 知识混淆度高: 在问答场景中, 召回精度有限, 模型需要先从大量相关知识片段中找到有效答案, 这个过程在政务等领域难度很大, 需要通过增加噪声数据来强化模型的知识搜索能力
4. 答案专业度高: 在公共服务的客服场景, 答案往往没有绝对准确性, 资深的客服人员总能给出更有帮助性的答案. 用户问题通常含糊, 更加考验专业人员的回答能力. 因此我们需要通过 DPO 方式训练模型, 使模型能够在众多答案中找到最好最优的答案. 需要分别构造数据, 并针对模型做 SFT(全监督微调) 和 DPO(直接偏好优化), 在构造数据时, 提供更多高质量训练数据, 微调就越好.

base model -> opensource train data(SFT stage1) -> vertical domain train data(SFT stage2) -> manual annotation train data(SFT stage 3) -> final model

@see: https://cloud.tencent.com/developer/article/2432500

已知 RLHF(基于人类反馈的强化学习)分三个阶段:

1. 全监督微调(SFT)
2. 奖励模型(RM)
3. 强化学习(PPO)

但 RLHF 面临的问题: 复杂且不稳定, 即首先拟合反应人类偏好的奖励模型, 然后使用强化学习微调无监督大模型 LM 以最大化奖励, 所以才有了 DPO(直接偏好优化): 通过利用奖励函数与最优策略之间的映射关系, 证明这个受限的奖励最大化问题可以通过单阶段的策略训练来精确优化, 本质上是在人类偏好数据上解决一个分类问题

DPO 原理: 增加偏好样本的对数概率与减小非偏好样本响应的对数概率. 它结合了动态加权机制, 以避免仅使用概率比目标时遇到的模型退化问题

DPO 依赖于理论上的偏好模型, 如 Bradley-Terry 模型, 来测量奖励函数与经验偏好数据的对齐程度. 与传统方法不同, 传统方法使用偏好模型来训练奖励模型, 然后基于该奖励模型训练策略, DPO 直接根据策略定义偏好损失. 给定一个关于模型响应的人类偏好数据集, DPO 可以使用简单的二元交叉熵目标来优化策略, 无需在训练过程中明确学习奖励函数或从策略中采样

DPO 重参数化等效于具有隐式奖励函数

@see: https://www.cnblogs.com/lemonzhang/p/17910358.html
