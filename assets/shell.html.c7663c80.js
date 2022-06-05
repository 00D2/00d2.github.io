import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as v,o as a,c as u,a as i,b as s,d as n,e as d}from"./app.af53ec83.js";const r={},c=n(`<h1 id="_100\u4E2Alinux-shell\u811A\u672C\u7ECF\u5178\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_100\u4E2Alinux-shell\u811A\u672C\u7ECF\u5178\u6848\u4F8B" aria-hidden="true">#</a> 100\u4E2ALinux Shell\u811A\u672C\u7ECF\u5178\u6848\u4F8B</h1><p>1\u3001\u7F16\u5199hello world\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199hello world\u811A\u672C
 
echo &quot;Hello World!&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u901A\u8FC7\u4F4D\u7F6E\u53D8\u91CF\u521B\u5EFA Linux \u7CFB\u7EDF\u8D26\u6237\u53CA\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u901A\u8FC7\u4F4D\u7F6E\u53D8\u91CF\u521B\u5EFA Linux \u7CFB\u7EDF\u8D26\u6237\u53CA\u5BC6\u7801
 
#$1 \u662F\u6267\u884C\u811A\u672C\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570,$2 \u662F\u6267\u884C\u811A\u672C\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570
useradd    &quot;$1&quot; 
echo &quot;$2&quot;  |  passwd  \u2010\u2010stdin  &quot;$1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u5907\u4EFD\u65E5\u5FD7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u6BCF\u5468 5 \u4F7F\u7528 tar \u547D\u4EE4\u5907\u4EFD/var/log \u4E0B\u7684\u6240\u6709\u65E5\u5FD7\u6587\u4EF6
# vim  /root/logbak.sh
# \u7F16\u5199\u5907\u4EFD\u811A\u672C,\u5907\u4EFD\u540E\u7684\u6587\u4EF6\u540D\u5305\u542B\u65E5\u671F\u6807\u7B7E,\u9632\u6B62\u540E\u9762\u7684\u5907\u4EFD\u5C06\u524D\u9762\u7684\u5907\u4EFD\u6570\u636E\u8986\u76D6
# \u6CE8\u610F date \u547D\u4EE4\u9700\u8981\u4F7F\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765,\u53CD\u5F15\u53F7\u5728\u952E\u76D8&lt;tab&gt;\u952E\u4E0A\u9762
tar  -czf  log-\`date +%Y%m%d\`.tar.gz  /var/log 
 
# crontab \u2010e  #\u7F16\u5199\u8BA1\u5212\u4EFB\u52A1,\u6267\u884C\u5907\u4EFD\u811A\u672C
00  03  *  *  5  /root/logbak.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u4E00\u952E\u90E8\u7F72 LNMP(RPM \u5305\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u4E00\u952E\u90E8\u7F72 LNMP(RPM \u5305\u7248\u672C)
# \u4F7F\u7528 yum \u5B89\u88C5\u90E8\u7F72 LNMP,\u9700\u8981\u63D0\u524D\u914D\u7F6E\u597D yum \u6E90,\u5426\u5219\u8BE5\u811A\u672C\u4F1A\u5931\u8D25
# \u672C\u811A\u672C\u4F7F\u7528\u4E8E centos7.2 \u6216 RHEL7.2
yum \u2010y install httpd
yum \u2010y install mariadb mariadb\u2010devel mariadb\u2010server
yum \u2010y install php  php\u2010mysql
 
systemctl start httpd mariadb
systemctl enable httpd mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u76D1\u63A7\u5185\u5B58\u548C\u78C1\u76D8\u5BB9\u91CF\uFF0C\u5C0F\u4E8E\u7ED9\u5B9A\u503C\u65F6\u62A5\u8B66</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5B9E\u65F6\u76D1\u63A7\u672C\u673A\u5185\u5B58\u548C\u786C\u76D8\u5269\u4F59\u7A7A\u95F4,\u5269\u4F59\u5185\u5B58\u5C0F\u4E8E500M\u3001\u6839\u5206\u533A\u5269\u4F59\u7A7A\u95F4\u5C0F\u4E8E1000M\u65F6,\u53D1\u9001\u62A5\u8B66\u90AE\u4EF6\u7ED9root\u7BA1\u7406\u5458
 
# \u63D0\u53D6\u6839\u5206\u533A\u5269\u4F59\u7A7A\u95F4
disk_size=$(df / | awk &#39;/\\//{print $4}&#39;)
 
# \u63D0\u53D6\u5185\u5B58\u5269\u4F59\u7A7A\u95F4
mem_size=$(free | awk &#39;/Mem/{print $4}&#39;)
while :
do
# \u6CE8\u610F\u5185\u5B58\u548C\u78C1\u76D8\u63D0\u53D6\u7684\u7A7A\u95F4\u5927\u5C0F\u90FD\u662F\u4EE5 Kb \u4E3A\u5355\u4F4D
if  [  $disk_size -le 512000 -a $mem_size -le 1024000  ]
then
    mail  \u2010s  &quot;Warning&quot;  root  &lt;&lt;EOF
  Insufficient resources,\u8D44\u6E90\u4E0D\u8DB3
EOF
fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u731C\u6570\u5B57\u6E38\u620F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u811A\u672C\u751F\u6210\u4E00\u4E2A 100 \u4EE5\u5185\u7684\u968F\u673A\u6570,\u63D0\u793A\u7528\u6237\u731C\u6570\u5B57,\u6839\u636E\u7528\u6237\u7684\u8F93\u5165,\u63D0\u793A\u7528\u6237\u731C\u5BF9\u4E86,
# \u731C\u5C0F\u4E86\u6216\u731C\u5927\u4E86,\u76F4\u81F3\u7528\u6237\u731C\u5BF9\u811A\u672C\u7ED3\u675F\u3002
 
# RANDOM \u4E3A\u7CFB\u7EDF\u81EA\u5E26\u7684\u7CFB\u7EDF\u53D8\u91CF,\u503C\u4E3A 0\u201032767\u7684\u968F\u673A\u6570
# \u4F7F\u7528\u53D6\u4F59\u7B97\u6CD5\u5C06\u968F\u673A\u6570\u53D8\u4E3A 1\u2010100 \u7684\u968F\u673A\u6570
num=$[RANDOM%100+1]
echo &quot;$num&quot;
 
# \u4F7F\u7528 read \u63D0\u793A\u7528\u6237\u731C\u6570\u5B57
# \u4F7F\u7528 if \u5224\u65AD\u7528\u6237\u731C\u6570\u5B57\u7684\u5927\u5C0F\u5173\u7CFB:\u2010eq(\u7B49\u4E8E),\u2010ne(\u4E0D\u7B49\u4E8E),\u2010gt(\u5927\u4E8E),\u2010ge(\u5927\u4E8E\u7B49\u4E8E),
# \u2010lt(\u5C0F\u4E8E),\u2010le(\u5C0F\u4E8E\u7B49\u4E8E)
while  :
do
  read -p &quot;\u8BA1\u7B97\u673A\u751F\u6210\u4E86\u4E00\u4E2A 1\u2010100 \u7684\u968F\u673A\u6570,\u4F60\u731C: &quot; cai
    if [ $cai -eq $num ]
    then
         echo &quot;\u606D\u559C,\u731C\u5BF9\u4E86&quot;
         exit
      elif [ $cai -gt $num ]
      then
             echo &quot;Oops,\u731C\u5927\u4E86&quot;
        else
             echo &quot;Oops,\u731C\u5C0F\u4E86&quot;
   fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u68C0\u6D4B\u672C\u673A\u5F53\u524D\u7528\u6237\u662F\u5426\u4E3A\u8D85\u7EA7\u7BA1\u7406\u5458,\u5982\u679C\u662F\u7BA1\u7406\u5458,\u5219\u4F7F\u7528 yum \u5B89\u88C5 vsftpd,\u5982\u679C\u4E0D\u662F,\u5219\u63D0\u793A\u60A8\u975E\u7BA1\u7406\u5458(\u4F7F\u7528\u5B57\u4E32\u5BF9\u6BD4\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u68C0\u6D4B\u672C\u673A\u5F53\u524D\u7528\u6237\u662F\u5426\u4E3A\u8D85\u7EA7\u7BA1\u7406\u5458,\u5982\u679C\u662F\u7BA1\u7406\u5458,\u5219\u4F7F\u7528 yum \u5B89\u88C5 vsftpd,\u5982\u679C\u4E0D
# \u662F,\u5219\u63D0\u793A\u60A8\u975E\u7BA1\u7406\u5458(\u4F7F\u7528\u5B57\u4E32\u5BF9\u6BD4\u7248\u672C) 
if [ $USER == &quot;root&quot; ]
then
  yum \u2010y install vsftpd
else
    echo &quot;\u60A8\u4E0D\u662F\u7BA1\u7406\u5458,\u6CA1\u6709\u6743\u9650\u5B89\u88C5\u8F6F\u4EF6&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8\u3001\u68C0\u6D4B\u672C\u673A\u5F53\u524D\u7528\u6237\u662F\u5426\u4E3A\u8D85\u7EA7\u7BA1\u7406\u5458,\u5982\u679C\u662F\u7BA1\u7406\u5458,\u5219\u4F7F\u7528 yum \u5B89\u88C5 vsftpd,\u5982\u679C\u4E0D\u662F,\u5219\u63D0\u793A\u60A8\u975E\u7BA1\u7406\u5458(\u4F7F\u7528 UID \u6570\u5B57\u5BF9\u6BD4\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u68C0\u6D4B\u672C\u673A\u5F53\u524D\u7528\u6237\u662F\u5426\u4E3A\u8D85\u7EA7\u7BA1\u7406\u5458,\u5982\u679C\u662F\u7BA1\u7406\u5458,\u5219\u4F7F\u7528 yum \u5B89\u88C5 vsftpd,\u5982\u679C\u4E0D
# \u662F,\u5219\u63D0\u793A\u60A8\u975E\u7BA1\u7406\u5458(\u4F7F\u7528 UID \u6570\u5B57\u5BF9\u6BD4\u7248\u672C)
if [ $UID -eq 0 ];then
    yum \u2010y install vsftpd
else
    echo &quot;\u60A8\u4E0D\u662F\u7BA1\u7406\u5458,\u6CA1\u6709\u6743\u9650\u5B89\u88C5\u8F6F\u4EF6&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9\u3001\u7F16\u5199\u811A\u672C:\u63D0\u793A\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801,\u811A\u672C\u81EA\u52A8\u521B\u5EFA\u76F8\u5E94\u7684\u8D26\u6237\u53CA\u914D\u7F6E\u5BC6\u7801\u3002\u5982\u679C\u7528\u6237\u4E0D\u8F93\u5165\u8D26\u6237\u540D,\u5219\u63D0\u793A\u5FC5\u987B\u8F93\u5165\u8D26\u6237\u540D\u5E76\u9000\u51FA\u811A\u672C;\u5982\u679C\u7528\u6237\u4E0D\u8F93\u5165\u5BC6\u7801,\u5219\u7EDF\u4E00\u4F7F\u7528\u9ED8\u8BA4\u7684 123456 \u4F5C\u4E3A\u9ED8\u8BA4\u5BC6\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C:\u63D0\u793A\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801,\u811A\u672C\u81EA\u52A8\u521B\u5EFA\u76F8\u5E94\u7684\u8D26\u6237\u53CA\u914D\u7F6E\u5BC6\u7801\u3002\u5982\u679C\u7528\u6237
# \u4E0D\u8F93\u5165\u8D26\u6237\u540D,\u5219\u63D0\u793A\u5FC5\u987B\u8F93\u5165\u8D26\u6237\u540D\u5E76\u9000\u51FA\u811A\u672C;\u5982\u679C\u7528\u6237\u4E0D\u8F93\u5165\u5BC6\u7801,\u5219\u7EDF\u4E00\u4F7F\u7528\u9ED8
# \u8BA4\u7684 123456 \u4F5C\u4E3A\u9ED8\u8BA4\u5BC6\u7801\u3002
 
read -p &quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D: &quot; user
#\u4F7F\u7528\u2010z \u53EF\u4EE5\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u662F\u5426\u4E3A\u7A7A,\u5982\u679C\u4E3A\u7A7A,\u63D0\u793A\u7528\u6237\u5FC5\u987B\u8F93\u5165\u8D26\u6237\u540D,\u5E76\u9000\u51FA\u811A\u672C,\u9000\u51FA\u7801\u4E3A 2
#\u6CA1\u6709\u8F93\u5165\u7528\u6237\u540D\u811A\u672C\u9000\u51FA\u540E,\u4F7F\u7528$?\u67E5\u770B\u7684\u8FD4\u56DE\u7801\u4E3A 2
if [ -z $user ];then
     echo &quot;\u60A8\u4E0D\u9700\u8F93\u5165\u8D26\u6237\u540D&quot;
   exit 2
fi
#\u4F7F\u7528 stty \u2010echo \u5173\u95ED shell \u7684\u56DE\u663E\u529F\u80FD
#\u4F7F\u7528 stty  echo \u6253\u5F00 shell \u7684\u56DE\u663E\u529F\u80FD
stty -echo
read -p &quot;\u8BF7\u8F93\u5165\u5BC6\u7801: &quot; pass
stty echo
pass=\${pass:\u2010123456}
useradd &quot;$user&quot;
echo &quot;$pass&quot; | passwd \u2010\u2010stdin &quot;$user&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10\u3001\u8F93\u5165\u4E09\u4E2A\u6570\u5E76\u8FDB\u884C\u5347\u5E8F\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F9D\u6B21\u63D0\u793A\u7528\u6237\u8F93\u5165 3 \u4E2A\u6574\u6570,\u811A\u672C\u6839\u636E\u6570\u5B57\u5927\u5C0F\u4F9D\u6B21\u6392\u5E8F\u8F93\u51FA 3 \u4E2A\u6570\u5B57
read -p &quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570:&quot; num1
read -p &quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570:&quot; num2
read -p &quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570:&quot; num3
# \u4E0D\u7BA1\u8C01\u5927\u8C01\u5C0F,\u6700\u540E\u90FD\u6253\u5370 echo &quot;$num1,$num2,$num3&quot;
# num1 \u4E2D\u6C38\u8FDC\u5B58\u6700\u5C0F\u7684\u503C,num2 \u4E2D\u6C38\u8FDC\u5B58\u4E2D\u95F4\u503C,num3 \u6C38\u8FDC\u5B58\u6700\u5927\u503C
# \u5982\u679C\u8F93\u5165\u7684\u4E0D\u662F\u8FD9\u6837\u7684\u987A\u5E8F,\u5219\u6539\u53D8\u6570\u7684\u5B58\u50A8\u987A\u5E8F,\u5982:\u53EF\u4EE5\u5C06 num1 \u548C num2 \u7684\u503C\u5BF9\u8C03
tmp=0
# \u5982\u679C num1 \u5927\u4E8E num2,\u5C31\u628A num1 \u548C\u548C num2 \u7684\u503C\u5BF9\u8C03,\u786E\u4FDD num1 \u53D8\u91CF\u4E2D\u5B58\u7684\u662F\u6700\u5C0F\u503C
if [ $num1 -gt $num2 ];then   
  tmp=$num1
  num1=$num2
  num2=$tmp
fi
# \u5982\u679C num1 \u5927\u4E8E num3,\u5C31\u628A num1 \u548C num3 \u5BF9\u8C03,\u786E\u4FDD num1 \u53D8\u91CF\u4E2D\u5B58\u7684\u662F\u6700\u5C0F\u503C
if [ $num1 -gt $num3 ];then   
    tmp=$num1
    num1=$num3
    num3=$tmp
fi
# \u5982\u679C num2 \u5927\u4E8E num3,\u5C31\u628A num2 \u548C num3 \u5BF9\u6807,\u786E\u4FDD num2 \u53D8\u91CF\u4E2D\u5B58\u7684\u662F\u5C0F\u4E00\u70B9\u7684\u503C
if [ $num2 -gt $num3 ];then
    tmp=$num2
    num2=$num3
    num3=$tmp
fi
echo &quot;\u6392\u5E8F\u540E\u6570\u636E(\u4ECE\u5C0F\u5230\u5927)\u4E3A:$num1,$num2,$num3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11\u3001\u77F3\u5934\u3001\u526A\u5200\u3001\u5E03\u6E38\u620F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C,\u5B9E\u73B0\u4EBA\u673A&lt;\u77F3\u5934,\u526A\u5200,\u5E03&gt;\u6E38\u620F
game=(\u77F3\u5934 \u526A\u5200 \u5E03)
num=$[RANDOM%3]
computer=\${game[$num]}
# \u901A\u8FC7\u968F\u673A\u6570\u83B7\u53D6\u8BA1\u7B97\u673A\u7684\u51FA\u62F3
# \u51FA\u62F3\u7684\u53EF\u80FD\u6027\u4FDD\u5B58\u5728\u4E00\u4E2A\u6570\u7EC4\u4E2D,game[0],game[1],game[2]\u5206\u522B\u662F 3 \u4E2D\u4E0D\u540C\u7684\u53EF\u80FD
 
echo &quot;\u8BF7\u6839\u636E\u4E0B\u5217\u63D0\u793A\u9009\u62E9\u60A8\u7684\u51FA\u62F3\u624B\u52BF&quot;
echo &quot;1.\u77F3\u5934&quot;
echo &quot;2.\u526A\u5200&quot;
echo &quot;3.\u5E03&quot;
 
read -p &quot;\u8BF7\u9009\u62E9 1\u20103:&quot; person
case  $person  in
1)
  if [ $num -eq 0 ]
  then
    echo &quot;\u5E73\u5C40&quot;
    elif [ $num -eq 1 ]
    then
      echo &quot;\u4F60\u8D62&quot;
  else
    echo &quot;\u8BA1\u7B97\u673A\u8D62&quot;
  fi;;
2)   
  if [ $num -eq 0 ]
  then
    echo &quot;\u8BA1\u7B97\u673A\u8D62&quot;
    elif [ $num -eq 1 ]
    then
      echo &quot;\u5E73\u5C40&quot;
  else
    echo &quot;\u4F60\u8D62&quot;
  fi;;
3)
  if [ $num -eq 0 ]
  then
    echo &quot;\u4F60\u8D62&quot;
    elif [ $num -eq 1 ]
    then
      echo &quot;\u8BA1\u7B97\u673A\u8D62&quot;
  else
    echo &quot;\u5E73\u5C40&quot;
  fi;;
*)
  echo &quot;\u5FC5\u987B\u8F93\u5165 1\u20103 \u7684\u6570\u5B57&quot;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12\u3001\u7F16\u5199\u811A\u672C\u6D4B\u8BD5 192.168.4.0/24 \u6574\u4E2A\u7F51\u6BB5\u4E2D\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5F00\u673A\u72B6\u6001,\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5173\u673A\u72B6\u6001(for \u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C\u6D4B\u8BD5 192.168.4.0/24 \u6574\u4E2A\u7F51\u6BB5\u4E2D\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5F00\u673A\u72B6\u6001,\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5173\u673A
# \u72B6\u6001(for \u7248\u672C)
for i in {1..254}
do
  # \u6BCF\u96940.3\u79D2ping\u4E00\u6B21\uFF0C\u4E00\u5171ping2\u6B21\uFF0C\u5E76\u4EE51\u6BEB\u79D2\u4E3A\u5355\u4F4D\u8BBE\u7F6Eping\u7684\u8D85\u65F6\u65F6\u95F4
     ping \u2010c 2 \u2010i 0.3 \u2010W 1 192.168.4.$i  &amp;&gt;/dev/null
    if  [ $? -eq 0 ];then
         echo &quot;192.168.4.$i is up&quot;
     else
         echo  &quot;192.168.4.$i is down&quot;
     fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>13\u3001\u7F16\u5199\u811A\u672C\u6D4B\u8BD5 192.168.4.0/24 \u6574\u4E2A\u7F51\u6BB5\u4E2D\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5F00\u673A\u72B6\u6001,\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5173\u673A\u72B6\u6001(while \u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C\u6D4B\u8BD5 192.168.4.0/24 \u6574\u4E2A\u7F51\u6BB5\u4E2D\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5F00\u673A\u72B6\u6001,\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5173\u673A
# \u72B6\u6001(while \u7248\u672C) 
i=1
while [ $i -le 254 ]
do
     ping \u2010c 2 \u2010i 0.3 \u2010W 1 192.168.4.$i  &amp;&gt;/dev/null
     if  [ $? -eq 0 ];then
         echo &quot;192.168.4.$i is up&quot;
    else
         echo  &quot;192.168.4.$i is down&quot;
     fi
     let i++
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14\u3001\u7F16\u5199\u811A\u672C\u6D4B\u8BD5 192.168.4.0/24 \u6574\u4E2A\u7F51\u6BB5\u4E2D\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5F00\u673A\u72B6\u6001,\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5173\u673A\u72B6\u6001(\u591A\u8FDB\u7A0B\u7248)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C\u6D4B\u8BD5 192.168.4.0/24 \u6574\u4E2A\u7F51\u6BB5\u4E2D\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5F00\u673A\u72B6\u6001,\u54EA\u4E9B\u4E3B\u673A\u5904\u4E8E\u5173\u673A
# \u72B6\u6001(\u591A\u8FDB\u7A0B\u7248)
 
#\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570,ping \u67D0\u4E00\u53F0\u4E3B\u673A,\u5E76\u68C0\u6D4B\u4E3B\u673A\u7684\u5B58\u6D3B\u72B6\u6001
myping(){
ping \u2010c 2 \u2010i 0.3 \u2010W 1 $1  &amp;&gt;/dev/null
if  [ $? -eq 0 ];then
  echo &quot;$1 is up&quot;
else
  echo &quot;$1 is down&quot;
fi
}
for i in {1..254}
do
     myping 192.168.4.$i &amp;
done
# \u4F7F\u7528&amp;\u7B26\u53F7,\u5C06\u6267\u884C\u7684\u51FD\u6570\u653E\u5165\u540E\u53F0\u6267\u884C
# \u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u4E0D\u9700\u8981\u7B49\u5F85ping\u7B2C\u4E00\u53F0\u4E3B\u673A\u7684\u56DE\u5E94,\u5C31\u53EF\u4EE5\u7EE7\u7EED\u5E76\u53D1ping\u7B2C\u4E8C\u53F0\u4E3B\u673A,\u4F9D\u6B21\u7C7B\u63A8\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>15\u3001\u7F16\u5199\u811A\u672C,\u663E\u793A\u8FDB\u5EA6\u6761</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C,\u663E\u793A\u8FDB\u5EA6\u6761
jindu(){
while :
do
     echo -n &#39;#&#39;
     sleep 0.2
done
}
jindu &amp;
cp -a $1 $2
killall $0
echo &quot;\u62F7\u8D1D\u5B8C\u6210&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>16\u3001\u8FDB\u5EA6\u6761,\u52A8\u6001\u65F6\u9488\u7248\u672C\uFF1B\u5B9A\u4E49\u4E00\u4E2A\u663E\u793A\u8FDB\u5EA6\u7684\u51FD\u6570,\u5C4F\u5E55\u5FEB\u901F\u663E\u793A| / \u2010 \\</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u8FDB\u5EA6\u6761,\u52A8\u6001\u65F6\u9488\u7248\u672C
# \u5B9A\u4E49\u4E00\u4E2A\u663E\u793A\u8FDB\u5EA6\u7684\u51FD\u6570,\u5C4F\u5E55\u5FEB\u901F\u663E\u793A|  / \u2010 \\
rotate_line(){
INTERVAL=0.5  #\u8BBE\u7F6E\u95F4\u9694\u65F6\u95F4
COUNT=&quot;0&quot;     #\u8BBE\u7F6E4\u4E2A\u5F62\u72B6\u7684\u7F16\u53F7,\u9ED8\u8BA4\u7F16\u53F7\u4E3A 0(\u4E0D\u4EE3\u8868\u4EFB\u4F55\u56FE\u50CF)
while :
do
  COUNT=\`expr $COUNT + 1\` #\u6267\u884C\u5FAA\u73AF,COUNT \u6BCF\u6B21\u5FAA\u73AF\u52A0 1,(\u5206\u522B\u4EE3\u88684\u79CD\u4E0D\u540C\u7684\u5F62\u72B6)
  case $COUNT in          #\u5224\u65AD COUNT \u7684\u503C,\u503C\u4E0D\u4E00\u6837\u663E\u793A\u7684\u5F62\u72B6\u5C31\u4E0D\u4E00\u6837
  &quot;1&quot;)                    #\u503C\u4E3A 1 \u663E\u793A\u2010
          echo -e &#39;\u2010&#39;&quot;\\b\\c&quot;
          sleep $INTERVAL
          ;;
    &quot;2&quot;)                  #\u503C\u4E3A 2 \u663E\u793A\\\\,\u7B2C\u4E00\u4E2A\\\u662F\u8F6C\u4E49
          echo -e &#39;\\\\&#39;&quot;\\b\\c&quot;
          sleep $INTERVAL
          ;;
    &quot;3&quot;)                  #\u503C\u4E3A 3 \u663E\u793A|
          echo -e &quot;|\\b\\c&quot;
          sleep $INTERVAL
          ;;
   &quot;4&quot;)                   #\u503C\u4E3A 4 \u663E\u793A/
          echo -e &quot;/\\b\\c&quot;
          sleep $INTERVAL
          ;;
    *)                    #\u503C\u4E3A\u5176\u4ED6\u65F6,\u5C06 COUNT \u91CD\u7F6E\u4E3A 0
          COUNT=&quot;0&quot;;;
    esac
done
}
rotate_line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>17\u30019*9 \u4E58\u6CD5\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# 9*9 \u4E58\u6CD5\u8868(\u7F16\u5199 shell \u811A\u672C,\u6253\u5370 9*9 \u4E58\u6CD5\u8868) 
for i in \`seq 9\`
do
    for j in \`seq $i\`
     do
         echo -n &quot;$j*$i=$[i*j]  &quot;
     done
    echo
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>18\u3001\u4F7F\u7528\u6B7B\u5FAA\u73AF\u5B9E\u65F6\u663E\u793A eth0 \u7F51\u5361\u53D1\u9001\u7684\u6570\u636E\u5305\u6D41\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528\u6B7B\u5FAA\u73AF\u5B9E\u65F6\u663E\u793A eth0 \u7F51\u5361\u53D1\u9001\u7684\u6570\u636E\u5305\u6D41\u91CF 
 
while :
do
   echo  &#39;\u672C\u5730\u7F51\u5361 eth0 \u6D41\u91CF\u4FE1\u606F\u5982\u4E0B: &#39;
    ifconfig eth0 | grep &quot;RX pack&quot; | awk &#39;{print $5}&#39;
    ifconfig eth0 | grep &quot;TX pack&quot; | awk &#39;{print $5}&#39;
     sleep 1
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>19\u3001\u4F7F\u7528 user.txt \u6587\u4EF6\u4E2D\u7684\u4EBA\u5458\u540D\u5355,\u5728\u8BA1\u7B97\u673A\u4E2D\u81EA\u52A8\u521B\u5EFA\u5BF9\u5E94\u7684\u8D26\u6237\u5E76\u914D\u7F6E\u521D\u59CB\u5BC6\u7801\u672C\u811A\u672C\u6267\u884C,\u9700\u8981\u63D0\u524D\u51C6\u5907\u4E00\u4E2A user.txt \u6587\u4EF6,\u8BE5\u6587\u4EF6\u4E2D\u5305\u542B\u6709\u82E5\u5E72\u7528\u6237\u540D\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528 user.txt \u6587\u4EF6\u4E2D\u7684\u4EBA\u5458\u540D\u5355,\u5728\u8BA1\u7B97\u673A\u4E2D\u81EA\u52A8\u521B\u5EFA\u5BF9\u5E94\u7684\u8D26\u6237\u5E76\u914D\u7F6E\u521D\u59CB\u5BC6\u7801
# \u672C\u811A\u672C\u6267\u884C,\u9700\u8981\u63D0\u524D\u51C6\u5907\u4E00\u4E2A user.txt \u6587\u4EF6,\u8BE5\u6587\u4EF6\u4E2D\u5305\u542B\u6709\u82E5\u5E72\u7528\u6237\u540D\u4FE1\u606F
for i in \`cat user.txt\`
do
     useradd  $i
     echo &quot;123456&quot; | passwd \u2010\u2010stdin $i
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20\u3001\u7F16\u5199\u6279\u91CF\u4FEE\u6539\u6269\u5C55\u540D\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u6279\u91CF\u4FEE\u6539\u6269\u5C55\u540D\u811A\u672C,\u5982\u6279\u91CF\u5C06 txt \u6587\u4EF6\u4FEE\u6539\u4E3A doc \u6587\u4EF6 
# \u6267\u884C\u811A\u672C\u65F6,\u9700\u8981\u7ED9\u811A\u672C\u6DFB\u52A0\u4F4D\u7F6E\u53C2\u6570
# \u811A\u672C\u540D  txt  doc(\u53EF\u4EE5\u5C06 txt \u7684\u6269\u5C55\u540D\u4FEE\u6539\u4E3A doc)
# \u811A\u672C\u540D  doc  jpg(\u53EF\u4EE5\u5C06 doc \u7684\u6269\u5C55\u540D\u4FEE\u6539\u4E3A jpg)
 
for i in \`ls *.$1\`
do
     mv $i \${i%.*}.$2
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>21\u3001\u4F7F\u7528 expect \u5DE5\u5177\u81EA\u52A8\u4EA4\u4E92\u5BC6\u7801\u8FDC\u7A0B\u5176\u4ED6\u4E3B\u673A\u5B89\u88C5 httpd \u8F6F\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528 expect \u5DE5\u5177\u81EA\u52A8\u4EA4\u4E92\u5BC6\u7801\u8FDC\u7A0B\u5176\u4ED6\u4E3B\u673A\u5B89\u88C5 httpd \u8F6F\u4EF6 
 
# \u5220\u9664~/.ssh/known_hosts \u540E,ssh \u8FDC\u7A0B\u4EFB\u4F55\u4E3B\u673A\u90FD\u4F1A\u8BE2\u95EE\u662F\u5426\u786E\u8BA4\u8981\u8FDE\u63A5\u8BE5\u4E3B\u673A
rm  \u2010rf  ~/.ssh/known_hosts
expect &lt;&lt;EOF
spawn ssh 192.168.4.254
expect &quot;yes/no&quot; {send &quot;yes\\r&quot;}
# \u6839\u636E\u81EA\u5DF1\u7684\u5B9E\u9645\u60C5\u51B5\u5C06\u5BC6\u7801\u4FEE\u6539\u4E3A\u771F\u5B9E\u7684\u5BC6\u7801\u5B57\u4E32
expect &quot;password&quot; {send  &quot;\u5BC6\u7801\\r&quot;}
expect &quot;#&quot; {send  &quot;yum \u2010y install httpd\\r&quot;}
expect &quot;#&quot; {send  &quot;exit\\r&quot;}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>22\u3001\u4E00\u952E\u90E8\u7F72 LNMP(\u6E90\u7801\u5B89\u88C5\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4E00\u952E\u90E8\u7F72 LNMP(\u6E90\u7801\u5B89\u88C5\u7248\u672C)
menu()
{
clear
echo &quot;  ##############\u2010\u2010\u2010\u2010Menu\u2010\u2010\u2010\u2010##############&quot;
echo &quot;# 1. Install Nginx&quot;
echo &quot;# 2. Install MySQL&quot;
echo &quot;# 3. Install PHP&quot;
echo &quot;# 4. Exit Program&quot;
echo &quot;  ########################################&quot;
}
 
choice()
{
  read -p &quot;Please choice a menu[1\u20109]:&quot; select
}
 
install_nginx()
{
  id nginx &amp;&gt;/dev/null
  if [ $? -ne 0 ];then
    useradd -s /sbin/nologin nginx
  fi
  if [ -f nginx\u20101.8.0.tar.gz ];then
    tar -xf nginx\u20101.8.0.tar.gz
    cd nginx\u20101.8.0
    yum -y install  gcc pcre\u2010devel openssl\u2010devel zlib\u2010devel make
    ./configure \u2010\u2010prefix=/usr/local/nginx \u2010\u2010with\u2010http_ssl_module
    make
    make install
    ln -s /usr/local/nginx/sbin/nginx /usr/sbin/
    cd ..
  else
    echo &quot;\u6CA1\u6709 Nginx \u6E90\u7801\u5305&quot;
  fi
}
 
install_mysql()
{
  yum -y install gcc gcc\u2010c++ cmake ncurses\u2010devel perl
  id mysql &amp;&gt;/dev/null
  if [ $? -ne 0 ];then
    useradd -s /sbin/nologin mysql
  fi
  if [ -f mysql\u20105.6.25.tar.gz ];then
    tar -xf mysql\u20105.6.25.tar.gz
    cd mysql\u20105.6.25
    cmake .
    make
    make install
    /usr/local/mysql/scripts/mysql_install_db \u2010\u2010user=mysql \u2010\u2010datadir=/usr/local/mysql/data/
\u2010\u2010basedir=/usr/local/mysql/
    chown -R root.mysql /usr/local/mysql
    chown -R mysql /usr/local/mysql/data
    /bin/cp -f /usr/local/mysql/support\u2010files/mysql.server /etc/init.d/mysqld
    chmod +x /etc/init.d/mysqld
    /bin/cp -f /usr/local/mysql/support\u2010files/my\u2010default.cnf /etc/my.cnf
    echo &quot;/usr/local/mysql/lib/&quot; &gt;&gt; /etc/ld.so.conf
    ldconfig
    echo &#39;PATH=\\$PATH:/usr/local/mysql/bin/&#39; &gt;&gt; /etc/profile
    export PATH
  else
    echo  &quot;\u6CA1\u6709 mysql \u6E90\u7801\u5305&quot;
    exit
  fi
}
 
install_php()
{
#\u5B89\u88C5 php \u65F6\u6CA1\u6709\u6307\u5B9A\u542F\u52A8\u54EA\u4E9B\u6A21\u5757\u529F\u80FD,\u5982\u679C\u7684\u7528\u6237\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u81EA\u884C\u6DFB\u52A0\u989D\u5916\u529F\u80FD\u5982\u2010\u2010with\u2010gd \u7B49
yum  -y  install  gcc  libxml2\u2010devel
if [ -f mhash\u20100.9.9.9.tar.gz ];then
  tar -xf mhash\u20100.9.9.9.tar.gz
  cd mhash\u20100.9.9.9
  ./configure
  make
  make install
  cd ..
if [ ! \u2010f /usr/lib/libmhash.so ];then
  ln -s /usr/local/lib/libmhash.so /usr/lib/
fi
ldconfig
else
  echo &quot;\u6CA1\u6709 mhash \u6E90\u7801\u5305\u6587\u4EF6&quot;
  exit
fi
if [ -f libmcrypt\u20102.5.8.tar.gz ];then
  tar -xf libmcrypt\u20102.5.8.tar.gz
  cd libmcrypt\u20102.5.8
  ./configure
  make
  make install
  cd ..
  if [ ! -f /usr/lib/libmcrypt.so ];then  
    ln -s /usr/local/lib/libmcrypt.so /usr/lib/
  fi
  ldconfig
else
  echo &quot;\u6CA1\u6709 libmcrypt \u6E90\u7801\u5305\u6587\u4EF6&quot;
  exit
fi
if [ -f php\u20105.4.24.tar.gz ];then
  tar -xf php\u20105.4.24.tar.gz
  cd php\u20105.4.24
  ./configure  \u2010\u2010prefix=/usr/local/php5  \u2010\u2010with\u2010mysql=/usr/local/mysql  \u2010\u2010enable\u2010fpm    \u2010\u2010
  enable\u2010mbstring  \u2010\u2010with\u2010mcrypt  \u2010\u2010with\u2010mhash  \u2010\u2010with\u2010config\u2010file\u2010path=/usr/local/php5/etc  \u2010\u2010with\u2010
  mysqli=/usr/local/mysql/bin/mysql_config
  make &amp;&amp; make install
  /bin/cp -f php.ini\u2010production /usr/local/php5/etc/php.ini
  /bin/cp -f /usr/local/php5/etc/php\u2010fpm.conf.default /usr/local/php5/etc/php\u2010fpm.conf
  cd ..
else
  echo &quot;\u6CA1\u6709 php \u6E90\u7801\u5305\u6587\u4EF6&quot;
  exit
fi 
}
 
while :
do
  menu
  choice
  case $select in
  1)
    install_nginx
    ;;
  2)
    install_mysql
    ;;
  3)
    install_php
    ;;
  4)
    exit
    ;;
  *)
    echo Sorry!
  esac
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>23\u3001\u7F16\u5199\u811A\u672C\u5FEB\u901F\u514B\u9686 KVM \u865A\u62DF\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u811A\u672C\u5FEB\u901F\u514B\u9686 KVM \u865A\u62DF\u673A
 
# \u672C\u811A\u672C\u9488\u5BF9 RHEL7.2 \u6216 Centos7.2
# \u672C\u811A\u672C\u9700\u8981\u63D0\u524D\u51C6\u5907\u4E00\u4E2A qcow2 \u683C\u5F0F\u7684\u865A\u62DF\u673A\u6A21\u677F,
# \u540D\u79F0\u4E3A/var/lib/libvirt/images  /.rh7_template \u7684\u865A\u62DF\u673A\u6A21\u677F
# \u8BE5\u811A\u672C\u4F7F\u7528 qemu\u2010img \u547D\u4EE4\u5FEB\u901F\u521B\u5EFA\u5FEB\u7167\u865A\u62DF\u673A
# \u811A\u672C\u4F7F\u7528 sed \u4FEE\u6539\u6A21\u677F\u865A\u62DF\u673A\u7684\u914D\u7F6E\u6587\u4EF6,\u5C06\u865A\u62DF\u673A\u540D\u79F0\u3001UUID\u3001\u78C1\u76D8\u6587\u4EF6\u540D\u3001MAC \u5730\u5740
# exit code:  
#    65 \u2010&gt; user input nothing
#    66 \u2010&gt; user input is not a number
#    67 \u2010&gt; user input out of range
#    68 \u2010&gt; vm disk image exists
 
IMG_DIR=/var/lib/libvirt/images
BASEVM=rh7_template
read -p &quot;Enter VM number: &quot; VMNUM
if [ $VMNUM -le 9 ];then
VMNUM=0$VMNUM
fi
 
if [ -z &quot;\${VMNUM}&quot; ]; then
    echo &quot;You must input a number.&quot;
    exit 65
elif [[  \${VMNUM} =~ [a\u2010z]  ]; then
    echo &quot;You must input a number.&quot;
    exit 66
elif [ \${VMNUM} -lt 1 -o \${VMNUM} -gt 99 ]; then
    echo &quot;Input out of range&quot;
    exit 67
fi
 
NEWVM=rh7_node\${VMNUM}
 
if [ -e $IMG_DIR/\${NEWVM}.img ]; then
    echo &quot;File exists.&quot;
    exit 68
fi
 
echo -en &quot;Creating Virtual Machine disk image......\\t&quot;
qemu\u2010img create -f qcow2 \u2010b $IMG_DIR/.\${BASEVM}.img $IMG_DIR/\${NEWVM}.img &amp;&gt; /dev/null
 
echo -e &quot;\\e[32;1m[OK]\\e[0m&quot;
 
#virsh dumpxml \${BASEVM} &gt; /tmp/myvm.xml
cat /var/lib/libvirt/images/.rhel7.xml &gt; /tmp/myvm.xml
sed -i &quot;/&lt;name&gt;\${BASEVM}/s/\${BASEVM}/\${NEWVM}/&quot; /tmp/myvm.xml
sed -i &quot;/uuid/s/&lt;uuid&gt;.*&lt;\\/uuid&gt;/&lt;uuid&gt;$(uuidgen)&lt;\\/uuid&gt;/&quot; /tmp/myvm.xml
sed -i &quot;/\${BASEVM}\\.img/s/\${BASEVM}/\${NEWVM}/&quot; /tmp/myvm.xml
 
# \u4FEE\u6539 MAC \u5730\u5740,\u672C\u4F8B\u4F7F\u7528\u7684\u662F\u5E38\u91CF,\u6BCF\u4F4D\u4F7F\u7528\u8BE5\u811A\u672C\u7684\u7528\u6237\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u8FD9\u4E9B\u503C 
# \u6700\u597D\u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528\u4FBF\u5229,\u8FD9\u6837\u66F4\u9002\u5408\u4E8E\u6279\u91CF\u64CD\u4F5C,\u53EF\u4EE5\u514B\u9686\u66F4\u591A\u865A\u62DF\u673A 
sed -i &quot;/mac /s/a1/0c/&quot; /tmp/myvm.xml
 
echo -en &quot;Defining new virtual machine......\\t\\t&quot;
virsh define /tmp/myvm.xml &amp;&gt; /dev/null
echo -e &quot;\\e[32;1m[OK]\\e[0m&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>24\u3001\u70B9\u540D\u5668\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199\u4E00\u4E2A\u70B9\u540D\u5668\u811A\u672C
 
# \u8BE5\u811A\u672C,\u9700\u8981\u63D0\u524D\u51C6\u5907\u4E00\u4E2A user.txt \u6587\u4EF6
# \u8BE5\u6587\u4EF6\u4E2D\u9700\u8981\u5305\u542B\u6240\u6709\u59D3\u540D\u7684\u4FE1\u606F,\u4E00\u884C\u4E00\u4E2A\u59D3\u540D,\u811A\u672C\u6BCF\u6B21\u968F\u673A\u663E\u793A\u4E00\u4E2A\u59D3\u540D
while :
do
#\u7EDF\u8BA1 user \u6587\u4EF6\u4E2D\u6709\u591A\u5C11\u7528\u6237
line=\`cat user.txt |wc \u2010l\`
num=$[RANDOM%line+1]
sed -n &quot;\${num}p&quot;  user.txt
sleep 0.2
clear
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>25\u3001\u67E5\u770B\u6709\u591A\u5C11\u8FDC\u7A0B\u7684 IP \u5728\u8FDE\u63A5\u672C\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u67E5\u770B\u6709\u591A\u5C11\u8FDC\u7A0B\u7684 IP \u5728\u8FDE\u63A5\u672C\u673A(\u4E0D\u7BA1\u662F\u901A\u8FC7 ssh \u8FD8\u662F web \u8FD8\u662F ftp \u90FD\u7EDF\u8BA1) 
 
# \u4F7F\u7528 netstat \u2010atn \u53EF\u4EE5\u67E5\u770B\u672C\u673A\u6240\u6709\u8FDE\u63A5\u7684\u72B6\u6001,\u2010a \u67E5\u770B\u6240\u6709,
# -t\u4EC5\u663E\u793A tcp \u8FDE\u63A5\u7684\u4FE1\u606F,\u2010n \u6570\u5B57\u683C\u5F0F\u663E\u793A
# Local Address(\u7B2C\u56DB\u5217\u662F\u672C\u673A\u7684 IP \u548C\u7AEF\u53E3\u4FE1\u606F)
# Foreign Address(\u7B2C\u4E94\u5217\u662F\u8FDC\u7A0B\u4E3B\u673A\u7684 IP \u548C\u7AEF\u53E3\u4FE1\u606F)
# \u4F7F\u7528 awk \u547D\u4EE4\u4EC5\u663E\u793A\u7B2C 5 \u5217\u6570\u636E,\u518D\u663E\u793A\u7B2C 1 \u5217 IP \u5730\u5740\u7684\u4FE1\u606F
# sort \u53EF\u4EE5\u6309\u6570\u5B57\u5927\u5C0F\u6392\u5E8F,\u6700\u540E\u4F7F\u7528 uniq \u5C06\u591A\u4F59\u91CD\u590D\u7684\u5220\u9664,\u5E76\u7EDF\u8BA1\u91CD\u590D\u7684\u6B21\u6570
netstat -atn  |  awk  &#39;{print $5}&#39;  | awk  &#39;{print $1}&#39; | sort -nr  |  uniq -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>26\u3001\u5BF9 100 \u4EE5\u5185\u7684\u6240\u6709\u6B63\u6574\u6570\u76F8\u52A0\u6C42\u548C(1+2+3+4...+100)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5BF9 100 \u4EE5\u5185\u7684\u6240\u6709\u6B63\u6574\u6570\u76F8\u52A0\u6C42\u548C(1+2+3+4...+100)
 
#seq 100 \u53EF\u4EE5\u5FEB\u901F\u81EA\u52A8\u751F\u6210 100 \u4E2A\u6574\u6570
sum=0
for i in \`seq 100\`
do
    sum=$[sum+i]
done
echo &quot;\u603B\u548C\u662F:$sum&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>27\u3001\u7EDF\u8BA1 13:30 \u5230 14:30 \u6240\u6709\u8BBF\u95EE apache \u670D\u52A1\u5668\u7684\u8BF7\u6C42\u6709\u591A\u5C11\u4E2A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1 13:30 \u5230 14:30 \u6240\u6709\u8BBF\u95EE apache \u670D\u52A1\u5668\u7684\u8BF7\u6C42\u6709\u591A\u5C11\u4E2A
 
# awk \u4F7F\u7528\u2010F \u9009\u9879\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9\u7684\u5206\u9694\u7B26\u662F/\u6216\u8005:
# \u6761\u4EF6\u5224\u65AD$7:$8 \u5927\u4E8E\u7B49\u4E8E 13:30,\u5E76\u4E14\u8981\u6C42,$7:$8 \u5C0F\u4E8E\u7B49\u4E8E 14:30
# \u6700\u540E\u4F7F\u7528 wc \u2010l \u7EDF\u8BA1\u8FD9\u6837\u7684\u6570\u636E\u6709\u591A\u5C11\u884C,\u5373\u591A\u5C11\u4E2A
awk -F &quot;[ /:]&quot; &#39;$7&quot;:&quot;$8&gt;=&quot;13:30&quot; &amp;&amp; $7&quot;:&quot;$8&lt;=&quot;14:30&quot;&#39; /var/log/httpd/access_log |wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>28\u3001\u7EDF\u8BA1 13:30 \u5230 14:30 \u6240\u6709\u8BBF\u95EE\u672C\u673A Aapche \u670D\u52A1\u5668\u7684\u8FDC\u7A0B IP \u5730\u5740\u662F\u4EC0\u4E48</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1 13:30 \u5230 14:30 \u6240\u6709\u8BBF\u95EE\u672C\u673A Aapche \u670D\u52A1\u5668\u7684\u8FDC\u7A0B IP \u5730\u5740\u662F\u4EC0\u4E48 
# awk \u4F7F\u7528\u2010F \u9009\u9879\u6307\u5B9A\u6587\u4EF6\u5185\u5BB9\u7684\u5206\u9694\u7B26\u662F/\u6216\u8005:
# \u6761\u4EF6\u5224\u65AD$7:$8 \u5927\u4E8E\u7B49\u4E8E 13:30,\u5E76\u4E14\u8981\u6C42,$7:$8 \u5C0F\u4E8E\u7B49\u4E8E 14:30
# \u65E5\u5FD7\u6587\u6863\u5185\u5BB9\u91CC\u9762,\u7B2C 1 \u5217\u662F\u8FDC\u7A0B\u4E3B\u673A\u7684 IP \u5730\u5740,\u4F7F\u7528 awk \u5355\u72EC\u663E\u793A\u7B2C 1 \u5217\u5373\u53EF
awk -F &quot;[ /:]&quot; &#39;$7&quot;:&quot;$8&gt;=&quot;13:30&quot; &amp;&amp; $7&quot;:&quot;$8&lt;=&quot;14:30&quot;{print $1}&#39; /var/log/httpd/access_log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>29\u3001\u6253\u5370\u56FD\u9645\u8C61\u68CB\u68CB\u76D8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6253\u5370\u56FD\u9645\u8C61\u68CB\u68CB\u76D8
# \u8BBE\u7F6E\u4E24\u4E2A\u53D8\u91CF,i \u548C j,\u4E00\u4E2A\u4EE3\u8868\u884C,\u4E00\u4E2A\u4EE3\u8868\u5217,\u56FD\u9645\u8C61\u68CB\u4E3A 8*8 \u68CB\u76D8
# i=1 \u662F\u4EE3\u8868\u51C6\u5907\u6253\u5370\u7B2C\u4E00\u884C\u68CB\u76D8,\u7B2C 1 \u884C\u68CB\u76D8\u6709\u7070\u8272\u548C\u84DD\u8272\u95F4\u9694\u8F93\u51FA,\u603B\u5171\u4E3A 8 \u5217
# i=1,j=1 \u4EE3\u8868\u7B2C 1 \u884C\u7684\u7B2C 1 \u5217;i=2,j=3 \u4EE3\u8868\u7B2C 2 \u884C\u7684\u7B2C 3 \u5217
# \u68CB\u76D8\u7684\u89C4\u5F8B\u662F i+j \u5982\u679C\u662F\u5076\u6570,\u5C31\u6253\u5370\u84DD\u8272\u8272\u5757,\u5982\u679C\u662F\u5947\u6570\u5C31\u6253\u5370\u7070\u8272\u8272\u5757
# \u4F7F\u7528 echo \u2010ne \u6253\u5370\u8272\u5757,\u5E76\u4E14\u6253\u5370\u5B8C\u6210\u8272\u5757\u540E\u4E0D\u81EA\u52A8\u6362\u884C,\u5728\u540C\u4E00\u884C\u7EE7\u7EED\u8F93\u51FA\u5176\u4ED6\u8272\u5757
for i in {1..8}
do
    for j in {1..8}
    do
      sum=$[i+j]
    if [  $[sum%2] -eq 0 ];then
       echo -ne &quot;\\033[46m  \\033[0m&quot;
    else
      echo -ne &quot;\\033[47m  \\033[0m&quot;
    fi
    done
    echo
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>30\u3001\u7EDF\u8BA1\u6BCF\u4E2A\u8FDC\u7A0B IP \u8BBF\u95EE\u4E86\u672C\u673A apache \u51E0\u6B21?</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1\u6BCF\u4E2A\u8FDC\u7A0B IP \u8BBF\u95EE\u4E86\u672C\u673A apache \u51E0\u6B21? 
awk  &#39;{ip[$1]++}END{for(i in ip){print ip[i],i}}&#39;  /var/log/httpd/access_log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>31\u3001\u7EDF\u8BA1\u5F53\u524D Linux \u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u767B\u5F55\u8BA1\u7B97\u673A\u7684\u8D26\u6237\u6709\u591A\u5C11\u4E2A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1\u5F53\u524D Linux \u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u767B\u5F55\u8BA1\u7B97\u673A\u7684\u8D26\u6237\u6709\u591A\u5C11\u4E2A
#\u65B9\u6CD5 1:
grep &quot;bash$&quot; /etc/passwd | wc -l
#\u65B9\u6CD5 2:
awk -f: &#39;/bash$/{x++}end{print x}&#39;  /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>32\u3001\u7EDF\u8BA1/var/log \u6709\u591A\u5C11\u4E2A\u6587\u4EF6,\u5E76\u663E\u793A\u8FD9\u4E9B\u6587\u4EF6\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1/var/log \u6709\u591A\u5C11\u4E2A\u6587\u4EF6,\u5E76\u663E\u793A\u8FD9\u4E9B\u6587\u4EF6\u540D 
# \u4F7F\u7528 ls \u9012\u5F52\u663E\u793A\u6240\u6709,\u518D\u5224\u65AD\u662F\u5426\u4E3A\u6587\u4EF6,\u5982\u679C\u662F\u6587\u4EF6\u5219\u8BA1\u6570\u5668\u52A0 1
cd  /var/log
sum=0
for i in \`ls -r *\`
do
   if [ -f $i ];then
       let sum++
         echo &quot;\u6587\u4EF6\u540D:$i&quot;
     fi
done
echo &quot;\u603B\u6587\u4EF6\u6570\u91CF\u4E3A:$sum&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>33\u3001\u81EA\u52A8\u4E3A\u5176\u4ED6\u811A\u672C\u6DFB\u52A0\u89E3\u91CA\u5668\u4FE1\u606F</p>`,66),m={href:"http://mp.weixin.qq.com/s?__biz=MzAwNTM5Njk3Mw==&mid=2247506725&idx=2&sn=cb0395b93925ce3a06edf60d7ca7d2c1&chksm=9b1fdba7ac6852b182a5907c301fc9df85497315989ee99c4fbc2a88fad84a6032783b3524b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},t=d("Docker+K8s+Jenkins \u4E3B\u6D41\u6280\u672F\u5168\u89E3\u89C6\u9891\u8D44\u6599\u3010\u5E72\u8D27\u514D\u8D39\u5206\u4EAB\u3011"),b=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u81EA\u52A8\u4E3A\u5176\u4ED6\u811A\u672C\u6DFB\u52A0\u89E3\u91CA\u5668\u4FE1\u606F#!/bin/bash,\u5982\u811A\u672C\u540D\u4E3A test.sh \u5219\u6548\u679C\u5982\u4E0B: 
# ./test.sh  abc.sh  \u81EA\u52A8\u4E3A abc.sh \u6DFB\u52A0\u89E3\u91CA\u5668\u4FE1\u606F
# ./test.sh  user.sh  \u81EA\u52A8\u4E3A user.sh \u6DFB\u52A0\u89E3\u91CA\u5668\u4FE1\u606F
 
# \u5148\u4F7F\u7528 grep \u5224\u65AD\u5BF9\u8C61\u811A\u672C\u662F\u5426\u5DF2\u7ECF\u6709\u89E3\u91CA\u5668\u4FE1\u606F,\u5982\u679C\u6CA1\u6709\u5219\u4F7F\u7528 sed \u6DFB\u52A0\u89E3\u91CA\u5668\u4EE5\u53CA\u63CF\u8FF0\u4FE1\u606F
if  !  grep  -q  &quot;^#!&quot;  $1; then
sed  &#39;1i #!/bin/bash&#39;  $1
sed  &#39;2i #Description: &#39;
fi
# \u56E0\u4E3A\u6BCF\u4E2A\u811A\u672C\u7684\u529F\u80FD\u4E0D\u540C,\u4F5C\u7528\u4E0D\u540C,\u6240\u4EE5\u5728\u7ED9\u5BF9\u8C61\u811A\u672C\u6DFB\u52A0\u5B8C\u89E3\u91CA\u5668\u4FE1\u606F,\u4EE5\u53CA Description \u540E\u8FD8\u5E0C\u671B
# \u7EE7\u7EED\u7F16\u8F91\u5177\u4F53\u7684\u811A\u672C\u529F\u80FD\u7684\u63CF\u8FF0\u4FE1\u606F,\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528 vim \u628A\u5BF9\u8C61\u811A\u672C\u6253\u5F00,\u5E76\u4E14\u5149\u6807\u8DF3\u8F6C\u5230\u8BE5\u6587\u4EF6\u7684\u7B2C 2 \u884C
vim +2 $1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>34\u3001\u81EA\u52A8\u5316\u90E8\u7F72 varnish \u6E90\u7801\u5305\u8F6F\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u81EA\u52A8\u5316\u90E8\u7F72 varnish \u6E90\u7801\u5305\u8F6F\u4EF6 
# \u672C\u811A\u672C\u9700\u8981\u63D0\u524D\u4E0B\u8F7D varnish\u20103.0.6.tar.gz \u8FD9\u6837\u4E00\u4E2A\u6E90\u7801\u5305\u8F6F\u4EF6,\u8BE5\u811A\u672C\u5373\u53EF\u7528\u81EA\u52A8\u6E90\u7801\u5B89\u88C5\u90E8\u7F72\u8F6F\u4EF6
 
yum -y install gcc readline\u2010devel pcre\u2010devel
useradd -s /sbin/nologin varnish
tar -xf varnish\u20103.0.6.tar.gz
cd varnish\u20103.0.6
 
# \u4F7F\u7528 configure,make,make install \u6E90\u7801\u5B89\u88C5\u8F6F\u4EF6\u5305
./configure \u2010\u2010prefix=/usr/local/varnish
make &amp;&amp; make install
 
# \u5728\u6E90\u7801\u5305\u76EE\u5F55\u4E0B,\u5C06\u76F8\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230 Linux \u7CFB\u7EDF\u6587\u4EF6\u7CFB\u7EDF\u4E2D
# \u9ED8\u8BA4\u5B89\u88C5\u5B8C\u6210\u540E,\u4E0D\u4F1A\u81EA\u52A8\u62F7\u8D1D\u6216\u5B89\u88C5\u914D\u7F6E\u6587\u4EF6\u5230 Linux \u7CFB\u7EDF,\u6240\u4EE5\u9700\u8981\u624B\u52A8 cp \u590D\u5236\u914D\u7F6E\u6587\u4EF6
# \u5E76\u4F7F\u7528 uuidgen \u751F\u6210\u4E00\u4E2A\u968F\u673A\u5BC6\u94A5\u7684\u914D\u7F6E\u6587\u4EF6
 
cp redhat/varnish.initrc /etc/init.d/varnish
cp redhat/varnish.sysconfig /etc/sysconfig/varnish
cp redhat/varnish_reload_vcl /usr/bin/
ln -s /usr/local/varnish/sbin/varnishd /usr/sbin/
ln -s /usr/local/varnish/bin/* /usr/bin
mkdir /etc/varnish
cp /usr/local/varnish/etc/varnish/default.vcl /etc/varnish/
uuidgen &gt; /etc/varnish/secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>35\u3001\u7F16\u5199 nginx \u542F\u52A8\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7F16\u5199 nginx \u542F\u52A8\u811A\u672C 
# \u672C\u811A\u672C\u7F16\u5199\u5B8C\u6210\u540E,\u653E\u7F6E\u5728/etc/init.d/\u76EE\u5F55\u4E0B,\u5C31\u53EF\u4EE5\u88AB Linux \u7CFB\u7EDF\u81EA\u52A8\u8BC6\u522B\u5230\u8BE5\u811A\u672C
# \u5982\u679C\u672C\u811A\u672C\u540D\u4E3A/etc/init.d/nginx,\u5219 service nginx start \u5C31\u53EF\u4EE5\u542F\u52A8\u8BE5\u670D\u52A1
# service nginx stop \u5C31\u53EF\u4EE5\u5173\u95ED\u670D\u52A1
# service nginx restart \u53EF\u4EE5\u91CD\u542F\u670D\u52A1
# service nginx status \u53EF\u4EE5\u67E5\u770B\u670D\u52A1\u72B6\u6001
 
program=/usr/local/nginx/sbin/nginx
pid=/usr/local/nginx/logs/nginx.pid
start(){
if [ -f $pid ];then
  echo  &quot;nginx \u670D\u52A1\u5DF2\u7ECF\u5904\u4E8E\u5F00\u542F\u72B6\u6001&quot;
else
  $program
fi
stop(){
if [ -! -f $pid ];then
  echo &quot;nginx \u670D\u52A1\u5DF2\u7ECF\u5173\u95ED&quot;
else
  $program -s stop
  echo &quot;\u5173\u95ED\u670D\u52A1 ok&quot;
fi
}
status(){
if [ -f $pid ];then
  echo &quot;\u670D\u52A1\u6B63\u5728\u8FD0\u884C...&quot;
else
  echo &quot;\u670D\u52A1\u5DF2\u7ECF\u5173\u95ED&quot;
fi
}
 
case $1 in
start)
  start;;
stop)
  stop;;
restart)
  stop
  sleep 1
  start;;
status)
  status;;
*)
  echo  &quot;\u4F60\u8F93\u5165\u7684\u8BED\u6CD5\u683C\u5F0F\u9519\u8BEF&quot;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>36\u3001\u81EA\u52A8\u5BF9\u78C1\u76D8\u5206\u533A\u3001\u683C\u5F0F\u5316\u3001\u6302\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> #!/bin/bash
 
# \u81EA\u52A8\u5BF9\u78C1\u76D8\u5206\u533A\u3001\u683C\u5F0F\u5316\u3001\u6302\u8F7D
# \u5BF9\u865A\u62DF\u673A\u7684 vdb \u78C1\u76D8\u8FDB\u884C\u5206\u533A\u683C\u5F0F\u5316,\u4F7F\u7528&lt;&lt;\u5C06\u9700\u8981\u7684\u5206\u533A\u6307\u4EE4\u5BFC\u5165\u7ED9\u7A0B\u5E8F fdisk
# n(\u65B0\u5EFA\u5206\u533A),p(\u521B\u5EFA\u4E3B\u5206\u533A),1(\u5206\u533A\u7F16\u53F7\u4E3A 1),\u4E24\u4E2A\u7A7A\u767D\u884C(\u4E24\u4E2A\u56DE\u8F66,\u76F8\u5F53\u4E8E\u5C06\u6574\u4E2A\u78C1\u76D8\u5206\u4E00\u4E2A\u533A)
# \u6CE8\u610F:1 \u540E\u9762\u7684\u4E24\u4E2A\u56DE\u8F66(\u7A7A\u767D\u884C)\u662F\u5FC5\u987B\u7684!
fdisk /dev/vdb &lt;&lt; EOF
n
p
1
 
 
wq
EOF
 
#\u683C\u5F0F\u5316\u521A\u521A\u521B\u5EFA\u597D\u7684\u5206\u533A
mkfs.xfs   /dev/vdb1
 
#\u521B\u5EFA\u6302\u8F7D\u70B9\u76EE\u5F55
if [ -e /data ]; then
exit
fi
mkdir /data
 
#\u81EA\u52A8\u6302\u8F7D\u521A\u521A\u521B\u5EFA\u7684\u5206\u533A,\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u52A8\u6302\u8F7D\u8BE5\u5206\u533A
echo &#39;/dev/vdb1     /data    xfs    defaults        1 2&#39;  &gt;&gt; /etc/fstab
mount -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>37\u3001\u81EA\u52A8\u4F18\u5316 Linux \u5185\u6838\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u81EA\u52A8\u4F18\u5316 Linux \u5185\u6838\u53C2\u6570
 
#\u811A\u672C\u9488\u5BF9 RHEL7
cat &gt;&gt; /usr/lib/sysctl.d/00\u2010system.conf &lt;&lt;EOF
fs.file\u2010max=65535
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_synack_retries = 5
net.ipv4.tcp_syn_retries = 5
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 30
#net.ipv4.tcp_keepalive_time = 120
net.ipv4.ip_local_port_range = 1024  65535
kernel.shmall = 2097152
kernel.shmmax = 2147483648
kernel.shmmni = 4096
kernel.sem = 5010 641280 5010 128
net.core.wmem_default=262144
net.core.wmem_max=262144
net.core.rmem_default=4194304
net.core.rmem_max=4194304
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_keepalive_time = 30
net.ipv4.tcp_window_scaling = 0
net.ipv4.tcp_sack = 0
EOF
 
sysctl \u2013p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>38\u3001\u5207\u5272 Nginx \u65E5\u5FD7\u6587\u4EF6(\u9632\u6B62\u5355\u4E2A\u6587\u4EF6\u8FC7\u5927,\u540E\u671F\u5904\u7406\u5F88\u56F0\u96BE)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#mkdir  /data/scripts
#vim   /data/scripts/nginx_log.sh  
#!/bin/bash

# \u5207\u5272 Nginx \u65E5\u5FD7\u6587\u4EF6(\u9632\u6B62\u5355\u4E2A\u6587\u4EF6\u8FC7\u5927,\u540E\u671F\u5904\u7406\u5F88\u56F0\u96BE) 
logs_path=&quot;/usr/local/nginx/logs/&quot;
mv \${logs_path}access.log \${logs_path}access_$(date -d &quot;yesterday&quot; +&quot;%Y%m%d&quot;).log
kill -USR1  \`cat /usr/local/nginx/logs/nginx.pid\`
 
# chmod +x  /data/scripts/nginx_log.sh
# crontab  \u2010e                    #\u811A\u672C\u5199\u5B8C\u540E,\u5C06\u811A\u672C\u653E\u5165\u8BA1\u5212\u4EFB\u52A1\u6BCF\u5929\u6267\u884C\u4E00\u6B21\u811A\u672C
0  1  *  *   *   /data/scripts/nginx_log.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>39\u3001\u68C0\u6D4B MySQL \u6570\u636E\u5E93\u8FDE\u63A5\u6570\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u68C0\u6D4B MySQL \u6570\u636E\u5E93\u8FDE\u63A5\u6570\u91CF 
 
# \u672C\u811A\u672C\u6BCF 2 \u79D2\u68C0\u6D4B\u4E00\u6B21 MySQL \u5E76\u53D1\u8FDE\u63A5\u6570,\u53EF\u4EE5\u5C06\u672C\u811A\u672C\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8\u811A\u672C,\u6216\u5728\u7279\u5B9A\u65F6\u95F4\u6BB5\u6267\u884C
# \u4EE5\u6EE1\u8DB3\u5BF9 MySQL \u6570\u636E\u5E93\u7684\u76D1\u63A7\u9700\u6C42,\u67E5\u770B MySQL \u8FDE\u63A5\u662F\u5426\u6B63\u5E38
# \u672C\u6848\u4F8B\u4E2D\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u540E\u65B9\u53EF\u4F7F\u7528
log_file=/var/log/mysql_count.log
user=root
passwd=123456
while :
do
    sleep 2
    count=\`mysqladmin  -u  &quot;$user&quot;  -p  &quot;$passwd&quot;   status |  awk &#39;{print $4}&#39;\`
    echo &quot;\`date +%Y\u2010%m\u2010%d\` \u5E76\u53D1\u8FDE\u63A5\u6570\u4E3A:$count&quot; &gt;&gt; $log_file
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>40\u3001\u6839\u636E md5 \u6821\u9A8C\u7801,\u68C0\u6D4B\u6587\u4EF6\u662F\u5426\u88AB\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6839\u636E md5 \u6821\u9A8C\u7801,\u68C0\u6D4B\u6587\u4EF6\u662F\u5426\u88AB\u4FEE\u6539 
# \u672C\u793A\u4F8B\u811A\u672C\u68C0\u6D4B\u7684\u662F/etc \u76EE\u5F55\u4E0B\u6240\u6709\u7684 conf \u7ED3\u5C3E\u7684\u6587\u4EF6,\u6839\u636E\u5B9E\u9645\u60C5\u51B5,\u60A8\u53EF\u4EE5\u4FEE\u6539\u4E3A\u5176\u4ED6\u76EE\u5F55\u6216\u6587\u4EF6
# \u672C\u811A\u672C\u5728\u76EE\u6807\u6570\u636E\u6CA1\u6709\u88AB\u4FEE\u6539\u65F6\u6267\u884C\u4E00\u6B21,\u5F53\u6000\u7591\u6570\u636E\u88AB\u4EBA\u7BE1\u6539,\u518D\u6267\u884C\u4E00\u6B21
# \u5C06\u4E24\u6B21\u6267\u884C\u7684\u7ED3\u679C\u505A\u5BF9\u6BD4,MD5 \u7801\u53D1\u751F\u6539\u53D8\u7684\u6587\u4EF6,\u5C31\u662F\u88AB\u4EBA\u7BE1\u6539\u7684\u6587\u4EF6
for i in $(ls /etc/*.conf)
do
  md5sum &quot;$i&quot; &gt;&gt; /var/log/conf_file.log
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>41\u3001\u68C0\u6D4B MySQL \u670D\u52A1\u662F\u5426\u5B58\u6D3B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u68C0\u6D4B MySQL \u670D\u52A1\u662F\u5426\u5B58\u6D3B 
 
# host \u4E3A\u4F60\u9700\u8981\u68C0\u6D4B\u7684 MySQL \u4E3B\u673A\u7684 IP \u5730\u5740,user \u4E3A MySQL \u8D26\u6237\u540D,passwd \u4E3A\u5BC6\u7801
# \u8FD9\u4E9B\u4FE1\u606F\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u540E\u65B9\u53EF\u4F7F\u7528
host=192.168.51.198
user=root
passwd=123456
mysqladmin -h &#39;$host&#39; -u &#39;$user&#39; -p&#39;$passwd&#39; ping &amp;&gt;/dev/null
if [ $? -eq 0 ]
then
        echo &quot;MySQL is UP&quot;
else
        echo &quot;MySQL is down&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>42\u3001\u5907\u4EFD MySQL \u7684 shell \u811A\u672C(mysqldump\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5907\u4EFD MySQL \u7684 shell \u811A\u672C(mysqldump\u7248\u672C) 
 
# \u5B9A\u4E49\u53D8\u91CF user(\u6570\u636E\u5E93\u7528\u6237\u540D),passwd(\u6570\u636E\u5E93\u5BC6\u7801),date(\u5907\u4EFD\u7684\u65F6\u95F4\u6807\u7B7E)
# dbname(\u9700\u8981\u5907\u4EFD\u7684\u6570\u636E\u5E93\u540D\u79F0,\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9700\u8981\u4FEE\u6539\u8BE5\u53D8\u91CF\u7684\u503C,\u9ED8\u8BA4\u5907\u4EFD mysql \u6570\u636E\u5E93)
 
user=root
passwd=123456
dbname=mysql
date=$(date +%Y%m%d)
 
# \u6D4B\u8BD5\u5907\u4EFD\u76EE\u5F55\u662F\u5426\u5B58\u5728,\u4E0D\u5B58\u5728\u5219\u81EA\u52A8\u521B\u5EFA\u8BE5\u76EE\u5F55
[ ! -d /mysqlbackup ] &amp;&amp; mkdir /mysqlbackup
# \u4F7F\u7528 mysqldump \u547D\u4EE4\u5907\u4EFD\u6570\u636E\u5E93
mysqldump -u &quot;$user&quot; -p &quot;$passwd&quot; &quot;$dbname&quot; &gt; /mysqlbackup/&quot;$dbname&quot;-\${date}.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>43\u3001\u5C06\u6587\u4EF6\u4E2D\u6240\u6709\u7684\u5C0F\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5927\u5199\u5B57\u6BCD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5C06\u6587\u4EF6\u4E2D\u6240\u6709\u7684\u5C0F\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5927\u5199\u5B57\u6BCD 
 
# $1\u662F\u4F4D\u7F6E\u53C2\u6570,\u662F\u4F60\u9700\u8981\u8F6C\u6362\u5927\u5C0F\u5199\u5B57\u6BCD\u7684\u6587\u4EF6\u540D\u79F0
# \u6267\u884C\u811A\u672C,\u7ED9\u5B9A\u4E00\u4E2A\u6587\u4EF6\u540D\u4F5C\u4E3A\u53C2\u6570,\u811A\u672C\u5C31\u4F1A\u5C06\u8BE5\u6587\u4EF6\u4E2D\u6240\u6709\u7684\u5C0F\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5927\u5199\u5B57\u6BCD
tr &quot;[a\u2010z]&quot; &quot;[A\u2010Z]&quot; &lt; $1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>44\u3001\u975E\u4EA4\u4E92\u81EA\u52A8\u751F\u6210 SSH \u5BC6\u94A5\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u975E\u4EA4\u4E92\u81EA\u52A8\u751F\u6210 SSH \u5BC6\u94A5\u6587\u4EF6 
 
# \u2010t \u6307\u5B9A SSH \u5BC6\u94A5\u7684\u7B97\u6CD5\u4E3A RSA \u7B97\u6CD5;\u2010N \u8BBE\u7F6E\u5BC6\u94A5\u7684\u5BC6\u7801\u4E3A\u7A7A;\u2010f \u6307\u5B9A\u751F\u6210\u7684\u5BC6\u94A5\u6587\u4EF6&gt;\u5B58\u653E\u5728\u54EA\u91CC
rm  -rf  ~/.ssh/{known_hosts,id_rsa*}
ssh\u2010keygen -t RSA -N &#39;&#39; -f ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>45\u3001\u68C0\u67E5\u7279\u5B9A\u7684\u8F6F\u4EF6\u5305\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u68C0\u67E5\u7279\u5B9A\u7684\u8F6F\u4EF6\u5305\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5 
if [ $# -eq 0 ];then
  echo &quot;\u4F60\u9700\u8981\u5236\u5B9A\u4E00\u4E2A\u8F6F\u4EF6\u5305\u540D\u79F0\u4F5C\u4E3A\u811A\u672C\u53C2\u6570&quot;
  echo &quot;\u7528\u6CD5:$0 \u8F6F\u4EF6\u5305\u540D\u79F0 ...&quot;
fi
# $@\u63D0\u53D6\u6240\u6709\u7684\u4F4D\u7F6E\u53D8\u91CF\u7684\u503C,\u76F8\u5F53\u4E8E$*
for package in &quot;$@&quot;
do
    if rpm -q \${package} &amp;&gt;/dev/null ;then
    echo -e &quot;\${package}\\033[32m \u5DF2\u7ECF\u5B89\u88C5\\033[0m&quot;
    else
    echo -e &quot;\${package}\\033[34;1m \u672A\u5B89\u88C5\\033[0m&quot;
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>46\u3001\u76D1\u63A7 HTTP \u670D\u52A1\u5668\u7684\u72B6\u6001(\u6D4B\u8BD5\u8FD4\u56DE\u7801)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u76D1\u63A7 HTTP \u670D\u52A1\u5668\u7684\u72B6\u6001(\u6D4B\u8BD5\u8FD4\u56DE\u7801)
 
# \u8BBE\u7F6E\u53D8\u91CF,url\u4E3A\u4F60\u9700\u8981\u68C0\u6D4B\u7684\u76EE\u6807\u7F51\u7AD9\u7684\u7F51\u5740(IP \u6216\u57DF\u540D),\u6BD4\u5982\u767E\u5EA6
url=http://http://183.232.231.172/index.html
 
# \u5B9A\u4E49\u51FD\u6570 check_http:
# \u4F7F\u7528 curl \u547D\u4EE4\u68C0\u67E5 http \u670D\u52A1\u5668\u7684\u72B6\u6001
# \u2010m \u8BBE\u7F6Ecurl\u4E0D\u7BA1\u8BBF\u95EE\u6210\u529F\u6216\u5931\u8D25,\u6700\u5927\u6D88\u8017\u7684\u65F6\u95F4\u4E3A 5 \u79D2,5 \u79D2\u8FDE\u63A5\u670D\u52A1\u4E3A\u76F8\u5E94\u5219\u89C6\u4E3A\u65E0\u6CD5\u8FDE\u63A5
# \u2010s \u8BBE\u7F6E\u9759\u9ED8\u8FDE\u63A5,\u4E0D\u663E\u793A\u8FDE\u63A5\u65F6\u7684\u8FDE\u63A5\u901F\u5EA6\u3001\u65F6\u95F4\u6D88\u8017\u7B49\u4FE1\u606F
# \u2010o \u5C06 curl \u4E0B\u8F7D\u7684\u9875\u9762\u5185\u5BB9\u5BFC\u51FA\u5230/dev/null(\u9ED8\u8BA4\u4F1A\u5728\u5C4F\u5E55\u663E\u793A\u9875\u9762\u5185\u5BB9)
# \u2010w \u8BBE\u7F6Ecurl\u547D\u4EE4\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9%{http_code},\u6307\u5B9Acurl\u8FD4\u56DE\u670D\u52A1\u5668\u7684\u72B6\u6001\u7801
check_http()
{
        status_code=$(curl -m 5 -s -o /dev/null -w %{http_code} $url)
}
 
while :
do
        check_http
        date=$(date +%Y%m%d\u2010%H:%M:%S)
 
# \u751F\u6210\u62A5\u8B66\u90AE\u4EF6\u7684\u5185\u5BB9
        echo &quot;\u5F53\u524D\u65F6\u95F4\u4E3A:$date
        $url \u670D\u52A1\u5668\u5F02\u5E38,\u72B6\u6001\u7801\u4E3A\${status_code}.
        \u8BF7\u5C3D\u5FEB\u6392\u67E5\u5F02\u5E38.&quot; &gt; /tmp/http$$.pid
 
# \u6307\u5B9A\u6D4B\u8BD5\u670D\u52A1\u5668\u72B6\u6001\u7684\u51FD\u6570,\u5E76\u6839\u636E\u8FD4\u56DE\u7801\u51B3\u5B9A\u662F\u53D1\u9001\u90AE\u4EF6\u62A5\u8B66\u8FD8\u662F\u5C06\u6B63\u5E38\u4FE1\u606F\u5199\u5165\u65E5\u5FD7
        if [ $status_code -ne 200 ];then
                mail -s Warning root &lt; /tmp/http$$.pid
        else
                echo &quot;$url \u8FDE\u63A5\u6B63\u5E38&quot; &gt;&gt; /var/log/http.log
        fi
        sleep 5
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>47\u3001\u81EA\u52A8\u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219,\u5F00\u542F\u67D0\u4E9B\u670D\u52A1\u6216\u7AEF\u53E3(\u9002\u7528\u4E8E RHEL7)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u81EA\u52A8\u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219,\u5F00\u542F\u67D0\u4E9B\u670D\u52A1\u6216\u7AEF\u53E3(\u9002\u7528\u4E8E RHEL7)
# 
# \u8BBE\u7F6E\u53D8\u91CF\u5B9A\u4E49\u9700\u8981\u6DFB\u52A0\u5230\u9632\u706B\u5899\u89C4\u5219\u7684\u670D\u52A1\u548C\u7AEF\u53E3\u53F7
# \u4F7F\u7528 firewall\u2010cmd \u2010\u2010get\u2010services \u53EF\u4EE5\u67E5\u770B firewall \u652F\u6301\u54EA\u4E9B\u670D\u52A1
service=&quot;nfs http ssh&quot;
port=&quot;80 22 8080&quot;
 
# \u5FAA\u73AF\u5C06\u6BCF\u4E2A\u670D\u52A1\u6DFB\u52A0\u5230\u9632\u706B\u5899\u89C4\u5219\u4E2D
for i in $service
do
    echo &quot;Adding $i service to firewall&quot;
    firewall\u2010cmd  --add-service=\${i}
done
 
#\u5FAA\u73AF\u5C06\u6BCF\u4E2A\u7AEF\u53E3\u6DFB\u52A0\u5230\u9632\u706B\u5899\u89C4\u5219\u4E2D
for i in $port
do
    echo &quot;Adding $i Port to firewall&quot;
    firewall\u2010cmd --add-port=\${i}/tcp
done
#\u5C06\u4EE5\u4E0A\u8BBE\u7F6E\u7684\u4E34\u65F6\u9632\u706B\u5899\u89C4\u5219,\u8F6C\u6362\u4E3A\u6C38\u4E45\u6709\u6548\u7684\u89C4\u5219(\u786E\u4FDD\u91CD\u542F\u540E\u6709\u6548)
firewall\u2010cmd  --runtime-to-permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>48\u3001\u4F7F\u7528\u811A\u672C\u81EA\u52A8\u521B\u5EFA\u903B\u8F91\u5377</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528\u811A\u672C\u81EA\u52A8\u521B\u5EFA\u903B\u8F91\u5377 
 
# \u6E05\u5C4F,\u663E\u793A\u8B66\u544A\u4FE1\u606F,\u521B\u5EFA\u5C06\u78C1\u76D8\u8F6C\u6362\u4E3A\u903B\u8F91\u5377\u4F1A\u5220\u9664\u6570\u636E
clear
echo -e &quot;\\033[32m           !!!!!!\u8B66\u544A(Warning)!!!!!!\\033[0m&quot;
echo
echo &quot;+++++++++++++++++++++++++++++++++++++++++++++++++&quot;
echo &quot;\u811A\u672C\u4F1A\u5C06\u6574\u4E2A\u78C1\u76D8\u8F6C\u6362\u4E3A PV,\u5E76\u5220\u9664\u78C1\u76D8\u4E0A\u6240\u6709\u6570\u636E!!!&quot;
echo &quot;This Script will destroy all data on the Disk&quot;
echo &quot;+++++++++++++++++++++++++++++++++++++++++++++++++&quot;
echo
read -p &quot;\u8BF7\u95EE\u662F\u5426\u7EE7\u7EED y/n?:&quot; sure
 
# \u6D4B\u8BD5\u7528\u6237\u8F93\u5165\u7684\u662F\u5426\u4E3A y,\u5982\u679C\u4E0D\u662F\u5219\u9000\u51FA\u811A\u672C
[ $sure != y ] &amp;&amp; exit
 
# \u63D0\u793A\u7528\u6237\u8F93\u5165\u76F8\u5173\u53C2\u6570(\u78C1\u76D8\u3001\u5377\u7EC4\u540D\u79F0\u7B49\u6570\u636E),\u5E76\u6D4B\u8BD5\u7528\u6237\u662F\u5426\u8F93\u5165\u4E86\u8FD9\u4E9B\u503C,\u5982\u679C\u6CA1\u6709\u8F93\u5165,\u5219\u811A\u672C\u9000\u51FA
read -p &quot;\u8BF7\u8F93\u5165\u78C1\u76D8\u540D\u79F0,\u5982/dev/vdb:&quot; disk
[ -z $disk ] &amp;&amp; echo &quot;\u6CA1\u6709\u8F93\u5165\u78C1\u76D8\u540D\u79F0&quot; &amp;&amp; exit
read -p &quot;\u8BF7\u8F93\u5165\u5377\u7EC4\u540D\u79F0:&quot; vg_name
[ -z $vg_name ] &amp;&amp; echo &quot;\u6CA1\u6709\u8F93\u5165\u5377\u7EC4\u540D\u79F0&quot; &amp;&amp; exit
read -p &quot;\u8BF7\u8F93\u5165\u903B\u8F91\u5377\u540D\u79F0:&quot; lv_name
[ -z $lv_name ] &amp;&amp; echo &quot;\u6CA1\u6709\u8F93\u5165\u903B\u8F91\u5377\u540D\u79F0&quot; &amp;&amp; exit
read -p &quot;\u8BF7\u8F93\u5165\u903B\u8F91\u5377\u5927\u5C0F:&quot; lv_size
[ -z $lv_size ] &amp;&amp; echo &quot;\u6CA1\u6709\u8F93\u5165\u903B\u8F91\u5377\u5927\u5C0F&quot; &amp;&amp; exit
 
# \u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u903B\u8F91\u5377
pvcreate $disk
vgcreate $vg_name $disk
lvcreate -L \${lv_size}M -n \${lv_name}  \${vg_name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>49\u3001\u663E\u793A CPU \u5382\u5546\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u663E\u793A CPU \u5382\u5546\u4FE1\u606F 
awk &#39;/vendor_id/{print $3}&#39; /proc/cpuinfo | uniq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>50\u3001\u5220\u9664\u67D0\u4E2A\u76EE\u5F55\u4E0B\u5927\u5C0F\u4E3A 0 \u7684\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5220\u9664\u67D0\u4E2A\u76EE\u5F55\u4E0B\u5927\u5C0F\u4E3A 0 \u7684\u6587\u4EF6
 
#/var/www/html \u4E3A\u6D4B\u8BD5\u76EE\u5F55,\u811A\u672C\u4F1A\u6E05\u7A7A\u8BE5\u76EE\u5F55\u4E0B\u6240\u6709 0 \u5B57\u8282\u7684\u6587\u4EF6
dir=&quot;/var/www/html&quot;
find $dir -type f -size 0 -exec rm -rf {} \\;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>51\u3001\u67E5\u627E Linux \u7CFB\u7EDF\u4E2D\u7684\u50F5\u5C38\u8FDB\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u67E5\u627E Linux \u7CFB\u7EDF\u4E2D\u7684\u50F5\u5C38\u8FDB\u7A0B
 
# awk \u5224\u65AD ps \u547D\u4EE4\u8F93\u51FA\u7684\u7B2C 8 \u5217\u4E3A Z \u662F,\u663E\u793A\u8BE5\u8FDB\u7A0B\u7684 PID \u548C\u8FDB\u7A0B\u547D\u4EE4
ps aux | awk &#39;{if($8 == &quot;Z&quot;){print $2,$11}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>52\u3001\u63D0\u793A\u7528\u6237\u8F93\u5165\u5E74\u4EFD\u540E\u5224\u65AD\u8BE5\u5E74\u662F\u5426\u4E3A\u95F0\u5E74</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u63D0\u793A\u7528\u6237\u8F93\u5165\u5E74\u4EFD\u540E\u5224\u65AD\u8BE5\u5E74\u662F\u5426\u4E3A\u95F0\u5E74
 
# \u80FD\u88AB4\u6574\u9664\u5E76\u4E14\u5E76\u4E0D\u80FD\u88AB100\u6574\u9664\u7684\u5E74\u4EFD\u662F\u95F0\u5E74
# \u80FD\u88AB400\u6574\u9664\u7684\u5E74\u4EFD\u4E5F\u662F\u95F0\u5E74
read -p &quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u5E74\u4EFD:&quot; year
 
if [ &quot;$year&quot; = &quot;&quot; ];then
    echo &quot;\u6CA1\u6709\u8F93\u5165\u5E74\u4EFD&quot;
    exit
fi
#\u4F7F\u7528\u6B63\u5219\u6D4B\u8BD5\u53D8\u91CF year \u4E2D\u662F\u5426\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD
if [[ &quot;$year&quot; =~ [a\u2010Z] ]];then
    echo &quot;\u4F60\u8F93\u5165\u7684\u4E0D\u662F\u6570\u5B57&quot;
    exit
fi
# \u5224\u65AD\u662F\u5426\u4E3A\u95F0\u5E74
if [ $[year % 4] -eq 0 ] &amp;&amp; [ $[year % 100] -ne 0 ];then
    echo &quot;$year\u5E74\u662F\u95F0\u5E74&quot;  
elif [ $[year % 400] -eq 0 ];then
    echo &quot;$year\u5E74\u662F\u95F0\u5E74&quot;
else
    echo &quot;$year\u5E74\u4E0D\u662F\u95F0\u5E74&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>53\u3001\u751F\u6210\u968F\u673A\u5BC6\u7801(urandom \u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u751F\u6210\u968F\u673A\u5BC6\u7801(urandom \u7248\u672C) 
 
# /dev/urandom \u6587\u4EF6\u662F Linux \u5185\u7F6E\u7684\u968F\u673A\u8BBE\u5907\u6587\u4EF6
# cat /dev/urandom \u53EF\u4EE5\u770B\u770B\u91CC\u9762\u7684\u5185\u5BB9,ctrl+c \u9000\u51FA\u67E5\u770B
# \u67E5\u770B\u8BE5\u6587\u4EF6\u5185\u5BB9\u540E,\u53D1\u73B0\u5185\u5BB9\u6709\u4E9B\u592A\u968F\u673A,\u5305\u62EC\u5F88\u591A\u7279\u6B8A\u7B26\u53F7,\u6211\u4EEC\u9700\u8981\u7684\u5BC6\u7801\u4E0D\u5E0C\u671B\u4F7F\u7528\u8FD9\u4E9B\u7B26\u53F7
# tr \u2010dc &#39;_A\u2010Za\u2010z0\u20109&#39; &lt; /dev/urandom
# \u8BE5\u547D\u4EE4\u53EF\u4EE5\u5C06\u968F\u673A\u6587\u4EF6\u4E2D\u5176\u4ED6\u7684\u5B57\u7B26\u5220\u9664,\u4EC5\u4FDD\u7559\u5927\u5C0F\u5199\u5B57\u6BCD,\u6570\u5B57,\u4E0B\u5212\u7EBF,\u4F46\u662F\u5185\u5BB9\u8FD8\u662F\u592A\u591A
# \u6211\u4EEC\u53EF\u4EE5\u7EE7\u7EED\u5C06\u4F18\u5316\u597D\u7684\u5185\u5BB9\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9 head \u547D\u4EE4,\u5728\u5927\u91CF\u6570\u636E\u4E2D\u4EC5\u663E\u793A\u5934 10 \u4E2A\u5B57\u8282
# \u6CE8\u610F A \u524D\u9762\u6709\u4E2A\u4E0B\u5212\u7EBF
tr -dc &#39;_A\u2010Za\u2010z0\u20109&#39; &lt;/dev/urandom | head -c 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>54\u3001\u751F\u6210\u968F\u673A\u5BC6\u7801(\u5B57\u4E32\u622A\u53D6\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u751F\u6210\u968F\u673A\u5BC6\u7801(\u5B57\u4E32\u622A\u53D6\u7248\u672C) 
 
# \u8BBE\u7F6E\u53D8\u91CF key,\u5B58\u50A8\u5BC6\u7801\u7684\u6240\u6709\u53EF\u80FD\u6027(\u5BC6\u7801\u5E93),\u5982\u679C\u8FD8\u9700\u8981\u5176\u4ED6\u5B57\u7B26\u8BF7\u81EA\u884C\u6DFB\u52A0\u5176\u4ED6\u5BC6\u7801\u5B57\u7B26
# \u4F7F\u7528$#\u7EDF\u8BA1\u5BC6\u7801\u5E93\u7684\u957F\u5EA6
key=&quot;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;
num=\${#key}
# \u8BBE\u7F6E\u521D\u59CB\u5BC6\u7801\u4E3A\u7A7A
pass=&#39;&#39;
# \u5FAA\u73AF 8 \u6B21,\u751F\u6210\u968F\u673A\u5BC6\u7801
# \u6BCF\u6B21\u90FD\u662F\u968F\u673A\u6570\u5BF9\u5BC6\u7801\u5E93\u7684\u957F\u5EA6\u53D6\u4F59,\u786E\u4FDD\u63D0\u53D6\u7684\u5BC6\u7801\u5B57\u7B26\u4E0D\u8D85\u8FC7\u5BC6\u7801\u5E93\u7684\u957F\u5EA6
# \u6BCF\u6B21\u5FAA\u73AF\u63D0\u53D6\u4E00\u4F4D\u968F\u673A\u5BC6\u7801,\u5E76\u5C06\u8BE5\u968F\u673A\u5BC6\u7801\u8FFD\u52A0\u5230 pass \u53D8\u91CF\u7684\u6700\u540E
for i in {1..8}
do  
  index=$[RANDOM%num]
  pass=$pass\${key:$index:1}
done
echo $pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>55\u3001\u751F\u6210\u968F\u673A\u5BC6\u7801(UUID \u7248\u672C,16 \u8FDB\u5236\u5BC6\u7801)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u751F\u6210\u968F\u673A\u5BC6\u7801(UUID \u7248\u672C,16 \u8FDB\u5236\u5BC6\u7801) 
uuidgen
56\u3001\u751F\u6210\u968F\u673A\u5BC6\u7801(\u8FDB\u7A0B ID \u7248\u672C,\u6570\u5B57\u5BC6\u7801)


#!/bin/bash

# \u751F\u6210\u968F\u673A\u5BC6\u7801(\u8FDB\u7A0B ID \u7248\u672C,\u6570\u5B57\u5BC6\u7801)
echo $$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>57\u3001\u6D4B\u8BD5\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u662F\u5426\u6B63\u786E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6D4B\u8BD5\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u662F\u5426\u6B63\u786E
 
#\u7528\u6237\u540D\u4E3A tom \u5E76\u4E14\u5BC6\u7801\u4E3A 123456,\u5219\u63D0\u793A\u767B\u5F55\u6210\u529F,\u5426\u5219\u63D0\u793A\u767B\u5F55\u5931\u8D25
read -p &quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D:&quot;  user
read -p &quot;\u8BF7\u8F93\u5165\u5BC6\u7801:&quot;    pass
if [ &quot;$user&quot; == &#39;tom&#39; -a &quot;$pass&quot; == &#39;123456&#39; ];then
  echo &quot;Login successful&quot;
else
  echo &quot;Login Failed&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>58\u3001\u5FAA\u73AF\u6D4B\u8BD5\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u662F\u5426\u6B63\u786E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5FAA\u73AF\u6D4B\u8BD5\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u662F\u5426\u6B63\u786E 
 
# \u5FAA\u73AF\u6D4B\u8BD5\u7528\u6237\u7684\u8D26\u6237\u540D\u548C\u5BC6\u7801,\u6700\u5927\u6D4B\u8BD5 3 \u6B21,\u8F93\u5165\u6B63\u786E\u63D0\u793A\u767B\u5F55\u6210\u529F,\u5426\u5219\u63D0\u793A\u767B\u5F55\u5931\u8D25
# \u7528\u6237\u540D\u4E3A tom \u5E76\u4E14\u5BC6\u7801\u4E3A 123456  
for i in {1..3}
do
  read -p &quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D:&quot; user
  read -p &quot;\u8BF7\u8F93\u5165\u5BC6\u7801:&quot;   pass
if [ &quot;$user&quot; == &#39;tom&#39; -a &quot;$pass&quot; == &#39;123456&#39; ];then
    echo &quot;Login successful&quot;
     exit
fi
done
echo &quot;Login Failed&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>59\u3001Shell \u811A\u672C\u7684 fork \u70B8\u5F39</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# Shell \u811A\u672C\u7684 fork \u70B8\u5F39 
 
# \u5FEB\u901F\u6D88\u8017\u8BA1\u7B97\u673A\u8D44\u6E90,\u81F4\u4F7F\u8BA1\u7B97\u673A\u6B7B\u673A
# \u5B9A\u4E49\u51FD\u6570\u540D\u4E3A.(\u70B9), \u51FD\u6570\u4E2D\u9012\u5F52\u8C03\u7528\u81EA\u5DF1\u5E76\u653E\u5165\u540E\u53F0\u6267\u884C
.() { .|.&amp; };.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>60\u3001\u6279\u91CF\u4E0B\u8F7D\u6709\u5E8F\u6587\u4EF6(pdf\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\u7B49)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6279\u91CF\u4E0B\u8F7D\u6709\u5E8F\u6587\u4EF6(pdf\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\u7B49)
 
# \u672C\u811A\u672C\u51C6\u5907\u6709\u5E8F\u7684\u7F51\u7EDC\u8D44\u6599\u8FDB\u884C\u6279\u91CF\u4E0B\u8F7D\u64CD\u4F5C(\u5982 01.jpg,02.jpg,03.jpg)
# \u8BBE\u7F6E\u8D44\u6E90\u6765\u6E90\u7684\u57DF\u540D\u8FDE\u63A5
url=&quot;http://www.baidu.com/&quot;
echo  &quot;\u5F00\u59CB\u4E0B\u8F7D...&quot;
sleep 2
type=jpg
for i in \`seq 100\`
     echo &quot;\u6B63\u5728\u4E0B\u8F7D$i.$type&quot;
  curl $url/$i.$type -o /tmp/\${i}$type
     sleep 1
done
#curl \u4F7F\u7528-o \u9009\u9879\u6307\u5B9A\u4E0B\u8F7D\u6587\u4EF6\u53E6\u5B58\u5230\u54EA\u91CC.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>61\u3001\u663E\u793A\u5F53\u524D\u8BA1\u7B97\u673A\u4E2D\u6240\u6709\u8D26\u6237\u7684\u7528\u6237\u540D\u79F0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> #!/bin/bash
 
# \u663E\u793A\u5F53\u524D\u8BA1\u7B97\u673A\u4E2D\u6240\u6709\u8D26\u6237\u7684\u7528\u6237\u540D\u79F0
 
# \u4E0B\u9762\u4F7F\u75283\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u5217\u51FA\u8BA1\u7B97\u673A\u4E2D\u6240\u6709\u8D26\u6237\u7684\u7528\u6237\u540D
# \u6307\u5B9A\u4EE5:\u4E3A\u5206\u9694\u7B26,\u6253\u5370/etc/passwd \u6587\u4EF6\u7684\u7B2C 1 \u5217
awk -F: &#39;{print $1}&#39; /etc/passwd
 
# \u6307\u5B9A\u4EE5:\u4E3A\u5206\u9694\u7B26,\u6253\u5370/etc/passwd \u6587\u4EF6\u7684\u7B2C 1 \u5217
cut -d: -f1 /etc/passwd
 
# \u4F7F\u7528 sed \u7684\u66FF\u6362\u529F\u80FD,\u5C06/etc/passwd \u6587\u4EF6\u4E2D:\u540E\u9762\u7684\u6240\u6709\u5185\u5BB9\u66FF\u6362\u4E3A\u7A7A(\u4EC5\u663E\u793A\u7528\u6237\u540D)
sed &#39;s/:.*//&#39; /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>62\u3001\u5236\u5B9A\u76EE\u5F55\u8DEF\u5F84,\u811A\u672C\u81EA\u52A8\u5C06\u8BE5\u76EE\u5F55\u4F7F\u7528 tar \u547D\u4EE4\u6253\u5305\u5907\u4EFD\u5230/data\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5236\u5B9A\u76EE\u5F55\u8DEF\u5F84,\u811A\u672C\u81EA\u52A8\u5C06\u8BE5\u76EE\u5F55\u4F7F\u7528 tar \u547D\u4EE4\u6253\u5305\u5907\u4EFD\u5230/data\u76EE\u5F55 
 
[ ! -d /data ] &amp;&amp; mkdir /data
[ -z $1 ] &amp;&amp; exit
if [ -d $1 ];then
  tar -czf /data/$1.-\`date +%Y%m%d\`.tar.gz $1
else
    echo &quot;\u8BE5\u76EE\u5F55\u4E0D\u5B58\u5728&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>63\u3001\u663E\u793A\u8FDB\u5EA6\u6761(\u56DE\u65CB\u9556\u7248)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u663E\u793A\u8FDB\u5EA6\u6761(\u56DE\u65CB\u9556\u7248)
 
while :
do
  clear
  for i in {1..20}
  do
    echo \u2010e &quot;\\033[3;\${i}H*&quot;
    sleep 0.1
    done
    clear
    for i in {20..1}
    do
    echo \u2010e &quot;\\033[3;\${i}H*&quot;
    sleep 0.1
    done
    clear
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>64\u3001\u5B89\u88C5 LAMP \u73AF\u5883(yum \u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5B89\u88C5 LAMP \u73AF\u5883(yum \u7248\u672C) 
 
# \u672C\u811A\u672C\u9002\u7528\u4E8E RHEL7(RHEL6 \u4E2D\u6570\u636E\u5E93\u4E3A mysql)
yum makecache &amp;&gt;/dev/null
num=$(yum repolist | awk &#39;/repolist/{print $2}&#39; | sed &#39;s/,//&#39;)
if [ $num -lt 0 ];then
  yum -y install httpd
  yum -y install mariadb mariadb-server mariadb-devel
  yum -y install php php-mysql
else
  echo &quot;\u672A\u914D\u7F6E yum \u6E90...&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>65\u3001\u5FAA\u73AF\u5173\u95ED\u5C40\u57DF\u7F51\u4E2D\u6240\u6709\u4E3B\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5FAA\u73AF\u5173\u95ED\u5C40\u57DF\u7F51\u4E2D\u6240\u6709\u4E3B\u673A 
 
# \u5047\u8BBE\u672C\u673A\u4E3A 192.168.4.100,\u7F16\u5199\u811A\u672C\u5173\u95ED\u9664\u81EA\u5DF1\u5916\u7684\u5176\u4ED6\u6240\u6709\u4E3B\u673A
# \u811A\u672C\u6267\u884C,\u9700\u8981\u63D0\u524D\u7ED9\u6240\u6709\u5176\u4ED6\u4E3B\u673A\u4F20\u9012 ssh \u5BC6\u94A5,\u6EE1\u8DB3\u65E0\u5BC6\u7801\u8FDE\u63A5
for i in {1..254}
do
  [ $i -eq 100 ] &amp;&amp; continue
  echo &quot;\u6B63\u5728\u5173\u95ED 192.168.4.$i...&quot;
  ssh 192.168.4.$i poweroff
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>66\u3001\u83B7\u53D6\u672C\u673A MAC \u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u83B7\u53D6\u672C\u673A MAC \u5730\u5740
ip a s | awk &#39;BEGIN{print  &quot; \u672C \u673A MAC \u5730 \u5740 \u4FE1 \u606F \u5982 \u4E0B :&quot;}/^[0\u20109]/{print $2;getline;if($0~/link\\/ether/){print $2}}&#39; | grep -v lo:
 
# awk \u8BFB\u53D6 ip \u547D\u4EE4\u7684\u8F93\u51FA,\u8F93\u51FA\u7ED3\u679C\u4E2D\u5982\u679C\u6709\u4EE5\u6570\u5B57\u5F00\u59CB\u7684\u884C,\u5148\u663E\u793A\u8BE5\u884C\u7684\u5730 2 \u5217(\u7F51\u5361\u540D\u79F0),
# \u63A5\u7740\u4F7F\u7528 getline \u518D\u8BFB\u53D6\u5B83\u7684\u4E0B\u4E00\u884C\u6570\u636E,\u5224\u65AD\u662F\u5426\u5305\u542B link/ether
# \u5982\u679C\u4FDD\u62A4\u8BE5\u5173\u952E\u8BCD,\u5C31\u663E\u793A\u8BE5\u884C\u7684\u7B2C 2 \u5217(MAC \u5730\u5740)
# lo \u56DE\u73AF\u8BBE\u5907\u6CA1\u6709 MAC,\u56E0\u6B64\u5C06\u5176\u5C4F\u853D,\u4E0D\u663E\u793A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>67\u3001\u81EA\u52A8\u914D\u7F6E rsynd \u670D\u52A1\u5668\u7684\u914D\u7F6E\u6587\u4EF6 rsyncd.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
 
# \u81EA\u52A8\u914D\u7F6E rsynd \u670D\u52A1\u5668\u7684\u914D\u7F6E\u6587\u4EF6 rsyncd.conf
 
# See rsyncd.conf man page for more options.
 
[ ! -d /home/ftp ] &amp;&amp; mkdir /home/ftp
echo &#39;uid = nobody
gid = nobody
use chroot = yes
max connections = 4
pid file = /var/run/rsyncd.pid
exclude = lost+found/
transfer logging = yes
timeout = 900
ignore nonreadable = yes
dont compress   = *.gz *.tgz *.zip *.z *.Z *.rpm *.deb *.bz2
[ftp]
    path = /home/ftp
    comment = share&#39; &gt; /etc/rsyncd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>68\u3001\u4FEE\u6539 Linux \u7CFB\u7EDF\u7684\u6700\u5927\u6253\u5F00\u6587\u4EF6\u6570\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4FEE\u6539 Linux \u7CFB\u7EDF\u7684\u6700\u5927\u6253\u5F00\u6587\u4EF6\u6570\u91CF 
 
# \u5F80/etc/security/limits.conf \u6587\u4EF6\u7684\u672B\u5C3E\u8FFD\u52A0\u4E24\u884C\u914D\u7F6E\u53C2\u6570,\u4FEE\u6539\u6700\u5927\u6253\u5F00\u6587\u4EF6\u6570\u91CF\u4E3A 65536
cat &gt;&gt; /etc/security/limits.conf &lt;&lt;EOF
* soft nofile  65536
* hard nofile  65536
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>69\u3001\u8BBE\u7F6E Python \u652F\u6301\u81EA\u52A8\u547D\u4EE4\u8865\u9F50\u529F\u80FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u8BBE\u7F6E Python \u652F\u6301\u81EA\u52A8\u547D\u4EE4\u8865\u9F50\u529F\u80FD 
 
# Summary:Enable tab complete for python
# Description:
 
Needs import readline and rlcompleter module
#
import readline
#
import rlcompleter
#
help(rlcompleter) display detail: readline.parse_and_bind(&#39;tab: complete&#39;)
#
man python display detail: PYTHONSTARTUP variable
 
if  [ ! -f /usr/bin/tab.py ];then
  cat &gt;&gt; /usr/bin/tab.py &lt;&lt;EOF
import readline
import rlcompleter
readline.parse_and_bind(&#39;tab: complete&#39;)
EOF
fi
sed  -i &#39;$a export PYTHONSTARTUP=/usr/bin/tab.py&#39; /etc/profile
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>70\u3001\u81EA\u52A8\u4FEE\u6539\u8BA1\u5212\u4EFB\u52A1\u914D\u7F6E\u6587\u4EF6</p>`,72),o={href:"http://mp.weixin.qq.com/s?__biz=MzAwNTM5Njk3Mw==&mid=2247506725&idx=2&sn=cb0395b93925ce3a06edf60d7ca7d2c1&chksm=9b1fdba7ac6852b182a5907c301fc9df85497315989ee99c4fbc2a88fad84a6032783b3524b0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},p=d("Docker+K8s+Jenkins \u4E3B\u6D41\u6280\u672F\u5168\u89E3\u89C6\u9891\u8D44\u6599\u3010\u5E72\u8D27\u514D\u8D39\u5206\u4EAB\u3011"),h=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u81EA\u52A8\u4FEE\u6539\u8BA1\u5212\u4EFB\u52A1\u914D\u7F6E\u6587\u4EF6 
 
read -p &quot;\u8BF7\u8F93\u5165\u5206\u949F\u4FE1\u606F(00\u201059):&quot; min
read -p &quot;\u8BF7\u8F93\u5165\u5C0F\u65F6\u4FE1\u606F(00\u201024):&quot; hour
read -p &quot;\u8BF7\u8F93\u5165\u65E5\u671F\u4FE1\u606F(01\u201031):&quot; date
read -p &quot;\u8BF7\u8F93\u5165\u6708\u4EFD\u4FE1\u606F(01\u201012):&quot; month
read -p &quot;\u8BF7\u8F93\u5165\u661F\u671F\u4FE1\u606F(00\u201006):&quot; weak
read -p &quot;\u8BF7\u8F93\u5165\u8BA1\u5212\u4EFB\u52A1\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4\u6216\u811A\u672C:&quot; program
echo &quot;$min $hour $date $month $weak $program&quot; &gt;&gt; /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>71\u3001\u4F7F\u7528\u811A\u672C\u5FAA\u73AF\u521B\u5EFA\u4E09\u4F4D\u6570\u5B57\u7684\u6587\u672C\u6587\u4EF6(111-999 \u7684\u6587\u4EF6)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528\u811A\u672C\u5FAA\u73AF\u521B\u5EFA\u4E09\u4F4D\u6570\u5B57\u7684\u6587\u672C\u6587\u4EF6(111-999 \u7684\u6587\u4EF6) 
 
for i in {1..9}
do
  for j in {1..9}
  do
    for k in {1..9}
    do
      touch /tmp/$i$j$k.txt
    done
    done
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>72\u3001\u627E\u51FA/etc/passwd \u4E2D\u80FD\u767B\u5F55\u7684\u7528\u6237,\u5E76\u5C06\u5BF9\u5E94\u5728/etc/shadow \u4E2D\u7B2C\u4E8C\u5217\u5BC6\u7801\u63D0\u51FA\u5904\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u627E\u51FA/etc/passwd \u4E2D\u80FD\u767B\u5F55\u7684\u7528\u6237,\u5E76\u5C06\u5BF9\u5E94\u5728/etc/shadow \u4E2D\u7B2C\u4E8C\u5217\u5BC6\u7801\u63D0\u51FA\u5904\u7406
 
user=$(awk -F: &#39;/bash$/{print $1}&#39; /etc/passwd)
for i in $user
do
  awk -F: -v x=$i &#39;$1==x{print $1,$2}&#39; /etc/shadow
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>73\u3001\u7EDF\u8BA1/etc/passwd \u4E2D root \u51FA\u73B0\u7684\u6B21\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1/etc/passwd \u4E2D root \u51FA\u73B0\u7684\u6B21\u6570 
 
#\u6BCF\u8BFB\u53D6\u4E00\u884C\u6587\u4EF6\u5185\u5BB9,\u5373\u4ECE\u7B2C 1 \u5217\u5FAA\u73AF\u5230\u6700\u540E 1 \u5217,\u4F9D\u6B21\u5224\u65AD\u662F\u5426\u5305\u542B root \u5173\u952E\u8BCD,\u5982\u679C\u5305\u542B\u5219 x++
awk -F: &#39;{i=1;while(i&lt;=NF){if($i~/root/){x++};i++}} END{print &quot;root \u51FA\u73B0\u6B21\u6570\u4E3A&quot;x}&#39; /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>74\u3001\u7EDF\u8BA1 Linux \u8FDB\u7A0B\u76F8\u5173\u6570\u91CF\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7EDF\u8BA1 Linux \u8FDB\u7A0B\u76F8\u5173\u6570\u91CF\u4FE1\u606F 
 
running=0
sleeping=0
stoped=0
zombie=0
# \u5728 proc \u76EE\u5F55\u4E0B\u6240\u6709\u4EE5\u6570\u5B57\u5F00\u59CB\u7684\u90FD\u662F\u5F53\u524D\u8BA1\u7B97\u673A\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u7684\u8FDB\u7A0B PID
# \u6BCF\u4E2A PID \u7F16\u53F7\u7684\u76EE\u5F55\u4E0B\u8BB0\u5F55\u6709\u8BE5\u8FDB\u7A0B\u76F8\u5173\u7684\u4FE1\u606F
for pid in /proc/[1\u20109]*
do
  procs=$[procs+1]
  stat=$(awk &#39;{print $3}&#39; $pid/stat)
# \u6BCF\u4E2A pid \u76EE\u5F55\u4E0B\u90FD\u6709\u4E00\u4E2A stat \u6587\u4EF6,\u8BE5\u6587\u4EF6\u7684\u7B2C 3 \u5217\u662F\u8BE5\u8FDB\u7A0B\u7684\u72B6\u6001\u4FE1\u606F
    case $stat in
    R)
    running=$[running+1]
    ;;
    T)
    stoped=$[stoped+1]
    ;;
    S)
    sleeping=$[sleeping+1]
    ;;
    Z)
     zombie=$[zombie+1]
     ;;
    esac
