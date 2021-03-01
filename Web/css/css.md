###### 选择器：

- 类型选择器（p）
- 后代选择器（p div）
- 类选择器（.）
- id选择器（#）
- 同辈选择器（+、~）
- 子选择器（>）
- 通用选择器（*）
- 属性选择器（a[href]）
- 伪元素（::）
    
    伪元素选择器：:before,:after,:first-child,:first-line等选择某一行或一个元素

- 伪类（:）

    伪类选择器：:link,:visited,:hover,:focus等选择某一状态
    
    ```
        目标和反选：
            选中：:target（兼容ie8）
            没有：:not()
        p:not(.t) => 没有.t的p标签
    ```
- 结构化伪类（css3）

    结构化伪类：:nth-child()（兼容ie8），:nth-last-child()（兼容ie8），:nth-of-type()（兼容ie8）
    ```
    :nth-child()：可以选择某个标签或者选择器
    :nth-of-type()：可以选择某个标签或者选择器的个数
    ```
    
- 表单伪类 （兼容到ie10）

    :required：必选控件
    :optional：非必选控件
    :valid：有效电子邮件
    :invalid：无效电子邮件
    :read-only：只读控件
    
###### 层叠：css通过层叠机制来处理样式冲突

   降低特殊性，简化选择器

###### 继承

   可继承的属性：color、font-size、font-family、line-height等
    
###### 加载css样式表

   link标签：引入外部样式
   @import：在css样式表中加载
   style标签：直接将样式表写入html中    

###### 性能

   性能指标：网页内容实际显示在屏幕上的时间（上屏时间、渲染时间）=> 尽快下载HTML文件和css资源
   优化点：
   
        1、减少http请求数量（@import()也会引起http请求）
        2、压缩和缓存内容（GZIP压缩、强缓存、协商缓存）
        3、不让浏览器渲染阻塞JavaScript（defer(延迟加载)、async）
        
###### 盒模型

    构成盒子模型：
        1、margin
        2、border
        3、padding
        4、content
        
   IE模式（IE6及之前）：border-box
    
    可用于三栏布局等
   
   标准模式：content-box
   
    box-sizing ：改变盒子width、height的计算标准，有content-box、padding-box、border-box等属性
    
###### 可见格式化模型

块级盒子：在垂直方向堆叠，盒子在垂直方向上的间距由它们的上、下边距决定

行内盒子：沿文本流水平排列，也会随文本换行而换行，他们的水平间距根据它们的内边距、边框和外边距来调节，不受其垂直方向上的内边距、边框和外边距影响，此外width和height无效
    
    唯一修改行内元素的高度的属性：line-height

匿名盒子：文本等没有基于明确元素定义的盒子，除了某些如first-line等，无法直接给匿名盒子添加css样式属性

常见问题：
    
    1、外边距折叠：发生在常规文档流的块级盒子之中，行内盒子、bfc盒子等不会发生折叠
    2、包含块：默认情况下，width、height、padding、margin等属性值为百分比时，就会以该元素的父级的尺寸作为计算依据
    3、定位：relative、absolute、fixed
    4、浮动模型：盒子向左or右浮动，直到其左or右边接触包含块或接触到另一个浮动模型。浮动模型会引起两个常见问题，行内元素环绕、父级高度坍塌
 
###### 格式化上下文

   触发规则：
   
       1、float属性
       2、绝对定位属性
       3、overflow属性值不是visible的元素
       4、display：inline-block、table-cell等
       
