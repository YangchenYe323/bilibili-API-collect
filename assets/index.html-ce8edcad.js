import{_ as c,r as o,o as l,c as u,a as n,b as a,d as t,w as i,e as s}from"./app-27622875.js";const r={},d=s('<h1 id="grpc-接口定义-protobuf-结构体" tabindex="-1"><a class="header-anchor" href="#grpc-接口定义-protobuf-结构体" aria-hidden="true">#</a> gRPC 接口定义（protobuf 结构体）</h1><p>注：</p><ol><li><p>proto 结构体文件按照包名分类, 同级放在同一目录中</p></li><li><p>gRPC 接口定义全部来自对官方粉版(即大陆版本) APP 的逆向工程, 一般不会有错误, 但是可能有更新, 有实际应用需求的建议自行反编译 APP, 定位到 <code>com.bapis.*</code> 自行补足.</p></li></ol><h2 id="grpc-主机" tabindex="-1"><a class="header-anchor" href="#grpc-主机" aria-hidden="true">#</a> gRPC 主机</h2><p>B 站客户端的 gRPC 接口主机包括:</p><ul><li><code>grpc.biliapi.net</code> 原生 gRPC 接口</li><li><code>app.bilibili.com</code> Failover gRPC 接口</li></ul><p>实际应用中, 后者速度相对更快. 但是需要设置如 gRPC 超时时间等参数时只能使用前者.</p><h2 id="grpc-鉴权" tabindex="-1"><a class="header-anchor" href="#grpc-鉴权" aria-hidden="true">#</a> gRPC 鉴权</h2><p>需要在 Metadata 中添加 <code>authorization</code>: <code>identify_v1 {access_key}</code>.</p><h2 id="grpc-metadata" tabindex="-1"><a class="header-anchor" href="#grpc-metadata" aria-hidden="true">#</a> gRPC Metadata</h2>',10),k={href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"Metadata",-1),b=s("<p>gRPC 的 <code>Metadata</code> 简单理解，就是 HTTP 的 Header 中的 key-value 对, 本质上是一个 Map. 在 gRPC <code>Metadata</code> 中，key 永远是 String，但是 value 可以是 String 也可以是二进制数据. <strong>需要存储二进制数据时, key 应当加上一个 <code>-bin</code> 后缀, 同时二进制 value 应当编码为 Base64</strong>.</p><p>一般而言, 设定 Binary 类型的 <code>Metadata</code> 时, 需要调用各个语言的 gRPC 库的相应方法, 库会帮我们编码二进制数据, 无需我们自行编码.</p><p>需要的 <code>Metadata</code> 包括(但不限于):</p>",3),v=n("code",null,"user-agent",-1),_=n("code",null,"Dalvik/2.1.0 (Linux; U; Android 12; {device_model} Build/{device_build}) {app_ver} os/android model/{device_model} mobi_app/{mobi_app} build/{app_build} channel/master innerVer/{app_build_inner} osVer/12 network/2 grpc-java-cronet/1.36.1",-1),h=n("code",null,"grpc-java-cronet/1.36.1",-1),g=n("strong",null,"必需",-1),f=s("<li><code>device_model</code> 设备 Model, 如 <code>NOH-AN01</code>.</li><li><code>device_build</code> 设备 Build, 如 <code>HUAWEINOH-AN01</code>.</li><li><code>app_ver</code> APP 版本号, 如 <code>7.38.0</code>.</li>",3),y=n("code",null,"mobi_app",-1),w=n("li",null,[n("code",null,"app_build"),a(" APP 版本号, 如 "),n("code",null,"7380300"),a(".")],-1),x=n("li",null,[n("code",null,"app_build_inner"),a(" APP 版本号(内部), 如 "),n("code",null,"7380310"),a(". 实际应用中设置为 "),n("code",null,"app_build"),a(" 即可.")],-1),P=s("<li><code>x-bili-gaia-vtoken</code> 暂时留空.</li><li><code>x-bili-aurora-eid</code> 如 <code>UFUFQ1AA</code>. 算法见附录. 未登录留空. <strong>必需</strong>.</li><li><code>x-bili-mid</code> 用户 UID, 未登录默认为 0. <strong>必需</strong>.</li><li><code>x-bili-aurora-zone</code> 留空. <strong>必需</strong>.</li><li><code>x-bili-trace-id</code> 如 <code>06e903399574695df75be114ff63ac64:f75be114ff63ac64:0:0</code>. 算法见附录. <strong>必需</strong>.</li><li><code>authorization</code> 鉴权, 登录时设定为 <code>identify_v1 {access_key}</code>, 未登录时无需此项.</li>",6),C=n("code",null,"buvid",-1),R=n("strong",null,"必需(?)",-1),A=s("<li><code>bili-http-engine</code> 恒定为 <code>cronet</code>, 使用 <code>grpc.biliapi.net</code> 作为 gRPC 主机时无需此项.</li><li><code>te</code> 恒定为 <code>trailers</code>, Java gRPC 库固定添加, 使用 <code>app.bilibili.com</code> 作为 gRPC 主机时无需此项.</li>",2),V=s('<li>Binary 类 <ul><li><code>x-bili-fawkes-req-bin</code> 设备 Fawkes 信息, 使用 <a href="bilibili/metadata/fawkes/fawkes.proto">FawkesReq</a> 生成. <strong>必需</strong>.</li><li><code>x-bili-metadata-bin</code> 使用 <a href="bilibili/metadata/metadata.proto">Metadata</a> 生成. <strong>必需</strong>.</li><li><code>x-bili-device-bin</code> 设备信息, 使用 <a href="bilibili/metadata/device/device.proto">Device</a> 生成. <strong>必需</strong>.</li><li><code>x-bili-network-bin</code> 设备网络信息, 使用 <a href="bilibili/metadata/network/network.proto">Network</a> 生成. <strong>必需</strong>.</li><li><code>x-bili-restriction-bin</code> 限制信息, 使用 <a href="bilibili/metadata/restriction/restriction.proto">Restriction</a> 生成. 本项一般直接传空值即可. <strong>必需</strong>.</li><li><code>x-bili-locale-bin</code> 设备区域信息, 使用 <a href="bilibili/metadata/locale/locale.proto">Locale</a> 生成. <strong>必需</strong>.</li><li><code>x-bili-exps-bin</code> 使用 <a href="bilibili/metadata/pararbox/pararbox.proto">Exps</a> 生成. 本项一般直接传空值即可. <strong>必需</strong>.</li></ul></li>',1),q=s('<h2 id="接口请求定义" tabindex="-1"><a class="header-anchor" href="#接口请求定义" aria-hidden="true">#</a> 接口请求定义</h2><p>等待补充, 参见 proto 文件注释. 以下仅介绍常用接口:</p><ul><li><a href="bilibili/app/playeronline/v1/playeronline.proto">bilibili.app.playeronline.v1 -&gt; PlayerOnline</a> 视频在线人数接口.</li><li><a href="bilibili/app/playerunite/v1/playerunite.proto">bilibili.app.playerunite.v1 -&gt; PlayViewUnite</a> United 视频播放链接接口(同时适用于 PGC, UGC 视频).</li><li><a href="bilibili/app/playurl/v1/playurl.proto">bilibili.app.playurl.v1 -&gt; PlayURL</a> UGC 视频播放链接接口(V1 版本).</li><li><a href="bilibili/pgc/gateway/player/v1/playurl.proto">bilibili.pgc.gateway.player.v1 -&gt; PlayView</a> PGC 视频播放链接接口(V1 版本).</li><li><a href="bilibili/pgc/gateway/player/v2/playurl.proto">bilibili.pgc.gateway.player.v2 -&gt; PlayView</a> PGC 视频播放链接接口(V2 版本).</li><li><a href="bilibili/polymer/app/search/v1/search.proto">bilibili.polymer.app.search.v1 -&gt; SearchAll, etc</a> 搜索接口(V1 版本).</li><li><a href="bilibili/app/dynamic/v2/dynamic.proto">bilibili.app.dynamic.v2 -&gt; DynAll, etc</a> 动态接口(V2 版本).</li><li>...</li></ul><h2 id="应用示例" tabindex="-1"><a class="header-anchor" href="#应用示例" aria-hidden="true">#</a> 应用示例</h2><h3 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h3>',5),M={href:"https://github.com/XiaoMiku01/bilibili-grpc-api-go",target:"_blank",rel:"noopener noreferrer"},N=s(`<h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h2><details><summary>点此展开</summary><h3 id="x-bili-aurora-eid-生成算法" tabindex="-1"><a class="header-anchor" href="#x-bili-aurora-eid-生成算法" aria-hidden="true">#</a> <code>x-bili-aurora-eid</code> 生成算法</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">gen_aurora_eid</span><span class="token punctuation">(</span>uid<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> uid <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">None</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> result_byte <span class="token operator">=</span> <span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1. 将 UID 字符串转为字节数组.</span>
    <span class="token keyword">let</span> mid_byte <span class="token operator">=</span> uid<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">into_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2. 将字节数组逐位(记为第 i 位)与 b&quot;ad1va46a7lza&quot; 中第 (i % 12) 位进行异或操作, 作为结果数组第 i 位.</span>
    mid_byte<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enumerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">for_each</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
        result_byte<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token string">b&quot;ad1va46a7lza&quot;</span><span class="token punctuation">[</span>i <span class="token operator">%</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3. 对字节数组执行 Base64 编码, 注意 no padding, 即得到 x-bili-aurora-eid.</span>
    <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token namespace">base64<span class="token punctuation">::</span></span><span class="token class-name">Engine</span><span class="token punctuation">::</span><span class="token function">encode</span><span class="token punctuation">(</span>
        <span class="token operator">&amp;</span><span class="token namespace">base64<span class="token punctuation">::</span>engine<span class="token punctuation">::</span>general_purpose<span class="token punctuation">::</span></span><span class="token constant">STANDARD_NO_PAD</span><span class="token punctuation">,</span>
        result_byte<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="x-bili-trace-id-生成算法" tabindex="-1"><a class="header-anchor" href="#x-bili-trace-id-生成算法" aria-hidden="true">#</a> <code>x-bili-trace-id</code> 生成算法</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">gen_trace_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 生成 32 位随机字符串 random_id , Charset 为 0~9, a~z. </span>
    <span class="token keyword">let</span> random_id <span class="token operator">=</span> <span class="token macro property">gen_random_string!</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> random_trace_id <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2. 取 random_id 前 24 位, 作为 random_trace_id.</span>
    random_trace_id<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>random_id<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3. 初始化一个长度为 3 的数组 b_arr, 初始值都为 0.</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> b_arr<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">i8</span><span class="token punctuation">;</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0i8</span><span class="token punctuation">;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 并获取当前时间戳</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> ts <span class="token operator">=</span> <span class="token namespace">chrono<span class="token punctuation">::</span></span><span class="token class-name">Local</span><span class="token punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用循环从高位到低位遍历 b_arr 数组, 循环体内执行以下逻辑:</span>
    <span class="token comment">//  - 首先将 ts 右移 8 位</span>
    <span class="token comment">//  - 然后根据条件向 b_arr 的第 i 位赋值: </span>
    <span class="token comment">//    - 如果 (ts / 128) % 2的结果为0, 则 b_arr[i] = ts % 256</span>
    <span class="token comment">//    - 否则 b_arr[i] = ts % 256 - 256</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ts <span class="token operator">&gt;&gt;=</span> <span class="token number">8</span><span class="token punctuation">;</span>
        b_arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ts <span class="token operator">/</span> <span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token punctuation">(</span>ts <span class="token operator">%</span> <span class="token number">256</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i8</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token punctuation">(</span>ts <span class="token operator">%</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token number">256</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">i8</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 4. 将数组 b_arr 中的每个元素逐个转换为两位的十六进制字符串并追加到 random_trace_id 中.</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token punctuation">{</span>
        random_trace_id<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{:0&gt;2x}&quot;</span><span class="token punctuation">,</span> b_arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 5. 将 random_id 的第 31, 32 个字符追加到 random_trace_id 中, 此时 random_trace_id 生成完毕, 应当为 32 位长度.</span>
    random_trace_id<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>random_id<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">..</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 6. 最后, 按 \`{random_trace_id}:{random_trace_id[16..32]}:0:0\` 的顺序拼接起来, 即为 x-bili-trace-id</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> random_trace_id_final <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">with_capacity</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    random_trace_id_final<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>random_trace_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    random_trace_id_final<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    random_trace_id_final<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>random_trace_id<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">..</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    random_trace_id_final<span class="token punctuation">.</span><span class="token function">push_str</span><span class="token punctuation">(</span><span class="token string">&quot;:0:0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    random_trace_id_final
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2);function U(B,S){const e=o("ExternalLinkIcon"),p=o("RouterLink");return l(),u("div",null,[d,n("p",null,[a("参考 "),n("a",k,[a("gRPC Go 官方文档"),t(e)]),a(" 对 "),m,a(" 的说明.")]),b,n("ul",null,[n("li",null,[a("Ascii 类 "),n("ul",null,[n("li",null,[v,a(" 客户端 UA, 如 "),_,a("(其中 "),h,a(" 为原生 gRPC 接口才需要的). "),g,a(". "),n("ul",null,[f,n("li",null,[y,a(" APP 包类型, 参考 "),t(p,{to:"/docs/misc/sign/APPKey.html"},{default:i(()=>[a("APPKey.md")]),_:1}),a(".")]),w,x])]),P,n("li",null,[C,a(" 设备唯一标识, 算法见 "),t(p,{to:"/docs/misc/device_identity.html"},{default:i(()=>[a("device_identity.md")]),_:1}),a(". "),R,a(".")]),A])]),V]),q,n("p",null,[a("B 站 gRPC API Golang 封装："),n("a",M,[a("XiaoMiku01/bilibili-grpc-api-go"),t(e)])]),N])}const G=c(r,[["render",U],["__file","index.html.vue"]]);export{G as default};
