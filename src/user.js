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
  filterUserRecipe(recipesContainer, recipeTag) {
    if (recipesContainer === this.favoriteRecipes) {
      let searchResults = this.favoriteRecipes.reduce((filterResults, recipe) => {
        recipe.tags.forEach(tag => {
          if (recipeTag === tag) {
            filterResults.push(recipe);
          }
        })
        return filterResults;
      }, []);
      return searchResults;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}