const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');
const User = require('../src/user.js');

describe('Recipe', function() {
  let recipe1;
  let recipe2;
  let id = 1;
  let name = "Dirty Steve's Original Wing Sauce";
  let image = "https://spoonacular.com/recipeImages/595736-556x370.jpg";
  let instructions = [{
    "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
    "number": 1
  },
  {
    "instruction": "Add egg and vanilla and mix until combined.",
    "number": 2
  }];
  let ingredients = [{
    "id": 20081,
    "quantity": {
      "amount": 1.5,
      "unit": "c"
    }},
    {
      "id": 18372,
      "quantity": {
        "amount": 2,
        "unit": "c"
      }
  }];
  let tags = ["sauce", "topping"];
  let differentTags = ["super spicey sauce", "dessert"]


  beforeEach(() => {
    recipe1 = new Recipe(id, image, ingredients, instructions, name, tags);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe1).to.be.an.instanceof(Recipe);
  });

  it('should have a recipe id', function() {
    expect(recipe1.id).to.equal(1)
  });

  it('should have an image', function() {
    expect(recipe1.image).to.be.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have ingredients for the recipe', function() {
    expect(recipe1.ingredients).to.deep.equal(ingredients);
  });

  it('should have instructions for a recipe', function() {
    expect(recipe1.instructions).to.deep.equal([{
      "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
      "number": 1
    },
    {
      "instruction": "Add egg and vanilla and mix until combined.",
      "number": 2
    }]);
  });

  it('should have a name for the recipe', function() {
    expect(recipe1.name).to.equal("Dirty Steve's Original Wing Sauce");
  });

  it('should have tags for the recipe', function() {
    expect(recipe1.tags).to.deep.equal(['sauce', 'topping']);
  });

  it('should calculate cost of ingredients', function() {
    let ingredientCosts = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      }
    ]
    let cost = recipe1.getCost(ingredientCosts);
    expect(cost).to.equal(13.77)
  })

  it('should return a recipie\'s instructions', function() {
    let directions = recipe1.getInstructions();
    let steps = ["In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
    "Add egg and vanilla and mix until combined."];

    expect(directions).to.deep.equal(steps);
  })

  it('should be able to filter recipe by tag', function() {
      let recipeArray = [recipe1];
      let filteredRecipes = recipe1.filterRecipe('sauce', recipeArray)
      expect(filteredRecipes).to.deep.equal(recipeArray);
    });

    it('should not be able to filter recipe by a tag that doesn\'t exist', function() {
      let recipeArray = []
      let filteredRecipes = recipe1.filterRecipe('nonsense', recipeArray)
      expect(filteredRecipes).to.deep.equal(recipeArray);
    });

    it('should get amount pluss units', function() {
      let amounts = recipe1.getAmounts();
      expect(recipe1.ingredients).to.deep.equal([{
      "id": 20081,
      "quantity": {
          "amount": 1.5,
          "unit": "c",
        }
      },{
      "id": 18372,
      "quantity": {
          "amount": 2,
          "unit": "c",
        }
      }]);
    })

    it('should serch recipe by ingredient', function() {
      let recipeContainerData = [recipe1];
      let ingredientName = "wheat flour";
      let findRecipe = recipe1.searchRecipeByIngredient(ingredientName, recipeContainerData)
      expect(findRecipe).to.deep.equal([recipe1]);
    })

    it('should search recipe by name', function() {
      let recipeContainerData = [recipe1];
      let recipeName = "Dirty Steve's Original Wing Sauce";
      let findRecipe = recipe1.searchRecipeByName("Dirty Steve's Original Wing Sauce", recipeContainerData);
      expect(findRecipe).to.deep.equal([recipe1]);
    })

    // it('should get ingredients', function() {
    //   ingredientHashmap = {20081: {id: 20081, name: "wheat flour", estimatedCostInCents: 142},
    //   18372: {id: 18372, name: "bicarbonate of soda", estimatedCostInCents: 582}};
    //   let myIngredients = recipe1.getIngredients();
    //   expect(myIngredients).to.deep.equal(["wheat flour", "bicarbonate of soda"]);
    // })
  });
