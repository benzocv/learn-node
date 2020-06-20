const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.headers, req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello Anzar!</title></head>");
  res.write("<body><h1>Page Title</h1><p>This is page descriptin !</p></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);