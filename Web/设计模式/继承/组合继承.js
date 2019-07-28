function parent() {
  this.a = '333';
  this.obj = [1,2,3,4];
}
parent.prototype = {
  k: '222'
};

function child() {
  parent.call(this);
}
child.prototype = new parent();

let a = new child();
let b = new child();
a.obj.push('fff');
console.log(b.obj);
console.log(a.obj);