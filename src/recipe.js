class Recipe {
  constructor(id, image, ingredients, instructions, name) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}