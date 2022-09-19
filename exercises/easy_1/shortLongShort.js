// Date     : 0/0/2022
// Author   @ Joe Centeno

// FileName     :  
/* Problem Desc : 

*/

// Input  : two strings differing in length
// Output : one string formatted with
         // the shortest string first 
         // then longest then shortest

// Test Cases : 
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

// Rules :
 // You may assume that the strings are of different lengths.

// Algorithm : 
  // if length of first string is greater then second
   // return stringTwo + stringOne + StringTwo
  // else 
   // return stringOne + StringTwo + stringOne
   
// Code :
function shortLongShort(stringOne, stringTwo) {
  if(stringOne.length > stringTwo.length) {
    return `${stringTwo}${stringOne}${stringTwo}`;
  } else {
    return `${stringOne}${stringTwo}${stringOne}`;
  }
}