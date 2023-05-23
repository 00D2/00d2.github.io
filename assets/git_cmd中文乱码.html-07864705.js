const a=JSON.parse('{"key":"v-a860b7ac","path":"/tools/Git/git_cmd%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81.html","title":"git cmd中文乱码解决方法","lang":"zh-CN","frontmatter":{"icon":"git","author":"sunpro518","title":"git cmd中文乱码解决方法","date":"2018-07-30T00:00:00.000Z","category":["git"],"tag":["git"]},"headers":[{"level":2,"title":"git cmd中文乱码解决方法","slug":"git-cmd中文乱码解决方法","link":"#git-cmd中文乱码解决方法","children":[]}],"git":{"createdTime":1652936016000,"updatedTime":1654868607000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":3}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"tools/Git/git_cmd中文乱码.md","localizedDate":"2018年7月30日","excerpt":"<h2> git cmd中文乱码解决方法</h2>\\n<p>在win10中，用cmd或者bash中使用git时候，经常遇到乱码问题，网上类似的教程很多，一般可以直接在cmd/bash中输入如下设置命令：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> core.quotepath <span class=\\"token boolean\\">false</span> \\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> gui.encoding utf-8\\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> i18n.commit.encoding utf-8 \\n<span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> i18n.logoutputencoding utf-8\\n//bash环境下：\\n<span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">LESSCHARSET</span><span class=\\"token operator\\">=</span>utf-8\\n//cmd环境下：\\n<span class=\\"token builtin class-name\\">set</span> <span class=\\"token assign-left variable\\">LESSCHARSET</span><span class=\\"token operator\\">=</span>utf-8\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{a as data};