###### 关于文字

   1、em，当作为计算盒子模型大小时，根据其元素自身的font-size进行计算，在计算字体大小时，基于继承的大小进行缩放
   
   2、line-height，默认值为baseline，即子元素基线与父元素基线对齐
   
   3、text-transform，可实现大小写变换
    
   4、font-variant，可实现小型大写字母     
   
   5、字母及单词的间距控制，word-spacing单词间距、letter-spacing字母间距
   
   6、连字符，首先设置`<html lang='en'>`，再使用hyphens属性
   
   7、字体引入，第一种方式为`@font-face`可以对字体进行引入，第二种使用js引入字体
    
    @font-face：
    字体引入规则：
        font-family：必需，字体族名称
        src：必需，url列表
        font-weight：可选，字体粗细
        font-style：可选，字体样式
     引入方式：
        1、在字体下载完成前暂缓显示文本，可能在低网速下造成卡顿
        2、在字体下载完成前使用别的字体替代，会造成字体闪屏
     web font loader：
     确保在网速慢的情况下也不会妨碍浏览器内容显示
        
   8、font-size-adjust：当字体无法加载使用后备字体时，后备字体会根据此属性的值调整字体的大小，通常会是原来的一半，所以在引入字体时，我们需要将其设置为100%
   
   9、高级排版特性，略  
   
   10、文字溢出省略
   
     多行溢出省略：
        a、方案一
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -moz-line-clamp: 2;
          -webkit-box-orient: vertical;
          -moz-box-orient: vertical;  
        b、方案二：伪类(需要做手动截断处理)
          p:after{
            content: '...'
          }
     单行溢出省略：
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
   ###### 盒子模型
   
   1、背景颜色：background-color和background，两者区别是background可以设置多个属性，而background-color只能设置其中一个，并且两者兼容性在浏览器上有所不同
   
   2、关于颜色值：rgb代表red、green、blue三原色（可以是255以内，可以是百分比），十六进制法也和rgb（）表示法类似
   
      css新规范：
        a、hsl（）：色盘表示（函数表示法）
        b、rgba（）：rgb的增强
        c、hsla（）：hsl的增强
   3、rgba/hsla的透明度与opacity的区别，opacity可以使元素及其子元素设置透明
   
   ##### 背景图片
   
  1、background-repeat：决定背景图片是否需要重复
  
  2、添加background-color很重要，以防图片加载失败
  
  3、图片格式：JPEG（有损压缩，损失细节高，不支持透明度）、PNG（无损压缩，不适合文件过大照片，适合图标、插图等，支持阿尔法透明）、GIF（早期的位图格式，与PNG相似，支持透明度，不支持阿尔法分极，因此边缘会出现锯齿）、SVG（矢量图片）、WebP（兼容性参差不齐）     
  ===> 矢量图：缩放不失真，位图：缩放失真
  
  4、雪碧图属性（background-position）===> bug多，不兼容IE8及以下低版本浏览器
  
  5、background-clip：背景图裁剪，background-origin：背景图定位原点
  
  6、背景图大小：background-size（百分比不是相对图片大小，而是相对容器的大小）
  
  7、背景图附着：background-attachment（设置背景图是否可滚动）===> 移动端兼容性较差
  
  8、多重背景：设置多组图片来作为背景，一个元素设置多张图片，多个值用分号隔开
  
  ##### 边框和圆角
  
 1、边框：border
 
    与outline的区别：
        1、border会占位置，而outline不会占位置
        2、border可以设置一边或者多边的属性，而outline只能一次设置四边
        3、outline兼容性与border相比较差，且在不同浏览器上的显示有差异
         
 2、圆角：border-radius（IE8及更早版本不支持该属性，Opera Mini不支持该属性）
 
 3、边框图片：border-image（只兼容IE10后的浏览器，且在不同浏览器上有bug）
 
 ##### 盒阴影
 
 1、box-shadow：x轴偏移，y轴偏移，模糊半径，扩展半径，阴影颜色
 
 2、属性值 inset：内阴影
 
 3、多阴影：
 
 ##### 渐变
 
 1、liner-gradient()：
 
 2、重复渐变：repeating-liner-gradient
 
 ##### 为嵌入的图片或元素添加样式
 
 1、max-width：100% 可以使img不超出父容器宽度
 
 2、可保持宽高比的容器：
 
    iframe和object就属于这种情况：
        可以使用以下代码
            .object-wrapper{
                width: 100%;
                height: 0;
                padding-bottom: 75%;
                position: relative;
            }
            .object-wrapper>iframe{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
 
3、减少图片大小（合理压缩图片或使用合理的图片格式，可提升加载速度）
 
 ##### 内容布局
 
1、定位：position
 
    MDN： https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
    static：块级元素垂直堆叠，此时设置z-index是无效的
    relative：相对于初始位置进行定位 （但是遇到table-*-group, table-row, table-column, table-cell, table-caption 元素无效）
    absolute：相对于非static定位的祖先元素或html元素，定位元素会脱离文档流===>适合弹出层等一些覆盖其他内容的组件
    fixed：根据浏览器窗口进行定位 （但是当父元素will-change、transform、perspective、filter不为none时，会根据父元素进行定位）
    
    z-index：堆叠次序，非static的元素会根据深度依次叠放，设置小于1的opacity也会触发堆叠次序，transform、filter也会触发此属性
    
2、 水平布局

    浮动：float
    行内块：span、time、a等标签
        垂直对齐：vertical-align(设置了此属性影响的高度是整个行内块，未设置的取决于其line-height和font-size的高度)
            middle：行内块的中心点与这行文本的中心点对齐
            top
            bottom
            baseline
        行内块空隙问题
            如下代码
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Title</title>
                    <script src="./index.js"></script>
                    <style type="text/css">
                        .list{
                            height: 250px;
                            width: 400px;
                            outline: 1px solid #000;
                            /*清除默认样式*/
                            padding-inline-start: 0;
                            margin-block-start: 0;
                            margin-block-end: 0;
                            /*line-height: 500px;*/
                        }
                        .list>li{
                            display: inline-block;
                            outline: 1px solid #000;
                            width: 25%;
                        }
                    </style>
                </head>
                <body>
                    <ul class="list">
                        <li>22</li>
                        <li>22</li>
                        <li>22</li>
                        <li>22</li>
                    </ul>
                </body>
                </html>
            li标签虽然都设置了width为25%，但依然出现了换行，在浏览器呈现中，每个li标签之间有空隙，
            解决空隙方法（换行符变成了空白符）：
                1、将每个li标签写在一行，如
                    <ul>
                        <li></li><li></li>
                    </ul>
                   但这种写法对程序员不太友好，不建议这样做    
                2、把每个包含的标签（这里是ul标签）设置 'font-size：0;'，font-size会引发继承
                3、空隙为4px，我们可以设置margin等属性来除去这4px的影响
                4、使用table布局来除去间隙
                5、使用float浮动块
                6、flex布局
                ...

3、flexbox（不兼容IE8及老版，部分IE部分支持此布局）

    重点看看，不解释 ，略略略...
    http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html 
    
    关于flex后备方案：（解决flex不兼容的情况）
        将可伸缩项加上float或者display：inline-block声明
        
4、堆叠上下文

    a、定义：
        堆叠上下文是 HTML 元素的三维概念，这些 HTML 元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的 z 轴上延伸，HTML 元素依据其自身属性按照优先级顺序占用层叠上下文的空间
    b、如何创建堆叠上下文
        根元素 (HTML),
        z-index 值不为 "auto"的 绝对/相对定位，
        一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
        opacity 属性值小于 1 的元素（参考 the specification for opacity），
        transform 属性值不为 "none"的元素，
        mix-blend-mode 属性值不为 "normal"的元素，
        filter值不为“none”的元素，
        perspective值不为“none”的元素，
        isolation 属性被设置为 "isolate"的元素，
        position: fixed
        在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
        -webkit-overflow-scrolling 属性被设置 "touch"的元素

##### 响应式布局

1、媒体查询：

    @media（IE8及更老版本不支持）
    
2、浏览器视口：


