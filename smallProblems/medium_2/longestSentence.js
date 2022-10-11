// Date     : 9/28/2022
// Author   @ Joe Centeno
// FileName : longestSentence.js

/* Problem Desc : 
Write a program that prints the longest sentence in a string based on the number of words. 
Sentences may end with periods (.), exclamation points (!), or question marks (?). 
You should treat any sequence of characters that are not spaces or sentence-ending 
characters as a word. Thus, -- should count as a word. Log the longest sentence and 
its word count to the console. Pay attention to the expected output, and be sure you
 preserve the punctuation from the end of the sentence. Note that this problem is about
  manipulating and processing strings. As such, every detail about the string matters 
  (e.g., case, punctuation, tabs, spaces, etc.).
*/

// Input  : A string
// Output : The longest sentance in the string and its length

// Test Cases : 
let tape = require("tape");

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

let result1 = "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal. The longest sentence has 30 words."
let result2 = "It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth. The longest sentence has 86 words."
console.log("Hi \n Joe")
tape("longestSentence", function (test) { 
  test.plan(2);
  test.deepEqual(longestSentence(longText), result1, "Four score");
  test.deepEqual(longestSentence(longerText), result2, "Five Array Values");
  test.end();
});

// Rules :

// Algorithm : 
  // make an empty string to put new formatted string into
  // loop over text
   // if current index is equal to "." || "?" || "!"
   // split using current index
   // compare each elements length in the array to the previous longest string length
   // return formated string with string and length count 
    
     
// Code :

function longestSentence(text) {
  let longestText = ""; 

  for(let i = 0; i < text.length; i += 1){
    if(text[i] === "." || text[i] === "!" || text[i] === "?" ) {
      longestText = text.split(text[i]).reduce((longestString, currentString) => { /// might not work becuse of length being out of range
        if(currentString.length > longestString.length) {
          return currentString;
        }

        return longestString.trim();
      }, "");
    }
  }
  return `${longestText}. The longest sentence has ${longestText.split(" ").length} words.`;
}