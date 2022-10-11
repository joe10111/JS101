// Date     : 9/29/2022
// Author   @ Joe Centeno

// FileName     : exclusive_or.js
/* Problem Desc : 
   The || operator returns a truthy value if either or both of its operands are truthy,
   a falsey value if both operands are falsey. The && operator returns a truthy value 
   if both of its operands are truthy, and a falsey value if either operand is falsey. 
   This works great until you need only one, but not both, of two conditions to be truthy:
   the so-called exclusive or.
*/

// Input  : two integer values or boolean values
// Output : true or false

// Test Cases : 
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// Rules :

// Algorithm : 

// Code :
function xor(numberOne, numberTwo) {
  if(numberOne) {
    if(numberTwo) {
      return false;
    } 
  }
  return true;
}
