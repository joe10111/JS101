// Date     : 10/17/2022
// Author   @ Joe Centeno

// FileName     : fibonacciNumbersRecursion.js 
/* Problem Desc : 
  Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
*/

// Input  :  Integer Number
// Output : Fibonacci Number of Input Number

// Data Structure : 
  // int -> int

// Test Cases : 
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// Rules :
  // The function should call its self once inside the code
  // It must have an ending condition

// Algorithm : 
  // if the input value is less then or queal to 2 return 1
  // F(n) = F(n - 1) + F(n - 2) where n > 2
    // recursivly call the function fibonacci(n - 1) + fibonacci(n - 2)
    // return above recursive call 

// Code :
function fibonacci(n) {
  if(n <= 2) {
    return 1;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}