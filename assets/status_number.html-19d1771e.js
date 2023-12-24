import{_ as t,o as n,c as s,e as a}from"./app-27622875.js";const e={},d=a(`<h1 id="视频状态数" tabindex="-1"><a class="header-anchor" href="#视频状态数" aria-hidden="true">#</a> 视频状态数</h1><h2 id="视频状态数-仅avid" tabindex="-1"><a class="header-anchor" href="#视频状态数-仅avid" aria-hidden="true">#</a> 视频状态数（仅avid）</h2><blockquote><p>https://api.bilibili.com/archive_stat/stat</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>40001：请求错误<br>40003：无视频</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td></td></tr><tr><td>view</td><td>正常：num<br>屏蔽：str</td><td>正常：播放次数<br>屏蔽：&quot;--&quot;</td><td></td></tr><tr><td>danmaku</td><td>num</td><td>弹幕条数</td><td></td></tr><tr><td>reply</td><td>num</td><td>评论条数</td><td></td></tr><tr><td>favorite</td><td>num</td><td>收藏人数</td><td></td></tr><tr><td>coin</td><td>num</td><td>投币枚数</td><td></td></tr><tr><td>share</td><td>num</td><td>分享次数</td><td></td></tr><tr><td>now_rank</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>his_rank</td><td>num</td><td>历史最高排行</td><td></td></tr><tr><td>like</td><td>num</td><td>获赞次数</td><td></td></tr><tr><td>dislike</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>no_reprint</td><td>num</td><td>禁止转载标志</td><td>0：无<br>1：禁止</td></tr><tr><td>copyright</td><td>num</td><td>版权标志</td><td>1：自制<br>2：转载</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频<code>av91572143</code>的状态数</p><p>avid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/archive_stat/stat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=91572143&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">91572143</span><span class="token punctuation">,</span>
		<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">2236510</span><span class="token punctuation">,</span>
		<span class="token property">&quot;danmaku&quot;</span><span class="token operator">:</span> <span class="token number">37856</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reply&quot;</span><span class="token operator">:</span> <span class="token number">5723</span><span class="token punctuation">,</span>
		<span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span> <span class="token number">131317</span><span class="token punctuation">,</span>
		<span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">143389</span><span class="token punctuation">,</span>
		<span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">44598</span><span class="token punctuation">,</span>
		<span class="token property">&quot;now_rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;his_rank&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">264314</span><span class="token punctuation">,</span>
		<span class="token property">&quot;dislike&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;no_reprint&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="视频状态数-bvid-avid" tabindex="-1"><a class="header-anchor" href="#视频状态数-bvid-avid" aria-hidden="true">#</a> 视频状态数（bvid/avid）</h2><blockquote><p>https://api.bilibili.com/x/web-interface/archive/stat</p></blockquote><p><em>请求方式：GET</em></p><p>此接口请求头中UA值存在<code>python</code>字串，会返回-412错误</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要（可选）</td><td>avid与bvid任选一个</td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td>必要（可选）</td><td>avid与bvid任选一个</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误<br>-412：请求被拦截<br>40003：无视频</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td></td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td></td></tr><tr><td>view</td><td>正常：num<br>屏蔽：str</td><td>正常：播放次数<br>屏蔽：&quot;--&quot;</td><td></td></tr><tr><td>danmaku</td><td>num</td><td>弹幕条数</td><td></td></tr><tr><td>reply</td><td>num</td><td>评论条数</td><td></td></tr><tr><td>favorite</td><td>num</td><td>收藏人数</td><td></td></tr><tr><td>coin</td><td>num</td><td>投币枚数</td><td></td></tr><tr><td>share</td><td>num</td><td>分享次数</td><td></td></tr><tr><td>now_rank</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>his_rank</td><td>num</td><td>历史最高排行</td><td></td></tr><tr><td>like</td><td>num</td><td>获赞次数</td><td></td></tr><tr><td>dislike</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>no_reprint</td><td>num</td><td>禁止转载标志</td><td>0：无<br>1：禁止</td></tr><tr><td>copyright</td><td>num</td><td>版权标志</td><td>1：自制<br>2：转载</td></tr><tr><td>argue_msg</td><td>str</td><td>警告信息</td><td>默认为空</td></tr><tr><td>evaluation</td><td>str</td><td>视频评分</td><td>默认为空</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频<code>av2271112</code>/<code>BV1es411D7sW</code>的状态数</p><p>avid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/archive/stat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=2271112&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>bvid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/archive/stat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;bvid=BV1es411D7sW&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">2271112</span><span class="token punctuation">,</span>
		<span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1es411D7sW&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">26408224</span><span class="token punctuation">,</span>
		<span class="token property">&quot;danmaku&quot;</span><span class="token operator">:</span> <span class="token number">161919</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reply&quot;</span><span class="token operator">:</span> <span class="token number">52825</span><span class="token punctuation">,</span>
		<span class="token property">&quot;favorite&quot;</span><span class="token operator">:</span> <span class="token number">892560</span><span class="token punctuation">,</span>
		<span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">599649</span><span class="token punctuation">,</span>
		<span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">240573</span><span class="token punctuation">,</span>
		<span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">628592</span><span class="token punctuation">,</span>
		<span class="token property">&quot;now_rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;his_rank&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;no_reprint&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;argue_msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;evaluation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>当UA为<code>2333python2333</code>时，则无法访问此接口：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/archive/stat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=2271112&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-A</span> <span class="token string">&#39;2333python2333&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">-412</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;请求被拦截&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,37),p=[d];function o(r,i){return n(),s("div",null,p)}const c=t(e,[["render",o],["__file","status_number.html.vue"]]);export{c as default};
