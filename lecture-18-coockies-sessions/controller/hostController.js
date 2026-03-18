//todo local module
const Home = require('../model/home')

//todo let's handle the view(ejs) folder and what we need to pass and what we are getting and what we have to get from model
exports.getAddHome = (req, res, next)=>{
  res.render('host/edit-home', {pageTitle:"Register Your Home", currentPage: 'addHome', editing: false, isLoggedIn: req.isLoggedIn})
}

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home({houseName, price, location, rating, photoUrl, description})
  home.save().then((data)=>{
    console.log('Home Saved Successfully ', data)
    res.redirect('host-home-list')
  }).catch(()=>{
    res.redirect('host-home-list')
  })
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';
  Home.findById(homeId)
  .then(home=>{
    if(!home){
      // console.log("Home Not Found For Editing")
      return res.redirect("/host/host-home-list")
    }
    // console.log(home);
    res.render('host/edit-home', {pageTitle:"Edit Your Home", currentPage: 'host-homes', editing, home: home, isLoggedIn: req.isLoggedIn})
  })
  .catch(()=>{
    return res.redirect("/host/host-home-list")
  })
}

exports.postEditHome = (req, res, next) => {
  const {id, houseName, price, location, rating, photoUrl, description } = req.body
  Home.findById(id).then((home)=>{
    home.houseName = houseName,
    home.price = price,
    home.location = location,
    home.rating = rating,
    home.photoUrl = photoUrl,
    home.description = description;
    home.save().then((result)=>{
      console.log('Home Updated Successfully ', result)
    }).catch(err=>{
      console.log('Error While Updating record ', err)
    })
    return res.redirect('host-home-list')
  }).catch(err=>{
    console.log('Unable to Find Home ',err)
  })
}

exports.getHostHomes = (req, res, next) => {
  Home.find().then(registeredHomes=>{
    res.render('host/host-home-list', {registeredHomes, pageTitle: 'Host Home List', currentPage: 'host-homes', isLoggedIn: req.isLoggedIn})
  })
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId
  Home.findByIdAndDelete(homeId)
  .then(() => {
    return res.redirect("/host/host-home-list");
  })
  .catch(err => {
    console.error(err);
    return res.redirect("/host/host-home-list");
  });
}
