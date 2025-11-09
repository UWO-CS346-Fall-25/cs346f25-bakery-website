const express = require("express");
const router = express.Router();
const multer = require("multer");
const csrf = require('csurf');
const csrfProtection = require("csurf")({ cookie: false });
const supabase = require("../config/supabase");

// Memory storage for Multer
const upload = multer({ storage: multer.memoryStorage() });

// GET /menu - render menu page with CSRF token
router.get("/", csrfProtection, (req, res) => {
  res.render("menu", {
    error: null,
    success: null,
    csrfToken: req.csrfToken(), // pass token to EJS
    user: req.session.user || null
  });
});

// POST /menu - handle form submission with CSRF protection
router.post("/", upload.single("img_url"), csrfProtection, async (req, res) => {
  try {
    const { menu_type, item_name, size_servings, price, calories, fat, sugar, protein } = req.body;

    if (!menu_type || !item_name || !price || !size_servings || !calories || !fat || !sugar || !protein) {
      return res.render("menu", { title: "Menu", error: "Missing Fields", success: null, csrfToken: req.csrfToken() });
    }

    let img_url = null;

    if (req.file) {
      const fileName = `${Date.now()}_${req.file.originalname}`;
      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(fileName, req.file.buffer, { contentType: req.file.mimetype });

      if (uploadError) {
        console.error(uploadError);
        return res.render("menu", { title: "Menu", error: "Image upload failed.", success: null, csrfToken: req.csrfToken() });
      }

      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

      img_url = publicUrlData.publicUrl;
    }

    const { error: insertError } = await supabase
      .from("menu_items")
      .insert([{ menu_type, item_name, size_servings, price, calories, fat, sugar, protein, img_url }]);

    if (uploadError) console.error("Storage upload failed:", uploadError);//error check

    if (insertError) {
      console.error(insertError);
      return res.render("menu", { title: "Menu", error: "Failed to add menu item.", success: null, csrfToken: req.csrfToken() });
    }

    res.render("menu", { title: "Menu", success: "Menu item added successfully!", error: null, csrfToken: req.csrfToken() });
  } catch (err) {
    console.error(err);
    res.render("menu", { title: "Menu", error: "Server error.", success: null, csrfToken: req.csrfToken() });
  }
});

module.exports = router;