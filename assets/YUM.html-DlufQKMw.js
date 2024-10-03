import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-2WYb0U6l.js";const l={};function h(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grouplist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> groupinstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> software</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> software</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> software</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yum repolist</p><p>yum clean all</p><p>yum makecache</p><p>yum history</p><p>yum provides command</p><p>查找服务文件</p><p>rpm -ql software | grep service</p><h3 id="repo文件编写" tabindex="-1"><a class="header-anchor" href="#repo文件编写"><span>repo文件编写</span></a></h3><blockquote><p>[BaseOS] name=Qcloud-$releasever - BaseOS baseurl=http://mirrors.tencentyun.com/centos/$releasever/BaseOS/$basearch/os/ enabled=1 gpgcheck=1 gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Qcloud-8</p></blockquote><p>导入gpgkey</p><ol><li>在repo配置文件中指定</li><li>通过rpm --import x导入</li><li>通过编辑vim /etc/yum.conf将全局gpgkey的校验关闭</li></ol><p>yum-config-manager</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum-config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-repo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;|= url</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="yum-dnf-rpm的比较" tabindex="-1"><a class="header-anchor" href="#yum-dnf-rpm的比较"><span>YUM|DNF|RPM的比较</span></a></h2><p>https://www.redhat.com/sysadmin/how-manage-packages</p>`,16)]))}const k=i(l,[["render",h],["__file","YUM.html.vue"]]),d=JSON.parse(`{"path":"/os/linux/YUM.html","title":"YUM软件包管理器","lang":"zh-CN","frontmatter":{"title":"YUM软件包管理器","author":"小苹果儿","date":"2022-06-06T00:00:00.000Z","category":["软件包管理","Linux"],"tag":["yum"]},"headers":[{"level":3,"title":"repo文件编写","slug":"repo文件编写","link":"#repo文件编写","children":[]},{"level":2,"title":"YUM|DNF|RPM的比较","slug":"yum-dnf-rpm的比较","link":"#yum-dnf-rpm的比较","children":[]}],"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"os/linux/YUM.md","localizedDate":"2022年6月6日","excerpt":"<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">yum</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> grouplist</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">yum</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> groupinstall</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'xxx'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">yum</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> info</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> software</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> name</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">yum</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> list</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> | </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">grep</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> software</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> name</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">yum</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> search</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> software</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> name</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{k as comp,d as data};
