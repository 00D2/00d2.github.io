const e=JSON.parse('{"key":"v-0b548fd8","path":"/tools/Office/Excel/ip.html","title":"通过Excel函数整理IP地址信息","lang":"zh-CN","frontmatter":{"index":true,"icon":"office-excel","title":"通过Excel函数整理IP地址信息","author":"小苹果儿","date":"2022-12-09T00:00:00.000Z","category":["Office"],"tag":["office","excel"]},"headers":[{"level":2,"title":"通过函数根据IP地址自动生成网关","slug":"通过函数根据ip地址自动生成网关","link":"#通过函数根据ip地址自动生成网关","children":[]},{"level":2,"title":"通过函数根据IP地址自动计算VLAN","slug":"通过函数根据ip地址自动计算vlan","link":"#通过函数根据ip地址自动计算vlan","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]}]}],"git":{"createdTime":1670735215000,"updatedTime":1706172139000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":4}]},"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"tools/Office/Excel/ip.md","localizedDate":"2022年12月9日","excerpt":"<h2> 通过函数根据IP地址自动生成网关</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token operator\\">=</span>LEFT<span class=\\"token punctuation\\">(</span>C12,FIND<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"X\\"</span>,SUBSTITUTE<span class=\\"token punctuation\\">(</span>C12,<span class=\\"token string\\">\\".\\"</span>,<span class=\\"token string\\">\\"X\\"</span>,3<span class=\\"token punctuation\\">))</span>-1<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">&amp;</span><span class=\\"token string\\">\\".1\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
