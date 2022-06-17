// 1.0 - 
// space count var = 0
// while space count !== 10 loop
  // add one space infront of string

  let spaceCount = 0;
  let flinStonesString = "The Flintstones Rock!";
 
  while(spaceCount <= 10) {
   flinStonesString = " " + flinStonesString;
   console.log(flinStonesString);
   spaceCount += 1;
  }
 
  // 2.0 
 // save munstersDescription to munstersDescription string to lowercase()
 // Map all chars and if char is upper take to lower
 // if char is lower take to upper
 // return new string  
  let munstersDescription = "The Munsters are creepy and spooky.";
  console.log( munstersDescription.split("").map((letter) => {
   if(letter === letter.toLowerCase()) { 
     return letter.toUpperCase();
   } else {
     return letter.toLowerCase();
   }
  }).join(""));

  // 3.0 - Alan wrote the following function, which was intended to return all of the factors of number:
  function factors(number) {
    let divisor = number;
    let factors = [];
    do {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    } while (divisor !== 0);
    return factors;
  }
 // A : write in a while loop instead of a do while loop
 function reFactors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

  // 4.0 -
  function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
    buffer.push(newElement);
    if (buffer.length > maxBufferSize) {
      buffer.shift();
    }
    return buffer;
  }
  
  function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
    buffer = buffer.concat(newElement);
    if (buffer.length > maxBufferSize) {
      buffer.shift();
    }
    return buffer;
  }

  // A: the first one mutates the arry with push while concat dose not mutate the or ginal array

  // 5.0 - What will the following two lines of code output?
  console.log(0.3 + 0.6);         // 0.89...
  console.log(0.3 + 0.6 === 0.9); // false 
  // My first thought was that it would eaule 0.9 and true but I see why it dosnt now having read into floating point 
// If you thought that the outputs would be 0.9 and true, respectively, you were wrong. JavaScript uses floating point numbers for all 
// numeric operations. Most floating point representations used on computers lack a certain amount of precision, and that can yield 
// unexpected results like these.

// 6.0 - What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // output is false.NaN

// A : JavaScript doesn't let you use == and === to determine whether a value is NaN.

// 7.0 - What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34 becuse the number is not mutated when entering the function

// 8.0 - One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters); // mutates origanl object becuse its passed by refrance

console.log(munsters); 
 // Output : 
/*
{
  Herman: { age: 74, gender: 'other' },
  Lily: { age: 72, gender: 'other' },
  Grandpa: { age: 444, gender: 'other' },
  Eddie: { age: 52, gender: 'other' },
  Marilyn: { age: 65, gender: 'other' }
} 
*/

// 9.0 - What does the following code output?
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// A : paper beacuse the first call evualtes to rps(rps((paper) (rock)) rock) = rps(paper rock) = paper

// 10.0 - Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo())); // output : no
 // A : The foo function will always be yes meaning that the output was not no