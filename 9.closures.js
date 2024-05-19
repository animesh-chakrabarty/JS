/*
reference video : https://www.youtube.com/watch?v=qikxEIxsXco


closures = function + lexical enviornment

use cases of closures:
- module design pattern
- currying
- functions like once
- memoize
- maintaining state in async world
- setTimeouts
- iterators
*/

// Example 1 :
const x = () => {
  var a = 7;
  const y = () => {
    console.log(a);
  };
  return y;
};

const z = x();
z();

// In these above example function x is returning another function y. If we store the returned function y in a variable and invoke the returned function later it will stil remember it's lexical scope. That's because when a function is returned it's returned as closure (fn + lexical enviornment)

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



