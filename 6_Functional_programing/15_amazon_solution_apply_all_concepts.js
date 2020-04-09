// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const laptop = {name: 'laptop', price: 344};

// Cool thing in fp is that we can take a snapshot on each step of the function somehting like logs
let amazonHistory = [];

// CART FEATURE
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchase
// 4. Empty cart

// We want to use normally lodash or other lib for compose, this is example how it works where there are more args then one

const compose = (f,g) => (...args) => f(g(...args));
const pipe = (g,f) => (...args) => g(f(...args)); //we can use pipe to go from left to right with functions

//  we do not know how many functions we get so we want to spread those
// Reducer will go one by one when it comes to functions feeding previous values (accumulator) to f and current value to g
// LEARN MORE ON REDUCERS!
function purchaseItem(...fns){
    return fns.reduce(compose)
}

// Object assing accepts 3 params: empty object, old object, updates to it and clones the object
    // return Object.assign({}, user, {purchases: item}) 




function addItemToCart(user, item){
    amazonHistory.push(user)
    const updatedCart = user.cart.concat([item]); //We use concat to not modify the original cart
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: updatedCart}) // We return new object
};

// console.log('newly returned user',addItemToCart(user,laptop))
// console.log('original user',user) //array is still 0. We have not done any side effects

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.03;
    // We want to update each item in the cart. But we want to return a new object thats why we use map
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: updatedCart })
};

function buyItem(user){
    amazonHistory.push(user)
    return Object.assign({}, user, {purchases: user.cart})
};

function emptyCart(user){
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []})
};


purchaseItem(emptyCart, buyItem, applyTaxToItems,addItemToCart)(user, laptop ); //Now we can pipe all arguments. As it uses compose it will start from right and go to left. First brackets accept the functions that will transform the data and second the data

console.log(purchaseItem(emptyCart, buyItem, applyTaxToItems,addItemToCart)(user, laptop ))

console.log(amazonHistory)

