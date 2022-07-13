let readlineSync = require("readline-sync");

let inputNumbers = [];

// Ask user for first input
// Push number to input Numbers

// Create an array with question number strings to display
// Create an itorator to loop over questions

// While itorator is not greatpr or equal to 5
    // Console.log the question string with question number
    // get user input and push to number array
    // increment itorator

let questionNumber = ['One', 'Two', 'Three', 'Four', 'Five', 'Searching'];
let index = 1;

while(index <= 6) {
    console.log(`Enter the ${questionNumber[index - 1]} number`);
    inputNumbers.push(readlineSync.prompt());
    index += 1;
}

if(inputNumbers.slice(0,5).includes(inputNumbers[5])) {
    console.log("Number in range");
} else {
    console.log("Number not in range");
}

console.log(inputNumbers.slice(0,5));
/*
// 1st Question
console.log("Enter the first number");
inputNumbers.push(readlineSync.prompt());

// 2nd Question
console.log("Enter the second number");
inputNumbers.push(readlineSync.prompt());

// 3rd Question 
console.log("Enter the third number");
inputNumbers.push(readlineSync.prompt());

// 4th Question
console.log("Enter the fourth number");
inputNumbers.push(readlineSync.prompt());

// 5th Question
console.log("Enter the fith number");
inputNumbers.push(readlineSync.prompt());

// 5th Question
console.log("Enter the searching number");
let numberToFind = readlineSync.prompt();
*/

// Search input numbers for number to find
// if it returns the true console.log 
 // number is in range
// if it returns false console.log 
 // number is not in range
