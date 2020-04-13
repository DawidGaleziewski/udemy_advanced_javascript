// REMINDER
/**
 * How async works
 * 1. Once js engine seeys something that is async or belongs to web api like set timeout it sends it over to web API.
 * 2. WEB api is performing something in the background like the operation
 * 3. After it is done it will add what needs to be done (i.e callback function) to a callback queue
 * 4. Event loop checks if the call stack is empty and it pushes the callback to the call stack
 * 
 */

 