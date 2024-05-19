/*
Synchronous : One task at a time. Next one starts only after previous one ends. 
asynchronous : Multiple task can be done at a time.

async JS - callback, promise, async-await .
*/

// Callback fn: Functions those are passed as arguments to another function.

const higherOrderFunction = (callback) =>{
    callback();
}

const callbackFunction = () => {
    console.log("Example of callback function");
}

higherOrderFunction(callbackFunction);

// Examples of callback fn 
// setTimeout
setTimeout(()=>{
    console.log("This will execute after 2000ms")
},2000)

// setInterval
setInterval(()=>{
    console.log("This code will be executed after every 1000ms")
},1000)