const { check, validationResult } = require("express-validator");
// import User from '../model/user.js'
const User = require("../model/user.js")

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
  res.render("auth/signup",
    {
      pageTitle: 'Sign up',
      currentPage: 'signup',
      editing: false,
      isLoggedIn: false,
      oldInput: { firstName: '', lastName: '', email: '', password: '', userType: 'guest' }
    })
}

exports.postSignup = [
  // First name
  check("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .bail()
    .isLength({ min: 2 })
    .withMessage("First name should contain at least 2 characters"),

  // Last name
  check("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Last name should contain at least 2 characters"),

  // Email
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Enter a valid email address"),

  // User type
  check("userType")
    .isIn(["guest", "host"])
    .withMessage("Please select a valid account type"),

  // Password
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must contain at least 8 characters"),

  // Confirm password
  check("confirmPassword")
    .notEmpty()
    .withMessage("Please confirm your password")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  // Terms and conditions
  check("terms")
    .equals("accepted")
    .withMessage("You must accept the Terms and Conditions"),

  // Handle validation results
  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Signup",
        currentPage: "signup",
        editing: false,
        isLoggedIn: false,
        errors: errors.array().map((error) => error.msg),
        oldInput: { firstName, lastName, email, password, userType },
      });
    }

    const user = new User({firstName, lastName, email, password, userType})
    user.save().then(() => {
      res.redirect("/login")
    }).catch(err=>{
      return res.status(422).render("auth/signup", {
        pageTitle: "Signup",
        currentPage: "signup",
        editing: false,
        isLoggedIn: false,
        errors: err ? [err.message] : [],
        oldInput: { firstName, lastName, email, password, userType },
      });
    })

    res.redirect("/login");
  },
];