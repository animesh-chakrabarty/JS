const inputBoxRef = document.querySelector(".input-box");
const debounceTextRef = document.querySelector(".debounce-text");

// do the main job - updating the span
const mainJob = (text) => {
  debounceTextRef.innerText = text;
};

// debounce function - to call the mainJob function after the certain delay if there is no activity
const debounce = (cb, delay) => {
  let timeoutId;
  const performDebounce = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return performDebounce;
};

// passing the value that needs to be displayed to updateDebounceText
// updateDebounceText has access to mainJob fn because updateDebounceText is basically the  performDebounce function which has access to mainJob as performDebounce's parent debounce has access to it 
const updateDebounceText = debounce(mainJob, 1000);

inputBoxRef.addEventListener("input", (e) => {
  updateDebounceText(e.target.value);
});
