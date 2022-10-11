// Date     : 9/19/2022
// Author   @ Joe Centeno

// FileName     : multiOfThreeFive.js
/* Problem Desc : 
  Write a function that computes the sum of all numbers
  between 1 and some other number, inclusive, that are
  multiples of 3 or 5.
*/

// Input  : Number greater than 0
// Output : Sum of multiples of number input

// Test Cases : 
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
 //  For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
// Rules :
  // You may assume that the number passed in is an integer greater than 1.

// Algorithm : 
  // set sum = 0
  // loop through each number up to the maxValue 
    // Check if each number is a multiple
    // if true then add number to sum
  // return sum
// Code :

function isMultiple(number, divider) {
  return number % divider === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}