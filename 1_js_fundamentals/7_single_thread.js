//  SINGLE THREADED and SYNCHRONOUSE

// single thread: one thing can be done at a time.
// when js is running synchrounsly no actions can be undertaken like clicking on the page
// good example of synch issues is running a alert() method and trying to click on the page

// alert('test');

async function testAlertAsync() {
  alert('test async');
}

testAlertAsync();

// Engine is not only thing however. We also have WEB API

// !JACASCRIPT RUNTIME
// Web api can work in the background while engine processes a single thread
// Web api can: send http, listen to DOM click events, fetch(), setTimeout() or set the cache on browser
// Those api functions are provided by browser and not by the javaScript itself

// We can see the api on the Window global object
console.log(window);

// Web apis like fetch are asynchronous
// as soon as call stack gets the function call that belongs to web api it passes it to the web api. Once the data is processed by the web api (i.e some time passes for setTimeout or fetch returns data) it will be passed to callback queue.
// !only once call stack is free the event loop is going to pass the task from callback queue to call stack

console.log('1');
setTimeout(() => {
  console.log('2'), 0;
});
console.log('3');
