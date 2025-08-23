# GraphRAG(Retrieval-Augmented Generation using a Knowledge Graph)

# PIKE-RAG(sPecalized KnowledgE and Rationale Augmented Generation)

2025/01/20

@see: https://arxiv.org/abs/2501.11551

@see: https://github.com/microsoft/PIKE-RAG

暂时没视频或实战的信息, 处了一篇废话微信公众号

@see: https://mp.weixin.qq.com/s/sVHWdHXvcojvZlkArE4OFA

Despite notable advancements in Retrieval-Augmented Generation(RAG) systems that expand large language model(LLM) capabilities through external retrieval, these systems often struggle to meet the complex and diverse needs of real-world industrial applications.(但在满足实际工业应用中复杂且多样的需求方面, 这些系统仍然面临挑战) The reliance on retrieval alone proves insufficient for extracting deep, domain-specific knowledge performing in logical reasoning from specialized corpora.(仅依靠检索不足以从专业语料库中提取深层、领域特定的知识, 并进行逻辑推理) To address this, we introduce sPecIalized KnowledgE and Rationale Augmentation Generation(PIKE-RAG), focusing on extracting, understanding, and applying specialized knowledge, while constructing coherent rationale to incrementally steer LLMs toward accurate responses.(专注于提取、理解和应用专业领域知识, 并构建连贯的推理过程, 逐步引导 LLM 生成准确的答案) Recognizing the diverse challenges of industrial tasks, we introduce a new paradigm that classifies tasks based on their complexity in knowledge extraction and application, allowing for a systematic evaluation of RAG systems’ problem-solving capabilities.(考虑到工业任务的多样性和复杂性, 我们引入了一种新的范式, 该范式根据知识提取和应用的复杂度对任务进行分类, 从而系统地评估 RAG 系统的解决问题的能力) This strategic approach offers a roadmap for the phased development and enhancement of RAG systems, tailored to meet the evolving demands of industrial applications.(这一战略方法为 RAG 系统的阶段性开发和改进提供了一条路线图，使其能够满足工业应用不断变化的需求) Additionally, we propose knowledge atomizing and knowledge-aware task decomposition to effectively extract multifaceted knowledge from the data chunks and iteratively construct the rationale based on original query and the accumulated knowledge, respectively, showcasing exceptional performance across various benchmarks.(提出了知识原子化和知识感知的任务分解方法，以有效提取数据块中的多方面知识，并基于原始查询和逐步积累的知识，迭代地构建推理过程，展示了在各种基准测试中的卓越性能) Furthermore, we introduce a trainable knowledge-aware decomposer that incorporates domain-specific rationale into the task decomposition and result-seeking process(引入了一个可训练的知识感知分解器，该分解器将领域特定的推理融入任务分解和结果查找过程中)

也就是关键在:

1. paradigm that classifies tasks based on their complexity in knowledge extraction and application, 如何实现 allowing for a systematic evaluation of RAG systems’ problem-solving capabilities.
2. knowledge atomizing and knowledge-aware task decomposition 结合如何实现 effectively extract multifaceted knowledge from the data chunks and iteratively construct the rationale based on original query and the accumulated knowledge
3. trainable knowledge-aware decomposer, 如何实现 incorporates domain-specific rationale into the task decomposition and result-seeking process

主打在复杂企业场景中私域知识提取、推理和应用能力

PIKE-RAG 已在工业制造、采矿、制药等领域进行了测试, 显著提升了问答准确率

RAG 系统在满足现实世界应用的复杂和多样化需求方面仍然面临挑战。仅依靠直接检索不足以从专业语料库中提取深度领域特定知识并进行逻辑推理

PIKE-RAG 框架主要由几个基本模块组成, 包括文档解析、知识抽取、知识存储、知识检索、知识组织、以知识为中心的推理以及任务分解与协调。通过调整主模块内的子模块, 可以实现侧重不同能力的 RAG 系统, 以满足现实场景的多样化需求(论文第 7 页 Figure 2)

PIKE-RAG 专注于提取、理解和应用领域特定知识, 同时构建连贯的推理逻辑, 以逐步引导 LLM 获得准确的响应

## paper reading

### 2 Related work

#### 2.1 RAG

Retrieval-Augmented Generation(RAG) has emerged as a promising solution that effectively incorporates external knowledge to enhance response generation. Initially, retrieval-augmented techniques were introduced to improve the performance of pre-trained language models on knowledge-intensive tasks [36, 30, 13]. With the booming of Large Language Models [5, 10, 53, 7], most research in the RAG paradigm has shifted towards a framework that initially retrieves pertinent information from external data sources and subsequently integrates it into the context of the query prompt as supplementing knowledge for contextually relevant generation [47].(首先从外部数据源检索相关信息，然后将其整合到查询提示的上下文中，作为生成上下文相关响应的补充知识) Following this framework, naive RAG research paradigm [26] converts raw data into uniform plain text and segment it into smaller chunks, which are encoded into vector space for query-based retrieval.(原始的 RAG 方法将原始数据转换为统一的纯文本，并将其分割成更小的片段，这些片段被编码到向量空间中以便基于查询的检索) The top k relevant chunks are used to expand the context of the prompt for generation. To enhance the retrieval quality of the naive RAG, advanced RAG approaches implement specific enhancements across the pre-retrieval, retrieval, and post-retrieval processes, including query optimization [40, 67], multi-granularity chunking [17, 69], mixed retrieval and chunk re-ranking.(检索到的最相关的前 k 个片段用于扩展提示的上下文以生成响应, 包括查询优化、多粒度片段化以及混合检索和片段重新排序, 这些增强措施旨在提高系统的整体性能，使其能够更准确地从外部知识中提取信息并生成高质量的响应)

Beyond the aforementioned RAG paradigms, numerous sophisticated enhancements in RAG pipelines and system modules are introduced within modular RAG systems [27], aiming to improve system capability and versatility.(高系统的功能和灵活性) These advancements have enabled the processing of a wider variety of source data, facilitating the transformation of raw information into structured data and, ultimately, into valuable knowledge [60, 21].(这些增强使得系统能够处理更广泛的来源数据，将原始信息转化为结构化数据，最终转化为有价值的知识) Furthermore, the indexing and retrieval modules have been refined with multi-granularity and multi-architecture approaches [62, 69].(索引和检索模块通过多粒度和多架构的方法进行了改进) Various pre-retrieval(多种预检索) [25, 68] and postretrieval [19, 31] functions are proposed to enhance both the retrieval effectiveness and the quality of sequential generation.(以增强检索的有效性和连续生成的质量) It has been recognized that naïve RAG systems are insufficient to tackle complex tasks such as summarization [28] and multi-hop reasoning(多轮推理) [54, 29]. Consequently, most recent research focuses on developing advanced coordination schemes that leverage existing modules to collaboratively address these challenges.(最近的研究主要集中在开发先进的协调方案，利用现有模块协同解决这些挑战) ITERRETGEN [49] and DSP [34] employ retrieve-read iteration to leverage generation response as the context for next round retrieval.(检索-读取迭代的方法，利用生成的响应作为下一轮检索的上下文) FLARE [32] proposes a confidence-based active retrieval mechanism(基于置信度的主动检索机制) that dynamically adjusts query with respect to the low-confidence tokens in the regenerated sentences.(动态调整查询以针对重新生成的句子中置信度低的标记) These loop-based RAG pipelines progressively converge towards the correct answer and provide enhanced flexibility to RAG systems in addressing diverse requirements.(这些循环式的 RAG 管道逐步收敛到正确答案，为 RAG 系统应对多样化的任务需求提供了更大的灵活性)

#### 2.2 Knowledge bases for RAG

In naïve RAG approaches, source data is converted to plain text and chunked for retrieval.(源数据被转换为纯文本并分块以便检索) However, as RAG applications expand and demand for diversity grows, plain text-based retrieval becomes insufficient(仅基于纯文本的检索变得不够充分) for several reasons:(1) textual information is generally redundant and noisy, leading to decreased retrieval quality;(文本信息通常冗余且嘈杂，导致检索质量下降)(2) complex problems require the integration of multiple data sources, and plain text alone cannot adequately represent the intricate relationships between objects.(复杂问题需要整合多个数据源，而纯文本无法充分表示对象之间的复杂关系) As a result, researchers are exploring diverse data sources to enrich the corpus, incorporating search engines [63, 57], databases [59, 42, 48], knowledge graphs [50, 60], and multimodal corpora [18, 16].(搜索引擎、数据库、知识图谱和多模态语料库) Concurrently, there is an emphasis on developing efficient knowledge representations for corpus to enhance knowledge retrieval. A graph is regarded as a powerful knowledge representation because of its capacity to intuitively model complex relationships. GraphRAG [21] combines knowledge graph generation and query-focused summarization with RAG to address both local and global questions. HOLMES [43] construct hyper-relational KGs and prune them to distilled graphs, which serve as an input to LLMs for multihop question answering.(HOLMES 构建超关系 KG 并修剪成浓缩图，这些图作为输入提供给大型语言模型进行多跳问答) However, the construction of knowledge graphs is extremely resource-intensive, and the associated costs scale up with the size of the corpus.(然而，知识图谱的构建非常耗费资源，相关成本会随着语料库规模的增大而上升)

需要解决的问题:

1. 文本信息通常冗余且嘈杂，导致检索质量下降
2. 复杂问题需要整合多个数据源，而纯文本无法充分表示对象之间的复杂关系
3. 不依赖 KG, 避免成本会随着语料库规模的增大而上升

#### 2.3 Multi-hop QA

Multi-hop Question Answering(MHQA)(多跳问答) [64] involves answering questions that require reasoning over multiple pieces of information,(是一种需要在多个信息片段上进行推理的任务) often scattered across different documents or paragraphs.(这些信息片段通常分布在不同的文档或段落中) This task presents unique challenges as it necessitates not only retrieving relevant information but also effectively combining and reasoning over the retrieved pieces to arrive at a correct answer.(这种任务的独特挑战不仅在于检索相关的信息，还在于有效地组合和推理这些检索到的信息以得出正确的答案) The traditional graph-based methods in MHQA solve the problem by building graphs and inferring on graph neural networks(GNN) to predict answers [45, 22]. With the advent of LLMs, recent graph-based methods [37, 43] have evolved to construct knowledge graphs for retrieval and generate response through LLMs.(传统的基于图的方法在 MHQA 中通过构建图并使用图神经网络(GNN)进行推理来预测答案。随着大语言模型(LLM)的发展，一些最近的基于图的方法已经进化到构建知识图用于检索，并通过 LLM 生成答案) Another branch of methods dynamically convert multi-hop questions into a series of sub-queries by generating subsequent questions based on the answers to previous ones [55, 34, 24].(另一种方法则是动态地将多跳问题转换成一系列子查询，通过生成后续问题来基于前一个问题的答案进行推理) The subqueries guides the sequential retrieval and the retrieved results in turn are used to improve reasoning.(这些子查询指导顺序检索，而检索结果又反过来用于改进推理过程) Treating MHQA as a supervised problem, Self-RAG [65] trains an LM to learn to retrieve, generate, and critique text passages, and beam-retrieval [8] models the multi-hop retrieval process in an end-to-end manner by jointly optimizing an encoder and classification heads across all hops.(Self-RAG 训练一个语言模型来学习检索、生成和批评文本片段. 束检索(beam-retrieval)则通过端到端的方式建模多跳检索过程，在所有跳数上联合优化编码器和分类头。) Self-Ask [44] improves CoT by explicitly asking itself follow-up questions before answering the initial question.(Self-Ask 通过明确地在回答初始问题之前向自己提出后续问题来改进链式思维(CoT)) This method enables the automatic decomposition of questions and can be seamlessly integrated with retrieval mechanisms to tackle Multi-hop Question Answering.( 这种方法可以自动分解问题，并且能够与检索机制无缝集成，从而处理多跳问答)

### 3 Problem formulation

Existing research mainly concentrates on algorithmic enhancements to improve the performance of RAG systems.(主要集中在算法改进上) However, there is limited effort in providing a comprehensive and systematic discussion of the RAG framework. In this work, we conceptualize the RAG framework from three key perspectives: knowledge base, task classification, and system development.(知识库、任务分类和系统开发) We assert that the knowledge base serves as the fundamental cornerstone of RAG, underpinning all retrieval and generation processes.(我们认为知识库构成了 RAG 的基础，支撑着所有的检索和生成过程) Furthermore, we recognize that RAG tasks can vary significantly in complexity and difficulty, depending on the required generation capabilities and the availability of supporting corpora.(我们认识到 RAG 任务的复杂性和难度会随着所需的生成能力和支持语料的可用性而有所不同) By categorizing tasks according to their difficulty levels, we classify RAG systems into distinct levels based on their problem-solving capabilities across the different types of questions.(通过根据任务的难度进行分类，我们将 RAG 系统分为不同的层级，以反映其在不同类型问题上的解题能力。)

