import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c as t,a as e,b as s,d as n,e as a}from"./app.cb3ed302.js";const v={},c=n(`<h1 id="\u4E00\u6587\u638C\u63E1-ansible-\u81EA\u52A8\u5316\u8FD0\u7EF4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6587\u638C\u63E1-ansible-\u81EA\u52A8\u5316\u8FD0\u7EF4" aria-hidden="true">#</a> \u4E00\u6587\u638C\u63E1 Ansible \u81EA\u52A8\u5316\u8FD0\u7EF4</h1><blockquote><p>\u4F5C\u8005: kangvcar</p></blockquote><blockquote><p>\u6765\u6E90: https://my.oschina.net/kangvcar/blog/1830155</p></blockquote><h2 id="_1\u4E00\u3001\u57FA\u672C\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_1\u4E00\u3001\u57FA\u672C\u90E8\u7F72" aria-hidden="true">#</a> 1<strong>\u4E00\u3001\u57FA\u672C\u90E8\u7F72</strong></h2><h3 id="\u5B89\u88C5ansible" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5ansible" aria-hidden="true">#</a> \u5B89\u88C5Ansible</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># yum -y install epel-release
# yum list all *ansible*
# yum info ansible
# yum -y install ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ansible\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Ansible\u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/ansible/ansible.cfg    \u4E3B\u914D\u7F6E\u6587\u4EF6
/etc/ansible/hosts          Inventory
/usr/bin/ansible-doc        \u5E2E\u52A9\u6587\u4EF6
/usr/bin/ansible-playbook   \u6307\u5B9A\u8FD0\u884C\u4EFB\u52A1\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9A\u4E49inventory" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49inventory" aria-hidden="true">#</a> \u5B9A\u4E49Inventory</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /etc/ansible/
# cp hosts{,.bak}
# &gt; hosts

# cat hosts
[webserver]
127.0.0.1
192.168.10.149

[dbserver]
192.168.10.113
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u79D8\u94A5\u65B9\u5F0F\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u79D8\u94A5\u65B9\u5F0F\u8FDE\u63A5" aria-hidden="true">#</a> \u4F7F\u7528\u79D8\u94A5\u65B9\u5F0F\u8FDE\u63A5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ssh-keygen -t rsa 
# ssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.10.149
# ssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.10.113
# ssh-copy-id -i /root/.ssh/id_rsa.pub root@127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5E2E\u52A9" aria-hidden="true">#</a> \u4F7F\u7528\u5E2E\u52A9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-doc -l                \u5217\u51FAansible\u6240\u6709\u7684\u6A21\u5757
# ansible-doc -s MODULE_NAME    \u67E5\u770B\u6307\u5B9A\u6A21\u5757\u5177\u4F53\u9002\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u547D\u4EE4\u5E94\u7528\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#ansible\u547D\u4EE4\u5E94\u7528\u57FA\u7840" aria-hidden="true">#</a> Ansible\u547D\u4EE4\u5E94\u7528\u57FA\u7840</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BED\u6CD5\uFF1Aansible &lt;host-pattern&gt; [-f forks] [-m module_name] [-a args]

&lt;host-pattern&gt;  \u8FD9\u6B21\u547D\u4EE4\u5BF9\u54EA\u4E9B\u4E3B\u673A\u751F\u6548\u7684
   inventory group name
   ip
   all
-f forks        \u4E00\u6B21\u5904\u7406\u591A\u5C11\u4E2A\u4E3B\u673A
-m module_name  \u8981\u4F7F\u7528\u7684\u6A21\u5757
-a args         \u6A21\u5757\u7279\u6709\u7684\u53C2\u6570

# ansible 192.168.10.113 -m command -a &#39;date&#39;
# ansible webserver -m command -a &#39;date&#39;
# ansible all -m command -a &#39;date&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u4E8C\u3001\u5E38\u89C1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2\u4E8C\u3001\u5E38\u89C1\u6A21\u5757" aria-hidden="true">#</a> 2<strong>\u4E8C\u3001\u5E38\u89C1\u6A21\u5757</strong></h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>command     \u547D\u4EE4\u6A21\u5757(\u9ED8\u8BA4\u6A21\u5757)\u7528\u4E8E\u5728\u8FDC\u7A0B\u4E3B\u673A\u6267\u884C\u547D\u4EE4\uFF1B\u4E0D\u80FD\u4F7F\u7528\u53D8\u91CF\uFF0C\u7BA1\u9053\u7B49
# ansible all -a &#39;date&#39;
cron        \u8BA1\u5212\u4EFB\u52A1    
   month   \u6307\u5B9A\u6708\u4EFD
   minute  \u6307\u5B9A\u5206\u949F
   job     \u6307\u5B9A\u4EFB\u52A1
   day     \u8868\u793A\u90A3\u4E00\u5929
   hour    \u6307\u5B9A\u5C0F\u65F6
   weekday \u8868\u793A\u5468\u51E0
   state   \u8868\u793A\u662F\u6DFB\u52A0\u8FD8\u662F\u5220\u9664
       present\uFF1A\u5B89\u88C5
       absent\uFF1A\u79FB\u9664
   # ansible webserver -m cron -a &#39;minute=&quot;*/10&quot; job=&quot;/bin/echo hello&quot; name=&quot;test cron job&quot;&#39;   #\u4E0D\u5199\u9ED8\u8BA4\u90FD\u662F*\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u540D\u5B57 
   # ansible webserver -a &#39;crontab -l&#39;
   # ansible webserver -m cron -a &#39;minute=&quot;*/10&quot; job=&quot;/bin/echo hello&quot; name=&quot;test cron job&quot; state=absent&#39;  #\u79FB\u9664\u4EFB\u52A1
user    \u7528\u6237\u8D26\u53F7\u7BA1\u7406
   name    \u7528\u6237\u540D
   uid     uid
   state   \u72B6\u6001  
   group   \u5C5E\u4E8E\u54EA\u4E2A\u7EC4
   groups  \u9644\u52A0\u7EC4
   home    \u5BB6\u76EE\u5F55
   createhome  \u662F\u5426\u521B\u5EFA\u5BB6\u76EE\u5F55
   comment \u6CE8\u91CA\u4FE1\u606F
   system  \u662F\u5426\u662F\u7CFB\u7EDF\u7528\u6237
   
   # ansible all -m user -a &#39;name=&quot;user1&quot;&#39;
   # ansible all -m user -a &#39;name=&quot;user1&quot; state=absent&#39;
group   \u7EC4\u7BA1\u7406
   gid     gid      
   name    \u7EC4\u540D               
   state   \u72B6\u6001           
   system  \u662F\u5426\u662F\u7CFB\u7EDF\u7EC4
   # ansible webserver -m group -a &#39;name=mysql gid=306 system=yes&#39;
   # ansible webserver -m user -a &#39;name=mysql uid=306 system=yes group=mysql&#39;
copy    \u590D\u5236\u6587\u4EF6(\u590D\u5236\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B\u4E3B\u673A\u7684\u6307\u5B9A\u4F4D\u7F6E)
   src     \u5B9A\u4E49\u672C\u5730\u6E90\u6587\u4EF6\u8DEF\u5F84
   dest    \u5B9A\u4E49\u8FDC\u7A0B\u76EE\u5F55\u6587\u4EF6\u8DEF\u5F84(\u7EDD\u5BF9\u8DEF\u5F84)
   owner   \u5C5E\u4E3B
   group   \u5C5E\u7EC4
   mode    \u6743\u9650
   content \u53D6\u4EE3src=,\u8868\u793A\u76F4\u63A5\u7528\u6B64\u5904\u7684\u4FE1\u606F\u751F\u6210\u4E3A\u6587\u4EF6\u5185\u5BB9
   # yum -y install libselinux-python
   # ansible all -m copy -a &#39;src=/etc/fstab dest=/tmp/fstab.ansible owner=root mode=640&#39;
   # ansible all -m copy -a &#39;content=&quot;hello ansible
Hi ansible&quot; dest=/tmp/test.ansible&#39;
file    \u8BBE\u7F6E\u6587\u4EF6\u7684\u5C5E\u6027
   path|dest|name  \u5BF9\u90A3\u4E2A\u6587\u4EF6\u505A\u8BBE\u5B9A
   
   \u521B\u5EFA\u6587\u4EF6\u7684\u7B26\u53F7\u94FE\u63A5\uFF1A
       src\uFF1A    \u6307\u5B9A\u6E90\u6587\u4EF6
       path\uFF1A   \u6307\u660E\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6\u8DEF\u5F84
   # ansible all -m file -a &#39;owner=mysql group=mysql mode=644 path=/tmp/fstab.ansible&#39;
   # ansible all -m file -a &#39;path=/tmp/fstab.link src=/tmp/fstab.ansible state=link&#39;
ping    \u6D4B\u8BD5\u6307\u5B9A\u4E3B\u673A\u662F\u5426\u80FD\u8FDE\u63A5
   # ansible all -m ping
service \u7BA1\u7406\u670D\u52A1\u8FD0\u884C\u72B6\u6001
   enabled \u662F\u5426\u5F00\u673A\u81EA\u52A8\u542F\u52A8
   name    \u6307\u5B9A\u670D\u52A1\u540D
   state   \u6307\u5B9A\u670D\u52A1\u72B6\u6001
       started     \u542F\u52A8\u670D\u52A1
       stoped      \u505C\u6B62\u670D\u52A1
       restarted   \u91CD\u542F\u670D\u52A1
   arguments   \u670D\u52A1\u7684\u53C2\u6570
   # ansible webserver -m service -a &#39;enabled=true name=httpd state=started&#39;
shell   \u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u8FD0\u884C\u547D\u4EE4
   \u5C24\u5176\u662F\u7528\u5230\u7BA1\u9053\u53D8\u91CF\u7B49\u529F\u80FD\u7684\u590D\u6742\u547D\u4EE4
   # ansible all -m shell -a &#39;echo devopsman | passwd --stdin user1&#39;
script  \u5C06\u672C\u5730\u811A\u672C\u590D\u5236\u5230\u8FDC\u7A0B\u4E3B\u673A\u5E76\u8FD0\u884C\u4E4B
   # ansible all -m script -a &#39;/tmp/test.sh&#39;
yum     \u5B89\u88C5\u7A0B\u5E8F\u5305
   name    \u7A0B\u5E8F\u5305\u540D\u79F0(\u4E0D\u6307\u5B9A\u7248\u672C\u5C31\u5B89\u88C5\u6700\u65B0\u7684\u7248\u672Clatest)
   state   present,latest\u8868\u793A\u5B89\u88C5\uFF0Cabsent\u8868\u793A\u5378\u8F7D
   # ansible webserver -m yum -a &#39;name=httpd&#39;
   # ansible all -m yum -a &#39;name=ntpdate&#39;  #\u9ED8\u8BA4\u5C31\u662F\u5B89\u88C5
   # ansible all -m yum -a &#39;name=ntpdate state=absent&#39;
setup   \u6536\u96C6\u8FDC\u7A0B\u4E3B\u673A\u7684facts
   \u6BCF\u4E2A\u88AB\u7BA1\u7406\u8282\u70B9\u5728\u63A5\u53D7\u5E76\u8FD0\u884C\u7BA1\u7406\u547D\u4EE4\u4E4B\u524D\uFF0C\u4F1A\u5C06\u81EA\u5DF1\u4E3B\u673A\u76F8\u5173\u4FE1\u606F\uFF0C\u5982\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\uFF0CIP\u5730\u5740\u7B49\u62A5\u544A\u7ED9\u8FDC\u7A0B\u7684ansible\u4E3B\u673A 
   # ansible all -m setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u4E09\u3001ansible-playbook" tabindex="-1"><a class="header-anchor" href="#_3\u4E09\u3001ansible-playbook" aria-hidden="true">#</a> 3<strong>\u4E09\u3001Ansible playbook</strong></h2><p>\u7EC4\u6210\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>inventory       #\u4EE5\u4E0B\u64CD\u4F5C\u5E94\u7528\u7684\u4E3B\u673A
modules         #\u8C03\u7528\u54EA\u4E9B\u6A21\u5757\u505A\u4EC0\u4E48\u6837\u7684\u64CD\u4F5C
ad hoc commands #\u5728\u8FD9\u4E9B\u4E3B\u673A\u4E0A\u8FD0\u884C\u54EA\u4E9B\u547D\u4EE4
playbooks   
   tasks       #\u4EFB\u52A1,\u5373\u8C03\u7528\u6A21\u5757\u5B8C\u6210\u7684\u67D0\u64CD\u4F5C
   variable    #\u53D8\u91CF
   templates   #\u6A21\u677F
   handlers    #\u5904\u7406\u5668\uFF0C\u7531\u67D0\u4E8B\u4EF6\u89E6\u53D1\u6267\u884C\u7684\u64CD\u4F5C
   roles       #\u89D2\u8272
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4\u56DB\u3001yaml" tabindex="-1"><a class="header-anchor" href="#_4\u56DB\u3001yaml" aria-hidden="true">#</a> 4<strong>\u56DB\u3001YAML</strong></h2><h3 id="_4-1-yaml\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_4-1-yaml\u4ECB\u7ECD" aria-hidden="true">#</a> 4.1 YAML\u4ECB\u7ECD</h3><p>YAML\u662F\u4E00\u4E2A\u53EF\u8BFB\u6027\u9AD8\u7684\u7528\u6765\u8868\u8FBE\u8D44\u6599\u5E8F\u5217\u7684\u683C\u5F0F\u3002YAML\u53C2\u8003\u4E86\u5176\u5B83\u591A\u79CD\u8BED\u8A00\uFF0C\u5305\u62EC\uFF1AXML\u3001C\u8BED\u8A00\u3001Python\u3001Perl\u4EE5\u53CA\u7535\u5B50\u90AE\u4EF6\u683C\u5F0FRFC2822\u7B49\u3002ClarkEvans\u57282001\u5E74\u9996\u6B21\u53D1\u8868\u4E86\u8FD9\u79CD\u8BED\u8A00\uFF0C\u53E6\u5916Ingy dot Net\u4E0EOren Ben-Kiki\u4E5F\u662F\u8FD9\u8BED\u8A00\u7684\u5171\u540C\u8BBE\u8BA1\u8005\u3002</p><p>YAML Ain&#39;t Markup Language,\u5373YAML\u4E0D\u662FXML\uFF0C\u4E0D\u8FC7\uFF0C\u5728\u5F00\u53D1\u8FD9\u79CD\u8BED\u8A00\u65F6\uFF0CYAML\u7684\u610F\u601D\u5176\u5B9E\u662F\uFF1A&quot;Yet Another Markup Language&quot;(\u4ECD\u662F\u4E00\u79CD\u6807\u8BB0\u8BED\u8A00)\uFF0C\u5176\u7279\u6027\uFF1A</p><ul><li>YAML\u7684\u53EF\u8BFB\u6027\u597D</li><li>YAML\u548C\u811A\u672C\u8BED\u8A00\u7684\u4EA4\u4E92\u6027\u597D</li><li>YAML\u4F7F\u7528\u5B9E\u73B0\u8BED\u8A00\u7684\u6570\u636E\u7C7B\u578B</li><li>YAML\u6709\u4E00\u4E2A\u4E00\u81F4\u7684\u4FE1\u606F\u6A21\u578B</li><li>YAML\u6613\u4E8E\u5B9E\u73B0</li><li>YAML\u53EF\u4EE5\u57FA\u4E8E\u6D41\u6765\u5904\u7406</li><li>YAML\u8868\u8FBE\u80FD\u529B\u5F3A\uFF0C\u6269\u5C55\u6027\u597D</li></ul><blockquote><p>\u66F4\u591A\u7684<strong>\u5185\u5BB9\u53CA\u89C4\u8303\u53C2\u89C1</strong>[1]</p></blockquote><h3 id="_4-2-yaml\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-2-yaml\u8BED\u6CD5" aria-hidden="true">#</a> 4.2 YAML\u8BED\u6CD5</h3><p>YAML\u7684\u8BED\u6CD5\u548C\u5176\u4ED6\u9AD8\u9636\u8BED\u8A00\u7C7B\u4F3C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7B80\u5355\u8868\u8FBE\u6E05\u5355\u3001\u6563\u5217\u8868\u3001\u6807\u91CF\u7B49\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u7ED3\u6784(structure)\u901A\u8FC7\u7A7A\u683C\u6765\u5C55\u793A\uFF0C\u5E8F\u5217(sequence)\u91CC\u7684\u9879\u7528&quot;-&quot;\u6765\u8868\u793A\uFF0CMap\u91CC\u9762\u7684\u952E\u503C\u5BF9\u7528&quot;:&quot;\u5206\u5272\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: john smith
age: 41
gender: male
spouse:
   name:jane smith
   age:37
   gender: female
children:
   -   name:jimmy smith
       age:17
       gender: male
   -   name:jenny smith
       age: 13
       gender: female
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YAML\u6587\u4EF6\u6269\u5C55\u540D\u901A\u5E38\u4E3A.yaml\uFF0C\u5982example.yaml</p>`,31),m={href:"http://mp.weixin.qq.com/s?__biz=MzAwNTM5Njk3Mw==&mid=2247506725&idx=2&sn=cb0395b93925ce3a06edf60d7ca7d2c1&chksm=9b1fdba7ac6852b182a5907c301fc9df85497315989ee99c4fbc2a88fad84a6032783b3524b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},u=a("Docker+K8s+Jenkins \u4E3B\u6D41\u6280\u672F\u5168\u89E3\u89C6\u9891\u8D44\u6599"),b=n(`<h3 id="_4-2-1-list" tabindex="-1"><a class="header-anchor" href="#_4-2-1-list" aria-hidden="true">#</a> 4.2.1 list</h3><p>\u5217\u8868\u7684\u6240\u6709\u5143\u7D20\u5747\u4F7F\u7528&quot;-&quot;\u6253\u5934\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># A list of testy fruits
- Apple
- Orange
- Strawberry
- Mango
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-2-dictionary" tabindex="-1"><a class="header-anchor" href="#_4-2-2-dictionary" aria-hidden="true">#</a> 4.2.2 dictionary</h3><p>\u5B57\u5178\u901A\u8FC7key\u4E0Evalue\u8FDB\u884C\u6807\u8BC6\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
# An employee record
name: Example Developer
job: Developer
skill: Elite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5C06key:value\u653E\u7F6E\u4E8E{}\u4E2D\u8FDB\u884C\u8868\u793A\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
#An exmloyee record
{name: Example Developer, job: Developer, skill: Elite}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5\u4E94\u3001ansible\u57FA\u7840\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_5\u4E94\u3001ansible\u57FA\u7840\u5143\u7D20" aria-hidden="true">#</a> 5<strong>\u4E94\u3001Ansible\u57FA\u7840\u5143\u7D20</strong></h2><h3 id="_5-1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-1-\u53D8\u91CF" aria-hidden="true">#</a> 5.1 \u53D8\u91CF</h3><h4 id="_5-1-1-\u53D8\u91CF\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#_5-1-1-\u53D8\u91CF\u547D\u540D" aria-hidden="true">#</a> 5.1.1 \u53D8\u91CF\u547D\u540D</h4><p>\u53D8\u91CF\u540D\u4EC5\u80FD\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u4E14\u53EA\u80FD\u4EE5\u5B57\u6BCD\u5F00\u5934\u3002</p><h4 id="_5-1-2-facts" tabindex="-1"><a class="header-anchor" href="#_5-1-2-facts" aria-hidden="true">#</a> 5.1.2 facts</h4><p>facts\u662F\u7531\u6B63\u5728\u901A\u4FE1\u7684\u8FDC\u7A0B\u76EE\u6807\u4E3B\u673A\u53D1\u56DE\u7684\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u88AB\u4FDD\u5B58\u5728ansible\u53D8\u91CF\u4E2D\u3002\u8981\u83B7\u53D6\u6307\u5B9A\u7684\u8FDC\u7A0B\u4E3B\u673A\u6240\u652F\u6301\u7684\u6240\u6709facts\uFF0C\u53EF\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#ansible hostname -m setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-1-3-register" tabindex="-1"><a class="header-anchor" href="#_5-1-3-register" aria-hidden="true">#</a> 5.1.3 register</h4><p>\u628A\u4EFB\u52A1\u7684\u8F93\u51FA\u5B9A\u4E49\u4E3A\u53D8\u91CF\uFF0C\u7136\u540E\u7528\u4E8E\u5176\u4ED6\u4EFB\u52A1\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
   - shell: /usr/bin/foo
     register: foo_result
     ignore_errors: True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-4-\u901A\u8FC7\u547D\u4EE4\u884C\u4F20\u9012\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-1-4-\u901A\u8FC7\u547D\u4EE4\u884C\u4F20\u9012\u53D8\u91CF" aria-hidden="true">#</a> 5.1.4 \u901A\u8FC7\u547D\u4EE4\u884C\u4F20\u9012\u53D8\u91CF</h4><p>\u5728\u8FD0\u884Cplaybook\u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E9B\u53D8\u91CF\u4F9Bplaybook\u4F7F\u7528\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#ansible-playbook test.yml --extra-vars &quot;hosts=www user=devopsman&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-1-5-\u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-1-5-\u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF" aria-hidden="true">#</a> 5.1.5 \u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF</h4><p>\u5F53\u7ED9\u4E00\u4E2A\u4E3B\u673A\u5E94\u7528\u89D2\u8272\u7684\u65F6\u5019\u53EF\u4EE5\u4F20\u9012\u53D8\u91CF\uFF0C\u7136\u540E\u5728\u89D2\u8272\u5185\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webserver
 roles:
   - common
   - {role: foo_app_instance, dir: &#39;/web/htdocs/a.com&#39;, port: 8080}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-inventory" tabindex="-1"><a class="header-anchor" href="#_5-2-inventory" aria-hidden="true">#</a> 5.2 Inventory</h3><p>ansible\u7684\u4E3B\u8981\u529F\u7528\u5728\u4E8E\u6279\u91CF\u4E3B\u673A\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u4FBF\u6377\u7684\u4F7F\u7528\u5176\u4E2D\u7684\u90E8\u5206\u4E3B\u673A\uFF0C\u53EF\u4EE5\u5728inventory file\u4E2D\u5C06\u5176\u5206\u7EC4\u547D\u540D\uFF0C\u9ED8\u8BA4\u7684inventory file\u4E3A/etc/ansible/hosts</p><p>inventory file\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u4E14\u4E5F\u53EF\u4EE5\u901A\u8FC7Dynamic Inventory\u6765\u52A8\u6001\u751F\u6210\u3002</p><h4 id="_5-2-1-inventory\u6587\u4EF6\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-2-1-inventory\u6587\u4EF6\u683C\u5F0F" aria-hidden="true">#</a> 5.2.1 inventory\u6587\u4EF6\u683C\u5F0F</h4><p>inventory\u6587\u4EF6\u9075\u5FAAINI\u6587\u4EF6\u98CE\u683C\uFF0C\u4E2D\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26\u4E3A\u7EC4\u540D\u3002\u53EF\u4EE5\u5C06\u540C\u4E00\u4E2A\u4E3B\u673A\u540C\u65F6\u5F52\u5E76\u5230\u591A\u4E2A\u4E0D\u540C\u7684\u7EC4\u4E2D\uFF1B\u6B64\u5916\uFF0C\u5F53\u5982\u82E5\u76EE\u6807\u4E3B\u673A\u4F7F\u7528\u975E\u9ED8\u8BA4\u7684SSH\u7AEF\u53E3\uFF0C\u8FD8\u53EF\u4EE5\u5728\u4E3B\u673A\u540D\u79F0\u4E4B\u540E\u4F7F\u7528\u5192\u53F7\u52A0\u7AEF\u53E3\u53F7\u6765\u8868\u660E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ntp.devopsman.cn

[webserver]
www1.devopsman.cn:2222
www2.devopsman.cn

[dbserver]
db1.devopsman.cn
db2.devopsman.cn
db3.devopsman.cn

\u5982\u679C\u4E3B\u673A\u540D\u9075\u5FAA\u76F8\u4F3C\u7684\u547D\u540D\u6A21\u5F0F\uFF0C\u8FD8\u53EF\u4F7F\u7528\u5217\u8868\u7684\u65B9\u5F0F\u6807\u8BC6\u4E2A\u4E3B\u673A\uFF0C\u4F8B\u5982\uFF1A
[webserver]
www[01:50].example.com

[databases]
db-[a:f].example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-\u4E3B\u673A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u4E3B\u673A\u53D8\u91CF" aria-hidden="true">#</a> 5.2.2 \u4E3B\u673A\u53D8\u91CF</h4><p>\u53EF\u4EE5\u5728inventory\u4E2D\u5B9A\u4E49\u4E3B\u673A\u65F6\u4E3A\u5176\u6DFB\u52A0\u4E3B\u673A\u53D8\u91CF\u4EE5\u4FBF\u4E8E\u5728playbook\u4E2D\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[webserver]
www1.devopsman.cn http_port=80 maxRequestsPerChild=808
www2.devopsman.cn http_port=8080 maxRequestsPerChild=909
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-3-\u7EC4\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-2-3-\u7EC4\u53D8\u91CF" aria-hidden="true">#</a> 5.2.3 \u7EC4\u53D8\u91CF</h4><p>\u7EC4\u53D8\u91CF\u662F\u6307\u8D4B\u4E88\u7ED9\u6307\u5B9A\u7EC4\u5185\u6240\u6709\u4E3B\u673A\u4E0A\u7684\u5728playbook\u4E2D\u53EF\u7528\u7684\u53D8\u91CF\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[webserver]
www1.devopsman.cn
www2.devopsman.cn

[webserver:vars]
ntp_server=ntp.devopsman.cn
nfs_server=nfs.devopsman.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2.4 \u7EC4\u5D4C\u5957</p><p>inventory\u4E2D\uFF0C\u7EC4\u8FD8\u53EF\u4EE5\u5305\u542B\u5176\u5B83\u7684\u7EC4\uFF0C\u5E76\u4E14\u4E5F\u53EF\u4EE5\u5411\u7EC4\u4E2D\u7684\u4E3B\u673A\u6307\u5B9A\u53D8\u91CF\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u53EA\u80FD\u5728ansible-playbook\u4E2D\u4F7F\u7528\uFF0C\u800Cansible\u4E0D\u652F\u6301\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[apache]
httpd1.devopsman.cn
httpd2.devopsman.cn

[nginx]
ngx1.devopsman.cn
ngx2.devopsman.cn

[webserver:children]    #\u56FA\u5B9A\u683C\u5F0F
apache
nginx

[webserver:vars]
ntp_server=ntp.devopsman.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-5-inventory\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_5-2-5-inventory\u53C2\u6570" aria-hidden="true">#</a> 5.2.5 inventory\u53C2\u6570</h4><p>ansible\u57FA\u4E8Essh\u8FDE\u63A5inventory\u4E2D\u6307\u5B9A\u7684\u8FDC\u7A0B\u4E3B\u673A\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u6307\u5B9A\u5176\u4EA4\u4E92\u65B9\u5F0F\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ansible_ssh_host
ansible_ssh_port
ansible_ssh_user
ansible_ssh_pass
ansible_sudo_pass
ansible_connection
ansible_ssh_private_key_file
ansible_shell_type
ansible_python_interpreter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-\u6761\u4EF6\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-3-\u6761\u4EF6\u6D4B\u8BD5" aria-hidden="true">#</a> 5.3 \u6761\u4EF6\u6D4B\u8BD5</h3><p>\u5982\u679C\u9700\u8981\u6839\u636E\u53D8\u91CF\u3001facts\u6216\u6B64\u524D\u4EFB\u52A1\u7684\u6267\u884C\u7ED3\u679C\u6765\u505A\u4E3A\u67D0task\u6267\u884C\u4E0E\u5426\u7684\u524D\u63D0\u65F6\u8981\u7528\u5230\u6761\u4EF6\u6D4B\u8BD5\u3002</p><h4 id="_5-3-1-when\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_5-3-1-when\u8BED\u53E5" aria-hidden="true">#</a> 5.3.1 when\u8BED\u53E5</h4><p>\u5728task\u540E\u6DFB\u52A0when\u5B57\u53E5\u5373\u53EF\u4F7F\u7528\u6761\u4EF6\u6D4B\u8BD5\uFF1Bwhen\u8BED\u53E5\u652F\u6301jinja2\u8868\u8FBE\u5F0F\u8BED\u53E5\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
 - name: &#39;shutdown debian flavored system&quot;
   command: /sbin/shutdown -h now
   when: ansible_os_family == &quot;Debian&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>when\u8BED\u53E5\u4E2D\u8FD8\u53EF\u4EE5\u4F7F\u7528jinja2\u7684\u5927\u591A&quot;filter&quot;,\u4F8B\u5982\u679C\u5FFD\u7565\u6B64\u524D\u67D0\u8BED\u53E5\u7684\u9519\u8BEF\u5E76\u57FA\u4E8E\u5176\u7ED3\u679C(failed\u6216success)\u8FD0\u884C\u540E\u9762\u6307\u5B9A\u7684\u8BED\u53E5\uFF0C\u53EF\u4F7F\u7528\u7C7B\u4F3C\u5982\u4E0B\u5F62\u5F0F\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
 - command:/bin/false
   register: result
   ignore_errors: True
 - command: /bin/something
   when: result|failed
 - command: /bin/something_else
   when: result|success
 - command: /bin/still/something_else
   when: result|skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916\uFF0Cwhen\u8BED\u53E5\u4E2D\u8FD8\u53EF\u4EE5\u4F7F\u7528facts\u6216playbook\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat cond.yml 
- hosts: all
 remote_user: root
 vars:
 - username: user10
 tasks:
 - name: create {{ username }} user
   user: name={{ username }} 
   when: ansible_fqdn == &quot;node1.exercise.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#_5-4-\u8FED\u4EE3" aria-hidden="true">#</a> 5.4 \u8FED\u4EE3</h3><p>\u5F53\u6709\u9700\u8981\u91CD\u590D\u6027\u6267\u884C\u7684\u4EFB\u52A1\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FED\u4EE3\u673A\u5236\u3002\u5176\u4F7F\u7528\u683C\u5F0F\u4E3A\u5C06\u9700\u8981\u8FED\u4EE3\u7684\u5185\u5BB9\u5B9A\u4E49\u4E3Aitem\u53D8\u91CF\u5F15\u7528\uFF0C\u5E76\u901A\u8FC7with_items\u8BED\u53E5\u6765\u6307\u660E\u8FED\u4EE3\u7684\u5143\u7D20\u5217\u8868\u5373\u53EF\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: add server user
 user: name={{ item }} state=persent groups=wheel
 with_items:
   - testuser1
   - testuser2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8BED\u53E5\u7684\u529F\u80FD\u7B49\u540C\u4E8E\u4E0B\u9762\u7684\u8BED\u53E5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: add user testuser1
 user: name=testuser1 state=present group=wheel
- name: add user testuser2
 user: name=testuser2 state=present group=wheel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u5B9E\u4E0A\uFF0Cwith_items\u4E2D\u53EF\u4EE5\u4F7F\u7528\u5143\u7D20\u8FD8\u53EF\u4E3Ahashes\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: add several users
 user: name={{ item.name}} state=present groups={{ item.groups }}
 with_items:
   - { name: &#39;testuser1&#39;, groups: &#39;wheel&#39;}
   - { name: &#39;testuser2&#39;, groups: &#39;root&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Ansible\u7684\u5FAA\u73AF\u673A\u5236\u8FD8\u6709\u66F4\u591A\u7684\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003<strong>\u5B98\u65B9\u6587\u6863</strong>[2]</p></blockquote><h2 id="_6\u516D\u3001\u6A21\u677F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_6\u516D\u3001\u6A21\u677F\u793A\u4F8B" aria-hidden="true">#</a> 6<strong>\u516D\u3001\u6A21\u677F\u793A\u4F8B\uFF1A</strong></h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># grep &#39;{{&#39; conf/httpd.conf 
MaxClients       {{ maxClients }}
Listen {{ httpd_port }}

# cat /etc/ansible/hosts
[webserver]
127.0.0.1 httpd_port=80 maxClients=100
192.168.10.149 httpd_port=8080 maxClients=200

# cat apache.yml 
- hosts: webserver
 remote_user: root
 vars:
 - package: httpd
 - service: httpd
 tasks:
 - name: install httpd package
   yum: name={{ package }} state=latest
 - name: install configuration file for httpd
   template: src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
   notify: 
   - restart httpd
 - name: start httpd service
   service: enabled=true name={{ service }} state=started
 
 handlers:
 - name: restart httpd
   service: name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7\u4E03\u3001ansible-playbooks" tabindex="-1"><a class="header-anchor" href="#_7\u4E03\u3001ansible-playbooks" aria-hidden="true">#</a> 7<strong>\u4E03\u3001Ansible playbooks</strong></h2><p>playbook\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A&quot;play&quot;\u7EC4\u6210\u7684\u5217\u8868\u3002play\u7684\u4E3B\u8981\u529F\u80FD\u5728\u4E8E\u5C06\u4E8B\u5148\u5F52\u5E76\u4E3A\u4E00\u7EC4\u7684\u4E3B\u673A\u88C5\u626E\u6210\u4E8B\u5148\u901A\u8FC7ansible\u4E2D\u7684task\u5B9A\u4E49\u597D\u7684\u89D2\u8272\u3002\u4ECE\u6839\u672C\u4E0A\u6765\u8BB2\uFF0C\u6240\u6709task\u65E0\u975E\u662F\u8C03\u7528ansible\u7684\u4E00\u4E2Amodule\u3002\u5C06\u591A\u4E2Aplay\u7EC4\u7EC7\u5728\u4E00\u4E2Aplaybook\u4E2D\uFF0C\u5373\u53EF\u4EE5\u8BA9\u4ED6\u4EEC\u8FDE\u540C\u8D77\u6765\u6309\u4E8B\u5148\u7F16\u6392\u7684\u673A\u5236\u540C\u5531\u4E00\u53F0\u5927\u620F\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webserver
 vars:
   http_port: 80
   max_clients: 256
 remote_user: root
 tasks:
 - name: ensure apache is at the latest version
   yum: name=httpd state=latest
 - name: ensure apache is running
   service: name=httpd state=started
 handlers:
   - name: restart apache
     service: name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-playbook\u57FA\u7840\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-1-playbook\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a> 7.1 playbook\u57FA\u7840\u7EC4\u4EF6</h3><h4 id="_7-1-1-hosts\u548Cusers" tabindex="-1"><a class="header-anchor" href="#_7-1-1-hosts\u548Cusers" aria-hidden="true">#</a> 7.1.1 Hosts\u548CUsers</h4><p>playbook\u4E2D\u7684\u6BCF\u4E00\u4E2Aplay\u7684\u76EE\u7684\u90FD\u662F\u4E3A\u4E86\u8BA9\u67D0\u4E2A\u6216\u67D0\u4E9B\u4E3B\u673A\u4EE5\u67D0\u4E2A\u6307\u5B9A\u7684\u7528\u6237\u8EAB\u4EFD\u6267\u884C\u4EFB\u52A1\u3002hosts\u7528\u4E8E\u6307\u5B9A\u8981\u6267\u884C\u6307\u5B9A\u4EFB\u52A1\u7684\u4E3B\u673A\uFF0C\u5176\u53EF\u4EE5\u4F7F\u4E00\u4E2A\u6216\u591A\u4E2A\u7531\u5192\u53F7\u5206\u9694\u4E3B\u673A\u7EC4\uFF1Bremote_user\u5219\u7528\u4E8E\u6307\u5B9A\u8FDC\u7A0B\u4E3B\u673A\u7684\u6267\u884C\u4EFB\u52A1\u7684\u7528\u6237\uFF0C\u5982\u4E0A\u9762\u7684\u5B9E\u4F8B\u4E2D\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webserver
 remote_user: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\uFF0Cremote_user\u4E5F\u53EF\u7528\u4E8E\u5404task\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u5176\u901A\u8FC7sudo\u7684\u65B9\u5F0F\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u6267\u884C\u4EFB\u52A1\uFF0C\u5176\u53EF\u7528\u4E8Eplay\u5168\u5C40\u6216\u5176\u4EFB\u52A1\uFF1B\u6B64\u5916\uFF0C\u751A\u81F3\u53EF\u4EE5\u5728sudo\u65F6\u4F7F\u7528sudo_user\u6307\u5B9Asudo\u65F6\u5207\u6362\u7684\u7528\u6237\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webserver
 remote_user: devopsman
 tasks:
  - name: test connection
    ping:
    remote_user: devopsman
    sudo: yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-1-2-\u4EFB\u52A1\u5217\u8868\u548Caction" tabindex="-1"><a class="header-anchor" href="#_7-1-2-\u4EFB\u52A1\u5217\u8868\u548Caction" aria-hidden="true">#</a> 7.1.2 \u4EFB\u52A1\u5217\u8868\u548Caction</h4><p>play\u7684\u4E3B\u9898\u90E8\u5206\u662Ftask list\u3002task list\u4E2D\u7684\u5404\u4EFB\u52A1\u6309\u6B21\u5E8F\u9010\u4E2A\u5728hosts\u4E2D\u6307\u5B9A\u7684\u6240\u6709\u4E3B\u673A\u4E0A\u6267\u884C\uFF0C\u5373\u5728\u6240\u6709\u4E3B\u673A\u4E0A\u5B8C\u6210\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u540E\u518D\u5F00\u59CB\u7B2C\u4E8C\u4E2A\u3002\u5728\u8FD0\u884C\u81EA\u4E0A\u800C\u4E0B\u67D0playbook\u65F6\uFF0C\u5982\u679C\u4E2D\u9014\u53D1\u751F\u9519\u8BEF\uFF0C\u6240\u6709\u5DF2\u6267\u884C\u4EFB\u52A1\u90FD\u53EF\u80FD\u56DE\u6EDA\uFF0C\u5728\u66F4\u6B63playbook\u540E\u91CD\u65B0\u6267\u884C\u4E00\u6B21\u5373\u53EF\u3002</p><p>taks\u7684\u76EE\u7684\u662F\u4F7F\u7528\u6307\u5B9A\u7684\u53C2\u6570\u6267\u884C\u6A21\u5757\uFF0C\u800C\u5728\u6A21\u5757\u53C2\u6570\u4E2D\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\u3002\u6A21\u5757\u6267\u884C\u662F\u5E42\u7B49\u7684\u3002\u8FD9\u610F\u5473\u7740\u591A\u6B21\u6267\u884C\u662F\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u5176\u7ED3\u679C\u5747\u4E00\u81F4\u3002</p><p>\u6BCF\u4E2Atask\u90FD\u5E94\u8BE5\u6709\u5176name\uFF0C\u7528\u4E8Eplaybook\u7684\u6267\u884C\u7ED3\u679C\u8F93\u51FA\uFF0C\u5EFA\u8BAE\u5176\u5185\u5BB9\u5C3D\u53EF\u80FD\u6E05\u6670\u5730\u63CF\u8FF0\u4EFB\u52A1\u6267\u884C\u6B65\u9AA4\uFF0C\u5982\u679C\u4E3A\u63D0\u4F9Bname\uFF0C\u5219action\u7684\u7ED3\u679C\u5C06\u7528\u4E8E\u8F93\u51FA\u3002</p><p>\u5B9A\u4E49task\u53EF\u4EE5\u4F7F\u7528&quot;action: module options&quot;\u6216\u201Dmodule\uFF1Aoptions\u201C\u7684\u683C\u5F0F\u63A8\u8350\u4F7F\u7528\u540E\u8005\u4EE5\u5B9E\u73B0\u5411\u540E\u517C\u5BB9\u3002\u5982\u679Caction\u4E00\u884C\u7684\u5185\u5BB9\u8FC7\u591A\uFF0C\u4E5F\u4E2D\u4F7F\u7528\u5728\u884C\u9996\u4F7F\u7528\u51E0\u4E2A\u7A7A\u767D\u5B57\u7B26\u8FDB\u884C\u6362\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
 - name:make sure apache is running
   service: name=httpd state=started
tasks:
 - name: run this command and ignore the result
   shell: /usr/bin/somecommand || /bin/true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F17\u591A\u7684\u6A21\u5757\u4E2D\uFF0C\u53EA\u6709command\u548Cshell\u6A21\u5757\u4EC5\u9700\u8981\u7ED9\u5B9A\u4E00\u4E2A\u5217\u8868\u800C\u65E0\u9700\u4F7F\u7528&quot;key=value&quot;\u683C\u5F0F\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
 - name: disable selinux
   command: /sbin/setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u547D\u4EE4\u6216\u811A\u672C\u7684\u9000\u51FA\u7801\u4E0D\u4E3A\u96F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u66FF\u4EE3\uFF1A</p><p>\u6216\u8005\u4F7F\u7528ignore_errors\u6765\u5FFD\u7565\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
 - name: run this command and ignore the result
   shell: /usr/bin/somecommand
   ignore_errors: True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-1-3handlers" tabindex="-1"><a class="header-anchor" href="#_7-1-3handlers" aria-hidden="true">#</a> 7.1.3handlers</h4><p>\u7528\u4E8E\u5F53\u5173\u6CE8\u7684\u8D44\u6E90\u53D1\u751F\u53D8\u5316\u65F6\u91C7\u53D6\u4E00\u5B9A\u7684\u64CD\u4F5C\u3002</p><p>&quot;notify&quot;\u8FD9\u4E2Aaction\u53EF\u7528\u4E8E\u5728\u6BCF\u4E2Aplay\u7684\u6700\u540E\u88AB\u89E6\u53D1\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u591A\u6B21\u6709\u6539\u53D8\u53D1\u751F\u65F6\u6BCF\u6B21\u90FD\u6267\u884C\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u53D6\u800C\u4EE3\u4E4B\uFF0C\u4EC5\u5728\u6240\u6709\u7684\u53D8\u5316\u53D1\u751F\u5B8C\u6210\u540E\u4E00\u6B21\u6027\u5730\u6267\u884C\u6307\u5B9A\u64CD\u4F5C\uFF0C\u5728notify\u4E2D\u5217\u51FA\u7684\u64CD\u4F5C\u79F0\u4E3Ahandlers\uFF0C\u4E5F\u5373notify\u4E2D\u8C03\u7528handlers\u4E2D\u5B9A\u4E49\u7684\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: template configuration file
 template: src=template.j2 dest=/etc/foo.conf
 notify:
   - restart memcached
   - restart apache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>handlers\u662Ftask\u5217\u8868\uFF0C\u8FD9\u4E9Btask\u4E0E\u524D\u8FF0\u7684task\u5E76\u6CA1\u6709\u672C\u8D28\u4E0A\u7684\u4E0D\u540C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>handlers\uFF1A
 - name: restart memcached
   service: name=memcached state=restarted
 - name: restart apache
   service: name=apache state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7B80\u5355\u793A\u4F8B1" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B1" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat nginx.yml 
- hosts: webserver
 remote_user: root
 tasks:
 - name: create nginxn group
   group: name=nginx system=yes gid=208
 - name: create nginx user
   user: name=nginx uid=208 group=nginx system=yes

- hosts: dbserver
 remote_user: root
 tasks:
 - name: copy file to dbserver
   copy: src=/etc/inittab dest=/tmp/inittab.ans
   
# ansible-playbook nginx.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7B80\u5355\u793A\u4F8B2" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B2" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat apache.yml 
- hosts: webserver
 remote_user: root
 tasks:
 - name: install httpd package
   yum: name=httpd state=latest
 - name: install configuration file for httpd
   copy: src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
 - name: start httpd service
   service: enabled=true name=httpd state=started

# ansible-playbook apache.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="handlers-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#handlers-\u793A\u4F8B" aria-hidden="true">#</a> handlers \u793A\u4F8B\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat apache.yml 
- hosts: webserver
 remote_user: root
 tasks:
 - name: install httpd package
   yum: name=httpd state=latest
 - name: install configuration file for httpd
   copy: src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
   notify: 
   - restart httpd
 - name: start httpd service
   service: enabled=true name=httpd state=started
 
 handlers:
 - name: restart httpd
   service: name=httpd state=restarted

#  ansible-playbook apache.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="variable-\u793A\u4F8B1" tabindex="-1"><a class="header-anchor" href="#variable-\u793A\u4F8B1" aria-hidden="true">#</a> variable \u793A\u4F8B1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat apache.yml 
- hosts: webserver
 remote_user: root
 vars:
 - package: httpd
 - service: httpd
 tasks:
 - name: install httpd package
   yum: name={{ package }} state=latest
 - name: install configuration file for httpd
   copy: src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
   notify: 
   - restart httpd
 - name: start httpd service
   service: enabled=true name={{ service }} state=started
 
 handlers:
 - name: restart httpd
   service: name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="variable-\u793A\u4F8B2-\u5728playbook\u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#variable-\u793A\u4F8B2-\u5728playbook\u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u53D8\u91CF" aria-hidden="true">#</a> variable \u793A\u4F8B2\uFF1A(\u5728playbook\u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u53D8\u91CF)</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat facts.yml 
- hosts: webserver
 remote_user: root
 tasks:
 - name: copy file
   copy: content=&quot;{{ ansible_all_ipv4_addresses }} &quot; dest=/tmp/vars.ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8\u516B\u3001roles" tabindex="-1"><a class="header-anchor" href="#_8\u516B\u3001roles" aria-hidden="true">#</a> 8<strong>\u516B\u3001roles</strong></h2><p>ansible\u81EA1.2\u7248\u672C\u5F15\u5165\u7684\u65B0\u7279\u6027\uFF0C\u7528\u4E8E\u5C42\u6B21\u6027\u3001\u7ED3\u6784\u5316\u5730\u7EC4\u7EC7playbook\u3002roles\u80FD\u591F\u6839\u636E\u5C42\u6B21\u578B\u7ED3\u6784\u81EA\u52A8\u8F6C\u8F7D\u53D8\u91CF\u6587\u4EF6\u3001tasks\u4EE5\u53CAhandlers\u7B49\u3002\u8981\u4F7F\u7528roles\u53EA\u9700\u8981\u5728playbook\u4E2D\u4F7F\u7528include\u6307\u4EE4\u5373\u53EF\u3002\u7B80\u5355\u6765\u8BB2\uFF0Croles\u5C31\u662F\u901A\u8FC7\u5206\u522B\u5C06\u53D8\u91CF\u3001\u6587\u4EF6\u3001\u4EFB\u52A1\u3001\u6A21\u677F\u4EE5\u53CA\u5904\u7406\u5668\u653E\u7F6E\u4E8E\u5355\u72EC\u7684\u76EE\u5F55\u4E2D\uFF0C\u5E76\u53EF\u4EE5\u4FBF\u6377\u5730include\u4ED6\u4EEC\u7684\u4E00\u79CD\u673A\u5236\u3002\u89D2\u8272\u4E00\u822C\u7528\u4E8E\u57FA\u4E8E\u4E3B\u673A\u6784\u5EFA\u670D\u52A1\u7684\u573A\u666F\u4E2D\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E8E\u6784\u5EFA\u5B88\u62A4\u8FDB\u7A0B\u7684\u573A\u666F\u4E2D</p>`,99),o={href:"http://mp.weixin.qq.com/s?__biz=MzAwNTM5Njk3Mw==&mid=2247506725&idx=2&sn=cb0395b93925ce3a06edf60d7ca7d2c1&chksm=9b1fdba7ac6852b182a5907c301fc9df85497315989ee99c4fbc2a88fad84a6032783b3524b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h=a("Docker+K8s+Jenkins \u4E3B\u6D41\u6280\u672F\u5168\u89E3\u89C6\u9891\u8D44\u6599"),p=n(`<p>\u4E00\u4E2Aroles\u7684\u6848\u4F8B\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>site.yml
webserver.yml
fooserver.yml
roles/
   common/
       files/
       templates/
       tasks/
       handlers/
       vars/
       meta/
   webserver/
       files/
       templates/
       tasks/
       handlers/
       vars/
       meta/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5728playbook\u4E2D\uFF0C\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528role\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webserver
 roles:
   - common  
   - webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5411roles\u4F20\u9012\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webserver
 roles:
   - common
   - { role: foo_app_instance, dir:&#39;/opt/a&#39;,port:5000}
   - { role: foo_app_instance, dir:&#39;/opt/b&#39;,port:5001}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751A\u81F3\u4E5F\u53EF\u4EE5\u6761\u4EF6\u5F0F\u5730\u4F7F\u7528roles\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts\uFF1Awebserver
 roles:
   - { role: some_role, when: &quot;ansible_so_family == &#39;RedHat&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-\u521B\u5EFArole\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_8-1-\u521B\u5EFArole\u7684\u6B65\u9AA4" aria-hidden="true">#</a> 8.1 \u521B\u5EFArole\u7684\u6B65\u9AA4</h3><ol><li>\u521B\u5EFA\u4EE5roles\u547D\u540D\u7684\u76EE\u5F55\uFF1A</li><li>\u5728roles\u76EE\u5F55\u4E2D\u5206\u522B\u521B\u5EFA\u4EE5\u5404\u89D2\u8272\u547D\u540D\u7684\u76EE\u5F55\uFF0C\u5982webserver\u7B49</li><li>\u5728\u6BCF\u4E2A\u89D2\u8272\u547D\u540D\u7684\u76EE\u5F55\u4E2D\u5206\u522B\u521B\u5EFAfiles\u3001handlers\u3001meta\u3001tasks\u3001templates\u548Cvars\u76EE\u5F55\uFF1B\u7528\u4E0D\u5230\u7684\u76EE\u5F55\u53EF\u4EE5\u521B\u5EFA\u4E3A\u7A7A\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u521B\u5EFA</li><li>\u5728playbook\u6587\u4EF6\u4E2D\uFF0C\u8C03\u7528\u5404\u89D2\u8272</li></ol><h3 id="_8-2-role\u5185\u5404\u76EE\u5F55\u4E2D\u53EF\u5E94\u7528\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-2-role\u5185\u5404\u76EE\u5F55\u4E2D\u53EF\u5E94\u7528\u7684\u6587\u4EF6" aria-hidden="true">#</a> 8.2 role\u5185\u5404\u76EE\u5F55\u4E2D\u53EF\u5E94\u7528\u7684\u6587\u4EF6</h3><ul><li>task\u76EE\u5F55\uFF1A\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u4E3Amain.yml\u7684\u6587\u4EF6\uFF0C\u5176\u5B9A\u4E49\u4E86\u6B64\u89D2\u8272\u7684\u4EFB\u52A1\u5217\u8868\uFF1B\u6B64\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528include\u5305\u542B\u5176\u5B83\u7684\u4F4D\u4E8E\u6B64\u76EE\u5F55\u4E2D\u7684task\u6587\u4EF6\uFF1B</li><li>file\u76EE\u5F55\uFF1A\u5B58\u653E\u7531copy\u6216script\u7B49\u6A21\u677F\u5757\u8C03\u7528\u7684\u6587\u4EF6\uFF1B</li><li>template\u76EE\u5F55\uFF1Atemplate\u6A21\u5757\u4F1A\u81EA\u52A8\u5728\u6B64\u76EE\u5F55\u4E2D\u5BFB\u627Ejinja2\u6A21\u677F\u6587\u4EF6\uFF1B</li><li>handlers\u76EE\u5F55\uFF1A\u6B64\u76EE\u5F55\u4E2D\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7528\u5230\u7684\u5404handlers\uFF0C\u5728handler\u4E2D\u4F7F\u7528inclnude\u5305\u542B\u7684\u5176\u5B83\u7684handlers\u6587\u4EF6\u4E5F\u5E94\u8BE5\u4F4D\u4E8E\u6B64\u76EE\u5F55\u4E2D\uFF1B</li><li>vars\u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7528\u5230\u7684\u53D8\u91CF</li><li>meta\u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7684\u7279\u6B8A\u8BBE\u5B9A\u53CA\u5176\u4F9D\u8D56\u5173\u7CFB\uFF1Bansible1.3\u53CA\u5176\u4EE5\u540E\u7684\u7248\u672C\u624D\u652F\u6301\uFF1B</li><li>default\u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6,\u7528\u4E8E\u4E3A\u5F53\u524D\u89D2\u8272\u8BBE\u5B9A\u9ED8\u8BA4\u53D8\u91CF\u65F6\u4F7F\u7528\u6B64\u76EE\u5F55\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir -pv ansible_playbooks/roles/{webserver,dbserver}/{tasks,files,templates,meta,handlers,vars} 
# cp /etc/httpd/conf/httpd.conf files/  
# pwd
/root/ansible_playbooks/roles/webserver 
# cat tasks/main.yml 
- name: install httpd package
 yum: name=httpd state=present
- name: install configuretion file
 copy: src=httpd.conf dest=/etc/httpd/conf/httpd.conf
 tags:
 - conf
 notify:
 - restart httpd
- name: start httpd
 service: name=httpd state=started

# cat handlers/main.yml 
- name: restart httpd
 service: name=httpd state=restarted
   
# pwd;ls
/root/ansible_playbooks
roles  site.yml 


# cat site.yml 
- hosts: webserver
 remote_user: root
 roles:
 - webserver

# ansible-playbook site.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9\u4E5D\u3001tags" tabindex="-1"><a class="header-anchor" href="#_9\u4E5D\u3001tags" aria-hidden="true">#</a> 9<strong>\u4E5D\u3001Tags</strong></h2><p>tags\u7528\u4E8E\u8BA9\u7528\u6237\u9009\u62E9\u8FD0\u884C\u6216\u8DF3\u8FC7playbook\u4E2D\u7684\u90E8\u5206\u4EE3\u7801\u3002ansible\u5177\u6709\u5E42\u7B49\u6027\uFF0C\u56E0\u6B64\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u6CA1\u6709\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u5373\u4FBF\u5982\u6B64\uFF0C\u6709\u4E9B\u4EE3\u7801\u4E3A\u6D4B\u8BD5\u5176\u786E\u5B9E\u6CA1\u6709\u53D1\u751F\u53D8\u5316\u7684\u65F6\u95F4\u4F9D\u7136\u4F1A\u975E\u5E38\u7684\u957F\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u786E\u4FE1\u5176\u6CA1\u6709\u53D8\u5316\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7tags\u8DF3\u8FC7\u6B64\u4E9B\u4EE3\u7801\u7247\u6BB5\u3002</p><p>tags\uFF1A\u5728playbook\u53EF\u4EE5\u4E3A\u67D0\u4E2A\u6216\u67D0\u4E9B\u4EFB\u52A1\u5B9A\u4E49\u4E00\u4E2A&quot;\u6807\u7B7E&quot;\uFF0C\u5728\u6267\u884C\u6B64playbook\u65F6\uFF0C\u901A\u8FC7\u4E3Aansible-playbook\u547D\u4EE4\u4F7F\u7528--tags\u9009\u9879\u80FD\u8010\u5B9E\u73B0\u4EC5\u8FD0\u884C\u6307\u5B9A\u7684tasks\u800C\u975E\u6240\u6709\u7684\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat apache.yml 
- hosts: webserver
 remote_user: root
 vars:
 - package: httpd
 - service: httpd
 tasks:
 - name: install httpd package
   yum: name={{ package }} state=latest
 - name: install configuration file for httpd
   template: src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
   tags:
   - conf
   notify: 
   - restart httpd
 - name: start httpd service
   service: enabled=true name={{ service }} state=started
 
 handlers:
 - name: restart httpd
   service: name=httpd state=restarted

# ansible-playbook apache.yml --tags=&#39;conf&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7279\u6B8Atags\uFF1Aalways #\u65E0\u8BBA\u5982\u4F55\u90FD\u4F1A\u8FD0\u884C</p>`,18);function g(x,_){const i=l("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[e("a",m,[u,s(i)])]),b,e("p",null,[e("a",o,[h,s(i)])]),p])}var k=d(v,[["render",g],["__file","\u4E00\u6587\u638C\u63E1 Ansible \u81EA\u52A8\u5316\u8FD0\u7EF4.html.vue"]]);export{k as default};
