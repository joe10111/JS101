# Primitive values, Objects, and Type Coercions 10/21/2022

## Primitive values
> "Primitive values are always immutable; they don't have parts that one can change. Such values are said to be atomic; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or reassign it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like ```0 + 0``` evaluates to a new value of ```0```." - From Launch Schools Intro to JavaScript Book 

### Javascript has 7 primitive data types
* String
  * A string is a list of characters in a specific sequence.
* Number
  * The Number data type represents all real numbers in JavaScript.
* Undefined
  * Undefined expresses the unintentional absence of a value.
* Null
  * Null represents the intentional absence of a value.
* Boolean
  * Boolean values represent an "on" or "off" state.
* Bigints
  * Represents a massive number that would be to large for an int. 
* Symbols
  * Symbols are a unique data type primitive that is used in Javascript as a identifier 

> "Every type that is not a primitive type is an object type" - From Launch Schools Intro to JavaScript Book 

### Literals 
> "Data type values can be represented by literals. A literal is any notation that lets you represent a fixed value in source code. For instance, all of the following are literals in JavaScript":
* string literal    ```'Hello, world!'``` 
* numeric literal   ```3.141592```    
* boolean literal   ```true```
* object literal    ```{ a: 1, b: 2 }```   
* array literal     ```[ 1, 2, 3 ]```         
* undefined literal ```undefined```
#### ^ Quote and snippets of datatype literals are From Launch Schools Intro to JavaScript Book 

## Object DataTypes
> "Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays are objects) has a length property that contains a number: a primitive value. Objects are usually (but not always) mutable: you can add, remove, and change their various component values." - From Launch Schools Intro to JavaScript Book 

### Object datatype include but are not limited too:
* Simple Objects
* Arrays
* Dates
* Functions

## Type Coercion 
* Type coercion is the conversion of one type of value into another.

### Two Types of Type Coercion 
* Explicit type coercion
* Implicit type coercion

### Explicit type coercion
* Explicit type coercion is when you tell Javscript to change the type of a primitive value. Using the ```Number()``` method around a primitive value will alter its datatype into a number or return NAN if passed in an invalid argument like a string ```"Joe"```. 

> "The unary + operator attempts to coerce a value to a number. It works like the Number function." 
```
> +""
0
> +'1'
1
> +'2.3'
2.3
> +[]
0
> +'abc'
NaN
```
##### ^ Quote and snippets of unary + operator are From Launch Schools Explicit type coercion 

### Implicit Type Coercion
* Implicit Type Coercion happens when the programmer dose an operation and changes the datatype of the target unintended. An example in JavaScript is the ```==``` will coercion the right most data type to the left into the right most datatype in order to compare the two. 
* Mentioned above in Explicit Type Coercion the ```+``` can change data types, this is considered Implicit Type but the examples are all Explicit type coercion becuse its become a wildy know practice in Javascript. Here are a list of implicit Type Coercions with ```+```.
```
> '' + [1, 2, 3]
'1,2,3'
> '' + true
'true'
> '' + undefined
'undefined'
> '' + {}
'[object Object]'
```
##### ^ Snippet of unary + operator are From Launch Schools Implicit Type Coercion 

#### Relational Operators
* Non strict, will Implicit Type Coercion to compare. 

> "The relational operators, <, >, <=, and >= are defined for numbers (numeric comparison) and strings (lexicographic order). There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them."
```
11 > '9';       // true -- '9' is coerced to 9
'11' > 9;       // true -- '11' is coerced to 11
123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a';     // also false
true > null;    // true -- becomes 1 > 0
true > false;   // true -- also becomes 1 > 0
null <= false;  // true -- becomes 0 <= 0
undefined >= 1; // false -- becomes NaN >= 1
```
##### ^ Quote and snippet of relational operators are From Launch Schools Implicit Type Coercion 