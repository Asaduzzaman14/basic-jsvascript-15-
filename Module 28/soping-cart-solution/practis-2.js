function getProductQuentity(inputId, price, isAdd) {
    let phoneNumber = document.getElementById(inputId + '-number')
    let phoneNumberValu = parseInt(phoneNumber.value);
    if (isAdd == true) {
        phoneNumberValu = phoneNumberValu + 1;

    } else if (phoneNumber.value > 0) {
        phoneNumberValu = phoneNumberValu - 1;
    }
    phoneNumber.value = phoneNumberValu

    let phoneprice = document.getElementById(inputId + '-total');
    phoneprice.innerText = phoneNumberValu * price;
    calculate()
};
function getProductNumber(product) {
    let productPrice = document.getElementById(product + '-total');
    let productPriceNumber = parseInt(productPrice.innerText)
    return productPriceNumber


}
function calculate() {
    let phoneTotal = getProductNumber('phone') * 1219
    let CaseTotal = getProductNumber('case') * 59;



}


document.getElementById('phone-plus').addEventListener('click', function () {
    getProductQuentity('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getProductQuentity('phone', 1219, false)

})
document.getElementById('case-plus').addEventListener('click', function () {
    getProductQuentity('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    getProductQuentity('case', 59, false)
})