const chai = require('chai');
const expect = chai.expect;

const User = require("../src/user.js")
const Pantry = require("../src/pantry.js");
const Recipe = require('../src/recipe.js');

let ingredientsArray;

beforeEach(() => {
  pantry = new Pantry();
  ingredientsArray = [
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },]
});

describe('Pantry', function() {
  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should start with an empty pantry', function() {
    expect(pantry.pantry).to.deep.equal([]);
  });

  it('should check pantry for enough ingredients', function() {
    let pantry = [
      {
        "ingredient": 20081,
        "amount": 1
      },
      {
        "ingredient": 11297,
        "amount": 4
      },
      {
        "ingredient": 1082047,
        "amount": 10
      }];
    let recipeToCook = {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          }]};
    let user = new User(1, "Dude", pantry);
    let recipe = new Recipe(1, "https://spoonacular.com/recipeImages/595736-556x370.jpg",recipeToCook.ingredients, ["cook it"], "somthing good", ["super amazing sauce", "mustard"]);
    let checkThePantry = user.pantry.checkPantry(recipe);
    expect(checkThePantry).to.deep.equal([{ ingredient: 20081, amount: 1.5, amountNeeded: 0.5 }]);
  })
  // talk about storing ingredients;
})
