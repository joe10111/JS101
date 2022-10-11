// Date     : 10/11/2022
// Author   @ Joe Centeno

// FileName     : stringToNumber.js 
/* Problem Desc : 
  Write a function that takes a string of digits and returns the appropriate number as an integer. 
*/

// Input  :  A string of an intger number with no leading + or -
// Output : A integer number of the string inputted

// Data Structure : 

// Test Cases : 
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570);   // logs true

// Rules :
  // Number() || String() || ParseInt()
  // You may not use any of the methods mentioned above.

// Algorithm : 
  // I am going to use the + operator to muate the data type into a integer

// Code :
 function stringToInteger(string) {
  let number = + string;
  return number;
 }
