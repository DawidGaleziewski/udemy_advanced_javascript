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
ElderElf.prototype.build = function(buildingName){
    return this.name + " starts building " + buildingName
}

// We have to remember that if we use ()=> {} arrow functions this keyword will refer to the object it was declared on and not the calling object, and we will get undefined!
ElderElf.prototype.toThFuture = ()=>{
    return this.name + " moves to the year 2250"
}


const buggedElf = ElderElf('Brajan', 'Plum');
console.log(buggedElf) // undefined - this is wrong

// To create object we ned to use 'new' keyword
const coolElf = new ElderElf('Brad', 'Mace'); //new keyword automatically returns the object from function and creates a elderElf constructor. Any function invoked using new keyword is called constructor function.



//Number, Object etc are also constructor functions
console.log(coolElf)
console.log(coolElf.attack()) //coolElf does not have attack. __proto__ will point it to prototype object up the chain to the constructor function and it will be taken from there

// Two benefits of this is that we can now add functionallity and for example add new functions like build in the prototype. Secondly those can be stored in on place in memory and used by many objects
console.log(coolElf.build('house'))

// Using arrow function
console.log(coolElf.toThFuture())