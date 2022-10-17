// Date     : 10/17/2022
// Author   @ Joe Centeno

// FileName     : sorting.js
/* Problem Desc : 
  Problems from sorting sub-lesson
*/

// Sorting Arrays of Strings Alphabetically
  // #1 Without running the code, try to figure out what would be returned here:
  ['arc', 'bat', 'cape', 'ants', 'cap'].sort(); 
  // Awnser : [ 'ants', 'arc', 'bat', 'cap', 'cape' ]

  // #2 How would you sort the following array by the lengths of each word?
  let words = ['go', 'ahead', 'and', 'jump'];
  console.log("Awnser: ", words.sort((a,b)=> a.length-b.length));