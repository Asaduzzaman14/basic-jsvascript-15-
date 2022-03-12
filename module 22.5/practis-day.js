// 1
// let str = " hello world"
// let bulBul = true;
// let num = 2312;

// 2
// let name1 = 'md';
// const name2 = "asad"

// name1 = name1 + name2
// console.log(name1);

// 3
/*
let num1 = 930;
let num2 = 120;
// sub two variable value
let sub = num1 + num2
console.log("sub", sub);

// sum two variable value
let sum = num1 - num2;
console.log('sum', sum);

// multiply to value
let multiply = num1 * num2;
console.log('multiplay', multiply);

// divided to number
let divd = num1 / num2;
console.log('divd', divd);

// reminder

let modulus = num1 % num2
console.log('modulu', modulus);
 */


// 4 //


// let friends = ['rakib', 'sakib al hasan', "mehadi hasan", 'tamim', 'iqbal']

// function bestFriend(InputFriend) {

//     let best = ' ';

//     for (let i = 0; i < InputFriend.length; i++) {

//         if (InputFriend[i].length > best.length) {
//             best = InputFriend[i]
//         }
//     }

//     return best;
// }

// let sendArr = bestFriend(friends)
// console.log(sendArr);






// 5

/* 
var num1 = 20;
let num2 = 20;


if (num1 <= num2 && num1 == num2) {
    console.log("input is equal");
}

 */


// 6 
/* 
let x = 22.0;
let y = '40hello';

function myFun(x, y) {
    if (x == y) {
        return 'input is iqual'
    }
    else if (x < y) {
        return 'first value small then second value'
    }
    else if (x > y) {
        return 'first value bigger than second value'
    }
    else {
        return 'input is wrong'
    }
}

let res = myFun(x, y)
console.log(res);
 */




// 7
/* 
let oddNum = 0
let i = 6;
while (i < 20) {
    i++;

    if (i % 2 == 1) {

        oddNum = i
    }

}
console.log(oddNum);

 */



// 8
/* 
let arr = [21, 44, 53, 53, 24, 74, 23];

let element = arr.length;
arr[3] = 444
arr.push(11, 9)
arr.pop()

console.log(element);
console.log(arr);
 */

9
/* let arrayElement = ['তুমি', 'কি', 'একটা', 'ফর', 'লুপ', 'দিয়ে', 'কোন',
    'একটা', 'array', 'এর', 'সবগুলা', 'উপাদানকে', 'দেখাতে', 'পারবে']

for (let element of arrayElement) {
    console.log(element);
}
 */


// 10

/* let result = [34, 65, 75, 43, 45, 98, 80, 89, 96, 88, 9];
let bigg = []
for (let aGrade of result) {

    if (aGrade >= 80) {
        bigg.push(aGrade)


    }

} console.log(bigg); */


11

/* function myFun(num1, num2, num3) {

    total = num1 * num2 * num3
    return total;
}
let number = myFun(5, 10, 10)
console.log(number);
 */



// 12 
let student = {
    name: "Md Asaduzzaman",
    id: 101,
    age: 20,
}
// console.log(student);
student.id = 222;
console.log(student);
