// Date     : 8/5/2022
// Author   @ Joe Centeno
// FileName : practice_problems.js  

// 1.0 - What is the return value of the filter method call below? Why?
console.log([1, 2, 3].filter(num => 'hi'));
// Output : [1,2,3]
// A : Filter will return a new array containing all of the elements in the original array

// 2.0
// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

// Output : [undefined, undefined, undefined]
// A : No return inside of the => {}, so nothing will be returned from the map

// 3.0 
// The following code differs slightly from the above code. What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);

// output : [1, 4, 9]
// A : The map is a in-line function meaning it needs no return inside of the inline

// 4.0 
['ant', 'bear', 'caterpillar'].pop().length;
// Output : 11
// A : Using pop on the array removes the last element, but it also selects it, meaning it will get the length of the last index

// 5.0
// What is the callback's return value in the following code? 
[1, 2, 3].every(num => {
  return num = num * 2;
});
// The return values of the callback will be 2, 4, and 6 and will output true

// 6.0 
//How does Array.prototype.fill work?
// Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
// A : Fill works by crating a new array filling the array with the inputed value
// Fill will mutate / be destructive to the array 

// 7.0 
console.log(['ant', 'bea'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
}));

// A : Will return "Bear"
// Output : ["undefined", "Bear"] since we dont have a return statment javascript fills in
// the gap and returns undefined 

// 8.0 
//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObject = flintstones.reduce((collection, currentString, indexOfString) => {
   collection[currentString] = indexOfString;
   return collection;
}, {});

console.log(flintstonesObject);

// 9.0 
// Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let values = Object.values(ages);
let summedValues = values.reduce((sum, currentNumber) => {
  return sum += currentNumber;
});

console.log(summedValues);

// 10 
let agesTwo = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
/*
let ageValuesArray = Object.values(agesTwo);

let minAge = ageValuesArray.reduce((min, age) => {
  if(age < min) 
}, ageValuesArray[0]);

console.log(minAge);
*/

// 11 
// Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";
let letterOutput = statement.split("").reduce((letterCountObject, currentLetter) => {
  if(currentLetter === ' ') {
    return letterCountObject;
  }

  //console.log(letterCountObject);
  console.log(currentLetter);

  if(letterCountObject[currentLetter]) {

    letterCountObject[currentLetter] += 1;
    return letterCountObject;
  }

  letterCountObject[currentLetter] = 1;
  return letterCountObject;

}, {});

console.log(letterOutput);
