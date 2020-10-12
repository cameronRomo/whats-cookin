const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

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