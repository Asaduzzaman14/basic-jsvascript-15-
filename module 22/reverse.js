
let pra = 'hello, how are you'

function reverseString(text) {
    let reversr = '';
    for (let letter of text) {

        reversr = letter + reversr
    }
    return reversr

}

let revers = reverseString(pra)
console.log(revers);