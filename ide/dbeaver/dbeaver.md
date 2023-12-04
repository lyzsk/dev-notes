# Bugs

## set sql encoding from cp1252 to utf-8

窗口 -> 常规 -> 工作空间 -> 文本编码 -> 其他 -> UTF-8

## connecting to mysql, Public Key Retrieval is not allowed

dbeaver 连接时报错: `Public Key Retrieval is not allowed`

解决: Edit Connection -> Driver Properties -> allowPublicKeyRetrieval = True

## Public Key Retrieval is not allowed

Edit Connection - Driver settings - Driver properties - 添加`allowPublicKeyRetrieval = true`
