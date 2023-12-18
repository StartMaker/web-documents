function f(subType, superType) {
    var prototype = Object(superType.prototype);    //创建对象
    prototype.constructor = subType;                //增强对象
    subType.prototype = prototype;                  //指定对象
}

function A() {}

A.prototype.a = '11222'

function B() {

}

f(B, A);

const bbb = new B();

console.log(bbb.a);
