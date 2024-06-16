import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as s,a as i}from"./app-Cek8pqjJ.js";const a={},n=i('<p>ECS功能，可以用于将客户端IP地址传递给所要请求域名的权威DNS服务器。</p><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h2><h3 id="zdns配置插入" tabindex="-1"><a class="header-anchor" href="#zdns配置插入"><span>ZDNS配置插入</span></a></h3><h3 id="f5-gtm配置读取" tabindex="-1"><a class="header-anchor" href="#f5-gtm配置读取"><span>f5 GTM配置读取</span></a></h3><div class="hint-container tip"><p class="hint-container-title">f5社区</p><p>转载至：<br> https://community.f5.com/t5/technical-articles/using-client-subnet-in-dns-requests/ta-p/282196</p></div><p>BIG-IP DNS 14.0 now supports edns-client-subnet (ECS) for both responding to client requests (GSLB) or forwarding client requests (screening). The following is a quick start on using this feature.</p><h4 id="what-is-edns-client-subnet-ecs" tabindex="-1"><a class="header-anchor" href="#what-is-edns-client-subnet-ecs"><span>What is EDNS-Client-Subnet (ECS)</span></a></h4><p>If you are familiar with X-Forwarded-For headers in HTTP requests, ECS solves a similar problem. The problem is how to forward a DNS request through a proxy and preserve information about the original request (IP Address). Some of this discussion I also cover in a previous article,<a href="https://devcentral.f5.com/s/articles/implementing-client-subnet-in-dns-requests" target="_blank" rel="noopener noreferrer">Implementing Client Subnet in DNS Requests </a>.</p><h4 id="traditional-dns-requests" tabindex="-1"><a class="header-anchor" href="#traditional-dns-requests"><span>Traditional DNS Requests</span></a></h4><p>When a traditional DNS request is made, a client makes a request to a “local” DNS server (LDNS), and that request is forwarded to the authoritative DNS server for that domain. When a topology (send different responses based on the source address) record is evaluated it will use the source IP of the LDNS server. Usually this is OK for most applications, but it would be ideal to be able to forward more precise information from the LDNS server.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/6994i1672E85A3CA93772" alt=""></p><h4 id="ecs-dns-requests" tabindex="-1"><a class="header-anchor" href="#ecs-dns-requests"><span>ECS DNS Requests</span></a></h4><p>Using ECS a LDNS server can inject additional meta-data about the request that includes information about the source IP address of the client. In the following example a “Client Subnet” of 192.0.2.0/24 is forwarded to the DNS server.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/5611i9E1BAB0C32338836/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EYQAY.png"></p><h4 id="ecs-on-big-ip-dns" tabindex="-1"><a class="header-anchor" href="#ecs-on-big-ip-dns"><span>ECS on BIG-IP DNS</span></a></h4><p>F5 BIG-IP DNS can use ECS in two ways.</p><ul><li>Use ECS when handling topology requests</li><li>Inject ECS when “screening” a DNS server</li></ul><h4 id="using-ecs-with-big-ip-dns-topology" tabindex="-1"><a class="header-anchor" href="#using-ecs-with-big-ip-dns-topology"><span>Using ECS with BIG-IP DNS Topology</span></a></h4><p>There are two methods of configuring BIG-IP DNS to use ECS. Either at the wide-ip or globally.</p><p>To configure ECS on a wide-ip:</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/3206i78F8DDD9C7DF532C/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EZQAY.png"></p><p>To configure ECS globally. Under DNS Settings.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/748iDB9A2F4708C665AA/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EaQAI.png"></p><h4 id="injecting-ecs-records" tabindex="-1"><a class="header-anchor" href="#injecting-ecs-records"><span>Injecting ECS records</span></a></h4><p>BIG-IP DNS can also proxy requests to other DNS servers (BIG-IP DNS or other vendors). When you modify the DNS profile to insert an ECS record.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/9882iBA42E4077407A707/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EbQAI.png"></p><p>You will observe that the original /32 address will be forwarded to any DNS servers that are in the pool for that particular Virtual Server.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/2331iFF7C8369B2999ADB/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EcQAI.png"></p><p>The following is a diagram of the above.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/6961iF22CA9584464C1AE/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EdQAI.png"></p>',30),r=[n];function o(l,c){return s(),t("div",null,r)}const h=e(a,[["render",o],["__file","ecs.html.vue"]]),m=JSON.parse('{"path":"/os/dns/ecs.html","title":"EDNS Client Subnet","lang":"zh-CN","frontmatter":{"index":true,"icon":"dns","title":"EDNS Client Subnet","author":"小苹果儿","date":"2022-07-27T00:00:00.000Z","category":["DNS"],"tag":["edns","ecs"]},"headers":[{"level":2,"title":"配置方法","slug":"配置方法","link":"#配置方法","children":[{"level":3,"title":"ZDNS配置插入","slug":"zdns配置插入","link":"#zdns配置插入","children":[]},{"level":3,"title":"f5 GTM配置读取","slug":"f5-gtm配置读取","link":"#f5-gtm配置读取","children":[]}]}],"git":{"createdTime":1658861486000,"updatedTime":1685880347000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":3}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"os/dns/ecs.md","localizedDate":"2022年7月27日","excerpt":"<p>ECS功能，可以用于将客户端IP地址传递给所要请求域名的权威DNS服务器。</p>\\n<h2>配置方法</h2>\\n<h3>ZDNS配置插入</h3>\\n<h3>f5 GTM配置读取</h3>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">f5社区</p>\\n<p>转载至：<br>\\nhttps://community.f5.com/t5/technical-articles/using-client-subnet-in-dns-requests/ta-p/282196</p>\\n</div>\\n<p>BIG-IP DNS 14.0 now supports edns-client-subnet (ECS) for both responding to client requests (GSLB) or forwarding client requests (screening). The following is a quick start on using this feature.</p>"}');export{h as comp,m as data};
