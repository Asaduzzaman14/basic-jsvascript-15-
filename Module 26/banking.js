// handel deposite button event 
document.getElementById('Deposit-btn').addEventListener('click', function () {

    let depositeAmount = document.getElementById('deposite-input');
    // get the amount deposite 
    let depositeAmountValu = parseFloat(depositeAmount.value);  //convart number

    let previusTotal = document.getElementById('deposit-total')


    let totalDeposit = parseFloat(previusTotal.innerText) + depositeAmountValu;


    previusTotal.innerText = totalDeposit;
    depositeAmount.value = ''

    // total blance update 

    let previusBlance = document.getElementById('previus-balnce');
    let previusBlanceValu = parseFloat(previusBlance.innerText);

    let totalBlance = previusBlanceValu + depositeAmountValu;
    previusBlance.innerText = totalBlance;


});

//  withdrow update

document.getElementById('withdrow-btn').addEventListener('click', function () {

    //get user withdrow input
    let withdrowinput = document.getElementById('withdrow-input')
    let withdrow = withdrowinput.value;
    // console.log(withdrow);

    //get the previus value
    let totalWithdrow = document.getElementById('total-withdrow')
    let totalWithdrowValue = totalWithdrow.innerText;
    // console.log(totalWithdrowValue);

    // convart to number 
    let userTotalWithdrow = parseFloat(withdrow);
    let userwithdrowInput = parseFloat(totalWithdrowValue);

    //set all withdrow
    let userWithdrow = userTotalWithdrow + userwithdrowInput;
    totalWithdrow.innerText = userWithdrow

    //blance - withdrow
    let previusBlance = document.getElementById('previus-balnce');
    let previusBlanceValu = parseFloat(previusBlance.innerText);

    let updateBlance = previusBlanceValu - withdrow
    previusBlance.innerText = updateBlance

    withdrowinput.value = ''


});
//




