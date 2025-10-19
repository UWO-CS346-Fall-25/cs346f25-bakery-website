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
  try {
    // Fetch any data needed for the home page
    // const data = await SomeModel.findAll();

    res.render('index', {
      title: 'Home',
      // data: data,
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /menu
 * Display the about page
 */
exports.getMenu = async (req, res, next) => {
  try {
    res.render('menu', {
      title: 'Menu',
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};

exports.getFoodsMenu = async (req, res, next) => {
  try {
    res.render('foods-menu', {
      title: 'Food Items',
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};

exports.getDrinksMenu = async (req, res, next) => {
  try {
    res.render('drinks-menu', {
      title: 'Food Items',
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};

exports.getBakeryMenu = async (req, res, next) => {
  try {
    res.render('bakery-menu', {
      title: 'Bakery Items',
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    next(error);
  }
};
// Add more controller methods as needed
