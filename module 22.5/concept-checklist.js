// 1. write 3 variable (number,,string.boolean)



// 2. variable using(let,const) and change one variablr value



// 3. comparision 2 ta

// two condation  case-1 fulfill both condation case-2 fulfill at least one condation


// 6. if else use

// 7. print 7 to 19 odd number use while loop


// 8. declare an array. number of element .update or change 4th position element . add or remove element. check weather



// 9. use any for loop to display every element og=f an array


// 10.you have an array of numbers . display only the numbers bigger then 80


// 11. write a function that takes three numbers and return multiplication of the thiree numbers


// 12. declare an object and change any poroperty of that array s



// problam solving javascript

// 1. convardation
/* 
function feetToInch(toInch) {

    let inchi = toInch * 12
    return inchi


}
let feet = feetToInch(2)
console.log(feet);


 */






// 2. conversion
/* 
function centimeterToMeter(toMeter) {

    let meter = toMeter / 100


    return meter
}
let meter = centimeterToMeter(100)
console.log(meter);

 */

// 3.calculation 
/* 
function paperRequirements(FirstBook, secondBook, thirdBook) {
    let firstBookQuantity = 1;
    let secondBookQuantity = 1;
    let thirdBookQuantity = 1;

    let first = firstBookQuantity * FirstBook;
    let second = secondBookQuantity * secondBook;
    let third = thirdBookQuantity * thirdBook;

    let totalPages = first + second + third;
    return totalPages

}

let user = paperRequirements(100, 200, 300)
console.log(user);
 */


// 5 
let number = [12, 43, 0, 54, 23, 01, 23, -23, -11, -9,]


function myFunction(num) {
    let newArray = []

    for (let i = 0; i < num.length; i++) {
        let numm = num[i];

        if (numm >= 0) {
            newArray.push(numm)
        }
        else if (numm < 0) {
            return newArray
        }
    }

    return posetive
}

let result = myFunction(number)
console.log(result);