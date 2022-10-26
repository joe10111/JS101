// Date     : 10/26/2022
// Author   @ Joe Centeno

// FileName     : triAngles.js 
/* Problem Desc : 
 Write a function that takes the three angles of a triangle as arguments and returns
 one of the following four strings representing the triangle's classification: 
 'right', 'acute', 'obtuse', or 'invalid'.
*/

// Input  : A vector of triangle degrees
// Output : Classification of triangle based on degrees 

// Data Structure : 

// Test Cases : 
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// Rules :
  // To be a valid triangle, the sum of the angles must be exactly 180 degrees
  // Every angle must be greater than 0
  // You may assume that all angles have integer values
  // You may also assume that the arguments are in degrees

// Algorithm : 
  // Handle invalid cases
  // Handle Right Triangle 
    // Find if any of the angles are equal to 90 deg
  // Handle Acute
    // if all three angles are less then 90
  // Handle Obtuse
    // if all three angles are greater then 90

// Code :
function triangle(degree_one, degree_two, degree_three) {
  const INVALID = "invalid";
  const RIGHT = "right";
  const ACUTE = "acute";
  const OBTUSE = "obtuse";

  let sortedDegrees = [degree_one, degree_two, degree_three].sort((a, b) => a-b);
  const SHORTEST_DEGREE = sortedDegrees[0];
  const MEDIUM_DEGREE = sortedDegrees[1];
  const LONGEST_DEGREE = sortedDegrees[2];
 
  if(sortedDegrees.includes(0)) {
    return INVALID;
  }

  if(SHORTEST_DEGREE + MEDIUM_DEGREE + LONGEST_DEGREE !== 180) {
    return INVALID;
  }

  if(SHORTEST_DEGREE === 90 || MEDIUM_DEGREE === 90 || LONGEST_DEGREE === 90) {
    return RIGHT;
  }

  if(SHORTEST_DEGREE < 90 && MEDIUM_DEGREE < 90 && LONGEST_DEGREE < 90) {
    return ACUTE;
  }

  if(SHORTEST_DEGREE > 90 || MEDIUM_DEGREE > 90 || LONGEST_DEGREE > 90) {
    return OBTUSE;
  }
  
  return "Could not find match";
}
