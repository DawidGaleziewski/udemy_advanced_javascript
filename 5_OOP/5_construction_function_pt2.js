function Orc(name, weapon){
    this.name = name;
    this.weapon = weapon;
    console.log(this) //This will refer to newly created Orc object
}

Orc.prototype.charge = function(target){
    return this.name + ' charges at ' + target
}

const orc1 = new Orc('Harry', 'Spear');
console.log(orc1.__proto__) // Proto refers to Orc.prototype
console.log(orc1.charge('Mob'))

// Biggest gotcha
Orc.prototype.build = function(){
    // we can also use self var and reference self
    function building(){
        // this is inside a function therefore it will refer to a window object
        console.log(this) // window. As it has no context it is refering to default window object
        return this.name + " is builiding a house"
    }

    // We can use bind as always to fix this issue
    // return building()
    return building.bind(this)()
}

console.log(orc1.build()) //this will be undefined
