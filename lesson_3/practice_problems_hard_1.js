// Date     : 10/12/2022
// Author   @ Joe Centeno
// Note : I did this a long time ago when I did lesson_3 but cant find it so I am gonna re-do them for 
// practice.
// FileName     : practice_problems_hard_1.js 
/* Problem Desc : 
  Do all practice Problems
*/

// 1 
// Disc : Will they return the same value?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());  // { prop1: "hi there" }
console.log(second()); // Undefined

// 2 
// Disc: What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);   // { first: [ 1, 2 ] }

// 3
// Disc: What will the following code snippits produce?
/*
Snippet #1
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

Awnser : 
"one is: one"
"two is: two"
"three is: three"

Snippit #2
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

Awnser : 
"one is: one"
"two is: two"
"three is: three"

snippit #3
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

Awnser: 
"one is: two"
"two is: three"
"three is: one"
*/

// # 4
// Disc : Fix Bens code 

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

    // Awnser : I added a if statment to return false if the length was greater then or less then 4
  if(dotSeparatedWords.length > 4 || dotSeparatedWords.length < 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('1.2.3.4.5')); // false
console.log(isDotSeparatedIpAddress('10.4.5.11')); // true

// Awnser : I added a if statment to return false if the length was greater then or less then 4
