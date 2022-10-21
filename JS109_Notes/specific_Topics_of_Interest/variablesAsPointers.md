# Variables as Pointers 10/21/22

## References vs Pointers  
> "At Launch School, we use both terms interchangeably. You can say that a variable points to or references an object in memory, and you can also say that the pointers stored in variables are references."-From Intro to Javascript Programing book.

## Primitive variables
> "Every time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive values, the actual value of the variable gets stored in this allocated memory."-From Intro to Javascript Programing 
* Primitive variables hold their value in an allocated spot in memory. 

### Example using code and a table
```
let count = 1;
let count = 1;
```

| Code           | Whats stored in the Variable |
|----------------|------------------------------|
| let count = 1; | mem addr: 0x1234 value: 1    |
| let count = 1; | mem addr: 0x6235 value: 1    |

* Every time a primitive value is created Javascript allocates a new spot in memory, if the same name exists it will create the same name with a different memory address. This will cause variable shadowing and Javscript will most likely thrown an error or discard the previous count since the names conflict. 

## Objects and Non-Mutating Operations
> "Creating new variables causes JavaScript to allocate a spot somewhere in its memory for the value. However, with objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable." 
* Objects that point to other objects contain the pointer to other objects in their value rather then the literal value. Linking them together. 

### Example using code and a table
```
let obj = { a: 1 };
obj = { b: 2 };
obj.c = 3;
```
#### ^ Code snippet from Intro to Javascript Programing Book

| Code              | obj                                | The Object                              |
|-------------------|------------------------------------|-----------------------------------------|
| let obj = {a: 1}; | mem addr: 0x1248 value: 0x40011fe0 | mem addr:0x40011fe0 value: {a:1}        |
| obj = {b: 2}      | mem addr: 0x1248 value: 0x40012000 | mem addr: 0x40011fe0 value: {b:2}       |
| obj.c = 3;        | mem addr: 0x1248 value: 0x40012000 | mem addr:0x40012000  value: {b:2, c:3}  |
#### ^ Table re-created in markdown from Intro to Javascript Programing Book