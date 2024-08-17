## _Default JS Behaviour_
- By default, JS is synchronus & single threaded.
- Synchronous: JS engines can't execute next line of code untill the current line is finished executing
- Single Threaded: JS engine can only execute one line of code at a time 

## _Blocking & Non-Blocking Code_
- Ex: API calls, File handling
- **File handling** - readFileSync (blocks the execution untill the file is read completely), readFileAsync (doesn't block the execution)

## _How async codes are executed_

### _setTimeout()_
- **setTimeout Call**: When the JavaScript engine encounters the setTimeout function call, it sends the callback function and the specified time duration to the Web API environment.
- **Timer Starts**: The Web API environment starts a timer for the duration specified (in this case, 10000 milliseconds).
- **Timer Expiry**: Once the 10000 milliseconds have passed, the Web API environment then pushes the callback function to the task queue/ callback queue.
- **Event Loop**: The event loop checks if the call stack is empty (i.e., no other code is currently being executed). If the call stack is empty, the event loop will take the callback function from the task queue and push it to the call stack for execution.

### _Event Listener_
- **Registration**: When you call button.addEventListener('click', callback), the browser's Web API environment registers the callback function with the specified event type (in this case, "click") and the target element (the button).
- **Waiting for the Event**: The Web API environment monitors events happening in the browser, like user interactions (clicks, key presses, etc.), network activity, or other events. The callback function is essentially "waiting" within this registration, but it's not actively consuming any resources. The browser's Web API is responsible for detecting when the specified event occurs.
- **Event Triggered**: When the specified event occurs (e.g., the user clicks the button), the Web API environment recognizes that this event matches the registered event listener.
- **Callback Queued**: The callback function is then placed into the task queue/ callback queue. The event loop will pick it up from the task queue and push it onto the call stack for execution once the call stack is empty.

### _Fetch Network Call_
- **Initiating the Request**: When you call fetch(url, options), the JavaScript engine sends a request to the specified URL using the given options (such as method, headers, body, etc.). This request is asynchronous, meaning it won't block the rest of your code from running while waiting for a response.
- **Sending the Request**: The fetch request is handled by the browser's Web API environment, which sends the network request over the internet to the server. This happens outside the main JavaScript thread, so it doesn’t affect the performance of your webpage.
- **Waiting for the Response**: While the request is being processed by the server, the JavaScript engine continues executing other code. The fetch function immediately returns a Promise object, which represents the eventual completion (or failure) of the asynchronous operation.
- **Response Received**: Once the server responds, the Web API environment receives the response data (which could be anything like HTML, JSON, or an image file). The Web API environment then passes this data back to the JavaScript engine.
- **Promise Resolved or Rejected**: The Promise object that was returned by fetch earlier is now either resolved (if the request was successful) or rejected (if there was an error, such as a network issue or a server error).
- **Microtask Queued**: When the Promise returned by fetch is resolved or rejected, the corresponding .then() or .catch() callback is placed in the microtask queue. The microtask queue has a higher priority than the task queue. This means that the event loop will first clear all tasks in the microtask queue before moving on to the tasks in the task queue.
- **Event Loop Processing**: The event loop picks up the microtasks from the microtask queue and processes them immediately after the current operation on the call stack is completed but before moving on to the next task in the task queue. This allows Promise callbacks to execute more promptly.



