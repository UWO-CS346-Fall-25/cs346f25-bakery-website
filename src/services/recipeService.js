require("dotenv").config();

const API_KEY = process.env.SPOONACULAR_API_KEY;

let cachedRecipe = null;
let cachedDate = null;

async function fetchRandomBakingRecipe() {
    const today = new Date().toISOString().split("T")[0];

  // If we already have today's recipe, return it
  if (cachedRecipe && cachedDate === today) {
    return cachedRecipe;
  }

  const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&tags=dessert`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch recipe from Spoonacular");
  }

  const data = await res.json();

  const recipe = data.recipes[0];

  cachedRecipe = recipe;
  cachedDate = today;
  
  return recipe; // Spoonacular returns an array
}

module.exports = { fetchRandomBakingRecipe };
