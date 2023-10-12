import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-305f18dd.js";const p={},o=t(`<h2 id="通过函数根据ip地址自动生成网关" tabindex="-1"><a class="header-anchor" href="#通过函数根据ip地址自动生成网关" aria-hidden="true">#</a> 通过函数根据IP地址自动生成网关</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">=</span>LEFT<span class="token punctuation">(</span>C12,FIND<span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span>,SUBSTITUTE<span class="token punctuation">(</span>C12,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;X&quot;</span>,3<span class="token punctuation">))</span>-1<span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token string">&quot;.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中C12代表IP地址所在的单元格。</p><h2 id="通过函数根据ip地址自动计算vlan" tabindex="-1"><a class="header-anchor" href="#通过函数根据ip地址自动计算vlan" aria-hidden="true">#</a> 通过函数根据IP地址自动计算VLAN</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">=</span>SUM<span class="token punctuation">(</span><span class="token number">1000</span>,SUBSTITUTE<span class="token punctuation">(</span>RIGHT<span class="token punctuation">(</span>LEFT<span class="token punctuation">(</span>C12,FIND<span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span>,SUBSTITUTE<span class="token punctuation">(</span>C12,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;X&quot;</span>,3<span class="token punctuation">))</span>-1<span class="token punctuation">)</span>,FIND<span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span>,SUBSTITUTE<span class="token punctuation">(</span>C12,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;X&quot;</span>,1<span class="token punctuation">))</span><span class="token punctuation">)</span>,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;&quot;</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中C12代表IP地址所在的单元格。</p>`,6),e=[o];function c(u,i){return s(),a("div",null,e)}const d=n(p,[["render",c],["__file","ip.html.vue"]]);export{d as default};