done
echo &quot;\u8FDB\u7A0B\u7EDF\u8BA1\u4FE1\u606F\u5982\u4E0B&quot;
echo &quot;\u603B\u8FDB\u7A0B\u6570\u91CF\u4E3A:$procs&quot;
echo &quot;Running \u8FDB\u7A0B\u6570\u4E3A:$running&quot;
echo &quot;Stoped \u8FDB\u7A0B\u6570\u4E3A:$stoped&quot;
echo &quot;Sleeping \u8FDB\u7A0B\u6570\u4E3A:$sleeping&quot;
echo &quot;Zombie \u8FDB\u7A0B\u6570\u4E3A:$zombie&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>75\u3001\u4ECE\u952E\u76D8\u8BFB\u53D6\u4E00\u4E2A\u8BBA\u575B\u79EF\u5206,\u5224\u65AD\u8BBA\u575B\u7528\u6237\u7B49\u7EA7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4ECE\u952E\u76D8\u8BFB\u53D6\u4E00\u4E2A\u8BBA\u575B\u79EF\u5206,\u5224\u65AD\u8BBA\u575B\u7528\u6237\u7B49\u7EA7
 
#\u7B49\u7EA7\u5206\u7C7B\u5982\u4E0B:
#  \u5927\u4E8E\u7B49\u4E8E 90        \u795E\u529F\u7EDD\u4E16
#  \u5927\u4E8E\u7B49\u4E8E 80,\u5C0F\u4E8E 90       \u767B\u5CF0\u9020\u6781
#  \u5927\u4E8E\u7B49\u4E8E 70,\u5C0F\u4E8E 80       \u7089\u706B\u7EAF\u9752
#  \u5927\u4E8E\u7B49\u4E8E 60,\u5C0F\u4E8E 70       \u7565\u6709\u5C0F\u6210
#  \u5C0F\u4E8E 60               \u521D\u5B66\u4E4D\u7EC3
read -p &quot;\u8BF7\u8F93\u5165\u79EF\u5206(0\u2010100):&quot; JF
if [ $JF -ge 90 ] ; then
  echo &quot;$JF \u5206,\u795E\u529F\u7EDD\u4E16&quot;
