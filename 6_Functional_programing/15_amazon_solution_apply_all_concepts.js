// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const laptop = {name: 'laptop', price: 344};
// CART FEATURE
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchase
// 4. Empty cart

// We want to use normally lodash or other lib for compose, this is example how it works where there are more args then one

const compose = (f,g) => (...args) => f(g(...args));

//  we do not know how many functions we get so we want to spread those
// Reducer will go one by one when it comes to functions feeding previous values (accumulator) to f and current value to g
// LEARN MORE ON REDUCERS!
const purchaseItem = (...functions) => functions.reduce((compose));

// Object assing accepts 3 params: empty object, old object, updates to it and clones the object
    // return Object.assign({}, user, {purchases: item}) 

purchaseItem(user, laptop );

function itemToCart(){};

function applyTaxToItems(){};

function buyItem(){};

function emptyCart(){};
