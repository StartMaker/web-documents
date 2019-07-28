//伪继承，方法借用
function parent() {
  this.a = '2';
}
parent.prototype = {
  c: '444'
};

function child() {
  parent.call(this);
}

let a = new child();
let b = new child();
console.log(a.a);
//不能继承原型属性和方法
console.log(a.c);
b.a = 3;
console.log(a.a);

//无法复用
function f() {
  child.call(this);
}
let aa = new f();
console.log(aa.c);

//缺陷：a、只能继承父类的实例属性和方法，不能继承原型对象上的方法和属性，b、每个子类都是父类的副本，无法实现复用