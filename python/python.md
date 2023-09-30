# Python

# PriorityQueue && heapq

Python3 有 heapq 包, 里面有优先队列的实现;
但是没有 maxheap, 只有默认的 minheap, 所以创建 maxheap 的时候导入的是相反数:

```py
def lastStoneWeight(self, stones: List[int]) -> int:
    maxheap = [-stone for stone in stones]
    heapq.heapify(maxheap)
```
