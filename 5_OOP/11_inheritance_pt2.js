
class Human {
    constructor(name){
        this.name = name
    }
    die(){
        return this.name + ' has died';
    }
}

// In ES6 when we use class method like is same as using Warrior.prototype.die = function(){ return this.name + 'has died';}
class Warrior extends Human {
 constructor(weapon){
     super(name);
     this.weapon = weapon
 }
 charge(){
     return "CHARGEE!!"
 }
}

const jake = new Warrior('Jake');
console.log(jake.die())
console.log(Human.isPrototypeOf(Warrior)); // It is as Human is supperclass of Warrior, therefore it has its prototype object linked in its __proto__
console.log(Human.isPrototypeOf(jake)) //It is not. As this is a instance of Warrior not human. THerefore its __proto__ links to Warrior
console.log(Human.prototype.isPrototypeOf(jake)) // It is true. prototype of
console.log(Human.prototype, jake.__proto__)


// Checking instance of
console.log(jake instanceof Warrior) //True
console.log(jake instanceof Human) // True

//  Important thing to keep in mind is that when we extand the class, we simply do something like Subclass.prototype.newMethods(). Instancing is simply creating a version of a class.
//Inheritance is inheriting something from higher class. Inheritance in js unlike other languages does not copy what we have in the master class. It links it up the chain
//  Javascript is always objects inheriting from objects. In realitty there are no classes
// SOme other languages like Java and C++ copy classes when we use extends. js does not