#### 3.1 Knowledge base

In industrial applications, specialized knowledge primarily originates from years of accumulated data within specific fields such as manufacturing, energy, and logistics. For example, in the pharmaceutical industry, data sources include extensive research and development documentation, as well as drug application files amassed over many years.(在工业应用中，专业知识主要来源于特定领域(如制造业、能源和物流)中多年积累的数据) These sources are not only diverse in file formats, but also encompass a significant amount of multi-modal contents such as tables, charts, and figures, which are also crucial for problem-solving.(例如，在制药行业中，数据来源包括广泛的研发文档以及多年来积累的药物申请文件。) Furthermore, there are often functional connections between files within a specialized domain, such as hyperlinks, references, and relational database links, which explicitly or implicitly reflect the logical organization of knowledge within the professional field.(这些数据不仅在文件格式上多样，还包含大量的多模态内容，如表格、图表和图形，这对于解决问题至关重要。此外，在特定领域内部的文件之间通常存在功能连接，比如超链接、引用和关系数据库链接，这些连接显式或隐式地反映了该专业领域内知识的逻辑组织) Currently, existing datasets provide pre-segmented corpora and do not account for the complexities encountered in real-world applications, such as the integration of multi-format data and the maintenance of referential relationships between documents.(然而，现有的数据集通常提供的是预先分割好的语料库，未能反映现实世界应用中的复杂性，例如多格式数据的整合以及文档间引用关系的维护) Therefore, the construction of a comprehensive knowledge base is foundational for Retrieval-Augmented Generation(RAG) in the industrial field.(因此，构建一个全面的知识库对于工业领域的检索增强生成(RAG)至关重要) As the architecture and quality of the knowledge base directly influence the retrieval methods and their performance, we propose structuring the knowledge base as a multi-layer heterogeneous graph, denoted as G, with corresponding nodes and edges represented by(V,E).(由于知识库的架构和质量直接影响检索方法及其性能，我们建议将知识库结构化为一个多层异构图，记作 G，其中节点和边分别表示为(V,E)。) The graph nodes can include documents, sections, chunks, figures, tables, and customized nodes from distilled knowledge. The edges signify the relationships among these nodes, encapsulating the interconnections and dependencies within the graph.(图中的节点可以包括文档、章节、段落、图表、表格以及从提炼知识中产生的自定义节点。边则表示这些节点之间的关系，包括图中的互联和依赖关系) This multi-layer heterogeneous graph encompasses three distinct layers: the information resource layer Gi, the corpus layer Gc and the distilled knowledge layer Gdk. Each layer corresponds to different stages of information processing, representing varying levels of granularity and abstraction in knowledge.(此多层异构图包含三个不同的层次：信息资源层 Gi、语料层 Gc 和提炼知识层 Gdk。每一层对应于信息处理的不同阶段，代表了不同级别的粒度和知识抽象。信息资源层 Gi 包含原始的数据来源，语料层 Gc 是对这些数据进行初步处理和组织得到的，而提炼知识层 Gdk 则是更高层次的知识提炼和总结。这种分层结构有助于更好地组织和利用专业知识，提高 RAG 系统的性能。)

#### 3.2 Task classification

Contemporary RAG frameworks frequently overlook the intricate difficulty and logistical demands inherent to diverse tasks, typically employing a one-size-fits-all methodology.(现有的 RAG 框架常常忽视了不同任务之间复杂的难度差异和物流需求，通常采用一种适用于所有任务的通用方法) However, even with comprehensive knowledge retrieval, current RAG systems are insufficient to handle tasks of varying difficulty with equal effectiveness.(然而，即使具备全面的知识检索能力，当前的 RAG 系统在处理不同难度的任务时仍表现出不均衡的效果。) Therefore, it is essential to categorize tasks and analyze the typical strategies for overcoming the challenges inherent to each category.(因此，对任务进行分类并分析每个类别中克服挑战的典型策略变得至关重要。) The difficulty of a task is closely associated with several critical factors.

一个任务的难度与以下几个关键因素紧密相关:

-   Relevance and Completeness of Knowledge(知识的相关性和完整性): The extent to which the necessary information is present within the knowledge base and how comprehensively it covers the topic.(知识库中包含所需信息的程度及其对主题的覆盖范围)
-   Complexity of Knowledge Extraction(知识提取的复杂性): The difficulty in accurately identifying and retrieving all relevant pieces of knowledge, especially when scattered across multiple sources or implicitly embedded in the text.(准确识别和检索所有相关知识的难度，尤其是在这些知识分散在多个来源或隐含在文本中的情况下)
-   Depth of Understanding and Reasoning(理解和推理的深度): The level of cognitive and inferential processing required to comprehend the retrieved information, establish connections, and perform multi-step reasoning.(理解检索到的信息、建立连接和执行多步骤推理所需的认知和推理处理水平)
-   Effectiveness of Knowledge Utilization(知识利用的有效性): The sophistication involved in applying the extracted knowledge to formulate responses, including synthesizing, organizing, and generating insights or predictions(将提取的知识应用于形成响应的复杂性，包括综合、组织和生成见解或预测)

In categorizing real-world RAG tasks within industries, we focus on the processes of knowledge extraction, understanding, organization, and utilization to provide structured and insightful responses. Taking the aforementioned factors into account, we identify four distinct classes of questions that address a broad spectrum of demands.(我们专注于知识提取、理解、组织和利用的过程，以提供结构化和有见地的回答) The first type, Factual Questions, involves extracting specific, explicit information directly from the corpus, relying on retrieval mechanisms to identify the relevant facts. Linkable-Reasoning Questions demand a deeper level of knowledge integration, often requiring multi-step reasoning and linking across multiple sources. Predictive Questions extend beyond the available data, requiring inductive reasoning and structuring of retrieved facts into analyzable forms, such as time series, for future-oriented predictions. Finally, Creative Questions engage domainspecific logic and creative problem-solving, encouraging the generation of innovative solutions by synthesizing knowledge and identifying patterns or influencing factors. This categorization, driven by varying levels of reasoning and knowledge management, ensures a comprehensive approach to addressing industry-specific queries.(这种分类，基于不同的推理水平和知识管理，确保了对行业特定查询的全面应对)

1. 第一类是事实性问题，这类问题涉及直接从语料库中提取具体、明确的信息，依赖检索机制来识别相关的事实
2. 第二类是可链接推理问题，这类问题需要更深层次的知识整合，通常需要多步推理，并在多个来源之间进行链接
3. 第三类是预测性问题，这类问题超越了现有数据，需要归纳推理以及将检索到的事实结构化为可分析的形式，如时间序列，以进行面向未来的预测
4. 第四类是创造性问题，这类问题涉及领域特定逻辑和创造性问题解决，鼓励通过知识综合和模式识别或影响因素的确定来生成创新的解决方案

The criteria defining each category are elaborated in the following sections, with representative examples for each provided in Figure 1.(论文第 6 页) For each question type, we also present the associated support data and the expected reasoning processes to illustrate the differences between these categories. These inquiries are formulated by experts in pharmaceutical applications, based on the data released by the FDA

1. **Factual Questions**: These questions seek specific, concrete pieces of information explicitly presented in the original corpus.(寻求在原始语料库中明确呈现的具体、具体的信息) The referenced text can be processed within the context of a conversation in LLMs.(引用的文本可以在 LLMs 的对话上下文中进行处理) As shown in Figure 1, this class of questions can be effectively answered if the relevant fact is successfully retrieved.(这类问题如果能够成功检索到相关事实，则可以得到有效回答)
    - 单纯的 link
2. **Linkable-Reasoning Questions**: Answering these questions necessitates gathering pertinent information from diverse sources and/or executing multi-step reasoning.(回答这些问题需要从不同的来源收集相关信息，并/或执行多步骤推理) The answers may be implicitly distributed across multiple texts.(案可能隐含分布在多个文本中) Due to variations in the linking and reasoning processes, we further divide this category into four subcategories(由于链接和推理过程的差异，我们将这一类别进一步细分为四个子类别): bridging questions(搭桥问题), comparative questions(比较问题), quantitative questions(定量问题), and summarizing questions(总结问题). Examples of each subcategory are illustrated in Figure 1. Specifically, bridging questions involve sequentially bridging multiple entities to derive the answer.(搭桥问题涉及按顺序将多个实体联系起来以推导出答案) Quantitative questions require statistical analysis based on the retrieved data.(定量问题需要基于检索到的数据进行统计分析) Comparative questions focus on comparing specified attributes of two entities.(比较问题专注于比较两个实体的指定属性) Summarizing questions require condensing or synthesizing information from multiple sources or large volumes of text into a concise, coherent summary, and they often involve integrating key points, identifying main themes, or drawing conclusions based on the aggregated content.(总结问题需要将来自多个来源或大量文本的信息浓缩或综合成一个简明、连贯的摘要，这通常涉及整合关键点、识别主题或根据汇总内容进行结论) Summarizing questions may combine elements of other question types, such as bridging, comparative, or quantitative questions, as they frequently require the extraction and integration of diverse pieces of information to generate a comprehensive and meaningful summary.(总结问题可能结合其他问题类型，如搭桥、比较或定量问题，因为它们通常需要从不同来源提取和整合信息，以生成全面且有意义的摘要) Given these questions require multi-step retrieval and reasoning, it is crucial to establish a reasonable operation route for answer-seeking in interaction with the knowledge base.(鉴于这些问题需要多步骤检索和推理，建立合理的操作路径以寻求答案并与知识库交互至关重要)
    - **bridging questions**: 通过 analytical reasoning 来 decompose task + 桥接多个 link
    - **comparative questions**: 通过 analytical reasoning 来 decompose task + link 一个或多个 + statistics 数学计算
    - **quantitative questions**: 通过 analytical reasoning 来 decompose task + link 一个或多个 + compare 比如简单的大小比较
    - **summarizing questions**: 通过 analytical reasoning 来 decompose task + link 多个 + organize 把 information 转化为 categoriees + compare 对每一个 category 进行比较 + summarize 摘要
        > bridging question 可以算单独一层, 其次是 comparetive question, quantitative question 算一层, summarizing question 算一层, 不是单独的并列, 而是可能性复用
        > comparetive/quantitative question 区别是 统计性质/比较性质 的数学问题
        > summarizing 可能用到前三者所有或其一或其二
3. **Predictive Questions**: For this type of questions, the answers are not directly available in the original text and may not be purely factual, necessitating inductive reasoning and prediction based on existing facts.(对于这一类问题，答案并不直接存在于原文本中，并且可能并非纯粹的事实，因此需要基于现有事实进行归纳推理和预测) To harness the predictive capabilities of LLMs or other external prediction tools, it is essential to gather and organize relevant knowledge to generate structured data for further analysis.(为了充分利用大型语言模型(LLMs)或其他外部预测工具的预测能力，必须收集和组织相关知识，以生成结构化数据以供进一步分析) For instance, as illustrated in Figure 1, all biosimilar products with the approval dates are retrieved, and the total number of approvals for each year is calculated and organized to year-indexed time series data for prediction purposes. Furthermore, it is important to note that the correct answer to predictive questions may not be unique, reflecting the inherent uncertainty and variability in predictive tasks.(预测性问题的正确答案可能并非唯一的，这反映了预测任务固有的不确定性和变异性)
4. **Creative questions**: One significant demand of RAG is to mine valuable domain-specific logic from professional knowledge bases and introduce novel perspectives that can innovate and advance existing solutions. Addressing creative questions necessitates creative thinking based on the availability of factual information and an understanding of the underlying principles and rules.(答案的提出不仅依赖于现有的具体事实信息，还需要深入理解相关的原理和规则，并在此基础上进行创意思考) As illustrated in the example, it is essential to organize the extracted information to highlight key stages and their duration, and then identify common patterns and influential factors.(组织提取的信息以突出关键阶段及其持续时间是非常重要的，然后识别其中的常见模式和影响因素) Subsequently, solutions are developed with the objective of evaluating potential outcomes and stimulating fresh ideas.(随后，开发解决方案的目标是评估潜在的结果并激发新的想法) The goal of these responses is to inspire experts to generate innovative ideas, rather than to provide ready-to-implement solutions.(这些响应的目的是激发专家产生创新的想法，而不是直接提供可实施的解决方案)

    It is crucial to recognize that the classification of a question may shift with changes in the knowledge base. Questions Q1, Q2, and Q3 in Figure1, although seemingly similar, are categorized differently depending on the availability of information and the logical steps required to derive an answer.(但由于信息的可用性和推导答案所需的逻辑步骤不同，被归类为不同的类型) For instance, Q1 is classified as a factual question because it can be directly answered using a table that concisely lists all biosimilar products along with their respective approval dates, providing sufficient explicit information.(1 可以被直接归类为事实性问题，因为它可以通过一个简洁列出所有生物类似药及其批准日期的表格直接回答，提供了足够的明确信息) In contrast, Q2, which inquires about the total count of interchangeable biosimilar products, cannot be resolved by directly referencing a single explicit source. To answer Q2, one must identify all the products meeting the specified criteria and subsequently calculate the total, necessitating an additional step of statistical aggregation. Therefore, Q2 is categorized as a linkable-reasoning question due to the need for an intermediate processing.(相比之下，Q2 询问的是可互换生物类似药的总数，这个问题不能通过直接引用单一的明确来源来解决。要回答 Q2，必须识别所有符合特定标准的产品，并计算总数，这需要额外的统计聚合步骤，因此 Q2 被归类为可链接推理问题。) Finally, Q3 poses a challenge because the answer does not explicitly exist within the knowledge base. Addressing Q3 requires gathering relevant data, organizing it to infer hidden patterns, and making predictions based on these inferred rules. As a result, Q3 is categorized as a predictive question, indicating the requirement to extrapolate beyond the existing data to forecast potential outcomes or trends.(最后，Q3 提出的挑战在于答案并没有显式地存在于知识库中。解决 Q3 需要收集相关数据，组织数据以推断隐藏的模式，并根据这些推断出的规则进行预测。因此，Q3 被归类为预测性问题，表明需要从现有数据之外进行推断来预测潜在的结果或趋势。)

