import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as o,a as n,b as a,d as e,e as c}from"./app--hyDAsmK.js";const p={},u=c(`<h1 id="wireguard" tabindex="-1"><a class="header-anchor" href="#wireguard" aria-hidden="true">#</a> wireguard</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">wireguard</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/wireguard
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> wireguard
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> NET_ADMIN
      <span class="token punctuation">-</span> SYS_MODULE <span class="token comment">#optional</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> SERVERURL=xxx
      <span class="token punctuation">-</span> SERVERPORT=51820 <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> PEERS=2 <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> PEERDNS=8.8.8.8 <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> INTERNAL_SUBNET=10.13.13.0 <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> ALLOWEDIPS=192.168.168.0/24 <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> PERSISTENTKEEPALIVE_PEERS= <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> LOG_CONFS=true <span class="token comment">#optional</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /opt/wireguard/appdata/config<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /lib/modules<span class="token punctuation">:</span>/lib/modules <span class="token comment">#optional</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 51820<span class="token punctuation">:</span>51820/udp
    <span class="token key atrule">sysctls</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> net.ipv4.conf.all.src_valid_mark=1
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"参考链接",-1),v={href:"https://www.wireguard.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/linuxserver/docker-wireguard",target:"_blank",rel:"noopener noreferrer"};function m(b,_){const s=i("ExternalLinkIcon");return l(),o("div",null,[u,n("div",r,[d,n("ol",null,[n("li",null,[n("a",v,[a("https://www.wireguard.com/"),e(s)])]),n("li",null,[n("a",k,[a("https://github.com/linuxserver/docker-wireguard"),e(s)])])])])])}const E=t(p,[["render",m],["__file","wireGuard.html.vue"]]);export{E as default};
