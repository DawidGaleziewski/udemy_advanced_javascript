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

var globalVar = 'globalVar';
function tier3() {
  var a = 'a';
  // console.log(b); // Does not have access to variables inside tier2

  return function tier2() {
    var b = 'b';

    return function tier1() {
      console.log(b, a, globalVar); //Has access to all variables above
      return 'tier1 string';
    };
  };
}
console.log(tier3()()());

// Local scope is accessed to the function it was defined in and functions inside it. It is not accessible to functions that are parents of this function

// ! eval and with change how scopes work internally. this can cause issues with optimizing for engine

// [[scope]] property can be accessed on window -> function name -> [[Scopes]]

// !leaking global scopes
// var taptap
function leak() {
  taptap = 'leaking'; //if we do not declare variable in local scope. Engine goes up searching for the variable up to global scope. And then as it cant find it it creates the variable there
  // ! to avoid this we use 'use strict'
  return taptap;
}

// adding name for a function declaration!
var pobiteGary = function takNieWolno() {
  takNieWolno(); // We can only acces it from itself
  return 'heyhey';
};

pobiteGary(); //We can run the name of variable
takNieWolno(); //We cannot run it by function name. This is due to the fact that this function will be closed in its own scope
