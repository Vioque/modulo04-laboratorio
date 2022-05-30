var number1;
var number2;

document.getElementById("number1").addEventListener('change', number1 = document.getElementById("number1").value);
document.getElementById("number2").addEventListener('change', number2 = document.getElementById("number2").value);


console.log(number1());

var sum = (number1, number2) => number1 + number2;
var rest = (number1, number2) => number1 - number2;
var mult = (number1, number2) => number1 * number2;
var div = (number1, number2) => number1 / number2;


console.log(sum(number1,number2));
console.log(rest(number1,number2));
console.log(mult(number1,number2));
console.log(div(number1,number2));
