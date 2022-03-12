

let products = [
    { name: 'samsung a10', price: 12000 },
    { name: 'iphone', price: 13400 },
    { name: 'samsung watch', price: 9000 },
    { name: 'apple watch', price: 35000 },
    { name: 'laptop hp', price: 122000 },
    { name: 'walton promo', price: 9000 },
]

function product(products, searchTxt) {

    let result = []
    for (let product of products) {

        if (product.name.includes(searchTxt)) {
            result.push(product)
        }
    }
    return result

}
let res = product(products, 'one')
console.log(res);
