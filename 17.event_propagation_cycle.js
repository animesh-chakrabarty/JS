/*
resource : https://www.youtube.com/watch?v=aVSf0b1jVKk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=7

event propagation cycle :
- capture phase
- target phase
- bubbling phase
*/

const grandparentSelector = document.querySelector("#grandparent");
const parentSelector = document.querySelector("#parent");
const childSelector = document.querySelector("#child");

grandparentSelector.addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  true
);

parentSelector.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
);

childSelector.addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true
);
