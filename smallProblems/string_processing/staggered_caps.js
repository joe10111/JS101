// Date     : 10/3/2022
// Author   @ Joe Centeno

// FileName     : staggered_caps.js
/* Problem Desc : 
  Write a function that takes a string as an 
  argument and returns that string with a 
  staggered capitalization scheme.
*/

// Input  :  string 
// Output :  string will all uppercased chars lowercased and all lowercase to upper case


// Test Cases : 
console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
// Rules :
 // - Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. 
 // - Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// Algorithm : 
  // if index === odd 
    // lowercase
  // if index === even
    // uppercase

// Code :
function staggeredCase(string) {
  let count = 1;

 return string.split("").map((char, index) => {
  console.log(count);
  if(typeof char !== "string" || char === "") {
    return char;
  }

  if(index === 0) return char.toUpperCase();

  if(count % 2 === 1) {
    count += 1;
    return char.toUpperCase();
  }
    
  if(count % 2 === 0) {
    count += 1;
    return char.toLowerCase();
  }
  }).join("");
}