// Date     : 10/17/2022
// Author   @ Joe Centeno

// FileName     : fibonacciNumbersProcedural.js
/* Problem Desc : 
  Rewrite your recursive fibonacci function so that it computes its results without using recursion.
*/

// Input  : Integer Number
// Output : Fibonacci Number of Input Number

// Data Structure : 
  // int -> int

// Test Cases : 
console.log(fibonacci(1));        // 1
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050

// Rules :
  // Code a new solution so it computes its results without using recursion

// Algorithm : 
  // set container of two starting elements 
  // loop starting at 3 
  // assign container to countainer first element, container zero element plus container first element
  // return first element of countainer 

// Code :
  function fibonacci(n) {
    let previous = [1, 1];

    if(n <= 2) {
      return n;
    }

    for(let index = 3; index <= n; index += 1) {
      previous = [previous[1], previous[0] + previous[1]];
    }

    return previous[1];
  } 