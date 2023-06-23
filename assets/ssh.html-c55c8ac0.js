import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as a}from"./app-8a08783e.js";const i={},c=a(`<h3 id="ssh取消key验证" tabindex="-1"><a class="header-anchor" href="#ssh取消key验证" aria-hidden="true">#</a> SSH取消key验证</h3><p>ssh|sftp -o StrictHostKeyChecking=no username@ip</p><h3 id="ssh不将远程主机公钥保存至本地known-hosts文件" tabindex="-1"><a class="header-anchor" href="#ssh不将远程主机公钥保存至本地known-hosts文件" aria-hidden="true">#</a> SSH不将远程主机公钥保存至本地known_hosts文件</h3><p>ssh|sftp -o UserKnownHostsFile=/dev/null username@ip</p><h3 id="配置使用代理" tabindex="-1"><a class="header-anchor" href="#配置使用代理" aria-hidden="true">#</a> 配置使用代理</h3><p>SSH是否走代理依赖于/etc/ssh/ssh_config 配置文件，SSH想使用http代理通常需要服务器安装有第三方软件如nc、corkscrew。配置方法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#编辑SSH客户端配置文件</span>
<span class="token function">vi</span> /etc/ssh/ssh_config  
<span class="token comment">#当Linux服务器安装有nc时</span>
ProxyCommand <span class="token function">nc</span> <span class="token parameter variable">-X</span> connect <span class="token parameter variable">-x</span> x.x.x.x:8081 %h %p 
<span class="token comment">#当Linux服务器安装有corkscrew时</span>
ProxyCommand corkscrew x.x.x.x <span class="token number">8081</span> %h %p
<span class="token comment">#配置文件中Host参数后默认为*，代表全部SSH走代理</span>
Host *

<span class="token comment">#nc7.5版本使用如下命令配置</span>
ProxyCommand <span class="token function">nc</span> --proxy-type http <span class="token parameter variable">--proxy</span> x.x.x.x:8081 %h %p

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置部分目的ip走代理" tabindex="-1"><a class="header-anchor" href="#配置部分目的ip走代理" aria-hidden="true">#</a> 配置部分目的IP走代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Host x.x.x.x
    ProxyCommand <span class="token function">nc</span> --proxy-type http <span class="token parameter variable">--proxy</span> x.x.x.x:8081 %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[c];function t(o,d){return n(),e("div",null,r)}const h=s(i,[["render",t],["__file","ssh.html.vue"]]);export{h as default};
