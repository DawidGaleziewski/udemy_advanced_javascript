// Solving method polution issue.
// #1 simplest way is to store the functions in one place

const elfAttacksStore = {
    attack(){
        return 'attack with ' + this.weapon;
    }
}

function createHighElf(name, weapon){
    return {
        name,
        weapon,
    }
}

const peter = createHighElf('peter', 'Stick');
peter.attack = elfAttacksStore.attack

console.log(peter.attack())


// #2 use object.create - better way
// This is also not very standard way of doing this. It works the way it should however
function darkElf(name, weapon){
    newElf = Object.create(elfAttacksStore); //Object create allows us to assing methods during creation. It creates link between the object with functions and the newly created object. This is done via inheritance chain 
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf
}

const mike = darkElf('mike', 'spear');
console.log(mike);
console.log(mike.__proto__); //We can see that object with the attack methods was linked in the __proto__ chain thanks to Object.create
console.log(mike.attack())