const http = require('http')

const server = http.createServer((req, res)=>{
  console.log(req.url)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<title>Practice-backend</title>')
  res.write(`<body>
    <h1>Hello World</h1>
    <p> This is a Paragraph That I added to check the nodemon <p>
    <h3>Hey nodemom is working absolutely fine<h3> 
  <body>`)
  res.write('</html>')
  res.end()
})

server.listen(3002, ()=>{
  console.log(`Your server is running on http://localhost:${3002}`)
})
