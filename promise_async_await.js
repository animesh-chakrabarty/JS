// async operations -
// DB call
// Network calls
// File read
// Encryption-Decryption

// Async opearations before promise - using callback
// const cart = ["shirt", "trouser", "shorts"];

// createOrder(cart, function () {
//   proceedToPayment();
// });

// In the above example, the createOrder function will create a order with the provided cart in the DB and after successfully crating the order it'll call proceedToPayment() function.
// The problem here is, inversion of control - we're giving control of proceedToPayment() function to some other function and it might happen that proceedToPayment never get called or get called twice

// Promise handling -
// - create
// - consume - .then .catch / try catch wrapped async-await

// MDN Definition: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// When consuming a promise through .then-.catch if the promise is fullfilled the data can be recieved only inside the .then block & if the promise is rejected the error will be recieved inside the .catch block
// When consuming a promise through async-await if the promise is fullfilled the data can directly be recieved in a variable inside the try block of async function and if the promise is rejected then the error will be caught in the catch block of async function

// Promise has three states - pending, fullfilled, rejected

// Example 1: basic promise
// Promise creation
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

// Promise consumption (using .then-.catch)
promiseOne
  .then(() => {
    console.log("Promise resolved");
  })
  .catch(() => {
    console.log("Promise rejected");
  });

// Example 2: passing data inside resolve & reject
// Promise creation
const promiseTwo = new Promise((resolve, reject) => {
  const error = false;
  setTimeout(() => {
    if (!error) {
      resolve({ Error: false, message: "Promise fullfilled" });
    } else {
      reject({ Error: true, message: "Promise rejected" });
    }
  }, 1000);
});

// Promise consumption
promiseTwo
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// If we try to print the promise when the promise is not resolved (in this case, before 1000ms) we'll get promise<pending>
// The code will look like this
const res = promiseTwo
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

console.log(res);

// Example 3: finally block in promise consumption
promiseTwo
  .then((data) => console.log("Handled using then-catch: ", data))
  .catch((error) => console.log("Handled using then-catch: ", error))
  .finally(() => console.log("Promise is either resolved or rejected"));

// Example 4: promise consumption using async await
async function consumePromiseTwo() {
  try {
    const res = await promiseTwo;
    console.log("Handled using async-await: ", res);
  } catch (error) {
    console.log("Handled using async-await: ", error);
  }
}

consumePromiseTwo();

// Example 5: network call using fetch (.then-.catch)
fetch("https://catfact.ninja/fact")
  .then((res) => {
    return res.json();
  })
  .then((res_json) => {
    console.log(res_json);
  })
  .catch((error) => {
    console.log(error);
  });

// Example 6: network call using async-await
async function fetchCatFact() {
  try {
    const data = await fetch("https://catfact.ninja/fact");
    const data_json = await data.json();
    console.log(data_json);
  } catch (error) {
    console.log(error);
  }
}

fetchCatFact();
