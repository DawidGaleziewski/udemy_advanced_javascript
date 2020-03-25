// Fairy tale game
// #1 basic level is to create simple objects that have encapsulated functions and data
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack(){
        return 'attack with ' + elf.weapon;
    }
}

// #2 using factory functions that create objects for us
function createElf(name, weapon){
    return { //Function return objects for us
        name: name,
        weapon: weapon,
        attack(){ //This way of creating objects is lacking when it comes to methods. Methods will be created for each object and pollute the memory
            return 'attack with weapon ' + weapon
        } 
    }
}

const peter = createElf('Peter', 'Dagger');
console.log(peter.name)
console.log(peter.attack())

