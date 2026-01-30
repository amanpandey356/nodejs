//todo local module
const Home = require('../model/home')
const Favourite = require('../model/favourite')

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes, fields]) => {
    res.render("store/index", {
      registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'index',
    })
  })
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render('store/home-list', { registeredHomes, pageTitle: 'Home List', currentPage: 'Home' })
  })
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', { pageTitle: 'My Bookings', currentPage: 'bookings' })
}

exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId
  Home.fetchById(homeId)
  .then(([home])=>{
    res.render('store/home-detail', {home: home[0], pageTitle: 'Home Detail', currentPage: 'Home'})
  })
  .catch(()=>req.redirect('/homes'))
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll().then(([registeredHomes]) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id))
      res.render('store/favourite-list', { favouriteHomes: favouriteHomes, pageTitle: 'My Favourite', currentPage: 'favourite' })
    })
  })
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId
  Favourite.deleteById(homeId, error => {
    if (error) {
      console.log("Error While Deleting From Favourites ", error)
    }
    res.redirect('/favourites')
  })
}

exports.postAddToFavourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.id, error => {
    if (error) {
      console.log("Error While Making Favourite ", error)
    }
    res.redirect("/favourites")
  })
  // res.redirect("/favourites")
}
