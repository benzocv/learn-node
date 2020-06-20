const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Page 1 </title></head>");
    res.write(
      "<body><h1>Page one title </h1><p>Page one description</p><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit form</button></form></body>"
    );
    res.write("</html>");
    return res.end("");
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302; //for redirection
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head></head>");
  res.write(
    "<body><h1>404 Error</h1><p>This page is not found please redirect to the home page.</p></body>"
  );
  res.write("</html>");
  res.end();
});
server.listen(3000);