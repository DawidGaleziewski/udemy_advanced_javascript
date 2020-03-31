// In JS we do not have public and private classes like in Java
// Old convention was always to add _method() to things that should remain private
// there is solution for this called weak maps but is not to good
class Character {
    #age = 54; //This is new ES feature
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    // We still do not have private methods
    attack(){
        return 'Attack with ' + weapon
    }
}
const dolby = new Character("Dolby", "sock")
// console.log(dolby.#age) // It wont allow us to use this as it is private for the class
