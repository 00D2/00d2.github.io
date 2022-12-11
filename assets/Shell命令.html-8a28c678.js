import{_ as s,W as t,X as l,Y as e,Z as a,$ as i,a1 as r,D as d}from"./framework-f6ff4fa3.js";const o={},c=e("h2",{id:"linux命令大全",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux命令大全","aria-hidden":"true"},"#"),a(" Linux命令大全")],-1),p={href:"https://www.linuxcool.com/",target:"_blank",rel:"noopener noreferrer"},u=r(`<ul><li>echo $PATH<br> 显示PATH变量</li><li>echo $$<br> 显示当前命令窗口的进程ID</li><li>pstree -p<br> 树状显示系统进程</li><li>$PS1 用户登录后的命令提示 例如 可以修改：PS1=&#39;&#39;</li><li>命令替换 <ul><li>$()</li><li>\`\`</li><li>例：ls $(which bash)</li><li>例：ls \`which bash\`</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;please input ip addr&quot;</span> ip_mgmt
<span class="token builtin class-name">echo</span> <span class="token variable">\${ip_mgmt}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h2><h3 id="文件判断" tabindex="-1"><a class="header-anchor" href="#文件判断" aria-hidden="true">#</a> 文件判断</h3><p>test -e file_name</p><p>[ -e ] file_name</p><h3 id="数值判断" tabindex="-1"><a class="header-anchor" href="#数值判断" aria-hidden="true">#</a> 数值判断</h3><ul><li>单条件判断</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token variable">$num</span> eq<span class="token operator">|</span>gt<span class="token operator">|</span>lt<span class="token operator">|</span>ge<span class="token operator">|</span>le<span class="token operator">|</span>ne number <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>多条件判断</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$num</span> eq<span class="token operator">|</span>gt<span class="token operator">|</span>lt<span class="token operator">|</span>ge<span class="token operator">|</span>le<span class="token operator">|</span>ne number <span class="token operator">&amp;&amp;</span> <span class="token variable">$num</span> eq<span class="token operator">|</span>gt<span class="token operator">|</span>lt<span class="token operator">|</span>ge<span class="token operator">|</span>le<span class="token operator">|</span>ne number <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://c.biancheng.net/view/2751.html</p><blockquote></blockquote><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">eq</td><td style="text-align:center;">等于</td></tr><tr><td style="text-align:center;">gt</td><td style="text-align:center;">大于</td></tr><tr><td style="text-align:center;">lt</td><td style="text-align:center;">小于</td></tr><tr><td style="text-align:center;">ge</td><td style="text-align:center;">大于等于</td></tr><tr><td style="text-align:center;">le</td><td style="text-align:center;">小于等于</td></tr><tr><td style="text-align:center;">ne</td><td style="text-align:center;">不等于</td></tr></tbody></table><h3 id="字符串判断" tabindex="-1"><a class="header-anchor" href="#字符串判断" aria-hidden="true">#</a> 字符串判断</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name = xiaoguo
[ $name == xiaoguo ]
判断变量是否为xiaoguo
[ $name != xiaoguo ]
判断变量是否不为xiaoguo
[ -z $name ]
判断变量内容是否为空
[ -n $name ]
判断变量内容是否非空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多元素判断" tabindex="-1"><a class="header-anchor" href="#多元素判断" aria-hidden="true">#</a> 多元素判断</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name=xiaoguo
num=18

[ $num -gt 90 -a $num -lt 110 ]
[ \${name} == lisi -a \${num} -lt 100 ] &amp;&amp; echo true
[[ \${name} == lisi || $num -gt 100 ]]
[ \${name} == lisi -o $num -gt 100 ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function m(h,v){const n=d("ExternalLinkIcon");return t(),l("div",null,[c,e("p",null,[e("a",p,[a("Linux命令大全"),i(n)])]),u])}const g=s(o,[["render",m],["__file","Shell命令.html.vue"]]);export{g as default};
