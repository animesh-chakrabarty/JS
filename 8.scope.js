/*
reference video : https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8

scope, lexical env., scope chain

scope : scope of a variable or function in JS basically refers to where a variable or function can be accessed in the code.

lexical enviornment : lexical enviornment of a function means the local memory of that function along with the lexical enviornment of it's parent. 

lexical env of a func = memory component of func's EC + it's parent's lexical env
*/

// In the below example, first JS engine will search for variable x in the local memory of function b. As x is not defined inside function b JS engine will go to its parent's lexical env. As x is not present in local memory of a it'll again go to it's parents lexical env or the global lexical env and get the value there. Basically this is scope chain. 

// Inside the memory component of a functions EC there's - local variables of that func, functions present inside that functions, lexical env of it's parent 

// Here, function b is lexically inside function a and a is lexically inside global scope.
// lexical env of b = local memory of b + lexical env of a = local memory of b + local memory of a + lexical env of global scope
// lexical env of a = local memory of a + lexical env of global scope

const a = () => {
  const b = () => {
    console.log(x);
  };

  b();
};

const x = 10;
a();
