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
  console.log(`[${new Date().toISOString()}] [UserController] Rendering registration page`);
  try {
    res.render('users/register', {
      title: 'Register',
      csrfToken: req.csrfToken(),
    });
  } catch (err) {
    console.error(`[${new Date().toISOString()}] [UserController] Error rendering registration page:`, err.message);
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Unable to load the registration page. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err : {}
    });

  };
}

/**
 * POST /users/register
 * Process registration form
 */
exports.postRegister = async (req, res, next) => {
  const { email } = req.body;
  console.log(`[${new Date().toISOString()}] [UserController] Starting registration for email: ${email}`);

  try {
    console.log(`[${new Date().toISOString()}] [UserController] Calling Supabase signUp for ${email}`);
    const { data, error } = await supabase.auth.signUp({
      email,
      password: req.body.password
    });

    if (error) {
      console.error(`[${new Date().toISOString()}] [UserController] Registration error for ${email}:`, error.message);
      return res.render('users/register', {
        title: 'Register',
        error: error.message,
        csrfToken: req.csrfToken(),
      });
    }

    console.log(`[${new Date().toISOString()}] [UserController] Registration successful for ${email}`);
    return res.redirect("/users/login");

  } catch (err) {
    console.error(`[${new Date().toISOString()}] [UserController] Unexpected error during registration:`, err.message);
    
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Unexpected error occurred during registration. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err : {}
    });

  }
};

/**
 * GET /users/login
 * Display login form
 */
exports.getLogin = (req, res) => {
  console.log(`[${new Date().toISOString()}] [UserController] Rendering login page`);
  try {
    res.render('users/login', {
      title: 'Login',
      csrfToken: req.csrfToken(),
            error: null
    });
  } catch (err) {
    console.error(`[${new Date().toISOString()}] [UserController] Error rendering login page:`, err.message);
    
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Unable to load the login page. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err : {}
    });
  }

};

/**
 * POST /users/login
 * Process login form
 */
exports.postLogin = async (req, res, next) => {
  const { email } = req.body;
  console.log(`[${new Date().toISOString()}] [UserController] Attempting login for ${email}`);

  try {
    console.log(`[${new Date().toISOString()}] [UserController] Calling Supabase signInWithPassword for ${email}`);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: req.body.password
    });

    if (error) {
      console.warn(`[${new Date().toISOString()}] [UserController] Login failed for ${email}: Invalid credentials`);
      return res.render("users/login", {
        title: "Login",
        error: "Invalid email or password",
        csrfToken: req.csrfToken()
      });
    }

    console.log(`[${new Date().toISOString()}] [UserController] Login successful for ${email}`);
    req.session.user = data.user;
    req.session.access_token = data.session.access_token;
    req.session.refresh_token = data.session.refresh_token;

    req.session.save(() => {
      console.log(`[${new Date().toISOString()}] [UserController] Session saved for ${email}`);
      return res.redirect("/");
    });

  } catch (err) {
    console.error(`[${new Date().toISOString()}] [UserController] Unexpected error during login:`, err.message);
    
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Unexpected error occurred during login. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err : {}
    });

  }
};

/**
 * POST /users/logout
 * Logout user
 */
exports.postLogout = async (req, res) => {
  console.log(`[${new Date().toISOString()}] [UserController] Logging out user`);

  try {
    await supabase.auth.signOut();
    console.log(`[${new Date().toISOString()}] [UserController] Supabase signOut successful`);

    req.session.destroy((err) => {
      if (err) {
        console.error(`[${new Date().toISOString()}] [UserController] Error destroying session:`, err.message);
      } else {
        console.log(`[${new Date().toISOString()}] [UserController] Session destroyed successfully`);
      }
      res.redirect('/');
    });

  } catch (err) {
    console.error(`[${new Date().toISOString()}] [UserController] Unexpected error during logout:`, err.message);
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Unexpected error occurred during logout. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err : {}
    });

  }
};

