// Date     : 9/19/2022
// Author   @ Joe Centeno

// FileName     : leapYear.js
/* Problem Desc :  
 Write a function that takes any year greater than 0 as input and returns 
 true if the year is a leap year, or false if it is not a leap year.
*/

// Input  : Integer year value
// Output : true or false if its a leap year

// Test Cases : 
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

// Rules :
 // leap years occur in every year that is evenly divisible by 4
    // Unless the year is also divisible by 100.
  // If the year is evenly divisible by 100, then it is not a leap year 
    // Unless the year is also evenly divisible by 400
  // Assume this rule is valid for any year greater than year 0

// Algorithm : 
  // if year is not less then 0 
    // if (year / 4 === 0 and year / 100 !== 0)
      // return true
    // if (year / 100 === 0 and year / 400 === 0)
      // return true
    // return false at end 

// Code :
function isLeapYear(year) {
  // part 2 addition
  if((year < 1752) && ((year % 4) === 0)) {
    return true;
  }
  
  if(((year % 4) === 0) && ((year % 100) !== 0)) {
    return true;
  }

  if(((year % 100) === 0) && ((year % 400) === 0)) {
    return true;
  }

  return false;
}
