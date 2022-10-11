// Date     : 0/0/2022
// Author   @ Joe Centeno

// FileName     :  
/* Problem Desc : 
Write a function that takes an integer as an argument and returns the maximum rotation of
 that integer. You can use the rotateRightmostDigits function from the previous exercise.
*/

// Input  : number 
// Output : number rotated max amount of times

// Test Cases : 
/*
let test = require("tape");
test("Roate Test pt3", (t) => {
  t.plan(1);
  t.equal(maxRotation(735291), 321579,);
  //t.equal(maxRotation(3), 3);
  //t.equal(maxRotation(35), 54);
  //t.equal(maxRotation(105), 105);
  t.end();
});
*/
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

// Rules :

// Algorithm : 
  //  

// Code :
function maxRotation(number) {
  let numberLength = String(number).length;

  for(let countOfDigit = numberLength; countOfDigit >= 2; countOfDigit--) {
    number = rotateRightmostDigits(number, countOfDigit);
  }
}

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