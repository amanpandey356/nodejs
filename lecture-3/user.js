const http = require("http");
const fs = require('fs');

function requestListener(req, res) {
  // console.log("Hello World")
  // process.exit()
  console.log(req.url, req.method, req.headers)
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head> <title> HTML Form </title> </head>");
    res.write("<body> <h1> Enter Your Details </h1>");
    res.write('<form action="/submit-detail" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter YOur Name" /><br><br>'
    );
    res.write('<label for="gender" > Gender: </label>');

    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="male" > Male </label>');

    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<label for="female" > Female </label> <br><br>');
    res.write('<button type="submit" >Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.method == "POST" && req.url === "/submit-detail") {

    //todo this is just normal page displaying
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head> <title> Form Submit </title> </head>");
    // res.write(
    //   "<body> <h1> Congrats Your Form got submitted successfully </h1> </body>"
    // );
    // res.write("</html>");
    // return res.end();

    //todo Let's Re-Direct to Another Page
    // fs.writeFileSync('user.txt', "AMAN PANDEY")
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title> Home Page </title> </head>");
  res.write(
    "<body> <h1> Welcome To Home Page you can navigate to buy products </h1> </body>"
  );
  res.write("</html>");
}

const PORT = 3000;
const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`server Running on http://localhost:${PORT}`);
});
