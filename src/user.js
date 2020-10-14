const filterRecipe = require('../src/user.js');
const searchRecipeByIngredient = require('../src/user.js');
//is this the correct way to import method? 
//double dot in require

class User {
  constructor() {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  } 

  addToFavoriteRecipes(recipe) {
    if (!recipe.favoritedRecipe) {
      recipe.favoritedRecipe = true;
      this.favoriteRecipes.push(recipe);
    } else {
      recipe.favoritedRecipe = false;
      this.favoriteRecipes.splice(recipe, 1);
    }
  }
  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterUserRecipe(recipeTag, recipesContainer) {
    //invoke from Recipe class
    filterRecipe(recipeTag, recipesContainer);
  }

  searchUserRecipe(ingredient) {
    searchRecipeByIngredient(ingredient, this.favoriteRecipes);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
