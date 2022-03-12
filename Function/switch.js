//   switch
//   loop break, loop continue, with for nand while

// function, sub, sum, multi, division, modulus,
// pass 3 paramiter  in fun
// function num(num1) {
//     for (i = 1; i <= 10; i++) {

//         let result = (i * num1);
//       console.log();
//     }
//     //  let res =  num1 + "X" i + "=" + result


// }
// let result = num(13)
// console.log(result);

function multiFs(num) {
    let newArray = [];
    for (let i = 1; i <= 10; i++) {
        let sum = num * i;
        var result = num + " X " + i + " = " + sum;
        if (sum == parseInt(sum)) {
            newArray.push(result);
        }
        // console.log();
    }
    return newArray;
}
let myNum = multiFs(13);
console.log(myNum)

// console.log("hello");

// // inci to fit convart
// function inciToFit(val) {
//     let res = val / 12;
//     return res;
// }
// let qus = 150;
// let fit = inciToFit(qus)
// console.log(fit);


// miles to kelometer
// function myFun(miles) {
//     let result = miles * 1.609344
//     return result
// }
// let miles = 2;

// let kelo = myFun(miles)
// console.log(kelo);

// leap year chack
// function year(valu) {
//     if (valu % 4 == 0) {
//         return true
//     }
//     return false
// }
// let sum = 2032;

// let aa = year(sum)
// console.log(aa);

// even or odd
// function myFun(num) {
//     if (num % 2 == 1) {
//         return true;
//     }
//     return false
// }
// }
// let num = 6;
// let res = myFun(num)
// console.log(res);

// function myFun(year) {
//     if (year % 4 == 0 && year % 100 != 0) {
//         return true;

//     }
//     return false
// }
// let isleap = myFun(2100)
// console.log(isleap);















