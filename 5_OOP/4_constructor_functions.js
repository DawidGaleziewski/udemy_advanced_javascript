// This is a older method pre-dating Object.create().
// This method was popular back in the day
function ElderElf(name, weapon){ //It would work without capital letter but this is a convention
    // Interesting part is that we are not returning anything, we just use this
    this.name = name; // As  we areusing a function, new execution context is created and therefore new this keyword ic reated as well
    this.weapon = weapon;
    // Normally this would point to the window object. However new keyword changes it. It will point 'this' keyword to the object we just created

    // Without new keyword we are not creating and returning new object, and we are not assiging this to the new object therefore we will get a error as we will refer to a window object


}

    // Secondly as this is a function we will get a prototype property. We need to remember that functions are special types of object with code(), Name, prototype, _proto_ and properties
    // Thanks to this we can add methods to prototype of the function
ElderElf.prototype.attack = function(){
    return 'attack with ' + this.weapon
}

const buggedElf = ElderElf('Brajan', 'Plum');
console.log(buggedElf) // undefined - this is wrong

// To create object we ned to use 'new' keyword
const coolElf = new ElderElf('Brad', 'Mace'); //new keyword automatically returns the object from function and creates a elderElf constructor. Any function invoked using new keyword is called constructor function.



//Number, Object etc are also constructor functions
console.log(coolElf)
console.log(coolElf.attack())