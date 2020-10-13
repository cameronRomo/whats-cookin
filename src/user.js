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
      recipe.favoritedRecipe = true;
      this.favoriteRecipes.splice(recipe, 1);
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}