let computer = {
    price: '20000',
    storage: '200gb',
    color: 'silver',
    procesor: "intel i5"
}
var colorName = "color";
computer.price = 22333;
computer['price'] = 94949;
computer[colorName] = "blue";
console.log(computer); 
