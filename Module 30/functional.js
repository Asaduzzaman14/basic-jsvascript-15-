// 
function getInnerText(inputId) {
    let depositAmount = document.getElementById(inputId);
    let depositAmountValue = parseFloat(depositAmount.value)
    depositAmount.value = ''
    return depositAmountValue;

}
//  get total balance value
function getInnerTextValue(inputId) {
    let previusBalance = document.getElementById(inputId)
    let previusBalanceValue = parseFloat(previusBalance.innerText);
    return previusBalanceValue
}

// update amount deposit and withdrow
function updateTotal(inputId, amount) {

    let previusTotal = getInnerTextValue(inputId)
    let newTotal = previusTotal + amount;
    document.getElementById(inputId).innerText = newTotal
    return newTotal

}
// update total blance form deposit and withdrow
function updateBalance(amount, isAdding) {

    let previusBalanceValue = getInnerTextValue()
    if (isAdding == true) {
        newBalance = previusBalanceValue + amount;
    }
    else {
        newBalance = previusBalanceValue - amount;
    }
    document.getElementById('previus-balnce').innerText = newBalance;
}


document.getElementById('Deposit-btn').addEventListener('click', function () {
    let amount = getInnerText('deposite-input');

    if (amount > 0) {
        updateTotal('deposit-total', amount)
        updateBalance(amount, true)

    }

})
document.getElementById('withdrow-btn').addEventListener('click', function () {

    let amount = getInnerText('withdrow-input');
    let balance = getInnerTextValue('previus-balnce')
    if (amount > 0 || amount <= balance) {
        updateTotal('total-withdrow', amount)
        updateBalance(amount, false)

    }


})