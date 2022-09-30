// Date     : 9/29/2022
// Author   @ Joe Centeno

// FileName     : squaring_argument.js

/* Problem Desc : 
  Using the multiply() function from the "Multiplying Two Numbers" problem,
  write a function that computes the square of its argument 
  (the square is the result of multiplying a number by itself).
*/

// Input  :  
// Output : 

// Test Cases : 
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Rules :

// Algorithm : 

// Code :

function square(number) {
  return multiply(number, number);
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}