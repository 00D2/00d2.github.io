---
index: 121
icon: shell
author: 小苹果儿
title: Linux Shell命令
date: 2022-05-14
category:
  - 操作系统
  - Linux
tag:
  - linux
  - shell
---
# Linux Shell命令

- echo $PATH  
  显示PATH变量
- echo $$  
  显示当前命令窗口的进程ID
- pstree -p  
  树状显示系统进程
- $PS1
  用户登录后的命令提示
  例如
  可以修改：PS1=''
- 命令替换
  - $()
  - ``
  - 例：ls $(which bash)
  - 例：ls \`which bash`

