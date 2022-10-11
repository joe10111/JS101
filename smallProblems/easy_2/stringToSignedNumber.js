// Date     : 10/11/2022
// Author   @ Joe Centeno

// FileName     : stringToSingedNumber.js 
/* Problem Desc : 
  Write a function that takes a string of digits and returns the appropriate number as an integer. 
*/

// Input  : A string of an intger number with a leading + or -
// Output : A integer number of the string inputted

// Data Structure : 

// Test Cases : 
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// Rules :
  // Number() || String() || ParseInt()
  // You may not use any of the methods mentioned above.

// Algorithm : 
  // if strings first index is '-'
    // return negtive infront of a function
  // return stringToInteger(string)

// Code :
function stringToSignedInteger(string) {
  if(string[0] === "-") {
    return -Math.abs(stringToInteger(string));
  }

  return stringToInteger(string);
}


 function stringToInteger(string) {
  let number = + string;
  return number;
 }
