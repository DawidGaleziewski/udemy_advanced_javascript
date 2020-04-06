// Immutability - not changing the data/state
// In Fp we want to create a copy of the state and return a new state each time.
const obj = {name: 'Andrei'}
function clone(object){
    return {...object} // This is pure
}

obj.name = 'Nana'; // This is mutating the state. 
// In functional programming we can chage data inside our functions but we do not want to affect the outside world


function updateName(object){
    // if we want to update a object we should do it via a function that clones the object and returns a new one
    const newObject = clone(object;
    newObject.name = 'Nana';
    return newObject;
}

const updatedObject = updatedName(obj);

// We should fallow the principle that "Data does not belong to the function, i borrow it and after use it give it back"