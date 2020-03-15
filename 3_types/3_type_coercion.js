// TYPE COERCION - przymus
// When we compare two values of diffrent type. One of them will be converted to same type
console.log(1 == '1'); // JS will covert this to 1 == 1

// ! due to fact that js is dynamically typet it has heavy type coercion
// ! === operator excludes possible type coercion
// We always should use ===

//  type coercion happens also in if statments
if (1) {
  //Js will coerce 1 to true.
  console.log(1);
}

if (0) {
  // 0 will be coerced to false
  console.log(0);
}

// More interesting cases: https://dorey.github.io/JavaScript-Equality-Table/
