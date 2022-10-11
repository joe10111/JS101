// Date     : 8/10/2022
// Author   @ Joe Centeno
// FileName : sum_of_digits.js 

// Input  : Intger 
// Output : sum of digits

// Test Cases : 
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
    
// Outcome : 
// Rules:
// - 
// - 

// Algorithm: 
  // I am gonna use forEach once I split the number 

// Code :

function sum(num) {
 let numArray = Array.from(String(num));
 return numArray.reduce((currentSum, currentDigit) => currentSum += Number(currentDigit), 0); 
}
