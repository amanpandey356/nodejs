
exports.getLogin = (req, res, next) => {
  // console.log('Hello World')
  req.session.isLoggedIn = false;
  res.render("auth/login", {pageTitle: 'Login', currentPage: 'login', editing: false, isLoggedIn: false})
}

exports.postLogin = (req, res, next) => {
  // console.log(req.body)
  // res.cookie("isLoggedIn", true)
  req.session.isLoggedIn = true
  // req.isLoggedIn = true;
  res.redirect('/')
}

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {pageTitle: 'Sign up', currentPage: 'signup', editing: false, isLoggedIn: false})
}