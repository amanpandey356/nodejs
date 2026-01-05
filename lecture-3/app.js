// const http = require('http');

// function requestListener(req, res){
//   console.log(req)
// }

// const server = http.createServer(requestListener)
// server.listen(3000)

const http = require("http");

function requestListener(req, res) {
  console.log("url: ", req.url);
  console.log("method: ", req.method);
  console.log("headers: ", req.headers);

  // process.exit()
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<html>')
  // res.write('<head> <title> Complete Coding </title> </head>')
  // res.write('<body> <h1> Complete Coding like share and subscribe </h1> </body>')
  // res.write('</html>')
  // res.end();

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Home Page </title> </head>");
    res.write(
      "<body> <h1> Welcome To Home Page you can navigate to buy products </h1> </body>"
    );
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> Products </title> </head>");
    res.write(
      "<body> <h1> Click Buy button to book your product </h1> </body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Complete Coding </title> </head>");
  res.write(
    "<body> <h1> Complete Coding like share and subscribe </h1> </body>"
  );
  res.write("</html>");
  res.end();
}

const server = http.createServer(requestListener);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});
