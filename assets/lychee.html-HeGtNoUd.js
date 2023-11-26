import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-oi_f_tKP.js";const l={},t=e(`<h1 id="lychee" tabindex="-1"><a class="header-anchor" href="#lychee" aria-hidden="true">#</a> lychee</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#-------------------------------------------</span>
<span class="token comment">#  Docker Compose</span>
<span class="token comment"># @RobLandry</span>
<span class="token comment"># Repo : https://github.com/LycheeOrg/Lychee-Docker</span>
<span class="token comment">#-------------------------------------------</span>

<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lychee_db</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lychee_db
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mariadb<span class="token punctuation">:</span>10.11.5
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=&lt;ROOT_PASSWORD<span class="token punctuation">&gt;</span>
      <span class="token punctuation">-</span> MYSQL_DATABASE=lychee
      <span class="token punctuation">-</span> MYSQL_USER=lychee
      <span class="token punctuation">-</span> MYSQL_PASSWORD=&lt;LYCHEE_PASSWORD<span class="token punctuation">&gt;</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token number">3306</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lychee
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped

  <span class="token key atrule">lychee</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lycheeorg/lychee
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lychee
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token datetime number">90:80</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./lychee/conf<span class="token punctuation">:</span>/conf
      <span class="token punctuation">-</span> ./lychee/uploads<span class="token punctuation">:</span>/uploads
      <span class="token punctuation">-</span> ./lychee/sym<span class="token punctuation">:</span>/sym
      <span class="token punctuation">-</span> ./lychee/logs<span class="token punctuation">:</span>/logs
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lychee
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment">#- PUID=1000</span>
      <span class="token comment">#- PGID=1000</span>
      <span class="token comment"># PHP timezone e.g. PHP_TZ=America/New_York</span>
      <span class="token punctuation">-</span> PHP_TZ=CST
      <span class="token punctuation">-</span> TIMEZONE=CST
      <span class="token comment">#- APP_NAME=Laravel</span>
      <span class="token comment">#- APP_ENV=local</span>
      <span class="token comment">#- APP_FORCE_HTTPS=false</span>
      <span class="token comment">#- APP_DEBUG=true</span>
      <span class="token comment">#- APP_URL=http://localhost</span>
      <span class="token punctuation">-</span> DB_CONNECTION=mysql
      <span class="token punctuation">-</span> DB_HOST=lychee_db
      <span class="token punctuation">-</span> DB_PORT=3306
      <span class="token punctuation">-</span> DB_DATABASE=lychee
      <span class="token punctuation">-</span> DB_USERNAME=lychee
      <span class="token punctuation">-</span> DB_PASSWORD=&lt;LYCHEE_PASSWORD<span class="token punctuation">&gt;</span>
      <span class="token comment">#- DB_PASSWORD_FILE=&lt;filename&gt;</span>
      <span class="token comment">#- DB_OLD_LYCHEE_PREFIX=&#39;&#39;</span>
      <span class="token comment">#- CACHE_DRIVER=file</span>
      <span class="token comment">#- SESSION_DRIVER=file</span>
      <span class="token comment">#- SESSION_LIFETIME=120</span>
      <span class="token comment">#- SECURITY_HEADER_HSTS_ENABLE=false</span>
      <span class="token comment">#- REDIS_HOST=127.0.0.1</span>
      <span class="token comment">#- REDIS_PASSWORD=null</span>
      <span class="token comment">#- REDIS_PASSWORD_FILE=&lt;filename&gt;</span>
      <span class="token comment">#- REDIS_PORT=6379</span>
      <span class="token comment">#- MAIL_DRIVER=smtp</span>
      <span class="token comment">#- MAIL_HOST=smtp.mailtrap.io</span>
      <span class="token comment">#- MAIL_PORT=2525</span>
      <span class="token comment">#- MAIL_USERNAME=null</span>
      <span class="token comment">#- MAIL_PASSWORD=null</span>
      <span class="token comment">#- MAIL_PASSWORD_FILE=&lt;filename&gt;</span>
      <span class="token comment">#- MAIL_ENCRYPTION=null</span>
      <span class="token punctuation">-</span> STARTUP_DELAY=30
      <span class="token comment"># - ADMIN_USER=admin</span>
      <span class="token comment"># - ADMIN_PASSWORD=&lt;ADMIN_PASSWORD&gt;</span>
      <span class="token comment"># - ADMIN_PASSWORD_FILE=&lt;filename&gt;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lychee_db

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">lychee</span><span class="token punctuation">:</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[t];function c(p,o){return s(),a("div",null,i)}const m=n(l,[["render",c],["__file","lychee.html.vue"]]);export{m as default};
