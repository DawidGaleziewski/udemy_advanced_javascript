let array = [];

// Infinite loop
for (let i = 5; i > 1; i++) {
  array.push(i - 1); // Loop will run and it will crash the memory after some time
}

// ! Common memory leak
// Global variables
var a = 1;
// We do not want to many global variables as they take memory

//Even listeners - adding them without removing them
// Event listeners should be removed once not needed
var element = document.getElementById('button');
element.addEventListener('click' onclick)

// setInterval

setInterval(()=>{
    // Unless set interval is cleared. It will keep using memory as it never gets out the stack
    const obj = {test: 'test'}
}, 100)
