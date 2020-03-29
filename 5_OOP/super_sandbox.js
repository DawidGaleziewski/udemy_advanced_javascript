class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.alive = true;
        this.health = 100;
    }

    eat() {
        this.health += 10;
        console.log(this.name + ' Health is now ' + this.health)
    }

    wakeUp(){
        console.log(this.name + 'has woken up')
    }
}


const unknownSpecies = new Animal('Orc', 15);
unknownSpecies.eat();

class Gorilla extends Animal {
    constructor(name, age){
     super(name, age);
    }

    jump(){
        console.log(this.name + 'is now jumping')
    }

    dailyRutine(){
        super.wakeUp()
        this.jump()
        super.eat()
    }
}

const herambe = new Gorilla('Herambe', 25)
// herambe.eat()
// herambe.wakeUp()
// herambe.jump()
herambe.dailyRutine()