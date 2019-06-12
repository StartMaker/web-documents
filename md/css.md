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

块级元素：在垂直方向堆叠，盒子在垂直方向上的间距由它们的上、下边距决定

行内元素：沿文本流水平排列，也会随文本换行而换行，他们的水平间距根据它们的内边距、边框和外边距来调节，不受其垂直方向上的内边距、边框和外边距影响，此外width和height无效
    
    唯一修改行内元素的高度的属性：line-height

 