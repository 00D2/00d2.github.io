import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.25cd8b3f.js";const e={},l=t(`<div class="language-tcl ext-tcl line-numbers-mode"><pre class="language-tcl"><code>when CLIENT_ACCEPTED <span class="token punctuation">{</span>
    <span class="token keyword">set</span> <span class="token variable">tttport</span> <span class="token punctuation">[</span>TCP::local_port<span class="token punctuation">]</span>
    <span class="token builtin">if</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>class match $<span class="token variable">tttport</span> equals class_A<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token punctuation">{</span>pool pool_A<span class="token punctuation">}</span>
    <span class="token builtin">elseif</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>class match $<span class="token variable">tttport</span> equals class_B<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token punctuation">{</span>pool pool_B<span class="token punctuation">}</span>
    <span class="token builtin">else</span> <span class="token punctuation">{</span> pool pool_Another<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2Dclass_A\u3001class_B\u901A\u8FC7irule\u4E0B\u7684data_group\u521B\u5EFA\uFF1B pool_A\u3001pool_B\u3001pool_Another\u5B9A\u4E49\u4E0D\u540C\u7684\u670D\u52A1\u5668\u3002</p>`,2),o=[l];function p(c,i){return s(),a("div",null,o)}var d=n(e,[["render",p],["__file","irule_tuxedo.html.vue"]]);export{d as default};
