## Execution Context

- Execution Context(EC) is like a container or enviornment where JS code runs. It holds info about the code being executed, the variables, functions and objects available to it.

### Types of EC

_There are mainly two types of EC-_
1. Global EC - represents the global scope
2. Function EC - a FEC is created whenever there is a function invokation

### LifeCycle of EC

The lifecycle of an EC can be divided into two phases-
1. Creation phase
2. Execution phase

### Components of EC

Similar to the lifecycle EC also have two components-
1. memory component : in this component variables & functions are stored and allocated memory. Initially the variables are initialized as undefined. In case of functions, the whole code of function is stored. This whole thing is performed during the creation phase of EC.  
2. code component or thread of execution : The work on this stage is performed on execution phase. During the execution variables are assigned values and the functions are invoked. 

### Creation phase

In the creation phase a lexical enviornment is created. It is of two types -

### Lexical enviornment

- 


```javascript
function outer() {
 let outerVar = 'outer';

 function inner() {
  let innerVar = 'inner';
  console.log(outerVar); 
 }

 inner();
}

outer();
```