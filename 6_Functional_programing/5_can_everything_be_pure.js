/**In practice browsers have to dot hings like:
 * http calls
 * DOM manipulation
 * 
 * Therefore some operations simply cannot be pure fuctions
 * The goal of function programming is not to have ONLY pure functions, but to minimize the side effects
 * 
 * Goal is to separate the side effects like db calls and API calls
 *  */ 

//  What we want from our function:
// - to do one thing and do it well. So that it is easy to test
// - every function should have a return statment!
// - Pure functions
// - no shared state with other function
// - inmmutable state. we canc hange the data, but we always return a new copy
// - composable
// - predictable