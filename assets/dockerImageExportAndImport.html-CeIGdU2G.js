import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as l}from"./app-CQ9mTk-T.js";const h={};function t(n,i){return l(),e("div",null,i[0]||(i[0]=[a(`<blockquote><p>可用于将docker镜像下载到本地，并在未连接互联网的节点上进行恢复。</p></blockquote><h2 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像"><span>下载镜像</span></a></h2><p>在一台可以联网并执行docker pull的设备上，将所需的镜像下载至本地。</p><blockquote><p>xx为所需要拉取的镜像名称，如mariadb，busybox等。</p><p>v1.0代表所要拉取的版本号，如mariadb的10.11.5等。不填写版本号，则默认为latest。</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xx:v1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img.jinguo.link/d/image-20241102222824983.png" alt="image-20241102222824983"></p><h2 id="查看下载好的镜像" tabindex="-1"><a class="header-anchor" href="#查看下载好的镜像"><span>查看下载好的镜像</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://img.jinguo.link/d/image-20241102223731772.png" alt="image-20241102223731772"></p><h2 id="将下载好的镜像导出为tar文件" tabindex="-1"><a class="header-anchor" href="#将下载好的镜像导出为tar文件"><span>将下载好的镜像导出为tar文件</span></a></h2><p>通过如下命令，将下载好的镜像保存为tar文件。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> save</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> star7th/showdoc:2.10.4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">showdoc.2.10.4.tar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">或</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> save</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> showdoc.2.10.4.tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> star7th/showdoc:2.10.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.jinguo.link/d/image-20241102224138303.png" alt="image-20241102224138303"></p><h2 id="将生成的tar文件copy至目标服务器" tabindex="-1"><a class="header-anchor" href="#将生成的tar文件copy至目标服务器"><span>将生成的tar文件copy至目标服务器</span></a></h2><h2 id="在目标服务器对镜像进行加载" tabindex="-1"><a class="header-anchor" href="#在目标服务器对镜像进行加载"><span>在目标服务器对镜像进行加载</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">showdoc.2.10.4.tar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">或</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> showdoc.2.10.4.tar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看镜像是否加载完成" tabindex="-1"><a class="header-anchor" href="#查看镜像是否加载完成"><span>查看镜像是否加载完成</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="也可使用image-id进行导出" tabindex="-1"><a class="header-anchor" href="#也可使用image-id进行导出"><span>也可使用image id进行导出</span></a></h3><blockquote><p>此种方式在load后，没有repository和TAG。需要手工打标记。不建议使用。</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> save</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [IMAGE </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ID]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">showdock.2.10.4.tar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">showdoc.2.10.4.tar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过docker tag命令进行打标签</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [IMAGE </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ID]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> star7th/showdoc:2.10.4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,24)]))}const k=s(h,[["render",t],["__file","dockerImageExportAndImport.html.vue"]]),p=JSON.parse('{"path":"/tools/Docker/dockerImageExportAndImport.html","title":"docker镜像导入及导出","lang":"zh-CN","frontmatter":{"icon":"docker","title":"docker镜像导入及导出","author":"小苹果儿","date":"2022-07-04T00:00:00.000Z","category":["Docker"],"tag":["docker","容器"]},"headers":[{"level":2,"title":"下载镜像","slug":"下载镜像","link":"#下载镜像","children":[]},{"level":2,"title":"查看下载好的镜像","slug":"查看下载好的镜像","link":"#查看下载好的镜像","children":[]},{"level":2,"title":"将下载好的镜像导出为tar文件","slug":"将下载好的镜像导出为tar文件","link":"#将下载好的镜像导出为tar文件","children":[]},{"level":2,"title":"将生成的tar文件copy至目标服务器","slug":"将生成的tar文件copy至目标服务器","link":"#将生成的tar文件copy至目标服务器","children":[]},{"level":2,"title":"在目标服务器对镜像进行加载","slug":"在目标服务器对镜像进行加载","link":"#在目标服务器对镜像进行加载","children":[]},{"level":2,"title":"查看镜像是否加载完成","slug":"查看镜像是否加载完成","link":"#查看镜像是否加载完成","children":[{"level":3,"title":"也可使用image id进行导出","slug":"也可使用image-id进行导出","link":"#也可使用image-id进行导出","children":[]}]}],"git":{"createdTime":1658034353000,"updatedTime":1730558642000,"contributors":[{"name":"00D2","username":"00D2","email":"shijinguosjg@gmail.com","commits":5,"url":"https://github.com/00D2"}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"tools/Docker/dockerImageExportAndImport.md","localizedDate":"2022年7月4日","excerpt":"<blockquote>\\n<p>可用于将docker镜像下载到本地，并在未连接互联网的节点上进行恢复。</p>\\n</blockquote>\\n<h2>下载镜像</h2>\\n<p>在一台可以联网并执行docker pull的设备上，将所需的镜像下载至本地。</p>\\n<blockquote>\\n<p>xx为所需要拉取的镜像名称，如mariadb，busybox等。</p>\\n<p>v1.0代表所要拉取的版本号，如mariadb的10.11.5等。不填写版本号，则默认为latest。</p>\\n</blockquote>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> xx:v1.0</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{k as comp,p as data};