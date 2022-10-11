// Date     : 8/18/2022
// Author   @ Joe Centeno

// FileName     : letter_case_counter.js  
/* Problem Desc : 
    Write a function that takes a string and returns an object containing 
    three properties: one representing the number of characters in the string 
    that are lowercase letters, one representing the number of characters that 
    are uppercase letters,and one representing the number of characters that
    are neither.
*/

// Input  : String
// Output : object with three properties

// Test Cases : 
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// Rules :
  // only count upper, lower, and other char's
  // 

// Algorithm : 
  // create empty object named letterCases
  // split the string
  // map over indexs
  // select lower case, upper case, and other chars
    // 
  // return joined array

// Code :

  function letterCaseCount(string) {
    let letterCases = {lowercase : 0, uppercase: 0, neither : 0};

     return string.split("").reduce((obj, character) => {
      if(character.toLowerCase() === character.toUpperCase()) {
      obj["neither"] += 1;
        return obj;
      }

      if(character.toLowerCase() === character ) {
        obj["lowercase"] += 1;
          return obj;
      }

      if(character.toUpperCase() === character) {
        obj["uppercase"] += 1;
          return obj;
      }

    }, letterCases);
  }

