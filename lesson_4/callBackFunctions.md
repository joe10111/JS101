# Callback Functions Lesson #4
What's happening in this seemingly-simple piece of code? 
Take it apart and try to describe every interaction with precision.
```
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```
| Action      | Performed on | Side Effect | Return Value | Return Value Used? |
|-------------|--------------|-------------|--------------|--------------------|
| method call |  Outer Array | None        | undefined    | No                 |
| (forEach)   |              |             |              |                    |
|-------------|--------------|-------------|--------------|--------------------| 
| callback    | Sub-Array    | None        | undefined    | No                 |
| execution   |              |             |              |                    |
|-------------|--------------|-------------|--------------|--------------------|
| Element     | Each 	       | None        | Element at   | Yes, used by       |  
| Reference   | sub-array    |             | index 0      | console.log        |
|  ([0])      |              |             | of sub-array |                    |
|-------------|--------------|-------------|--------------|--------------------|
| method call | Elm at index | Displays    | undefined    | Yes, used to       |  
|(console.log)| 0 of sub     | String of a |              | determine call     |
|             | array        | Number      |              | back return value  |
|-------------|--------------|-------------|--------------|--------------------|
                
     