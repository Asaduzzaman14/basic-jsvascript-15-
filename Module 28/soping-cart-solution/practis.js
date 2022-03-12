function updateProductNumber(product, price, isAdd) {
    let productNumber = document.getElementById(product + '-number')
    let productQuantity = productNumber.value;

    if (isAdd == true) {
        productNumber.value = productQuantity += 1
    } else {
        if (productQuantity > 0) {
            productNumber.value = productQuantity -= 1
        }

    }
    productNumber.value = productQuantity;

    // update product total 
    let productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productQuantity * price
    CalculateTotal()
}
// convart product Number 
function getProductNumber(product) {
    let producrQuentity = document.getElementById(product + '-number');
    let quentityValue = parseInt(producrQuentity.value)
    return quentityValue;
}


function CalculateTotal() {
    let phoneTotal = getProductNumber('phone') * 1219;
    let caseTotal = getProductNumber('case') * 59;

    let subtotal = phoneTotal + caseTotal;
    let textTotal = subtotal / 10
    let totalPrice = subtotal + textTotal

    document.getElementById('sub-total').innerHTML = subtotal;
    document.getElementById('tax-amount').innerText = textTotal;
    document.getElementById('total-price').innerText = totalPrice;


}



// 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)



})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)

})
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true)


})
document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false)

})