//  function scope - each time we create a function it creates its own scope that has its own var env

//  block scope - blocks in things like conditions have their own scope

if (5 > 4) {
  // ES5 vars are function scoped
  var secret = '12345';

  // ES6 - block scope
  let blockLevelScope1 = '54678';
  const blockLevelScope2 = '54678';
}

// We can access the variable inside the block, as js is not a block scoped lang
console.log(secret); // '122345'
console.log(blockLevelScope2); // Is not defined
console.log(blockLevelScope1); // Is not defined
