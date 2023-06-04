const l=JSON.parse('{"key":"v-5715afb2","path":"/os/dns/%E6%B5%8F%E8%A7%88%E5%99%A8DNS%E7%BC%93%E5%AD%98.html","title":"浏览器对于DNS的缓存","lang":"zh-CN","frontmatter":{"index":true,"icon":"dns","title":"浏览器对于DNS的缓存","author":"小苹果儿","date":"2022-06-13T00:00:00.000Z","category":["DNS"],"tag":["dns","浏览器","缓存"]},"headers":[{"level":2,"title":"基础测试环境","slug":"基础测试环境","link":"#基础测试环境","children":[]},{"level":2,"title":"测试结论","slug":"测试结论","link":"#测试结论","children":[]},{"level":2,"title":"场景一：Chrome 59","slug":"场景一-chrome-59","link":"#场景一-chrome-59","children":[{"level":3,"title":"测试结论","slug":"测试结论-1","link":"#测试结论-1","children":[]},{"level":3,"title":"1.1 首次访问","slug":"_1-1-首次访问","link":"#_1-1-首次访问","children":[]},{"level":3,"title":"1.2 在浏览器DNS TTL超时时间内刷新或打开新的TAB","slug":"_1-2-在浏览器dns-ttl超时时间内刷新或打开新的tab","link":"#_1-2-在浏览器dns-ttl超时时间内刷新或打开新的tab","children":[]},{"level":3,"title":"1.3 浏览器DNS TTL超时，系统DNS TTL未超时，刷新或打开新的TAB","slug":"_1-3-浏览器dns-ttl超时-系统dns-ttl未超时-刷新或打开新的tab","link":"#_1-3-浏览器dns-ttl超时-系统dns-ttl未超时-刷新或打开新的tab","children":[]},{"level":3,"title":"1.4 浏览器及系统DNS TTL均超时，刷新或打开新的TAB","slug":"_1-4-浏览器及系统dns-ttl均超时-刷新或打开新的tab","link":"#_1-4-浏览器及系统dns-ttl均超时-刷新或打开新的tab","children":[]}]},{"level":2,"title":"场景二 Chrome 69","slug":"场景二-chrome-69","link":"#场景二-chrome-69","children":[{"level":3,"title":"测试结论","slug":"测试结论-2","link":"#测试结论-2","children":[]},{"level":3,"title":"2.1 首次访问","slug":"_2-1-首次访问","link":"#_2-1-首次访问","children":[]},{"level":3,"title":"2.2 在浏览器DNS TTL超时时间内刷新或打开新的TAB","slug":"_2-2-在浏览器dns-ttl超时时间内刷新或打开新的tab","link":"#_2-2-在浏览器dns-ttl超时时间内刷新或打开新的tab","children":[]},{"level":3,"title":"2.3 浏览器TTL超时，刷新或打开新的TAB","slug":"_2-3-浏览器ttl超时-刷新或打开新的tab","link":"#_2-3-浏览器ttl超时-刷新或打开新的tab","children":[]}]},{"level":2,"title":"场景三 IE8","slug":"场景三-ie8","link":"#场景三-ie8","children":[{"level":3,"title":"测试结论","slug":"测试结论-3","link":"#测试结论-3","children":[]},{"level":3,"title":"说明","slug":"说明","link":"#说明","children":[]}]},{"level":2,"title":"3.1 首次访问","slug":"_3-1-首次访问","link":"#_3-1-首次访问","children":[{"level":3,"title":"3.2 在30首次请求后的30分钟内刷新或打开新的TAB","slug":"_3-2-在30首次请求后的30分钟内刷新或打开新的tab","link":"#_3-2-在30首次请求后的30分钟内刷新或打开新的tab","children":[]}]},{"level":2,"title":"场景四 IE11","slug":"场景四-ie11","link":"#场景四-ie11","children":[]},{"level":2,"title":"待测试项目","slug":"待测试项目","link":"#待测试项目","children":[]}],"git":{"createdTime":1655253854000,"updatedTime":1685880347000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":4}]},"readingTime":{"minutes":9.19,"words":2756},"filePathRelative":"os/dns/浏览器DNS缓存.md","localizedDate":"2022年6月13日","excerpt":"<h2> 基础测试环境</h2>\\n<ul>\\n<li>\\n<p>操作系统</p>\\n<ul>\\n<li>Windows 7</li>\\n</ul>\\n</li>\\n<li>\\n<p>抓包工具</p>\\n<ul>\\n<li>Wireshark</li>\\n</ul>\\n</li>\\n<li>\\n<p>浏览器</p>\\n<ul>\\n<li>IE8</li>\\n<li>Chrome59</li>\\n<li>Chrome69</li>\\n</ul>\\n</li>\\n<li>\\n<p>DNS服务器配置</p>\\n<ul>\\n<li>根据不同场景，调整NS、A等记录的TTL值</li>\\n</ul>\\n</li>\\n</ul>\\n<p>备注：</p>\\n<blockquote>\\n<p>每次新场景测试前，均清除缓存。</p>\\n<ul>\\n<li>关闭浏览器，清除缓存</li>\\n<li>使用ipconfig /flushdns清除系统DNS缓存</li>\\n<li>通过ipconfig /displaydns确认系统当前无相关DNS缓存记录</li>\\n</ul>\\n</blockquote>"}');export{l as data};
