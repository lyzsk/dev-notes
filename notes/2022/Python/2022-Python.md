字符串转义： %s, %d, %f

多字符转义方法 1： 用 tuple

多字符转义方法 2： 用 str.format(\*args, \*\*kwargs)

---

编译 compile 和 解释 interpret 的区别：

解释型语言： R, Python, Java

编译型语言： C, C++

Compile: 把整个程序源代码，翻译成另一种代码，然后等待被执行，在执行之前，产物是 \[另一份代码\]

Interpret: 把程序源代码 一行一行的 读懂后执行，在运行时，产物是 \[运行结果\]

跨平台指的是 \[编译后的文件\] 是否 \[跨平台\]

比如：

.py 是被 python.exe 作为解释器一行一行解释, 有 bug 的时候,直到 bug 位置才会报错

而 .java 是被 javac.exe 先编译成 .class 文件, 再被 java.exe 执行(翻译) 成 JVM 可执行的字节码, JVM 动态地将字节码一行一行执行成 \[当前操作系统\] 可执行的文件格式, 所以说 Java 也是一种 解释型语言, Java 的特色就是 javac, java 都在 JDK 里, 可以做到一次编译, 到处运行, 也就是所谓的跨平台

而 .c 的跨平台原理是 .c 通过 windows compiler 编译后, 再到对应的平台上运行, .c 想在其他平台运行, 需要 .c -> 某平台的 compiler -> machine code -> 某平台的 processor 最终执行, 所以某种意义上 C 语言不是跨平台的, 但也因为这个, C 语言效率比 Java 高, 因为他通过编译器产生的可执行文件可以直接在该平台上运行不需要经过 -> 解释器 -> 编译器的两步过程

---

python 没办法 `for (int left, right; right < s.length(); right++)`

python 没有 `char` 这个类型

解决办法：

```python
left = 0
for right in range(len(s)):
    if s[right] in map:
        left = max(left, map[s[right] + 1])
```

---

python 没有 `++i` {.java}, 只能 `i += 1`{.python}

---

python 声明 int 数组:

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

8. 加载/重新加载插件

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
