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

### 方法一

> 该方法对于IP地址第三段为个位数的支持有问题。

```bash
=SUM(1000,SUBSTITUTE(RIGHT(LEFT(C12,FIND("X",SUBSTITUTE(C12,".","X",3))-1),FIND("X",SUBSTITUTE(C12,".","X",1))),".",""))
```

其中C12代表IP地址所在的单元格。

### 方法二

>该方法来自于CHATGPT。可正常识别IP地址第三段个位数。
>这个公式首先使用 SUBSTITUTE 函数将每个点替换为空格，然后使用 MID 函数提取第三段的数值，最后使用 TRIM 函数去>除可能存在的空格，然后通过 + 0 将其转换为数值。这个公式适用于IPv4地址的常见格式。

```bash
=SUM(3000,(TRIM(MID(SUBSTITUTE(D42, ".", REPT(" ", LEN(D42))), (3-1)*LEN(D42)+1, LEN(D42))) + 0))
```

其中D42代表IP地址所在的单元格。


