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

##### 2、dom节点的增删查改

    增：createElement()
    删：remove()等
    查：getElementById()、getElementByTagname()、querySelector（）、querySelectorAll()等
    改：replaceNode()、insertNode()等
    注意事项：兼容性处理时需查询api兼容性
    
##### 3、window对象：在ECMAScript扮演全局对象的角色

    
##### 4、location对象：提供当前窗口中加载的文档相关信息，还提供一些导航功能
    
    