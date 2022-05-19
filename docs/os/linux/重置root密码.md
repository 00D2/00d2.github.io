---
index: 21
icon: password
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

## RHEL8重置root密码

1. 重启系统

2. 中断启动加载程序计时，移动光标至启动项
   键入编辑启动项

3. 光标移动至linux行末尾
   写入rd.break console=tty0,输入ctrl+x启动系统

4. 重新挂载根文件系统
   mount -o remount,rw /sysroot

5. 切换至系统根文件系统 
   chroot /sysroot

6. 使用passwd设置root账户密码，或修复文件系统问题
   （建议使用：echo new_password|passwd --stdin root）

7. 设定SElinux重置标签

   （如果SELinux是关闭的，就不需要touch）
   touch /.autorelabel
   sync手动同步（可选）

8. 执行两次exit（ctrl+D,ctrl+D）