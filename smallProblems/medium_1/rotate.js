// Date     : 9/6/2022
// Author   @ Joe Centeno

// FileName     : rotate.js  
/* Problem Desc : 
  Write a function that rotates an array by moving the first element to the end of the array.
*/

// Input  : Array
// Output : Array Roated

// Test Cases : 
console.log(rotateArray([7, 3, 5, 2, 9, 1]));    // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));       // ["b", "c", "a"]
console.log(rotateArray(['a']));                 // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));      // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                    // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined

// Rules :
  // Do not modify the original array.
  // If the input is not an array, return undefined
  // If the input is an empty array, return an empty array

// Algorithm : 
  // if input is array
    // return undefined if input is not an array
  
  // if the array is empty
    // return empty array
  
  // Slice arrayToRotate starting at index 1
  // concat the first index of arrayToRotate 

// Code :
function rotateArray(arrayToRotate) {
  if(!Array.isArray(arrayToRotate)) {
    return undefined;
  }

  if(arrayToRotate.length === 0) {
    return [];
  }

  return arrayToRotate.slice(1).concat(arrayToRotate[0]);
}