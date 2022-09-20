// Date      : 6/29/22
// Athour    @ Joe Centeno
// file name : even_numbers.js

// Log all even numbers from 1 to 99,
// inclusive, to the console, with each number on a separate line.

let number = 1;
 
while(number <= 99) {
  if(number % 2 === 0) {
    console.log(number);
  } 

  number += 1;
}

