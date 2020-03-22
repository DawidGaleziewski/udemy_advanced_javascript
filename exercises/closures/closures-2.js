//  fix the function

const array = [1,2,3,4];

function countDown(index){
    console.log('original, I am at index ' + index)
}

for(var i=0; i < array.length; i++){
    // setTimeout(function(){
    //     console.log('I am at index ' + i)
    // }, 3000)

    setTimeout(countDown(i), 3000)
}

// solution #1 change var to let
for(let i=0; i < array.length; i++){ //let is block scoped. So it creates i for each iterations. i variable is scoped in the for loop brackets scope, not in the anonymus function scope.
// ! before this as we used var we havd a global scope as there was no function surrounding the for loop.
// Due this fact the global scope of i changes and then the timout runs referencing its final state
    setTimeout(function(){
        console.log('let, I am at index ' + i)
    }, 3000)
}

// solution #2 using IIFE
for(var i = 0; i < array.length; i++){
    (function(closureI){
        setTimeout(function(){
            console.log('IIFE, I am at index ' + closureI)
        }, 3000)
    })(i)
}