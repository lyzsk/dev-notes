# (一) CIM 业务划分

半导体领域中计算机集成制造（CIM/Computer Integrated Manufacturing），是行业标准系统，作为半导体制造工厂（FAB）的“中枢神经系统”，其核心业务为实现全流程自动化、数字化与智能化管控. CIM 系统包含四大核心业务板块: 设备自动化与控制、生产执行与追踪、智能调度与物流、工程与质量管理.

## 1. CIM 子系统介绍

上海芯源创新中心现存业务共包含 15 个 CIM 子系统:

- 设备自动化程序（EAP/Equipment Automation Program）
- 制造执行系统（MES/Manufacturing Execution System）
- 配方管理系统（RMS/Recipe Management System）
- 远程控制管理（RCM/Remote Control Management）
- 统计过程控制（SPC/Statistical Process Control）
- 故障检测与分类（FDC/Fault Detection and Classification）
- 先进过程控制（APC/Advanced Process Control）
- 缺陷管理系统（DMS/Defect Management System）
- 良率管理系统（YMS/Yield Management System）
- 设备维修保养系统（PMS/Preventive Maintenance System）
- 告警管理系统（AMS/Alarm Management System）
- 报表系统（RPT/Reporting System）
- 工厂监控系统（FMS/Factory Monitoring System）
- 实施派工系统（RTD/Real-Time Dispatching）
- 自动化物料搬运应用（AMA/Automated Material Handling Application）

## 2. 现阶段痛点

现阶段因缺乏信息技术（IT/Information Technology）相关支撑，无法对上述系统进行工作内容的推进，包括: 厂商选型、生产系统软件适配、厂商软件的本地开发与部署、客制化功能需求开发与部署等.

## 3. 现阶段解决方案

现提议申请成立制造信息技术组（MIT/Manufacturer Information Technology），负责上述 15 个子系统的规划、实施、落地等工作.

因办公人员不足的原因暂定根据最小规模划分原则，在 MIT 组下按 CIM 系统业务模块进行划分业务模块:

| 业务板块         | 包含子系统              | 对应小组 |
| :--------------- | :---------------------- | :------- |
| 设备自动化与控制 | EAP, RCM, FDC, APC      | EAP 组   |
| 生产执行与追踪   | MES, RMS, SPC, AMS, PMS | MES 组   |
| 智能调度与物流   | RTD, AMA                | RTD 组   |
| 工程与质量管理   | YMS, DMS, RPT, FMS      | YMS 组   |

其中，因时间紧、任务重，为确保通线时间节点，应以 **EAP、MES、FDC** 三大系统的配套方案建设为重点，再后续完成其余子系统的解决方案.

应在 1-3 个月内组建 20 人自有团队，并联合厂商驻场开发及协助人员以完成开发任务、资源整合、实施保障. 待系统稳定运行后，逐步扩大 MIT 组的人数规模并降低外部依赖，有序实现能力内化、知识沉淀、自主运维，为 CIM 系统长期稳定运行与生产质量提供坚实支撑.

---

# (二) MIT组开发规划

## 1. 编程语言

因厂商招标结果暂不确定，初步需求开发语言:

| 小组  | 编程语言                             |
| :---- | :----------------------------------- |
| EAP组 | C, C++                               |
| MES组 | C#, Java                             |
| RTD组 | Python, Java, JavaScript, TypeScript |
| YMS组 | Python, Java, JS, TS                 |

## 2. 框架、中间件、开发工具

招聘时需掌握计算机知识包括:

- **数据库**: MySQL、PostgreSQL等
- **消息队列**: RabbitMQ、Kafka等
- **缓存**: Redis
- **前端框架**: Vue2/Vue3等
- **后端框架**: Springboot2/Springboot3等
- **ORM框架**: MyBatis/MyBatis-Plus等
- **包管理**: Maven、Anaconda
- **版本管理**: Git
- **AI框架**: Pytorch
- **检索增强数据库**: Neo4j/Langchain
- **容器化**: Docker、Kubernetes
- **日志解析工具**: ElasticSearch

## 3. 岗位划分

为保障系统上线时间，并且考虑到全栈工程师的稀缺性，可以分为以下岗位:

| 岗位             | 必备技能                                                                                   | 框架/协议/工具                     |
| :--------------- | :----------------------------------------------------------------------------------------- | :--------------------------------- |
| 自动化开发工程师 | C/C++                                                                                      | SECS/GEM协议                       |
| 前端工程师       | C#/JavaScript/TypeScript                                                                   | Vue2/Vue3                          |
| 后端工程师       | Java、MyBatis/MyBatis-Plus、MySQL/PostgreSQL、MQ、Redis、Docker、Kubernetes、ElasticSearch | Springboot2/Springboot3            |
| 前后端工程师     | C#/JavaScript/TypeScript/Java                                                              | Vue2/Vue3、Springboot2/Springboot3 |
| AI工程师         | Python、Neo4j/Langchain                                                                    | Pytorch                            |
| 全栈工程师       | 上述所有                                                                                   | 上述所有                           |

## 4. 岗位薪资

建议参考薪资:

| 学历背景    | 建议薪资     | 备注               |
| :---------- | :----------- | :----------------- |
| 应届硕士    | 12,000元起步 | 根据中心HR协调决定 |
| 应届211硕士 | 15,000元起步 | 根据中心HR协调决定 |
| 应届985硕士 | 18,000元起步 | 根据中心HR协调决定 |
