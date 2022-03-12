function myFun(miles) {

    let fastTenMilesAnim = 10;
    let secondTenMilesAnim = 20;
    let lastMailes = 50

    if (miles <= 10) {

        let fastAnim = miles * fastTenMilesAnim
        return fastAnim;
    }
    else if (miles <= 20) {
        let fastAnim = 10 * fastTenMilesAnim
        let secondMiles = miles - 10

        let secondAnim = secondMiles * secondTenMilesAnim

        let totalAnimales = secondAnim + fastAnim
        return totalAnimales
    }
    else {
        let fastAnim = 10 * fastTenMilesAnim
        let secondAnim = 10 * secondTenMilesAnim
        let lastMiles = miles - 20
        let lastMailesAnim = lastMailes * lastMiles;
        let totalAnimales = fastAnim + secondAnim + lastMailesAnim
        return totalAnimales;



    }
}

let result = myFun(21)
console.log(result);