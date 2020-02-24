// EXECUTION CONTEXT
// Whenever a function is run (js notices () brackets) new execution context is created
// We always have a global execution context that gives us this keyword and the global object
// Each item on the CALL STACK will create new execution context
this === window;

// When we create new variable we will see it in global variable
var honkHonk = 'honk';
console.log(window.honkHonk);
