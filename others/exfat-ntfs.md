exFAT vs NTFS

NTFS： New Technology File System

exFAT： Extended File Allocation Table File System

兼容性:

-   exFAT 支持多操作系统读取和写入, NTFS 默认 Windows, 非 Windows 需手动安装驱动, e.g. 在 Mac 中 NTFS 仅支持读取, 安装驱动才支持读写且读写效率低

安全性:

-   NTFS 内置日志, exFAT 无日志
-   NTFS 默认加密, exFAT 需手工加密

耐久度:

-   NTFS 是日志型文件系统, 日志文件会增加额外的写入量, 对于 SD/U 盘因为会反复摩擦存储颗粒, 影响寿命, 但对于带主控和缓存的 SSD 不会有影响
