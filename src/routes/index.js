/**
 * Index Routes
 *
 * Define routes for the main pages of your application here.
 * Routes connect HTTP requests to controller functions.
 *
 * Example usage:
 * const express = require('express');
 * const router = express.Router();
 * const indexController = require('../controllers/indexController');
 *
 * router.get('/', indexController.getHome);
 * router.get('/about', indexController.getAbout);
 *
 * module.exports = router;
 */

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
router.get('/menu', indexController.getMenu);
router.get('/', indexController.getHome);
router.get('/bakery-menu', indexController.getBakeryMenu);
router.get('/drinks-menu', indexController.getDrinksMenu);
router.get('/foods-menu', indexController.getFoodsMenu);

// Import controllers
// const indexController = require('../controllers/indexController');

// Define routes
// router.get('/', indexController.getHome);

// dummy comment

module.exports = router;
