// //todo Refer lecture-3/user.js for full code here I only written which is required

// const http = require("http");
// const fs = require('fs')

// function requestListener(req, res) {
//   //! process.exit(); : To exit this
//   if (req.url === "/") {
//     res.write("<html>");
//     res.write("<head> <title> HTML Form </title> </head>");
//     res.write("<body> <h1> Enter Your Details </h1>");
//     res.write('<form action="/submit-detail" method="POST">');
//     res.write(
//       '<input type="text" name="username" placeholder="Enter YOur Name" /><br><br>'
//     );
//     res.write('<label for="gender" > Gender: </label>');

//     res.write('<input type="radio" id="male" name="gender" value="male" />');
//     res.write('<label for="male" > Male </label>');

//     res.write(
//       '<input type="radio" id="female" name="gender" value="female" />'
//     );
//     res.write('<label for="female" > Female </label> <br><br>');
//     res.write('<button type="submit" >Submit</button>');
//     res.write("</form>");
//     res.write("</body>");
//     res.write("</html>");
//     return res.end();
//   } else if (req.method == "POST" && req.url === "/submit-detail") {
//     const body = [];
//     req.on('data', chunk => {
//       console.log(chunk);
//       body.push(chunk)
//     })
//     req.on('end', () => {
//       const fullBody = Buffer.concat(body).toString();
//       console.log(fullBody);
//       const params = new URLSearchParams(fullBody)

//       //! This is one way
//       // const bodyObject = {};
//       // for(const [key, val] of params.entries()){
//       //   bodyObject[key] = val
//       // }

//       //! This is second way
//       const bodyObject = Object.fromEntries(params)
//       console.log(bodyObject);
//       fs.writeFile('user.txt',JSON.stringify(bodyObject),(err)=>{
//         if(err){
//           console.log("Error writing File")
//         }else{
//           console.log("File created successfully")
//         }
//       })
//     })

//     res.statusCode = 302;
//     res.setHeader("Location", "/"); //todo This is for moving in any route
//     return res.end(); 
//   }
// }

// const server = http.createServer(requestListener);

// server.listen(3000, () => {
//   console.log(`server runs in http://localhost:${3000}`);
// });


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
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject),(err)=>{
        if(err){
          console.log("Error writing File")
        }else{
          console.log("File created successfully")
        }
      })
    })

    res.statusCode = 302;
    res.setHeader("Location", "/"); //todo This is for moving in any route
    return res.end(); 
  }
}

module.exports = requestListener;  