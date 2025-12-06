const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: false });

async function renderMenu(req, res, menuType, templateName) {
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("menu_type", menuType);

  if (error) {
    console.error(error);
    return res.status(500).send("Supabase fetch error");
  }

  res.render(templateName, {
    title: templateName,
    items: data,
    user: req.session.user || null,
    csrfToken: req.csrfToken(),
  });
}

// Drinks → drinks-menu.ejs
router.get("/drinks-menu", csrfProtection, (req, res) =>
  renderMenu(req, res, "drinks", "drinks-menu")
);

// Bakery → bakery-menu.ejs
router.get("/bakery-menu", csrfProtection, (req, res) =>
  renderMenu(req, res, "bakery", "bakery-menu")
);

// Food → foods-menu.ejs
router.get("/foods-menu", csrfProtection, (req, res) =>
  renderMenu(req, res, "food", "foods-menu")
);

module.exports = router;
