// Date     : 10/12/2022
// Author   @ Joe Centeno

// FileName     : multiply_all_pairs.js
/* Problem Desc : 
  Write a function that takes two array arguments, each containing a list of numbers, 
  and returns a new array containing the products of all combinations of number pairs 
  that exist between the two arrays.
  */

// Input  : Two arrays
// Output : One array with every combination of multiplication of the elements

// Data Structure : 
 // [2, 4], [4, 3, 1, 2] => [2, 4, 4, 6, 8, 8, 12, 16]

// Test Cases : 
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// Rules :

// Algorithm : 
  // Inizilize resultArray to an empty array to contain results of multiplication
  // Loop over arrayOne
    // for each element in array one multiply it by each element in array two
      // push each result to resultArray
  // return result array sorted a - b for ascending number order

// Code :
function multiplyAllPairs(arrayOne, arrayTwo) {
  let resultArray = [];

  arrayOne.forEach((arrayOneElement) => arrayTwo.forEach((arraytwoElement) => resultArray.push(arrayOneElement * arraytwoElement)));

  return resultArray.sort((a, b) => a - b);
}


