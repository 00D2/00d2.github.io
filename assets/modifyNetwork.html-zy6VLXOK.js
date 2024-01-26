import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-LWYGXS8F.js";const t={},p=e(`<h2 id="配置静态ip示例" tabindex="-1"><a class="header-anchor" href="#配置静态ip示例" aria-hidden="true">#</a> 配置静态IP示例</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">network</span><span class="token punctuation">:</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">renderer</span><span class="token punctuation">:</span> networkd
  <span class="token key atrule">ethernets</span><span class="token punctuation">:</span>
    <span class="token key atrule">enp3s0</span><span class="token punctuation">:</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 10.10.10.2/24
      <span class="token key atrule">nameservers</span><span class="token punctuation">:</span>
        <span class="token key atrule">search</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>mydomain<span class="token punctuation">,</span> otherdomain<span class="token punctuation">]</span>
        <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>10.10.10.1<span class="token punctuation">,</span> 1.1.1.1<span class="token punctuation">]</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> default
          <span class="token key atrule">via</span><span class="token punctuation">:</span> 10.10.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>https://blog.csdn.net/networken/article/details/99063553 https://netplan.io/examples</p></div>`,3),l=[p];function i(c,o){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","modifyNetwork.html.vue"]]);export{d as default};
