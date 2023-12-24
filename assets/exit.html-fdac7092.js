import{_ as t,o as s,c as e,e as a}from"./app-27622875.js";const n={},d=a(`<h1 id="退出账号登录" tabindex="-1"><a class="header-anchor" href="#退出账号登录" aria-hidden="true">#</a> 退出账号登录</h1><h2 id="退出登录-web端" tabindex="-1"><a class="header-anchor" href="#退出登录-web端" aria-hidden="true">#</a> 退出登录(web端)</h2><blockquote><p>https://passport.bilibili.com/login/exit/v2</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie</p><p>验证登录成功后会使用<code>set-cookie</code>字段清空以下 cookie 项：</p><p><code>DedeUserID</code> <code>DedeUserID__ckMd5</code> <code>SESSDATA</code> <code>bili_jct</code></p><p>并在服务器注销该登录 Token (SESSDATA)，该 Token 即失效</p><p>请求必须包含以下cookie项：<code>DedeUserID</code> <code>bili_jct</code> <code>SESSDATA</code></p><p><strong>正文参数 (application/x-www-form-urlencoded)：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>biliCSRF</td><td>str</td><td>CSRF Token (位于 cookie 中的 <code>bili_jct</code>)</td><td>必要</td><td></td></tr><tr><td>gourl</td><td>str</td><td>成功后跳转到的页面</td><td>非必要</td><td>默认为<code>javascript:history.go(-1)</code></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>如果 cookie 已经失效则输出登录页 html</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>2202：csrf 请求非法</td></tr><tr><td>status</td><td>bool</td><td>返回值</td><td><code>true</code>：成功</td></tr><tr><td>ts</td><td>num</td><td>时间戳</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功时不存在</td></tr><tr><td>data</td><td>有效时：obj</td><td>信息本体</td><td>失败时不存在</td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>redirectUrl</td><td>str</td><td>重定向 url</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://passport.bilibili.com/login/exit/v2&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: DedeUserID=xxx; bili_jct=xxx; SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;biliCSRF=xxxxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ts&quot;</span><span class="token operator">:</span> <span class="token number">1663034005</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;redirectUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://passport.biligame.com/crossDomain?DedeUserID=&amp;DedeUserID__ckMd5=&amp;SESSDATA=&amp;bili_jct=&amp;gourl=javascript%3Ahistory.go%28-1%29&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,20),o=[d];function r(p,c){return s(),e("div",null,o)}const l=t(n,[["render",r],["__file","exit.html.vue"]]);export{l as default};
