import{_ as t,W as o,X as i,Y as e,Z as a,$ as n,a1 as l,D as r}from"./framework-f6ff4fa3.js";const c={},d=e("h1",{id:"git学习之查看config配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git学习之查看config配置","aria-hidden":"true"},"#"),a(" Git学习之查看config配置")],-1),p=e("p",null,"关注",-1),u=e("code",null,"git config",-1),h={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://git-scm.com/docs/git-config",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>config配置有3个层级：</p><ul><li>system（系统级别）</li><li>global（用户级别）</li><li>local（仓库级别）</li></ul><p>覆盖优先级为local 》 global 》 system。优先读取local，其次是global，最后是system。</p><h3 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置" aria-hidden="true">#</a> 查看配置</h3><p>读取system级别的配置：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>$ git config <span class="token operator">--</span>system <span class="token operator">--</span>list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>读取global级别的配置：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>$ git config <span class="token operator">--</span><span class="token keyword">global</span> <span class="token operator">--</span><span class="token keyword">list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>读取local级别的配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3><p>如果想修改配置的话，加上不同的参数就可以在不同的级别上配置了。</p><p>比如配置global级别的信息：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>$ git config <span class="token operator">--</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>name <span class="token string">&quot;yourusername&quot;</span>
$ git config <span class="token operator">--</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>email <span class="token string">&quot;youremail@email.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除配置" tabindex="-1"><a class="header-anchor" href="#删除配置" aria-hidden="true">#</a> 删除配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--unset</span> user.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,17),_={class:"custom-container info"},b=e("p",{class:"custom-container-title"},"版权声明",-1),f={href:"https://www.jianshu.com/u/e529b37dc57d",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),k={href:"https://www.jianshu.com/p/1ae2ff6c90de",target:"_blank",rel:"noopener noreferrer"};function x(w,y){const s=r("ExternalLinkIcon");return o(),i("div",null,[d,p,e("p",null,[a("git的配置指令是 "),u,a("。用于配置git的用户，邮箱，域名等信息。详细信息可参考"),e("a",h,[a("git-scm.com"),n(s)]),a("的"),e("a",g,[a("git-config"),n(s)]),a("。")]),m,e("div",_,[b,e("p",null,[a("本文转载于简书博主"),e("a",f,[a("RebeccaYan"),n(s)]),a("的文章。"),v,a(" 原文链接："),e("a",k,[a("https://www.jianshu.com/p/1ae2ff6c90de"),n(s)])])])])}const q=t(c,[["render",x],["__file","git的配置文件.html.vue"]]);export{q as default};
