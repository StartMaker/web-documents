##### this的指向问题：

````
    在es5中的描述为：this 关键字执行为当前执行环境的 ThisBinding。详见：http://lzw.me/pages/ecmascript/#155
    如
    1）、function a(){console.log(this)},
    var b = {c: function(){console.log(this)}}
    -->a()完整叙述为window.a(),b.c()完整叙述为：window.b.c(),其当前执行环境的thisBinding分别为window和b
    2）、bind、apply、call
    a.bind(b)，function a() {console.log(this)}
    -->a在执行bind的过程中，会被b绑定执行，因此打印出Function b
````

##### 模拟bind、apply、call方法

````
Function.prototype.myCall = function (context,...args) {
  let ctx = context || window;
  ctx.fn = this;
  let result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};

Function.prototype.myApply = function (context, args) {
  let ctx = context || window;
  ctx.fn = this;
  let result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  let ctx = this;
  return function (...args2) {
    ctx.apply(context, args.concat(args2));
  }
};
````

##### 不同环境下的this指向

````
    在node环境中，全局变量为global对象
    在浏览器环境中，全局变量为window对象
    在严格模式下，函数直接执行时，函数不添加执行绑定会指向undefined，
        严格模式下，a() 与 window.a() 执行结果this的打印值是不一样的，前者为undefined，后者为window
````