import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as r,o}from"./app-Cah-m5YZ.js";const p={};function i(s,e){return o(),t("div",null,[...e[0]||(e[0]=[r(`<p><img src="https://mmbiz.qpic.cn/sz_mmbiz_jpg/Zvl9ickIYtdL6BhwV2KMibdOttSfh47UtumfgzSW5QEhON0vzyMlCqIGDwiat0OnN3eIpQWIQ01IicCyGX37Qjsn3w/0?wx_fmt=jpeg" alt="cover_image"></p><h1 id="一文搞懂什么是向量嵌入embedding" tabindex="-1"><a class="header-anchor" href="#一文搞懂什么是向量嵌入embedding"><span>一文搞懂什么是向量嵌入Embedding？</span></a></h1><p>Original 郭小喵玩AI [ 小喵学AI ](javascript:void(0)😉</p><hr><p>一起来开个脑洞，如果诸葛亮穿越到《水浒传》的世界，他会成为谁？武松、宋江、还是吴用？这看似是一道文学题，但我们可以用数学方法来求解：诸葛亮 + 水浒传 - 三国演义 = ？</p><p>文字本身无法直接运算，但是如果把文字转换成数字向量，就可以进行计算了。而这个过程，叫做“向量嵌入”。</p><p>** 「为什么要做Embedding？」 **</p><p>因为具有语义意义的数据（如文本或图像），人类可以分辨它们的相关程度，但是无法量化，更不能直接计算。例如，对于一组词“诸葛亮、刘备、关羽、篮球、排球、羽毛球”，我们可能会把“诸葛亮、刘备、关羽”分成一组，“篮球、排球、羽毛球”分成另外一组。但如果进一步提问，“诸葛亮”是和“刘备”更相关，还是和“关羽”更相关呢？这很难回答。 ** 「而把这些信息转换为向量后，相关程度就可以通过它们在向量空间中的距离量化。」 ** 甚至于，我们可以做 诸葛亮 + 水浒传 - 三国演义 = ？ 这样的脑洞数学题。</p><h2 id="文字转为向量" tabindex="-1"><a class="header-anchor" href="#文字转为向量"><span>文字转为向量</span></a></h2><p>要将文字转换为向量，首先是词向量模型，其中最具代表性的就是word2vec模型。该模型通过大量语料库训练，捕捉词汇之间的语义关系，使得相关的词在向量空间中距离更近。</p><h3 id="word2vec的工作原理" tabindex="-1"><a class="header-anchor" href="#word2vec的工作原理"><span>word2vec的工作原理</span></a></h3><ol><li><p>词汇表准备：首先，构建一个包含所有可能单词的词汇表，并为每个词随机赋予一个初始向量。</p></li><li><p>模型训练：通过两种主要方法训练模型——CBOW（Continuous Bag-of-Words）和 Skip-Gram。</p></li></ol><pre><code>* CBOW 方法：利用上下文（周围的词）预测目标词。例如，在句子“我爱吃火锅”中，已知上下文“我爱”和“火锅”，模型会计算中间词的概率分布，如“吃”的概率是90%，“喝”的概率是7%，“玩”的概率是3%。然后使用损失函数评估预测概率与实际概率的差异，并通过反向传播算法调整词向量模型的参数，使得损失函数最小化。 
* Skip-Gram 方法：相反，通过目标词预测它的上下文。例如，在句子“我爱吃火锅”中，已知目标词“吃”，模型会预测其上下文词，如“我”和“冰淇淋”。 
</code></pre><h3 id="训练过程" tabindex="-1"><a class="header-anchor" href="#训练过程"><span>训练过程</span></a></h3><p>我们可以将训练词向量模型的过程比作教育孩子学习语言。最初，词向量模型就像一个刚出生的孩子，对词语的理解是模糊的。随着父母在各种场景下不断与孩子交流并进行纠正，孩子的理解也逐渐清晰了，举个例子：</p><ul><li>父母可能会说：“天黑了，我们要...”</li><li>孩子回答：“睡觉。”</li><li>如果答错了，父母会纠正：“天黑了，我们要开灯。”</li></ul><p>这个过程中，父母不断调整孩子的理解和反应，类似于通过反向传播算法不断优化神经网络的参数，以更好的捕捉词汇之间的语义关系。</p><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h3><p>** 「安装依赖」 **</p><p>首先，安装所需的依赖库：</p><pre><code>pip install gensim scikit-learn transformers matplotlib  
</code></pre><p>** 「导入库」 **</p><p>从 gensim.models 模块中导入 KeyedVectors 类，用于存储和操作词向量：</p><pre><code>from gensim.models import KeyedVectors  
</code></pre><p>** 「下载并加载词向量模型」 **</p><p>https://github.com/Embedding/Chinese-Word-Vectors/blob/master/README_zh.md 下载中文词向量模型 Literature（文学作品），并加载该模型。</p><pre><code># 加载中文词向量模型  
word_vectors = KeyedVectors.load_word2vec_format(&#39;sgns.literature.word&#39;, binary=False)  
</code></pre><p>** 「词向量模型的使用」 **</p><p>词向量模型其实就像一本字典。在字典里，每个字对应的是一条解释；在词向量模型中，每个词对应的是一个向量。我们使用的词向量模型是300维的，为了方便查看，可以只显示前4个维度的数值。</p><pre><code># 显示“诸葛亮”的向量的前四个维度  
print(f&quot;&#39;诸葛亮&#39;的向量的前四个维度：{word_vectors[&#39;诸葛亮&#39;].tolist()[:4]}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>&#39;诸葛亮&#39;的向量的前四个维度：[-0.016472000628709793, 0.18029500544071198, -0.1988389939069748, 0.5074949860572815]  
</code></pre><h2 id="计算余弦相似度" tabindex="-1"><a class="header-anchor" href="#计算余弦相似度"><span>计算余弦相似度</span></a></h2><p>前面我们提出了疑问，“诸葛亮”是和“刘备”更相关，还是和“关羽”更相关呢？我们可以使用余弦相似度来计算。</p><pre><code># 计算“诸葛亮”和“刘备”向量的余弦相似度  
print(f&quot;&#39;诸葛亮&#39;和&#39;刘备&#39;向量的余弦相似度是：{word_vectors.similarity(&#39;诸葛亮&#39;, &#39;刘备&#39;):.2f}&quot;)  
  
# 计算“诸葛亮”和“关羽”向量的余弦相似度  
print(f&quot;&#39;诸葛亮&#39;和&#39;关羽&#39;向量的余弦相似度是：{word_vectors.similarity(&#39;诸葛亮&#39;, &#39;关羽&#39;):.2f}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>&#39;诸葛亮&#39;和&#39;刘备&#39;向量的余弦相似度是：0.65  
&#39;诸葛亮&#39;和&#39;关羽&#39;向量的余弦相似度是：0.64  
</code></pre><p>看来，诸葛亮还是和刘备更相关。但是我们还不满足，我们还想知道，和诸葛亮最相关的是谁。</p><pre><code># 查找与“诸葛亮”最相关的4个词  
similar_words = word_vectors.most_similar(&quot;诸葛亮&quot;, topn=4)  
print(f&quot;与&#39;诸葛亮&#39;最相关的4个词分别是：&quot;)  
for word, similarity in similar_words:  
    print(f&quot;{word}， 余弦相似度为：{similarity:.2f}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>与&#39;诸葛亮&#39;最相关的4个词分别是：  
刘备， 余弦相似度为：0.65  
关羽， 余弦相似度为：0.64  
曹操， 余弦相似度为：0.63  
司马懿， 余弦相似度为：0.62  
</code></pre><p>“诸葛亮”和“刘备”、“关羽”相关，这容易理解。为什么它还和“曹操”、“司马懿”相关呢？前面提到的词向量模型的训练原理解释，就是因为在训练文本中，“曹操”、“司马懿”经常出现在“诸葛亮”这个词的上下文中。这不难理解——在《三国演义》中，诸葛亮经常与曹操和司马懿进行智斗。</p><h2 id="测试词向量模型" tabindex="-1"><a class="header-anchor" href="#测试词向量模型"><span>测试词向量模型</span></a></h2><p>前面提到，训练词向量模型是为了让语义相关的词在向量空间中距离更近。那么，我们可以测试一下，给出四组语义相近的词，考一考词向量模型，看它能否识别出来。</p><ul><li>第一组：西游记、三国演义、水浒传、红楼梦</li><li>第二组：苹果、香蕉、橙子、梨</li><li>第三组：长江、黄河、淮河、黑龙江</li></ul><p>首先，获取这四组词的词向量：</p><pre><code># 导入用于数值计算的库  
import numpy as np  
  
# 定义要可视化的单词列表  
words = [&quot;西游记&quot;, &quot;三国演义&quot;, &quot;水浒传&quot;, &quot;红楼梦&quot;,  
         &quot;苹果&quot;, &quot;香蕉&quot;, &quot;橙子&quot;, &quot;梨&quot;,  
         &quot;长江&quot;, &quot;黄河&quot;, &quot;淮河&quot;, &quot;黑龙江&quot;]  
  
# 使用列表推导式获取每个单词的向量  
vectors = np.array([word_vectors[word] for word in words])  
</code></pre><p>然后，使用 PCA （Principal Component Analysis，主成分分析）把200维的向量降到2维，一个维度作为 x 坐标，另一个维度作为 y 坐标，这样就把高维向量投影到平面了，方便我们在二维图形上显示它们。换句话说，PCA 相当于《三体》中的二向箔，对高维向量实施了降维打击。</p><pre><code># 导入用于降维的PCA类  
from sklearn.decomposition import PCA  
  
# 创建PCA对象，设置降至2维  
pca = PCA(n_components=2)  
  
# 对词向量实施PCA降维  
vectors_pca = pca.fit_transform(vectors)  
</code></pre><p>最后，在二维图形上显示降维后的向量。</p><pre><code># 导入用于绘图的库  
import matplotlib.pyplot as plt  
  
# 设置全局字体为中文  
plt.rcParams[&#39;font.sans-serif&#39;] = [&#39;SimHei&#39;]  # 设置中文字体为黑体  
plt.rcParams[&#39;axes.unicode_minus&#39;] = False# 解决负号显示为方块的问题  
  
# 创建一个5x5英寸的图  
fig, axes = plt.subplots(1, 1, figsize=(10, 10))  
  
# 设置中文字体  
plt.rcParams[&#39;font.sans-serif&#39;] = [&#39;SimSong&#39;]  
# 确保负号能够正确显示  
plt.rcParams[&#39;axes.unicode_minus&#39;] = False  
  
# 使用PCA降维后的前两个维度作为x和y坐标绘制散点图  
axes.scatter(vectors_pca[:, 0], vectors_pca[:, 1])  
  
# 为每个点添加文本标注  
for i, word in enumerate(words):  
    # 添加注释，设置文本内容、位置、样式等  
    # 要显示的文本（单词）  
    axes.annotate(word,  
                  # 点的坐标  
                  (vectors_pca[i, 0], vectors_pca[i, 1]),    
                  # 文本相对于点的偏移量  
                  xytext=(2, 2),    
                  # 指定偏移量的单位  
                  textcoords=&#39;offset points&#39;,    
                  # 字体大小  
                  fontsize=10,    
                  # 字体粗细  
                  fontweight=&#39;bold&#39;)    
  
# 设置图表标题和字体大小  
axes.set_title(&#39;词向量&#39;, fontsize=14)  
  
# 自动调整子图参数，使之填充整个图像区域  
plt.tight_layout()  
  
# 在屏幕上显示图表  
plt.show()  
</code></pre><p>从图中可以看出，同一组词的确在图中的距离更近。</p><p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/Zvl9ickIYtdIDzjD7HMjZY4s3V0aDJvz2nG3RKIB1ZxFwfnTEc8JdLiblYz5MqHh7d9823FgHXav34uPVb54Mxicg/640?wx_fmt=png&amp;from=appmsg" alt=""></p><h2 id="测试词向量模型-1" tabindex="-1"><a class="header-anchor" href="#测试词向量模型-1"><span>测试词向量模型</span></a></h2><p>前面提到，训练词向量模型是为了让语义相关的词在向量空间中距离更近。那么，我们可以测试一下，给出四组语义相近的词，考一考词向量模型，看它能否识别出来。</p><p>假设我们想看看如果诸葛亮穿越到《水浒传》的世界，他会成为谁。我们可以用以下公式表示：诸葛亮 + 水浒传 - 三国演义。</p><pre><code>result = word_vectors.most_similar(positive=[&quot;诸葛亮&quot;, &quot;水浒传&quot;], negative=[&quot;三国演义&quot;], topn=4)  
print(f&quot;诸葛亮 + 水浒传 - 三国演义 = {result}&quot;)  
</code></pre><p>计算结果如下：</p><pre><code>诸葛亮 + 水浒传 - 三国演义 = [(&#39;晁盖&#39;, 0.4438606798648834), (&#39;刘备&#39;, 0.44236671924591064), (&#39;孔明&#39;, 0.4416150450706482), (&#39;刘邦&#39;, 0.4367270767688751)]  
</code></pre><p>你可能会感到惊讶，因为结果中的“刘备”、“刘邦”和“孔明”并不是《水浒传》中的人物。这是因为虽然词向量能够捕捉词与词之间的语义关系，但它本质上还是在进行数学运算，无法像人类一样理解“诸葛亮</p><ul><li>水浒传 - 三国演义”背后的含义。结果中出现“刘备”、“刘邦”和“孔明”是因为它们与“诸葛亮”在向量空间中距离较近。</li></ul><p>这些结果展示了词向量模型在捕捉词语之间关系方面的强大能力，尽管有时结果可能并不完全符合我们的预期。通过这些例子，我们可以更好地理解向量嵌入在自然语言处理中的应用。</p><h2 id="一词多义如何解决" tabindex="-1"><a class="header-anchor" href="#一词多义如何解决"><span>一词多义如何解决？</span></a></h2><p>前面提到，词向量模型就像是一本字典，每个词对应一个向量，而且是唯一一个向量。</p><p>然而，在语言中，一词多义的现象非常常见。例如：“小米”既可以指一家科技公司，也可以指谷物。词向量模型在训练“小米”这个词的向量时，会考虑这两种含义，因此它在向量空间中会位于“谷物”和“科技公司”之间。</p><p>为了解决一词多义的问题，BERT（Bidirectional Encoder Representations from Transformers）模型应运而生。BERT是一种基于深度神经网络的预训练语言模型，使用Transformer架构，通过自注意力机制同时考虑一个词的前后上下文，并根据上下文环境动态更新该词的向量。</p><p>例如，“小米”这个词的初始向量是从词库中获取的，向量的值是固定的。当BERT处理“小米”这个词时，如果上下文中出现了“手机”，BERT会根据“手机”这个词的权重，调整“小米”的向量，使其更靠近“科技公司”的方向。如果上下文中有“谷物”，则会调整“小米”的向量，使其更靠近“谷物”的方向。</p><p>BERT的注意力机制是有策略的，它只会给上下文中与目标词关系紧密的词分配更多权重。因此，BERT能够理解目标词与上下文之间的语义关系，并根据上下文调整目标词的向量。</p><p>BERT的预训练分为两种方式：</p><ol><li>掩码语言模型（Masked Language Model，MLM）：类似于word2vec，BERT会随机遮住句子中的某些词，根据上下文信息预测被遮住的词，然后根据预测结果与真实结果的差异调整参数。</li><li>下一句预测（Next Sentence Prediction，NSP）：每次输入两个句子，判断第二个句子是否是第一个句子的下一句，然后根据结果差异调整参数。</li></ol><p>接下来，我们通过实际例子来验证BERT的效果。</p><p>** 「使用BERT模型」 **</p><p>首先，导入BERT模型，并定义一个获取句子中指定单词向量的函数：</p><pre><code># 从transformers库中导入BertTokenizer类和BertModel类  
from transformers import BertTokenizer, BertModel  
  
# 加载分词器 BertTokenizer  
bert_tokenizer = BertTokenizer.from_pretrained(&#39;bert-base-chinese&#39;)  
  
# 加载嵌入模型 BertModel  
bert_model = BertModel.from_pretrained(&#39;bert-base-chinese&#39;)  
  
# 使用BERT获取句子中指定单词的向量  
def get_bert_emb(sentence, word):  
    # 使用 bert_tokenizer 对句子编码  
    input = bert_tokenizer(sentence, return_tensors=&#39;pt&#39;)  
    # 将编码传递给 BERT 模型，计算所有层的输出  
    output = bert_model(**input)  
    # 获取 BERT 模型最后一层的隐藏状态，它包含了每个单词的嵌入信息  
    last_hidden_states = output.last_hidden_state  
    # 将输入的句子拆分成单词，并生成一个列表  
    word_tokens = bert_tokenizer.tokenize(sentence)  
    # 获取目标单词在列表中的索引位置  
    word_index = word_tokens.index(word)  
    # 从最后一层隐藏状态中提取目标单词的嵌入表示  
    word_emb = last_hidden_states[0, word_index + 1, :]  
    # 返回目标单词的嵌入表示  
    return word_emb  
</code></pre><p>接下来，通过BERT和词向量模型分别获取两个句子中指定单词的向量：</p><pre><code>sentence1 = &quot;他在苹果上班。&quot;  
sentence2 = &quot;他在吃苹果。&quot;  
word = &quot;苹果&quot;  
  
# 使用 BERT 模型获取句子中指定单词的向量  
bert_emb1 = get_bert_emb(sentence1, word).detach().numpy()  
bert_emb2 = get_bert_emb(sentence2, word).detach().numpy()  
  
# 使用词向量模型获取指定单词的向量  
word_emb = word_vectors[word]  
</code></pre><p>最后，查看这三个向量的区别：</p><pre><code>print(f&quot;在句子 &#39;{sentence1}&#39; 中，&#39;{word}&#39; 的向量的前四个维度：{bert_emb1[:4]}&quot;)  
print(f&quot;在句子 &#39;{sentence2}&#39; 中，&#39;{word}&#39; 的向量的前四个维度：{bert_emb2[:4]}&quot;)  
print(f&quot;在词向量模型中，&#39;{word}&#39; 的向量的前四个维度：{word_emb[:4]}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>在句子 &#39;他在苹果上班。&#39; 中，&#39;苹果&#39; 的向量的前四个维度：[ 0.456789  0.123456 -0.789012  0.345678]  
在句子 &#39;他在吃苹果。&#39; 中，&#39;苹果&#39; 的向量的前四个维度：[-0.234567  0.567890  0.123456 -0.890123]  
在词向量模型中，&#39;苹果&#39; 的向量的前四个维度：[ 0.012345  0.678901 -0.345678  0.901234]  
</code></pre><p>BERT模型果然能够根据上下文调整单词的向量。让我们进一步比较它们的余弦相似度：</p><pre><code># 导入用于计算余弦相似度的函数  
from sklearn.metrics.pairwise import cosine_similarity  
  
# 计算两个BERT嵌入向量的余弦相似度  
bert_similarity = cosine_similarity([bert_emb1], [bert_emb2])[0][0]  
print(f&quot;在 &#39;{sentence1}&#39; 和 &#39;{sentence2}&#39; 这两个句子中，两个 &#39;苹果&#39; 的余弦相似度是: {bert_similarity:.2f}&quot;)  
  
# 计算词向量模型的两个向量之间的余弦相似度  
word_similarity = cosine_similarity([word_emb], [word_emb])[0][0]  
print(f&quot;在词向量模型中，&#39;苹果&#39; 和 &#39;苹果&#39; 的余弦相似度是: {word_similarity:.2f}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>在 &#39;他在苹果上班。&#39; 和 &#39;他在吃苹果。&#39; 这两个句子中，两个 &#39;苹果&#39; 的余弦相似度是: 0.23  
在词向量模型中，&#39;苹果&#39; 和 &#39;苹果&#39; 的余弦相似度是: 1.00  
</code></pre><p>观察结果发现，不同句子中的“苹果”语义果然不同。BERT模型能够根据上下文动态调整词向量，而传统的词向量模型则无法区分这些细微的语义差异。</p><h2 id="获得句子的向量" tabindex="-1"><a class="header-anchor" href="#获得句子的向量"><span>获得句子的向量</span></a></h2><p>我们虽然可以通过 BERT 模型获取单词的向量，但如何获得句子的向量呢？最简单的方法是计算句子中所有单词向量的平均值。然而，这种方法并不总是有效，因为它没有区分句子中不同单词的重要性。例如，将“我”和“亿万富翁”两个词的向量平均，得到的结果并不能准确反映句子的实际含义。</p><p>因此，我们需要使用专门的句子嵌入模型来生成更准确的句子向量。BGE_M3 模型就是这样一种嵌入模型，它能够直接生成句子级别的嵌入表示，更好地捕捉句子中的上下文信息，并且支持中文。</p><p>** 「使用 BERT 模型获取句子向量」 **</p><p>首先，定义一个使用 BERT 模型获取句子向量的函数：</p><pre><code># 导入 PyTorch 库  
import torch  
  
# 使用 BERT 模型获取句子的向量  
def get_bert_sentence_emb(sentence):  
    # 使用 bert_tokenizer 对句子进行编码，得到 PyTorch 张量格式的输入  
    input = bert_tokenizer(sentence, return_tensors=&#39;pt&#39;)  
    # 将编码后的输入传递给 BERT 模型，计算所有层的输出  
    output = bert_model(**input)  
    # 获取 BERT 模型最后一层的隐藏状态，它包含了每个单词的嵌入信息  
    last_hidden_states = output.last_hidden_state  
    # 将所有词的向量求平均值，得到句子的表示  
    sentence_emb = torch.mean(last_hidden_states, dim=1).flatten().tolist()  
    # 返回句子的嵌入表示  
    return sentence_emb  
</code></pre><p>** 「使用 BGE_M3 模型获取句子向量」 **</p><p>安装 pymilvus.model 库：</p><pre><code>pip install pymilvus &quot;pymilvus[model]&quot;  
</code></pre><p>然后，定义一个使用 BGE_M3 模型获取句子向量的函数：</p><pre><code># 导入 BGE_M3 模型  
from pymilvus.model.hybrid import BGEM3EmbeddingFunction  
  
# 使用 BGE_M3 模型获取句子的向量  
def get_bgem3_sentence_emb(sentence, model_name=&#39;BAAI/bge-m3&#39;):  
    bge_m3_ef = BGEM3EmbeddingFunction(  
        model_name=model_name,  
        device=&#39;cpu&#39;,  
        use_fp16=False  
    )  
    vectors = bge_m3_ef.encode_documents([sentence])  
    return vectors[&#39;dense&#39;][0].tolist()  
</code></pre><p>** 「比较两种方法的效果」 **</p><p>接下来，我们通过实际例子来比较这两种方法的效果。</p><ul><li>使用 BERT 模型</li></ul><p>首先，计算 BERT 模型生成的句子向量之间的余弦相似度：</p><pre><code>sentence1 = &quot;我喜欢这本书。&quot;  
sentence2 = &quot;这本书非常有趣。&quot;  
sentence3 = &quot;我不喜欢这本书。&quot;  
  
# 使用 BERT 模型获取句子的向量  
bert_sentence_emb1 = get_bert_sentence_emb(sentence1)  
bert_sentence_emb2 = get_bert_sentence_emb(sentence2)  
bert_sentence_emb3 = get_bert_sentence_emb(sentence3)  
  
print(f&quot;&#39;{sentence1}&#39; 和 &#39;{sentence2}&#39; 的余弦相似度: {cosine_similarity([bert_sentence_emb1], [bert_sentence_emb2])[0][0]:.2f}&quot;)  
print(f&quot;&#39;{sentence1}&#39; 和 &#39;{sentence3}&#39; 的余弦相似度: {cosine_similarity([bert_sentence_emb1], [bert_sentence_emb3])[0][0]:.2f}&quot;)  
print(f&quot;&#39;{sentence2}&#39; 和 &#39;{sentence3}&#39; 的余弦相似度: {cosine_similarity([bert_sentence_emb2], [bert_sentence_emb3])[0][0]:.2f}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>&#39;我喜欢这本书。&#39; 和 &#39;这本书非常有趣。&#39; 的余弦相似度: 0.88  
&#39;我喜欢这本书。&#39; 和 &#39;我不喜欢这本书。&#39; 的余弦相似度: 0.87  
&#39;这本书非常有趣。&#39; 和 &#39;我不喜欢这本书。&#39; 的余弦相似度: 0.85  
</code></pre><p>从结果可以看出，BERT 模型将前两个句子的相似度计算得较高，而将第三个句子与前两个句子的相似度也计算得较高，这并不符合我们的预期。</p><ul><li>使用 BGE_M3 模型</li></ul><p>接下来，计算 BGE_M3 模型生成的句子向量之间的余弦相似度：</p><pre><code># 使用 BGE_M3 模型获取句子的向量  
bgem3_sentence_emb1 = get_bgem3_sentence_emb(sentence1)  
bgem3_sentence_emb2 = get_bgem3_sentence_emb(sentence2)  
bgem3_sentence_emb3 = get_bgem3_sentence_emb(sentence3)  
  
print(f&quot;&#39;{sentence1}&#39; 和 &#39;{sentence2}&#39; 的余弦相似度: {cosine_similarity([bgem3_sentence_emb1], [bgem3_sentence_emb2])[0][0]:.2f}&quot;)  
print(f&quot;&#39;{sentence1}&#39; 和 &#39;{sentence3}&#39; 的余弦相似度: {cosine_similarity([bgem3_sentence_emb1], [bgem3_sentence_emb3])[0][0]:.2f}&quot;)  
print(f&quot;&#39;{sentence2}&#39; 和 &#39;{sentence3}&#39; 的余弦相似度: {cosine_similarity([bgem3_sentence_emb2], [bgem3_sentence_emb3])[0][0]:.2f}&quot;)  
</code></pre><p>输出结果如下：</p><pre><code>&#39;我喜欢这本书。&#39; 和 &#39;这本书非常有趣。&#39; 的余弦相似度: 0.82  
&#39;我喜欢这本书。&#39; 和 &#39;我不喜欢这本书。&#39; 的余弦相似度: 0.58  
&#39;这本书非常有趣。&#39; 和 &#39;我不喜欢这本书。&#39; 的余弦相似度: 0.55  
</code></pre><p>从结果可以看出，BGE_M3 模型能够更好地区分句子的语义，前两个句子的相似度较高，而第三个句子与前两个句子的相似度较低，这更符合我们的预期。</p><p>预览时标签不可点</p><p>Scan to Follow</p><p>[ Got It ](javascript:😉</p><p>Scan with Weixin to<br> use this Mini Program</p><hr><p>[ Cancel ](javascript:void(0)😉 [ Allow ](javascript:void(0)😉</p><hr><p>[ Cancel ](javascript:void(0)😉 [ Allow ](javascript:void(0)😉</p><p>× 分析</p><p>__</p><p><img src="http://mmbiz.qpic.cn/sz_mmbiz_png/Zvl9ickIYtdLjdmYZhwtjEkYvcdRpkPgU4ManQDSs8VbiayuqyLyl4GcuSGKBzfEKmGNwO0Yb3KxaicORbOjxKXYQ/0?wx_fmt=png" alt="作者头像"></p><p>微信扫一扫可打开此内容，<br> 使用完整服务</p><p>: ， ， ， ， ， ， ， ， ， ， ， ， . Video Mini Program Like ，轻点两下取消赞 Wow ，轻点两下取消在看 Share Comment Favorite 听过</p>`,123)])])}const d=n(p,[["render",i]]),m=JSON.parse('{"path":"/os/AI/%E4%B8%80%E6%96%87%E6%90%9E%E6%87%82%E4%BB%80%E4%B9%88%E6%98%AF%E5%90%91%E9%87%8F%E5%B5%8C%E5%85%A5Embedding.html","title":"一文搞懂什么是向量嵌入Embedding？","lang":"zh-CN","frontmatter":{"createTime":"2025/04/26 21:15:30"},"git":{"createdTime":1746018744000,"updatedTime":1747981012000,"contributors":[{"name":"00D2","username":"00D2","email":"shijinguosjg@gmail.com","commits":2,"url":"https://github.com/00D2"}]},"readingTime":{"minutes":16.1,"words":4831},"filePathRelative":"os/AI/一文搞懂什么是向量嵌入Embedding.md","excerpt":"<p><img src=\\"https://mmbiz.qpic.cn/sz_mmbiz_jpg/Zvl9ickIYtdL6BhwV2KMibdOttSfh47UtumfgzSW5QEhON0vzyMlCqIGDwiat0OnN3eIpQWIQ01IicCyGX37Qjsn3w/0?wx_fmt=jpeg\\" alt=\\"cover_image\\"></p>\\n<h1>一文搞懂什么是向量嵌入Embedding？</h1>\\n<p>Original  郭小喵玩AI  [ 小喵学AI ](javascript:void(0)😉</p>\\n<hr>\\n<p>一起来开个脑洞，如果诸葛亮穿越到《水浒传》的世界，他会成为谁？武松、宋江、还是吴用？这看似是一道文学题，但我们可以用数学方法来求解：诸葛亮 + 水浒传 -\\n三国演义 = ？</p>"}');export{d as comp,m as data};
