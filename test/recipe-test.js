const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');

describe('Recipe', function() {

  let recipe;
  beforeEach() {
    recipe = new Recipe();
  }

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });
});