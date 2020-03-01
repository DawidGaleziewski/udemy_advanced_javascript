// function currying - only partially giving function a param
function multiply(a, b) {
  return a * b;
}

multiply(2, 4);

// This is only a side effect here, we do not care about it
let multiplyByTwo = multiply.bind(this, 2); // We store the first param in this function
console.log(multiplyByTwo(5)); // We need to only add the second param now

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(2));
