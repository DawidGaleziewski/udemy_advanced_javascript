// Functions are first class citizens in JS
// 1. They can be assigned to variables and object properties
var callMyName = function() {
  console.log('Your name');
}; // some languages do not allow this

// 2 pass functions as arguments
function inception(dream) {
  dream();
}

inception(function() {
  console.log('test');
}); //Passing function as param to a function

// 3 functions can be rutned from other functions
function catapult() {
  return function rock() {
    console.log('smaasshh');
  };
}

catapult()();

// ! function is data in JS
