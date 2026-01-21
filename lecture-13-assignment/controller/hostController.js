//todo local module
const Home = require('../model/home')

//todo 
exports.getAddHome = (req, res, next)=>{
  res.render('host/addHome', {pageTitle:"Register Your Home", currentPage: 'addHome'})
}

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl)
  home.save()
  res.render('host/home-added', {pageTitle:"Home Registered Successfully", currentPage: 'homeAdded'})
}

exports.getHostHomes = (req, res, next) => {
  // Home.fetchAll((registeredHomes)=>{
  //   res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Homes List', currentPage: 'host-homes'})
  // })
  Home.fetchAll((registeredHomes)=>{
    res.render('host/host-home-list', {registeredHomes, pageTitle: 'Host Home List', currentPage: 'host-homes'})
  })
}