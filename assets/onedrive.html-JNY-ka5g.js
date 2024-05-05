import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c as r,a as n,b as s,d as e,e as o}from"./app-DRf-CphG.js";const c={},p=n("p",null,"说明：之前说了很多使用VPS上传/下载OneDrive文件的教程，查看：Onedrivecmd、OneDrive上传脚本，还有一些就不列举了，有兴趣自己在博客搜索，这里再分享一个适用于Linux的OneDrive客户端，该工具支持同步/上传，并使用Inotify进行实时文件监控，来达到实时同步的效果，可以说就是一个备份工具。支持OneDrive for Business和个人版，给我们备份下数据还是很不错。",-1),d=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用"},[n("span",null,"使用")])],-1),v={href:"https://github.com/abraunegg/onedrive",target:"_blank",rel:"noopener noreferrer"},u=o(`<p>要求：作者是建议内存至少为1GB、Swap至少为1GB。不过博主试了下，512M等小点内存的KVM是可以用的，只是需要多给点Swap就行了，不然安装的时候会被杀死进程。</p><p>1、安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#Ubuntu和Debian x86_64系统</span>
<span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> build-essential 
<span class="token function">apt</span> <span class="token function">install</span> libcurl4-openssl-dev <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> libsqlite3-dev <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> pkg-config <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> libnotify-dev <span class="token parameter variable">-y</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsS</span> https://dlang.org/install.sh <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> dmd

