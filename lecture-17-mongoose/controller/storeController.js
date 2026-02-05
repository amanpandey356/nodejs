//todo local module
const Home = require('../model/home')
const Favourite = require('../model/favourite')
const { ObjectId } = require('mongodb')

exports.getIndex = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'index',
    })
  })
}

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render('store/home-list', { registeredHomes, pageTitle: 'Home List', currentPage: 'Home' })
  })
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', { pageTitle: 'My Bookings', currentPage: 'bookings' })
}

exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId
  console.log("this is my homeId", homeId)
  Home.findById(homeId)
    .then(home => {
      console.log("This is Resultant home ", home)
      res.render('store/home-detail', { home: home, pageTitle: 'Home Detail', currentPage: 'Home' })
    })
    .catch(() => req.redirect('/homes'))
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate('houseId')
    .then(favourites => {
      const favouriteHomes = favourites.map(fav => fav.houseId)
      // Home.find().then(registeredHomes => {
      //   const favouriteHomes = registeredHomes.filter((home) => favourites.includes(home._id.toString()))
      //   res.render('store/favourite-list', { favouriteHomes: favouriteHomes, pageTitle: 'My Favourite', currentPage: 'favourite' })
      // })
      res.render('store/favourite-list', { favouriteHomes: favouriteHomes, pageTitle: 'My Favourite', currentPage: 'favourite' })
    })
}

exports.postAddToFavourite = (req, res, next) => {
  const houseId = req.body.id
  Favourite.findOne({ houseId: houseId }).then((fav) => {
    if (fav) {
      console.log('Already Favourite is present ')
    } else {
      fav = new Favourite({ houseId })
      fav.save().then((result) => {
        console.log('Favourite Got Saved ', result)
      })
    }
    res.redirect("/favourites")
  }).catch(err => {
    console.log('Error While marking favourite: ', err)
  })
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId
  Favourite.findOneAndDelete({ houseId: homeId }).then(res => {
    console.log("Deleted Successfully ", res)
  }).finally(() => {
    res.redirect('/favourites')
  })
}

