const supabase = require("../config/supabase");

/**
 * Controller: getNutrition
 *
 * Responsibilities:
 * - Retrieve a single menu item by ID from the database
 * - If found → return JSON data
 * - If not found → render error.ejs with 404 status
 * - If unexpected error → render error.ejs with 500 status
 */

exports.getNutrition = async (req, res) => {
  const itemId = req.params.id;
  console.log(`[${new Date().toISOString()}] [NutritionController] Starting getNutrition for itemId: ${itemId}`);

  try {
    console.log(`[${new Date().toISOString()}] [NutritionController] Fetching menu item from DB...`);
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("id", itemId)
      .single();

    if (error || !data) {
      console.error(`[${new Date().toISOString()}] [NutritionController] DB Error or item not found:`, error ? error.message : 'No data returned');
      return res.status(404).render("error", {
        title: "Item Not Found",
        message: "Sorry, the menu item you are looking for does not exist.",
        error: {} // don't expose stack to user
      });

    }

    console.log(`[${new Date().toISOString()}] [NutritionController] Successfully fetched menu item: ${itemId}`);
    return res.json(data);

  } catch (err) {
    console.error(`[${new Date().toISOString()}] [NutritionController] Unexpected Error:`, err.message);
    return res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Oops! We encountered an unexpected error while fetching the menu item. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err : {} // show stack only in dev
    });

  }
};


