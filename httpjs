// Import the 'http' module to create an HTTP server
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Check if the request URL is '/'
  if (req.url === '/') {
    // Respond with "Welcome to Nodejs" for the root URL
    res.statusCode = 200; // HTTP status code 200: OK
    res.setHeader('Content-Type', 'text/plain'); // Set response content type as plain text
    res.end('Welcome to Nodejs'); // Send the response body
  } else {
    // For all other routes, respond with a 404 status and custom message
    res.statusCode = 404; // HTTP status code 404: Not Found
    res.setHeader('Content-Type', 'text/plain'); // Set response content type as plain text
    res.end('Page Not Found'); // Send a custom 404 error message
  }
});

// Make the server listen on port 8000
server.listen(8000, () => {
  console.log('Server is running at http://localhost:8000');
});
