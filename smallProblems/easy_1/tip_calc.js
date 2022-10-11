// Date     : 9/19/2022
// Author   @ Joe Centeno

// FileName     : tip_calc.js
/* Problem Desc : 
  Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
*/

// Input  : Bill and tip amount as strings
// Output : Total Bill + Tip in integer

// Test Cases : 
 /*
  What is the bill? 200
  What is the tip percentage? 15

  The tip is $30.00
  The total is $230.00
 */

// Rules :
  // The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
  // You can ignore input validation and assume that the user will enter numbers.

// Algorithm : 
  // Prompt for bill amount
  // Prompt for tip percentage
  // Calculate tip
  // Calculate total bill amount
  // Display both tip and bill

// Code :
let readlineSync = require("readline-sync");

console.log("What is the bill?");
let bill = readlineSync.prompt();

console.log("What is the tip percentage?")
let rawPercentage = readlineSync.prompt();

let tip = bill * (rawPercentage / 100);

let totalAmount = Number(tip) + Number(bill);

console.log(`Your tip is ${tip} and your total amount is ${totalAmount}`);