// Date     : 9/19/2022
// Author   @ Joe Centeno

// FileName     : sum_or_product_of_consecutive_integers.js
/* Problem Desc : 
  Write a program that asks the user to enter an integer greater than 0,
  then asks whether the user wants to determine the sum or the product
  of all numbers between 1 and the entered integer,inclusive.
*/

// Input  : integer greater than 0
// Output : the sum or the product of all numbers between 1 
         // and the entered integer,inclusive.

// Test Cases : 
  /*
  Please enter an integer greater than 0: 5
  Enter "s" to compute the sum, or "p" to compute the product: s
  The sum of the integers between 1 and 5 is 15.
  */

// Rules :

// Algorithm : 
  // Prompt user for number above 0
  // Ask if they want to sum or product number range
    // Sum or product number range
  // return value

// Code :
let readlineSync = require("readline-sync");

function computeSum(targetNumber) {
  let sum = 0;

  for (let number = 1; number <= targetNumber; number += 1) {
    sum += number;
  }

  return sum;
}

function computeProduct(targetNumber) {
  let productTotal = 1;

  for (let number = 1; number <= targetNumber; number += 1) {
    productTotal *= number;
  }

  return productTotal;
}

let targetInteger = readlineSync.question("Please enter an integer greater than 0: ");
let productOrSum = readlineSync.question("Enter s to compute the sum, or p to compute the product: ");

if(targetInteger > 0 || productOrSum.toLowerCase() === 's' || productOrSum.toLowerCase() === 'p' ){
  (productOrSum.toLowerCase() === 's') 
    ? console.log(`The sum of the integers between 1 and ${targetInteger} is ${computeSum(targetInteger)}.`) 
    : console.log(`The product of the integers between 1 and ${targetInteger} is ${computeProduct(targetInteger)}.`);
  } else{
    console.log("Enter a Valid input");
  } 