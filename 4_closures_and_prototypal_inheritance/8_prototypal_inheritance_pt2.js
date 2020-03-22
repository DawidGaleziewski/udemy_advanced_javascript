// Demonstration of prototypal chain
// #OBJ1
let dragon = {
    name: "Tania",
    fire: "true",
    fight(){
        return 5;
    },
    sing(){
        if(this.fire){
            return `I am ${this.name}, the breather of fire`
        }
    }
}

console.log(dragon.sing())
console.log(dragon.fight())

// #OBJ2
let lizard = {
    name: 'Kiki',
    fight(){
        return 1
    }
}

const singLizard = dragon.sing.bind(lizard); // We can borrow the method of another obj by bind
console.log(singLizard());

// we can do this better way by inheriting
lizard.__proto__ = dragon;
console.log(lizard.__proto__) // We can inherit the whole object with its methods and values
console.log(lizard.sing()); // inherited from dragon object
console.log(lizard.fire); // inherited from dragon object
console.log(lizard.fight()) // fight is not inherited from dragon. As this object already had this method declared the object will first try to use it itself before looking up the inheritance chain

// JS will go up the prototype chain only if it does not have a native method

// method => check object methods if empty => check its __proto__ (dragon object) methods => if empty check its __.proto__ (base Object)

// We can check object of what it is a prototype
console.log(dragon.isPrototypeOf(lizard))

for (let prop in lizard){
    console.log('general:',prop) // We can see properties that were inherited from dragon

    if(lizard.hasOwnProperty(prop)){ //We can see props uniq to lizard object
        console.log('has own prop:', prop) 
    }
}

console.log(lizard);

// !Important - using __proto__ this way is for demonstration it should not be used this way in production code. This is band for performance

// USES OF prototypes:
// We can have methods pointing to the same places in memory, beeing more efficiant. ie hasOwnProperty only lives in one place in memory

// When we get a function not defined error the js goes all the way up the inheritance chain to the global object searching for it.

// When we go past the base Object js returns null as to say there is nothing more beyond base object
console.log(lizard.__proto__.__proto__.__proto__); //null - end of the chain