const a=JSON.parse('{"key":"v-041947f0","path":"/os/linux/fileSearch.html","title":"查找文件","lang":"zh-CN","frontmatter":{"icon":"search","author":"小苹果儿","title":"查找文件","date":"2022-06-06T00:00:00.000Z","category":["操作系统","Linux"],"tag":["file","find"]},"headers":[],"git":{"createdTime":1654527613000,"updatedTime":1654527613000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":1}]},"readingTime":{"minutes":0.26,"words":78},"filePathRelative":"os/linux/fileSearch.md","localizedDate":"2022年6月6日","excerpt":"<p>在当前文件夹下，查找文件类型是普通文件、文件大小大于5M小于9M的文件，并执行ls -lh将文件列出</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">find</span> <span class=\\"token builtin class-name\\">.</span> <span class=\\"token parameter variable\\">-type</span> f <span class=\\"token parameter variable\\">-size</span> +5M <span class=\\"token parameter variable\\">-size</span> <span class=\\"token parameter variable\\">-9M</span> <span class=\\"token parameter variable\\">-exec</span> <span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-lh</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token punctuation\\">\\\\</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{a as data};
