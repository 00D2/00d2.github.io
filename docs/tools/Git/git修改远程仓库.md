---
author: potao1314
date: 2019-07-18
category:
  - Git
tag:
  - git
---



## git修改远程仓库地址


相信很多人遇到过现有的项目修改仓库地址的情况

有三种修改方式

1、 修改命令

```dsconfig
git remote set-url origin [url]
```

2、 先删后加

```mipsasm
git remote rm origin
git remote add origin [url]
```

3、直接修改config文件

修改后如果git pull会提示fatal: refusing to merge unrelated histories这个问题:
解决方法:

```crmsh
git pull origin master --allow-unrelated-histories
```


---
原文链接： https://segmentfault.com/a/1190000019795998

