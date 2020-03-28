//  In ultimate way of js OOP, ES6 classes, we want to keep everything contained inside our class
//  We want to have object that represent a blueprint, with data and actinh upont that data inside the class
class Gnome  {
    // Constructor is something that runs each time we use new keyword
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    // There is a reason attack should not be defined in constructor. Each time we run new keyword the class constructor runs, and we do not want to create attach method for each instance of a object, in order to save memory
    attack(){
        return "attack with " + this.weapon
    }
}

// Using new keyword with class is called "instianciating the class"
const jimy = new Gnome('Jimmy', 'Slingshot')
// When we create a object from a class, we call this object a instance of this class
console.log(jimy instanceof Gnome)
console.log(jimy);
console.log(jimy.attack())

// Class is a syntactic sugar in js. JS still uses prototype under the hood. Class keyword is still prototypal inheritance, classes are just functions under the hood