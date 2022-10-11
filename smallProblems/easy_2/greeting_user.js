// Date     : 9/28/2022
// Author   @ Joe Centeno

// FileName     : greeting_user.js  
/* Problem Desc : 
  Write a program that will ask for user's name. The program will then greet the user.
  If the user writes "name!" then the computer yells back to the user.
*/


// Input  : string with value of users name 
// Output : String saying `hello ${name}` if ! is ented after name, output `HELLO ${name}. WHY ARE WE SCREAMING?`

// Test Cases : 
/*
What is your name? Bob   
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/
// Rules :

// Algorithm : 

// Code :
let readline = require('readline-sync');
let name = readline.question("Whats your name?");

if(name[name.length - 1] === "!") {
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}