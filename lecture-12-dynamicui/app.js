const path = require('path')
const express = require('express')
const app = express()
const rootDir = require('./utils/pathUtils')
const bodyParser = require('body-parser')

const { hostRouter } = require('./router/hostRouter')
const userRouter = require('./router/userRouter')

app.use(bodyParser.urlencoded())

//todo After Installation using ejs
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(rootDir, 'public')))

app.use(userRouter)
app.use('/host', hostRouter)

app.use((req, res, next)=>{
  // res.sendFile(path.join(rootDir, 'views', '404.html'))
  res.render('404', {pageTitle: '404 Error | Page Not Found'})
})

const PORT = 3001
app.listen(PORT, ()=>{
  console.log(`Server Running on http://localhost:${PORT}`)
})