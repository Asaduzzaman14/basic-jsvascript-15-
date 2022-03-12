
// How to add all priduct price  form object array;
/* let products = [
    { name: 'laptiop mack', price: 56000 },
    { name: 'watch i5', price: 9120 },
    { name: 'tShirt', price: 2650 },
    { name: 'showes', price: 3580 },
]
let totalPrice = 0;
for (let product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice); */

//


//how to add all product price and multiplay product quaentaty with function



let products = [
    { name: 'laptiop mack', price: 56000, quantity: 2 },
    { name: 'watch i5', price: 9120, quantity: 1 },
    { name: 'tShirt', price: 2650, quantity: 1 },
    { name: 'showes', price: 3580, quantity: 1 },
]

function cart(products) {
    let totalPrice = 0;
    for (let product of products) {
        console.log(product)
        totalPrice = totalPrice + product.price * product.quantity;
        console.log(totalPrice)
    }
    return totalPrice
}

let total = cart(products)
console.log(total);

