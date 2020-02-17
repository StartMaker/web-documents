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
