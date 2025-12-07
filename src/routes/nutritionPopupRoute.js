// routes/nutritionRoutes.js
const express = require('express');
const router = express.Router();
const nutritionController = require('../controllers/nutritionPopupController');

router.get('/nutrition/:id', nutritionController.getNutrition);

module.exports = router;
