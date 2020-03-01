// manipulate this keyword by call((), apply() and bind()

// 1. call()
// All functions use call() under the hood when they run

function a() {
  console.log('hi');
}

// same as a()
a.call(); // runs function
a.apply(); // runs function

// Use of call()
const wizard = {
  name: 'Merlin',
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  }
};

const archer = {
  name: 'Robin Hood',
  health: 30
};

wizard.heal(100, 100);
console.log(wizard.health);
// First argument is the object on which we can run the method, rest of args are the args that will be passed to the method
wizard.heal.call(archer, 500, 500); // We can call method of another object on this object. Just as if archer would be running method heal that belongs to wizard

console.log(archer.health);

// Only difference between apply is that it takes array of arguments
wizard.heal.apply(archer, [500, 500]);
console.log(archer.health);

// 2. bind - returns new function with its context and params. Used when we want the function to be run later with certain type of context or 'this' keyword
const healArcher = wizard.heal.bind(archer, 100, 30);
healArcher();

console.log(archer.health);
// bind alows us to store this keyword for later use

const array = [1, 2, 3];

// Real life example of using apply
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array)); // should return 3
