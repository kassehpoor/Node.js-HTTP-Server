# Node.js HTTP Server Readme

This project is a simple Node.js HTTP server that serves static and dynamic content. It includes functionality for handling GET requests for the root path and POST requests for data. The server is set to run on port 2020.

## Project Structure

- **indexhttp.html**: A static HTML file served for the root path ('/') when a GET request is received.
- **server.js**: The main Node.js server script.

## server.js

### Overview

The `server.js` script creates an HTTP server using the built-in `http` module in Node.js. It listens for incoming requests, handles GET requests for the root path by serving the contents of `indexhttp.html`, and handles POST requests to the '/data/' endpoint by parsing JSON data and responding with a customized message.

### Running the Server

To run the server, execute the following command:

```bash
node server.js
```

The server will be accessible at `http://localhost:2020`.

### Dynamic Content

The server also includes a simple dynamic page with an input button and a text area. Clicking the button triggers a POST request to the '/data/' endpoint, and the server responds with a message based on the input value.

## Notes

- The server runs on port 2020 by default. You can change the port by modifying the `const port = 2020;` line in the script.
- The `indexhttp.html` file is served for GET requests to the root path ('/').
- Dynamic content is achieved through a simple HTML page with JavaScript handling the POST request and updating the page dynamically.
- This is a basic example, and for production use, consider using more sophisticated frameworks like Express for Node.js.

Feel free to explore and modify the code to suit your needs. For more information on Node.js and its modules, refer to the official documentation at [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/).