#### 3.3 RAG system level

In industrial RAG systems, inquiries encompass a broad spectrum of difficulties and are approached from diverse perspectives.(在工业 RAG 系统中，查询涵盖了广泛程度的难度，并从不同的角度进行处理) Although RAG systems can leverage the general question-answering(QA) abilities of LLMs, their limited comprehension of expert-level knowledge often leads to inconsistent response quality across questions of varying complexities.(然 RAG 系统可以利用 LLM 的一般问答(QA)能力，但它们对专家级知识的理解有限，这往往导致不同难度问题的回答质量不一致) In response to this status quo, we propose categorizing RAG systems into four distinct levels based on their problem-solving capabilities across the four classes of questions outlined in the previous subsection. This stratified approach facilitates the phased development of RAG systems, allowing capabilities to be incrementally enhanced through iterative module refinement and algorithmic optimization.(这种分层方法促进了 RAG 系统的分阶段开发，通过迭代模块改进和算法优化，可以逐步提升其能力) Our framework is strategically designed to provide a standardized, objective methodology for developing RAG systems that effectively meet the specialized needs of various industry scenarios.(我们的框架旨在为开发有效满足各种行业场景的特殊需求的 RAG 系统提供一种标准化、客观的方法) The definition of RAG systems in different level is presented in Table 1. It highlights the systems’ capabilities to handle increasingly complex queries, demonstrating the evolution from simple information retrieval to advanced predictive and creative problem-solving. Each level represents a step towards more sophisticated interactions with knowledge bases, requiring the RAG systems to demonstrate higher levels of understanding, reasoning, and innovation.(每个级别代表了与知识库进行更复杂交互的一步，要求 RAG 系统展示更高的理解、推理和创新能力。)

| Level |                                                                                                                                System capability description                                                                                                                                 |
| :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  L1   |                                                                    The L1 system is designed to provide accurate and reliable answers to factual questions, ensuring a solid foundation for basic information retrieval.                                                                     |
|  L2   |                                        The L2 system extends its functionality to include accurate and reliable responses to both factual questions and linkable-reasoning questions, enabling more complex multi-step retrieval and reasoning tasks.                                        |
|  L3   |                  The L3 system further enhances its capabilities by incorporating the ability to deliver reasonable predictions for predictive questions, while maintaining accuracy and reliability in answering both factual questions and linkable-reasoning questions.                   |
|  L4   | The L4 system is capable of proposing well-reasoned plans or solutions to creative questions. In addition, it retains the ability to provide reasonable predictions for predictive questions, alongside accurate and reliable answers to factual questions and linkable-reasoning questions. |

More specially, at the foundational level, RAG systems respond to factual questions with answers that are directly extractable from provided texts. Advancing to the second level, RAG systems are equipped to handle complex questions involving linkage and reasoning. These queries necessitate the synthesis of information from disparate sources or multi-step reasoning processes. The RAG could address a variety of composite questions, includes bridging questions that necessitate a sequence of logical reasoning, comparative questions demanding parallel analysis, and summarizing questions that involve condensing information into comprehensive responses. At the third level, the systems are intricately designed to tackle predictive questions where answers are not immediately discernible from the original text. Finally, RAG systems at the forth level demonstrate the capacity for creative problem-solving, utilizing a solid factual base to foster novel concepts or strategies. While these systems may not offer ready-to-implement solutions, they play a crucial role in stimulating expert creativity to advance fields such as analytics or treatment design.

-   L1: 旨在为事实性问题提供准确和可靠的答案，确保为基本的信息检索奠定坚实基础
    -   基础层级的 RAG 系统能够通过直接从提供的文本中提取的答案来回应事实性问题
        > Factual Questions
-   L2: 扩展了其功能，能够为事实性问题和可链接推理问题提供准确和可靠的答案，从而支持更复杂的多步骤检索和推理任务
    -   RAG 系统能够处理涉及链接和推理的复杂问题, 这些问题需要从不同来源综合信息或进行多步推理。RAG 系统可以解决多种复合问题，包括需要一系列逻辑推理的桥接问题(linkage and reasoning)、需要并行分析的比较问题以及需要将信息浓缩为综合响应的总结问题。
        > Linkable-Reasoning Questions
        >
        > 1. bridging questions
        > 2. comparative questions
        > 3. quantitative questions
        > 4. summarizing questions
-   L3: 进一步增强了其能力，能够为预测性问题提供合理的预测，同时保持对事实性问题和可链接推理问题的准确和可靠的回答
    -   这些系统被设计成能够应对预测性问题，这类问题的答案不能立即从原始文本中得出
        > Predictive Questions
-   L4: 能够为创造性问题提出合理的计划或解决方案。此外，它还保留了为预测性问题提供合理预测的能力，以及对事实性问题和可链接推理问题提供准确和可靠答案的能力。
    -   第四层级的 RAG 系统展示了进行创造性问题解决的能力，它们利用坚实的事实基础来激发新的概念或策略。虽然这些系统可能不会提供即用型解决方案，但它们在刺激专家的创造力方面发挥着至关重要的作用，有助于推动如数据分析或治疗设计等领域的发展。
        > Creative questions

### 4 Methodology

#### 4.1 Framework

Based on the formulation of RAG systems in terms of knowledge base, task classification, and systemlevel division, we propose a versatile and expandable RAG framework.(多功能且可扩展的 RAG 框架) Within this framework, the progression in levels of RAG systems can be achieved by adjusting submodules within the main modules. The overview of our framework is depicted in Figure 2.(论文第 10 页) The framework primarily consists of several fundamental modules, including file parsing(文件解析), knowledge extraction(知识提取), knowledge storage(知识存储), knowledge retrieval(知识检索),(知识组织), knowledge-centric reasoning(知识中心推理), and task decomposition and coordination(任务分解与协调). In this framework, domain-specific documents of diverse formats are processed by file parsing module to convert the file to machine-readable formats, and file units are generated to build up graph in information source layer.(文件解析模块负责处理各种格式的领域特定文档，将其转换为机器可读的格式，并生成文件单元以构建信息源层中的图) The knowledge extraction module chunks the text and generates corpus and knowledge units to construct graph in corpus layer and distilled knowledge layer.(知识提取模块对文本进行分块处理，生成语料库和知识单元，用于构建语料层和知识提炼层中的图) The heterogeneous graph established is utilized as the knowledge base for retrieval.(所建立的异构图被用作知识检索的基础知识库) Extracted knowledge is stored in multiple structured formats, and the knowledge retrieval module employs hybrid retrieval strategy to access relevant information.(提取的知识以多种结构化格式存储，而知识检索模块则采用混合检索策略来访问相关信息) Note that the knowledge base not only serves as the source of knowledge gathering but also benefits from a feedback loop, where the organized and verified knowledge is regarded as feedback to refine and improve the knowledge base.(该知识库不仅作为知识收集的来源，还受益于反馈循环，组织和验证后的知识被视为反馈，用于优化和改进知识库)

1. file parsing
2. knowledge extraction
3. knowledge storage
4. knowledge retrieval
5. knowledge organization
6. knowledge-centric reasoning
7. task decomposition and coordination

As highlighted in the task classification examples, questions of different classes require distinct rationale routing for answer-seeking, influenced by multiple factors such as the availability of relevant information, the complexity of knowledge extraction, and the sophistication of reasoning. It is challenging to address these questions in a single retrieval and generation pass. To tackle this, we propose an iterative retrieval-generation mechanism supervised by task decomposition and coordination.(需要采用一种迭代的检索-生成机制) This iterative mechanism enables the gradual collection of relevant information and progressive reasoning over incremental context, ensuring a more accurate and comprehensive response.(这种迭代机制能够逐步收集相关的信息，并在逐步增加的上下文中进行推理，从而确保响应更加准确和全面) More specially, the questions in industrial applications are fed into task decomposition module to produce preliminary decomposition scheme. This scheme outlines the retrieval steps, reasoning steps, and other necessary operations.(首先将问题输入到任务分解模块，生成一个初步的分解方案。这个方案会列出检索步骤、推理步骤以及其他必要的操作) Following these instructions, the knowledge retrieval module retrieves relevant information, which is then passed to the knowledge organization module for processing and organization.(根据这些指令，知识检索模块会获取相关的信息，这些信息会被传递给知识组织模块进行处理和整理) The organized knowledge is used to perform knowledge-centric reasoning, yielding an intermediate answer.(整理后的知识用于进行以知识为中心的推理，从而得到一个中间答案) With the updated relevant information and intermediate answer, the task decomposition module regenerates an updated scheme for the next iteration.(结合更新的相关信息和中间答案，任务分解模块会为下一次迭代生成一个更新的方案) This design boasts excellent adaptability, allowing us to tackle problems of varying difficulties and perspectives by adjusting the modules and iterative mechanisms(这种设计具有很好的适应性，可以通过调整模块和迭代机制来应对不同难度和视角的问题)

#### 4.2 Phased system development

We have categorized RAG systems into four distinct levels based on their problem-solving capabilities across the four classes of questions, as outlined in Table 1. Recognizing the pivotal role of knowledge base generation in RAG systems, we designate the construction of the knowledge base as the L0 stage of system development.(我们将知识库的构建定义为系统开发的 L0 阶段) The challenges faced by RAG systems vary across different levels. We analyze these challenges for each level and propose corresponding frameworks in Table 2. This stratified approach facilitates the phased development of RAG systems, enabling incremental enhancement of capabilities through iterative module refinement and algorithmic optimization.

We observe that from L0 to L4, higher-level systems can inherit modules from lower levels and add new modules to enhance system capabilities.(从 L0 到 L4，较高层次的系统可以继承较低层次系统的模块，并添加新的模块以增强系统能力) For instance, compared to an L1 system, an L2 system not only introduces a task decomposition and coordination module to leverage iterative retrieval-generation routing but also incorporates more advanced knowledge extraction modules, such as distilled knowledge generation, indicated in dark green in Figure 2.(L2 系统不仅引入了一个任务分解和协调模块以利用迭代检索-生成路由，还增加了更为先进的知识提取模块，如蒸馏知识生成模块(图 2 中用深绿色表示)) In the L3 system, the growing emphasis on predictive questioning necessitates enhanced requirements for knowledge organization and reasoning.(在 L3 系统中，随着对预测性问题重视的增加，对知识组织和推理的需求也随之提高) Consequently, the knowledge organization module introduces additional submodules for knowledge structuring and knowledge induction, indicated in dark orange.(因此，知识组织模块引入了额外的子模块用于知识结构化和知识诱导(图中用深橙色表示)) Similarly, the knowledge-centric reasoning module has been expanded to include a forecasting submodule, highlighted in dark purple.(同样地，知识中心推理模块也扩展以包含一个预测子模块(图中用深紫色表示)) In the L4 system, extracting complex rationale from an established knowledge base is highly challenging. To address this, we introduce multi-agent planning module to activate reasoning from diverse perspectives.(到了 L4 系统，从已建立的知识库中提取复杂的推理过程极具挑战性。为了解决这个问题，我们引入了多智能体规划模块，以激活从不同角度的推理。)

这里看 Figure4 的注解, 感觉是 RAG+GraphRAG+LLM 超级大 multi-agent:

Figure 4: The process of distilling knowledge from corpus text. The corpus text are processed to extract knowledge units following customized extraction patterns.(首先，语料库文本会被处理以提取知识单元，这些提取过程是根据定制的模式进行的) These knowledge units are then organized to structured knowledge in the distilled knowledge layer(提取的知识单元随后会被组织成结构化的知识，位于知识蒸馏层), which may take the form of knowledge graphs, atomic knowledge, tabular knowledge, and other induced knowledge.(这些结构化的知识可以以知识图谱、原子知识、表格知识及其他推导出的知识形式出现。)

### 5 Detailed Implementation

