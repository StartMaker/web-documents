基础部分：

    语法部分
        ECMAScript2015: https://yanhaijing.com/es5
        ECMAScript2016: http://es6.ruanyifeng.com/#docs/intro 
        ES6重要部分：类class、模块化import/export、遍历器Iterator、异步函数
    BOM对象：书=>JavaScript高级教程、权威指南
    DOM对象：书=>JavaScript高级教程、权威指南
    
必看：

    JavaScript高级教程：1-13章，21-23章
    JavaScript权威指南：     
    
三个重点：

    原型、异步、作用域
    
六种基本类型：

    null： 未赋值的对象 => 因此 typeof null === 'object'
    undefined： 未赋值的常量
    number： 数字（精度为64） => BigNumber.js可以实现大数运算
    string：字符串
    boolean： 布尔
    symbol: es6增加，唯一变量 new Symbol(1) !=== new Symbol(1)
    
其他类型：
    
    function：函数
    array：数组
    object：对象
    set：es6新增
    map： es6新增   
    
关于对象：

    defineProperty(定义一个属性)/defineProperties(多个属性定义)：
        数据属性：[[Configurable]]、[[Enumerable]]、[[Writable]]、[[Value]]
        访问器属性：[[Get]]、[[Set]]、[[Enumerable]]、[[Configurable]]
    proxy(设置拦截):
        set、get两个参数：拦截对象
            set：在赋值的时候拦截
            get：在取值的时候拦截
        apply：拦截函数调用
        construct：拦截new操作
        deleteProperty：拦截delete方法
        defineProperty：拦截defineProperty
        ...
        proxy的注意事项：
            1、目标对象的this会指向proxy，因此需要保证目标对象的属性及属性值为绑定在自己的this上
            2、有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性
        proxy的优势：
            1、 拦截和监视外部对对象的访问
            2、 降低函数或类的复杂度
            3、 在复杂操作前对操作进行校验或对所需资源进行管理
        
关于模块化：
    
    ES6模块化和CommonJS模块化差异：
        CommonJS输入原始值时，会被拷贝（模块内的操作无法影响到这个值的变化），而ES6模块化是输出的值得引用
        CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
            ES6模块输入的原始值只是只读，跨模块无法重新赋值，多个模块引入的为同一个实例

遍历器Iterator：

    主要四种类型：Array、Object、Map、Set四种可遍历的类型
    作用：
        1、为数据结构提供统一的接口，为不同的数据类型提供统一的访问机制
        2、使得数据结构的成员能够按某一访问次序
        3、供for-of消费
     概念：每一次调用都会有一个对象进行接收，{value：当前对象的值，done：当前遍历是否结束（boolean）}
     for-of和for-in的不同：
        for-in以下缺点：
            1、会遍历原型上的键名
            2、任意顺序遍历
            3、若遍历的为数组，则1、2、3等会转化为字符串'1'，'2'，'3'
            
常用方法：

    Array：
        a = []; a[4] = 1; => a.length === 4
        a = []; a.length = 4 => a[0] === undefained
        a = [1,2]; a.length = 1 => a[2] === undefined(a[2]会被移除)
        数组检测：a、instanceof b、isArray c、Object.prototype.toString.call()
        转换方法：a、toString b、valueOf c、toLocalString d、join
            toString和toLocalString：会优先执行toString方法
        栈方法：push（进栈，array.length++）、pop（出栈，array.length--）
        队列方法：shift（取得第一项，array.length--）unshift（推入第一项，array.length++）
        重排序方法：reverse（数组反转），sort（数组排序）
        数组操作方法：slice（截取数组，不会影响原数组），concat（合并数组）、splice（删除、插入、替换）
            splice：
                splice(0,2) ==> 删除前两项
                splice(2,0,'rend','green') ==> 插入两项
                splice(2,1,'red') ==> 替换一项
        位置方法：indexOf（查找数组下标序号），lastIndexOf（从后往前查找数组下标序号）==> 引用类型是对比的地址
        迭代方法：every、filter、forEach、map、some    
        归并方法：reduce（接收四个参数，前一个值、当前值、项的索引值、数组对象），reduceRight（从右边向前遍历）
        
           