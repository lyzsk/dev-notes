# controller service dao

-   Controller: 业务控制层

-   Service: 业务层/服务层

-   DAO: 数据库持久化层

**Controller**

业务控制, 控制业务层(Service), 作用主要是架起了外界与业务层沟通的桥梁, 移动端和前端在调用接口访问相关业务时, 都是通过 Controller 调用相关业务层代码, 并把数据返回移动端和前端

> Controller 层时不允许直接操作数据库的

> Controller 层就只是一个中间者或者转发者, 不应该在 Controller 里暴露 Service 的业务逻辑, 应该直接转发 Service 的业务处理结果

> Controller 层不允许互调

**Service**

所有内部的业务逻辑都放在这里处理, 比如用户的增删查改; 发送验证码/邮件

> Service 层不允许互调

**DAO**

用来和数据打交道, 一般来说:

1. 项目复杂程度一般, 追求稳定, 迭代速率低可以用 JPA

2. 项目较复杂, 需求变更频繁, 迭代速度快可以用 MyBatis

# vo po dto bo pojo entity

**PO**

持久层对象(persistant object)

时 ORM(Object Relational Mapping) 框架中的 Entity, PO 属性和数据库中的字段形成一一对应的关系

VO 和 PO, 都是属性加上属性的 get 和 set 方法, 表面上看没什么不同, 但代表的含义不同

**VO**

值对象(value object)

用于业务层之间数据的传递, 由 new 创建,由 GC 回收

和 PO 一样仅仅包含数据, 但是抽象出的业务对象, 可以和表对应, 也可以不和表对应

**DTO**

数据传输对象(data transfer object)

是一种设计模式之间传输数据的软件应用系统, 传输数据目标往往是数据访问对象从数据库中检索数据

数据传输对象与数据交互对象或数据访问对象之间的差异是一个不具任何行为除了存储和检索的数据(访问和存取器)

简而言之, 就是接口之间传递的封装数据

比如: 一张表里有十几个字段, 页面需要展示三个字段: name, gender, age,

DTO 由此产生, 一是提高数据传输的速度(减少了传输字段), 二是能隐藏后端表结构

**BO**

业务对象(business object)

BO 把业务逻辑封装为一个对象, 通过调用 DAO 方法, 结合 PO 或 VO 进行业务操作

PO 组合, 如投保人是一个 PO, 险种信息是一个 PO 等等, 组合起来就是一张保单的 BO

**POJO**

简单无规则 java 对象(plain ordinary java object)

传统意义的 java 对象, 最基本的 java bean 只有属性加上 get 和 set 方法

可以转化为 PO, DTO, VO, 比如:

> POJO 在传输过程中就是 DTO

**DAO**

数据访问对象(data access object)

是标准的 j2ee 设计模式的接口, 负责持久层的操作, 用来封装对数据的访问

**Entity**

实体类, 和 PO 的功能相似, 和数据库表一一对应, 一个实体类一张表
