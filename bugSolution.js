const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error that occurs asynchronously
    setTimeout(() => {
      throw new Error('Something went wrong!');
    }, 100);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Caught synchronous error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (error) => {
  console.error('Caught asynchronous error:', error);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});