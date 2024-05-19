/*
Async function : It always returns a promise.

There are two cases -
1. If the async function returns promise . 
2. If the function returns anything other than promise async function wraps that thing in a promise.


Await :
await is a keyword that can only be used inside a async function. 


async-await combo is used to handle promises
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved");
    console.log("log inside promise")
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolved");
  }, 10000);
});

const func = async () => {
  console.log("This should be printed immediately");

  const p2Res = await p2;
  console.log(p2Res);

  const p1Res = await p1;
  console.log(p1Res);

};

func();
// console.log(res);
