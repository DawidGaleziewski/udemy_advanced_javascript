// currying - technique of evaluation of a function that takes multiple argumuments. Into evaluating a sequance of functions each with a single argument.
//SIMPLY - currying changes a function that takes multiple arguments into a function that takes one argument at a time
const multiply = (a,b) => a*b;
const curriedMultiply = a => b => a*b //thanks to closures we will have access inside a function into b variable
curriedMultiply(5)(3) // a is 5, b is 3

// we can create utility functions now
const curriedMultiplyBy5 = curriedMultiply(5); // Now we have a function that remembers 5
console.log(curriedMultiplyBy5(2))
