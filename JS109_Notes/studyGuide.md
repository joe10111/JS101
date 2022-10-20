# Study Guide for Test

## Test knowledge from
* prep course
* JS101
* Introduction to Programming with JavaScript book

## The Assessment Questions
### The Assessment will test you on more than just one level. 
* You will be tested on your abblity to parse code and explain it with precision.
* Basic Javascript syntax and language-specific features.
* It will also check your understanding of deeper underling concepts that are in Javascript. 
* Including fundamental aspect of the JavaScript language or non-language-specific programming concept.

### How to Answer Assessment Questions
* When refrancing somthing in code use line numbers to make it clear.
* Answer with precision, dont use just function to discribe a function expresstion or function defintion.
* High-light any technical laugnue or refrense to code.
* Identify the fundamental concept or concepts demonstrated by the question.

## Examples
#### All Examples are from LS
```
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

### Bad Example
* greeting is set to 'Hello' on line 1. greeting is set to 'Hi' on line 4. Line 8 outputs greeting, which is 'Hi'.

### Good Example 

* The global variable greeting is declared and initialized to the string 'Hello' on line 1. Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first reassigns the greeting global variable to 'Hi' on line 4. The next line, break, causes the loop to end, with execution resuming after line 6. Finally, on line 8, console.log is called with the value of the variable greeting passed to it as an argument. Since greeting is now assigned to 'Hi', that is what gets output. This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

## Do's and Don'ts
* Dont use bullet points to write your awnser.

### Quotes From LS

> This answer is essentially a laundry list of statements about the code. Unfortunately, laundry lists aren't very effective as answers on the assessment. They are difficult to follow, and often leave it to the reader to piece together the logic behind the list.

> Some students overcompensate by listing a bunch of facts that aren't really pertinent to the question. For instance, a typical answer might list several facts about the word true above:

> In general, a clearly written paragraph is easier to understand and grade than a laundry list. While we won't penalize you for using bullet points, it's important to realize that bullet points have weaknesses that are difficult to see when you're writing.

## Precision of Language
* Quote from LS about precision 
> Most questions require that you explain some code with words. It's important to be able to describe why something happens using precise vocabulary and be able to pinpoint the principle (scope, shadowing, etc.) at work. In other words, be precise and don't be vague.

> When writing answers to the test questions, be as precise as possible, and use the proper vocabulary. Doing this will help you debug and understand more complex code later in your journey. If your definitions are not precise, you won't be able to lean on them to decompose complicated code. Also, you will likely not be able to pass this assessment.

### Example of Precision
```
let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();
```
### Bad Example
> The result of the function is "Hello, world!".
  Grade : 40 / 100

### Good Example
> The function outputs Hello, world!, which it obtains from the global variable hello, then returns undefined. The function can use hello since functions have access to variables defined in the outer scope.
  Grade : 100 / 100

## Be consistent 
```
greeting = 'Hello';
```
> The greeting variable is assigned to the string 'Hello'.

> The string 'Hello' is assigned to the greeting variable.

* Both of these are from LS and would be acceptable awnsers.
* But try to stick with one way of discription becuse it can become confusing to the grader when you arent consistent.  

## Variables
> We use the term variable in the broadest sense possible. All of the following should be treated as variables:
* Variables declared with let or const
* Function parameters
* Function names
 
> Object property names are not variables

## Implementation-level VS user-level description
* There are two ways to discribe a code snippet, you can discribe the Implementation-level or user-level.
> An implementation-level description is fine when describing the way a function does something. However, it's completely dependent on the implementation. If the implementation changes for some reason, the description may no longer be accurate.

> An user-level description provides a higher-level view of the function. There's just enough information that another developer can use it in their code without first having to understand what's going on behind the scenes.

### Implementation-level Example
* Quote from LS about implementation-level

```
function appendTo(str, otherStr) {
  for (let index = 0; index < otherStr.length; ++index) {
    str += otherStr[index];
  }

  return str;
}
```
#### Awnser From LS
> We're declaring a function named appendTo that takes two arguments, both of which are presumed to be strings. We then use a for loop with an index local variable to iterate over the characters in the second string, appending each character to the value of the first string. We then return the result value as a new string.

### User-level Example
* User Level is discribing code at a higher level then implmentation and talking about the overall goal / actions of the program
```
function appendTo(str, otherStr) {
  return str + otherStr;
}
```
* The previous implmentation-level dose not work to discribe this.
* Its to invloved in the code to get a high level understanding of what the functions goal / action is.

Awnser From LS
> appendTo is a function that takes two string arguments and returns a new string. The returned string contains the result of appending the second string to the first.

## Truthiness
> In the assessment, we want you to be very clear about the distinction between truthy and falsy values and the boolean values true and false.

### Falsey Values
* false
* 0
* NaN
* ""
* undefined
* null
#### These are all falsey values, but not equal to or are false. They only repersent false, but are not the boolean value. 

## Example of Thruthiness

```
let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}
```
> If your answer says that "a is true" or that "a is equal to true" in the conditional on line 3, we would likely deduct points from your score. A much better answer would say that "a is truthy" or that "a evaluates to true" on line 3.
* Use truthy or falsey when discribing any value that evalutes to true or false rather than saying it is true or is equal to false. 

* Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
* Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
* Do not use "is true" or "is equal to true" unless you are specifically discussing the boolean value true.
* Do not use "is false" or "is equal to false" unless you are specifically discussing the boolean value false.
#### Above Bullets points are from LS

## Distinctions
* Parameters are the names assigned to a function's arguments; arguments are the values that get passed to the function.
* Variables are not passed to or returned by functions: values or references are passed.
* Truthiness vs Boolean values
#### Above Bullets points are from LS
