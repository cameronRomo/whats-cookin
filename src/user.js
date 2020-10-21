class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.thingsToBuy = [];
    this.pantry = new Pantry(pantry);
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

  addIngredientToGroceryList(ingredients) {
    this.thingsToBuy.push(ingredients);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
