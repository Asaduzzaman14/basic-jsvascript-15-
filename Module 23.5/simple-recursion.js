/* function recursion(i) {

    if (i < 5) {
        console.log(i);
    }

    recursion(i + 1)
}
recursion(4)
console.log('hello');
 */
/* 
console.log("i++");
for (i = 1; i <= 10; i++) {
    console.log(i);
} */
/* console.log("++i");
for (i = 1; i <= 10; ++i) {
    console.log(i);
} */
/* 
let sum = 0;
for (let i = 5; i > 0; i--) {
    sum = sum + i;

}
console.log(sum); */


// function sum(i) {
//     if (i < 0) {
//         return 0
//     }
//     return sum(i - 1) + i
// }
// console.log(sum(5));

// console.log('hello');


/* 
// factorial 

let fact = 1;

for (let i = 1; i <= 4; i++) {

    fact *= i
}
console.log(fact); */



function fact(i) {

    if (i == 1) {
        return 0
    }
    return fact(--i) * i

}
console.log(fact(5));






