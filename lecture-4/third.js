// // Sending Response
// const http = require('http')

// const server = http.createServer((req, res) => {
//   // res.setHeader('Content-type', 'text/html') //! In this you can see in html format
//   res.setHeader('Content-type', 'text/plain')   //! In this You will see like paragraph 
//   res.write('<html>')
//   res.write('<head><title>Complete Coding</title></head>')
//   res.write('<body><h1>Like / Share / Subscribe</h1></body>')
//   res.write('<html>')
//   res.end()   //! Upto here my response is done after this don't execute anything
// })

// const port = 3000
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`)
// })


//todo Routing Request
const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html') // Hey Browser I am sending a html
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  if(req.url === '/'){
    res.write('<h1>Welcome to home page</h1>')
    return res.end()
  } else if(req.url === '/products'){
    res.write('<h1>Welcome to Products page</h1>')
    return res.end()
  }
  res.write('<body><h1>Like / Share / Subscribe </h1></body>')
  res.write('</head>')
  res.end();
})

const port = 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})