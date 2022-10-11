// Date     : 9/28/2022
// Author   @ Joe Centeno

// FileName     : bubbleSort.js
/* Problem Desc : 
  A bubble sort works by making multiple passes (iterations) through an array.
   On each pass, the two values of each pair of consecutive elements are compared. 
   If the first value is greater than the second, the two elements are swapped. 
   This process is repeated until a complete pass is made without performing any swaps.
  At that point, the array is completely sorted.
*/

// Input  : Array with at least two elements
// Output : Array bubble sorted in place (mutated input array)

// Test Cases : 
let tape = require("tape");
let array1 = [5, 3];
let array2 = [6, 2, 7, 1, 4];
let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];

tape("Bubble-Sort-Test", function (test) {
  test.plan(4);
  test.deepEqual(bubbleSort([]), [], "Empty Array");
  test.deepEqual(bubbleSort(array1), [3,5], "Two Array Values");
  test.deepEqual(bubbleSort(array2), [1,2,4,6,7], "Five Array Values");
  test.deepEqual(bubbleSort(array3), ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"], "Array of Strings");
  test.end();
});
     
// Code :
function bubbleSort(arrayToSort) {
  if(arrayToSort.length < 2) {
    console.log("Input Array greater then two elements");
    return arrayToSort;
  }

  while(true) {
    let swapped = false;
    for(let index = 1; index < arrayToSort.length; index += 1) {
      if(arrayToSort[index - 1] <= arrayToSort[index]) continue;
      
      let temp = arrayToSort[index - 1];
      
      arrayToSort[index - 1] = arrayToSort[index];
      arrayToSort[index] = temp;
      swapped = true;
    }

    if(swapped !== true) break;
  }
  
  return arrayToSort;
}
