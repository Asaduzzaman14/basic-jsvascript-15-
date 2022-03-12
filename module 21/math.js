/* let arr = [10, 20, 40, 44, 24, 64, 56, 87, 89]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let arrayList = arr[i]

    sum = sum + arrayList


}
console.log(sum);
 */
// Math
/*
let num1 = 93;
let num2 = 030;

let height = Math.max(arr)
console.log(height);
 */


// task number one

/* function lergestNum(num1, num2, num3) {

    let height = Math.max(num1, num2, num3)
    return height;
}
console.log(lergestNum(23, 66, 211)); */

// task one: write a function to find the smallest of three numbers

/* function lergestNum(num1, num2, num3) {

    let height = Math.min(num1, num2, num3)
    return height;
}
console.log(lergestNum(23, 66, 211)); */


// let fv = Math.random() * 100
// console.log(100 + fv);
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)