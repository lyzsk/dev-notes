#

Tokenizer 用于将文本拆分为 Token 序列, Padding 用于将文本转换为固定长度的输入, Embedding 则用于将离散的 Token 映射为连续的向量表示

embedding: 词嵌入

tokenizer: 分词器

# embedding

Embedding 就是用一个数值向量表示一个对象, 实体对象可以是 image/word

1. Embedding 是处理稀疏特征的利器. 常见场景: ID 型特征非常多
2. Embedding 可以融合大量有价值信息. 相比由原始信息直接处理得来的特征向量, embedding 的表达能力更强，特别是 Graph Embedding 技术被提出后, embedding 几乎可以引入任何信息进行编码，使其本身就包含大量有价值的信息, 所以通过预训练得到的 Embedding 向量本身就是极其重要的特征向量

在 nlp 中, embedding 是一种将离散变量(如单词, 短语, 文档) 转换为连续的向量方法. 这样方便机器理解自然语言数据.

本质就是一个查找表, 每个单词会定位这个表中的某一行, 而这一行就是这个单词学习到的在嵌入空间的语义

类似滑动窗口的 embdedding: word2vec. 对一句话生成多个滑动窗口截取中心词, 边缘此, 对词向量矩阵进行计算(中间有个 hidden 层): input -> Matrix W(Embdedding matrix) -> Hidden(n-demension vector) -> Matrix W'(Context matrix) -> softmax -> Output

在不同场景下(比如推荐场景), 根据不同目标构建出的序列不等同, 则 embedding 得到的关联信息也不同, 所以有对于梯度下降的 embedding weight 优化算法: FTRL, 适用于高维系数模型

总结: embdedding 在 nlp 就是一种高维数据映射到低维空间的技术, 将文本, 单词, 句子等语言单位转化为固定长度的向量, 从而实现文本的数字化表示

常见的 embedding 模型: word2vec, glove, fasttext

# tokenizer

将文本转换为单词或子词序列的过程. token 可以理解成 LLMs 处理的基本数据单元, 一个 token 可以是一个单词, 单词的一部分, 一个字符

#

nlp 中, tokenizer 和 embedding 一般联合使用, 将文本转为数字表示

e.g. 文本分类任务, 用 tokenizer 将文本分成单词序列, 然后用 embedding 将每个单词嵌入表示为向量. 最后将向量输入作为神经网络的输入

常用场景: 文本分类, 文本生成, 机器翻译, 问答系统

# prompt

Prompt 方法的核心就是通过某个模板将要解决的问题转换到与 PLM(Pre-trained Language Models) 预训练任务类似的形式来进行处理

e.g. "I missed the bus today." -> "I missed the bus today. I felt so [MASK]" -> 遮盖语言模型 MLM(Masked Language Model) 预测情绪词来识别它的情感极性, 也可以通过构建前缀: "English: I missed the bus today. Chinese:
[MASK]" -> 使用生成模型来获取它对应的中文翻译

这种 masked token 模板称为填充模板(cloze prompt), 它会被送入 MLM 来预测/填充 tasked token, 把后面这种整个模板文本在槽之前的模板称为前缀模板(prefix prompt), 通常对于生成类任务或者使用 auto-regressive LM 解决的任务, 使用 preﬁx prompt 会更加合适.
对于使用 MLM 解决的任务，cloze prompt 会更加适合，因为它们与预训练任务形式更匹配

大部分 NLP 任务都属于分类问题, 且 prefix prompt 形式比较单一(填充槽固定在末尾)

## cloze prompt

cloze prompt 分两部分: pattern(模板), verbalizer(表意)

pattern P: 将输入映射到一个 cloze 问题, 即从 input 到 token 序列的映射, 且映射后的 token 序列中会包含特殊的 mask token.

verbalizer v: 将每一个类别分别映射到其含义的 token, 一个合适的表意即是一个对 input 而言正确的标签, 用于替代 pattern 中的 mask.

e.g.

|       task       |           input x            |            pattern             |     verbalization     |
| :--------------: | :--------------------------: | :----------------------------: | :-------------------: |
|      topics      |      he prompted the LM      |   x The text is about [MASK]   | sports, science, etc. |
| Aspect Sentiment | Poor service but good food.  | x What about service? [MASK].  |  Bad, Terrible, etc.  |
|    Intention     | What is taxi fare to Denver? | x The question is about [MASK] | quantity, city, etc.  |

@see: https://xiaosheng.blog/2022/09/10/what-is-prompt

Prompt 方法最大的问题是: 性能好坏完全依赖于模板以及表意与任务的匹配程度

在固定 Verbalizer 的情况下, 知识把 mask token 放在 pattern 末尾或者交换句子顺序, 都会出现 > 10% 的性能下降, 同样地, 固定 pattern 变换表意也会产生不同结果

e.g.

|    pattern     | verbalization | accuracy |
| :------------: | :-----------: | :------: |
| x1? [MASK], x2 | Yes/Maybe/No  |   77.2   |
| x1, [MASK], x2 | Yes/Maybe/No  |   76.2   |
| x1? [MASK] x2  | Yes/Maybe.No  |   74.9   |
|  Fine-tuning   |       -       |   48.4   |

当表意词与类别在语义上匹配时, 最终的准确性就会更好, 比如 great/terrible > good/bad > cat/dog, 而如果交换表意词, 比如 terrible/great, 就会出现明显的性能下降

e.g.

|     pattern     | verbalization  | accuracy |
| :-------------: | :------------: | :------: |
| x it was [MASK] | great/terrible |   92.7   |
| x it was [MASK] |    good/bad    |   92.5   |
| x it was [MASK] |    cat/dog     |   91.5   |
| x it was [MASK] |    dog/cat     |   86.2   |
| x it was [MASK] | terrible/great |   83.2   |
|   fine-tuning   |       -        |   81.4   |

@see: https://xiaosheng.blog/2022/09/10/what-is-prompt#53-%E8%87%AA%E5%8A%A8%E9%97%AE%E7%AD%94

# 自动问答

自动问答任务(QA) 负责基于上下文信息回答指定的问题, 常见的:

1. 抽取式 QA(extractive QA): 答案包含在上下文中, 直接从文档中抽取答案, e.g. SQuAD
2. 多选 QA(multiple-choice QA): 从多个给定的选项中选择答案, e.g. RACE
3. 无约束 QA(free-form QA): 直接返回答案文本, 并且对答案文本格式没有任何限制, e.g. NarrativeQA

传统方法需要为每种 QA 形式设计对应的模型框架, 而 Prompt 方法可以使用统一的框架来解决所有这些 QA 问题. 2020 将多种 QA 任务都重新定义为文本生成问题, 然后通过微调与训练 seq2seq 模型以及模板来完成, 然后就有了 BART 等 seq2seq PLM 多模板方法.
