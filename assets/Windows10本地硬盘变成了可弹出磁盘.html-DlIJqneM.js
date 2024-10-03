import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as i}from"./app-2WYb0U6l.js";const o={};function r(l,e){return i(),a("div",null,e[0]||(e[0]=[t('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>装好系统之后，硬盘在右下角显示为可安全删除设备。</p><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h2><p>Standard SATA AHCI controller使用高性能的硬盘模式就会把硬盘看作是一个可热插拔的存储器，所以自然就会显示可弹出。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><ol><li><p>如果你的BIOS支持关闭HotSwap或者HotPlug，那么直接关闭就可以了。 或者你直接在BIOS里把磁盘模式改为IDE，不过这样就发挥不好你SSD的高性能了。</p></li><li><p>还有一种解决方法，就是手动让系统把这两个磁盘当作本地磁盘。</p></li></ol><p>​ <code>windows+r</code> 键打开运行提示框，输入<code>regedit</code>打开注册表， ​ 定位到<code>HKLM\\SYSTEM\\CurrentControlSet\\Services\\storahci\\Parameters\\Device</code>，创建多字符串参数类型<code>REG_MULTI_SZ</code>的<code>TreatAsInternalPort</code>， 在里面写上你硬盘的端口号。 ​ 硬盘端口号可以在设备管理器里看，比如我的就是2和3。</p><figure><img src="https://img-blog.csdnimg.cn/2020060719404284.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>​ 那么在<code>TreatAsInternalPort</code>里输入查看到的磁盘号，一行一个，而且最后一个输完要回车。下图是一个例子, 把0,1,2,3全用了。</p><figure><img src="https://img-blog.csdnimg.cn/20200607194148717.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>​ 保存并重启电脑即可。</p><p>对于win7, 配置有略微不同, 这里不再赘述, 可以看下面的参考链接.</p><p>参考: <a href="http://woshub.com/internal-ssd-sata-drive-shows-removable/" target="_blank" rel="noopener noreferrer">Internal SSD/SATA Drive Shows as a Removable in Windows</a></p><hr><p>版权声明：本文为CSDN博主「Regnaiq」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。</p><p>原文链接：https://blog.csdn.net/yq_forever/article/details/106606053</p>',16)]))}const p=n(o,[["render",r],["__file","Windows10本地硬盘变成了可弹出磁盘.html.vue"]]),c=JSON.parse('{"path":"/os/windows/Windows10%E6%9C%AC%E5%9C%B0%E7%A1%AC%E7%9B%98%E5%8F%98%E6%88%90%E4%BA%86%E5%8F%AF%E5%BC%B9%E5%87%BA%E7%A3%81%E7%9B%98.html","title":"Windows10本地硬盘变成了可弹出磁盘","lang":"zh-CN","frontmatter":{"icon":"disk","author":"Regnaiq","title":"Windows10本地硬盘变成了可弹出磁盘","date":"2022-05-14T00:00:00.000Z","category":["操作系统","Windows"],"tag":["Windows","AHCI","硬盘"]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"readingTime":{"minutes":1.41,"words":422},"filePathRelative":"os/windows/Windows10本地硬盘变成了可弹出磁盘.md","localizedDate":"2022年5月14日","excerpt":"<h2>问题</h2>\\n<p>装好系统之后，硬盘在右下角显示为可安全删除设备。</p>\\n<h2>原因</h2>\\n<p>Standard SATA AHCI controller使用高性能的硬盘模式就会把硬盘看作是一个可热插拔的存储器，所以自然就会显示可弹出。</p>\\n<h2>解决方法</h2>\\n<ol>\\n<li>\\n<p>如果你的BIOS支持关闭HotSwap或者HotPlug，那么直接关闭就可以了。\\n或者你直接在BIOS里把磁盘模式改为IDE，不过这样就发挥不好你SSD的高性能了。</p>\\n</li>\\n<li>\\n<p>还有一种解决方法，就是手动让系统把这两个磁盘当作本地磁盘。</p>\\n</li>\\n</ol>"}');export{p as comp,c as data};
