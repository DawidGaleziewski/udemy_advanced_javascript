// 7 types:
// 1) Numbers
console.log('1: ', typeof 1);

// 2) Boolean
true;
console.log('true: ', typeof true);

// 3 ) String
console.log('String: ', typeof 'Dave');

// 4) undefined
console.log('undefined: ', typeof undefined);

// 5) null
null;
console.log('null: ', typeof null); //! null is a object - this is a mistake

// 6) Symbol
console.log('Symbol("test"): ', typeof Symbol('test'));

// 7) Objects
console.log('{}:', typeof {});

const obj1 = {
  // Non primitive types do not own the value directly, they have a refrence to a place inside the memory where the data is stored
  a: 'Tom'
};

// Array is a object
console.log('[]:', typeof []);
//! Despite the fact it returns a function, functions are objects
console.log('function(){}:', typeof function() {});

function a() {
  return 5;
}

a.hi = 'hihihihih';
console.log(a.hi);

// ! All types, except object type are primitive types
// Primitive types is data that represents only a single value. It directly contains a value of this type.
// Similar to atoms those cannot be broken down

// Standard build in objects - objects build in language
true.toString(); // 'true'
// Despite the fact true is a primitive, it has methods. When we run method on it, js will create w 'wrappert' around the primitive so it can act as if it is a object
Boolean(true).toString();
String('string').toString();

// ARRAYS
var array = [1, 2, 3]; //This is the same as:
var wackyArray = {
  0: 1,
  1: 2,
  2: 3
};

//  How to check if something is a array
console.log(Array.isArray(array));
console.log(Array.isArray(wackyArray));
