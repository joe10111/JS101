// Date     : 10/13/2022
// Author   @ Joe Centeno

// FileName     : signgedNumberTostring.js
/* Problem Desc : 
  Write a function that converts a non-negative integer value to the string representation of that integer.
*/

// Input  : Integer
// Output : String of integer

// Data Structure : 

// Test Cases : 
console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

// Rules :
  // You may not use any of the standard conversion functions available in JavaScript, 
  // such as String(), Number.prototype.toString, or an expression such as '' + number.

// Algorithm : 

// Code :
function signedIntegerToString(signedInt) {
  let signedString = integerToString(signedInt);
  if(signedInt === 0) {
    return 0;
  }

  if(signedString[0] === "-") {
    return `${signedInt}`;
  } else {
    return `+${signedInt}`;
  }
}

function integerToString(int) {
  return `${int}`;
}