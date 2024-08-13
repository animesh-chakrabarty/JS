/* 
refence video : https://www.youtube.com/watch?v=75W8UPQ5l7k&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=4

function borrowing - we can borrow function from other objects and use that function with the data of object using call(), apply(), bind()

function sharing - These methods allow you to share a function across different contexts dynamically.
*/

let user1 = {
  firstName: "Lionel",
  lastName: "Messi",
};

const user2 = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
};

// arrow function can't be used here because this keyword behaves differently with arrow function compared to normal function
let printUserDetails = function (homeTown, city) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + ", " + city
  );
};

// call()
// call() method invokes a function with a specific this context and arguments passed individually.
printUserDetails.call(user1, "Rosario", "Argentina");
printUserDetails.call(user2, "Lisbon", "Portugal");

console.log("**************************************");

// apply()
// The apply() method is similar to call, but it takes arguments as an array or array-like object.
printUserDetails.apply(user1, ["Rosario", "Argentina"]);
printUserDetails.apply(user2, ["Lisbon", "Portugal"]);

console.log("**************************************");

// bind()
// The bind method creates a new function that, when invoked, has its this context set to the value provided. Unlike call and apply, bind does not execute the function immediately. Instead, it returns a new function that can be invoked later.
const printUser1Details = printUserDetails.bind(user1, "Rosario", "Argentina");
const printUser2Details = printUserDetails.bind(user2, "Lisbon", "Portugal");

printUser1Details();
printUser2Details();

console.log("**************************************");
