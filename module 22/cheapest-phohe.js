
let phones = [

    { name: 'samsung s20', price: 20000, camera: 16, storage: 32, },
    { name: 'walton', price: 18000, camera: 6, storage: 32, },
    { name: 'vivo', price: 8000, camera: 8, storage: 32, },
    { name: 'apple', price: 95000, camera: 12, storage: 64, },
    { name: 'oppp', price: 16000, camera: 5, storage: 12, },

]

let lowest = phones[0]
for (let phone of phones) {

    if (lowest.price > phone.price) {
        lowest = phone
    }
}
console.log('this phone is  loweas price', lowest);



// with Function 

/* 
function myFun(Phones) {

    let lowest = Phones[0]
    for (let phone of Phones) {

        if (lowest.price > phone.price) {
            lowest = phone
        }
    }
    return lowest

}

console.log(myFun(phones)); */