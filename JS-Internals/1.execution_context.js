/*
Reference_Article : https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context

Reference_Video :
1. https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=2
2. https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3

JS is synchronous single threaded language -
JS can execute a single line at a time (single threaded) in a specific order (synchronous). It can only execute the next line of code once the current line is finshed executing.

Execution context : 
When the JS engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

Everything in JS happens inside Execution Context .

EC has two components -
1. Memory component or variable enviornment : Here all the variables and functions are stored as key-value pair.
2. Code component or thread of execution : Here the actual code is executed in a synchronous manner.

The execution of a program in JS also happens in two phases :
1. Memory allocation phase : 
In this stage , JS engine allocates memory for each variable and function present in the code . 
In case of variables, it initializes the value of all variables with undefined.
In case of functions it store the whole code of the function in the memory.

2.Code execution phase : 
In this stage , the actual code is executed line by line . 
In case of variables, JS engine replaces undefined with the actual value of the variable. 
In case of functions, when a function is invoked it creates a separate execution context for each function invokation and runs the function there. When the function executes a return statement it basically gives the control back to global EC at the line where the function was invoked. 

*/
