# backend

后端部署需要 Dockerfile + jar 打包文件

## Dockerfile

```dockerfile
FROM xx.xx.xxx:xx/public/openjdk:8u312
COPY [project_package_name.jar] /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

# frontend

前端部署需要 nginx.conf + Dockerfile + dist 打包文件

## nginx.conf

```conf
include mime.types;

gzip on;
gzip min_length 1k;
gzip_ buffers 16 64k;
gzip http version 1.1;
gzip_comp_level 5;
gzip_types text/plain application/javascript application/x-javascript text/css application/xml txt/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip vary on;

server {
    listen 80;
    server_name [web_domain_name]; # without http://
    charset utf-8;

    location / {
        root /us/local/project_name_cli;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    location /index.html {
        root /usr/local/project_name_cli;
    }
    location /prod-api/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://harbor_backend_name:backend_port/;
    }

    error_page 500 502 503 504 /50x,html;
    location = /50x.html {
        root html;
    }

}
```

## Dockerfile

```dockerfile
FROM xxx

ENV RUN_USR nginx
ENV RUN_GROUP nginx
ENV DATA_DIR /usr/local/project_name_cli

RUN mkdir -p /usr/local/project_name_cli

COPY ./dist/ /usr/local/project_name_cli
COPY .nginx.conf /etc/nginx/conf.d

EXPOSE [frontend_port]

CMD ["nginx", "-g", "daemon off;"]
```

## WindTerm 跳板机

从本地 docker 镜像打包, push 到远程 docker 服务器

```bash
docker build -f Dockerfile -t xx.xx.xxx:xx/[harbor_dirname1]/[harbor_dirname2]:[docker_image_version/tag]

docker push xx.xx.xxx:xx/[harbor_dirname1]/[harbor_dirname2]:[docker_image_version/tag]
```

可以通过 `docker images` 查看 镜像的 version/tag

在 harbor 已经有镜像的情况下可以删除本地镜像节省空间: `docker system prune -a`
