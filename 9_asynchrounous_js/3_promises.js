// Promises are ES6 feature

// PROMISE - object that may produce a single value some time in the future
// PROMISE may return a resolved value or a reason that its not resolved

// PROMISE may have 3 STATES:
/**
 * 1. Fullfiled
 * 2. Rejected
 * 3. Pending
 */

//  CALLBACKS were used before promisses.
// Callbacks helped us do action after the async function finsihes
// it drawback however was CALLBACK PYRAMID OF DOOM
function movePlayer(distance, direction, callback){
    var movment = 'player was moved ' + distance + ' to the ' + direction
    console.log(movment)
    callback()
}

movePlayer(400, 'Left', function(){
    movePlayer(600, 'Right', function(){
        movePlayer(100, 'Top', function(){
            console.log('done')
        })
    })
});


// PROMISE METHOD
const promise = new Promise((resolve, reject)=>{
    console.log('resolve and reject values: ', resolve, reject)
    if(true){
        resolve('Stuff worked');
    } else{
        reject('rejected')
    }
})

// console.log(promise)
// promise.then(resault => console.log(resault))

// CHaining
promise
    .then(result => {
        // throw Error //Catch will still catch the error no matter the nested level of the chain
        console.log(result + "!");
        return result
    })
    .then(result2 => {
        // throw Error
        console.log(result2 + "?")
        return result2
    })
    .then((resault3) => {
        console.log(resault3 + '!?')
        return resault3
    })
    .catch(() =>console.log('Error!')) //Catch will catch any error that happens in the then chain
    .then((resault4)=> {
        throw Error // Catch will only work in statment from promise to itself. resault4 is not in this bracket
        console.log(resault4 + 'after catch?')
    })


    // Promisses help us operate on data we do not yet have.



    // Working with multiple promises
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    }) //Promise all will return values from all promises in a array


// Real life application
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/posts"
];


// Fetch returns a promise so we can use map to generate multiple fetch requests returning multiple promise objects back
Promise.all(urls.map(url=> {
    return fetch(url).then(response => response.json())
})).then(resaults => {
    console.log(resaults[0]);
    console.log(resaults[1]);
    console.log(resaults[2]);
}).catch(() => console.log('error'))