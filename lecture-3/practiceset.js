const http = require("http");

function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title> Practice Set </title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Myntra Shopping Mall</h1>");
    res.write("<a href='/'>Home</a><br><br>");
    res.write("<a href='/men'>Men</a><br><br>");
    res.write("<a href='/women'>Women</a><br><br>");
    res.write("<a href='/kids'>Kids</a><br><br>");
    res.write("<a href='/cart'>Cart</a><br><br>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<html>");
    res.write("<head> <title>Men Section</title> </head>");
    res.write("<body>");
    res.write("<a href='/'>Home</a><br><br>");
    res.write("<a href='/men'>Men</a><br><br>");
    res.write("<a href='/women'>Women</a><br><br>");
    res.write("<a href='/kids'>Kids</a><br><br>");
    res.write("<a href='/cart'>Cart</a><br><br>");
    res.write("<h1>Welcome to Men Section of shopping</h1>");
    res.write("</body>");
    res.write("</html>");
  } else if (req.url === "/women") {
    res.write("<html>");
    res.write("<head> <title>Women Section</title> </head>");
    res.write("<body>");
    res.write("<a href='/'>Home</a><br><br>");
    res.write("<a href='/men'>Men</a><br><br>");
    res.write("<a href='/women'>Women</a><br><br>");
    res.write("<a href='/kids'>Kids</a><br><br>");
    res.write("<a href='/cart'>Cart</a><br><br>");
    res.write("<h1>Welcome to Women Section of shopping</h1>");
    res.write("</body>");
    res.write("</html>");
  } else if (req.url === "/kids") {
    res.write("<html>");
    res.write("<head> <title>Kids Section</title> </head>");
    res.write("<body>");
    res.write("<a href='/'>Home</a><br><br>");
    res.write("<a href='/men'>Men</a><br><br>");
    res.write("<a href='/women'>Women</a><br><br>");
    res.write("<a href='/kids'>Kids</a><br><br>");
    res.write("<a href='/cart'>Cart</a><br><br>");
    res.write("<h1>Welcome to Kids Section of shopping</h1>");
    res.write("</body>");
    res.write("</html>");
  } else if (req.url === "/cart") {
    res.write("<html>");
    res.write("<head> <title>Cart Section</title> </head>");
    res.write("<body>");
    res.write("<a href='/'>Home</a><br><br>");
    res.write("<a href='/men'>Men</a><br><br>");
    res.write("<a href='/women'>Women</a><br><br>");
    res.write("<a href='/kids'>Kids</a><br><br>");
    res.write("<a href='/cart'>Cart</a><br><br>");
    res.write("<h1>You Have 3 Products Move Ahead and make a payment</h1>");
    res.write("</body>");
    res.write("</html>");
  } else {
    res.write("<html>");
    res.write("<head> <title>Default Section</title> </head>");
    res.write("<body>");
    res.write("<a href='/'>Home</a><br><br>");
    res.write("<a href='/men'>Men</a><br><br>");
    res.write("<a href='/women'>Women</a><br><br>");
    res.write("<a href='/kids'>Kids</a><br><br>");
    res.write("<a href='/cart'>Cart</a><br><br>");
    res.write("<h1>Url Not Found</h1>");
    res.write("</body>");
    res.write("</html>");
  }
}

const server = http.createServer(requestListener);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server starts at http://localhost:${PORT}`);
});
