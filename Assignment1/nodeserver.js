const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Creating a server object
const server = http.createServer((req, res) => {
  // Setting the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Sending the response body 
  res.end('Welcome to Node.Js\n');
});

// Starting the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  // Printing the message to the console once the server starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});
