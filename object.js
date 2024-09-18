/*
Objects 
In JS, objects are a data structure that stores key-value pairs.
*/

// ********************** Basic object **********************
let obj1 = {
  name: "Leo Messi",
  city: "rosario",
  age: 37,
  getDetails: function () {
    console.log(this.name + " from " + this.city);
  },
};
// this declaration of object is known as object literals

console.log(obj1);
console.log(obj1["name"]);
console.log(obj1.getDetails);
obj1.getDetails();
console.log("********************************************");

// ********************** Object with dynamic key value **********************
const key = "name";
const value = "Cristiano Ronaldo";
let obj2 = {
  [key]: value,
  city: "lisbon",
  getDetails: function () {
    console.log(this.name + " from " + this.city);
  },
};
obj2.age = 39;

console.log(obj2);
obj2.getDetails();
console.log(obj2[key]);
console.log("********************************************");

// ********************** Looping through object **********************
for (x in obj2) {
  console.log(obj2[x]);
}

Object.freeze(obj2); // object will be freezed (can't be updated)
obj2.city = "madrid";
console.log(obj2);
console.log("********************************************");

// ********************** Merge objects **********************
// 1. Object.assign()
const o1 = {
  0: "a",
  1: "b",
};

const o2 = {
  2: "c",
  3: "d",
};

// Object.assign(target, source)
// the new merged object will be stored inside the taget object that is provided.In this case o1
Object.assign(o1, o2);
console.log(o1);

const mergedObj = Object.assign({}, o1, o2);
console.log(mergedObj);

// 2. spread operator
const newObj = { ...o1, ...o2 };
console.log(newObj);

console.log("Keys : ", Object.keys(newObj)); // get all keys of a object
console.log("Values : ", Object.values(newObj)); // get all values of a object
console.log(Object.entries(newObj));
console.log(newObj.hasOwnProperty(2));


