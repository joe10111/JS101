# Pass-by-reference and Pass-by-value 10/21/22
## Pass-by-value
* Pass-by value traditionally is when the complier makes a copy of the variable your passing into the argument and uses that inside the function instead of the references to the original variable. This means you cant mutate the value since its a copy of the value.  
* Javascript handles Pass-by-value differently then most langues and is non-traditional. 

## Pass-by-reference
* Pass by reference traditionally passes the references (memory address) of the original variable to the argument of the function. Meaning you can alter the variable in the function scope / context.  
* Javascript handles Pass-by-reference differently then most langues and is non-traditional. 

## Dose Javascript use Pass-by-reference or Pass-by-value?
> "When you pass primitive values to functions, you can treat JavaScript like pass-by-value. No operation performed on a primitive value can permanently alter the value. In other words, when you pass a primitive value to a function, you won't be able to affect the value of the argument passed to the function."-From Launch Schools Pass by Reference vs Pass by Value 
* Primitive values = pass-by-value

> "With objects, JavaScript exhibits a combination of behaviors from both pass-by-reference as well as pass-by-value. Some people call this pass-by-value-of-the-reference or call-by-sharing."-From Launch Schools Pass by Reference vs Pass by Value 
* Non-Primitive values (Objects) = this pass-by-value-of-the-reference (Hybrid of pass-by-reference and pass-by-value)

* Functions and methods that mutate their callers are called destructive functions or methods. If a method is destructive it will most likely mutate the reference object and be treated like pass by reference. 
* Reassignment is not a destructive operation and will be treated like pass by value. 

## Code Example of Pass-by-value
```
function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(number);    // 1
console.log(newNumber); // 1

number = 3;
console.log(number);    // 3
console.log(newNumber); // 1
```
#### ^ Code Snippet of Pass-by-value is from Launch Schools Pass by Reference vs Pass by Value 

* In the above example we are using primitive values, this is a hint to treat it like pass-by-value. 
* with newNumber we are making a copy of number with the functions return. These two variables are not linked in anyway, just the same value. 
* When we re-assign number to 3 since they are not linked the newNumber value dose not change. This is becurse it was a copy of the original value of number. 

## Code Example of Pass-by-reference
```
function bar(array) {
  return array;
}

let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray); // true (they are same object)

array.push(4);
console.log(array);    // [ 1, 2, 3, 4 ]
console.log(newArray); // [ 1, 2, 3, 4 ]
```
#### ^ Code Snippet of Pass-by-reference is from Launch Schools Pass by Reference vs Pass by Value 

* In the function bar we are taking an argument of array, and returning that same argument.
* We then create two arrays, one with an array object and the other with the bar function passing in the array object.
* When we create the newArray we are setting it equal to a reference of the array object.
* So when we do a comparison with strict it will output true since they are the same object, and same goes for pushing or any destructive array method. It will alter the original array object that is referenced.  

## Assignment is not pass-by-value or pass-by-reference
* Assignment dose work a lot like pass-by-value or pass-by-reference depending on the data-type but is not either of them. 
```
number = 1;
newNumber = number;
```
* Number and newNumber are distinct variables. They don't have anything linking them together even though they are assigned to each other. They will take the current value and re-assign it to that. But will not update that value unless done so manually with assignment. 

```
arr = [1, 2, 3];
newArr = arr; 
```
* Arr amd newArr are linked like pass-by-reference. If you use an array method like push it will alter both of the arrays. They point to the same array, assignment with object uses references but is not pass-by-reference. 

> "This similarity is a useful mental model. However, it's incorrect to speak of assignment in terms of pass-by-value or pass-by-reference. In JavaScript, those terms only apply when calling and returning from functions, not assignments." 
#### ^ Quote and snippets of Assignment are from Launch Schools Pass by Reference vs Pass by Value 