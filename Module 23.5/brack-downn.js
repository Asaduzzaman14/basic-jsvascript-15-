// let products = [
//     { name: 'samsung a10', price: 12000 },
//     { name: 'iphone', price: 3400 },
//     { name: 'samsung watch', price: 10000 },
//     { name: 'apple watch', price: 35000 },
//     { name: 'laptop hp', price: 122000 },
//     { name: 'walton promo', price: 4000 },
//     { name: 'one plus ', price: 12000 },
//     { name: '4k display', price: 5000 },
// ]

// for (let product of products) {
//     if (product.price < 5000) {
//         continue
//     }
//     // if (product.price < 5000) {
//     //     break
//     // }
//     console.log(product);


// }
// console.log();
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}