/*
reference : https://www.youtube.com/watch?v=vQcCNpuaJO8&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=4

*/

const multiply_bind = (x, y) => {
  console.log(x * y);
};

const multiply_closure = (x) => {
  return (y) => {
    console.log(x * y);
  };
};

// 1.function currying using bind method
// in the below code value of x in multiply_bind function is set to 2
const multiplyByTwo = multiply_bind.bind(this, 2);
multiplyByTwo(3);

// 2.function currying using closures
const multiplyByThree = multiply_closure(3);
multiplyByThree(4);

const ans = multiply_closure(5)(6);
console.log(ans);
