// Watch out for
// !declaring functions in loops
for (let i = 0; i < 5; i++) {
  function a() {
    console.log('wiiiii');
  } //! BAD - do not declare functions inside a loop if possible
  a();
}

// !not declared params
// try to declare the params, in this case even if it is empty, param will be declared inside the function and return undefined
// in es6 we can also use default params
function b(param = 6) {
  console.log(param);
  return param;
}

b();
