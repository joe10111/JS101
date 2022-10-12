// Date     : 10/12/2022
// Author   @ Joe Centeno

// FileName     : collectionsBasics.js
/* Problem Desc : 
  Collection Basic sub lesson problems 
*/

// Element Reference
  // How would you reference 'grass' from within this string? 
function sliceGrass() {
  let str = 'The grass is green'
  return str.slice(4, 9);
}

console.log(sliceGrass());

// Array Element Reference
  // What do you think would be returned here? 
function arraySlice() {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  return arr.slice(2, 5)[0];
}

console.log(arraySlice()); // c

  // Awnser : Array.prototype.slice will return an array and when we put [0] after slice it will 
  // treat it as accesing the first value in that return array.  

  // Slice returns a copy of the array and not the original array. How would you verify that?
function sliceShallowCopy() {
  let array = [1, 2, 3];
  let arrayCopy = array.slice();

  return (array === arrayCopy);
}

console.log(sliceShallowCopy());

  // It's a shallow copy instead of a deep copy. How would you verify that in the node console?
function sliceObjectCopy() {
  let array = [1, 2, {Joe : 1011, Sam : 1012}];
  let arrayCopy = array.slice();

  return (array === arrayCopy);
}

console.log(sliceObjectCopy());

// Object Element Reference
  // When initializing an object, the keys/property names must be unique.
  // What happened in the code snippet bellow?
  function uniqueObjectNames() {
    return { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
  }

  console.log(uniqueObjectNames()); // { fruit: 'pear', vegetable: 'carrot' }
  // Awnser : The fruit : "pear" key overides the initial fruit: 'apple' key.

// Conversion
  // How would you join the characters in the array into a string without a comma?
  function joinWithNoComma() {
    let array = ['a', 'b', 'c', 'd', 'e', 'f'];

    return array.join("");
  }

  console.log(joinWithNoComma());

// Element Assignment
 // Increase the value of the rest of the numbers in the array by 1. 
 // Also, try incrementing an element that doesn't exist, such as numbers[4].
  function increaseNumbers() {
    let numbers = [1, 2, 3, 4];

    numbers[0] = numbers[0] + 1;
    numbers[1] = numbers[1] + 1;
    numbers[2] = numbers[2] + 1;
    numbers[3] = numbers[3] + 1;
    numbers[4] = numbers[4] + 1;

    return numbers;
  }

  console.log(increaseNumbers());

  // Set a value of either 'Fruit' or 'Vegetable' to the pear and broccoli properties.
  function setObjectValues() {
    let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
    
    obj["pear"] = "Fruit";
    obj.broccoli = "Vegetable";

    return obj;
  }

  console.log(setObjectValues());
  