const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');

describe('Recipe', function() {
  let recipe;
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
    }
  }];
  let tags = ["sauce", "topping"];


  beforeEach(() => {
    recipe = new Recipe(id, image, ingredients, instructions, name, tags);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have a recipe id', function() {
    expect(recipe.id).to.equal(1)
  });

  it('should have an image', function() {
    expect(recipe.image).to.be.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have ingredients for the recipe', function() {
    expect(recipe.ingredients).to.deep.equal([{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }}]);
  });
  it('should have instructions for a recipe', function() {
    expect(recipe.instructions).to.deep.equal([{
      "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
      "number": 1
    },
    {
      "instruction": "Add egg and vanilla and mix until combined.",
      "number": 2
    }]);
  });

  it('should have a name for the recipe', function() {
    expect(recipe.name).to.equal("Dirty Steve's Original Wing Sauce");
  });

  it('should have tags for the recipe', function() {
    expect(recipe.tags).to.deep.equal(['sauce', 'topping']);
  });
});
