// ex1 - add a new method for Date objects called .lastYear()
Date.prototype.lastYear = function(){ 
     return this.getFullYear() - 1;
}
var date = new Date('1990-10-10')
console.log(date.lastYear())
// const date = Date('1990-10-10')
// console.log(date)

// ex2 - modify the map method
var array = [1,2,3,4] // to the left of the method is this
Array.prototype.map = function(){
     const newArray = [];
     for(var i = 0; i < this.length; i += 1){
       newArray.push(this[i] + ' ~Yar youa re a pirate!~')
     }

     return newArray
}
console.log(array.map())