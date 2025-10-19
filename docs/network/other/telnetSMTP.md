---
icon: mail
title: 通过telnet验证SMTP协议发送邮件
author: 犄角蛙
date: 2025-09-09
category:
  - 网络
tag:
  - SMTP
---





```shell
root@racknerd-b6617e:~# telnet 163mx01.mxmail.netease.com 25
Trying 111.124.203.43...
Connected to 163mx01.mxmail.netease.com.
Escape character is '^]'.
220 163mx01.mxmail.netease.com ESMTP Mail
helo 163mx01.mxmail.netease.com
250 163mx01.mxmail.netease.com
auth login
334 VXNlcm5hbWU6
MDAdadfafdafdafdfefeafdaQ==
334 UGFzc3dvcmQ6
UXdafafdafadzQl
235 2.7.0 Authentication successful
MAIL FROM:test@163.com
250 2.1.0 Ok
RCPT to:shijg@sino-bridge.com
250 2.1.5 Ok
DATA
354 End data with <CR><LF>.<CR><LF>
Subject: Hi smtp mail
hello mail
.
250 2.0.0 Ok: queued as 4cH23y0vYgz82dh
```









<https://help.cstnet.cn/zhishiku/zhishiku_liucheng_smtpml.html>
