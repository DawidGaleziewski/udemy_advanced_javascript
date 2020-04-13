// With promises callback queue was remade.
// Job queue was added for promises, or the microtask queue.
// microtask/job queue has higher priority then callback queue
// Event loop will first look into job queue before it looks into callback queue




// 1 Callback queue
setTimeout(()=> {
    console.log('1 set timneout after 0 seconds');
}, 0)

setTimeout(()=> {
    console.log('2 set timeout after 10ms')
}, 10)


// 2 Job queue
Promise.resolve('hi').then((data)=> console.log('3 Promise'))


// 0 normal call stack
console.log('0');

// SOME OLD BROWSERS WILL STILL PUT EVERYTHING INTO CALLBACK QUEUE. It is important to not relly on this to much. But expect this to be standarised slowly into job and callback queue in the future