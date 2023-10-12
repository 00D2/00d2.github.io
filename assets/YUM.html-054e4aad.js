import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as n}from"./app-305f18dd.js";const r={},i=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum grouplist

yum groupinstall <span class="token string">&#39;xxx&#39;</span>

yum info software name

yum list <span class="token operator">|</span> <span class="token function">grep</span> software name

yum search software name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum repolist</p><p>yum clean all</p><p>yum makecache</p><p>yum history</p><p>yum provides command</p><p>查找服务文件</p><p>rpm -ql software | grep service</p><h3 id="repo文件编写" tabindex="-1"><a class="header-anchor" href="#repo文件编写" aria-hidden="true">#</a> repo文件编写</h3><blockquote><p>[BaseOS] name=Qcloud-$releasever - BaseOS baseurl=http://mirrors.tencentyun.com/centos/$releasever/BaseOS/$basearch/os/ enabled=1 gpgcheck=1 gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Qcloud-8</p></blockquote><p>导入gpgkey</p><ol><li>在repo配置文件中指定</li><li>通过rpm --import x导入</li><li>通过编辑vim /etc/yum.conf将全局gpgkey的校验关闭</li></ol><p>yum-config-manager</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager --add-repo<span class="token punctuation">\\</span>&#39; &#39;<span class="token operator">|</span><span class="token operator">=</span> url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yum-dnf-rpm的比较" tabindex="-1"><a class="header-anchor" href="#yum-dnf-rpm的比较" aria-hidden="true">#</a> YUM|DNF|RPM的比较</h2><p>https://www.redhat.com/sysadmin/how-manage-packages</p>`,16),l=[i];function o(p,c){return a(),s("div",null,l)}const m=e(r,[["render",o],["__file","YUM.html.vue"]]);export{m as default};
