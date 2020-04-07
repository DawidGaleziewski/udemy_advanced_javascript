// Dynamic programming requires caching
// Caching - storing data so you can use them later on.
// Caching helps us speed up the programing
// Memoization is a specific kind of caching

// This is not very efficient if we need to use a loot of data in this function
function addTo80(n){
    console.log('long time');
    return n + 80;
}
addTo80(5);
addTo80(5);
addTo80(5);

// Improvment
let cache = {};
// Memoization is caching the return value basing on its parameters
function memoizedAddTo80(n){
    // in is a way to check if property exists in a object
    if (n in cache){
      return cache[n]; // It will return if the value is cached
    } else {
      console.log('long time memo')
      cache[n] = n + 80; //If the value was not cached yet it will cahce it
      return cache[n]
    }
}

// Thanks to this we run a long time taking operation only once and after that we used the cached data
console.log(memoizedAddTo80(5)); // Will cache data
console.log(memoizedAddTo80(5)); // Will use cahced data
console.log(memoizedAddTo80(6)); // Will cache data again as it has not yet used this param
console.log(cache);

// Ideally we do not want the cache to live in global space
//  This is often used patter in dynamic programming
function advanceMemoizedAddTo80(){
  let functionChache = {}; // We put cache inside the function to avoide polutting global scope and keep it priivate

  // We return a function and use cache from HOF to trigger closure
  return function(n){
    if (n in functionChache){
      return functionChache[n]; 
    } else {
      console.log('long time advanced memo')
      functionChache[n] = n + 80;
      return functionChache[n]
    }
  }
}

// This helps us be very efficient with our code
const memoized = advanceMemoizedAddTo80();
console.log(memoized(500));
console.log(memoized(500));