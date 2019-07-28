//闭包：A函数有一个变量C和函数B，函数B里引用了变量C，A函数return函数B

  function A() {
    let C = '我是变量';
    //返回的函数都是匿名函数，无论是否声明，在此只为了理解闭包
    return function B() {
      return C;
    }
  }
//闭包的优势：可以缓存变量，可以读取函数内部的变量
//闭包的缺陷：函数式编程的性能缺陷，并且需要合理使用闭包，否则易内存泄露
//tip：何为内存泄露：计算机内存被占用，得不到释放

//柯里化：能多次接收参数，并且可以延后执行函数
//常见柯里化

  function Carry(fn,...arg1) {
    let context = this;
    return function (...arg2) {
      fn.apply(context,arg1.concat(arg2));
    }
  }
  //模拟bind函数
  Function.prototype.myBind = function (context, ...arg) {
    return function (...arg2) {
      context.apply(arg.concat(arg2));
    };
  };

//柯里化缺陷：函数式编程的性能问题
//优势：多次传参，参数分流，函数延后执行，写法便于观察

//反柯里化：可以自己查询反柯里化
