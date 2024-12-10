# Unhandled Async Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an uncaught exception within an asynchronous callback function can lead to the server crashing without any clear indication of the error.  The `bug.js` file shows the problematic code, while `bugSolution.js` presents a solution using error handling techniques.

## Problem

The `bug.js` example creates a simple HTTP server.  The error is simulated using `setTimeout`, causing an exception to be thrown after the response headers have already been sent. Because the error is not handled using a try-catch block or a proper error listener, the server crashes without gracefully handling the situation. This can lead to unexpected downtime and difficulties in debugging.

## Solution

The `bugSolution.js` example demonstrates a robust way to handle this type of error.  It uses a `try...catch` block to handle the synchronous part of the code and adds an error listener to the server object to catch asynchronous errors. This ensures that the server continues to run even if an unexpected error occurs.