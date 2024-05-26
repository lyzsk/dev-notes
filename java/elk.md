# ELK

elasticsearch(数据库) + logstash(日志解析处理) + kibana(数据可视化)

beat(s) -> logstash(5044) -> es(9200) -> kibana(5601)

> Note: 也可以不经过 logstash

beat 文件采集节点, logstash(1G), es(2G), kibana(1G), 至少 4G 内存

官网: https://www.elastic.co/cn/downloads

启动顺序:

1. ES
2. kibana
3. logstash
4. filebeat

# quick start

## es

1. 配置: `\elasticsearch-8.13.3\config\elasticsearch.yml`

```yml
# Allow HTTP API connections from anywhere
# Connections are encrypted and require user authentication
http.host: 127.0.0.1
```

`\elasticsearch-8.13.3\bin` 目录下 `elasticsearch.bat`

elasticsearch 中文乱码解决: 找到 es 安装目录 config 下的 `jvm.options` 文件,在空白处加上这一行：

`-Dfile.encoding=GBK`

## kibana

`\kibana-8.13.3\bin` 目录下 `kibana.bat`

## logstash

1. 修改 conf 文件 `\logstash-8.13.3\config\logstash-sample.conf`, 添加 filter, e.g.

```
input {
  beats {
    port => 5044
  }
}

filter{
    grok{
        match => {
            "message" => "(?<name>\w+)\|(?<age>\d+)"
        }
    }
}

output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
    index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"
    #user => "elastic"
    #password => "changeme"
  }
}

```

2. `\logstash-8.13.3` 目录下 cmd: `bin\logstash -f config\logstash-sample.conf`

如果不加 filter 相当于 beat -> logstash 不经过解析直接 -> es

验证 grok 正则表达式可以通过: https://grokdebugger.com/

## filebeat

1. 修改 `filebeat.yml`

```yml
filebeat.inputs:
    # Each - is an input. Most options can be set at the input level, so
    # you can use different inputs for various configurations.
    # Below are the input-specific configurations.

    # filestream is an input for collecting log messages from files.
    - type: log

      # Change to true to enable this input configuration.
      enabled: true

      # Paths that should be crawled and fetched. Glob based paths.
      paths:
          - C:\dev\1.log
```

注释掉:

```yml
# output.elasticsearch:
# Array of hosts to connect to.
#   hosts: ["localhost:9200"]

# Performance preset - one of "balanced", "throughput", "scale",
# "latency", or "custom".
#   preset: balanced
```

解开注释:

```yml
# ------------------------------ Logstash Output -------------------------------
output.logstash:
    # The Logstash hosts
    hosts: ["localhost:5044"]
```

2. filebeat 目录下 cmd: `filebeat.exe -e -c filebeat.yml`

## test

启动后在 `C:\dev` cmd:

```bash
echo "sichu|25" >> 1.log
```

# elasticsearch

es 中的:

index 相当于 database

type 相当于 table

document 相当于 一行数据
