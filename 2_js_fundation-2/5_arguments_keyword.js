// Arguments looks like array but it is not a array

function farmAnimals(chicken, pig, cow) {
  // We can however make an array from arguments
  console.log(typeof arguments);
  console.log(Array.from(arguments));
}

farmAnimals('Joese', 'Martin', 'Milky');

// using rest parameters
function furniture(...args) {
  // args will be already a array
  console.log(args);
}

furniture('table', 'chair', 'desk');

// ! you want to avoid arguments keyword in modern js.

function noArgs() {
  console.log(arguments);
}

noArgs(); //We still get empty arguments objects even if we do not pass any args to the functions
