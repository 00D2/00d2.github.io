---
icon: docker
title: alist
author: 小苹果儿
date: 2022-06-10
category:
  - Docker
tag:
  - docker
  - 容器
---



sudo docker run -d --restart=unless-stopped -v /etc/alist:/opt/alist/data -v /opt/test:/test -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest


