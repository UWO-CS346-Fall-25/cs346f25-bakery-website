/**
 * User Controller
 *
 * Handles user-related operations:
 * - Registration
 * - Login/Logout
 * - Profile management
 * - Authentication
 */

// Import models
// const User = require('../models/User');
const supabase = require("../config/supabase");
/**
 * GET /users/register
 * Display registration form
 */
exports.getRegister = (req, res) => {
  res.render('users/register', {
    title: 'Register',
    csrfToken: req.csrfToken(),
  });
};

/**
 * POST /users/register
 * Process registration form
 */
exports.postRegister = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    // Redirect to home
    res.redirect('/');
  } catch (error) {
    next(error);
  }
  res.redirect("/users/login");
};

/**
 * GET /users/login
 * Display login form
 */
exports.getLogin = (req, res) => {
  res.render('users/login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
};

/**
 * POST /users/login
 * Process login form
 */
exports.postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    
    if (error) {
      return res.render("users/login", {
        title: "Login",
        error: "Invalid email or password",
        csrfToken: req.csrfToken()
      });
    }

    
    req.session.user = data.user;
    req.session.access_token = data.session.access_token;
    req.session.refresh_token = data.session.refresh_token;

  
    req.session.save(() => {
      return res.redirect("/");
    });

  } catch (err) {
    next(err);
  }
};


/**
 * POST /users/logout
 * Logout user
 */
exports.postLogout = async (req, res) => {
  await supabase.auth.signOut();
  
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.redirect('/');
  });
};

// Add more controller methods as needed
