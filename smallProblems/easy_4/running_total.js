// Date      : 7/19/22
// Athour    @ Joe Centeno
// File Name : running_total.js

// Input : array  
// Output : array 

// Test cases :
 console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
 console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
 console.log(runningTotal([3]));                    // [3]
 console.log(runningTotal([]));  

//  Rules :
//        - Last element must be running total
//        - Each element after fist must be running total
//        - If an input is empty return empty
//        - If an input is a single index value return single index


// Algorithm: 
//  - Initialize index to zero
//  - initialize outoutArray to an empty array
//  - initialize currentTotal to zero
//  - If input array length is equal or less than 1 return input
//  - Loop over input array while length is not equal to input array length
//      - push the (current total += inputArrays current index) to outputArray 
//      - increase index by one
//  - Return outputArray 

function runningTotal(inputArray) {
      let index = 0; 
      let outputArray = [];
      let currentTotal = 0;
    
    if(inputArray.length <= 1) {
        return inputArray;
    }

    while (index < inputArray.length) {
        outputArray.push(currentTotal += inputArray[index]);
        index += 1;
    }

    return outputArray;
}