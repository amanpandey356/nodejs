//todo major importinf
const express = require('express')
const app = express()
const path = require('path')
const rootDir = require('./utils/pathUtils')
const bodyParser = require('body-parser')

//todo importing router
const storeRouter = require('./router/storeRouter')
const hostRouter = require('./router/hostRouter')
const errorsController = require('./controller/error')

//todo Now Let's Interact With Database
// const db = require('./utils/databaseUtil')
// db.execute('SELECT * FROM homes')
// .then(([rows, fields])=>console.log('Getting From DB',rows))
// .catch(error=>{
//   console.log('Error While Creating Home Record ', error)
// })

//todo setting up for body-parser, ejs, tailwindcss
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(rootDir, 'public')))
app.set('view engine', 'ejs')
app.set('views', 'views')

//todo setting up Router
app.use(storeRouter)
app.use('/host', hostRouter)
app.use(errorsController.pageNotFound)

//todo settup port and run the server
const PORT = 3001
app.listen(PORT, ()=>{
  console.log(`your app is running on http://localhost:${PORT}`)
})