<span class="token comment">#Debian i386/i686系统</span>
<span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> build-essential <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> libcurl4-openssl-dev <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> libsqlite3-dev <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> libnotify-dev <span class="token parameter variable">-y</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token function">make</span> <span class="token parameter variable">-y</span>
<span class="token function">mkdir</span> ldc <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ldc
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/g/gcc-8/gcc-8-base_8.2.0-19_i386.deb
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/g/gcc-8/libgcc1_8.2.0-19_i386.deb
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/l/ldc/libphobos2-ldc-shared82_1.12.0-1_i386.deb
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/l/ldc/libphobos2-ldc-shared-dev_1.12.0-1_i386.deb
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/l/ldc/ldc_1.12.0-1_i386.deb
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/l/llvm-toolchain-6.0/libllvm6.0_6.0.1-10_i386.deb
<span class="token function">wget</span> http://httpredir.debian.org/debian/pool/main/n/ncurses/libtinfo6_6.1+20181013-1_i386.deb
dpkg <span class="token parameter variable">-i</span> ./*.deb

<span class="token comment">#Debian(ARM64)系统</span>
<span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> libcurl4-openssl-dev <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> libsqlite3-dev <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> libxml2 <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> libnotify-dev <span class="token parameter variable">-y</span>
<span class="token function">wget</span> https://github.com/ldc-developers/ldc/releases/download/v1.14.0/ldc2-1.14.0-linux-aarch64.tar.xz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ldc2-1.14.0-linux-aarch64.tar.xz

<span class="token comment">#CentOS系统</span>
yum groupinstall <span class="token string">&#39;Development Tools&#39;</span> <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> libcurl-devel <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> sqlite-devel <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> libnotify-devel <span class="token parameter variable">-y</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsS</span> https://dlang.org/install.sh <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> dmd

<span class="token comment">#Arch Linux系统</span>
pacman <span class="token parameter variable">-S</span> <span class="token function">curl</span> sqlite dmd
pacman <span class="token parameter variable">-S</span> libnotify
一般会给你安装好DMD，最后会返回以下信息：

Run <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">source</span> ~/dlang/dmd-2.082.0/activate<span class="token variable">\`</span></span> <span class="token keyword">in</span> your shell to use dmd-2.082.0.
This will setup <span class="token environment constant">PATH</span>, LIBRARY_PATH, LD_LIBRARY_PATH, DMD, DC, and <span class="token environment constant">PS1</span><span class="token builtin class-name">.</span>
Run <span class="token variable"><span class="token variable">\`</span>deactivate<span class="token variable">\`</span></span> later on to restore your environment.
然后我们再使用提示信息中第一行的命令，激活DMD，使用命令：

<span class="token comment">#请根据提示运行命令，有的系统会不一样，随机应变</span>
<span class="token builtin class-name">source</span> ~/dlang/dmd-2.082.0/activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、添加swap 如果内存足够大，可以不用添加，小的话就需要添加了，具体参考文章开头的要求说明，不会添加的可使用脚本：Linux VPS一键添加/删除Swap虚拟内存。</p><p>3、安装客户端</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/abraunegg/onedrive.git
<span class="token builtin class-name">cd</span> onedrive
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、认证客户端 这里随便输入个使用命令都会让你先认证一次，我们可以在SSH客户端输入onedrive命令，然后复制给你的链接，输入浏览器登录账号进行授权，再将授权后的链接地址复制到SSH客户端运行。 请输入图片描述 请输入图片描述</p><p>5、执行同步</p><p>该命令第一次会将OneDrive网盘所有文件/文件夹都下载同步到VPS的/root/OneDrive文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>onedrive <span class="token parameter variable">--synchronize</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请输入图片描述 此后如果OneDrive网盘或者/root/OneDrive文件夹里的文件/文件夹有变动，再执行该命令会进行双向对应的变动/同步。</p><p>6、选择性同步 如果你不想同步整个网盘，而是某个文件夹，比如MOERATS，使用命令：</p><p>使用前提是OneDrive网盘和/root/OneDrive文件夹都有这个文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>onedrive <span class="token parameter variable">--synchronize</span> --single-directory MOERATS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、单向同步 在某些情况下(如备份网站数据)，可能只需要上传到OneDrive。这样我们可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>onedrive <span class="token parameter variable">--synchronize</span> --upload-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令只会单向同步VPS的/root/OneDrive文件夹，不受OneDrive网盘文件变动影响</p><p>8、卸载客户端</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/onedrive
<span class="token function">make</span> uninstall
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.config/onedrive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步配置" tabindex="-1"><a class="header-anchor" href="#同步配置"><span>同步配置</span></a></h2><p>提示：如果你要同步多个OneDrive账号，那么需要新建多个配置文件，然后运行多个同步命令即可。</p><p>1、更改VPS同步文件夹</p><p>一般默认的同步文件夹为/root/OneDrive，其实我们是可以更改的，比如更改到/home/moerats文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#新增并编辑配置文件</span>
<span class="token function">nano</span> /root/.config/onedrive/config
添加以下代码：

<span class="token assign-left variable">sync_dir</span><span class="token operator">=</span><span class="token string">&quot;/home/moerats&quot;</span>
按住Ctrl+x，y保存退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、更改其它同步设置 除了步骤1说的sync_dir参数外，我们还可以使用以下配置参数：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sync_dir：同步文件的目录
skip_file：同步期间将跳过与此模式匹配的任何文件或目录
skip_symlinks：同步期间将跳过符号链接的任何文件或目录
monitor_interval：监视进程处理本地和远程更改的时间间隔（秒）
参数详解：

<span class="token comment">#skip_file后面参数不区分大小写。支持通配符和*。如果有多个文件/目录使用|分隔即可。</span>
如：skip_file <span class="token operator">=</span> <span class="token string">&quot;.*|~*|Desktop|Documents/OneNote*&quot;</span>

<span class="token comment">#skip_symlinks设置为&quot;true&quot;将在同步时跳过所有符号链接。</span>
如：skip_symlinks <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span>

<span class="token comment">#monitor_interval为同步等待时间，默认每45秒同步一次，你可以修改成每10分钟同步一次。</span>
如：monitor_interval <span class="token operator">=</span> <span class="token string">&quot;300&quot;</span>
最后我们在后台进行监控，使用命令：

<span class="token comment">#synchronize为进行一次性同步</span>
onedrive <span class="token parameter variable">--synchronize</span> <span class="token parameter variable">--verbose</span> <span class="token parameter variable">--confdir</span><span class="token operator">=</span><span class="token string">&quot;~/.config/onedrive&quot;</span>
<span class="token comment">#monitor使应用程序保持运行并监视本地和远程的更改</span>
onedrive <span class="token parameter variable">--monitor</span> <span class="token parameter variable">--verbose</span> <span class="token parameter variable">--confdir</span><span class="token operator">=</span><span class="token string">&quot;~/.config/onedrive&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),m={href:"https://www.moerats.com/archives/142/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"最后我们就可以实时将VPS文件备份到OneDrive网盘了。",-1),k={class:"hint-container info"},h=n("p",{class:"hint-container-title"},"版权声明",-1),g=n("p",null,"版权声明：本文为原创文章，版权归 Rat's Blog 所有，转载请注明出处！",-1),f={href:"https://www.moerats.com/archives/740/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"如教程需要更新，或者相关链接出现404，可以在文章下面评论留言。",-1);function y(D,O){const a=l("ExternalLinkIcon");return t(),r("div",null,[p,d,n("p",null,[n("strong",null,[s("Github地址："),n("a",v,[s("https://github.com/abraunegg/onedrive"),e(a)])])]),u,n("p",null,[s("测试没问题了，就使用screen在后台运行，教程参考："),n("a",m,[s("使用screen来实现多任务不断线操作命令"),e(a)]),s("。")]),b,n("div",k,[h,g,n("p",null,[s("本文链接："),n("a",f,[s("https://www.moerats.com/archives/740/"),e(a)])]),_])])}const w=i(c,[["render",y],["__file","onedrive.html.vue"]]),q=JSON.parse(`{"path":"/tools/Office/onedrive.html","title":"适用于Linux的OneDrive客户端，支持VPS和OneDrive之间实时同步/备份","lang":"zh-CN","frontmatter":{"icon":"office","author":"Rat's","title":"适用于Linux的OneDrive客户端，支持VPS和OneDrive之间实时同步/备份","date":"2018-09-21T00:00:00.000Z","category":["office"],"tag":["office"]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"同步配置","slug":"同步配置","link":"#同步配置","children":[]}],"git":{"createdTime":1706172139000,"updatedTime":1713167647000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":3}]},"readingTime":{"minutes":4.79,"words":1436},"filePathRelative":"tools/Office/onedrive.md","localizedDate":"2018年9月21日","excerpt":"<p>说明：之前说了很多使用VPS上传/下载OneDrive文件的教程，查看：Onedrivecmd、OneDrive上传脚本，还有一些就不列举了，有兴趣自己在博客搜索，这里再分享一个适用于Linux的OneDrive客户端，该工具支持同步/上传，并使用Inotify进行实时文件监控，来达到实时同步的效果，可以说就是一个备份工具。支持OneDrive for Business和个人版，给我们备份下数据还是很不错。</p>\\n<h2>使用</h2>\\n<p><strong>Github地址：<a href=\\"https://github.com/abraunegg/onedrive\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/abraunegg/onedrive</a></strong></p>"}`);export{w as comp,q as data};
