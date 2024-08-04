# RAG

RAG (Retrieval-Augmented Generation) 检索增强

通过合并来自外部可靠知识库的信息来改善大型语言模型 (LLMs)

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

RAG 的限制: 依赖多数据源 (结构化/非结构化): PDF, Markdown, CSV, Web, etc.

## RAG RAPTOR 检索树

RAPTOR (Recursive Abstractive Processing for Tree-Organized Retrieval)

引入了一种新方法, 即递归嵌入, 聚类和总结文本块, 从下往上构建具有不同总结级别的树. 在推理时 RAPTOR 模型从这棵树中检索, 合不同抽象级别的长文档中的信息, 比传统的检索增强型 LM 性能与绝对准确度上提高 20%

1. 对文本进行合理的切片处理, 需要选择合适的切片算法
2. RAPTOR 根据其语义 embedding 递归地对文本块 chunk 进行聚类, 并生成这些聚类的文本摘要
3. RAPTOR 采用软聚类方法, 允许文本块跨多个聚类, 基于高斯混合模型 (GMMs) 和 UMAP 技术进行降维, 以捕捉文本数据的复杂结构和关系, 从而优化文本聚类效果
4. 通过递归的向量分析, 精准地对文本块进行聚类, 并提炼出这些聚类的核心摘要, 自下而上地构建出一个结构化的树形模型. 在此树中, 相近的节点自然聚集形成兄弟关系, 而它们的父节点则承载着整个集群的概要性文本信息

@see: https://arxiv.org/abs/2401.18059

@see: https://github.com/parthsarthi03/raptor

@see: https://www.53ai.com/news/RAG/2024072513758.html

# GraphRAG

典型: neo4j, 微软 graphRAG

通过 KGs(knowledge graphs) 检索, 而不是 elasticsearch 检索

节点代表实体

边代表实体间的关系
