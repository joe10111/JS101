// Date     : 11/8/2022
// Author   @ Joe Centeno

// FileName     : leadingSubString.js 
/* Problem Desc : 
  Get the sub strings of a string
*/

// Input  : string
// Output : sub-strings inside of string

// Data Structure : 
// "string" -> [array]
// "abc" -> ["a", "ab", "abc"]
// Test Cases : 
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Rules :
  // - Each sub string should start with the first char of word
  // - Shortest to longest

// Algorithm : 
  // split the string with a empty string 
  // iterate over split string with reduce
    // build towards sub string array
  
// Code :
  function leadingSubstrings (string) {
    return string.split("").reduce((subStringArray, currentString, currentIndex) => {
      if(currentIndex === 0) {
        return subStringArray;
      }
      
      subStringArray.push(subStringArray[currentIndex - 1] + currentString);
      return subStringArray;
    }, [string[0]]);
  }