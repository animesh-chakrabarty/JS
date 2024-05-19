/*
debouncing is not core JS functionality.
It's developed using setTimeout() webAPI.
*/
const inputField = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

const debounce = (cb, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateDebounceText = debounce((text) => {
  debounceText.innerText = text;
});

inputField.addEventListener("input", (e) => {
  // default method
  defaultText.innerText = e.target.value;
  // debounced method
  updateDebounceText(e.target.value);
});
