"use strict";
// this in global space
// in global space the value of this keyword is the global object
// in case of browser it is the window object, in case of node it is empty object
console.log(this);

// this inside function
// the value of this inside a function is undefined. But in JS, where ever the value of this is undefined or null JS engine replaces it with the global object (this substitution). That's why without using the strict mode the value of this inside a function is the global object.
function x() {
  console.log(this);
}
x();

// But if we call the function by associating it with the global object then the value of this for that function will be the global object
// window.x();
// global.x = function(){
//     console.log(this)
// }
// global.x();

// this inside a object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x();

// call apply bind 
