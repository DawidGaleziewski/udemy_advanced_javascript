// Inheritance is object getting access to properties and methods of another object
// I.E Obiect => Array || Function. Both arrays and functions are inheriting from Object {}
const array = [];
console.log(array.__proto__) // New array was created using Array constructor. We can see it in constructor that Array() was used.
// Inside the __proto__ we have other __proto__ objects nested. We casn go "up the chain this way"
console.log(array.__proto__.__proto__) // Parent prototype of array is a Object. This is also called a "base object". Which is a object everything is created from, including functions and arrays. Everything that is a descendent of Object will inherit its methods like .toString()
array.toString() 

// same applies to functions
function a(){}

console.log('proto of a function: ' + a.__proto__) // we get a base function

console.log(a.__proto__.__proto__) //Again proto of a proto of a function is a base Object

const obj1 = {};
console.log(obj1.__proto__) // Base object

// Concept of prototypal inheritance is quite unique to javaScript. Most languages use classical inheritance. 

// In reality there are no classes in js. Class is only a syntax sugar
