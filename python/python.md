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
| 豆瓣(douban)     |  http://pypi.douban.com/simple/            |
| 阿里云           |  http://mirrors.aliyun.com/pypi/simple/    |
| 清华大学         |  https://pypi.tuna.tsinghua.edu.cn/simple/ |
| 中国科技大学     |  https://pypi.mirrors.ustc.edu.cn/simple/  |
| 中国科学技术大学 |  http://pypi.mirrors.ustc.edu.cn/simple/   |

永久替换:

windwos: %APPDATA%

在这个目录中新建一个 pip 文件夹，然后在 pip 文件夹中新建个 pip.ini 文件

在创建的 pip.ini 文件中修改:

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```
