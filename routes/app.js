const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Send Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send Message</button></form></p></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>This is my first page in node</title></head>");
  res.write(
    "<body><p>Hello people I'm Anzarahmedkhan. This is not root url </p></body>"
  );
  res.write("</html>");
  res.end();
});
server.listen(3000);
