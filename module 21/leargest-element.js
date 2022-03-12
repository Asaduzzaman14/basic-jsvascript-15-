// fine the leargest element of an array 

// function fineLeargest(numbers) {

//     let leargest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {

//         let element = numbers[i]
//         if (leargest < element) {
//             leargest = element
//         }
//     }
//     return leargest


// }

// let myArray = [12, 34, 23, 54, 32, 12, 32,]
// let oldest = fineLeargest(myArray)
// console.log(oldest);

// with negitive number 
/* 
let negetive = fineLeargest([-2, -3, -6, -9])
console.log(negetive); */

//task 1
// fine the lowest element of an array

function myFun(inputNum) {

    let lowest = inputNum[0];
    for (let i = 0; i < inputNum.length; i++) {

        let element = number[i]

        if (lowest > element) {
            lowest = element
        }


    }
    return lowest
}
let number = [97, 56, 45, 76, 54, 75, 11]
console.log(myFun(number));