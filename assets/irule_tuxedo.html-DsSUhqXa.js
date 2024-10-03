import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as l,o as n}from"./app-2WYb0U6l.js";const e={};function t(p,s){return n(),a("div",null,s[0]||(s[0]=[l(`<div class="language-tcl line-numbers-mode" data-highlighter="shiki" data-ext="tcl" data-title="tcl" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">when CLIENT_ACCEPTED {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tttport [TCP::local_port]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        [class match </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">$tttport</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> equals class_A]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } {pool pool_A}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    elseif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        [class match </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">$tttport</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> equals class_B]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } {pool pool_B}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { pool pool_Another}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中class_A、class_B通过irule下的data_group创建； pool_A、pool_B、pool_Another定义不同的服务器。</p>`,2)]))}const r=i(e,[["render",t],["__file","irule_tuxedo.html.vue"]]),d=JSON.parse('{"path":"/network/f5/irule/irule_tuxedo.html","title":"Tuxedo中间件WSL通过f5 irules进行负载","lang":"zh-CN","frontmatter":{"icon":"f5","title":"Tuxedo中间件WSL通过f5 irules进行负载","author":"小苹果儿","date":"2022-08-26T00:00:00.000Z","category":["网络"],"tag":["f5","tuxedo","irule"]},"headers":[],"readingTime":{"minutes":0.27,"words":81},"filePathRelative":"network/f5/irule/irule_tuxedo.md","localizedDate":"2022年8月26日","excerpt":"<div class=\\"language-tcl line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"tcl\\" data-title=\\"tcl\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">when CLIENT_ACCEPTED {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    set</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> tttport [TCP::local_port]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        [class match </span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">$tttport</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> equals class_A]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    } {pool pool_A}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    elseif</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        [class match </span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">$tttport</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> equals class_B]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    } {pool pool_B}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    else</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { pool pool_Another}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};
