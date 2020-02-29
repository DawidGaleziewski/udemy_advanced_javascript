// this - is the object that the function is a property of

// obj.someFunction(this) // this will refer to the obj

console.log(this, 'from global scope'); // Will refer to the window in global scope

function a() {
  // Due to the fact this function was declared in the global scope we can read its invocation as window.a()
  // Therefore function a() is a property of window object, and this keyword in a() function will still refer to window object/global object
  console.log(this, 'from a function');

  //   Most of the issues with this keyword will be it refering to window object, while we expect it to refer to something else
}

a();

function b() {
  // use  strict - will return undefined
  //   'use strict';
  console.log(this); // undefined
}

b();

// Examples where this can be useful
const obj = {
  name: 'Billy',
  sing: function() {
    //   this will refer to the obj of which this function is a property, that is obj
    return 'lalala ' + this.name;
  },

  singAgain: function() {
    // We can invoke functions in this object as well
    return this.sing() + '!';
  }
};

console.log(obj.sing());

console.log(obj.singAgain());

/** Reasons for 'this' existance:
 * 1. Gives methods access to their object
 * 2. Executing same code for multiple objects*/

function importantPerson() {
  console.log(this.name);
}

window.name = 'Sunny';

const obj1 = { name: 'Cassy', importantPerson: importantPerson };

const obj2 = { name: 'Jacob', importantPerson: importantPerson };

importantPerson(); //Returns sunny, as it was declared on the global scope and this refers to window

obj1.importantPerson(); // this refers to obj1 name property, returns Casse

obj2.importantPerson();
