//  How to create your own prototypes
let human = {
    mortal: true
}

let socrates = Object.create(human); // Better way of doing this.
socrates.age = 45;
console.log(socrates.mortal); // We can access this property as it is linked by inheritance chain
console.log(socrates.__proto__);
console.log(human.isPrototypeOf(socrates)); // true

// __proto__ is named this way so it wont be used