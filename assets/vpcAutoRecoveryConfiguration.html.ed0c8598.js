import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.25cd8b3f.js";const l={},v=s(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u672C\u6587\u6863\u63CF\u8FF0\u4E86\u5982\u4F55\u5728Nexus\u4EA4\u6362\u673A\u4E0A\u914D\u7F6EvPC auto-recovery\u529F\u80FD\u3002</p><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>vPC Auto-Recovery\uFF0C\u6709\u4E24\u4E2A\u9700\u8981\u5E94\u7528\u8BE5\u529F\u80FD\u7684\u4E3B\u8981\u539F\u56E0\uFF1A</p><ul><li>\u5728\u6570\u636E\u4E2D\u5FC3\u5B95\u673A\u6216\u65AD\u7535\u65F6\uFF0C\u7531Nexus\u4EA4\u6362\u673A\u7EC4\u6210\u7684\u4E24\u4E2AvPC peers\u90FD\u5904\u4E8E\u5173\u673A\u72B6\u6001\u3002\u5076\u5C14\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u6062\u590D\u5176\u4E2D\u4E00\u53F0\u8BBE\u5907\u3002\u7531\u4E8E\u5176\u4ED6\u7684Nexus\u4EA4\u6362\u673A\u4ECD\u7136\u5904\u4E8E\u5173\u673A\u72B6\u6001\uFF0C\u56E0\u6B64vPC peer-link\u548CvPC peer-keepalive link\u540C\u6837\u4E5F\u5904\u4E8E\u4E2D\u65AD\u72B6\u6001 \u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5DF2\u5F00\u673A\u7684Nexus\u4EA4\u6362\u673A\u4E0AvPC\u4E5F\u4E0D\u4F1A\u5F00\u542F\u3002\u6240\u6709\u7684vPC\u914D\u7F6E\u5FC5\u987B\u4ECENexus\u4EA4\u6362\u673A\u7684port-channel\u4E2D\u79FB\u9664\uFF0C\u624D\u80FD\u4F7Fport-channel\u6B63\u5E38\u5DE5\u4F5C\u3002\u5F53\u53E6\u4E00\u53F0Nexus\u4EA4\u6362\u673A\u6062\u590D\u540E\uFF0C\u5FC5\u987B\u518D\u6B21\u8FDB\u884C\u914D\u7F6E\u66F4\u6539\uFF0C\u6062\u590D\u6240\u6709vPC\u7684\u914D\u7F6E\u3002</li><li>\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\uFF0CvPC peer-link\u4E2D\u65AD\u3002\u7531\u4E8EvPC peer-keepalive\u4ECD\u7136\u6B63\u5E38\uFF0CvPC\u5907\u8BBE\u5907\u4F1A\u7531\u4E8E\u53CC\u6D3B\u52A8\u68C0\u6D4B\u800C\u5173\u95ED\u5176\u6240\u6709vPC\u6210\u5458\u7AEF\u53E3\u3002\u56E0\u6B64\u6240\u6709\u7684\u6D41\u91CF\u90FD\u901A\u8FC7vPC\u4E3B\u8BBE\u5907\u3002\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\uFF0CvPC\u4E3B\u8BBE\u5907\u4E5F\u5173\u95ED\uFF0C\u90A3\u4E48\u6B64\u65F6\u4F1A\u9020\u6210\u6D41\u91CF\u9ED1\u6D1E\uFF0C\u56E0\u4E3A\u5728vPC\u4E3B\u8BBE\u5907\u5173\u95ED\u4E4B\u524D\uFF0CvPC\u5907\u8BBE\u5907\u5C31\u68C0\u6D4B\u5230\u4E86\u53CC\u6D3B\u4ECE\u800C\u5173\u95ED\u4E86\u8BBE\u5907\u4E0A\u7684vPC\u3002</li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>SW1\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SW1(config)# vpc domain 1
SW1(config-vpc-domain)# auto-recovery
SW1# show vpc
Legend:
                (*) - local vPC is down, forwarding via vPC peer-link

