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



