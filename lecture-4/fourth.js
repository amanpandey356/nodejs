//4.6 Taking user input
const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html')
  res.write('<body>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<body>')
  if(req.url === '/'){
    res.write('<h1>Welcome to Home Page</h1>')
    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"/><br><br>')
    res.write('<label for="gender">Gender: </label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" name="gender" value="femail" id="female" />')
    res.write('<label for="female">Female</label>')
    res.write('<button type="submit">Submit</button>')
    res.write('</form>')
    return res.end()
  } else if(req.method === 'POST' && req.url === '/submit-details'){
    fs.writeFileSync('user-details.txt', 'Aman Pandey'); //! Synchronous (blocking)
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
  res.write('</body>')
  res.write('</body>')
})

const port = 3000
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})