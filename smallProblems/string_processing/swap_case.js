// Date     : 10/3/2022
// Author   @ Joe Centeno

// FileName     : swap_case.js
/* Problem Desc : 
  Write a function that takes a string as an argument 
  and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/

// Input  :  string 
// Output :  string will all uppercased chars lowercased and all lowercase to upper case


// Test Cases : 
console.log(swapCase('CamelCase'));              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// Rules :

// Algorithm : 

// Code :
function swapCase(string) {
  return string.split("").map((char) => {
    if(char === char.toLowerCase()) {
      return char.toUpperCase();
    } 
    
    if(char === char.toUpperCase()) {
      return char.toLowerCase();
    }
  }).join("");
}