vPC domain id                     : 1 
Peer status                       : peer adjacency formed ok      
vPC keep-alive status             : peer is alive                 
Configuration consistency status  : success 
Per-vlan consistency status       : success                       
Type-2 consistency status         : success 
vPC role                          : primary
Number of vPCs configured         : 1   
Peer Gateway                      : Enabled
Peer gateway excluded VLANs       : -
Dual-active excluded VLANs        : -
Graceful Consistency Check        : Enabled
Auto-recovery status              : Enabled (timeout = 240 seconds)

vPC Peer-link status
---------------------------------------------------------------------
id   Port   Status Active vlans    
--   ----   ------ --------------------------------------------------
1    Po10   up     1,100                                                     

vPC status
----------------------------------------------------------------------
id   Port      Status Consistency Reason                  Active vlans
--   ----      ------ ----------- ------                  ------------
100  Po100     up     success     success                    1,100           
SW1# 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SW2\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SW2(config)# vpc domain 1
SW2(config-vpc-domain)# auto-recovery
SW2# show vpc
Legend:
                (*) - local vPC is down, forwarding via vPC peer-link

vPC domain id                     : 1
Peer status                       : peer adjacency formed ok      
vPC keep-alive status             : peer is alive                 
Configuration consistency status  : success 
Per-vlan consistency status       : success                       
Type-2 consistency status         : success 
vPC role                          : secondary
Number of vPCs configured         : 1   
Peer Gateway                      : Enabled
Peer gateway excluded VLANs       : -
Dual-active excluded VLANs        : -
Graceful Consistency Check        : Enabled
Auto-recovery status              : Enabled (timeout = 240 seconds)

vPC Peer-link status
---------------------------------------------------------------------
id   Port   Status Active vlans    
--   ----   ------ --------------------------------------------------
1    Po10   up     1,100                                                     

