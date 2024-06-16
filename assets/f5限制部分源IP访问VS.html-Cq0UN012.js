import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as i,a}from"./app-Cek8pqjJ.js";const l={},n=a(`<h2 id="通过irules实现" tabindex="-1"><a class="header-anchor" href="#通过irules实现"><span>通过irules实现</span></a></h2><h3 id="创建data-group" tabindex="-1"><a class="header-anchor" href="#创建data-group"><span>创建data group</span></a></h3><p><code>local traffic</code> - <code>iRules</code> - <code>Data Group List</code> - <code>新建</code></p><blockquote><p>Name: <code>test</code><br> Type：Address<br> x.x.x.x/y</p></blockquote><p>Finished。</p><h3 id="创建irules" tabindex="-1"><a class="header-anchor" href="#创建irules"><span>创建irules</span></a></h3><div class="language-tcl line-numbers-mode" data-highlighter="shiki" data-ext="tcl" data-title="tcl" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">when CLIENT_ACCEPTED {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { [matchclass [IP::client_addr] equals data_group_name] } {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  drop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在vs下调用" tabindex="-1"><a class="header-anchor" href="#在vs下调用"><span>在VS下调用</span></a></h3><h2 id="通过packet-filters实现" tabindex="-1"><a class="header-anchor" href="#通过packet-filters实现"><span>通过packet filters实现</span></a></h2><h3 id="创建rule" tabindex="-1"><a class="header-anchor" href="#创建rule"><span>创建rule</span></a></h3><p><code>Network</code> - <code>Packet Filters</code> - <code>Rules</code> - <code>新建</code></p><blockquote><p>Name :<br> Order:<br> Action : reject<br> VLAN/Tunnel :<br> Source Hosts and Networks : <code>Restrict to any in list</code> - 添加相应的地址段<br> Destination Hosts and Networks : <code>Restrict to any in list</code> - 添加相应的VS地址<br> Destination Port : <code>Restrict to any in list</code> - 添加相应的VS端口<br> Finished。</p></blockquote><h3 id="启用packet-filters" tabindex="-1"><a class="header-anchor" href="#启用packet-filters"><span>启用Packet Filters</span></a></h3><p><code>Network</code> - <code>Packet Filters</code> - <code>General</code> - <code>Packet Filtering</code> 选择<code>Enabled</code></p><p>并确认<code>Unhandled Packet Action</code>是<code>Accept</code>。</p>`,15),t=[n];function d(r,c){return i(),s("div",null,t)}const o=e(l,[["render",d],["__file","f5限制部分源IP访问VS.html.vue"]]),k=JSON.parse('{"path":"/network/f5/f5%E9%99%90%E5%88%B6%E9%83%A8%E5%88%86%E6%BA%90IP%E8%AE%BF%E9%97%AEVS.html","title":"f5限制部分源IP访问VS业务","lang":"zh-CN","frontmatter":{"icon":"f5","title":"f5限制部分源IP访问VS业务","author":"小苹果儿","date":"2022-06-09T00:00:00.000Z","category":["网络"],"tag":["f5","源地址限制"]},"headers":[{"level":2,"title":"通过irules实现","slug":"通过irules实现","link":"#通过irules实现","children":[{"level":3,"title":"创建data group","slug":"创建data-group","link":"#创建data-group","children":[]},{"level":3,"title":"创建irules","slug":"创建irules","link":"#创建irules","children":[]},{"level":3,"title":"在VS下调用","slug":"在vs下调用","link":"#在vs下调用","children":[]}]},{"level":2,"title":"通过packet filters实现","slug":"通过packet-filters实现","link":"#通过packet-filters实现","children":[{"level":3,"title":"创建rule","slug":"创建rule","link":"#创建rule","children":[]},{"level":3,"title":"启用Packet Filters","slug":"启用packet-filters","link":"#启用packet-filters","children":[]}]}],"git":{"createdTime":1654868607000,"updatedTime":1696575081000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":2}]},"readingTime":{"minutes":0.56,"words":168},"filePathRelative":"network/f5/f5限制部分源IP访问VS.md","localizedDate":"2022年6月9日","excerpt":"<h2>通过irules实现</h2>\\n<h3>创建data group</h3>\\n<p><code>local traffic</code> - <code>iRules</code> - <code>Data Group List</code> - <code>新建</code></p>\\n<blockquote>\\n<p>Name: <code>test</code><br>\\nType：Address<br>\\nx.x.x.x/y</p>\\n</blockquote>\\n<p>Finished。</p>\\n<h3>创建irules</h3>\\n<div class=\\"language-tcl line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"tcl\\" data-title=\\"tcl\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">when CLIENT_ACCEPTED {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">      if</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { [matchclass [IP::client_addr] equals data_group_name] } {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  drop</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> else</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">                return</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,k as data};
