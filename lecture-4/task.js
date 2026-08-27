/* Create a page that shows a navigation bar of
Myntra with the following links:
A. Home
B. Men
C. Women
D. Kids
E. Cart
Clicking on each link page should navigate to that
page and a welcome to section text is shown there. */

const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Section 4 Task</title></head>')
  res.write(`
  <style>
    nav {
      display: flex;
      gap: 30px;
      padding: 15px;
      background-color: #333;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-size: 18px;
    }

    nav a:hover {
      text-decoration: underline;
    }
  </style>
`);

  res.write('<body>');

  res.write(`
  <nav>
    <a href="/">A. Home</a>
    <a href="/men">B. Men</a>
    <a href="/women">C. Women</a>
    <a href="/kids">D. Kids</a>
    <a href="/cart">E. Cart</a>
  </nav>
`);
  if (req.url === '/'){
    res.write('<h1>Welcome To Home page</h1>')
    return res.end()
  } else if(req.url === '/men'){
    res.write('<h1>Welcome to Men section</h1>')
    return res.end()
  } else if(req.url === '/women'){
    res.write('<h1>Welcome to women section</h1>')
    return res.end()
  } else if(req.url === '/kids'){
    res.write('<h1>Welcome to kids section</h1>')
    return res.end()
  } else if(req.url === '/cart'){
    res.write('<h1>Welcome to Cart section</h1>')
    return res.end()
  }

  res.write('</body>');
  res.write('<html>')
  res.end()
})
const port = 3000
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})