# anaconda

https://repo.anaconda.com/archive/

因为 anaconda 是自带 Python 的，所以不需要自己再去下载安装 Python 了，当然，如果你已经安装了 Python 也不要紧，不会发生冲突的

anaconda 版本对应: python39 -> Anaconda3 2022.10

添加 system variables:

1. `%ANACONDA_HOME%`: C:\ProgramData\Anaconda3
2. 添加 PATH: `%ANACONDA_HOME%`, `%ANACONDA_HOME%\Scripts`, `%ANACONDA_HOME%\Library\bin`

# 下载源(channel)

切换清华源:

```
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/menpo/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
conda config --set show_channel_urls yes
```

查看配置:

`conda config --show`

基于 channel 创建基础环境

`conda create -n py39 python=3.9.13`

还原 channel:

`conda config --remove-key channels`

# 删包

```
conda remove package_name
conda remove package_name_1 package_name_2 package_name_3
conda remove --all
```

# anaconda create-active-deactive-remove enviornment

查看 python version, cmd

```bash
conda --version
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
conda list(package_name)
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

# 查看 gpu 驱动 & CUDA 版本

`nvidia-smi`(cmd && anaconda cmd 都行)

NVIDIA GPU 驱动更新查询: https://www.nvidia.cn/drivers/lookup/

NVIDIA-SMI 561.09 Driver Version: 561.09 CUDA Version: 12.6

https://pytorch.org/get-started/locally/

只有最高到 CUDA 12.4 的版本

下载 CUDA:

https://developer.nvidia.com/cuda-12-4-0-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local

检查 cuda 版本(cmd):

`nvcc -V`

下载 cudnn:

https://developer.nvidia.com/cudnn-downloads?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local

将 移动到 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.4`(默认的)

CUDA 12.4 自动添加到 PATH 了, 不需要手动设置

然后根据 https://pytorch.org/get-started/locally/ 配置安装

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
```

# 安装 jupyter notebook

`pip install jupyter notebook`