In this section, we delve into the implementation specifics of each module within our proposed versatile and expandable RAG framework. By elucidating the details at each level, we aim to provide a comprehensive understanding of how the framework operates and how its modularity and expandability are achieved. The subsections that follow will cover the file parsing, knowledge extraction, knowledge storage, knowledge-centric reasoning, and task decomposition and coordination modules, providing insights into their individual functionalities and interactions.

#### 5.1 Level-0: Knowledge Base Construction

The foundational stage of the proposed RAG systems is designated as the L0 system, focuses on the construction of a robust and comprehensive knowledge base. This stage is critical for enabling effective knowledge retrieval in subsequent levels. The primary objective of the L0 system is to process and structure domain-specific documents, transforming them into a machine-readable format and organizing the extracted knowledge into a heterogeneous graph.(L0 系统的首要目标是处理和结构化特定领域的文档，将这些文档转换为机器可读的格式，并将提取出的知识组织成一个异构图) This graph serves as the backbone for all higher-level reasoning and retrieval tasks.(这一图结构作为所有更高层次推理和检索任务的基础) The L0 system encompasses several key modules: file parsing, knowledge extraction, and knowledge storage(L0 系统包含几个关键模块：文件解析、知识提取和知识存储). Each of these modules plays a crucial role in ensuring that the knowledge base is both extensive and accurately reflects the underlying information contained within the source documents.

5.1.1 File parsing

The ability to effectively parse and read various types of files is a critical component in the development of RAG systems that rely on diverse data sources. Frameworks such as LangChain3 provide a comprehensive suite of tools for natural language processing(NLP), including modules for parsing and extracting information from unstructured text documents.(框架如 LangChain3 提供了包括自然语言处理(NLP)在内的全面工具集，其中包括用于解析和从非结构化文本文档中提取信息的模块) Its file reader capabilities are designed to handle a wide range of file formats, ensuring that data from heterogeneous sources can be seamlessly integrated into the system.(其文件阅读能力被设计成能够处理各种文件格式，确保来自不同来源的数据可以无缝地集成到系统中) Additionally, several deep learning-based tools [2, 3] and commercial cloud APIs [1, 4] have been developed to conduct robust Optical Character Recognition(OCR) and accurate table extraction, enabling the conversion of scanned documents and images into structured, machine-readable text.(此外，多个基于深度学习的工具[2, 3]和商业云 API[1, 4]也已开发出来，用于进行强大的光学字符识别(OCR)和准确的表格提取，从而将扫描文档和图像转换为结构化的、机器可读的文本。) Given that domain-specific files often encompass sophisticated tables, charts, and figures, text-based conversion may lead to information loss and disrupt the inherent logical structure.(鉴于领域特定的文件通常包含复杂的表格、图表和图形，仅基于文本的转换可能会导致信息丢失，并破坏其固有的逻辑结构。) Therefore, we propose conducting layout analysis for these files and preserving multi-modal elements such as charts and figures. The layout information can aid the chunking operation, maintaining the completeness of chunked text, while figures and charts can be described by Vision-Language Models(VLMs) to assist in knowledge retrieval.(因此，我们建议对这些文件进行布局分析并保留多模态元素，如图表和图形。布局信息可以辅助分块操作，保持分块文本的完整性，而图表和图形则可以通过视觉-语言模型(VLMs)进行描述，以辅助知识检索。) This approach ensures that the integrity and richness of the original documents are retained, enhancing the efficacy of RAG systems

5.1.2 Knowledge Organization

The proposed knowledge base is structured as a multi-layer heterogeneous graph, representing different levels of information granularity and abstraction(所提出的知识库被结构化为一个多层异构图，表示不同层次的信息粒度和抽象程度). The graph captures relationships between various components of the data(e.g., documents, sections, chunks, figures, and tables) and organizes them into nodes and edges, reflecting their interconnections and dependencies.(该图捕捉数据各个组成部分(例如，文档、章节、块、图表和表格)之间的关系，并将它们组织成节点和边，反映它们的相互连接和依赖关系。) As depicted in Figure 3, this multi-layer structure, encompassing the information resource layer, corpus layer, and distilled knowledge layer, enables both semantic understanding and rationale-based retrieval for downstream tasks.(包括信息资源层、语料层和蒸馏知识层，不仅能够实现语义理解，还能够支持基于推理的检索，以满足下游任务的需求。)

**_Information Resource Layer_**: This layer captures the diverse information sources, treating them as source nodes with edges that denote referential relationships among them(该层捕获多种信息来源，将它们视为源节点，并用边表示这些节点之间的引用关系). This structure aids in cross-referencing and contextualizing the knowledge, establishing a foundation for reasoning that depends on multiple sources.(这种结构有助于交叉引用和对知识进行上下文化处理，为依赖于多个来源的推理建立基础)

**_Corpus Layer_**: This layer organizes the parsed information into sections and chunks while preserving the document’s original hierarchical structure(这一层将解析后的信息组织成章节和块，同时保留文档的原始层次结构). Multi-modal content such as tables and figures is summarized by LLMs and integrated as chunk nodes, ensuring that multi-modal knowledge is available for retrieval(多模态内容(如表格和图形)由大语言模型(LLMs)进行总结，并作为块节点集成，以确保多模态知识可以被检索). This layer enables knowledge extraction with varying levels of granularity, allowing for accurate semantic chunking and retrieval across diverse content types.(这一层允许以不同粒度进行知识提取，从而实现精确的语义分块和检索，适用于多样化的内容类型)

