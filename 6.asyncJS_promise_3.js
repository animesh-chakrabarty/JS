/*
Promise APIs :
1.Promise.all() : if all promises resolved , returns all resolved promises . If any promise rejects , rejects all.

2.Promise.allSettled() : returns all settled promises (irrerespective of resolved or reject).

3.Promise.race() : returns the first settled promise.

4.Promise.any() : returns the first resolved promise.

*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 2000);
});

// If all promise resolved returns all promises .
// If one promise rejected rejects all promises . 
Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Waits for all promises to get settled and returns all settled promise
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Returns the first settled promise
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Returns the first resolved promise
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
