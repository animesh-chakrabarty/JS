/*
map , filter , reduce

reference : https://www.youtube.com/watch?v=zdp0zrpKzIE&t
*/

const arr = [1, 2, 3, 4, 5, 6];

// map()
// ex-1 : Double each element of the array
const arrDouble = arr.map((value) => {
  return value * 2;
});

// ex-2 : Binary of each element of the array
const arrBinary = arr.map((value) => {
  return value.toString(2);
});
// *****************************************************

// filter()
// ex-1 : create array with only odd values from the array
const arrofOddNums = arr.filter((value) => {
  return value % 2;
});

console.log(arrDouble);
console.log(arrBinary);
console.log(arrofOddNums);
// ****************************************************

// reduce()
// basic syntax : arr.reduce((accumulator,current)=>{},initialValueOfAccumulator)

// ex-1 : sum of the elements of the array
const sum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(sum);

// ex-2 : find max from the elements of the array
const max = arr.reduce((max, curr) => {
  max = curr > max ? curr : max;
  return max;
}, -1);
console.log(max);
// ****************************************************

// Real life examples
let users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Smith", age: 35 },
  { firstName: "Alice", lastName: "Johnson", age: 25 },
  { firstName: "Bob", lastName: "Brown", age: 35 },
  { firstName: "Emily", lastName: "Davis", age: 22 },
];

// ex-1 : create a list of full names of all the users from the array provided above

const listOfFullNames = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

console.log(listOfFullNames);

// ex-2 : create an object like these -
// {25:2 , 35:2 , 22:1}

const ages = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ages);
