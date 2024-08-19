// spread & rest Operator

// Challenge 1 (spread): when function expects individual values, but the arguments comes as a pack of individual values (array, object)

const sumOne = (x, y) => {
  return x + y;
};

const inputArr = [2, 3];
console.log(sumOne(inputArr));
// In this case, function sumOne is expecting two individual values but instead recieves an array of two elements. It won't be able to produce the right output because of it

console.log(sumOne(...inputArr)); //spread operator
// so instead of passing the array directly, we can spread the elements and then pass it to the function. Spread operator breaks down the elements of the array into individual values and pass it to the function


// Challenge 2 (rest):  But in the above example, we can't do summation of as many elements as we want. If the user sends 5 elements then only first 2 elements will be summed and returned. To avoid this problem we use rest operator. 
const sumTwo = (...args) => {
  // console.log(args)
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }

  return sum;
};

console.log(sumTwo(2, 4, 6, 10));

// rest basically converts individual values into an array of elements 
// So techincally, spread converts an array of elements into individual values & rest converts individual values into an array of elements

// Now lets say, I want to sum all the elements except the first two 
const sumThree = (a, b, ...args) => {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }

  return sum;
}

console.log(sumThree(2, 4, 1, 1, 1))

// Below are the some other use cases of spread & rest operator 

// useCase1 : array destructuring
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