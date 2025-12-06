const { fetchRandomBakingRecipe } = require("../services/recipeService");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: false });

async function getRecipeOfTheDay(req, res) {
  try {
    const recipe = await fetchRandomBakingRecipe();

    res.render("recipeOfDay", { 
      recipe,
      user: req.session.user || null,
      csrfToken: req.csrfToken(), // <-- pass token here
      title: "Recipe of the Day"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching recipe. Please try again later.");
  }
}

module.exports = { getRecipeOfTheDay, csrfProtection};
