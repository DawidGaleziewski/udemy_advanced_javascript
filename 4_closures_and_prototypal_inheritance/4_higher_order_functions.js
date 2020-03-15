// Higher order functions are functions that can take function as a argument, or function that returns a function

// 1. Simple function
function letAdamLogin() {
  // Just to slow down system
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }

  return 'Access Granted to Adam';
}

console.log(letAdamLogin());

// 2. functions with params
function letUserLogin(user) {
  // Just to slow down system
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }

  return 'Access Granted to ' + user;
}

console.log(letUserLogin('Eva'));

// 3 Functions that act as data
function giveAccessTo(name) {
  return 'Access Granted to ' + name;
}
function letUserLoginRefined(user) {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }

  // Now we tell the function what data to use. This helps us to create more generic code
  return giveAccessTo(user);
}

console.log(letUserLoginRefined('Mike'));

// We can use the function in another functions
function letAdminLogin(admin) {
  let array = [];
  for (let i = 0; i < 500000; i++) {
    array.push(i);
  }

  return giveAccessTo(admin);
}

// 4. Higher order function

function authenticate(verify, name) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }

  return 'Access Granted to ' + name;
}

function logOff(verify, name) {
  return 'Logged of user ' + name;
}

function letPerson(person, fn) {
  //Thenks to naming function in generic ways we can now use another function like logoff
  if (person.level === 'admin') {
    return fn(50000, person.name);
  } else if (person.level === 'user') {
    return fn(1000, person.name);
  }

  //   return giveAccessTo(person.name);
}

// Now we can use another function and the params it recives are conditional. We can therefore use one function to authenticate multiple tiers of users
console.log(letPerson({ level: 'user', name: 'Timmy' }, authenticate));
console.log(letPerson({ level: 'admin', name: 'Sally' }, authenticate));
console.log(letPerson({ level: 'admin', name: 'Steve' }, logOff)); // Now we can pass log off functions

// ANOTHER EXAMPLE OF HIGHER ORDER FUNCTIONS
const multiplyBy = function(num1) {
  return function(num2) {
    return num1 * num2;
  };
};

const multiplyByTwo = multiplyBy(2); //It returns a function inside this function with open param
multiplyByTwo(5); // higher order function was called before with 2 therefore every param we use will be multiplied by two