vPC status
----------------------------------------------------------------------
id   Port      Status Consistency Reason                  Active vlans
--   ----      ------ ----------- ------                  ------------
100  Po100     up     success     success                    1,100           
SW2# 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="auto-recovery\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#auto-recovery\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> Auto-recovery\u5DE5\u4F5C\u539F\u7406</h2><p>\u672C\u8282\u5206\u522B\u8BA8\u8BBA\u80CC\u666F\u90E8\u5206\u4E2D\u63D0\u5230\u7684\u4E24\u4E2A\u573A\u666F\u3002\uFF08\u5047\u8BBE\u5728\u4E24\u4E2A\u4EA4\u6362\u673A\u4E0A\u90FD\u914D\u7F6E\u4E86vPC auto-recovery\uFF0C\u5E76\u76F8\u5E94\u4FDD\u5B58\u5230\u542F\u52A8\u914D\u7F6E\u4E2D\uFF09</p><ol><li>SW1\u548CSW2\u540C\u65F6\u5173\u7535\uFF0C\u53EA\u6709SW2\u518D\u6B21\u542F\u52A8\u7684\u573A\u666F</li></ol><ul><li>SW2\u7B49\u5F85vPC auto-recovery\u8D85\u65F6(\u9ED8\u8BA4\u4E3A240\u79D2\uFF0C\u53EF\u4EE5\u4F7F\u7528 <strong>auto-recovery reload-delay x</strong> \u547D\u4EE4\u8FDB\u884C\u914D\u7F6E\uFF0C\u5176\u4E2Dx\u4E3A240-3600\u79D2)\uFF0C\u4EE5\u9A8C\u8BC1vPC peer-link\u6216 peer-keepalive link\u72B6\u6001\u662F\u5426\u5F00\u542F\u3002\u5982\u679C\u5176\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u94FE\u8DEF\u5904\u4E8E\u6253\u5F00\u72B6\u6001\uFF0C\u5219\u4E0D\u4F1A\u89E6\u53D1 auto-recovery \u3002</li><li>\u8D85\u65F6\u4E4B\u540E\uFF0C\u5982\u679C\u4E24\u4E2A\u94FE\u8DEF\u90FD\u5904\u4E8E\u5173\u95ED\u72B6\u6001\uFF0C\u5219vPC\u5C06\u542F\u7528\u81EA\u52A8\u6062\u590D\uFF0CSW2\u5C06\u6210\u4E3A\u4E3B\u8BBE\u5907\u5E76\u542F\u52A8\u5176\u672C\u5730vPC\u3002\u7531\u4E8E\u6CA1\u6709peers\uFF0C\u6240\u4EE5\u4F1A\u7ED5\u8FC7\u4E00\u81F4\u6027\u68C0\u67E5\u3002</li><li>\u4E4B\u540ESW1\u542F\u52A8\u6062\u590D\uFF0C\u6B64\u65F6SW2\u4FDD\u7559\u5176\u4E3B\u89D2\u8272\uFF0CSW1\u4F5C\u4E3A\u5907\u89D2\u8272\uFF0C\u6267\u884C\u4E00\u81F4\u6027\u68C0\u67E5\uFF0C\u5E76\u91C7\u53D6\u9002\u5F53\u7684\u64CD\u4F5C\u3002</li></ul><ol start="2"><li>\u9996\u5148vPC peer-link\u5173\u95ED\uFF0C\u7136\u540EvPC\u4E3B\u8BBE\u5907\u5173\u95ED\u7684\u573A\u666F</li></ol><ul><li>SW2\u7B49\u5F85\u4E09\u4E2A\u8FDE\u7EEDpeer-keepalive\u6D88\u606F\u4E22\u5931\u3002\u51FA\u4E8E\u67D0\u79CD\u539F\u56E0\uFF0C\u5982\u679CvPC peer-link\u6062\u590D\u6216\u8005SW2\u6536\u5230peer-keepalive\u6D88\u606F\uFF0C\u90A3\u4E48auto-recovery\u5C06\u4E0D\u4F1A\u542F\u7528\u3002</li><li>\u5982\u679CvPC peer-link\u4ECD\u7136\u4E2D\u65AD\uFF0C\u5E76\u4E14\u4E22\u5931\u4E86\u4E09\u4E2A\u8FDE\u7EED\u7684peer-keepalive\u6D88\u606F\uFF0C\u5219vPC auto-recovery \u542F\u7528\u3002</li><li>SW2\u627F\u62C5\u4E3B\u89D2\u8272\uFF0C\u5E76\u542F\u7528\u5B83\u7684\u672C\u5730vPC\uFF0C\u4F1A\u7ED5\u8FC7\u4E00\u81F4\u6027\u68C0\u67E5\u3002</li><li>\u4E4B\u540ESW1\u542F\u52A8\u6062\u590D\uFF0C\u6B64\u65F6SW2\u4ECD\u4FDD\u7559\u5176\u4E3B\u89D2\u8272\uFF0CSW1\u4F5C\u4E3A\u5907\u89D2\u8272\uFF0C\u6267\u884C\u4E00\u81F4\u6027\u68C0\u67E5\uFF0C\u5E76\u91C7\u53D6\u9002\u5F53\u7684\u64CD\u4F5C\u3002</li></ul><p><strong>\u5EFA\u8BAE\u5728vPC\u73AF\u5883\u4E2D\u542F\u7528auto-recovery</strong>\uFF08Nexus\u7CFB\u5217\u4E2D\u6839\u636E\u8BBE\u5907\u578B\u53F7\u4E0D\u540C\uFF0C\u8BE5\u7279\u6027\u9ED8\u8BA4\u5F00\u542F\u6216\u5173\u95ED\uFF09</p><p>\u6709\u4E00\u79CD\u6781\u7AEF\u573A\u666F\uFF0CvPC auto-recovery\u529F\u80FD\u53EF\u80FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u53CC\u6D3B\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u9996\u5148vPC peer-link\u4E2D\u65AD\uFF0C\u7136\u540EvPC peer-keepalive\u4E2D\u65AD\uFF0C\u90A3\u4E48\u5C06\u4F1A\u5F62\u6210\u53CC\u6D3B\u573A\u666F\u3002</p><div class="custom-container info"><p class="custom-container-title">\u539F\u6587\u94FE\u63A5</p><p>https://zhuanlan.zhihu.com/p/92280351</p></div><div class="custom-container tip"><p class="custom-container-title">\u53C2\u8003</p><p>https://www.cisco.com/c/en/us/support/docs/switches/nexus-7000-series-switches/116187-configure-vpc-00.html</p></div>`,20),a=[v];function d(r,c){return i(),n("div",null,a)}var o=e(l,[["render",d],["__file","vpcAutoRecoveryConfiguration.html.vue"]]);export{o as default};
