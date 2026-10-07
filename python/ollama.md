# ollama

## 常用命令

`ollama --version`

`ollama help`

手动启动 API 服务 (默认端口 11434):

`ollama serve`

查看模型:

`ollama pull <model>`

`ollama list`

`ollama show <model>`

删除:

`ollama rm <model>`

启动交互式对话:

`ollama run <model>`

`ollama run <model> "prompt"`

查看当前加载到内存 / 显存中的模型:

`ollama ps`

## 和虚拟环境区别

|      | .venv(项目内部)                                 | ollama(`%USERPROFILE%\.ollama\models`)                    |
| :--: | :---------------------------------------------- | :-------------------------------------------------------- |
| 形态 | py 进程直接加载, 脚本用的时候加载, 停的时候释放 | 独立常驻服务 (localhost:11434, API 调用), 按需加载 / 卸载 |
