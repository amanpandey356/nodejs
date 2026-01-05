//! This code I have taken from lecture-6/user/user.js
//todo Here We will write just requestListener function
const fs = require('fs')

function requestListener(req, res) {
  //! process.exit(); : To exit this
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
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk)
    })
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody)

      //! This is one way
      // const bodyObject = {};
      // for(const [key, val] of params.entries()){
      //   bodyObject[key] = val
      // }

      //! This is second way
      const bodyObject = Object.fromEntries(params)
      console.log(bodyObject);
      fs.writeFile('user.txt', JSON.stringify(bodyObject), (error) => {
        console.log("Data Written Successfully")
        res.statusCode = 302;
        res.setHeader("Location", "/"); //todo This is for moving in any route
        return res.end();
      })
    })
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head> <title> lecture-6 </title> </head>')
    res.write('<body>')
    res.write('<h1> Like / Share / Subscribe </h1>')
    res.write('</body>')
    res.write('</html>')
  }
}

module.exports = requestListener;  
