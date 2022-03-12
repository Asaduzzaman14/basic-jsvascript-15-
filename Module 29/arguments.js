/* 
function getFullNmae(num1, num2) {

    let result = num1 + num2
    return result


}

let add = getFullNmae(12, 32,)
console.log(add); */

/* 
// arguments 
function getFullNmae() {

    let res = 0;
    for (let number of arguments) {

        res = res + number
    }

    return res

}

let add = getFullNmae(12, 32, 26, 22, 34, 33, 44, 66, 6)
console.log(add); */




/* // arguments pase string
function getFullNmae() {

    let fullName = '';
    for (let part of arguments) {

        fullName += part + ' ';
    }

    return fullName;

}

let add = getFullNmae('md', 'rakib', 'sakib', 'riyad', 'noyon')
console.log(add); 
 */


const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());