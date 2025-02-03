import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as e}from"./app-DVA4gMtM.js";const t={};function l(r,s){return e(),a("div",null,s[0]||(s[0]=[n(`<p>Ubuntu 的软件源配置文件是 /etc/apt/sources.list。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用清华大学的软件源镜像。</p><h2 id="_22-04-jammy-lts" tabindex="-1"><a class="header-anchor" href="#_22-04-jammy-lts"><span>22.04(Jammy) LTS</span></a></h2><div class="language-vim line-numbers-mode" data-highlighter="shiki" data-ext="vim" data-title="vim" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-backports main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-backports main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-security main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-security main restricted universe multiverse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 预发布软件源，不建议启用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jammy-proposed main restricted universe multiverse</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本镜像仅包含 32/64 位 x86 架构处理器的软件包，在 ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等架构的设备上（对应官方源为ports.ubuntu.com）请使用 ubuntu-ports 镜像。</p><h2 id="_20-04-focal-lts" tabindex="-1"><a class="header-anchor" href="#_20-04-focal-lts"><span>20.04(Focal) LTS</span></a></h2><div class="language-vim line-numbers-mode" data-highlighter="shiki" data-ext="vim" data-title="vim" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-backports main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-backports main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-security main restricted universe multiverse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 预发布软件源，不建议启用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb-src </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> focal-proposed main restricted universe multiverse</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本镜像仅包含 32/64 位 x86 架构处理器的软件包，在 ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等架构的设备上（对应官方源为ports.ubuntu.com）请使用 ubuntu-ports 镜像。</p>`,7)]))}const u=i(t,[["render",l],["__file","aptSource.html.vue"]]),d=JSON.parse('{"path":"/os/linux/ubuntu/aptSource.html","title":"Ubuntu更改镜像源","lang":"zh-CN","frontmatter":{"icon":"ubuntu","author":"小苹果儿","title":"Ubuntu更改镜像源","date":"2022-07-15T00:00:00.000Z","category":["操作系统","Linux"],"tag":["Ubuntu","镜像源"],"footer":true},"headers":[{"level":2,"title":"22.04(Jammy) LTS","slug":"_22-04-jammy-lts","link":"#_22-04-jammy-lts","children":[]},{"level":2,"title":"20.04(Focal) LTS","slug":"_20-04-focal-lts","link":"#_20-04-focal-lts","children":[]}],"git":{"createdTime":1658034353000,"updatedTime":1738559663000,"contributors":[{"name":"00D2","username":"00D2","email":"shijinguosjg@gmail.com","commits":4,"url":"https://github.com/00D2"}]},"readingTime":{"minutes":1.5,"words":450},"filePathRelative":"os/linux/ubuntu/aptSource.md","localizedDate":"2022年7月15日","excerpt":"<p>Ubuntu 的软件源配置文件是 /etc/apt/sources.list。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用清华大学的软件源镜像。</p>\\n<h2>22.04(Jammy) LTS</h2>\\n<div class=\\"language-vim line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"vim\\" data-title=\\"vim\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">deb </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># deb-src </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">deb </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-updates main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># deb-src </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-updates main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">deb </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-backports main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># deb-src </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-backports main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">deb </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-security main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># deb-src </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-security main restricted universe multiverse</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># 预发布软件源，不建议启用</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># deb </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-proposed main restricted universe multiverse</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"># deb-src </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jammy-proposed main restricted universe multiverse</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{u as comp,d as data};
