import { stdout } from 'node:process';

// Date     : 7/21/2022
// Author   @ Joe Centeno
// FileName :  find_the_dup.js

// Input  : Array with matching intger pair 
// Output : Intger value 

// Test Cases : 
console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([1, 5, 3, 3, 4, 5, 8, 9]));       
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

  console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
            38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
            14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
            78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
            89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
            41, 44, 83, 35, 94, 88, 98,  3, 64, 82,
            55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
            85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
            40, 23, 71, 62, 88, 32, 43, 24,  4, 56,
             7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 88

// Outcome : Determine which value occurs twice 
// Rules:
// - One value in the array only occurs twice (One pair)
// - All other values are unique

// Algorithm: 
// - Save first inputArray index value to compare
// Loop untill length of input aarray 
  // - Loop over inputArray index values after compare value index
    // - If compare value is equal to inputArray index value
      // - Return inputArray[index]
    // - Increase index counter untill input arrayLength is reached
  // - Increase compare value index by one

// Code :

function findDup(inputArray) {
  let potentialDuplicate = 0;
  let comapreValue = inputArray[potentialDuplicate];

  while(potentialDuplicate < inputArray.length) {
    comapreValue = inputArray[potentialDuplicate];

    let duplicateToCompare = potentialDuplicate + 1;
    //console.log(comapreValue);

    while(duplicateToCompare < inputArray.length) {
      stdout.write(`${duplicateToCompare}-`);

      if(comapreValue === inputArray[duplicateToCompare]) {
          return inputArray[duplicateToCompare];
      }
      duplicateToCompare += 1;
    }
    potentialDuplicate += 1;
  }
  return 'No Match Found';
}