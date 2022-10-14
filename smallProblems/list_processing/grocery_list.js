// Date     : 10/14/2022
// Author   @ Joe Centeno

// FileName     :  
/* Problem Desc : 
  
*/

// Input  :  
// Output : 

// Data Structure : 

// Test Cases : 
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Rules :

// Algorithm : 
  // create a new array to push fruits too
  // forEach over the outter array
    // select the fruit name in the zero index of the inner array
    // select the repaet amount in the first index of the inner array
    //push the name string three times 
  // return newFruitArray

// Code :
function buyFruit(fruits) {
  let fruitReapted = [];

  fruits.forEach((repeatingFruit) => {
    for(let i = 0; i < repeatingFruit[1]; i += 1) {
      fruitReapted.push(repeatingFruit[0]);
    }
  });

  return fruitReapted;
}
