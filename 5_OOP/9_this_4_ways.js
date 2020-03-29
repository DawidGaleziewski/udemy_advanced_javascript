// Manipulating this keyword
// new binding this
function Person(name, age){
    this.name = name; // new keyword manipulates this binding by asiigining it to newly created object
    this.age = age;
}

const tom = new Person('tom', 35);
console.log(tom)


// implicit binding
const mona = {
    name: "Mona",
    age: 40,
    hi(){
        console.log('Hi my name is ' + this.name) // this will refer simply to object it was called from
    }
}

// explicit binding - use bind, call or apply methods
const matty = {
    name: "Matty",
    age: 56,
    hi: function(){
        console.log("hi " + this.name )
    }.bind(mona) // we bind this to another object
}

matty.hi()
//  arrow functions - lexical scope. 
const todd = {
    name: "Todd",
    age: 16,
    hi: function(){
        var innerFunction = ()=> { // This would not work without arrow function as it would get dynamic scoping and refer to window object
            console.log('hi ' + this.name)
        }

        return innerFunction()
    }
}



