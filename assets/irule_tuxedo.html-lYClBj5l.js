import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-oi_f_tKP.js";const e={},l=t(`<div class="language-tcl line-numbers-mode" data-ext="tcl"><pre class="language-tcl"><code>when CLIENT_ACCEPTED <span class="token punctuation">{</span>
    <span class="token keyword">set</span> <span class="token variable">tttport</span> <span class="token punctuation">[</span>TCP::local_port<span class="token punctuation">]</span>
    <span class="token builtin">if</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>class match $<span class="token variable">tttport</span> equals class_A<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token punctuation">{</span>pool pool_A<span class="token punctuation">}</span>
    <span class="token builtin">elseif</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>class match $<span class="token variable">tttport</span> equals class_B<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token punctuation">{</span>pool pool_B<span class="token punctuation">}</span>
    <span class="token builtin">else</span> <span class="token punctuation">{</span> pool pool_Another<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中class_A、class_B通过irule下的data_group创建； pool_A、pool_B、pool_Another定义不同的服务器。</p>`,2),o=[l];function p(c,i){return s(),a("div",null,o)}const d=n(e,[["render",p],["__file","irule_tuxedo.html.vue"]]);export{d as default};
