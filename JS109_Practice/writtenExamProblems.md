# Wriiten Exam Practice

## #1 truthiness
```
let num = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("error!");
}
```
### Awnser : On ```line 5``` we delcare a global ```num``` variable initalizing it to an ```integer``` of five. The ```conditional if``` statment on ```line 6``` takes the value of the ```num``` varaible and evalutes its truthiness. On ```line 7``` the program will log ```"valid number"``` to the console if it evalutes ```num``` to be truthy. Otherwise on line 9 the program will log ```"error!"``` to the console if num is evaluated to be falsy. The program will evaluate num as truthy and log ```"valid number"```. The ```nums``` varaible value isnt ```true``` but a truthy value, if I was to re-assign ```nums``` value to a ```boolean``` value it would repersent a ```true``` or ```false boolean```.

## #2 Nested Array
```
let pairOfStacks = [[1], [2]];

pairOfStacks[0].push(3);
console.log(pairOfStacks); // => [ [ 1, 3 ], [ 2 ] ]
```
### Awnser : We delcare a global ```pairOfStacks``` varaible on ```line 16``` initlizaing it to a nested array containg arrays with integer values. On ```line 18``` we select the zero element in the outter ```pairOfStacks``` using ```push``` an array method to push three onto the outter arrays zero element. On ```line 19``` the console will log a pair of arrays nested inside an array. The zeroth index of the outter array will be ```[1, 3]``` while the index at one of the outter array will be ```[2]```. This code snippet demonstrates  

## #3 Shallow Copy Array
```
let letterCollection = ['a', 'b', 'c'];
let copyOfletterCollection = letterCollection.slice();
console.log(copyOfletterCollection); // => [ 'a', 'b', 'c' ];
``` 
### Awnser : The global variable ```letterCollection``` is declared and initialized to the array ```['a','b','c']``` on line 25. The global variable ```copyOfletterCollection``` is declared and initialized to ```letterCollection.slice()``` on line 26. The slice array method passed with no arguments will create a shallow copy of the ```letterCollection``` array. On line 27 console.log is called with the value of the varaible ```copyOfletterCollection```. The ```console.log``` will output ```['a','b','c']``` the shallow copy of the variable ```letterCollection```. The above code snippet demonstrates shallow copying of an array by using the slice array method passing no arguments.   

## #4 Shallow Copying Objects
```
let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
console.log(obj1);         // => { a: 'foo', b: 'bar' }
``` 
### Awnser : The global variable ```obj1``` is declared and initialized to the object ```{ a: 'foo' }``` on ```line 33```. The global variable ```obj2``` is declared and initialized to the object ```{ b: 'bar' }``` on ```line 34```. The next line invokes the Object method ```Object.assign()``` passing two arguments ```obj1``` and ```obj2```. The ```Object.assign()``` method uses its first paremeter as the target object to store the assignment, while the second argument is the source to add onto the target object. On line ```37``` obj1's value is outputed to the console, displaying ```{ a: 'foo', b: 'bar' }``` a ```shallow copy``` of the two objects.  

## #5 Deep Copy 
```
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

deepCopiedArr[1].push('baz');
deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
arr;           // => [ { b: 'foo' }, [ 'bar' ] ]
``` 

### Awnser : 

