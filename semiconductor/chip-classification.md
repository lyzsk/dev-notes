# chip classification

## by functionality

1. Logic chips

以二进制为原理, 实现运算与逻辑判断功能的集成电路

e.g. CPU, GPU, NPU (neural processing units), etc.

2. Memory chips

-   volatile memory

    e.g. DRAM (Dynamic Random Access Memory, 动态随机存取存储器, 其实就是运行内存)

-   non-volatile memory

    e.g. NAND Flash (Not AND Flash Memory, 计算机闪存, 其实就是存储内存)

3. application-specific integrated chips (ASICs)

single-purpose chips used for performing repetitive processing routines such as scanning a barcode

4. system-on-a-chip devices (SoCs)

a relatively new type of chip that combines many chips and circuits in a single chip and may integrate things such as graphics, audio, camera, video and Wi-Fi.

### logic chips vs memory chips

Memory chips store and retrieve data, preserving critical information for analysis

logic chips process data, execute instructions, and make essential decisions to guarantee precision and reliability in measurements.

## by type of integrated circuitry

# DRAM

DRAM 使用电容存储, 必须每隔一段时间刷新依次, 如果存储单元没有被刷新, 存储的信息就会丢失

# NAND Flash

内部存储是 MOSFET, 里面有个 Floating Gate, 是真正存储数据的单元, 数据再 Flash 内存单元中是以 electrical charge 形式存储
. 存储电荷的多少, 取决于 external gate 所被施加的电压. 根据阈值电压 Vth, 若大于则表示 1, 小于则表示 0
