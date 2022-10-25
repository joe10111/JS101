// Date     : 10/25/2022
// Author   @ Joe Centeno

// FileName     :   
/* Problem Desc : 
Write a function that takes a string and returns an object containing the following three properties:
- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither
*/

// Input  : String of uppercase, lowercase, and other chars
// Output : An object with the percentage of lowercase, uppercase and neither present in string

// Data Structure : 

// Test Cases : 
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Rules :
  // You may assume that the string will always contain at least one character.

// Algorithm : 
  // Get length of string
  // Get count of each letter, either 
    // - Uppercase
    // - Lowercase
    // - Neither 
  // Return Object with Data
  
// Code :
function letterPercentages(stringToCount) {
 let dataObject = stringToCount.split("").reduce((percentageData, currentChar) => {
  if(/[A-Za-z]/g.test(currentChar)) {
    if(/[A-Z]/g.test(currentChar)) {
      percentageData.uppercase += 1;
    } else if(/[a-z]/g.test(currentChar)) {
      percentageData.lowercase += 1;
    }
  } else {
    percentageData.neither += 1;
  } 
    return percentageData;
  }, {lowercase: 0, uppercase: 0, neither: 0});

  return {lowercase: `${(dataObject.lowercase / stringToCount.length) * 100}.0%`, uppercase: `${(dataObject.uppercase / stringToCount.length) * 100}.0%`, neither: `${(dataObject.neither / stringToCount.length) * 100}.0%`} 
}
