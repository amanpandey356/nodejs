//todo local module
const Home = require('../model/home')
const { ObjectId } = require('mongodb')
const User = require('../model/user')

exports.getIndex = (req, res, next) => {
  // console.log('Is Logged in ', req.session)
  Home.find().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index',
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    })
  })
}

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render('store/home-list', {
      registeredHomes,
      pageTitle: 'Home List',
      currentPage: 'Home',
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    }
  )
  })
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {
    pageTitle: 'My Bookings',
    currentPage: 'bookings',
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  }
)
}

exports.getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId
  // console.log("this is my homeId", homeId)
  Home.findById(homeId)
    .then(home => {
      // console.log("This is Resultant home ", home)
      res.render('store/home-detail', {
        home: home,
        pageTitle: 'Home Detail',
        currentPage: 'Home',
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      }
    )
    })
    .catch(() => req.redirect('/homes'))
}

exports.getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate('favourites')
  res.render('store/favourite-list', {
    favouriteHomes: user.favourites,
    pageTitle: 'My Favourites',
    currentPage: 'favourites',
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  }
  );
}

exports.postAddToFavourite = async (req, res, next) => {
  const houseId = req.body.id
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user.favourites.includes(houseId)) {
    user.favourites.push(houseId);
    await user.save();
  }
  res.redirect("/favourites")
}

exports.postRemoveFromFavourite = async (req, res, next) => {
  const homeId = req.params.homeId
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (user.favourites.includes(homeId)) {
    console.log('Here We have a user ', user);
    console.log('Here we have homeId', homeId);
    user.favourites = user.favourites.filter(favId => favId.toString() !== homeId.toString());
    await user.save();
  }
  res.redirect('/favourites')
}

exports.postLogout = (req, res, next) => {
  // res.cookie("isLoggedIn", false)
  req.session.destroy((err) => {
    if(err) {
      console.log('Error Destroying session: ', err)
      return res.redirect("/")
    }
    // res.clearCookie('connect.sid');
    res.redirect('/login');
  })
  // res.redirect("/login")
}