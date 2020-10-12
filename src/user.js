class User {
  constructor() {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  } 
}

if (typeof module !== 'undefined') {
  module.exports = User;
}