##### ReactElement: （$$type: REACT_ELEMENT_TYPE）

    type：标签类型
    config：属性配置，key和ref是特殊配置
    children：子组件
    
    defaultProps: 优先级比传入的props低
    react通过此结构来构建对应的树结构
    
##### PureComponent： （props未变化时不更新）

##### Component：

    props：
    context：新旧之分、主要了解用法
    updater：维护更新队列 setState、replaceState、forceUpdate三种更新队列
    
##### Suspense（$$type: REACT_LAZY_TYPE）、lazy（Promise）

##### React.Children(不常用)

    map： 遍历节点，有返回值
    forEach： 遍历节点，无返回值
    count： 计数
    toArray： 转化为数组
    only：是否只有一个节点
    
简单流程：

核心：
    
    1、建立对象池contextPool(因为对象的声明和删除会较大消耗JS引擎性能)
    2、递归遍历所有的组件节点，每次遍历判断是否为Array，如果是则会执行mapIntoWithPrefixInternal()方法，如此重复，直到结束流程

![Children遍历流程](https://pozvqg.dm.files.1drv.com/y4mmeXuR-FkgNj-8c2xEInueibhFoYSEdG7un9nWggJFV1nYGsjb6S8m0D776nWAyuXHwKz1kCVMelh96STs4RYe9EVppRjlQyiu7jwrPqH9iM-cR4YPS7UbJkFTZHg62yMg6k8n_c-DMQOoEzZhvmCdR8LAEPFY4JQvypWYj3LF1EpeR5zp6OIfkPOk3qei4Qwz903Q9lxtWpavsva6TceyQ?width=768&height=1152&cropmode=none)

##### React.Fragment

优化dom结构，减少不必要的dom生成

    <Fragment>                          [
        <div></div>      等同于            <div></div>,
        <div></div>                       <div></div>
    </Fragment>                          ]
   
##### staticMode 严格模式

提示api即将废弃等

##### cloneReactElement

克隆reactElement   