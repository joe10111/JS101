# Variable Scope 10/20/2022
 ## What is variable scope?  
  * Variable scope is where the scope at witch the variable is accessible from other scopes. 
  > "A variable's scope is the part of the program that can access that variable by name."
  ##### ^ Quote from JS101 Variable Scope LS

 ## Types of Variable Scope
  * In JavaScript there are different two category's of scope this includes: global and local.

  ### Local Scope: function scope and block scope

   #### function scope 
   * Functions define a new scope for local variables. You can think of the scope defined by a function as an inner scope. Nested functions define nested scopes.

   > "Rule 1: outer scope variables can be accessed by the inner scope."
   > "Rule 2: inner scope variables cannot be accessed in outer scope."
   > "Rule 3: peer scopes do not conflict."
   > "Rule 4: nested functions have their own variable scope."
   > "Rule 5: inner scope variables can shadow outer scope variables>"
   ##### ^ Quotes from JS101 Variable Scope LS

   * You can change variables from an inner scope and have that change affect the outer scope.
   
   #### block scope
   * Blocks are segments of code that start with an open currly brace ```{``` and end with a closed curly brace ```}```. 

   > "Rule 1: Outer blocks cannot access variables from inner scopes."
   > "Rule 2: Inner blocks can access variables from outer scopes."
   > "Rule 3:Variables defined in an inner block can shadow variables from outer scopes."
   ##### ^ Quotes from JS101 Variable Scope LS

  ### Variable Shadowing
  * variable shadowing is when there are two of the same variable names present in scope. It prevents access to the outer scope local variable.

  ## What determines variable scope?  
  * The key token in-front of the variable, ```let```, ```const```, and ```var```.
 
  > The most notable rule is that all undeclared variables have global scope: they ignore block and function scope entirely. If your program uses that same variable name in a different scope without declaring it, there's a good chance that it will step on the original variable by changing its content.
  
  > "Constants declared with const have the same scope as variables declared with let."
  ##### ^ Quotes from Intro To JavaScript Book LS 

  ## Expanding on Global Scope in the context of larger Javascript Files
  > "The concept of global scope is a little more nuanced when you compare JavaScript in the browser to JavaScript in Node.js. In Node.js, a global variable is only available in the file/module you declare it in. If you want variables to be available in another module, you'll have to explicitly import and export them in modules."
  ##### ^ Quote from JS101 Variable Scope LS