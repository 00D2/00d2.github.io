import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as n}from"./app-8slKAdA5.js";const i={},r=n(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum grouplist

yum groupinstall <span class="token string">&#39;xxx&#39;</span>

yum info software name

yum list <span class="token operator">|</span> <span class="token function">grep</span> software name

yum search software name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum repolist</p><p>yum clean all</p><p>yum makecache</p><p>yum history</p><p>yum provides command</p><p>查找服务文件</p><p>rpm -ql software | grep service</p><h3 id="repo文件编写" tabindex="-1"><a class="header-anchor" href="#repo文件编写"><span>repo文件编写</span></a></h3><blockquote><p>[BaseOS] name=Qcloud-$releasever - BaseOS baseurl=http://mirrors.tencentyun.com/centos/$releasever/BaseOS/$basearch/os/ enabled=1 gpgcheck=1 gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Qcloud-8</p></blockquote><p>导入gpgkey</p><ol><li>在repo配置文件中指定</li><li>通过rpm --import x导入</li><li>通过编辑vim /etc/yum.conf将全局gpgkey的校验关闭</li></ol><p>yum-config-manager</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum-config-manager --add-repo<span class="token punctuation">\\</span>&#39; &#39;<span class="token operator">|</span><span class="token operator">=</span> url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yum-dnf-rpm的比较" tabindex="-1"><a class="header-anchor" href="#yum-dnf-rpm的比较"><span>YUM|DNF|RPM的比较</span></a></h2><p>https://www.redhat.com/sysadmin/how-manage-packages</p>`,16),t=[r];function l(o,p){return a(),s("div",null,t)}const d=e(i,[["render",l],["__file","YUM.html.vue"]]),u=JSON.parse(`{"path":"/os/linux/YUM.html","title":"YUM软件包管理器","lang":"zh-CN","frontmatter":{"title":"YUM软件包管理器","author":"小苹果儿","date":"2022-06-06T00:00:00.000Z","category":["软件包管理","Linux"],"tag":["yum"]},"headers":[{"level":3,"title":"repo文件编写","slug":"repo文件编写","link":"#repo文件编写","children":[]},{"level":2,"title":"YUM|DNF|RPM的比较","slug":"yum-dnf-rpm的比较","link":"#yum-dnf-rpm的比较","children":[]}],"git":{"createdTime":1654527613000,"updatedTime":1696512490000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":3}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"os/linux/YUM.md","localizedDate":"2022年6月6日","excerpt":"<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum grouplist\\n\\nyum groupinstall <span class=\\"token string\\">'xxx'</span>\\n\\nyum info software name\\n\\nyum list <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> software name\\n\\nyum search software name\\n</code></pre></div>"}`);export{d as comp,u as data};
