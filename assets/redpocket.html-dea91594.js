import{_ as t,o as n,c as s,e as a}from"./app-27622875.js";const p={},e=a(`<h1 id="直播间人气红包" tabindex="-1"><a class="header-anchor" href="#直播间人气红包" aria-hidden="true">#</a> 直播间人气红包</h1><h2 id="获取指定直播间的红包信息" tabindex="-1"><a class="header-anchor" href="#获取指定直播间的红包信息" aria-hidden="true">#</a> 获取指定直播间的红包信息</h2><blockquote><p>https://api.live.bilibili.com/xlive/lottery-interface/v1/lottery/getLotteryInfoWeb</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式（可选）：Cookie（SESSDATA）</p><p>如果不携带Cookie信息，user_status将始终返回2（未参与）。</p><p>如果所查询的直播间无红包，popularity_red_pocket为null。</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>roomid</td><td>str</td><td>直播间id</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>0：成功</td></tr><tr><td>ttl</td><td>num</td><td>TimeToLive</td><td>正常为1</td></tr><tr><td>data</td><td>object</td><td>返回数据</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>popularity_red_pocket</td><td>array</td><td>人气红包信息</td><td></td></tr><tr><td>……</td><td>......</td><td>……</td><td>……</td></tr></tbody></table><p><code>popularity_red_pocket</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>lot_id</td><td>num</td><td>红包id</td><td></td></tr><tr><td>sender_uid</td><td>num</td><td>红包发送者uid</td><td></td></tr><tr><td>sender_name</td><td>str</td><td>红包发送者昵称</td><td></td></tr><tr><td>sender_face</td><td>str</td><td>红包发送者头像</td><td></td></tr><tr><td>join_requirement</td><td>num</td><td>参与条件?</td><td></td></tr><tr><td>danmu</td><td>str</td><td>参与红包时自动发送的弹幕内容</td><td></td></tr><tr><td>awards</td><td>array</td><td>红包内容</td><td></td></tr><tr><td>lot_status</td><td>num</td><td>未知</td><td></td></tr><tr><td>h5_url</td><td>str</td><td>红包界面</td><td></td></tr><tr><td>user_status</td><td>num</td><td>用户是否已参与</td><td>1：已参与 2：未参与</td></tr><tr><td>lot_config_id</td><td>num</td><td>未知</td><td></td></tr><tr><td>total_price</td><td>num</td><td>红包总计价格</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询房间号为24146996的直播间红包信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.live.bilibili.com/xlive/lottery-interface/v1/lottery/getLotteryInfoWeb?roomid=24146996&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;pk&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;guard&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;gift&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;storm&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;activity_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;ACTIVITY_ID&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;ACTIVITY_PIC&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;danmu&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;anchor&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;red_pocket&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
		<span class="token property">&quot;popularity_red_pocket&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token property">&quot;lot_id&quot;</span><span class="token operator">:</span> <span class="token number">622474</span><span class="token punctuation">,</span>
			<span class="token property">&quot;sender_uid&quot;</span><span class="token operator">:</span> <span class="token number">1651908873</span><span class="token punctuation">,</span>
			<span class="token property">&quot;sender_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;九泽糖糖の小蘑菇&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;sender_face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/face/c932c5c8b1607fe2e1da22b9780af19662dac939.jpg&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;join_requirement&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;danmu&quot;</span><span class="token operator">:</span> <span class="token string">&quot;老板大气！点点红包抽礼物！&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;awards&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
				<span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">31212</span><span class="token punctuation">,</span>
				<span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;打call&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gift_pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/f75291a0e267425c41e1ce31b5ffd6bfedc6f0b6.png&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">31214</span><span class="token punctuation">,</span>
				<span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;牛哇&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gift_pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/23475a7a6170e0d94ba52720e23060dc7604b735.png&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;gift_id&quot;</span><span class="token operator">:</span> <span class="token number">31216</span><span class="token punctuation">,</span>
				<span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gift_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;i了i了&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;gift_pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1645358104</span><span class="token punctuation">,</span>
			<span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token number">1645358284</span><span class="token punctuation">,</span>
			<span class="token property">&quot;last_time&quot;</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
			<span class="token property">&quot;remove_time&quot;</span><span class="token operator">:</span> <span class="token number">1645358299</span><span class="token punctuation">,</span>
			<span class="token property">&quot;replace_time&quot;</span><span class="token operator">:</span> <span class="token number">1645358294</span><span class="token punctuation">,</span>
			<span class="token property">&quot;current_time&quot;</span><span class="token operator">:</span> <span class="token number">1645358231</span><span class="token punctuation">,</span>
			<span class="token property">&quot;lot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;h5_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://live.bilibili.com/p/html/live-app-red-envelope/popularity.html?is_live_half_webview=1\\u0026hybrid_half_ui=1,5,100p,100p,000000,0,50,0,0,1;2,5,100p,100p,000000,0,50,0,0,1;3,5,100p,100p,000000,0,50,0,0,1;4,5,100p,100p,000000,0,50,0,0,1;5,5,100p,100p,000000,0,50,0,0,1;6,5,100p,100p,000000,0,50,0,0,1;7,5,100p,100p,000000,0,50,0,0,1;8,5,100p,100p,000000,0,50,0,0,1\\u0026hybrid_rotate_d=1\\u0026hybrid_biz=popularityRedPacket\\u0026lotteryId=622474&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;user_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token property">&quot;lot_config_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;total_price&quot;</span><span class="token operator">:</span> <span class="token number">1600</span>
		<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;activity_box_info&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,20),o=[e];function r(l,u){return n(),s("div",null,o)}const d=t(p,[["render",r],["__file","redpocket.html.vue"]]);export{d as default};
