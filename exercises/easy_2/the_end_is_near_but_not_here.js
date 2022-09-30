// Date     : 9/29/2022
// Author   @ Joe Centeno

// FileName     : the_end_is_near_but_not_here.js
/* Problem Desc : 
  Write a function that returns the next to last word in the String passed to it as an argument.
*/

// Input  :  
// Output : 

// Test Cases : 
  console.log(penultimate("last word") === "last"); // logs true
  console.log(penultimate("Launch School is great!") === "is"); // logs true

// Rules :
 // Words are any sequence of non-blank characters.
 // You may assume that the input String will always contain at least two words.

// Algorithm : 

// Code :
  function penultimate(inputString) {
    let wordsSplitUp = inputString.split(" ");
    return wordsSplitUp[wordsSplitUp.length - 2];
  } 
