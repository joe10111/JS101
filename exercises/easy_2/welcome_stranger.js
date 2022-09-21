// Date     : 9/20/2022
// Author   @ Joe Centeno

// FileName     : welcome_stranger.js 
/* Problem Desc : 
Create a function that takes 2 arguments, an array and an object.
Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

// Input  : name array and job object
// Output : string of name and job formatted

// Test Cases : 
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// Rules :
  //  The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. 
  // The object will contain two keys, "title" and "occupation", and the appropriate values
// Algorithm : 

// Code :
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${"Plumber"} around.`
}