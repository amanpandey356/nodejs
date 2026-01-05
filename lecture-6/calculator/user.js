const fs = require('fs')
const { sumRequestHandler } = require('./sum')

function requestListener(req, res){
  if(req.url === '/'){
    res.write('<html>')
    res.write('<head> <title>Calculator</title> </head>')
    res.write('<body>')
    res.write('<h1>Welcome To Home Page</h1>')
    res.write('<a href="/calculator" >Go To Calculator Page</a>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  } else if(req.url === '/calculator'){
    res.write('<html>')
    res.write('<head> <title>Calculator</title> </head>')
    res.write('<body>')
    res.write('<form action="/calculator-result" method="POST" >')
    res.write('<input type="number" placeholder="Enter the First umber" name="num1" />')
    res.write('<input type="number" placeholder="Enter the Second umber" name="num2" />')
    res.write('<button type="submit" >Submit</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  } else if(req.url === "/calculator-result" && req.method==="POST"){

    //! Calling the html page right here
    // const body = []
    // let myNum = {}
    // req.on('data', chunk=>{
    //   body.push(chunk)
    // })
    // req.on('end',()=>{
    //   const fullBody = Buffer.concat(body).toString()
    //   const params = new URLSearchParams(fullBody)
    //   const bodyObject = Object.fromEntries(params)
    //   const num1 = Number(bodyObject.num1)
    //   const num2 = Number(bodyObject.num2)
    //   const sum = num1 + num2
    //   console.log(sum)
    //   res.write('<html>')
    //   res.write('<head> <title>Calculator-result</title> </head>')
    //   res.write('<body>')
    //   res.write('<h1>Here You can see the result of your calculation</h1>')
    //   res.write(`<h1>The Sum is : ${sum}</h1>`)
    //   res.write('</body>')
    //   res.write('</html>')
    //   res.end()
    // })

    //todo creating separate module
    sumRequestHandler(req, res)

  }
}

module.exports = requestListener;