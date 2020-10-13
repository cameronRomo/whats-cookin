const ingredientsInfo = require('../data/ingredients')

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags
  }
  getCost() {
    let recipeCost;
    let recipeIngredient;
    let recipeMath = this.ingredients.reduce((totalCost, ingredient) => {
      recipeCost = ingredient.quantity.amount;
      recipeIngredient = ingredientsInfo.find(cost => {
         return cost.id === ingredient.id;
      })
      totalCost += recipeCost * recipeIngredient.estimatedCostInCents;
      return totalCost;
    }, 0)
    return recipeMath / 100;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
