//todo Install mongoose
const { default: mongoose } = require('mongoose')

//todo external module
const express = require('express')
// const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const DB_PATH = 'mongodb+srv://root:root@completecoding.ldpm0nj.mongodb.net/airbnb?appName=completecoding'

//todo major importinf
const app = express()
const path = require('path')
const rootDir = require('./utils/pathUtils')
const bodyParser = require('body-parser')

// app.use(cookieParser());

//todo importing router
const storeRouter = require('./router/storeRouter')
const hostRouter = require('./router/hostRouter')
const errorsController = require('./controller/error')
const authRouter = require('./router/authRouter')

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions'
})

//todo Let's Import the mongodb connection code
// const { mongoConnect } = require('./utils/databaseUtil')

//todo setting up for body-parser, ejs, tailwindcss
app.use(bodyParser.urlencoded())

app.use(session({
  secret: 'genai',
  resave: false,
  saveUninitialized: true,
  store: store,
}))

// app.use((req, res, next) => {  //! Either use this or replace req.isLoggedIn with req.session.isLoggedIn
//   // console.log('Coockie check middleWare ', req.cookies.isLoggedIn)
//   // req.isLoggedIn = req.cookies.isLoggedIn === 'true' ? true : false
//   req.isLoggedIn = req.session.isLoggedIn
//   next()
// })

app.use(express.static(path.join(rootDir, 'public')))
app.set('view engine', 'ejs')
app.set('views', 'views')

//todo setting up Router
// app.use('/host', (req, res, next) => {
//   if (req.session.isLoggedIn) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// })
app.use('/host', hostRouter)
app.use(storeRouter)
app.use(authRouter)
app.use(errorsController.pageNotFound)

//todo settup port and run the server
const PORT = 3000
// mongoConnect(client => {
//   console.log("Connected successfully ", client)
//   app.listen(PORT, ()=>{
//     console.log(`your app is running on http://localhost:${PORT}`)
//   })
// })

mongoose.connect(DB_PATH).then(() => {
  // console.log('Connected To Mongo')
  app.listen(PORT, () => {
    console.log(`your app is running on http://localhost:${PORT}`)
  })
}).catch(err => {
  console.log('Error While connecting to mongo')
})