// Date     : 9/29/2022
// Author   @ Joe Centeno

// FileName     : arithmetic_integer.js
/* Problem Desc : 
  Write a program that prompts the user for two positive integers, and then prints
  the results of the following operations on those two numbers: addition, subtraction,
    product, quotient, remainder, and power. Do not worry about validating the input.
*/

// Input  : Two Integer numbers
// Output : Addition, Subtraction, Multiplication, Divition, modulo, and Square-Root of the
// two input numbers 

// Test Cases : 


// Rules :

// Algorithm : 

// Code :
let readline = require('readline-sync');

let numberOne = readline.question("Enter First Number  :");
let numberTwo = readline.question("Enter Second Number :");

console.log("Addition:      ",numberOne + numberTwo);
console.log("Subtraction:   ",numberOne - numberTwo);
console.log("Multiplication:",numberOne * numberTwo);
console.log("Divition:      ",numberOne / numberTwo);
console.log("Modulo:        ",numberOne % numberTwo);
console.log("Square-Root:   ",numberOne ** numberTwo);

