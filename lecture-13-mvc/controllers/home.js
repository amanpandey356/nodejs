const Home = require('../models/home')

// const registeredHomes = []

exports.getAddHome = (req, res, next)=>{
  res.render('addHome', {pageTitle:"Register Your Home", currentPage: 'addHome'})
}

exports.postAddHome = (req, res, next)=>{
  console.log(req.body)
  const { houseName, price, location, rating, photoUrl } = req.body;
  // registeredHomes.push({ houseName: req.body.housename, price: req.body.price, location: req.body.location, rating: req.body.rating, photoUrl: req.body.photoUrl })

  const home = new Home(houseName, price, location, rating, photoUrl)
  home.save()
  
  res.render('homeAdded', {pageTitle:"Home Registered Successfully", currentPage: 'homeAdded'})
}

exports.getHomes = (req, res, next)=>{
  const registeredHomes = Home.fetchAll((registeredHomes1)=> 
    res.render('home', {registeredHomes: registeredHomes1, pageTitle: 'Home Page', currentPage: 'Home'})
  );
  // res.render('home', {registeredHomes: registeredHomes, pageTitle: 'Home Page', currentPage: 'Home'})
}

// exports.registeredHomes = registeredHomes