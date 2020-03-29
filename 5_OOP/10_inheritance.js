//  inheritance is passing knowledge down
// When we copy objects we will lose inheritance chain

class Elf {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return 'attack with ' + this.weapon 
    }
}


const fiona = new Elf('Fiona', 'ninja stars');
const ogre = {...fiona};
console.log(ogre.__proto__);
console.log(fiona.__proto__);
// console.log(ogre.attack()) - this would fail. As ogre has no longer access to inheritance chain

// Before es6 inheritance was a lot harder


// BETTER CODE - create more generic class
class Character {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return 'attack with ' + this.weapon
    }
}

// SUBLACSSING - Extand existing class
class ElderElf extends Character { // CHaracter is a super class or base class in this example. Elf is a subclass.
//  This basically sets __proto__ to superclass. 
    constructor(name, weapon, type){ // Constructor is something only for subclass
        // console.log(this) - js wont allow us to run this in subclass untill we use the super() keyword
        super(name, weapon); // Super calls the super class of elf (Character). It goes up and calls the constructor
        console.log('this from subclass', this)
        this.type = type
    }
}
const pompom = new ElderElf('Pompom', 'Banana', 'Healer')
console.log(pompom)
pompom.attack()


// Another sublcass
class Ogre extends Character{
    constructor(name, weapon, color){
        super(name, weapon)
        this.color = color
    }

    makeFort(){
        return ' strongest fort made by ' + this.name
    }
}

const simone = new Ogre('Simone', 'Club', 'Green');
console.log(simone)
console.log(simone.makeFort())

