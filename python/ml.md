# SVM

SVM (support vector machine)

Pros:
- 全局最优 而不是局部最优
- 不仅适用 linear, 还适用于非线性
- 通过 kernal 映射, 高维样本空间的数据也能用 SVM
- 理论基础比 nueral network 完善

Cons:
- 只能二分类 (可以通过多个SVM组合来解决多酚类, SVR 也能适用回归问题)
- 因为二次规划时设计m阶矩阵计算, 不适用于大数据集 (用 SMO 算法可以缓解)
