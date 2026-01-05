const http = require('http')
const testingSyntax = require('./syntax')
const runtime = require('./runtime')
const logical = require('./logical')
const requestListener = require('./user')

const server = http.createServer(requestListener);

// const server = http.createServer((req, res)=>{
//   // console.log(req.url, req.method);
//   // testingSyntax();
//   // runtime();
//   // logical();
//   requestListener
// })

const PORT = 3002
server.listen(PORT,()=>{
  console.log(`The App is running at http://localhost:${PORT}`)
})
