搭配技术栈：
    
    redux/flux/mobx：状态管理
    react-router：路由管理
    react：页面渲染
    
    
![这里写图片描述](https://server.9yuntu.cn/doc/tNc0Z1ywzpUBEaDS13ubAZ)

为什么使用hooks

    1、组件嵌套地狱
    class使用高阶组件的形式做公共能力的抽象，这样会增加组件嵌套层级
    2、复杂组件变得难以理解
    class组件未做到UI和state的彻底分离以及class组件独有的生命周期，导致一些复杂组件理解成本变高
    3、难以理解的 class
    使用class，会增加学习成本，会处理this等相应的class相关的问题
    
    hooks的缺点
    1、error boundry无法使用hooks实现
    2、一些比如像ref的操作比class实现更复杂


