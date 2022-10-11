// Date     : 7/23/2022
// Author   @ Joe Centeno
// FileName :  word_to_digit.js

// Input  : string
// Output : string with captials inverted

// Test Cases : 
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase(string) {
  let arrayString = string.split("");
  for(let index = 0; index < arrayString.length; index += 1) {
    if((arrayString[index] >= 'A') && ( arrayString[index] <= 'Z')) {
      arrayString[index] = arrayString[index].toLowerCase();
    } else if((arrayString[index] >= 'a') && ( arrayString[index] <= 'z')) {
      arrayString[index] = arrayString[index].toUpperCase();
    }
  }
  return arrayString.join("");
}