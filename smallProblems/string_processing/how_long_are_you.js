// Date     : 11/16/2022
// Author   @ Joe Centeno

// FileName     : how_long_are_you.js  
/* Problem Desc : 
  Write a function that takes each sub string and 
  displays the substring and its length.
*/

// Input  : string
// Output : array

// Data Structure : 
  // string -> array
  // 'cow' -> ['cow 3']

// Test Cases : 
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

// Rules :
  // if string is empty return empty array
  // if argument is passed in then return empty array

// Algorithm : 
  // split input string on space
  // map over string array
  // return the transformation of `element ${element.length}`

// Code :
function wordLengths(string) {
  if(string === undefined || string === "") {
    return [];
  }

  let arrayOfStrings = string.split(" ");
  
  return arrayOfStrings.map((element) => `${element} ${element.length}`);
}
