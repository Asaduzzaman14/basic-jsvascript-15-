function getPin() {
    let pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('get 3 degite alling again', pin);
        return getPin()
    }
}

function genatetPin() {

    let pin = getPin()
    let display = document.getElementById('display-pin')
    display.value = pin;

}
document.getElementById('key-pad').addEventListener('click', function (e) {
    let number = e.target.innerText
    let calcInput = document.getElementById('key-numbers')

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    }
    else {
        let previusNumber = calcInput.value;
        let newNumber = previusNumber + number;
        calcInput.value = newNumber;
    }

})


function varifypin() {
    let genaretPin = document.getElementById('display-pin').value;
    let myPin = document.getElementById('key-numbers').value;
    let correct = document.getElementById('notify-pass')
    let wrong = document.getElementById('notify-faill')

    if (genaretPin == myPin) {
        correct.style.display = "block"
        wrong.style.display = "none"
    }

    else {
        wrong.style.display = "block"

        correct.style.display = "none"
    }
}