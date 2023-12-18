mean 均值, 反应了数列的集中趋势

variance 方差, 反应一组数据时离散程度 (sigma^2)

standard deviation 标准差: 就是方差开根号, 在大样本中一般使用样本的标准差近似代替总体的标准差, 标准差可以计算钟型曲线(正态分布)

# Tool Commonality

设备共同性

# ANova

Analysis of variance

方差分析

ANOVA 就是把方差拆成两个部分进行对比, 因为:

e.g.

1. 给病人不同的药物剂量；
2. 病人本身不同，比如年轻的病人代谢速度快，有些病人对这个药物比较敏感

## one-way ANOVA

单因素方差分析

目的: 检验每个组的平均数是否相同

ANOVA null hypothesis 零假设: miuA = miuB = miuC

MSB (mean squared between) 组间均方, 就是总体数据的方差

MSE (mean squared error) 组内均方

MSE = (varianceA + varianceB + varianceC) / count

F-statistics

F = MSB / MSE

1. MSB 大, MSE 小, 则 F 大, 说明至少有一个分布相对其他分布较远，且每样本组内数据都非常集中, 于是拒绝 Hypothesis0

2. MSB 小, MSE 大, 则 F 小, 无法拒绝零假设, 因为有两种情况:

    - 每组的平均值都相对集中, 即正态分布集中

    - 每组的方差很大，导致我们无法把每组分开, 即正态分布分散

3. MSB 约等于 MSE, 则 F 小, 无法拒绝零假设

F 分布有两个重要的参数: d1, d2 (分子 MSB 的自由度, 分母 MSE 的自由度)

`d1 = N - 1`, e.g. 3 组数据, 分子自由度为 2

`d2 = N * (k - 1)`, e.g. 3 组数据, 每组 34 个数据, 分母自由度为 `3 * (34 - 1) = 99`

P 值通过查表? 没懂

# Regression analysis

回归分析

确定两种或两种以上变量间相互依赖的定量关系

R^2 范围: `[0, 1]`, 越接近 1, 说明线性回归线与原始数据越吻合

# WAT Chart

# Top Down Analysis

一种自顶向下，逐步分解的性能分析

就比如二叉树 dfs 的时候每层 bfs 分析各个节点

# Pareto analysis

帕累托图, 排列图

将出现的质量问题和质量改进项目按照重要程度依次排列而采用的一种图表

# hard bin vs soft bin

-   hard bin
    know the overall reason about the failure

-   soft bin
    also know the compartment in which it has failed or compartment in which it has been placed
