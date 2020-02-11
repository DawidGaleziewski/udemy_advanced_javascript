// ! Watch out for thosein your code

// Calling eval() function
eval(alert('Test'));

// Arguments keyword - better use destructuring
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

// for in - better use Object.keys
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// with

// delete

// Hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

// Compiler will see that we have a objects created
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);


// ! This will cause compiler to run slower
const obj1.a = 2;
const obj1.b = 5;

const obj2.b = 2;
const obj2.a = 5;
// ! to avoid this issue it is better to eaither use a constructor or allways add things in the same order

// inline caching - method od optimizing code
function findUser(user) {
  return `Found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: 'Johnson',
  lastName: 'Junior'
};

findUser(userData);
// If interpreter calls this function and returns the same value again and again it will just cache the return string
