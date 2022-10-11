// Date     : 7/23/2022
// Author   @ Joe Centeno
// FileName :  word_to_digit.js

// Input  : string
// Output : string with int values in place of substrings

// Test Cases : 

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
// Please call me at 5 5 5 1 2 3 four. Thanks.

// Algorithium 
 
function wordToDigit(string) {
  let arrayString = string.split(" ");
  let counter = 0;
  while(counter < arrayString.length) {
    switch(arrayString[counter].replace(/\.$/, "")) {
        case 'one' : arrayString[counter] = 1;
          break;
        case 'two' : arrayString[counter] = 2;
          break;
        case 'three' : arrayString[counter] = 3;
          break; 
        case 'four' : arrayString[counter] = 4;
          break;
        case 'five' : arrayString[counter] = 5;
          break;
        case 'six' : arrayString[counter] = 6;
          break; 
        case 'seven' : arrayString[counter] = 7;
          break;
        case 'eight' : arrayString[counter] = 8;
          break;
        case 'nine' : arrayString[counter] = 9;
          break;
    }
    counter += 1;
  }
  return arrayString.join(" ");
}