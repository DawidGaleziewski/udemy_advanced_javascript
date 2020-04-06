// partial applications are similar to currying
// this is a process of producing a function with smaller number of parametters
// we feed a function some arguments, it remembers them thenks to closures and we can use those params later

// simple function
const multiply = (a,b,c) => a*b*c;

// curried version
const curriedMultiply = a => b => c => a*b*c;
curriedMultiply(4)(5)(10);

// partial version
const partialMultiply = multiply.bind(null, 5) //we do not care about this in partial application, that is why we give it a null
// Bind will return new function. We do not care about this but next arguments are args that will be saved in this function for later use
console.log(partialMultiply(4,2)); //we partially applied a, and now are passing b and c
