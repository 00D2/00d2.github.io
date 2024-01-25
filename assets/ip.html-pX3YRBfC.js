import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-I4QFhQpP.js";const p={},o=t(`<h2 id="通过函数根据ip地址自动生成网关" tabindex="-1"><a class="header-anchor" href="#通过函数根据ip地址自动生成网关" aria-hidden="true">#</a> 通过函数根据IP地址自动生成网关</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">=</span>LEFT<span class="token punctuation">(</span>C12,FIND<span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span>,SUBSTITUTE<span class="token punctuation">(</span>C12,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;X&quot;</span>,3<span class="token punctuation">))</span>-1<span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token string">&quot;.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中C12代表IP地址所在的单元格。</p><h2 id="通过函数根据ip地址自动计算vlan" tabindex="-1"><a class="header-anchor" href="#通过函数根据ip地址自动计算vlan" aria-hidden="true">#</a> 通过函数根据IP地址自动计算VLAN</h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><blockquote><p>该方法对于IP地址第三段为个位数的支持有问题。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">=</span>SUM<span class="token punctuation">(</span><span class="token number">1000</span>,SUBSTITUTE<span class="token punctuation">(</span>RIGHT<span class="token punctuation">(</span>LEFT<span class="token punctuation">(</span>C12,FIND<span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span>,SUBSTITUTE<span class="token punctuation">(</span>C12,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;X&quot;</span>,3<span class="token punctuation">))</span>-1<span class="token punctuation">)</span>,FIND<span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span>,SUBSTITUTE<span class="token punctuation">(</span>C12,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;X&quot;</span>,1<span class="token punctuation">))</span><span class="token punctuation">)</span>,<span class="token string">&quot;.&quot;</span>,<span class="token string">&quot;&quot;</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中C12代表IP地址所在的单元格。</p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><blockquote><p>该方法来自于CHATGPT。可正常识别IP地址第三段个位数。 这个公式首先使用 SUBSTITUTE 函数将每个点替换为空格，然后使用 MID 函数提取第三段的数值，最后使用 TRIM 函数去&gt;除可能存在的空格，然后通过 + 0 将其转换为数值。这个公式适用于IPv4地址的常见格式。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">=</span>SUM<span class="token punctuation">(</span><span class="token number">3000</span>,<span class="token punctuation">(</span>TRIM<span class="token punctuation">(</span>MID<span class="token punctuation">(</span>SUBSTITUTE<span class="token punctuation">(</span>D42, <span class="token string">&quot;.&quot;</span>, REPT<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span>, LEN<span class="token punctuation">(</span>D42<span class="token punctuation">))</span><span class="token punctuation">)</span>, <span class="token punctuation">(</span><span class="token number">3</span>-1<span class="token punctuation">)</span>*LEN<span class="token punctuation">(</span>D42<span class="token punctuation">)</span>+1, LEN<span class="token punctuation">(</span>D42<span class="token punctuation">))</span><span class="token punctuation">)</span> + <span class="token number">0</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中D42代表IP地址所在的单元格。</p>`,12),e=[o];function c(u,i){return s(),a("div",null,e)}const d=n(p,[["render",c],["__file","ip.html.vue"]]);export{d as default};
