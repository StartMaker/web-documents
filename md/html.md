##### 常见的前端标签语义化汇总

- h1,h2...h6:标题
- p：文本
- code：代码等一些计算机直接读取的内容（一般是代码）
- pre：和code标签功能相似，但是样式有所不同 
- header、nav、article、main、section、aside：h5语义化标签（ie8不支持）

```
   <pre>和<code>标签的区别：pre可以保留换行 ,而code无法保留空格和换行
```
- a：链接、导航等使用

###### 列表相关

- ul、li：无序列表
- ol、li：有序列表
- dd、dl、dt：自定义列表

###### 表单有关

- fieldset：可将表单相关元素进行分组 
- legend：在fieldset定义标题
- label：标签，for属性可以连接input等输入
- input：输入（输入框文字一般不应顶格）

###### 表格有关

- thead、tbody、tfoot：表格头（ie8不支持）
- caption：定义表格标题（ie8不支持）

###### 扩展HTML语义

1、aria：

- ARIA的role属性：当没有合适语境时使用
- ARIA的aria-属性：为tag添加更多语义的手段

2、微格式：一组标准的命名约定和标记模式（class、id等的命名规范等，通常由开发团队提供）

3、微数据：为html添加结构化数据（可以添加一些自定义的html属性等）