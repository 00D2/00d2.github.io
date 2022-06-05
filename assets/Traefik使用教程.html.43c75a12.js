import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as t,c as l,a as e,b as o,d as a,e as n}from"./app.cb3ed302.js";const d={},c=a('<h1 id="traefik" tabindex="-1"><a class="header-anchor" href="#traefik" aria-hidden="true">#</a> Traefik</h1><h2 id="\u4E00\u3001\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7B80\u4ECB" aria-hidden="true">#</a> \u4E00\u3001\u7B80\u4ECB</h2><p>Traefik \u662F\u4E00\u4E2A\u4F18\u79C0\u7684\u5F00\u6E90\u8FB9\u7F18\u8DEF\u7531\u5668\uFF0C\u4E5F\u5C31\u662F\u53CD\u5411\u4EE3\u7406\u5DE5\u5177\u3002</p><p>\u76F8\u6BD4\u4E8ENginx\uFF0C\u5B83\u5177\u6709\u5982\u4E0B\u4F18\u70B9\uFF1A</p><ol><li><strong>\u81EA\u52A8\u670D\u52A1\u53D1\u73B0</strong>\uFF1A\u4F20\u7EDF\u7684\u8FB9\u7F18\u8DEF\u7531\u5668\uFF08\u6216\u53CD\u5411\u4EE3\u7406\uFF09\u9700\u8981\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5176\u4E2D\u5305\u542B\u5230\u60A8\u7684\u670D\u52A1\u7684\u6240\u6709\u53EF\u80FD\u7684\u8DEF\u7531\uFF0C\u800C Traefik \u4ECE\u670D\u52A1\u672C\u8EAB\u83B7\u53D6\u5B83\u4EEC\u3002</li><li><strong>\u539F\u751F\u517C\u5BB9\u6240\u6709\u4E3B\u8981\u96C6\u7FA4\u6280\u672F</strong>\uFF0C\u4F8B\u5982 Kubernetes\u3001Docker\u3001Docker Swarm\u3001AWS\u3001Mesos\u3001Marathon\uFF0C\u5E76\u4E14\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u591A\u4E2A\u3002</li><li>\u65E0\u9700\u7EF4\u62A4\u548C\u540C\u6B65\u5355\u72EC\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C<strong>\u81EA\u52A8\u5B9E\u65F6\u66F4\u65B0</strong>\uFF0C\u65E0\u9700\u91CD\u65B0\u542F\u52A8\uFF0C\u4E0D\u4F1A\u4E2D\u65AD\u8FDE\u63A5</li><li>\u96C6\u6210\u4E86\u6F02\u4EAE\u7684 <code>dashboard</code> \u754C\u9762</li></ol><h2 id="\u4E8C\u3001\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B89\u88C5" aria-hidden="true">#</a> \u4E8C\u3001\u5B89\u88C5</h2>',6),p=a(`<li><p>\u4E0B\u8F7D\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull traefik:v2.6.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFAtraefik\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> traefik
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2),u=a(`<p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> traefik
$ <span class="token function">vim</span> traefik.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n("\u914D\u7F6E\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5728"),m={href:"https://doc.traefik.io/traefik/getting-started/install-traefik/",target:"_blank",rel:"noopener noreferrer"},k=n("\u5B98\u7F51"),v=n("\u8FDB\u884C\u83B7\u53D6\u3002"),f=a(`<li><p>\u542F\u52A8\u7A97\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">8080</span>:8080 -p <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
  -v <span class="token environment constant">$PWD</span>/traefik.yml:/etc/traefik/traefik.yml traefik:v2.6.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function _(b,g){const s=r("ExternalLinkIcon");return t(),l("div",null,[c,e("ol",null,[p,e("li",null,[u,e("p",null,[e("em",null,[h,e("a",m,[k,o(s)]),v])])]),f])])}var $=i(d,[["render",_],["__file","Traefik\u4F7F\u7528\u6559\u7A0B.html.vue"]]);export{$ as default};
