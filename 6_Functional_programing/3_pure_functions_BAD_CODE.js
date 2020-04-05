// PURE FUNCTIONS - pillar of the functional programming

// a) function must always return same output, given the same input
// b) function cannot modify anything outise of itself

// INCORRECT WAY OF DOING THINGS
const array = [1,2,3];

function a(arr){
    arr.pop() // this function has side effects. It will modify something about itself
}

a(array)
console.log(array) // only 1 and 2

function b(arr){
  arr.forEach(item => {
      arr.push(1) // This function also has effect on the array outside its scope
  })
}
b(array)
console.log(array)

// As we have a shared state with a variable outside those functions scope, predicing what will happen is hard and this can cause a lot of bugs