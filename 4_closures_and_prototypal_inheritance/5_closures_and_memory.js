// Closures give two main benefits:
// Memory efficiency
function heavyDuty(index){
    console.log('Creating heavy duty!')
    const bigArray = new Array(7000).fill(':)');
    return bigArray[index];
};
// Each time we run the function we do a massive operation on memory. We add data to memory
console.log(heavyDuty(500))
console.log(heavyDuty(400))


// Solving this issue
function heavyDutyRefined(){
    // This operations will be done only once saving and storing the data inside the function
    console.log('Creating heavy duty refined!')
    const bigArray = new Array(7000).fill(':)');
    
    // To create a closure we need to return a function
    return function(index){
        return bigArray[index]
    };
};

//  Now we simply use the function to return a function inside of it
const getHeavyDutyRefined = heavyDutyRefined();
console.log(getHeavyDutyRefined(70));
console.log(getHeavyDutyRefined(50));

