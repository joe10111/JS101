// Date     : 11/8/2022
// Author   @ Joe Centeno

// FileName     : subString.js 
/* Problem Desc : 
  Write a function that returns a list of all substrings of a string. 
*/

// Input  : string
// Output : sub-strings inside of string

// Data Structure : 
// "string" -> [array]
// "abcde" -> ["a", "ab", "abc", "abcd", "abcde",
//  "b", "bc", "bcd", "bcde",
//  "c", "cd", "cde",
//  "d", "de",
//  "e"]

// test cases
console.log(subStrings('abcde').flat());

// Rules :
  // - Each sub string should start with the first char of word
  // - Shortest to longest

// Algorithm : 
  // Iterate over string. 
    // Everytime we find a new sub string call
    // leadingSubString.js
  
// Code :

function leadingSubstrings(string) {
  return string.split("").reduce((subStringArray, currentString, currentIndex) => {
    if(currentIndex === 0) {
      return subStringArray;
    }
    
    subStringArray.push(subStringArray[currentIndex - 1] + currentString);
    return subStringArray;
  }, [string[0]]);
}

function subStrings(string) {

  return  string.split("").map((currentString, currentIndex) => {
    if(currentIndex === 0) {
      return leadingSubstrings(string);
    }
    let newString = string.slice(currentIndex);
    
    return leadingSubstrings(newString);
  });
}