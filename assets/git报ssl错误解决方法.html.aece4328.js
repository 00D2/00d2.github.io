import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,d as o}from"./app.cb3ed302.js";const e={},i=o(`<h1 id="github\u62A5\u9519openssl-ssl-connect" tabindex="-1"><a class="header-anchor" href="#github\u62A5\u9519openssl-ssl-connect" aria-hidden="true">#</a> Github\u62A5\u9519OpenSSL SSL_connect</h1><p>Github\u62A5\u9519OpenSSL SSL_connect: Connection was reset in connection to github.com:443\u7EC8\u6781\u89E3\u51B3\u65B9\u6848</p><p>\u4ECA\u5929\u5728\u4F7F\u7528git\u547D\u4EE4\u8FDB\u884Cpush\u548Cpull\u65F6\uFF0C\u51FA\u73B0\u5982\u4E0B\u62A5\u9519\uFF1A</p><blockquote><p>fatal: unable to access &#39;https://github.com/wxler/test.git/&#39;: OpenSSL SSL_connect: Connection was reset in connection to github.com:443 1\u6211\u67E5\u4E86\u5F88\u591A\u79CD\u65B9\u6848\uFF0C\u4E0B\u9762\u5FC5\u6709\u4E00\u4E2A\u65B9\u6CD5\u80FD\u591F\u89E3\u51B3\u3002</p></blockquote><p>\u65B9\u6848\u4E00 \u5728git bash\u547D\u4EE4\u884C\u4E2D\u4F9D\u6B21\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global http.sslBackend <span class="token string">&quot;openssl&quot;</span>
<span class="token function">git</span> config --global http.sslCAInfo <span class="token string">&quot;C:\\Program Files\\Git\\mingw64\\ssl<span class="token entity" title="\\c">\\c</span>ert.pem&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\u4E0A\u9762\u7B2C\u4E8C\u4E2A\u547D\u4EE4\uFF0C\u8DEF\u5F84\u8981\u6362\u6210git\u5B89\u88C5\u7684\u8DEF\u5F84\u3002</strong></p><p>\u65B9\u6848\u4E8C \u5982\u679C\u4F60\u5F00\u542F\u4E86VPN\uFF0C\u5F88\u53EF\u80FD\u662F\u56E0\u4E3A\u4EE3\u7406\u7684\u95EE\u9898\uFF0C\u8FD9\u65F6\u5019\u8BBE\u7F6E\u4E00\u4E0Bhttp.proxy\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u4E00\u5B9A\u8981\u67E5\u770B\u81EA\u5DF1\u7684VPN\u7AEF\u53E3\u53F7\uFF0C\u5047\u5982\u4F60\u7684\u7AEF\u53E3\u53F7\u662F7890\uFF0C\u5728git bash\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A</p><p>git config --global http.proxy 127.0.0.1:7890 git config --global https.proxy 127.0.0.1:7890 1 2 \u5982\u679C\u4F60\u4E4B\u524Dgit\u4E2D\u5DF2\u7ECF\u8BBE\u7F6E\u8FC7\u4E0A\u8FF0\u914D\u7F6E\uFF0C\u5219\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u53D6\u6D88\u518D\u8FDB\u884C\u914D\u7F6E\u5373\u53EF\uFF1A</p><p>git config --global --unset http.proxy git config --global --unset https.proxy 1 2 \u4E0B\u9762\u662F\u51E0\u4E2A\u5E38\u7528\u7684git\u914D\u7F6E\u67E5\u770B\u547D\u4EE4\uFF1A</p><p>git config --global http.proxy #\u67E5\u770Bgit\u7684http\u4EE3\u7406\u914D\u7F6E git config --global https.proxy #\u67E5\u770Bgit\u7684https\u4EE3\u7406\u914D\u7F6E git config --global -l #\u67E5\u770Bgit\u7684\u6240\u6709\u914D\u7F6E 1 2 3 \u65B9\u6848\u4E09 \u8FD8\u6709\u4E00\u4E2A\u60C5\u51B5\uFF0C\u662F\u4F60\u7684VNP\u4EE3\u7406\u670D\u52A1\u5668\u8282\u70B9\u6709\u95EE\u9898\uFF0C\u6709\u65F6\u5019\u66F4\u6362\u4E00\u4E2A\u7ED3\u70B9\u5C31\u597D\u4E86\u3002\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u5DF1\u642D\u5EFA\u7684\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><p>\u535A\u4E3B\u63D0\u793A\uFF0C\u4E00\u5B9A\u8981\u79D1\u5B66\u4E0A\u7F51\uFF0C\u5408\u7406\u4E0A\u7F51\u3002</p><p>\u65B9\u6848\u56DB \u6253\u5F00\u4E00\u4E2A\u65B0\u7684git bash\u7EC8\u7AEF\uFF0C\u5C31\u6CA1\u95EE\u9898\u4E86\u3002\u8FD9\u4E2A\u53EF\u80FD\u662F\u5F53\u524Dgit\u7684\u4F1A\u8BDD\u6709\u5173\u3002</p><p>\u5982\u679C\u4EE5\u4E0A\u6240\u6709\u65B9\u6848\u90FD\u89E3\u51B3\u4E0D\u4E86\u62A5\u9519\u95EE\u9898\uFF0C\u5219\u9700\u8981\u5BF9\u75C7\u5206\u6790\uFF0C\u8BF7\u8BC4\u8BBA\u533A\u7559\u8A00\uFF01</p><hr><p>\u7248\u6743\u58F0\u660E\uFF1A\u672C\u6587\u4E3ACSDN\u535A\u4E3B\u300C\u96F7\u6069Layne\u300D\u7684\u539F\u521B\u6587\u7AE0\uFF0C\u9075\u5FAACC 4.0 BY-SA\u7248\u6743\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u9644\u4E0A\u539F\u6587\u51FA\u5904\u94FE\u63A5\u53CA\u672C\u58F0\u660E\u3002 \u539F\u6587\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/qq_37555071/article/details/114260533</p>`,17),p=[i];function a(c,l){return n(),s("div",null,p)}var h=t(e,[["render",a],["__file","git\u62A5ssl\u9519\u8BEF\u89E3\u51B3\u65B9\u6CD5.html.vue"]]);export{h as default};
