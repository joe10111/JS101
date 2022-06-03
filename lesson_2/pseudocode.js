 // 1.0
// START
 // SET Container to empty array 
 // SET Index to zero
// WHILE index is not input array length
  // IF  index is even
      // push index value to container
 // return container
 // END

 function everyOther(array) {
    let container = [];
    for(let i = 0; i <= array.length; i += 1) {
      if((i % 2) === 0) {
          container.push(array[i]);
      }    
    }
    return container;
 }

 console.log(everyOther([1,4,7,2,5]));
  
// 2.0 
// START
  // SET Container to empty array
  // WHILE index is not input array length
    // Push array 1 index values to container
    // push array 2 index values to container
  // Return container
// END
function merge(array1, array2) {
    let container = [];
    
    for(let i = 0; i < array1.length; i += 1) {
        container.push(array1[i]);
        container.push(array2[i]);
    }
  return container;
}

console.log(merge([1, 2, 3], [4, 5, 6])); 