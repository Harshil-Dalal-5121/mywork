import http from "http"
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`Welcome to this page! \n`);
  
  res.end(`Hello This made using nodejs\n`);
}).listen(3000);