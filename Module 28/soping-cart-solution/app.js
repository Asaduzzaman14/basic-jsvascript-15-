function updateProductNumber(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber

    //update product total amount
    let productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price

    CalculateTotal()

};

// caculate total price 
function getInputNumber(product) {
    let productInput = document.getElementById(product + '-number')
    let productNumber = parseInt(productInput.value);
    return productNumber;
}

function CalculateTotal() {
    let phoneTotal = getInputNumber('phone') * 1219;
    let caseTotal = getInputNumber('case') * 59;
    let subTotal = phoneTotal + caseTotal;
    let totalText = subTotal / 10;
    let totalPrice = totalText + subTotal;

    //update sub total
    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount').innerHTML = totalText;
    document.getElementById('total-price').innerHTML = totalPrice;
}

//phone number incress decress
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})


//case number increse decres event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)

})