// Date     : 7/30/2022
// Author   @ Joe Centeno

// FileName     : reverse_number.js 
/* Problem Desc : 
  Write a function that takes a positive integer as an 
  argument and returns that number with its digits reversed. 
*/

// Input  : positive integer 
// Output : reversed positive integer 

// Test Cases : 
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1

// Rules :
  // - Return a postive integer
  // - Return the ornial integer but reversed 

// Algorithm : 
  // - Guard if    : not a postive integer return 0; 
  // - .split()    : convert the integer to a array  
  // - .reverse()  : reverse array
  // - .join()     : convert the array to a number

// Code :
function reverseNumber(integer) {
  if(integer < 0) {
    return 0;
  }

  let arrayInteger = integer.toString().split("");
  let reversedArray = arrayInteger.reverse();
  let integerToParse = reversedArray.join("");

  return parseInt(integerToParse);
}
