function getInputValu(inputId) {

    let inputField = document.getElementById(inputId);
    let userDepositeText = inputField.value;
    let depositeValu = parseFloat(userDepositeText);

    // //clear input fild
    inputField.value = '';
    return depositeValu;

}
function updateTotalFild(totalFildId, amount) {
    let depositeTotal = document.getElementById(totalFildId);
    let previusDepositeText = depositeTotal.innerText;
    let previusDepositeValue = parseFloat(previusDepositeText);

    depositeTotal.innerText = previusDepositeValue + amount

}


function getCurentBlance() {
    let previusBlance = document.getElementById('previus-balnce');
    let blanceText = previusBlance.innerText;
    let balanceVlaue = parseFloat(blanceText); //blance value;
    return balanceVlaue;
}


function updateBlance(amount, isadd) {
    let previusBlance = document.getElementById('previus-balnce');
    // let blanceText = previusBlance.innerText;
    // let balanceVlaue = parseFloat(blanceText); //blance value;
    let balanceVlaue = getCurentBlance()

    if (isadd == true) {
        previusBlance.innerText = balanceVlaue + amount;

    } else {
        previusBlance.innerText = balanceVlaue - amount;

    }

}



document.getElementById('Deposit-btn').addEventListener('click', function () {
    //enter deposit value
    let depositAmount = getInputValu('deposite-input')

    if (depositAmount > 0) {
        updateTotalFild('deposit-total', depositAmount)
        updateBlance(depositAmount, true)
    }

});

//deposit

document.getElementById('withdrow-btn').addEventListener('click', function () {


    let withdrowAmount = getInputValu('withdrow-input')

    const currentBalance = getCurentBlance();
    if (withdrowAmount > 0 && withdrowAmount < currentBalance) {
        updateTotalFild('total-withdrow', withdrowAmount);

        updateBlance(withdrowAmount, false)

    }





})