import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as r,e as i}from"./app.25cd8b3f.js";const n={},t=i(`<p>Ubuntu \u7684\u8F6F\u4EF6\u6E90\u914D\u7F6E\u6587\u4EF6\u662F /etc/apt/sources.list\u3002\u5C06\u7CFB\u7EDF\u81EA\u5E26\u7684\u8BE5\u6587\u4EF6\u505A\u4E2A\u5907\u4EFD\uFF0C\u5C06\u8BE5\u6587\u4EF6\u66FF\u6362\u4E3A\u4E0B\u9762\u5185\u5BB9\uFF0C\u5373\u53EF\u4F7F\u7528\u6E05\u534E\u5927\u5B66\u7684\u8F6F\u4EF6\u6E90\u955C\u50CF\u3002</p><h2 id="_22-04-lts" tabindex="-1"><a class="header-anchor" href="#_22-04-lts" aria-hidden="true">#</a> 22.04 LTS</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9ED8\u8BA4\u6CE8\u91CA\u4E86\u6E90\u7801\u955C\u50CF\u4EE5\u63D0\u9AD8 apt update \u901F\u5EA6\uFF0C\u5982\u6709\u9700\u8981\u53EF\u81EA\u884C\u53D6\u6D88\u6CE8\u91CA
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

# \u9884\u53D1\u5E03\u8F6F\u4EF6\u6E90\uFF0C\u4E0D\u5EFA\u8BAE\u542F\u7528
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u955C\u50CF\u4EC5\u5305\u542B 32/64 \u4F4D x86 \u67B6\u6784\u5904\u7406\u5668\u7684\u8F6F\u4EF6\u5305\uFF0C\u5728 ARM(arm64, armhf)\u3001PowerPC(ppc64el)\u3001RISC-V(riscv64) \u548C S390x \u7B49\u67B6\u6784\u7684\u8BBE\u5907\u4E0A\uFF08\u5BF9\u5E94\u5B98\u65B9\u6E90\u4E3Aports.ubuntu.com\uFF09\u8BF7\u4F7F\u7528 ubuntu-ports \u955C\u50CF\u3002</p><h2 id="_22-04-lts-1" tabindex="-1"><a class="header-anchor" href="#_22-04-lts-1" aria-hidden="true">#</a> 22.04 LTS</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9ED8\u8BA4\u6CE8\u91CA\u4E86\u6E90\u7801\u955C\u50CF\u4EE5\u63D0\u9AD8 apt update \u901F\u5EA6\uFF0C\u5982\u6709\u9700\u8981\u53EF\u81EA\u884C\u53D6\u6D88\u6CE8\u91CA
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# \u9884\u53D1\u5E03\u8F6F\u4EF6\u6E90\uFF0C\u4E0D\u5EFA\u8BAE\u542F\u7528
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u955C\u50CF\u4EC5\u5305\u542B 32/64 \u4F4D x86 \u67B6\u6784\u5904\u7406\u5668\u7684\u8F6F\u4EF6\u5305\uFF0C\u5728 ARM(arm64, armhf)\u3001PowerPC(ppc64el)\u3001RISC-V(riscv64) \u548C S390x \u7B49\u67B6\u6784\u7684\u8BBE\u5907\u4E0A\uFF08\u5BF9\u5E94\u5B98\u65B9\u6E90\u4E3Aports.ubuntu.com\uFF09\u8BF7\u4F7F\u7528 ubuntu-ports \u955C\u50CF\u3002</p>`,7),u=[t];function a(d,c){return s(),r("div",null,u)}var v=e(n,[["render",a],["__file","aptSource.html.vue"]]);export{v as default};
