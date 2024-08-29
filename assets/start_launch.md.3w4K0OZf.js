import{_ as a,a as t,b as s,c as p,d as r,e,f as n,g as i,h as o,i as l,j as d,k as h,l as c,m,n as g,o as _,p as u,q as b,r as f,s as q,t as k,u as P,v as x,w,x as v,y,z as S,A as C,B as F,C as D,D as V,E as T,F as E,G as I,H as z,I as j,J as N,K as B}from"./chunks/9b86eeca8c2204a71096b7531773a2d3b10ba14e4a430eb1430c776125b5187e.BUgGUxfP.js";import{_ as U,c as A,o as $,V as G}from"./chunks/framework.BpLZpJbo.js";const aa=JSON.parse('{"title":"正式使用 SVC Fusion","description":"","frontmatter":{},"headers":[],"relativePath":"start/launch.md","filePath":"start/launch.md"}'),J={name:"start/launch.md"},L=G('<h1 id="正式使用-svc-fusion" tabindex="-1">正式使用 SVC Fusion <a class="header-anchor" href="#正式使用-svc-fusion" aria-label="Permalink to &quot;正式使用 SVC Fusion&quot;">​</a></h1><p><a href="https://www.yuque.com/yuqueyonghux2gzt8/ek7xd3" target="_blank" rel="noreferrer">https://www.yuque.com/yuqueyonghux2gzt8/ek7xd3</a></p><h2 id="_1-下载和部署" tabindex="-1">1：下载和部署 <a class="header-anchor" href="#_1-下载和部署" aria-label="Permalink to &quot;1：下载和部署&quot;">​</a></h2><p>官网：<a href="https://sf.dysjs.com/" target="_blank" rel="noreferrer">https://sf.dysjs.com/</a></p><p><a href="https://sf.dysjs.com/" target="_blank" rel="noreferrer">SVC Fusion 整合包文档</a></p><p>点击链接加入群聊【幻灵的炼丹工坊】：</p><p><a href="https://qm.qq.com/q/9VZmMSQUbm" target="_blank" rel="noreferrer">正在跳转</a></p><p>获取整合包链接后进入网盘下载（目前 Fusion 使用 123 网盘发布）</p><p>下载完成后用 bandizip 或 7zip 进行解压（不要使用 winrar，会出现解压文件损坏的报错）</p><p><a href="https://7-zip.com" target="_blank" rel="noreferrer">7-Zip</a></p><p>解压完成后进入整合包（整合包本体如下）</p><p><img src="'+a+'" alt="image.png"></p><p><strong>文件结构说明</strong></p><table><thead><tr><th>文件夹</th><th>说明</th></tr></thead><tbody><tr><td>exp</td><td>工作目录</td></tr><tr><td>archieve</td><td>训练归档文件夹</td></tr><tr><td>models</td><td>已训练模型文件夹</td></tr><tr><td>dataset_raw</td><td>原始数据集文件夹</td></tr><tr><td>data</td><td>可用于训练的数据集存放位置，完成训练后可删除</td></tr><tr><td>tmp</td><td>数据处理临时文件夹，完成数据处理后可删除</td></tr></tbody></table><h2 id="_2-svc-fusion-启动" tabindex="-1">2：SVC-Fusion，启动！ <a class="header-anchor" href="#_2-svc-fusion-启动" aria-label="Permalink to &quot;2：SVC-Fusion，启动！&quot;">​</a></h2><p>双击启动 WebUI.bat</p><p><img src="'+t+'" alt="启动 WebUI.bat.jpg"></p><p>初次启动可能需要等待一段时间。</p><p>出现提示框后，点击我同意，进入网页。</p><p>此时 cmd 控制台大概是这样的（使用 Fusion 时请勿关闭控制台！）</p><p><img src="'+s+'" alt="image.png"></p><p>浏览器将自动打开网页，如下</p><p><img src="'+p+'" alt="image.png"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>推荐使用 Edge、Chrome 浏览器打开网页，并关闭网页翻译和加速器。</p><p>打开 webui 的过程中可能会出现若干警告，具体请详见文末的常见报错。</p></div><h2 id="_3-预处理" tabindex="-1">3：预处理 <a class="header-anchor" href="#_3-预处理" aria-label="Permalink to &quot;3：预处理&quot;">​</a></h2><p><img src="'+r+'" alt="image.png"></p><h4 id="点击-打开数据集文件夹-进入-dataset-raw-文件夹" tabindex="-1">点击“打开数据集文件夹”进入 dataset_raw 文件夹 <a class="header-anchor" href="#点击-打开数据集文件夹-进入-dataset-raw-文件夹" aria-label="Permalink to &quot;点击“打开数据集文件夹”进入 dataset_raw 文件夹&quot;">​</a></h4><p><img src="'+e+`" alt="image.png"></p><h4 id="将准备好的数据集打包成文件夹放入此处-注意文件结构" tabindex="-1">将准备好的数据集打包成文件夹放入此处，注意文件结构 <a class="header-anchor" href="#将准备好的数据集打包成文件夹放入此处-注意文件结构" aria-label="Permalink to &quot;将准备好的数据集打包成文件夹放入此处，注意文件结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dataset_raw/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>|-你的角色名字 1/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| | 1.wav</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| | 2.wav</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| | 3.wav</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>|-你的角色名字 2/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| | 1.wav</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| | 2.wav</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| | 3.wav</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| ...</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果是单说话人，你的 dataset_raw 文件夹里面应该是这样的</p><p><img src="`+n+'" alt="image.png"></p><p>如果是多说话人，你的 dataset_raw 文件夹里面应该是这样的</p><p><img src="'+i+'" alt="image.png"></p><p>数据集文件夹里应当是这样的</p><p><img src="'+o+'" alt="image.png"></p></div><p>注：数据集命名若包含 <strong>特殊字符或中文</strong> 则 <strong>可能</strong> 在处理时发生报错，可使用未鸟的批量重命名工具进行修正。</p><p>为了能够直观地教学，本次以单说话人进行示范。</p><h4 id="回到网页-选择数据处理-进行预处理" tabindex="-1">回到网页，选择数据处理，进行预处理 <a class="header-anchor" href="#回到网页-选择数据处理-进行预处理" aria-label="Permalink to &quot;回到网页，选择数据处理，进行预处理&quot;">​</a></h4><p><img src="'+l+'" alt="image.png"></p><h5 id="选择需要的算法-算法选择参考前文" tabindex="-1">选择需要的算法（算法选择参考前文）` <a class="header-anchor" href="#选择需要的算法-算法选择参考前文" aria-label="Permalink to &quot;选择需要的算法（算法选择参考前文）`&quot;">​</a></h5><p><img src="'+d+'" alt="image.png"></p><h5 id="若选择-sovits-则另有几个选项-按需勾选-如果不懂不建议乱动" tabindex="-1">若选择 sovits，则另有几个选项，按需勾选（如果不懂不建议乱动） <a class="header-anchor" href="#若选择-sovits-则另有几个选项-按需勾选-如果不懂不建议乱动" aria-label="Permalink to &quot;若选择 sovits，则另有几个选项，按需勾选（如果不懂不建议乱动）&quot;">​</a></h5><p><img src="'+h+'" alt="image.png"></p><h5 id="选择声音编码器-目前仅支持-768" tabindex="-1">选择声音编码器（目前仅支持 768） <a class="header-anchor" href="#选择声音编码器-目前仅支持-768" aria-label="Permalink to &quot;选择声音编码器（目前仅支持 768）&quot;">​</a></h5><p><img src="'+c+'" alt="image.png"></p><p>选择 F0 预处理器（通常为默认）</p><p><img src="'+m+'" alt="image.png"></p><p><img src="'+g+'" alt="image.png"></p><h5 id="选择设备进行训练-ddsp-支持-cpu-计算" tabindex="-1">选择设备进行训练(DDSP 支持 cpu 计算） <a class="header-anchor" href="#选择设备进行训练-ddsp-支持-cpu-计算" aria-label="Permalink to &quot;选择设备进行训练(DDSP 支持 cpu 计算）&quot;">​</a></h5><p><img src="'+_+'" alt="image.png"></p><p><s>此处以入门卡作演示</s></p><p><img src="'+u+'" alt="image.png"></p><h5 id="然后选择用于-reflow-的采样器" tabindex="-1">然后选择用于 reflow 的采样器 <a class="header-anchor" href="#然后选择用于-reflow-的采样器" aria-label="Permalink to &quot;然后选择用于 reflow 的采样器&quot;">​</a></h5><p><img src="'+b+'" alt="image.png"></p><h5 id="选择完成后-点击-提交-进行预处理" tabindex="-1">选择完成后，点击”提交“进行预处理 <a class="header-anchor" href="#选择完成后-点击-提交-进行预处理" aria-label="Permalink to &quot;选择完成后，点击”提交“进行预处理&quot;">​</a></h5><p><img src="'+f+'" alt="image.png"></p><h5 id="预处理完成" tabindex="-1">预处理完成 <a class="header-anchor" href="#预处理完成" aria-label="Permalink to &quot;预处理完成&quot;">​</a></h5><p><img src="'+q+'" alt="image.png"></p><p><img src="'+k+'" alt="image.png"></p><p><strong>注：本教程以 ddsp6.0 为模型，其他算法的预处理/训练/推理界面略有不同，但操作逻辑相似。</strong></p><h2 id="_4-训练" tabindex="-1">4：训练 <a class="header-anchor" href="#_4-训练" aria-label="Permalink to &quot;4：训练&quot;">​</a></h2><h4 id="点击进入训练界面" tabindex="-1">点击进入训练界面 <a class="header-anchor" href="#点击进入训练界面" aria-label="Permalink to &quot;点击进入训练界面&quot;">​</a></h4><p><img src="'+P+'" alt="image.png"></p><h4 id="选择参数-一般为默认参数-默参也能用" tabindex="-1">选择参数（一般为默认参数，默参也能用） <a class="header-anchor" href="#选择参数-一般为默认参数-默参也能用" aria-label="Permalink to &quot;选择参数（一般为默认参数，默参也能用）&quot;">​</a></h4><h5 id="以下为训练参数详解" tabindex="-1">以下为训练参数详解： <a class="header-anchor" href="#以下为训练参数详解" aria-label="Permalink to &quot;以下为训练参数详解：&quot;">​</a></h5><table><thead><tr><th>参数名称</th><th>说明</th></tr></thead><tbody><tr><td>训练批次大小</td><td>batch_size（bs），越大越好，越大越占显存，注意不能超过训练集条数。根据显存酌情调整，一般默认的数值不会爆显存</td></tr><tr><td>训练进程数</td><td>如果你显卡较好，可以设为 0，会提升速度但不影响质量</td></tr><tr><td>训练精度</td><td>默认 fp32（单精度），选择 fp16（半精度）、bf16（混合精度） 可以获得更快的速度和更低的显存占用，但是炸炉概率 up up</td></tr><tr><td>验证间隔</td><td>每 N 步验证一次，同时保存。默认 1000</td></tr><tr><td>日志间隔</td><td>每 N 步输出一次日志。默认 1，建议改为 100，否则报告较为频繁（不影响质量）</td></tr><tr><td>强制保存模型间隔</td><td>每 N 步保存一次模型。默认 1000</td></tr><tr><td>lr 衰减力度</td><td>高级玩法，不建议动</td></tr><tr><td>缓存设备</td><td>选择 cuda 可以获得更快的速度，但是需要更大显存的显卡 (SoVITS 主模型无效)，选择 cpu 则载入内存，减小硬盘 io 压力</td></tr><tr><td>缓存所有数据</td><td>若内存和显存较小则建议关闭，</td></tr><tr><td>最大训练轮数</td><td>默认 100000，不建议动，正常不需要跑这么久</td></tr><tr><td>使用预训练模型</td><td>是否调用底模。勾选可以大幅减少训练时间，如果不懂不要动</td></tr></tbody></table><h5 id="确定参数后点击-提交-开始训练" tabindex="-1"><strong>确定参数后点击“提交”开始训练</strong> <a class="header-anchor" href="#确定参数后点击-提交-开始训练" aria-label="Permalink to &quot;**确定参数后点击“提交”开始训练**&quot;">​</a></h5><p><img src="'+x+'" alt="image.png"></p><p>等待弹出训练 bat</p><p><img src="'+w+'" alt="image.png"></p><p>训练时长与数据集时长、质量、算法、预测器、bs、lr、GPU 相关，因此一般建议每 1000-2000 步（step）停下进行试听。</p><p>Tensorboard 可作为 loss 数值上的参考</p><p><s>训练日子参数和推荐训练步数会在文档 DLC 中发布</s></p><p><strong>注意：不要迷信步数和 loss，无论哪个算法都不是炼的越久越好的！</strong></p><p><img src="'+v+'" alt="CF9E79DF424BB6DE3E9FE7FD6F317486.jpg"></p><p>结束、暂停训练请按停止训练（或直接关闭训练 bat）</p><h2 id="_5-推理" tabindex="-1">5：推理 <a class="header-anchor" href="#_5-推理" aria-label="Permalink to &quot;5：推理&quot;">​</a></h2><h4 id="训练完成并归档后点击推理-来到推理界面" tabindex="-1">训练完成并归档后点击推理，来到推理界面 <a class="header-anchor" href="#训练完成并归档后点击推理-来到推理界面" aria-label="Permalink to &quot;训练完成并归档后点击推理，来到推理界面&quot;">​</a></h4><p><img src="'+y+'" alt="image.png"></p><h5 id="首先选择用于推理的模型" tabindex="-1">首先选择用于推理的模型 <a class="header-anchor" href="#首先选择用于推理的模型" aria-label="Permalink to &quot;首先选择用于推理的模型&quot;">​</a></h5><p><img src="'+S+'" alt="image.png"></p><p><img src="'+C+'" alt="image.png"></p><p>如果模型加载正常，则会显示相应的算法</p><p><img src="'+F+'" alt="image.png"></p><p>接下来选择推理用的设备（优先使用 GPU）</p><p><img src="'+D+'" alt="image.png"></p><h5 id="点击选择模型进行加载" tabindex="-1">点击选择模型进行加载 <a class="header-anchor" href="#点击选择模型进行加载" aria-label="Permalink to &quot;点击选择模型进行加载&quot;">​</a></h5><p><img src="'+V+'" alt="image.png"></p><p>加载成功后会显示说话人</p><p><img src="'+T+'" alt="image.png"></p><h5 id="放入用于转换音色的音频文件-即推理源" tabindex="-1">放入用于转换音色的音频文件（即推理源） <a class="header-anchor" href="#放入用于转换音色的音频文件-即推理源" aria-label="Permalink to &quot;放入用于转换音色的音频文件（即推理源）&quot;">​</a></h5><p><img src="'+E+'" alt="image.png"></p><p>若推理源没有经过人声分离，则需要勾选去除伴奏（可视歌曲情况勾选去除和声）</p><p><img src="'+I+'" alt="image.png"></p><p>接下来选择推理参数</p><p><img src="'+z+'" alt="image.png"></p><p>以下为推理参数详解：</p><table><thead><tr><th>参数名称</th><th>说明</th></tr></thead><tbody><tr><td>f0 提取器</td><td>用于音高提取/预测的模型，一般认为 remove 最均衡，fcpe 更自然（其余选项正在测试中，将在 DLC 中详细述）</td></tr><tr><td>变调</td><td>每 12 为一个八度，参考:女模型转男原声 12，男模型转女原声 -12，因异性声调不同的音色泄露、失真可以调节这个</td></tr><tr><td>切片阈值</td><td>人声切片的阈值，如推理源有底噪可以调为 -40 或更高</td></tr><tr><td>采样器</td><td>用于 reflow 的采样器，一般默认就好（二者差异正在实验中）</td></tr><tr><td>推理步数</td><td>推理步长，一般默认就行</td></tr><tr><td>T Start</td><td>控制 reflow 起点</td></tr><tr><td>共振峰偏移</td><td>值越大声音越细，值越小声音越粗，优先用变调，这个调了很难听</td></tr></tbody></table><p><img src="'+j+'" alt="image.png"></p><p><strong>推理完成</strong></p><p><img src="'+N+'" alt="image.png"></p><p>可以试听推理后的音频，并对参数进行微调</p><p>如果对音频比较满意，可以进行保存</p><p><img src="'+B+'" alt="image.png"></p><p>保存完文件后，可以在其他软件内进行加伴奏、混音、和声等处理</p>',101),W=[L];function Z(H,K,M,O,Q,R){return $(),A("div",null,W)}const ta=U(J,[["render",Z]]);export{aa as __pageData,ta as default};
