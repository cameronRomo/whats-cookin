const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');

describe('User', function() {

  let user;
  beforeEach(() => {
    user = new User();
  })

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should contain a User\'s favorite recipes', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should contain a User\s recipes to cook', function() {
    expect(user.recipesToCook).to.deep.equal([]);
  });

});

describe('User Methods', function() {

  let user;
  let recipe1;
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
  let recipeArray;

  beforeEach(() => {
    recipe1 = new Recipe(id, image, ingredients, instructions, name, tags);
    user = new User();
    recipeArray = [recipe1];
  });
  it('should be able to favorite a recipe', function() {
    user.addToFavoriteRecipes(recipe1);
    expect(user.favoriteRecipes).to.deep.equal(recipeArray);
  });
  //add tests for favoritedRecipe true/false
  it('should remove a favorite recipe if unfavorited', function() {
    recipe1.favoritedRecipe = true;
    user.addToFavoriteRecipes(recipe1);
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should add a recipe to cook for the week', function() {
    user.addRecipeToCook(recipe1);
    expect(user.recipesToCook).to.deep.equal(recipeArray);
  });
  //waiting for John Adams
  // it('should be able to filter favoriteRecipes by tag', function() {
  //   expect(user.filterUserRecipe(user.favoriteRecipes, "sauce")).to.deep.equal(recipeArray);
  // });
  // it('should be able to filter recipesToCook by tag', function() {
  //   expect(user.filterUserRecipe(user.favoriteRecipes, "sauce")).to.deep.equal(recipeArray);
  // });
  it.skip('should be able to search recipes to cook by ingredient', function() {
    user.addRecipeToCook(recipe1);
    let search = user.searchUserRecipes("sauce");
    expect(search).to.deep.equal(recipeArray);
  });
});
