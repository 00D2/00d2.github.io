---
author: potao1314
link: https://segmentfault.com/a/1190000019795998
date: 2019-07-18
---



# [git修改远程仓库地址](https://segmentfault.com/a/1190000019795998)

[![img](https://avatar-static.segmentfault.com/156/834/1568341488-574d2781d6662_huge128)**potato1314**](https://segmentfault.com/u/potato1314)发布于 2019-07-18

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



**本文档转载至[potato1314](https://segmentfault.com/a/1190000019795998)**

