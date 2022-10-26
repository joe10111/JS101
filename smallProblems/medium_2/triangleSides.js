// Date     : 10/26/2022
// Author   @ Joe Centeno

// FileName     : triangleSides.js  
/* Problem Desc : 
 Write a function that takes the lengths of the three sides of a triangle
 as arguments and returns one of the following four strings representing 
 the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

// Input  : A vector of triangle points(three points)
// Output : A triangle classification 

// Data Structure : 

// Test Cases : 
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// Rules :
  // To be a valid triangle, the sum of the lengths of the two shortest sides must be greater
  // than the length of the longest side, and every side must have a length greater than 0.

// Algorithm : 
  // identify the longest and shortest sides
  // compare length of two shortest sides to longest side
    // if the shortest sides are less then the longest side return "invalid"
  // compare lengths to determine triangle calcification

  // Code : 
  function triangle(side_one, side_two, side_three) {
    let sortedSides = [side_one, side_two, side_three].sort((a, b) => a-b);
    // Invalid Handling 
    if(sortedSides.includes(0)) {
      return "invalid"; 
    }
     // Invalid Handling 
    if(sortedSides[0] + sortedSides[1] < sortedSides[2]) {
      return "invalid";
    }
      // Equilateral Handling 
    if(side_one === side_two && side_two === side_three) {
      return "Equilateral";
    }
     // Isosceles Handling 
    if(((sortedSides[0] === sortedSides[1]) && sortedSides[1] !== sortedSides[2])  
      || (sortedSides[1] === sortedSides[2]) && sortedSides[0] !== sortedSides[1]) {
      return "Isosceles";
    }
     // Scalene Handling 
    if(side_one !== side_two && side_two !== side_three) {
      return "Scalene";
    }
     // Final Point Handling
    return "Did not find a match but is not invalid";
  }
