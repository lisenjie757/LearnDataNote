import{_ as r,Y as o,Z as n,$ as e,a1 as a,a2 as i,a0 as s,D as c}from"./framework-c2b1cf81.js";const l={},d=e("h1",{id:"_1-【经典综述】模型压缩和硬件加速综述-论文精读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-【经典综述】模型压缩和硬件加速综述-论文精读","aria-hidden":"true"},"#"),a(" 1.【经典综述】模型压缩和硬件加速综述 论文精读")],-1),p={href:"https://ieeexplore.ieee.org/abstract/document/9043731",target:"_blank",rel:"noopener noreferrer"},_=s('<h2 id="_0-核心总结" tabindex="-1"><a class="header-anchor" href="#_0-核心总结" aria-hidden="true">#</a> 0. 核心总结</h2><p>核心是提出了一种<strong>残差结构</strong>，极好地解决了网络精度随着深度的增加而下降的问题，使得可以通过堆叠层数的方式来提升精度。</p><h2 id="_0-摘要" tabindex="-1"><a class="header-anchor" href="#_0-摘要" aria-hidden="true">#</a> 0. 摘要</h2><p>本文回顾了几种主流的压缩方法，如<strong>紧凑模型</strong>（Compact Model）、<strong>张量分解</strong>（Tensor Decomposition）、<strong>数据量化</strong>（Data Quantization）和<strong>网络稀疏化</strong>（Network Sparsification），并对它们的压缩原理、评价指标、敏感性分析和联合使用进行了说明。</p><p>然后，本文回答了如何在神经网络加速器设计中利用这些方法的问题，并展示了最先进的硬件架构。</p><p>最后，本文讨论了公平比较、测试工作量、自动压缩、对安全性的影响和对框架/硬件层面的支持性等几个现存的问题，并阐述了该领域的研究热点和可能面临的挑战。</p><p>本文的目的是使读者快速构建起神经网络压缩和加速的大图景，清晰地评价各种方法，并为初步的研究提供指引。</p><h2 id="_1-引言" tabindex="-1"><a class="header-anchor" href="#_1-引言" aria-hidden="true">#</a> 1. 引言</h2><p>虽然现在具备高并行处理能力和高内存带宽的GPU很强大，但是它们的功耗和面积却很大，因此在移动设备上使用它们是不现实的，所以人们对能将DNN部署到对资源和能源受限的边缘设备的高效AI的兴趣越来越大。</p><p>算法与硬件的交互是神经网络压缩领域的趋势，如下图所示：</p><figure><img src="https://i.imgur.com/MVq5NCC.png" alt="DNN压缩和加速概览图" tabindex="0" loading="lazy"><figcaption>DNN压缩和加速概览图</figcaption></figure><p>在算法侧，近些年各式各样的算法被提出，但可以归类为以下4类:</p><ol><li>紧凑模型（Compact Model）：通过设计更紧凑的网络结构来减少参数量和计算量，如MobileNet、ShuffleNet、SqueezeNet等。</li><li>张量分解（Tensor Decomposition）：通过张量分解来减少参数量和计算量，如CP分解、Tucker分解、TT分解等。</li><li>数据量化（Data Quantization）：通过量化权重和激活值来减少参数量和计算量，如INT8、INT4、INT2、二值网络等。</li><li>网络稀疏化（Network Sparsification）：通过稀疏化权重和激活值来减少参数量和计算量，如剪枝、稀疏矩阵、稀疏矩阵分解等。</li></ol><p>在硬件侧，许多新型的DNN加速器被提出，如TPU、EIE、Eyeriss、DaDianNao等，在这些新型的DNN加速器的设计中，区别于传统加速器只优化硬件结构，它们以一定的精度损失为代价，考虑了多种压缩技术。高层次的算法优化为设计更高效的硬件提供指导，低层次的硬件设计为设计更有效的算法提供反馈，这就是<strong>算法-硬件协同设计</strong>。这种协同设计在现代DNN加速器的设计中无处不在，以提高性能。</p><p>本文的所有内容总结于下表，我们的解读文章也按表中所列的章节序号进行章节编排。</p><figure><img src="https://i.imgur.com/Nw36Rnw.png" alt="文章内容导引" tabindex="0" loading="lazy"><figcaption>文章内容导引</figcaption></figure><h2 id="_2-神经网络的简要预备知识" tabindex="-1"><a class="header-anchor" href="#_2-神经网络的简要预备知识" aria-hidden="true">#</a> 2. 神经网络的简要预备知识</h2>',17);function h(g,N){const t=c("ExternalLinkIcon");return o(),n("div",null,[d,e("blockquote",null,[e("p",null,[a("原文链接："),e("a",p,[a("Model Compression and Hardware Acceleration for Neural Networks: A Comprehensive Survey"),i(t)])])]),_])}const u=r(l,[["render",h],["__file","1. 模型压缩和硬件加速综述.html.vue"]]);export{u as default};
