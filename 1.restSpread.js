// Rest & Spread Operator

// Rest operator
// Rest operator was introduced in ES6
// Use cases - function parameter , Array destructuring

// usecase1 : function parameter
// Rest parameter (parameter with rest operator) takes all the parameter values passed to the function and combine them into an array.
const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const res = sum(1, 2, 3, 4, 5, 6);
console.log(res);

// useCase2 : array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(first, second, rest);

// Spread Operator
// useCase1 : combine two array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

// useCase2 : add element to an array
const newArr = [...combinedArr, 90];
console.log(newArr);

// useCase3 : as function parameter
const sum2 = (x, y, z) => {
  return x + y + z;
};

const arr3 = [1, 2, 3];
console.log(sum2(...arr3));
