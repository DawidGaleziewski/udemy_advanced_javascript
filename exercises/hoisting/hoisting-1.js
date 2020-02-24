one = undefined;

console.log(one); // Undefined

var one = 1;
console.log(one); // 1
var one = 2;

console.log(one); // 2

//  Functions
// No matter where we invoke the function, we will see the result of the lastly declared one. As the functions are fully hoisted the last one will overide the rest of them
a();
function a() {
  console.log('hi');
}
a();
function a() {
  console.log('bye');
}
a();
