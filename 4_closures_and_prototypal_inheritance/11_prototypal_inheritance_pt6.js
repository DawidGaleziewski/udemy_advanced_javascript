// Only functions have the prototype propery
function a(){

}

const b = {

}

console.log(a.prototype) // returns {constructor: f}
console.log(b.prototype) // undefined

// Only time we really use prototypes is in "constructor function". Base function and base object are examples of build in constructor function
console.log(Function.prototype);

console.log(Object.prototype); 
// base object is really a constructor function
console.log(typeof Object) //returns function
// Object is a constructor that creates an object wrapper.
// base constructor functions are allso called "build in objects"

// every function has prototype property.
// More build in object constructors
console.log(String.prototype);
console.log(Array.prototype);
console.log(Number.prototype);
console.log(Boolean.prototype)

// When we do something like this:
'string'.length //JS converts string to object and looks into its __proto__, that links to String constructor function that has a .prototype object with this method