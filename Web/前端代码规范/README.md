##### 文件命名：
    
    文件、目录等：使用'_'进行文件命名，如get_name === less
    集合命名：如images，styles等需要使用复数形式

#### HTML和CSS部分
  
##### html和jsx规范

    html
        1、缩进设置4个空格
        2、属性上使用双引号
        3、属性名全部小写，单词之间使用中划线，如antd-layout
        4、不要忽略标签闭合，如</body>,</li>等
        5、嵌套的节点需要缩进
        6、html的boolean是不需要取值的（xml需要），如<input disabled/>，有为true，无为false
        7、避免没必要的嵌套
        8、尽量遵循语义化的标准
    jsx
        1、缩进设置2个空格，与js一致
        2、属性值使用双引号
        3、标签需要闭合，嵌套的节点需要缩进
        
##### HTML5 DOCTYPE
    
    标准写法：<!DOCTYPE html>
    <html lang=''>:lang属性的说明 === http://w3c.github.io/html/semantics.html#the-html-element
    微软收集的语言列表：https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/
    
##### 字符编码

    通常为：UTF-8
    
##### IE兼容

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    详细见：https://hsivonen.fi/doctype/
    
##### css、sass、less

    1、遵循缩进4个空格
    2、每个属性后需要加分号，less、sass不加在编译时会报错
    3、在不声明全局样式时，避免标签选择器的使用
    4、类名使用小写字母，以中划线分隔
    5、id采用驼峰式命名
    6、属性如，padding、margin等尽量不要简写
    7、一些例子：
            /* not good */
            .element {
                color :red! important;
                background-color: rgba(0,0,0,.5);
            }
            
            /* good */
            .element {
                color: red !important;
                background-color: rgba(0, 0, 0, .5);
            }
            
            /* not good */
            .element ,
            .dialog{
                ...
            }
            
            /* good */
            .element,
            .dialog {
            
            }
            
            /* not good */
            .element>.dialog{
                ...
            }
            
            /* good */
            .element > .dialog{
                ...
            }
            
            /* not good */
            .element{
                ...
            }
            
            /* good */
            .element {
                ...
            }
            
            /* not good */
            @if{
                ...
            }@else{
                ...
            }
            
            /* good */
            @if {
                ...
            } @else {
                ...
            }
            
#### JavaScript部分

##### 分号、换行、空行

    分号：变量声明、表达式、return、throw、break、continue、do-while
    换行：单行不得超过80字
    空行：变量声明后，注释前需要空行，代码块前后需要空行
        如：
        a、
            //注释
            let a = '';
            
            //注释
            let b = '';
        b、
            function(){
                ...
            }    
            
            function(){
                ...
            }
            
            
    