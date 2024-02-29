import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as p,a as n,b as s,d as e,e as c}from"./app-CJ41Qqlj.js";const o={},u=c(`<h2 id="一、基本部署" tabindex="-1"><a class="header-anchor" href="#一、基本部署"><span>一、基本部署</span></a></h2><h3 id="安装-ansible" tabindex="-1"><a class="header-anchor" href="#安装-ansible"><span>安装 Ansible</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># yum -y install epel-release</span>
<span class="token comment"># yum list all *ansible*</span>
<span class="token comment"># yum info ansible</span>
<span class="token comment"># yum -y install ansible    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible-配置文件" tabindex="-1"><a class="header-anchor" href="#ansible-配置文件"><span>Ansible 配置文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/etc/ansible/ansible.cfg    主配置文件
/etc/ansible/hosts          Inventory
/usr/bin/ansible-doc        帮助文件
/usr/bin/ansible-playbook   指定运行任务文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义-inventory" tabindex="-1"><a class="header-anchor" href="#定义-inventory"><span>定义 Inventory</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cd /etc/ansible/</span>
<span class="token comment"># cp hosts{,.bak}</span>
<span class="token comment"># &gt; hosts</span>

<span class="token comment"># cat hosts</span>
<span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
<span class="token number">127.0</span>.0.1
<span class="token number">192.168</span>.10.149

<span class="token punctuation">[</span>dbserver<span class="token punctuation">]</span>
<span class="token number">192.168</span>.10.113
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用秘钥方式连接" tabindex="-1"><a class="header-anchor" href="#使用秘钥方式连接"><span>使用秘钥方式连接</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ssh-keygen -t rsa </span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.10.149</span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub root@192.168.10.113</span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub root@127.0.0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用帮助" tabindex="-1"><a class="header-anchor" href="#使用帮助"><span>使用帮助</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ansible-doc -l                列出ansible所有的模块</span>
<span class="token comment"># ansible-doc -s MODULE_NAME    查看指定模块具体适用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible-命令应用基础" tabindex="-1"><a class="header-anchor" href="#ansible-命令应用基础"><span>Ansible 命令应用基础</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>语法：ansible <span class="token operator">&lt;</span>host-pattern<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f forks<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m module_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a args<span class="token punctuation">]</span>

<span class="token operator">&lt;</span>host-pattern<span class="token operator">&gt;</span>  这次命令对哪些主机生效的
    inventory group name
    <span class="token function">ip</span>
    all
<span class="token parameter variable">-f</span> forks        一次处理多少个主机
<span class="token parameter variable">-m</span> module_name  要使用的模块
<span class="token parameter variable">-a</span> args         模块特有的参数

<span class="token comment"># ansible 192.168.10.113 -m command -a &#39;date&#39;</span>
<span class="token comment"># ansible webserver -m command -a &#39;date&#39;</span>
<span class="token comment"># ansible all -m command -a &#39;date&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、常见模块" tabindex="-1"><a class="header-anchor" href="#二、常见模块"><span>二、常见模块</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span>     命令模块<span class="token punctuation">(</span>默认模块<span class="token punctuation">)</span>用于在远程主机执行命令；不能使用变量，管道等
    <span class="token comment"># ansible all -a &#39;date&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cron</span>        计划任务    
    month   指定月份
    minute  指定分钟
    job     指定任务
    day     表示那一天
    hour    指定小时
    weekday 表示周几
    state   表示是添加还是删除
        present：安装
        absent：移除
    <span class="token comment"># ansible webserver -m cron -a &#39;minute=&quot;*/10&quot; job=&quot;/bin/echo hello&quot; name=&quot;test cron job&quot;&#39;   #不写默认都是*，每个任务都必须有一个名字 </span>
    <span class="token comment"># ansible webserver -a &#39;crontab -l&#39;</span>
    <span class="token comment"># ansible webserver -m cron -a &#39;minute=&quot;*/10&quot; job=&quot;/bin/echo hello&quot; name=&quot;test cron job&quot; state=absent&#39;  #移除任务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>user    用户账号管理
    name    用户名
    uid     uid
    state   状态  
    group   属于哪个组
    <span class="token function">groups</span>  附加组
    home    家目录
    createhome  是否创建家目录
    comment 注释信息
    system  是否是系统用户
    
    <span class="token comment"># ansible all -m user -a &#39;name=&quot;user1&quot;&#39;</span>
    <span class="token comment"># ansible all -m user -a &#39;name=&quot;user1&quot; state=absent&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>group   组管理
    gid     gid      
    name    组名               
    state   状态           
    system  是否是系统组
    # ansible webserver -m group -a &#39;name=mysql gid=306 system=yes&#39;
    # ansible webserver -m user -a &#39;name=mysql uid=306 system=yes group=mysql&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>copy    复制文件<span class="token punctuation">(</span>复制本地文件到远程主机的指定位置<span class="token punctuation">)</span>
    src     定义本地源文件路径
    dest    定义远程目录文件路径<span class="token punctuation">(</span>绝对路径<span class="token punctuation">)</span>
    owner   属主
    group   属组
    mode    权限
    content 取代src<span class="token operator">=</span>,表示直接用此处的信息生成为文件内容
    <span class="token comment"># yum -y install libselinux-python</span>
    <span class="token comment"># ansible all -m copy -a &#39;src=/etc/fstab dest=/tmp/fstab.ansible owner=root mode=640&#39;</span>
    <span class="token comment"># ansible all -m copy -a &#39;content=&quot;hello ansible\\nHi ansible&quot; dest=/tmp/test.ansible&#39; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">file</span>    设置文件的属性
    path<span class="token operator">|</span>dest<span class="token operator">|</span>name  对那个文件做设定

    创建文件的符号链接：
        src：    指定源文件
        path：   指明符号链接文件路径
    <span class="token comment"># ansible all -m file -a &#39;owner=mysql group=mysql mode=644 path=/tmp/fstab.ansible&#39;</span>
    <span class="token comment"># ansible all -m file -a &#39;path=/tmp/fstab.link src=/tmp/fstab.ansible state=link&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ping</span>    测试指定主机是否能连接
    <span class="token comment"># ansible all -m ping </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">service</span> 管理服务运行状态
    enabled 是否开机自动启动
    name    指定服务名
    state   指定服务状态
        started     启动服务
        stoped      停止服务
        restarted   重启服务
    arguments   服务的参数
    <span class="token comment"># ansible webserver -m service -a &#39;enabled=true name=httpd state=started&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>shell   在远程主机上运行命令
    尤其是用到管道变量等功能的复杂命令
    <span class="token comment"># ansible all -m shell -a &#39;echo magedu | passwd --stdin user1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>script  将本地脚本复制到远程主机并运行之
    <span class="token comment"># ansible all -m script -a &#39;/tmp/test.sh&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum     安装程序包
    name    程序包名称<span class="token punctuation">(</span>不指定版本就安装最新的版本latest<span class="token punctuation">)</span>
    state   present,latest表示安装，absent表示卸载
    <span class="token comment"># ansible webserver -m yum -a &#39;name=httpd&#39;</span>
    <span class="token comment"># ansible all -m yum -a &#39;name=ntpdate&#39;  #默认就是安装</span>
    <span class="token comment"># ansible all -m yum -a &#39;name=ntpdate state=absent&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setup   收集远程主机的facts
    每个被管理节点在接受并运行管理命令之前，会将自己主机相关信息，如操作系统版本，IP地址等报告给远程的ansible主机 
    <span class="token comment"># ansible all -m setup</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、ansible-playbook" tabindex="-1"><a class="header-anchor" href="#三、ansible-playbook"><span>三、Ansible playbook</span></a></h2><h3 id="组成结构" tabindex="-1"><a class="header-anchor" href="#组成结构"><span>组成结构：</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>inventory       <span class="token comment">#以下操作应用的主机</span>
modules         <span class="token comment">#调用哪些模块做什么样的操作</span>
ad hoc commands <span class="token comment">#在这些主机上运行哪些命令</span>
playbooks   
    tasks       <span class="token comment">#任务,即调用模块完成的某操作</span>
    variable    <span class="token comment">#变量</span>
    templates   <span class="token comment">#模板</span>
    handlers    <span class="token comment">#处理器，由某事件触发执行的操作</span>
    roles       <span class="token comment">#角色</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、yaml" tabindex="-1"><a class="header-anchor" href="#四、yaml"><span>四、YAML</span></a></h2><h3 id="_4-1-yaml-介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-yaml-介绍"><span>4.1 YAML 介绍</span></a></h3><p>YAML 是一个可读性高的用来表达资料序列的格式。YAML 参考了其它多种语言，包括：XML、C 语言、Python、Perl 以及电子邮件格式 RFC2822 等。ClarkEvans 在 2001 年首次发表了这种语言，另外 Ingy dot Net 与 Oren Ben-Kiki 也是这语言的共同设计者。</p><p>YAML Ain&#39;t Markup Language, 即 YAML 不是 XML，不过，在开发这种语言时，YAML 的意思其实是：&quot;Yet Another Markup Language&quot;(仍是一种标记语言)，其特性：</p><ul><li>YAML 的可读性好</li><li>YAML 和脚本语言的交互性好</li><li>YAML 使用实现语言的数据类型</li><li>YAML 有一个一致的信息模型</li><li>YAML 易于实现</li><li>YAML 可以基于流来处理</li><li>YAML 表达能力强，扩展性好</li></ul><blockquote><p>更多的内容及规范参见 http://www.yaml.org</p></blockquote><p>###　4.2 YAML 语法 YAML 的语法和其他高阶语言类似，并且可以简单表达清单、散列表、标量等数据结构，其结构 (structure) 通过空格来展示，序列 (sequence) 里的项用 &quot;-&quot; 来表示，Map 里面的键值对用 &quot;:&quot; 分割，下面是一个示例。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> john smith
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YAML 文件扩展名通常为.yaml，如 example.yaml</p><h4 id="_4-2-1-list" tabindex="-1"><a class="header-anchor" href="#_4-2-1-list"><span>4.2.1 list</span></a></h4><p>列表的所有元素均使用 &quot;-&quot; 打头，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># A list of testy fruits</span>
<span class="token punctuation">-</span> Apple
<span class="token punctuation">-</span> Orange
<span class="token punctuation">-</span> Strawberry
<span class="token punctuation">-</span> Mango
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-dictionary" tabindex="-1"><a class="header-anchor" href="#_4-2-2-dictionary"><span>4.2.2 dictionary</span></a></h4><p>字典通过 key 与 value 进行标识，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token comment"># An employee record</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Example Developer
<span class="token key atrule">job</span><span class="token punctuation">:</span> Developer
<span class="token key atrule">skill</span><span class="token punctuation">:</span> Elite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将 key:value 放置于 {} 中进行表示，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token comment">#An exmloyee record</span>
<span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> Example Developer<span class="token punctuation">,</span> <span class="token key atrule">job</span><span class="token punctuation">:</span> Developer<span class="token punctuation">,</span> <span class="token key atrule">skill</span><span class="token punctuation">:</span> Elite<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、ansible-基础元素" tabindex="-1"><a class="header-anchor" href="#五、ansible-基础元素"><span>五、Ansible 基础元素</span></a></h2><h3 id="_5-1-变量" tabindex="-1"><a class="header-anchor" href="#_5-1-变量"><span>5.1 变量</span></a></h3><p>####　5.1.1 变量命名 变量名仅能由字母、数字和下划线组成，且只能以字母开头。</p><p>####　5.1.2 facts facts 是由正在通信的远程目标主机发回的信息，这些信息被保存在 ansible 变量中。要获取指定的远程主机所支持的所有 facts，可使用如下命令进行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#ansible hostname -m setup</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####　5.1.3 register 把任务的输出定义为变量，然后用于其他任务，实例如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/foo
      <span class="token key atrule">register</span><span class="token punctuation">:</span> foo_result
      <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####　5.1.4 通过命令行传递变量 在运行 playbook 的时候也可以传递一些变量供 playbook 使用，示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#ansible-playbook test.yml --extra-vars &quot;hosts=www user=mageedu&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>####　5.1.5 通过 roles 传递变量 当给一个主机应用角色的时候可以传递变量，然后在角色内使用这些变量，示例如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> <span class="token key atrule">dir</span><span class="token punctuation">:</span> <span class="token string">&#39;/web/htdocs/a.com&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-inventory" tabindex="-1"><a class="header-anchor" href="#_5-2-inventory"><span>5.2 Inventory</span></a></h3><p>ansible 的主要功用在于批量主机操作，为了便捷的使用其中的部分主机，可以在 inventory file 中将其分组命名，默认的 inventory file 为<code>/etc/ansible/hosts</code></p><p>inventory file 可以有多个，且也可以通过 Dynamic Inventory 来动态生成。</p><p>####　5.2.1 inventory 文件格式 inventory 文件遵循 INI 文件风格，中括号中的字符为组名。可以将同一个主机同时归并到多个不同的组中；此外，当如若目标主机使用非默认的 SSH 端口，还可以在主机名称之后使用冒号加端口号来表明。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>ntp.magedu.com

<span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www1.magedu.com<span class="token punctuation">:</span><span class="token number">2222</span>
www2.magedu.com

<span class="token punctuation">[</span>dbserver<span class="token punctuation">]</span>
db1.magedu.com
db2.magedu.com
db3.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果主机名遵循相似的命名模式，还可使用列表的方式标识个主机，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www<span class="token punctuation">[</span><span class="token datetime number">01:50</span><span class="token punctuation">]</span>.example.com

<span class="token punctuation">[</span>databases<span class="token punctuation">]</span>
db<span class="token punctuation">-</span><span class="token punctuation">[</span>a<span class="token punctuation">:</span>f<span class="token punctuation">]</span>.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####　5.2.2 主机变量 可以在 inventory 中定义主机时为其添加主机变量以便于在 playbook 中使用，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www1.magedu.com http_port=80 maxRequestsPerChild=808
www2.magedu.com http_port=8080 maxRequestsPerChild=909
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####　5.2.3 组变量 组变量是指赋予给指定组内所有主机上的在 playbook 中可用的变量。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
www1.magedu.com
www2.magedu.com

<span class="token punctuation">[</span>webserver<span class="token punctuation">:</span>vars<span class="token punctuation">]</span>
ntp_server=ntp.magedu.com
nfs_server=nfs.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####　5.2.4 组嵌套 inventory 中，组还可以包含其它的组，并且也可以向组中的主机指定变量。不过，这些变量只能在 ansible-playbook 中使用，而 ansible 不支持。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>apache<span class="token punctuation">]</span>
httpd1.magedu.com
httpd2.magedu.com

<span class="token punctuation">[</span>nginx<span class="token punctuation">]</span>
ngx1.magedu.com
ngx2.magedu.com

<span class="token punctuation">[</span>webserver<span class="token punctuation">:</span>children<span class="token punctuation">]</span>    <span class="token comment">#固定格式</span>
apache
nginx

<span class="token punctuation">[</span>webserver<span class="token punctuation">:</span>vars<span class="token punctuation">]</span>
ntp_server=ntp.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####　5.2.5 inventory 参数 ansible 基于 ssh 连接 inventory 中指定的远程主机时，还可以通过参数指定其交互方式，这些参数如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ansible_ssh_host
ansible_ssh_port
ansible_ssh_user
ansible_ssh_pass
ansible_sudo_pass
ansible_connection
ansible_ssh_private_key_file
ansible_shell_type
ansible_python_interpreter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-条件测试" tabindex="-1"><a class="header-anchor" href="#_5-3-条件测试"><span>5.3 条件测试</span></a></h3><p>如果需要根据变量、facts 或此前任务的执行结果来做为某 task 执行与否的前提时要用到条件测试。</p><p>####　5.3.1 when 语句 在 task 后添加 when 字句即可使用条件测试；when 语句支持 jinja2 表达式语句，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> &#39;shutdown debian flavored system&quot;
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/shutdown <span class="token punctuation">-</span>h now
    <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_os_family == &quot;Debian&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>when 语句中还可以使用 jinja2 的大多 &quot;filter&quot;, 例如果忽略此前某语句的错误并基于其结果 (failed 或 success) 运行后面指定的语句，可使用类似如下形式；</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> command<span class="token punctuation">:</span>/bin/false
    <span class="token key atrule">register</span><span class="token punctuation">:</span> result
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/something
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>failed
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/something_else
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>success
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/still/something_else
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，when 语句中还可以使用 facts 或 playbook 中定义的变量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat cond.yml </span>
- hosts: all
  remote_user: root
  vars:
  - username: user10
  tasks:
  - name: create <span class="token punctuation">{</span><span class="token punctuation">{</span> username <span class="token punctuation">}</span><span class="token punctuation">}</span> user
    user: <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> username <span class="token punctuation">}</span><span class="token punctuation">}</span> 
    when: ansible_fqdn <span class="token operator">==</span> <span class="token string">&quot;node1.exercise.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-迭代" tabindex="-1"><a class="header-anchor" href="#_5-4-迭代"><span>5.4 迭代</span></a></h3><p>当有需要重复性执行的任务时，可以使用迭代机制。其使用格式为将需要迭代的内容定义为 item 变量引用，并通过 with_items 语句来指明迭代的元素列表即可。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add server user
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=persent groups=wheel
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> testuser1
    <span class="token punctuation">-</span> testuser2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面语句的功能等同于下面的语句：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add user testuser1
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=testuser1 state=present group=wheel
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add user testuser2
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=testuser2 state=present group=wheel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，with_items 中可以使用元素还可为 hashes，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add several users
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item.name<span class="token punctuation">}</span><span class="token punctuation">}</span> state=present groups=<span class="token punctuation">{</span><span class="token punctuation">{</span> item.groups <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;testuser1&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token string">&#39;wheel&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;testuser2&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">groups</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Ansible 的循环机制还有更多的高级功能，具体请参考官方文档 http://docs.ansible.com/playbooks_loops.html</p></blockquote><h2 id="六、模板示例" tabindex="-1"><a class="header-anchor" href="#六、模板示例"><span>六、模板示例：</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># grep &#39;{{&#39; conf/httpd.conf </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、ansible-playbooks" tabindex="-1"><a class="header-anchor" href="#七、ansible-playbooks"><span>七、Ansible playbooks</span></a></h2><p>playbook 是由一个或多个 &quot;play&quot; 组成的列表。play 的主要功能在于将事先归并为一组的主机装扮成事先通过 ansible 中的 task 定义好的角色。从根本上来讲，所有 task 无非是调用 ansible 的一个 module。将多个 play 组织在一个 playbook 中，即可以让他们连同起来按事先编排的机制同唱一台大戏。下面是一个简单示例。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-playbook-基础组件" tabindex="-1"><a class="header-anchor" href="#_7-1-playbook-基础组件"><span>7.1 playbook 基础组件</span></a></h3><h4 id="_7-1-1-hosts-和-users" tabindex="-1"><a class="header-anchor" href="#_7-1-1-hosts-和-users"><span>7.1.1 Hosts 和 Users</span></a></h4><p>playbook 中的每一个 play 的目的都是为了让某个或某些主机以某个指定的用户身份执行任务。hosts 用于指定要执行指定任务的主机，其可以使一个或多个由冒号分隔主机组；remote_user 则用于指定远程主机的执行任务的用户，如上面的实例中的</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，remote_user 也可用于各 task 中，也可以通过指定其通过 sudo 的方式在远程主机上执行任务，其可用于 play 全局或其任务；此外，甚至可以在 sudo 时使用 sudo_user 指定 sudo 时切换的用户。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> magedu
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test connection
     <span class="token key atrule">ping</span><span class="token punctuation">:</span>
     <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> magedu
     <span class="token key atrule">sudo</span><span class="token punctuation">:</span> yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-1-2-任务列表和-action" tabindex="-1"><a class="header-anchor" href="#_7-1-2-任务列表和-action"><span>7.1.2 任务列表和 action</span></a></h4><p>play 的主题部分是 task list。task list 中的各任务按次序逐个在 hosts 中指定的所有主机上执行，即在所有主机上完成第一个任务后再开始第二个。在运行自上而下某 playbook 时，如果中途发生错误，所有已执行任务都可能回滚，在更正 playbook 后重新执行一次即可。</p><p>tasks 的目的是使用指定的参数执行模块，而在模块参数中可以使用变量。模块执行是幂等的。这意味着多次执行是安全的，因为其结果均一致。</p><p>每个 task 都应该有其 name，用于 playbook 的执行结果输出，建议其内容尽可能清晰地描述任务执行步骤，如果为提供 name，则 action 的结果将用于输出。</p><p>定义 task 可以使用 &quot;action: module options&quot; 或”module：options“的格式推荐使用后者以实现向后兼容。如果 action 一行的内容过多，也中使用在行首使用几个空白字符进行换行。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> name<span class="token punctuation">:</span>make sure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在众多的模块中，只有 command 和 shell 模块仅需要给定一个列表而无需使用 &quot;key=value&quot; 格式，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> disable selinux
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果命令或脚本的退出码不为零，可以使用如下方式替代：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand <span class="token punctuation">|</span><span class="token punctuation">|</span> /bin/true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用 ignore_errors 来忽略错误信息：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-1-3handlers" tabindex="-1"><a class="header-anchor" href="#_7-1-3handlers"><span>7.1.3handlers</span></a></h4><p>用于当关注的资源发生变化时采取一定的操作。</p><p>&quot;notify&quot; 这个 action 可用于在每个 play 的最后被触发，这样可以避免多次有改变发生时每次都执行执行的操作，取而代之，仅在所有的变化发生完成后一次性地执行指定操作，在 notify 中列出的操作称为 handlers，也即 notify 中调用 handlers 中定义的操作。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> template configuration file
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=template.j2 dest=/etc/foo.conf
  <span class="token key atrule">notify</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> restart memcached
    <span class="token punctuation">-</span> restart apache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>handlers 是 task 列表，这些 task 与前述的 task 并没有本质上的不同。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>handlers：
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart memcached
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=memcached state=restarted
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=apache state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="简单示例-1" tabindex="-1"><a class="header-anchor" href="#简单示例-1"><span>简单示例 1：</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># cat nginx.yml </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="简单示例-2" tabindex="-1"><a class="header-anchor" href="#简单示例-2"><span>简单示例 2：</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="handlers-示例" tabindex="-1"><a class="header-anchor" href="#handlers-示例"><span>handlers 示例：</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="variable-示例-1" tabindex="-1"><a class="header-anchor" href="#variable-示例-1"><span>variable 示例 1：</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="variable-示例-2-在-playbook-中可以使用所有的变量" tabindex="-1"><a class="header-anchor" href="#variable-示例-2-在-playbook-中可以使用所有的变量"><span>variable 示例 2：(在 playbook 中可以使用所有的变量)</span></a></h5><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># cat facts.yml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy file
    <span class="token key atrule">copy</span><span class="token punctuation">:</span> content=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_all_ipv4_addresses <span class="token punctuation">}</span><span class="token punctuation">}</span> &quot; dest=/tmp/vars.ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、roles" tabindex="-1"><a class="header-anchor" href="#八、roles"><span>八、roles</span></a></h2><p>ansible 自 1.2 版本引入的新特性，用于层次性、结构化地组织 playbook。roles 能够根据层次型结构自动转载变量文件、tasks 以及 handlers 等。要使用 roles 只需要在 playbook 中使用 include 指令即可。简单来讲，roles 就是通过分别将变量、文件、任务、模板以及处理器放置于单独的目录中，并可以便捷地 include 他们的一种机制。角色一般用于基于主机构建服务的场景中，但也可以使用于构建守护进程的场景中</p><p>一个 roles 的案例如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>site.yml
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在 playbook 中，可以这样使用 roles</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common  
    <span class="token punctuation">-</span> webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以向 roles 传递参数，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> dir<span class="token punctuation">:</span><span class="token string">&#39;/opt/a&#39;</span><span class="token punctuation">,</span>port<span class="token punctuation">:</span><span class="token number">5000</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> dir<span class="token punctuation">:</span><span class="token string">&#39;/opt/b&#39;</span><span class="token punctuation">,</span>port<span class="token punctuation">:</span><span class="token number">5001</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至也可以条件式地使用 roles，例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> hosts：webserver
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> some_role<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> <span class="token string">&quot;ansible_so_family == &#39;RedHat&quot;</span> <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-创建-role-的步骤" tabindex="-1"><a class="header-anchor" href="#_8-1-创建-role-的步骤"><span>8.1 创建 role 的步骤</span></a></h3><ol><li>创建以 roles 命名的目录：</li><li>在 roles 目录中分别创建以各角色命名的目录，如 webserver 等</li><li>在每个角色命名的目录中分别创建 files、handlers、meta、tasks、templates 和 vars 目录；用不到的目录可以创建为空目录，也可以不创建</li><li>在 playbook 文件中，调用各角色</li></ol><h3 id="_8-2-role-内各目录中可应用的文件" tabindex="-1"><a class="header-anchor" href="#_8-2-role-内各目录中可应用的文件"><span>8.2 role 内各目录中可应用的文件</span></a></h3><ul><li>task 目录：至少应该包含一个为 main.yml 的文件，其定义了此角色的任务列表；此文件可以使用 include 包含其它的位于此目录中的 task 文件；</li><li>file 目录：存放由 copy 或 script 等模板块调用的文件；</li><li>template 目录：template 模块会自动在此目录中寻找 jinja2 模板文件；</li><li>handlers 目录：此目录中应当包含一个 main.yml 文件，用于定义此角色用到的各 handlers，在 handler 中使用 inclnude 包含的其它的 handlers 文件也应该位于此目录中；</li><li>vars 目录：应当包含一个 main.yml 文件，用于定义此角色用到的变量</li><li>meta 目录：应当包含一个 main.yml 文件，用于定义此角色的特殊设定及其依赖关系；ansible1.3 及其以后的版本才支持；</li><li>default 目录：应当包含一个 main.yml 文件，用于为当前角色设定默认变量时使用此目录；</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># mkdir -pv ansible_playbooks/roles/{webserver,dbserver}/{tasks,files,templates,meta,handlers,vars} </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、tags" tabindex="-1"><a class="header-anchor" href="#九、tags"><span>九、Tags</span></a></h2><p>tags 用于让用户选择运行或跳过 playbook 中的部分代码。ansible 具有幂等性，因此会自动跳过没有变化的部分，即便如此，有些代码为测试其确实没有发生变化的时间依然会非常的长。此时，如果确信其没有变化，就可以通过 tags 跳过此些代码片段。</p><p>tags：在 playbook 可以为某个或某些任务定义一个 &quot;标签&quot;，在执行此 playbook 时，通过为 ansible-playbook 命令使用 --tags 选项能耐实现仅运行指定的 tasks 而非所有的；</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># cat apache.yml </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊 tags：always #无论如何都会运行</p><hr>`,148),d={class:"hint-container info"},r=n("p",{class:"hint-container-title"},"版权声明",-1),m={href:"https://my.oschina.net/kangvcar",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://my.oschina.net/kangvcar/blog/1830155",target:"_blank",rel:"noopener noreferrer"};function b(h,y){const a=l("ExternalLinkIcon");return i(),p("div",null,[u,n("div",d,[r,n("p",null,[s("本文为博主"),n("a",m,[s("「kangvcar」"),e(a)]),s("的原创文章。"),v,s(" 原文链接："),n("a",k,[s("https://my.oschina.net/kangvcar/blog/1830155"),e(a)])])])])}const _=t(o,[["render",b],["__file","一文掌握 Ansible 自动化运维.html.vue"]]),x=JSON.parse('{"path":"/tools/Ansible/%E4%B8%80%E6%96%87%E6%8E%8C%E6%8F%A1%20Ansible%20%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%90%E7%BB%B4.html","title":"一文掌握 Ansible 自动化运维","lang":"zh-CN","frontmatter":{"icon":"ansible","author":"kangvcar","title":"一文掌握 Ansible 自动化运维","date":"2018-06-14T00:00:00.000Z","category":["ansible"],"tag":["ansible"]},"headers":[{"level":2,"title":"一、基本部署","slug":"一、基本部署","link":"#一、基本部署","children":[{"level":3,"title":"安装 Ansible","slug":"安装-ansible","link":"#安装-ansible","children":[]},{"level":3,"title":"Ansible 配置文件","slug":"ansible-配置文件","link":"#ansible-配置文件","children":[]},{"level":3,"title":"定义 Inventory","slug":"定义-inventory","link":"#定义-inventory","children":[]},{"level":3,"title":"使用秘钥方式连接","slug":"使用秘钥方式连接","link":"#使用秘钥方式连接","children":[]},{"level":3,"title":"使用帮助","slug":"使用帮助","link":"#使用帮助","children":[]},{"level":3,"title":"Ansible 命令应用基础","slug":"ansible-命令应用基础","link":"#ansible-命令应用基础","children":[]}]},{"level":2,"title":"二、常见模块","slug":"二、常见模块","link":"#二、常见模块","children":[]},{"level":2,"title":"三、Ansible playbook","slug":"三、ansible-playbook","link":"#三、ansible-playbook","children":[{"level":3,"title":"组成结构：","slug":"组成结构","link":"#组成结构","children":[]}]},{"level":2,"title":"四、YAML","slug":"四、yaml","link":"#四、yaml","children":[{"level":3,"title":"4.1 YAML 介绍","slug":"_4-1-yaml-介绍","link":"#_4-1-yaml-介绍","children":[]}]},{"level":2,"title":"五、Ansible 基础元素","slug":"五、ansible-基础元素","link":"#五、ansible-基础元素","children":[{"level":3,"title":"5.1 变量","slug":"_5-1-变量","link":"#_5-1-变量","children":[]},{"level":3,"title":"5.2 Inventory","slug":"_5-2-inventory","link":"#_5-2-inventory","children":[]},{"level":3,"title":"5.3 条件测试","slug":"_5-3-条件测试","link":"#_5-3-条件测试","children":[]},{"level":3,"title":"5.4 迭代","slug":"_5-4-迭代","link":"#_5-4-迭代","children":[]}]},{"level":2,"title":"六、模板示例：","slug":"六、模板示例","link":"#六、模板示例","children":[]},{"level":2,"title":"七、Ansible playbooks","slug":"七、ansible-playbooks","link":"#七、ansible-playbooks","children":[{"level":3,"title":"7.1 playbook 基础组件","slug":"_7-1-playbook-基础组件","link":"#_7-1-playbook-基础组件","children":[]}]},{"level":2,"title":"八、roles","slug":"八、roles","link":"#八、roles","children":[{"level":3,"title":"8.1 创建 role 的步骤","slug":"_8-1-创建-role-的步骤","link":"#_8-1-创建-role-的步骤","children":[]},{"level":3,"title":"8.2 role 内各目录中可应用的文件","slug":"_8-2-role-内各目录中可应用的文件","link":"#_8-2-role-内各目录中可应用的文件","children":[]}]},{"level":2,"title":"九、Tags","slug":"九、tags","link":"#九、tags","children":[]}],"git":{"createdTime":1654401418000,"updatedTime":1655615860000,"contributors":[{"name":"00D2","email":"shijinguosjg@gmail.com","commits":2}]},"readingTime":{"minutes":15.45,"words":4635},"filePathRelative":"tools/Ansible/一文掌握 Ansible 自动化运维.md","localizedDate":"2018年6月14日","excerpt":"<h2>一、基本部署</h2>\\n<h3>安装 Ansible</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># yum -y install epel-release</span>\\n<span class=\\"token comment\\"># yum list all *ansible*</span>\\n<span class=\\"token comment\\"># yum info ansible</span>\\n<span class=\\"token comment\\"># yum -y install ansible    </span>\\n</code></pre></div>"}');export{_ as comp,x as data};
