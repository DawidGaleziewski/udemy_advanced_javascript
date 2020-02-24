// GARBAGE COLLECTION

// JS is grbage collected language - it will automatically collect garbage after we finished calling the function

// ! there are instances that js will not clear the memory

//  JS uses a mark and sweep algorithm
// It marks all references of objects in use and seeps all that not in use.
// If object in memory does not have a variable refering to it it will be sweeped

var human = {
  first: 'Andrei'
}; // Object will be deleted as soon as the variable will refer to something else, as it is no longer used

human = 5;

function testCallStack() {
  animal = 'bunny'; //This will be sweeped as soon as the function gets out of the stack
}
