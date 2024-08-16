/*
IIFE: IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and immediately executed as soon as it is created. This pattern is commonly used to create a new scope and avoid polluting the global namespace with variables.

Use cases of IIFE:
- Avoid Global Variables:
Variables declared inside an IIFE are scoped to the function and do not pollute the global namespace. This is especially useful in larger codebases or when integrating multiple scripts.

- Immediate Execution:
An IIFE runs as soon as it is defined. This is useful when you want to execute code immediately without having to call a function separately.
A regular function, on the other hand, needs to be explicitly invoked later in the code.
For example, when connecting a DB to backend server the function reponsible for DB connection needs to be executed as soon as the file loads. This is one real-life use case of IIFE.

- No Need for a Function Name:
With an IIFE, you don’t need to give the function a name, so there's no risk of accidentally reusing or conflicting with existing function names in your code.
*/

// IIFE using normal function
(function () {
  console.log("DB CONNECTED");
})();

// IIFE using arrow function
(() => {
  console.log("DB CONNECTED");
})();

// IIFE with parameter
((DBName) => {
  console.log(`${DBName} CONNECTED`);
})("mongodb");
