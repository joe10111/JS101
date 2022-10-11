// Date     : 8/19/2022
// Author   @ Joe Centeno

// FileName     : search-word-1
/* Problem Desc : 
Write a function that takes two arguments, a word and a string of text,
 and returns an integer representing the number of times the word appears in the text.
*/

// Input  : Word to search for, Text to search
// Output : Number of times word is found in text

// Test Cases : 
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
console.log(searchWord('sed', text));      // 3
console.log(searchWord('SED', text));      // 3

// Rules :
  // Search is not case-sensitive
  // word and text will be provided
  // all word breaks are spaces
  // ignore punctiation when searching

// Algorithm : 
  // split string by spaces
  // reduce arrayOfStrings and set the defulat reduce value to 0
    // delcare sum and current word
    // if currentWord === wordToFind
    // add one to sum
  // return reduce

// Code :

function searchWord(wordToFind, textToSearch) {
  return textToSearch.split(" ").reduce((countOfWord, currentWordToCheck) => {
    
    if(wordToFind.toLowerCase() === currentWordToCheck.toLowerCase()) {
      console.log("currentWord: ",currentWordToCheck);
      console.log("count of words: ", countOfWord);
      
      return countOfWord + 1;
    }

    return countOfWord;
  }, 0);
}