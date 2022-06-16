// 1.0 - Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

function removeElmentsOne(array){
   array.length = 0;
   return array;
}

console.log(removeElmentsOne(numbers));

function removeElmentsTwo(array){
   array = array.splice(0, numbers.length);
   return array;
}

console.log(removeElmentsTwo(numbers));

function removeElmentsThree(array) {
  while (array.length) {
    array.pop();
  }
  return array;
}

console.log(removeElmentsThree(numbers));

// 2.0 - What will the following code output?
console.log([1, 2, 3] + [4, 5]);
// A : String value [1,2,3,4,5]
// Output : 1,2,34,5 string value

// 3.0 
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
// Output : hello there
// Strings are inmmutable 

// 4.0 - What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Output : [ { first: 42 }, { second: "value2" }, 3, 4, 5 ]
/*
+---------+             +---------------------+
| pointer | ----------> | { first: "value1" } |
+---------+             +---------------------+
| pointer | -----+
+---------+      |
|    3    |      |      +----------------------+
+---------+      +----> | { second: "value2" } |
|    4    |             +----------------------+
+---------+
|    5    |
+---------+
/--------------------------------------------------------------------------/
   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> | { first: "value1" } | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+
*/


// 5.0 - 

function isColorValid(color) {
  return (color === "blue" || color === "green") ? 1 : 0;
}

console.log(isColorValid("blue"));
console.log(isColorValid("red"));
// 1 - true
// 0, "" - falsy