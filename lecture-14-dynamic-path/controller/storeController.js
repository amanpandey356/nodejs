//todo local module
const Home = require('../model/home')
const Favourite = require('../model/favourite')

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes)=>{
    res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'index'})
  })
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes)=>{
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'Homes List', currentPage: 'Home'})
  })
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {pageTitle: 'My Bookings', currentPage: 'bookings'})
}

exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId
  Home.fetchById(homeId, home=>{
    if(!home){
      res.redirect('/homes')
    }else{
      res.render('store/home-detail', {home: home, pageTitle: 'Home Detail', currentPage: 'Home'})
    }
  })
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll((registeredHomes)=>{
      const favouriteHomes = registeredHomes.filter((home)=>
        favourites.includes(home.id))
      res.render('store/favourite-list', {favouriteHomes: favouriteHomes, pageTitle: 'My Favourite', currentPage: 'favourite'})
    })
  })
  // Home.fetchAll((registeredHomes)=>{
  //   res.render('store/favourite-list', {registeredHomes: registeredHomes, pageTitle: 'My Favourite', currentPage: 'favourite'})
  // })
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId
  Favourite.deleteById(homeId, error=>{
    if(error){
      console.log("Error While Deleting From Favourites ", error)
    }
    res.redirect('/favourites')
  })
}

exports.postAddToFavourite = (req, res, next) => {
  console.log("Came To Add To Favourite", req.body)
  Favourite.addToFavourite(req.body.id, error=>{
    if(error){
      console.log("Error While Making Favourite ",error)
    }
    res.redirect("/favourites")
  })
  // res.redirect("/favourites")
}
