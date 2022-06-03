function calculator() {
// Ask the user for the first number.
const readline = require('readline-sync');
console.log('Calculator Start up \nCoder : Joe Centeno \nInput First Value');
let firstUserInput = readline.question();
// Ask the user for the second number.
console.log('Input Second Value');
let secondUserInput = readline.question();
// Ask the user for an operation to perform.
console.log('What operation do you want to perform? \n * = multiplication \n + = addition \n - = subtraction \n / = divistion');
let thirdUserInput = readline.question();

// Perform the operation on the two numbers.
switch(thirdUserInput) {
    case '+' : return firstUserInput + secondUserInput;
    case '-' : return firstUserInput - secondUserInput;
    case '*' : return firstUserInput * secondUserInput;
    case '/' : return firstUserInput / secondUserInput;

    default : 'Invalid Operator please choose from list';
  }
}

// Print the result to the terminal.
console.log(calculator());

