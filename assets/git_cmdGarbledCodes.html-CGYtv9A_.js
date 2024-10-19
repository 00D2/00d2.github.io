import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as l}from"./app-DuViyIuJ.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h2 id="git-cmd中文乱码解决方法" tabindex="-1"><a class="header-anchor" href="#git-cmd中文乱码解决方法"><span>git cmd中文乱码解决方法</span></a></h2><p>在win10中，用cmd或者bash中使用git时候，经常遇到乱码问题，网上类似的教程很多，一般可以直接在cmd/bash中输入如下设置命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> core.quotepath</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gui.encoding</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> utf-8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18n.commit.encoding</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i18n.logoutputencoding</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> utf-8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//bash环境下：</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LESSCHARSET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">utf-8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//cmd环境下：</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LESSCHARSET=utf-8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样设置完后，当前命令窗口是没问题的。但是，另打开一个还是不行。然后就想到应该是最后一句的问题。这一个并没有将这个变量保存起来。所以，就直接将最后一个变量添加到Windows环境变量中：</p><hr><div class="hint-container info"><p class="hint-container-title">版权声明</p><p>本文为CSDN博主「sunpro518」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。<br> 原文链接：<a href="https://blog.csdn.net/sunjinshengli/article/details/81283009" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/sunjinshengli/article/details/81283009</a></p></div>`,6)]))}const d=s(t,[["render",e],["__file","git_cmdGarbledCodes.html.vue"]]),r=JSON.parse('{"path":"/tools/Git/git_cmdGarbledCodes.html","title":"git cmd中文乱码解决方法","lang":"zh-CN","frontmatter":{"icon":"git","author":"sunpro518","title":"git cmd中文乱码解决方法","date":"2018-07-30T00:00:00.000Z","category":["git"],"tag":["git"]},"headers":[{"level":2,"title":"git cmd中文乱码解决方法","slug":"git-cmd中文乱码解决方法","link":"#git-cmd中文乱码解决方法","children":[]}],"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"tools/Git/git_cmdGarbledCodes.md","localizedDate":"2018年7月30日","excerpt":"<h2>git cmd中文乱码解决方法</h2>\\n<p>在win10中，用cmd或者bash中使用git时候，经常遇到乱码问题，网上类似的教程很多，一般可以直接在cmd/bash中输入如下设置命令：</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> core.quotepath</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> false</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> gui.encoding</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> utf-8</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> i18n.commit.encoding</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> utf-8</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> i18n.logoutputencoding</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> utf-8</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">//bash环境下：</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> LESSCHARSET</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">utf-8</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">//cmd环境下：</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">set</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> LESSCHARSET=utf-8</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,r as data};
