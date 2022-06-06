import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as n}from"./app.8ee7e2d4.js";const i={},r=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum grouplist

yum groupinstall <span class="token string">&#39;xxx&#39;</span>

yum info software name

yum list <span class="token operator">|</span> <span class="token function">grep</span> software name

yum search software name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum repolist</p><p>yum clean all</p><p>yum makecache</p><p>yum history</p><p>yum provides command</p><p>\u67E5\u627E\u670D\u52A1\u6587\u4EF6</p><p>rpm -ql software | grep service</p><h3 id="repo\u6587\u4EF6\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#repo\u6587\u4EF6\u7F16\u5199" aria-hidden="true">#</a> repo\u6587\u4EF6\u7F16\u5199</h3><blockquote><p>[BaseOS] name=Qcloud-$releasever - BaseOS baseurl=http://mirrors.tencentyun.com/centos/$releasever/BaseOS/$basearch/os/ enabled=1 gpgcheck=1 gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Qcloud-8</p></blockquote><p>\u5BFC\u5165gpgkey</p><ol><li>\u5728repo\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A</li><li>\u901A\u8FC7rpm --import x\u5BFC\u5165</li><li>\u901A\u8FC7\u7F16\u8F91vim /etc/yum.conf\u5C06\u5168\u5C40gpgkey\u7684\u6821\u9A8C\u5173\u95ED</li></ol><p>yum-config-manager</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum-config-manager --add-repo<span class="token punctuation">\\</span>&#39; &#39;<span class="token operator">|</span><span class="token operator">=</span> url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),l=[r];function o(c,p){return s(),a("div",null,l)}var m=e(i,[["render",o],["__file","YUM.html.vue"]]);export{m as default};
