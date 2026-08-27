// understanding request object
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
})

const port = 3000
server.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`)
})