// Call stack and Memory heap

// MEMORY HEAP
const number = 620; // Allocate memory for this variable and point it to the number

const string = 'some text'; // allocate memory for a string

// Allocate memory for an object... and it's values
// Each time variable is name is calles we call to region in memory heap storing the value
const human = {
  first: 'Andrei',
  last: 'Neagoie'
};

// ! Memory heap is a region in js engine storing data

//  # CALL STACK
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

debugger;
calculate();

// ! Call stack is a region in memory operating first in last out mode.

// ! We can inspect how the call stack behaves by going to chrome -> sources >> snipets -> new snippet. call stack is on the right. CTR + ENTER TO RUN

//  Way the variables are stored will be determined by the engine.

// Most of the time primitive values ie numbers and strings will be stored on the stack while object will be stored inside the heap
