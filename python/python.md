<p align="center">
    <a href="#python3">
        <img src="https://img.shields.io/badge/-Python-3C415C?style=plastic&logo=python&logoColor=3776AB" />
    </a>
    <a href="#ide">
        <img src="https://img.shields.io/badge/-Pycharm-3C415C?style=plastic&logo=pycharm&logoColor=FFFFFF" />
    </a>
    <a href="#jupyter-notebook">
        <img src="https://img.shields.io/badge/-Jupyter-3C415C?style=plastic&logo=jupyter&logoColor=F37626" />
    </a>
</p>
<p align="center">
    <a href="#anaconda">
        <img src="https://img.shields.io/badge/-Anaconda-3C415C?style=plastic&logo=anaconda&logoColor=44A833" />
    </a>
</p>
<p align="center">
    <a href="#anaconda">
        <img src="https://img.shields.io/badge/-PyTorch-3C415C?style=plastic&logo=pytorch&logoColor=EE4C2C" />
    </a>
    <a href="#anaconda">
        <img src="https://img.shields.io/badge/-TensorFlow-3C415C?style=plastic&logo=tensorflow&logoColor=FF6F00" />
    </a>
</p>

# 2022-Python-notes

| [Python](#python3) | [Jupyter notebook](#jupyter-notebook) | [Anaconda](#anaconda) | [IDE](#ide)

# Python3

| [HashMap](#hashmap) | [Integer.Max_value Integer.MIN_VALUE](#integermaxvalue-integerminvalue) | [字符串转义](#string-escape) | [跨平台, compile, interpret](#cross-platform-comiple-interpret) | [取模运算](#modulo-operation) |

---

## HashMap

py `map.remove(key)` 写作: `dict.pop(key)`

## Integer.MAX_VALUE, Integer.MIN_VALUE

py 没有 `Integer.MIN_VALUE` 和 `Integer.MAX_VALUE`

想用的话:

```python
import sys
max_size = sys.maxsize
min_size = -sys.maxsize - 1
```

---

## string escape

字符串转义：%s, %d, %f

多字符转义方法 1：用 tuple

多字符转义方法 2：用 str.format(\*args, \*\*kwargs)

用 `r''` 表示 `''` 内部的字符串 不转义

---

## Cross-platform, comiple, interpret

编译 compile 和 解释 interpret 的区别：

编译型语言：C, C++

解释型语言：R, Python, Java

Compile: 把整个程序源代码，翻译成另一种代码，然后等待被执行，在执行之前，产物是 \[另一份代码\]

Interpret: 把程序源代码 一行一行的 读懂后执行，在运行时，产物是 \[运行结果\]

跨平台指的是 \[编译后的文件\] 是否 \[跨平台\]

比如：

.py 是被 python.exe 作为解释器一行一行解释, 有 bug 的时候,直到 bug 位置才会报错

而 .java 是被 javac.exe 先编译成 .class 文件, 再被 java.exe 执行 (翻译) 成 JVM 可执行的字节码, JVM 动态地将字节码一行一行执行成 \[当前操作系统\] 可执行的文件格式, 所以说 Java 也是一种 解释型语言, Java 的特色就是 javac, java 都在 JDK 里, 可以做到一次编译, 到处运行, 也就是所谓的跨平台

而 .c 的跨平台原理是 .c 通过 windows compiler 编译后, 再到对应的平台上运行, .c 想在其他平台运行, 需要 .c -> 某平台的 compiler -> machine code -> 某平台的 processor 最终执行, 所以某种意义上 C 语言不是跨平台的, 但也因为这个, C 语言效率比 Java 高, 因为他通过编译器产生的可执行文件可以直接在该平台上运行不需要经过 -> 解释器 -> 编译器的两步过程

---

python 没办法 `for(int left, right; right < s.length(); right++)`

python 没有 `char` 这个类型

解决办法：

```python
left = 0
for right in range(len(s)):
    if s[right] in map:
        left = max(left, map[s[right] + 1])
```

---

python 没有 `++i`, 只能 `i += 1`

---

python 声明 int array 数组:

```python
# 记住不能命名成 range, 否则会和 range() 方法冲突
sub_range = [0] * 2
```

---

python `map.remove(key)`{.java} 写作 `dict.pop(key)`{.python}

---

python 里

\*args 位置传递参数 args 是 tuple 类型,

\*\*kwargs 关键字传递 kwargs 是 dict 类型, 用 key=value 形式

函数可以作为参数传递

---

## Modulo operation

垃圾 py3 里面的 取模运算符 是: `//`

而且 py3 的取模跟 java 不一样:

比如 [Leetcode0007 整数翻转](https://leetcode.cn/problems/reverse-integer/):

java 版本:

```java
    public int reverse(int x) {
        int res = 0;
        while(x != 0) {
            if(res > Integer.MAX_VALUE / 10 || res < Integer.MIN_VALUE / 10) {
                return 0;
            }
            int digit = x % 10;
            x /= 10;
            res = res * 10 + digit;
        }
        return res;
    }
```

而 py3 版本:

```python
class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        INTEGER_MIN, INTEGER_MAX = -2 ** 31, 2 ** 31 - 1

        res = 0
        while x != 0:
            if res > INTEGER_MAX // 10 or res < INTEGER_MIN // 10 + 1:
                return 0
            digit = x % 10
            if x < 0 and digit > 0:
                digit -= 10
            x =(x - digit) // 10
            res = res * 10 + digit

        return res

```

原理:

`INTEGER_MIN` 也是一个负数，不能写成 `res < INTEGER_MIN // 10`

Python3 的取模运算在 x 为负数时也会返回 [0, 9) 以内的结果，因此需要进行特殊判断

同理，Python3 的整数除法在 x 为负数时会向下 (更小的负数) 取整，因此不能写成 `x //= 10`

# Jupyter notebook

用 google colab 免费的 GPU:

1. 创建一个新的 Notebook
2. Edit -> Notebook settings -> Hardware accelerator 选 **GPU**
3. 因为只能上传文件, 要先对项目进行打包
4. 上传完文件, 命令行解压缩

    ```
    !unzip /content/yolo.zip -d /content/yolo
    ```

5. 删除不想要的 zip 附带内容, 比如:

    ```
    !rm -rf /content/yolov5/__MACOSX
    ```

6. 命令行进入 yolo 的 master

    ```
    %cd /content/yolov5/yolov5-5.0
    ```

7. 安装 yolo 的 requirements

    ```
    !pip install -r requirements.txt
    ```

8. 加载 / 重新加载插件

    ```
    %load_ext tensorboard
    %reload_ext tensorboard
    ```

9. 加载 tensorboard 插件看图标

    ```
    %tensorboard --logdir=runs/train
    ```

10. 运行 py

    ```
    !python train.py --rect

    # 自定义数据集
    !python train.py --rect --data=data/coco.yaml
    ```

11. 训练结束后从 runs/expx/weights 里把训练好的模型下载下来本地测试就行

# Anaconda

```console
<!-- 创建环境 -->
conda create -n [env_name] python=3.9

<!-- 激活环境 -->
conda activate [env_name]

<!-- 检查环境中的包 -->
conda list [package_name]
pip list

<!-- 进入python环境 -->
python

<!-- 退出python环境 -->
quit()
```

---

`pip` 安装 `requirements.txt`

```console
pip install -r requirements.txt
```

---

`pytorch > 1.7.1` 才有 FP16, FP32

---

训练多分类语义分割的时候, `num_classess < 10` 可以用 Focal loss + Dice loss 代替传统的 CE loss

`Focal loss` 和 `Dice loss` 主要是解决前后景 imbalance 的问题

---

loss 高没关系, 只要 loss 在下降, 就说明了模型在 convegence 收敛, 当然肯定 loss 越低越好

# IDE

PyCharm 配置:

1. Theme 用 VSCode Dark
2. 无视 warning: Method 'xxx' may be 'static':

    Settings -> Editor - Inspections -> 取消勾选 Python-Method is not declared static

3. 取消拼写检查:

    Settings -> Editor -> Inspections -> 取消勾选 Proofreading-Typo

4. 安装 plugin: Save Actions

    勾选 activate save actions on save

    勾选 Optimize imports

    勾选 Reformat file

    勾选 Rearrange fields and methods

5. 允许小写也能自动补全 pakage, class:

    Settings -> Editor -> General -> Code Completion -> 取消勾选 Match case

6. Setting -> Editor -> Inspections -> 取消勾选 Shaowing built-ins
7. Settings -> Editor -> Inspections -> Python -> 取消勾选 Unused local symbols

---

快速配置方法 (但是要检查很多东西, 不太好用):

1. 导出: File -> Manage IDE Settings -> Export Settings
2. 导入: File -> Manage IDE Settings -> Import Settings

需要检查并重新配置:

1. Settings -> Editor -> Inspections 里的所有配置
2. SaveActions 插件

# Python

# 安装

路径在: `C:\Users\[xxx]\AppData\Local\Programs\Python\Python314`

系统变量添加 `PY314`

PATH 添加 `%PY314%` 和 `%PY314%\Scripts`

验证

```cmd
python --version
pip --version
```

如果 pip 无法正常确认:

```cmd
python -m pip --version
```

后续就用 `python -m pip install xxx` 来安装

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

永久替换:

windwos: %APPDATA%

在这个目录中新建一个 pip 文件夹，然后在 pip 文件夹中新建个 pip.ini 文件

在创建的 pip.ini 文件中修改:

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```
