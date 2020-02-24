// LEXICAL ENVIRONMENT/ LEXICAL SCOPE
// Lexical environment answers a question: where something was written
var globalHonk = 'honk';
const constantHonk = 'constant honk';
// As all function below were written in a global context, they will be available globaly
function printName() {
  return 'Andrei Nego';
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

// Therefore those are same:
window.sayMyName();
sayMyName();

function universe() {
  // This function is lexically in another function
  function microverse() {
    //   But we have access to window global object
    console.log(window);
    console.log('peace amongs the worlds');
    console.log(globalHonk);
    // We have access to global vars and functions from it
    console.log(sayMyName());
    console.log(constantHonk);
  }

  microverse();
}
universe();

// We do not have access to this function from global context
microverse();

// ! where the function is called does not matter for scopping, this is diffrent paradigm called dynamic scope. JS scope is called lexical scope and depends on where the function was defined
