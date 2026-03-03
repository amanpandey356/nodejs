
exports.getLogin = (req, res, next) => {
  console.log('Hello World')
  res.render("auth/login", {pageTitle: 'Login', currentPage: 'login', editing: false})
}
