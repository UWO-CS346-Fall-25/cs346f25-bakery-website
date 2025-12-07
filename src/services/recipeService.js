require('dotenv').config();

const API_KEY = process.env.SPOONACULAR_API_KEY;
const fs = require('fs');
const path = require('path');
const cachePath = path.join(__dirname, 'recipeCache.json');

/**
 * fetchRandomBakingRecipe()
 *
 * Responsibilities:
 * - Load recipe cache (if file exists)
 * - Check whether a recipe has already been fetched today
 * - If cached & same day → return it
 * - Otherwise fetch a new recipe from Spoonacular
 * - Save the new recipe + today's date to cache
 * - Return the recipe object
 */
async function fetchRandomBakingRecipe() {
  let cache = { recipe: null, date: null };

  //Load the cached file if it exists. If reading/parsing fails, reset the cache to empty
  if (fs.existsSync(cachePath)) {
    try {
      cache = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
    } catch (err) {
      console.error('Failed to read cache file:', err.message);
      cache = { recipe: null, date: null };
    }
  }

  const today = new Date().toISOString().split('T')[0];

  // Return cached recipe if it's from today
  if (cache.recipe && cache.date === today) {
    return cache.recipe;
  }

  //fetch new random dessert recipe
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&tags=dessert`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch recipe from Spoonacular');
  }

  const data = await res.json();

  const recipe = data.recipes[0];

  try {
    fs.writeFileSync(cachePath, JSON.stringify({ recipe, date: today }));
  } catch (err) {
    console.error('Failed to write cache file:', err.message);
  }

  return recipe; // Spoonacular returns an array
}

module.exports = { fetchRandomBakingRecipe };
