// Require http module
// var http = require("http");
import http from "http";
// Create server
http
  .createServer(function (req, res) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "This is the example
    // of node.js web based application"
    res.end("This is the example of node.js web-based application using Nodemon\n");

    // Console will display the message
  })
  .listen(3000, () => console.log("Server running at http://127.0.0.1:3000/"));
