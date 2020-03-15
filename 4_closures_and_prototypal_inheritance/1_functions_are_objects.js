// Functions and arrays are objects
// When function is created in its execution context it has access to this and arguments
// function can be invoked normally or as a method

function func1() {
  return 1;
}

func1();

const obj1 = {
  // es5 method
  func2: function() {
    return 2;
  },
  //   es6 method
  func3() {
    return 3;
  }
};

obj1.func2();

// We can invoke functions using call() method
// func1.call();

// Invoking by FUNCTION CONSTRUCTOR
const func4 = new Function('return 4');
func4();

// JS functions are also objects which is not very common
func1.yell = 'ehooo';
console.log(func1.yell);

// What is happening under the hood (sudo code)
const specialObj = {
    yell: 'ehoo',
    name: 'func1',
    (): return 1
}


/**
 * We can think about functions as a objects that have their own
 * Code() - we can invoke with brackets
 * name (optional we can use anonymus functions, same with expressions)
 * default properties like call(), apply(), bind()
 * 
 */

//  Functions therefore are a special kind of object with its unique methods that are callable by ().

// ! as functions are objects we can pass them and they can store data

