// AMAZON SHOPPING - this is my solution
let user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const purchaseItem = {
    name: 'Toilet paper',
    price: 100
}

// 1 Add item to cart
function addItemToCart(userObject, itemObject){
    userObject.cart.push(itemObject)
    return userObject;
}


user = addItemToCart(user, purchaseItem)

// 2 Add 3% tax to items in cart
function addTaxtToItem(userObject, tax){
    userObject.cart.forEach(item => {
        item.price = (item.price + item.price * (tax/100))
    });

    return userObject
}

user =  addTaxtToItem(user, 3);
console.log(user)

// 3 buy item by moving it to purcheses
function buyItem(userObject, itemName){
    userObject.cart.forEach((item, index) => {
       if(itemName === item.name){
          userObject.cart.splice(index, 1);
          userObject.purchases.push(item)
       }
    })

    return userObject
}

user = buyItem(user, 'Toilet paper');

// 4 empty cart
function emptyCart(userObject){
    userObject.purchases = [];
    return userObject
}

user = emptyCart(user)
console.log(user)