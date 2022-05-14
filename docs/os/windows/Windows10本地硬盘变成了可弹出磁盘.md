---
index: 10
title: Windows10本地硬盘变成了可弹出磁盘
author: Regnaiq
date: 2022-05-14
category:
  - 操作系统
  - Windows
tag:
  - Windows
  - AHCI
  - 硬盘
---

# Windows 10 本地硬盘变成了可弹出磁盘



今天新装了系统, 电脑是一个SSD+HHD, 没想到装好之后右下角显示可安全删除设备, 两个硬盘在那里. 这还得了.

查了一下午, 大致知道了是什么问题. Standard SATA AHCI controller使用高性能的硬盘模式就会把硬盘看作是一个可热插拔的存储器, 所以自然就会显示可弹出.

如果你的BIOS支持关闭HotSwap或者HotPlug, 那么直接关闭就可以了.
或者你直接在BIOS里把磁盘模式改为IDE, 不过这样就发挥不好你SSD的高性能了.

还有一种解决方法, 就是手动让系统把这两个磁盘当作本地磁盘.

windows+R大概命令窗, 输入regedit打开注册表
定位到HKLM\SYSTEM\CurrentControlSet\Services\storahci\Parameters\Device, 创建多字符串参数类型(REG_MULTI_SZ)的TreatAsInternalPort, 在里面写上你硬盘的端口号.
硬盘端口号可以在设备管理器里看, 比如我的就是2和3

那么在TreatAsInternalPort里输入2和3, 注意要竖着, 而且最后一个输完要回车. 下图是一个例子, 把0,1,2,3全用了.

保存重启即可.

对于win7, 配置有略微不同, 这里不再赘述, 可以看下面的参考链接.

参考:
[Internal SSD/SATA Drive Shows as a Removable in Windows](http://woshub.com/internal-ssd-sata-drive-shows-removable/)
————————————————
版权声明：本文为CSDN博主「Regnaiq」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/yq_forever/article/details/106606053

