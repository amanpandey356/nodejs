const http = require('http')
const requestListener = require('./user')

const server = http.createServer(requestListener)

server.listen(3000, ()=>{
  console.log(`Your server is running on http://localhost:${3000}`)
})
