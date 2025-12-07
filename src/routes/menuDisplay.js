const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: false });

async function renderMenu(req, res, menuType, templateName) {
  console.log(
    `[${new Date().toISOString()}] [MenuController] Starting renderMenu for menuType: ${menuType}, template: ${templateName}`
  );

  try {
    console.log(
      `[${new Date().toISOString()}] [MenuController] Fetching menu items from DB for menuType: ${menuType}`
    );
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('menu_type', menuType);

    if (error) {
      console.error(
        `[${new Date().toISOString()}] [MenuController] DB Error fetching menu items for ${menuType}:`,
        error.message
      );
      return res.status(500).send('Supabase fetch error');
    }

    console.log(
      `[${new Date().toISOString()}] [MenuController] Successfully fetched ${data.length} items for menuType: ${menuType}`
    );

    res.render(templateName, {
      title: templateName,
      items: data,
      user: req.session.user || null,
      csrfToken: req.csrfToken(),
    });

    console.log(
      `[${new Date().toISOString()}] [MenuController] Successfully rendered template: ${templateName}`
    );
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}] [MenuController] Unexpected error in renderMenu for ${menuType}:`,
      err.message
    );
    res.status(500).send('Unexpected error occurred');
  }
}

// Drinks → drinks-menu.ejs
router.get('/drinks-menu', csrfProtection, (req, res) =>
  renderMenu(req, res, 'drinks', 'drinks-menu')
);

// Bakery → bakery-menu.ejs
router.get('/bakery-menu', csrfProtection, (req, res) =>
  renderMenu(req, res, 'bakery', 'bakery-menu')
);

// Food → foods-menu.ejs
router.get('/foods-menu', csrfProtection, (req, res) =>
  renderMenu(req, res, 'food', 'foods-menu')
);

module.exports = router;
