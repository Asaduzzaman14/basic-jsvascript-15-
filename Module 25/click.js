// onclick
let blue = document.getElementById('blueBg');

blue.onclick = blueFun
function blueFun() {
    document.body.style.background = 'blue'

}

function yeallowColor() {

    document.body.style.backgroundColor = "yellow"
}
// event handler 

let greenBtn = document.getElementById('btnGreen');

greenBtn.addEventListener("click", function () {
    document.body.style.background = "green"
})


//  event handler  sortcut

document.getElementById('btnPink').addEventListener('click', function () {
    document.body.style.background = 'pink'
})