// Primera parte. Comprobar las operaciones.
// var number1 = 3;
// var number2 = 2;
//
//
// var sum = (number1, number2) => number1 + number2;
// var rest = (number1, number2) => number1 - number2;
// var mult = (number1, number2) => number1 * number2;
// var div = (number1, number2) => number1 / number2;
//
//
// console.log(sum(number1,number2));
// console.log(rest(number1,number2));
// console.log(mult(number1,number2));
// console.log(div(number1,number2));

// Interactuar con los botones de operación
var number1;
var number2;
var result;


var sum = () => {
    number1 = document.getElementById('number1').valueAsNumber
    number2 = document.getElementById('number2').valueAsNumber
    result = isNaN(number1) || isNaN(number2) ? "Error" : number1 + number2
    document.getElementById('result').innerHTML = result
}
var rest = () => {
    number1 = document.getElementById('number1').valueAsNumber
    number2 = document.getElementById('number2').valueAsNumber
    result = isNaN(number1) || isNaN(number2) ? "Error" : number1 - number2
    document.getElementById('result').innerHTML = result
}
var mult = () => {
    var number1 = document.getElementById('number1').valueAsNumber
    var number2 = document.getElementById('number2').valueAsNumber
    result = isNaN(number1) || isNaN(number2) ? "Error" : number1 * number2
    document.getElementById('result').innerHTML = result
}
var division = () => {
    var number1 = document.getElementById('number1').valueAsNumber
    var number2 = document.getElementById('number2').valueAsNumber
    result = isNaN(number1) || isNaN(number2) ? "Error" : number1 / number2
    document.getElementById('result').innerHTML = result
}


