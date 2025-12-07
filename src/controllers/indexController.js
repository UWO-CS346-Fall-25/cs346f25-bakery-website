/**
 * Index Controller
 *
 * Controllers handle the business logic for routes.
 * They process requests, interact with models, and send responses.
 *
 * Best practices:
 * - Keep controllers focused on request/response handling
 * - Move complex business logic to separate service files
 * - Use models to interact with the database
 * - Handle errors appropriately
 */

// Import models if needed
// const SomeModel = require('../models/SomeModel');

/**
 * GET /
 * Display the home page
 */
exports.getHome = async (req, res, next) => { 
  console.log(`[${new Date().toISOString()}] [PageController] Starting getHome`);

  try {
    res.render('index', {
      title: 'Home',
      csrfToken: req.csrfToken(),
    });

    console.log(`[${new Date().toISOString()}] [PageController] Successfully rendered Home page`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [PageController] Error rendering Home page:`, error.message);
    
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Oops! We encountered an error while loading the Home page. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error : {}
    });

  }
};

/**
 * GET /menu
 * Display the menu page
 */
exports.getMenu = async (req, res, next) => {
  console.log(`[${new Date().toISOString()}] [PageController] Starting getMenu`);

  try {
    res.render('menu', {
      title: 'Menu',
      csrfToken: req.csrfToken(),
    });

    console.log(`[${new Date().toISOString()}] [PageController] Successfully rendered Menu page`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] [PageController] Error rendering Menu page:`, error.message);
    
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Oops! We encountered an error while loading the Menu page. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error : {}
    });
  }
};