**_Distilled Knowledge Layer_**: The corpus is further distilled into structured forms of knowledge(e.g., knowledge graphs, atomic knowledge, and tabular knowledge).(该语料库进一步被提炼为结构化的知识形式(例如，知识图谱、原子知识和表格知识) This process, driven by techniques like Named Entity Recognition(NER) [20] and relationship extraction [41], ensures that the distilled knowledge captures key logical relationships and entities, supporting advanced reasoning processes.(这一过程通过技术如命名实体识别(NER)[20] 和关系抽取 [41] 驱动，确保提炼出的知识能够捕捉关键的逻辑关系和实体，支持更高级的推理过程) By organizing this structured knowledge in a distilled layer, we enhance the system’s ability to reason and synthesize based on deeper domain-specific knowledge(通过将这些结构化的知识组织在一个提炼层中，我们增强了系统基于更深层次领域特定知识进行推理和综合的能力). The knowledge distillation process is depicted in Figure 4(论文第 10 页). Below are the detailed distillation processes for typical knowledge forms.

Figure 5 Illustration of enhanced chunking with recurrent text splitting(循环文本分割增强分块) 注解:

-   **_Knowledge graph_**: Entities and their relationships are extracted from the corpus text using LLMs, generating knowledge units in form of “node-edge-node” structure, where nodes represent entities and edges represent the relationships between them.(通过大型语言模型(LLMs)从语料库文本中提取实体及其关系，生成以“节点-边-节点”结构形式的知识单元，其中节点代表实体，边代表实体之间的关系) All knowledge units are then integrated to construct a graph.(所有知识单元随后被整合以构建图谱)
-   **_Atomic knowledge_**: The corpus text is partitioned into a set of atomic statements, which are considered as knowledge units.(将语料库文本划分为一组原子陈述，这些陈述被视为知识单元) By combining these atomic statements with the relationships between corpus nodes, atomic knowledge is generated.(通过将这些原子陈述与语料库节点之间的关系结合，生成原子知识)
-   **_Tabular knowledge_**: Entity pairs with specified types and relationships are extracted from corpus text.(从语料库文本中提取具有指定类型和关系的实体对，这些实体对被视为知识单元) These entity pairs are treated as knowledge units and can be combined to construct tabular knowledge.(可以将这些实体对组合起来构建表格知识)

#### 5.2 Level-1: Factual Question focused RAG System

Building upon the L0 system, the L1 system introduces knowledge retrieval and knowledge organization to realize its retrieval and generation capabilities(L1 系统在 L0 系统的基础上引入了知识检索和知识组织，以实现其检索和生成能力). The primary challenges at this level are semantic alignment and chunking(在这一层级，主要面临的挑战包括语义对齐和信息块划分). The abundance of professional terminology and aliases can affect the accuracy of chunk retrieval, and unreasonable chunking can disrupt semantic coherence and introduce noise interference(专业术语和别名的多样化可能会影响块检索的准确性，而不合理的信息块划分又可能破坏语义连贯性并引入噪声干扰). To mitigate these issues, the L1 system incorporates more sophisticated query analysis techniques and basic knowledge extraction modules(为了解决这些问题，L1 系统采用了更为复杂的查询分析技术和基础知识提取模块). The architecture is expanded to include components that facilitate task decomposition, coordination, and initial stages of knowledge organization(KO), ensuring that the system can manage more complex queries effectively.(系统架构进一步扩展，增加了支持任务分解、协调以及知识组织初步阶段的组件。这确保了系统能够有效管理更复杂的查询，从而提升整体的知识检索和组织能力. 通过优化查询处理流程和增强知识提取模块，L1 系统能够更好地理解用户的意图，提高响应的准确性和相关性)

5.2.1 Enhanced chunking

Chunking involves breaking down a large corpus of text into smaller, more manageable segments(chunking 涉及将大量文本语料库分解为更小、更易于管理的段落). The primary chunking strategies commonly utilized in RAG systems include fixed-size chunking, semantic chunking, and hybrid chunking(常用的 chunking 策略包括固定大小的 chunking、语义 chunking 以及混合 chunking). Chunking is essential for improving both the efficiency and accuracy of the retrieval process, which consequently affects the overall performance of RAG models in multiple dimensions. In our system, each chunk serves dual purposes(每个 chunk 都具有双重作用):(i) it becomes a unit of information that is vectorized and stored in a database for retrieval(它成为信息单元，被向量化并存储在数据库中以进行检索), and(ii) it acts as a source for further knowledge extraction and information summarization. Improper chunking not only fails to ensures that text vectors encapsulate the necessary semantic information, but also hinders knowledge extraction based on complete context(它作为进一步知识提取和信息总结的来源。不恰当的 chunking 不仅无法确保文本向量包含必要的语义信息，还会阻碍基于完整上下文的知识提取). For instance, in the context of laws and regulations, a fixed-size chunking approach are prone to destroying text semantics and omitting key conditions, thereby affecting the quality and accuracy of subsequent knowledge extraction.(例如，在法律法规的背景下，采用固定大小的 chunking 方法可能破坏文本语义并遗漏关键条件，从而影响后续知识提取的质量和准确性)

We propose a text split algorithm to enhance existing chunking methods by breaking down large text documents into smaller, manageable chunks while preserving context and enabling effective summary generation for each chunk(一种文本拆分算法，以增强现有的分块方法，通过将大型文本文档拆分为更小、可管理的块，同时保持上下文并能够为每个块生成有效的摘要). The chunking process is illustrated in Figure 5. Given a source text, the algorithm iteratively splits the text into chunks(给定源文本，该算法迭代地将文本拆分为块). During the first iteration, it generates a forward summary of the initial chunk, providing context for generating summaries of subsequent chunks and maintaining a coherent narrative across splits(在第一次迭代中，它生成初始块的前向摘要，为后续块的摘要生成提供上下文，并保持切分过程中的叙述一致性). Each chunk is summarized using a predefined prompt template that incorporates both the forward summary and the current chunk(每个块都使用预定义的提示模板进行摘要，该模板结合了前向摘要和当前块). This summary is then stored alongside the chunk(该摘要与块一起存储). The algorithm adjusts the text by removing the processed chunk and updating the forward summary with the summary of the current chunk, preparing for the next iteration(算法通过移除已处理的块并用当前块的摘要更新前向摘要，准备进行下一次迭代). This process continues until the entire text is split and summarized. Additionally, the algorithm can dynamically adjust chunk sizes based on the content and structure of the text(此过程一直持续到整个文本被拆分和摘要生成。此外，该算法还可以根据文本的内容和结构动态调整块的大小).

5.2.2 Auto-tagging

In domain-specific RAG scenarios, the corpus is typically characterized by formal, professional, and rigorously expressed content, whereas the questions posed are often articulated in plain, easily understandable colloquial language(在特定领域的检索增强生成(RAG)场景中，语料库通常包含正式、专业且表达严谨的内容，而提出的问题往往是用简单、易于理解的口语化语言表述的). For instance, in medical question-answering(medQA) tasks [33], symptoms of diseases described in the questions are generally phrased in simple, conversational terms. In contrast, the corresponding medical knowledge within the corpus is often expressed using specialized professional terminology. This discrepancy introduces a domain gap that adversely affects the accuracy of chunk retrieval, especially given the limitations of the embedding models employed for this purpose.

To address the domain gap issue, we propose an auto-tagging module designed to minimize the disparity between the source documents and the queries(为了解决领域差距问题，我们提出了一种自动标注模块, 旨在减少源文档和查询之间的差异). This module preprocesses the corpus to extract a comprehensive collection of domain-specific tags or to establish tag mapping rules(该模块对语料库进行预处理，以提取全面的领域特定标签或建立标签映射规则). Prior to the retrieval process, tags are extracted from the query and then mapped to corpus domain using the preprocessed tag collection or tag pair collection(在检索过程之前，从查询中提取标签，并使用预处理的标签集合或标签对集合将这些标签映射到语料库领域). This tag-based domain adaptation can be employed for query rewriting or keyword retrieval within sequential information retrieval frameworks, thereby enhancing both the recall and precision of the retrieval process.(这种基于标签的领域适应可以用于查询重写或关键词检索，在顺序信息检索框架中，从而提高检索过程的召回率和精确度)

Specifically, we leverage the capabilities of the LLMs to identify key factors within the corpus chunks, summarize these factors, and generalize them into category names(利用大语言模型的能力来识别语料块中的关键因素，对这些因素进行总结，并将其泛化为类别名称), which we refer to as "tag classes."(标签类) We generate semantic tag extraction prompts based on these tag classes to facilitate accurate tag extraction(基于这些标签类，我们生成语义标签提取提示，以促进准确的标签提取). In scenarios where only the corpus is available, LLMs are employed with meticulously designed prompts to extract semantic tags from the corpus, thereby forming a comprehensive corpus tag collection(当只有语料可用时，通过精心设计的提示，LLMs 用于从语料中提取语义标签，从而形成一个全面的语料标签集合). When practical QA samples are available, semantic tag extraction is performed on both the queries and the corresponding retrieved answer chunks(如果有实际的问答样本可用，我们会对查询和检索到的答案块同时进行语义标签提取). Using the tag sets extracted from the chunks and queries, LLMs are utilized to map cross-domain semantic tags and generate a tag pair collection(使用从块和查询中提取的标签集，LLMs 用于映射跨领域的语义标签，并生成标签对集合). After establishing both the corpus tag collection and the tag pair collection, tags can be extracted from the query, and the corresponding mapped tags can be identified within the collections(建立了语料标签集合和标签对集合之后，可以从查询中提取标签，并在集合中识别出相应的映射标签). These mapped tags are then used to enhance subsequent information retrieval processes, improving both recall and precision. This workflow leverages the advanced understanding and contextual capabilities of LLMs for domain adaptation(这些映射标签随后用于增强后续的信息检索过程，提高检索的召回率和精确度。这一工作流程利用了 LLMs 在领域适应方面的高级理解和语义能力)

5.2.3 Multi-Granularity Retrieval

The L1 system is designed to enable multi-layer, multi-granularity retrieval across a heterogeneous knowledge graph, which was constructed in the L0 system(L1 系统旨在通过多层、多粒度的检索，在 L0 系统构建的异构知识图谱中探索和获取相关信息). Each layer of the graph(e.g., information source layer, corpus layer, distilled knowledge layer) represents knowledge at different levels of abstraction and granularity, allowing the system to explore and retrieve relevant information at various scales(知识图谱中的每一层(例如信息源层、语料层、提炼知识层)代表了不同抽象层次和粒度的知识，使系统能够在各种尺度上检索相关的知识). For example, queries can be mapped to entire documents(information source layer) or specific chunks of text(corpus layer), ensuring that knowledge can be retrieved at the appropriate level for a given task(例如，查询可以映射到整个文档(信息源层)或特定的文本片段(语料层)，以确保在给定任务中能够以适当的粒度检索到知识). To support this, similarity scores between queries and graph nodes are computed to measure the alignment between the query and the retrieved knowledge. These scores are then propagated through the layers of the graph, allowing the system to aggregate information from multiple levels(为此，系统会计算查询与图谱节点之间的相似度得分，以衡量查询与检索到的知识之间的对齐程度. 这些得分会在图谱的不同层之间传播，使系统能够从多个层次上聚合信息). This multi-layer propagation ensures that retrieval can be fine-tuned based on both the broader context(e.g., entire documents) and finer details(e.g., specific chunks or distilled knowledge)(这种多层传播使得检索可以基于更广泛的上下文(例如整个文档)和更细的细节(例如具体的文本片段或提炼的知识)进行微调). The final similarity score is generated through a combination of aggregation and propagation, ensuring that knowledge extraction and utilization are optimized for both precision and efficiency in factual question answering(最终的相似度得分是通过聚合和传播的结果综合得到的，确保知识的提取和利用在事实性问题回答中既精确又高效). The retrieval process can be iterative, refining the results based on sub-queries generated through task decomposition, further enhancing the system’s ability to generate accurate and contextually relevant answers.(检索过程可以是迭代的，通过任务分解生成的子查询来进一步细化结果，从而增强系统生成准确且上下文相关的答案的能力)

The overview of multi-layer, multi-granularity retrieval is depicted in Figure 8.(论文第 15 页, 也就是 Figure 3 的具体点) For each layer of the graph, both queries Q and graph node are transformed into high-dimensional vector embeddings for similarity evaluation. We denote the similarity evaluation operation as g(∗). Here, I, C, and D indicate the node sets in the information source layer, corpus layer, and distilled knowledge layer, respectively. The propagation and aggregation operations are represented by the function f(∗). The final chunk similarity score S is obtained by aggregating the scores from other layers and nodes.(The overview of multi-layer, multi-granularity retrieval is depicted in Figure 8. For each layer of the graph, both queries Q and graph node are transformed into high-dimensional vector embeddings for similarity evaluation. We denote the similarity evaluation operation as g(∗). Here, I, C, and D indicate the node sets in the information source layer, corpus layer, and distilled knowledge layer, respectively. The propagation and aggregation operations are represented by the function f(∗). The final chunk similarity score S is obtained by aggregating the scores from other layers and nodes.)

这里具体算法就是: `S = f(g(I, Q), g(C, Q), g(D, Q))`, I(information layer), C(corpus layer), D(distilled knowledge layer), Q(query), f(propagation), g(similarity evaluation)

#### 5.3 Level-2: Linkable and Reasoning Question focused RAG System

The core functionality of the L2 system lies in its ability to efficiently retrieve multiple sources of relevant information and perform complex reasoning based on it. To facilitate this, the L2 system integrates an advanced knowledge extraction module that comprehensively identifies and extracts pertinent information. Furthermore, a task decomposition and coordination module is implemented to break down intricate tasks into smaller, manageable sub-tasks, thereby enhancing the system’s efficiency in handling them. The proposed framework of L2 RAG system is illustrated in Figure 9.(L2 系统的核心功能在于能够高效地检索多个相关的信息来源，并基于这些信息进行复杂的推理。为了实现这一点，L2 系统集成了一个先进的知识提取模块，该模块能够全面识别和提取相关信息。此外，还实现了任务分解与协调模块，将复杂的任务分解为更小、更易于管理的子任务，从而提高系统处理这些任务的效率。L2 RAG 系统的提议框架如图 9 所示。)

Figure 9 就是 text -> knowledge extraction(atomic knowledge generation) -> knowledge retrival(由 Q 经过 task decomposition & coodination 得到) -> knowledge organization(knowledge reranking and aggregation sub-module in knowledge orgination model) -> knowledge centric reasoning(multihop reasoning, comparative reasoning, summarizing sub modules iin knowledge-centric reasoning module) -> A

Chunked text contains multifaceted information, increasing the complexity of retrieval. Recent studies have focused on extracting triple knowledge units from chunked text and constructing knowledge graphs to facilitate efficient information retrieval [21, 43]. However, the construction of knowledge graphs is costly, and the inherent knowledge may not always be fully explored. To better present the knowledge embedded the documents, we propose atomizing the original documents in Knowledge Extraction phase, a process we refer as Knowledge Atomizing. Besides, industrial tasks often necessitate multiple pieces of knowledge, implicitly requiring the capability to decompose the original question into several sequential or parallel atomic questions. We refer to this operation as Task Decomposition. By combining the extracted atomic knowledge with the original chunks, we construct an atomic hierarchical knowledge base. Each time we decompose a task, the hierarchical knowledge base provides insights into the available knowledge, enabling knowledge-aware task decomposition.(分块文本包含多方面的信息，从而增加了检索的复杂性。近期的研究集中于从分块文本中提取三元知识单元，并构建知识图谱以促进高效的信息检索。然而，构建知识图谱的成本较高，且潜在知识可能并未得到充分挖掘。为更好地呈现文档中嵌入的知识，我们提出在知识提取阶段对原始文档进行原子化的过程，称之为知识原子化。此外，工业任务通常需要多种知识，隐含地要求将原始问题分解成几个顺序或并行的原子问题。我们将这一操作称为任务分解。通过将提取的原子知识与原始块结合，我们构建了一个原子层次知识库。每次我们分解一个任务时，层次知识库提供对可用知识的洞察，从而实现知识驱动的任务分解。)

5.3.1 Knowledge Atomizing

We believe that a single document chunk often encompasses multiple pieces of knowledge(我们认为单个文档片段通常包含多个知识片段). Typically, the information necessary to address a specific task represents only a subset of the entire knowledge(通常，解决特定任务所需的信息只是整个知识的一部分). Therefore, consolidating these pieces within a single chunk, as traditionally done in information retrieval, may not facilitate the efficient retrieval of the precise information required(因此，像传统信息检索方法那样将这些片段整合在单一文档片段中，可能无法有效地检索到所需的精确信息). To align the granularity of knowledge with the queries generated during task solving, we propose a method called knowledge atomizing(为了使知识的颗粒度与任务解决过程中生成的查询相匹配，我们提出了一种称为知识原子化的方法). This approach leverage the context understanding and content generation capabilities of LLMs to automatically tag atomic knowledge pieces within each document chunk(该方法利用大语言模型(LLMs)的上下文理解和内容生成能力，自动在每个文档片段中标记原子知识片段). Note that, these chunks could be segments of an original reference document, description chunks generated for tables, images, videos, or summary chunks of entire sections, chapters or even documents.(需要注意的是，这些片段可以是原始参考文档中的段落，为表格、图像、视频生成的描述片段，或者整个章节、部分甚至文档的摘要片段)

The presentation of atomic knowledge can be various. Instead of utilizing declarative sentences or subject-relationship-object tuples, we propose using questions as knowledge indexes to further bridge the gap between stored knowledge and query(原子知识的表示可以多种多样。与传统的使用声明性句子或主谓宾三元组不同，我们提出使用问题作为知识索引来进一步缩小存储的知识与查询之间的差距). Unlike the semantic tagging process, in knowledge atomizing process, we input the document chunk to LLM as context, ask it to generate relevant questions that can be answered by the given chunk as many as possible(与语义标注过程不同，在知识原子化过程中，我们将文档片段输入给 LLM 作为上下文，要求它尽可能生成由该片段可以回答的相关问题). These generated atomic questions are saved as the atomic question tags together with the given chunk(这些生成的原子问题被保存为原子问题标签，与给定的文档片段一起存储). An example of knowledge atomizing is demonstrated in Figure 10(c), where the atomic questions encapsulate various aspects of the knowledge contained within the chunk(图 10(c)展示了知识原子化的示例，其中原子问题封装了片段中包含的各种知识方面). A hierarchical knowledge base can accommodate queries of varying granularity(分层的知识库可以容纳不同粒度的查询). Figure 11 illustrates the retrieval process from an atomic knowledge base comprising chunks and atomic questions. Queries can directly retrieve reference chunks as usual.(图 11 说明了从由文档片段和原子问题组成的原子知识库中检索的过程。查询可以直接像往常一样检索到参考片段) Additionally, since each chunk is tagged with multiple atomic questions, an atomic query can be used to locate relevant atomic questions, which then leads to the associated reference chunks.(此外，由于每个片段都标注了多个原子问题，因此可以使用原子查询来定位相关的原子问题，进而找到相关的参考片段。)

5.3.2 Knowledge-Aware Task Decomposition

For a specific task, multiple decomposition strategies might be applicable(对于特定任务，可能适用多种分解策略). Consider Q2 in Figure 1 as an example. The two-step analytical reasoning process depicted may be effective if an interchangeable biosimilar products list is available. However, if only a general list of biosimilar products exists, with attributes dispersed throughout multiple documents, a different decomposition strategy may be necessary:(1) Retrieve the biosimilar product list;(2) Determine whether each product is interchangeable;(3) Count the total number of interchangeable products.(如果可以获得可互换的生物相似药物列表，那么所示的两步分析推理过程可能是有效的。然而，如果仅存在一个生物相似药物的常规列表，并且属性分散在多个文档中，那么可能需要一种不同的分解策略：(1)检索生物相似药物列表；(2)确定每种药物是否可互换；(3)计算可互换药物的总数。) The critical factor in selecting the most effective decomposition approach lies in understanding the contents of the specialized knowledge base(在选择最有效的分解方法时，关键在于理解专业知识库的内容). Motivated by this, we design the Knowledge-Aware Task Decomposition workflow, which is illustrated in Figure 10(a). The complete algorithm for task solving using Knowledge-Aware Task Decomposition is presented in Algorithm 1.(基于此，我们设计了知识驱动的任务分解工作流程，如图 10(a)所示。使用知识驱动的任务分解进行任务求解的完整算法在算法 1 中呈现)

The reference context Ct is initialized as an empty set, and the original question is denoted by q. As illustrated in the for-loop starting at line 2 of the algorithm, in the t-th iteration, we use an LLM, denoted by LLM, to generate query proposals potentially useful for task completion, denoted as ˆqt i . In this step, the chosen reference chunks Ct are provided as context to avoid generating proposals linked to already known knowledge. These proposals are then utilized as atomic queries to determine if relevant knowledge exists within the knowledge base. For each atomic question proposal, we retrieve its relevant atomic question candidates along with their source chunks {(qt ij , ct ij)} from the knowledge base, denoted as KB. We can use any score metric sim to retrieve atomic questions. In our experiment, we use cosine similarity of their corresponding embeddings to retrieve all top-K atomic questions, provided their similarity to a proposed atomic question is greater than or equal to a given threshold δ. With the original question q, the accumulated context Ct, and the list of retrieved atomic questions qt ij , LLM selects the most useful atomic question qt from qt ij and retrieves the relevant chunk ct. This retrieved chunk is aggregated into the reference context Ct for the next round of decomposition. Knowledge-aware decomposition can iterate up to N times, where N is a hyperparameter set to control computational cost. The iteration process can be terminated early if there are no high-quality question proposals, no highly relevant atomic candidates retrieved, no suitable atomic knowledge selections, or if the LLM determines that the acquired knowledge is sufficient to complete the task. Finally, the accumulated context Ct is utilized to generate answer ˆa for the given question q in line 14.

(参考上下文 Ct 初始化为空集合，原始问题用 q 表示。如算法中第 2 行开始的 for 循环所示，在第 t 次迭代中，我们使用一个 LLM(大型语言模型)，记作 LLM，生成可能对任务完成有用的查询提案，记作 ˆqt i。在此步骤中，选定的参考块 Ct 作为上下文提供，以避免生成与已知知识相关的提案。这些提案接着作为原子查询被用来确定知识库中是否存在相关知识。

对于每个原子问题提案，我们从知识库 KB 中检索其相关的原子问题候选及其源块 {(qt ij , ct ij)}。我们可以使用任何评分指标 sim 来检索原子问题。在我们的实验中，我们使用对应嵌入的余弦相似性来检索所有前 K 个原子问题，前提是它们与提议的原子问题的相似度大于或等于给定的阈值 δ。

利用原始问题 q、累积的上下文 Ct 和检索到的原子问题列表 qt ij，LLM 从 qt ij 中选择最有用的原子问题 qt 并检索相关块 ct。该检索到的块将被聚合到下一个分解轮次的参考上下文 Ct 中。知识感知分解最多可以迭代 N 次，其中 N 是控制计算成本的超参数。如果没有高质量的问题提案、没有检索到高度相关的原子候选、没有适合的原子知识选择，或者 LLM 判断获得的知识足够完成任务，则可以提前终止迭代过程。最后，在第 14 行中，累积上下文 Ct 被用来生成给定问题 q 的答案 ˆa。)

5.3.3 Knowledge-Aware Task Decomposer Training

It is worth mentioning that knowledge-aware decomposition can be a learnable component. This trained proposer can then directly suggest atomic queries qt during inference, which means lines 3 to 5 in Algorithm 1 can be replaced by a single call to this learned proposer, thereby reducing both inference time and computational cost. In order to train the knowledge-aware decomposer, we collect data about the rationale behind each step by sampling context and creating diverse interaction trajectories. With this data collected, we train a decomposer that can incorporate domain-specific rationale into the task decomposition and result-seeking process.(值得一提的是，知识感知分解可以作为一个可学习的组件。经过训练的提议器可以在推理过程中直接建议原子查询 qt，这意味着算法 1 中的第 3 到第 5 行可以被对这个学习提议器的单次调用所替代，从而减少推理时间和计算成本。为了训练知识感知分解器，我们通过采样上下文并创建多样化的交互轨迹来收集每一步背后的推理数据。利用这些收集到的数据，我们训练一个能够将特定领域的推理纳入任务分解和结果寻求过程的分解器。)

The data collection process, as depicted in Figure 12 and Algo. 2, implements a sophisticated dual-dictionary system for managing and tracking information. Our system utilizes two primary data structures: dictionary S for maintaining comprehensive score records, and dictionary V for systematically tracking visit frequencies of candidate chunks. During the initialization phase, we establish baseline values by setting all scores to zero and initializing visit counters to one, creating a foundation for dynamic updates throughout the subsequent processing stages.(数据收集过程，如图 12 和算法 2 所示，采用了一种复杂的双字典系统来管理和跟踪信息。我们的系统利用了两个主要的数据结构：字典 S 用于维护全面的得分记录，字典 V 用于系统地跟踪候选块的访问频率。在初始化阶段，我们通过将所有得分设置为零并将访问计数器初始化为一来建立基线值，为后续处理阶段的动态更新奠定基础。)

In each iteration of our decomposition process, the system executes a detailed retrieval operation targeting the top-K′ chunks demonstrating maximum relevance to the current atomic question. These chunks must satisfy our similarity threshold criterion(specifically, similarity exceeding δ′, where δ′ < δ), with K′ intentionally configured to be larger than K to ensure comprehensive coverage. Following this initial retrieval, we carefully select and integrate the data chunks corresponding to the top-K most relevant atomic retrieved pairs into the context. For those retrieved chunks that do not make it into the top-K selection, we systematically incorporate them into S and methodically update their scores based on precisely calculated relevance metrics.(在我们分解过程的每次迭代中，系统执行详细的检索操作，目标是找到与当前原子问题最相关的前 K′个块。这些块必须满足我们的相似性阈值标准(即，相似性超过 δ′，其中 δ′ < δ)，并且 K′有意设置得比 K 大，以确保全面覆盖。完成初始检索后，我们仔细选择并整合与前 K 个最相关的原子检索对对应的块数据到上下文中。对于未能进入前 K 选择的检索块，我们系统地将它们纳入字典 S，并根据精确计算的相关性指标方法地更新它们的得分。)

To ensure comprehensive exploration of the solution space, we have implemented an advanced sampling mechanism that intelligently selects additional chunks from S when available, incorporating them seamlessly into the reference context. Our implementation leverages the Upper Confidence Bound [9](UCB) algorithm for context sampling, establishing a balanced approach between exploitation and exploration. The exploitation component manifests through the retriever-selected chunks, focusing on options with currently highest estimated rewards to optimize immediate performance gains. Conversely, the exploration aspect is fulfilled through context sampling from S, enabling the systematic investigation of less-certain options to accumulate valuable data and potentially uncover superior long-term alternatives.(为了确保对解决方案空间的全面探索，我们实现了一种高级采样机制，该机制能够智能地从字典 S 中选择额外的片段(当这些片段可用时)，并将它们无缝地整合到参考上下文中。我们的实现利用了上置信界(UCB)算法来进行上下文采样，从而在利用和探索之间建立了一个平衡的方法。利用部分通过检索器选择的片段体现，这些片段关注当前估计奖励最高的选项，以优化即时性能提升。另一方面，探索部分通过从字典 S 中采样上下文实现，使我们能够系统地调查不太确定的选项，积累有价值的数据，并可能发现更优的长期替代方案。)

This meticulously crafted strategy serves a dual purpose: it not only facilitates the generation of diverse and comprehensive atomic query proposals but also enables systematic exploration of multiple potential reasoning pathways. Through this sophisticated approach, we progressively work toward deriving optimal final answers while maintaining a balance between immediate performance optimization and long-term discovery of potentially superior solutions.(这个精心设计的策略具有双重目的：它不仅有助于生成多样且全面的原子查询提案，还能系统地探索多种可能的推理路径。通过这一复杂的方法，我们逐步朝着得出最优最终答案的目标努力，同时保持即时性能优化和长期发现潜在更优解决方案之间的平衡。)

We record atomic proposals(AP), interactive trajectories, and answer scores to support decomposer training. For each specialized domain, interactive trajectories featuring distinct reasoning paths are gathered for decomposer training. This allows us to use the answer score as a supervised signal to train the decomposer. The decomposer training process is depicted in Figure 13. By incorporating preferences in the form of answer scores, the decomposer training can capture domain-specific decomposition rules, thereby adapting the decomposer to meet domain requirements.(我们记录原子提议(AP)、交互轨迹和答案得分以支持分解器的训练。对于每个专门领域，我们收集具有不同推理路径的交互轨迹用于分解器的训练。这使我们能够利用答案得分作为监督信号来训练分解器。分解器的训练过程如图 13 所示。通过将偏好以答案得分的形式纳入，分解器的训练可以捕捉特定领域的分解规则，从而使其适应领域需求。)

Looking ahead, there are several promising avenues for implementing and enhancing our proposed decomposer. We could leverage well-established algorithms such as supervised fine-tuning(SFT) and direct policy optimization(DPO) [46] to train an effective decomposer based on existing LLMs. The practical implementation and performance evaluation of this comprehensive procedure, including detailed empirical analysis and comparative studies, will be addressed in future research work to thoroughly demonstrate its effectiveness and potential applications.(展望未来，我们提出了几种有前景的途径来实现和增强我们的分解器。我们可以利用一些成熟的算法，如监督微调(SFT)和直接策略优化(DPO)[46]，基于现有的大语言模型(LLMs)来训练一个有效的分解器。这个全面过程的实际实现和性能评估，包括详细的实证分析和比较研究，将在未来的研究工作中进行，以彻底验证其有效性和潜在的应用。)

#### 5.4 Level-3: Predictive Question focused RAG System

In the L3 system, there is an increased emphasis on knowledge-based prediction capability, which necessitates effective knowledge collection, organization, and the construction of forecasting rationale(在 L3 系统中，增加了对基于知识的预测能力的强调，这需要有效的知识收集、组织和构建预测推理). To address this, we leverage the task decomposition and coordination module to build forecasting rationale based on the organized knowledge, which is collected and organized from the retrieved knowledge(为了解决这个问题，我们利用任务分解和协调模块，基于组织的知识构建预测推理，这些知识是从检索中收集并组织的). The framework of L3 system is illustrated in Figure 14. To ensure the retrieved knowledge is well-prepared for advanced analysis and forecasting, the knowledge organization module is enhanced with specialized submodules dedicated to the structuring and organization of knowledge(L3 系统的框架如图 14 所示。为了确保检索的知识能够为高级分析和预测做好准备，知识组织模块通过专门的子模块进行增强，这些子模块专注于知识的结构化和组织). These submodules streamline the process of transforming raw retrieved knowledge into a structured, coherent format, optimizing it for subsequent reasoning and predictive tasks(这些子模块简化了将原始检索知识转化为结构化、连贯格式的过程，优化其用于后续的推理和预测任务). For example, in the FDA scenario referred in Figure 1, data from multiple sources—such as medicine labels, clinical trials, and application forms—are integrated into the multi-layer knowledge base(例如，在图 1 中提到的 FDA 场景，来自多个来源的数据(如药品标签、临床试验和申请表)被整合到多层知识库中). The knowledge structuring submodule follows the instruction from task decomposition module to collect and organize the relevant knowledge(e.g. medicine names with their approval dates) retrieved from knowledge base. The knowledge induction submodule further categorizes this structured knowledge, such as by approval date, to facilitate further statistics analysis and prediction.(知识结构化子模块按照任务分解模块的指示，从知识库中收集和组织相关的知识(如药品名称及其批准日期)。知识归纳子模块进一步对这种结构化的知识进行分类，例如按批准日期分类，以方便后续的统计分析和预测。)

Given the limitations of LLMs in applying specialized reasoning logic, their effectiveness in predictive tasks can be restricted(考虑到大型语言模型在应用特定领域推理逻辑方面的局限性，其在预测任务中的有效性可能会受到限制). To overcome this, the knowledge-centric reasoning module is enhanced with a forecasting submodule, enabling the system to infer outcomes based on the input queries and the organized knowledge(e.g. total numbers of medicines approved per year)(为了解决这一问题，知识中心推理模块被增强了一个预测子模块，使系统能够根据输入查询和组织好的知识(例如每年批准的药物总数)来推断结果). This forecasting submodule allows the system to not only generate answers based on historical knowledge, but also make projections, providing a more robust and dynamic response to complex queries(知识中心推理模块被增强了一个预测子模块使系统不仅能够基于历史知识生成答案，还能够进行预测，从而对复杂的查询提供更强大和动态的响应). By integrating advanced knowledge structuring and prediction capabilities, the L3 system can manage and utilize a more complex and dynamic knowledge base effectively.(通过集成先进的知识结构化和预测能力，L3 系统能够有效地管理和利用更复杂、动态的知识库)

#### 5.5 Level-4: Creative Question focused RAG System

The L4 system implementation is characterized by the integration of multi-agent systems to facilitate multi-perspective thinking. Addressing creative questions requires creative thinking that draws on factual information and an understanding of underlying principles and rules(L4 系统的实现特点是集成了多智能体系统以促进多角度思考. 解决创造性问题需要借助于事实信息和对基本原理及规则的理解来进行创造性思考). At this advanced level, the primary challenges include extracting coherent logical rationales from a retrieved knowledge, navigating complex reasoning processes with numerous influencing factors, and assessing the quality of responses to creative, open-ended questions(在这个高级层次中，主要挑战包括从检索的知识中提取连贯的逻辑推理，应对具有众多影响因素的复杂推理过程，以及评估对创造性开放问题响应的质量). To tackle these challenges, the system coordinates multiple agents, each contributing unique insights and reasoning strategies, as illustrated in Figure 15(为了解决这些挑战，系统协调多个智能体，每个智能体提供独特的见解和推理策略，如图 15 所示。). These agents operate in parallel, synthesizing various thought processes to generate comprehensive and coherent solutions(这些智能体并行工作，综合各种思考过程以生成全面且连贯的解决方案). This multi-agent architecture supports the parallel processing and integration of diverse reasoning paths, ensuring effective management and response to intricate queries(多智能体架构支持多种推理路径的并行处理和集成，确保有效管理和应对复杂查询. By simulating diverse viewpoints, the L4 system enhances its ability to tackle creative questions, generating innovative ideas rather than predefined solutions(通过模拟不同的观点，L4 系统增强了处理创造性问题的能力，生成创新的想法而不是预定义的解决方案). The coordinated outputs from multiple agents not only enrich the reasoning process but also provide users with comprehensive perspectives, fostering creative thinking and inspiring novel solutions to complex problems.(多个智能体的协调输出不仅丰富了推理过程，还为用户提供全面的视角，促进创造性思考并激发解决复杂问题的新颖方案)

## summarize

5.2.1 怎么 enhanced chunking 没具体说? 看了下网上也是说就用 gpt 的 embedding api 就行...

但如果是复杂文本处理, 比如带公式, 带插图等分块?

1. 基于 NLP 的篇章分析(dissources parsing) 工具: 提取段落之间的主要关系, 把所有包含主从关系的段落合成一段
2. 基于 BERT 的 NSP(next sentence prediction) 训练任务: 设置相似度阈值 t, 从前往后依次判断相邻两个段落的相似度分数是否大于 t, 大于则合并, 否则断开

核心思想是: 分级 RAG + agent + LLM:

1. L0: Knowledge Base Construction 生成三层架构的 heterogeneous graph
    - file parsing
        - 一种是通过已有技术, 传统的转结构化文本(OCR 准确率幅度大, API 也有影响因素)
        - 其次对于特定场景(复杂的表格、图表和图形), 为了减少前者的差异性, 保留 multi-modal 作为辅助的 knowledge retrieval, 这样保证了其固有的逻辑结构
    - Knowledge Organization(里面应该贯穿包含了 knowledge extraction + knowledge storage)
        - Information Resource Layer
        - Corpus Layer
        - Distilled Knowledge Layer
2. L1: Factual Question focused RAG System 基础算法 chunking, auto-tagging, Multi-Granularity Retrieval
    - Enhanced chunking
        - Knowledge graph
        - Atomic knowledge
        - Tabular knowledge
    - Auto-tagging
    - Multi-Granularity Retrieval
      ("PA" for file parsing, "KE" for knowledge extraction, "RT" for knowledge retrieval, "KO" for knowledge organization, and "KR" for knowledge-centric reasoning.)
3. L2: Linkable and Reasoning Question focused RAG System
    - Knowledge Atomizing, 通过 chunking, embedding, 实现, 这里可以添加 system prompt
    - Knowledge-Aware Task Decomposition, 通过 multiple decomposition strategies 实现
        - 基于 understanding the contents of the specialized knowledge base, 对 analytical reasoning 过程进行 agentic, 分析是否可以通过现有 critical factor 直接进行基础策略, 否则采取新策略
        - Knowledge-Aware Task Decomposition workflow/Algorithm:
            - query decompose -> Atomic retrival -> Atomic selection -> generation
            - query decompose -> 不需要分解任务(常识性 llm) -> generation
    - Knowledge-Aware Task Decomposer Training
        - two primary data structures:
            - scoreMap: 维护全面的得分记录(S Map)
            - freqMap: 跟踪候选块的访问频率(K Map)
        - Algorithm 2 Collect Data to Train a Knowledge-Aware Decomposer
            - similarity threshold criterion(specifically, similarity exceeding δ′, where δ′ < δ)
            - 并且 K′有意设置得比 K 大，以确保全面覆盖。完成初始检索后，我们仔细选择并整合与前 K 个最相关的原子检索对对应的块数据到上下文中。对于未能进入前 K 选择的检索块，我们系统地将它们纳入字典 S，并根据精确计算的相关性指标方法地更新它们的得分。
        - 使用 Upper Confidence Bound(UCB) algorithm for context sampling, 保证上下文采样来平衡 exploitation and exploration(利用和探索)
            - The exploitation component manifests through the retriever-selected chunks(chunk 检索器), focusing on options with currently highest estimated rewards to optimize immediate performance gains.(重点关注当前估计奖励最高的选项，以优化即时性能收益)
            - 探索部分通过从字典 S 中采样上下文实现，使我们能够系统地调查不太确定的选项，积累有价值的数据，并可能发现更优的长期替代方案。
            - 记录 atomic proposals, interactive trajectories, answer scores 来支持 decomposer training, 并对于 each specialized domain, 单独训练其 decomposer, 为提高训练效率, 直接使用的是 in the form of answer scores, 这样分解器可以 capture domain-specific decomposition rules to meet domain requirements
            - 还有就是废话部分, SFT, DPO, 现有技术的采用, 没直说用的啥
4. L3: Predictive Question focused RAG System
    - forecasting submodule allows the system to not only generate answers based on historical knowledge, but also make projections, providing a more robust and dynamic response to complex queries. knowledge structuring submodule follows the instruction from task decomposition module to collect and organize the relevant knowledge
5. L4: Creative Question focused RAG System
    - multi-agent architecture
        - parallel processing and integration of diverse reasoning paths
    - 生成创新的想法而不是预定义的解决方案, 所以需要 user propmt 辅助

### 关于 chunking:

1. TokenChunker: 按固定大小的 token 进行分块
2. WordChunker: 按单词进行分块
3. SentenceChunker: 按句子进行分块
4. RecursiveChunker: 基于 LLM 定义生成的规则进行递归分块, 结合 5 语义分块使用
5. SemanticChunker: 基于语义相似性进行分块, 对上下文理解进行自适应调整
6. SDPMChunker: 基于语义双重合并方法(Semantic Double-Pass Merge) 进行分块
7. LaterChunker: 即先 embedding, 再进行 chunking, 得到更高质量的 chunk embedding

### 关于 corpus layer 语料层 & knowledge distilluted layer 知识蒸馏层

语料层直接 file node - section node - chunk node 比较合理, 直接用 agentic chunk:

```py
from langgraph.nodes import InputNode, SentenceSplitterNode, LLMDecisionNode, ChunkingNode

# Step 1: Input Node
input_node = InputNode(name="Document Input")

# Step 2: Sentence Splitting Node
splitter_node = SentenceSplitterNode(input=input_node.output, name="Sentence Splitter")

# Step 3: LLM Decision Node
decision_node = LLMDecisionNode(
    input=splitter_node.output,
    prompt_template="Does the sentence '{next_sentence}' belong to the same chunk as '{current_chunk}'?",
    name="LLM Decision"
)

# Step 4: Chunking Node
chunking_node = ChunkingNode(input=decision_node.output, name="Semantic Chunking")

# Run the graph
document = "Your document text here..."
result = chunking_node.run(document=document)
print(result)
```

流程: file -> input node -> sentence splitting node -> LLM Decision Node -> Chunking Node

-   Sentence Splitting Node: splits the file into individual sentences
-   LLM Decision Node: prompt_template = "Does the sentence'{next_sentence}' belong to the same chunk as '{current_chunk}'"
-   Chunking Node: Groups sentences into chunks based on the LLM's output

知识蒸馏层 是 node-edge-node + tag 的 KG -> question unit 化, 因为可能一个 chunk 中只有一部分需要作为检索目标 -> tablular knowledge, induced knowledge 诱发性知识.

knowledge unit 主要是为了提高 知识与任务分级过程中 query 的 相似度, 利用 LLMs 的上下文理解能力和内容生成能力, 自动在每个 chunk 中标记 unit 片段, 比如一条科普介绍型的 chunk 会被拆分为 5 个 unit_question-answer 对, 即 when, where, who, what, with whom, etc. 这样 chunk 就被拆分成了更细分的 unit, 而这些 unit 可能是 chunk 中的段落, 是表格, 图像, 视频生成的表述, 或者是整个章节, 文本摘要. 且因为每个 chunk 都标注了 unit knowleddge, 可以在 query 的时候通过 unit question query 到 relevant unit question, 然后再 reference 相关 chunks

### 关于 knowledge graph + knowledge unit + tabular knowledge + induced knowedge

knowledge graph:

通过人工标注的方式+LLMs 生成 KG, 实现一号蒸馏知识存储方式, 需满足:

1. Quality: 不能包含其他泛化能力强的模型所需数据, 必需是领域复杂问题, 并且由专项工程师提供标注辅助.
2. Difficaulty: 不能包含简单数理逻辑图谱, 必需强调领域复杂性问题. 并在 init training 后, 通过 tokenizer 测量每个 inferance trace length 来计算难度, 取其高者作为下一个 step 的输入.
3. Diversity: 必需涵盖领域内足够多样性的数据

通过以上 3 点数据确准后, 以全监督学习的方式将 source data layer(源数据层)经过序列化后的数据进行 node-edge-node 的结构存储 knowledge entity 为 KG, 作为对 corpus layer(语料层)的映射, 并经由专项工程师对每个 node & edge 进行 tagging, 最后用 SOTA 模型作为预训练模型进行训练.

经过上述训练后, 由专项工程师提供人工验证而非机器验证, 最终通过 STF 方式进行微调模型, 目标不是 benchmark 排名, 而是真实用户体验和领域的专业性.

knowledge unit:

通过 LLM 生成 Knowledge Unit 作为二号存储方式

因 query 过程中并非需要 chunk 内所有数据, 为提高知识提取与任务分级过程中 query 的效率, 利用 LLM 的上下文理解能力和内容生成能力, 自动在每个 chunk 中标记 unit 片段, 方便相似度检索. 这些 unit 可以是 chunk 中的段落/表格/图像/视频生成的表述/整个章节/文本摘要.

1. 采用余弦相似度+UPS 上采样方式, 尽可能多的创造 chunk 间的 query 相似度
2. knowledge unit 作为 index(索引) 存储为 treeNode(树节点) 树状结构, 而 chunk 作为每个 treeNode 的 root 根节点, 通过自平衡二叉搜索树算法快速遍历, 以时间复杂度 O(logn)的速度进行插入, 删除, 查询, 并减少了 KG 对隐藏边(hidden edge)的需求, 保证了查询效率和存储效率.

最后结合 temperature > 6 和 STF 再次训练, 有效提高因人工标注样本较少导致模型领域内泛化能力低的问题.

tabular knowledge:

在 knowledge unit 的基础上, 再通过人工标注的方式补充添加表格化数据, 列表化数据.

因 knowledge unit 存储方式为 index, 关联存储方式为 json, 并非阅读性友好数据, 这种在部分工程数据是通过表格化或列表化存储的, 为提升了其可读性和可操作性, 和后续的数据处理, 数据分析提供了便捷, i.e. 以 table 的方式可以将其存入任意关系型数据库, 提供可视化/通俗化操作性, 降低了项目承接的学习成本, 并可以在跨系统 API 调用时提高客制化效率. e.g. 通过 index 快速定位 knowledge unit, 通过根节点和子节点信息有利于非 IT 工程师理解其在知识图谱中的位置和关系.

induced knowledge:

论文中只提到一次, 默认理解为层级 list

## 半导体

新颖性：分级 RAG（L0-L4）结合智能体和开源 LLM 的架构在半导体制造领域尚未被广泛应用，特别是在多模态数据处理和任务分解方面具有显著创新

创造性：多层次异构知识库、UCB 算法驱动的任务分解、领域特定训练的 decomposer 等技术点超越了传统 RAG 系统

工业适用性：半导体制造领域对精准问答、工艺优化和预测性分析的需求明确，PIKE-RAG 的应用场景（如晶圆缺陷检测、设备故障诊断）具有实际价值

### 摘要

本申请涉及人工智能技术领域，尤其是一种基于分级检索增强生成与智能体的半导体制造领域专用大语言模型及问答系统的设计方案和解决方案。 该方法通过包括数据源层、语料层、知识蒸馏层的三层异构知识库存储多模态半导体领域数据；通过使用大语言模型调用分级检索增强生成模块与智能体模块，实现对简单问答响应、事实性问答、推理性问答、预测性问答、创造性问答的分级任务处理，简化了半导体制造领域中设备工程师、工艺工程师、软件工程师等工作流程，解决传统检索增强生成在半导体领域的多模态处理和多跳推理的局限性，提出多智能体架构保障对任务分解、知识检索、推理协调的动态应用，提升半导体制造领域中人工智能应用的知识提取、推理和问答的准确性和生产效率。

### 权要

1. 本申请涉及人工智能技术领域，尤其是一种基于分级检索增强生成与智能体的半导体制造领域专用大语言模型及问答系统的设计方案和解决方案，其特征在于，该方法包括：
   通过包括数据源层、语料层、知识蒸馏层的三层异构知识库，存储半导体制造领域的专业数据，所述半导体制造领域的专业数据包括技术文档、软件日志、建模参数、设备参数、配料管理、工艺数据、良率数据、排产数据，并最终表示为半导体制造领域的多模态知识；
   通过智能体程序驱动的分级检索增强生成模块，将任务流划分为 5 个等级，包括：L0 直接提取问答、L1 事实性问答、L2 推理性问答、L3 预测性问答、L4 创造性问答；
   通过自我学习模块，动态更新所述三层异构知识库以适应半导体制造生产过程中的变化；
   通过大语言模型调用所述三层异构知识库和所述智能体协同生成问答式响应，即所述问答系统。

2. 根据权利要求 1 所述的系统，其特征在于，所述三层异构知识库的构建，包括将 pdf、txt、excel、csv、ppt、word、jpeg、png、gif、mp4、avi、json、sql、xml 等多模态数据源，通过文档解析和知识提取的方式转化为数据源层、语料层、知识蒸馏层，该方法包括：
   通过 OCR、a2t、v2t、office converter、pdf converter 等方式进行常规文件解析，对于半导体领域专属的特殊 FA 文件格式，通过 IT 的 CIM Mapping 程序进行文件解析；
   通过动态的分块策略（chunking）、标注策略（tagging）、蒸馏策略（distillation），调用智能体进行处理，生成结构化的知识蒸馏层数据，包括知识图谱、知识单元和表格知识。

3. 根据权利要求 1 所述的系统，其特征在于，所述智能体驱动的分级检索增强生成模块包括：
   L0 模块，通过直接提取所述三层异构知识库中的预处理数据生成简单问答响应；
   L1 模块，通过增强型分块、自动标记和多粒度检索处理半导体制造领域的事实性问答，其中增强型分块通过迭代文本拆分生成上下文连贯的分块，自动标记通过大语言模型生成语义标签以弥合查询与语料的领域差距，多粒度检索基于三层异构知识库计算查询与节点的相似度得分并跨层传播；
   L2 模块，通过知识原子化和知识感知任务分解处理推理性问答，其中知识原子化通过大语言模型生成与分块对应的原子问题作为索引，知识感知任务分解采用上置信界（UCB）算法进行上下文采样以迭代检索相关知识；
   L3 模块，通过预测子模块基于历史工艺数据生成预测性响应，其中预测子模块结合知识组织模块的结构化数据进行趋势分析；
   L4 模块，通过多智能体架构和用户提示生成创造性问答响应，其中多智能体架构并行处理多条推理路径以提出创新性解决方案。

4. 根据权利要求 3 所述的系统，其特征在于，所述 L1 模块的多粒度检索包括：
   将查询与三层异构知识库的节点转化为高维向量嵌入，通过相似度函数计算节点与查询的相似度；
   通过传播函数将相似度得分在信息资源层、语料层和知识蒸馏层之间聚合，生成最终的分块相似度得分。

5. 根据权利要求 3 所述的系统，其特征在于，所述 L2 模块的知识原子化包括：
   输入分块文本至大语言模型，生成可由该分块回答的原子问题；
   将所述原子问题作为知识索引，与分块共同存储于知识蒸馏层；
   在检索时，通过查询与原子问题的余弦相似度匹配相关分块。

6. 根据权利要求 3 所述的系统，其特征在于，所述 L2 模块的知识感知任务分解包括：
   初始化参考上下文为空，利用大语言模型生成查询提案；
   将查询提案作为原子查询检索知识库中的原子问题及其相关分块；
   采用上置信界（UCB）算法选择最优原子问题及其分块，更新参考上下文；
   迭代执行上述步骤，直至满足终止条件或完成任务。

7. 根据权利要求 6 所述的系统，其特征在于，所述知识感知任务分解通过可训练的分解器实现，该分解器通过以下步骤训练：
   构建双字典数据结构，包括用于记录得分的分数字典和用于跟踪访问频率的频率字典；
   基于上置信界（UCB）算法采样上下文，生成交互轨迹和原子提案；
   以答案得分为监督信号，训练分解器以捕捉半导体制造领域的任务分解规则。

8. 一种基于分级检索增强生成与智能体的半导体制造领域专用问答方法，其特征在于，包括以下步骤：
   从多模态数据源中提取半导体制造领域的专业数据，构建包括数据源层、语料层、知识蒸馏层的三层异构知识库；
   通过智能体驱动的分级检索增强生成模块，将任务划分为 L0 直接提取、L1 事实性、L2 推理性、L3 预测性、L4 创造性问答；
   通过自我学习模块动态更新所述三层异构知识库；
   利用大语言模型调用所述知识库和智能体生成问答响应。

9. 根据权利要求 8 所述的方法，其特征在于，所述方法通过多粒度检索、知识原子化和知识感知任务分解，结合知识图谱和知识单元，优化半导体制造领域的问答效率。

10. 根据权利要求 8 所述的方法，其特征在于，所述方法应用于晶圆缺陷检测、工艺参数优化或设备故障诊断场景，通过分级检索增强生成和智能体协调提升问答准确性和生产效率。

### 具体实施方案

本实施方案详细描述了一种基于分级检索增强生成、大语言模型（LLM）及智能体的半导体制造领域专用问答系统的实现方式。系统通过三层异构知识库存储多模态数据，结合分级 RAG 模块（L0-L4）和智能体模块，实现从简单问答到创造性响应的任务处理，解决传统 RAG 在半导体领域的多模态处理和多跳推理局限性。以下结合附图 1-3，通过具体实施例阐述系统的工作原理。

实施例 1：三层异构知识库的构建（附图 1）
附图 1 展示了三层异构知识库的构建流程，包含信息资源层（Gi）、语料层（Gc）和知识蒸馏层（Gdk），对应权利要求 1 和 2 的描述。

1. 文件解析：
   系统首先通过文件解析模块处理半导体制造领域的多模态数据源（如技术文档、FA 文件、良率数据）。例如，针对 FA 文件，使用 CIM Mapping 程序将其转化为结构化数据；针对 PDF 文档，使用 OCR 技术提取文本。
   实施例：从晶圆缺陷检测报告（PDF 格式）中提取文本，报告包含缺陷分布图表。文件解析模块保留图表的多模态信息，并通过 Vision-Language Model（VLM）生成描述性文本，如“晶圆中心区域存在 5% 点状缺陷”。
2. 知识提取与存储：
   知识提取模块对解析后的数据进行动态分块（Chunking）、标注（Tagging）和蒸馏（Distillation）。例如，使用语义分块策略将晶圆缺陷报告拆分为“缺陷类型”、“分布位置”、“影响因素”等分块。
   知识存储模块将分块数据存储为三层异构知识库
   信息资源层： 存储原始文档及其引用关系，如报告与设备日志的超链接
   语料层： 存储分块后的文本和多模态描述，如“点状缺陷分块”
   知识蒸馏层： 通过知识原子化生成知识单元。例如，使用 LLM 将“点状缺陷分块”转化为原子问题：“晶圆中心缺陷的主要类型是什么？”并存储为知识索引

实施例 2：分级 RAG 模块的任务处理（附图 2）
附图 2 展示了分级 RAG 模块（L0-L4）的工作流程，包含文件解析、知识提取、知识存储、知识检索、知识组织、任务分解与协调、以知识为核心的推理模块，对应权利要求 3-7 的描述。

1. L0 直接提取问答：
   场景： 设备工程师查询“晶圆清洗设备的工作温度范围”
   实施： 知识检索模块直接从知识蒸馏层提取预处理数据，如“晶圆清洗设备温度范围：50-80°C”，并生成响应
2. L1 事实性问答：
   场景：工艺工程师查询“晶圆缺陷检测设备的参数范围”。
   实施：
   增强型分块：文件解析模块将设备手册拆分为上下文连贯的分块，如“参数设置”分块。
   自动标记：知识提取模块使用 LLM 生成语义标签（如“设备参数”），弥合查询与语料的领域差距。
   多粒度检索：知识检索模块将查询“参数范围”转化为向量嵌入，计算与三层异构知识库节点的相似度得分，通过传播函数聚合信息资源层、语料层和知识蒸馏层的得分，返回“检测设备参数范围：电压 220V，频率 50Hz”。
3. L2 推理性问答：
   场景：工程师查询“晶圆缺陷的原因是什么？”。
   实施：
   知识原子化：知识提取模块从缺陷报告分块生成原子问题，如“晶圆中心缺陷是否与清洗温度有关？”。
   知识感知任务分解：任务分解与协调模块初始化上下文，利用 LLM 生成查询提案（如“检索清洗温度数据”），采用 UCB 算法选择最优原子问题，迭代检索相关分块（如“清洗温度 75°C”）。
   推理：以知识为核心的推理模块分析分块数据，得出“清洗温度过高可能导致晶圆中心缺陷”。
4. L3 预测性问答：
   场景：工程师预测“未来三个月晶圆良率趋势”。
   实施：
   知识组织：知识组织模块从历史工艺数据提取结构化信息（如“2024 年良率数据：90%、92%、89%”）。
   预测子模块：以知识为核心的推理模块使用预测子模块，结合时间序列分析，预测“未来三个月良率趋势：稳定在 90% 左右”。
5. L4 创造性问答：
   场景：工程师寻求“工艺改进建议”。
   实施：
   多智能体架构：任务分解与协调模块调用多智能体架构，多个智能体并行推理：智能体 A 分析缺陷数据，智能体 B 评估工艺参数，智能体 C 提出优化方案。
   生成响应：以知识为核心的推理模块综合推理结果，生成“建议降低清洗温度至 70°C，并增加检测频率”。

实施例 3：任务分解与多智能体架构（附图 3）
附图 3 展示了任务分解与多智能体架构的实现，包含知识原子化、UCB 算法和多智能体推理过程，对应权利要求 6-7 的描述

1. 知识感知任务分解：
   场景：工程师查询“晶圆缺陷是否由设备故障引起？”。
   实施：
   任务分解与协调模块初始化上下文为空，利用 LLM 生成查询提案：“检索设备故障日志”。
   知识检索模块检索相关分块（如“设备日志：2025 年 5 月 30 日温度传感器故障”）。
   采用 UCB 算法选择最优原子问题（如“温度传感器故障是否影响清洗效果？”），更新上下文，迭代推理。
2. 可训练分解器：
   实施：
   构建双字典：分数字典记录答案得分，频率字典跟踪分块访问频率。
   使用 UCB 算法采样上下文，生成交互轨迹（如“设备故障 → 清洗效果 → 缺陷关联”）。
   以答案得分为监督信号，训练分解器捕捉半导体制造领域的任务分解规则。
3. 多智能体架构：
   场景：生成“工艺改进建议”。
   实施：
   多个智能体并行工作：智能体 A 提取缺陷数据，智能体 B 分析工艺参数，智能体 C 提出改进方案。
   推理协调：以知识为核心的推理模块整合多智能体结果，生成创新性响应。

对权利要求的进一步阐述

权利要求 1：实施例 1 展示了三层异构知识库的构建，实施例 2 体现了分级 RAG 模块（L0-L4）的作用，实施例 4 说明了自我学习模块和 LLM 与智能体的协同。
权利要求 2：实施例 1 详细描述了文件解析（CIM Mapping、OCR）、知识提取（动态分块、知识原子化）的实现。
权利要求 3-7：实施例 2 和 3 具体实现了 L0-L4 的功能，覆盖增强型分块、多粒度检索、知识原子化、UCB 算法、可训练分解器等技术点。
权利要求 8-10：实施例 4 提供了方法流程和应用场景，体现了系统在晶圆缺陷检测、工艺优化中的实际价值。

附图内容的整合
附图 1：三层异构知识库的构建流程，包含信息资源层、语料层、知识蒸馏层的节点和边关系，体现了文件解析、知识提取、知识存储的实现。
附图 2：分级 RAG 模块（L0-L4）的工作流程，展示了知识检索、知识组织、任务分解与协调、以知识为核心的推理模块的协作。
附图 3：任务分解与多智能体架构，详细描述了知识原子化、UCB 算法和多智能体推理的过程。
