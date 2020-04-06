// HOF
// HOF takes one or more function as param, or returns a function as a resault

const hof1 = ()=>  () => 5;
console.log(hof1())

const hof2 = (fn) => fn(5)
hof2((arg)=>arg)

// Closure - mechanisme for containing a state
//  We create a closure when function is defined as variable outside of imidiate invoked scope

const closure = function(){
    let count = 0; // Closure is created as increment accesses variable outside of its scope
    return function increment(){
        count++; // in pure functions we can return state of closures, but we should not mutate it.
        return count;
    }
}

const increment = closure();
increment()
increment()
increment()
console.log(increment())

// Example of pure function that is using closure
const counter = function(){
    let counter = 55;
    return function(){
        return counter;
    }
}

const  getCounter = counter();
console.log(getCounter()) // We get data and do not mutate it. so this is a pure function. Benefit of this is that we just have created a private state