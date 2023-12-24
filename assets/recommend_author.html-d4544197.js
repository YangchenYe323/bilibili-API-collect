import{_ as s,o as n,c as a,e as t}from"./app-27622875.js";const p={},e=t(`<h1 id="相簿推荐作者" tabindex="-1"><a class="header-anchor" href="#相簿推荐作者" aria-hidden="true">#</a> 相簿推荐作者</h1><h2 id="获取摄影推荐作者" tabindex="-1"><a class="header-anchor" href="#获取摄影推荐作者" aria-hidden="true">#</a> 获取摄影推荐作者</h2><blockquote><p>https://api.vc.bilibili.com/link_draw/v2/Photo/uper</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>num</td><td>num</td><td>请求数量</td><td>非必要</td><td>默认为6</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>array</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>作者 1</td><td></td></tr><tr><td>n</td><td>obj</td><td>作者 (n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>作者mid</td><td></td></tr><tr><td>head_url</td><td>str</td><td>头像url</td><td></td></tr><tr><td>name</td><td>str</td><td>昵称</td><td></td></tr><tr><td>is_followed</td><td>num</td><td>0</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>请求获取摄影推荐作者，数量为5</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.vc.bilibili.com/link_draw/v2/Photo/uper&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;num=5&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">36974706</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/fa7ef3a5124e2ebfd2094e0bc2f42c752c1abd21.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;幹物小幺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">3223860</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/c5400d25eb7700cd41d88dff5b800bd55ec27cfe.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;您算哪根葱&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">941228</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/f38f000d4df21e9bea96d3573efdf81ae02f4ddf.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;碳酸熊卡&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">2624541</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/86ccd746af8b1e8bfcdd432de7f0ce1e2b2cb8b0.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_一之濑光&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">29963706</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i1.hdslb.com/bfs/face/c054f097f1b882fc6ad8a67d0f0f88e3acd3bc88.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;公子温温温如&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取画友推荐作者" tabindex="-1"><a class="header-anchor" href="#获取画友推荐作者" aria-hidden="true">#</a> 获取画友推荐作者</h2><blockquote><p>https://api.vc.bilibili.com/link_draw/v2/Doc/drawer</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>num</td><td>num</td><td>请求数量</td><td>非必要</td><td>默认为6</td></tr></tbody></table><p><strong>json回复：</strong></p><p>见<a href="#%E8%8E%B7%E5%8F%96%E6%91%84%E5%BD%B1%E6%8E%A8%E8%8D%90%E4%BD%9C%E8%80%85">获取摄影推荐作者</a>中的响应内容</p><p><strong>示例：</strong></p><p>请求获取画友推荐作者，数量为5</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.vc.bilibili.com/link_draw/v2/Doc/drawer&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;num=5&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">7905675</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/d4765fd020e8b96e331861cb4d6a3afde4e70d1d.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我真的是离城&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">20356494</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/face/0686141506894df969832d7dda91f2a0c4cdc24b.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ZM-PANDA&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">4836885</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/48822c5aa7aeae9d3dd2010388baa2b0e1c5cc0a.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;六六子w&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">2575079</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/cb3d6f4fb2fbe5aa85ab8773a1a19cec6d8ff1e1.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;念萦墨葵&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">1904878</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/face/f6de926b3905ec7bb9e36202d80eb931d12f70ac.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fedsnk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_followed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,28),o=[e];function c(l,u){return n(),a("div",null,o)}const d=s(p,[["render",c],["__file","recommend_author.html.vue"]]);export{d as default};
