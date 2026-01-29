//todo local module
const Home = require('../model/home')

//todo let's handle the view(ejs) folder and what we need to pass and what we are getting and what we have to get from model
exports.getAddHome = (req, res, next)=>{
  res.render('host/edit-home', {pageTitle:"Register Your Home", currentPage: 'addHome', editing: false})
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';
  Home.fetchById(homeId, (home)=>{
    if(!home){
      console.log("Home Not Found For Editing")
      return res.redirect("/host/host-home-list")
    }
    console.log(home)
    res.render('host/edit-home', {pageTitle:"Edit Your Home", currentPage: 'host-homes', editing, home: home})
  })
  // res.render('host/edit-home', {pageTitle:"Edit Your Home", currentPage: 'host-homes', editing})
}

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl)
  home.save()
  // res.render('host/home-added', {pageTitle:"Home Registered Successfully", currentPage: 'homeAdded'})
  res.redirect('host-home-list')
}

exports.getHostHomes = (req, res, next) => {
  // Home.fetchAll((registeredHomes)=>{
  //   res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Homes List', currentPage: 'host-homes'})
  // })
  Home.fetchAll((registeredHomes)=>{
    res.render('host/host-home-list', {registeredHomes, pageTitle: 'Host Home List', currentPage: 'host-homes'})
  })
}

exports.postEditHome = (req, res, next) => {
  const {id, houseName, price, location, rating, photoUrl } = req.body
  const home = new Home(houseName, price, location, rating, photoUrl)
  home.id = id
  home.save()
  res.redirect('host-home-list')
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId
  Home.deleteById(homeId, error=>{
    if(error){
      console.log("Error Occured While Deleting", error)
    }
    res.redirect("/host/host-home-list")
  })
}