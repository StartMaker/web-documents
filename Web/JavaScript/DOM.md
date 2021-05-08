##### 1、事件流机制
    
    1）DOM事件流三个阶段：
        a、事件捕获：从document开始到目标节点执行所有的捕获事件
        b、处于目标节点：执行绑定在目标的绑定事件
        c、事件冒泡：从目标节点开始到document执行所有的冒泡事件
    2）事件委托：
        dom事件2级提出新的api：
           addEventListener（绑定事件）、removeEventListener（移除事件）
        addEventListener()接受三个参数：
            触发事件类型：string
            触发的回调函数：function
            事件类型（冒泡or捕获）：boolean
         example：
            node.addEventListener('click', function(){},false); 
         优点、作用： 
            可将所有子节点状态委托于父节点，不用绑定多个事件处理程序
    3) 事件对象：
        bubbles：表示事件是否冒泡
        cancelable：表示事件是否取消默认行为
        currentTarget：事件正在处理的元素
        defaultPrevented：是否调用了preventDefault()
        deyail：与事件相关的细节
        eventPhase：调用事件处理程序的阶段（1：捕获，2：处于目标，3：冒泡）
        preventDefault()：阻止默认事件
        stopImmediatePropagation()：取消事件的进一步捕获或冒泡
        stopPropagation()：取消事件冒泡和捕获
        target：事件目标
        trusted：
        type：被触发事件的类型
        view：与事件关联的抽象视图

##### 2、dom节点的增删查改

    增：createElement()
    删：remove()等
    查：getElementById()、getElementByTagname()、querySelector（）、querySelectorAll()等
    改：replaceNode()、insertNode()等
    注意事项：兼容性处理时需查询api兼容性
    
##### 3、dom的两种节点集合：NodeList和HTMLCollection

    NodeList： 类数组对象，当文档改变（删除节点）时，list中的不会发生变化，但是子节点变化
    自带forEach等方法
    
    HTMLCollection： 类数组对象
