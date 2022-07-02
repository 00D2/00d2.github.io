import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as i,c as p,a as n,b as e,d as c,e as s}from"./app.728ad2bb.js";const u={},o=c(`<h2 id="\u4E00\u3001\u57FA\u672C\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u672C\u90E8\u7F72" aria-hidden="true">#</a> \u4E00\u3001\u57FA\u672C\u90E8\u7F72</h2><h3 id="\u5B89\u88C5-ansible" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-ansible" aria-hidden="true">#</a> \u5B89\u88C5 Ansible</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yum -y install epel-release</span>
<span class="token comment"># yum list all *ansible*</span>
<span class="token comment"># yum info ansible</span>
<span class="token comment"># yum -y install ansible    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ansible-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Ansible \u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/ansible/ansible.cfg    \u4E3B\u914D\u7F6E\u6587\u4EF6
/etc/ansible/hosts          Inventory
/usr/bin/ansible-doc        \u5E2E\u52A9\u6587\u4EF6
/usr/bin/ansible-playbook   \u6307\u5B9A\u8FD0\u884C\u4EFB\u52A1\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9A\u4E49-inventory" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-inventory" aria-hidden="true">#</a> \u5B9A\u4E49 Inventory</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cd /etc/ansible/</span>
<span class="token comment"># cp hosts{,.bak}</span>
<span class="token comment"># &gt; hosts</span>

<span class="token comment"># cat hosts</span>
<span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
<span class="token number">127.0</span>.0.1
<span class="token number">192.168</span>.10.149

<span class="token punctuation">[</span>dbserver<span class="token punctuation">]</span>
<span class="token number">192.168</span>.10.113
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u79D8\u94A5\u65B9\u5F0F\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u79D8\u94A5\u65B9\u5F0F\u8FDE\u63A5" aria-hidden="true">#</a> \u4F7F\u7528\u79D8\u94A5\u65B9\u5F0F\u8FDE\u63A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ssh-keygen -t rsa </span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.10.149</span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.10.113</span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub root@127.0.0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5E2E\u52A9" aria-hidden="true">#</a> \u4F7F\u7528\u5E2E\u52A9</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible-doc -l                \u5217\u51FAansible\u6240\u6709\u7684\u6A21\u5757</span>
<span class="token comment"># ansible-doc -s MODULE_NAME    \u67E5\u770B\u6307\u5B9A\u6A21\u5757\u5177\u4F53\u9002\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible-\u547D\u4EE4\u5E94\u7528\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#ansible-\u547D\u4EE4\u5E94\u7528\u57FA\u7840" aria-hidden="true">#</a> Ansible \u547D\u4EE4\u5E94\u7528\u57FA\u7840</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BED\u6CD5\uFF1Aansible <span class="token operator">&lt;</span>host-pattern<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f forks<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m module_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a args<span class="token punctuation">]</span>

<span class="token operator">&lt;</span>host-pattern<span class="token operator">&gt;</span>  \u8FD9\u6B21\u547D\u4EE4\u5BF9\u54EA\u4E9B\u4E3B\u673A\u751F\u6548\u7684
    inventory group name
    <span class="token function">ip</span>
    all
-f forks        \u4E00\u6B21\u5904\u7406\u591A\u5C11\u4E2A\u4E3B\u673A
-m module_name  \u8981\u4F7F\u7528\u7684\u6A21\u5757
-a args         \u6A21\u5757\u7279\u6709\u7684\u53C2\u6570

<span class="token comment"># ansible 192.168.10.113 -m command -a &#39;date&#39;</span>
<span class="token comment"># ansible webserver -m command -a &#39;date&#39;</span>
<span class="token comment"># ansible all -m command -a &#39;date&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u5E38\u89C1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5E38\u89C1\u6A21\u5757" aria-hidden="true">#</a> \u4E8C\u3001\u5E38\u89C1\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span>     \u547D\u4EE4\u6A21\u5757<span class="token punctuation">(</span>\u9ED8\u8BA4\u6A21\u5757<span class="token punctuation">)</span>\u7528\u4E8E\u5728\u8FDC\u7A0B\u4E3B\u673A\u6267\u884C\u547D\u4EE4\uFF1B\u4E0D\u80FD\u4F7F\u7528\u53D8\u91CF\uFF0C\u7BA1\u9053\u7B49
    <span class="token comment"># ansible all -a &#39;date&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cron</span>        \u8BA1\u5212\u4EFB\u52A1    
    month   \u6307\u5B9A\u6708\u4EFD
    minute  \u6307\u5B9A\u5206\u949F
    job     \u6307\u5B9A\u4EFB\u52A1
    day     \u8868\u793A\u90A3\u4E00\u5929
    hour    \u6307\u5B9A\u5C0F\u65F6
    weekday \u8868\u793A\u5468\u51E0
    state   \u8868\u793A\u662F\u6DFB\u52A0\u8FD8\u662F\u5220\u9664
        present\uFF1A\u5B89\u88C5
        absent\uFF1A\u79FB\u9664
    <span class="token comment"># ansible webserver -m cron -a &#39;minute=&quot;*/10&quot; job=&quot;/bin/echo hello&quot; name=&quot;test cron job&quot;&#39;   #\u4E0D\u5199\u9ED8\u8BA4\u90FD\u662F*\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u540D\u5B57 </span>
    <span class="token comment"># ansible webserver -a &#39;crontab -l&#39;</span>
    <span class="token comment"># ansible webserver -m cron -a &#39;minute=&quot;*/10&quot; job=&quot;/bin/echo hello&quot; name=&quot;test cron job&quot; state=absent&#39;  #\u79FB\u9664\u4EFB\u52A1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>user    \u7528\u6237\u8D26\u53F7\u7BA1\u7406
    name    \u7528\u6237\u540D
    uid     uid
    state   \u72B6\u6001  
    group   \u5C5E\u4E8E\u54EA\u4E2A\u7EC4
    <span class="token function">groups</span>  \u9644\u52A0\u7EC4
    home    \u5BB6\u76EE\u5F55
    createhome  \u662F\u5426\u521B\u5EFA\u5BB6\u76EE\u5F55
    comment \u6CE8\u91CA\u4FE1\u606F
    system  \u662F\u5426\u662F\u7CFB\u7EDF\u7528\u6237
    
    <span class="token comment"># ansible all -m user -a &#39;name=&quot;user1&quot;&#39;</span>
    <span class="token comment"># ansible all -m user -a &#39;name=&quot;user1&quot; state=absent&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>group   \u7EC4\u7BA1\u7406
    gid     gid      
    name    \u7EC4\u540D               
    state   \u72B6\u6001           
    system  \u662F\u5426\u662F\u7CFB\u7EDF\u7EC4
    # ansible webserver -m group -a &#39;name=mysql gid=306 system=yes&#39;
    # ansible webserver -m user -a &#39;name=mysql uid=306 system=yes group=mysql&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>copy    \u590D\u5236\u6587\u4EF6<span class="token punctuation">(</span>\u590D\u5236\u672C\u5730\u6587\u4EF6\u5230\u8FDC\u7A0B\u4E3B\u673A\u7684\u6307\u5B9A\u4F4D\u7F6E<span class="token punctuation">)</span>
    src     \u5B9A\u4E49\u672C\u5730\u6E90\u6587\u4EF6\u8DEF\u5F84
    dest    \u5B9A\u4E49\u8FDC\u7A0B\u76EE\u5F55\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">(</span>\u7EDD\u5BF9\u8DEF\u5F84<span class="token punctuation">)</span>
    owner   \u5C5E\u4E3B
    group   \u5C5E\u7EC4
    mode    \u6743\u9650
    content \u53D6\u4EE3src<span class="token operator">=</span>,\u8868\u793A\u76F4\u63A5\u7528\u6B64\u5904\u7684\u4FE1\u606F\u751F\u6210\u4E3A\u6587\u4EF6\u5185\u5BB9
    <span class="token comment"># yum -y install libselinux-python</span>
    <span class="token comment"># ansible all -m copy -a &#39;src=/etc/fstab dest=/tmp/fstab.ansible owner=root mode=640&#39;</span>
    <span class="token comment"># ansible all -m copy -a &#39;content=&quot;hello ansible\\nHi ansible&quot; dest=/tmp/test.ansible&#39; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">file</span>    \u8BBE\u7F6E\u6587\u4EF6\u7684\u5C5E\u6027
    path<span class="token operator">|</span>dest<span class="token operator">|</span>name  \u5BF9\u90A3\u4E2A\u6587\u4EF6\u505A\u8BBE\u5B9A

    \u521B\u5EFA\u6587\u4EF6\u7684\u7B26\u53F7\u94FE\u63A5\uFF1A
        src\uFF1A    \u6307\u5B9A\u6E90\u6587\u4EF6
        path\uFF1A   \u6307\u660E\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6\u8DEF\u5F84
    <span class="token comment"># ansible all -m file -a &#39;owner=mysql group=mysql mode=644 path=/tmp/fstab.ansible&#39;</span>
    <span class="token comment"># ansible all -m file -a &#39;path=/tmp/fstab.link src=/tmp/fstab.ansible state=link&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ping</span>    \u6D4B\u8BD5\u6307\u5B9A\u4E3B\u673A\u662F\u5426\u80FD\u8FDE\u63A5
    <span class="token comment"># ansible all -m ping </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> \u7BA1\u7406\u670D\u52A1\u8FD0\u884C\u72B6\u6001
    enabled \u662F\u5426\u5F00\u673A\u81EA\u52A8\u542F\u52A8
    name    \u6307\u5B9A\u670D\u52A1\u540D
    state   \u6307\u5B9A\u670D\u52A1\u72B6\u6001
        started     \u542F\u52A8\u670D\u52A1
        stoped      \u505C\u6B62\u670D\u52A1
        restarted   \u91CD\u542F\u670D\u52A1
    arguments   \u670D\u52A1\u7684\u53C2\u6570
    <span class="token comment"># ansible webserver -m service -a &#39;enabled=true name=httpd state=started&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>shell   \u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u8FD0\u884C\u547D\u4EE4
    \u5C24\u5176\u662F\u7528\u5230\u7BA1\u9053\u53D8\u91CF\u7B49\u529F\u80FD\u7684\u590D\u6742\u547D\u4EE4
    <span class="token comment"># ansible all -m shell -a &#39;echo magedu | passwd --stdin user1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>script  \u5C06\u672C\u5730\u811A\u672C\u590D\u5236\u5230\u8FDC\u7A0B\u4E3B\u673A\u5E76\u8FD0\u884C\u4E4B
    <span class="token comment"># ansible all -m script -a &#39;/tmp/test.sh&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum     \u5B89\u88C5\u7A0B\u5E8F\u5305
    name    \u7A0B\u5E8F\u5305\u540D\u79F0<span class="token punctuation">(</span>\u4E0D\u6307\u5B9A\u7248\u672C\u5C31\u5B89\u88C5\u6700\u65B0\u7684\u7248\u672Clatest<span class="token punctuation">)</span>
    state   present,latest\u8868\u793A\u5B89\u88C5\uFF0Cabsent\u8868\u793A\u5378\u8F7D
    <span class="token comment"># ansible webserver -m yum -a &#39;name=httpd&#39;</span>
    <span class="token comment"># ansible all -m yum -a &#39;name=ntpdate&#39;  #\u9ED8\u8BA4\u5C31\u662F\u5B89\u88C5</span>
    <span class="token comment"># ansible all -m yum -a &#39;name=ntpdate state=absent&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>setup   \u6536\u96C6\u8FDC\u7A0B\u4E3B\u673A\u7684facts
    \u6BCF\u4E2A\u88AB\u7BA1\u7406\u8282\u70B9\u5728\u63A5\u53D7\u5E76\u8FD0\u884C\u7BA1\u7406\u547D\u4EE4\u4E4B\u524D\uFF0C\u4F1A\u5C06\u81EA\u5DF1\u4E3B\u673A\u76F8\u5173\u4FE1\u606F\uFF0C\u5982\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\uFF0CIP\u5730\u5740\u7B49\u62A5\u544A\u7ED9\u8FDC\u7A0B\u7684ansible\u4E3B\u673A 
    <span class="token comment"># ansible all -m setup</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001ansible-playbook" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001ansible-playbook" aria-hidden="true">#</a> \u4E09\u3001Ansible playbook</h2><h3 id="\u7EC4\u6210\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u6210\u7ED3\u6784" aria-hidden="true">#</a> \u7EC4\u6210\u7ED3\u6784\uFF1A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inventory       <span class="token comment">#\u4EE5\u4E0B\u64CD\u4F5C\u5E94\u7528\u7684\u4E3B\u673A</span>
modules         <span class="token comment">#\u8C03\u7528\u54EA\u4E9B\u6A21\u5757\u505A\u4EC0\u4E48\u6837\u7684\u64CD\u4F5C</span>
ad hoc commands <span class="token comment">#\u5728\u8FD9\u4E9B\u4E3B\u673A\u4E0A\u8FD0\u884C\u54EA\u4E9B\u547D\u4EE4</span>
playbooks   
    tasks       <span class="token comment">#\u4EFB\u52A1,\u5373\u8C03\u7528\u6A21\u5757\u5B8C\u6210\u7684\u67D0\u64CD\u4F5C</span>
    variable    <span class="token comment">#\u53D8\u91CF</span>
    templates   <span class="token comment">#\u6A21\u677F</span>
    handlers    <span class="token comment">#\u5904\u7406\u5668\uFF0C\u7531\u67D0\u4E8B\u4EF6\u89E6\u53D1\u6267\u884C\u7684\u64CD\u4F5C</span>
    roles       <span class="token comment">#\u89D2\u8272</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001yaml" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001yaml" aria-hidden="true">#</a> \u56DB\u3001YAML</h2><h3 id="_4-1-yaml-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_4-1-yaml-\u4ECB\u7ECD" aria-hidden="true">#</a> 4.1 YAML \u4ECB\u7ECD</h3><p>YAML \u662F\u4E00\u4E2A\u53EF\u8BFB\u6027\u9AD8\u7684\u7528\u6765\u8868\u8FBE\u8D44\u6599\u5E8F\u5217\u7684\u683C\u5F0F\u3002YAML \u53C2\u8003\u4E86\u5176\u5B83\u591A\u79CD\u8BED\u8A00\uFF0C\u5305\u62EC\uFF1AXML\u3001C \u8BED\u8A00\u3001Python\u3001Perl \u4EE5\u53CA\u7535\u5B50\u90AE\u4EF6\u683C\u5F0F RFC2822 \u7B49\u3002ClarkEvans \u5728 2001 \u5E74\u9996\u6B21\u53D1\u8868\u4E86\u8FD9\u79CD\u8BED\u8A00\uFF0C\u53E6\u5916 Ingy dot Net \u4E0E Oren Ben-Kiki \u4E5F\u662F\u8FD9\u8BED\u8A00\u7684\u5171\u540C\u8BBE\u8BA1\u8005\u3002</p><p>YAML Ain&#39;t Markup Language, \u5373 YAML \u4E0D\u662F XML\uFF0C\u4E0D\u8FC7\uFF0C\u5728\u5F00\u53D1\u8FD9\u79CD\u8BED\u8A00\u65F6\uFF0CYAML \u7684\u610F\u601D\u5176\u5B9E\u662F\uFF1A&quot;Yet Another Markup Language&quot;(\u4ECD\u662F\u4E00\u79CD\u6807\u8BB0\u8BED\u8A00)\uFF0C\u5176\u7279\u6027\uFF1A</p><ul><li>YAML \u7684\u53EF\u8BFB\u6027\u597D</li><li>YAML \u548C\u811A\u672C\u8BED\u8A00\u7684\u4EA4\u4E92\u6027\u597D</li><li>YAML \u4F7F\u7528\u5B9E\u73B0\u8BED\u8A00\u7684\u6570\u636E\u7C7B\u578B</li><li>YAML \u6709\u4E00\u4E2A\u4E00\u81F4\u7684\u4FE1\u606F\u6A21\u578B</li><li>YAML \u6613\u4E8E\u5B9E\u73B0</li><li>YAML \u53EF\u4EE5\u57FA\u4E8E\u6D41\u6765\u5904\u7406</li><li>YAML \u8868\u8FBE\u80FD\u529B\u5F3A\uFF0C\u6269\u5C55\u6027\u597D</li></ul><blockquote><p>\u66F4\u591A\u7684\u5185\u5BB9\u53CA\u89C4\u8303\u53C2\u89C1 http://www.yaml.org</p></blockquote><p>###\u30004.2 YAML \u8BED\u6CD5 YAML \u7684\u8BED\u6CD5\u548C\u5176\u4ED6\u9AD8\u9636\u8BED\u8A00\u7C7B\u4F3C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7B80\u5355\u8868\u8FBE\u6E05\u5355\u3001\u6563\u5217\u8868\u3001\u6807\u91CF\u7B49\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u7ED3\u6784 (structure) \u901A\u8FC7\u7A7A\u683C\u6765\u5C55\u793A\uFF0C\u5E8F\u5217 (sequence) \u91CC\u7684\u9879\u7528 &quot;-&quot; \u6765\u8868\u793A\uFF0CMap \u91CC\u9762\u7684\u952E\u503C\u5BF9\u7528 &quot;:&quot; \u5206\u5272\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> john smith
<span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">41</span>
<span class="token key atrule">gender</span><span class="token punctuation">:</span> male
<span class="token key atrule">spouse</span><span class="token punctuation">:</span>
    name<span class="token punctuation">:</span>jane smith
    age<span class="token punctuation">:</span><span class="token number">37</span>
    <span class="token key atrule">gender</span><span class="token punctuation">:</span> female
<span class="token key atrule">children</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span>   name<span class="token punctuation">:</span>jimmy smith
        age<span class="token punctuation">:</span><span class="token number">17</span>
        <span class="token key atrule">gender</span><span class="token punctuation">:</span> male
    <span class="token punctuation">-</span>   name<span class="token punctuation">:</span>jenny smith
        <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">13</span>
        <span class="token key atrule">gender</span><span class="token punctuation">:</span> female
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YAML \u6587\u4EF6\u6269\u5C55\u540D\u901A\u5E38\u4E3A.yaml\uFF0C\u5982 example.yaml</p><h4 id="_4-2-1-list" tabindex="-1"><a class="header-anchor" href="#_4-2-1-list" aria-hidden="true">#</a> 4.2.1 list</h4><p>\u5217\u8868\u7684\u6240\u6709\u5143\u7D20\u5747\u4F7F\u7528 &quot;-&quot; \u6253\u5934\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># A list of testy fruits</span>
<span class="token punctuation">-</span> Apple
<span class="token punctuation">-</span> Orange
<span class="token punctuation">-</span> Strawberry
<span class="token punctuation">-</span> Mango
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-dictionary" tabindex="-1"><a class="header-anchor" href="#_4-2-2-dictionary" aria-hidden="true">#</a> 4.2.2 dictionary</h4><p>\u5B57\u5178\u901A\u8FC7 key \u4E0E value \u8FDB\u884C\u6807\u8BC6\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token comment"># An employee record</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Example Developer
<span class="token key atrule">job</span><span class="token punctuation">:</span> Developer
<span class="token key atrule">skill</span><span class="token punctuation">:</span> Elite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5C06 key:value \u653E\u7F6E\u4E8E {} \u4E2D\u8FDB\u884C\u8868\u793A\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token comment">#An exmloyee record</span>
<span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> Example Developer<span class="token punctuation">,</span> <span class="token key atrule">job</span><span class="token punctuation">:</span> Developer<span class="token punctuation">,</span> <span class="token key atrule">skill</span><span class="token punctuation">:</span> Elite<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001ansible-\u57FA\u7840\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001ansible-\u57FA\u7840\u5143\u7D20" aria-hidden="true">#</a> \u4E94\u3001Ansible \u57FA\u7840\u5143\u7D20</h2><h3 id="_5-1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-1-\u53D8\u91CF" aria-hidden="true">#</a> 5.1 \u53D8\u91CF</h3><p>####\u30005.1.1 \u53D8\u91CF\u547D\u540D \u53D8\u91CF\u540D\u4EC5\u80FD\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u4E14\u53EA\u80FD\u4EE5\u5B57\u6BCD\u5F00\u5934\u3002</p><p>####\u30005.1.2 facts facts \u662F\u7531\u6B63\u5728\u901A\u4FE1\u7684\u8FDC\u7A0B\u76EE\u6807\u4E3B\u673A\u53D1\u56DE\u7684\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u88AB\u4FDD\u5B58\u5728 ansible \u53D8\u91CF\u4E2D\u3002\u8981\u83B7\u53D6\u6307\u5B9A\u7684\u8FDC\u7A0B\u4E3B\u673A\u6240\u652F\u6301\u7684\u6240\u6709 facts\uFF0C\u53EF\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#ansible hostname -m setup</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####\u30005.1.3 register \u628A\u4EFB\u52A1\u7684\u8F93\u51FA\u5B9A\u4E49\u4E3A\u53D8\u91CF\uFF0C\u7136\u540E\u7528\u4E8E\u5176\u4ED6\u4EFB\u52A1\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/foo
      <span class="token key atrule">register</span><span class="token punctuation">:</span> foo_result
      <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####\u30005.1.4 \u901A\u8FC7\u547D\u4EE4\u884C\u4F20\u9012\u53D8\u91CF \u5728\u8FD0\u884C playbook \u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E9B\u53D8\u91CF\u4F9B playbook \u4F7F\u7528\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#ansible-playbook test.yml --extra-vars &quot;hosts=www user=mageedu&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####\u30005.1.5 \u901A\u8FC7 roles \u4F20\u9012\u53D8\u91CF \u5F53\u7ED9\u4E00\u4E2A\u4E3B\u673A\u5E94\u7528\u89D2\u8272\u7684\u65F6\u5019\u53EF\u4EE5\u4F20\u9012\u53D8\u91CF\uFF0C\u7136\u540E\u5728\u89D2\u8272\u5185\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> <span class="token key atrule">dir</span><span class="token punctuation">:</span> <span class="token string">&#39;/web/htdocs/a.com&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-inventory" tabindex="-1"><a class="header-anchor" href="#_5-2-inventory" aria-hidden="true">#</a> 5.2 Inventory</h3><p>ansible \u7684\u4E3B\u8981\u529F\u7528\u5728\u4E8E\u6279\u91CF\u4E3B\u673A\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u4FBF\u6377\u7684\u4F7F\u7528\u5176\u4E2D\u7684\u90E8\u5206\u4E3B\u673A\uFF0C\u53EF\u4EE5\u5728 inventory file \u4E2D\u5C06\u5176\u5206\u7EC4\u547D\u540D\uFF0C\u9ED8\u8BA4\u7684 inventory file \u4E3A<code>/etc/ansible/hosts</code></p><p>inventory file \u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u4E14\u4E5F\u53EF\u4EE5\u901A\u8FC7 Dynamic Inventory \u6765\u52A8\u6001\u751F\u6210\u3002</p><p>####\u30005.2.1 inventory \u6587\u4EF6\u683C\u5F0F inventory \u6587\u4EF6\u9075\u5FAA INI \u6587\u4EF6\u98CE\u683C\uFF0C\u4E2D\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26\u4E3A\u7EC4\u540D\u3002\u53EF\u4EE5\u5C06\u540C\u4E00\u4E2A\u4E3B\u673A\u540C\u65F6\u5F52\u5E76\u5230\u591A\u4E2A\u4E0D\u540C\u7684\u7EC4\u4E2D\uFF1B\u6B64\u5916\uFF0C\u5F53\u5982\u82E5\u76EE\u6807\u4E3B\u673A\u4F7F\u7528\u975E\u9ED8\u8BA4\u7684 SSH \u7AEF\u53E3\uFF0C\u8FD8\u53EF\u4EE5\u5728\u4E3B\u673A\u540D\u79F0\u4E4B\u540E\u4F7F\u7528\u5192\u53F7\u52A0\u7AEF\u53E3\u53F7\u6765\u8868\u660E\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>ntp.magedu.com

<span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www1.magedu.com<span class="token punctuation">:</span><span class="token number">2222</span>
www2.magedu.com

<span class="token punctuation">[</span>dbserver<span class="token punctuation">]</span>
db1.magedu.com
db2.magedu.com
db3.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E3B\u673A\u540D\u9075\u5FAA\u76F8\u4F3C\u7684\u547D\u540D\u6A21\u5F0F\uFF0C\u8FD8\u53EF\u4F7F\u7528\u5217\u8868\u7684\u65B9\u5F0F\u6807\u8BC6\u4E2A\u4E3B\u673A\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www<span class="token punctuation">[</span><span class="token datetime number">01:50</span><span class="token punctuation">]</span>.example.com

<span class="token punctuation">[</span>databases<span class="token punctuation">]</span>
db<span class="token punctuation">-</span><span class="token punctuation">[</span>a<span class="token punctuation">:</span>f<span class="token punctuation">]</span>.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####\u30005.2.2 \u4E3B\u673A\u53D8\u91CF \u53EF\u4EE5\u5728 inventory \u4E2D\u5B9A\u4E49\u4E3B\u673A\u65F6\u4E3A\u5176\u6DFB\u52A0\u4E3B\u673A\u53D8\u91CF\u4EE5\u4FBF\u4E8E\u5728 playbook \u4E2D\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www1.magedu.com http_port=80 maxRequestsPerChild=808
www2.magedu.com http_port=8080 maxRequestsPerChild=909
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####\u30005.2.3 \u7EC4\u53D8\u91CF \u7EC4\u53D8\u91CF\u662F\u6307\u8D4B\u4E88\u7ED9\u6307\u5B9A\u7EC4\u5185\u6240\u6709\u4E3B\u673A\u4E0A\u7684\u5728 playbook \u4E2D\u53EF\u7528\u7684\u53D8\u91CF\u3002\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www1.magedu.com
www2.magedu.com

<span class="token punctuation">[</span>webserver<span class="token punctuation">:</span>vars<span class="token punctuation">]</span>
ntp_server=ntp.magedu.com
nfs_server=nfs.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####\u30005.2.4 \u7EC4\u5D4C\u5957 inventory \u4E2D\uFF0C\u7EC4\u8FD8\u53EF\u4EE5\u5305\u542B\u5176\u5B83\u7684\u7EC4\uFF0C\u5E76\u4E14\u4E5F\u53EF\u4EE5\u5411\u7EC4\u4E2D\u7684\u4E3B\u673A\u6307\u5B9A\u53D8\u91CF\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u53EA\u80FD\u5728 ansible-playbook \u4E2D\u4F7F\u7528\uFF0C\u800C ansible \u4E0D\u652F\u6301\u3002\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>apache<span class="token punctuation">]</span>
httpd1.magedu.com
httpd2.magedu.com

<span class="token punctuation">[</span>nginx<span class="token punctuation">]</span>
ngx1.magedu.com
ngx2.magedu.com

<span class="token punctuation">[</span>webserver<span class="token punctuation">:</span>children<span class="token punctuation">]</span>    <span class="token comment">#\u56FA\u5B9A\u683C\u5F0F</span>
apache
nginx

<span class="token punctuation">[</span>webserver<span class="token punctuation">:</span>vars<span class="token punctuation">]</span>
ntp_server=ntp.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####\u30005.2.5 inventory \u53C2\u6570 ansible \u57FA\u4E8E ssh \u8FDE\u63A5 inventory \u4E2D\u6307\u5B9A\u7684\u8FDC\u7A0B\u4E3B\u673A\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u6307\u5B9A\u5176\u4EA4\u4E92\u65B9\u5F0F\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ansible_ssh_host
ansible_ssh_port
ansible_ssh_user
ansible_ssh_pass
ansible_sudo_pass
ansible_connection
ansible_ssh_private_key_file
ansible_shell_type
ansible_python_interpreter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-\u6761\u4EF6\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-3-\u6761\u4EF6\u6D4B\u8BD5" aria-hidden="true">#</a> 5.3 \u6761\u4EF6\u6D4B\u8BD5</h3><p>\u5982\u679C\u9700\u8981\u6839\u636E\u53D8\u91CF\u3001facts \u6216\u6B64\u524D\u4EFB\u52A1\u7684\u6267\u884C\u7ED3\u679C\u6765\u505A\u4E3A\u67D0 task \u6267\u884C\u4E0E\u5426\u7684\u524D\u63D0\u65F6\u8981\u7528\u5230\u6761\u4EF6\u6D4B\u8BD5\u3002</p><p>####\u30005.3.1 when \u8BED\u53E5 \u5728 task \u540E\u6DFB\u52A0 when \u5B57\u53E5\u5373\u53EF\u4F7F\u7528\u6761\u4EF6\u6D4B\u8BD5\uFF1Bwhen \u8BED\u53E5\u652F\u6301 jinja2 \u8868\u8FBE\u5F0F\u8BED\u53E5\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> &#39;shutdown debian flavored system&quot;
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/shutdown <span class="token punctuation">-</span>h now
    <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_os_family == &quot;Debian&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>when \u8BED\u53E5\u4E2D\u8FD8\u53EF\u4EE5\u4F7F\u7528 jinja2 \u7684\u5927\u591A &quot;filter&quot;, \u4F8B\u5982\u679C\u5FFD\u7565\u6B64\u524D\u67D0\u8BED\u53E5\u7684\u9519\u8BEF\u5E76\u57FA\u4E8E\u5176\u7ED3\u679C (failed \u6216 success) \u8FD0\u884C\u540E\u9762\u6307\u5B9A\u7684\u8BED\u53E5\uFF0C\u53EF\u4F7F\u7528\u7C7B\u4F3C\u5982\u4E0B\u5F62\u5F0F\uFF1B</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> command<span class="token punctuation">:</span>/bin/false
    <span class="token key atrule">register</span><span class="token punctuation">:</span> result
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/something
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>failed
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/something_else
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>success
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/still/something_else
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916\uFF0Cwhen \u8BED\u53E5\u4E2D\u8FD8\u53EF\u4EE5\u4F7F\u7528 facts \u6216 playbook \u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cat cond.yml </span>
- hosts: all
  remote_user: root
  vars:
  - username: user10
  tasks:
  - name: create <span class="token punctuation">{</span><span class="token punctuation">{</span> username <span class="token punctuation">}</span><span class="token punctuation">}</span> user
    user: <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> username <span class="token punctuation">}</span><span class="token punctuation">}</span> 
    when: ansible_fqdn <span class="token operator">==</span> <span class="token string">&quot;node1.exercise.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#_5-4-\u8FED\u4EE3" aria-hidden="true">#</a> 5.4 \u8FED\u4EE3</h3><p>\u5F53\u6709\u9700\u8981\u91CD\u590D\u6027\u6267\u884C\u7684\u4EFB\u52A1\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FED\u4EE3\u673A\u5236\u3002\u5176\u4F7F\u7528\u683C\u5F0F\u4E3A\u5C06\u9700\u8981\u8FED\u4EE3\u7684\u5185\u5BB9\u5B9A\u4E49\u4E3A item \u53D8\u91CF\u5F15\u7528\uFF0C\u5E76\u901A\u8FC7 with_items \u8BED\u53E5\u6765\u6307\u660E\u8FED\u4EE3\u7684\u5143\u7D20\u5217\u8868\u5373\u53EF\u3002\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add server user
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=persent groups=wheel
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> testuser1
    <span class="token punctuation">-</span> testuser2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8BED\u53E5\u7684\u529F\u80FD\u7B49\u540C\u4E8E\u4E0B\u9762\u7684\u8BED\u53E5\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add user testuser1
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=testuser1 state=present group=wheel
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add user testuser2
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=testuser2 state=present group=wheel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u5B9E\u4E0A\uFF0Cwith_items \u4E2D\u53EF\u4EE5\u4F7F\u7528\u5143\u7D20\u8FD8\u53EF\u4E3A hashes\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add several users
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item.name<span class="token punctuation">}</span><span class="token punctuation">}</span> state=present groups=<span class="token punctuation">{</span><span class="token punctuation">{</span> item.groups <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;testuser1&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token string">&#39;wheel&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;testuser2&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Ansible \u7684\u5FAA\u73AF\u673A\u5236\u8FD8\u6709\u66F4\u591A\u7684\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863 http://docs.ansible.com/playbooks_loops.html</p></blockquote><h2 id="\u516D\u3001\u6A21\u677F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u6A21\u677F\u793A\u4F8B" aria-hidden="true">#</a> \u516D\u3001\u6A21\u677F\u793A\u4F8B\uFF1A</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># grep &#39;{{&#39; conf/httpd.conf </span>
MaxClients       <span class="token punctuation">{</span><span class="token punctuation">{</span> maxClients <span class="token punctuation">}</span><span class="token punctuation">}</span>
Listen <span class="token punctuation">{</span><span class="token punctuation">{</span> httpd_port <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># cat /etc/ansible/hosts</span>
<span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
127.0.0.1 httpd_port=80 maxClients=100
192.168.10.149 httpd_port=8080 maxClients=200

<span class="token comment"># cat apache.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">package</span><span class="token punctuation">:</span> httpd
  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> httpd
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd package
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> package <span class="token punctuation">}</span><span class="token punctuation">}</span> state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install configuration file for httpd
    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> restart httpd
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd service
    <span class="token key atrule">service</span><span class="token punctuation">:</span> enabled=true name=<span class="token punctuation">{</span><span class="token punctuation">{</span> service <span class="token punctuation">}</span><span class="token punctuation">}</span> state=started
  
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart httpd
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E03\u3001ansible-playbooks" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001ansible-playbooks" aria-hidden="true">#</a> \u4E03\u3001Ansible playbooks</h2><p>playbook \u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A &quot;play&quot; \u7EC4\u6210\u7684\u5217\u8868\u3002play \u7684\u4E3B\u8981\u529F\u80FD\u5728\u4E8E\u5C06\u4E8B\u5148\u5F52\u5E76\u4E3A\u4E00\u7EC4\u7684\u4E3B\u673A\u88C5\u626E\u6210\u4E8B\u5148\u901A\u8FC7 ansible \u4E2D\u7684 task \u5B9A\u4E49\u597D\u7684\u89D2\u8272\u3002\u4ECE\u6839\u672C\u4E0A\u6765\u8BB2\uFF0C\u6240\u6709 task \u65E0\u975E\u662F\u8C03\u7528 ansible \u7684\u4E00\u4E2A module\u3002\u5C06\u591A\u4E2A play \u7EC4\u7EC7\u5728\u4E00\u4E2A playbook \u4E2D\uFF0C\u5373\u53EF\u4EE5\u8BA9\u4ED6\u4EEC\u8FDE\u540C\u8D77\u6765\u6309\u4E8B\u5148\u7F16\u6392\u7684\u673A\u5236\u540C\u5531\u4E00\u53F0\u5927\u620F\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">max_clients</span><span class="token punctuation">:</span> <span class="token number">256</span>
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started
    <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-playbook-\u57FA\u7840\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-1-playbook-\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a> 7.1 playbook \u57FA\u7840\u7EC4\u4EF6</h3><h4 id="_7-1-1-hosts-\u548C-users" tabindex="-1"><a class="header-anchor" href="#_7-1-1-hosts-\u548C-users" aria-hidden="true">#</a> 7.1.1 Hosts \u548C Users</h4><p>playbook \u4E2D\u7684\u6BCF\u4E00\u4E2A play \u7684\u76EE\u7684\u90FD\u662F\u4E3A\u4E86\u8BA9\u67D0\u4E2A\u6216\u67D0\u4E9B\u4E3B\u673A\u4EE5\u67D0\u4E2A\u6307\u5B9A\u7684\u7528\u6237\u8EAB\u4EFD\u6267\u884C\u4EFB\u52A1\u3002hosts \u7528\u4E8E\u6307\u5B9A\u8981\u6267\u884C\u6307\u5B9A\u4EFB\u52A1\u7684\u4E3B\u673A\uFF0C\u5176\u53EF\u4EE5\u4F7F\u4E00\u4E2A\u6216\u591A\u4E2A\u7531\u5192\u53F7\u5206\u9694\u4E3B\u673A\u7EC4\uFF1Bremote_user \u5219\u7528\u4E8E\u6307\u5B9A\u8FDC\u7A0B\u4E3B\u673A\u7684\u6267\u884C\u4EFB\u52A1\u7684\u7528\u6237\uFF0C\u5982\u4E0A\u9762\u7684\u5B9E\u4F8B\u4E2D\u7684</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\uFF0Cremote_user \u4E5F\u53EF\u7528\u4E8E\u5404 task \u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u5176\u901A\u8FC7 sudo \u7684\u65B9\u5F0F\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u6267\u884C\u4EFB\u52A1\uFF0C\u5176\u53EF\u7528\u4E8E play \u5168\u5C40\u6216\u5176\u4EFB\u52A1\uFF1B\u6B64\u5916\uFF0C\u751A\u81F3\u53EF\u4EE5\u5728 sudo \u65F6\u4F7F\u7528 sudo_user \u6307\u5B9A sudo \u65F6\u5207\u6362\u7684\u7528\u6237\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> magedu
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test connection
     <span class="token key atrule">ping</span><span class="token punctuation">:</span>
     <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> magedu
     <span class="token key atrule">sudo</span><span class="token punctuation">:</span> yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-1-2-\u4EFB\u52A1\u5217\u8868\u548C-action" tabindex="-1"><a class="header-anchor" href="#_7-1-2-\u4EFB\u52A1\u5217\u8868\u548C-action" aria-hidden="true">#</a> 7.1.2 \u4EFB\u52A1\u5217\u8868\u548C action</h4><p>play \u7684\u4E3B\u9898\u90E8\u5206\u662F task list\u3002task list \u4E2D\u7684\u5404\u4EFB\u52A1\u6309\u6B21\u5E8F\u9010\u4E2A\u5728 hosts \u4E2D\u6307\u5B9A\u7684\u6240\u6709\u4E3B\u673A\u4E0A\u6267\u884C\uFF0C\u5373\u5728\u6240\u6709\u4E3B\u673A\u4E0A\u5B8C\u6210\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u540E\u518D\u5F00\u59CB\u7B2C\u4E8C\u4E2A\u3002\u5728\u8FD0\u884C\u81EA\u4E0A\u800C\u4E0B\u67D0 playbook \u65F6\uFF0C\u5982\u679C\u4E2D\u9014\u53D1\u751F\u9519\u8BEF\uFF0C\u6240\u6709\u5DF2\u6267\u884C\u4EFB\u52A1\u90FD\u53EF\u80FD\u56DE\u6EDA\uFF0C\u5728\u66F4\u6B63 playbook \u540E\u91CD\u65B0\u6267\u884C\u4E00\u6B21\u5373\u53EF\u3002</p><p>tasks \u7684\u76EE\u7684\u662F\u4F7F\u7528\u6307\u5B9A\u7684\u53C2\u6570\u6267\u884C\u6A21\u5757\uFF0C\u800C\u5728\u6A21\u5757\u53C2\u6570\u4E2D\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\u3002\u6A21\u5757\u6267\u884C\u662F\u5E42\u7B49\u7684\u3002\u8FD9\u610F\u5473\u7740\u591A\u6B21\u6267\u884C\u662F\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u5176\u7ED3\u679C\u5747\u4E00\u81F4\u3002</p><p>\u6BCF\u4E2A task \u90FD\u5E94\u8BE5\u6709\u5176 name\uFF0C\u7528\u4E8E playbook \u7684\u6267\u884C\u7ED3\u679C\u8F93\u51FA\uFF0C\u5EFA\u8BAE\u5176\u5185\u5BB9\u5C3D\u53EF\u80FD\u6E05\u6670\u5730\u63CF\u8FF0\u4EFB\u52A1\u6267\u884C\u6B65\u9AA4\uFF0C\u5982\u679C\u4E3A\u63D0\u4F9B name\uFF0C\u5219 action \u7684\u7ED3\u679C\u5C06\u7528\u4E8E\u8F93\u51FA\u3002</p><p>\u5B9A\u4E49 task \u53EF\u4EE5\u4F7F\u7528 &quot;action: module options&quot; \u6216\u201Dmodule\uFF1Aoptions\u201C\u7684\u683C\u5F0F\u63A8\u8350\u4F7F\u7528\u540E\u8005\u4EE5\u5B9E\u73B0\u5411\u540E\u517C\u5BB9\u3002\u5982\u679C action \u4E00\u884C\u7684\u5185\u5BB9\u8FC7\u591A\uFF0C\u4E5F\u4E2D\u4F7F\u7528\u5728\u884C\u9996\u4F7F\u7528\u51E0\u4E2A\u7A7A\u767D\u5B57\u7B26\u8FDB\u884C\u6362\u884C\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> name<span class="token punctuation">:</span>make sure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F17\u591A\u7684\u6A21\u5757\u4E2D\uFF0C\u53EA\u6709 command \u548C shell \u6A21\u5757\u4EC5\u9700\u8981\u7ED9\u5B9A\u4E00\u4E2A\u5217\u8868\u800C\u65E0\u9700\u4F7F\u7528 &quot;key=value&quot; \u683C\u5F0F\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> disable selinux
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u547D\u4EE4\u6216\u811A\u672C\u7684\u9000\u51FA\u7801\u4E0D\u4E3A\u96F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u66FF\u4EE3\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand <span class="token punctuation">|</span><span class="token punctuation">|</span> /bin/true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u4F7F\u7528 ignore_errors \u6765\u5FFD\u7565\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-1-3handlers" tabindex="-1"><a class="header-anchor" href="#_7-1-3handlers" aria-hidden="true">#</a> 7.1.3handlers</h4><p>\u7528\u4E8E\u5F53\u5173\u6CE8\u7684\u8D44\u6E90\u53D1\u751F\u53D8\u5316\u65F6\u91C7\u53D6\u4E00\u5B9A\u7684\u64CD\u4F5C\u3002</p><p>&quot;notify&quot; \u8FD9\u4E2A action \u53EF\u7528\u4E8E\u5728\u6BCF\u4E2A play \u7684\u6700\u540E\u88AB\u89E6\u53D1\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u591A\u6B21\u6709\u6539\u53D8\u53D1\u751F\u65F6\u6BCF\u6B21\u90FD\u6267\u884C\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u53D6\u800C\u4EE3\u4E4B\uFF0C\u4EC5\u5728\u6240\u6709\u7684\u53D8\u5316\u53D1\u751F\u5B8C\u6210\u540E\u4E00\u6B21\u6027\u5730\u6267\u884C\u6307\u5B9A\u64CD\u4F5C\uFF0C\u5728 notify \u4E2D\u5217\u51FA\u7684\u64CD\u4F5C\u79F0\u4E3A handlers\uFF0C\u4E5F\u5373 notify \u4E2D\u8C03\u7528 handlers \u4E2D\u5B9A\u4E49\u7684\u64CD\u4F5C\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> template configuration file
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=template.j2 dest=/etc/foo.conf
  <span class="token key atrule">notify</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> restart memcached
    <span class="token punctuation">-</span> restart apache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>handlers \u662F task \u5217\u8868\uFF0C\u8FD9\u4E9B task \u4E0E\u524D\u8FF0\u7684 task \u5E76\u6CA1\u6709\u672C\u8D28\u4E0A\u7684\u4E0D\u540C\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>handlers\uFF1A
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart memcached
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=memcached state=restarted
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=apache state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u7B80\u5355\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B-1" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B 1\uFF1A</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat nginx.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create nginxn group
    <span class="token key atrule">group</span><span class="token punctuation">:</span> name=nginx system=yes gid=208
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create nginx user
    <span class="token key atrule">user</span><span class="token punctuation">:</span> name=nginx uid=208 group=nginx system=yes

<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> dbserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy file to dbserver
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/etc/inittab dest=/tmp/inittab.ans  
    
<span class="token comment"># ansible-playbook nginx.yml </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u7B80\u5355\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B-2" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B 2\uFF1A</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd package
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install configuration file for httpd
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd service
    <span class="token key atrule">service</span><span class="token punctuation">:</span> enabled=true name=httpd state=started

<span class="token comment"># ansible-playbook apache.yml </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="handlers-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#handlers-\u793A\u4F8B" aria-hidden="true">#</a> handlers \u793A\u4F8B\uFF1A</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd package
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install configuration file for httpd
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> restart httpd
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd service
    <span class="token key atrule">service</span><span class="token punctuation">:</span> enabled=true name=httpd state=started
  
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart httpd
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted

<span class="token comment">#  ansible-playbook apache.yml </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="variable-\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#variable-\u793A\u4F8B-1" aria-hidden="true">#</a> variable \u793A\u4F8B 1\uFF1A</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">package</span><span class="token punctuation">:</span> httpd
  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> httpd
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd package
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> package <span class="token punctuation">}</span><span class="token punctuation">}</span> state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install configuration file for httpd
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> restart httpd
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd service
    <span class="token key atrule">service</span><span class="token punctuation">:</span> enabled=true name=<span class="token punctuation">{</span><span class="token punctuation">{</span> service <span class="token punctuation">}</span><span class="token punctuation">}</span> state=started
  
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart httpd
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="variable-\u793A\u4F8B-2-\u5728-playbook-\u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#variable-\u793A\u4F8B-2-\u5728-playbook-\u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u53D8\u91CF" aria-hidden="true">#</a> variable \u793A\u4F8B 2\uFF1A(\u5728 playbook \u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u53D8\u91CF)</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat facts.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy file
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> content=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_all_ipv4_addresses <span class="token punctuation">}</span><span class="token punctuation">}</span> &quot; dest=/tmp/vars.ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516B\u3001roles" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001roles" aria-hidden="true">#</a> \u516B\u3001roles</h2><p>ansible \u81EA 1.2 \u7248\u672C\u5F15\u5165\u7684\u65B0\u7279\u6027\uFF0C\u7528\u4E8E\u5C42\u6B21\u6027\u3001\u7ED3\u6784\u5316\u5730\u7EC4\u7EC7 playbook\u3002roles \u80FD\u591F\u6839\u636E\u5C42\u6B21\u578B\u7ED3\u6784\u81EA\u52A8\u8F6C\u8F7D\u53D8\u91CF\u6587\u4EF6\u3001tasks \u4EE5\u53CA handlers \u7B49\u3002\u8981\u4F7F\u7528 roles \u53EA\u9700\u8981\u5728 playbook \u4E2D\u4F7F\u7528 include \u6307\u4EE4\u5373\u53EF\u3002\u7B80\u5355\u6765\u8BB2\uFF0Croles \u5C31\u662F\u901A\u8FC7\u5206\u522B\u5C06\u53D8\u91CF\u3001\u6587\u4EF6\u3001\u4EFB\u52A1\u3001\u6A21\u677F\u4EE5\u53CA\u5904\u7406\u5668\u653E\u7F6E\u4E8E\u5355\u72EC\u7684\u76EE\u5F55\u4E2D\uFF0C\u5E76\u53EF\u4EE5\u4FBF\u6377\u5730 include \u4ED6\u4EEC\u7684\u4E00\u79CD\u673A\u5236\u3002\u89D2\u8272\u4E00\u822C\u7528\u4E8E\u57FA\u4E8E\u4E3B\u673A\u6784\u5EFA\u670D\u52A1\u7684\u573A\u666F\u4E2D\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E8E\u6784\u5EFA\u5B88\u62A4\u8FDB\u7A0B\u7684\u573A\u666F\u4E2D</p><p>\u4E00\u4E2A roles \u7684\u6848\u4F8B\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>site.yml
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5728 playbook \u4E2D\uFF0C\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528 roles</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common  
    <span class="token punctuation">-</span> webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5411 roles \u4F20\u9012\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> dir<span class="token punctuation">:</span><span class="token string">&#39;/opt/a&#39;</span><span class="token punctuation">,</span>port<span class="token punctuation">:</span><span class="token number">5000</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> dir<span class="token punctuation">:</span><span class="token string">&#39;/opt/b&#39;</span><span class="token punctuation">,</span>port<span class="token punctuation">:</span><span class="token number">5001</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751A\u81F3\u4E5F\u53EF\u4EE5\u6761\u4EF6\u5F0F\u5730\u4F7F\u7528 roles\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> hosts\uFF1Awebserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> some_role<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> <span class="token string">&quot;ansible_so_family == &#39;RedHat&quot;</span> <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-\u521B\u5EFA-role-\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_8-1-\u521B\u5EFA-role-\u7684\u6B65\u9AA4" aria-hidden="true">#</a> 8.1 \u521B\u5EFA role \u7684\u6B65\u9AA4</h3><ol><li>\u521B\u5EFA\u4EE5 roles \u547D\u540D\u7684\u76EE\u5F55\uFF1A</li><li>\u5728 roles \u76EE\u5F55\u4E2D\u5206\u522B\u521B\u5EFA\u4EE5\u5404\u89D2\u8272\u547D\u540D\u7684\u76EE\u5F55\uFF0C\u5982 webserver \u7B49</li><li>\u5728\u6BCF\u4E2A\u89D2\u8272\u547D\u540D\u7684\u76EE\u5F55\u4E2D\u5206\u522B\u521B\u5EFA files\u3001handlers\u3001meta\u3001tasks\u3001templates \u548C vars \u76EE\u5F55\uFF1B\u7528\u4E0D\u5230\u7684\u76EE\u5F55\u53EF\u4EE5\u521B\u5EFA\u4E3A\u7A7A\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u521B\u5EFA</li><li>\u5728 playbook \u6587\u4EF6\u4E2D\uFF0C\u8C03\u7528\u5404\u89D2\u8272</li></ol><h3 id="_8-2-role-\u5185\u5404\u76EE\u5F55\u4E2D\u53EF\u5E94\u7528\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_8-2-role-\u5185\u5404\u76EE\u5F55\u4E2D\u53EF\u5E94\u7528\u7684\u6587\u4EF6" aria-hidden="true">#</a> 8.2 role \u5185\u5404\u76EE\u5F55\u4E2D\u53EF\u5E94\u7528\u7684\u6587\u4EF6</h3><ul><li>task \u76EE\u5F55\uFF1A\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u4E3A main.yml \u7684\u6587\u4EF6\uFF0C\u5176\u5B9A\u4E49\u4E86\u6B64\u89D2\u8272\u7684\u4EFB\u52A1\u5217\u8868\uFF1B\u6B64\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528 include \u5305\u542B\u5176\u5B83\u7684\u4F4D\u4E8E\u6B64\u76EE\u5F55\u4E2D\u7684 task \u6587\u4EF6\uFF1B</li><li>file \u76EE\u5F55\uFF1A\u5B58\u653E\u7531 copy \u6216 script \u7B49\u6A21\u677F\u5757\u8C03\u7528\u7684\u6587\u4EF6\uFF1B</li><li>template \u76EE\u5F55\uFF1Atemplate \u6A21\u5757\u4F1A\u81EA\u52A8\u5728\u6B64\u76EE\u5F55\u4E2D\u5BFB\u627E jinja2 \u6A21\u677F\u6587\u4EF6\uFF1B</li><li>handlers \u76EE\u5F55\uFF1A\u6B64\u76EE\u5F55\u4E2D\u5E94\u5F53\u5305\u542B\u4E00\u4E2A main.yml \u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7528\u5230\u7684\u5404 handlers\uFF0C\u5728 handler \u4E2D\u4F7F\u7528 inclnude \u5305\u542B\u7684\u5176\u5B83\u7684 handlers \u6587\u4EF6\u4E5F\u5E94\u8BE5\u4F4D\u4E8E\u6B64\u76EE\u5F55\u4E2D\uFF1B</li><li>vars \u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2A main.yml \u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7528\u5230\u7684\u53D8\u91CF</li><li>meta \u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2A main.yml \u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7684\u7279\u6B8A\u8BBE\u5B9A\u53CA\u5176\u4F9D\u8D56\u5173\u7CFB\uFF1Bansible1.3 \u53CA\u5176\u4EE5\u540E\u7684\u7248\u672C\u624D\u652F\u6301\uFF1B</li><li>default \u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2A main.yml \u6587\u4EF6\uFF0C\u7528\u4E8E\u4E3A\u5F53\u524D\u89D2\u8272\u8BBE\u5B9A\u9ED8\u8BA4\u53D8\u91CF\u65F6\u4F7F\u7528\u6B64\u76EE\u5F55\uFF1B</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># mkdir -pv ansible_playbooks/roles/{webserver,dbserver}/{tasks,files,templates,meta,handlers,vars} </span>
<span class="token comment"># cp /etc/httpd/conf/httpd.conf files/  </span>
<span class="token comment"># pwd</span>
/root/ansible_playbooks/roles/webserver 
<span class="token comment"># cat tasks/main.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd package
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install configuretion file
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=httpd.conf dest=/etc/httpd/conf/httpd.conf
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> conf
  <span class="token key atrule">notify</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> restart httpd
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started

<span class="token comment"># cat handlers/main.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart httpd
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted
  
<span class="token comment"># pwd;ls</span>
/root/ansible_playbooks
roles  site.yml 


<span class="token comment"># cat site.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> webserver

<span class="token comment"># ansible-playbook site.yml  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E5D\u3001tags" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001tags" aria-hidden="true">#</a> \u4E5D\u3001Tags</h2><p>tags \u7528\u4E8E\u8BA9\u7528\u6237\u9009\u62E9\u8FD0\u884C\u6216\u8DF3\u8FC7 playbook \u4E2D\u7684\u90E8\u5206\u4EE3\u7801\u3002ansible \u5177\u6709\u5E42\u7B49\u6027\uFF0C\u56E0\u6B64\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u6CA1\u6709\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u5373\u4FBF\u5982\u6B64\uFF0C\u6709\u4E9B\u4EE3\u7801\u4E3A\u6D4B\u8BD5\u5176\u786E\u5B9E\u6CA1\u6709\u53D1\u751F\u53D8\u5316\u7684\u65F6\u95F4\u4F9D\u7136\u4F1A\u975E\u5E38\u7684\u957F\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u786E\u4FE1\u5176\u6CA1\u6709\u53D8\u5316\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7 tags \u8DF3\u8FC7\u6B64\u4E9B\u4EE3\u7801\u7247\u6BB5\u3002</p><p>tags\uFF1A\u5728 playbook \u53EF\u4EE5\u4E3A\u67D0\u4E2A\u6216\u67D0\u4E9B\u4EFB\u52A1\u5B9A\u4E49\u4E00\u4E2A &quot;\u6807\u7B7E&quot;\uFF0C\u5728\u6267\u884C\u6B64 playbook \u65F6\uFF0C\u901A\u8FC7\u4E3A ansible-playbook \u547D\u4EE4\u4F7F\u7528 --tags \u9009\u9879\u80FD\u8010\u5B9E\u73B0\u4EC5\u8FD0\u884C\u6307\u5B9A\u7684 tasks \u800C\u975E\u6240\u6709\u7684\uFF1B</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">package</span><span class="token punctuation">:</span> httpd
  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> httpd
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd package
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> package <span class="token punctuation">}</span><span class="token punctuation">}</span> state=latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install configuration file for httpd
    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/root/conf/httpd.conf dest=/etc/httpd/conf/httpd.conf
    <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> restart httpd
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd service
    <span class="token key atrule">service</span><span class="token punctuation">:</span> enabled=true name=<span class="token punctuation">{</span><span class="token punctuation">{</span> service <span class="token punctuation">}</span><span class="token punctuation">}</span> state=started
  
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart httpd
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted

<span class="token comment"># ansible-playbook apache.yml --tags=&#39;conf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7279\u6B8A tags\uFF1Aalways #\u65E0\u8BBA\u5982\u4F55\u90FD\u4F1A\u8FD0\u884C</p><hr>`,148),d={class:"custom-container info"},r=n("p",{class:"custom-container-title"},"\u7248\u6743\u58F0\u660E",-1),m=s("\u672C\u6587\u4E3A\u535A\u4E3B"),v={href:"https://my.oschina.net/kangvcar",target:"_blank",rel:"noopener noreferrer"},k=s("\u300Ckangvcar\u300D"),b=s("\u7684\u539F\u521B\u6587\u7AE0\u3002"),h=n("br",null,null,-1),y=s(" \u539F\u6587\u94FE\u63A5\uFF1A"),g={href:"https://my.oschina.net/kangvcar/blog/1830155",target:"_blank",rel:"noopener noreferrer"},f=s("https://my.oschina.net/kangvcar/blog/1830155");function _(x,w){const a=l("ExternalLinkIcon");return i(),p("div",null,[o,n("div",d,[r,n("p",null,[m,n("a",v,[k,e(a)]),b,h,y,n("a",g,[f,e(a)])])])])}var M=t(u,[["render",_],["__file","\u4E00\u6587\u638C\u63E1 Ansible \u81EA\u52A8\u5316\u8FD0\u7EF4.html.vue"]]);export{M as default};
