import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as h}from"./app-DVA4gMtM.js";const l={};function k(t,s){return h(),a("div",null,s[0]||(s[0]=[n(`<h2 id="ws-jpeg" tabindex="-1"><a class="header-anchor" href="#ws-jpeg"><span>WS.jpeg</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">current_date</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> file</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> *.jpeg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [[ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =~</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ^WS-RN-PD-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">jpeg$ ]]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Skipping already formatted file: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    continue</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  fi</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ext</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">##*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  printf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;%06d&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$counter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;WS-RN-PD-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$current_date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$ext</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bf-jpeg" tabindex="-1"><a class="header-anchor" href="#bf-jpeg"><span>BF.jpeg</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">current_date</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> file</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> *.jpeg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [[ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =~</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ^BF-RN-PD-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">jpeg$ ]]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Skipping already formatted file: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    continue</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  fi</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ext</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">##*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  printf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;%06d&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$counter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;BF-RN-PD-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$current_date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$ext</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bc-jpeg" tabindex="-1"><a class="header-anchor" href="#bc-jpeg"><span>BC.jpeg</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">current_date</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> file</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> *.jpeg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [[ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =~</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ^BC-RN-PD-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">jpeg$ ]]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Skipping already formatted file: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    continue</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  fi</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ext</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">##*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  printf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;%06d&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$counter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;BC-RN-PD-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$current_date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$ext</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sexy-jpeg" tabindex="-1"><a class="header-anchor" href="#sexy-jpeg"><span>Sexy.jpeg</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">current_date</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> file</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> *.jpeg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [[ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =~</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ^Sexy-RN-PD-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}-[0-9]{</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">jpeg$ ]]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Skipping already formatted file: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    continue</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  fi</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  ext</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">##*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  printf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;%06d&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$counter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Sexy-RN-PD-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$current_date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$seq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$ext</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">counter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const d=i(l,[["render",k],["__file","rename.html.vue"]]),r=JSON.parse('{"path":"/os/linux/rename.html","title":"一些批量重命名的脚本","lang":"zh-CN","frontmatter":{"icon":"shell","author":"小苹果儿","title":"一些批量重命名的脚本","date":"2022-06-06T00:00:00.000Z","category":["操作系统","Linux"],"tag":["重命名"]},"headers":[{"level":2,"title":"WS.jpeg","slug":"ws-jpeg","link":"#ws-jpeg","children":[]},{"level":2,"title":"BF.jpeg","slug":"bf-jpeg","link":"#bf-jpeg","children":[]},{"level":2,"title":"BC.jpeg","slug":"bc-jpeg","link":"#bc-jpeg","children":[]},{"level":2,"title":"Sexy.jpeg","slug":"sexy-jpeg","link":"#sexy-jpeg","children":[]}],"git":{"createdTime":1737969229000,"updatedTime":1738559663000,"contributors":[{"name":"00D2","username":"00D2","email":"shijinguosjg@gmail.com","commits":2,"url":"https://github.com/00D2"}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"os/linux/rename.md","localizedDate":"2022年6月6日","excerpt":"<h2>WS.jpeg</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">current_date</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">$(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">date</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> +%Y%m%d</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">counter</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">1</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">for</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> file</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> in</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> *.jpeg</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">do</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [[ </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$file</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =~</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ^WS-RN-PD-[0-9]{</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">8</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}-[0-9]{</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">6</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">jpeg$ ]]; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">then</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">    echo</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"Skipping already formatted file: </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$file</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    continue</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  fi</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  ext</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#98C379\\">${</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">file</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">##*</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#98C379\\">}</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">  printf</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -v</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> seq</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"%06d\\"</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$counter</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">  echo</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mv</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$file</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"WS-RN-PD-</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$current_date</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">-</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$seq</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$ext</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  ((</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">counter</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">++</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">))</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">done</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,r as data};
