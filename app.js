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


var sum = () => {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    result = number1 + number2
}
// var rest = (number1, number2) => number1 - number2;
// var mult = (number1, number2) => number1 * number2;
// var div = (number1, number2) => number1 / number2;

document.getElementById("result").innerHTML = result;