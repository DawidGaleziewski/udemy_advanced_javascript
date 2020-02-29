// IIFE - popular design pattern used by many libs like jQuery or backbone

// We place all of the code inside the local code to avoide namespace colisions

// 1 JS engine sees ()() therefore it reads it as function expression
// 2 as the function inside is anonymus function, it is not assigned to global variables, no global property is created. All properties created are therefore scoped inside the IIFEs anonymus function

let planetName = 'Dune'; // We can access global variables however it is better to feed the IIFE
var godlike = (function(planetName) {
  function createPlanet() {
    return { planetName: planetName, yrOld: 0 };
  }

  return {
    createPlanet: createPlanet
  };
})('Arakis'); // If we feeed IIFE in this way we improve the performance as it does not have to go higher thru the scope chain

console.log(godlike.createPlanet());
