// Date     : 8/19/2022
// Author   @ Joe Centeno

// FileName     :  capitalize_words.js
/* Problem Desc : 
  Write a function that takes a string as an argument and returns that string with the first 
  character of every word capitalized and all subsequent characters in lowercase.
*/

// Input  : lowercase text 
// Output : text with first char of every word uppercase

// Test Cases : 
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// Rules :
  // 

// Algorithm : 
  // split on spaces
  // map over words
    // save the first char of the word
   // save rest of word using slice(1)
   // join word together using  "CHAR" + restOfWord
   // return word 

// Code :

  function wordCap(lowercaseString) {
    return lowercaseString.split(" ").map((currentWord) => {
        let firstChar = currentWord[0].toUpperCase();
        let restOfWord = currentWord.slice(1);
        return (firstChar + restOfWord);
    }).join(" ");
  }