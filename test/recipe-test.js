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
});