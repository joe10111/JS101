# Callback Functions Lesson #4
What's happening in this seemingly-simple piece of code? 
Take it apart and try to describe every interaction with precision.
```
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```
| Action                    | Performed on                        | Side Effect                               | Return Value                    | Is Return Value Used?                          |
|---------------------------|-------------------------------------|-------------------------------------------|---------------------------------|------------------------------------------------|
| method call (forEach)     | the outer array                     | None                                      | undefined                       | No                                             |
| callback execution        | Each sub-array                      | None                                      | undefined                       | No                                             |
| element reference ([0])   | Each sub-array                      | None                                      | Element at index 0 of sub-array | Yes, used by console.log                       |
| method call (console.log) | Element at index 0 of the sub-array | Outputs string representation of a Number | undefined                       | Yes, used to determine callback's return value |
                
     