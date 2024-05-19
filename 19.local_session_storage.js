/*
webStorage API-
- local storage
- session storage

session storage : as soon as user visits a website a session is started. The data regarding that session is stored within browser memory. The moment user closes the tab or the browser the session data of that particular site gets cleared.

- Each tab or window has its own session storage area, and data stored in one tab/window is not accessible from another tab/window.

local storage : local storage persists beyond the current session. Data stored using local storage remains available even after the user closes the browser and then reopens it.

- both local and session storage stores value in form of key value pair of string
- both local and session storage follows the same origin policy. 
- origin is defined as the combination of three things -
1. Protocol
2. Domain
3. Port

For example,
local and session storage data of https://www.youtube.com will be accessible from https://www.youtube.com/account. But it won't be accessible from http://www.youtube.com as the protocol changed from https to http in the second case. 

4 main methods of local and session storage -
1. setItem()
2. getItem()
3. removeItem()
4. clear()
*/

// set item to localStorage
localStorage.setItem(
  "demo",
  "value is stored in localstorage in form of key-value pair"
);

// get item from localStorage
const res = localStorage.getItem("demo");
console.log(res);

// remove item from localStorage
// localStorage.removeItem("demo");

// clear everything from localStorage
// localStorage.clear()

// Store object in localStorage
const data = {
  name: "aChakrabarty",
  age: 20,
};

// convert JSON object into string and store in localStorage
localStorage.setItem("user", JSON.stringify(data));

// convert string into original format (JSON object)
console.log(JSON.parse(localStorage.getItem("user")));

localStorage.removeItem("user");
localStorage.removeItem("demo");
