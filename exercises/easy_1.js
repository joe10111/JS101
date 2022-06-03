// 1.0 - Isn't it Odd?
function isOdd(number) {
    let postive_int = Math.abs(number);
    if(postive_int % 2 !== 0) {
        return true;
    }
  return false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// 1 : get absolute value of number
// 2 : determine if odd

// 1.1 - Odd Numbers
// Log all odd numbers from 1 to 99,
// inclusive, to the console, with each number on a separate line.
/*let num = 1;
while(num <= 99) {
    console.log(num + '\n');
    num += 2;
}*/

// 1.2 - Even Numbers
// Log all even numbers from 1 to 99, inclusive,
// to the console, with each number on a separate line.
let num = 1; 
while(num <= 99) {
    if((num % 2) === 0) {
        console.log(num + '\n');
    }
    num += 1;
}

// 1.3 - how big is the room?
// Build a program that asks the user to enter the length and width of a 
// room in meters, and then logs the 
// area of the room to the console in both square meters and square feet.

let readlineSync = require('readline-sync');
console.log('Enter the length of the room in meters:');
let prompt_length = readlineSync.prompt();

console.log('Enter the width of the room in meters:');
let prompt_width = readlineSync.prompt();

console.log(`The area of the room is ${prompt_length * prompt_width } square meters`)