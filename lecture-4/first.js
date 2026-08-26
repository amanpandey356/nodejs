// How To exit event loop
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  process.exit(); // stop event loop
})

const PORT = 3000
server.listen(PORT, () => `Server running at http://localhost:${PORT}`)