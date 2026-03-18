
exports.getLogin = (req, res, next) => {
  console.log('Hello World')
  res.render("auth/login", {pageTitle: 'Login', currentPage: 'login', editing: false, isLoggedIn: false})
}

exports.postLogin = (req, res, next) => {
  console.log(req.body)
  req.isLoggedIn = true;
  res.redirect('/')
}
