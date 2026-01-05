const http = require('http')
const requestListener = require('./user')

const server = http.createServer(requestListener)
server.listen(3001, ()=> {
  console.log(`Your Server run at http://localhost:${3001}`)
})