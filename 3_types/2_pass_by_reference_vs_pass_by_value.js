// Primitive types are unmutable. In order to change a primitive type it needs to be removed and reasinged if we want to change it. This is passed by value.

var a = 5; // a has a address on where this value is in memory
var b = 10; // b has a address on where this value is in memory

var c = b;
c++;
console.log(`c is: ${c}, b is: ${b}`); // c is 11 while b stays at 10

b++;
console.log(`c is: ${c}, b is: ${b}`); // c is 11 while b is 11.

//! Changing one variable does not affect another that is declared to refer to it. Passing referance to var will do the same thing as passing this value. It will just assign the value to the object. Those are not connected

var obj1 = { name: 'Yao', password: '123' };
var obj2 = obj1;
obj2.password = 'easyPeasy';

console.log(`obj1.password: ${obj1.password}. obj2.password: ${obj2.password}`); //Both change to easy peasy

// ! when we refer to a object (pass by reference) we do not copy the value like with passed by value. We simply point variable to the place the object is in the memory heap

// Advantage of this is that we save space, as we do not have two objects in memory but only one

// We have to be careful not to change the object by mistake.

// ! arrays are also objects in js so they will fallow same logic
var array1 = [1, 2, 3, 4, 5];
var array2 = array1;
array2.push(123453245);
console.log(`array1: ${array1}, array2: ${array2}`); // Both arrays will get modified.

// ! we can clone objects to negate this
var arrayOriginal = ['Storm Troper'];
var arrayClone = [].concat(arrayOriginal);

arrayOriginal.push('Lord Vader');
console.log(`originalArray is: ${arrayOriginal}, arrayClone is: ${arrayClone}`); // Only original array changed as we have created new array

var originalObject = { name: 'Storm Troper', rank: 'cadet' };
// first param is object to copy to, second is what to copy
var clonedObject = Object.assign({}, originalObject);
originalObject.rank = 'general';

console.log(
  `originalObject: ${originalObject.rank}, clonedObject: ${clonedObject.rank}`
); // Only one object will change as we have cloned it

// ! using spread operator for cloning
var clonedObject2 = { ...originalObject };
clonedObject2.name = 'Han Solo';

console.log(
  `originalObject: ${originalObject.name}, clonedObjec2: ${clonedObject2.name}`
); // only the cloned object changes

// ! important, when we have nested objects and we copy like this it wont affects other objects inside. It clones only the first level. We call this the shallow copy
var universe = {
  level: 1,
  makroverse: {
    level: 2,
    miniverse: {
      level: 3
    }
  }
};

var universeClone = { ...universe };
universe.makroverse.miniverse.level = 'gotcha!';
console.log(
  `Original miniverse: ${universe.makroverse.miniverse.level}, Copied universe: ${universeClone.makroverse.miniverse.level}`
); // Both will change as we only did the shallow copy. Objects inside the objects still reference the same thing in memory!

// ! deep cloning
var superOrigininal = {
  a: '1',
  b: {
    c: {
      d: 2,
      e: 3
    }
  }
};

// We firsh change the whole object into a string and then conver it back into a object
var superClone = JSON.parse(JSON.stringify(superOrigininal));

superOrigininal.b.c.d = 'Yikes!';
console.log(
  `superOrigininal.b.c.d: ${superOrigininal.b.c.d}, superClone.b.c.d: ${superClone.b.c.d}`
); // All levels of the object were cloned/
// ! deep cloning of a object can have a performance implication! It should be done rarly and most oftent you are doing something wrong if you are deep cloning
