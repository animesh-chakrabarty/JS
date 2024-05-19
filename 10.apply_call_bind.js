/* 
refence video : https://www.youtube.com/watch?v=75W8UPQ5l7k&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=4

call, apply, bind - Function borrowing
function borrowing - we can borrow function from other objects and use that function with the data of object using call(), apply(), bind()

*/

let user1 = {
  firstName: "Animesh",
  lastName: "Chakrabarty",
};

const user2 = {
  firstName: "Lionel",
  lastName: "Messi",
};

// arrow function can't be used here because this keyword behaves differently with arrow function compared to normal function
let printUserDetails = function (homeTown, city) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + ", " + city
  );
};

// call()
printUserDetails.call(user1, "bhr", "India");
printUserDetails.call(user2, "rosario", "Argentina");

console.log("***************************");

// apply();
printUserDetails.apply(user1, ["bhr", "India"]);
printUserDetails.apply(user2, ["rosario", "Argentina"]);

console.log("***************************");

// bind()
const printUser1Details = printUserDetails.bind(user1, "bhr", "India");
const printUser2Details = printUserDetails.bind(user2, "rosario", "Argentina");

printUser1Details();
printUser2Details();
