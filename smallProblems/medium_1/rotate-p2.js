// Date     : 9/7/2022
// Author   @ Joe Centeno

// FileName     : rotate-p2.js
/* Problem Desc : 
  Write a function that rotates the last count digits of a number. 
  To perform the rotation, move the first of the digits that you
  want to rotate to the end and shift the remaining digits to the left.
*/

// Input  : an integer and the number of rotations
// Output : rotated intger 

// Test Cases :
let test = require('tape');
//console.log("735291 =", rotateRightmostDigits(735291, 1));      // 735291
//console.log("735219 =", rotateRightmostDigits(735291, 2));      // 735219
//console.log("735912 =", rotateRightmostDigits(735291, 3));      // 735912
//console.log("732915 =", rotateRightmostDigits(735291, 4));      // 732915
//console.log("752913 =", rotateRightmostDigits(735291, 5));      // 752913
//console.log("352917 =", rotateRightmostDigits(735291, 6));      // 352917
test("rotate-test", (t) => {
  t.plan(2);
  t.equal(rotateRightmostDigits(735291, 1), 735291, "Roate 1");
  t.equal(rotateRightmostDigits(735291, 2), 735219, "Roate 2" );
  t.end();
});
// Rules :
  // Rotate the last count digits of the original number.
  // Leave the first digit in the same order.

// Algorithm : 
// convert the original number to a string
//split the string into two parts:
  // the part to remain unchanged 
  // the part to be rotated
// rotate the second part
// join the first part back together with the rotated second part
//convert the string to a number
// return roated number

// Code :
function rotateRightmostDigits(number, placesOfRotation) {
    // convert number to string
  let numberString = String(number); 
    // define part one and part two split point
  let indexToStart = numberString.length - placesOfRotation;
    // get inital number that will remain unchanged
  let initialNumber = numberString.slice(0, indexToStart); 
    // get the rightmost number that will be roated
  let rightMostPart = numberString.slice(indexToStart); 
    // take the initalNumber and add that to the roated string
  let result = initialNumber + rotateString(rightMostPart);
    // return the result string and convert back to number
  return Number(result);
}

function rotateString(string) {
  // slice the string end portion then add begging to end
  return string.slice(1) + string[0];
} 

// Take aways
  // Time taken
    // 1.5 hours with breaks
  // Things I learned 
  // if I want to swap somthing I can always use 
    // [a,b] = [b,a] even though I didnt use it here it was one soultion I found
  // I was using the incorrect data structure, they suggested I used strings and hinted at what I needed to do 
  // I didnt lisen and overly complicated the problem
  // after taking a break I tried it with strings and it went way smoother
  // I am my greatest optistical 

// NOTES: 
 // move past swap and find new method
  // Methods I used but scrap, but want to share with Beaei
 // arrayOfNumber.slice(1).concat(arrayOfNumber[0]);
 // [rightMostPart[0], rightMostPart[rightMostPart.length - 1]] = [rightMostPart[rightMostPart.length - 1], rightMostPart[0]];