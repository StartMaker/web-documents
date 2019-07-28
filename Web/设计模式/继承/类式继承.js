//类式继承
function parent() {}
parent.prototype = {
  b: '222',
  c: ['1','2']
};

function child() {}
child.prototype = new parent();

let a = new child();

console.log(a.b);
//类式继承的缺陷：
let b = new child();
let c = new child();
b.c.push('4');
console.log(c.c);//['1','2','4']
//b、c相互影响