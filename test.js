new Promise(function (r, j) {
  r(1)
})
.then(function (data) {
  return Promise.all([Promise.resolve(1), Promise.resolve(2)])
})
.then(function (data) {
  console.log(data);
});