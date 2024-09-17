// ********************** Hoisting for var **********************
// During the memory allocation phase, when the JS engine encounters a variable declaration using var it allocates memory for that variable and initializes it with undefined. This is called hoisting. That's why if we try to access a variable declared using var before it's initialization we'll get undefined
console.log(x);
var x = 9;

// ********************** Hoisting for let/const **********************
// During the meomory allocation phase, when the JS engine encounters a variable declaration using let it allocates memory for that variable also but it doesn't initialize any value for that variable. Means variables declared with let are hoisted but not initialized. They remain the the Temporary Dead Zone (TDZ) untill the code execution reaches their declaration. That's why we get a referenceError when trying to access the variable before it's declaration
console.log(y);
let y = 90;