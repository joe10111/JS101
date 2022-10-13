// Date     : 10/13/2022
// Author   @ Joe Centeno

// FileName     : selectionAndTransformation.js
/* Problem Desc : 
  Selection and Transformation problems
*/

// #1 
// Disc : How would you implement this function?

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// Awnser :
function selectFruit(produceObject) {
 let fruitObject = {};
 let produceArray = Object.entries(produceObject);

  produceArray.forEach(array => {
  if(array.includes("Fruit")) {
    fruitObject[array[0]] = array[1];
  }
 });

 return fruitObject;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// # 2
// Disc : Implment doubleNumbers() function so it mutates orginal array instead of returning new array

let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numberArray) {
  for(let index = 0; index < numberArray.length; index += 1) {
    numberArray[index] = numberArray[index] * 2;
  }

  return numberArray;
}

console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]

// # 3
// Disc : uppose we wanted to transform the numbers based on their position in the array rather than their value? 
// Try coding a solution that doubles the numbers that have odd indices:

let numberSetTwo = [1, 4, 3, 7, 2, 6];

function doubleNumsWithOddIndices(numbers) {
  let numbersDoubled = [];

  for(let index = 0; index < numbers.length; index += 1) {
    if (index % 2 === 1) {
      numbersDoubled.push(numbers[index] * 2);
    } else {
      numbersDoubled.push(numbers[index]);
    }
  }

  return numbersDoubled;
}

console.log(doubleNumsWithOddIndices(numberSetTwo));

// # 4
// Disc : Try coding a function that lets you multiply every array item by a specified value.
function multiply(numberArray, multiplier) {
  for(let index = 0; index < numberArray.length; index += 1) {
    numberArray[index] = numberArray[index] * multiplier;
  }

  return numberArray;
}

console.log(multiply(numberSetTwo, 3)); // => [3, 12, 9, 21, 6, 18]
