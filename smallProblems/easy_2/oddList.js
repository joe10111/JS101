// Date     : 10/11/2022
// Author   @ Joe Centeno

// FileName     :  oddList.js
/* Problem Desc :  
  Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
*/

// Input  : Array
// Output : Array that contains every other element of input Array

// Test Cases : 
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Rules :
// The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Algorithm : 
  // Loop through Array
    // if i % 2 is equal to a remiander of 0 
      // push index value to new array
  // return new array

// Code :
function oddities(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    if((i % 2) === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
