const { fetchRandomBakingRecipe } = require("../services/recipeService");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: false });

async function getRecipeOfTheDay(req, res) {
  console.log(`[${new Date().toISOString()}] [RecipeController] Starting getRecipeOfTheDay`);

  try {
    console.log(`[${new Date().toISOString()}] [RecipeController] Calling fetchRandomBakingRecipe service...`);
    const recipe = await fetchRandomBakingRecipe();

    console.log(`[${new Date().toISOString()}] [RecipeController] Successfully fetched recipe: ${recipe.name || 'Unnamed recipe'}`);

    res.render("recipeOfDay", { 
      recipe,
      user: req.session.user || null,
      csrfToken: req.csrfToken(),
      title: "Recipe of the Day"
    });

    console.log(`[${new Date().toISOString()}] [RecipeController] Rendered recipeOfTheDay page successfully`);

  } catch (error) {
    console.error(`[${new Date().toISOString()}] [RecipeController] Error fetching recipe:`, error.message);
    res.status(500).render("error", {
      title: "Something Went Wrong",
      message: "Oops! We encountered an error while fetching the recipe. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error : {} // show stack only in dev
    });

  }
}

module.exports = { getRecipeOfTheDay, csrfProtection };
