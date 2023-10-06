---
icon: f5
title: Tuxedo中间件WSL通过f5 irules进行负载
author: 小苹果儿
date: 2022-08-26
category:
  - 网络
tag:
  - f5
  - tuxedo
  - irule
---

```tcl
when CLIENT_ACCEPTED {
    set tttport [TCP::local_port]
    if {
        [class match $tttport equals class_A]
    } {pool pool_A}
    elseif {
        [class match $tttport equals class_B]
    } {pool pool_B}
    else { pool pool_Another}
}
```

其中class_A、class_B通过irule下的data_group创建；
pool_A、pool_B、pool_Another定义不同的服务器。
