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

const csrf = require('csurf');
const csrfProtection = csrf({ cookie: false });
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/menu', csrfProtection, indexController.getMenu);
router.get('/', csrfProtection, indexController.getHome);
router.get('/bakery-menu', csrfProtection, indexController.getBakeryMenu);
router.get('/drinks-menu', csrfProtection, indexController.getDrinksMenu);
router.get('/foods-menu', csrfProtection, indexController.getFoodsMenu);

// Import controllers
// const indexController = require('../controllers/indexController');

// Define routes
// router.get('/', indexController.getHome);

// dummy comment

module.exports = router;
