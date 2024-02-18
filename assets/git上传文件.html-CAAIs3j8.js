import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as h,a,b as s,d as t,e as i}from"./app-8slKAdA5.js";const d={},r=a("h1",{id:"两种方法上传本地文件到github",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#两种方法上传本地文件到github"},[a("span",null,"两种方法上传本地文件到github")])],-1),c={href:"https://link.jianshu.com/?t=https://github.com/",target:"_blank",rel:"noopener noreferrer"},g=i('<h4 id="_1-github在线上传文件夹" tabindex="-1"><a class="header-anchor" href="#_1-github在线上传文件夹"><span>1. github在线上传文件夹</span></a></h4><p>在线上传也可以上传完整的文件夹结构，直接拖拽到上传文件页面的框中即可。</p><h5 id="_1-1点击上传文件" tabindex="-1"><a class="header-anchor" href="#_1-1点击上传文件"><span>1.1点击上传文件</span></a></h5><p><img src="https://upload-images.jianshu.io/upload_images/3067059-3dc3ff655f5826e9.png" alt="img"></p><p>点击上传</p><h5 id="_1-2-直接拖拽" tabindex="-1"><a class="header-anchor" href="#_1-2-直接拖拽"><span>1.2 直接拖拽</span></a></h5><p>直接拖拽即可上传文件夹及文件夹里面的文件。如果点击* choose your files *就只能上传单个文件。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-1433fee4d699a53e.png" alt="img"></p><p>直接拖拽</p><h4 id="_2-通过git工具上传本地文件夹-本地项目" tabindex="-1"><a class="header-anchor" href="#_2-通过git工具上传本地文件夹-本地项目"><span>2. 通过git工具上传本地文件夹（本地项目）</span></a></h4>',10),l={id:"_2-1-下载git工具",tabindex:"-1"},u={class:"header-anchor",href:"#_2-1-下载git工具"},m={href:"https://link.jianshu.com/?t=https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},_=i(`<p><img src="https://upload-images.jianshu.io/upload_images/3067059-0ff2c754d4888bb4.png" alt="img"></p><p>选择对应版本下载</p><h5 id="_2-2-下载完成后安装完成-注意在安装过程中可以选择创建桌面快捷方式" tabindex="-1"><a class="header-anchor" href="#_2-2-下载完成后安装完成-注意在安装过程中可以选择创建桌面快捷方式"><span>2.2 下载完成后安装完成，注意在安装过程中可以选择创建桌面快捷方式</span></a></h5><p><img src="https://upload-images.jianshu.io/upload_images/3067059-fa7d131432a1232e.png" alt="img"></p><p>桌面快捷方式</p><h5 id="_2-3-绑定用户" tabindex="-1"><a class="header-anchor" href="#_2-3-绑定用户"><span>2.3 绑定用户</span></a></h5><p>打开git-bash.exe（直接在桌面上点击右键，或者点击开始按钮找到Git Bash）</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-a232cbd6d250296e.gif" alt="img"></p><p>运行gitBash.gif</p><p>在打开的GIt Bash中输入以下命令（用户和邮箱为你github注册的账号和邮箱）</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>$ git config <span class="token operator">--</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>name <span class="token string">&quot;hanyuntao&quot;</span>
$ git config <span class="token operator">--</span><span class="token keyword">global</span> user<span class="token punctuation">.</span>email <span class="token string">&quot;hanyuntaocn@163.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/3067059-f2c6c88dca3cb4f1.png" alt="img"></p><p>Paste_Image.png</p>`,13),b={id:"_2-4-设置ssh-key-git中sshkey有何作用",tabindex:"-1"},f={class:"header-anchor",href:"#_2-4-设置ssh-key-git中sshkey有何作用"},k={href:"https://link.jianshu.com/?t=https://segmentfault.com/q/1010000000118744",target:"_blank",rel:"noopener noreferrer"},y=i(`<h6 id="_2-4-1-生成ssh-key" tabindex="-1"><a class="header-anchor" href="#_2-4-1-生成ssh-key"><span>2.4.1 生成ssh key</span></a></h6><p>首先检查是否已生成密钥<code>cd ~/.ssh</code>，如果返回的<code>ls</code>有3个文件,则密钥已经生成。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-18adb5b6ca265756.png" alt="img"></p><p>密钥生成</p><p>如果没有密钥，则通过</p><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>$ ssh<span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span><span class="token constant">C</span> <span class="token string-literal"><span class="token string">&quot;hanyuntaocn@163.com&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成，生成过程中一路按3次回车键就好了。（默认路径，默认没有密码登录） 生成成功后，去对应目录C:\\Users\\hyt.ssh里（hyt为电脑用户名，每个人不同）用记事本打开id_rsa.pub，得到ssh key公钥。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-ef6cb51d5ad31445.png" alt="img"></p><p>ssh key公钥</p><h6 id="_2-4-2-为github账号配置ssh-key" tabindex="-1"><a class="header-anchor" href="#_2-4-2-为github账号配置ssh-key"><span>2.4.2 为github账号配置ssh key</span></a></h6><p>切换到github，展开个人头像的小三角，点击settings，然后打开SSH keys菜单， 点击Add SSH key新增密钥，填上标题（最好跟本地仓库保持一致）。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-1aba5aba10165470.gif" alt="img"></p><p>设置sshkey.gif</p><p>接着将id_rsa.pub文件中key粘贴到此，最后Add key生成密钥吧。\\</p><h4 id="_2-5-上传本地项目到github" tabindex="-1"><a class="header-anchor" href="#_2-5-上传本地项目到github"><span>2.5 上传本地项目到github</span></a></h4><h5 id="_2-5-1-创建一个本地项目" tabindex="-1"><a class="header-anchor" href="#_2-5-1-创建一个本地项目"><span>2.5.1 创建一个本地项目</span></a></h5><p>这是我自己创建的几个文件夹及文件。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-2a5f6b6ff4ae9c95.png" alt="img"></p><p>本地项目</p><h5 id="_2-5-2-建立本地仓库" tabindex="-1"><a class="header-anchor" href="#_2-5-2-建立本地仓库"><span>2.5.2 建立本地仓库</span></a></h5><p>1.首先进入text文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> d:text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://upload-images.jianshu.io/upload_images/3067059-2b398f0122f722cb.png" alt="img"></p><p>首先进入text文件夹</p><p>2.执行指令：<code>git init</code></p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-71817641532ad828.png" alt="img"></p><p>执行git init</p><p>初始化成功后你会发现项目里多了一个隐藏文件夹.git</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-ac953ff8977c72db.png" alt="img"></p><p>隐藏的文件夹</p><p>3.执行指令：<code>git add .</code> 将所有文件添加到仓库</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-fd5b779ebc45f4ba.png" alt="img"></p><p>执行git add .</p><p>4.执行指令：<code>git commit -m &quot;提交文件&quot;</code> 双引号内是提交注释。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-b4be356b146b06ff.png" alt="img"></p><p>提交文件</p><h5 id="_2-5-3-关联github仓库" tabindex="-1"><a class="header-anchor" href="#_2-5-3-关联github仓库"><span>2.5.3 关联github仓库</span></a></h5><p>1.到github text仓库复制仓库地址</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-29c5089e9fd4b637.png" alt="img"></p><p>复制仓库地址</p><p>2.执行指令：<code>git remote add origin https://github.com/hanyuntao/text.git</code></p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-eeaf4b58df1f142f.png" alt="img"></p><p>执行指令</p><h5 id="_2-5-4-上传本地代码" tabindex="-1"><a class="header-anchor" href="#_2-5-4-上传本地代码"><span>2.5.4 上传本地代码</span></a></h5><p>执行指令：<code>git push -u origin master</code></p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-22f6fe754c8e3267.png" alt="img"></p><p>执行指令</p><h5 id="_2-5-5完成了" tabindex="-1"><a class="header-anchor" href="#_2-5-5完成了"><span>2.5.5完成了</span></a></h5><p>可以看到我们的本地项目已经上传到了github上了。</p><p><img src="https://upload-images.jianshu.io/upload_images/3067059-2b4264842851800a.png" alt="img"></p><p>完成了</p><p>** 注意：git是不能管理空的文件夹的，文件夹里必须有文件才能上传。 **</p><hr>`,53),x={class:"hint-container info"},j=a("p",{class:"hint-container-title"},"版权声明",-1),v={href:"https://www.jianshu.com/u/cc07c1b21b4b",target:"_blank",rel:"noopener noreferrer"},w=a("br",null,null,-1),B={href:"https://www.jianshu.com/p/c70ca3a02087",target:"_blank",rel:"noopener noreferrer"};function q(S,E){const e=p("ExternalLinkIcon");return o(),h("div",null,[r,a("p",null,[s("自从使用github以来，一直都是在"),a("a",c,[s("github网站"),t(e)]),s("在线上传文件到仓库中，但是有时因为网络或者电脑的原因上传失败。最重要的原因是我习惯本地编辑，完成以后再一起上传github。看过了几个教程，总结出最适合自己的比较简单的方法。")]),g,a("h5",l,[a("a",u,[a("span",null,[s("2.1 下载"),a("a",m,[s("git工具"),t(e)])])])]),_,a("h5",b,[a("a",f,[a("span",null,[s("2.4 设置SSH key（"),a("a",k,[s("git中sshkey有何作用？"),t(e)]),s("）")])])]),y,a("div",x,[j,a("p",null,[s("本文转载于简书博主"),a("a",v,[s("hanyuntao"),t(e)]),s("的文章。"),w,s(" 原文链接："),a("a",B,[s("https://www.jianshu.com/p/c70ca3a02087"),t(e)])])])])}const T=n(d,[["render",q],["__file","git上传文件.html.vue"]]),A=JSON.parse('{"path":"/tools/Git/git%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6.html","title":"git上传文件","lang":"zh-CN","frontmatter":{"icon":"git","author":"hanyuntao","title":"git上传文件","date":"2017-03-31T00:00:00.000Z","category":["git","github"],"tag":["git","github"]},"headers":[],"git":{"createdTime":1652523653000,"updatedTime":1655615860000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":4}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"tools/Git/git上传文件.md","localizedDate":"2017年3月31日","excerpt":"\\n<p>自从使用github以来，一直都是在<a href=\\"https://link.jianshu.com/?t=https://github.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github网站</a>在线上传文件到仓库中，但是有时因为网络或者电脑的原因上传失败。最重要的原因是我习惯本地编辑，完成以后再一起上传github。看过了几个教程，总结出最适合自己的比较简单的方法。</p>\\n<h4>1. github在线上传文件夹</h4>\\n<p>在线上传也可以上传完整的文件夹结构，直接拖拽到上传文件页面的框中即可。</p>\\n<h5>1.1点击上传文件</h5>"}');export{T as comp,A as data};
