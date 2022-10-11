// Date     : 10/5/2022
// Author   @ Joe Centeno

// FileName     : alphabeticalNumbers.js
/* Problem Desc : 
Write a function that takes an array of integers
between 0 and 19 and returns an array of those
integers sorted based on the English word for 
each number:
*/

// Input  : Array of integers unsorted zero - nineteen
// Output : Array of Integers Sorted Alphabeticaly

// Test Cases : 

const INTEGER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Rules :

// Algorithm :
// Define const array called INTEGER_WORDS with names of each integer present in array
// Make a helper function to sort
  // if INTEGER_WORDS[NumberOne] >  INTEGER_WORDS[NumberTwo]
    // return true
  // if INTEGER_WORDS[NumberOne] >  INTEGER_WORDS[NumberTwo]
    // return false
  // else if program is at the end
    // return zero
// Sort by alphibetical using helper function

// Code :

function alphabeticNumberSort(arrayOfIntegers) {
  return [...arrayOfIntegers].sort(sortIntegerWords);
}

function sortIntegerWords(integerOne, integerTwo) {
  if(INTEGER_WORDS[integerOne] > INTEGER_WORDS[integerTwo]) {
    return 1;
  } else if(INTEGER_WORDS[integerOne] < INTEGER_WORDS[integerTwo]) {
    return -1;
  } else {
    return 0;
  }
}