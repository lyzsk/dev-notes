# Python

# PriorityQueue && heapq

Python3 有 heapq 包, 里面有优先队列的实现;
但是没有 maxheap, 只有默认的 minheap, 所以创建 maxheap 的时候导入的是相反数:

```py
def lastStoneWeight(self, stones: List[int]) -> int:
    maxheap = [-stone for stone in stones]
    heapq.heapify(maxheap)
```

# pip

暂时更换 pip 镜像源

```bash
pip install package_name -i http://mirrors.aliyun.com/pypi/simple/
```

可用镜像:

|                  |                                            |
| :--------------- | :----------------------------------------- |
| 豆瓣 (douban)    |  http://pypi.douban.com/simple/            |
| 阿里云           |  http://mirrors.aliyun.com/pypi/simple/    |
| 清华大学         |  https://pypi.tuna.tsinghua.edu.cn/simple/ |
| 中国科技大学     |  https://pypi.mirrors.ustc.edu.cn/simple/  |
| 中国科学技术大学 |  http://pypi.mirrors.ustc.edu.cn/simple/   |

# anaconda create-active-deactive-remove enviornment

查看 python version, cmd

```bash
python --version
```

1. 创建虚拟环境

```bash
conda create -n env_name python=py_version
```

2. 激活虚拟环境

```bash
conda activate env_name
```

3. 退出虚拟环境

```bash
conda deactivate
```

4. 删除虚拟环境

```bash
conda remove -n env_name --all
```

5. 查看所有 anaconda 环境

```bash
conda-env list
```

6. 查看环境内 all packages/package 版本

进入环境后

```
conda list (package_name)
```

#

批量安装 requirements.txt:

```bash
pip install -r requirements.txt
```

批量导出:

```bash
pip freeze > requirements.txt
```

@see: https://www.cnblogs.com/maxiaodoubao/p/10605850.html
