// Date     : 0/0/2022
// Author   @ Joe Centeno

// FileName     :  pratice_problems.js

// 1.0 
// How would you order the following array of
// number strings by descending numeric value (largest number value to smallest)?
/*let arr = ['10', '11', '9', '7', '8'];

function sortStringNumbers(arrayOfStrings) {
  return arrayOfStrings.sort((firstString, secondString) => Number(firstString) - Number(secondString));
}

console.log(sortStringNumbers(arr));
*/
// 2.0 
// How would you order the following array of objects 
// based on the year of publication of each book, from the earliest to the latest?

import { strict as assert } from 'node:assert';

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

function sortBooksByYear(booksObject) {
 return booksObject.sort((objectA, objectB) => {
    return Number(objectA.published) - Number(objectB.published);
  });
}

console.log(sortBooksByYear(books));

// 3.0 
// For each of these collection objects, demonstrate how you would access the letter g

//let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
//console.log(arr1[2][1][3]);

//let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
//console.log(arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);

//let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
//console.log(obj1.b[1]);

//let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
//console.log(Object.keys(obj2.third)[0]);

// 4.0
// For each of these collection objects, demonstrate how you would change the value 3 to 4.
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
console.log(obj2);

// 5.0
// Compute and display the total age of the male members of the family.
/*let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let result = Object.keys(munsters).reduce((totalAge, currentMunster) => {
  return  totalAge += munsters[currentMunster].age;
}, 0);

console.log(result);
*/

// 6.0
// Given this previously seen family object, print the name, age, and gender of each family member:

// Output: (Name) is a (age)-year-old (male or female).

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};


Object.entries(munsters).forEach((person) => {
  console.log(`${person[0]} is a ${person[1].age}-year-old ${person[1].gender}.`);
});

// 7.0 
let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5,8]]

arr[0] += 2;     // [4, [5,8]]
arr[1][0] -= a;  // [4, [3, 8]]

// 8.0
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
[ 'the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ]

/*
Object.entries(obj).forEach((vowels) => newArray.push(vowels[1]));
console.log(newArray.join(" ").replace(",", " "));
*/

// algo :
// object.entries(Obj)
// .reduce on each array, adding on each vowel to reduce it to a string

let result = Object.values(obj).flat().reduce((vowels, currentString) => {
  return vowels + currentString.split("").filter((char) => {
   
    switch (char) {
      case "e":
        return true;
      
      case "a" :
        return true;
    
      case 'i' : 
        return true;
      
      case "o" : 
        return true;
      
      case "u" :
        return true;
      
      default:
        return false;
    }
  }).join("");
}, "");

assert.deepEqual("euiooueoeeao", result);

// 9
// Given the following data structure, 
// return a new array with the same structure, but with the values in each subarray ordered 
// -- alphabetically or numerically as appropriate -- in ascending order.

// Loop over each sub array
// use sort on each array to sort collection correctly
// return array 

let array = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let results2 = array.map((sortedGroup) => { 
  if(typeof sortedGroup[0] === "string") {
    return sortedGroup.sort();
  }  

  if(typeof sortedGroup[0] === "number") {
    return sortedGroup.sort((a,b) => a-b);
  }
});

console.log(results2);

// 10

let results3 = array.map((sortedGroup) => { 
  if(typeof sortedGroup[0] === "string") {
    return sortedGroup.sort((a,b) => (a > b ? -1 : 1));
  }  

  if(typeof sortedGroup[0] === "number") {
    return sortedGroup.sort((a,b) => b-a);
  }
});

console.log(results3);

// 11

// Given the following data structure, use the map method to return a new array identical in 
// structure to the original but, with each number incremented by 1. Do not modify the original data structure.
  let array4 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

  let elvenResults = array4.map((numberCollection) => {
    let incrementedObject = {};
    
    for(let key in numberCollection) {
      incrementedObject[key] = numberCollection[key] + 1;
    }

    return incrementedObject;
  });

  console.log(elvenResults);

  // 12 
  // Given the following data structure, use a combination of methods, 
  // including filter, to return a new array identical in structure to the original,
  // but containing only the numbers that are multiples of 3.

  // algo : 
  // 1 map 
  // 2 filter num arrays

  let array5 = [[2], [3, 5, 7], [9], [11, 15, 18]];
  console.log(array5.map((numberGroups) => {
    return numberGroups.filter((number) => (number % 3) === 0);
  }));

  // 13
  // sort the sub arrays based on the sumation of odd numbers inside each sub array

  let array6 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

  const sumOddNumbers = (sum, number) => (
    number % 2 === 1 
    ? sum + number 
    : sum + 0
  );

  console.log(array6.sort((arrayA, arrayB) => {
    return arrayA.reduce(sumOddNumbers, 0) - arrayB.reduce(sumOddNumbers, 0);   
  }));

  // Given the following data structure write some code to return an array 
  // containing the colors of the fruits and the sizes of the vegetables. 
  // The sizes should be uppercase, and the colors should be capitalized.

  let fruitVeggieObject = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
  };
  // Ouput : [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
  let resultArray4 = [];
  let capitalize = string => string[0].toUpperCase() + string.slice(1);

 let results4 = Object.values(fruitVeggieObject).map((element) => {
    if(element["type"] === "fruit") {
      resultArray4.push(element["colors"].map((char) => capitalize(char)));
    }

    if(element["type"] === "vegetable") {
      resultArray4.push(element["size"].toUpperCase())
    }
 });
 console.log(resultArray4);

// 15
// Given the following data structure, write some code 
// to return an array which contains only the objects where all the numbers are even.
let array7 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

  console.log(array7.filter((numberObject) => {
    return Object.values(numberObject).every(innerArray => {
      return innerArray.every(num => num % 2 === 0);
    });
  }));

  // 17 
  // Given the following data structure, write some code that defines an object 
  // where the key is the first item in each subarray, and the value is the second.

  let array8 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

  // expected value of object
  // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
  let resultObject = {};
  array8.forEach((innerArray) => {
    resultObject[innerArray[0]] = innerArray[1];
  });

  console.log(resultObject)

// 17

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];
  let uuid = '';

  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(generateUUID()); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
console.log(generateUUID()); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
console.log(generateUUID()); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'
function evenValues(array) {
  let evens = [];

  array.forEach((value, index) => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    console.log("Index: ",index);
    console.log("Array:", array);
    console.log("Value: ", value);
    array.shift();
    
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);