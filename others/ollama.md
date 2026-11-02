# ollama

https://ollama.com/download/windows

```powershell
[Environment]::SetEnvironmentVariable(
    "OLLAMA_MODELS",
    "D:\ollama\models",
    "User"
)
```

测试版本:

```powershell
ollama --version
ollama list
```

安装模型例子:

```powershell
ollama pull qwen3:8b
ollama run qwen3:8b
```

也可以是 `qwen3:4b`, `gemma3:4b`, `deepseek-r1:8b`

退出:

```powershell
/bye
```
