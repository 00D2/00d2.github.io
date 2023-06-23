---
index: true
icon: office-excel
title: 通过Excel函数整理IP地址信息
author: 小苹果儿
date: 2022-12-09
category:
  - Office
tag:
  - office
  - excel
---

## 通过函数根据IP地址自动生成网关

```bash
=LEFT(C12,FIND("X",SUBSTITUTE(C12,".","X",3))-1)&".1"
```

其中C12代表IP地址所在的单元格。

## 通过函数根据IP地址自动计算VLAN

```bash
=SUM(1000,SUBSTITUTE(RIGHT(LEFT(C12,FIND("X",SUBSTITUTE(C12,".","X",3))-1),FIND("X",SUBSTITUTE(C12,".","X",1))),".",""))
```

其中C12代表IP地址所在的单元格。
