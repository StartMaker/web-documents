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
   
   ###### 盒子模型
   
   1、背景颜色：background-color和background，两者区别是background可以设置多个属性，而background-color只能设置其中一个，并且两者兼容性在浏览器上有所不同
   
   2、关于颜色值：rgb代表red、green、blue三原色（可以是255以内，可以是百分比），十六进制法也和rgb（）表示法类似
   
   ```
      css新规范：
        a、hsl（）：
        b、rgba（）：
        c、hsla（）：