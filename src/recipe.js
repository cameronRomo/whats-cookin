const ingredientsInfo = require('../data/ingredients');
const recipiesInfo = require('../data/recipes');

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  searchRecipeByIngredient(ingredient) {
  let searchIngredients =  ingredientsInfo.find(item => {
    if (ingredient === item.name) {
      return item;
    }
  })
  let searchRecipes = recipesInfo.reduce((results, recipe) => {
    recipe.ingredients.forEach(item => {
      if (item.id === searchIngredients.id) {
        results.push(recipe)
      }
    })
    return results;
  }, [])
  return searchRecipes;
}

  filterRecipe(recipeTag) {
    let filteredRecipies = recipiesInfo.reduce((filteredData, recipe) => {
      recipe.tags.forEach(tag => {
        if (recipeTag === tag) {
          filteredData.push(recipe);
        }
      })
      return filteredData;
    }, [])
    return filteredRecipies;
  }

  getInstructions() {
    let recipeSteps = this.instructions.map(step => {
      let progression = `Step ${step.number}: ${step.instruction}`;
      return progression;
    })
    return recipeSteps;
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