elif [ $JF -ge 80 ] ; then
    echo &quot;$JF \u5206,\u767B\u5CF0\u9020\u6781&quot;
elif [ $JF -ge 70 ] ; then
    echo &quot;$JF \u5206,\u7089\u706B\u7EAF\u9752&quot;
elif [ $JF -lt 60 ] ; then
    echo &quot;$JF \u5206,\u7565\u6709\u5C0F\u6210&quot;
else
    echo &quot;$JF \u5206,\u521D\u5B66\u4E4D\u7EC3&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>76\u3001\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u7C7B\u578B(\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u5176\u4ED6)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u7C7B\u578B(\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u5176\u4ED6) 
read -p &quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26:&quot; KEY
case &quot;$KEY&quot; in
  [a\u2010z]|[A\u2010Z])
    echo &quot;\u5B57\u6BCD&quot; 
    ;;
  [0\u20109])
    echo &quot;\u6570\u5B57&quot; 
    ;;
  *)
    echo &quot;\u7A7A\u683C\u3001\u529F\u80FD\u952E\u6216\u5176\u4ED6\u63A7\u5236\u5B57\u7B26&quot;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>77\u3001\u663E\u793A\u8FDB\u5EA6\u6761(\u6570\u5B57\u7248)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u663E\u793A\u8FDB\u5EA6\u6761(\u6570\u5B57\u7248) 
