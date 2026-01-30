//todo local module
const Home = require('../model/home')

//todo let's handle the view(ejs) folder and what we need to pass and what we are getting and what we have to get from model
exports.getAddHome = (req, res, next)=>{
  res.render('host/edit-home', {pageTitle:"Register Your Home", currentPage: 'addHome', editing: false})
}

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl, description)
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
  Home.fetchById(homeId)
  .then(home=>{
    if(!home){
      // console.log("Home Not Found For Editing")
      return res.redirect("/host/host-home-list")
    }
    console.log(home);
    res.render('host/edit-home', {pageTitle:"Edit Your Home", currentPage: 'host-homes', editing, home: home})
  })
  .catch(()=>{
    return res.redirect("/host/host-home-list")
  })
}

exports.postEditHome = (req, res, next) => {
  const {id, houseName, price, location, rating, photoUrl, description } = req.body
  // console.log(id, houseName, price, location, rating, photoUrl, description);
  const home = new Home(houseName, price, location, rating, photoUrl, description, id)
  // home._id = id
  home.save()
  .then((result)=>{
    console.log("Here We Go With The result ", result)
    res.redirect('host-home-list')
  }).catch((error)=>{
    console.log("We Hitted With THe SQL Error", error)
    res.redirect('host-home-list')
  })
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes=>{
    res.render('host/host-home-list', {registeredHomes, pageTitle: 'Host Home List', currentPage: 'host-homes'})
  })
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId
  Home.deleteById(homeId)
  .then(() => {
    return res.redirect("/host/host-home-list");
  })
  .catch(err => {
    console.error(err);
    return res.redirect("/host/host-home-list");
  });
}
