Function.prototype.myBind = function(obj){
    var newFunction = this.call(obj)
    return newFunction
}


const fish = {
   oxygen: 100,
   getMoreOxygen: function(){
       this.oxygen += 10;
   }
}

console.log(fish);
fish.getMoreOxygen();
console.log(fish);

const axolotl = {
    oxygen: 20
}

// const axolotBreatheFunction = fish.getMoreOxygen.bind(axolotl);
// axolotBreatheFunction()
console.log(axolotl);

const axolotlCustomeBreatheFunction = fish.getMoreOxygen.myBind(axolotl);

console.log(axolotlCustomeBreatheFunction)

// Actual solution:
Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }