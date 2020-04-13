/**
 *  1. What is a program
 It has to alocate memory and pare and execute commands
 In js memory is managed in memory heap and commands in call stack

 #HEAP - we allocate memory for example by declaring variables.
 It is important to know that memory heap is limited. If we overload the memory of the program the browser will break.
 Having to many global variables can cause a memory leak.

 #CALL STACK
 Functions/methods/commands
 *  */

// JS is single threaded language that can be non blocking.
// JS is single threaded because it has only ONE call stack
// Aync is usefull when we want to do time heavy tasks like processing images or api calls
console.log('1');
setTimeout(()=> {
    console.log('2')
}, 2000)

console.log('4');
console.log('5');

// JavaScript run-time enviroment
// It is part of browser that has:
// 1. WEB apis (DOM, AJAX/XMLhttpRequest, Timout)
// 2. Event loop, callback quueu

// !important .addEventListener method also usses event loop