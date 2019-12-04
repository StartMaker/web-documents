###### 关于webpack打包原理

    两个核心对象：Compile和compilation
    Compile只有一个全局对象：compiler，主要功能是：a、文件的监听 b、启动编译（run方法）
    compilation：每次监听到文件的变化，对文件进行处理，每次处理时会生成一个新的compilation对象
  
###### transform-runtime与babel-polyfill的差异

    1、使用runtime是按需引入，需要用到哪些polyfill，runtime就自动帮你引入哪些，不需要再手动一个个的去配置plugins，只是引入的polyfill不是全局性的，有些局限性。而且runtime引入的polyfill不会改写一些实例方法，比如Object和Array原型链上的方法，像前面提到的Array.protype.includes。
    2、babel-polyfill就能解决runtime的那些问题，它的垫片是全局的，而且全能，基本上ES6中要用到的polyfill在babel-polyfill中都有，它提供了一个完整的ES6+的环境。babel官方建议只要不在意babel-polyfill的体积，最好进行全局引入，因为这是最稳妥的方式。
    3、一般的建议是开发一些框架或者库的时候使用不会污染全局作用域的babel-runtime，而开发web应用的时候可以全局引入babel-polyfill避免一些不必要的错误，而且大型web应用中全局引入babel-polyfill可能还会减少你打包后的文件体积（相比起各个模块引入重复的polyfill来说）。