// HOISTING

// We have 3 stages of running code:
// 1. Creation phase (creates global object and this keyword)
//! 2. Hoisting
// 3. Execution phase (running the code)

// During hoisting, variables and function declaration are moved
console.log('1----------');
console.log(teddy);
// console.log(teddy2);
console.log(sing());
// console.log(sing2());

// Variables are only partially hoisted. They are declared but not defined
var teddy = 'brear';
// ! let and const wont get hoisted
let teddy2 = 'bear2';

// Functions are fully hoisted. Function is assigned a place in memory
function sing() {
  console.log('ohhh la la');
}

//! If we put a function inside brackets it wont get hoisted!
(function sing2() {
  console.log('ohhh la la');
});

// ! compiler is not physically moving the code. It passes the code and then reserves functions and variables to a memory space

// Function expression vs function declaration
declareMe();
expressMe(); //Undefined!
// Function expression - fallows same rules as variable hoisting. Assigns undefined to variable first
var expressMe = function() {
  console.log('function expression');
};

// function declaration
// Functio
function declareMe() {
  console.log('function declaration');
}
