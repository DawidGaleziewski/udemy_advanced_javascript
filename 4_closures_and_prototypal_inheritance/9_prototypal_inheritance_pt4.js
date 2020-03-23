const obj = {name: 'Sally'};
console.log(obj.hasOwnProperty('name')) // True - it is this objects property
console.log(obj.hasOwnProperty('hasOwnProperty')) // False - this is a property we inherit from the base object

function a(){};
a.hasOwnProperty('bind') // False
a.hasOwnProperty('name') // Function has a name 'a' that is its own

function multiplyBy5(num){
    return num*5
}

console.log(multiplyBy5.__proto__.call) // Call is present on the prototype of this function which is a base function (function constructor)

// __proto__ links to prototype: {...} property (up the inheritance chain). __proto__ is a link to base functions prototype property
console.log(multiplyBy5.__proto__ === Function.prototype) // True

// __proto__ lives inside the prototype and points up the inheritance chain to next __proto__
console.log(Object.prototype.__proto__) // Last at the chain there is a null object


const array = [];
console.log(array.hasOwnProperty('map')) // false
console.log(array.__proto__.hasOwnProperty('map')) // True - base array has the map in its prototype object

// Thanks to the fact that map/bind etc live on the prototype and are inherited we save the memory as it is stored only in one place in memory