/*
reference video : https://www.youtube.com/watch?v=qikxEIxsXco

closures = function + lexical enviornment
- MDN Definition: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)

use cases of closures:
- module design pattern
- currying
- functions like once
- memoize
- maintaining state in async world
- setTimeouts
- iterators
*/

// Example 1:
const x = () => {
  var a = 7;
  const y = () => {
    console.log(a);
  };
  return y;
};

const z = x();
z();

// In the above example, function x is returning another function y. If we store the returned function y in a variable and invoke the returned function later it will stil remember it's lexical scope. That's because when a function is returned it's returned as closure (fn + lexical enviornment)

// example 2:
const x1 = () => {
  var a = 7;
  const y = () => {
    console.log(a);
  };
  a = 100;
  return y;
};

const z1 = x1();
z1();

// In the above example, 100 will get printed as the value of a. The reason is, whenever a function is returned it's returned with it's closure(fn + lexical env) as mentioned on example 1. In the lexical envionrment of closure a reference (memory address) to those variables (variables those were present inside the lexical scope of the returned function) are stored not the values. That's why even if the value changes the function will be able to access the updated value. 





