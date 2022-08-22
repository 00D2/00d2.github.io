import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.84b9c7b3.js";const t={},p=e(`<p>https://blog.csdn.net/networken/article/details/99063553 https://netplan.io/examples</p><h2 id="\u914D\u7F6E\u9759\u6001ip\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9759\u6001ip\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u9759\u6001IP\u793A\u4F8B</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">network</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[p];function c(i,o){return s(),a("div",null,l)}var d=n(t,[["render",c],["__file","modifyNetwork.html.vue"]]);export{d as default};
