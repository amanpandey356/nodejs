//todo local module
const Home = require('../model/home')
const Favourite = require('../model/favourite')
const { ObjectId } = require('mongodb')

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'index',
    })
  })
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render('store/home-list', { registeredHomes, pageTitle: 'Home List', currentPage: 'Home' })
  })
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', { pageTitle: 'My Bookings', currentPage: 'bookings' })
}

exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId
  console.log("this is my homeId", homeId)
  Home.fetchById(homeId)
  .then(home=>{
    console.log("This is Resultant home ", home)
    res.render('store/home-detail', {home: home, pageTitle: 'Home Detail', currentPage: 'Home'})
  })
  .catch(()=>req.redirect('/homes'))
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then(favourites=>{
    favourites = favourites.map(fav=>fav.houseId)
    // console.log("All The Favourites in ",  favourites)
    Home.fetchAll().then(registeredHomes=>{
      // console.log(favourites, registeredHomes);
      const favouriteHomes = registeredHomes.filter((home)=>favourites.includes(home._id.toString()))
      // console.log('Here are your Favourite Homes ', favouriteHomes)
      res.render('store/favourite-list', { favouriteHomes: favouriteHomes, pageTitle: 'My Favourite', currentPage: 'favourite' })
    })
  })
}

exports.postAddToFavourite = (req, res, next) => {
  // console.log("Let's check the id ", req.body)
  const houseId = req.body.id
  const fav = new Favourite(houseId)
  fav.save().then(result=>{
    // console.log('Hurrey Fav Got Added ', result)
    // res.redirect("/favourites")
  }).catch(err=>{
    // console.log("Error While Adding Favourite ",err)
    // res.redirect("/favourites")
  }).finally(()=>{
    res.redirect("/favourites")
  })
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId
  Favourite.deleteById(homeId).then(res=>{
    console.log("Deleted Successfully ", res)
  }).finally(()=>{
    res.redirect('/favourites')
  })
}

