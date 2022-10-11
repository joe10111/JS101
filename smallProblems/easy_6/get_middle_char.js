// Date     : 7/30/2022
// Author   @ Joe Centeno

// FileName     : get_middle_char.js
/* Problem Desc : 
   Find middle characters
*/

// Input  : non-empty letters
// Output : one or two characters

// Test Cases : 
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// Rules :
  // -  If the letters has an odd length return one characters
  // -  If the letters has an even length return two characters

// Algorithm : 
  // if length of input is (=== || < 0)
    // return 0;
  // get length and divide by half, store value as halfWayIndex
  //  check for is even or odd : if(input.length % 2 === 0) 
   // if even 
    // return letters[halfwayIndex] + letters[halfwayIndex + 1]
  // if odd 
    // return letters[halfwayIndex]

// Code :
function centerOf(letters) {
  //console.log(letters);
  if(letters.length <= 0) {
    return 0;
  }

  let halfWayIndex = Math.floor((letters.length - 1) / 2);
  //console.log(halfWayIndex);

  if((letters.length) % 2 === 0) {
    return letters[halfWayIndex] + letters[halfWayIndex + 1];
  } 

  return letters[halfWayIndex];
}