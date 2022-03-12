
// function duplicateElementChack(name) {

//     let uniqu = name[0]
//     for (let i = 0; i < duplicateElementChack.length; i++) {
//         let names = name[i]


//     }
//     return names
// }

// let names = ['rakib', 'sakib', 'akib', 'rofik', 'rakib', 'riaz', 'rakib', 'karim', 'rohim', 'akib', 'riaz']

// console.log(duplicateElementChack(names));



let names = ['rakib', 'sakib', 'akib', 'rofik', 'rakib', 'riaz', 'rakib', 'karim', 'rohim', 'akib', 'riaz']

function duplicate(name) {


    let uniqe = []
    for (let element of name) {
        console.log(element);
        if (uniqe.indexOf(element) == -1) {
            uniqe.push(element)
        }
    }


    return uniqe
}
console.log(duplicate(names));