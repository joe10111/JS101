// Date     : 8/18/2022
// Author   @ Joe Centeno

// FileName     :  delete_vowels.js
/* Problem Desc : 
  Write a function that takes an array of strings and 
  returns an array of the same string values, 
  but with all vowels (a, e, i, o, u) removed.
*/

// Input  : array of strings with vowels
// Output : array of strings with no vowels

// Test Cases : 
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// Rules :
  // Input string needs to contain vowels
  // Input string / array should not be changed besides for removing vowels
    // Case is the same
    // positon in index is the same
    // structure of array is same

// Algorithm : 
  //  map the array (since structure needs to remain intact map is the best choice)
    // use replace on each string
    // using regex I will select vowels reaplacing with ""
  // return the array

// No regex Algo
 // map the arrayOfStrings
 // split each string
 // filter each string with the return containg no vowels
   // switch each index to select vowels 


// Code :
function removeVowels(arrayOfStrings) {
  // return arrayOfStrings.map((string) => string.replace(/[aeiou]/gi, ""));
  
  return arrayOfStrings.map((string) => string.split("").filter((char) => { 
    switch(char) {
      case "a" : 
        return false;
      case "A" : 
        return false;
      case "e" : 
        return false;
      case "E" :
        return false;
      case "i" :
        return false;
      case "I" : 
        return false;
      case "o" : 
        return false;
      case "O" :
        return false;
      case "u" : 
        return false;
      case "U" : 
        return false; 
      default : 
        return true;
    }
  }).join(""));
}