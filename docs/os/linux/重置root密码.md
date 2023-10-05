---
icon: linux
author:
title: RHEL8重置root密码
date: 2022-05-14
category:
  - Linux
  - 红帽
tag:
  - linux
  - 红帽
---


1. 重启系统

2. 按`e`中断启动加载程序
   
3. 光标移动至linux行，`ctrl+e`跳转至末尾
   写入**`rd.break console=tty0`**,输入`ctrl+x`启动系统

4. 重新挂载根文件系统
   mount -o remount,rw /sysroot

5. 切换至系统根文件系统 
   chroot /sysroot

6. 使用passwd设置root账户密码
   echo new_password|passwd --stdin root

7. 设定SElinux重置标签

   （如果SELinux是关闭的，就不需要touch）
   touch /.autorelabel
   sync手动同步

8. 执行两次`ctrl+d`，`ctrl+d`