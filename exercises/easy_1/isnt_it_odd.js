// Date      : 6/29/22
// Athour    @ Joe Centeno
// file name : isnt_it_odd.js

// Write a function that takes one integer argument, 
// which may be positive, negative, or zero.

function isOdd(number) {
  if((number % 2) !== 0) {
    return true;
  } 
  return false;
}

console.log(isOdd(2));   // => false
console.log(isOdd(5));   // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8));  // => false
console.log(isOdd(0));   // => false
console.log(isOdd(7));   // => true