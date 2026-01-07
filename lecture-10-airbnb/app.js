const path = require('path')

// External Module
const express = require('express')

// Local Module
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtils')

const app = express()

// app.use((req, res, next)=>{
//   console.log(req.url, req.method);
//   next()
// })

// using parsing and express router
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next)=>{
  // res.status(404).send("<h1>404 Page Not Found</h1>")

  // res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'))
  
  res.status(404).sendFile(path.join(rootDir, './', 'views', '404.html'))
})

// app.get("/",(req, res, next)=>{
//   console.log(req.url, req.method)
//   res.send(`<h1>Welcome to airbnb</h1>
//     <a href="/host/add-home">Add Home</a>
//     `)
// })

// app.get("/host/add-home",(req, res, next)=>{
//   res.send(`<h1>Register Your Home Here</h1>
//     <form action="/host/add-home" method="POST">
//     <input type="text" name="housename" placeholder="Enter Your name of the house" />
//     <input type="submit" />
//     </form>
//     `)
// })


// app.post("/host/add-home",(req, res, next)=>{
//   console.log(req.body)
//   res.send(`<h1>Home Registered Successfully</h1>
//     <a href="/"> Go To Home </a>
//     `)
//   })
  
const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`your app is running on address http://localhost:${PORT}`);
})