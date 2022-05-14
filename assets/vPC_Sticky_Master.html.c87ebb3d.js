import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e}from"./app.70272d4e.js";const t={},p=e('<h1 id="cisco-nexus-vpc-\u4E4B-sticky-master" tabindex="-1"><a class="header-anchor" href="#cisco-nexus-vpc-\u4E4B-sticky-master" aria-hidden="true">#</a> Cisco Nexus vPC \u4E4B Sticky Master</h1><p><strong>\u573A\u666F</strong></p><p>\u751F\u4EA7\u73AF\u5883\u91CC\uFF0C\u6211\u4EEC\u7ECF\u5E38\u628A\u5176\u4E2D\u7684\u4E00\u53F0Nexus\u4EA4\u6362\u673A\u4ECEvPC domain\u4E2D\u72EC\u7ACB\u51FA\u6765\uFF0C\u6BD4\u5982\u5347\u7EA7\u6216\u707E\u5907\u6F14\u7EC3\u7B49\u60C5\u51B5\u3002\u4F46\u662F\u5176\u4E2D\u4E00\u4E2A\u7EC6\u8282\u5373Sticky Master\u7684\u72B6\u6001\u5F88\u5C11\u6709\u4EBA\u4F1A\u6CE8\u610F\u5230\uFF0C\u56E0\u6B64\u8FD9\u53EF\u80FD\u5BFC\u81F4\u7F51\u7EDC\u4E2D\u65AD\u3002</p><p>\u5728vPC\u73AF\u5883\u4E2D\uFF0C\u4E24\u53F0vPC\u4F1A\u8FDB\u884Crole\u9009\u4E3E\uFF0C\u901A\u8FC7\u4F18\u5148\u7EA7\u914D\u7F6E\uFF0C\u5047\u8BBEN7K-1\u4E3Aprimary\uFF0CN7K-2\u4E3Asecondary\u3002</p><p>**\u6B65\u9AA4\u4E00 **</p><p>\u5F53\u6211\u4EEC\u628AN7K-2\u4ECEvPC\u73AF\u5883\u4E2D\u72EC\u7ACB\u51FA\u6765\uFF0C\u5373\u65AD\u6389N7K-2\u7684peer-link\u3001keepalive\u4EE5\u53CA\u6240\u6709\u4E0A\u4E0B\u884C\u63A5\u53E3\u3002\u8FD9\u65F6\u5019\u4E24\u53F0\u8BBE\u5907\u5904\u4E8E\u53CC\u6D3B\u72B6\u6001\uFF0CN7K-1\u4E3Aprimary\uFF0CN7K-2\u4E3Asecondary\uFF0Coperational primary\u3002 \u5F53\u7136\u7531\u4E8EN7K-2\u5E76\u672A\u63A5\u5165\u7F51\u7EDC\uFF0C\u7F51\u7EDC\u4E5F\u6CA1\u6709\u4EFB\u4F55\u5F71\u54CD\u3002</p><p>**\u6B65\u9AA4\u4E8C **</p><p>\u7B49\u6211\u4EEC\u5BF9N7K-2\u7684\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u5C06N7K-2\u63A5\u5165\u56DE\u7F51\u7EDC\uFF0C\u8FD9\u65F6\u5019\u4E00\u822C\u4F1A\u770B\u5230\uFF0CN7K-1\u6210\u4E3A\u4E86primary\uFF0Coperational secondary\u7684vPC\u63A5\u53E3\u90FDsuspend\u4E86\u3002</p><p>**\u7591\u95EE **</p><p>\u4E3A\u4EC0\u4E48\u5728N7K-1\u660E\u660E\u4E3Aprimary\uFF0CN7K-2\u4E3Asecondary\uFF0Coperational primary\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E24\u53F0\u8BBE\u5907\u8FDE\u63A5\u540EN7K-1\u5374\u6210\u4E3A\u4E86primary\uFF0Coperation secondary?</p><p>**Sticky Master **</p><p>\u8FD9\u662F\u7531\u4E8E\u5728vPC\u91CC\u9762\uFF0C\u6709\u4E00\u4E2A\u53C2\u6570\u53EBSticky Master\uFF0C\u5F53\u4E00\u53F0Secondary\u6210\u4E3Aoperational primary\u7684\u65F6\u5019\uFF0C\u4F1A\u5C06\u81EA\u8EAB\u7684Sticky Master\u8BBE\u7F6E\u4E3ATrue\u3002 N7K-1\u7531\u4E8E\u4E00\u76F4\u662FPrimary\uFF0CSticky Master\u4E00\u76F4\u662FFALSE\uFF0CN7K-2\u7531\u4E8Erole\u7531Secondary\u5207\u6362\u4E3ASecondary, operational primary,Sticky Master\u88AB\u7F6E\u6210\u4E86TRUE\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5F53\u4E24\u53F0\u8BBE\u5907\u4E00\u65E6\u91CD\u65B0\u5EFA\u7ACBvPC\u5173\u7CFB\uFF0CSticky Master\u88AB\u7F6E\u6210\u4E86True\u7684\u8BBE\u5907\u4F1A\u4FDD\u6301Role\u4E0D\u53D8\uFF0CSticky Master\u88AB\u7F6E\u6210\u4E86False\u7684\u8BBE\u5907\u4F1A\u9009\u62E9\u53E6\u5916\u4E00\u4E2A\u53EF\u7528\u89D2\u8272\uFF0C\u4E5F\u5C31\u662Fprimary\uFF0Coperation secondary\u3002 \u56E0\u6B64\uFF0CN7K-1\u5C06\u4F1A\u8FDB\u884C\u6536\u655B\uFF0Csuspend\u6240\u6709vPC\u63A5\u53E3\uFF0C\u91CD\u65B0\u68C0\u67E5\u63A5\u53E3\u72B6\u6001\uFF0C\u6062\u590D\u63A5\u53E3\u3002\u5728\u8FD9\u65F6\uFF0C\u5982\u679CN7K-2\u4E0A\u7684vPC\u63A5\u53E3\u6709\u6CA1\u6709\u8D77\u6765\u7684\u60C5\u51B5\uFF0C\u5C06\u5BFC\u81F4\u7F51\u7EDC\u4E2D\u65AD\u3002</p><p>**\u8BBE\u5907\u5165\u7F51\u68C0\u67E5 **</p><p>\u8FD9\u79CD\u60C5\u51B5\u662F\u53EF\u4EE5\u907F\u514D\u7684\uFF0C\u4E3B\u8981\u662F\u5728\u65B0\u8BBE\u5907\u52A0\u5165vPC\u57DF\u4E4B\u524D\u8FDB\u884CSticky Master\u68C0\u67E5\uFF0C\u4F7F\u7528show system internal vpcm info global | i Sticky\u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\uFF1A</p><p><strong>\u60C5\u51B5\u4E00</strong>NX-OS# show system internal vpcm info global | i StickySticky Master: TRUE</p><p>\u8FD9\u65F6\u5019\u662F\u4E0D\u80FD\u5165\u7F51\u7684\uFF0C\u5426\u5219\u4F1A\u62A2\u5360\u76EE\u524DPrimary\u7684Role\u3002</p><p><strong>\u60C5\u51B5\u4E8C</strong>NX-OS# show system internal vpcm info global | i StickySticky Master: FALSE</p><p>\u8FD9\u65F6\u5019\u662F\u53EF\u4EE5\u5165\u7F51\u7684\uFF0C\u4F1A\u81EA\u52A8\u6210\u4E3ASecondary\u3002</p><p>**\u5982\u4F55\u91CD\u7F6ESticky **</p><p>\u5165\u7F51\u524D\u4E00\u65E6\u68C0\u67E5\u5230Sticky Master\u4E3ATRUE\uFF0C\u9700\u8981\u91CD\u7F6E\u8BE5\u72B6\u6001\u4E3AFALSE\u3002 \u91CD\u7F6E\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A 1.\u91CD\u65B0\u914D\u7F6E\u4F18\u5148\u7EA7\uFF0C\u54EA\u6015\u4F18\u5148\u7EA7\u4E00\u6837\u4E5F\u53EF\u4EE5\u3002</p><p>vpc domain 110 priority 32768</p><p>2.\u5982\u679C\u914D\u7F6E\u4F18\u5148\u7EA7\u65E0\u6CD5\u91CD\u7F6E\uFF0C\u90A3\u53EA\u6709\u91CD\u542F\u8BBE\u5907\u4E86\u3002</p><hr><p>\u8F6C\u8F7D\u81F3\uFF1A</p><p>\u30101\u3011https://community.cisco.com/t5/%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%96%87%E6%A1%A3/%E5%8E%9F%E5%88%9B-cisco-nexus-vpc-%E4%B9%8B-sticky-master/ta-p/4345018</p><p>\u53C2\u8003\uFF1A \u30101\u3011http://www.cisco.com/c/en/us/support/docs/interfaces-modules/nexus-7000-series-supervisor-1-module/119033-technote-nexus-00.html?dtid=osscdc000283</p>',26);function s(a,i){return p}var n=r(t,[["render",s],["__file","vPC_Sticky_Master.html.vue"]]);export{n as default};
