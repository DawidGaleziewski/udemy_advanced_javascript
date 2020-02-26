// Each execution context has a link to the "outside world"

var testVar1 = 'global scope';

function globalOne() {
  console.log(testVar1); //! scope chain gives access to variables that are in parent environment
  var testVar2 = 'globalOne functions scope'; // Variable environment

  // ! when code runs it first looks inside variable environment and than goes up the chain

  //  JS uses lexical scope (aka static scope). It matters where the function is defined not where it is called

  //   Engine will run and define the scope chains before it runs

  //   Engine will start from variable environment and then move to parents, grandparents up to global scope in search of the variable
}

globalOne();
