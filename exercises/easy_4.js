// 5/28/22


// 1.0 - How Old is Teddy?
let num = 120;
let postiveRange = num - 1;

// let age = Math.floor(Math.random() * 100) + 20;
function randomNum(start, end) {
    end = end - start;
   return Math.floor(Math.random() * end) + start;
}

console.log(randomNum(8, 10));

// expected output - 'Teddy is 69 years old!'

// 1.1 - Searching 101

let number_container = [1,17,9,90,8,17];

number_container[5] = 17;

function doseNumberExist(targetNumber, numberArray) {
    let i = 0;
    for(let i = 0; i < numberArray.length; i++) {
        if(numberArray[i] === targetNumber) {
            return `The number ${targetNumber} appears in ${numberArray}.`;
        }
    }
    return `The number ${targetNumber} dose not appears in ${numberArray}.`;
}

console.log(doseNumberExist(17, number_container));
console.log(doseNumberExist(18, number_container));

// 1.2 - When Will I Retire?

let age_container = [22, 80];

function retireCalc(currentAge, retireAge) {
    return `Its 2022, you will retire in ${2022 + (retireAge - currentAge)}`;
}

console.log(retireCalc(age_container[0], age_container[1]));

// change it so that the year is not static
let currentYear = new Date().getFullYear();

function retireCalcDynamic(currentAge, retireAge) {
    return `Its 2022, you will retire in ${currentYear + (retireAge - currentAge)}`;
}

console.log(retireCalcDynamic(age_container[0], age_container[1]));

// 1.3 - Palindromic Strings

function isPalindrome(string) {
    let count = 0;
    let stringArray = string.split(',');
    if(stringArray[0] === stringArray[stringArray.length - 1] ) {
        for(let i = 0; i < stringArray; i++) {
          let end = stringArray.length - 1;
          if(stringArray[i] === stringArray[end] ) {
            count += 1;
          }
           end -= 1;  
        }
    } 
    if(count === stringArray.length / 2) {
        return true;
    }
    return false;
}


module.exports = { 
    doseNumberExist,
    retireCalcDynamic,
    isPalindrome
 }