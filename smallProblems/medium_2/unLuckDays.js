// Date     : 10/14/2022
// Author   @ Joe Centeno

// FileName     :  unLuckyDays.js
/* Problem Desc : 
  Write a program that counts the number of friday 13ths in a given year
*/

// Input  : integer of year
// Output : count of fridays 13ths

// Data Structure : 
  // 1986 -> 1
  // 2015 -> 3

// Test Cases : 
  console.log(fridayThe13ths(1986));      // 1
  console.log(fridayThe13ths(2015));      // 3
  console.log(fridayThe13ths(2017));      // 2

// Rules :
  // Use time date object  

// Algorithm : 
  // Iterate over all the months of the given year.
  // For each month, get the day that falls on the 13th.
  // Count the 13ths that fall on a Friday.
  // Return the count.

  // Code :
 
  function fridayThe13ths(year) {
    const FRIDAY = 5;
    const THIRTEEN = 13;

    let collectionOfthirteenths = [];

    for(let month = 0; month < 12; month += 1) {
      collectionOfthirteenths.push(new Date(year, month, THIRTEEN));
    }

    return collectionOfthirteenths.reduce((fridayCount, day) => {
      if(day.getDay() === FRIDAY) {
        return (fridayCount + 1);
      } 
      
      return fridayCount;
    }, 0);
  }
  