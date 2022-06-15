// @Athour  : Joe Centeno
// Date     : 6/15/22
// FileName : Practice Problems: Easy 1

 // 1.0 - Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5; 
// A : It will not throw an error, but instead put 5 into the 6th index 
// filling in the empty space with place holder <empty items>
// Output : [ 1, 2, 3, <3 empty items>, 5 ]

 // Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
             // Output : undefined, A : When ever you call 
             // array[IndexOutOfRange] it will return undefined
             // becuse its out of the array's range and is not defined 
             // in memory
            // EDIT: I was wrong in my above guess, I was right that it returns undefined
            // the actual value is not undefined, it has no value its considered an empty slot.
 // Example of using a map to see behind the smoke : 
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

// 2.0 - How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function lastCharExclamationMark(string) {
 let stringLength = string.length - 1; // Get length of string
 if(string[stringLength] === "!") {    // if string using length of string - 1 as the index is equal to an "!"
    return true;                       // true  : return true
 } 
 return false;                         // false : return false  
}

console.log(lastCharExclamationMark(str1));
console.log(lastCharExclamationMark(str2));

// 3.0 - Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages["Spot"]);                 // Undefined
console.log( ages.hasOwnProperty("Spot")); // False
                                           // A : No it dose not have that property
// 4.0 - Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized.
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let startingLetter = munstersDescription[0].toUpperCase();
munstersDescription = munstersDescription.toLowerCase().slice(1, munstersDescription.length - 1);
let newString =  startingLetter + munstersDescription + ".";

console.log(newString);

// 5.0 - What will the following code output?

console.log(false == '0');  // Output : true
console.log(false === '0'); // Output : false

// 6.0 - Add below entries to the ages object from above
let additionalAges = { Marilyn: 22, Spot: 237 };
//ages["Marilyn"] = additionalAges["Marilyn"];
//ages["Spot"] = additionalAges["Spot"];
// or 
Object.assign(ages, additionalAges);
console.log(ages);

// 7.0 - Determine whether the name Dino appears in the strings below
let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

function doseStringIncludeDino(string) {
  if(string.includes("Dino")) {
    return true;
  }
  return false;
}

console.log(doseStringIncludeDino(str3));

console.log(doseStringIncludeDino(str4));

// 8.0 - How can we add the family pet, "Dino", to the following array?
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");

console.log(flintstones);

// 9.0 - How can we add multiple items to our array? ('Dino2' and 'Hoppy')
flintstones = flintstones.concat(["Dino2", "Hoppy"]);
console.log(flintstones);

// 10.0 - Return a new version of this sentence that ends just before the word house.=
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice = advice.slice(0, advice.indexOf("house"));
console.log(advice);