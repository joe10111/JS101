// 1.0 - Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.replace("important", "urgent")

console.log(advice);

// 2.0 - Write two distinct ways of reversing the array 
// without mutating the original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();

console.log(numbers.slice().reverse());
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);

console.log([...numbers].sort((num1, num2) => num2 - num1));
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// 3.0 - Given a number and an array, determine whether the number is included in the array.
let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers2.includes(number1));
console.log(numbers2.includes(number2));

// 4 - show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
let fourScore = "Four score and ";
console.log(fourScore + famousWords);
console.log(fourScore.concat(famousWords));

// 5 - splice array to remove
let array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);

// 6 - nested array unnesting
let nameArray = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log([].concat(...nameArray));

// 7 - 
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// 8 -  How would you check whether the objects assigned to variables numbers and table below are arrays?
let numbers4 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers4));
console.log(Array.isArray(table));

// 9 - Back in the stone age (before CSS), we used spaces to align things on the screen.
// If we have a 40-character wide table of Flintstone family members, how can we center 
// the following title above the table with spaces?

let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

// 10 - Write a one-line expression to count the number of lower-case t characters in each of the following strings
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function count_t(string) {
  return string.split("").filter((char) => char === "t").length;
}
console.log(count_t(statement1));
console.log(count_t(statement2));