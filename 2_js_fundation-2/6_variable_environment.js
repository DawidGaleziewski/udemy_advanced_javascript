// In execution context after this and arguments there is a special place called "variable environment"
// Variable environment is place for variables to live in
function two() {
  var testVar = 'functionTwo';
}

function one() {
  var testVar = 'functionOne';
  two();
}

var testVar = 'globalScope';

one();

// STACKS:
// two() -- testVar = functionTwo
// one() -- testVar = functionOne
// global() -- testVar = globalScope

// After each stack is gone, its memory space taken for the variable is gone
