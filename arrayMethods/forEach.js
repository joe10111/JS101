// Date     : 11/17/2022
// Author   @ Joe Centeno

// FileName     : forEach.js
/* Problem Desc : 
  Re-write the forEach js method
*/

// Input  : array, function
// Output : undefined


// Test Cases : 
let num = 0; 

forEach([1,2,3], (number) => {console.log(number)});

forEach([1,1,1], (number) => { num += number});
console.log(num);
// Rules :

// Algorithm : 
  //  make a for loop
    // iterate until index > array.length
  // execute callback function for each iteration

// Code :
function forEach(array, callBackFunction) {
  for(let i = 0; i < array.length; i += 1) {
    callBackFunction(array[i]); 
  }

  return undefined;
}