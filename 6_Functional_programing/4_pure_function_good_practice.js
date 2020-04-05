const array = [1,2,3];

function removeLastItem(arr){
    // we use the concat method to create a copy of array in global scope
    const newArray = [].concat(arr) // If we just assing this to array we would referance the same array in memory still causing issues!
    newArray.pop();
    return newArray
}

console.log(removeLastItem(array));
console.log(array) // array in global scope has not mutated

function multiplyBy2(arr){
    return arr.map(item => { // Map by definition wont mutate the original array making it better for this kind of operation on global variables
        return item * 2;
    })
}
console.log(multiplyBy2(array))
console.log(array)

const array1 = removeLastItem(array);
const array2 = multiplyBy2(array)
console.log(array, array1, array2)

// TRICKI QUESTION: is this pure function? :
function cosoled(){
    console.log('hi') // this is not a pure function as we are using window object to log something. And window object is global
}

// 1 REFERENTIAL TRANSPARENCY
function calc(num1, num2){
    return num1 + num2; // we always get the same output
}

// PURE FUNCTIONS BENEFITS:
// + easy to test
// + easy to compose