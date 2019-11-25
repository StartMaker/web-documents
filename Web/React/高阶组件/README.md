##### 高阶函数

    什么是高阶函数？ 高阶函数接收一个函数作为参数，并且返回值为一个新的函数
        example：
            //高阶函数
            function leval(a, b, fn) {
                return fn(a) * fn(b);
            }
            //普通函数
            function fn(a) {
                return a*2;
            }
    