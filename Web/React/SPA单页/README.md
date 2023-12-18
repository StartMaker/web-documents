##### 为什么要用 function component？

    function component 更易于编写阅读和测试
    代码量更少，上手容易
    因为没有状态，可以更好的实现容器和表现的分离，可以只负责表现层的逻辑，不用考虑因为复杂的逻辑去改变状态从而带来的麻烦，有利于代码复用。

##### 为什么要用 class component？

    虽然function component 有很多好处，但是有些时候class component 还是不可替代的。
    当需要实现一些容器组件的时候，需要改变内部状态来实现组件的改变的时候
    当需要用到生命周期钩子函数实现一些功能的时候
    当我们需要提升性能时，性能是一个很重要的问题，有些时候我们需要减少组件的渲染次数，我们就需要在组件内部用shouldComponentUpdate 方法来去判断，或者继承React.PureComponent 类（自动调用shouldComponentUpdate）来实现 state 和 props 的浅比较进行判断组件是否重新渲染。