# echo \u4F7F\u7528\u2010e \u9009\u9879\u540E,\u5728\u6253\u5370\u53C2\u6570\u4E2D\u53EF\u4EE5\u6307\u5B9A H,\u8BBE\u7F6E\u9700\u8981\u6253\u5370\u5185\u5BB9\u7684 x,y \u8F74\u7684\u5B9A\u4F4D\u5750\u6807
# \u8BBE\u7F6E\u9700\u8981\u6253\u5370\u5185\u5BB9\u5728\u7B2C\u51E0\u884C,\u7B2C\u51E0\u5217
for i in {1..100}
do
    echo -e &quot;\\033[6;8H[&quot;
    echo -e &quot;\\033[6;9H$i%&quot;
    echo -e &quot;\\033[6;13H]&quot;
    sleep 0.1
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>78\u3001\u6253\u5370\u6590\u6CE2\u90A3\u5951\u6570\u5217</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6253\u5370\u6590\u6CE2\u90A3\u5951\u6570\u5217(\u8BE5\u6570\u5217\u7684\u7279\u70B9\u662F\u540E\u4E00\u4E2A\u6570\u5B57,\u6C38\u8FDC\u90FD\u662F\u524D 2 \u4E2A\u6570\u5B57\u4E4B\u548C) 
 
# \u6590\u6CE2\u90A3\u5951\u6570\u5217\u540E\u4E00\u4E2A\u6570\u5B57\u6C38\u8FDC\u662F\u524D 2 \u4E2A\u6570\u5B57\u4E4B\u548C
# \u5982:0  1  1  2  3  5  8  13 ... ...
list=(0 1)
for i in \`seq 2 11\`
do
  list[$i]=\`expr \${list[\u20101]} + \${list[\u20102]}\`
done
echo \${list[@]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>79\u3001\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F Yes \u6216 NO</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F Yes \u6216 NO 
 
read -p  &quot;Are you sure?[y/n]:&quot;  sure
case  $sure  in
  y|Y|Yes|YES)  
    echo &quot;you enter $a&quot;
    ;;
    n|N|NO|no)
     echo &quot;you enter $a&quot;
     ;;
    *)
     echo &quot;error&quot;;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>80\u3001\u663E\u793A\u672C\u673A Linux \u7CFB\u7EDF\u4E0A\u6240\u6709\u5F00\u653E\u7684\u7AEF\u53E3\u5217\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u663E\u793A\u672C\u673A Linux \u7CFB\u7EDF\u4E0A\u6240\u6709\u5F00\u653E\u7684\u7AEF\u53E3\u5217\u8868 
 
# \u4ECE\u7AEF\u53E3\u5217\u8868\u4E2D\u89C2\u6D4B\u6709\u6CA1\u6709\u6CA1\u7528\u7684\u7AEF\u53E3,\u6709\u7684\u8BDD\u53EF\u4EE5\u5C06\u8BE5\u7AEF\u53E3\u5BF9\u5E94\u7684\u670D\u52A1\u5173\u95ED,\u9632\u6B62\u610F\u5916\u7684\u653B\u51FB\u53EF\u80FD\u6027
ss -nutlp | awk &#39;{print $1,$5}&#39; | awk -F&quot;[: ]&quot; &#39;{print &quot;\u534F\u8BAE:&quot;$1,&quot;\u7AEF\u53E3\u53F7:&quot;$NF}&#39; | grep &quot;[0\u20109]&quot; | uniq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>81\u3001\u5C06 Linux \u7CFB\u7EDF\u4E2D UID \u5927\u4E8E\u7B49\u4E8E 1000 \u7684\u666E\u901A\u7528\u6237\u90FD\u5220\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5C06 Linux \u7CFB\u7EDF\u4E2D UID \u5927\u4E8E\u7B49\u4E8E 1000 \u7684\u666E\u901A\u7528\u6237\u90FD\u5220\u9664 
 
# \u5148\u7528 awk \u63D0\u53D6\u6240\u6709 uid \u5927\u4E8E\u7B49\u4E8E 1000 \u7684\u666E\u901A\u7528\u6237\u540D\u79F0
# \u518D\u4F7F\u7528 for \u5FAA\u73AF\u9010\u4E2A\u5C06\u6BCF\u4E2A\u7528\u6237\u5220\u9664\u5373\u53EF
user=$(awk -F: &#39;$3&gt;=1000{print $1}&#39; /etc/passwd)
for i in $user
do
     userdel -r $i
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>82\u3001\u4F7F\u7528\u811A\u672C\u5F00\u542F\u5173\u95ED\u865A\u62DF\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528\u811A\u672C\u5F00\u542F\u5173\u95ED\u865A\u62DF\u673A 
 
# \u811A\u672C\u901A\u8FC7\u8C03\u7528virsh\u547D\u4EE4\u5B9E\u73B0\u5BF9\u865A\u62DF\u673A\u7684\u7BA1\u7406,\u5982\u679C\u6CA1\u6709\u8BE5\u547D\u4EE4,\u9700\u8981\u5B89\u88C5 libvirt\u2010client \u8F6F\u4EF6\u5305
# $1\u662F\u811A\u672C\u7684\u7B2C1\u4E2A\u53C2\u6570,$2\u662F\u811A\u672C\u7684\u7B2C2\u4E2A\u53C2\u6570
# \u7B2C1\u4E2A\u53C2\u6570\u662F\u4F60\u5E0C\u671B\u5BF9\u865A\u62DF\u673A\u8FDB\u884C\u7684\u64CD\u4F5C\u6307\u4EE4,\u7B2C2\u4E2A\u53C2\u6570\u662F\u865A\u62DF\u673A\u540D\u79F0
case $1 in
  list)
    virsh list --all
    ;;
  start)
    virsh start $2
    ;;
  stop)
    virsh destroy $2
    ;;
  enable)
    virsh autostart $2
    ;;
  disable)
    virsh autostart --disable $2
    ;;
  *)
    echo &quot;Usage:$0 list&quot;
    echo &quot;Usage:$0 [start|stop|enable|disable]  VM_name&quot;
    cat &lt;&lt; EOF
    #list      \u663E\u793A\u865A\u62DF\u673A\u5217\u8868
    #start     \u542F\u52A8\u865A\u62DF\u673A
    #stop      \u5173\u95ED\u865A\u62DF\u673A
    #enable    \u8BBE\u7F6E\u865A\u62DF\u673A\u4E3A\u5F00\u673A\u81EA\u542F
    #disable   \u5173\u95ED\u865A\u62DF\u673A\u5F00\u673A\u81EA\u542F\u529F\u80FD
    EOF
    ;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>83\u3001\u8C03\u6574\u865A\u62DF\u673A\u5185\u5B58\u53C2\u6570\u7684 shell \u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u8C03\u6574\u865A\u62DF\u673A\u5185\u5B58\u53C2\u6570\u7684 shell \u811A\u672C 
 
# \u811A\u672C\u901A\u8FC7\u8C03\u7528 virsh \u547D\u4EE4\u5B9E\u73B0\u5BF9\u865A\u62DF\u673A\u7684\u7BA1\u7406,\u5982\u679C\u6CA1\u6709\u8BE5\u547D\u4EE4,\u9700\u8981\u5B89\u88C5 libvirt\u2010client \u8F6F\u4EF6\u5305
cat &lt;&lt; EOF
1.\u8C03\u6574\u865A\u62DF\u673A\u6700\u5927\u5185\u5B58\u6570\u503C
2.\u8C03\u6574\u5B9E\u9645\u5206\u914D\u7ED9\u865A\u62DF\u673A\u7684\u5185\u5B58\u6570\u503C
EOF
read -p &quot;\u8BF7\u9009\u62E9[1\u20102]:&quot; select
case $select in
  1)
      read -p &quot;\u8BF7\u8F93\u5165\u865A\u62DF\u673A\u540D\u79F0&quot; name
      read -p &quot;\u8BF7\u8F93\u5165\u6700\u5927\u5185\u5B58\u6570\u503C(\u5355\u4F4D:k):&quot; size
      virsh setmaxmem $name --size $size --config
      ;;
  2)
      read -p &quot;\u8BF7\u8F93\u5165\u865A\u62DF\u673A\u540D\u79F0&quot; name
      read -p &quot;\u8BF7\u8F93\u5165\u5B9E\u9645\u5206\u914D\u5185\u5B58\u6570\u503C(\u5355\u4F4D:k):&quot; size
      virsh setmem $name $size
      ;;
  *)
      echo &quot;Error&quot;
      ;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>84\u3001\u67E5\u770B KVM \u865A\u62DF\u673A\u4E2D\u7684\u7F51\u5361\u4FE1\u606F(\u4E0D\u9700\u8981\u8FDB\u5165\u542F\u52A8\u6216\u8FDB\u5165\u865A\u62DF\u673A)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u67E5\u770B KVM \u865A\u62DF\u673A\u4E2D\u7684\u7F51\u5361\u4FE1\u606F(\u4E0D\u9700\u8981\u8FDB\u5165\u542F\u52A8\u6216\u8FDB\u5165\u865A\u62DF\u673A) 
 
# \u8BE5\u811A\u672C\u4F7F\u7528 guestmount \u5DE5\u5177,\u53EF\u4EE5\u5C06\u865A\u62DF\u673A\u7684\u78C1\u76D8\u7CFB\u7EDF\u6302\u8F7D\u5230\u771F\u5B9E\u673A\u6587\u4EF6\u7CFB\u7EDF\u4E2D
# Centos7.2 \u4E2D\u5B89\u88C5 libguestfs\u2010tools\u2010c \u53EF\u4EE5\u83B7\u5F97 guestmount \u5DE5\u5177
# \u865A\u62DF\u673A\u53EF\u4EE5\u542F\u52A8\u6216\u8005\u4E0D\u542F\u52A8\u90FD\u4E0D\u5F71\u54CD\u8BE5\u811A\u672C\u7684\u4F7F\u7528
# \u5C06\u865A\u62DF\u673A\u78C1\u76D8\u6587\u4EF6\u6302\u8F7D\u5230\u6587\u4EF6\u7CFB\u7EDF\u540E,\u5C31\u53EF\u4EE5\u76F4\u63A5\u8BFB\u53D6\u78C1\u76D8\u6587\u4EF6\u4E2D\u7684\u7F51\u5361\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6570\u636E
clear
mountpoint=&quot;/media/virtimage&quot;
[ ! -d $mountpoint ] &amp;&amp; mkdir $mountpoint
read -p &quot;\u8F93\u5165\u865A\u62DF\u673A\u540D\u79F0:&quot; name
echo &quot;\u8BF7\u7A0D\u540E...&quot;
# \u5982\u679C\u6709\u8BBE\u5907\u6302\u8F7D\u5230\u8BE5\u6302\u8F7D\u70B9,\u5219\u5148 umount \u5378\u8F7D
if mount | grep -q &quot;$mountpoint&quot; ;then
  umount $mountpoint
fi
# \u53EA\u8BFB\u7684\u65B9\u5F0F,\u5C06\u865A\u62DF\u673A\u7684\u78C1\u76D8\u6587\u4EF6\u6302\u8F7D\u5230\u7279\u5B9A\u7684\u76EE\u5F55\u4E0B,\u8FD9\u91CC\u662F/media/virtimage \u76EE\u5F55
guestmount -r -d $name -i $mountpoint
echo
echo &quot;\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010&quot;
echo -e &quot;\\033[32m$name \u865A\u62DF\u673A\u4E2D\u7F51\u5361\u5217\u8868\u5982\u4E0B:\\033[0m&quot;
dev=$(ls /media/virtimage/etc/sysconfig/network\u2010scripts/ifcfg-* |awk -F&quot;[/\u2010]&quot; &#39;{print $9}&#39;)
echo $dev
echo &quot;\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010\u2010&quot;
echo
echo
echo &quot;+++++++++++++++++++++++++++++++++++++++++++&quot;
echo -e &quot;\\033[32m \u7F51\u5361 IP \u5730\u5740\u4FE1\u606F\u5982\u4E0B:\\033[0m&quot;
for i in $dev
do
  echo -n &quot;$i:&quot;
  grep -q &quot;IPADDR&quot; /media/virtimage/etc/sysconfig/network\u2010scripts/ifcfg-$i || echo &quot;\u672A\u914D\u7F6E IP\u5730\u5740&quot;
  awk -F= &#39;/IPADDR/{print $2}&#39; /media/virtimage/etc/sysconfig/network-scripts/ifcfg-$i
done
echo &quot;+++++++++++++++++++++++++++++++++++++++++++&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>85\u3001\u4E0D\u767B\u9646\u865A\u62DF\u673A,\u4FEE\u6539\u865A\u62DF\u673A\u7F51\u5361 IP \u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4E0D\u767B\u9646\u865A\u62DF\u673A,\u4FEE\u6539\u865A\u62DF\u673A\u7F51\u5361 IP \u5730\u5740 
 
# \u8BE5\u811A\u672C\u4F7F\u7528 guestmount \u5DE5\u5177,Centos7.2 \u4E2D\u5B89\u88C5 libguestfs\u2010tools\u2010c \u53EF\u4EE5\u83B7\u5F97 guestmount \u5DE5\u5177
# \u811A\u672C\u5728\u4E0D\u767B\u9646\u865A\u62DF\u673A\u7684\u60C5\u51B5\u4E0B,\u4FEE\u6539\u865A\u62DF\u673A\u7684 IP \u5730\u5740\u4FE1\u606F
# \u5728\u67D0\u4E9B\u73AF\u5883\u4E0B,\u865A\u62DF\u673A\u6CA1\u6709 IP \u6216 IP \u5730\u5740\u4E0E\u771F\u5B9E\u4E3B\u673A\u4E0D\u5728\u4E00\u4E2A\u7F51\u6BB5
# \u771F\u5B9E\u4E3B\u673A\u5728\u6CA1\u6709 virt\u2010manger \u56FE\u5F62\u7684\u60C5\u51B5\u4E0B,\u8FDC\u7A0B\u8FDE\u63A5\u865A\u62DF\u673A\u5F88\u9EBB\u70E6
# \u8BE5\u811A\u672C\u53EF\u4EE5\u89E3\u51B3\u7C7B\u4F3C\u7684\u95EE\u9898
read -p &quot;\u8BF7\u8F93\u5165\u865A\u62DF\u673A\u540D\u79F0:&quot; name
if virsh domstate $name | grep -q running ;then
  echo &quot;\u4FEE\u6539\u865A\u62DF\u673A\u7F51\u5361\u6570\u636E,\u9700\u8981\u5173\u95ED\u865A\u62DF\u673A&quot;
  virsh destroy $name
fi
mountpoint=&quot;/media/virtimage&quot;
[ ! -d $mountpoint ] &amp;&amp; mkdir $mountpoint
echo &quot;\u8BF7\u7A0D\u540E...&quot;
if mount | grep -q &quot;$mountpoint&quot; ;then
  umount $mountpoint
fi
guestmount  -d $name -i $mountpoint
read -p &quot;\u8BF7\u8F93\u5165\u9700\u8981\u4FEE\u6539\u7684\u7F51\u5361\u540D\u79F0:&quot; dev
read -p &quot;\u8BF7\u8F93\u5165 IP \u5730\u5740:&quot; addr
# \u5224\u65AD\u539F\u672C\u7F51\u5361\u914D\u7F6E\u6587\u4EF6\u4E2D\u662F\u5426\u6709 IP \u5730\u5740,\u6709\u5C31\u4FEE\u6539\u8BE5 IP,\u6CA1\u6709\u5C31\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 IP \u5730\u5740
if grep -q &quot;IPADDR&quot;  $mountpoint/etc/sysconfig/network\u2010scripts/ifcfg\u2010$dev ;then
  sed -i &quot;/IPADDR/s/=.*/=$addr/&quot;  $mountpoint/etc/sysconfig/network\u2010scripts/ifcfg\u2010$dev
else
  echo &quot;IPADDR=$addr&quot; &gt;&gt; $mountpoint/etc/sysconfig/network\u2010scripts/ifcfg\u2010$dev
fi
# \u5982\u679C\u7F51\u5361\u914D\u7F6E\u6587\u4EF6\u4E2D\u6709\u5BA2\u6237\u914D\u7F6E\u7684 IP \u5730\u5740,\u5219\u811A\u672C\u63D0\u793A\u4FEE\u6539 IP \u5B8C\u6210
awk -F= -v x=$addr &#39;$2==x{print &quot;\u5B8C\u6210...&quot;}&#39;  $mountpoint/etc/sysconfig/network\u2010scripts/ifcfg-$dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>86\u3001\u7834\u89E3\u865A\u62DF\u673A\u5BC6\u7801,\u65E0\u5BC6\u7801\u767B\u9646\u865A\u62DF\u673A\u7CFB\u7EDF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u7834\u89E3\u865A\u62DF\u673A\u5BC6\u7801,\u65E0\u5BC6\u7801\u767B\u9646\u865A\u62DF\u673A\u7CFB\u7EDF 
 
# \u8BE5\u811A\u672C\u4F7F\u7528 guestmount \u5DE5\u5177,Centos7.2 \u4E2D\u5B89\u88C5 libguestfs\u2010tools\u2010c \u53EF\u4EE5\u83B7\u5F97 guestmount \u5DE5\u5177
 
read -p &quot;\u8BF7\u8F93\u5165\u865A\u62DF\u673A\u540D\u79F0:&quot; name
if virsh domstate $name | grep -q running ;then
  echo &quot;\u7834\u89E3,\u9700\u8981\u5173\u95ED\u865A\u62DF\u673A&quot;
  virsh destroy $name
fi
mountpoint=&quot;/media/virtimage&quot;
[ ! -d $mountpoint ] &amp;&amp; mkdir $mountpoint
echo &quot;\u8BF7\u7A0D\u540E...&quot;
if mount | grep -q &quot;$mountpoint&quot; ;then
  umount $mountpoint
fi
guestmount -d $name -i $mountpoint
# \u5C06 passwd \u4E2D\u5BC6\u7801\u5360\u4F4D\u7B26\u53F7 x \u5220\u9664,\u8BE5\u8D26\u6237\u5373\u53EF\u5B9E\u73B0\u65E0\u5BC6\u7801\u767B\u9646\u7CFB\u7EDF
sed -i &quot;/^root/s/x//&quot; $mountpoint/etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>87\u3001Shell \u811A\u672C\u5BF9\u4FE1\u53F7\u7684\u5904\u7406,\u6267\u884C\u811A\u672C\u540E,\u6309\u952E\u76D8 Ctrl+C \u65E0\u6CD5\u7EC8\u6B62\u7684\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# Shell \u811A\u672C\u5BF9\u4FE1\u53F7\u7684\u5904\u7406,\u6267\u884C\u811A\u672C\u540E,\u6309\u952E\u76D8 Ctrl+C \u65E0\u6CD5\u7EC8\u6B62\u7684\u811A\u672C 
 
# \u4F7F\u7528 trap \u547D\u4EE4\u53EF\u4EE5\u62E6\u622A\u7528\u6237\u901A\u8FC7\u952E\u76D8\u6216 kill \u547D\u4EE4\u53D1\u9001\u8FC7\u6765\u7684\u4FE1\u53F7
# \u4F7F\u7528 kill \u2010l \u53EF\u4EE5\u67E5\u770B Linux \u7CFB\u7EDF\u4E2D\u6240\u6709\u7684\u4FE1\u53F7\u5217\u8868,\u5176\u4E2D 2 \u4EE3\u8868 Ctrl+C
# trap \u5F53\u53D1\u73B0\u6709\u7528\u6237 ctrl+C \u5E0C\u671B\u7EC8\u7AEF\u811A\u672C\u65F6,\u5C31\u6267\u884C echo &quot;\u6682\u505C 10s&quot;;sleep 10 \u8FD9\u4E24\u6761\u547D\u4EE4
# \u53E6\u5916\u7528\u6237\u4F7F\u7528\u547D\u4EE4:[ kill \u20102 \u811A\u672C\u7684 PID ] \u4E5F\u53EF\u4EE5\u4E2D\u65AD\u811A\u672C\u548C Ctrl+C \u4E00\u6837\u7684\u6548\u679C,\u90FD\u4F1A\u88AB trap \u62E6\u622A
trap &#39;echo &quot;\u6682\u505C 10s&quot;;sleep 10&#39; 2
while :
do
  echo &quot;go go go&quot;
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>88\u3001\u4E00\u952E\u90E8\u7F72 memcached</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4E00\u952E\u90E8\u7F72 memcached 
 
# \u811A\u672C\u7528\u6E90\u7801\u6765\u5B89\u88C5 memcached \u670D\u52A1\u5668
# \u6CE8\u610F:\u5982\u679C\u8F6F\u4EF6\u7684\u4E0B\u8F7D\u94FE\u63A5\u8FC7\u671F\u4E86,\u8BF7\u66F4\u65B0 memcached \u7684\u4E0B\u8F7D\u94FE\u63A5
wget http://www.memcached.org/files/memcached-1.5.1.tar.gz
yum -y install gcc
tar -xf  memcached\u20101.5.1.tar.gz
cd memcached\u20101.5.1
./configure
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>89\u3001\u4E00\u952E\u914D\u7F6E VNC \u8FDC\u7A0B\u684C\u9762\u670D\u52A1\u5668(\u65E0\u5BC6\u7801\u7248\u672C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4E00\u952E\u914D\u7F6E VNC \u8FDC\u7A0B\u684C\u9762\u670D\u52A1\u5668(\u65E0\u5BC6\u7801\u7248\u672C)
 
# \u811A\u672C\u914D\u7F6E\u7684 VNC \u670D\u52A1\u5668,\u5BA2\u6237\u7AEF\u65E0\u9700\u5BC6\u7801\u5373\u53EF\u8FDE\u63A5
# \u5BA2\u6237\u7AEF\u4EC5\u6709\u67E5\u770B\u8FDC\u7A0B\u684C\u9762\u7684\u6743\u9650,\u6CA1\u6709\u9F20\u6807\u548C\u952E\u76D8\u7684\u64CD\u4F5C\u6743\u9650
 
rpm --quiet -q tigervnc\u2010server
if [  $? -ne  0 ];then
  yum  -y  tigervnc\u2010server
fi
x0vncserver AcceptKeyEvents=0 AlwaysShared=1 \\
AcceptPointerEvents=0 SecurityTypes=None  rfbport=5908
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>90\u3001\u5173\u95ED SELinux</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5173\u95ED SELinux 
 
sed -i  &#39;/^SELINUX/s/=.*/=disabled/&#39; /etc/selinux/config
setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>91\u3001\u67E5\u770B\u6240\u6709\u865A\u62DF\u673A\u78C1\u76D8\u4F7F\u7528\u91CF\u4EE5\u53CACPU\u4F7F\u7528\u91CF\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u67E5\u770B\u6240\u6709\u865A\u62DF\u673A\u78C1\u76D8\u4F7F\u7528\u91CF\u4EE5\u53CACPU\u4F7F\u7528\u91CF\u4FE1\u606F 
 
virt\u2010df
read -n1 &quot;\u6309\u4EFB\u610F\u952E\u7EE7\u7EED&quot; key
virt\u2010top
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>92\u3001\u4F7F\u7528 shell \u811A\u672C\u6253\u5370\u56FE\u5F62</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528 shell \u811A\u672C\u6253\u5370\u5982\u4E0B\u56FE\u5F62: 
 
# \u6253\u5370\u7B2C\u4E00\u7EC4\u56FE\u7247
# for(())\u4E3A\u7C7B C \u8BED\u8A00\u7684\u8BED\u6CD5\u683C\u5F0F,\u4E5F\u53EF\u4EE5\u4F7F\u7528 for i  in;do  ;done \u7684\u683C\u5F0F\u66FF\u6362
# for((i=1;i&lt;=9;i++))\u5FAA\u73AF\u4F1A\u6267\u884C 9 \u6B21,i \u4ECE 1 \u5F00\u59CB\u5230 9,\u6BCF\u5FAA\u73AF\u4E00\u6B21 i \u81EA\u52A0 1
clear
for (( i=1; i&lt;=9; i++ ))
do
  for (( j=1; j&lt;=i; j++ ))
  do
    echo -n &quot;$i&quot;
  done
  echo &quot;&quot;
done
read  -n1  &quot;\u6309\u4EFB\u610F\u952E\u7EE7\u7EED&quot;  key
#\u6253\u5370\u7B2C\u4E8C\u7EC4\u56FE\u7247
clear
for (( i=1; i&lt;=5; i++ )) 
do
  for (( j=1; j&lt;=i; j++ ))
  do
    echo -n &quot; |&quot;
  done
  echo &quot;_ &quot;
done
read  -n1  &quot;\u6309\u4EFB\u610F\u952E\u7EE7\u7EED&quot;  key
#\u6253\u5370\u7B2C\u4E09\u7EC4\u56FE\u7247
clear
for (( i=1; i&lt;=5; i++ ))
do
  for (( j=1; j&lt;=i; j++ ))
  do
    echo -n &quot; *&quot;
  done
  echo &quot;&quot;
done
for (( i=5; i&gt;=1; i\u2010\u2010 ))
do
  for (( j=1; j&lt;=i; j++ ))
  do
    echo -n &quot; *&quot;
  done
  echo &quot;&quot;
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>93\u3001\u6839\u636E\u8BA1\u7B97\u673A\u5F53\u524D\u65F6\u95F4,\u8FD4\u56DE\u95EE\u5019\u8BED,\u53EF\u4EE5\u5C06\u8BE5\u811A\u672C\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6839\u636E\u8BA1\u7B97\u673A\u5F53\u524D\u65F6\u95F4,\u8FD4\u56DE\u95EE\u5019\u8BED,\u53EF\u4EE5\u5C06\u8BE5\u811A\u672C\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8 
 
# 00\u201012 \u70B9\u4E3A\u65E9\u6668,12\u201018 \u70B9\u4E3A\u4E0B\u5348,18\u201024 \u70B9\u4E3A\u665A\u4E0A
# \u4F7F\u7528 date \u547D\u4EE4\u83B7\u53D6\u65F6\u95F4\u540E,if \u5224\u65AD\u65F6\u95F4\u7684\u533A\u95F4,\u786E\u5B9A\u95EE\u5019\u8BED\u5185\u5BB9
tm=$(date +%H)
if [ $tm -le 12 ];then
  msg=&quot;Good Morning $USER&quot;
elif [ $tm -gt 12 -a $tm -le 18 ];then
    msg=&quot;Good Afternoon $USER&quot;
else
    msg=&quot;Good Night $USER&quot;
fi
echo &quot;\u5F53\u524D\u65F6\u95F4\u662F:$(date +&quot;%Y\u2010%m\u2010%d %H:%M:%S&quot;)&quot;
echo -e &quot;\\033[34m$msg\\033[0m&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>94\u3001\u8BFB\u53D6\u7528\u6237\u8F93\u5165\u7684\u8D26\u6237\u540D\u79F0,\u5C06\u8D26\u6237\u540D\u5199\u5165\u5230\u6570\u7EC4\u4FDD\u5B58</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u8BFB\u53D6\u7528\u6237\u8F93\u5165\u7684\u8D26\u6237\u540D\u79F0,\u5C06\u8D26\u6237\u540D\u5199\u5165\u5230\u6570\u7EC4\u4FDD\u5B58 
 
# \u5B9A\u4E49\u6570\u7EC4\u540D\u79F0\u4E3A name,\u6570\u7EC4\u7684\u4E0B\u6807\u4E3A i,\u5C0F\u6807\u4ECE 0 \u5F00\u59CB,\u6BCF\u8F93\u5165\u4E00\u4E2A\u8D26\u6237\u540D,\u4E0B\u6807\u52A0 1,\u7EE7\u7EED\u5B58\u4E0B\u4E00\u4E2A\u8D26\u6237
# \u6700\u540E,\u8F93\u5165 over,\u811A\u672C\u8F93\u51FA\u603B\u7ED3\u6027\u4FE1\u606F\u540E\u811A\u672C\u9000\u51FA
i=0
while :
do
  read -p &quot;\u8BF7\u8F93\u5165\u8D26\u6237\u540D,\u8F93\u5165 over \u7ED3\u675F:&quot; key
  if [ $key == &quot;over&quot; ];then 
    break
    else
    name[$i]=$key
    let i++
    fi
done
echo &quot;\u603B\u8D26\u6237\u540D\u6570\u91CF:\${#name[*]}&quot;
echo &quot;\${name[@]}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>95\u3001\u5224\u65AD\u6587\u4EF6\u6216\u76EE\u5F55\u662F\u5426\u5B58\u5728</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5224\u65AD\u6587\u4EF6\u6216\u76EE\u5F55\u662F\u5426\u5B58\u5728 
 
if [ $# -eq 0 ] ;then
echo &quot;\u672A\u8F93\u5165\u4EFB\u4F55\u53C2\u6570,\u8BF7\u8F93\u5165\u53C2\u6570&quot;
echo &quot;\u7528\u6CD5:$0 [\u6587\u4EF6\u540D|\u76EE\u5F55\u540D]&quot;
fi
if [ -f $1 ];then
  echo &quot;\u8BE5\u6587\u4EF6,\u5B58\u5728&quot;
  ls -l $1
else
  echo &quot;\u6CA1\u6709\u8BE5\u6587\u4EF6&quot;
fi
if [ -d  $1 ];then
     echo &quot;\u8BE5\u76EE\u5F55,\u5B58\u5728&quot;
     ls -ld  $2
else
     echo &quot;\u6CA1\u6709\u8BE5\u76EE\u5F55&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>96\u3001\u6253\u5370\u5404\u79CD\u683C\u5F0F\u7684\u65F6\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u6253\u5370\u5404\u79CD\u65F6\u95F4\u683C\u5F0F 
 
echo &quot;\u663E\u793A\u661F\u671F\u7B80\u79F0(\u5982:Sun)&quot;
date +%a
echo &quot;\u663E\u793A\u661F\u671F\u5168\u79F0(\u5982:Sunday)&quot;
date +%A
echo &quot;\u663E\u793A\u6708\u4EFD\u7B80\u79F0(\u5982:Jan)&quot;
date +%b
echo &quot;\u663E\u793A\u6708\u4EFD\u5168\u79F0(\u5982:January)&quot;
date +%B
echo &quot;\u663E\u793A\u6570\u5B57\u6708\u4EFD(\u5982:12)&quot;
date +%m
echo &quot;\u663E\u793A\u6570\u5B57\u65E5\u671F(\u5982:01 \u53F7)&quot;
date +%d
echo &quot;\u663E\u793A\u6570\u5B57\u5E74(\u5982:01 \u53F7)&quot;
date +%Y echo &quot;\u663E\u793A\u5E74\u2010\u6708\u2010\u65E5&quot;
date +%F
echo &quot;\u663E\u793A\u5C0F\u65F6(24 \u5C0F\u65F6\u5236)&quot;
date +%H
echo &quot;\u663E\u793A\u5206\u949F(00..59)&quot;
date +%M
echo &quot;\u663E\u793A\u79D2&quot;
date +%S
echo &quot;\u663E\u793A\u7EB3\u79D2&quot;
date +%N
echo &quot;\u7EC4\u5408\u663E\u793A&quot;
date +&quot;%Y%m%d %H:%M:%S&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>97\u3001\u4F7F\u7528 egrep \u8FC7\u6EE4 MAC \u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528 egrep \u8FC7\u6EE4 MAC \u5730\u5740 
 
# MAC \u5730\u5740\u7531 16 \u8FDB\u5236\u7EC4\u6210,\u5982 AA:BB:CC:DD:EE:FF
# [0\u20109a\u2010fA\u2010F]{2}\u8868\u793A\u4E00\u6BB5\u5341\u516D\u8FDB\u5236\u6570\u503C,{5}\u8868\u793A\u8FDE\u7EED\u51FA\u73B05\u7EC4\u524D\u7F6E:\u7684\u5341\u516D\u8FDB\u5236
egrep &quot;[0\u20109a\u2010fA\u2010F]{2}(:[0\u20109a\u2010fA\u2010F]{2}){5}&quot; $1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>98\u3001\u7EDF\u8BA1\u53CC\u8272\u7403\u5404\u4E2A\u6570\u5B57\u7684\u4E2D\u5956\u6982\u7387</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
 
# \u7EDF\u8BA1\u53CC\u8272\u7403\u5404\u4E2A\u6570\u5B57\u7684\u4E2D\u5956\u6982\u7387 
 
# \u5F80\u671F\u53CC\u8272\u7403\u4E2D\u5956\u53F7\u7801\u5982\u4E0B:
# 01 04 11 28 31 32  16
# 04 07 08 18 23 24  02
# 02 05 06 16 28 29  04
# 04 19 22 27 30 33  01
# 05 10 18 19 30 31  03
# 02 06 11 12 19 29  06
# \u7EDF\u8BA1\u7BEE\u7403\u548C\u7EA2\u7403\u6570\u636E\u51FA\u73B0\u7684\u6982\u7387\u6B21\u6570(\u7BEE\u7403\u4E0D\u5206\u987A\u5E8F,\u7EDF\u8BA1\u6240\u6709\u7BEE\u7403\u6DF7\u5408\u5728\u4E00\u8D77\u7684\u6982\u7387)
awk &#39;{print $1&quot;\\n&quot;$2&quot;\\n&quot;$3&quot;\\n&quot;$4&quot;\\n&quot;$5&quot;\\n&quot;$6}&#39; 1.txt | sort | uniq -c | sort
awk &#39;{print $7}&#39; 1.txt | sort | uniq -c | sort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>99\u3001\u751F\u6210\u7B7E\u540D\u79C1\u94A5\u548C\u8BC1\u4E66</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u751F\u6210\u7B7E\u540D\u79C1\u94A5\u548C\u8BC1\u4E66 
 
read -p &quot;\u8BF7\u8F93\u5165\u5B58\u653E\u8BC1\u4E66\u7684\u76EE\u5F55:&quot; dir
if [ ! -d $dir ];then
  echo &quot;\u8BE5\u76EE\u5F55\u4E0D\u5B58\u5728&quot;
  exit
fi
read -p &quot;\u8BF7\u8F93\u5165\u5BC6\u94A5\u540D\u79F0:&quot; name
# \u4F7F\u7528 openssl \u751F\u6210\u79C1\u94A5
openssl genrsa -out \${dir}/\${name}.key
# \u4F7F\u7528 openssl \u751F\u6210\u8BC1\u4E66 #subj \u9009\u9879\u53EF\u4EE5\u5728\u751F\u6210\u8BC1\u4E66\u65F6,\u975E\u4EA4\u4E92\u81EA\u52A8\u586B\u5199 Common Name \u4FE1\u606F
openssl req -new -x509 -key \${dir}/\${name}.key -subj &quot;/CN=common&quot; -out \${dir}/\${name}.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>100\u3001\u4F7F\u7528awk\u7F16\u5199\u7684wc\u7A0B\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u4F7F\u7528awk\u7F16\u5199\u7684wc\u7A0B\u5E8F 
 
# \u81EA\u5B9A\u4E49\u53D8\u91CF chars \u53D8\u91CF\u5B58\u50A8\u5B57\u7B26\u4E2A\u6570,\u81EA\u5B9A\u4E49\u53D8\u91CF words \u53D8\u91CF\u5B58\u50A8\u5355\u8BCD\u4E2A\u6570
# awk \u5185\u7F6E\u53D8\u91CF NR \u5B58\u50A8\u884C\u6570
# length()\u4E3A awk \u5185\u7F6E\u51FD\u6570,\u7528\u6765\u7EDF\u8BA1\u6BCF\u884C\u7684\u5B57\u7B26\u6570\u91CF,\u56E0\u4E3A\u6BCF\u884C\u90FD\u4F1A\u6709\u4E00\u4E2A\u9690\u85CF\u7684$,\u6240\u4EE5\u6BCF\u6B21\u7EDF\u8BA1\u540E\u90FD+1
# wc \u7A0B\u5E8F\u4F1A\u628A\u6587\u4EF6\u7ED3\u5C3E\u7B26$\u4E5F\u7EDF\u8BA1\u5728\u5185,\u53EF\u4EE5\u4F7F\u7528 cat \u2010A \u6587\u4EF6\u540D,\u67E5\u770B\u8BE5\u9690\u85CF\u5B57\u7B26
awk &#39;{chars+=length($0)+1;words+=NF} END{print NR,words,chars}&#39; $1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61);function q(g,x){const e=v("ExternalLinkIcon");return a(),u("div",null,[c,i("p",null,[i("a",m,[t,s(e)])]),b,i("p",null,[i("a",o,[p,s(e)])]),h])}var y=l(r,[["render",q],["__file","shell.html.vue"]]);export{y as default};
