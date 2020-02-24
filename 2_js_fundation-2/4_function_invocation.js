// Function Expression
var canada = function() {
  console.log('cold');
  //   console.log(india());
}; //! Function expression is defined when it is called

// Function Declaration
function india() {
  console.log('warm');
} //! Function declaration is defined during the parsing of the code

// Function Invocation/Call/Execution - same thing diffrent name
canada(); //As soon as js sees the brackets new execution context is created

india();

// Inside of created function we get this keyword
// Unlike global execution context we get arguments
function marry(person1, person2) {
  // Arguments is a variable we have access to
  console.log(arguments);
}

console.log(marry());

// We do not get arguments object in global scope
