const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');

describe('Recipe', function() {

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe();
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have a recipe id', function() {
    const recipe = new Recipe(1);
    //ask about test setup. before each.
    expect(recipe.id).to.equal(1)
  });

  it('should have an image', function() {
    const recipe = new Recipe(1, "https://spoonacular.com/recipeImages/595736-556x370.jpg");
    //create a var for the image to clean up code?
    expect(recipe.image).to.be.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have ingredients for the recipe', function() {
    const recipe = new Recipe(
      1, 
      "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      [{
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      }]);
    expect(recipe.ingredients).to.deep.equal([{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }}]);
  });
  it('should have instructions for a recipe', function() {
    const recipe = new Recipe(
      1, 
      "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      [{
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      }],
      [{
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      }]);
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
    const recipe = new Recipe(
      1, 
      "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      [{
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      }],
      [{
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      }],
      "Dirty Steve's Original Wing Sauce");
    expect(recipe.name).to.equal("Dirty Steve's Original Wing Sauce");
  }); 
});