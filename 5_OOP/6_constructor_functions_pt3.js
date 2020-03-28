var a = new Number(5); // Is type of object as it was created by constructor
var b = 5;


console.log(typeof a, typeof b);
console.log(a === b);
console.log(a == b);
console.log(b.__proto__); // Despite the fact b is a number, we still can ise methods on it. Internaly it constructs the number from Number(5). JS will automatiacally assume we wanted to do this on object and not primitive and will convert

// In javascript technically everything is a object
