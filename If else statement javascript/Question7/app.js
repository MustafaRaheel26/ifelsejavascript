
var operator = prompt('Enter operator ( either +, -, *,/ or % ): ');

var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == "/") {
    result = number1 / number2;
}
else {
    result = number1 % number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);