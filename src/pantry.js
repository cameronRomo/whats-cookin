const User = require("../src/user.js")

class Pantry {
  constructor(pantry = []) {
    this.pantry = pantry;
  }

  checkPantry(recipe) {
   let pantryResults = recipe.ingredients.reduce((neededItems, item) => {
     this.pantry.forEach(ingredient => {
       if (ingredient.ingredient === item.id && item.quantity.amount > ingredient.amount) {
         const amountNeeded = -1 *(ingredient.amount - item.quantity.amount);
         ingredient.amount = item.quantity.amount
         ingredient.amountNeeded = amountNeeded;
         neededItems.push(ingredient)
       }
     })
     return neededItems;
   }, [])
   return pantryResults;
 }
}


if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
