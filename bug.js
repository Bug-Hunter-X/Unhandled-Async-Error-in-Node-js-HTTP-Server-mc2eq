const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an error that occurs asynchronously
  setTimeout(() => {
    throw new Error('Something went wrong!');
  }, 100);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});