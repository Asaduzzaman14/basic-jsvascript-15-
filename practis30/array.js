/* 
// 9
let numbers = [23, 54, 54, 234, 54, 23, 534, 23, 43, 3];

let number = numbers.sort(function (a, b) {
    return a - b
})
console.log(number);

 */





let name = ['name', 'sakib', 'rakib', 'name', 'sAkib']
let same = '';
for (let nam of name) {
    if (nam.toLowerCase().includes('sakib')) {
        same = same + nam + ' ';
    }
}
console.log(same);
