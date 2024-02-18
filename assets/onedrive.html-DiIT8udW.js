import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as l}from"./app-8slKAdA5.js";const d={},s=l(`<p>说明：之前说了很多使用VPS上传/下载OneDrive文件的教程，查看：Onedrivecmd、OneDrive上传脚本，还有一些就不列举了，有兴趣自己在博客搜索，这里再分享一个适用于Linux的OneDrive客户端，该工具支持同步/上传，并使用Inotify进行实时文件监控，来达到实时同步的效果，可以说就是一个备份工具。支持OneDrive for Business和个人版，给我们备份下数据还是很不错。</p><p>使用 ** Github地址：https://github.com/abraunegg/onedrive **</p><p>要求：作者是建议内存至少为1GB、Swap至少为1GB。不过博主试了下，512M等小点内存的KVM是可以用的，只是需要多给点Swap就行了，不然安装的时候会被杀死进程。</p><p>1、安装依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#Ubuntu和Debian x86_64系统
apt update
apt install build-essential 
apt install libcurl4-openssl-dev -y
apt install libsqlite3-dev -y
apt install pkg-config -y
apt install libnotify-dev -y
curl -fsS https://dlang.org/install.sh | bash -s dmd

#Debian i386/i686系统
apt update
apt install build-essential -y
apt install libcurl4-openssl-dev -y
apt install libsqlite3-dev -y
apt install libnotify-dev -y
apt install git make -y
mkdir ldc &amp;&amp; cd ldc
wget http://httpredir.debian.org/debian/pool/main/g/gcc-8/gcc-8-base_8.2.0-19_i386.deb
wget http://httpredir.debian.org/debian/pool/main/g/gcc-8/libgcc1_8.2.0-19_i386.deb
wget http://httpredir.debian.org/debian/pool/main/l/ldc/libphobos2-ldc-shared82_1.12.0-1_i386.deb
wget http://httpredir.debian.org/debian/pool/main/l/ldc/libphobos2-ldc-shared-dev_1.12.0-1_i386.deb
wget http://httpredir.debian.org/debian/pool/main/l/ldc/ldc_1.12.0-1_i386.deb
wget http://httpredir.debian.org/debian/pool/main/l/llvm-toolchain-6.0/libllvm6.0_6.0.1-10_i386.deb
wget http://httpredir.debian.org/debian/pool/main/n/ncurses/libtinfo6_6.1+20181013-1_i386.deb
dpkg -i ./*.deb

#Debian(ARM64)系统
apt-get update
apt-get install libcurl4-openssl-dev -y
apt-get install libsqlite3-dev -y
apt-get install libxml2 -y
apt-get install libnotify-dev -y
wget https://github.com/ldc-developers/ldc/releases/download/v1.14.0/ldc2-1.14.0-linux-aarch64.tar.xz
tar -xvf ldc2-1.14.0-linux-aarch64.tar.xz

#CentOS系统
yum groupinstall &#39;Development Tools&#39; -y
yum install libcurl-devel -y
yum install sqlite-devel -y
yum install libnotify-devel -y
curl -fsS https://dlang.org/install.sh | bash -s dmd

#Arch Linux系统
pacman -S curl sqlite dmd
pacman -S libnotify
一般会给你安装好DMD，最后会返回以下信息：

Run \`source ~/dlang/dmd-2.082.0/activate\` in your shell to use dmd-2.082.0.
This will setup PATH, LIBRARY_PATH, LD_LIBRARY_PATH, DMD, DC, and PS1.
Run \`deactivate\` later on to restore your environment.
然后我们再使用提示信息中第一行的命令，激活DMD，使用命令：

#请根据提示运行命令，有的系统会不一样，随机应变
source ~/dlang/dmd-2.082.0/activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、添加swap 如果内存足够大，可以不用添加，小的话就需要添加了，具体参考文章开头的要求说明，不会添加的可使用脚本：Linux VPS一键添加/删除Swap虚拟内存。</p><p>3、安装客户端</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/abraunegg/onedrive.git
cd onedrive
./configure
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、认证客户端 这里随便输入个使用命令都会让你先认证一次，我们可以在SSH客户端输入onedrive命令，然后复制给你的链接，输入浏览器登录账号进行授权，再将授权后的链接地址复制到SSH客户端运行。 请输入图片描述 请输入图片描述</p><p>5、执行同步</p><p>#该命令第一次会将OneDrive网盘所有文件/文件夹都下载同步到VPS的/root/OneDrive文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>onedrive <span class="token parameter variable">--synchronize</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请输入图片描述 此后如果OneDrive网盘或者/root/OneDrive文件夹里的文件/文件夹有变动，再执行该命令会进行双向对应的变动/同步。</p><p>6、选择性同步 如果你不想同步整个网盘，而是某个文件夹，比如MOERATS，使用命令：</p><p>#使用前提是OneDrive网盘和/root/OneDrive文件夹都有这个文件夹</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onedrive --synchronize --single-directory MOERATS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、单向同步 在某些情况下(如备份网站数据)，可能只需要上传到OneDrive。这样我们可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onedrive --synchronize --upload-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令只会单向同步VPS的/root/OneDrive文件夹，不受OneDrive网盘文件变动影响</p><p>8、卸载客户端</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd /root/onedrive
make uninstall
rm -rf ~/.config/onedrive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步配置 提示：如果你要同步多个OneDrive账号，那么需要新建多个配置文件，然后运行多个同步命令即可。 1、更改VPS同步文件夹 一般 默认的同步文件夹为/root/OneDrive，其实我们是可以更改的，比如更改到/home/moerats文件夹。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
#新增并编辑配置文件
nano /root/.config/onedrive/config
添加以下代码：

sync_dir=&quot;/home/moerats&quot;
按住Ctrl+x，y保存退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、更改其它同步设置 除了步骤1说的sync_dir参数外，我们还可以使用以下配置参数：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sync_dir：同步文件的目录
skip_file：同步期间将跳过与此模式匹配的任何文件或目录
skip_symlinks：同步期间将跳过符号链接的任何文件或目录
monitor_interval：监视进程处理本地和远程更改的时间间隔（秒）
参数详解：

#skip_file后面参数不区分大小写。支持通配符和*。如果有多个文件/目录使用|分隔即可。
如：skip_file = &quot;.*|~*|Desktop|Documents/OneNote*&quot;

#skip_symlinks设置为&quot;true&quot;将在同步时跳过所有符号链接。
如：skip_symlinks = &quot;true&quot;

#monitor_interval为同步等待时间，默认每45秒同步一次，你可以修改成每10分钟同步一次。
如：monitor_interval = &quot;300&quot;
最后我们在后台进行监控，使用命令：

#synchronize为进行一次性同步
onedrive --synchronize --verbose --confdir=&quot;~/.config/onedrive&quot;
#monitor使应用程序保持运行并监视本地和远程的更改
onedrive --monitor --verbose --confdir=&quot;~/.config/onedrive&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请输入图片描述 测试没问题了，就使用screen在后台运行，教程参考：使用screen来实现多任务不断线操作命令。</p><p>最后我们就可以实时将VPS文件备份到OneDrive网盘了。</p><div class="hint-container info"><p class="hint-container-title">版权声明</p><p>版权声明：本文为原创文章，版权归 Rat&#39;s Blog 所有，转载请注明出处！</p><p>本文链接：https://www.moerats.com/archives/740/</p><p>如教程需要更新，或者相关链接出现404，可以在文章下面评论留言。</p></div>`,28),a=[s];function t(r,v){return i(),n("div",null,a)}const u=e(d,[["render",t],["__file","onedrive.html.vue"]]),m=JSON.parse(`{"path":"/tools/Office/onedrive.html","title":"适用于Linux的OneDrive客户端，支持VPS和OneDrive之间实时同步/备份","lang":"zh-CN","frontmatter":{"icon":"office","author":"Rat's","title":"适用于Linux的OneDrive客户端，支持VPS和OneDrive之间实时同步/备份","date":"2018-09-21T00:00:00.000Z","category":["office"],"tag":["office"]},"headers":[],"git":{"createdTime":1706172139000,"updatedTime":1708239675000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":2}]},"readingTime":{"minutes":4.78,"words":1434},"filePathRelative":"tools/Office/onedrive.md","localizedDate":"2018年9月21日","excerpt":"<p>说明：之前说了很多使用VPS上传/下载OneDrive文件的教程，查看：Onedrivecmd、OneDrive上传脚本，还有一些就不列举了，有兴趣自己在博客搜索，这里再分享一个适用于Linux的OneDrive客户端，该工具支持同步/上传，并使用Inotify进行实时文件监控，来达到实时同步的效果，可以说就是一个备份工具。支持OneDrive for Business和个人版，给我们备份下数据还是很不错。</p>\\n<p>使用\\n** Github地址：https://github.com/abraunegg/onedrive **</p>\\n<p>要求：作者是建议内存至少为1GB、Swap至少为1GB。不过博主试了下，512M等小点内存的KVM是可以用的，只是需要多给点Swap就行了，不然安装的时候会被杀死进程。</p>"}`);export{u as comp,m as data};
