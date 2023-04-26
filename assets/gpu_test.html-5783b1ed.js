import{_ as n,Y as s,Z as a,a0 as t}from"./framework-c2b1cf81.js";const p={},e=t(`<h1 id="lesson0-gpu性能测试" tabindex="-1"><a class="header-anchor" href="#lesson0-gpu性能测试" aria-hidden="true">#</a> lesson0. GPU性能测试</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">import</span> time

<span class="token keyword">print</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>        <span class="token comment"># 返回pytorch的版本</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment"># 当CUDA可用时返回True</span>

a <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>    <span class="token comment"># 返回10000行1000列的张量矩阵</span>
b <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>     <span class="token comment"># 返回1000行2000列的张量矩阵</span>

t0 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 记录时间</span>
c <span class="token operator">=</span> torch<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>      <span class="token comment"># 矩阵乘法运算</span>
t1 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 记录时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>device<span class="token punctuation">,</span> t1 <span class="token operator">-</span> t0<span class="token punctuation">,</span> c<span class="token punctuation">.</span>norm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># c.norm(2)表示矩阵c的二范数</span>

device <span class="token operator">=</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">&#39;cuda&#39;</span><span class="token punctuation">)</span>       <span class="token comment"># 用GPU来运行</span>
a <span class="token operator">=</span> a<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>
b <span class="token operator">=</span> b<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>

<span class="token comment"># 初次调用GPU，需要数据传送，因此比较慢</span>
t0 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> torch<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
t2 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>device<span class="token punctuation">,</span> t2 <span class="token operator">-</span> t0<span class="token punctuation">,</span> c<span class="token punctuation">.</span>norm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 这才是GPU处理数据的真实运行时间，当数据量越大，GPU的优势越明显</span>
t0 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> torch<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
t2 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>device<span class="token punctuation">,</span> t2 <span class="token operator">-</span> t0<span class="token punctuation">,</span> c<span class="token punctuation">.</span>norm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>1.12.0
True
cuda:0 0.00018405914306640625 tensor(1414297.6250, device=&#39;cuda:0&#39;)
cuda:0 0.00024271011352539062 tensor(1414297.6250, device=&#39;cuda:0&#39;)
</code></pre>`,3),o=[e];function c(u,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","gpu_test.html.vue"]]);export{k as default};
