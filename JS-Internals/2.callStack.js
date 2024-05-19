/*
reference video: 
https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3

Call stack:
It is a stack DS inside which the actual JS code execution happens. 

All the Execution Context's are created inside the call stack. At the bottom, there stays the global EC. 
Whenever there is a function invokation a new EC is created inside the call stack on top of the global EC. As soon as the execution of a function gets completed EC corresponding to that function gets destroyed. 

Stack overflow error :
JS enviornments have a max call stack size limit. For v8 engine this limit is 10,000 function invokations. If in any JS code there is more than 10,000 function invokations at the same time it will throw Stack overflow error. 
*/
