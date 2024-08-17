/*
There are 4 major promise APIs-
- promise.all()
- promise.allSettled()
- promise.race()
- promise.any()
*/

const p1 = fetch("https://catfact.ninja/fact");
const p2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const p3 = fetch("https://jsonplaceholder.typicode.com/todos/1");

// promise.all([p1, p2, p3])
// on resolve - wait till all the promises gets resolved. Once all the promises are resolved then only return data
// on reject - if one promise gets rejected the whole promise.all() gets rejected

// Promise.all() using .then-.catch
Promise.all([p1, p2, p3])
  .then((res) => {
    return Promise.all(res.map((i) => i.json()));
  })
  .then((res_json) => {
    console.log(res_json[0]);
    console.log(res_json[1]);
    console.log(res_json[2]);
  });

// Promise.all() using async await
Promise.all([p1, p2, p3]).then(async (res) => {
  const res0_json = await res[0].json();
  const res1_json = await res[1].json();
  const res2_json = await res[2].json();

  console.log(res0_json);
  console.log(res1_json);
  console.log(res2_json);
});

// promise.allSettled([p1, p2, p3])
// on settle - wait till all the promise gets settled and then return the data
// unlike promise.all(), even if one promise gets rejected promise.allSettled() returns the results for the fullfilled ones and error for the rejected ones
Promise.allSettled([p1, p2, p3])
  .then(async (res) => {
    const res0_json =
      res[0].status == "fulfilled"
        ? await res[0].value.json()
        : await res[0].reason;
    const res1_json =
      res[1].status == "fulfilled"
        ? await res[1].value.json()
        : await res[1].reason;
    const res2_json =
      res[2].status == "fulfilled"
        ? await res[2].value.json()
        : await res[2].reason;
    console.log(res0_json);
    console.log(res1_json);
    console.log(res2_json);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// promise.race([p1, p2, p3])
// returns the data of the first settled promise
Promise.race([p1, p2, p3])
  .then((res) => res.json())
  .then((res_json) => console.log(res_json))
  .catch((error) => console.log(error));

// promise.any([p1, p2, p3])
// returns the data of the first resolved promise
// if all 3 promises fails - promise.any() will return an aggregated error (all 3 errors combined)
Promise.any([p1, p2, p3])
  .then((res) => res.json())
  .then((res_json) => console.log(res_json))
  .catch((error) => console.log(error));

// all, allSettled - returns a array of promise
// race, any - returns a single promise
