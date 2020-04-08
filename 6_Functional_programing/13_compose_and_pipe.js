// COMPOSE/COMPOSITION
//  Anykind of data transformation that we do should be obvious
// DATA --gets processedby --> FN - outputs-> DATA --gets processed by --> FN
// Functional programming should be like factory belt

// i.e function that multiplies a value and function that makes shure this number is a absolute number
// In functional programming we use compose to join two functionalities
// js on its own does not have compose() method, but there are many good libraries like Ramda

// compose: takes two args f and g, both of them are functions. it returns a function that takes in data and applies both function one by one on them
const compose = (f, g) => (data)=> f(g(data));

const multiplyBy3 =  num => num*3;
const makePositive = num => Math.abs(num)

// Now we define the new function by using compose. Compose joins both function and returns a new one

// Power of this solution is that we can change places for both functions changing the order they are done in
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50));

// PIPE - similar to compose, but order is reversed
const pipe = (f, g) => (data)=> g(f(data));

// Compose under the hood is simply running a function as a param and returning it to new function
fn1(fn2(fn3(50)))
// same as:
compose(fn1,fn2,fn3)(50)
// Compose is: take data and apply fn3 to it, then apply fn2 to it then apply fn1 to it and return the value

// Same, but starts with fn3
pipe(fn3,fn2, fn1(50));
// Pipe and compose are just constructs used interchangably and any of those can be used