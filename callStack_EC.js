/*

Call Stack: The call stack is a LIFO (Last In, First Out) data structure. 

Whenever the JS engine starts code execution initially it adds a global Execution Context inside the call stack that represents the global scope of the file. Now, whenever a new function is invoked a new Execution Context is created corresponding to that function and added on top of the stack. 

******************************************************************************************************

Execution Context (EC): EC is an abstract concept that represents the environment in which a piece of JavaScript code is executed. 

ECMAScript definition: An execution context is a specification device that is used to track the runtime evaluation of code by an ECMAScript implementation.

There are 3 types of EC - 
1. Global Execution Context (GEC): This is the default or base context where the code starts execution.
It creates a global object (in browsers, this is the window object) and binds `this` to the global object

2. Function Execution Context (FEC): Whenever a function is invoked, a new function execution context is created.

3. Eval EC :

Inside a EC there is- 
Lexical Enviornment(LE) 
script that is getting executed inside the current EC

******************************************************************************************************

LE : A LE is a structure that holds the environment for variables and functions during the execution of code

ECMAScript definition: Identifies the Environment Record used to resolve identifier references made by code within this execution context.

Components of LE - 
1. Environment Record: This is where all the local variables, function declarations, and block-scoped variables (declared with let and const) are stored.
2. Outer Lexical Environment Reference: This is a reference to the parent Lexical Environment. It allows for the chaining of scopes, enabling the current context to access variables from outer scopes.
3. this Binding: The value of this in the current execution context, which depends on how the function was called.

******************************************************************************************************

VE : The VE is a special kind of LE that specifically deals with the environment for variable declarations created with var keyword

ECMAScript definition: Identifies the Environment Record that holds bindings created by VariableStatements within this execution context.
Components of VE - 
1. Environment Record: This stores all variables declared within the current execution context (specifically those declared with var in the global or function scope).
2. Outer Lexical Environment Reference: Just like in a Lexical Environment, it points to the parent environment, allowing access to variables in outer scopes.

******************************************************************************************************

Key difference between LE & VE - 
The VE focuses primarily on var declarations, while the LE manages both var, let, and const declarations

In modern JS, the LE handles all declarations (var, let, const) and function declarations. The concept of the VE is now primarily an internal detail of how the JavaScript engine handles var declarations and is not distinctly separate from the LE.
*/