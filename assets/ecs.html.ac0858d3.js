import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as o,a as t,b as n,e as a,d as e,r as d}from"./app.84b9c7b3.js";const c={},h=a('<p>ECS\u529F\u80FD\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5C06\u5BA2\u6237\u7AEFIP\u5730\u5740\u4F20\u9012\u7ED9\u6240\u8981\u8BF7\u6C42\u57DF\u540D\u7684\u6743\u5A01DNS\u670D\u52A1\u5668\u3002</p><h2 id="\u914D\u7F6E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u6CD5" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u6CD5</h2><h3 id="zdns\u914D\u7F6E\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#zdns\u914D\u7F6E\u63D2\u5165" aria-hidden="true">#</a> ZDNS\u914D\u7F6E\u63D2\u5165</h3><h3 id="f5-gtm\u914D\u7F6E\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#f5-gtm\u914D\u7F6E\u8BFB\u53D6" aria-hidden="true">#</a> f5 GTM\u914D\u7F6E\u8BFB\u53D6</h3><div class="custom-container tip"><p class="custom-container-title">f5\u793E\u533A</p><p>\u8F6C\u8F7D\u81F3\uFF1A<br> https://community.f5.com/t5/technical-articles/using-client-subnet-in-dns-requests/ta-p/282196</p></div><p>BIG-IP DNS 14.0 now supports edns-client-subnet (ECS) for both responding to client requests (GSLB) or forwarding client requests (screening). The following is a quick start on using this feature.</p><h4 id="what-is-edns-client-subnet-ecs" tabindex="-1"><a class="header-anchor" href="#what-is-edns-client-subnet-ecs" aria-hidden="true">#</a> What is EDNS-Client-Subnet (ECS)</h4>',7),l=e("If you are familiar with X-Forwarded-For headers in HTTP requests, ECS solves a similar problem. The problem is how to forward a DNS request through a proxy and preserve information about the original request (IP Address). Some of this discussion I also cover in a previous article,"),p={href:"https://devcentral.f5.com/s/articles/implementing-client-subnet-in-dns-requests",target:"_blank",rel:"noopener noreferrer"},m=e("Implementing Client Subnet in DNS Requests "),g=e("."),u=a('<h4 id="traditional-dns-requests" tabindex="-1"><a class="header-anchor" href="#traditional-dns-requests" aria-hidden="true">#</a> Traditional DNS Requests</h4><p>When a traditional DNS request is made, a client makes a request to a \u201Clocal\u201D DNS server (LDNS), and that request is forwarded to the authoritative DNS server for that domain. When a topology (send different responses based on the source address) record is evaluated it will use the source IP of the LDNS server. Usually this is OK for most applications, but it would be ideal to be able to forward more precise information from the LDNS server.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/6994i1672E85A3CA93772" alt=""></p><h4 id="ecs-dns-requests" tabindex="-1"><a class="header-anchor" href="#ecs-dns-requests" aria-hidden="true">#</a> ECS DNS Requests</h4><p>Using ECS a LDNS server can inject additional meta-data about the request that includes information about the source IP address of the client. In the following example a \u201CClient Subnet\u201D of 192.0.2.0/24 is forwarded to the DNS server.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/5611i9E1BAB0C32338836/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EYQAY.png"></p><h4 id="ecs-on-big-ip-dns" tabindex="-1"><a class="header-anchor" href="#ecs-on-big-ip-dns" aria-hidden="true">#</a> ECS on BIG-IP DNS</h4><p>F5 BIG-IP DNS can use ECS in two ways.</p><ul><li>Use ECS when handling topology requests</li><li>Inject ECS when \u201Cscreening\u201D a DNS server</li></ul><h4 id="using-ecs-with-big-ip-dns-topology" tabindex="-1"><a class="header-anchor" href="#using-ecs-with-big-ip-dns-topology" aria-hidden="true">#</a> Using ECS with BIG-IP DNS Topology</h4><p>There are two methods of configuring BIG-IP DNS to use ECS. Either at the wide-ip or globally.</p><p>To configure ECS on a wide-ip:</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/3206i78F8DDD9C7DF532C/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EZQAY.png"></p><p>To configure ECS globally. Under DNS Settings.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/748iDB9A2F4708C665AA/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EaQAI.png"></p><h4 id="injecting-ecs-records" tabindex="-1"><a class="header-anchor" href="#injecting-ecs-records" aria-hidden="true">#</a> Injecting ECS records</h4><p>BIG-IP DNS can also proxy requests to other DNS servers (BIG-IP DNS or other vendors). When you modify the DNS profile to insert an ECS record.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/9882iBA42E4077407A707/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EbQAI.png"></p><p>You will observe that the original /32 address will be forwarded to any DNS servers that are in the pool for that particular Virtual Server.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/2331iFF7C8369B2999ADB/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EcQAI.png"></p><p>The following is a diagram of the above.</p><p><img src="https://community.f5.com/t5/image/serverpage/image-id/6961iF22CA9584464C1AE/image-size/large?v=v2&amp;px=999" alt="0151T000003d7EdQAI.png"></p>',22);function f(S,v){const i=d("ExternalLinkIcon");return s(),o("div",null,[h,t("p",null,[l,t("a",p,[m,n(i)]),g]),u])}var E=r(c,[["render",f],["__file","ecs.html.vue"]]);export{E as default};
