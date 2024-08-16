/*
reference : https://www.youtube.com/watch?v=vQcCNpuaJO8&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=4

Currying: Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument

Purpose: 
- Lazy Evaluation: It can delay the execution of functions until all arguments are provided (first use case)
- Reusability (second use case)
*/

// first use case: add_closures won't be executed untill all the parameters are provided
const add_closures = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(add_closures(1)(2)(3));

// second use case: we created two functions addFive & addTen which adds 5 and 10 respectively to any user provided value. This two functions uses same base function under the hood (reusability)
const add = function(a){
  return function(b){
    return a+b;
  }
}

const addFive = add(5);
console.log(addFive(10));

const addTen = add(10);
console.log(addTen(30));

// second use case using bind: 
const multiply_bind = (x, y) => {
  return x*y;
};

const multiplyByTwo = multiply_bind.bind(this, 2);
console.log(multiplyByTwo(4));