
function myFun(number) {

    let fHeight = number[0];
    let secondHeight = number[0];
    for (let i = 0; i < number.length; i++) {

        if (number[i] > fHeight) {
            secondHeight = fHeight
            fHeight = secondHeight
        }


        if (number[i] > secondHeight && number[i] < fHeight) {
            secondHeight = number[i]
        }



    }
    return secondHeight


}
let myArray = [12, 34, 53, 25, 84, 75, 34, 53]
let result = myFun(myArray)
console.log(result);