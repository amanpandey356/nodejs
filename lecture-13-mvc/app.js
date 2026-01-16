//todo Importing
const path = require('path')
const rootDir = require('./utils/pathUtils')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//todo Importing my Router
const userRouter = require('./router/userRouter')
const { hostRouter } = require('./router/hostRouter')

//todo : This is For Styling Purpose
app.use(express.static(path.join(rootDir, 'public')))

//todo : Setting Up body-parser
app.use(bodyParser.urlencoded())

//todo : Setting Up My ejs
app.set('view engine', 'ejs')
app.set('views', 'views')

//todo : Setting Up Router
app.use(userRouter)
app.use('/host', hostRouter)

app.use((req, res, next)=>{
  res.render('404', {pageTitle: '404 | Page Not Found'})
  // res.end()
})

//todo : running the server
const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`Your application is running on http://localhost:${PORT}`)
})