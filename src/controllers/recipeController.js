const { fetchRandomBakingRecipe } = require("../services/recipeService");

async function getRecipeOfTheDay(req, res) {
  try {
    const recipe = await fetchRandomBakingRecipe();

    res.render("recipeOfDay", { recipe });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching recipe. Please try again later.");
  }
}

module.exports = { getRecipeOfTheDay };
