// var favouriteFood = undefined this gets hoisted
// var foodThoughts = undefined
var favouriteFood = 'grapes';

var foodThoughts = function() {
  // var favouriteFood = undefined - hoisted to top of its execution context
  console.log('Original favourite food: ' + favouriteFood);

  // sushi is asigned to declaration of variable
  var favouriteFood = 'sushi';

  console.log('New favourite food: ' + favouriteFood);
};

foodThoughts();
