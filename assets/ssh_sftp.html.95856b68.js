import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as a}from"./app.84b9c7b3.js";const i={},c=a(`<h3 id="ssh\u53D6\u6D88key\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#ssh\u53D6\u6D88key\u9A8C\u8BC1" aria-hidden="true">#</a> SSH\u53D6\u6D88key\u9A8C\u8BC1</h3><p>ssh|sftp -o StrictHostKeyChecking=no username@ip</p><h3 id="ssh\u4E0D\u5C06\u8FDC\u7A0B\u4E3B\u673A\u516C\u94A5\u4FDD\u5B58\u81F3\u672C\u5730known-hosts\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ssh\u4E0D\u5C06\u8FDC\u7A0B\u4E3B\u673A\u516C\u94A5\u4FDD\u5B58\u81F3\u672C\u5730known-hosts\u6587\u4EF6" aria-hidden="true">#</a> SSH\u4E0D\u5C06\u8FDC\u7A0B\u4E3B\u673A\u516C\u94A5\u4FDD\u5B58\u81F3\u672C\u5730known_hosts\u6587\u4EF6</h3><p>ssh|sftp -o UserKnownHostsFile=no username@ip</p><h3 id="\u914D\u7F6E\u4F7F\u7528\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F7F\u7528\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u4F7F\u7528\u4EE3\u7406</h3><p>SSH\u662F\u5426\u8D70\u4EE3\u7406\u4F9D\u8D56\u4E8E/etc/ssh/ssh_config \u914D\u7F6E\u6587\u4EF6\uFF0CSSH\u60F3\u4F7F\u7528http\u4EE3\u7406\u901A\u5E38\u9700\u8981\u670D\u52A1\u5668\u5B89\u88C5\u6709\u7B2C\u4E09\u65B9\u8F6F\u4EF6\u5982nc\u3001corkscrew\u3002\u914D\u7F6E\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7F16\u8F91SSH\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vi</span> /etc/ssh/ssh_config  
<span class="token comment">#\u5F53Linux\u670D\u52A1\u5668\u5B89\u88C5\u6709nc\u65F6</span>
ProxyCommand <span class="token function">nc</span> -X connect -x x.x.x.x:8081 %h %p 
<span class="token comment">#\u5F53Linux\u670D\u52A1\u5668\u5B89\u88C5\u6709corkscrew\u65F6</span>
ProxyCommand corkscrew x.x.x.x <span class="token number">8081</span> %h %p
<span class="token comment">#\u914D\u7F6E\u6587\u4EF6\u4E2DHost\u53C2\u6570\u540E\u9ED8\u8BA4\u4E3A*\uFF0C\u4EE3\u8868\u5168\u90E8SSH\u8D70\u4EE3\u7406</span>
Host *

<span class="token comment">#nc7.5\u7248\u672C\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u914D\u7F6E</span>
ProxyCommand <span class="token function">nc</span> --proxy-type http --proxy x.x.x.x:8081 %h %p

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u914D\u7F6E\u90E8\u5206\u76EE\u7684ip\u8D70\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u90E8\u5206\u76EE\u7684ip\u8D70\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u90E8\u5206\u76EE\u7684IP\u8D70\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Host x.x.x.x
    ProxyCommand <span class="token function">nc</span> --proxy-type http --proxy x.x.x.x:8081 %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[c];function r(d,t){return n(),e("div",null,o)}var p=s(i,[["render",r],["__file","ssh&sftp.html.vue"]]);export{p as default};
