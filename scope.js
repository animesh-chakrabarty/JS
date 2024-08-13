/*
Scope : scope refers to the context or environment in which variables, functions, and objects are declared and can be accessed.

Mainly 3 types of scopes are there -
1. Global scope : Variables declared outside of any function or block have global scope. They can be accessed from anywhere in your code.

2. Function scope : Variables declared inside a function have function scope. They can only be accessed within that function and are not visible outside of it.

3. Block scope : Introduced with ES6, variables declared with let and const keywords have block scope. This means they are only accessible within the block they are defined in (e.g., inside a loop or conditional statement)

IMP : function scope can be achieved using var, but block scope can't be achieved using var

IMP : both function scope & block scope can be achieved using let & const 

Variables and functions defined in the parent scope will be accessible to child scope, but variables and functions defined in the child scope won't be accessible to it's parent scope
*/

// function scope
function functionScopeEg(){
    var functionScopedVar = 100;
    let functionScopedLet = 100;
}
functionScopeEg();

// block scope
if(true){
    var blockScopedVar = "var doesn't follow block scope, so this text will be printed ";
    let blockScopedLet = "let follows block scope, so this text won't be printed"
}


// functionScopedVar & functionScopedLet won't be accessible here as both let & var supports function scope 
console.log(functionScopedVar);
console.log(functionScopedLet);

// blockScopedVar will be accessible here as var doesn't support block scope
// but blockScopedLet won't be accessible here because let supports block scope
console.log(blockScopedVar);
console.log(blockScopedLet);