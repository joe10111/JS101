// Date     : 8/19/2022
// Author   @ Joe Centeno

// FileName     : search-word-2
/* Problem Desc : 
Write a function that takes two arguments, a word and a string of text,
 and returns an integer representing the number of times the word appears in the text.
*/

// Input  : Word to search for, Text to search
// Output : The text to search but with the word to search for highlighted 

// Test Cases : 
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns : "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

// Rules :
  // Search is not case-sensitive
  // word and text will be provided
  // all word breaks are spaces
  // ignore punctiation when searching

// Algorithm : 
  // split text to search by spaces
  // map each index of the text to search
    // if the currentWord is equal to the word to find
      // return the currentWord in a template string with highlights and uppercase
      // `**${currentword.toUpperCase()}**`

// Code :
  function searchWord(wordToFind, textToSearch) {
    return textToSearch.split(" ").map((currentWord) => { 
      if(currentWord.toLowerCase() === wordToFind.toLowerCase()) {
        return `**${currentWord.toUpperCase()}**`;
      }

      return currentWord;
    }).join(" ");
  }