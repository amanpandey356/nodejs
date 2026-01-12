const path = require('path')
const rootDir = require('./utils/pathUtils')

const express =  require('express')
const app = express()
const hostRouter = require('./routes/hostRouter')
const userRouter = require('./routes/userRouter')

//! Here We are using css file
app.use(express.static(path.join(rootDir, 'public')))

app.use("/host",hostRouter)
app.use(userRouter)
app.use((req, res, next)=>{
  // res.sendFile(path.join(__dirname, './', 'views', '404.html'))
  res.sendFile(path.join(rootDir, 'views', '404.html'))
})

const PATH = 3000
app.listen(PATH, ()=>{
  console.log(`Your Application is running on http://localhost:${PATH}`)
})