---
icon: docker
title: docker镜像导入及导出
author: 小苹果儿
date: 2022-07-04
category:
  - Docker
tag:
  - docker
  - 容器
---

> 可用于将docker镜像下载到本地，并在未连接互联网的节点上进行恢复。

## 下载镜像

在一台可以联网并执行docker pull的设备上，将所需的镜像下载至本地。

```shell
docker pull xx
```

## 查看下载好的镜像

```shell
docker images
```

![docker_image](https://img.jinguo.tk:8443/d/docker_images.png)

## 将下载好的镜像导出为tar文件

通过如下命令，将下载好的镜像保存为tar文件。

```shell
docker save star7th/showdoc:2.10.4 > showdoc.2.10.4.tar
或
docker save -o showdoc.2.10.4.tar star7th/showdoc:2.10.4
```

## 将生成的tar文件copy至目标服务器

## 在目标服务器对镜像进行加载

```shell
docker load < showdoc.2.10.4.tar
或
docker load -i showdoc.2.10.4.tar
```

![docker_image_load](https://img.jinguo.tk:8443/d/docker_image_load.png)

## 查看镜像是否加载完成

```shell
docker images
```

### 也可使用image id进行导出

> 此种方式在load后，没有repository和TAG。需要手工打标记。不建议使用。

```shell
docker save [IMAGE ID] > showdock.2.10.4.tar 
```

  ```shell
  docker load < showdoc.2.10.4.tar
  ```

通过docker tag命令进行打标签

```shell
docker tag [IMAGE ID] star7th/showdoc:2.10.4
```
