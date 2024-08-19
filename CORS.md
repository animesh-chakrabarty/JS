## _Prerequisites_

### _Origin_
In the context of Cross-Origin Resource Sharing (CORS), the term "origin" refers to the combination of three specific parts of a URL:

1. **Scheme (or protocol)**: This is the protocol used in the URL, such as `http`, `https`, etc.
2. **Host**: This is the domain name or IP address of the server, like `example.com` or `192.168.1.1`.
3. **Port**: This is the port number used to communicate with the server, such as 80 for HTTP, 443 for HTTPS, or any other port number specified.

### _Same Origin Policy(SOP)_
- Let's say, your frontend application is making a API call to a backend application that's running on the same IP, same PORT and following the same protocol. Then it's a Same Origin Request.
- By default, browsers allow same origin request
- For example, you're running a frontend application on `http://localhost:8000` and the backend application is also running on `http://localhost:8000`. Now, if you send a `HTTP` request to your backend from the frontend app it'll be considered as `same-origin request` and browser will allow the request to be made (under `SOP`) without any pre-configuration 
- But if the backend is running on a different port, let's say `http://localhost:4000` then the browser will not allow this request to be made as it's a `cross-origin request`

### _Cross Origin Resource Sharing (CORS)_
- Let's understand `CORS` with the above example of `cross-origin request` 
- As we have discussed, the browser implements a same-origin policy that allows resources to be fetched from its origin and blocks resources from an external origin. 
- This can be changed through Cors in node.js. When the browser makes a request, an `origin` header is specified by default by the browser in the request & in this case, the value of the origin will be `http://localhost:4000` . 
- The req will go to the backend server & when sending the response, the server will add the `Access-Control-Allow-Origin` header to the response. This header's value should match the `origin` header's value in the request. In this case the value of `Access-Control-Allow-Origin` should be `http://localhost:4000`. 
- If this is a match, then the request is allowed. 
- If the server does not include this header, or if the origin in the `Access-Control-Allow-Origin` header doesn't match your frontend's origin, the browser will block the response, and your frontend app won't be able to access the data.

_IMP: If the value of `Access-Control-Allow-Origin` is `*` that means the backend allows request from any origin_

- Check out this article for better understanding: [cors-in-node-js-by-scalar](https://www.scaler.com/topics/nodejs/cors-in-node-js/)