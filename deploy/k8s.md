通过 yml 部署注意对其!!!

# backend

后端部署需要两个: Service + Deployment

```yml
kind: Deployment
apiVersion: apps/v1
metadata:
    namespace: [k8s_namespace]
    name: [k8s_name]
    labels:
    app: [k8s_name]-deploy
spec:
    selector:
        matchLabels:
            app: [k8s_name]-pod
        replicas: 1
        template:
            metadata:
                labels:
                    app: [k8s_name]-pod
            spec:
                containers:
                    - name: [k8s_name]
                      image: xx.xx.xxx:xx/[harbor_dirname]/[harbor_imagename]:[version/tag]
                      ports:
                        - containerPort: [backend_port]
                      env:
                        - name: TZ
                          value: Asia/Shanghai
                          imagePullSecrets: harbor

---
kind: Service
apiVersion: v1
metadata:
    namespace: [k8s_namespace]
    name: [k8s_name]
    labels:
    app: [k8s_name]-service
spec:
    selector:
        app: [k8s_name]-pod
    type: NodePort
    ports:
        - nodePort: 30080
          protocol: TCP
          port: [backend_port]
          targetPort: [backend_Port]
```

# frontend

前端需要三个: Service + Deployment + IngressRoute

```yml
kind: Service
apiVersion: v1
metadata:
    name: [project_k8s_name]
    namespace: [project_k8s_namespace]
    labels:
        app: [project_k8s_name]-pod
spec:
    selector:
        app: [project_k8s_name]-pod
    type: Cluster IP
    ports:
        - port: [frontend_port]
          protocol: TCP
          targetPort: [frontend_port]

---
kind: Deployment
apiVersion: apps/v1
metadata:
    name: [project_k8s_name]
    namespace: [project_k8s_namespace]
    labels:
        app: [project_k8s_name]-pod
spec:
    selector:
        matchLabels:
            app: [project_k8s_name]-pod
        replicas: 1
        template:
            metadata:
                labels:
                app: [project_k8s_name]-pod
            spec:
                containers:
                    - name: nginx
                      image: XX.XX.XXX:XX/[harbor_dirname]/[harbor_docker_image_name]:[version/tag]
                      ports:
                        - containerPort: [frontend_port]
                imagePullSecrets:
                    - name: harbor

---
kind: IngressRoute
apiVersion: traefik.containo.us/v1alpha1
metadata:
    name: [project_k8s_name]-http
    namespace: [project_k8s_namespace]
spec:
    entryPoints:
        - web
    routes:
        - kind: Rule
          match: Host('[web_domain_name]') # without http://
          services:
            - name: [project_k8s_name]
              port: [frontend_port]
```
